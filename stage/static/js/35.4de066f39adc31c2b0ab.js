webpackJsonp([35],{"6gfP":function(t,e){},"7Oaf":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("ALGc"),i=(a.a,{name:"orderedGoods",components:{XTextarea:a.a},data:function(){return{oderStatus:1,detail:{company:"中通快递",scheduleInfo:"",trackingNo:"656565+65656565",goodsInfo:[],orderAmt:6,orderId:"65464654165",orderStatus:4,couponInfo:[],receiverAddress:"成都市高新区天府三街",receiverName:"古天乐",receiverPhone:"15700350000",refundFailReason:"",refundReason:""},couponInfo:[{amount:99,couponType:0,title:"满200减20"},{amount:99,couponType:0,title:"满200减20"},{amount:99,couponType:0,title:"满200减20"}],goodsInfo:[{price:99,quantity:2,title:"我是标题",imageUrl:"/static/img/test.7f2f298.png"},{price:99,quantity:2,title:"我是标题",imageUrl:"/static/img/test.7f2f298.png"},{price:99,quantity:2,title:"我是标题",imageUrl:"/static/img/test.7f2f298.png"}],scheduleInfo:[{completeTime:"2019-01-15 15:30",tradeDes:"下单时间"},{completeTime:"2019-01-15 15:30",tradeDes:"付款时间"},{completeTime:"2019-01-15 15:30",tradeDes:"发货时间"}]}},created:function(){this.$vux.loading.show({text:"加载中..."}),this.detail.goodsInfo=this.goodsInfo,this.detail.couponInfo=this.couponInfo,this.detail.scheduleInfo=this.scheduleInfo,this.getDetail()},methods:{getBack:function(){this.$router.go(-1)},oderSend:function(){this.$router.replace({name:"orderSend",query:{id:this.$route.query.id,receiverPhone:this.detail.receiverPhone}})},refused:function(){this.detail.refundReason?this.postData(4):this.$vux.toast.show({text:"拒绝理由为必填",position:"middle",type:"warn"})},agree:function(){this.postData(3)},postData:function(t){var e=this,s={amount:0,operate:t,orderId:"000",refuseReason:this.detail.refundReason};this.$http.fetchPost("/merchant/order/update/goods",s).then(function(t){200===t.data.code?(e.$vux.toast.show({text:"操作成功",position:"middle"}),e.getBack()):e.$vux.toast.show({text:t.data.message,position:"middle",type:"warn"})})},getDetail:function(){var t=this;this.$http.fetchGet("/merchant/order/get/goods/detail",{orderId:this.$route.query.id}).then(function(e){setTimeout(function(){t.$vux.loading.hide()},500),t.detail=e.data.data})},dealStatus:function(t){var e="";switch(t){case 0:e="待支付";break;case 1:e="待发货";break;case 2:e="申请退款";break;case 3:e="退款失败";break;case 4:e="退款成功";break;case 5:e="取消订单";break;case 6:e="待点评";break;case 8:e="待收货";break;case 9:e="已完成";break;case 99:default:e="所有状态"}return e}}}),n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"orderedGoods"},[s("div",{staticClass:"iosHeader vux-1px-b"},[s("svg",{staticClass:"vux-x-icon vux-x-icon-ios-arrow-left left",attrs:{type:"ios-arrow-left",size:"60",xmlns:"http://www.w3.org/2000/svg",width:"60",height:"60",viewBox:"0 0 512 512"},on:{click:t.getBack}},[s("path",{attrs:{d:"M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"}})]),t._v(" "),s("span",[t._v("订单详情")])]),t._v(" "),s("div",{staticClass:"con"},[s("div",{staticClass:"con_content"},[s("div",{staticClass:"price defaultLine vux-1px-b p-lr"},[s("span",{staticClass:"defaultText"},[t._v("订单金额")]),t._v(" "),s("span",{staticClass:"redText"},[t._v("¥"+t._s(t.detail.orderAmt||0))])]),t._v(" "),s("div",{staticClass:"price defaultLine p-lr"},[s("span",{staticClass:"defaultText"},[t._v("订单状态")]),t._v(" "),s("span",{staticClass:"redText"},[t._v(t._s(t.dealStatus(t.detail.orderStatus)))])]),t._v(" "),s("div",{staticClass:"clearfix"},[t._m(0),t._v(" "),t._l(t.detail.goodsInfo,function(e,a){return s("div",{key:a,staticClass:"custom orderedHouse"},[s("div",{staticClass:"img"},[s("img",{attrs:{src:e.imageUrl,alt:""}})]),t._v(" "),s("div",{staticClass:"info"},[s("p",[t._v(t._s(e.title))]),t._v(" "),s("span",[t._v("x"+t._s(e.quantity))])]),t._v(" "),s("span",{staticClass:"price redText"},[t._v("¥"+t._s(e.price))])])})],2),t._v(" "),t._m(1),t._v(" "),t._l(t.detail.couponInfo,function(e,a){return s("div",{key:a,staticClass:"price defaultLine p-lr"},[s("span",{staticClass:"defaultText"},[t._v("\n          【"+t._s(0==e.couponType?"商家券":"平台券")+"】\n          "+t._s(e.title)+"\n        ")]),t._v(" "),s("span",{staticClass:"redText"},[t._v("-¥"+t._s(e.amount))])])}),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"price defaultLine vux-1px-b p-lr"},[s("span",{staticClass:"defaultText"},[t._v("收货人姓名")]),t._v(" "),s("span",{staticClass:"defaultText"},[t._v(t._s(t.detail.receiverName))])]),t._v(" "),s("div",{staticClass:"price defaultLine vux-1px-b p-lr"},[s("span",{staticClass:"defaultText"},[t._v("电话号码")]),t._v(" "),s("span",{staticClass:"defaultText"},[t._v(t._s(t.detail.receiverPhone))])]),t._v(" "),s("div",{staticClass:"price defaultLine vux-1px-b p-lr"},[s("span",{staticClass:"defaultText"},[t._v("收货地址")]),t._v(" "),s("span",{staticClass:"defaultText"},[t._v(t._s(t.detail.receiverAddress))])]),t._v(" "),t.detail.orderStatus>=8?s("div",[t._m(3),t._v(" "),s("div",{staticClass:"price defaultLine vux-1px-b p-lr"},[s("span",{staticClass:"defaultText"},[t._v("物流公司")]),t._v(" "),s("span",{staticClass:"defaultText"},[t._v(t._s(t.detail.company))])]),t._v(" "),s("div",{staticClass:"price defaultLine vux-1px-b p-lr"},[s("span",{staticClass:"defaultText"},[t._v("物流单号")]),t._v(" "),s("span",{staticClass:"defaultText"},[t._v(t._s(t.detail.trackingNo))])])]):t._e(),t._v(" "),2==t.detail.orderStatus?s("div",[t._m(4),t._v(" "),s("div",{staticClass:"words"},[s("group",{staticClass:"w_100"},[s("x-textarea",{attrs:{max:200,name:"description",placeholder:"请输入退款理由"},model:{value:t.detail.refundReason,callback:function(e){t.$set(t.detail,"refundReason",e)},expression:"detail.refundReason"}})],1)],1)]):t._e(),t._v(" "),4==t.detail.orderStatus?s("div",[t._m(5),t._v(" "),s("div",{staticClass:"words"},[t._v("\n          "+t._s(t.detail.refundReason)+"\n        ")])]):t._e(),t._v(" "),3==t.detail.orderStatus?s("div",[t._m(6),t._v(" "),s("div",{staticClass:"words"},[t._v("\n          "+t._s(t.detail.refundFailReason)+"\n        ")])]):t._e(),t._v(" "),s("div",{staticClass:"bottomLine",staticStyle:{"padding-top":"0.2rem"}},[t._v("\n        订单编号："+t._s(t.detail.orderId)+"\n      ")]),t._v(" "),s("div",{staticStyle:{"padding-bottom":"0.2rem"}},t._l(t.detail.scheduleInfo,function(e,a){return s("div",{key:a,staticClass:"bottomLine"},[t._v("\n          "+t._s(e.tradeDes)+"："+t._s(e.completeTime)+"\n        ")])}),0)],2)]),t._v(" "),2==t.detail.orderStatus?s("div",{staticClass:"bottom"},[s("span",{on:{click:t.refused}},[t._v("拒绝退款")]),t._v(" "),s("span",{on:{click:t.agree}},[t._v("同意退款")])]):t._e(),t._v(" "),1==t.detail.orderStatus?s("div",{staticClass:"bottom",on:{click:t.oderSend}},[s("span",[t._v("去发货")])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"defaultTitle defaultText"},[e("span",[this._v("商品信息")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"defaultTitle defaultText"},[e("span",[this._v("优惠信息")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"defaultTitle defaultText"},[e("span",[this._v("收货信息")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"defaultTitle defaultText"},[e("span",[this._v("物流信息")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"defaultTitle defaultText"},[e("span",[this._v("退款理由")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"defaultTitle defaultText"},[e("span",[this._v("退款理由")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"defaultTitle defaultText"},[e("span",[this._v("退款失败理由")])])}]};var d=s("VU/8")(i,n,!1,function(t){s("6gfP")},"data-v-2e8ff659",null);e.default=d.exports}});
//# sourceMappingURL=35.4de066f39adc31c2b0ab.js.map