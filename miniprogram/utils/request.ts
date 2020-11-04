import { createRequest } from "./createReqeust";
import { APP_ID } from "../env";

export default createRequest({
  url: "",
  baseUrl: "https://api.july.yejiefeng.com/api/v1/",
  requestInterceptor: (option) => {
    if (option && !option.data) {
      option.data = {};
    }
    Object.assign(option.data, {
      app_id: APP_ID,
    });
    return option;
  },
  responseInterceptor: (response, resolve) => {
    resolve(response.data);
  },
  errorInterceptor: (error, _resolve, reject) => {
    reject(error);
  },
});
