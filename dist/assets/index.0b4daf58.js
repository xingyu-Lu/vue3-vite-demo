var z=Object.defineProperty,j=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var y=(t,e,a)=>e in t?z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,k=(t,e)=>{for(var a in e||(e={}))N.call(e,a)&&y(t,a,e[a]);if(b)for(var a of b(e))V.call(e,a)&&y(t,a,e[a]);return t},x=(t,e)=>j(t,B(e));import{a as R}from"./axios.6f1a8d61.js";import{al as S,u as q,a as D,r as E,o as F,t as G,ad as M,c as _,d as m,ae as h,f as s,w as o,af as P,h as T,ah as A,g as c,e as v,i}from"./vendor.d8b711b0.js";import{_ as H,l as C,b as I}from"./index.7c8a64cf.js";const J={name:"ldtd",setup(){const t=S();q();const{id:e}=t.query,a=D({res_data:E(""),column_list:[]});F(()=>{C("userinfo")?a.res_data=C("userinfo"):n()});const n=()=>{R.get("/api/head/staffs/info").then(r=>{a.res_data=r.data,I("userinfo",r.data)})},u=r=>{window.open(r,"_blank")};return x(k({},G(a)),{go_detail:u,Plus:M,id:e})}},K={style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},L={key:0},O=i("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),Q=i("\u79D1\u5BA4\u8BBE\u7F6E"),U=i("\u79D1\u5BA4\u52A8\u6001"),W=i("\u79D1\u5BA4\u95E8\u8BCA"),X=i("\u79D1\u5BA4\u6210\u5458"),Y=i("\u680F\u76EE\u8BBE\u7F6E"),Z=i("\u79D1\u5BA4\u680F\u76EE");function $(t,e,a,n,u,r){const d=_("el-col"),p=_("el-row"),g=_("el-breadcrumb-item"),w=_("el-breadcrumb"),l=_("el-button");return m(),h(P,null,[s(p,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:o(()=>[s(d,{span:24},{default:o(()=>[T("div",K,[t.res_data.office?(m(),h("strong",L,A(t.res_data.office.office_name),1)):c("",!0)])]),_:1})]),_:1}),s(w,{separator:"/",style:{"margin-bottom":"20px"}},{default:o(()=>[s(g,{to:{path:"/"}},{default:o(()=>[O]),_:1}),s(g,null,{default:o(()=>[Q]),_:1})]),_:1}),s(p,{gutter:24,justify:"space-between",align:"middle",style:{"line-height":"36px","margin-bottom":"20px"}},{default:o(()=>[s(d,{sm:3},{default:o(()=>[s(l,{type:"primary",onClick:e[0]||(e[0]=f=>n.go_detail("/kssz-ksdt-index?id="+n.id))},{default:o(()=>[U]),_:1})]),_:1}),s(d,{sm:3},{default:o(()=>[s(l,{type:"primary",onClick:e[1]||(e[1]=f=>n.go_detail("/kssz-outpatient-index?id="+n.id))},{default:o(()=>[W]),_:1})]),_:1}),t.res_data.office.is_head==1?(m(),v(d,{key:0,sm:3},{default:o(()=>[s(l,{type:"primary",onClick:e[2]||(e[2]=f=>n.go_detail("/kssz-member-index?id="+n.id))},{default:o(()=>[X]),_:1})]),_:1})):c("",!0),t.res_data.office.is_head==1?(m(),v(d,{key:1,sm:3},{default:o(()=>[s(l,{type:"primary",onClick:e[3]||(e[3]=f=>n.go_detail("/kssz-columnset-index?id="+n.id))},{default:o(()=>[Y]),_:1})]),_:1})):c("",!0),s(d,{sm:3},{default:o(()=>[s(l,{type:"primary",onClick:e[4]||(e[4]=f=>n.go_detail("/kssz-column-index?id="+n.id))},{default:o(()=>[Z]),_:1})]),_:1})]),_:1})],64)}var se=H(J,[["render",$]]);export{se as default};