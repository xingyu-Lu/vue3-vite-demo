var C=Object.defineProperty,U=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var M=(o,e,a)=>e in o?C(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a,w=(o,e)=>{for(var a in e||(e={}))F.call(e,a)&&M(o,a,e[a]);if(v)for(var a of v(e))x.call(e,a)&&M(o,a,e[a]);return o},V=(o,e)=>U(o,B(e));import{a as y}from"./axios.9a9c1db6.js";import"./md5.456e5432.js";import{r as p,a as E,t as N,c as m,d as R,e as A,w as t,ak as h,f as l,an as k,at as j,h as _,ah as D,i as I}from"./vendor.4b31625a.js";import{_ as S}from"./index.3871cc0a.js";const z={name:"Login",setup(){const o=p(!0),e=p(),a=p(60),r=p(),f=p(null),i=E({loginModel:{name:"",mobile:"",email:"",code:"",password:""},checked:!0,rules:{name:[{required:!0,message:"\u59D3\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],mobile:[{required:!0,message:"\u624B\u673A\u53F7\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],email:[{required:!0,message:"\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],code:[{required:!0,message:"\u9A8C\u8BC1\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],password:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}}),d=async()=>{f.value.validate(g=>{if(g)y.post("/api/head/registers",{name:i.loginModel.name,mobile:i.loginModel.mobile,email:i.loginModel.email,code:i.loginModel.code,password:i.loginModel.password}).then(b=>{h.success("\u6CE8\u518C\u6210\u529F\uFF0C\u5F85\u7BA1\u7406\u5458\u5BA1\u6838"),window.location.href="/"});else return!1})},n=()=>{f.value.resetFields()},u=()=>{e.value||(r.value=a.value,o.value=!1,e.value=setInterval(()=>{r.value>0&&r.value<=a.value?r.value--:(o.value=!0,clearInterval(e.value),e.value=null)},1e3)),c(),h.success("\u5DF2\u53D1\u9001\uFF0C\u8BF7\u6CE8\u610F\u67E5\u6536")},c=()=>{y.get("/api/head/registers/code",{params:{email:i.loginModel.email}})};return V(w({},N(i)),{show:o,count:r,loginRef:f,submitForm:d,resetForm:n,Verification:u})}},L=_("div",{style:{"justify-content":"center",display:"flex","font-size":"28px",color:"#1BAEAE","font-weight":"bold","margin-bottom":"20px"}}," \u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662",-1),T=I("\u7ACB\u5373\u6CE8\u518C");function G(o,e,a,r,f,i){const d=m("el-input"),n=m("el-form-item"),u=m("el-col"),c=m("el-button"),g=m("el-row"),b=m("el-form"),q=m("el-card");return R(),A(g,{style:{"min-height":"100%"},justify:"space-around",align:"middle"},{default:t(()=>[l(u,{sm:16,md:8},{default:t(()=>[l(q,null,{default:t(()=>[L,l(b,{"label-position":"top",rules:o.rules,model:o.loginModel,ref:"loginRef"},{default:t(()=>[l(n,{label:"\u59D3\u540D",prop:"name"},{default:t(()=>[l(d,{type:"text",modelValue:o.loginModel.name,"onUpdate:modelValue":e[0]||(e[0]=s=>o.loginModel.name=s),modelModifiers:{trim:!0},autocomplete:"off",placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D"},null,8,["modelValue"])]),_:1}),l(n,{label:"\u624B\u673A\u53F7",prop:"mobile"},{default:t(()=>[l(d,{type:"text",modelValue:o.loginModel.mobile,"onUpdate:modelValue":e[1]||(e[1]=s=>o.loginModel.mobile=s),modelModifiers:{trim:!0},autocomplete:"off",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},null,8,["modelValue"])]),_:1}),l(n,{label:"\u90AE\u7BB1",prop:"email"},{default:t(()=>[l(d,{type:"text",modelValue:o.loginModel.email,"onUpdate:modelValue":e[2]||(e[2]=s=>o.loginModel.email=s),modelModifiers:{trim:!0},autocomplete:"off",placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1"},null,8,["modelValue"])]),_:1}),l(n,{label:"\u9A8C\u8BC1\u7801",prop:"code"},{default:t(()=>[l(g,{gutter:20},{default:t(()=>[l(u,{sm:16},{default:t(()=>[l(d,{type:"text",modelValue:o.loginModel.code,"onUpdate:modelValue":e[3]||(e[3]=s=>o.loginModel.code=s),modelModifiers:{trim:!0},autocomplete:"off",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"},null,8,["modelValue"])]),_:1}),l(u,{sm:4},{default:t(()=>[l(c,{type:"primary"},{default:t(()=>[k(_("span",{onClick:e[4]||(e[4]=(...s)=>r.Verification&&r.Verification(...s))},"\u83B7\u53D6\u90AE\u7BB1\u9A8C\u8BC1\u7801",512),[[j,r.show]]),k(_("span",null,D(r.count)+" s \u540E\u83B7\u53D6",513),[[j,!r.show]])]),_:1})]),_:1})]),_:1})]),_:1}),l(n,{label:"\u5BC6\u7801",prop:"password"},{default:t(()=>[l(d,{type:"password",modelValue:o.loginModel.password,"onUpdate:modelValue":e[5]||(e[5]=s=>o.loginModel.password=s),modelModifiers:{trim:!0},autocomplete:"off",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),l(n,null,{default:t(()=>[l(c,{style:{width:"100%"},type:"primary",onClick:r.submitForm},{default:t(()=>[T]),_:1},8,["onClick"])]),_:1})]),_:1},8,["rules","model"])]),_:1})]),_:1})]),_:1})}var Q=S(z,[["render",G]]);export{Q as default};
