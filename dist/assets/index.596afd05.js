var B=Object.defineProperty,E=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var y=(e,t,a)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))S.call(t,a)&&y(e,a,t[a]);if(g)for(var a of g(t))q.call(t,a)&&y(e,a,t[a]);return e},b=(e,t)=>E(e,I(t));import{al as z,u as N,a as V,o as M,t as P,ad as R,ax as T,c as i,d,ae as r,f as c,w as n,af as H,h as f,ah as L,g as x,e as v,i as l,ai as D,aj as F}from"./vendor.0774305f.js";import{a as C}from"./axios.246dce6c.js";import{_ as G,l as j,b as O}from"./index.c7d1affd.js";const J={name:"dynamin_index",setup(){const e=z(),t=N(),{id:a}=e.query,o=V({res_data:"",flag:0,data:{id:0,content:"",status:0}});M(()=>{h(),j("userinfo")?o.res_data=j("userinfo"):p()});const p=()=>{C.get("/api/head/staffs/info").then(s=>{o.res_data=s.data,O("userinfo",s.data)})},h=()=>{C.get(`/api/head/technicalOfficeIntroduce/${a}`).then(s=>{s.data&&(o.data.content=s.data.content,o.data.id=s.data.id,o.data.status=s.data.status,o.flag=1)})},_=()=>{t.push({path:"/kssz-ksjs-add",query:{id:a}})},u=()=>{t.push({path:"/kssz-ksjs-add",query:{id:a}})};return b(k({},P(o)),{handleAdd:_,handleEdit:u,Plus:R,Check:T,id:a})}},K=e=>(D("data-v-8f29253e"),e=e(),F(),e),Q={style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},U={key:0},W=l("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),X=l("\u79D1\u5BA4\u8BBE\u7F6E"),Y=l("\u79D1\u5BA4\u4ECB\u7ECD"),Z=l("\u7F16\u8F91"),$=l("\u65B0\u589E"),ee={key:2,style:{"margin-top":"20px","margin-bottom":"20px"}},te=K(()=>f("span",null,"\u72B6\u6001\uFF1A",-1)),ae={key:0,style:{color:"#67C23A"}},oe={key:1,style:{color:"#E6A23C"}},se={key:2,style:{color:"#E6A23C"}},ne=["innerHTML"];function de(e,t,a,o,p,h){const _=i("el-col"),u=i("el-row"),s=i("el-breadcrumb-item"),w=i("el-breadcrumb"),m=i("el-button"),A=i("el-card");return d(),r(H,null,[c(u,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:n(()=>[c(_,{span:24},{default:n(()=>[f("div",Q,[e.res_data&&e.res_data.office?(d(),r("strong",U,L(e.res_data.office.office_name),1)):x("",!0)])]),_:1})]),_:1}),c(w,{separator:"/",style:{"margin-bottom":"20px"}},{default:n(()=>[c(s,{to:{path:"/"}},{default:n(()=>[W]),_:1}),c(s,{to:{path:"/kssz",query:{id:o.id}}},{default:n(()=>[X]),_:1},8,["to"]),c(s,null,{default:n(()=>[Y]),_:1})]),_:1}),c(A,{style:{"min-height":"100%"}},{header:n(()=>[e.flag?(d(),v(m,{key:0,type:"primary",icon:o.Plus,onClick:o.handleEdit},{default:n(()=>[Z]),_:1},8,["icon","onClick"])):(d(),v(m,{key:1,type:"primary",icon:o.Plus,onClick:o.handleAdd},{default:n(()=>[$]),_:1},8,["icon","onClick"])),e.flag?(d(),r("div",ee,[te,e.data.status==1?(d(),r("span",ae,"\u5DF2\u5BA1\u6838")):e.data.status==0?(d(),r("span",oe,"\u5F85\u5BA1\u6838")):(d(),r("span",se,"\u5BA1\u6838\u4E0D\u8FC7"))])):x("",!0)]),default:n(()=>[f("div",{innerHTML:e.data.content},null,8,ne)]),_:1})],64)}var _e=G(J,[["render",de],["__scopeId","data-v-8f29253e"]]);export{_e as default};
