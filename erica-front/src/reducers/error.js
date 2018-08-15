const initialState = {
    text: '',
    open: false
}
  
const loading = (state = initialState, action) => {
    switch (action.type) {
        case 'ERROR_MESSAGE':
            return {
                text: action.text,
                open: action.bool
            }

        default:
            return state
    }
}
  
export default loading
  