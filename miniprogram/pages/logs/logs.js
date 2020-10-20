"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
Page({
    data: {
        logs: [],
    },
    onLoad: function () {
        this.setData({
            logs: (wx.getStorageSync("logs") || []).map(function (log) {
                return util_1.formatTime(new Date(log));
            }),
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSx5Q0FBOEM7QUFFOUMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLEVBQUU7S0FDVDtJQUNELE1BQU0sRUFBTjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQVc7Z0JBQ3RELE9BQU8saUJBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQztTQUNILENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsb2dzLnRzXHJcbi8vIGNvbnN0IHV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsLmpzJylcclxuaW1wb3J0IHsgZm9ybWF0VGltZSB9IGZyb20gXCIuLi8uLi91dGlscy91dGlsXCI7XHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBsb2dzOiBbXSxcclxuICB9LFxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGxvZ3M6ICh3eC5nZXRTdG9yYWdlU3luYyhcImxvZ3NcIikgfHwgW10pLm1hcCgobG9nOiBzdHJpbmcpID0+IHtcclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZShuZXcgRGF0ZShsb2cpKTtcclxuICAgICAgfSksXHJcbiAgICB9KTtcclxuICB9LFxyXG59KTtcclxuIl19