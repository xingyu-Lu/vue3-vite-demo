var x=Object.defineProperty;var c=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var p=(e,s,t)=>s in e?x(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,u=(e,s)=>{for(var t in s||(s={}))y.call(s,t)&&p(e,t,s[t]);if(c)for(var t of c(s))b.call(s,t)&&p(e,t,s[t]);return e};import{a as v}from"./axios.c7e4e373.js";import{al as j,u as M,a as T,r as H,o as L,t as w,c as r,d as B,ae as k,f as a,w as n,h as o,af as I,i,ai as $,aj as z}from"./vendor.3f1080f6.js";import{_ as N}from"./index.a1c943d0.js";const R={name:"ldtd",setup(){const e=j();M();const{id:s}=e.query,t=T({res_data:H("")});L(()=>{_()});const _=()=>{v.get("/api/head/patientservices/show",{params:{id:s}}).then(d=>{t.res_data=d.data})};return u({},w(t))}},f=e=>($("data-v-64e333f2"),e=e(),z(),e),S=f(()=>o("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[o("strong",null,"\u5065\u5EB7\u4FC3\u8FDB")],-1)),V=i("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),C=i("\u5065\u5EB7\u4FC3\u8FDB"),q={style:{display:"flex","justify-content":"center"}},E=["innerHTML"],F={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"10px"}},A=i(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),D=["innerHTML"],G=f(()=>o("span",null,"\xA0\xA0\xA0\xA0",-1)),J=i(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),K=["innerHTML"],O=["innerHTML"];function P(e,s,t,_,d,Q){const m=r("el-col"),h=r("el-row"),l=r("el-breadcrumb-item"),g=r("el-breadcrumb");return B(),k(I,null,[a(h,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:n(()=>[a(m,{span:24},{default:n(()=>[S]),_:1})]),_:1}),a(g,{separator:"/",style:{"margin-bottom":"20px"}},{default:n(()=>[a(l,{to:{path:"/"}},{default:n(()=>[V]),_:1}),a(l,null,{default:n(()=>[C]),_:1})]),_:1}),o("div",q,[o("h1",{style:{"font-size":"30px",color:"#333","font-weight":"bold"},innerHTML:e.res_data.title},null,8,E)]),o("div",F,[A,o("span",{innerHTML:e.res_data.release_time},null,8,D),G,J,o("span",{innerHTML:e.res_data.num},null,8,K)]),o("span",{innerHTML:e.res_data.content},null,8,O)],64)}var Z=N(R,[["render",P],["__scopeId","data-v-64e333f2"]]);export{Z as default};
