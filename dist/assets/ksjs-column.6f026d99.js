var G=Object.defineProperty,L=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var F=(e,t,l)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,R=(e,t)=>{for(var l in t||(t={}))O.call(t,l)&&F(e,l,t[l]);if(V)for(var l of V(t))T.call(t,l)&&F(e,l,t[l]);return e},E=(e,t)=>L(e,M(t));import{a as w}from"./axios.64f7e1f7.js";import{al as A,u as H,a as I,r as J,o as K,t as Q,ad as U,c as _,d as i,ae as f,f as c,w as n,af as y,ag as b,e as g,g as k,h as u,ah as h,i as x}from"./vendor.a93cca51.js";import{_ as W,l as S}from"./index.e972642b.js";const X={name:"ldtd",setup(){const e=A();H();const{id:t,column_name:l,column_id:o,column_type:B}=e.query,s=I({office_info:"",res_data:J(""),column_list:[],is_login:0,is_self:0,total:0,currentPage:1,pageSize:10});K(()=>{p(),v(),j(),C(),m()});const m=()=>{w.get("/api/head/offices/info",{params:{id:t}}).then(a=>{s.office_info=a.data})},p=()=>{w.get("/api/head/offices/column",{params:{office_id:t,column_id:o,page:s.currentPage,page_size:s.pageSize}}).then(a=>{s.res_data=a.data,s.pageSize=a.pagination.perPage,s.total=a.pagination.total,s.currentPage=a.pagination.currentPage})},v=()=>{w.get("/api/head/technicalOfficeColumnSets/list",{params:{office_id:t}}).then(a=>{s.column_list=a.data})},j=()=>{S("token")&&(s.is_login=1)},C=()=>{S("userinfo")&&S("userinfo").office.office_id==t&&(s.is_self=1)},P=a=>{s.currentPage=a,p()},z=a=>{window.open(a,"_blank")};return E(R({},Q(s)),{go_detail:z,changePage:P,Plus:U,id:t,column_name:l,column_type:B})}},Y={style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},Z={key:0},$=x("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),ee=x("\u79D1\u5BA4\u8BBE\u7F6E"),te={style:{color:"#409EFF","line-height":"38px"}},ne={style:{display:"flex","justify-content":"space-between"}},oe={style:{color:"#999"}},ae=["src","onClick"],ie={style:{padding:"14px","line-height":"36px","font-size":"14px",cursor:"pointer"}},le={style:{display:"flex","justify-content":"space-around"}},se={style:{"list-style":"none"}};function re(e,t,l,o,B,s){const m=_("el-col"),p=_("el-row"),v=_("el-breadcrumb-item"),j=_("el-breadcrumb"),C=_("el-button"),P=_("el-link"),z=_("el-pagination"),a=_("el-card");return i(),f(y,null,[c(p,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:n(()=>[c(m,{span:24},{default:n(()=>[u("div",Y,[e.office_info?(i(),f("strong",Z,h(e.office_info.name),1)):k("v-if",!0)])]),_:1})]),_:1}),c(j,{separator:"/",style:{"margin-bottom":"20px"}},{default:n(()=>[c(v,{to:{path:"/"}},{default:n(()=>[$]),_:1}),c(v,null,{default:n(()=>[x(h(o.column_name),1)]),_:1})]),_:1}),(i(!0),f(y,null,b(e.column_list,(d,N)=>(i(),g(p,{gutter:24,justify:"space-between",align:"middle",style:{"line-height":"36px","margin-bottom":"20px"}},{default:n(()=>[(i(!0),f(y,null,b(d,(r,q)=>(i(),g(m,{sm:3},{default:n(()=>[c(C,{type:"primary",onClick:D=>o.go_detail(r.url+"?id="+o.id+"&column_id="+r.id+"&column_name="+r.name+"&column_type="+r.type)},{default:n(()=>[x(h(r.name),1)]),_:2},1032,["onClick"])]),_:2},1024))),256))]),_:2},1024))),256)),e.is_login&&e.is_self?(i(),g(p,{key:0,gutter:24,justify:"space-between",align:"middle",style:{"line-height":"36px","margin-bottom":"20px"}},{default:n(()=>[c(m,{sm:3},{default:n(()=>[c(C,{type:"primary",onClick:t[0]||(t[0]=d=>o.go_detail("/kssz?id="+o.id))},{default:n(()=>[ee]),_:1})]),_:1})]),_:1})):k("v-if",!0),o.column_type==0?(i(),g(a,{key:1},{default:n(()=>[u("ul",te,[(i(!0),f(y,null,b(e.res_data,(d,N)=>(i(),f("li",null,[u("div",ne,[c(P,{style:{"font-size":"16px"},href:"/ksjs-column-detail?id="+d.id+"&office_id="+d.office_id+"&column_name="+d.column_name+"&column_type="+o.column_type,target:"_blank",type:"primary",underline:!1},{default:n(()=>[x(h(d.title)+"\u200B",1)]),_:2},1032,["href"]),u("span",oe,h(d.release_time),1)])]))),256))]),c(z,{background:"",layout:"prev, pager, next",total:e.total,"page-size":e.pageSize,"current-page":e.currentPage,onCurrentChange:o.changePage},null,8,["total","page-size","current-page","onCurrentChange"])]),_:1})):k("v-if",!0),o.column_type==1?(i(!0),f(y,{key:2},b(e.res_data,(d,N)=>(i(),g(p,{gutter:20,justify:"space-around",style:{"margin-bottom":"20px"}},{default:n(()=>[(i(!0),f(y,null,b(d,(r,q)=>(i(),g(m,{sm:6},{default:n(()=>[c(a,{"body-style":{padding:"0px"}},{default:n(()=>[u("img",{src:r.url,style:{width:"100%",cursor:"pointer"},onClick:D=>o.go_detail("/ksjs-column-detail?id="+r.id+"&office_id="+r.office_id+"&column_name="+r.column_name+"&column_type="+o.column_type)},null,8,ae),u("div",ie,[u("div",le,[u("div",se,[u("li",null,h(r.title),1)])])])]),_:2},1024)]),_:2},1024))),256))]),_:2},1024))),256)):k("v-if",!0),o.column_type==1?(i(),g(z,{key:3,background:"",layout:"prev, pager, next",total:e.total,"page-size":e.pageSize,"current-page":e.currentPage,onCurrentChange:o.changePage},null,8,["total","page-size","current-page","onCurrentChange"])):k("v-if",!0)],64)}var fe=W(X,[["render",re]]);export{fe as default};
