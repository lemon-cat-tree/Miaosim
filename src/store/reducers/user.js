import { handleActions } from 'redux-actions'
import { SET_USER, CLEAR_USER, UPDATE_USER_INFO } from '../types/user'

const initialState = {
    token: '',
    role: '',
    info: {},
    isAuthenticated: false
}

export default handleActions({
    [SET_USER](state, action) {
        return {
            ...state,
            token: action.payload.token,
            role: action.payload.role,
            info: action.payload.info,
            isAuthenticated: true
        }
    },
    [CLEAR_USER](state) {
        return {
            ...initialState
        }
    },
    [UPDATE_USER_INFO](state, action) {
        return {
            ...state,
            info: {
                ...state.info,
                ...action.payload
            }
        }
    }
}, initialState)