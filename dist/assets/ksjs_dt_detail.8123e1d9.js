var j=Object.defineProperty,k=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var m=(e,t,s)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,h=(e,t)=>{for(var s in t||(t={}))T.call(t,s)&&m(e,s,t[s]);if(f)for(var s of f(t))w.call(t,s)&&m(e,s,t[s]);return e},g=(e,t)=>k(e,M(t));import{a as H}from"./axios.a34e415d.js";import{al as L,u as B,a as I,r as N,o as S,t as V,ad as $,c as d,d as _,ae as c,f as a,w as n,h as o,g as y,af as z,i,ai as C,aj as R,ah as q}from"./vendor.dfcff7c2.js";import{_ as D}from"./index.570e3310.js";const E={name:"ldtd",setup(){const e=L();B();const{id:t}=e.query,s=I({office_info:"",res_data:N("")});S(()=>{l()});const l=()=>{H.get("/api/head/offices/ksdt_detail",{params:{id:t}}).then(r=>{s.res_data=r.data})},p=r=>{window.open(r,"_blank")};return g(h({},V(s)),{go_detail:p,Plus:$,id:t})}},F=e=>(C("data-v-1cf9ed4a"),e=e(),R(),e),P={style:{height:"150px","align-items":"center","justify-content":"center",display:"flex","font-size":"48px","letter-spacing":"0.2em",color:"#fff"}},A={key:0},G=i("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),J=i("\u79D1\u5BA4\u52A8\u6001"),K={style:{display:"flex","justify-content":"center"}},O=["innerHTML"],Q={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"-10px","margin-bottom":"20px"}},U=i(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),W=["innerHTML"],X=F(()=>o("span",null,"\xA0\xA0\xA0\xA0",-1)),Y=i(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),Z=["innerHTML"],ee=["innerHTML"];function te(e,t,s,l,p,r){const b=d("el-col"),x=d("el-row"),u=d("el-breadcrumb-item"),v=d("el-breadcrumb");return _(),c(z,null,[a(x,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:n(()=>[a(b,{span:24},{default:n(()=>[o("div",P,[e.res_data?(_(),c("strong",A,q(e.res_data.office_name),1)):y("",!0)])]),_:1})]),_:1}),a(v,{separator:"/",style:{"margin-bottom":"20px"}},{default:n(()=>[a(u,{to:{path:"/"}},{default:n(()=>[G]),_:1}),a(u,null,{default:n(()=>[J]),_:1})]),_:1}),o("div",K,[o("h1",{style:{"font-size":"30px",color:"#333","font-weight":"bold"},innerHTML:e.res_data.title},null,8,O)]),o("div",Q,[U,o("span",{innerHTML:e.res_data.release_time},null,8,W),X,Y,o("span",{innerHTML:e.res_data.num},null,8,Z)]),e.res_data.content?(_(),c("span",{key:0,innerHTML:e.res_data.content},null,8,ee)):y("",!0)],64)}var re=D(E,[["render",te],["__scopeId","data-v-1cf9ed4a"]]);export{re as default};