var F=Object.defineProperty,G=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var B=(t,a,e)=>a in t?F(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,N=(t,a)=>{for(var e in a||(a={}))M.call(a,e)&&B(t,e,a[e]);if(S)for(var e of S(a))O.call(a,e)&&B(t,e,a[e]);return t},V=(t,a)=>G(t,L(a));import{a as v}from"./axios.ab416000.js";import{al as T,u as $,a as A,r as H,o as I,t as J,ad as K,c as r,d as s,ae as p,f as o,w as n,af as y,ag as C,e as m,g as j,h as f,ah as h,i as g}from"./vendor.d1c66501.js";import{_ as Q,l as P}from"./index.a55851bf.js";const U={name:"ldtd",setup(){const t=T();$();const{id:a}=t.query,e=A({office_info:"",res_data:H(""),column_list:[],is_login:0,is_self:0,total:0,currentPage:1,pageSize:10});I(()=>{k(),w(),_(),c(),d()});const d=()=>{v.get("/api/head/offices/info",{params:{id:a}}).then(i=>{e.office_info=i.data})},k=()=>{v.get("/api/head/offices/ksdt",{params:{id:a,page:e.currentPage,page_size:e.pageSize}}).then(i=>{e.res_data=i.data,e.pageSize=i.pagination.perPage,e.total=i.pagination.total,e.currentPage=i.pagination.currentPage})},w=()=>{v.get("/api/head/technicalOfficeColumnSets/list",{params:{office_id:a}}).then(i=>{e.column_list=i.data})},_=()=>{P("token")&&(e.is_login=1)},c=()=>{P("userinfo")&&P("userinfo").office.office_id==a&&(e.is_self=1)},b=i=>{e.currentPage=i,k()},x=i=>{window.open(i,"_blank")};return V(N({},J(e)),{changePage:b,go_detail:x,Plus:K,id:a})}},W={style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},X={key:0},Y=g("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),Z=g("\u79D1\u5BA4\u52A8\u6001"),ee=g("\u79D1\u5BA4\u8BBE\u7F6E"),te={style:{"line-height":"50px","margin-left":"40px"}},ae={style:{"line-height":"18px"}};function ne(t,a,e,d,k,w){const _=r("el-col"),c=r("el-row"),b=r("el-breadcrumb-item"),x=r("el-breadcrumb"),i=r("el-button"),R=r("el-image"),z=r("el-link"),q=r("el-pagination"),D=r("el-card");return s(),p(y,null,[o(c,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:n(()=>[o(_,{span:24},{default:n(()=>[f("div",W,[t.office_info?(s(),p("strong",X,h(t.office_info.name),1)):j("",!0)])]),_:1})]),_:1}),o(x,{separator:"/",style:{"margin-bottom":"20px"}},{default:n(()=>[o(b,{to:{path:"/"}},{default:n(()=>[Y]),_:1}),o(b,null,{default:n(()=>[Z]),_:1})]),_:1}),(s(!0),p(y,null,C(t.column_list,(l,E)=>(s(),m(c,{gutter:24,justify:"space-between",align:"middle",style:{"line-height":"36px","margin-bottom":"20px"}},{default:n(()=>[(s(!0),p(y,null,C(l,(u,oe)=>(s(),m(_,{md:3},{default:n(()=>[o(i,{type:"primary",onClick:ie=>d.go_detail(u.url+"?id="+d.id+"&column_id="+u.id+"&column_name="+u.name+"&column_type="+u.type)},{default:n(()=>[g(h(u.name),1)]),_:2},1032,["onClick"])]),_:2},1024))),256))]),_:2},1024))),256)),t.is_login&&t.is_self?(s(),m(c,{key:0,gutter:24,justify:"space-between",align:"middle",style:{"line-height":"36px","margin-bottom":"20px"}},{default:n(()=>[o(_,{md:3},{default:n(()=>[o(i,{type:"primary",onClick:a[0]||(a[0]=l=>d.go_detail("/kssz?id="+d.id))},{default:n(()=>[ee]),_:1})]),_:1})]),_:1})):j("",!0),o(D,{class:"box-card"},{default:n(()=>[(s(!0),p(y,null,C(t.res_data,(l,E)=>(s(),m(c,{gutter:20,style:{"margin-bottom":"20px"},justify:"space-around",align:"middle"},{default:n(()=>[o(_,{md:24},{default:n(()=>[o(c,{gutter:20},{default:n(()=>[o(_,{md:4},{default:n(()=>[l.img_url?(s(),m(R,{style:{width:"100%",height:"auto",cursor:"pointer"},src:l.img_url,key:l.img_url,onClick:u=>d.go_detail("/ksjs_dt_detail?id="+l.id)},null,8,["src","onClick"])):j("",!0)]),_:2},1024),o(_,{md:20},{default:n(()=>[f("div",te,[f("div",null,[o(z,{underline:!1,href:"/ksjs_dt_detail?id="+l.id,target:"_blank"},{default:n(()=>[g(h(l.title),1)]),_:2},1032,["href"])]),f("div",ae,[f("span",null,h(l.strip_content),1)]),f("div",null,[o(z,{underline:!1,href:"/ksjs_dt_detail?id="+l.id,target:"_blank"},{default:n(()=>[g(h(l.release_time),1)]),_:2},1032,["href"])])])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256)),o(q,{background:"",layout:"prev, pager, next",total:t.total,"page-size":t.pageSize,"current-page":t.currentPage,onCurrentChange:d.changePage},null,8,["total","page-size","current-page","onCurrentChange"])]),_:1})],64)}var _e=Q(U,[["render",ne]]);export{_e as default};
