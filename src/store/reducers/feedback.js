import { handleActions } from 'redux-actions';
import * as types from '../types/feedback';

const initialState = {
    list: [],
    loading: false,
    error: null,
    total: 0,
    page: 1,
    pageSize: 10
};

export default handleActions({
    [types.FETCH_FEEDBACK_LIST_REQUEST](state) {
        return {
            ...state,
            loading: true,
            error: null
        };
    },
    [types.FETCH_FEEDBACK_LIST_SUCCESS](state, action) {
        return {
            ...state,
            loading: false,
            list: action.payload.data || [],
            total: action.payload.total || 0,
            page: action.payload.page || 1,
            pageSize: action.payload.pageSize || 10
        };
    },
    [types.FETCH_FEEDBACK_LIST_FAILURE](state, action) {
        return {
            ...state,
            loading: false,
            error: action.payload
        };
    },
    [types.SUBMIT_FEEDBACK_REQUEST](state) {
        return {
            ...state,
            loading: true,
            error: null
        };
    },
    [types.SUBMIT_FEEDBACK_SUCCESS](state, action) {
        return {
            ...state,
            loading: false,
            // 添加新反馈到列表中
            list: [action.payload, ...state.list]
        };
    },
    [types.SUBMIT_FEEDBACK_FAILURE](state, action) {
        return {
            ...state,
            loading: false,
            error: action.payload
        };
    },
    [types.REPLY_FEEDBACK_REQUEST](state) {
        return {
            ...state,
            loading: true,
            error: null
        };
    },
    [types.REPLY_FEEDBACK_SUCCESS](state, action) {
        // 更新列表中的对应项
        const updatedList = state.list.map(item =>
            item.id === action.payload.id ? { ...item, reply: action.payload.reply } : item
        );
        return {
            ...state,
            loading: false,
            list: updatedList
        };
    },
    [types.REPLY_FEEDBACK_FAILURE](state, action) {
        return {
            ...state,
            loading: false,
            error: action.payload
        };
    }
}, initialState);