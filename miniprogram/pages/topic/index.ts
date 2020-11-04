// import { APP_ID } from "../../env";
// import { AppOption } from "../../type";
// const app = getApp<AppOption>();

import request from "../../utils/request";

interface ResponseOfLabelItem {
  click_count: number;
  id: number;
  name: string;
  allowed_anon: boolean;
}

// miniprogram/pages/topic/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    activeTab: 0,
    tabs: [
      {
        title: "技术开发",
      },
      {
        title: "产品解析",
      },
      {
        title: "运营规范",
      },
      {
        title: "营销经验",
      },
      {
        title: "高校大赛",
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    await request<Array<ResponseOfLabelItem>>({ url: "label" });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  // onReady: function () {

  // },

  /**
   * 生命周期函数--监听页面显示
   */
  // onShow: function () {

  // },

  /**
   * 生命周期函数--监听页面隐藏
   */
  // onHide: function () {

  // },

  /**
   * 生命周期函数--监听页面卸载
   */
  // onUnload: function () {

  // },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  // onPullDownRefresh: function () {

  // },

  /**
   * 页面上拉触底事件的处理函数
   */
  // onReachBottom: function () {

  // },

  /**
   * 用户点击右上角分享
   */
  // onShareAppMessage: function () {

  // }
});
