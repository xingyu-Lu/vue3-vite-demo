var V=Object.defineProperty,$=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var y=(e,t,o)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,b=(e,t)=>{for(var o in t||(t={}))C.call(t,o)&&y(e,o,t[o]);if(g)for(var o of g(t))M.call(t,o)&&y(e,o,t[o]);return e},v=(e,t)=>$(e,B(t));import{a as k}from"./axios.a88796e4.js";import{al as R,u as T,a as H,r as L,o as q,t as z,ad as D,c as i,d,ae as _,f as a,w as r,g as x,af as E,h as s,ah as l,i as w}from"./vendor.1fa6d093.js";import{_ as F}from"./index.4b455da7.js";const P={name:"ldtd",setup(){const e=R();T();const{id:t}=e.query,o=H({office_info:"",res_data:L("")});q(()=>{f(),c()});const c=()=>{k.get("/api/head/offices/info",{params:{id:t}}).then(n=>{o.office_info=n.data})},f=()=>{k.get("/api/head/offices/ksys_detail",{params:{id:t}}).then(n=>{o.res_data=n.data})},p=n=>{window.open(n,"_blank")};return v(b({},z(o)),{go_detail:p,Plus:D,id:t})}},S={style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},A={key:0},G=w("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),I=w("\u79D1\u5BA4\u533B\u751F"),J={style:{color:"rgb(64 158 255)"}},K={style:{"line-height":"42px"}},O=s("span",{style:{color:"#999"}},"\u79D1\u5BA4\uFF1A",-1),Q={style:{color:"#444"}},U=s("span",{style:{color:"#999"}},"\u804C\u79F0\uFF1A",-1),W={style:{color:"#444"}},X=s("span",{style:{color:"#999"}},"\u64C5\u957F\uFF1A",-1),Y={style:{color:"#444"}},Z=s("h2",{style:{color:"#555"}}," \u533B\u751F\u4ECB\u7ECD ",-1),ee=["innerHTML"];function te(e,t,o,c,f,p){const n=i("el-col"),m=i("el-row"),u=i("el-breadcrumb-item"),j=i("el-breadcrumb"),N=i("el-image"),h=i("el-divider");return d(),_(E,null,[a(m,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:r(()=>[a(n,{span:24},{default:r(()=>[s("div",S,[e.office_info?(d(),_("strong",A,l(e.office_info.name),1)):x("",!0)])]),_:1})]),_:1}),a(j,{separator:"/",style:{"margin-bottom":"20px"}},{default:r(()=>[a(u,{to:{path:"/"}},{default:r(()=>[G]),_:1}),a(u,null,{default:r(()=>[I]),_:1})]),_:1}),a(m,{gutter:20},{default:r(()=>[a(n,{sm:3},{default:r(()=>[a(N,{src:e.res_data.img_url},null,8,["src"])]),_:1}),a(n,{sm:21},{default:r(()=>[s("h1",J,l(e.res_data.name),1),s("div",K,[s("div",null,[O,s("span",Q,l(e.res_data.office_name),1)]),s("div",null,[U,s("span",W,l(e.res_data.professional),1)]),s("div",null,[X,s("span",Y,l(e.res_data.excel),1)])])]),_:1})]),_:1}),a(h),Z,a(h),e.res_data.content?(d(),_("span",{key:0,innerHTML:e.res_data.content},null,8,ee)):x("",!0)],64)}var re=F(P,[["render",te]]);export{re as default};