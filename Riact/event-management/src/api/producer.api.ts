import axios from 'axios';
import { Producer } from '../types/producer';

const serverInstance = axios.create({
    baseURL: 'http://localhost:5173',    
})

export const getProducers = async () => {
    const result = await serverInstance.get<Producer[]>('/producer');
    return result.data
}

export const addProducer = async(producer: Producer) => {
    const result = await serverInstance.post<Producer>('/producers', producer);
    return result.data;
}