"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRequest = void 0;
function createRequest(_a) {
    var outerRequest = _a.requestInterceptor, outerResponse = _a.responseInterceptor, outerError = _a.errorInterceptor, outerBaseUrl = _a.baseUrl, options = __rest(_a, ["requestInterceptor", "responseInterceptor", "errorInterceptor", "baseUrl"]);
    function Request(_a) {
        var requestInterceptor = _a.requestInterceptor, responseInterceptor = _a.responseInterceptor, errorInterceptor = _a.errorInterceptor, baseUrl = _a.baseUrl, restOptions = __rest(_a, ["requestInterceptor", "responseInterceptor", "errorInterceptor", "baseUrl"]);
        requestInterceptor = requestInterceptor || outerRequest;
        responseInterceptor = responseInterceptor || outerResponse;
        errorInterceptor = errorInterceptor || outerError;
        var url = (baseUrl || outerBaseUrl) + (restOptions.url || options.url);
        var task;
        var handler = new Promise(function (resolve, reject) {
            var option = requestInterceptor
                ? requestInterceptor(Object.assign({}, options, restOptions))
                : Object.assign({}, options, restOptions);
            task = wx.request(Object.assign(option, {
                url: url,
                success: function (response) {
                    if (responseInterceptor) {
                        return responseInterceptor(response, resolve);
                    }
                    return resolve(response);
                },
                fail: function (error) {
                    if (errorInterceptor) {
                        return errorInterceptor(error, resolve, reject);
                    }
                    return reject(error);
                },
            }));
        });
        handler.task = task;
        return handler;
    }
    return Request;
}
exports.createRequest = createRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUmVxZXVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZVJlcWV1c3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUE0Q0EsU0FBZ0IsYUFBYSxDQUFDLEVBTWI7SUFMZixJQUFvQixZQUFZLHdCQUFBLEVBQ1gsYUFBYSx5QkFBQSxFQUNoQixVQUFVLHNCQUFBLEVBQ25CLFlBQVksYUFBQSxFQUNsQixPQUFPLGNBTGtCLDRFQU03QixDQURXO0lBRVYsU0FBUyxPQUFPLENBQWUsRUFNZDtRQUxmLElBQUEsa0JBQWtCLHdCQUFBLEVBQ2xCLG1CQUFtQix5QkFBQSxFQUNuQixnQkFBZ0Isc0JBQUEsRUFDaEIsT0FBTyxhQUFBLEVBQ0osV0FBVyxjQUxlLDRFQU05QixDQURlO1FBR2Qsa0JBQWtCLEdBQUcsa0JBQWtCLElBQUksWUFBWSxDQUFDO1FBQ3hELG1CQUFtQixHQUFHLG1CQUFtQixJQUFJLGFBQWEsQ0FBQztRQUMzRCxnQkFBZ0IsR0FBRyxnQkFBZ0IsSUFBSSxVQUFVLENBQUM7UUFDbEQsSUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLElBQUksWUFBWSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV6RSxJQUFJLElBQW1DLENBQUM7UUFFeEMsSUFBTSxPQUFPLEdBQThCLElBQUksT0FBTyxDQUNwRCxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBR2QsSUFBTSxNQUFNLEdBQUcsa0JBQWtCO2dCQUMvQixDQUFDLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUM3RCxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBRTVDLElBQUksR0FBRyxFQUFFLENBQUMsT0FBTyxDQUNmLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO2dCQUNwQixHQUFHLEtBQUE7Z0JBQ0gsT0FBTyxFQUFQLFVBQVEsUUFBUTtvQkFDZCxJQUFJLG1CQUFtQixFQUFFO3dCQUd2QixPQUFPLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztxQkFDL0M7b0JBRUQsT0FBTyxPQUFPLENBQUMsUUFBZSxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7Z0JBQ0QsSUFBSSxZQUFDLEtBQUs7b0JBQ1IsSUFBSSxnQkFBZ0IsRUFBRTt3QkFDcEIsT0FBTyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO3FCQUNqRDtvQkFFRCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkIsQ0FBQzthQUNpQyxDQUFDLENBQ3RDLENBQUM7UUFDSixDQUFDLENBQzJCLENBQUM7UUFHL0IsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFcEIsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7QUE3REQsc0NBNkRDIiwic291cmNlc0NvbnRlbnQiOlsidHlwZSByZXF1ZXN0T3B0aW9ucyA9IFdlY2hhdE1pbmlwcm9ncmFtLlJlcXVlc3RPcHRpb24gJiB7XHJcbiAgYmFzZVVybD86IHN0cmluZztcclxuICAvKipcclxuICAgKiDliY3nva7mi6bmiKrlmagsIOW9k+aPkOS+m+atpOWPguaVsOeahOaXtuWAmVxyXG4gICAqIOi/lOWbnuWAvOS8muiiq+W9k+S9nOivt+axguWPguaVsFxyXG4gICAqL1xyXG4gIHJlcXVlc3RJbnRlcmNlcHRvcj86IChcclxuICAgIG9wdGlvbnM6IFdlY2hhdE1pbmlwcm9ncmFtLlJlcXVlc3RPcHRpb25cclxuICApID0+IFdlY2hhdE1pbmlwcm9ncmFtLlJlcXVlc3RPcHRpb247XHJcbiAgLyoqXHJcbiAgICog5ZON5bqU5oum5oiq5ZmoLCDor7fmsYLlrozmiJDlkI7or6XpkqnlrZDkvJrooqvosIPnlKhcclxuICAgKiDmj5DkvpsgcmVzcG9uc2Ug5Y+C5pWw5ZKMIHJlc292bGUg6ZKp5a2QXHJcbiAgICogcmVzb2x2ZSDkuIDml6booqvosIPnlKjlhbbkvKDlhaXnmoTlgLzkvJrooqvlvZPkvZzmlbTkuKogUHJvbWlzZSDnmoTov5Tlm57lgLxcclxuICAgKi9cclxuICByZXNwb25zZUludGVyY2VwdG9yPzogKFxyXG4gICAgcmVzcG9uc2U6IFdlY2hhdE1pbmlwcm9ncmFtLlJlcXVlc3RTdWNjZXNzQ2FsbGJhY2tSZXN1bHQsXHJcbiAgICByZXNvbHZlOiAocmVzdWx0OiBhbnkpID0+IHZvaWRcclxuICApID0+IHZvaWQ7XHJcbiAgLyoqXHJcbiAgICog6ZSZ6K+v5oum5oiq5ZmoLCDor7fmsYLlpLHotKXlkI7or6XpkqnlrZDkvJrooqvosIPnlKhcclxuICAgKiDmj5DkvpsgZXJyb3Ig5Y+C5pWw5ZKMIHJlc29sdmUg6ZKp5a2Q5ZKMIHJlamVjdCDpkqnlrZBcclxuICAgKiDov5nkupvpkqnlrZDnrYnlkIzkuo7ov5nkuKogUHJvbWlzZSDnmoQgcmVzb2x2ZSDlkowgcmVqZWN0XHJcbiAgICovXHJcbiAgZXJyb3JJbnRlcmNlcHRvcj86IChcclxuICAgIGVycm9yOiBXZWNoYXRNaW5pcHJvZ3JhbS5HZW5lcmFsQ2FsbGJhY2tSZXN1bHQsXHJcbiAgICByZXNvbHZlOiAocmVzdWx0OiBhbnkpID0+IHZvaWQsXHJcbiAgICByZWplY3Q6IChyZWFzb246IGFueSkgPT4gdm9pZFxyXG4gICkgPT4gdm9pZDtcclxufTtcclxuXHJcbnR5cGUgcmVxdWVzdFRhc2s8VD4gPSBQcm9taXNlPFQ+ICYgeyB0YXNrOiBXZWNoYXRNaW5pcHJvZ3JhbS5SZXF1ZXN0VGFzayB9O1xyXG5cclxuLyoqXHJcbiAqIOiwg+eUqOWQjui/lOWbnuS4gOS4quivt+axguWHveaVsCwg5Z+65LqOIHd4LnJlcXVlc3Qg6L+b6KGM5LqG5YyF6KOF5Li76KaB5o+Q5L6b5LqGOlxyXG4gKiAxLiDliY3nva7mi6bmiKrlmahcclxuICogMi4g5ZON5bqU5oum5oiq5ZmoXHJcbiAqIDMuIOmUmeivr+aLpuaIquWZqFxyXG4gKiA0LiDln7rnoYAgdXJsXHJcbiAqIDUuIFByb21pc2Ug5YyF6KOF55qE5o6l5Y+j5Lul5Y+KIFByb21pc2UudGFzayDnmoTmlK/mjIFcclxuICogNS4g5Z+65LqO6Zet5YyF5o+Q5L6b55qE6YWN572u6YeN6L29XHJcbiAqXHJcbiAqIOS4iui/sOaJgOaPj+i/sOeahOmFjee9rumAiemhuemDveaYr+WGjeWOn+aciSB3eC5yZXF1ZXN0IOS4iuaJgOS9nOeahOaJqeWxlSwg5Y6fIHd4LnJlcXVlc3Qg6YWN572u5LiN6ZyA6KaB5YGa5L+u5pS5LlxyXG4gKiBAcGFyYW0gcGFyYW0wIOivt+axgumAiemhuVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlcXVlc3Qoe1xyXG4gIHJlcXVlc3RJbnRlcmNlcHRvcjogb3V0ZXJSZXF1ZXN0LFxyXG4gIHJlc3BvbnNlSW50ZXJjZXB0b3I6IG91dGVyUmVzcG9uc2UsXHJcbiAgZXJyb3JJbnRlcmNlcHRvcjogb3V0ZXJFcnJvcixcclxuICBiYXNlVXJsOiBvdXRlckJhc2VVcmwsXHJcbiAgLi4ub3B0aW9uc1xyXG59OiByZXF1ZXN0T3B0aW9ucykge1xyXG4gIGZ1bmN0aW9uIFJlcXVlc3Q8cmVzcG9uc2VUeXBlPih7XHJcbiAgICByZXF1ZXN0SW50ZXJjZXB0b3IsXHJcbiAgICByZXNwb25zZUludGVyY2VwdG9yLFxyXG4gICAgZXJyb3JJbnRlcmNlcHRvcixcclxuICAgIGJhc2VVcmwsXHJcbiAgICAuLi5yZXN0T3B0aW9uc1xyXG4gIH06IHJlcXVlc3RPcHRpb25zKSB7XHJcbiAgICAvLyBUT09EOiDlkI7pnaLlho3ogIPomZEg5ZCE5Liq5Y+C5pWw5Lyg5YWlIGZhbHNlIOeahOaDheWGtVxyXG4gICAgcmVxdWVzdEludGVyY2VwdG9yID0gcmVxdWVzdEludGVyY2VwdG9yIHx8IG91dGVyUmVxdWVzdDtcclxuICAgIHJlc3BvbnNlSW50ZXJjZXB0b3IgPSByZXNwb25zZUludGVyY2VwdG9yIHx8IG91dGVyUmVzcG9uc2U7XHJcbiAgICBlcnJvckludGVyY2VwdG9yID0gZXJyb3JJbnRlcmNlcHRvciB8fCBvdXRlckVycm9yO1xyXG4gICAgY29uc3QgdXJsID0gKGJhc2VVcmwgfHwgb3V0ZXJCYXNlVXJsKSArIChyZXN0T3B0aW9ucy51cmwgfHwgb3B0aW9ucy51cmwpO1xyXG5cclxuICAgIGxldCB0YXNrOiBXZWNoYXRNaW5pcHJvZ3JhbS5SZXF1ZXN0VGFzaztcclxuXHJcbiAgICBjb25zdCBoYW5kbGVyOiByZXF1ZXN0VGFzazxyZXNwb25zZVR5cGU+ID0gbmV3IFByb21pc2UoXHJcbiAgICAgIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAvLyBPYmplY3QuYXNzaWduKCkg56ys5LiA5Liq5Y+C5pWw5Li6IHt9IOiuqeWQjue7reeahOWPguaVsOWQiOW5tuWIsOi/meS4quWvueixoeWtl+mdoumHj+S4ilxyXG4gICAgICAgIC8vIOS9v+W+l+avj+asoeWIm+W7uueahOWvueixoemDveWUr+S4gFxyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHJlcXVlc3RJbnRlcmNlcHRvclxyXG4gICAgICAgICAgPyByZXF1ZXN0SW50ZXJjZXB0b3IoT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywgcmVzdE9wdGlvbnMpKVxyXG4gICAgICAgICAgOiBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCByZXN0T3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHRhc2sgPSB3eC5yZXF1ZXN0KFxyXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihvcHRpb24sIHtcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICBzdWNjZXNzKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlSW50ZXJjZXB0b3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IOiAg+iZkeWFgeiuuOWFtui/kOihjCByZWplY3RcclxuICAgICAgICAgICAgICAgIC8vIOS4gOaXpuiwg+eUqCByZWplY3Qg5YiZ5omn6KGMIGZhaWwg55qE6YC76L6RXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VJbnRlcmNlcHRvcihyZXNwb25zZSwgcmVzb2x2ZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZSBhcyBhbnkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGVycm9ySW50ZXJjZXB0b3IpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvckludGVyY2VwdG9yKGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9IGFzIFdlY2hhdE1pbmlwcm9ncmFtLlJlcXVlc3RPcHRpb24pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgKSBhcyByZXF1ZXN0VGFzazxyZXNwb25zZVR5cGU+O1xyXG5cclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGhhbmRsZXIudGFzayA9IHRhc2s7XHJcblxyXG4gICAgcmV0dXJuIGhhbmRsZXI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gUmVxdWVzdDtcclxufVxyXG4iXX0=