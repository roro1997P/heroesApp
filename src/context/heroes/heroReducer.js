import { types } from "../../types/types";

export const heroReducer = ( state = [], action ) => {

    switch ( action.type ) {

        case types.addHero:
            return [
                ...state,
                action.payload,
            ];

        default:
            return state;
    }
};