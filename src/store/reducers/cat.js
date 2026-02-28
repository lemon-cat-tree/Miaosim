import { handleActions } from 'redux-actions';
import * as types from '../types/cat';

const initialState = {
    list: [],
    loading: false,
    error: null,
    total: 0,
    page: 1,
    pageSize: 10
};

export default handleActions({
    [types.FETCH_CAT_LIST_REQUEST](state) {
        return {
            ...state,
            loading: true,
            error: null
        };
    },
    [types.FETCH_CAT_LIST_SUCCESS](state, action) {
        return {
            ...state,
            loading: false,
            list: action.payload.data || [],
            total: action.payload.total || 0,
            page: action.payload.page || 1,
            pageSize: action.payload.pageSize || 10
        };
    },
    [types.FETCH_CAT_LIST_FAILURE](state, action) {
        return {
            ...state,
            loading: false,
            error: action.payload
        };
    },
    [types.ADD_CAT_REQUEST](state) {
        return {
            ...state,
            loading: true,
            error: null
        };
    },
    [types.ADD_CAT_SUCCESS](state, action) {
        return {
            ...state,
            loading: false,
            // 添加新猫猫到列表中
            list: [action.payload, ...state.list]
        };
    },
    [types.ADD_CAT_FAILURE](state, action) {
        return {
            ...state,
            loading: false,
            error: action.payload
        };
    },
    [types.EDIT_CAT_REQUEST](state) {
        return {
            ...state,
            loading: true,
            error: null
        };
    },
    [types.EDIT_CAT_SUCCESS](state, action) {
        // 更新列表中的对应项
        const updatedList = state.list.map(item =>
            item.id === action.payload.id ? { ...item, ...action.payload } : item
        );
        return {
            ...state,
            loading: false,
            list: updatedList
        };
    },
    [types.EDIT_CAT_FAILURE](state, action) {
        return {
            ...state,
            loading: false,
            error: action.payload
        };
    }
}, initialState);