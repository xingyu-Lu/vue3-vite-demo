var C=Object.defineProperty,j=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var y=(e,t,a)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,b=(e,t)=>{for(var a in t||(t={}))B.call(t,a)&&y(e,a,t[a]);if(m)for(var a of m(t))N.call(t,a)&&y(e,a,t[a]);return e},h=(e,t)=>j(e,S(t));import{a as V,o as $,t as D,ad as E,c as l,d,ae as x,f as n,w as o,af as k,ag as F,e as I,h as g,i as c,ah as v}from"./vendor.0774305f.js";import{a as L}from"./axios.0679ab75.js";import{_ as M}from"./index.9b3dcbfc.js";const R={name:"Introduce",setup(){const e=V({res_data:[],total:0,currentPage:1,pageSize:10});$(()=>{t()});const t=()=>{L.get("/api/head/news/yyxw",{params:{page:e.currentPage,page_size:e.pageSize,type:1}}).then(r=>{e.res_data=r.data,e.pageSize=r.pagination.perPage,e.total=r.pagination.total,e.currentPage=r.pagination.currentPage})},a=r=>{e.currentPage=r,t()},i=r=>{window.open(r,"_blank")};return h(b({},D(e)),{changePage:a,go_detail:i,Plus:E})}},T=g("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[g("strong",null,"\u533B\u9662\u516C\u544A")],-1),q=c("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),A=c("\u533B\u9662\u516C\u544A"),G=["onClick"];function H(e,t,a,i,r,J){const _=l("el-col"),p=l("el-row"),u=l("el-breadcrumb-item"),w=l("el-breadcrumb"),f=l("el-link"),P=l("el-pagination"),z=l("el-card");return d(),x(k,null,[n(p,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:o(()=>[n(_,{span:24},{default:o(()=>[T]),_:1})]),_:1}),n(w,{separator:"/",style:{"margin-bottom":"20px"}},{default:o(()=>[n(u,{to:{path:"/"}},{default:o(()=>[q]),_:1}),n(u,null,{default:o(()=>[A]),_:1})]),_:1}),n(z,{class:"box-card"},{default:o(()=>[(d(!0),x(k,null,F(e.res_data,(s,K)=>(d(),I(p,{gutter:20,style:{"margin-bottom":"20px"},justify:"space-between",align:"middle"},{default:o(()=>[n(_,{sm:24},{default:o(()=>[g("div",{style:{display:"flex","justify-content":"space-between",cursor:"pointer"},onClick:O=>i.go_detail("/yygg_detail?id="+s.id)},[n(f,{underline:!1,href:"/yygg_detail?id="+s.id,target:"_blank"},{default:o(()=>[c(v(s.title),1)]),_:2},1032,["href"]),n(f,{underline:!1,href:"/yygg_detail?id="+s.id,target:"_blank"},{default:o(()=>[c(v(s.release_time),1)]),_:2},1032,["href"])],8,G)]),_:2},1024)]),_:2},1024))),256)),n(P,{background:"",layout:"prev, pager, next",total:e.total,"page-size":e.pageSize,"current-page":e.currentPage,onCurrentChange:i.changePage},null,8,["total","page-size","current-page","onCurrentChange"])]),_:1})],64)}var Y=M(R,[["render",H]]);export{Y as default};
