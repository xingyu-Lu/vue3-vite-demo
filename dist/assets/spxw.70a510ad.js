var C=Object.defineProperty,j=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var b=(e,t,a)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))B.call(t,a)&&b(e,a,t[a]);if(m)for(var a of m(t))N.call(t,a)&&b(e,a,t[a]);return e},x=(e,t)=>j(e,S(t));import{a as V,o as $,t as D,ad as E,c as l,d as c,ae as y,f as n,w as o,af as w,ag as F,e as I,h as _,i as d,ah as k}from"./vendor.0774305f.js";import{a as L}from"./axios.0f6089b1.js";import{_ as M}from"./index.b25f2e24.js";const R={name:"Introduce",setup(){const e=V({res_data:[],total:0,currentPage:1,pageSize:10});$(()=>{t()});const t=()=>{L.get("/api/head/news/yyxw",{params:{page:e.currentPage,page_size:e.pageSize,type:2}}).then(r=>{e.res_data=r.data,e.pageSize=r.pagination.perPage,e.total=r.pagination.total,e.currentPage=r.pagination.currentPage})},a=r=>{e.currentPage=r,t()},i=r=>{window.open(r,"_blank")};return x(h({},D(e)),{changePage:a,go_detail:i,Plus:E})}},T=_("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[_("strong",null,"\u89C6\u9891\u65B0\u95FB")],-1),q=d("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),A=d("\u89C6\u9891\u65B0\u95FB"),G=["onClick"];function H(e,t,a,i,r,J){const p=l("el-col"),g=l("el-row"),u=l("el-breadcrumb-item"),v=l("el-breadcrumb"),f=l("el-link"),P=l("el-pagination"),z=l("el-card");return c(),y(w,null,[n(g,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:o(()=>[n(p,{span:24},{default:o(()=>[T]),_:1})]),_:1}),n(v,{separator:"/",style:{"margin-bottom":"20px"}},{default:o(()=>[n(u,{to:{path:"/"}},{default:o(()=>[q]),_:1}),n(u,null,{default:o(()=>[A]),_:1})]),_:1}),n(z,{class:"box-card"},{default:o(()=>[(c(!0),y(w,null,F(e.res_data,(s,K)=>(c(),I(g,{gutter:20,style:{"margin-bottom":"20px"},justify:"space-between",align:"middle"},{default:o(()=>[n(p,{sm:24},{default:o(()=>[_("div",{style:{display:"flex","justify-content":"space-between",cursor:"pointer"},onClick:O=>i.go_detail("/spxw_detail?id="+s.id)},[n(f,{underline:!1,href:"/spxw_detail?id="+s.id,target:"_blank"},{default:o(()=>[d(k(s.title),1)]),_:2},1032,["href"]),n(f,{underline:!1,href:"/spxw_detail?id="+s.id,target:"_blank"},{default:o(()=>[d(k(s.release_time),1)]),_:2},1032,["href"])],8,G)]),_:2},1024)]),_:2},1024))),256)),n(P,{background:"",layout:"prev, pager, next",total:e.total,"page-size":e.pageSize,"current-page":e.currentPage,onCurrentChange:i.changePage},null,8,["total","page-size","current-page","onCurrentChange"])]),_:1})],64)}var Y=M(R,[["render",H]]);export{Y as default};
