var y=Object.defineProperty;var p=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var u=(e,s,t)=>s in e?y(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,f=(e,s)=>{for(var t in s||(s={}))x.call(s,t)&&u(e,t,s[t]);if(p)for(var t of p(s))b.call(s,t)&&u(e,t,s[t]);return e};import{a as v}from"./axios.c7e4e373.js";import{al as M,u as T,a as H,r as L,o as j,t as w,c as i,d as B,ae as $,f as a,w as n,h as o,ah as I,af as S,i as r,ai as k,aj as z}from"./vendor.3f1080f6.js";import{_ as N}from"./index.a1c943d0.js";const R={name:"ldtd",setup(){const e=M();T();const{id:s}=e.query,t=H({res_data:L("")});j(()=>{l()});const l=()=>{v.get(`/api/head/staffs/${s}`).then(d=>{t.res_data=d.data})};return f({},w(t))}},_=e=>(k("data-v-3ee306f8"),e=e(),z(),e),V=_(()=>o("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[o("strong",null,"\u5458\u5DE5\u4E4B\u58F0")],-1)),C=r("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),q=r("\u5458\u5DE5\u4E4B\u58F0"),D={style:{display:"flex","justify-content":"center"}},E=["innerHTML"],F={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"10px"}},A=r(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),G=["innerHTML"],J=_(()=>o("span",null,"\xA0\xA0\xA0\xA0",-1)),K=r(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),O=["innerHTML"],P=_(()=>o("span",null,"\xA0\xA0\xA0\xA0",-1)),Q=r(" \u4F5C\u8005\uFF1A"),U=["innerHTML"];function W(e,s,t,l,d,X){const m=i("el-col"),h=i("el-row"),c=i("el-breadcrumb-item"),g=i("el-breadcrumb");return B(),$(S,null,[a(h,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:n(()=>[a(m,{span:24},{default:n(()=>[V]),_:1})]),_:1}),a(g,{separator:"/",style:{"margin-bottom":"20px"}},{default:n(()=>[a(c,{to:{path:"/"}},{default:n(()=>[C]),_:1}),a(c,null,{default:n(()=>[q]),_:1})]),_:1}),o("div",D,[o("h1",{style:{"font-size":"30px",color:"#333","font-weight":"bold"},innerHTML:e.res_data.title},null,8,E)]),o("div",F,[A,o("span",{innerHTML:e.res_data.release_time},null,8,G),J,K,o("span",{innerHTML:e.res_data.num},null,8,O),P,Q,o("span",null,I(e.res_data.staff_name),1)]),o("span",{innerHTML:e.res_data.content},null,8,U)],64)}var se=N(R,[["render",W],["__scopeId","data-v-3ee306f8"]]);export{se as default};
