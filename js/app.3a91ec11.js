(function(t){function e(e){for(var n,a,c=e[0],s=e[1],l=e[2],u=0,d=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},o={app:0},i=[];function c(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2c09c70f"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r={about:1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise((function(e,r){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"17896133"}[t]+".css",o=s.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===n||u===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[t],p.parentNode.removeChild(p),r(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("8a23"),a=r.n(n);a.a},3675:function(t,e,r){"use strict";var n=r("91a6"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"red",dark:""}},[r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),r("div",{staticClass:"d-flex align-center"},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://lh3.googleusercontent.com/LB7LuEGqomUmDITSkev4n6nQxLQ94-22-fwyEVzRuGAdZhCRRG1R53LevqVdaFec-hjL=s180-rw",transition:"scale-transition",width:"40"}}),r("v-toolbar-title",[t._v("Ynet News")])],1),r("v-spacer"),r("v-btn",{staticClass:"ma-2",attrs:{loading:t.loading,disabled:t.loading,color:"info"},on:{click:function(e){t.loader="loading"}},scopedSlots:t._u([{key:"loader",fn:function(){return[r("span",{staticClass:"custom-loader"},[r("v-icon",{attrs:{light:""}},[t._v("mdi-reload")])],1)]},proxy:!0}])},[t._v(" Reload "),r("v-icon",[t._v("mdi-reload")])],1)],1),r("v-navigation-drawer",{attrs:{fixed:"",left:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{attrs:{nav:"",dense:""}},[r("v-list-item-group",{attrs:{"active-class":"text--accent-4"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},t._l(t.items,(function(e){return r("v-list-item",{key:e.title,attrs:{link:""}},[r("v-list-item-icon",[r("v-icon",[t._v(t._s(e.icon))])],1),r("v-list-item-content",{on:{click:function(r){return t.$router.go(e.url)}}},[r("router-link",{attrs:{tag:"v-list-item-title",to:e.url}},[t._v(" "+t._s(e.title)+" ")])],1)],1)})),1)],1)],1),r("v-content",[t.loading?r("div",t._l(20,(function(t,e){return r("v-skeleton-loader",{key:e,staticClass:"mx-auto",staticStyle:{"margin-top":"2rem"},attrs:{"max-width":"400",type:"card",elevation:10}})})),1):t._e(),r("router-view",{attrs:{loading:t.loading}})],1)],1)},o=[],i=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("2fa7")),c=r("2f62");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u={name:"app",data:function(){return{loader:null,loading:!0,drawer:!1,group:null,counter:0,items:[{title:"Dashboard",icon:"mdi-view-dashboard",url:"/"},{title:"Photos",icon:"mdi-image",url:"/"},{title:"About",icon:"mdi-help-box",url:"/"}]}},created:function(){var t=this;setTimeout((function(){t.$data.isOnline?(t.getData(),t.loading=!1):t.loading=!1}),2e3)},methods:l({},Object(c["b"])(["getData"])),watch:{loader:function(){var t=this,e=this.loader;this[e]=!this[e],this.$router.go(),setTimeout((function(){return t[e]=!1}),3e3),this.loader=null},group:function(){this.drawer=!1}}},d=u,p=(r("034f"),r("2877")),f=r("6544"),v=r.n(f),g=r("7496"),b=r("40dc"),m=r("5bc1"),h=r("8336"),w=r("a75b"),y=r("132d"),O=r("adda"),j=r("8860"),_=r("da13"),x=r("5d23"),k=r("1baa"),C=r("34c3"),P=r("f774"),T=r("3129"),V=r("2fa4"),L=r("2a7f"),S=Object(p["a"])(d,a,o,!1,null,null,null),E=S.exports;v()(S,{VApp:g["a"],VAppBar:b["a"],VAppBarNavIcon:m["a"],VBtn:h["a"],VContent:w["a"],VIcon:y["a"],VImg:O["a"],VList:j["a"],VListItem:_["a"],VListItemContent:x["a"],VListItemGroup:k["a"],VListItemIcon:C["a"],VNavigationDrawer:P["a"],VSkeletonLoader:T["a"],VSpacer:V["a"],VToolbarTitle:L["a"]});var D=r("9483");Object(D["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});r("d3b7");var R=r("8c4f"),A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("news",{attrs:{loading:t.loading}})},I=[],N=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.loading?t._e():r("div",t._l(t.articles,(function(e,n){return r("v-card",{directives:[{name:"show",rawName:"v-show",value:e.urlToImage,expression:"article.urlToImage"}],key:n,staticClass:"mx-auto article",class:{RTL:t.isRTL},attrs:{"max-width":"400",elevation:10,shaped:!0,loading:t.loading}},[r("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:e.urlToImage}},[r("v-card-title",{staticClass:"card-title"},[t._v(t._s(e.title))])],1),r("v-card-subtitle",{staticClass:"pb-0"},[t._v(t._s(e.publishedAt))]),r("v-card-text",{staticClass:"text--primary card-text"},[r("div",[t._v(t._s(e.description))])]),r("v-card-actions",{staticClass:"btn-ltr"},[r("v-btn",{attrs:{color:"orange",text:"",to:"/about/"+n}},[t._v("View")])],1)],1)})),1)])},B=[];function $(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function q(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?$(Object(r),!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var F={name:"News",props:["loading"],computed:q({},Object(c["c"])(["articles","isRTL"]))},G=F,M=(r("3675"),r("b0af")),J=r("99d9"),K=Object(p["a"])(G,N,B,!1,null,null,null),Q=K.exports;v()(K,{VBtn:h["a"],VCard:M["a"],VCardActions:J["a"],VCardSubtitle:J["b"],VCardText:J["c"],VCardTitle:J["d"],VImg:O["a"]});var U={name:"home",props:["loading"],inject:["theme"],components:{News:Q}},z=U,H=Object(p["a"])(z,A,I,!1,null,null,null),Y=H.exports,Z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"error"},[t._v("This page is not found.")])},W=[],X={},tt=Object(p["a"])(X,Z,W,!1,null,null,null),et=tt.exports;n["a"].use(R["a"]);var rt=[{path:"*",name:"notfound",component:et},{path:"/",name:"home",component:Y},{path:"/about/:id",name:"about",props:!0,component:function(){return r.e("about").then(r.bind(null,"f820"))}}],nt=new R["a"]({routes:rt}),at=nt,ot=r("f309");n["a"].use(ot["a"]);var it=new ot["a"]({}),ct=(r("99af"),r("96cf"),r("bc3a")),st=r.n(ct),lt=r("bfa9"),ut="https://newsapi.org/v2/top-headlines?country=",dt="https://ipinfo.io/?token=d91443308a06b7",pt="&apiKey=af04e872b4b34ea790c0b94ca74a3545";n["a"].use(c["a"]);var ft=new lt["a"]({key:"store"}),vt=new c["a"].Store({strict:!0,plugins:[ft.plugin],state:{articles:[],isRTL:!1},mutations:{gotData:function(t,e){t.articles=e[0],"IL"===e[1]?t.isRTL=!0:t.isRTL=!1}},actions:{getData:function(t){var e,r,n,a,o;return regeneratorRuntime.async((function(i){while(1)switch(i.prev=i.next){case 0:return e=t.commit,i.prev=1,i.next=4,regeneratorRuntime.awrap(st.a.get(dt));case 4:return r=i.sent,n=r.data.country,i.t0=regeneratorRuntime,i.t1=st.a,i.t2="".concat(ut),i.next=11,regeneratorRuntime.awrap(n);case 11:return i.t3=i.sent,i.t4=pt,i.t5=i.t2.concat.call(i.t2,i.t3).concat(i.t4),i.t6=i.t1.get.call(i.t1,i.t5),i.next=17,i.t0.awrap.call(i.t0,i.t6);case 17:a=i.sent,o=a.data.articles,e("gotData",[o,n]),i.next=25;break;case 22:i.prev=22,i.t7=i["catch"](1),e("gotData",i.t7);case 25:case"end":return i.stop()}}),null,null,[[1,22]])}},getters:{articles:function(t){return t.articles},isRTL:function(t){return t.isRTL}}}),gt=r("bf4e"),bt=r.n(gt);n["a"].use(bt.a),n["a"].config.productionTip=!1,n["a"].prototype.$http=st.a,new n["a"]({store:vt,router:at,vuetify:it,render:function(t){return t(E)}}).$mount("#app")},"8a23":function(t,e,r){},"91a6":function(t,e,r){}});
//# sourceMappingURL=app.3a91ec11.js.map