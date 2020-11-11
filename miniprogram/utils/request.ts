import { createRequest } from "./createReqeust";
import { APP_ID } from "../env";

export default createRequest({
  url: "",
  baseUrl: "https://api.july.yejiefeng.com/api/v1/",
  requestInterceptor: (option) => {
    wx.showNavigationBarLoading();
    if (option && !option.data) {
      option.data = {};
    }
    Object.assign(option.data, {
      app_id: APP_ID,
    });
    return option;
  },
  responseInterceptor: (response, resolve) => {
    wx.hideNavigationBarLoading();
    resolve((response.data as any).data);
  },
  errorInterceptor: (error, _resolve, reject) => {
    wx.hideNavigationBarLoading();
    reject(error);
  },
});
