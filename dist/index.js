!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vue-stripe-elements",[],t):"object"==typeof exports?exports["vue-stripe-elements"]=t():e["vue-stripe-elements"]=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){"function"!=typeof Object.assign&&(Object.assign=function(e,t){"use strict";if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),r=1;r<arguments.length;r++){var o=arguments[r];if(null!=o)for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n}),e.exports=Object.assign},function(e,t,n){"use strict";n.r(t);n(0);const r={instance:null,createToken:null,createSource:null,retrieveSource:null,paymentRequest:null,redirectToCheckout:null,retrievePaymentIntent:null,handleCardPayment:null,handleCardSetup:null,confirmPaymentIntent:null,createPaymentMethod:null,elements:null},o={base:{color:"#32325d",lineHeight:"24px",fontFamily:"Helvetica Neue",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}};function i(e,t,n={}){!function(e,t={}){"object"==typeof e&&"function"==typeof e.elements&&(r.instance=e),void 0===window.Stripe&&null===r.instance?console.error("Stripe V3 library not loaded!"):null===r.instance&&(r.instance=window.Stripe(e)),r.instance.elements?null===r.elements&&(r.elements=r.instance.elements(t)):console.error("Stripe V3 library not loaded!")}(t,n.elements||{}),n.style=Object.assign(o,n.style||{});const i=r.elements.create(e,n);return r.createToken=e=>r.instance.createToken(i,e),r.createSource=e=>r.instance.createSource(i,e),r.retrieveSource=e=>r.instance.retrieveSource(e),r.paymentRequest=e=>r.instance.paymentRequest(e),r.redirectToCheckout=e=>r.instance.redirectToCheckout(e),r.retrievePaymentIntent=e=>r.instance.retrievePaymentIntent(e),r.handleCardPayment=(e,t)=>r.instance.handleCardPayment(e,i,t),r.handleCardSetup=(e,t)=>r.instance.handleCardSetup(e,i,t),r.confirmPaymentIntent=(e,t)=>r.instance.confirmPaymentIntent(e,i,t),r.createPaymentMethod=(e,t)=>r.instance.createPaymentMethod(e,i,t),i}var l=function(){var e=this.$createElement;return(this._self._c||e)("div")};l._withStripped=!0;var u={stripe:{type:[String,Object],required:!0},value:{type:String,required:!1},options:{type:Object,required:!1}};function s(e,t,n,r,o,i,l,u){var s,a="function"==typeof e?e.options:e;if(t&&(a.render=t,a.staticRenderFns=n,a._compiled=!0),r&&(a.functional=!0),i&&(a._scopeId="data-v-"+i),l?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},a._ssrRegister=s):o&&(s=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),s)if(a.functional){a._injectStyles=s;var c=a.render;a.render=function(e,t){return s.call(t),c(e,t)}}else{var p=a.beforeCreate;a.beforeCreate=p?[].concat(p,s):[s]}return{exports:e,options:a}}var a=s({props:Object.assign({type:{type:String,required:!0}},u),beforeMount(){this._element=i(this.type,this.stripe,this.options),this._element.on("blur",e=>this.$emit("blur")),this._element.on("focus",e=>this.$emit("focus")),this._element.on("change",e=>this.$emit("change",e))},mounted(){const e=document.createElement("div");this._element.mount(e),this.$el.appendChild(e)},beforeDestroy(){this._element.unmount(),this._element.destroy(),r.instance=null,r.elements=null,r.createToken=null,r.createSource=null,r.retrieveSource=null,r.paymentRequest=null,r.redirectToCheckout=null,r.retrievePaymentIntent=null,r.handleCardPayment=null,r.handleCardSetup=null,r.confirmPaymentIntent=null,r.createPaymentMethod=null},methods:{blur(){this._element.blur()},clear(){this._element.clear()},focus(){this._element.focus()},update(){this._element.update()}}},l,[],!1,null,null,null);a.options.__file="src/StripeElement.vue";var c=a.exports,p=function(){var e=this,t=e.$createElement;return(e._self._c||t)("stripe-element",{ref:"element",attrs:{type:"card",stripe:e.stripe,value:e.value,options:e.options},on:{blur:function(t){return e.$emit("blur")},focus:function(t){return e.$emit("focus")},change:function(t){return e.$emit("change",t)}}})};p._withStripped=!0;var f=s({props:u,components:{StripeElement:c},methods:{blur(){this.$refs.element.blur()},clear(){this.$refs.element.clear()},focus(){this.$refs.element.focus()},update(e){this.$refs.element.update(e)}}},p,[],!1,null,null,null);f.options.__file="src/Card.vue";var m=f.exports,d=function(){var e=this,t=e.$createElement;return(e._self._c||t)("stripe-element",{ref:"element",attrs:{type:"cardExpiry",stripe:e.stripe,value:e.value,options:e.options},on:{blur:function(t){return e.$emit("blur")},focus:function(t){return e.$emit("focus")},change:function(t){return e.$emit("change",t)}}})};d._withStripped=!0;var h=s({props:u,components:{StripeElement:c},methods:{blur(){this.$refs.element.blur()},clear(){this.$refs.element.clear()},focus(){this.$refs.element.focus()},update(e){this.$refs.element.update(e)}}},d,[],!1,null,null,null);h.options.__file="src/CardExpiry.vue";var v=h.exports,y=function(){var e=this,t=e.$createElement;return(e._self._c||t)("stripe-element",{ref:"element",attrs:{type:"cardCvc",stripe:e.stripe,value:e.value,options:e.options},on:{blur:function(t){return e.$emit("blur")},focus:function(t){return e.$emit("focus")},change:function(t){return e.$emit("change",t)}}})};y._withStripped=!0;var _=s({props:u,components:{StripeElement:c},methods:{blur(){this.$refs.element.blur()},clear(){this.$refs.element.clear()},focus(){this.$refs.element.focus()},update(e){this.$refs.element.update(e)}}},y,[],!1,null,null,null);_.options.__file="src/CardCvc.vue";var b=_.exports,$=function(){var e=this,t=e.$createElement;return(e._self._c||t)("stripe-element",{ref:"element",attrs:{type:"cardNumber",stripe:e.stripe,value:e.value,options:e.options},on:{blur:function(t){return e.$emit("blur")},focus:function(t){return e.$emit("focus")},change:function(t){return e.$emit("change",t)}}})};$._withStripped=!0;var S=s({props:u,components:{StripeElement:c},methods:{blur(){this.$refs.element.blur()},clear(){this.$refs.element.clear()},focus(){this.$refs.element.focus()},update(e){this.$refs.element.update(e)}}},$,[],!1,null,null,null);S.options.__file="src/CardNumber.vue";var g=S.exports,C=function(){var e=this,t=e.$createElement;return(e._self._c||t)("stripe-element",{ref:"element",attrs:{type:"postalCode",stripe:e.stripe,value:e.value,options:e.options},on:{blur:function(t){return e.$emit("blur")},focus:function(t){return e.$emit("focus")},empty:function(t){return e.$emit("empty")},change:function(t){return e.$emit("change",t)}}})};C._withStripped=!0;var P=s({props:u,components:{StripeElement:c},methods:{blur(){this.$refs.element.blur()},clear(){this.$refs.element.clear()},focus(){this.$refs.element.focus()},update(e){this.$refs.element.update(e)}}},C,[],!1,null,null,null);P.options.__file="src/PostalCode.vue";var x=P.exports;t.default={Card:m,CardNumber:g,CardExpiry:v,CardCvc:b,PostalCode:x,StripeElement:c,baseStyle:o,get instance(){return r.instance},get createToken(){return r.createToken},get createSource(){return r.createSource},get retrieveSource(){return r.retrieveSource},get paymentRequest(){return r.paymentRequest},get redirectToCheckout(){return r.redirectToCheckout},get retrievePaymentIntent(){return r.retrievePaymentIntent},get handleCardPayment(){return r.handleCardPayment},get handleCardSetup(){return r.handleCardSetup},get confirmPaymentIntent(){return r.confirmPaymentIntent},get createPaymentMethod(){return r.createPaymentMethod}}}])});