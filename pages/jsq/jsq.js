
  Page({
    data: {
      num:[9,8,7,6,5,4,3,2,1,0,".","="],
      op:["+","-","*","/"],
      pingmu: 0,//屏幕显示的数
      off: false,
    },
    click(e){
    // console.log(e)
    const item = e.currentTarget.dataset.item
    var flag = this.data.off
    var that = this
       if(!isNaN(item)){
         this.setData({ pingmu: this.data.pingmu == "0" ? "" + item.toString() : this.data.pingmu +                       item.toString(),
         off:false
         }) 
    }else{
      switch(item){
        case "+":
        case "-":
        case "*":
        case "/":
          if (flag == false ){
            if (that.data.pingmu.substr(-1, 1) == ".") {
              that.setData({
                pingmu: that.data.pingmu.substr(0, that.data.pingmu.length-1) + item,
                off: true})
                break;}
        that.setData({
          pingmu:that.data.pingmu + item,
          off:true
        })
        } else {
          that.setData({
            pingmu:that.data.pingmu.substr(0,that.data.pingmu.length-1)+item
          })
        }
        break;
        case ".":
         if(that.data.pingmu.toString().substr(-3,3).indexOf(".") == -1 && flag==false){
             that.setData({
               pingmu: that.data.pingmu + item,
             })
        }
        break;
        case "=":
          this.setData({
            pingmu: that.js(that.data.pingmu)
          })
        break;
      }
    }
    },
    js: function (str) {
      var rst = 0
      var arr = str.split("")
      var newarr = []
      // console.log(arr)
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] == Number(arr[i]) || arr[i] == ".") {
          arr[i] = arr[i - 1] + arr[i]
          // newarr.push(arr[i])
          // console.log(arr[i])
        } else {
          newarr.push(arr[i - 1])
          newarr.push(arr[i])
          arr[i] = ""
        }
      }
      newarr.push(arr[arr.length - 1])
      console.log(newarr)
      rst = Number(newarr[0])
      for (let i = 1; i < newarr.length; i += 2) {
        if (newarr[i] == "+") {
          rst = rst + parseFloat(newarr[i + 1])
        } else if (newarr[i] == "-") {
          rst = rst - parseFloat(newarr[i + 1])
        } else if (newarr[i] == "*") {
          rst = rst * parseFloat(newarr[i + 1])
        } else if (newarr[i] == "/") {
          rst = rst / parseFloat(newarr[i + 1])
        }
        // rst =Number(parseFloat(newarr[i])+newarr[i + 1]+ parseFloat(newarr[i+2]))
      }
      console.log(rst.toFixed(2))
      return rst.toString().indexOf(".") == -1 ? rst : rst.toFixed(2)
    },
    qingchu(){
      this.setData({
        pingmu:0,//屏幕显示的数
        currentNum: '',//当前输入的数
        storage: 0,//存储的数
        operator: '',//运算符
        off: false,
       
      })
    },
    tuige(){
      let p = this.data.pingmu;
        this.setData({
          pingmu: p.length == 1 ? "0" : p.substr(0, p.length - 1)
        })
    },
    onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  
})