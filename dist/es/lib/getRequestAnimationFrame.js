"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var availablePrefixs = ['moz', 'ms', 'webkit'];
var frameDuration = 16;

function requestAnimationFramePolyfill() {
  var lastTime = 0;
  return function (callback) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, frameDuration - (currTime - lastTime));
    var id = window.setTimeout(function () {
      return callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
}

function getRequestAnimationFrame() {
  if (typeof window === 'undefined') {
    return function () {};
  }

  if (window.requestAnimationFrame) {
    return window.requestAnimationFrame.bind(window);
  }

  var prefix = availablePrefixs.filter(function (key) {
    return "".concat(key, "RequestAnimationFrame") in window;
  })[0];
  return prefix ? window["".concat(prefix, "RequestAnimationFrame")] : requestAnimationFramePolyfill();
}

exports.default = getRequestAnimationFrame;

function cancelRequestAnimationFrame(id) {
  if (typeof window === 'undefined') {
    return null;
  }

  if (window.cancelAnimationFrame) {
    return window.cancelAnimationFrame(id);
  }

  var prefix = availablePrefixs.filter(function (key) {
    return "".concat(key, "CancelAnimationFrame") in window || "".concat(key, "CancelRequestAnimationFrame") in window;
  })[0];
  return prefix ? (window["".concat(prefix, "CancelAnimationFrame")] || window["".concat(prefix, "CancelRequestAnimationFrame")]).call(this, id) : clearTimeout(id);
}

exports.cancelRequestAnimationFrame = cancelRequestAnimationFrame;