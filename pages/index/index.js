// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    e: '',
    m: [],
    l: "",
    js:0
    
  },
  chenfa: function() {
    var that = this
    let k = [[],[],[],[],[],[],[],[],[],[],[]]
    for (let i = 1; i < 10; i++) {
      for (let j = 1; j <= i; j++) {
        let n = j + "*" + i + "=" + i * j+''
       
        k[i].push(n)
      }
      console.log(k[i])
      
      }
    
that.setData({
  m: k
   }) },
  onLoad: function() {
    // this.chenfa()


  },
  indexclick(e){
    // const titel_cl = this.selectComponet(".tite")
    // console.log(titel_cl)
    console.log(e)
  },
  incream(){
    const titel_cl = this.selectComponent('.tite')
  console.log(titel_cl)

    // titel_cl.setData({
    //   current_index: titel_cl.data.current_index+20
      // })
    titel_cl.crement(20)
  }
})