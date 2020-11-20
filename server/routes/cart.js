const Router=require('koa-router');
const Cart=require('../model/Cart');
const url=require('url');
const { count } = require('console');

const router=new Router({
    prefix:"/api/cart",
});

//添加购物车
router.post('/addCartData',async (ctx)=>{
    let {goodsid,title,price,imgurl}=ctx.request.header;//获取post请求参数
    // console.log(goodsid,title,price,imgurl);
    if(goodsid&&title&&price&&imgurl){
        
    }
    let result=await Cart.findOne({goodsid});
    if(!result){
        result=await new Cart({goodsid,title,price,imgurl,count:1}).save();
        ctx.status=200;
        ctx.body={
            message:"添加成功"
        }
    }else{
        const count=result.count;
        result=await Cart.findOneAndUpdate({goodsid:goodsid},{count:count+1})
        ctx.body={
            message:"数据修改成功"
        }
    }
})

//查询购物车数据
router.get('/queryCartData',async(ctx)=>{
    let data=await Cart.find();
    ctx.status=201;
    ctx.body={data}
})

router.post('/updateCartData',async (ctx)=>{
    const {type}=ctx.request.header;
    ctx.body={type};
    if(type==="add"){
        console.log("add");
    }else if(type==="sub"){
        console.log("sub");
    }
})
module.exports =router;