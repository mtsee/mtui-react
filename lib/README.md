# MTUI2.0 UI React

demo地址：[mtui] components build with React.

基于 React 封装的 Web 组件库。

npm地址：[npm](https://www.npmjs.com/package/mtui)  [Node V6.9.5]  [React V15+] 

## 使用

### npm安装使用

- 安装使用
  ```
  npm install mtui
  ```

```javascript

  import 'mtui/style.css';
  import {DatePicker} from 'mtui/index';

  ReactDOM.render(<DatePicker format="yyyy-mm-dd"/>, mountNode);

```   

## 开发及构建

### 目录结构
```
├── package.json
├── build         # 生成目录
├── dev           # 源文件目录 
├── dev/mtui      # 组件库目录 
└── lib           # npm 包构建目录
```

### 开发

使用之前先安装相关依赖：
```
npm install webpack -g
npm install
```
- 开发
  ```
  npm start
  ```
- 构建
  ```
  npm run build
  ```
[mtui]: http://mtui.h5ds.com/
