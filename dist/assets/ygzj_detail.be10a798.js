var y=Object.defineProperty;var c=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var p=(e,a,t)=>a in e?y(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,u=(e,a)=>{for(var t in a||(a={}))x.call(a,t)&&p(e,t,a[t]);if(c)for(var t of c(a))b.call(a,t)&&p(e,t,a[t]);return e};import{a as v}from"./axios.cda40779.js";import{ak as M,u as T,a as j,r as H,o as L,t as w,c as r,d as B,ad as k,f as o,w as n,h as s,ae as z,i as d,ah as I,ai as $}from"./vendor.0cf1a440.js";import{_ as N}from"./index.f4ba8057.js";const R={name:"ldtd",setup(){const e=M();T();const{id:a}=e.query,t=j({res_data:H("")});L(()=>{_()});const _=()=>{v.get("/api/head/partys/show",{params:{id:a}}).then(i=>{t.res_data=i.data})};return u({},w(t))}},m=e=>(I("data-v-8026adde"),e=e(),$(),e),S=m(()=>s("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[s("strong",null,"\u804C\u5DE5\u4E4B\u5BB6")],-1)),V=d("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),C=d("\u804C\u5DE5\u4E4B\u5BB6"),q={style:{display:"flex","justify-content":"center"}},E=["innerHTML"],F={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"10px"}},A=d(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),D=["innerHTML"],G=m(()=>s("span",null,"\xA0\xA0\xA0\xA0",-1)),J=d(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),K=["innerHTML"],O=["innerHTML"];function P(e,a,t,_,i,Q){const f=r("el-col"),h=r("el-row"),l=r("el-breadcrumb-item"),g=r("el-breadcrumb");return B(),k(z,null,[o(h,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:n(()=>[o(f,{span:24},{default:n(()=>[S]),_:1})]),_:1}),o(g,{separator:"/",style:{"margin-bottom":"20px"}},{default:n(()=>[o(l,{to:{path:"/"}},{default:n(()=>[V]),_:1}),o(l,null,{default:n(()=>[C]),_:1})]),_:1}),s("div",q,[s("strong",{innerHTML:e.res_data.title},null,8,E)]),s("div",F,[A,s("span",{innerHTML:e.res_data.release_time},null,8,D),G,J,s("span",{innerHTML:e.res_data.num},null,8,K)]),s("span",{innerHTML:e.res_data.content},null,8,O)],64)}var Z=N(R,[["render",P],["__scopeId","data-v-8026adde"]]);export{Z as default};