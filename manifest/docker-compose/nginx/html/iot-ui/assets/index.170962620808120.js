import{d as a,h as e,a1 as t,k as l,aa as o,a as i,Y as n,S as d,ah as p,ar as r,o as s,W as u,T as m,R as c,V as f,Z as D}from"./vue.1709626208081.js";import{a as g}from"./index.170962620808110.js";import b from"./edit.1709626208081.js";import y from"./detail.1709626208081.js";import{_ as h}from"./index.1709626208081.js";/* empty css                     */const w=a({name:"log",components:{EditDic:b,DetailDic:y},setup(){const a=e(),i=e(),n=e(),d=e(),p=t({ids:[],tableData:{data:[],total:0,loading:!1,param:{pageNum:1,pageSize:10,status:"",dateRange:[]}}}),r=()=>{p.tableData.loading=!0,g.log.getList(p.tableData.param).then((a=>{p.tableData.data=a.list,p.tableData.total=a.Total}))["finally"]((()=>p.tableData.loading=!1))};l((()=>{r()}));return{addDicRef:a,editDicRef:i,queryRef:d,detailRef:n,onOpenDetailDic:a=>{n.value.openDialog(a)},onOpenAddDic:()=>{i.value.openDialog()},onOpenEditDic:a=>{i.value.openDialog(a)},typeList:r,resetQuery:a=>{a&&(a.resetFields(),r())},handleSelectionChange:a=>{p.ids=a.map((a=>a.id))},...o(p)}}}),v={"class":"page"},_={key:0},k={key:1};var R=h(w,[["render",function(a,e,t,l,o,g){const b=p("el-date-picker"),y=p("el-form-item"),h=p("el-option"),w=p("el-select"),R=p("ele-Search"),x=p("el-icon"),L=p("el-button"),z=p("ele-Refresh"),C=p("el-form"),V=p("el-table-column"),j=p("el-tag"),S=p("el-table"),N=p("pagination"),O=p("EditDic"),Y=p("DetailDic"),E=p("el-card"),K=r("col"),U=r("auth"),q=r("loading");return s(),i("div",v,[n(E,{shadow:"nover"},{"default":d((()=>[n(C,{model:a.tableData.param,ref:"queryRef",inline:"","label-width":"68px"},{"default":d((()=>[n(y,{label:"创建时间",prop:"dateRange"},{"default":d((()=>[n(b,{modelValue:a.tableData.param.dateRange,"onUpdate:modelValue":e[0]||(e[0]=e=>a.tableData.param.dateRange=e),style:{width:"240px"},"value-format":"YYYY-MM-DD",type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])),_:1}),n(y,{label:"告警状态",prop:"status",style:{width:"200px"}},{"default":d((()=>[n(w,{modelValue:a.tableData.param.status,"onUpdate:modelValue":e[1]||(e[1]=e=>a.tableData.param.status=e),placeholder:"告警状态",clearable:"",style:{width:"240px"}},{"default":d((()=>[n(h,{label:"未处理",value:0}),n(h,{label:"已处理",value:1}),n(h,{label:"已忽略",value:2})])),_:1},8,["modelValue"])])),_:1}),n(y,null,{"default":d((()=>[n(L,{type:"primary","class":"ml10",onClick:a.typeList},{"default":d((()=>[n(x,null,{"default":d((()=>[n(R)])),_:1}),u(" 查询 ")])),_:1},8,["onClick"]),n(L,{onClick:e[2]||(e[2]=e=>a.resetQuery(a.queryRef))},{"default":d((()=>[n(x,null,{"default":d((()=>[n(z)])),_:1}),u(" 重置 ")])),_:1})])),_:1})])),_:1},8,["model"]),m((s(),c(S,{data:a.tableData.data,style:{width:"100%"},"max-height":"calc(100vh  - 255px)"},{"default":d((()=>[m(n(V,{label:"ID",align:"center",prop:"id",width:"100"},null,512),[[K,"ID"]]),m((s(),c(V,{label:"告警类型",prop:"type",width:"120","show-overflow-tooltip":""},{"default":d((a=>[1==a.row.type?(s(),i("span",_,"规则告警")):(s(),i("span",k,"设备自主告警"))])),_:1})),[[K,"type"]]),m(n(V,{label:"规则级别",prop:"alarmLevel.name",width:"100",align:"center","show-overflow-tooltip":""},null,512),[[K,"alarmLevel"]]),m(n(V,{label:"规则名称",prop:"ruleName","show-overflow-tooltip":""},null,512),[[K,"ruleName"]]),m(n(V,{label:"产品标识",prop:"productKey","show-overflow-tooltip":""},null,512),[[K,"productKey"]]),m(n(V,{label:"设备标识",prop:"deviceKey","show-overflow-tooltip":""},null,512),[[K,"deviceKey"]]),m((s(),c(V,{prop:"status",label:"告警状态",width:"100",align:"center"},{"default":d((a=>[0==a.row.status?(s(),c(j,{key:0,type:"danger",size:"small"},{"default":d((()=>[u("未处理")])),_:1})):f("",!0),1==a.row.status?(s(),c(j,{key:1,type:"success",size:"small"},{"default":d((()=>[u("已处理")])),_:1})):f("",!0),2==a.row.status?(s(),c(j,{key:2,type:"info",size:"small"},{"default":d((()=>[u("已忽略")])),_:1})):f("",!0)])),_:1})),[[K,"status"]]),m(n(V,{prop:"createdAt",label:"告警时间",align:"center",width:"160"},null,512),[[K,"createdAt"]]),m((s(),c(V,{label:"操作",width:"140",align:"center",fixed:"right"},{"default":d((e=>[m((s(),c(L,{size:"small",text:"",type:"primary",onClick:t=>a.onOpenDetailDic(e.row)},{"default":d((()=>[u("详情")])),_:2},1032,["onClick"])),[[U,"detail"]]),0==e.row.status?m((s(),c(L,{key:0,size:"small",text:"",type:"warning",onClick:t=>a.onOpenEditDic(e.row)},{"default":d((()=>[u("处理")])),_:2},1032,["onClick"])),[[U,"edit"]]):f("",!0)])),_:1})),[[K,"handle"]])])),_:1},8,["data"])),[[q,a.tableData.loading]]),m(n(N,{total:a.tableData.total,page:a.tableData.param.pageNum,"onUpdate:page":e[3]||(e[3]=e=>a.tableData.param.pageNum=e),limit:a.tableData.param.pageSize,"onUpdate:limit":e[4]||(e[4]=e=>a.tableData.param.pageSize=e),onPagination:a.typeList},null,8,["total","page","limit","onPagination"]),[[D,a.tableData.total>0]]),n(O,{ref:"editDicRef",onDataList:a.typeList},null,8,["onDataList"]),n(Y,{ref:"detailRef",onDataList:a.typeList},null,8,["onDataList"])])),_:1})])}]]);export{R as default};