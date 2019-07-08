"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var css_animation_1 = __importDefault(require("css-animation"));

var getRequestAnimationFrame_1 = __importStar(require("./getRequestAnimationFrame"));

var reqAnimFrame = getRequestAnimationFrame_1.default();

function animate(node, show, done) {
  var height;
  var requestAnimationFrameId;
  return css_animation_1.default(node, 'ui-collapse-wrapper', {
    /* eslint-disable no-param-reassign */
    start: function start() {
      if (show) {
        height = node.offsetHeight;
        node.style.height = '0px';
        node.style.opacity = '0.0001';
      } else {
        node.style.height = "".concat(node.offsetHeight, "px");
        node.style.opacity = '1';
      }
    },
    active: function active() {
      if (requestAnimationFrameId) {
        getRequestAnimationFrame_1.cancelRequestAnimationFrame(requestAnimationFrameId);
      }

      requestAnimationFrameId = reqAnimFrame(function () {
        node.style.height = "".concat(show ? height : 0, "px");
        node.style.opacity = show ? '1' : '0.0001';
      });
    },
    end: function end() {
      if (requestAnimationFrameId) {
        getRequestAnimationFrame_1.cancelRequestAnimationFrame(requestAnimationFrameId);
      }

      node.style.height = '';
      node.style.opacity = '';
      done();
    }
  });
}

var animation = {
  enter: function enter(node, done) {
    return animate(node, true, done);
  },
  leave: function leave(node, done) {
    return animate(node, false, done);
  },
  appear: function appear(node, done) {
    return animate(node, true, done);
  }
};
exports.default = animation;