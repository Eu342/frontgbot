import {  createAsyncThunk } from '@reduxjs/toolkit';
import { PAYMENT_NAMESPACE } from '../Consts';
import { SchemaObject } from 'ajv';
import { TError } from 'Common/Validation/Models';
import get from 'lodash/get';
import ajv from 'Common/Validation';
import { getAjvErrors } from 'Common/Validation/Utils';
import { paymentStateSelector } from '../State/Selectors';
import { errorsStateSelector } from './Selectors';
import unset  from 'lodash/unset';
import has  from 'lodash/has';
import { IThunkApiConfig } from 'Entry/Store';
import { isErrorWithValue } from 'Common/Helpers/Redux';

/** Экшен валидации. */
export const validate = createAsyncThunk<TError, {key?: string, schema: SchemaObject}, IThunkApiConfig>(
    `${PAYMENT_NAMESPACE}_VALIDATE`,
    ({ key, schema }, { getState, rejectWithValue }) => {
        try {
            const state = getState();
            const formState = paymentStateSelector(state);
            const errors = errorsStateSelector(state);

            const value = key ? get(formState, key) : formState;

            ajv.validate(schema, value);

            const ajvErrors = getAjvErrors(ajv.errors, key);

            if (!key) {
                return ajvErrors;
            }

            const result = { ...ajvErrors, ...errors };

            if (has(errors, key) && !has(ajvErrors, key)) {
                unset(result, key);
            }

            return result as TError;
        } catch (error) {
            if (isErrorWithValue(error)) {
                return rejectWithValue(error);
            }
            
            throw error;
        }
    }
);