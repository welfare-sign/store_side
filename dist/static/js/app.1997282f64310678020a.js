webpackJsonp([2],{"2lnh":function(t,e){},"3k2l":function(t,e){},"4gXI":function(t,e,i){"use strict";function n(t){o.config({debug:!1,appId:t.appid,timestamp:t.timestamp,nonceStr:t.noncestr,signature:t.signature,jsApiList:l}),o.ready(function(){o.checkJsApi({jsApiList:l,success:function(t){console.log(t)}})}),o.error(function(t){console.log(t.message)})}function r(t){Object(s.f)({url:t}).then(function(t){var e=t.data;sessionStorage.setItem("appid",e.appid),n(e)})}function a(){o.scanQRCode({needResult:0,scanType:["qrCode","barCode"],success:function(t){console.log(t)}})}e.a=r,e.b=a;var s=i("gyMJ"),o=i("fxnj"),l=["scanQRCode"]},D1XQ:function(t,e){},DPlV:function(t,e){},DpJg:function(t,e,i){"use strict";e.a="http://api.fuliqian.com/"},KXcw:function(t,e){},NHnr:function(t,e,i){"use strict";function n(t){i("Wb6L")}function r(t){i("RMDY")}function a(t){i("qHQD")}function s(t){i("KXcw")}function o(t){i("DPlV")}function l(t){return t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1}function u(t){var e,i,n,r;for(e="",n=t.length,i=0;i<n;i++)r=t.charCodeAt(i),r>=1&&r<=127?e+=t.charAt(i):r>2047?(e+=String.fromCharCode(224|r>>12&15),e+=String.fromCharCode(128|r>>6&63),e+=String.fromCharCode(128|r>>0&63)):(e+=String.fromCharCode(192|r>>6&31),e+=String.fromCharCode(128|r>>0&63));return e}function c(t){return t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1}function h(t){var e,i,n,r;for(e="",n=t.length,i=0;i<n;i++)r=t.charCodeAt(i),r>=1&&r<=127?e+=t.charAt(i):r>2047?(e+=String.fromCharCode(224|r>>12&15),e+=String.fromCharCode(128|r>>6&63),e+=String.fromCharCode(128|r>>0&63)):(e+=String.fromCharCode(192|r>>6&31),e+=String.fromCharCode(128|r>>0&63));return e}function d(t){i("3k2l")}function f(t){i("QX3Y")}function p(t){i("2lnh")}function m(t){i("aiyf")}function v(){var t=navigator.userAgent;return t.indexOf("iPhone")>-1||t.indexOf("Mac OS")>-1}function g(t){return v()?window.location.href:window.location.origin+t.fullPath}Object.defineProperty(e,"__esModule",{value:!0});var b=i("7+uW"),_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},y=[],w={render:_,staticRenderFns:y},S=w,x=i("VU/8"),C=n,k=x(null,S,!1,C,null,null),V=k.exports,$=i("YaEn"),E=i("0FxO"),N=(Boolean,Boolean,Boolean,String,String,Boolean,String,Object,Array,{name:"x-button",props:{type:{default:"default"},disabled:Boolean,mini:Boolean,plain:Boolean,text:String,actionType:String,showLoading:Boolean,link:[String,Object],gradients:{type:Array,validator:function(t){return 2===t.length}}},methods:{onClick:function(){!this.disabled&&Object(E.a)(this.link,this.$router)}},computed:{noBorder:function(){return Array.isArray(this.gradients)},buttonStyle:function(){if(this.gradients)return{background:"linear-gradient(90deg, "+this.gradients[0]+", "+this.gradients[1]+")",color:"#FFFFFF"}},classes:function(){return[{"weui-btn_disabled":!this.plain&&this.disabled,"weui-btn_plain-disabled":this.plain&&this.disabled,"weui-btn_mini":this.mini,"vux-x-button-no-border":this.noBorder},this.plain?"":"weui-btn_"+this.type,this.plain?"weui-btn_plain-"+this.type:"",this.showLoading?"weui-btn_loading":""]}}}),A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"weui-btn",class:t.classes,style:t.buttonStyle,attrs:{disabled:t.disabled,type:t.actionType},on:{click:t.onClick}},[t.showLoading?i("i",{staticClass:"weui-loading"}):t._e(),t._v(" "),t._t("default",[t._v(t._s(t.text))])],2)},B=[],R={render:A,staticRenderFns:B},T=R,I=i("VU/8"),O=r,q=I(N,T,!1,O,null,null),W=q.exports,F=i("wmxo"),D=(F.a,String,String,String,String,String,String,Number,String,String,{name:"group",methods:{cleanStyle:F.a},props:{title:String,titleColor:String,labelWidth:String,labelAlign:String,labelMarginRight:String,gutter:[String,Number],footerTitle:String,footerTitleColor:String}}),j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.title?i("div",{staticClass:"weui-cells__title",style:t.cleanStyle({color:t.titleColor}),domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),t._t("title"),t._v(" "),i("div",{staticClass:"weui-cells",class:{"vux-no-group-title":!t.title},style:t.cleanStyle({marginTop:"number"==typeof t.gutter?t.gutter+"px":t.gutter})},[t._t("after-title"),t._v(" "),t._t("default")],2),t._v(" "),t.footerTitle?i("div",{staticClass:"weui-cells__title vux-group-footer-title",style:t.cleanStyle({color:t.footerTitleColor}),domProps:{innerHTML:t._s(t.footerTitle)}}):t._e()],2)},L=[],M={render:j,staticRenderFns:L},z=M,P=i("VU/8"),H=a,U=P(D,z,!1,H,null,null),K=U.exports,X=(Boolean,String,Object,Boolean,Boolean,String,{name:"cell-box",props:{isLink:Boolean,link:[String,Object],borderIntent:{type:Boolean,default:!0},noFlex:Boolean,alignItems:String},computed:{style:function(){if(this.alignItems)return{"align-items":this.alignItems}},className:function(){return{"vux-tap-active":this.isLink||!!this.link,"weui-cell_access":this.isLink||!!this.link,"vux-cell-no-border-intent":!this.borderIntent}}},methods:{onClick:function(){this.link&&Object(E.a)(this.link,this.$router)}}}),Q=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-cell-box weui-cell",class:t.className,style:t.style,on:{click:t.onClick}},[t._t("default")],2)},J=[],Y={render:Q,staticRenderFns:J},Z=Y,G=i("VU/8"),tt=s,et=G(X,Z,!1,tt,null,null),it=et.exports,nt=i("iRq5"),rt=i.n(nt),at=i("p3QP"),st=i("OFgA"),ot=(st.a,String,String,String,String,String,Number,Object,String,Number,String,{name:"x-img",mixins:[st.a],created:function(){this.$vux&&this.$vux.bus&&this.$vux.bus.$on("vux:after-view-enter",this.init)},methods:{init:function(){var t=this;this.blazy&&this.blazy.destroy(),this.$el.src=this.defaultSrc,this.$el.className=this.$el.className.replace("b-loaded",""),this.blazy=new rt.a({scroller:this.scroller,container:this.container,selector:"#vux-ximg-"+this.uuid,offset:t.offset,errorClass:t.errorClass,successClass:t.successClass,separator:t.separator,success:function(e){t.$emit("on-success",t.src,e)},error:function(e,i){t.$emit("on-error",t.src,e,i)}})}},mounted:function(){var t=this;this.$el.setAttribute("id","vux-ximg-"+this.uuid),this.$nextTick(function(){setTimeout(function(){t.init()},t.delay)}),Object(at.a)()},computed:{currentSrc:function(){return Object(at.b)()&&this.webpSrc?this.webpSrc:this.src}},props:{src:String,webpSrc:String,defaultSrc:{type:String,default:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="},errorClass:String,successClass:String,offset:{type:Number,default:100},scroller:Object,container:String,delay:{type:Number,default:0},separator:String},watch:{src:function(t){this.init()}},beforeDestroy:function(){this.blazy&&this.blazy.destroy(),this.blazy=null,this.$vux&&this.$vux.bus&&this.$vux.bus.$off("vux:after-view-enter",this.init)}}),lt=function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{staticClass:"vux-x-img",attrs:{src:t.defaultSrc,"data-src":t.currentSrc}})},ut=[],ct={render:lt,staticRenderFns:ut},ht=ct,dt=i("VU/8"),ft=o,pt=dt(ot,ht,!1,ft,null,null),mt=pt.exports,vt=i("0k+n"),gt=i.n(vt),bt=i("LpmL"),_t=i.n(bt),yt=(String,Number,String,String,String,String,{name:"qrcode",props:{value:String,size:{type:Number,default:160},level:{type:String,default:"L"},bgColor:{type:String,default:"#FFFFFF"},fgColor:{type:String,default:"#000000"},type:{type:String,default:"img"}},mounted:function(){var t=this;this.$nextTick(function(){t.render()})},data:function(){return{imgData:""}},watch:{value:function(){this.render()},size:function(){this.render()},level:function(){this.render()},bgColor:function(){this.render()},fgColor:function(){this.render()}},methods:{render:function(){var t=this;if(void 0!==this.value){var e=new gt.a(-1,_t.a[this.level]);e.addData(h(this.value)),e.make();var i=this.$refs.canvas,n=i.getContext("2d"),r=e.modules,a=this.size/r.length,s=this.size/r.length,o=(window.devicePixelRatio||1)/c(n);i.height=i.width=this.size*o,n.scale(o,o),r.forEach(function(e,i){e.forEach(function(e,r){n.fillStyle=e?t.fgColor:t.bgColor;var o=Math.ceil((r+1)*a)-Math.floor(r*a),l=Math.ceil((i+1)*s)-Math.floor(i*s);n.fillRect(Math.round(r*a),Math.round(i*s),o,l)})}),"img"===this.type&&(this.imgData=i.toDataURL("image/png"))}}}}),wt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("canvas",{directives:[{name:"show",rawName:"v-show",value:"canvas"===t.type,expression:"type === 'canvas'"}],ref:"canvas",style:{height:t.size+"px",width:t.size+"px"},attrs:{height:t.size,width:t.size}}),t._v(" "),"img"===t.type?i("img",{style:{height:t.size+"px",width:t.size+"px"},attrs:{src:t.imgData}}):t._e()])},St=[],xt={render:wt,staticRenderFns:St},Ct=xt,kt=i("VU/8"),Vt=kt(yt,Ct,!1,null,null,null),$t=Vt.exports,Et={name:"inline-desc"},Nt=function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"vux-label-desc"},[t._t("default")],2)},At=[],Bt={render:Nt,staticRenderFns:At},Rt=Bt,Tt=i("VU/8"),It=d,Ot=Tt(Et,Rt,!1,It,null,null),qt=Ot.exports,Wt=i("2IIR"),Ft=i("vLYD"),Dt=(Object(Wt.a)(),{name:"cell",components:{InlineDesc:qt},props:Object(Wt.a)(),created:function(){},beforeMount:function(){this.hasTitleSlot=!!this.$slots.title,this.$slots.value},computed:{labelStyles:function(){return Object(F.a)({width:Object(Ft.a)(this,"labelWidth"),textAlign:Object(Ft.a)(this,"labelAlign"),marginRight:Object(Ft.a)(this,"labelMarginRight")})},valueClass:function(){return{"vux-cell-primary":"content"===this.primary||"left"===this.valueAlign,"vux-cell-align-left":"left"===this.valueAlign,"vux-cell-arrow-transition":!!this.arrowDirection,"vux-cell-arrow-up":"up"===this.arrowDirection,"vux-cell-arrow-down":"down"===this.arrowDirection}},labelClass:function(){return{"vux-cell-justify":this.$parent&&("justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign)}},style:function(){if(this.alignItems)return{alignItems:this.alignItems}}},methods:{onClick:function(){!this.disabled&&Object(E.a)(this.link,this.$router)}},data:function(){return{hasTitleSlot:!0,hasMounted:!1}}}),jt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-cell",class:{"vux-tap-active":t.isLink||!!t.link,"weui-cell_access":t.isLink||!!t.link,"vux-cell-no-border-intent":!t.borderIntent,"vux-cell-disabled":t.disabled},style:t.style,on:{click:t.onClick}},[i("div",{staticClass:"weui-cell__hd"},[t._t("icon")],2),t._v(" "),i("div",{staticClass:"vux-cell-bd",class:{"vux-cell-primary":"title"===t.primary&&"left"!==t.valueAlign}},[i("p",[t.title||t.hasTitleSlot?i("label",{staticClass:"vux-label",class:t.labelClass,style:t.labelStyles},[t._t("title",[t._v(t._s(t.title))])],2):t._e(),t._v(" "),t._t("after-title")],2),t._v(" "),i("inline-desc",[t._t("inline-desc",[t._v(t._s(t.inlineDesc))])],2)],1),t._v(" "),i("div",{staticClass:"weui-cell__ft",class:t.valueClass},[t._t("value"),t._v(" "),t._t("default",[t._v(t._s(t.value))]),t._v(" "),t.isLoading?i("i",{staticClass:"weui-loading"}):t._e()],2),t._v(" "),t._t("child")],2)},Lt=[],Mt={render:jt,staticRenderFns:Lt},zt=Mt,Pt=i("VU/8"),Ht=f,Ut=Pt(Dt,zt,!1,Ht,null,null),Kt=Ut.exports,Xt=i("n6Wb"),Qt=i("yD8N"),Jt=i("fZjL"),Yt=i.n(Jt),Zt=i("f6Hi"),Gt=(String,Boolean,{name:"icon",props:{type:String,isMsg:Boolean},computed:{className:function(){return"weui-icon weui_icon_"+this.type+" weui-icon-"+this.type.replace(/_/g,"-")}}}),te=function(){var t=this,e=t.$createElement;return(t._self._c||e)("i",{class:[t.className,t.isMsg?"weui-icon_msg":""]})},ee=[],ie={render:te,staticRenderFns:ee},ne=ie,re=i("VU/8"),ae=p,se=re(Gt,ne,!1,ae,null,null),oe=se.exports,le=i("rLAy"),ue=i("2LX0"),ce=i.n(ue),he=i("Ewe+"),de=i.n(he),fe=i("nror"),pe=i("lFEC"),me=i.n(pe),ve={email:{fn:ce.a,msg:"邮箱格式"},"china-mobile":{fn:function(t){return de()(t,"zh-CN")},msg:"手机号码"},"china-name":{fn:function(t){return t.length>=2&&t.length<=6},msg:"中文姓名"}},ge=(Zt.a,le.a,String,String,String,String,Number,String,Boolean,Boolean,String,String,String,Function,Number,Number,Boolean,String,String,String,String,String,String,Boolean,String,Number,String,String,String,Boolean,{email:{fn:ce.a,msg:"邮箱格式"},"china-mobile":{fn:function(t){return de()(t,"zh-CN")},msg:"手机号码"},"china-name":{fn:function(t){return t.length>=2&&t.length<=6},msg:"中文姓名"}}),be={name:"x-input",created:function(){var t=this;this.currentValue=void 0===this.value||null===this.value?"":this.mask?this.maskValue(this.value):this.value,!this.required||void 0!==this.currentValue&&""!==this.currentValue||(this.valid=!1),this.handleChangeEvent=!0,this.debounce&&(this._debounce=Object(fe.a)(function(){t.$emit("on-change",t.currentValue)},this.debounce))},beforeMount:function(){this.$slots&&this.$slots["restricted-label"]&&(this.hasRestrictedLabel=!0),this.$slots&&this.$slots["right-full-height"]&&(this.hasRightFullHeightSlot=!0)},beforeDestroy:function(){this._debounce&&this._debounce.cancel(),window.removeEventListener("resize",this.scrollIntoView)},mixins:[Zt.a],components:{Icon:oe,InlineDesc:qt,Toast:le.a},props:{title:{type:String,default:""},type:{type:String,default:"text"},placeholder:String,value:[String,Number],name:String,readonly:Boolean,disabled:Boolean,keyboard:String,inlineDesc:String,isType:[String,Function],min:Number,max:Number,showClear:{type:Boolean,default:!0},equalWith:String,textAlign:String,autocomplete:{type:String,default:"off"},autocapitalize:{type:String,default:"off"},autocorrect:{type:String,default:"off"},spellcheck:{type:String,default:"false"},novalidate:{type:Boolean,default:!1},iconType:String,debounce:Number,placeholderAlign:String,labelWidth:String,mask:String,shouldToastError:{type:Boolean,default:!0}},computed:{labelStyles:function(){var t=this.$parent,e=void 0===t?{}:t;return{width:this.labelWidthComputed||e.labelWidth||this.labelWidthComputed,textAlign:e.labelAlign,marginRight:e.labelMarginRight}},labelClass:function(){return{"vux-cell-justify":this.$parent&&("justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign)}},pattern:function(){if("number"===this.keyboard||"china-mobile"===this.isType)return"[0-9]*"},labelWidthComputed:function(){var t=this.title.replace(/[^x00-xff]/g,"00").length/2+1;if(t<10)return t+"em"},hasErrors:function(){return Yt()(this.errors).length>0},inputStyle:function(){if(this.textAlign)return{textAlign:this.textAlign}},showWarn:function(){return!this.novalidate&&!this.equalWith&&!this.valid&&this.firstError&&(this.touched||this.forceShowError)}},mounted:function(){window.addEventListener("resize",this.scrollIntoView)},methods:{scrollIntoView:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;/iphone/i.test(navigator.userAgent),"INPUT"!==document.activeElement.tagName&&"TEXTAREA"!==document.activeElement.tagName||setTimeout(function(){t.$refs.input.scrollIntoViewIfNeeded(!0)},e)},onClickErrorIcon:function(){this.shouldToastError&&this.firstError&&(this.showErrorToast=!0),this.$emit("on-click-error-icon",this.firstError)},maskValue:function(t){return this.mask?me.a.toPattern(t,this.mask):t},reset:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.dirty=!1,this.currentValue=t,this.firstError="",this.valid=!0},clear:function(){this.currentValue="",this.focus(),this.$emit("on-click-clear-icon")},focus:function(){this.$refs.input.focus()},blur:function(){this.$refs.input.blur()},focusHandler:function(t){var e=this;this.$emit("on-focus",this.currentValue,t),this.isFocus=!0,setTimeout(function(){!e.$refs.input||e.$refs.input.scrollIntoViewIfNeeded(!1)},1e3)},onBlur:function(t){this.setTouched(),this.validate(),this.isFocus=!1,this.$emit("on-blur",this.currentValue,t)},onKeyUp:function(t){"Enter"===t.key&&(t.target.blur(),this.$emit("on-enter",this.currentValue,t))},getError:function(){var t=Yt()(this.errors)[0];this.firstError=this.errors[t]},validate:function(){if(void 0!==this.equalWith)return void this.validateEqual();if(this.errors={},!this.currentValue&&!this.required)return void(this.valid=!0);if(!this.currentValue&&this.required)return this.valid=!1,this.errors.required="必填哦",void this.getError();if("string"==typeof this.isType){var t=ge[this.isType];if(t){var e=this.currentValue;if("china-mobile"===this.isType&&"999 9999 9999"===this.mask&&(e=this.currentValue.replace(/\s+/g,"")),this.valid=t.fn(e),!this.valid)return this.forceShowError=!0,this.errors.format=t.msg+"格式不对哦~",void this.getError();delete this.errors.format}}if("function"==typeof this.isType){var i=this.isType(this.currentValue);if(this.valid=i.valid,!this.valid)return this.errors.format=i.msg,this.forceShowError=!0,void this.getError();delete this.errors.format}if(this.min){if(this.currentValue.length<this.min)return this.errors.min="最少应该输入"+this.min+"个字符哦",this.valid=!1,void this.getError();delete this.errors.min}if(this.max){if(this.currentValue.length>this.max)return this.errors.max="最多可以输入"+this.max+"个字符哦",this.valid=!1,void(this.forceShowError=!0);this.forceShowError=!1,delete this.errors.max}this.valid=!0},validateEqual:function(){return!this.equalWith&&this.currentValue?(this.valid=!1,void(this.errors.equal="输入不一致")):(this.dirty||this.currentValue.length>=this.equalWith.length)&&this.currentValue!==this.equalWith?(this.valid=!1,void(this.errors.equal="输入不一致")):void(!this.currentValue&&this.required?this.valid=!1:(this.valid=!0,delete this.errors.equal))},_getInputMaskSelection:function(t,e,i,n){if(!this.mask||n&&0===e)return t;if(0===e&&(e=this.lastDirection),e>0){if(!this.mask.substr(t-e,1).match(/[9SA]/))return this._getInputMaskSelection(t+1,e,i,!0)}return t}},data:function(){return{hasRightFullHeightSlot:!1,hasRestrictedLabel:!1,firstError:"",forceShowError:!1,hasLengthEqual:!1,valid:!0,currentValue:"",showErrorToast:!1,isFocus:!1}},watch:{mask:function(t){t&&this.currentValue&&(this.currentValue=this.maskValue(this.currentValue))},valid:function(){this.getError()},value:function(t){this.currentValue=t},equalWith:function(t){t&&this.equalWith?(t.length===this.equalWith.length&&(this.hasLengthEqual=!0),this.validateEqual()):this.validate()},currentValue:function(t,e){var i=this,n=null;!this.equalWith&&t&&this.validateEqual(),t&&this.equalWith?(t.length===this.equalWith.length&&(this.hasLengthEqual=!0),this.validateEqual()):this.validate();try{n=this.$refs.input.selectionStart;var r=t.length-e.length;n=this._getInputMaskSelection(n,r,this.maskValue(t)),this.lastDirection=r}catch(t){}this.$emit("input",this.maskValue(t)),this.$nextTick(function(){i.$refs.input.selectionStart!==n&&(i.$refs.input.selectionStart=n,i.$refs.input.selectionEnd=n),i.currentValue!==i.maskValue(t)&&(i.currentValue=i.maskValue(t))}),this._debounce?this._debounce():this.$emit("on-change",t)}}},_e=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-x-input weui-cell",class:{"weui-cell_warn":t.showWarn,disabled:t.disabled,"vux-x-input-has-right-full":t.hasRightFullHeightSlot}},[i("div",{staticClass:"weui-cell__hd"},[t.hasRestrictedLabel?i("div",{style:t.labelStyles},[t._t("restricted-label")],2):t._e(),t._v(" "),t._t("label",[t.title?i("label",{staticClass:"weui-label",class:t.labelClass,style:{width:t.labelWidth||t.$parent.labelWidth||t.labelWidthComputed,textAlign:t.$parent.labelAlign,marginRight:t.$parent.labelMarginRight},attrs:{for:"vux-x-input-"+t.uuid},domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),t.inlineDesc?i("inline-desc",[t._v(t._s(t.inlineDesc))]):t._e()])],2),t._v(" "),i("div",{staticClass:"weui-cell__bd weui-cell__primary",class:t.placeholderAlign?"vux-x-input-placeholder-"+t.placeholderAlign:""},[t.type&&"text"!==t.type?t._e():i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:t.inputStyle,attrs:{id:"vux-x-input-"+t.uuid,maxlength:t.max,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,spellcheck:t.spellcheck,type:"text",name:t.name,pattern:t.pattern,placeholder:t.placeholder,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.onBlur,keyup:t.onKeyUp,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}),t._v(" "),"number"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:t.inputStyle,attrs:{id:"vux-x-input-"+t.uuid,maxlength:t.max,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,spellcheck:t.spellcheck,type:"number",name:t.name,pattern:t.pattern,placeholder:t.placeholder,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.onBlur,keyup:t.onKeyUp,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"email"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:t.inputStyle,attrs:{id:"vux-x-input-"+t.uuid,maxlength:t.max,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,spellcheck:t.spellcheck,type:"email",name:t.name,pattern:t.pattern,placeholder:t.placeholder,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.onBlur,keyup:t.onKeyUp,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"password"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:t.inputStyle,attrs:{id:"vux-x-input-"+t.uuid,maxlength:t.max,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,spellcheck:t.spellcheck,type:"password",name:t.name,pattern:t.pattern,placeholder:t.placeholder,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.onBlur,keyup:t.onKeyUp,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"tel"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:t.inputStyle,attrs:{id:"vux-x-input-"+t.uuid,maxlength:t.max,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,spellcheck:t.spellcheck,type:"tel",name:t.name,pattern:t.pattern,placeholder:t.placeholder,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.onBlur,keyup:t.onKeyUp,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e()]),t._v(" "),i("div",{staticClass:"weui-cell__ft"},[i("icon",{directives:[{name:"show",rawName:"v-show",value:!t.hasRightFullHeightSlot&&!t.equalWith&&t.showClear&&""!==t.currentValue&&!t.readonly&&!t.disabled&&t.isFocus,expression:"!hasRightFullHeightSlot && !equalWith && showClear && currentValue !== '' && !readonly && !disabled && isFocus"}],attrs:{type:"clear"},nativeOn:{click:function(e){return t.clear(e)}}}),t._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:t.showWarn,expression:"showWarn"}],staticClass:"vux-input-icon",attrs:{type:"warn",title:t.valid?"":t.firstError},nativeOn:{click:function(e){return t.onClickErrorIcon(e)}}}),t._v(" "),!t.novalidate&&t.hasLengthEqual&&t.dirty&&t.equalWith&&!t.valid?i("icon",{staticClass:"vux-input-icon",attrs:{type:"warn"},nativeOn:{click:function(e){return t.onClickErrorIcon(e)}}}):t._e(),t._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:!t.novalidate&&t.equalWith&&t.equalWith===t.currentValue&&t.valid,expression:"!novalidate && equalWith && equalWith === currentValue && valid"}],attrs:{type:"success"}}),t._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:t.novalidate&&"success"===t.iconType,expression:"novalidate && iconType === 'success'"}],staticClass:"vux-input-icon",attrs:{type:"success"}}),t._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:t.novalidate&&"error"===t.iconType,expression:"novalidate && iconType === 'error'"}],staticClass:"vux-input-icon",attrs:{type:"warn"}}),t._v(" "),t._t("right"),t._v(" "),t.hasRightFullHeightSlot?i("div",{staticClass:"vux-x-input-right-full"},[t._t("right-full-height")],2):t._e()],2),t._v(" "),i("toast",{attrs:{type:"text",width:"auto",time:600},model:{value:t.showErrorToast,callback:function(e){t.showErrorToast=e},expression:"showErrorToast"}},[t._v(t._s(t.firstError))])],1)},ye=[],we={render:_e,staticRenderFns:ye},Se=we,xe=i("VU/8"),Ce=m,ke=xe(be,Se,!1,Ce,null,null),Ve=ke.exports,$e=i("3BeM"),Ee=i("EbL4"),Ne=i.n(Ee),Ae=(String,Boolean,Number,Number,Number,Number,Object,{name:"countup",mounted:function(){var t=this;this.$nextTick(function(){t._countup=new Ne.a(t.$el,t.startVal,t.endVal,t.decimals,t.duration,t.options),t.start&&t._countup.start()})},props:{tag:{type:String,default:"span"},start:{type:Boolean,default:!0},startVal:{type:Number,default:0},endVal:{type:Number,required:!0},decimals:{type:Number,default:0},duration:{type:Number,default:2},options:{type:Object,default:function(){return{}}}},render:function(t){return t(this.tag,{},[this.startVal])},watch:{start:function(t){t&&this._countup.start()},endVal:function(t){this._countup.update(t)}}}),Be=i("VU/8"),Re=Be(Ae,null,!1,null,null,null),Te=Re.exports;b.a.component("x-button",W),b.a.component("group",K),b.a.component("cell-box",it),b.a.component("x-img",mt),b.a.component("qrcode",$t),b.a.component("cell",Kt),b.a.component("x-input",Ve),b.a.component("countup",Te),b.a.use(Xt.a),b.a.use(Qt.a),b.a.use($e.a);var Ie=(i("feh2"),i("UL0t"),i("4gXI"));$.a.beforeEach(function(t,e,i){var n=g(t);Object(Ie.a)(n),i()}),b.a.config.productionTip=!1,new b.a({router:$.a,render:function(t){return t(V)}}).$mount("#app-box")},QX3Y:function(t,e){},RK4T:function(t,e){},RMDY:function(t,e){},UL0t:function(t,e){},Wb6L:function(t,e){},YaEn:function(t,e,i){"use strict";function n(t){i("D1XQ")}function r(t){i("ttOB")}function a(t){i("aDuS")}function s(t){i("RK4T")}var o=i("7+uW"),l=i("/ocq"),u={name:"WCard"},c=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"w-card"},[t._t("default")],2)},h=[],d={render:c,staticRenderFns:h},f=d,p=i("VU/8"),m=n,v=p(u,f,!1,m,"data-v-17e32d82",null),g=v.exports,b=(String,String,String,String,{name:"WMerchantItem",props:{name:{type:String,required:!0},address:{type:String,required:!0},desc:{type:String,required:!0},logo:{type:String,required:!0}}}),_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w-merchant-item"},[i("x-img",{staticClass:"logo",attrs:{"default-src":t.logo}}),t._v(" "),i("div",{staticClass:"content"},[i("div",[i("h2",[t._v(t._s(t.name))]),t._v(" "),i("p",{staticClass:"sub"},[t._v(t._s(t.address))])]),t._v(" "),i("div",[i("span",{staticClass:"desc-label"},[t._v(t._s(t.desc))])])])],1)},y=[],w={render:_,staticRenderFns:y},S=w,x=i("VU/8"),C=r,k=x(b,S,!1,C,"data-v-7daaa1e3",null),V=k.exports,$=i("gyMJ"),E=i("4gXI"),N=i("mw3O"),A=i.n(N),B=i("DpJg"),R={name:"Home",components:{WCard:g,WMerchantItem:V},data:function(){return{info:{}}},created:function(){this.initHome()},methods:{initHome:function(){this.getInfo()},getInfo:function(){var t=this;Object($.a)().then(function(e){var i=e.data;document.title=i.store_name,i.unaccalimed=i.total_receive-i.received,i.desc="签到"+i.checkin_days+"天，即享"+i.checkin_num+"瓶啤酒";var n={filename:i.store_avatar,type:"avatar"},r=/type=avatar$/i;i.store_avatar=r.test(i.store_avatar)?i.store_avatar:B.a+"v1/files/download?"+A.a.stringify(n),t.info=i})},handleScanCode:function(){Object(E.b)()}}},T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("w-card",{staticClass:"merchant-info"},[i("w-merchant-item",{attrs:{name:t.info.store_name,address:t.info.address,desc:t.info.desc,logo:t.info.store_avatar}})],1),t._v(" "),i("w-card",{staticClass:"datas"},[i("group",[i("cell",{attrs:{title:"已领取",value:t.info.received}}),t._v(" "),i("cell",{attrs:{title:"已核销",value:t.info.received}}),t._v(" "),i("cell",{attrs:{title:"未领取",value:t.info.unaccalimed}})],1)],1),t._v(" "),i("x-button",{staticClass:"home-btn",attrs:{type:"primary"},nativeOn:{click:function(e){return t.handleScanCode(e)}}},[t._v("扫码核销")])],1)},I=[],O={render:T,staticRenderFns:I},q=O,W=i("VU/8"),F=a,D=W(R,q,!1,F,"data-v-71b9b046",null),j=D.exports,L={name:"WriteOff",data:function(){return{writeoffDone:!1,customerId:"",customerInfo:{},storeInfo:{},record:{},writeoffNumber:"",thisWriteoffNum:0}},computed:{num:function(){var t=this.record,e=t.total_receive-t.received;return this.writeoffDone?this.WriteoffNum:e}},created:function(){var t=this.$route.query;this.customerId=t&&t.customer_id,this.initWriteOff()},methods:{initWriteOff:function(){var t=this;Object($.e)({customer_id:this.customerId}).then(function(e){var i=e.data;document.title=i.merchant.store_name,t.customerInfo=i.customer,t.storeInfo=i.merchant,t.record=i.issue_record})},handleConfirm:function(){var t=this,e={customer_id:this.customerId,num:this.writeoffNumber};Object($.d)(e).then(function(e){var i=e.data;t.writeoffNumber="",t.customerInfo=i.customer,t.storeInfo=i.merchant,t.record=i.issue_record,t.thisWriteoffNum=i.num,t.writeoffDone=!0})},handleBack:function(){this.$router.replace({name:"home"})}}},M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"write-off"},[i("section",[t.writeoffDone?i("p",{staticClass:"h"},[t._v("核销成功")]):i("p",{staticClass:"h1"},[t._v("用户 "+t._s(t.customerInfo.nickname)+" 剩余")]),t._v(" "),i("countup",{staticClass:"countup",attrs:{"start-val":0,"end-val":t.num}})],1),t._v(" "),i("footer",[t.writeoffDone?i("p",{staticClass:"h1"},[t._v("用户 "+t._s(t.customerInfo.nickname)+" 剩余："+t._s(t.record.total_receive-t.record.received))]):i("p",{staticClass:"h1"},[t._v("本次核销")]),t._v(" "),t.writeoffDone?t._e():i("x-input",{attrs:{type:"number",placeholder:"请输入核销数量"},model:{value:t.writeoffNumber,callback:function(e){t.writeoffNumber=e},expression:"writeoffNumber"}}),t._v(" "),t.writeoffDone?t._e():i("x-button",{attrs:{type:"primary",disabled:!t.writeoffNumber},nativeOn:{click:function(e){return t.handleConfirm(e)}}},[t._v("确认")]),t._v(" "),t.writeoffDone?i("x-button",{staticClass:"back-btn",attrs:{type:"primary"},nativeOn:{click:function(e){return t.handleBack(e)}}},[t._v("返回")]):t._e()],1)])},z=[],P={render:M,staticRenderFns:z},H=P,U=i("VU/8"),K=s,X=U(L,H,!1,K,"data-v-31c63316",null),Q=X.exports;o.a.use(l.a);var J=[{path:"/",name:"home",component:j},{path:"/login",name:"login",component:function(){return i.e(0).then(i.bind(null,"lmfZ"))}},{path:"/writeoff",name:"write_off",component:Q}],Y=new l.a({mode:"history",base:Object({NODE_ENV:"production"}).BASE_URL,routes:J});e.a=Y},aDuS:function(t,e){},aiyf:function(t,e){},feh2:function(t,e){},gyMJ:function(t,e,i){"use strict";function n(t){return _({url:"v1/wx/config",method:"get",params:t})}function r(t){return _({url:"v1/merchants/login",method:"post",data:t})}function a(t){return _({url:"v1/verify_code",method:"get",params:t})}function s(t){return _({url:"v1/merchants/detail",method:"get",params:t})}function o(t){return _({url:"v1/merchants/writeoff",method:"get",params:t})}function l(t){return _({url:"v1/merchants/writeoff",method:"post",data:t})}var u=i("//Fk"),c=i.n(u),h=i("7+uW"),d=i("YaEn"),f=i("yD8N"),p=i("3BeM"),m=i("lbHh"),v=i.n(m),g=i("DpJg");h.a.use(f.a),h.a.use(p.a);var b=h.a.http.create({baseURL:g.a||"",timeout:6e4});b.interceptors.request.use(function(t){var e=t.url,i=/login$/,n=/wx\/config$/;if(!i.test(e)&&!n.test(e)){var r=v.a.get("Authorization");r?t.headers.Authorization=r:d.a.push({name:"login"})}return t},function(t){return c.a.reject(t)}),b.interceptors.response.use(function(t){var e=t.data;return e.status?{data:e.data,res:e}:"NO_PERMISSION"!==e.code?(h.a.$vux.toast.show({text:e.message,type:"text"}),c.a.reject(e)):void d.a.replace({name:"login"})},function(t){return c.a.reject(t)});var _=b;e.f=n,e.b=r,e.c=a,e.a=s,e.e=o,e.d=l},kllH:function(t,e){},qHQD:function(t,e){},rLAy:function(t,e,i){"use strict";function n(t){i("kllH")}var r=i("xNvf"),a=(r.a,Boolean,Number,String,String,String,Boolean,String,String,{name:"toast",mixins:[r.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-toast"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),i("transition",{attrs:{name:t.currentTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[i("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?i("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):i("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},o=[],l={render:s,staticRenderFns:o},u=l,c=i("VU/8"),h=n,d=c(a,u,!1,h,null,null);e.a=d.exports},ttOB:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1997282f64310678020a.js.map