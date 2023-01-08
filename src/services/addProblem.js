import axios from 'axios' ; 
import config from '@/config';
import { successHandler , errorHandler } from './helper'

export const addProblemSer = (problem) => {
        return axios.post(
            `${config.apiBaseUrl}/problems/addproblem`,
            problem , 
            {
                headers:{
                    'Content-Type':'application/json'
                }
            }
        )
        .then(successHandler)
        .catch(errorHandler); 
}