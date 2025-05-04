import { createAsyncThunk } from '@reduxjs/toolkit';
import { isErrorWithValue } from 'Common/Helpers/Redux';
import { get } from 'Common/HttpClient';
import { HTTP_CLIENT } from 'Entry/Consts';
import { IThunkApiConfig } from 'Entry/Store';
import { IBalanceInfo } from 'Modules/User/Modules/Balance/Models';
import { BALANCE_NAMESPACE } from 'Modules/User/Modules/Balance/Redux/Consts';

/** Экшен получения данных пользователя. */
export const getUserDetails = createAsyncThunk<IBalanceInfo, string, IThunkApiConfig>(
    `${BALANCE_NAMESPACE}_GET_DETAILS`,

    async (userId, { rejectWithValue }) => {
        try {
            return await get(`${HTTP_CLIENT}/user/info?user_id=${userId}`);
        } catch (error) {
            if (isErrorWithValue(error)) {
                return rejectWithValue(error);
            }

            throw error;
        }
    }
);