var x=Object.defineProperty;var c=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var p=(e,o,t)=>o in e?x(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))b.call(o,t)&&p(e,t,o[t]);if(c)for(var t of c(o))y.call(o,t)&&p(e,t,o[t]);return e};import{a as v}from"./axios.c5849df1.js";import{al as M,u as T,a as H,r as L,o as j,t as w,c as r,d as B,ae as z,f as a,w as n,h as s,af as I,i,ai as $,aj as k}from"./vendor.21132065.js";import{_ as N}from"./index.9c80ba40.js";const R={name:"ldtd",setup(){const e=M();T();const{id:o}=e.query,t=H({res_data:L("")});j(()=>{d()});const d=()=>{v.get("/api/head/partys/show",{params:{id:o}}).then(_=>{t.res_data=_.data})};return u({},w(t))}},f=e=>($("data-v-4f774026"),e=e(),k(),e),S=f(()=>s("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[s("strong",null,"\u515A\u98CE\u5EC9\u653F")],-1)),V=i("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),C=i("\u515A\u98CE\u5EC9\u653F"),q={style:{display:"flex","justify-content":"center"}},E=["innerHTML"],F={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"-10px","margin-bottom":"20px"}},A=i(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),D=["innerHTML"],G=f(()=>s("span",null,"\xA0\xA0\xA0\xA0",-1)),J=i(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),K=["innerHTML"],O=["innerHTML"];function P(e,o,t,d,_,Q){const m=r("el-col"),h=r("el-row"),l=r("el-breadcrumb-item"),g=r("el-breadcrumb");return B(),z(I,null,[a(h,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:n(()=>[a(m,{span:24},{default:n(()=>[S]),_:1})]),_:1}),a(g,{separator:"/",style:{"margin-bottom":"20px"}},{default:n(()=>[a(l,{to:{path:"/"}},{default:n(()=>[V]),_:1}),a(l,null,{default:n(()=>[C]),_:1})]),_:1}),s("div",q,[s("h1",{style:{"font-size":"30px",color:"#333","font-weight":"bold"},innerHTML:e.res_data.title},null,8,E)]),s("div",F,[A,s("span",{innerHTML:e.res_data.release_time},null,8,D),G,J,s("span",{innerHTML:e.res_data.num},null,8,K)]),s("span",{innerHTML:e.res_data.content},null,8,O)],64)}var Z=N(R,[["render",P],["__scopeId","data-v-4f774026"]]);export{Z as default};
