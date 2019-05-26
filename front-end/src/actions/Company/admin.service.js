import axios from 'axios'
import * as config from '../../constants/Config'
import { authCompany } from "../../constants/Company/authCompany";
export const adminService ={
    addAccount,
};

function addAccount(account) {
    return new Promise((resolve,reject) => {
        axios.post(`${config.API_URL}/company/addemployee`, account, { headers: authCompany() })
        .then(res => {
            if(res.data.status === 201) {
                resolve(res.data);
            } else {
                reject(res.data)
            } 
        })
        .catch(err => reject(err.response))
    });
}