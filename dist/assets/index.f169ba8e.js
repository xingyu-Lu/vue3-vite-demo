var A=Object.defineProperty,B=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var k=(t,a,r)=>a in t?A(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,C=(t,a)=>{for(var r in a||(a={}))N.call(a,r)&&k(t,r,a[r]);if(y)for(var r of y(a))V.call(a,r)&&k(t,r,a[r]);return t},v=(t,a)=>B(t,E(a));import{a as P}from"./axios.ab416000.js";import{al as O,u as R,a as F,o as G,t as L,ad as M,c as s,am as T,d as _,ae as u,f as n,w as l,af as H,h as x,ah as I,g as z,an as J,e as K,i as g}from"./vendor.d1c66501.js";import{_ as Q,l as w,b as U}from"./index.a55851bf.js";const W={name:"technicaloffice_introduce_index",setup(){const t=O(),a=R(),{id:r}=t.query,e=F({res_data:"",office_name:"",name:"",loading:!1,tableData:[],total:0,currentPage:1,pageSize:10});G(()=>{p(),w("userinfo")?e.res_data=w("userinfo"):b()});const b=()=>{P.get("/api/head/staffs/info").then(o=>{e.res_data=o.data,U("userinfo",o.data)})},p=()=>{e.loading=!0,P.get("/api/head/technicalOfficeColumnSets",{params:{page:e.currentPage,page_size:e.pageSize}}).then(o=>{e.tableData=o.data,e.pageSize=o.pagination.perPage,e.total=o.pagination.total,e.currentPage=o.pagination.currentPage,e.loading=!1})},f=()=>{e.currentPage=1,p()},m=o=>{e.currentPage=o,p()},c=o=>{a.push({path:"/kssz-columnset-add",query:{office_id:o}})},h=(o,i)=>{a.push({path:"/kssz-columnset-add",query:{id:o,office_id:i}})};return v(C({},L(e)),{handleOption:f,changePage:m,handleAdd:c,handleEdit:h,Plus:M,id:r})}},X={style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},Y={key:0},Z=g("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),$=g("\u79D1\u5BA4\u8BBE\u7F6E"),ee=g("\u680F\u76EE\u8BBE\u7F6E"),te=g("\u65B0\u589E"),ae={key:0,style:{color:"#67C23A"}},oe={key:1,style:{color:"#E6A23C"}},ne=["onClick"];function re(t,a,r,e,b,p){const f=s("el-col"),m=s("el-row"),c=s("el-breadcrumb-item"),h=s("el-breadcrumb"),o=s("el-button"),i=s("el-table-column"),S=s("el-table"),D=s("el-pagination"),j=s("el-card"),q=T("loading");return _(),u(H,null,[n(m,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:l(()=>[n(f,{span:24},{default:l(()=>[x("div",X,[t.res_data.office?(_(),u("strong",Y,I(t.res_data.office.office_name),1)):z("",!0)])]),_:1})]),_:1}),n(h,{separator:"/",style:{"margin-bottom":"20px"}},{default:l(()=>[n(c,{to:{path:"/"}},{default:l(()=>[Z]),_:1}),n(c,{to:{path:"/kssz",query:{id:e.id}}},{default:l(()=>[$]),_:1},8,["to"]),n(c,null,{default:l(()=>[ee]),_:1})]),_:1}),n(j,{style:{"min-height":"100%"}},{header:l(()=>[n(o,{type:"primary",icon:e.Plus,onClick:a[0]||(a[0]=d=>e.handleAdd(e.id))},{default:l(()=>[te]),_:1},8,["icon"])]),default:l(()=>[J((_(),K(S,{data:t.tableData,stripe:"",style:{width:"100%"}},{default:l(()=>[n(i,{prop:"id",label:"id"}),n(i,{prop:"office_name",label:"\u79D1\u5BA4\u540D\u79F0"}),n(i,{prop:"name",label:"\u680F\u76EE\u540D\u79F0"}),n(i,{prop:"type",label:"\u7C7B\u578B"},{default:l(d=>[d.row.type==1?(_(),u("span",ae,"\u4EC5\u56FE")):d.row.type==0?(_(),u("span",oe,"\u56FE\u6587\u6216\u89C6\u9891")):z("",!0)]),_:1}),n(i,{prop:"created_at",label:"\u521B\u5EFA\u65F6\u95F4"}),n(i,{label:"\u64CD\u4F5C",width:"200"},{default:l(d=>[x("a",{style:{cursor:"pointer","margin-right":"10px",color:"#409eff"},onClick:le=>e.handleEdit(d.row.id,e.id)},"\u4FEE\u6539",8,ne)]),_:1})]),_:1},8,["data"])),[[q,t.loading]]),n(D,{background:"",layout:"prev, pager, next",total:t.total,"page-size":t.pageSize,"current-page":t.currentPage,onCurrentChange:e.changePage},null,8,["total","page-size","current-page","onCurrentChange"])]),_:1})],64)}var _e=Q(W,[["render",re]]);export{_e as default};