import * as Action from './transactionActions'
import { authHeader } from "../constants/authHeader";
import axios from "axios";
import { message } from 'antd'

export const actCreatingTransaction = infoToCreate => {
    return dispatch => {
        return axios.post("http://localhost:3001/transaction/create", infoToCreate, { headers: authHeader() })
            .then(res => {
                dispatch(Action.actCreateTransaction(res.data.transaction));
            })
            .catch(error => {
                message.error(`Có lỗi xảy ra: ${error}`)
            })
    };
};

