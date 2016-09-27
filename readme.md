
npm start 開発用
npm run build 本番用 js,cssmin 

ディレクトリ構成(spaの最小構成)
index.html
-js/bundle.js
-css/app.css

基本webpackのdev-serverで作業
この時コンパイルfileはメモリーへと書き出されるため
実ファイルは書き出されない

本番用コマンドを叩くことにより
コンパイルされる

このプロジェクトではurl-loaderを使用するので
画像は全てdata-uriとして扱う
通常の画像として扱う場合はimageのminifyは
npm scriptから叩く
file-loaderがcssの画像を吐かないため


