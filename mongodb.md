# Mongodb
  * [Mongodb 官方文件](https://mongodb.github.io/node-mongodb-native/)
  * Mongodb 的 SaaS 服務[mlab](https://mlab.com/)
  * [課程教學文件](./mongodb.md)

## 安裝
```
npm install mongodb --save
```

## 建立連線
```javascript
const MongoClient = require('mongodb').MongoClient;
// Connect to the db mongodb://<user>:<password>@<host>:<port>/<databasename>
MongoClient.connect(
  "mongodb://ggm:ntucsie123@ds117758.mlab.com:17758/chatbot-2018",
  function(err, client) {
    if (err) {
      return console.dir(err);
    }
    db = client.db('chatbot-2018');
  }
);
```

## 建立資料
```javascript
let collection = db.collection('test');
let doc1 = {'hello':'doc1'};
let doc2 = {'hello':'doc2'};
let lotsOfDocs = [{'hello':'doc3'}, {'hello':'doc4'}];

collection.insert(doc1);
collection.insert(doc2, {w:1}, function(err, result) {});
collection.insert(lotsOfDocs, {w:1}, function(err, result) {});
```

## 取得資料，使用 CURSOR
```javascript
let collection = db.collection('test');
let cursor = collection.find({}); 
cursor.nextObject((err, item) => {
  console.log(item)
})
collection.find({}, (err, cursor) => {
  cursor.nextObject((err, item) => {
    console.log(item)
  })
})
```

## 取得資料，使用 toArray
```javascript
let collection = db.collection('test');

collection.find({}).toArray((err, results) => {
  console.log(results)
});
```
