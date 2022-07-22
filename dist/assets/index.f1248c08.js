var A=Object.defineProperty,B=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var w=(a,o,r)=>o in a?A(a,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[o]=r,C=(a,o)=>{for(var r in o||(o={}))N.call(o,r)&&w(a,r,o[r]);if(k)for(var r of k(o))O.call(o,r)&&w(a,r,o[r]);return a},v=(a,o)=>B(a,E(o));import{al as V,u as R,a as F,o as G,t as L,ad as M,c as d,am as T,d as c,ae as p,f as t,w as l,af as H,h as P,ah as I,g as u,an as J,e as K,i as g}from"./vendor.0774305f.js";import{a as x}from"./axios.5b26c6c6.js";import{_ as Q,l as z,b as U}from"./index.aca1365b.js";const W={name:"technicaloffice_setting_index",setup(){const a=V(),o=R(),{id:r}=a.query,e=F({res_data:"",yq_type:"0",technicaloffice_name:"",loading:!1,tableData:[],total:0,currentPage:1,pageSize:10});G(()=>{f(),z("userinfo")?e.res_data=z("userinfo"):b()});const b=()=>{x.get("/api/head/staffs/info").then(s=>{e.res_data=s.data,U("userinfo",s.data)})},f=()=>{e.loading=!0,x.get("/api/head/technicalOfficeOutpatients",{params:{page:e.currentPage,page_size:e.pageSize,technicaloffice_name:e.technicaloffice_name,yq_type:e.yq_type}}).then(s=>{e.tableData=s.data,e.pageSize=s.pagination.perPage,e.total=s.pagination.total,e.currentPage=s.pagination.currentPage,e.loading=!1})},h=()=>{e.currentPage=1,f()},m=s=>{e.currentPage=s,f()},_=s=>{o.push({path:"/kssz-outpatient-add",query:{office_id:s}})},y=(s,n)=>{o.push({path:"/kssz-outpatient-add",query:{id:s,office_id:n}})};return v(C({},L(e)),{handleOption:h,changePage:m,handleAdd:_,handleEdit:y,Plus:M,id:r})}},X={style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},Y={key:0},Z=g("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),$=g("\u79D1\u5BA4\u8BBE\u7F6E"),ee=g("\u79D1\u5BA4\u95E8\u8BCA"),te=g("\u65B0\u589E"),ae={key:0},oe={key:1},ne={key:0},se={key:1},le={key:0,style:{color:"#67C23A"}},re={key:1,style:{color:"#E6A23C"}},ie={key:2,style:{color:"#F56C6C"}},ce=["onClick"];function de(a,o,r,e,b,f){const h=d("el-col"),m=d("el-row"),_=d("el-breadcrumb-item"),y=d("el-breadcrumb"),s=d("el-button"),n=d("el-table-column"),q=d("el-table"),D=d("el-pagination"),S=d("el-card"),j=T("loading");return c(),p(H,null,[t(m,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:l(()=>[t(h,{span:24},{default:l(()=>[P("div",X,[a.res_data.office?(c(),p("strong",Y,I(a.res_data.office.office_name),1)):u("",!0)])]),_:1})]),_:1}),t(y,{separator:"/",style:{"margin-bottom":"20px"}},{default:l(()=>[t(_,{to:{path:"/"}},{default:l(()=>[Z]),_:1}),t(_,{to:{path:"/kssz",query:{id:e.id}}},{default:l(()=>[$]),_:1},8,["to"]),t(_,null,{default:l(()=>[ee]),_:1})]),_:1}),t(S,{style:{"min-height":"100%"}},{header:l(()=>[t(s,{type:"primary",icon:e.Plus,onClick:o[0]||(o[0]=i=>e.handleAdd(e.id))},{default:l(()=>[te]),_:1},8,["icon"])]),default:l(()=>[J((c(),K(q,{data:a.tableData,stripe:"",style:{width:"100%"}},{default:l(()=>[t(n,{prop:"id",label:"id"}),t(n,{prop:"office_name",label:"\u79D1\u5BA4\u540D\u79F0"}),t(n,{prop:"monday",label:"\u5468\u4E00"}),t(n,{prop:"tuesday",label:"\u5468\u4E8C"}),t(n,{prop:"wednesday",label:"\u5468\u4E09"}),t(n,{prop:"thursday",label:"\u5468\u56DB"}),t(n,{prop:"friday",label:"\u5468\u4E94"}),t(n,{prop:"saturday",label:"\u5468\u516D"}),t(n,{prop:"sunday",label:"\u5468\u5929"}),t(n,{prop:"yq_type",label:"\u9662\u533A"},{default:l(i=>[i.row.yq_type==0?(c(),p("span",ae,"\u9662\u672C\u90E8")):u("",!0),i.row.yq_type==1?(c(),p("span",oe,"\u674E\u5E84\u9662\u533A")):u("",!0)]),_:1}),t(n,{prop:"type",label:"\u4E0A\u4E0B\u5348"},{default:l(i=>[i.row.type==0?(c(),p("span",ne,"\u4E0A\u5348")):u("",!0),i.row.type==1?(c(),p("span",se,"\u4E0B\u5348")):u("",!0)]),_:1}),t(n,{prop:"status",label:"\u72B6\u6001"},{default:l(i=>[i.row.status==1?(c(),p("span",le,"\u5DF2\u5BA1\u6838")):i.row.status==0?(c(),p("span",re,"\u5F85\u5BA1\u6838")):(c(),p("span",ie,"\u5BA1\u6838\u4E0D\u8FC7"))]),_:1}),t(n,{prop:"created_at",label:"\u521B\u5EFA\u65F6\u95F4"}),t(n,{label:"\u64CD\u4F5C",width:"200"},{default:l(i=>[P("a",{style:{cursor:"pointer","margin-right":"10px",color:"#409eff"},onClick:pe=>e.handleEdit(i.row.id,e.id)},"\u4FEE\u6539",8,ce)]),_:1})]),_:1},8,["data"])),[[j,a.loading]]),t(D,{background:"",layout:"prev, pager, next",total:a.total,"page-size":a.pageSize,"current-page":a.currentPage,onCurrentChange:e.changePage},null,8,["total","page-size","current-page","onCurrentChange"])]),_:1})],64)}var he=Q(W,[["render",de]]);export{he as default};
