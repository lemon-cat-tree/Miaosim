import { createAction } from 'redux-actions'
import { SET_USER, CLEAR_USER, UPDATE_USER_INFO } from '../types/user'

export const setUser = createAction(SET_USER)
export const clearUser = createAction(CLEAR_USER)
export const updateUserInfo = createAction(UPDATE_USER_INFO)