var B=Object.defineProperty,H=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var p=(e,t,n)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))w.call(t,n)&&p(e,n,t[n]);if(m)for(var n of m(t))j.call(t,n)&&p(e,n,t[n]);return e},g=(e,t)=>H(e,L(t));import{a as y}from"./axios.c7e4e373.js";import{al as z,u as C,a as N,o as V,t as q,c as r,d as b,ae as x,f as s,w as a,af as R,h as i,ah as $,g as D,i as c}from"./vendor.3f1080f6.js";import{_ as S,l as k,b as E}from"./index.a1c943d0.js";const F={name:"dynamic_preview",setup(){const e=z(),t=C(),{id:n,office_id:d}=e.query,l=N({res_data:"",data:{title:"",release_time:"",content:"",num:""}});V(()=>{n&&y.get(`/api/head/technicalOfficeDynamics/${n}`).then(o=>{l.data={title:o.data.title,release_time:o.data.release_time,content:o.data.content,num:o.data.num}}),k("userinfo")?l.res_data=k("userinfo"):u()});const u=()=>{y.get("/api/head/staffs/info").then(o=>{l.res_data=o.data,E("userinfo",o.data)})},_=()=>{t.push({path:"/kssz-ksdt-index",query:{id:d}})};return g(h({},q(l)),{handleBack:_,office_id:d})}},G={style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},O={key:0},A=c("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),I=c("\u79D1\u5BA4\u8BBE\u7F6E"),J=c("\u79D1\u5BA4\u52A8\u6001"),K=c("\u8FD4\u56DE"),P={style:{display:"flex","justify-content":"center"}},Q=["innerHTML"],U={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"10px"}},W=c(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),X=["innerHTML"],Y=i("span",null,"\xA0\xA0\xA0\xA0",-1),Z=c(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),ee=["innerHTML"],te=["innerHTML"];function ne(e,t,n,d,l,u){const _=r("el-col"),o=r("el-row"),f=r("el-breadcrumb-item"),v=r("el-breadcrumb"),M=r("el-button"),T=r("el-card");return b(),x(R,null,[s(o,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:a(()=>[s(_,{span:24},{default:a(()=>[i("div",G,[e.res_data.office?(b(),x("strong",O,$(e.res_data.office.office_name),1)):D("",!0)])]),_:1})]),_:1}),s(v,{separator:"/",style:{"margin-bottom":"20px"}},{default:a(()=>[s(f,{to:{path:"/"}},{default:a(()=>[A]),_:1}),s(f,{to:{path:"/kssz",query:{id:d.office_id}}},{default:a(()=>[I]),_:1},8,["to"]),s(f,null,{default:a(()=>[J]),_:1})]),_:1}),s(T,{style:{"min-height":"100%"}},{header:a(()=>[s(M,{type:"primary",onClick:d.handleBack},{default:a(()=>[K]),_:1},8,["onClick"])]),default:a(()=>[i("div",P,[i("h1",{style:{"font-size":"30px",color:"#333","font-weight":"bold"},innerHTML:e.data.title},null,8,Q)]),i("div",U,[W,i("span",{innerHTML:e.data.release_time},null,8,X),Y,Z,i("span",{innerHTML:e.data.num},null,8,ee)]),i("div",{innerHTML:e.data.content},null,8,te)]),_:1})],64)}var re=S(F,[["render",ne]]);export{re as default};
