(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[784],{4767:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}}),n(7294);var r=n(1505),s=n(9521).ZP.div.withConfig({displayName:"styles__Wrapper",componentId:"sc-jeejul-0"})(["display:flex;width:100%;height:100%;align-items:center;justify-content:center;z-index:8;",";"],function(e){return e.customStyles}),a=n(5893),i=function(e){var t=e.customStyles;return(0,a.jsx)(s,{customStyles:t,children:(0,a.jsx)(r.BR,{color:"#0087FF",height:25,width:25})})}},2109:function(e,t,n){"use strict";n(7294);var r=n(2920),s=n(5893),a=function(e){var t=e.type,n=e.message;return r.Am[t]((0,s.jsx)("div",{style:{display:"flex"},children:(0,s.jsx)("div",{style:{flexGrow:1,fontSize:15,padding:"8px 12px"},children:n})}),{toastId:"customId"})};a.dismiss=r.Am.dismiss,t.Z=a},9084:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var r=n(7294),s=n(9521),a=s.ZP.div.withConfig({displayName:"styles__Wrapper",componentId:"sc-13a81w7-0"})(["padding:25px;display:flex;align-items:center;justify-content:center;flex-direction:column;"]),i=s.ZP.div.withConfig({displayName:"styles__Grid",componentId:"sc-13a81w7-1"})(["display:grid;overflow-x:auto;width:100%;grid-template-columns:30px 200px 100px 150px 80px 200px minmax(400px,1fr);gap:5px;grid-auto-rows:minmax(10px,auto);"]),o=s.ZP.div.withConfig({displayName:"styles__ColumnTitle",componentId:"sc-13a81w7-2"})(['font-family:"Montserrat";font-weight:300;color:rgb(191,205,217);display:flex;align-items:center;justify-content:center;margin:0px;height:25px;text-align:center;box-sizing:border-box;font-size:15px;user-select:none;']),c=s.ZP.div.withConfig({displayName:"styles__Cell",componentId:"sc-13a81w7-3"})(['padding:0px 20px;background-color:rgb(34,55,73);width:100%;display:flex;align-items:center;justify-content:center;overflow-x:scroll;white-space:nowrap;height:40px;font-family:"Montserrat";color:rgb(191,205,217);font-weight:400;margin:0px;font-size:15px;user-select:none;&:nth-child(7n + 1){background-color:transparent;padding:0;}&:nth-child(7n + 2),&:nth-child(7n + 6),&:nth-child(7n + 7){justify-content:flex-start;}']),u=s.ZP.p.withConfig({displayName:"styles__Text",componentId:"sc-13a81w7-4"})(['font-family:"Montserrat";color:rgb(191,205,217);font-weight:300;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;margin:0px;text-align:center;font-size:15px;user-select:none;']),p=s.ZP.button.withConfig({displayName:"styles__Button",componentId:"sc-13a81w7-5"})(["display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;border:none;outline:none;background-color:transparent;width:100%;height:100%;filter:brightness(0.9) invert(85%);"]),l=s.ZP.div.withConfig({displayName:"styles__LoaderWrapper",componentId:"sc-13a81w7-6"})(["position:absolute;top:42px;left:0;width:100%;height:calc(100% - 42px);background:rgb(255,255,255,0.2);z-index:0;display:flex;align-items:center;justify-content:center;"]),d=n(4767);let f="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var m={randomUUID:f};let g,h=new Uint8Array(16);function x(){if(!g&&!(g="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return g(h)}let v=[];for(let y=0;y<256;++y)v.push((y+256).toString(16).slice(1));var w=function(e,t,n){if(m.randomUUID&&!t&&!e)return m.randomUUID();e=e||{};let r=e.random||(e.rng||x)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(let s=0;s<16;++s)t[n+s]=r[s];return t}return function(e,t=0){return(v[e[t+0]]+v[e[t+1]]+v[e[t+2]]+v[e[t+3]]+"-"+v[e[t+4]]+v[e[t+5]]+"-"+v[e[t+6]]+v[e[t+7]]+"-"+v[e[t+8]]+v[e[t+9]]+"-"+v[e[t+10]]+v[e[t+11]]+v[e[t+12]]+v[e[t+13]]+v[e[t+14]]+v[e[t+15]]).toLowerCase()}(r)},b=n(29),j=n(7794),k=n.n(j),Z=n(5675),_=n.n(Z),C=n(6825),I={src:"/_next/static/media/delete.2bb82cda.svg",height:640,width:640},N=n(5893),S=function(e){var t,n=e.camera,s=e.setCameras,a=e.isRemoving,i=e.setIsRemoving,o=(t=(0,b.Z)(k().mark(function e(){var t;return k().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),e.next=4,(0,C.jU)(n);case 4:s(e.sent),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,i(!1),e.finish(11);case 14:case"end":return e.stop()}},e,null,[[0,8,11,14]])})),function(){return t.apply(this,arguments)});return(0,N.jsxs)(r.Fragment,{children:[(0,N.jsx)(c,{children:(0,N.jsx)(p,{onClick:o,disabled:a,children:(0,N.jsx)(_(),{src:I,alt:"",width:20,height:20})})}),(0,N.jsx)(c,{children:n.name}),(0,N.jsx)(c,{children:n.type}),(0,N.jsx)(c,{children:n.ip}),(0,N.jsx)(c,{children:n.port}),(0,N.jsx)(c,{children:n.login}),(0,N.jsx)(c,{children:n.url})]})},P=s.ZP.div.withConfig({displayName:"styles__Wrapper",componentId:"sc-1ecgck2-0"})(["margin-top:50px;display:flex;padding:0 50px;width:100%;"]),R=s.ZP.button.withConfig({displayName:"styles__PrimaryButton",componentId:"sc-1ecgck2-1"})(['background-color:rgb(23,42,59);border:1px solid rgb(180,226,0);font-family:"Montserrat";font-weight:400;color:rgb(191,205,217);margin:0px;font-size:16px;user-select:none;display:flex;justify-content:space-around;align-items:center;box-sizing:border-box;height:39px;border-radius:3rem;outline:none;cursor:pointer;width:200px;background-color:rgb(23,42,59);border:1px solid rgb(180,226,0);margin-right:30px;']),U=s.ZP.button.withConfig({displayName:"styles__SecondaryButton",componentId:"sc-1ecgck2-2"})(['display:flex;justify-content:space-around;align-items:center;box-sizing:border-box;height:39px;background-color:rgb(180,226,0);border-radius:3rem;outline:none;border:none;font-size:16px;font-family:"Montserrat";font-weight:400;cursor:pointer;user-select:none;width:200px;']),z=function(e){var t,n,s=e.isRemoving,a=e.setIsRemoving,i=e.setCameras,o=(0,r.useState)(!1),c=o[0],u=o[1],p=(t=(0,b.Z)(k().mark(function e(){var t;return k().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(!0),e.next=4,(0,C.vq)();case 4:i(e.sent),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,a(!1),e.finish(11);case 14:case"end":return e.stop()}},e,null,[[0,8,11,14]])})),function(){return t.apply(this,arguments)}),l=(n=(0,b.Z)(k().mark(function e(){return k().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,(0,C.F)();case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:return e.prev=9,u(!1),e.finish(9);case 12:case"end":return e.stop()}},e,null,[[0,6,9,12]])})),function(){return n.apply(this,arguments)});return(0,N.jsxs)(P,{children:[(0,N.jsx)(R,{onClick:p,disabled:s,children:"Remove all cameras"}),(0,N.jsx)(U,{onClick:l,disabled:c||s,children:c?(0,N.jsx)(d.Z,{}):"Connect to cloud"})]})},L=function(e){var t=e.cameras,n=e.setCameras,s=e.isLoadingCameras,c=(0,r.useState)(!1),p=c[0],f=c[1],m=t.length;return s?(0,N.jsx)(a,{children:(0,N.jsx)(d.Z,{})}):m?(0,N.jsxs)(a,{children:[(0,N.jsxs)(i,{children:[(0,N.jsx)(o,{}),(0,N.jsx)(o,{children:"Name"}),(0,N.jsx)(o,{children:"Device type"}),(0,N.jsx)(o,{children:"IP address"}),(0,N.jsx)(o,{children:"Port"}),(0,N.jsx)(o,{children:"Login"}),(0,N.jsx)(o,{children:"URL"}),t.map(function(e){return(0,N.jsx)(S,{camera:e,setCameras:n,isRemoving:p,setIsRemoving:f},w())})]}),p&&(0,N.jsx)(l,{children:(0,N.jsx)(d.Z,{})}),m&&(0,N.jsx)(z,{setCameras:n,isRemoving:p,setIsRemoving:f})]}):(0,N.jsx)(a,{children:(0,N.jsx)(u,{children:"No added cameras"})})},E=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1],s=(0,r.useState)([]),a=s[0],i=s[1];return(0,r.useEffect)(function(){n(!0),(0,C.Vb)().then(i).catch(console.log).finally(function(){return n(!1)})},[]),(0,N.jsx)(L,{cameras:a,setCameras:i,isLoadingCameras:t})}},6825:function(e,t,n){"use strict";n.d(t,{F:function(){return Z},Vb:function(){return b},YL:function(){return v},jU:function(){return k},qL:function(){return x},qm:function(){return w},vV:function(){return y},vq:function(){return j}});var r,s,a,i,o,c,u,p,l=n(29),d=n(7794),f=n.n(d),m=n(9669),g=n.n(m),h=n(2109),x=(r=(0,l.Z)(f().mark(function e(){var t,n;return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g().get("/api/networkRange");case 3:return n=e.sent.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),(0,h.Z)({type:"error",message:e.t0.message});case 11:case"end":return e.stop()}},e,null,[[0,8]])})),function(){return r.apply(this,arguments)}),v=(s=(0,l.Z)(f().mark(function e(t){var n,r;return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g().post("/api/searchCamerasInSubnet",t);case 3:return r=e.sent.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message),(0,h.Z)({type:"error",message:e.t0.message});case 12:case"end":return e.stop()}},e,null,[[0,8]])})),function(e){return s.apply(this,arguments)}),y=(a=(0,l.Z)(f().mark(function e(t){var n,r,s,a;return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g().post("/api/addCameraInfo",t);case 3:return r=e.sent.data,(0,h.Z)({type:"info",message:r.message}),e.abrupt("return",r);case 9:if(e.prev=9,e.t0=e.catch(0),!(null!==(s=e.t0.response)&&void 0!==s&&null!==(a=s.data)&&void 0!==a&&a.message)){e.next=14;break}return(0,h.Z)({type:"error",message:e.t0.response.data.message}),e.abrupt("return");case 14:(0,h.Z)({type:"error",message:"Something went wrong"});case 15:case"end":return e.stop()}},e,null,[[0,9]])})),function(e){return a.apply(this,arguments)}),w=(i=(0,l.Z)(f().mark(function e(t){var n,r,s,a;return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g().post("/api/addBulkCameras",{cameras:t});case 3:return r=e.sent.data,e.abrupt("return",r.addedCameras);case 8:if(e.prev=8,e.t0=e.catch(0),!(null!==(s=e.t0.response)&&void 0!==s&&null!==(a=s.data)&&void 0!==a&&a.message)){e.next=13;break}return(0,h.Z)({type:"error",message:e.t0.response.data.message}),e.abrupt("return");case 13:(0,h.Z)({type:"error",message:"Something went wrong"});case 14:case"end":return e.stop()}},e,null,[[0,8]])})),function(e){return i.apply(this,arguments)}),b=(o=(0,l.Z)(f().mark(function e(){var t,n,r,s;return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g().get("/api/devices");case 3:return n=e.sent.data,e.abrupt("return",n.cameras);case 8:if(e.prev=8,e.t0=e.catch(0),!(null!==(r=e.t0.response)&&void 0!==r&&null!==(s=r.data)&&void 0!==s&&s.message)){e.next=13;break}return(0,h.Z)({type:"error",message:e.t0.response.data.message}),e.abrupt("return");case 13:(0,h.Z)({type:"error",message:"Something went wrong"});case 14:case"end":return e.stop()}},e,null,[[0,8]])})),function(){return o.apply(this,arguments)}),j=(c=(0,l.Z)(f().mark(function e(){var t,n,r,s;return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g().delete("/api/devices");case 3:return n=e.sent.data,e.abrupt("return",n.cameras);case 8:if(e.prev=8,e.t0=e.catch(0),!(null!==(r=e.t0.response)&&void 0!==r&&null!==(s=r.data)&&void 0!==s&&s.message)){e.next=13;break}return(0,h.Z)({type:"error",message:e.t0.response.data.message}),e.abrupt("return");case 13:(0,h.Z)({type:"error",message:"Something went wrong"});case 14:case"end":return e.stop()}},e,null,[[0,8]])})),function(){return c.apply(this,arguments)}),k=(u=(0,l.Z)(f().mark(function e(t){var n,r,s,a;return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g().delete("/api/deleteAddedCamera",{params:{name:t.name,url:t.url,port:t.port,ip:t.ip}});case 3:return r=e.sent.data,e.abrupt("return",r.cameras);case 8:if(e.prev=8,e.t0=e.catch(0),!(null!==(s=e.t0.response)&&void 0!==s&&null!==(a=s.data)&&void 0!==a&&a.message)){e.next=13;break}return(0,h.Z)({type:"error",message:e.t0.response.data.message}),e.abrupt("return");case 13:(0,h.Z)({type:"error",message:"Something went wrong"});case 14:case"end":return e.stop()}},e,null,[[0,8]])})),function(e){return u.apply(this,arguments)}),Z=(p=(0,l.Z)(f().mark(function e(){var t,n,r,s;return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g().post("/api/connect");case 3:n=e.sent.data,(0,h.Z)({type:"info",message:n.message}),e.next=14;break;case 8:if(e.prev=8,e.t0=e.catch(0),!(null!==(r=e.t0.response)&&void 0!==r&&null!==(s=r.data)&&void 0!==s&&s.message)){e.next=13;break}return(0,h.Z)({type:"error",message:e.t0.response.data.message}),e.abrupt("return");case 13:(0,h.Z)({type:"error",message:"Something went wrong"});case 14:case"end":return e.stop()}},e,null,[[0,8]])})),function(){return p.apply(this,arguments)})},6327:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/added_devices",function(){return n(9084)}])}},function(e){e.O(0,[18,774,888,179],function(){return e(e.s=6327)}),_N_E=e.O()}]);