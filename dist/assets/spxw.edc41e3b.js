var C=Object.defineProperty,j=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var b=(e,t,a)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))B.call(t,a)&&b(e,a,t[a]);if(m)for(var a of m(t))N.call(t,a)&&b(e,a,t[a]);return e},x=(e,t)=>j(e,S(t));import{a as V}from"./axios.65b91284.js";import{_ as $}from"./index.77152f92.js";import{a as D,o as E,t as F,ad as I,c as s,d,ae as y,f as n,w as o,af as w,ag as L,e as M,h as _,i as c,ah as k}from"./vendor.3f1080f6.js";const R={name:"Introduce",setup(){const e=D({res_data:[],total:0,currentPage:1,pageSize:10});E(()=>{t()});const t=()=>{V.get("/api/head/news/yyxw",{params:{page:e.currentPage,page_size:e.pageSize,type:2}}).then(r=>{e.res_data=r.data,e.pageSize=r.pagination.perPage,e.total=r.pagination.total,e.currentPage=r.pagination.currentPage})},a=r=>{e.currentPage=r,t()},i=r=>{window.open(r,"_blank")};return x(h({},F(e)),{changePage:a,go_detail:i,Plus:I})}},T=_("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[_("strong",null,"\u89C6\u9891\u65B0\u95FB")],-1),q=c("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),A=c("\u89C6\u9891\u65B0\u95FB"),G=["onClick"];function H(e,t,a,i,r,J){const p=s("el-col"),g=s("el-row"),u=s("el-breadcrumb-item"),v=s("el-breadcrumb"),f=s("el-link"),P=s("el-pagination"),z=s("el-card");return d(),y(w,null,[n(g,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:o(()=>[n(p,{span:24},{default:o(()=>[T]),_:1})]),_:1}),n(v,{separator:"/",style:{"margin-bottom":"20px"}},{default:o(()=>[n(u,{to:{path:"/"}},{default:o(()=>[q]),_:1}),n(u,null,{default:o(()=>[A]),_:1})]),_:1}),n(z,{class:"box-card"},{default:o(()=>[(d(!0),y(w,null,L(e.res_data,(l,K)=>(d(),M(g,{gutter:20,style:{"margin-bottom":"20px"},justify:"space-between",align:"middle"},{default:o(()=>[n(p,{sm:24},{default:o(()=>[_("div",{style:{display:"flex","justify-content":"space-between",cursor:"pointer"},onClick:O=>i.go_detail("/spxw_detail?id="+l.id)},[n(f,{underline:!1,href:"/spxw_detail?id="+l.id,target:"_blank"},{default:o(()=>[c(k(l.title),1)]),_:2},1032,["href"]),n(f,{underline:!1,href:"/spxw_detail?id="+l.id,target:"_blank"},{default:o(()=>[c(k(l.release_time),1)]),_:2},1032,["href"])],8,G)]),_:2},1024)]),_:2},1024))),256)),n(P,{background:"",layout:"prev, pager, next",total:e.total,"page-size":e.pageSize,"current-page":e.currentPage,onCurrentChange:i.changePage},null,8,["total","page-size","current-page","onCurrentChange"])]),_:1})],64)}var Y=$(R,[["render",H]]);export{Y as default};
