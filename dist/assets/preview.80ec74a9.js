var T=Object.defineProperty,B=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var m=(e,t,a)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))L.call(t,a)&&m(e,a,t[a]);if(u)for(var a of u(t))j.call(t,a)&&m(e,a,t[a]);return e},g=(e,t)=>B(e,H(t));import{a as y}from"./axios.246dce6c.js";import{al as z,u as C,a as S,o as I,t as N,c,d as b,ae as v,f as s,w as n,af as V,h as i,ah as q,g as R,i as d,ai as $,aj as D}from"./vendor.0774305f.js";import{_ as E,l as x,b as F}from"./index.c7d1affd.js";const G={name:"dynamic_preview",setup(){const e=z(),t=C(),{id:a,office_id:r}=e.query,l=S({res_data:"",data:{title:"",release_time:"",content:"",num:""}});I(()=>{a&&y.get(`/api/head/technicalOfficeDynamics/${a}`).then(o=>{l.data={title:o.data.title,release_time:o.data.release_time,content:o.data.content,num:o.data.num}}),x("userinfo")?l.res_data=x("userinfo"):p()});const p=()=>{y.get("/api/head/staffs/info").then(o=>{l.res_data=o.data,F("userinfo",o.data)})},_=()=>{t.push({path:"/kssz-ksdt-index",query:{id:r}})};return g(h({},N(l)),{handleBack:_,office_id:r})}},O=e=>($("data-v-050c5c97"),e=e(),D(),e),A={style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},J={key:0},K=d("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),P=d("\u79D1\u5BA4\u8BBE\u7F6E"),Q=d("\u79D1\u5BA4\u52A8\u6001"),U=d("\u8FD4\u56DE"),W={style:{display:"flex","justify-content":"center"}},X=["innerHTML"],Y={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"-10px","margin-bottom":"20px"}},Z=d(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),ee=["innerHTML"],te=O(()=>i("span",null,"\xA0\xA0\xA0\xA0",-1)),ae=d(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),oe=["innerHTML"],ne=["innerHTML"];function se(e,t,a,r,l,p){const _=c("el-col"),o=c("el-row"),f=c("el-breadcrumb-item"),k=c("el-breadcrumb"),w=c("el-button"),M=c("el-card");return b(),v(V,null,[s(o,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:n(()=>[s(_,{span:24},{default:n(()=>[i("div",A,[e.res_data.office?(b(),v("strong",J,q(e.res_data.office.office_name),1)):R("",!0)])]),_:1})]),_:1}),s(k,{separator:"/",style:{"margin-bottom":"20px"}},{default:n(()=>[s(f,{to:{path:"/"}},{default:n(()=>[K]),_:1}),s(f,{to:{path:"/kssz",query:{id:r.office_id}}},{default:n(()=>[P]),_:1},8,["to"]),s(f,null,{default:n(()=>[Q]),_:1})]),_:1}),s(M,{style:{"min-height":"100%"}},{header:n(()=>[s(w,{type:"primary",onClick:r.handleBack},{default:n(()=>[U]),_:1},8,["onClick"])]),default:n(()=>[i("div",W,[i("h1",{style:{"font-size":"30px",color:"#333","font-weight":"bold"},innerHTML:e.data.title},null,8,X)]),i("div",Y,[Z,i("span",{innerHTML:e.data.release_time},null,8,ee),te,ae,i("span",{innerHTML:e.data.num},null,8,oe)]),i("div",{innerHTML:e.data.content},null,8,ne)]),_:1})],64)}var le=E(G,[["render",se],["__scopeId","data-v-050c5c97"]]);export{le as default};
