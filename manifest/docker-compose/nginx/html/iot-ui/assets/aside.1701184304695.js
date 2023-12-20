import{L as M,aD as I,a2 as V,l as S,i as B,k as T,aI as v,ab as W,ai as C,o as b,S as A,T as y,a as w,a8 as E,F as k,_ as L,b as F,Z as $,a9 as O,K as q,j as H,U as N,V as j,X as x,O as P}from"./vue.1701184304695.js";import{u as R,_ as D}from"./index.1701184304695.js";import{S as U,L as z}from"./main.1701184304695.js";const K=M({name:"navMenuVertical",components:{SubItem:U},props:{menuList:{type:Array,default:()=>[]}},setup(s){const n=R(),i=I(),d=V({defaultActive:i.meta.isDynamic?i.meta.isDynamicPath:i.path,isCollapse:!1}),_=S(()=>s.menuList),f=S(()=>n.state.themeConfig.themeConfig),p=u=>{const{path:c,meta:l}=u,g=l.isDynamic?l.isDynamicPath.split("/"):c.split("/");return g.length>=4&&(l==null?void 0:l.isHide)?g.splice(0,3).join("/"):c};return B(n.state.themeConfig.themeConfig,()=>{document.body.clientWidth<=1e3?d.isCollapse=!1:d.isCollapse=f.value.isCollapse},{immediate:!0}),T(()=>{d.defaultActive=p(i)}),v(u=>{d.defaultActive=p(u),document.body.clientWidth<1e3&&(f.value.isCollapse=!1)}),{menuLists:_,getThemeConfig:f,...W(d)}}});function X(s,n,i,d,_,f){const p=C("SvgIcon"),u=C("SubItem"),c=C("el-sub-menu"),l=C("el-menu-item"),g=C("el-menu");return b(),A(g,{router:"","default-active":s.defaultActive,"background-color":"transparent",collapse:s.isCollapse,"unique-opened":s.getThemeConfig.isUniqueOpened,"collapse-transition":!1},{default:y(()=>[(b(!0),w(k,null,E(s.menuLists,e=>{var t,a;return b(),w(k,null,[e.children&&e.children.length>0?(b(),A(c,{index:e.path,key:e.path},{title:y(()=>{var r,o,m,h;return[L(p,{name:(r=e.meta)==null?void 0:r.icon},null,8,["name"]),F("span",null,$(((o=e.meta)==null?void 0:o.title.indexOf("."))>0?s.$t((m=e.meta)==null?void 0:m.title):(h=e.meta)==null?void 0:h.title),1)]}),default:y(()=>[L(u,{chil:e.children},null,8,["chil"])]),_:2},1032,["index"])):(b(),A(l,{index:e.path,key:e.path},O({default:y(()=>{var r;return[L(p,{name:(r=e.meta)==null?void 0:r.icon},null,8,["name"])]}),_:2},[!((t=e.meta)!=null&&t.isLink)||((a=e.meta)==null?void 0:a.isLink)&&e.meta.isIframe?{name:"title",fn:y(()=>{var r,o,m;return[F("span",null,$(((r=e.meta)==null?void 0:r.title.indexOf("."))>0?s.$t((o=e.meta)==null?void 0:o.title):(m=e.meta)==null?void 0:m.title),1)]})}:{name:"title",fn:y(()=>{var r,o,m,h;return[F("a",{href:(r=e.meta)==null?void 0:r.isLink,target:"_blank",rel:"opener",class:"w100"},$(((o=e.meta)==null?void 0:o.title.indexOf("."))>0?s.$t((m=e.meta)==null?void 0:m.title):(h=e.meta)==null?void 0:h.title),9,["href"])]})}]),1032,["index"]))],64)}),256))]),_:1},8,["default-active","collapse","unique-opened"])}var Z=D(K,[["render",X]]);const G=M({name:"layoutAside",components:{Logo:z,Vertical:Z},setup(){const{proxy:s}=H(),n=R(),i=V({menuList:[],clientWidth:0}),d=S(()=>n.state.tagsViewRoutes.isTagsViewCurrenFull),_=S(()=>{const{layout:e,isCollapse:t,menuBar:a}=n.state.themeConfig.themeConfig,o=["#FFFFFF","#FFF","#fff","#ffffff"].includes(a)?"layout-el-aside-br-color":"";if(i.clientWidth<=1e3)if(t){document.body.setAttribute("class","el-popup-parent--hidden");const m=document.querySelector(".layout-container"),h=document.createElement("div");return h.setAttribute("class","layout-aside-mobile-mode"),m.appendChild(h),h.addEventListener("click",f),[o,"layout-aside-mobile","layout-aside-mobile-open"]}else return f(),[o,"layout-aside-mobile","layout-aside-mobile-close"];else return e==="columns"?t?[o,"layout-aside-pc-1"]:[o,"layout-aside-pc-220"]:t?[o,"layout-aside-pc-64"]:[o,"layout-aside-pc-220"]}),f=()=>{const e=document.querySelector(".layout-aside-mobile-mode");e==null||e.setAttribute("style","animation: error-img-two 0.3s"),setTimeout(()=>{var a;(a=e==null?void 0:e.parentNode)==null||a.removeChild(e)},300),document.body.clientWidth<1e3&&(n.state.themeConfig.themeConfig.isCollapse=!1),document.body.setAttribute("class","")},p=S(()=>{let{layout:e,isShowLogo:t}=n.state.themeConfig.themeConfig;return t&&e==="defaults"||t&&e==="columns"}),u=()=>{if(n.state.themeConfig.themeConfig.layout==="columns")return!1;i.menuList=c(n.state.routesList.routesList)},c=e=>e.filter(t=>{var a;return!((a=t.meta)!=null&&a.isHide)}).map(t=>(t=Object.assign({},t),t.children&&(t.children=c(t.children)),t)),l=e=>{i.clientWidth=e},g=e=>{let{layout:t}=n.state.themeConfig.themeConfig;if(t!=="columns")return!1;e||s.mittBus.emit("restoreDefault"),n.dispatch("routesList/setColumnsMenuHover",e)};return B(n.state.themeConfig.themeConfig,e=>{if(e.isShowLogoChange!==e.isShowLogo){if(!s.$refs.layoutAsideScrollbarRef)return!1;s.$refs.layoutAsideScrollbarRef.update()}}),B(n.state,e=>{let{layout:t,isClassicSplitMenu:a}=e.themeConfig.themeConfig;if(t==="classic"&&a)return!1;u()}),q(()=>{l(document.body.clientWidth),u(),s.mittBus.on("setSendColumnsChildren",e=>{i.menuList=e.children}),s.mittBus.on("setSendClassicChildren",e=>{let{layout:t,isClassicSplitMenu:a}=n.state.themeConfig.themeConfig;t==="classic"&&a&&(i.menuList=[],i.menuList=e.children)}),s.mittBus.on("getBreadcrumbIndexSetFilterRoutes",()=>{u()}),s.mittBus.on("layoutMobileResize",e=>{l(e.clientWidth),f()})}),{setCollapseStyle:_,setShowLogo:p,isTagsViewCurrenFull:d,onAsideEnterLeave:g,...W(i)}}}),J={class:"h100"};function Q(s,n,i,d,_,f){const p=C("Logo"),u=C("Vertical"),c=C("el-scrollbar"),l=C("el-aside");return N((b(),w("div",J,[L(l,{class:P(["layout-aside",s.setCollapseStyle])},{default:y(()=>[s.setShowLogo?(b(),A(p,{key:0})):x("",!0),L(c,{class:"flex-auto",ref:"layoutAsideScrollbarRef",onMouseenter:n[0]||(n[0]=g=>s.onAsideEnterLeave(!0)),onMouseleave:n[1]||(n[1]=g=>s.onAsideEnterLeave(!1))},{default:y(()=>[L(u,{menuList:s.menuList},null,8,["menuList"])]),_:1},512)]),_:1},8,["class"])],512)),[[j,!s.isTagsViewCurrenFull]])}var se=D(G,[["render",Q]]);export{se as A};