import axios from 'axios'
import * as config from '../../constants/Config'
import { authCompany } from "../../constants/Company/authCompany";
export const adminService ={
    addAccount,
    changePasswordCompany,
    resetPasswordCompany,
    changeLockEmployee,
    editEmployee,
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
function changePasswordCompany(data) {
    return new Promise((resolve,reject) => {
        axios.post(`${config.API_URL}/company/changepassword`, data, { headers: authCompany() })
        .then(res => {
            if(res.data.status === 200) {
                resolve(res.data);
            } else {
                reject(res.data)
            } 
        })
        .catch(err => reject(err.response))
    });
}

function resetPasswordCompany(data){
    return new Promise((resolve,reject) => {
        axios.post(`${config.API_URL}/company/resetpassword`, data)
        .then(res => {
            if(res.data.status === 200) {
                resolve(res.data);
            } else {
                reject(res.data)
            } 
        })
        .catch(err => reject(err.response))
    });
}

function changeLockEmployee(data){
    return new Promise((resolve,reject) => {
        axios.post(`${config.API_URL}/company/changeLockEmployee`, data, { headers: authCompany() })
        .then(res => {
            if(res.data.status === 200) {
                resolve(res.data);
            } else {
                reject(res.data)
            } 
        })
        .catch(err => reject(err.response))
    });
}

function editEmployee(data){
    return new Promise((resolve,reject) => {
        axios.post(`${config.API_URL}/company/editemployee`, data, { headers: authCompany() })
        .then(res => {
            if(res.data.status === 200) {
                resolve(res.data);
            } else {
                reject(res.data)
            } 
        })
        .catch(err => reject(err.response))
    });
}
