var u=Object.defineProperty;var c=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var l=(a,e,t)=>e in a?u(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,i=(a,e)=>{for(var t in e||(e={}))g.call(e,t)&&l(a,t,e[t]);if(c)for(var t of c(e))b.call(e,t)&&l(a,t,e[t]);return a};import{a as h}from"./axios.22ed3686.js";import{_ as x}from"./index.1b49d6bf.js";import{a as j,r as v,o as y,t as z,c as s,d as w,ae as $,f as o,w as n,h as r,af as k,i as _}from"./vendor.1fa6d093.js";const B={name:"ldtd",setup(){const a=j({res_data:v("")});y(()=>{e()});const e=()=>{h.get("/api/head/briefs/zzjg").then(t=>{a.res_data=t.data})};return i({},z(a))}},M=r("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[r("strong",null,"\u7EC4\u7EC7\u673A\u6784")],-1),N=_("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),T=_("\u7EC4\u7EC7\u673A\u6784"),V=["innerHTML"];function C(a,e,t,H,L,E){const m=s("el-col"),p=s("el-row"),d=s("el-breadcrumb-item"),f=s("el-breadcrumb");return w(),$(k,null,[o(p,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:n(()=>[o(m,{span:24},{default:n(()=>[M]),_:1})]),_:1}),o(f,{separator:"/",style:{"margin-bottom":"20px"}},{default:n(()=>[o(d,{to:{path:"/"}},{default:n(()=>[N]),_:1}),o(d,null,{default:n(()=>[T]),_:1})]),_:1}),r("span",{innerHTML:a.res_data.content},null,8,V)],64)}var D=x(B,[["render",C]]);export{D as default};
