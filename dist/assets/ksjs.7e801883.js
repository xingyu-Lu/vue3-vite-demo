var V=Object.defineProperty,$=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var y=(e,t,a)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,v=(e,t)=>{for(var a in t||(t={}))D.call(t,a)&&y(e,a,t[a]);if(k)for(var a of k(t))E.call(t,a)&&y(e,a,t[a]);return e},j=(e,t)=>$(e,z(t));import{a as F}from"./axios.65b5a886.js";import{_ as L}from"./index.b4884c2b.js";import{a as M,o as R,t as T,c,d as o,ae as s,f as r,w as n,af as i,ag as f,ai as q,aj as A,ah as g,e as w,h as m,i as C}from"./vendor.1fa6d093.js";const G={name:"Introduce",setup(){const e=M({res_data:[],default_index:"all",index_arr:{all:"\u5168\u90E8",a:"A",b:"B",c:"C",d:"D",e:"E",f:"F",g:"G",h:"H",i:"I",j:"J",k:"K",l:"L",m:"M",n:"N",o:"O",p:"P",q:"Q",r:"R",s:"S",t:"T",u:"U",v:"V",w:"W",x:"X",y:"Y",z:"Z"}});R(()=>{t()});const t=()=>{F.get("/api/head/offices/kejs",{params:{index:e.default_index}}).then(l=>{e.res_data=l.data})},a=l=>{window.open(l,"_blank")},d=l=>{e.default_index=l,t()};return j(v({},T(e)),{go_detail:a,search_index:d})}},I=e=>(q("data-v-22a1aa2c"),e=e(),A(),e),H=I(()=>m("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[m("strong",null,"\u79D1\u5BA4\u8BBE\u7F6E")],-1)),J=C("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),K=C("\u79D1\u5BA4\u8BBE\u7F6E"),O=I(()=>m("span",{style:{color:"#999"}},"\u7D22\u5F15\uFF1A",-1)),P=["onClick"],Q=["onClick"];function U(e,t,a,d,l,W){const x=c("el-col"),h=c("el-row"),b=c("el-breadcrumb-item"),B=c("el-breadcrumb"),S=c("el-space"),N=c("el-card");return o(),s(i,null,[r(h,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:n(()=>[r(x,{span:24},{default:n(()=>[H]),_:1})]),_:1}),r(B,{separator:"/",style:{"margin-bottom":"20px"}},{default:n(()=>[r(b,{to:{path:"/"}},{default:n(()=>[J]),_:1}),r(b,null,{default:n(()=>[K]),_:1})]),_:1}),O,r(S,{wrap:"",spacer:"|",size:"default",style:{cursor:"pointer",color:"#444"}},{default:n(()=>[(o(!0),s(i,null,f(e.index_arr,(p,_)=>(o(),s(i,{key:_},[_==e.default_index?(o(),s("span",{key:0,class:"active",onClick:u=>d.search_index(_)},g(p),9,P)):(o(),s("span",{key:1,onClick:u=>d.search_index(_)},g(p),9,Q))],64))),128))]),_:1}),(o(!0),s(i,null,f(e.res_data,(p,_)=>(o(),w(h,{gutter:20,style:{"margin-bottom":"20px","margin-top":"40px"},justify:"space-around"},{default:n(()=>[(o(!0),s(i,null,f(p,(u,X)=>(o(),w(x,{sm:3},{default:n(()=>[r(N,{shadow:"hover",style:{"margin-bottom":"20px",cursor:"pointer"},onClick:Y=>d.go_detail("/ksjs_detail?id="+u.id)},{default:n(()=>[m("strong",null,g(u.name),1)]),_:2},1032,["onClick"])]),_:2},1024))),256))]),_:2},1024))),256))],64)}var oe=L(G,[["render",U],["__scopeId","data-v-22a1aa2c"]]);export{oe as default};
