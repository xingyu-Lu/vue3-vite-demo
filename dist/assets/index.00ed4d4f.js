var E=Object.defineProperty,w=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var y=(t,e,a)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,k=(t,e)=>{for(var a in e||(e={}))N.call(e,a)&&y(t,a,e[a]);if(g)for(var a of g(e))V.call(e,a)&&y(t,a,e[a]);return t},b=(t,e)=>w(t,z(e));import{al as q,u as M,a as P,o as R,t as T,ad as H,ar as L,c as r,d,ae as l,f as i,w as n,af as S,h as u,ah as D,g as v,e as C,i as c}from"./vendor.a93cca51.js";import{a as x}from"./axios.64f7e1f7.js";import{_ as F,l as j,b as G}from"./index.e972642b.js";const I={name:"dynamin_index",setup(){const t=q(),e=M(),{id:a}=t.query,o=P({res_data:"",flag:0,data:{id:0,content:"",status:0}});R(()=>{m(),j("userinfo")?o.res_data=j("userinfo"):p()});const p=()=>{x.get("/api/head/staffs/info").then(s=>{o.res_data=s.data,G("userinfo",s.data)})},m=()=>{x.get(`/api/head/technicalOfficeIntroduce/${a}`).then(s=>{s.data&&(o.data.content=s.data.content,o.data.id=s.data.id,o.data.status=s.data.status,o.flag=1)})},_=()=>{e.push({path:"/kssz-ksjs-add"})},f=s=>{e.push({path:"/kssz-ksjs-add",query:{id:s}})};return b(k({},T(o)),{handleAdd:_,handleEdit:f,Plus:H,Check:L,id:a})}},O={style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},$={key:0},J=c("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),K=c("\u79D1\u5BA4\u8BBE\u7F6E"),Q=c("\u79D1\u5BA4\u4ECB\u7ECD"),U=c("\u7F16\u8F91"),W=c("\u65B0\u589E"),X={key:2,style:{"margin-top":"20px","margin-bottom":"20px"}},Y=u("span",null,"\u72B6\u6001\uFF1A",-1),Z={key:0,style:{color:"#67C23A"}},tt={key:1,style:{color:"#E6A23C"}},et={key:2,style:{color:"#E6A23C"}},at=["innerHTML"];function ot(t,e,a,o,p,m){const _=r("el-col"),f=r("el-row"),s=r("el-breadcrumb-item"),A=r("el-breadcrumb"),h=r("el-button"),B=r("el-card");return d(),l(S,null,[i(f,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:n(()=>[i(_,{span:24},{default:n(()=>[u("div",O,[t.res_data&&t.res_data.office?(d(),l("strong",$,D(t.res_data.office.office_name),1)):v("v-if",!0)])]),_:1})]),_:1}),i(A,{separator:"/",style:{"margin-bottom":"20px"}},{default:n(()=>[i(s,{to:{path:"/"}},{default:n(()=>[J]),_:1}),i(s,{to:{path:"/kssz",query:{id:o.id}}},{default:n(()=>[K]),_:1},8,["to"]),i(s,null,{default:n(()=>[Q]),_:1})]),_:1}),i(B,{style:{"min-height":"100%"}},{header:n(()=>[t.flag?(d(),C(h,{key:0,type:"primary",icon:o.Plus,onClick:e[0]||(e[0]=st=>o.handleEdit(t.data.id))},{default:n(()=>[U]),_:1},8,["icon"])):(d(),C(h,{key:1,type:"primary",icon:o.Plus,onClick:o.handleAdd},{default:n(()=>[W]),_:1},8,["icon","onClick"])),t.flag?(d(),l("div",X,[Y,t.data.status==1?(d(),l("span",Z,"\u5DF2\u5BA1\u6838")):t.data.status==0?(d(),l("span",tt,"\u5F85\u5BA1\u6838")):(d(),l("span",et,"\u5BA1\u6838\u4E0D\u8FC7"))])):v("v-if",!0)]),default:n(()=>[u("div",{innerHTML:t.data.content},null,8,at)]),_:1})],64)}var lt=F(I,[["render",ot]]);export{lt as default};
