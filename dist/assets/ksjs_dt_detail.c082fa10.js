var T=Object.defineProperty,k=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var m=(e,t,s)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,g=(e,t)=>{for(var s in t||(t={}))L.call(t,s)&&m(e,s,t[s]);if(f)for(var s of f(t))j.call(t,s)&&m(e,s,t[s]);return e},h=(e,t)=>k(e,H(t));import{a as v}from"./axios.0ad1708e.js";import{al as w,u as B,a as N,r as V,o as $,t as C,ad as R,c as i,d as l,ae as _,f as n,w as o,h as a,g as b,af as z,i as d,ah as q}from"./vendor.1fa6d093.js";import{_ as D}from"./index.17363daf.js";const E={name:"ldtd",setup(){const e=w();B();const{id:t}=e.query,s=N({office_info:"",res_data:V("")});$(()=>{c()});const c=()=>{v.get("/api/head/offices/ksdt_detail",{params:{id:t}}).then(r=>{s.res_data=r.data})},p=r=>{window.open(r,"_blank")};return h(g({},C(s)),{go_detail:p,Plus:R,id:t})}},F={style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},P={key:0},S=d("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),A=d("\u79D1\u5BA4\u52A8\u6001"),G={style:{display:"flex","justify-content":"center"}},I=["innerHTML"],J={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"10px","margin-bottom":"20px"}},K=d(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),O=["innerHTML"],Q=a("span",null,"\xA0\xA0\xA0\xA0",-1),U=d(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),W=["innerHTML"],X=["innerHTML"];function Y(e,t,s,c,p,r){const y=i("el-col"),x=i("el-row"),u=i("el-breadcrumb-item"),M=i("el-breadcrumb");return l(),_(z,null,[n(x,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:o(()=>[n(y,{span:24},{default:o(()=>[a("div",F,[e.res_data?(l(),_("strong",P,q(e.res_data.office_name),1)):b("",!0)])]),_:1})]),_:1}),n(M,{separator:"/",style:{"margin-bottom":"20px"}},{default:o(()=>[n(u,{to:{path:"/"}},{default:o(()=>[S]),_:1}),n(u,null,{default:o(()=>[A]),_:1})]),_:1}),a("div",G,[a("strong",{innerHTML:e.res_data.title},null,8,I)]),a("div",J,[K,a("span",{innerHTML:e.res_data.release_time},null,8,O),Q,U,a("span",{innerHTML:e.res_data.num},null,8,W)]),e.res_data.content?(l(),_("span",{key:0,innerHTML:e.res_data.content},null,8,X)):b("",!0)],64)}var ae=D(E,[["render",Y]]);export{ae as default};