import{g as e,_ as a,E as l}from"./index.1709626208081.js";import{d as t,h as i,i as s,a as o,Y as u,S as r,M as m,e as d,ah as n,o as p}from"./vue.1709626208081.js";const c={"class":"upload"};var v=a(t({__name:"index",props:{multiple:{type:Boolean,"default":!1},widthHost:{type:Boolean,"default":!0},accept:{type:String,"default":".jpg,.png,.jpeg,.gif"},limit:{type:Number,"default":1},imgs:{type:Array,"default":()=>[]},img:{type:String,"default":""}},emits:["setImg","setImgs"],setup(a,{emit:t}){const v=e("/base-api/api/v1/common/singleImg"),g={Authorization:"Bearer "+localStorage.token},f=t,h=localStorage.uploadFileWay,y=a,_=i([]),I=e=>{if(e&&void 0!==e.code&&0!==e.code)return l.error(e.message);const a=_.value.map((e=>{var a,l;return e.response?null==(l=null==(a=e.response)?void 0:a.data)?void 0:l.full_path:e.url}));if(1===y.limit){const e=a[0];if(!e)return void f("setImg","");f("setImg",e)}else f("setImgs",a)};s((()=>y.imgs),(e=>{e.length?(_.value=e.map((e=>({name:e,url:e}))),I()):_.value=[]}),{immediate:!0}),s((()=>y.img),(e=>{e?(_.value=[{name:e,url:e}],I()):_.value=[]}),{immediate:!0});const b=i(""),S=i(!1),j=e=>{b.value=e.url,S.value=!0},w=e=>!(e.size/1024/1024>2)||(l.error("图片不能超过2MB!"),!1);return(e,l)=>{const t=n("ele-Plus"),i=n("el-icon"),s=n("el-upload"),f=n("el-image"),y=n("el-dialog");return p(),o("div",c,[u(s,{"file-list":_.value,"onUpdate:fileList":l[0]||(l[0]=e=>_.value=e),"class":m({hide:_.value.length>=a.limit}),accept:a.accept,"list-type":"picture-card",limit:a.limit,data:{source:d(h)},multiple:a.multiple,headers:g,"before-upload":w,action:d(v),"on-success":I,"on-preview":j,"on-remove":I},{"default":r((()=>[u(i,null,{"default":r((()=>[u(t)])),_:1})])),_:1},8,["file-list","class","accept","limit","data","multiple","action"]),u(y,{modelValue:S.value,"onUpdate:modelValue":l[1]||(l[1]=e=>S.value=e)},{"default":r((()=>[u(f,{"class":"preview",src:b.value,alt:"Preview Image"},null,8,["src"])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-25dfbc4b"]]);export{v as u};