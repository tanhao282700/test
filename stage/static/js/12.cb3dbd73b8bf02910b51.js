webpackJsonp([12],{"+ZfU":function(t,e){},"/pjB":function(t,e){},Lag8:function(t,e){},NXHL:function(t,e,a){"use strict";t.exports=function(t,e,a){if("function"==typeof Array.prototype.find)return t.find(e,a);a=a||this;var s,i=t.length;if("function"!=typeof e)throw new TypeError(e+" is not a function");for(s=0;s<i;s++)if(e.call(a,t[s],s,t))return t[s]}},"Y/8J":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("ngqk"),i=a("2FOq"),n=a("63CM"),o=a("pDNl"),r=a("rHil"),l=a("pFYg"),c=a.n(l),u=a("NXHL"),d=a.n(u),p={created:function(){this.uuid=Math.random().toString(36).substring(3,8)}},h=a("wmxo"),v=(h.a,String,String,Array,String,String,Boolean,String,Number,Object,Boolean,Array,{name:"selector",mixins:[p],created:function(){void 0!==this.value&&(this.currentValue=this.value)},beforeMount:function(){this.isIOS=/iPad|iPhone|iPod/.test(window.navigator.userAgent)},computed:{fixIos:function(){return!this.placeholder&&this.isEmptyValue(this.value)&&this.isIOS&&this.title},color:function(){return this.showPlaceholder?"#A9A9A9":""},processOptions:function(){var t=this;if(!this.options.length)return[];var e="object"===c()(this.options[0]);return e&&!this.valueMap?this.options:e&&this.valueMap?this.options.map(function(e){return{key:e[t.valueMap[0]],value:e[t.valueMap[1]]}}):this.options.map(function(t){return{key:t,value:t}})},showPlaceholder:function(){return!(!this.isEmptyValue(this.value)||!this.placeholder)},labelClass:function(){return this.$parent?{"vux-cell-justify":"justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign}:{}}},methods:{isEmptyValue:function(t){return void 0===t||""===t||null===t},cleanStyle:h.a,getFullValue:function(){var t=this;return this.value&&this.options.length?"object"!==c()(this.options[0])?this.value:this.valueMap?this.options.filter(function(e){return e[t.valueMap[0]]===t.value}):this.options.filter(function(e){return e.key===t.value}):null}},filters:{findByKey:function(t,e){var a=d()(e,function(e){return e.key===t});return a?a.value:t}},watch:{value:function(t){this.currentValue=t},currentValue:function(t){this.$emit("input",t),this.$emit("on-change",t)}},props:{title:String,direction:String,options:{type:Array,required:!0},name:String,placeholder:String,readonly:Boolean,value:[String,Number,Object,Boolean],valueMap:{type:Array,validator:function(t){return!(!t.length||2!==t.length)}}},data:function(){return{currentValue:"",isIOS:!1}}}),f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vux-selector weui-cell",class:{"weui-cell_select":!t.readonly,"weui-cell_select-after":t.title}},[t.title?a("div",{staticClass:"weui-cell__hd"},[a("label",{staticClass:"weui-label",class:t.labelClass,style:t.cleanStyle({width:t.$parent.labelWidth,textAlign:t.$parent.labelAlign,marginRight:t.$parent.labelMarginRight}),attrs:{for:"vux-selector-"+t.uuid},domProps:{innerHTML:t._s(t.title)}})]):t._e(),t._v(" "),t.readonly?a("div",{staticClass:"weui-cell__ft vux-selector-readonly"},[t._v("\n    "+t._s(t._f("findByKey")(t.value,t.processOptions))+"\n  ")]):a("div",{staticClass:"weui-cell__bd"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-select",style:t.cleanStyle({direction:t.direction,color:t.color}),attrs:{id:"vux-selector-"+t.uuid,name:t.name},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.currentValue=e.target.multiple?a:a[0]}}},[t.showPlaceholder?a("option",{domProps:{value:null===t.value?"null":"",selected:t.isEmptyValue(t.value)&&!!t.placeholder}},[t._v(t._s(t.placeholder))]):t._e(),t._v(" "),t.fixIos?a("option",{attrs:{disabled:""}}):t._e(),t._v(" "),t._l(t.processOptions,function(e){return a("option",{domProps:{value:e.key}},[t._v(t._s("rtl"===t.direction?e.value+"‎":e.value))])})],2)])])},staticRenderFns:[]};var m=a("VU/8")(v,f,!1,function(t){a("+ZfU")},null,null).exports,g=a("aTeQ"),_=(n.a,i.a,s.a,o.a,r.a,g.a,{name:"goodsAdd",directives:{TransferDom:n.a},components:{Previewer:i.a,VueCoreImageUpload:s.a,XInput:o.a,Group:r.a,Selector:m,XSwitch:g.a},data:function(){return{params:{imageList:[],goodsAttrItemDto:[],goodsAttrInfo:[],goodsClassInfo:[],id:"",merchantId:"",title:"",typeId:"",refundFlagValue:!0,price:"",stock:""},goodsType:"",specsList:[],specsDataList:[],goodsTypeList:[],list:[{key:"gd",value:"广东"},{key:"gx",value:"广西"}],defaultValue:"",value:"",images:[],previewList:[],uploadUrl:"http://zayzsh.zbtdvip.com/api/merchant/good/add/goods/baseInfo",options:{getThumbBoundsFn:function(t){var e=document.querySelectorAll(".previewer-demo-img")[t],a=window.pageYOffset||document.documentElement.scrollTop,s=e.getBoundingClientRect();return{x:s.left,y:s.top+a,w:s.width}}}}},methods:{getNextStep:function(){var t=this;if(this.params.title)if(this.params.price)if(this.params.stock)if(this.goodsType){var e=!0;this.specsDataList.map(function(t){t.specsValue?t.value.map(function(t){t.attrValue||(e=!1)}):e=!1}),e?(this.images.map(function(e){t.params.imageList.push({type:0,url:e})}),this.params.refundFlag=this.params.refundFlagValue?0:1,this.goodsTypeList.map(function(e){e.id===t.goodsType&&(e.isSelected=1,t.params.goodsClassInfo.push(e),t.params.typeId=e.id)}),this.specsDataList.map(function(e){t.specsList.findIndex(function(a,s,i){e.specsValue===a.attrId&&t.params.goodsAttrInfo.push({attrId:a.attrId,attrName:a.attrName,attrValueInfo:e.value})})}),this.$vux.loading.show({text:"加载中..."}),this.$http.fetchPost("/merchant/good/add/goods/baseInfo",this.params).then(function(e){t.$http.fetchGet("/merchant/good/get/goods/sku",{goodsId:e.data.data.id}).then(function(e){t.$vux.loading.hide();var a=e.data.data;a.goodsSkuInfo[0].memberPrice=t.params.price,a.goodsSkuInfo[0].stock=t.params.stock,t.$http.fetchPost("/merchant/good/add/goods/sku",a).then(function(e){200===e.data.code?t.$router.push({name:"goodsAddNextStep",query:{id:e.data.data.id}}):t.$vux.toast.show({text:e.data.message,position:"middle",type:"warn"})})})})):this.$vux.toast.show({text:"请完善商品规格信息",position:"middle",type:"warn"})}else this.$vux.toast.show({text:"请选择商品类型",position:"middle",type:"warn"});else this.$vux.toast.show({text:"请输入商品库存",position:"middle",type:"warn"});else this.$vux.toast.show({text:"请输入商品成本价",position:"middle",type:"warn"});else this.$vux.toast.show({text:"请输入商品标题",position:"middle",type:"warn"})},getPriceInfo:function(t){var e=this;this.$http.fetchGet("/merchant/good/get/goods/sku",{goodsId:this.$route.query.id}).then(function(t){e.params.stock=t.data.data.goodsSkuInfo[0].stock||"",e.params.price=t.data.data.goodsSkuInfo[0].memberPrice||""})},addChildValue:function(t){this.specsDataList[t].value.push({val:""})},deleteChildValue:function(t,e){this.specsDataList[t].value.splice(e,1)},addSpecial:function(){this.specsDataList.length<this.specsList.length&&this.specsDataList.push({specsName:"",specsValue:"",value:[{val:""}]})},deleteSpecs:function(t){this.specsDataList.splice(t,1),this.specsChange()},specsChange:function(){var t=this;this.specsList.map(function(e){var a=!1;t.specsDataList.map(function(t){e.attrId===t.specsValue&&(a=!0)}),e.isReadonly=a})},getBaseInfo:function(){var t=this;this.$http.fetchGet("/merchant/good/get/goods/baseInfo",{goodsId:this.$route.query.id}).then(function(e){setTimeout(function(){t.$vux.loading.hide()},500),t.specsList=e.data.data.goodsAttrItemDto,t.specsList.map(function(t,e){t.isReadonly=!1}),t.goodsTypeList=e.data.data.goodsClassInfo,t.params.goodsAttrItemDto=e.data.data.goodsAttrItemDto,t.params.title=e.data.data.title,0===e.data.data.refundFlag?t.params.refundFlagValue=!0:t.params.refundFlagValue=!1,e.data.data.imageList.map(function(e){t.images.push(e.url)}),e.data.data.goodsClassInfo.map(function(e){1===e.isSelected&&(t.goodsType=e.id,t.params.goodsClassInfo.push(e))}),e.data.data.goodsAttrInfo.length>0?(e.data.data.goodsAttrInfo.map(function(e){var a=[];e.attrValueInfo.map(function(t){a.push({attrValue:t.attrValue})}),console.log(e.attrId),t.specsDataList.push({specsName:e.attrName,specsValue:e.attrId,value:a})}),t.specsChange()):t.specsDataList.push({specsName:"",specsValue:"",value:[{attrValue:""}]})})},deletePic:function(t){this.images.splice(t,1),this.previewList.splice(t,1)},show:function(t){this.$refs.previewer.show(t)},imageuploaded:function(t){console.log(t)},imagechanged:function(t){var e=this,a=new FormData;a.append("files",t),this.$http.fetchPost("/merchant/common/image/upload",a,{headers:{"Content-Type":"multipart/form-data; boundary=----WebKitFormBoundaryJBcoeGdBCguPERbU"}}).then(function(t){e.images.push(t.data.data.path),e.previewList.push({src:t.data.data.path,msrc:t.data.data.path})})},getBack:function(){this.$router.go(-1)}},created:function(){this.$vux.loading.show({text:"加载中..."}),this.params.id=this.$route.query.id,this.params.merchantId=this.$store.state.merchantId,this.getBaseInfo(),this.$route.query.id&&this.getPriceInfo()}}),y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"goodsAdd"},[a("div",{staticClass:"iosHeader vux-1px-b"},[a("svg",{staticClass:"vux-x-icon vux-x-icon-ios-arrow-left left",attrs:{type:"ios-arrow-left",size:"60",xmlns:"http://www.w3.org/2000/svg",width:"60",height:"60",viewBox:"0 0 512 512"},on:{click:t.getBack}},[a("path",{attrs:{d:"M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"}})]),t._v(" "),a("span",[t._v("添加商品")])]),t._v(" "),a("div",{staticClass:"goodsAdd_con"},[a("div",{staticClass:"upload"},[t._m(0),t._v(" "),a("div",{staticClass:"imgs"},[t._l(t.images,function(e,s){return a("div",{staticClass:"pics"},[a("img",{staticClass:"previewer-demo-img uploadPics",attrs:{src:e,alt:""},on:{click:function(e){return t.show(s)}}}),t._v(" "),a("span",{staticClass:"deleteBtn icon iconfont",on:{click:function(e){return t.deletePic(s)}}},[t._v("")])])}),t._v(" "),a("div",{staticClass:"pics upload_button"},[a("vue-core-image-upload",{class:["btn","btn-primary"],attrs:{crop:!1,isXhr:!1,inputAccept:"image/*","max-file-size":5242880,url:t.uploadUrl},on:{imageuploaded:t.imageuploaded,imagechanged:t.imagechanged}},[a("div",{staticClass:"pic_btn"},[a("span"),t._v(" "),a("span",[t._v("上传照片")])])])],1)],2)]),t._v(" "),a("div",{staticClass:"defaultLine",staticStyle:{"margin-top":"0.2rem"}},[a("group",[a("x-input",{attrs:{title:"商品标题",placeholder:"请输入商品标题"},model:{value:t.params.title,callback:function(e){t.$set(t.params,"title",e)},expression:"params.title"}})],1)],1),t._v(" "),a("div",{staticClass:"defaultLine"},[a("group",[a("x-input",{attrs:{title:"商品成本价(元)",placeholder:"请输入商品成本价"},model:{value:t.params.price,callback:function(e){t.$set(t.params,"price",e)},expression:"params.price"}})],1)],1),t._v(" "),a("div",{staticClass:"defaultLine"},[a("group",[a("x-input",{attrs:{title:"商品库存",placeholder:"请输入商品库存"},model:{value:t.params.stock,callback:function(e){t.$set(t.params,"stock",e)},expression:"params.stock"}})],1)],1),t._v(" "),a("div",{staticClass:"defaultLine"},[a("group",[a("selector",{ref:"defaultValueRef",attrs:{"value-map":["id","name"],placeholder:"请选择商品类型",title:"商品类型",direction:"rtl",options:t.goodsTypeList},model:{value:t.goodsType,callback:function(e){t.goodsType=e},expression:"goodsType"}})],1)],1),t._v(" "),a("div",{staticClass:"defaultTitle"},[a("span",[t._v("商品规格")]),t._v(" "),t.specsDataList.length<t.specsList.length?a("span",{staticClass:"addIcon",on:{click:t.addSpecial}},[t._v("添加规格项目")]):t._e()]),t._v(" "),t._l(t.specsDataList,function(e,s){return a("div",{staticClass:"specialLine"},[a("div",{staticClass:"selectLine"},[a("span",{staticClass:"tit"},[t._v("规格名")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.specsValue,expression:"item.specsValue"}],attrs:{name:"",id:""},on:{change:[function(a){var s=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(e,"specsValue",a.target.multiple?s:s[0])},t.specsChange]}},t._l(t.specsList,function(e){return a("option",{attrs:{disabled:e.isReadonly},domProps:{value:e.attrId,textContent:t._s(e.attrName)}})}),0),t._v(" "),a("div",{staticClass:"icon"},[a("svg",{staticClass:"vux-x-icon vux-x-icon-ios-arrow-right",attrs:{type:"ios-arrow-right",size:"30",xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 512 512"}},[a("path",{attrs:{d:"M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"}})])])]),t._v(" "),t._l(e.value,function(i,n){return a("div",{staticClass:"defaultLine ggz"},[a("group",[a("x-input",{attrs:{title:"规格值",placeholder:"请输入规格值"},model:{value:i.attrValue,callback:function(e){t.$set(i,"attrValue",e)},expression:"child.attrValue"}})],1),t._v(" "),e.value.length>1?a("span",{staticClass:"myIcon icon iconfont",on:{click:function(e){return t.deleteChildValue(s,n)}}},[t._v("")]):t._e()],1)}),t._v(" "),a("div",{staticClass:"addLine"},[a("div",{on:{click:function(e){return t.addChildValue(s)}}},[a("span",{staticClass:"icon iconfont"},[t._v("")]),t._v(" "),a("span",[t._v("添加规格")])]),t._v(" "),t.specsDataList.length>1?a("div",{staticStyle:{"margin-left":"0.4rem"},on:{click:function(e){return t.deleteSpecs(s)}}},[a("span",{staticClass:"icon iconfont"},[t._v("")]),t._v(" "),a("span",[t._v("删除")])]):t._e()])],2)}),t._v(" "),a("div",{staticClass:"switchLine"},[a("group",[a("x-switch",{attrs:{title:"支持退款"},model:{value:t.params.refundFlagValue,callback:function(e){t.$set(t.params,"refundFlagValue",e)},expression:"params.refundFlagValue"}})],1)],1)],2),t._v(" "),a("div",{staticClass:"bottom",on:{click:t.getNextStep}},[t._v("下一步")]),t._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[a("previewer",{ref:"previewer",attrs:{list:t.previewList,options:t.options}})],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n        商品图片"),e("span",[this._v("(最多上传六张，建议使用横图)")])])}]};var w=a("VU/8")(_,y,!1,function(t){a("Lag8"),a("/pjB")},"data-v-4bce8c74",null);e.default=w.exports}});
//# sourceMappingURL=12.cb3dbd73b8bf02910b51.js.map