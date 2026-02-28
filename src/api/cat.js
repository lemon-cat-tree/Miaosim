import request from '../utils/request'

// 获取猫猫列表
export function getCatList(params) {
    return request('/cats', { data: params })
}

// 获取猫猫详情
export function getCatDetail(id) {
    return request(`/cats/${id}`)
}

// 添加猫猫（管理员/成员）
export function addCat(data) {
    return request('/cats', { method: 'POST', data })
}

// 更新猫猫
export function updateCat(id, data) {
    return request(`/cats/${id}`, { method: 'PUT', data })
}

// 删除猫猫
export function deleteCat(id) {
    return request(`/cats/${id}`, { method: 'DELETE' })
}