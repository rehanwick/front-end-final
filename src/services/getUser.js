import axios  from "axios";
import config from '@/config';
import { successHandler, errorHandler } from './helper';

export const fetchUsers = () => {
    return axios.get( `${config.apiBaseUrl}` )
                .then( successHandler )
                .catch( errorHandler );
}

export const fetchUserProfile = (email) => {
    return axios.get( `${config.apiBaseUrl}/profile/${email}` )
                .then( successHandler )
                .catch( errorHandler );
}