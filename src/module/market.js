"use strict";
Object.defineProperty(exports, "__esModule", {value: true});

class Market {
  constructor(market, trade_date, trade_time, trade_date_kst, trade_time_kst,
              trade_timestamp, opening_price, high_price, low_price, trade_price,
              prev_closing_price, change, change_price, change_rate, signed_change_price,
              signed_change_rate, trade_volume, acc_trade_price, acc_trade_price_24h,
              acc_trade_volume, acc_trade_volume_24h, highest_52_week_price,
              highest_52_week_date, lowest_52_week_price, lowest_52_week_date, timestamp) {
    this._market = market;
    this._trade_date = trade_date;
    this._trade_time = trade_time;
    this._trade_date_kst = trade_date_kst;
    this._trade_time_kst = trade_time_kst;
    this._trade_timestamp = trade_timestamp;
    this._opening_price = opening_price;
    this._high_price = high_price;
    this._low_price = low_price;
    this._trade_price = trade_price;
    this._prev_closing_price = prev_closing_price;
    this._change = change;
    this._change_price = change_price;
    this._change_rate = change_rate;
    this._signed_change_price = signed_change_price;
    this._signed_change_rate = signed_change_rate;
    this._trade_volume = trade_volume;
    this._acc_trade_price = acc_trade_price;
    this._acc_trade_price_24h = acc_trade_price_24h;
    this._acc_trade_volume = acc_trade_volume;
    this._acc_trade_volume_24h = acc_trade_volume_24h;
    this._highest_52_week_price = highest_52_week_price;
    this._highest_52_week_date = highest_52_week_date;
    this._lowest_52_week_price = lowest_52_week_price;
    this._lowest_52_week_date = lowest_52_week_date;
    this._timestamp = timestamp;
  }

  get market() {
    return this._market;
  }

  set market(value) {
    this._market = value;
  }

  get trade_date() {
    return this._trade_date;
  }

  set trade_date(value) {
    this._trade_date = value;
  }

  get trade_time() {
    return this._trade_time;
  }

  set trade_time(value) {
    this._trade_time = value;
  }

  get trade_date_kst() {
    return this._trade_date_kst;
  }

  set trade_date_kst(value) {
    this._trade_date_kst = value;
  }

  get trade_time_kst() {
    return this._trade_time_kst;
  }

  set trade_time_kst(value) {
    this._trade_time_kst = value;
  }

  get trade_timestamp() {
    return this._trade_timestamp;
  }

  set trade_timestamp(value) {
    this._trade_timestamp = value;
  }

  get opening_price() {
    return this._opening_price;
  }

  set opening_price(value) {
    this._opening_price = value;
  }

  get high_price() {
    return this._high_price;
  }

  set high_price(value) {
    this._high_price = value;
  }

  get low_price() {
    return this._low_price;
  }

  set low_price(value) {
    this._low_price = value;
  }

  get trade_price() {
    return this._trade_price;
  }

  set trade_price(value) {
    this._trade_price = value;
  }

  get prev_closing_price() {
    return this._prev_closing_price;
  }

  set prev_closing_price(value) {
    this._prev_closing_price = value;
  }

  get change() {
    return this._change;
  }

  set change(value) {
    this._change = value;
  }

  get change_price() {
    return this._change_price;
  }

  set change_price(value) {
    this._change_price = value;
  }

  get change_rate() {
    return this._change_rate;
  }

  set change_rate(value) {
    this._change_rate = value;
  }

  get signed_change_price() {
    return this._signed_change_price;
  }

  set signed_change_price(value) {
    this._signed_change_price = value;
  }

  get signed_change_rate() {
    return this._signed_change_rate;
  }

  set signed_change_rate(value) {
    this._signed_change_rate = value;
  }

  get trade_volume() {
    return this._trade_volume;
  }

  set trade_volume(value) {
    this._trade_volume = value;
  }

  get acc_trade_price() {
    return this._acc_trade_price;
  }

  set acc_trade_price(value) {
    this._acc_trade_price = value;
  }

  get acc_trade_price_24h() {
    return this._acc_trade_price_24h;
  }

  set acc_trade_price_24h(value) {
    this._acc_trade_price_24h = value;
  }

  get acc_trade_volume() {
    return this._acc_trade_volume;
  }

  set acc_trade_volume(value) {
    this._acc_trade_volume = value;
  }

  get acc_trade_volume_24h() {
    return this._acc_trade_volume_24h;
  }

  set acc_trade_volume_24h(value) {
    this._acc_trade_volume_24h = value;
  }

  get highest_52_week_price() {
    return this._highest_52_week_price;
  }

  set highest_52_week_price(value) {
    this._highest_52_week_price = value;
  }

  get highest_52_week_date() {
    return this._highest_52_week_date;
  }

  set highest_52_week_date(value) {
    this._highest_52_week_date = value;
  }

  get lowest_52_week_price() {
    return this._lowest_52_week_price;
  }

  set lowest_52_week_price(value) {
    this._lowest_52_week_price = value;
  }

  get lowest_52_week_date() {
    return this._lowest_52_week_date;
  }

  set lowest_52_week_date(value) {
    this._lowest_52_week_date = value;
  }

  get timestamp() {
    return this._timestamp;
  }

  set timestamp(value) {
    this._timestamp = value;
  }
}

module.exports = Market;