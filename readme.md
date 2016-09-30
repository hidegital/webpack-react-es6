#react + webpack spa boilerplate

###コマンド
npm start 開発用
npm run build 本番用 js,cssmin 

###ディレクトリ構成(spaの最小構成)
- index.html
- js/bundle.js
- css/app.css

###補足
基本webpackのdev-serverで作業
この時コンパイルfileはメモリーへと書き出されるため
実ファイルは書き出されない

本番用コマンドを叩くことにより
コンパイルされる

###画像
このプロジェクトではurl-loaderを使用するので
画像は全てdata-uriとして扱う
通常の画像として扱う場合はimageのminifyは
npm scriptから叩く
file-loader,url-loaderのオプションで実画像として扱えるが
その場合loader自体必要無さそう

###ajax
定番らしいのでsuperagentを使用
https://github.com/visionmedia/superagent


###js
####jsx
index.jsxでは
各pageのwrap用のcomponents + routing
各ページで使用するcomponentsは全て分ける

- js
    - index.jsx
    - compoents
        header.jsx
        footer.jsx
        - pagename
            - hogehoge.jsx
####plugin
modal react-modal
routing react-router

###メタタグ
react-document-metaを使用して
各pageのwrap用のcomponentsに記述

###プレビュー
実機でのプレビューがwebpack