var B=Object.defineProperty,E=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var v=(a,o,s)=>o in a?B(a,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[o]=s,w=(a,o)=>{for(var s in o||(o={}))O.call(o,s)&&v(a,s,o[s]);if(C)for(var s of C(o))R.call(o,s)&&v(a,s,o[s]);return a},x=(a,o)=>E(a,N(o));import{al as F,u as G,a as L,o as M,t as T,ad as U,c as i,am as H,d as c,ae as p,f as t,w as l,af as I,h as y,ah as J,g as K,an as Q,e as z,i as u}from"./vendor.a93cca51.js";import{a as P}from"./axios.64f7e1f7.js";import{_ as W,l as D,b as X}from"./index.e972642b.js";const Y={name:"dynamin_index",setup(){const a=F(),o=G(),{id:s}=a.query,e=L({res_data:"",name:"",loading:!1,tableData:[],total:0,currentPage:1,pageSize:10});M(()=>{g(),D("userinfo")?e.res_data=D("userinfo"):k()});const k=()=>{P.get("/api/head/staffs/info").then(n=>{e.res_data=n.data,X("userinfo",n.data)})},g=()=>{e.loading=!0,P.get("/api/head/technicalOfficeDoctors",{params:{page:e.currentPage,page_size:e.pageSize,name:e.name}}).then(n=>{e.tableData=n.data,e.pageSize=n.pagination.perPage,e.total=n.pagination.total,e.currentPage=n.pagination.currentPage,e.loading=!1})},m=()=>{e.currentPage=1,g()},f=n=>{e.currentPage=n,g()},_=n=>{o.push({path:"/kssz-ksys-add",query:{office_id:n}})},h=(n,b)=>{o.push({path:"/kssz-ksys-add",query:{id:n,office_id:b}})};return x(w({},T(e)),{handleOption:m,changePage:f,handleAdd:_,handleEdit:h,Plus:U,id:s})}},Z={style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},$={key:0},ee=u("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),ae=u("\u79D1\u5BA4\u8BBE\u7F6E"),te=u("\u79D1\u5BA4\u533B\u751F"),oe=u("\u65B0\u589E"),ne=u("\u641C\u7D22"),le={key:1},se={key:0,style:{color:"#67C23A"}},re={key:1,style:{color:"#E6A23C"}},ie={key:2,style:{color:"#F56C6C"}},de=["onClick"];function ce(a,o,s,e,k,g){const m=i("el-col"),f=i("el-row"),_=i("el-breadcrumb-item"),h=i("el-breadcrumb"),n=i("el-button"),b=i("el-input"),d=i("el-table-column"),V=i("el-image"),S=i("el-table"),j=i("el-pagination"),q=i("el-card"),A=H("loading");return c(),p(I,null,[t(f,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:l(()=>[t(m,{span:24},{default:l(()=>[y("div",Z,[a.res_data.office?(c(),p("strong",$,J(a.res_data.office.office_name),1)):K("v-if",!0)])]),_:1})]),_:1}),t(h,{separator:"/",style:{"margin-bottom":"20px"}},{default:l(()=>[t(_,{to:{path:"/"}},{default:l(()=>[ee]),_:1}),t(_,{to:{path:"/kssz",query:{id:e.id}}},{default:l(()=>[ae]),_:1},8,["to"]),t(_,null,{default:l(()=>[te]),_:1})]),_:1}),t(q,{style:{"min-height":"100%"}},{header:l(()=>[t(n,{type:"primary",icon:e.Plus,onClick:o[0]||(o[0]=r=>e.handleAdd(e.id))},{default:l(()=>[oe]),_:1},8,["icon"]),y("div",null,[t(b,{style:{width:"200px","margin-top":"20px","margin-right":"10px"},placeholder:"\u8BF7\u8F93\u5165\u533B\u751F\u540D\u79F0",modelValue:a.name,"onUpdate:modelValue":o[1]||(o[1]=r=>a.name=r),clearable:""},null,8,["modelValue"]),t(n,{type:"primary",onClick:e.handleOption},{default:l(()=>[ne]),_:1},8,["onClick"])])]),default:l(()=>[Q((c(),z(S,{data:a.tableData,stripe:"",style:{width:"100%"}},{default:l(()=>[t(d,{prop:"id",label:"id"}),t(d,{prop:"office_name",label:"\u79D1\u5BA4\u540D\u79F0"}),t(d,{prop:"name",label:"\u533B\u751F\u540D\u5B57"}),t(d,{label:"\u56FE\u7247"},{default:l(r=>[r.row.url?(c(),z(V,{key:r.row.id,src:r.row.url,lazy:!0,"initial-index":1},null,8,["src"])):(c(),p("span",le,"\u65E0"))]),_:1}),t(d,{prop:"professional",label:"\u804C\u79F0"}),t(d,{prop:"excel",label:"\u64C5\u957F"}),t(d,{prop:"sort",label:"\u6392\u5E8F"}),t(d,{prop:"status",label:"\u72B6\u6001"},{default:l(r=>[r.row.status==1?(c(),p("span",se,"\u5DF2\u5BA1\u6838")):r.row.status==0?(c(),p("span",re,"\u5F85\u5BA1\u6838")):(c(),p("span",ie,"\u5BA1\u6838\u4E0D\u8FC7"))]),_:1}),t(d,{prop:"created_at",label:"\u521B\u5EFA\u65F6\u95F4"}),t(d,{label:"\u64CD\u4F5C",width:"200"},{default:l(r=>[y("a",{style:{cursor:"pointer","margin-right":"10px",color:"#409eff"},onClick:pe=>e.handleEdit(r.row.id,e.id)},"\u4FEE\u6539",8,de)]),_:1})]),_:1},8,["data"])),[[A,a.loading]]),t(j,{background:"",layout:"prev, pager, next",total:a.total,"page-size":a.pageSize,"current-page":a.currentPage,onCurrentChange:e.changePage},null,8,["total","page-size","current-page","onCurrentChange"])]),_:1})],64)}var fe=W(Y,[["render",ce]]);export{fe as default};
