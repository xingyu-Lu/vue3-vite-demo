var j=Object.defineProperty,k=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var m=(e,t,s)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,h=(e,t)=>{for(var s in t||(t={}))T.call(t,s)&&m(e,s,t[s]);if(f)for(var s of f(t))H.call(t,s)&&m(e,s,t[s]);return e},g=(e,t)=>k(e,M(t));import{a as L}from"./axios.d9069b7d.js";import{al as w,u as B,a as I,r as N,o as S,t as V,ad as $,c as d,d as _,ae as c,f as o,w as n,h as a,g as b,af as C,i,ai as R,aj as z,ah as q}from"./vendor.3f1080f6.js";import{_ as D}from"./index.42b7c920.js";const E={name:"ldtd",setup(){const e=w();B();const{id:t}=e.query,s=I({office_info:"",res_data:N("")});S(()=>{l()});const l=()=>{L.get("/api/head/offices/ksdt_detail",{params:{id:t}}).then(r=>{s.res_data=r.data})},p=r=>{window.open(r,"_blank")};return g(h({},V(s)),{go_detail:p,Plus:$,id:t})}},F=e=>(R("data-v-5b61ab79"),e=e(),z(),e),P={style:{height:"150px","align-items":"center","justify-content":"center",display:"flex","font-size":"48px","letter-spacing":"0.2em",color:"#fff"}},A={key:0},G=i("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),J=i("\u79D1\u5BA4\u52A8\u6001"),K={style:{display:"flex","justify-content":"center"}},O=["innerHTML"],Q={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"10px","margin-bottom":"20px"}},U=i(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),W=["innerHTML"],X=F(()=>a("span",null,"\xA0\xA0\xA0\xA0",-1)),Y=i(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),Z=["innerHTML"],ee=["innerHTML"];function te(e,t,s,l,p,r){const y=d("el-col"),x=d("el-row"),u=d("el-breadcrumb-item"),v=d("el-breadcrumb");return _(),c(C,null,[o(x,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:n(()=>[o(y,{span:24},{default:n(()=>[a("div",P,[e.res_data?(_(),c("strong",A,q(e.res_data.office_name),1)):b("",!0)])]),_:1})]),_:1}),o(v,{separator:"/",style:{"margin-bottom":"20px"}},{default:n(()=>[o(u,{to:{path:"/"}},{default:n(()=>[G]),_:1}),o(u,null,{default:n(()=>[J]),_:1})]),_:1}),a("div",K,[a("strong",{innerHTML:e.res_data.title},null,8,O)]),a("div",Q,[U,a("span",{innerHTML:e.res_data.release_time},null,8,W),X,Y,a("span",{innerHTML:e.res_data.num},null,8,Z)]),e.res_data.content?(_(),c("span",{key:0,innerHTML:e.res_data.content},null,8,ee)):b("",!0)],64)}var re=D(E,[["render",te],["__scopeId","data-v-5b61ab79"]]);export{re as default};