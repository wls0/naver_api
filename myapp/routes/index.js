var express = require('express');
var router = express.Router();
const request = require('request');
const cheerio = require('cheerio');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render("index");
});

router.get('/api', function (req, res, next) {
  const NAVER_CLIENT_ID = 'null'
  const NAVER_CLIENT_SECRET = 'null'
  const option = {
    query: (req.query.search),
    start: 1, //검색 시작 위치
    display: 3, //가져올 이미지 갯수
    sort: 'sim', //정렬 유형 (sim:유사도)
  }

  request.get({
    uri: 'https://openapi.naver.com/v1/search/encyc?query=', //xml 요청 주소는 https://openapi.naver.com/v1/search/image.xml
    qs: option,
    headers: {
      'X-Naver-Client-Id': NAVER_CLIENT_ID,
      'X-Naver-Client-Secret': NAVER_CLIENT_SECRET
    }
  }, function (err, res, body) {
    let json = JSON.parse(body) //json으로 파싱
    console.log(json.items[2].description);
  })

});
module.exports = router;
