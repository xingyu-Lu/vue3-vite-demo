var F=Object.defineProperty,G=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var V=(t,e,o)=>e in t?F(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,z=(t,e)=>{for(var o in e||(e={}))L.call(e,o)&&V(t,o,e[o]);if(N)for(var o of N(e))M.call(e,o)&&V(t,o,e[o]);return t},R=(t,e)=>G(t,I(e));import{a as b}from"./axios.b20e7802.js";import{al as O,u as P,a as T,r as A,o as H,t as J,ad as K,c as d,d as a,ae as r,f as l,w as s,af as p,ag as m,e as g,g as S,h as _,ah as x,i as k}from"./vendor.1fa6d093.js";import{_ as Q,b as U,l as w}from"./index.703ad0c0.js";const W={name:"ldtd",setup(){const t=O();P();const{id:e}=t.query,o=T({office_info:"",res_data:A(""),column_list:[],is_login:0,is_self:0});H(()=>{C(),u(),h(),v(),j(),c()});const c=()=>{b.get("/api/head/staffs/info").then(n=>{U("userinfo",n.data)})},j=()=>{b.get("/api/head/offices/info",{params:{id:e}}).then(n=>{o.office_info=n.data})},C=()=>{b.get("/api/head/offices/ksys",{params:{id:e}}).then(n=>{o.res_data=n.data})},f=n=>{window.open(n,"_blank")},u=()=>{b.get("/api/head/technicalOfficeColumnSets/list",{params:{office_id:e}}).then(n=>{o.column_list=n.data})},h=()=>{w("token")&&(o.is_login=1)},v=()=>{w("userinfo")&&w("userinfo").office.forEach(n=>{n.office_id==e&&(o.is_self=1)})};return R(z({},J(o)),{go_detail:f,Plus:K,id:e})}},X={style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},Y={key:0},Z=k("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),ee=k("\u79D1\u5BA4\u533B\u751F"),te=k("\u79D1\u5BA4\u8BBE\u7F6E"),oe={class:"img",style:{overflow:"hidden"}},se=["src"],ne={style:{padding:"14px","line-height":"36px","font-size":"14px"}},ae={style:{color:"#DC8C00"}},ie={style:{display:"flex","justify-content":"space-around"}},le={style:{"list-style":"none"}};function re(t,e,o,c,j,C){const f=d("el-col"),u=d("el-row"),h=d("el-breadcrumb-item"),v=d("el-breadcrumb"),n=d("el-button"),D=d("el-card"),E=d("el-link");return a(),r(p,null,[l(u,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:s(()=>[l(f,{span:24},{default:s(()=>[_("div",X,[t.office_info?(a(),r("strong",Y,x(t.office_info.name),1)):S("",!0)])]),_:1})]),_:1}),l(v,{separator:"/",style:{"margin-bottom":"20px"}},{default:s(()=>[l(h,{to:{path:"/"}},{default:s(()=>[Z]),_:1}),l(h,null,{default:s(()=>[ee]),_:1})]),_:1}),(a(!0),r(p,null,m(t.column_list,(y,$)=>(a(),g(u,{gutter:24,justify:"space-between",align:"middle",style:{"line-height":"36px","margin-bottom":"20px"}},{default:s(()=>[(a(!0),r(p,null,m(y,(i,q)=>(a(),g(f,{sm:3},{default:s(()=>[l(n,{type:"primary",onClick:B=>c.go_detail(i.url+"?id="+c.id+"&column_id="+i.id+"&column_name="+i.name+"&column_type="+i.type)},{default:s(()=>[k(x(i.name),1)]),_:2},1032,["onClick"])]),_:2},1024))),256))]),_:2},1024))),256)),t.is_login&&t.is_self?(a(),g(u,{key:0,gutter:24,justify:"space-between",align:"middle",style:{"line-height":"36px","margin-bottom":"20px"}},{default:s(()=>[l(f,{sm:3},{default:s(()=>[l(n,{type:"primary",onClick:e[0]||(e[0]=y=>c.go_detail("/kssz?id="+c.id))},{default:s(()=>[te]),_:1})]),_:1})]),_:1})):S("",!0),(a(!0),r(p,null,m(t.res_data,(y,$)=>(a(),g(u,{gutter:20,justify:"space-around"},{default:s(()=>[(a(!0),r(p,null,m(y,(i,q)=>(a(),g(f,{sm:4},{default:s(()=>[l(E,{href:"/ksjs_ys_detail?id="+i.id,underline:!1,target:"_blank"},{default:s(()=>[l(D,{"body-style":{padding:"10px"},shadow:"never"},{default:s(()=>[_("div",oe,[_("img",{src:i.img_url},null,8,se)]),_("div",ne,[_("span",ae,x(i.name),1),_("div",ie,[_("div",le,[(a(!0),r(p,null,m(i.professional,(B,de)=>(a(),r("li",null,x(B),1))),256))])])])]),_:2},1024)]),_:2},1032,["href"])]),_:2},1024))),256))]),_:2},1024))),256))],64)}var pe=Q(W,[["render",re],["__scopeId","data-v-6b9c4aa5"]]);export{pe as default};
