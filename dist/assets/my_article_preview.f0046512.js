var M=Object.defineProperty,T=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var u=(e,t,n)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))B.call(t,n)&&u(e,n,t[n]);if(m)for(var n of m(t))H.call(t,n)&&u(e,n,t[n]);return e},h=(e,t)=>T(e,w(t));import{a as L}from"./axios.22ed3686.js";import{al as j,u as k,a as C,o as I,t as S,c as l,d as $,ae as N,f as s,w as o,af as R,h as a,ah as V,ai as z,aj as q,i as r}from"./vendor.1fa6d093.js";import{_ as D}from"./index.1b49d6bf.js";const E={name:"dynamic_preview",setup(){const e=j(),t=k(),{id:n}=e.query,d=C({data:{title:"",release_time:"",content:"",num:"",name:""}});I(()=>{n&&L.get(`/api/head/staffs/${n}`).then(i=>{d.data={title:i.data.title,release_time:i.data.release_time,content:i.data.content,num:i.data.num,name:i.data.staff_name}})});const c=()=>{t.push({path:"/employee-my-article"})};return h(f({},S(d)),{handleBack:c})}},_=e=>(z("data-v-84ecf0d8"),e=e(),q(),e),F=_(()=>a("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[a("strong",null,"\u6211\u7684\u6587\u7AE0")],-1)),A=r("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),G=r("\u6211\u7684\u6587\u7AE0"),J=r("\u8FD4\u56DE"),K={style:{display:"flex","justify-content":"center"}},O=["innerHTML"],P={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"10px"}},Q=r(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),U=["innerHTML"],W=_(()=>a("span",null,"\xA0\xA0\xA0\xA0",-1)),X=r(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),Y=["innerHTML"],Z=_(()=>a("span",null,"\xA0\xA0\xA0\xA0",-1)),ee=r(" \u4F5C\u8005\uFF1A"),te=["innerHTML"];function ne(e,t,n,d,c,i){const y=l("el-col"),g=l("el-row"),p=l("el-breadcrumb-item"),b=l("el-breadcrumb"),v=l("el-button"),x=l("el-card");return $(),N(R,null,[s(g,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:o(()=>[s(y,{span:24},{default:o(()=>[F]),_:1})]),_:1}),s(b,{separator:"/",style:{"margin-bottom":"20px"}},{default:o(()=>[s(p,{to:{path:"/"}},{default:o(()=>[A]),_:1}),s(p,null,{default:o(()=>[G]),_:1})]),_:1}),s(x,{style:{"min-height":"100%"}},{header:o(()=>[s(v,{type:"primary",onClick:d.handleBack},{default:o(()=>[J]),_:1},8,["onClick"])]),default:o(()=>[a("div",K,[a("strong",{innerHTML:e.data.title},null,8,O)]),a("div",P,[Q,a("span",{innerHTML:e.data.release_time},null,8,U),W,X,a("span",{innerHTML:e.data.num},null,8,Y),Z,ee,a("span",null,V(e.data.name),1)]),a("div",{innerHTML:e.data.content},null,8,te)]),_:1})],64)}var le=D(E,[["render",ne],["__scopeId","data-v-84ecf0d8"]]);export{le as default};
