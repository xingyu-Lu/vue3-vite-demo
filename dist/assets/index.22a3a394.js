var w=Object.defineProperty,j=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var b=(t,e,i)=>e in t?w(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,x=(t,e)=>{for(var i in e||(e={}))N.call(e,i)&&b(t,i,e[i]);if(k)for(var i of k(e))V.call(e,i)&&b(t,i,e[i]);return t},v=(t,e)=>j(t,B(e));import{a as R}from"./axios.0ad1708e.js";import{al as S,u as q,a as D,r as E,o as F,t as G,ad as M,c as m,d as _,ae as C,f as s,w as o,af as P,h as T,ah as A,g as c,e as u,i as d}from"./vendor.1fa6d093.js";import{_ as H,l as h,b as I}from"./index.17363daf.js";const J={name:"ldtd",setup(){const t=S();q();const{id:e}=t.query,i=D({res_data:E(""),column_list:[]});F(()=>{h("userinfo")?i.res_data=h("userinfo"):a()});const a=()=>{R.get("/api/head/staffs/info").then(f=>{i.res_data=f.data,I("userinfo",f.data)})},p=f=>{window.open(f,"_blank")};return v(x({},G(i)),{go_detail:p,Plus:M,id:e})}},K={style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},L={key:0},O=d("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),Q=d("\u79D1\u5BA4\u8BBE\u7F6E"),U=d("\u79D1\u5BA4\u4ECB\u7ECD"),W=d("\u95E8\u8BCA\u5750\u8BCA\u533B\u751F\u7B80\u4ECB"),X=d("\u79D1\u5BA4\u533B\u751F"),Y=d("\u79D1\u5BA4\u52A8\u6001"),Z=d("\u79D1\u5BA4\u95E8\u8BCA"),$=d("\u79D1\u5BA4\u6210\u5458"),ee=d("\u680F\u76EE\u8BBE\u7F6E"),te=d("\u79D1\u5BA4\u680F\u76EE");function oe(t,e,i,a,p,f){const n=m("el-col"),y=m("el-row"),g=m("el-breadcrumb-item"),z=m("el-breadcrumb"),r=m("el-button");return _(),C(P,null,[s(y,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:o(()=>[s(n,{span:24},{default:o(()=>[T("div",K,[t.res_data.office?(_(),C("strong",L,A(t.res_data.office.office_name),1)):c("",!0)])]),_:1})]),_:1}),s(z,{separator:"/",style:{"margin-bottom":"20px"}},{default:o(()=>[s(g,{to:{path:"/"}},{default:o(()=>[O]),_:1}),s(g,null,{default:o(()=>[Q]),_:1})]),_:1}),s(y,{gutter:24,justify:"space-between",align:"middle",style:{"line-height":"36px","margin-bottom":"20px"}},{default:o(()=>[s(n,{sm:3},{default:o(()=>[s(r,{type:"primary",onClick:e[0]||(e[0]=l=>a.go_detail("/kssz-ksjs-index?id="+a.id))},{default:o(()=>[U]),_:1})]),_:1}),t.res_data.office&&t.res_data.office.office_name=="\u95E8\u8BCA\u90E8"?(_(),u(n,{key:0,sm:3},{default:o(()=>[s(r,{type:"primary",onClick:e[1]||(e[1]=l=>a.go_detail("/kssz-ksys-index?id="+a.id))},{default:o(()=>[W]),_:1})]),_:1})):(_(),u(n,{key:1,sm:3},{default:o(()=>[s(r,{type:"primary",onClick:e[2]||(e[2]=l=>a.go_detail("/kssz-ksys-index?id="+a.id))},{default:o(()=>[X]),_:1})]),_:1})),s(n,{sm:3},{default:o(()=>[s(r,{type:"primary",onClick:e[3]||(e[3]=l=>a.go_detail("/kssz-ksdt-index?id="+a.id))},{default:o(()=>[Y]),_:1})]),_:1}),t.res_data.office&&t.res_data.office.office_name!="\u95E8\u8BCA\u90E8"?(_(),u(n,{key:2,sm:3},{default:o(()=>[s(r,{type:"primary",onClick:e[4]||(e[4]=l=>a.go_detail("/kssz-outpatient-index?id="+a.id))},{default:o(()=>[Z]),_:1})]),_:1})):c("",!0),t.res_data&&t.res_data.office.is_head==1?(_(),u(n,{key:3,sm:3},{default:o(()=>[s(r,{type:"primary",onClick:e[5]||(e[5]=l=>a.go_detail("/kssz-member-index?id="+a.id))},{default:o(()=>[$]),_:1})]),_:1})):c("",!0),t.res_data&&t.res_data.office.is_head==1?(_(),u(n,{key:4,sm:3},{default:o(()=>[s(r,{type:"primary",onClick:e[6]||(e[6]=l=>a.go_detail("/kssz-columnset-index?id="+a.id))},{default:o(()=>[ee]),_:1})]),_:1})):c("",!0),s(n,{sm:3},{default:o(()=>[s(r,{type:"primary",onClick:e[7]||(e[7]=l=>a.go_detail("/kssz-column-index?id="+a.id))},{default:o(()=>[te]),_:1})]),_:1})]),_:1})],64)}var ne=H(J,[["render",oe]]);export{ne as default};