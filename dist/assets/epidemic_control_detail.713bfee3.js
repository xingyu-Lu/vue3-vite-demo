var b=Object.defineProperty;var c=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var p=(e,o,t)=>o in e?b(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))x.call(o,t)&&p(e,t,o[t]);if(c)for(var t of c(o))y.call(o,t)&&p(e,t,o[t]);return e};import{a as v}from"./axios.77057956.js";import{al as M,u as T,a as H,r as L,o as j,t as w,c as r,d as B,ae as $,f as s,w as a,h as n,af as I,i,ai as k,aj as z}from"./vendor.0774305f.js";import{_ as C}from"./index.ab8bab27.js";const N={name:"ldtd",setup(){const e=M();T();const{id:o}=e.query,t=H({res_data:L("")});j(()=>{_()});const _=()=>{v.get(`/api/head/epidemicControls/${o}`).then(d=>{t.res_data=d.data})};return u({},w(t))}},m=e=>(k("data-v-478a2cee"),e=e(),z(),e),R=m(()=>n("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[n("strong",null,"\u75AB\u60C5\u9632\u63A7")],-1)),S=i("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),V=i("\u75AB\u60C5\u9632\u63A7"),q={style:{display:"flex","justify-content":"center"}},E=["innerHTML"],F={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"-10px","margin-bottom":"20px"}},A=i(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),D=["innerHTML"],G=m(()=>n("span",null,"\xA0\xA0\xA0\xA0",-1)),J=i(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),K=["innerHTML"],O=["innerHTML"];function P(e,o,t,_,d,Q){const f=r("el-col"),h=r("el-row"),l=r("el-breadcrumb-item"),g=r("el-breadcrumb");return B(),$(I,null,[s(h,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:a(()=>[s(f,{span:24},{default:a(()=>[R]),_:1})]),_:1}),s(g,{separator:"/",style:{"margin-bottom":"20px"}},{default:a(()=>[s(l,{to:{path:"/"}},{default:a(()=>[S]),_:1}),s(l,null,{default:a(()=>[V]),_:1})]),_:1}),n("div",q,[n("h1",{style:{"font-size":"30px",color:"#333","font-weight":"bold"},innerHTML:e.res_data.title},null,8,E)]),n("div",F,[A,n("span",{innerHTML:e.res_data.release_time},null,8,D),G,J,n("span",{innerHTML:e.res_data.num},null,8,K)]),n("span",{innerHTML:e.res_data.content},null,8,O)],64)}var Z=C(N,[["render",P],["__scopeId","data-v-478a2cee"]]);export{Z as default};