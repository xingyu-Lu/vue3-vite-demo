var D=Object.defineProperty,E=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var B=(t,a,o)=>a in t?D(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,I=(t,a)=>{for(var o in a||(a={}))G.call(a,o)&&B(t,o,a[o]);if(S)for(var o of S(a))L.call(a,o)&&B(t,o,a[o]);return t},N=(t,a)=>E(t,F(a));import{a as y}from"./axios.64f7e1f7.js";import{al as M,u as O,a as P,o as T,t as A,ad as H,c as d,d as i,ae as _,f as e,w as l,af as k,ag as V,e as v,g as c,ai as J,aj as K,h as w,ah as q,i as g}from"./vendor.a93cca51.js";import{_ as Q,b as U,l as x}from"./index.e972642b.js";const W={name:"ldtd",setup(){const t=M();O();const{id:a}=t.query,o=P({office_info:"",res_data:[],res_data_1:[],column_list:[],is_login:0,is_self:0});T(()=>{C(),f(),u(),b(),j(),p()});const p=()=>{y.get("/api/head/staffs/info").then(n=>{U("userinfo",n.data)})},j=()=>{y.get("/api/head/offices/info",{params:{id:a}}).then(n=>{o.office_info=n.data})},C=()=>{y.get("/api/head/offices/ksmz",{params:{id:a,yq_type:0}}).then(n=>{o.res_data=n.data}),y.get("/api/head/offices/ksmz",{params:{id:a,yq_type:1}}).then(n=>{o.res_data_1=n.data})},f=()=>{y.get("/api/head/technicalOfficeColumnSets/list",{params:{office_id:a}}).then(n=>{o.column_list=n.data})},u=()=>{x("token")&&(o.is_login=1)},b=()=>{x("userinfo")&&x("userinfo").office.office_id==a&&(o.is_self=1)},h=n=>{window.open(n,"_blank")};return N(I({},A(o)),{go_detail:h,Plus:H,id:a})}},R=t=>(J("data-v-63fac4ee"),t=t(),K(),t),X={style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},Y={key:0},Z=g("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),ee=g("\u79D1\u5BA4\u95E8\u8BCA"),te=g("\u79D1\u5BA4\u8BBE\u7F6E"),ae=R(()=>w("h2",{style:{color:"#444"}},"\u9662\u672C\u90E8",-1)),oe={key:0},se={key:1},le=R(()=>w("h2",{style:{color:"#444"}},"\u674E\u5E84\u9662\u533A",-1)),ne={key:0},ie={key:1};function re(t,a,o,p,j,C){const f=d("el-col"),u=d("el-row"),b=d("el-breadcrumb-item"),h=d("el-breadcrumb"),n=d("el-button"),s=d("el-table-column"),z=d("el-table"),$=d("el-divider");return i(),_(k,null,[e(u,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:l(()=>[e(f,{span:24},{default:l(()=>[w("div",X,[t.office_info?(i(),_("strong",Y,q(t.office_info.name),1)):c("v-if",!0)])]),_:1})]),_:1}),e(h,{separator:"/",style:{"margin-bottom":"20px"}},{default:l(()=>[e(b,{to:{path:"/"}},{default:l(()=>[Z]),_:1}),e(b,null,{default:l(()=>[ee]),_:1})]),_:1}),(i(!0),_(k,null,V(t.column_list,(r,de)=>(i(),v(u,{gutter:24,justify:"space-between",align:"middle",style:{"line-height":"36px","margin-bottom":"20px"}},{default:l(()=>[(i(!0),_(k,null,V(r,(m,_e)=>(i(),v(f,{sm:3},{default:l(()=>[e(n,{type:"primary",onClick:pe=>p.go_detail(m.url+"?id="+p.id+"&column_id="+m.id+"&column_name="+m.name+"&column_type="+m.type)},{default:l(()=>[g(q(m.name),1)]),_:2},1032,["onClick"])]),_:2},1024))),256))]),_:2},1024))),256)),t.is_login&&t.is_self?(i(),v(u,{key:0,gutter:24,justify:"space-between",align:"middle",style:{"line-height":"36px","margin-bottom":"20px"}},{default:l(()=>[e(f,{sm:3},{default:l(()=>[e(n,{type:"primary",onClick:a[0]||(a[0]=r=>p.go_detail("/kssz?id="+p.id))},{default:l(()=>[te]),_:1})]),_:1})]),_:1})):c("v-if",!0),ae,e(z,{data:t.res_data,stripe:"",style:{width:"100%"}},{default:l(()=>[e(s,{prop:"office_name",label:"\u79D1\u5BA4\u540D\u79F0"}),e(s,{prop:"type",label:"\u4E0A\u4E0B\u5348"},{default:l(r=>[r.row.type==0?(i(),_("span",oe,"\u4E0A\u5348")):c("v-if",!0),r.row.type==1?(i(),_("span",se,"\u4E0B\u5348")):c("v-if",!0)]),_:1}),e(s,{prop:"monday",label:"\u5468\u4E00"}),e(s,{prop:"tuesday",label:"\u5468\u4E8C"}),e(s,{prop:"wednesday",label:"\u5468\u4E09"}),e(s,{prop:"thursday",label:"\u5468\u56DB"}),e(s,{prop:"friday",label:"\u5468\u4E94"}),e(s,{prop:"saturday",label:"\u5468\u516D"}),e(s,{prop:"sunday",label:"\u5468\u65E5"})]),_:1},8,["data"]),e($),le,e(z,{data:t.res_data_1,stripe:"",style:{width:"100%"}},{default:l(()=>[e(s,{prop:"office_name",label:"\u79D1\u5BA4\u540D\u79F0"}),e(s,{prop:"type",label:"\u4E0A\u4E0B\u5348"},{default:l(r=>[r.row.type==0?(i(),_("span",ne,"\u4E0A\u5348")):c("v-if",!0),r.row.type==1?(i(),_("span",ie,"\u4E0B\u5348")):c("v-if",!0)]),_:1}),e(s,{prop:"monday",label:"\u5468\u4E00"}),e(s,{prop:"tuesday",label:"\u5468\u4E8C"}),e(s,{prop:"wednesday",label:"\u5468\u4E09"}),e(s,{prop:"thursday",label:"\u5468\u56DB"}),e(s,{prop:"friday",label:"\u5468\u4E94"}),e(s,{prop:"saturday",label:"\u5468\u516D"}),e(s,{prop:"sunday",label:"\u5468\u65E5"})]),_:1},8,["data"])],64)}var ye=Q(W,[["render",re],["__scopeId","data-v-63fac4ee"]]);export{ye as default};
