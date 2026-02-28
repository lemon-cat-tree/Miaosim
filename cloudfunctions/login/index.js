// cloudfunctions/login/index.js
const cloud = require('wx-server-sdk')
cloud.init()

exports.main = async (event, context) => {
    const { username, password } = event

    // 模拟用户验证
    let user = null
    if (username === 'admin' && password === 'admin123') {
        user = {
            _id: 'user_1',
            username: 'admin',
            nickname: '管理员',
            role: 'admin',
            avatar: '/static/images/admin-avatar.png',
            phone: '13800138000'
        }
    } else if (username === 'member1' && password === 'member123') {
        user = {
            _id: 'user_2',
            username: 'member1',
            nickname: '救助组织成员',
            role: 'member',
            avatar: '/static/images/member-avatar.png',
            phone: '13900139000'
        }
    } else if (username === 'user1' && password === 'user123') {
        user = {
            _id: 'user_3',
            username: 'user1',
            nickname: '普通用户',
            role: 'user',
            avatar: '/static/images/user-avatar.png',
            phone: '13700137000'
        }
    }

    if (user) {
        return {
            code: 200,
            data: {
                token: `token_${user._id}`,
                user: user
            }
        }
    } else {
        return {
            code: 401,
            message: '账号或密码错误'
        }
    }
}