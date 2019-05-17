# Vue Cli3 with Vuetify & Ant Design

[Preview](https://hyunwoo.io/vue-cli3-starter/)

## Firebase Configuration Setting

src/firebaseConfig.ts

```
// change your configuration

const firebaseConfig = {
  apiKey: '[input your configuration key]',
  authDomain: '[input your configuration key]',
  databaseURL: '[input your configuration key]',
  projectId: '[input your configuration key]',
  storageBucket: '[input your configuration key]',
  messagingSenderId: '[input your configuration key]',
  appId: '[input your configuration key]'
};
export default firebaseConfig;

```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

App running at:

- Local: http://localhost:8080/vue-cli3-starter/

### Compiles and minifies for production

```
npm run build-morder
// or
npm run build
```

### Github Deploy

1. github의 repository 이름으로 **public path**를 변경한다.
   (사용자 Root Page일 경우 제외)

vue.config.js

```
module.exports = {
  ...
  publicPath: [REPOSITORY NAME],
  ...
}
```

2. github deploy command

```
npm run deploy-github
```

### Customize Ant Design Properties

vue.config.js

```
module.exports = {
  ...
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // LINK : https://github.com/vueComponent/ant-design-vue/blob/master/components/style/themes/default.less
          'link-color': '#1DA57A',
          'border-radius-base': '2px',
        },
        javascriptEnabled: true
      }
    }
  }
  ...
};
```

수정 후 반드시 server를 다시 수행 하여야 한다.
