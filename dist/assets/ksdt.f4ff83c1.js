var F=Object.defineProperty,G=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var N=(t,a,e)=>a in t?F(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,V=(t,a)=>{for(var e in a||(a={}))M.call(a,e)&&N(t,e,a[e]);if(B)for(var e of B(a))O.call(a,e)&&N(t,e,a[e]);return t},R=(t,a)=>G(t,L(a));import{a as k}from"./axios.22ed3686.js";import{al as T,u as $,a as A,r as H,o as I,t as J,ad as K,c as r,d as s,ae as p,f as i,w as n,af as x,ag as j,e as m,g as P,h as f,ah as h,i as g}from"./vendor.1fa6d093.js";import{_ as Q,b as U,l as w}from"./index.1b49d6bf.js";const W={name:"ldtd",setup(){const t=T();$();const{id:a}=t.query,e=A({office_info:"",res_data:H(""),column_list:[],is_login:0,is_self:0,total:0,currentPage:1,pageSize:10});I(()=>{v(),_(),c(),b(),z(),d()});const d=()=>{k.get("/api/head/staffs/info").then(o=>{U("userinfo",o.data)})},z=()=>{k.get("/api/head/offices/info",{params:{id:a}}).then(o=>{e.office_info=o.data})},v=()=>{k.get("/api/head/offices/ksdt",{params:{id:a,page:e.currentPage,page_size:e.pageSize}}).then(o=>{e.res_data=o.data,e.pageSize=o.pagination.perPage,e.total=o.pagination.total,e.currentPage=o.pagination.currentPage})},_=()=>{k.get("/api/head/technicalOfficeColumnSets/list",{params:{office_id:a}}).then(o=>{e.column_list=o.data})},c=()=>{w("token")&&(e.is_login=1)},b=()=>{w("userinfo")&&w("userinfo").office.office_id==a&&(e.is_self=1)},C=o=>{e.currentPage=o,v()},y=o=>{window.open(o,"_blank")};return R(V({},J(e)),{changePage:C,go_detail:y,Plus:K,id:a})}},X={style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},Y={key:0},Z=g("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),ee=g("\u79D1\u5BA4\u52A8\u6001"),te=g("\u79D1\u5BA4\u8BBE\u7F6E"),ae={style:{"line-height":"50px","margin-left":"40px"}},ne={style:{"line-height":"18px"}};function oe(t,a,e,d,z,v){const _=r("el-col"),c=r("el-row"),b=r("el-breadcrumb-item"),C=r("el-breadcrumb"),y=r("el-button"),o=r("el-image"),S=r("el-link"),q=r("el-pagination"),D=r("el-card");return s(),p(x,null,[i(c,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:n(()=>[i(_,{span:24},{default:n(()=>[f("div",X,[t.office_info?(s(),p("strong",Y,h(t.office_info.name),1)):P("",!0)])]),_:1})]),_:1}),i(C,{separator:"/",style:{"margin-bottom":"20px"}},{default:n(()=>[i(b,{to:{path:"/"}},{default:n(()=>[Z]),_:1}),i(b,null,{default:n(()=>[ee]),_:1})]),_:1}),(s(!0),p(x,null,j(t.column_list,(l,E)=>(s(),m(c,{gutter:24,justify:"space-between",align:"middle",style:{"line-height":"36px","margin-bottom":"20px"}},{default:n(()=>[(s(!0),p(x,null,j(l,(u,ie)=>(s(),m(_,{sm:3},{default:n(()=>[i(y,{type:"primary",onClick:le=>d.go_detail(u.url+"?id="+d.id+"&column_id="+u.id+"&column_name="+u.name+"&column_type="+u.type)},{default:n(()=>[g(h(u.name),1)]),_:2},1032,["onClick"])]),_:2},1024))),256))]),_:2},1024))),256)),t.is_login&&t.is_self?(s(),m(c,{key:0,gutter:24,justify:"space-between",align:"middle",style:{"line-height":"36px","margin-bottom":"20px"}},{default:n(()=>[i(_,{sm:3},{default:n(()=>[i(y,{type:"primary",onClick:a[0]||(a[0]=l=>d.go_detail("/kssz?id="+d.id))},{default:n(()=>[te]),_:1})]),_:1})]),_:1})):P("",!0),i(D,{class:"box-card"},{default:n(()=>[(s(!0),p(x,null,j(t.res_data,(l,E)=>(s(),m(c,{gutter:20,style:{"margin-bottom":"20px"},justify:"space-around",align:"middle"},{default:n(()=>[i(_,{sm:24},{default:n(()=>[i(c,{gutter:20},{default:n(()=>[i(_,{sm:4},{default:n(()=>[l.img_url?(s(),m(o,{style:{width:"100%",height:"auto",cursor:"pointer"},src:l.img_url,key:l.img_url,onClick:u=>d.go_detail("/ksjs_dt_detail?id="+l.id)},null,8,["src","onClick"])):P("",!0)]),_:2},1024),i(_,{sm:20},{default:n(()=>[f("div",ae,[f("div",null,[i(S,{underline:!1,href:"/ksjs_dt_detail?id="+l.id,target:"_blank"},{default:n(()=>[g(h(l.title),1)]),_:2},1032,["href"])]),f("div",ne,[f("span",null,h(l.strip_content),1)]),f("div",null,[i(S,{underline:!1,href:"/ksjs_dt_detail?id="+l.id,target:"_blank"},{default:n(()=>[g(h(l.release_time),1)]),_:2},1032,["href"])])])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256)),i(q,{background:"",layout:"prev, pager, next",total:t.total,"page-size":t.pageSize,"current-page":t.currentPage,onCurrentChange:d.changePage},null,8,["total","page-size","current-page","onCurrentChange"])]),_:1})],64)}var ce=Q(W,[["render",oe]]);export{ce as default};
