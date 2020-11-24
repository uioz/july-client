// components/tags/tags.js
Component({
  externalClasses: ["root"],
  /**
   * 组件的属性列表
   */
  properties: {
    active: {
      type: Boolean,
      value: false,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},
  /**
   * 组件的方法列表
   */
  methods: {
    handleTap() {
      this.setData({
        active: !this.properties.active,
      });
    },
  },
});
