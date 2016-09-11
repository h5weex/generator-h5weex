# h5weex generator


> Yeoman generator for h5weex project - lets you quickly set up a project with sensible defaults and best practices.

**构建成功后的工程目录结构说明：**

```
|- project-name/                #项目目录
  |- src/
    |- p                        #页面
    |- c                        #组件
  |- build                      #打包后的bundle文件
  |- node_modules
  |- index.html                 #访问入口文件
  |- webpack.config.js          #打包weex代码的脚本
  |- .editorconfig
  |- .gitignore
  |- .npmrc
  |- changelog.md
  |- gulpfile.js
  |- package.json
  |- README.md

```

## Usage

Install `generator-h5weex`:
```
npm install -g generator-h5weex
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo h5weex`, optionally passing an app name:
```
yo h5weex [app-name]
```

Run `gulp build` for building and `gulp` for preview and develop


## Generators

Available generators:

* [h5weex](#app) (aka [h5weex:app](#app))
* [h5weex:p](#page)
* [h5weex:c](#component)

**Note: Generators are to be run from the root directory of your app.**
