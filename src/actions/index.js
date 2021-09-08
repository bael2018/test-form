import { 
    EDUCATION_TYPE, 
    NUMBER_TYPE, 
    QUALIFY_TYPE, 
    SEARCH_TYPE, 
    SERIES_TYPE, 
    SPECIAL_TYPE, 
    YEAR_TYPE 
} from "../types"

export const educationAction = payload => {
    return {
        type: EDUCATION_TYPE,
        payload
    }
}

export const yearAction = payload => {
    return {
        type: YEAR_TYPE,
        payload
    }
}

export const searchAction = payload => {
    return {
        type: SEARCH_TYPE,
        payload
    }
}

export const seriesAction = payload => {
    return {
        type: SERIES_TYPE,
        payload
    }
}

export const numberAction = payload => {
    return {
        type: NUMBER_TYPE,
        payload
    }
}

export const specialAction = payload => {
    return {
        type: SPECIAL_TYPE,
        payload
    }
}

export const qualifyAction = payload => {
    return {
        type: QUALIFY_TYPE,
        payload
    }
}