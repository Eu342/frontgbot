import { createAsyncThunk } from '@reduxjs/toolkit';
import { PAYMENT_NAMESPACE } from '../Consts';
import { HTTP_CLIENT } from 'Entry/Consts';
import { get } from 'Common/HttpClient';
import { isErrorWithValue } from 'Common/Helpers/Redux';
import { IThunkApiConfig } from 'Entry/Store';

/** Экшен получения списка валют. */
export const getCurrencyListAction = createAsyncThunk<string[], undefined, IThunkApiConfig>(
    `${PAYMENT_NAMESPACE}_GET_CURRENCY_LIST`,
    async (_, { rejectWithValue }) => {
        try {
            return await get(`${HTTP_CLIENT}/currency/`);
        } catch (error) {
            if (isErrorWithValue(error)) {
                return rejectWithValue(error);
            }
            
            throw error;
        }
    }
);