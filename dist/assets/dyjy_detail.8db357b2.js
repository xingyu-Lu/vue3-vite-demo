var y=Object.defineProperty;var c=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var p=(e,s,t)=>s in e?y(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,u=(e,s)=>{for(var t in s||(s={}))x.call(s,t)&&p(e,t,s[t]);if(c)for(var t of c(s))b.call(s,t)&&p(e,t,s[t]);return e};import{a as v}from"./axios.04b60cca.js";import{al as j,u as M,a as T,r as H,o as L,t as w,c as r,d as B,ae as I,f as o,w as n,h as a,af as $,i as d,ai as k,aj as N}from"./vendor.3f1080f6.js";import{_ as R}from"./index.1d56ef06.js";const S={name:"ldtd",setup(){const e=j();M();const{id:s}=e.query,t=T({res_data:H("")});L(()=>{_()});const _=()=>{v.get("/api/head/partys/show",{params:{id:s}}).then(i=>{t.res_data=i.data})};return u({},w(t))}},m=e=>(k("data-v-796a125e"),e=e(),N(),e),V=m(()=>a("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[a("strong",null,"\u515A\u5458\u6559\u80B2")],-1)),z=d("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),C=d("\u515A\u5458\u6559\u80B2"),q={style:{display:"flex","justify-content":"center"}},E=["innerHTML"],F={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"10px"}},A=d(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),D=["innerHTML"],G=m(()=>a("span",null,"\xA0\xA0\xA0\xA0",-1)),J=d(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),K=["innerHTML"],O=["innerHTML"];function P(e,s,t,_,i,Q){const f=r("el-col"),h=r("el-row"),l=r("el-breadcrumb-item"),g=r("el-breadcrumb");return B(),I($,null,[o(h,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:n(()=>[o(f,{span:24},{default:n(()=>[V]),_:1})]),_:1}),o(g,{separator:"/",style:{"margin-bottom":"20px"}},{default:n(()=>[o(l,{to:{path:"/"}},{default:n(()=>[z]),_:1}),o(l,null,{default:n(()=>[C]),_:1})]),_:1}),a("div",q,[a("strong",{innerHTML:e.res_data.title},null,8,E)]),a("div",F,[A,a("span",{innerHTML:e.res_data.release_time},null,8,D),G,J,a("span",{innerHTML:e.res_data.num},null,8,K)]),a("span",{innerHTML:e.res_data.content},null,8,O)],64)}var Z=R(S,[["render",P],["__scopeId","data-v-796a125e"]]);export{Z as default};
