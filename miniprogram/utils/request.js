"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createReqeust_1 = require("./createReqeust");
var env_1 = require("../env");
exports.default = createReqeust_1.createRequest({
    url: '',
    baseUrl: 'https://api.july.yejiefeng.com/api/v1/',
    requestInterceptor: function (option) {
        if (!(option === null || option === void 0 ? void 0 : option.hasOwnProperty('data'))) {
            option.data = {};
        }
        Object.assign(option.data, {
            app_id: env_1.APP_ID
        });
        return option;
    },
    responseInterceptor: function (response, resolve) {
        debugger;
        resolve(response.data);
    },
    errorInterceptor: function (error, _resolve, reject) {
        debugger;
        reject(error);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxpREFBZ0Q7QUFDaEQsOEJBQWdDO0FBRWhDLGtCQUFlLDZCQUFhLENBQUM7SUFDM0IsR0FBRyxFQUFFLEVBQUU7SUFDUCxPQUFPLEVBQUUsd0NBQXdDO0lBQ2pELGtCQUFrQixFQUFFLFVBQUMsTUFBTTtRQUN6QixJQUFJLEVBQUMsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLGNBQWMsQ0FBQyxNQUFNLEVBQUMsRUFBRTtZQUNuQyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztTQUNsQjtRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUN6QixNQUFNLEVBQUUsWUFBTTtTQUNmLENBQUMsQ0FBQztRQUNILE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFDRCxtQkFBbUIsRUFBRSxVQUFDLFFBQVEsRUFBRSxPQUFPO1FBRXJDLFFBQVEsQ0FBQTtRQUNSLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNELGdCQUFnQixFQUFFLFVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNO1FBQ3hDLFFBQVEsQ0FBQTtRQUNSLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQixDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IGNyZWF0ZVJlcXVlc3QgfSBmcm9tIFwiLi9jcmVhdGVSZXFldXN0XCI7XHJcbmltcG9ydCB7IEFQUF9JRCB9IGZyb20gXCIuLi9lbnZcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlcXVlc3Qoe1xyXG4gIHVybDogJycsXHJcbiAgYmFzZVVybDogJ2h0dHBzOi8vYXBpLmp1bHkueWVqaWVmZW5nLmNvbS9hcGkvdjEvJyxcclxuICByZXF1ZXN0SW50ZXJjZXB0b3I6IChvcHRpb24pID0+IHtcclxuICAgIGlmICghb3B0aW9uPy5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpKSB7XHJcbiAgICAgIG9wdGlvbi5kYXRhID0ge307XHJcbiAgICB9XHJcbiAgICBPYmplY3QuYXNzaWduKG9wdGlvbi5kYXRhLCB7XHJcbiAgICAgIGFwcF9pZDogQVBQX0lEXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBvcHRpb247XHJcbiAgfSxcclxuICByZXNwb25zZUludGVyY2VwdG9yOiAocmVzcG9uc2UsIHJlc29sdmUpID0+IHtcclxuXHJcbiAgICBkZWJ1Z2dlclxyXG4gICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuICB9LFxyXG4gIGVycm9ySW50ZXJjZXB0b3I6IChlcnJvciwgX3Jlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgZGVidWdnZXJcclxuICAgIHJlamVjdChlcnJvcik7XHJcbiAgfVxyXG59KTsiXX0=