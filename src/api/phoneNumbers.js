import axios from './axios'

export const getPhoneNumbersRequest = () => axios.get('/phoneNumber/list')
export const getPhoneNumberRequest = (_id) => axios.get(`/phoneNumber/list/${_id}`)
export const createPhoneNumberRequest = (phoneNumber) => axios.post('/phoneNumber/add', phoneNumber)
export const updatePhoneNumberRequest = (_id, phoneNumber) => axios.put(`/phoneNumber/update/${_id}`, phoneNumber)
export const deletePhoneNumberRequest = (id) => axios.delete(`/phoneNumber/delete/${id}`)