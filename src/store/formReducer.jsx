import { 
    EDUCATION_TYPE, 
    NUMBER_TYPE, 
    QUALIFY_TYPE, 
    SEARCH_TYPE, 
    SERIES_TYPE, 
    SPECIAL_TYPE, 
    YEAR_TYPE } 
from "../types";

const initialState = {
    education: '',
    year: 0,
    searchState: '',
    series: '',
    number: '',
    special: '',
    qualify: '',
}

export const formReducer = (state = initialState , action) => {
    switch (action.type) {
        case EDUCATION_TYPE:
            return {
                ...state,
                education: action.payload
            }
        case YEAR_TYPE:
            return {
                ...state,
                year: action.payload
            }
        case SEARCH_TYPE:
            return {
                ...state,
                searchState: action.payload
            }
        case SERIES_TYPE:
            return {
                ...state,
                series: action.payload
            }
        case NUMBER_TYPE:
            return {
                ...state,
                number: action.payload
            }
        case SPECIAL_TYPE:
            return {
                ...state,
                special: action.payload
            }
        case QUALIFY_TYPE:
                return {
                    ...state,
                    qualify: action.payload
                }
        default:
            return state;
    }
}