import axios from './axios'

export const getPhoneNumberRequest = () => axios.get('/phoneNumber/list')
export const createPhoneNumberRequest = (phoneNumber) => axios.post('/phoneNumber/add', phoneNumber)
export const updatePhoneNumberRequest = (phoneNumber) => axios.put(`/phoneNumber/update/${phoneNumber._id}`, phoneNumber)
export const deletePhoneNumberRequest = (id) => axios.delete(`/phoneNumber/delete/${id}`)