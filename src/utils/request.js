// 封装微信小程序云函数请求
export const cloudRequest = (functionName, data = {}) => {
    return new Promise((resolve, reject) => {
        // 添加错误处理和loading控制
        try {
            wx.showLoading({ title: '处理中...' });

            wx.cloud.callFunction({
                name: functionName,
                data: data,
                success: (res) => {
                    wx.hideLoading();
                    if (res.result && res.result.code === 200) {
                        resolve(res.result.data);
                    } else {
                        const errorMessage = res.result?.message || `调用${functionName}失败`;
                        wx.showToast({ title: errorMessage, icon: 'none' });
                        reject(new Error(errorMessage));
                    }
                },
                fail: (err) => {
                    wx.hideLoading();
                    console.error(`云函数 ${functionName} 调用失败:`, err);
                    wx.showToast({ title: '网络请求失败，请重试', icon: 'none' });
                    reject(err);
                }
            });
        } catch (error) {
            wx.hideLoading();
            console.error('云函数调用异常:', error);
            wx.showToast({ title: '系统异常，请重试', icon: 'none' });
            reject(error);
        }
    });
};

// 封装微信小程序原生request请求（用于HTTP API调用）
export const request = ({ url, method = 'GET', data = {}, header = {} }) => {
    return new Promise((resolve, reject) => {
        try {
            wx.request({
                url: url,
                method: method,
                data: data,
                header: {
                    'Content-Type': 'application/json',
                    ...header
                },
                success: (res) => {
                    if (res.statusCode === 200) {
                        resolve(res.data);
                    } else {
                        const errorMessage = res.data?.message || `请求失败(${res.statusCode})`;
                        wx.showToast({ title: errorMessage, icon: 'none' });
                        reject(new Error(errorMessage));
                    }
                },
                fail: (err) => {
                    console.error('网络请求失败:', err);
                    wx.showToast({ title: '网络请求失败，请检查网络', icon: 'none' });
                    reject(err);
                }
            });
        } catch (error) {
            console.error('请求异常:', error);
            wx.showToast({ title: '系统异常，请重试', icon: 'none' });
            reject(error);
        }
    });
};

// 导出默认对象，兼容原有代码
export default {
    cloudRequest,
    request
};