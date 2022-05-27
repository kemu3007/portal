"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myPlugin = void 0;
const scully_1 = require("@scullyio/scully");
const list_json_1 = __importDefault(require("../../src/assets/logs/list.json"));
const list_json_2 = __importDefault(require("../../src/assets/articles/list.json"));
exports.myPlugin = 'myPlugin';
const myFunctionPlugin = async (html) => {
    return html;
};
const validator = async () => [];
(0, scully_1.registerPlugin)('postProcessByHtml', exports.myPlugin, myFunctionPlugin, validator);
const logRoutes = Object.keys(list_json_1.default !== null && list_json_1.default !== void 0 ? list_json_1.default : {}).map(logId => ({ route: `/log/${logId}` }));
function logRoutesPlugin(_route, _config = {}) {
    return Promise.resolve(logRoutes);
}
(0, scully_1.registerPlugin)('router', "logIds", logRoutesPlugin, []);
const blogRoutes = Object.keys(list_json_2.default !== null && list_json_2.default !== void 0 ? list_json_2.default : {}).map(blogId => ({ route: `/blog/${blogId}` }));
function blogRoutesPlugin(_route, _config = {}) {
    return Promise.resolve(blogRoutes);
}
(0, scully_1.registerPlugin)('router', "blogIds", blogRoutesPlugin, []);
//# sourceMappingURL=plugin.js.map