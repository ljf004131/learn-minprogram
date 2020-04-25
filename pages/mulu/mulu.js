
Page({

  /**
   * 页面的初始数据
   */
  data: {
      info:"",
      jss:"36.3+34+2*6.3",
      jg:0
  },
  click:function(str){
    var rst = 0
    var arr = str.split("")
    var newarr = []
    console.log(arr)
    for(let i = 1; i < arr.length; i++){
      if (arr[i] == Number(arr[i]) || arr[i] =="."){
        arr[i] = arr[i-1] + arr[i]
        // newarr.push(arr[i])
        // console.log(arr[i])
      }else{
        newarr.push(arr[i-1])
        newarr.push(arr[i])
        arr[i]=""
      }
    }
    newarr.push(arr[arr.length-1])
    console.log(newarr)
    rst = Number(newarr[0])
    for(let i = 1; i < newarr.length; i+=2){
        if(newarr[i] == "+"){
          rst = rst + parseFloat(newarr[i+1])
        } else if (newarr[i] == "-"){
        rst = rst - parseFloat(newarr[i + 1])
        } else if(newarr[i] == "*") {
          rst = rst * parseFloat(newarr[i + 1])
        } else if (newarr[i] == "/") {
          rst = rst / parseFloat(newarr[i + 1])
        }
      // rst =Number(parseFloat(newarr[i])+newarr[i + 1]+ parseFloat(newarr[i+2]))
    }
    console.log(rst.toFixed(2))
    return rst.toFixed(2)
  },
  // getinfo(e){
  //   var that=this
  //   console.log(e)
  //   that.setData({
  //     info:[
  //       { name: e.detail.userInfo.nickName, city: e.detail.userInfo.city, pecture: e.detail.userInfo.avatarUrl}
  //          ]
  //   })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: function (options) {
  //   wx.getUserInfo({
  //     success(e){
  //     console.log(e)}
  //   })

  // },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})