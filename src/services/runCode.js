import axios from "axios" ; 
import config from "@/config";

import { successHandler , errorHandler } from "./helper" ; 

export const runCode = (code) => {
    return axios.patch(`${config.apiBaseUrl}/problems/run` , 
                code ,
                {
                headers:{
                    'Content-Type':'application/json'
                }
            } )
                .then(successHandler) 
                .catch(errorHandler) ; 
}