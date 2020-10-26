"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../../utils/request");
Page({
    data: {},
    onLoad: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, request_1.default({ url: 'label' })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLCtDQUEwQztBQVUxQyxJQUFJLENBQUM7SUFJSCxJQUFJLEVBQUUsRUFBRTtJQUtGLE1BQU0sRUFBWjs7Ozs0QkFFRSxXQUFNLGlCQUFPLENBQTZCLEVBQUMsR0FBRyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUE7O3dCQUF4RCxTQUF3RCxDQUFBOzs7OztLQUV6RDtDQWtERixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBBUFBfSUQgfSBmcm9tIFwiLi4vLi4vZW52XCI7XHJcbi8vIGltcG9ydCB7IEFwcE9wdGlvbiB9IGZyb20gXCIuLi8uLi90eXBlXCI7XHJcbi8vIGNvbnN0IGFwcCA9IGdldEFwcDxBcHBPcHRpb24+KCk7XHJcblxyXG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi4vLi4vdXRpbHMvcmVxdWVzdFwiO1xyXG5cclxuaW50ZXJmYWNlIFJlc3BvbnNlT2ZMYWJlbEl0ZW0ge1xyXG4gIGNsaWNrX2NvdW50OiBudW1iZXI7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgYWxsb3dlZF9hbm9uOiBib29sZWFuO1xyXG59XHJcblxyXG4vLyBtaW5pcHJvZ3JhbS9wYWdlcy90b3BpYy9pbmRleC5qc1xyXG5QYWdlKHtcclxuICAvKipcclxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuICAgKi9cclxuICBkYXRhOiB7fSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgKi9cclxuICBhc3luYyBvbkxvYWQoKSB7XHJcblxyXG4gICAgYXdhaXQgcmVxdWVzdDxBcnJheTxSZXNwb25zZU9mTGFiZWxJdGVtPj4oe3VybDonbGFiZWwnfSlcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAqL1xyXG4gIC8vIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgLy8gfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcclxuICAgKi9cclxuICAvLyBvblNob3c6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgLy8gfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cclxuICAgKi9cclxuICAvLyBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgLy8gfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICAvLyBvblVubG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAvLyB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxyXG4gICAqL1xyXG4gIC8vIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIC8vIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxyXG4gICAqL1xyXG4gIC8vIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgLy8gfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXHJcbiAgICovXHJcbiAgLy8gb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgLy8gfVxyXG59KTtcclxuIl19