export interface AppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo;
    appId: string;
    githubURL: string;
  };
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback;
}

export interface Event {
  detail: unknown;
  type: string;
  mark: unknown;
  timeStamp: number;
  mut: boolean;
  touches: Array<{
    clientX: number;
    clientY: number;
    force: number;
    identifier: number;
    pageX: number;
    pageY: number;
  }>;
  changedTouches: Array<{
    clientX: number;
    clientY: number;
    force: number;
    identifier: number;
    pageX: number;
    pageY: number;
  }>;
  target: {
    id: string;
    offsetLeft: number;
    offsetTop: number;
    dataset: unknown;
  };
  currentTarget: {
    id: string;
    offsetLeft: number;
    offsetTop: number;
    dataset: unknown;
  };
}
