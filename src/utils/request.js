// 封装微信小程序网络请求
export const request = (options) => {
    // 后端基础域名（后期替换为你的真实地址）
    const baseUrl = 'https://api.your-domain.com/cat-rescue';

    return new Promise((resolve, reject) => {
        wx.showLoading({ title: '加载中...' });
        wx.request({
            url: baseUrl + options.url,
            method: options.method || 'GET',
            data: options.data || {},
            header: {
                'Content-Type': 'application/json'
            },
            success: (res) => {
                wx.hideLoading();
                if (res.data.code === 200) {
                    resolve(res.data.data);
                } else {
                    wx.showToast({ title: res.data.msg || '请求失败', icon: 'none' });
                    reject(res.data);
                }
            },
            fail: (err) => {
                wx.hideLoading();
                wx.showToast({ title: '网络异常，请重试', icon: 'none' });
                reject(err);
            }
        });
    });
};