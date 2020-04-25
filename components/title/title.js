// components/title/title.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type: Array,
      value:["衣服","裤子"],
      observer:function(newVal,odlVal){
        console.log(newVal, odlVal)
      }

    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    current_index: 0,
    clu:0

  },

  /**
   * 组件的方法列表
   */
  methods: {
    click:function(e){
      const index = e.currentTarget.dataset.index;
      const item = e.currentTarget.dataset.item;
      this.setData({
        current_index:index
        })
      this.triggerEvent("item_cick",{index:index,title:item},{})

      },
      crement(num){
        this.setData({
           clu:this.data.clu+num
        })
      }
      }
})
