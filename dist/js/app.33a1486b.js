(function(e){function t(t){for(var n,o,l=t[0],i=t[1],c=t[2],u=0,d=[];u<l.length;u++)o=l[u],r[o]&&d.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var i=a[o];0!==r[i]&&(n=!1)}n&&(s.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={app:0},s=[];function o(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6f17758f"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise(function(t,n){a=r[e]=[t,n]});t.push(a[2]=n);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=o(e),s=function(t){i.onerror=i.onload=null,clearTimeout(c);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+n+": "+s+")");o.type=n,o.request=s,a[1](o)}r[e]=void 0}};var c=setTimeout(function(){s({type:"timeout",target:i})},12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var p=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},2705:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],o={name:"app",components:{}},l=o,i=(a("034f"),a("2877")),c=Object(i["a"])(l,r,s,!1,null,null,null),u=c.exports,p=a("8c4f"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("PostExpences",{attrs:{msg:"PostExpences Page"}})],1)},v=[],f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header"),a("div",{staticClass:"container"},[a("div",{staticClass:"col-lg-12 "},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"col-8 float-center "},[a("h3",[e._v("Post Expences")]),a("hr"),a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exp_date"}},[e._v("Expences Date")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.exp_date,expression:"exp_date"}],staticClass:"form-control",attrs:{type:"date",id:"exp_date","aria-describedby":"Expences date help",placeholder:"Enter Expences Date",required:""},domProps:{value:e.exp_date},on:{input:function(t){t.target.composing||(e.exp_date=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exp_val"}},[e._v("Expences value")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.exp_val,expression:"exp_val"}],staticClass:"form-control",attrs:{type:"text",id:"exp_date","aria-describedby":"Expences value help",placeholder:"Enter Expences Value (i.e, 5000)",required:""},domProps:{value:e.exp_val},on:{keyup:e.loadVatValue,input:function(t){t.target.composing||(e.exp_val=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exp_val"}},[e._v("Expences VAT")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.exp_vat,expression:"exp_vat"}],staticClass:"form-control",attrs:{type:"text",id:"exp_vat","aria-describedby":"Expences value VAT",placeholder:"Expences VAT",disabled:""},domProps:{value:e.exp_vat},on:{input:function(t){t.target.composing||(e.exp_vat=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exp_reason"}},[e._v("Expences Reason")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.exp_res,expression:"exp_res"}],staticClass:"form-control",attrs:{name:"exp_res",id:"exp_res",cols:"30",rows:"5",required:""},domProps:{value:e.exp_res},on:{input:function(t){t.target.composing||(e.exp_res=t.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.submitExpences}},[e._v("Submit")])])])])])])],1)},m=[],x=(a("7f7f"),a("96c7")),g=a("bc3a"),_=a.n(g),h=(a("5118"),a("3022"),{name:"Postexpences_mngr",components:{Header:x["a"]},data:function(){return{name:"",token:localStorage.getItem("token"),success_status:!1,success_msg:"",err_status:!1,msg:"",dismissSecs:5,dismissCountDown:0,exp_val:"",exp_date:"",exp_res:"",exp_vat:""}},methods:{submitExpences:function(e){var t=this;e.preventDeefault;this.name;var a=new FormData;a.append("exp_val",this.exp_val),a.append("exp_date",this.exp_date),a.append("exp_reason",this.exp_res),a.append("exp_vat",this.exp_vat);var n="http://idealhealthcare.wilsonjohnsonlawgroup.org/add-expences";_.a.post(n,a).then(function(e){console.log(e);var a=e.data;!0===a.status?(t.msg=a.message,alert(t.msg),t.exp_val="",t.exp_date="",t.exp_res="",t.exp_vat=""):!1===a.status&&(t.msg=a.message,alert(t.msg))}).catch(function(e){console.log(e)})},getVat:function(){var e=0,t=20,a=this.exp_val;return e=parseFloat(a)*t/100,e},loadVatValue:function(){this.exp_vat=this.getVat(),document.getElementById("exp_vat").value=this.exp_vat}}}),b=h,y=Object(i["a"])(b,f,m,!1,null,"f5066e3e",null),E=y.exports,C={name:"home",components:{PostExpences:E}},w=C,P=Object(i["a"])(w,d,v,!1,null,null,null),j=P.exports;n["default"].use(p["a"]);var k=new p["a"]({routes:[{path:"/",name:"home",component:j},{path:"/expences",params:"id",name:"Expences",component:function(){return a.e("about").then(a.bind(null,"7081"))}}]}),O=a("5f5b");a("f9e3"),a("2dd8");n["default"].use(O["a"]),n["default"].config.productionTip=!1,new n["default"]({router:k,render:function(e){return e(u)}}).$mount("#app")},"64a9":function(e,t,a){},9094:function(e,t,a){"use strict";var n=a("2705"),r=a.n(n);r.a},"96c7":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"nav"}},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark static-top"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"navbar-brand logo",attrs:{to:"/"}},[e._v("Expences Manager")]),e._m(0),e._m(1)],1)])])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarCollapse"}},[a("div",{staticClass:"navbar-nav mr-auto"},[a("a",{staticClass:"navbar-link text-white",attrs:{href:"#/expences"}},[e._v("Expences")])]),a("form",{staticClass:"form-inline mt-2 mt-md-0"})])}],s=(a("a481"),a("386d"),a("bc3a")),o={name:"Header",data:function(){return{selected:"1",options:[{value:"0",text:"expences_mngr List"},{value:"1",text:"Post expences_mngr"},{value:"2",text:"Item List"},{value:"3",text:"Add Item"}],selectedPage:null,search:""}},methods:{processSelected:function(){var e=this.selected,t=[{1:"expences_mngrlists"},{2:"Post expences_mngr"}];this.selectedPage=t[e],this.$emit("selpage",e)},deleteToken:function(){localStorage.setItem("token","")},serchFunction:function(){console.log(123);var e=this.search;s["axios"].get().then(function(e){}).catch(function(e){}),console.log(e)}},created:function(){var e=localStorage.getItem("token");null!=e&&void 0!=e&&""!==e||this.$router.replace("/")}},l=o,i=(a("9094"),a("2877")),c=Object(i["a"])(l,n,r,!1,null,"caee48a8",null);t["a"]=c.exports}});
//# sourceMappingURL=app.33a1486b.js.map