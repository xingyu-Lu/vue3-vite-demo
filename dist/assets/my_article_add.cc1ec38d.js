var U=Object.defineProperty,z=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var w=(o,t,n)=>t in o?U(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n,S=(o,t)=>{for(var n in t||(t={}))$.call(t,n)&&w(o,n,t[n]);if(j)for(var n of j(t))E.call(t,n)&&w(o,n,t[n]);return o},q=(o,t)=>z(o,B(t));import{W as H}from"./wangEditor.2c677017.js";import{a as k}from"./axios.60cc844c.js";import{ac as L,ap as M,r as p,ak as N,u as C,a as D,o as P,aq as O,t as W,c as d,d as G,ad as T,f as l,w as s,ae as J,aj as g,h as I,i as f,ag as K}from"./vendor.3ad3b1c7.js";import{_ as Q,l as X,u as A,d as Y}from"./index.ea1bfd5e.js";const Z={name:"news_add",components:{Plus:L,Delete:M},setup(){p(null);const o=p(null),t=p(null),n=p(null),y=N(),x=C(),{id:u}=y.query,r=D({token:"Bearer "+X("token")||"",id:u,Form:{img_url:"",img:"",office_id:"",title:"",content:"",release_time:p(""),status:"0",disabled:!0,fileList:[],list:[]},rules:{img:[{required:!0,message:"\u56FE\u7247\u5FC5\u987B",trigger:["change"]}],type:[{required:!0,message:"\u7C7B\u578B\u5FC5\u987B",trigger:["change"]}],title:[{required:!0,message:"\u6807\u9898",trigger:["change"]}],release_time:[{required:"true",message:"\u53D1\u5E03\u65F6\u95F4\u5FC5\u987B",trigger:["change"]}],status:[{required:!1,message:"\u72B6\u6001\u5FC5\u987B",trigger:["change"]}]}});let e;P(()=>{e=new H(t.value),e.config.showLinkImg=!1,e.config.showLinkImgAlt=!1,e.config.showLinkImgHref=!1,e.config.uploadImgMaxSize=10*1024*1024,e.config.uploadImgMaxLength=1,e.config.uploadImgAccept=["jpg","jpeg","png","gif","bmp","webp"],e.config.uploadFileName="file",e.config.uploadImgHeaders={Authorization:r.token},e.config.uploadImgParams={basket:"img"},e.config.uploadImgHooks={customInsert:function(a,i){console.log("result",i),a(i.data.src)}},e.config.uploadImgServer=A,Object.assign(e.config,{onchange(){console.log("change")}}),e.config.uploadVideoServer=A,e.config.uploadVideoMaxSize=1*200*1024*1024,e.config.uploadVideoAccept=["mp4"],e.config.uploadVideoParams={basket:"video"},e.config.uploadVideoName="file",e.config.uploadVideoHeaders={Authorization:r.token},e.config.uploadVideoHooks={customInsert:function(a,i){console.log("customInsert",i),a(i.data.src)}},e.create(),u&&k.get(`/api/head/staffs/${u}`).then(a=>{r.Form={title:a.data.title,release_time:a.data.release_time,status:String(a.data.status)},e&&e.txt.html(a.data.content)})}),O(()=>{e.destroy(),e=null});const _=()=>{o.value.validate(a=>{if(a){let i=k.post,h={type:r.Form.type,title:r.Form.title,content:e.txt.html(),release_time:r.Form.release_time,status:r.Form.status},b="/api/head/staffs";u&&(h.release_time=r.Form.release_time,i=k.put,b=`/api/head/staffs/${u}`),i(b,h).then(()=>{u?g.success("\u4FEE\u6539\u6210\u529F"):g.success("\u6DFB\u52A0\u6210\u529F"),x.push({path:"/employee-my-article"})})}})},F=a=>{const i=a.name.split(".")[1]||"";if(!["jpg","jpeg","png"].includes(i))return g.error("\u8BF7\u4E0A\u4F20 jpg\u3001jpeg\u3001png \u683C\u5F0F\u7684\u56FE\u7247"),!1},v=a=>{g.success("\u4E0A\u4F20\u6210\u529F"),r.Form.img_url=a.data.src||"",r.Form.img=a.data.id||""},m=a=>{g.error("\u4E0A\u4F20\u5931\u8D25")},V=a=>{n.value.clearFiles(),r.Form.img=""};return q(S({},W(r)),{editor:t,uploadRef:n,Ref:o,submitAdd:_,uploadImgServer:Y,handleBeforeUpload:F,handleUrlSuccess:v,handleUrlError:m,handleRemove:V})}},ee=I("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[I("strong",null,"\u6211\u7684\u6587\u7AE0")],-1),te=f("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),oe=f("\u6211\u7684\u6587\u7AE0"),ae={ref:"editor",style:{"z-index":"1"}},le=f("\u5DF2\u5BA1\u6838"),se=f("\u5F85\u5BA1\u6838");function ne(o,t,n,y,x,u){const r=d("el-col"),e=d("el-row"),_=d("el-breadcrumb-item"),F=d("el-breadcrumb"),v=d("el-input"),m=d("el-form-item"),V=d("el-date-picker"),a=d("el-radio"),i=d("el-radio-group"),h=d("el-button"),b=d("el-form"),R=d("el-card");return G(),T(J,null,[l(e,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:s(()=>[l(r,{span:24},{default:s(()=>[ee]),_:1})]),_:1}),l(F,{separator:"/",style:{"margin-bottom":"20px"}},{default:s(()=>[l(_,{to:{path:"/"}},{default:s(()=>[te]),_:1}),l(_,null,{default:s(()=>[oe]),_:1})]),_:1}),l(R,{style:{"min-height":"100%"}},{default:s(()=>[l(b,{model:o.Form,rules:o.rules,ref:"Ref","label-width":"100px"},{default:s(()=>[l(m,{label:"\u6807\u9898",prop:"title"},{default:s(()=>[l(v,{modelValue:o.Form.title,"onUpdate:modelValue":t[0]||(t[0]=c=>o.Form.title=c),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898",type:"text"},null,8,["modelValue"])]),_:1}),l(m,{label:"\u5185\u5BB9",prop:"content"},{default:s(()=>[I("div",ae,null,512)]),_:1}),l(m,{label:"\u53D1\u5E03\u65F6\u95F4",prop:"release_time"},{default:s(()=>[l(V,{modelValue:o.Form.release_time,"onUpdate:modelValue":t[1]||(t[1]=c=>o.Form.release_time=c),type:"datetime","default-value":new Date,placeholder:"\u8BF7\u8F93\u5165\u53D1\u5E03\u65F6\u95F4"},null,8,["modelValue","default-value"])]),_:1}),l(m,{label:"\u72B6\u6001",prop:"status"},{default:s(()=>[l(i,{modelValue:o.Form.status,"onUpdate:modelValue":t[2]||(t[2]=c=>o.Form.status=c),disabled:""},{default:s(()=>[l(a,{label:"1"},{default:s(()=>[le]),_:1}),l(a,{label:"0"},{default:s(()=>[se]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(m,null,{default:s(()=>[l(h,{type:"primary",onClick:t[3]||(t[3]=c=>y.submitAdd())},{default:s(()=>[f(K(o.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})],64)}var ce=Q(Z,[["render",ne]]);export{ce as default};