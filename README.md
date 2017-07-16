# 環境設定
## 安裝 Nodejs
  * 請到 Nodejs 官網 [https://nodejs.org/en/download/](https://nodejs.org/en/download/) 下載並安裝。

## 安裝編輯器
  * 推薦使用 [Visual Studio Code](https://code.visualstudio.com/) 或 [Sublime Text](https://www.sublimetext.com/)
## 註冊帳號
  * 到 [github](https://www.github.com) 註冊帳號
    * 安裝 [git-for-windows](https://git-for-windows.github.io/)
    * 使用 [github desktop](https://desktop.github.com/) 管理與發佈程式碼 
    * [git 教學](https://git-scm.com/book/zh-tw/v1/%E9%96%8B%E5%A7%8B)
  * 到 [heroku](https://www.heroku.com) 註冊帳號
  * 到 [facebook developers](https://developers.facebook.com) 申請成開發者帳號
  * 到 [codeanywhere](https://codeanywhere.com/) 註冊帳號，可以免環境設定（如果環境真得沒辦法順利設定的話）

# 建立簡易伺服器
## [Express](https://expressjs.com/) 
用來做後端伺服器的框架。範例檔案[連結](https://github.com/ntu-csie-train/chatbot-class/tree/master/examples/express)
```javascript
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
```

## [Request](https://github.com/request/request)
用來處理 HTTP 呼叫的套件。範例檔案[連結](https://github.com/ntu-csie-train/chatbot-class/tree/master/examples/request)
```javascript
const request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
```

## [Heroku](https://www.heroku.com)
用以部署程式碼，並運行程式碼。以 [echo-bot-starter](https://github.com/ntu-csie-train/echo-bot-starter) 這個專案舉例
  1. 先把 [echo-bot-starter](https://github.com/ntu-csie-train/echo-bot-starter) 這個 fork 到自己的 github 專案
  2. 把 fork 過後的專案載到自己的電腦
  ```
  $ git clone git@github.com:<你的github帳號>/echo-bot-starter.git
  ```
  3. 到 heroku 新增一個 heroku 專案
  4. 安裝 [heroku-cli](https://devcenter.heroku.com/articles/heroku-cli) 這是一個 command line 工具，可以幫助你使用 heroku
  5. 從 command line 登入 heroku
  ```bash
  $ heroku login
  ```
  6. 切換目錄到步驟 2. 的專案資料夾
  ```
  $ heroku git:remote -a <herok 的專案名稱>
  $ git push heroku master
  ```
  7. 成功後到 `https://<herok 的專案名稱>.herokuapp.com/` 的地方瀏覽網頁

## 補充資料
 ### URL 與 URI 
  * [URL Strings and URL Objects](https://nodejs.org/api/url.html)
  * [Uniform Resource Identifier](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier)