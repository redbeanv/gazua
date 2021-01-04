// https://docs.upbit.com/
const request = require('request');
const uuidv4 = require("uuid/v4");
const sign = require('jsonwebtoken').sign;
const fetch = require('node-fetch');
const CONST = require('./src/const');
const KEY = require('./src/secret');
const Market = require('./src/module/market');

/** 내 자산 조회*/
// const.js payload = {
//   access_key: KEY.ACCESS_KEY,
//   nonce: uuidv4(),
// };
//
// const.js token = sign(payload, KEY.SECRET_KEY);
//
// const.js options = {
//   method: "GET",
//   url: server_url + "/v1/accounts",
//   headers: {Authorization: `Bearer ${token}`},
// };
//
// request(options, (error, response, body) => {
//   if (error) throw new Error(error);
//   console.log(body)
// });


/** 전체 마켓 코드 조회 */
async function getKrwMarketCode(isDetails = 'false') {
  let url = `${CONST.SERVER_URL}/v1/market/all`;

  if (isDetails && (isDetails === 'true' || isDetails === 'false')) {
    url = `${url}?isDetails=${isDetails}`
  }

  const res = await fetch(url);
  const resData = await res.json();
  if (res.ok) {
    return resData
      .filter(marketObj => marketObj.market.includes('KRW'))
      .map(krwMargetObj => {
        delete krwMargetObj.english_name
        return krwMargetObj
      })
  } else {
    throw Error(resData)
  }
}

/** 캔들 조회 */
async function getCandleInfo(market = 'KRW-BTC') {
  let url = `${CONST.SERVER_URL}/v1/candles/minutes/1?market=${market}`;

  const res = await fetch(url);
  const resData = await res.json();
  // console.log(resData)
  if (res.ok) {
    return resData
  } else {
    throw Error(resData)
  }
}

/** 티커 조회 */
async function getTickerInfo(market = 'KRW-BTC') {
  let url = `${CONST.SERVER_URL}/v1/ticker?markets=${market}`;

  const res = await fetch(url);
  const resData = await res.json();
  // console.log(resData);
  if (res.ok) {
    return resData
  } else {
    throw Error(resData)
  }
}

let test = [];
getKrwMarketCode()
  .then(marketInfoList => {
    const marketCodeList = marketInfoList.map(v => v.market);

    // TODO: 10개 정도씩 끊어서 fetch 해야할듯 우선은 btc로만 진행
    getTickerInfo(marketCodeList).then(marketTickerList => {
      console.log(marketTickerList)
      let marketData;
      marketTickerList.map(tickerInfo => {
        marketData = new Market(tickerInfo.market, tickerInfo.trade_date);
        test.push({marketName: marketData.market, ticker: marketData})
      });
    });
  });

setTimeout(() => {
  console.log(test)
}, 1000)