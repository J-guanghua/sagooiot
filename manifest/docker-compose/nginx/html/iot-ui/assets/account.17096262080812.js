import{d as e,h as a,a1 as o,k as s,l,aa as t,R as n,S as r,aC as i,aE as c,ah as u,o as d,Y as m,a8 as g,b as p,M as f,X as h,j as y}from"./vue.1709626208081.js";import{_ as w,c as I,b as S,u as _,E as v,L as F,S as P,i as b,e as V,f as x}from"./index.1709626208081.js";import{e as C}from"./rsa.1709626208081.js";const N={}.VITE_ISOPEN,k=e({name:"loginAccount",setup(){const e=a(),{t:n}=I(),r=_(),u=i(),d=c(),{proxy:m}=y(),g=o({isShowPassword:!1,ruleForm:{userName:N?"demo":"",password:N?"demo123456":"",captcha:"",VerifyKey:""},formRules:{userName:[{required:!0,trigger:"blur",message:"用户名不能为空"}],password:[{required:!0,trigger:"blur",message:"密码不能为空"}],captcha:[{required:!0,trigger:"blur",message:"验证码不能为空"}]},loading:{signIn:!1},captchaSrc:""});s((()=>{f()}));const p=l((()=>x(new Date))),f=()=>{S.login.captcha().then((e=>{g.captchaSrc=e.img,g.ruleForm.VerifyKey=e.key}))},h=async()=>{S.login.currentUser().then((async e=>{localStorage.setItem("userId",e.Info.id),P.set("userMenu",e.Data||[]),r.dispatch("requestOldRoutes/setBackEndControlRoutes",e||[]),r.state.themeConfig.themeConfig.isRequestRoutes?(await V(),w()):(await b(),w())}))},w=()=>{var e,a,o,s;const l=JSON.parse(localStorage.sysinfo||"{}"),t=d.getRoutes().find((e=>"/"===e.path));t&&(t.redirect=l.systemHomePageRoute||"/home");let r=p.value;(null==(e=u.query)?void 0:e.redirect)?d.push({path:null==(a=u.query)?void 0:a.redirect,query:u.query.params&&Object.keys(null==(o=u.query)?void 0:o.params).length>0?JSON.parse(null==(s=u.query)?void 0:s.params):""}):d.push("/"),g.loading.signIn=!1;const i=n("message.signInText");v.success(`${r}，${i}`)};return{changePwdRef:e,onSignIn:()=>{m.$refs.loginForm.validate((async a=>{if(a){let a;g.loading.signIn=!0,a=sessionStorage.isRsaEnabled?await C(g.ruleForm.password):g.ruleForm.password,S.login.login({...g.ruleForm,password:a}).then((async a=>{var o,s,l;if(a.isChangePwd)return v.error(`密码已超过${sessionStorage.sysPasswordChangePeriod}天未修改，请先修改密码再登录`),g.loading.signIn=!1,f(),e.value.toShow({userName:g.ruleForm.userName,oldUserPassword:g.ruleForm.password});localStorage.setItem("token",a.token);const t=a.userInfo;t.avatar=m.getUpFileUrl(t.avatar),F.set("userInfo",t),P.set("userInfo",t);const[n,i,c]=await Promise.all([S.getInfoByKey("sys.column.switch"),S.getInfoByKey("sys.button.switch"),S.getInfoByKey("sys.uploadFile.way")]),u=sessionStorage.isSecurityControlEnabled||null;localStorage.setItem("btnNoAuth",u&&Number(null==(o=null==i?void 0:i.data)?void 0:o.configValue)?"":"1"),localStorage.setItem("colNoAuth",u&&Number(null==(s=null==n?void 0:n.data)?void 0:s.configValue)?"":"1"),localStorage.setItem("uploadFileWay",(null==(l=null==c?void 0:c.data)?void 0:l.configValue)||"0"),await r.dispatch("userInfos/setUserInfos",t),h()}))["catch"]((()=>{g.loading.signIn=!1,f()}))}}))["catch"]((()=>{}))},getCaptcha:f,...t(g)}}}),R={"class":"login-content-code"};var q=w(k,[["render",function(e,a,o,s,l,t){const i=u("ele-User"),c=u("el-icon"),y=u("el-input"),w=u("el-form-item"),I=u("ele-Unlock"),S=u("ele-Position"),_=u("el-col"),v=u("el-image"),F=u("el-button"),P=u("changePwd"),b=u("el-form");return d(),n(b,{ref:"loginForm",size:"large","class":"login-content-form",model:e.ruleForm,rules:e.formRules},{"default":r((()=>[m(w,{"class":"login-animation1",prop:"userName"},{"default":r((()=>[m(y,{type:"text",placeholder:e.$t("message.account.accountPlaceholder1"),modelValue:e.ruleForm.userName,"onUpdate:modelValue":a[0]||(a[0]=a=>e.ruleForm.userName=a),clearable:"",autocomplete:"off"},{prefix:r((()=>[m(c,{"class":"el-input__icon"},{"default":r((()=>[m(i)])),_:1})])),_:1},8,["placeholder","modelValue"])])),_:1}),m(w,{"class":"login-animation2",prop:"password"},{"default":r((()=>[m(y,{type:e.isShowPassword?"text":"password",placeholder:e.$t("message.account.accountPlaceholder2"),modelValue:e.ruleForm.password,"onUpdate:modelValue":a[2]||(a[2]=a=>e.ruleForm.password=a),autocomplete:"off",onKeyup:g(e.onSignIn,["enter"])},{prefix:r((()=>[m(c,{"class":"el-input__icon"},{"default":r((()=>[m(I)])),_:1})])),suffix:r((()=>[p("i",{"class":f(["iconfont el-input__icon login-content-password",e.isShowPassword?"icon-yincangmima":"icon-xianshimima"]),onClick:a[1]||(a[1]=a=>e.isShowPassword=!e.isShowPassword)},null,2)])),_:1},8,["type","placeholder","modelValue","onKeyup"])])),_:1}),m(w,{"class":"login-animation3",prop:"captcha"},{"default":r((()=>[m(_,{span:15},{"default":r((()=>[m(y,{type:"text",maxlength:"4",placeholder:e.$t("message.account.accountPlaceholder3"),modelValue:e.ruleForm.captcha,"onUpdate:modelValue":a[3]||(a[3]=a=>e.ruleForm.captcha=a),clearable:"",autocomplete:"off",onKeyup:g(e.onSignIn,["enter"])},{prefix:r((()=>[m(c,{"class":"el-input__icon"},{"default":r((()=>[m(S)])),_:1})])),_:1},8,["placeholder","modelValue","onKeyup"])])),_:1}),m(_,{span:1}),m(_,{span:8},{"default":r((()=>[p("div",R,[m(v,{"class":"login-content-code-img",onClick:e.getCaptcha,width:"130",height:"38",src:e.captchaSrc,style:{cursor:"pointer"}},null,8,["onClick","src"])])])),_:1})])),_:1}),m(w,{"class":"login-animation4"},{"default":r((()=>[m(F,{type:"primary","class":"login-content-submit",onClick:e.onSignIn,loading:e.loading.signIn},{"default":r((()=>[p("span",null,h(e.$t("message.account.accountBtnText")),1)])),_:1},8,["onClick","loading"])])),_:1}),m(P,{ref:"changePwdRef"},null,512)])),_:1},8,["model","rules"])}],["__scopeId","data-v-5fedcba5"]]);export{q as default};