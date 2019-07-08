"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var moment_1 = __importDefault(require("moment"));

moment_1.default.locale('ru');
exports.default = moment_1.default;