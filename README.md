# 環境設定
## 安裝 Nodejs
  * 請到 Nodejs 官網 [https://nodejs.org/en/download/](https://nodejs.org/en/download/) 下載並安裝。

## 安裝編輯器
  * 推薦使用 [Visual Studio Code](https://code.visualstudio.com/) 或 [Sublime Text](https://www.sublimetext.com/)
## 註冊帳號
  * 到 [github](https://www.github.com) 註冊帳號
    * 如果是 Windows 系統安裝 [git-for-windows](https://git-for-windows.github.io/)
    * [git 教學](https://git-scm.com/book/zh-tw/v1/%E9%96%8B%E5%A7%8B)
  * 到 [heroku](https://www.heroku.com) 註冊帳號
  * 到 [facebook developers](https://developers.facebook.com) 申請成開發者帳號

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
const request = require('request')

let address = 'Taipei 101'
let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`

request(url,
  function (error, response, body) {
    console.log('error:', error) // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode) // Print the response status code if a response was received
    console.log('body:', body) // Print the HTML for the Google homepage.
  })

```

## Mongodb
  * [Mongodb 官方文件](https://mongodb.github.io/node-mongodb-native/)
  * Mongodb 的 SaaS 服務[mlab](https://mlab.com/)
  * [課程教學文件](./mongodb.md)

## Facebook ChatBot
  * 部署 ChatBot 詳見這份[文件](./deploy_fb_chatbot.md)
  * 參考用專案 https://github.com/annonapk/facebook-messenger-echo-bot
  * [facebook-incoming-message](https://developers.facebook.com/docs/messenger-platform/webhook-reference#format)
  * [facebook-outgoing-message](https://developers.facebook.com/docs/messenger-platform/send-api-reference#request)
  * [Places Search API for Web](https://developers.facebook.com/docs/places/web/search)
  * [Private_replies](https://developers.facebook.com/docs/graph-api/reference/object/private_replies/)
  * [Facebook Messenger Platform Getting Started](https://developers.facebook.com/docs/messenger-platform/guides/setup)

## LINE ChatBot
  * 部署用專案 https://github.com/ntu-csie-train/line-echo-bot-starter
  * 參考用專案 https://github.com/annonapk/line-echo-bot-starter
  * LINE @生活圈 http://at.line.me/tw/ 
  * LINE Developers https://developers.line.me
  * LINE API send-reply-message https://developers.line.me/en/docs/messaging-api/reference/#send-reply-message
  * [LINE SDK Nodejs](https://line.github.io/line-bot-sdk-nodejs/)
  * [LINE Messaging API](https://developers.line.me/en/docs/messaging-api/reference/)
  * [LINE Rich Menu](https://developers.line.me/en/docs/messaging-api/using-rich-menus/)

## Telegram ChatBot
  * 部署用專案 https://github.com/ntu-csie-train/telegram-echo-bot-starter
  * [set-webhook](https://core.telegram.org/bots/api#setwebhook)
  * [incoming-message](https://core.telegram.org/bots/api#getting-updates)
  * [outgoing-message](https://core.telegram.org/bots/api#sendmessage)

## Google Cloud Natural Language API
  * [google developer console](https://console.developers.google.com/)

## 使用 Chatbot 分析服務
  * [Botimize](https://www.getbotimize.com/)

## 作業
  * [homework](/homework.md)

## 補充資料
 ### URL 與 URI 
  * [URL Strings and URL Objects](https://nodejs.org/api/url.html)
  * [Uniform Resource Identifier](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier)
 ### [ngrok](https://ngrok.com/)
  * 這個套件可以讓 localhost 的連結被外面連進來，而且還支援 https，適合開發 chatbot 的時候 debug

 ### [postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=zh-TW)
  * Chrome 的插件，可以用來傳送 HTTP request
 ### [Graph API Explorer](https://developers.facebook.com/tools/explorer/)
  * Facebook Graph API 的好用工具
