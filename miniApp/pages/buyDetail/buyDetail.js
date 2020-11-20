// miniApp/pages/buyDetail/buyDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:{},
    num:1,
    price:88,
    id:''
  },
  reduceAction(){
    if(this.data.num>1){
      this.setData({num:this.data.num-1})
    }else{
      // alert('最少一件起售')
    }
  },
  addAction(){
    this.setData({num:this.data.num +1})
  },
  buyAction(){
    console.log('立即购买');
    
  },
  cartAction(){
    console.log('加入购物车');
    console.log(this.data.id);
    const id = this.data.id
    this.orderCollection.where({
      id:id,
    }).get({
      success:(res)=>{
        // console.log(id);
        let user = res.data.filter(item=>item.id ===id);
        console.log(user);
        if(user){
          this.orderCollection.doc('oxKQT5fzOGj6FCj2vlFI7rPME3NQ').updata({
            data:{
            }
          })
        }
        // console.log(res);
        
      },
      fail(err){
        console.log(err);
        
      }
    })
 
    
    // this.orderCollection.add({
    //   data:{
    //     id:this.data.id,
    //     arr:this.data.arr,
    //     num:this.data.num,
    //     price:this.data.price
    //   }
    // }).then(res=>{
    //   console.log(res);
      
    // }).catch(err=>{
    //   console.log(err);
      
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (...options) {
    let arr = {};
    console.log(options);
    
    const {id,name,url} = options[0];
    // console.log(id,name,url);
    // arr.id = id;
    arr.name = name;
    arr.url = url;
    this.setData({id:id,arr:arr})
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 获得数据库
    const db = wx.cloud.database();
    // 获取集合
    const order = db.collection('order');
    this.orderCollection = order;
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