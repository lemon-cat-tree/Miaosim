const path = require('path');
var prod = process.env.NODE_ENV === 'production';

module.exports = {
  // 小程序编译配置
  target: 'Weapp',
  output: 'dist',
  entry: 'src/app.wpy',
  pages: [
    'pages/load/login/index',
    'pages/adopt-apply/manage',
    'pages/adopt-apply/submit',
    'pages/cat-info/detail',
    'pages/cat-info/index',
    'pages/dynamic/list',
    'pages/dynamic/publish',
    'pages/feedback/manage',
    'pages/feedback/submit',
    'pages/load/forget-password/index',
    'pages/home/index',
    'pages/mine/index',
    'pages/load/register/index',
    'pages/load/login/index',
    'pages/rescue-info/list',
    'pages/rescue-info/publish',
    'pages/rescue-status/index',
    'pages/volunteer-apply/manage',
    'pages/volunteer-apply/submit'
  ],
  wpyExt: '.wpy',
  eslint: false,
  cliLogs: !prod,
  resolve: {
    alias: {
      counter: path.join(__dirname, 'src/components/counter'),
      '@': path.join(__dirname, 'src')
    },
    aliasFields: ['wepy', 'weapp'],
    modules: ['node_modules']
  },
  compilers: {
    less: {
      compress: prod
    },
    /*sass: {
      outputStyle: 'compressed'
    },*/
    babel: {
      sourceMap: true,
      presets: [
        'env'
      ],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread',
        'transform-export-extensions',
      ]
    }
  },
  plugins: {
    // uglifyjs: {
    //   filter: /\.js$/,
    //   config: {
    //   }
    // },
  },
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
}

if (prod) {

  // 压缩sass
  // module.exports.compilers['sass'] = {outputStyle: 'compressed'}

  // 压缩js
  module.exports.plugins = {
    uglifyjs: {
      filter: /\.js$/,
      config: {
      }
    },
    imagemin: {
      filter: /\.(jpg|png|jpeg)$/,
      config: {
        jpg: {
          quality: 80
        },
        png: {
          quality: 80
        }
      }
    }
  }
}
