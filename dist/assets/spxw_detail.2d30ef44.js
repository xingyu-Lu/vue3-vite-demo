var x=Object.defineProperty;var c=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var p=(e,a,t)=>a in e?x(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,u=(e,a)=>{for(var t in a||(a={}))b.call(a,t)&&p(e,t,a[t]);if(c)for(var t of c(a))y.call(a,t)&&p(e,t,a[t]);return e};import{a as v}from"./axios.9a9c1db6.js";import{al as w,u as M,a as T,r as H,o as L,t as j,c as r,d as B,ae as I,f as s,w as n,h as o,af as $,i,ai as k,aj as z}from"./vendor.4b31625a.js";import{_ as N}from"./index.3871cc0a.js";const R={name:"ldtd",setup(){const e=w();M();const{id:a}=e.query,t=T({res_data:H("")});L(()=>{_()});const _=()=>{v.get("/api/head/news/yyxw_detail",{params:{id:a}}).then(d=>{t.res_data=d.data})};return u({},j(t))}},m=e=>(k("data-v-295a2fc3"),e=e(),z(),e),S=m(()=>o("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[o("strong",null,"\u89C6\u9891\u65B0\u95FB")],-1)),V=i("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),C=i("\u89C6\u9891\u65B0\u95FB"),q={style:{display:"flex","justify-content":"center"}},E=["innerHTML"],F={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"-10px","margin-bottom":"20px"}},A=i(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),D=["innerHTML"],G=m(()=>o("span",null,"\xA0\xA0\xA0\xA0",-1)),J=i(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),K=["innerHTML"],O=["innerHTML"];function P(e,a,t,_,d,Q){const f=r("el-col"),h=r("el-row"),l=r("el-breadcrumb-item"),g=r("el-breadcrumb");return B(),I($,null,[s(h,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:n(()=>[s(f,{span:24},{default:n(()=>[S]),_:1})]),_:1}),s(g,{separator:"/",style:{"margin-bottom":"20px"}},{default:n(()=>[s(l,{to:{path:"/"}},{default:n(()=>[V]),_:1}),s(l,null,{default:n(()=>[C]),_:1})]),_:1}),o("div",q,[o("h1",{style:{"font-size":"30px",color:"#333","font-weight":"bold"},innerHTML:e.res_data.title},null,8,E)]),o("div",F,[A,o("span",{innerHTML:e.res_data.release_time},null,8,D),G,J,o("span",{innerHTML:e.res_data.num},null,8,K)]),o("span",{innerHTML:e.res_data.content},null,8,O)],64)}var Z=N(R,[["render",P],["__scopeId","data-v-295a2fc3"]]);export{Z as default};
