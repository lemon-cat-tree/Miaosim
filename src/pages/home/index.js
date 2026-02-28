// index.js
Page({
    data: {
        userRole: 'guest' // 默认角色
    },

    onLoad() {
        // 可以在这里检查用户登录状态
        console.log('首页加载')
    },

    goTo(e) {
        const url = e.currentTarget.dataset.url
        if (url) {
            wx.navigateTo({
                url: url
            })
        }
    }
})