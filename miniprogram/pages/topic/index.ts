// import { APP_ID } from "../../env";
// import { AppOption } from "../../type";
// const app = getApp<AppOption>();
import { Event } from "../../type";
import request from "../../utils/request";

interface ResponseOfLabelItem {
  click_count: number;
  id: number;
  name: string;
  allowed_anon: boolean;
}

interface Label {
  click_count: number;
  id: number;
  title: string;
  allowed_anon: boolean;
}

interface TagClickEvent extends Event {
  target: {
    id: string;
    offsetLeft: number;
    offsetTop: number;
    dataset: {
      index: number;
    };
  };
}

// miniprogram/pages/topic/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    activeTab: 0,
    showDialog: false,
    labels: [] as Array<Label>,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    this.setData({
      labels: (
        await request<Array<ResponseOfLabelItem>>({ url: "label" })
      ).map(({ name, ...rest }) => ({ title: name, ...rest })),
    });
  },
  handleToggleCollapse() {
    this.setData({
      showDialog: !this.data.showDialog,
    });
  },
  handleTagClick(event: TagClickEvent) {
    const tagIndex = event.target.dataset.index;

    if (tagIndex != this.data.activeTab) {
      this.setData({
        activeTab: tagIndex,
      });
    }
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
