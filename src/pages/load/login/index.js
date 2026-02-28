// index.js
Page({
    data: {
        username: '',
        password: '',
        showLogoPlaceholder: false
    },

    onUsernameInput(e) {
        this.setData({
            username: e.detail.value
        })
    },

    onPasswordInput(e) {
        this.setData({
            password: e.detail.value
        })
    },

    onImageError() {
        this.setData({
            showLogoPlaceholder: true
        })
    },

    doLogin() {
        if (!this.data.username || !this.data.password) {
            wx.showToast({ title: '请填写完整', icon: 'none' })
            return
        }

        wx.showLoading({ title: '登录中' })

        // 模拟登录逻辑
        setTimeout(() => {
            wx.hideLoading()
            wx.showToast({ title: '登录成功', icon: 'success' })
            setTimeout(() => {
                wx.switchTab({ url: '/pages/home/index' })
            }, 1500)
        }, 1000)
    },

    goToRegister() {
        wx.navigateTo({ url: '/pages/load/register/index' })
    },

    goToForget() {
        wx.navigateTo({ url: '/pages/load/forget-password/index' })
    }
})