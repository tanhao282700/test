webpackJsonp([16],{ZzOf:function(t,a){},ayx7:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("GQaK"),i=s("4FCr"),o=(i.a,{name:"houseList",components:{LoadMore:i.a},data:function(){return{isMoreData:!1,data:[],pulldownMsg:"下拉刷新",pullupMsg:"加载更多",alertHook:"none",isSale:0,stopSale:0,waitSale:0,params:{merchantId:"",status:1,page:1,pageSize:10},tabIndex:1}},methods:{edit:function(t){this.$router.push({name:"houseAdd",query:{params:{id:t.id}}}),event.stopPropagation()},addHouse:function(){this.$router.push("houseAdd")},goDetails:function(t){this.$router.push({name:"houseDetail",query:{id:t,tabIndex:this.tabIndex}})},getBack:function(){this.$router.go(-1)},refreshalert:function(){var t=this;this.alertHook="block",setTimeout(function(){t.alertHook="none"},1e3)},getData:function(){var t=this;this.$http.fetchGet("/merchant/room/get/list",this.params).then(function(a){setTimeout(function(){t.$vux.loading.hide()},500),t.isSale=a.data.data.roomOnNum,t.stopSale=a.data.data.roomDownNum,t.waitSale=a.data.data.roomProcessNum,t.data=a.data.data.roomsList,t.data.length===t.params.pageSize?t.isMoreData=!0:(t.isMoreData=!1,t.$nextTick(function(){t.$refs.list_con.offsetHeight>t.$refs.content.offsetHeight&&(t.$refs.content.style.height=t.$refs.list_con.offsetHeight+2+"px")})),t.initScroll()})},tabChange:function(t){this.$vux.loading.show({text:"加载中..."}),this.$refs.content.style.height="auto",this.tabIndex=t,this.params.page=1,this.refreshData()},refreshData:function(){var t=this;this.params.status=this.tabIndex,this.$refs.content.style.height="auto",this.pullupMsg="加载中。。。",this.params.page=1,this.$http.fetchGet("/merchant/room/get/list",this.params).then(function(a){setTimeout(function(){t.$vux.loading.hide()},500),t.isSale=a.data.data.roomOnNum,t.stopSale=a.data.data.roomDownNum,t.waitSale=a.data.data.roomProcessNum,t.data=a.data.data.roomsList,t.data.length===t.params.pageSize?t.isMoreData=!0:(t.isMoreData=!1,t.$nextTick(function(){t.$refs.list_con.offsetHeight>t.$refs.content.offsetHeight&&(t.$refs.content.style.height=t.$refs.list_con.offsetHeight+2+"px")})),t.pullupMsg="加载更多",t.scroll.refresh()})},loadMoreData:function(){var t=this;this.data.length<this.params.pageSize||this.data.length<this.params.pageSize*this.params.page?this.isMoreData=!1:(this.$vux.loading.show({text:"加载中..."}),this.params.page++,this.$http.fetchGet("/merchant/room/get/list",this.params).then(function(a){setTimeout(function(){t.$vux.loading.hide()},500),t.isSale=a.data.data.roomOnNum,t.stopSale=a.data.data.roomDownNum,t.waitSale=a.data.data.roomProcessNum,t.data.length===t.params.pageSize?t.isMoreData=!0:t.isMoreData=!1,a.data.data.roomsList.length>0?a.data.data.roomsList.map(function(a){t.data.push(a)}):t.isMoreData=!1,t.pulldownMsg="下拉刷新",t.scroll.refresh()}))},initScroll:function(){var t=this;this.$nextTick(function(){t.scroll=new e.a(t.$refs.wrapper,{probeType:1,click:!0}),t.scroll.on("scroll",function(a){a.y>30&&(t.pulldownMsg="释放立即刷新")}),t.scroll.on("touchEnd",function(a){a.y>30?t.refreshData():a.y<t.scroll.maxScrollY-30&&t.loadMoreData()})})}},created:function(){this.$vux.loading.show({text:"加载中..."}),this.params.merchantId=this.$store.state.merchantId,this.getData()}}),n={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"houseList"},[s("div",{staticClass:"iosHeader vux-1px-b"},[s("svg",{staticClass:"vux-x-icon vux-x-icon-ios-arrow-left left",attrs:{type:"ios-arrow-left",size:"60",xmlns:"http://www.w3.org/2000/svg",width:"60",height:"60",viewBox:"0 0 512 512"},on:{click:t.getBack}},[s("path",{attrs:{d:"M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"}})]),t._v(" "),s("span",[t._v("房态管理")]),t._v(" "),s("svg",{staticClass:"vux-x-icon vux-x-icon-ios-plus-empty right",attrs:{type:"ios-plus-empty",size:"60",xmlns:"http://www.w3.org/2000/svg",width:"60",height:"60",viewBox:"0 0 512 512"},on:{click:t.addHouse}},[s("path",{attrs:{d:"M384 265H264v119h-17V265H128v-17h119V128h17v120h120v17z"}})])]),t._v(" "),s("div",{staticClass:"tabBar"},[s("div",{staticClass:"bar",class:{active:1==t.tabIndex},on:{click:function(a){return t.tabChange(1)}}},[s("span",{staticClass:"barInfo"},[t._v(" 在售("),s("span",{domProps:{textContent:t._s(t.isSale)}}),t._v(") ")])]),t._v(" "),s("div",{staticClass:"bar",class:{active:2==t.tabIndex},on:{click:function(a){return t.tabChange(2)}}},[s("div",{staticClass:"barInfo"},[t._v("停售("),s("span",{domProps:{textContent:t._s(t.stopSale)}}),t._v(")")])]),t._v(" "),s("div",{staticClass:"bar",class:{active:3==t.tabIndex},on:{click:function(a){return t.tabChange(3)}}},[s("div",{staticClass:"barInfo"},[t._v("待完善("),s("span",{domProps:{textContent:t._s(t.waitSale)}}),t._v(")")])])]),t._v(" "),s("div",{ref:"list_con",staticClass:"list_con"},[s("div",{ref:"wrapper",staticClass:"wrapper"},[s("div",{staticClass:"bscroll-container"},[s("div",{staticClass:"top-tip"},[s("span",{staticClass:"refresh-hook"},[t._v(t._s(t.pulldownMsg))])]),t._v(" "),s("ul",{ref:"content",staticClass:"content"},[t._l(t.data,function(a){return s("li",{staticClass:"item vux-1px-b",on:{click:function(s){return t.goDetails(a.id)}}},[s("div",{staticClass:"pics"},[s("img",{attrs:{src:a.imagePath,alt:""}}),t._v(" "),s("span",{staticClass:"grade",domProps:{textContent:t._s(a.commentPoint+"分")}})]),t._v(" "),s("div",{staticClass:"info"},[s("span",{domProps:{textContent:t._s(a.title)}}),t._v(" "),s("span",{domProps:{textContent:t._s("销量"+a.sales)}}),t._v(" "),s("span",{domProps:{textContent:t._s("最后编辑于 "+a.updateTime)}}),t._v(" "),s("span",{domProps:{textContent:t._s("￥"+a.price)}})]),t._v(" "),1!=t.tabIndex?s("span",{staticClass:"edit",on:{click:function(s){return t.edit(a)}}},[t._v("继续编辑")]):t._e()])}),t._v(" "),t.isMoreData?t._e():s("div",{staticClass:"no_data"},[s("span"),t._v(" "),s("span",[t._v("暂无更多数据")]),t._v(" "),s("span")])],2),t._v(" "),t.isMoreData?s("div",{staticClass:"bottom-tip"},[s("span",{staticClass:"loading-hook"},[t._v(t._s(t.pullupMsg))])]):t._e()])]),t._v(" "),s("div",{staticClass:"alert-hook",style:{display:t.alertHook}},[t._v("刷新成功")])])])},staticRenderFns:[]};var r=s("VU/8")(o,n,!1,function(t){s("pXW1"),s("ZzOf")},"data-v-d3930e2e",null);a.default=r.exports},pXW1:function(t,a){}});
//# sourceMappingURL=16.0f8386cae15ee40399d2.js.map