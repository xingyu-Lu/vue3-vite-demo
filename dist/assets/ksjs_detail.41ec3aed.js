var M=Object.defineProperty,R=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var w=(t,e,o)=>e in t?M(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,B=(t,e)=>{for(var o in e||(e={}))T.call(e,o)&&w(t,o,e[o]);if(C)for(var o of C(e))z.call(e,o)&&w(t,o,e[o]);return t},N=(t,e)=>R(t,S(e));import{a as m}from"./axios.7aa09c21.js";import{al as H,u as $,a as q,r as D,o as E,t as F,ad as G,c as f,d as s,ae as c,f as i,w as n,af as h,ag as V,e as y,g as b,h as I,ah as L,i as p}from"./vendor.3f1080f6.js";import{_ as O,b as P,l as k}from"./index.b86d302a.js";const A={name:"ldtd",setup(){const t=H();$();const{id:e}=t.query,o=q({office_info:"",res_data:D(""),column_list:[],is_login:0,is_self:0});E(()=>{v(),r(),x(),l(),d(),u()});const l=()=>{m.get("/api/head/staffs/info").then(a=>{P("userinfo",a.data),a.data.office.office_id==e&&(o.is_self=1)})},x=()=>{m.get("/api/head/offices/info",{params:{id:e}}).then(a=>{o.office_info=a.data})},v=()=>{m.get("/api/head/offices/ksjs_detail",{params:{id:e}}).then(a=>{o.res_data=a.data})},r=()=>{m.get("/api/head/technicalOfficeColumnSets/list",{params:{office_id:e}}).then(a=>{o.column_list=a.data})},d=()=>{k("token")&&(o.is_login=1)},u=()=>{k("userinfo")&&k("userinfo").office.office_id==e&&(o.is_self=1)},g=a=>{window.open(a,"_blank")};return N(B({},F(o)),{go_detail:g,Plus:G,id:e})}},J={style:{height:"150px","align-items":"center","justify-content":"center",display:"flex","font-size":"48px","letter-spacing":"0.2em",color:"#fff"}},K={key:0},Q=p("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),U=p("\u79D1\u5BA4\u4ECB\u7ECD"),W=p("\u79D1\u5BA4\u8BBE\u7F6E"),X=["innerHTML"];function Y(t,e,o,l,x,v){const r=f("el-col"),d=f("el-row"),u=f("el-breadcrumb-item"),g=f("el-breadcrumb"),a=f("el-button");return s(),c(h,null,[i(d,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:n(()=>[i(r,{span:24},{default:n(()=>[I("div",J,[t.office_info?(s(),c("strong",K,L(t.office_info.name),1)):b("",!0)])]),_:1})]),_:1}),i(g,{separator:"/",style:{"margin-bottom":"20px"}},{default:n(()=>[i(u,{to:{path:"/"}},{default:n(()=>[Q]),_:1}),i(u,null,{default:n(()=>[U]),_:1})]),_:1}),(s(!0),c(h,null,V(t.column_list,(j,Z)=>(s(),y(d,{gutter:20,justify:"start",align:"middle",style:{"line-height":"36px","margin-bottom":"20px"}},{default:n(()=>[(s(!0),c(h,null,V(j,(_,ee)=>(s(),y(r,{sm:3},{default:n(()=>[i(a,{type:"primary",onClick:te=>l.go_detail(_.url+"?id="+l.id+"&column_id="+_.id+"&column_name="+_.name+"&column_type="+_.type)},{default:n(()=>[p(L(_.name),1)]),_:2},1032,["onClick"])]),_:2},1024))),256))]),_:2},1024))),256)),t.is_login&&t.is_self?(s(),y(d,{key:0,gutter:24,justify:"start",align:"middle",style:{"line-height":"36px","margin-bottom":"20px"}},{default:n(()=>[i(r,{sm:3},{default:n(()=>[i(a,{type:"primary",onClick:e[0]||(e[0]=j=>l.go_detail("/kssz?id="+l.id))},{default:n(()=>[W]),_:1})]),_:1})]),_:1})):b("",!0),t.res_data?(s(),c("span",{key:1,innerHTML:t.res_data.content},null,8,X)):b("",!0)],64)}var ie=O(A,[["render",Y],["__scopeId","data-v-f3f77106"]]);export{ie as default};