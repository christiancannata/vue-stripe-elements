!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vue-stripe-elements",[],t):"object"==typeof exports?exports["vue-stripe-elements"]=t():e["vue-stripe-elements"]=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){"use strict";t.a={stripe:{type:[String,Object],required:!0},value:{type:String,required:!1},options:{type:Object,required:!1}}},function(e,t,n){"use strict";function r(e,t,n,r,o,i,u,l){var s,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),u?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},c._ssrRegister=s):o&&(s=l?function(){o.call(this,this.$root.$options.shadowRoot)}:o),s)if(c.functional){c._injectStyles=s;var a=c.render;c.render=function(e,t){return s.call(t),a(e,t)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,s):[s]}return{exports:e,options:c}}n.d(t,"a",function(){return r})},function(e,t,n){"use strict";var r=function(){var e=this.$createElement;return(this._self._c||e)("div")};r._withStripped=!0;var o=n(0),i=n(3),u={props:Object.assign({type:{type:String,required:!0}},o.a),beforeMount(){this._element=Object(i.c)(this.type,this.stripe,this.options),this._element.on("blur",e=>this.$emit("blur")),this._element.on("focus",e=>this.$emit("focus")),this._element.on("change",e=>this.$emit("change",e))},mounted(){const e=document.createElement("div");this._element.mount(e),this.$el.appendChild(e)},beforeDestroy(){this._element.unmount(),this._element.destroy(),Object(i.d)()},methods:{blur(){this._element.blur()},clear(){this._element.clear()},focus(){this._element.focus()},update(){this._element.update()}}},l=n(1),s=Object(l.a)(u,r,[],!1,null,null,null);s.options.__file="src/StripeElement.vue";t.a=s.exports},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return u});const r={instance:null,createToken:null,createSource:null,retrieveSource:null,paymentRequest:null,redirectToCheckout:null,retrievePaymentIntent:null,handleCardPayment:null,handleCardSetup:null,confirmPaymentIntent:null,createPaymentMethod:null,elements:null},o={base:{color:"#32325d",lineHeight:"24px",fontFamily:"Helvetica Neue",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}};function i(e,t,n={}){!function(e,t={}){"object"==typeof e&&"function"==typeof e.elements&&(r.instance=e),void 0===window.Stripe&&null===r.instance?console.error("Stripe V3 library not loaded!"):null===r.instance&&(r.instance=window.Stripe(e)),r.instance.elements?null===r.elements&&(r.elements=r.instance.elements(t)):console.error("Stripe V3 library not loaded!")}(t,n.elements||{}),n.style=Object.assign(o,n.style||{});const i=r.elements.create(e,n);return r.createToken=e=>r.instance.createToken(i,e),r.createSource=e=>r.instance.createSource(i,e),r.retrieveSource=e=>r.instance.retrieveSource(e),r.paymentRequest=e=>r.instance.paymentRequest(e),r.redirectToCheckout=e=>r.instance.redirectToCheckout(e),r.retrievePaymentIntent=e=>r.instance.retrievePaymentIntent(e),r.handleCardPayment=(e,t)=>r.instance.handleCardPayment(e,i,t),r.handleCardSetup=(e,t)=>r.instance.handleCardSetup(e,i,t),r.confirmPaymentIntent=(e,t)=>r.instance.confirmPaymentIntent(e,i,t),r.createPaymentMethod=(e,t)=>r.instance.createPaymentMethod(e,i,t),i}function u(){r.instance=null,r.elements=null,r.createToken=null,r.createSource=null,r.retrieveSource=null,r.paymentRequest=null,r.redirectToCheckout=null,r.retrievePaymentIntent=null,r.handleCardPayment=null,r.handleCardSetup=null,r.confirmPaymentIntent=null,r.createPaymentMethod=null}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("stripe-element",{ref:"element",attrs:{type:"postalCode",stripe:e.stripe,value:e.value,options:e.options},on:{blur:function(t){return e.$emit("blur")},focus:function(t){return e.$emit("focus")},empty:function(t){return e.$emit("empty")},change:function(t){return e.$emit("change",t)}}})};r._withStripped=!0;var o=n(0),i=n(2),u={props:o.a,components:{StripeElement:i.a},methods:{blur(){this.$refs.element.blur()},clear(){this.$refs.element.clear()},focus(){this.$refs.element.focus()},update(e){this.$refs.element.update(e)}}},l=n(1),s=Object(l.a)(u,r,[],!1,null,null,null);s.options.__file="src/PostalCode.vue";t.a=s.exports},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("stripe-element",{ref:"element",attrs:{type:"card",stripe:e.stripe,value:e.value,options:e.options},on:{blur:function(t){return e.$emit("blur")},focus:function(t){return e.$emit("focus")},change:function(t){return e.$emit("change",t)}}})};r._withStripped=!0;var o=n(0),i=n(2),u={props:o.a,components:{StripeElement:i.a},methods:{blur(){this.$refs.element.blur()},clear(){this.$refs.element.clear()},focus(){this.$refs.element.focus()},update(e){this.$refs.element.update(e)}}},l=n(1),s=Object(l.a)(u,r,[],!1,null,null,null);s.options.__file="src/Card.vue";t.a=s.exports},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("stripe-element",{ref:"element",attrs:{type:"cardExpiry",stripe:e.stripe,value:e.value,options:e.options},on:{blur:function(t){return e.$emit("blur")},focus:function(t){return e.$emit("focus")},change:function(t){return e.$emit("change",t)}}})};r._withStripped=!0;var o=n(0),i=n(2),u={props:o.a,components:{StripeElement:i.a},methods:{blur(){this.$refs.element.blur()},clear(){this.$refs.element.clear()},focus(){this.$refs.element.focus()},update(e){this.$refs.element.update(e)}}},l=n(1),s=Object(l.a)(u,r,[],!1,null,null,null);s.options.__file="src/CardExpiry.vue";t.a=s.exports},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("stripe-element",{ref:"element",attrs:{type:"cardNumber",stripe:e.stripe,value:e.value,options:e.options},on:{blur:function(t){return e.$emit("blur")},focus:function(t){return e.$emit("focus")},change:function(t){return e.$emit("change",t)}}})};r._withStripped=!0;var o=n(0),i=n(2),u={props:o.a,components:{StripeElement:i.a},methods:{blur(){this.$refs.element.blur()},clear(){this.$refs.element.clear()},focus(){this.$refs.element.focus()},update(e){this.$refs.element.update(e)}}},l=n(1),s=Object(l.a)(u,r,[],!1,null,null,null);s.options.__file="src/CardNumber.vue";t.a=s.exports},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("stripe-element",{ref:"element",attrs:{type:"cardCvc",stripe:e.stripe,value:e.value,options:e.options},on:{blur:function(t){return e.$emit("blur")},focus:function(t){return e.$emit("focus")},change:function(t){return e.$emit("change",t)}}})};r._withStripped=!0;var o=n(0),i=n(2),u={props:o.a,components:{StripeElement:i.a},methods:{blur(){this.$refs.element.blur()},clear(){this.$refs.element.clear()},focus(){this.$refs.element.focus()},update(e){this.$refs.element.update(e)}}},l=n(1),s=Object(l.a)(u,r,[],!1,null,null,null);s.options.__file="src/CardCvc.vue";t.a=s.exports},function(e,t,n){"use strict";n.r(t),function(e){n(11);var t=n(3),r=n(2),o=n(5),i=n(6),u=n(8),l=n(7),s=n(4);e.exports={Card:o.a,CardNumber:l.a,CardExpiry:i.a,CardCvc:u.a,PostalCode:s.a,StripeElement:r.a,baseStyle:t.b,get instance(){return t.a.instance},get createToken(){return t.a.createToken},get createSource(){return t.a.createSource},get retrieveSource(){return t.a.retrieveSource}}}.call(this,n(10)(e))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t){"function"!=typeof Object.assign&&(Object.assign=function(e,t){"use strict";if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),r=1;r<arguments.length;r++){var o=arguments[r];if(null!=o)for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n}),e.exports=Object.assign}])});