import{d as a,aC as e,l as s,i as r,ah as t,o,R as l,S as i,Y as d,M as c,V as f,j as n}from"./vue.1709626208081.js";import{_ as u,u as p}from"./index.1709626208081.js";import{A as m}from"./aside.1709626208081.js";import{H as y,M as x}from"./main.1709626208081.js";import"./parent.1709626208081.js";var b=u(a({name:"layoutDefaults",components:{Aside:m,Header:y,Main:x},setup(){const{proxy:a}=n(),t=p(),o=e(),l=s((()=>t.state.themeConfig.themeConfig.isFixedHeader));return r((()=>o.path),(()=>{a.$refs.layoutDefaultsScrollbarRef.wrap$&&(a.$refs.layoutDefaultsScrollbarRef.wrap$.scrollTop=0)})),{isFixedHeader:l}}}),[["render",function(a,e,s,r,n,u){const p=t("Aside"),m=t("Header"),y=t("Main"),x=t("el-scrollbar"),b=t("el-container"),H=t("el-backtop");return o(),l(b,{"class":"layout-container"},{"default":i((()=>[d(p),d(b,{"class":c(["flex-center",{"layout-backtop":!a.isFixedHeader}])},{"default":i((()=>[a.isFixedHeader?(o(),l(m,{key:0})):f("",!0),d(x,{ref:"layoutDefaultsScrollbarRef","class":c({"layout-backtop":a.isFixedHeader})},{"default":i((()=>[a.isFixedHeader?f("",!0):(o(),l(m,{key:0})),d(y)])),_:1},8,["class"])])),_:1},8,["class"]),d(H,{target:".layout-backtop .el-scrollbar__wrap"})])),_:1})}]]);export{b as default};