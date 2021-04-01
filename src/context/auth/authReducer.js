import { types } from "../../types/types";



export const authReducer = ( state = {}, action ) => {
    switch ( action.type ) {
        case types.login:
            return {
                logged: true,
            }
        
        case types.logout:
            localStorage.clear();
            return {
                logged: false,
            }

        default:
            return state;
    }
};