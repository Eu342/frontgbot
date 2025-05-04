import { createAsyncThunk } from '@reduxjs/toolkit';
import { PAYMENT_NAMESPACE } from '../Consts';
import { HTTP_CLIENT } from 'Entry/Consts';
import { post } from 'Common/HttpClient';
import { IThunkApiConfig } from 'Entry/Store';
import { isErrorWithValue } from 'Common/Helpers/Redux';
import { TCurrencyResponse } from 'Modules/User/Modules/Payment/Redux/Currency/Reducer';
import { settingSelector } from 'Entry/Redux/Settings/Selectors';

/** Экшен получения списка сумм. */
export const getAmountListAction = createAsyncThunk<TCurrencyResponse, undefined, IThunkApiConfig>(
    `${PAYMENT_NAMESPACE}_GET_AMOUNT_LIST`,
    async (_, { getState, rejectWithValue }) => {
        const { userId } = settingSelector(getState());

        try {
            return await post(`${HTTP_CLIENT}/payment/tariff?user_id=${userId}`);
        } catch (error) {
            if (isErrorWithValue(error)) {
                return rejectWithValue(error);
            }

            throw error;
        }
    }
);