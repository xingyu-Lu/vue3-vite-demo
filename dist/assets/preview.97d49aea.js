var T=Object.defineProperty,B=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var m=(e,t,o)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,h=(e,t)=>{for(var o in t||(t={}))L.call(t,o)&&m(e,o,t[o]);if(p)for(var o of p(t))j.call(t,o)&&m(e,o,t[o]);return e},g=(e,t)=>B(e,H(t));import{a as b}from"./axios.77057956.js";import{al as C,u as z,a as S,o as I,t as N,c as r,d as y,ae as v,f as s,w as n,af as V,h as i,ah as q,g as R,i as d,ai as $,aj as D}from"./vendor.0774305f.js";import{_ as E,l as x}from"./index.ab8bab27.js";const F={name:"dynamic_preview",setup(){const e=C(),t=z(),{id:o,office_id:l}=e.query,c=S({res_data:"",data:{url:"",title:"",release_time:"",content:"",num:""}});I(()=>{o&&b.get(`/api/head/technicalOfficeColumns/${o}`).then(a=>{c.data={url:a.data.url,title:a.data.title,release_time:a.data.release_time,content:a.data.content,num:a.data.num}}),x("userinfo")?c.res_data=x("userinfo"):f()});const f=()=>{b.get("/api/head/staffs/info").then(a=>{c.res_data=a.data,localSet("userinfo",a.data)})},_=()=>{t.push({path:"/kssz-column-index",query:{id:l}})};return g(h({},N(c)),{handleBack:_,office_id:l})}},G=e=>($("data-v-7b5f47b4"),e=e(),D(),e),O={style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},A={key:0},J=d("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),K=d("\u79D1\u5BA4\u8BBE\u7F6E"),P=d("\u79D1\u5BA4\u680F\u76EE"),Q=d("\u8FD4\u56DE"),U={style:{display:"flex","justify-content":"center"}},W=["innerHTML"],X={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"-10px","margin-bottom":"20px"}},Y=d(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),Z=["innerHTML"],ee=G(()=>i("span",null,"\xA0\xA0\xA0\xA0",-1)),te=d(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),oe=["innerHTML"],ae=["innerHTML"];function ne(e,t,o,l,c,f){const _=r("el-col"),a=r("el-row"),u=r("el-breadcrumb-item"),k=r("el-breadcrumb"),w=r("el-button"),M=r("el-card");return y(),v(V,null,[s(a,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:n(()=>[s(_,{span:24},{default:n(()=>[i("div",O,[e.res_data.office?(y(),v("strong",A,q(e.res_data.office.office_name),1)):R("",!0)])]),_:1})]),_:1}),s(k,{separator:"/",style:{"margin-bottom":"20px"}},{default:n(()=>[s(u,{to:{path:"/"}},{default:n(()=>[J]),_:1}),s(u,{to:{path:"/kssz",query:{id:l.office_id}}},{default:n(()=>[K]),_:1},8,["to"]),s(u,null,{default:n(()=>[P]),_:1})]),_:1}),s(M,{style:{"min-height":"100%"}},{header:n(()=>[s(w,{type:"primary",onClick:l.handleBack},{default:n(()=>[Q]),_:1},8,["onClick"])]),default:n(()=>[i("div",U,[i("h1",{style:{"font-size":"30px",color:"#333","font-weight":"bold"},innerHTML:e.data.title},null,8,W)]),i("div",X,[Y,i("span",{innerHTML:e.data.release_time},null,8,Z),ee,te,i("span",{innerHTML:e.data.num},null,8,oe)]),i("div",{innerHTML:e.data.content},null,8,ae)]),_:1})],64)}var le=E(F,[["render",ne],["__scopeId","data-v-7b5f47b4"]]);export{le as default};