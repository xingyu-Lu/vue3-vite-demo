var K=Object.defineProperty,Q=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var E=(e,l,d)=>l in e?K(e,l,{enumerable:!0,configurable:!0,writable:!0,value:d}):e[l]=d,H=(e,l)=>{for(var d in l||(l={}))Y.call(l,d)&&E(e,d,l[d]);if(L)for(var d of L(l))Z.call(l,d)&&E(e,d,l[d]);return e},N=(e,l)=>Q(e,X(l));import{W as $}from"./wangEditor.696d98d4.js";import{a as b}from"./axios.a34e415d.js";import{ad as ee,ao as oe,r as F,al as te,u as le,a as ae,o as ne,ap as se,t as ie,c as s,d as g,ae as k,f as o,w as n,af as O,ak as h,h as y,ah as M,g as R,ag as re,e as de,i as p}from"./vendor.dfcff7c2.js";import{_ as ue,l as C,u as x,d as me}from"./index.570e3310.js";const ce={name:"news_add",components:{Plus:ee,Delete:oe},setup(){F(null);const e=F(null),l=F(null),d=F(null),m=te(),q=le(),{id:f,office_id:v}=m.query,i=ae({res_data:"",token:"Bearer "+C("token")||"",id:f,select_flag:!1,Form:{img_url:"",img:"",column_id:"",title:"",content:"",release_time:F(""),sort:"0",status:"0",disabled:!0,fileList:[],column_list:[]},rules:{column_id:[{required:!0,message:"\u680F\u76EE\u5FC5\u987B",trigger:["change"]}],title:[{required:!0,message:"\u6807\u9898\u5FC5\u987B",trigger:["change"]}],release_time:[{required:!0,message:"\u53D1\u5E03\u65F6\u95F4\u5FC5\u987B",trigger:["change"]}],sort:[{required:!1,message:"\u6392\u5E8F\u5FC5\u987B",trigger:["change"]}],status:[{required:!0,message:"\u72B6\u6001\u5FC5\u987B",trigger:["change"]}]}});let t;ne(()=>{t=new $(l.value),t.config.lineHeights=["1","1.15","1.5","2","2.5","3"],t.config.showLinkImg=!1,t.config.showLinkImgAlt=!1,t.config.showLinkImgHref=!1,t.config.uploadImgMaxSize=1*1024*1024,t.config.uploadImgMaxLength=1,t.config.uploadImgAccept=["jpg","jpeg","png","gif","bmp","webp"],t.config.uploadFileName="file",t.config.uploadImgHeaders={Authorization:i.token},t.config.uploadImgParams={basket:"img"},t.config.uploadImgHooks={customInsert:function(a,u){console.log("result",u),a(u.data.src)}},t.config.uploadImgServer=x,Object.assign(t.config,{onchange(){console.log("change")}}),t.config.uploadVideoServer=x,t.config.uploadVideoMaxSize=1*200*1024*300,t.config.uploadVideoAccept=["mp4"],t.config.uploadVideoParams={basket:"video"},t.config.uploadVideoName="file",t.config.uploadVideoHeaders={Authorization:i.token},t.config.uploadVideoHooks={customInsert:function(a,u){console.log("customInsert",u),a(u.data.src)}},t.create(),S(),f&&b.get(`/api/head/technicalOfficeColumns/${f}`).then(a=>{i.Form={img_url:a.data.url||"",img:a.data.file_id,column_id:a.data.column_id,title:a.data.title,release_time:a.data.release_time,sort:a.data.sort,status:String(a.data.status),fileList:[{url:a.data.url}],disabled:!0},i.select_flag=!0,t&&t.txt.html(a.data.content)}),C("userinfo")?i.res_data=C("userinfo"):I()}),se(()=>{t.destroy(),t=null});const I=()=>{b.get("/api/head/staffs/info").then(a=>{i.res_data=a.data,localSet("userinfo",a.data)})},S=()=>{b.get("/api/head/technicalOfficeColumnSets/column_list").then(a=>{i.Form.column_list=a.data})},w=()=>{e.value.validate(a=>{if(a){let u=b.post,_={img:i.Form.img,column_id:i.Form.column_id,title:i.Form.title,content:t.txt.html(),release_time:i.Form.release_time,sort:i.Form.sort,status:i.Form.status},V="/api/head/technicalOfficeColumns";f&&(_.release_time=i.Form.release_time,u=b.put,V=`/api/head/technicalOfficeColumns/${f}`),u(V,_).then(()=>{f?h.success("\u4FEE\u6539\u6210\u529F"):h.success("\u6DFB\u52A0\u6210\u529F"),q.push({path:"/kssz-column-index",query:{id:v}})})}})},j=a=>{if((a.size/1024/1024).toFixed(2)>1)return h.error("\u4E0A\u4F20\u7684\u56FE\u7247\u5927\u4E8E1\u5146"),!1;const _=a.name.split(".")[1]||"";if(!["jpg","jpeg","png","gif"].includes(_))return h.error("\u8BF7\u4E0A\u4F20 jpg\u3001jpeg\u3001png\u3001gif \u683C\u5F0F\u7684\u56FE\u7247"),!1},z=a=>{h.success("\u4E0A\u4F20\u6210\u529F"),i.Form.img_url=a.data.src||"",i.Form.img=a.data.id||""},U=a=>{h.error("\u4E0A\u4F20\u5931\u8D25")},c=a=>{d.value.clearFiles(),i.Form.img=""};return N(H({},ie(i)),{editor:l,uploadRef:d,Ref:e,submitAdd:w,uploadImgServer:me,handleBeforeUpload:j,handleUrlSuccess:z,handleUrlError:U,handleRemove:c,office_id:v})}},fe={style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},pe={key:0},_e=p("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),ge=p("\u79D1\u5BA4\u8BBE\u7F6E"),he=p("\u79D1\u5BA4\u680F\u76EE"),be=p("\u680F\u76EE\u7C7B\u578B\u4E3A\u4EC5\u56FE\uFF1A\u5219\u5FC5\u987B\u4F20\u56FE\u7247\uFF1B\u680F\u76EE\u7C7B\u578B\u4E3A\u56FE\u6587\u6216\u89C6\u9891\uFF1A\u5219\u5185\u5BB9\u5FC5\u987B\uFF1B\u6392\u5E8F\u53EA\u5BF9\u4EC5\u56FE\u7684\u6709\u6548(\u6570\u5B57\u8D8A\u5C0F\u8D8A\u9760\u524D)"),Fe=["src"],ke={class:"el-upload-list__item-actions"},ve={ref:"editor",style:{"z-index":"1"}},Ve=p("\u5DF2\u5BA1\u6838"),ye=p("\u5F85\u5BA1\u6838");function Ie(e,l,d,m,q,f){const v=s("el-col"),i=s("el-row"),t=s("el-breadcrumb-item"),I=s("el-breadcrumb"),S=s("el-descriptions-item"),w=s("el-descriptions"),j=s("el-divider"),z=s("el-option"),U=s("el-select"),c=s("el-form-item"),a=s("plus"),u=s("el-icon"),_=s("delete"),V=s("el-upload"),A=s("el-input"),D=s("el-date-picker"),B=s("el-radio"),P=s("el-radio-group"),W=s("el-button"),G=s("el-form"),T=s("el-card");return g(),k(O,null,[o(i,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:n(()=>[o(v,{span:24},{default:n(()=>[y("div",fe,[e.res_data.office?(g(),k("strong",pe,M(e.res_data.office.office_name),1)):R("",!0)])]),_:1})]),_:1}),o(I,{separator:"/",style:{"margin-bottom":"20px"}},{default:n(()=>[o(t,{to:{path:"/"}},{default:n(()=>[_e]),_:1}),o(t,{to:{path:"/kssz",query:{id:m.office_id}}},{default:n(()=>[ge]),_:1},8,["to"]),o(t,null,{default:n(()=>[he]),_:1})]),_:1}),o(T,{style:{"min-height":"100%"}},{default:n(()=>[o(w,{title:"\u63D0\u793A"},{default:n(()=>[o(S,null,{default:n(()=>[be]),_:1})]),_:1}),o(j),o(G,{model:e.Form,rules:e.rules,ref:"Ref","label-width":"100px"},{default:n(()=>[o(c,{label:"\u680F\u76EE",prop:"column_id"},{default:n(()=>[o(U,{modelValue:e.Form.column_id,"onUpdate:modelValue":l[0]||(l[0]=r=>e.Form.column_id=r),placeholder:"Select",filterable:""},{default:n(()=>[(g(!0),k(O,null,re(e.Form.column_list,r=>(g(),de(z,{key:r.id,label:r.name+r.type_name,value:r.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(c,{label:"\u56FE\u7247",prop:"img"},{default:n(()=>[o(V,{ref:"uploadRef",action:m.uploadImgServer,data:{basket:"img"},limit:1,"list-type":"picture-card","thumbnail-mode":"true",headers:{Authorization:e.token},"before-upload":m.handleBeforeUpload,"on-success":m.handleUrlSuccess,"on-error":m.handleUrlError,"auto-upload":!0,"file-list":e.Form.fileList},{default:n(()=>[o(u,null,{default:n(()=>[o(a)]),_:1})]),file:n(({file:r})=>[y("div",null,[e.Form.img_url?(g(),k("img",{key:0,class:"el-upload-list__item-thumbnail",src:e.Form.img_url,alt:""},null,8,Fe)):R("",!0),y("span",ke,[e.Form.disabled?(g(),k("span",{key:0,class:"el-upload-list__item-delete",onClick:l[1]||(l[1]=(...J)=>m.handleRemove&&m.handleRemove(...J))},[o(u,null,{default:n(()=>[o(_)]),_:1})])):R("",!0)])])]),_:1},8,["action","headers","before-upload","on-success","on-error","file-list"])]),_:1}),o(c,{label:"\u6807\u9898",prop:"title"},{default:n(()=>[o(A,{modelValue:e.Form.title,"onUpdate:modelValue":l[2]||(l[2]=r=>e.Form.title=r),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898",type:"text"},null,8,["modelValue"])]),_:1}),o(c,{label:"\u5185\u5BB9",prop:"content"},{default:n(()=>[y("div",ve,null,512)]),_:1}),o(c,{label:"\u53D1\u5E03\u65F6\u95F4",prop:"release_time"},{default:n(()=>[o(D,{modelValue:e.Form.release_time,"onUpdate:modelValue":l[3]||(l[3]=r=>e.Form.release_time=r),type:"datetime","default-value":new Date,placeholder:"\u8BF7\u8F93\u5165\u53D1\u5E03\u65F6\u95F4"},null,8,["modelValue","default-value"])]),_:1}),o(c,{label:"\u6392\u5E8F",prop:"sort"},{default:n(()=>[o(A,{modelValue:e.Form.sort,"onUpdate:modelValue":l[4]||(l[4]=r=>e.Form.sort=r),placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",type:"number"},null,8,["modelValue"])]),_:1}),o(c,{label:"\u72B6\u6001",prop:"status"},{default:n(()=>[o(P,{modelValue:e.Form.status,"onUpdate:modelValue":l[5]||(l[5]=r=>e.Form.status=r),disabled:""},{default:n(()=>[o(B,{label:"1"},{default:n(()=>[Ve]),_:1}),o(B,{label:"0"},{default:n(()=>[ye]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(c,null,{default:n(()=>[o(W,{type:"primary",onClick:l[6]||(l[6]=r=>m.submitAdd())},{default:n(()=>[p(M(e.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})],64)}var Re=ue(ce,[["render",Ie]]);export{Re as default};