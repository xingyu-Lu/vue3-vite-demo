var u=Object.defineProperty;var c=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var d=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,l=(e,t)=>{for(var a in t||(t={}))g.call(t,a)&&d(e,a,t[a]);if(c)for(var a of c(t))b.call(t,a)&&d(e,a,t[a]);return e};import{a as h}from"./axios.77057956.js";import{_ as x}from"./index.ab8bab27.js";import{a as v,r as j,o as y,t as z,c as n,d as w,ae as I,f as o,w as s,h as r,af as $,ai as k,aj as B,i}from"./vendor.0774305f.js";const M={name:"ldtd",setup(){const e=v({res_data:j("")});y(()=>{t()});const t=()=>{h.get("/api/head/briefs/zzjg").then(a=>{e.res_data=a.data})};return l({},z(e))}},N=e=>(k("data-v-5951c1e9"),e=e(),B(),e),S=N(()=>r("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[r("strong",null,"\u7EC4\u7EC7\u673A\u6784")],-1)),T=i("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),V=i("\u7EC4\u7EC7\u673A\u6784"),C=["innerHTML"];function H(e,t,a,L,E,F){const p=n("el-col"),m=n("el-row"),_=n("el-breadcrumb-item"),f=n("el-breadcrumb");return w(),I($,null,[o(m,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:s(()=>[o(p,{span:24},{default:s(()=>[S]),_:1})]),_:1}),o(f,{separator:"/",style:{"margin-bottom":"20px"}},{default:s(()=>[o(_,{to:{path:"/"}},{default:s(()=>[T]),_:1}),o(_,null,{default:s(()=>[V]),_:1})]),_:1}),r("span",{innerHTML:e.res_data.content},null,8,C)],64)}var G=x(M,[["render",H],["__scopeId","data-v-5951c1e9"]]);export{G as default};