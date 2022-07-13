var S=Object.defineProperty,j=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var C=(t,o,r)=>o in t?S(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,E=(t,o)=>{for(var r in o||(o={}))M.call(o,r)&&C(t,r,o[r]);if(w)for(var r of w(o))H.call(o,r)&&C(t,r,o[r]);return t},N=(t,o)=>j(t,q(o));import{ad as U,ao as K,r as $,al as D,u as G,a as P,ap as J,ak as f,o as L,aq as Q,t as W,c as i,d as V,ae as z,f as s,w as l,af as X,h as T,ah as A,g as Y,i as c}from"./vendor.0774305f.js";import{a as I,B as Z,E as ee,T as te}from"./index.esm.1d203652.js";import{a as g}from"./axios.f3a30152.js";import{_ as oe,l as x,u as F}from"./index.ec64343a.js";function ae(t,o){const{link:r="",fileName:a=""}=t;return`<a data-w-e-type="attachment" data-w-e-is-void data-w-e-is-inline data-link="${r}" data-fileName="${a}" href="${r}" target="_blank">${a}</a>`}const ne={type:"attachment",elemToHtml:ae};I.elemsToHtml=[ne];Z.registerModule(I);const se={name:"news_add",components:{Plus:U,Delete:K,Editor:ee,Toolbar:te},setup(){const t=$(null),o=D(),r=G(),{id:a}=o.query,m=P({res_data:"",token:"Bearer "+x("token")||"",id:a,select_flag:!1,Form:{content:"",status:"0"},rules:{status:[{required:!0,message:"\u72B6\u6001\u5FC5\u987B",trigger:["change"]}]}}),_=J(),b={insertKeys:{index:31,keys:["uploadAttachment"]}},y={placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9...",hoverbarKeys:{attachment:{menuKeys:["downloadAttachment"]}},MENU_CONF:{uploadImage:{server:F,fieldName:"file",maxFileSize:2*1024*1024,maxNumberOfFiles:10,allowedFileTypes:["image/*"],meta:{basket:"img"},headers:{Authorization:m.token},customInsert:function(e,n){n(e.data.src,e.data.file_name,e.data.src)},onError(e,n,d){f.error(new Error(n).message),console.log(e,n,d)}},uploadVideo:{server:F,fieldName:"file",maxFileSize:100*1024*1024,allowedFileTypes:["video/*"],meta:{basket:"video"},headers:{Authorization:m.token},customInsert:function(e,n){n(e.data.src)},onError(e,n,d){f.error(new Error(n).message),console.log(e,n,d)}},uploadAttachment:{server:F,fieldName:"file",maxFileSize:10*1024*1024,meta:{basket:"attachment"},headers:{Authorization:m.token},customInsert:function(e,n,d){d(`${n.name}`,e.data.src)},onError(e,n,d){f.error(new Error(n).message),console.log(e,n,d)}}}},u=e=>{_.value=e};L(()=>{a&&g.get(`/api/head/technicalOfficeIntroduce/${a}`).then(e=>{m.Form={status:String(e.data.status),content:e.data.content}}),x("userinfo")?m.res_data=x("userinfo"):k()}),Q(()=>{const e=_.value;e!=null&&e.destroy()});const k=()=>{g.get("/api/head/staffs/info").then(e=>{m.res_data=e.data,localSet("userinfo",e.data)})},v=()=>{t.value.validate(e=>{if(e){let n=g.post,d={content:m.Form.content,status:m.Form.status},p="/api/head/technicalOfficeIntroduce";a&&(d.release_time=m.Form.release_time,n=g.put,p=`/api/head/technicalOfficeIntroduce/${a}`),n(p,d).then(()=>{a?f.success("\u4FEE\u6539\u6210\u529F"):f.success("\u6DFB\u52A0\u6210\u529F"),r.push({path:"/kssz-ksjs-index",query:{id:a}})})}})};return N(E({},W(m)),{editorRef:_,mode:"default",toolbarConfig:b,editorConfig:y,handleCreated:u,Ref:t,submitAdd:v,id:a})}},re={style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},le={key:0},de=c("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),ie=c("\u79D1\u5BA4\u8BBE\u7F6E"),me=c("\u79D1\u5BA4\u4ECB\u7ECD"),ce={style:{border:"1px solid #ccc","z-index":"100"}},ue=c("\u5DF2\u5BA1\u6838"),fe=c("\u5F85\u5BA1\u6838");function _e(t,o,r,a,m,_){const b=i("el-col"),y=i("el-row"),u=i("el-breadcrumb-item"),k=i("el-breadcrumb"),v=i("Toolbar"),e=i("Editor"),n=i("el-form-item"),d=i("el-radio"),p=i("el-radio-group"),O=i("el-button"),R=i("el-form"),B=i("el-card");return V(),z(X,null,[s(y,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:l(()=>[s(b,{span:24},{default:l(()=>[T("div",re,[t.res_data.office?(V(),z("strong",le,A(t.res_data.office.office_name),1)):Y("",!0)])]),_:1})]),_:1}),s(k,{separator:"/",style:{"margin-bottom":"20px"}},{default:l(()=>[s(u,{to:{path:"/"}},{default:l(()=>[de]),_:1}),s(u,{to:{path:"/kssz",query:{id:a.id}}},{default:l(()=>[ie]),_:1},8,["to"]),s(u,null,{default:l(()=>[me]),_:1})]),_:1}),s(B,{style:{"min-height":"100%"}},{default:l(()=>[s(R,{model:t.Form,rules:t.rules,ref:"Ref","label-width":"100px"},{default:l(()=>[s(n,{label:"\u5185\u5BB9",prop:"content",style:{"margin-top":"35px"}},{default:l(()=>[T("div",ce,[s(v,{style:{"border-bottom":"1px solid #ccc"},editor:a.editorRef,defaultConfig:a.toolbarConfig,mode:a.mode},null,8,["editor","defaultConfig","mode"]),s(e,{style:{height:"500px","overflow-y":"hidden"},modelValue:t.Form.content,"onUpdate:modelValue":o[0]||(o[0]=h=>t.Form.content=h),defaultConfig:a.editorConfig,mode:a.mode,onOnCreated:a.handleCreated},null,8,["modelValue","defaultConfig","mode","onOnCreated"])])]),_:1}),s(n,{label:"\u72B6\u6001",prop:"status"},{default:l(()=>[s(p,{modelValue:t.Form.status,"onUpdate:modelValue":o[1]||(o[1]=h=>t.Form.status=h),disabled:""},{default:l(()=>[s(d,{label:"1"},{default:l(()=>[ue]),_:1}),s(d,{label:"0"},{default:l(()=>[fe]),_:1})]),_:1},8,["modelValue"])]),_:1}),s(n,null,{default:l(()=>[s(O,{type:"primary",onClick:o[2]||(o[2]=h=>a.submitAdd())},{default:l(()=>[c(A(a.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})],64)}var ke=oe(se,[["render",_e]]);export{ke as default};
