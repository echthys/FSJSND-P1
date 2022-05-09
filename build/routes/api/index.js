"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var findImages_1 = require("../../utilities/findImages");
var routes = express_1.default.Router();
routes.get('/api', function (req, res) {
    //   res.send('Hello World');
    //   const input: string = '123';
    //   sharp(input).resize({ height: 200, width: 200 });
    res.send((0, findImages_1.findImages)());
});
exports.default = routes;
