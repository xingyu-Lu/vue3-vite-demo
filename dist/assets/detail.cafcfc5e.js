var b=Object.defineProperty;var p=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var u=(e,a,t)=>a in e?b(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,f=(e,a)=>{for(var t in a||(a={}))y.call(a,t)&&u(e,t,a[t]);if(p)for(var t of p(a))x.call(a,t)&&u(e,t,a[t]);return e};import{a as v}from"./axios.8a3d4d30.js";import{al as M,u as T,a as H,r as L,o as j,t as B,c as _,d as w,ae as $,f as n,w as o,h as s,ah as I,af as S,i as r,ai as k,aj as N}from"./vendor.1fa6d093.js";import{_ as R}from"./index.50a52ae9.js";const V={name:"ldtd",setup(){const e=M();T();const{id:a}=e.query,t=H({res_data:L("")});j(()=>{i()});const i=()=>{v.get(`/api/head/staffs/${a}`).then(l=>{t.res_data=l.data})};return f({},B(t))}},d=e=>(k("data-v-61b010ba"),e=e(),N(),e),z=d(()=>s("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[s("strong",null,"\u5458\u5DE5\u4E4B\u58F0")],-1)),C=r("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),q=r("\u5458\u5DE5\u4E4B\u58F0"),D={style:{display:"flex","justify-content":"center"}},E=["innerHTML"],F={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"10px"}},A=r(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),G=["innerHTML"],J=d(()=>s("span",null,"\xA0\xA0\xA0\xA0",-1)),K=r(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),O=["innerHTML"],P=d(()=>s("span",null,"\xA0\xA0\xA0\xA0",-1)),Q=r(" \u4F5C\u8005\uFF1A"),U=["innerHTML"];function W(e,a,t,i,l,X){const m=_("el-col"),h=_("el-row"),c=_("el-breadcrumb-item"),g=_("el-breadcrumb");return w(),$(S,null,[n(h,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:o(()=>[n(m,{span:24},{default:o(()=>[z]),_:1})]),_:1}),n(g,{separator:"/",style:{"margin-bottom":"20px"}},{default:o(()=>[n(c,{to:{path:"/"}},{default:o(()=>[C]),_:1}),n(c,null,{default:o(()=>[q]),_:1})]),_:1}),s("div",D,[s("strong",{innerHTML:e.res_data.title},null,8,E)]),s("div",F,[A,s("span",{innerHTML:e.res_data.release_time},null,8,G),J,K,s("span",{innerHTML:e.res_data.num},null,8,O),P,Q,s("span",null,I(e.res_data.staff_name),1)]),s("span",{innerHTML:e.res_data.content},null,8,U)],64)}var ae=R(V,[["render",W],["__scopeId","data-v-61b010ba"]]);export{ae as default};
