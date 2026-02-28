import { handleActions } from 'redux-actions';
import * as types from '../types/rescue';

const initialState = {
    list: [],
    loading: false,
    error: null,
    total: 0,
    page: 1,
    pageSize: 10
};

export default handleActions({
    [types.FETCH_RESCUE_LIST_REQUEST](state) {
        return {
            ...state,
            loading: true,
            error: null
        };
    },
    [types.FETCH_RESCUE_LIST_SUCCESS](state, action) {
        return {
            ...state,
            loading: false,
            list: action.payload.data || [],
            total: action.payload.total || 0,
            page: action.payload.page || 1,
            pageSize: action.payload.pageSize || 10
        };
    },
    [types.FETCH_RESCUE_LIST_FAILURE](state, action) {
        return {
            ...state,
            loading: false,
            error: action.payload
        };
    },
    [types.PUBLISH_RESCUE_REQUEST](state) {
        return {
            ...state,
            loading: true,
            error: null
        };
    },
    [types.PUBLISH_RESCUE_SUCCESS](state, action) {
        return {
            ...state,
            loading: false,
            // 添加新救助信息到列表中
            list: [action.payload, ...state.list]
        };
    },
    [types.PUBLISH_RESCUE_FAILURE](state, action) {
        return {
            ...state,
            loading: false,
            error: action.payload
        };
    },
    [types.AUDIT_RESCUE_REQUEST](state) {
        return {
            ...state,
            loading: true,
            error: null
        };
    },
    [types.AUDIT_RESCUE_SUCCESS](state, action) {
        // 更新列表中的对应项
        const updatedList = state.list.map(item =>
            item.id === action.payload.id ? { ...item, status: action.payload.status } : item
        );
        return {
            ...state,
            loading: false,
            list: updatedList
        };
    },
    [types.AUDIT_RESCUE_FAILURE](state, action) {
        return {
            ...state,
            loading: false,
            error: action.payload
        };
    },
    [types.UPDATE_RESCUE_STATUS_REQUEST](state) {
        return {
            ...state,
            loading: true,
            error: null
        };
    },
    [types.UPDATE_RESCUE_STATUS_SUCCESS](state, action) {
        // 更新列表中的对应项
        const updatedList = state.list.map(item =>
            item.id === action.payload.id ? { ...item, status: action.payload.status } : item
        );
        return {
            ...state,
            loading: false,
            list: updatedList
        };
    },
    [types.UPDATE_RESCUE_STATUS_FAILURE](state, action) {
        return {
            ...state,
            loading: false,
            error: action.payload
        };
    }
}, initialState);