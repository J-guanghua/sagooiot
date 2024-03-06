import{d as a,h as e,a1 as t,k as l,aa as n,a as i,Y as o,S as d,ah as s,ar as r,o as p,W as u,T as c,R as g,Z as m}from"./vue.1709626208081.js";import{a as f}from"./index.170962620808123.js";import D from"./detail.17096262080817.js";import{_ as h,E as b,h as y}from"./index.1709626208081.js";const w=a({name:"log",components:{DetailDic:D},setup(){const a=e(),i=e(),o=e(),d=e(),s=t({ids:[],tableData:{data:[],total:0,loading:!1,param:{pageNum:1,pageSize:10,status:-1,dateRange:[]}}}),r=()=>{s.tableData.loading=!0,f.log.getList(s.tableData.param).then((a=>{s.tableData.data=a.list,s.tableData.total=a.Total}))["finally"]((()=>s.tableData.loading=!1))};l((()=>{r()}));return{onRowDel:a=>{let e="你确定要删除所选数据？",t=[];a?(e=`此操作将永久删除产品：“${a.name}”，是否继续?`,t=[a.id]):t=s.ids,0!==t.length?y.confirm(e,"提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((()=>{f.log["delete"](t).then((()=>{b.success("删除成功"),r()}))}))["catch"]((()=>{})):b.error("请选择要删除的数据。")},addDicRef:a,editDicRef:i,queryRef:d,detailRef:o,onOpenDetailDic:a=>{o.value.openDialog(a)},onOpenAddDic:()=>{i.value.openDialog()},onOpenEditDic:a=>{i.value.openDialog(a)},typeList:r,resetQuery:a=>{a&&(a.resetFields(),r())},handleSelectionChange:a=>{s.ids=a.map((a=>a.id))},...n(s)}}}),_={"class":"page"};var R=h(w,[["render",function(a,e,t,l,n,f){const D=s("el-date-picker"),h=s("el-form-item"),b=s("ele-Search"),y=s("el-icon"),w=s("el-button"),R=s("ele-Refresh"),k=s("ele-Delete"),v=s("el-form"),C=s("el-table-column"),L=s("el-tag"),x=s("el-table"),S=s("pagination"),z=s("el-card"),T=s("EditDic"),Y=s("DetailDic"),j=r("auth"),O=r("col"),q=r("loading");return p(),i("div",_,[o(z,{shadow:"nover"},{"default":d((()=>[o(v,{model:a.tableData.param,ref:"queryRef",inline:"","label-width":"68px"},{"default":d((()=>[o(h,{label:"创建时间",prop:"dateRange"},{"default":d((()=>[o(D,{modelValue:a.tableData.param.dateRange,"onUpdate:modelValue":e[0]||(e[0]=e=>a.tableData.param.dateRange=e),style:{width:"240px"},"value-format":"YYYY-MM-DD",type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])),_:1}),o(h,null,{"default":d((()=>[o(w,{type:"primary","class":"ml10",onClick:a.typeList},{"default":d((()=>[o(y,null,{"default":d((()=>[o(b)])),_:1}),u(" 查询 ")])),_:1},8,["onClick"]),o(w,{onClick:e[1]||(e[1]=e=>a.resetQuery(a.queryRef))},{"default":d((()=>[o(y,null,{"default":d((()=>[o(R)])),_:1}),u(" 重置 ")])),_:1}),c((p(),g(w,{type:"info","class":"ml10",onClick:e[2]||(e[2]=e=>a.onRowDel(null))},{"default":d((()=>[o(y,null,{"default":d((()=>[o(k)])),_:1}),u(" 删除 ")])),_:1})),[[j,"del"]])])),_:1})])),_:1},8,["model"]),c((p(),g(x,{data:a.tableData.data,style:{width:"100%"},onSelectionChange:a.handleSelectionChange},{"default":d((()=>[o(C,{type:"selection",width:"55",align:"center"}),c(o(C,{label:"ID",align:"center",prop:"id",width:"100"},null,512),[[O,"ID"]]),c(o(C,{label:"标题",prop:"title",align:"center","show-overflow-tooltip":""},null,512),[[O,"title"]]),c(o(C,{label:"发送方式",prop:"gateway",align:"center","show-overflow-tooltip":""},null,512),[[O,"title"]]),c((p(),g(C,{prop:"status",label:"发送状态",align:"center"},{"default":d((a=>[a.row.status?(p(),g(L,{key:0,type:"success",size:"small"},{"default":d((()=>[u("发送成功")])),_:1})):(p(),g(L,{key:1,type:"info",size:"small"},{"default":d((()=>[u("发送失败")])),_:1}))])),_:1})),[[O,"status"]]),c(o(C,{prop:"sendTime",label:"发送时间",align:"center"},null,512),[[O,"createdAt"]]),c((p(),g(C,{label:"操作",width:"150",align:"center",fixed:"right"},{"default":d((e=>[c((p(),g(w,{size:"small",text:"",type:"primary",onClick:t=>a.onOpenDetailDic(e.row)},{"default":d((()=>[u("详情")])),_:2},1032,["onClick"])),[[j,"detail"]])])),_:1})),[[O,"handle"]])])),_:1},8,["data","onSelectionChange"])),[[q,a.tableData.loading]]),c(o(S,{total:a.tableData.total,page:a.tableData.param.pageNum,"onUpdate:page":e[3]||(e[3]=e=>a.tableData.param.pageNum=e),limit:a.tableData.param.pageSize,"onUpdate:limit":e[4]||(e[4]=e=>a.tableData.param.pageSize=e),onPagination:a.typeList},null,8,["total","page","limit","onPagination"]),[[m,a.tableData.total>0]])])),_:1}),o(T,{ref:"editDicRef",onDataList:a.typeList},null,8,["onDataList"]),o(Y,{ref:"detailRef",onDataList:a.typeList},null,8,["onDataList"])])}]]);export{R as default};