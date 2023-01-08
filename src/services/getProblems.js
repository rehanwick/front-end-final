import axios from "axios" ; 
import config from "@/config";

import { successHandler , errorHandler } from "./helper" ; 

export const fetchProblems =() => {
    return axios.get(`${config.apiBaseUrl}/problems`)
                .then( successHandler )
                .catch( errorHandler ) ; 
}

export const fetchProblemById =(id)=>{
  return axios.get(`${config.apiBaseUrl}/problems/${id}`)
              .then(successHandler)
              .catch(errorHandler)
} 