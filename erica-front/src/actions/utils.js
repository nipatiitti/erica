export const loading = (bool) => {
    return {
        type: 'LOADING_ACTION',
        bool
    }
}

export const error = (text) => {
    return (dispatch) => {
        dispatch(ErrorMessage(text, true))

        window.setTimeout(() => {
            dispatch(ErrorMessage('', false))
        }, 4000)
    }
}

const ErrorMessage = (text, bool) => {
    return {
        type: 'ERROR_MESSAGE',
        text,
        bool
    }
}

export const baseUrl = 'http://data.foli.fi'
