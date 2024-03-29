(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{401:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return R}});var o=t(7294),r=t(7833),i=r.ZP.div.withConfig({displayName:"styles__Wrapper",componentId:"sc-lhn15j-0"})(["width:100%;height:100%;display:flex;"]),s=r.ZP.ul.withConfig({displayName:"styles__SidebarWrapper",componentId:"sc-lhn15j-1"})(["width:300px;padding:10px 0 0 0;background-color:",";height:100%;margin:0;position:fixed;top:30px;left:0;"],function(e){return e.theme.colors.menuColor}),c=r.ZP.li.withConfig({displayName:"styles__ListItem",componentId:"sc-lhn15j-2"})(["width:100%;height:50px;display:flex;align-items:center;margin:0;padding:0 0 0 30px;list-style:none;background-color:",";&:hover,&:focus{background-color:rgba(33,34,36,0.1);}"],function(e){return e.isActive?"rgba(255, 255, 255, 0.1)":"transparent"}),a=r.ZP.button.withConfig({displayName:"styles__Button",componentId:"sc-lhn15j-3"})(["background:transparent;font-size:16px;font-family:",";font-weight:400;border:none;outline:none;display:block;width:100%;height:100%;display:flex;align-items:center;justify-contect:center;cursor:pointer;color:",";"],function(e){return e.theme.font},function(e){return e.isActive?e.theme.colors.accentColor:"#FFFFFF"}),u=t(5893),l=function(e){var n=e.subSettings,t=e.currentContent,o=e.setContent,r=function(e){t!==e&&o(e)};return(0,u.jsx)(s,{children:n.map(function(e){return(0,u.jsx)(c,{isActive:e.content===t,children:(0,u.jsx)(a,{onClick:function(){r(e.content)},isActive:e.content===t,children:e.name})},e.content)})})},p=r.ZP.div.withConfig({displayName:"styles__Wrapper",componentId:"sc-1kpx7o6-0"})(["padding:0 0 0 300px;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;width:100%;min-height:calc(100vh - 80px);"]),d=t(29),f=t(7794),h=t.n(f),m=r.ZP.div.withConfig({displayName:"styles__InputWrapper",componentId:"sc-nlyb0a-0"})(["margin-bottom:25px;position:relative;"]),x=r.ZP.form.withConfig({displayName:"styles__Form",componentId:"sc-nlyb0a-1"})(["display:flex;flex-direction:column;align-items:center;"]),g=r.ZP.div.withConfig({displayName:"styles__Label",componentId:"sc-nlyb0a-2"})(["font-size:13px;font-family:",";font-weight:300;color:rgb(191,205,217);margin-bottom:10px;user-select:none;"],function(e){return e.theme.font}),b=r.ZP.input.withConfig({displayName:"styles__Input",componentId:"sc-nlyb0a-3"})(["background-color:",";padding:12px 0px 11px;font-size:16px;color:rgb(255,255,255);font-family:",";font-weight:400;border-radius:4px;border:1px solid ",";outline:none;height:38px;max-width:400px;width:50vw;min-width:300px;padding:0 10px;&:focus,&:active{border:1px solid ",";}"],function(e){return e.theme.colors.inputFieldColor},function(e){return e.theme.font},function(e){return e.theme.colors.secondaryContainerBackgroundColor},function(e){return e.theme.colors.switcherLoaderColor}),y=r.ZP.button.withConfig({displayName:"styles__Button",componentId:"sc-nlyb0a-4"})(["display:flex;justify-content:space-around;align-items:center;box-sizing:border-box;height:39px;background-color:",";border-radius:3rem;outline:none;border:none;font-size:16px;font-family:",";font-weight:400;cursor:pointer;user-select:none;width:160px;"],function(e){return e.theme.colors.accentColor},function(e){return e.theme.font}),w=t(6825),v=t(2109),C=t(4447),_=t(1163),j=function(){var e,n=(0,_.useRouter)(),t=(0,o.useState)(!1),r=t[0],i=t[1],s=(0,o.useState)(""),c=s[0],a=s[1],l=(0,o.useState)(""),p=l[0],f=l[1],j=function(e){a(e.target.value)},I=function(e){f(e.target.value)},k=(e=(0,d.Z)(h().mark(function e(t){var o,r;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!((o=c.trim())!==p.trim())){e.next=8;break}return(0,v.Z)({type:"error",message:"Values in fields are different"}),a(""),f(""),e.abrupt("return");case 8:if(!(o.length<5)){e.next=13;break}return(0,v.Z)({type:"error",message:"Password length must be 5 characters or more"}),a(""),f(""),e.abrupt("return");case 13:return e.prev=13,i(!0),e.next=17,(0,w.gQ)(c);case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(13),n.push("/login");case 22:return e.prev=22,i(!1),a(""),f(""),e.finish(22);case 27:case"end":return e.stop()}},e,null,[[13,19,22,27]])})),function(n){return e.apply(this,arguments)});return(0,u.jsxs)(x,{onSubmit:k,children:[(0,u.jsxs)(m,{children:[(0,u.jsx)(g,{children:"Enter new password"}),(0,u.jsx)(b,{value:c,type:"password",required:!0,onChange:j})]}),(0,u.jsxs)(m,{children:[(0,u.jsx)(g,{children:"Confirm new password"}),(0,u.jsx)(b,{value:p,type:"password",required:!0,onChange:I})]}),r?(0,u.jsx)(C.Z,{}):(0,u.jsx)(y,{type:"submit",children:"Submit"})]})},I=r.ZP.div.withConfig({displayName:"styles__InputWrapper",componentId:"sc-4o03p1-0"})(["margin-bottom:25px;position:relative;"]),k=r.ZP.form.withConfig({displayName:"styles__Form",componentId:"sc-4o03p1-1"})(["display:flex;flex-direction:column;align-items:center;"]),Z=r.ZP.div.withConfig({displayName:"styles__Label",componentId:"sc-4o03p1-2"})(["font-size:13px;font-family:",";font-weight:300;color:rgb(191,205,217);margin-bottom:10px;user-select:none;"],function(e){return e.theme.font}),N=r.ZP.input.withConfig({displayName:"styles__Input",componentId:"sc-4o03p1-3"})(["background-color:",";padding:12px 0px 11px;font-size:16px;color:rgb(255,255,255);font-family:",";font-weight:400;border-radius:4px;border:1px solid ",";outline:none;height:38px;max-width:400px;width:50vw;min-width:300px;padding:0 10px;&:focus,&:active{border:1px solid ",";}"],function(e){return e.theme.colors.inputFieldColor},function(e){return e.theme.font},function(e){return e.theme.colors.secondaryContainerBackgroundColor},function(e){return e.theme.colors.switcherLoaderColor}),P=r.ZP.button.withConfig({displayName:"styles__Button",componentId:"sc-4o03p1-4"})(["display:flex;justify-content:space-around;align-items:center;box-sizing:border-box;height:39px;background-color:",";border-radius:3rem;outline:none;border:none;font-size:16px;font-family:",";font-weight:400;cursor:pointer;user-select:none;width:160px;"],function(e){return e.theme.colors.accentColor},function(e){return e.theme.font}),S=function(){var e=(0,_.useRouter)(),n=(0,o.useState)(!1),t=n[0],r=n[1],i=(0,o.useState)(""),s=i[0],c=i[1],a=(0,o.useState)(!0),l=a[0],p=a[1];(0,o.useEffect)(function(){p(!0),(0,w.I_)().then(c).catch(function(n){e.push("/login")}).finally(function(){p(!1)})},[]);var f,m=function(e){c(e.target.value)},x=(f=(0,d.Z)(h().mark(function n(t){var o;return h().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),o=/^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.){3}(25[0-5]|(2[0-4]|1\d|[1-9]|)\d)$/.test(s),!(!s.includes("192.168.")||!o||s.endsWith(".0")||s.endsWith(".1"))){n.next=6;break}return(0,v.Z)({type:"error",message:"Invalid format"}),n.abrupt("return");case 6:return n.prev=6,r(!0),n.next=10,(0,w.S)(s);case 10:n.next=15;break;case 12:n.prev=12,n.t0=n.catch(6),e.push("/login");case 15:return n.prev=15,r(!1),n.finish(15);case 18:case"end":return n.stop()}},n,null,[[6,12,15,18]])})),function(e){return f.apply(this,arguments)});return l?(0,u.jsx)(C.Z,{}):(0,u.jsxs)(k,{onSubmit:x,children:[(0,u.jsxs)(I,{children:[(0,u.jsx)(Z,{children:"Enter new IP address. Address change will reboot bridge."}),(0,u.jsx)(N,{value:s,type:"text",required:!0,onChange:m})]}),t?(0,u.jsx)(C.Z,{}):(0,u.jsx)(P,{type:"submit",children:"Submit"})]})},A=r.ZP.div.withConfig({displayName:"styles__InputWrapper",componentId:"sc-hf65vp-0"})(["margin-bottom:25px;position:relative;"]),E=r.ZP.form.withConfig({displayName:"styles__Form",componentId:"sc-hf65vp-1"})(["display:flex;flex-direction:column;align-items:center;"]),L=r.ZP.div.withConfig({displayName:"styles__Label",componentId:"sc-hf65vp-2"})(["font-size:13px;font-family:",";font-weight:300;color:rgb(191,205,217);margin-bottom:10px;user-select:none;"],function(e){return e.theme.font}),z=r.ZP.input.withConfig({displayName:"styles__Input",componentId:"sc-hf65vp-3"})(["background-color:",";padding:12px 0px 11px;font-size:16px;color:rgb(255,255,255);font-family:",";font-weight:400;border-radius:4px;border:1px solid ",";outline:none;height:38px;max-width:400px;width:50vw;min-width:300px;padding:0 10px;&:focus,&:active{border:1px solid ",";}"],function(e){return e.theme.colors.inputFieldColor},function(e){return e.theme.font},function(e){return e.theme.colors.secondaryContainerBackgroundColor},function(e){return e.isLoggedIn?"${({ theme }) => theme.colors.secondaryContainerBackgroundColor}":"${({ theme }) => theme.colors.switcherLoaderColor}"}),F=r.ZP.button.withConfig({displayName:"styles__Button",componentId:"sc-hf65vp-4"})(["display:flex;justify-content:space-around;align-items:center;box-sizing:border-box;height:39px;background-color:",";border-radius:3rem;outline:none;border:none;font-size:16px;font-family:",";font-weight:400;cursor:pointer;user-select:none;width:160px;"],function(e){return e.theme.colors.accentColor},function(e){return e.theme.font}),D=function(){var e=(0,_.useRouter)(),n=(0,o.useState)(!0),t=n[0],r=n[1],i=(0,o.useState)(!1),s=i[0],c=i[1],a=(0,o.useState)(""),l=a[0],p=a[1],f=(0,o.useState)(""),m=f[0],x=f[1],g=(0,o.useState)(!1),b=g[0],y=g[1];(0,o.useEffect)(function(){(0,w.hk)().then(function(e){e&&(y(!0),p(e))}).catch(function(n){e.push("/login")}).finally(function(){r(!1)})},[]);var v,j,I=function(e){p(e.target.value.trim())},k=function(e){x(e.target.value.trim())},Z=(v=(0,d.Z)(h().mark(function n(t){var o,r;return h().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),o={login:l,password:m},n.prev=2,c(!0),n.next=6,(0,w.hA)(o);case 6:if(r=n.sent){n.next=9;break}return n.abrupt("return");case 9:p(r),y(!0),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(2),e.push("/login");case 16:return n.prev=16,c(!1),n.finish(16);case 19:case"end":return n.stop()}},n,null,[[2,13,16,19]])})),function(e){return v.apply(this,arguments)}),N=(j=(0,d.Z)(h().mark(function n(t){return h().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.prev=1,c(!0),n.next=5,(0,w.A2)();case 5:y(!1),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),e.push("/login");case 11:return n.prev=11,c(!1),x(""),n.finish(11);case 15:case"end":return n.stop()}},n,null,[[1,8,11,15]])})),function(e){return j.apply(this,arguments)});return t?(0,u.jsx)(C.Z,{}):(0,u.jsxs)(E,{onSubmit:b?N:Z,children:[(0,u.jsxs)(A,{children:[(0,u.jsx)(L,{children:b?"Logged in as":"Login"}),(0,u.jsx)(z,{isLoggedIn:b,value:l,type:"login",required:!0,onChange:I,disabled:b})]}),!b&&(0,u.jsxs)(A,{children:[(0,u.jsx)(L,{children:"Password"}),(0,u.jsx)(z,{value:m,type:"password",required:!0,onChange:k})]}),s?(0,u.jsx)(C.Z,{}):(0,u.jsx)(F,{type:"submit",children:b?"Log out":"Login"})]})},W=function(e){var n=e.content;return(0,u.jsx)(p,{children:function(){switch(n){case"CLOUD_ACCOUNT":return(0,u.jsx)(D,{});case"CHANGE_PASSWORD":return(0,u.jsx)(j,{});case"CHANGE_IP_ADDRESS":return(0,u.jsx)(S,{});default:return null}}()})},B=[{name:"Change bridge password",content:"CHANGE_PASSWORD"},{name:"Change bridge IP address",content:"CHANGE_IP_ADDRESS"}],R=function(){var e=(0,o.useState)(B[0].content),n=e[0],t=e[1];return(0,u.jsx)("main",{children:(0,u.jsxs)(i,{children:[(0,u.jsx)(l,{subSettings:B,currentContent:n,setContent:t}),(0,u.jsx)(W,{content:n})]})})}},8356:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings",function(){return t(401)}])}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8356)}),_N_E=e.O()}]);