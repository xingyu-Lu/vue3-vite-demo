var x=Object.defineProperty;var c=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var p=(e,a,t)=>a in e?x(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,u=(e,a)=>{for(var t in a||(a={}))y.call(a,t)&&p(e,t,a[t]);if(c)for(var t of c(a))b.call(a,t)&&p(e,t,a[t]);return e};import{a as v}from"./axios.64f7e1f7.js";import{al as M,u as T,a as w,r as H,o as L,t as j,c as r,d as B,ae as I,f as o,w as n,h as s,af as $,i as _,ai as k,aj as N}from"./vendor.a93cca51.js";import{_ as R}from"./index.e972642b.js";const S={name:"ldtd",setup(){const e=M();T();const{id:a}=e.query,t=w({res_data:H("")});L(()=>{d()});const d=()=>{v.get("/api/head/partys/show",{params:{id:a}}).then(i=>{t.res_data=i.data})};return u({},j(t))}},f=e=>(k("data-v-2280a5f2"),e=e(),N(),e),V=f(()=>s("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[s("strong",null,"\u515A\u52A1\u7BA1\u7406")],-1)),z=_("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),C=_("\u515A\u52A1\u7BA1\u7406"),q={style:{display:"flex","justify-content":"center"}},E=["innerHTML"],F={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"10px"}},A=_(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),D=["innerHTML"],G=f(()=>s("span",null,"\xA0\xA0\xA0\xA0",-1)),J=_(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),K=["innerHTML"],O=["innerHTML"];function P(e,a,t,d,i,Q){const m=r("el-col"),h=r("el-row"),l=r("el-breadcrumb-item"),g=r("el-breadcrumb");return B(),I($,null,[o(h,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:n(()=>[o(m,{span:24},{default:n(()=>[V]),_:1})]),_:1}),o(g,{separator:"/",style:{"margin-bottom":"20px"}},{default:n(()=>[o(l,{to:{path:"/"}},{default:n(()=>[z]),_:1}),o(l,null,{default:n(()=>[C]),_:1})]),_:1}),s("div",q,[s("strong",{innerHTML:e.res_data.title},null,8,E)]),s("div",F,[A,s("span",{innerHTML:e.res_data.release_time},null,8,D),G,J,s("span",{innerHTML:e.res_data.num},null,8,K)]),s("span",{innerHTML:e.res_data.content},null,8,O)],64)}var Z=R(S,[["render",P],["__scopeId","data-v-2280a5f2"]]);export{Z as default};
