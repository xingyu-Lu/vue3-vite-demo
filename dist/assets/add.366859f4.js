var S=Object.defineProperty,z=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var w=(e,t,s)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,x=(e,t)=>{for(var s in t||(t={}))A.call(t,s)&&w(e,s,t[s]);if(V)for(var s of V(t))E.call(t,s)&&w(e,s,t[s]);return e},B=(e,t)=>z(e,U(t));import{r as q,al as D,u as G,a as L,o as T,ap as H,t as I,c as l,d as p,ae as k,f as a,w as o,af as M,ak as R,h as J,ah as $,g as K,ag as P,e as Q,i as _}from"./vendor.a93cca51.js";import{a as c}from"./axios.64f7e1f7.js";import{_ as W,l as F,b as X}from"./index.e972642b.js";const Y={name:"menu_add",setup(){const e=q(null);q(null);const t=D(),s=G(),{id:n,office_id:h}=t.query,i=L({res_data:"",token:"Bearer "+F("token")||"",id:n,Form:{staff_id:"",is_head:"0",staff_list:[]},rules:{staff_id:[{required:!0,message:"\u5458\u5DE5\u5FC5\u987B",trigger:["change"]}],is_head:[{required:!0,message:"\u662F\u5426\u8D1F\u8D23\u4EBA\u5FC5\u987B",trigger:["change"]}]}});T(()=>{b(),n&&c.get(`/api/head/technicalOfficeMembers/${n}`).then(r=>{i.Form={staff_id:r.data.staff_id,is_head:String(r.data.is_head)}}),F("userinfo")?i.res_data=F("userinfo"):g()}),H(()=>{});const g=()=>{c.get("/api/head/staffs/info").then(r=>{i.res_data=r.data,X("userinfo",r.data)})},b=async()=>{const r=await c.get("/api/head/staffs/staff_list");i.Form.staff_list=r.data},u=()=>{e.value.validate(r=>{if(r){let m=c.post,y={id:n,staff_id:i.Form.staff_id,is_head:i.Form.is_head},f="/api/head/technicalOfficeMembers";n&&(m=c.put,f=`/api/head/technicalOfficeMembers/${n}`),m(f,y).then(()=>{n?R.success("\u4FEE\u6539\u6210\u529F"):R.success("\u6DFB\u52A0\u6210\u529F"),s.push({path:"/kssz-member-index",query:{id:h}})})}})};return B(x({},I(i)),{Ref:e,submitAdd:u,office_id:h})}},Z={style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},ee={key:0},te=_("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),ae=_("\u79D1\u5BA4\u8BBE\u7F6E"),oe=_("\u79D1\u5BA4\u6210\u5458"),se=_("\u662F"),le=_("\u5426");function re(e,t,s,n,h,i){const g=l("el-col"),b=l("el-row"),u=l("el-breadcrumb-item"),r=l("el-breadcrumb"),m=l("el-option"),y=l("el-select"),f=l("el-form-item"),v=l("el-radio"),j=l("el-radio-group"),C=l("el-button"),N=l("el-form"),O=l("el-card");return p(),k(M,null,[a(b,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:o(()=>[a(g,{span:24},{default:o(()=>[J("div",Z,[e.res_data.office?(p(),k("strong",ee,$(e.res_data.office.office_name),1)):K("v-if",!0)])]),_:1})]),_:1}),a(r,{separator:"/",style:{"margin-bottom":"20px"}},{default:o(()=>[a(u,{to:{path:"/"}},{default:o(()=>[te]),_:1}),a(u,{to:{path:"/kssz",query:{id:n.office_id}}},{default:o(()=>[ae]),_:1},8,["to"]),a(u,null,{default:o(()=>[oe]),_:1})]),_:1}),a(O,{style:{"min-height":"100%"}},{default:o(()=>[a(N,{model:e.Form,rules:e.rules,ref:"Ref","label-width":"100px"},{default:o(()=>[a(f,{label:"\u5458\u5DE5",prop:"staff_id"},{default:o(()=>[a(y,{modelValue:e.Form.staff_id,"onUpdate:modelValue":t[0]||(t[0]=d=>e.Form.staff_id=d),placeholder:"Select",filterable:""},{default:o(()=>[(p(!0),k(M,null,P(e.Form.staff_list,d=>(p(),Q(m,{key:d.id,label:d.name,value:d.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(f,{label:"\u662F\u5426\u8D1F\u8D23\u4EBA",prop:"is_head"},{default:o(()=>[a(j,{modelValue:e.Form.is_head,"onUpdate:modelValue":t[1]||(t[1]=d=>e.Form.is_head=d),disabled:""},{default:o(()=>[a(v,{label:"1"},{default:o(()=>[se]),_:1}),a(v,{label:"0"},{default:o(()=>[le]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(f,null,{default:o(()=>[a(C,{type:"primary",onClick:t[2]||(t[2]=d=>n.submitAdd())},{default:o(()=>[_($(e.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})],64)}var _e=W(Y,[["render",re]]);export{_e as default};
