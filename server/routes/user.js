const Router = require("koa-router");
const axios = require("axios");
const User = require('../model/user');
const JWT = require('jsonwebtoken');

const router = new Router({ prefix: "/api/user" });

router.post('/set_userinfo', async (ctx)=>{
  console.log(ctx.request.body);
})


module.exports = router;
