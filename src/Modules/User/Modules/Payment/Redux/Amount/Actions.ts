import { createAsyncThunk } from '@reduxjs/toolkit';
import { PAYMENT_NAMESPACE } from '../Consts';
import { HTTP_CLIENT } from 'Entry/Consts';
import { paymentStateSelector } from '../State/Selectors';
import { IAmountRequest } from './Reducer';
import { post } from 'Common/HttpClient';
import { IThunkApiConfig } from 'Entry/Store';
import { isErrorWithValue } from 'Common/Helpers/Redux';
import { settingSelector } from 'Entry/Redux/Settings/Selectors';

/** Экшен получения ссылки на страницу оплаты. */
export const getPaymentLink = createAsyncThunk<string, undefined, IThunkApiConfig>(
    `${PAYMENT_NAMESPACE}_GET_PAYMENT_LINK`,

    async (_, { getState, rejectWithValue }) => {
        const { userId = '' } = settingSelector(getState());
        const { amount, currency  } = paymentStateSelector(getState());

        const data: Partial<IAmountRequest> = {
            user_id: parseFloat(userId),
            amount,
            currency
        };

        try {
            return await post<Partial<IAmountRequest>, string>(`${HTTP_CLIENT}/payment/create`, data);
        } catch (error) {
            if (isErrorWithValue(error)) {
                return rejectWithValue(error);
            }

            throw error;
        }
    }
);