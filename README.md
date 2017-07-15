# 環境設定
## 安裝 Nodejs
  * 請到 Nodejs 官網 [https://nodejs.org/en/download/](https://nodejs.org/en/download/) 下載並安裝。

## 安裝編輯器
  * 推薦使用 [Visual Studio Code](https://code.visualstudio.com/) 或 [Sublime Text](https://www.sublimetext.com/)
## 註冊帳號
  * 到 [github](https://www.github.com) 註冊帳號
    * 使用 [github desktop](https://desktop.github.com/) 管理與發佈程式碼 
  * 到 [heroku](https://www.heroku.com) 註冊帳號
  * 到 [facebook developers](https://developers.facebook.com) 申請成開發者帳號
  * 到 [codeanywhere](https://codeanywhere.com/) 註冊帳號，可以免環境設定

# 建立簡易伺服器
## [Express](https://expressjs.com/) 
用來做後端伺服器的框架。範例檔案[連結](https://github.com/ntu-csie-train/chatbot-class/examples/express)
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
用來處理 HTTP 呼叫的套件。範例檔案[連結](https://github.com/ntu-csie-train/chatbot-class/examples/request)
```javascript
var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
```


## [Heroku](https://www.heroku.com)
用以部署程式碼，並運行程式碼。