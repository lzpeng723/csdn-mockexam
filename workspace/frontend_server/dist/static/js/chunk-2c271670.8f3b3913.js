(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c271670"],{"01ea":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"d",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return o}));var a=["TINYINT","INT","BIGINT","DATE","DATETIME","CHAR","VARCHAR","TEXT","LONGTEXT"],r=["DATE","DATETIME","TEXT","LONGTEXT"],o=[{type:"text",label:"单行文本(text)"},{type:"radio",label:"单选(radio)"},{type:"checkbox",label:"多选(checkbox)"},{type:"select",label:"下拉框(select))"},{type:"date",label:"日期(date)"},{type:"datetime",label:"日期和时间(datetime)"},{type:"email",label:"邮箱(email)"},{type:"textarea",label:"多行文本(textarea)"},{type:"number",label:"数字(number)"},{type:"password",label:"密码(password)"},{type:"selectmultiple",label:"多行下拉框(select_multiple)"}],n=["radio","checkbox","select","selectmultiple"]},4604:function(e,t,i){},"7e4e":function(e,t,i){"use strict";i("d400")},"8ef9":function(e,t,i){"use strict";i("4604")},"90fe":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"wrap"},[i("header",[i("div",{staticClass:"input_box"},[i("el-input",{staticStyle:{width:"224px"},attrs:{size:"medium",clearable:"",placeholder:"表单名称"},model:{value:e.modeNameTemp,callback:function(t){e.modeNameTemp="string"===typeof t?t.trim():t},expression:"modeNameTemp"}}),i("el-select",{staticStyle:{width:"224px"},attrs:{clearable:"",size:"medium",placeholder:"选择状态"},model:{value:e.statusTemp,callback:function(t){e.statusTemp=t},expression:"statusTemp"}},[i("el-option",{attrs:{label:"启动",value:1}}),i("el-option",{attrs:{label:"禁用",value:2}})],1)],1),i("div",{staticClass:"btn_box"},[i("el-button",{staticClass:"filter-item",attrs:{size:"small",type:"primary",icon:"el-icon-search"},on:{click:e.searchData}},[e._v(" 搜索 ")]),i("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit",size:"small"},on:{click:e.modeAdd}},[e._v(" 添加 ")])],1)]),i("div",{staticClass:"main"},[i("div",{staticClass:"main-body"},[i("div",{staticClass:"mian-body-table"},[i("el-table",{ref:"ruleClockList",staticStyle:{width:"100%"},attrs:{data:e.tableData,"cell-style":{"padding-top":"12px","padding-bottom":"12px"},"default-sort":{prop:"create_time",order:"descending"}}},[i("el-table-column",{attrs:{prop:"guid",label:"ID",width:"100","show-overflow-tooltip":""}}),i("el-table-column",{attrs:{prop:"mode_name",label:"表单名称","show-overflow-tooltip":""}}),i("el-table-column",{attrs:{prop:"table_name",label:"表名","show-overflow-tooltip":""}}),i("el-table-column",{attrs:{label:"状态","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{style:{color:1==t.row.status?"#0486FE":"#FE4A49"}},[e._v(e._s(1==t.row.status?"已启用":"已禁用"))])]}}])}),i("el-table-column",{attrs:{label:"创建时间","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.created_time?e.parseTime(t.row.created_time):"-")+" ")]}}])}),i("el-table-column",{attrs:{label:"操作",width:"530",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("div",{staticClass:"table-buttom"},[i("el-button",{attrs:{size:"mini",plain:""},on:{click:function(i){return e.newForm(t.row.guid)}}},[e._v("转发")]),i("el-button",{attrs:{size:"mini",plain:""},on:{click:function(i){return e.$router.push({name:"Data",query:{id:t.row.guid}})}}},[e._v("已收信息")]),i("el-button",{attrs:{size:"mini",plain:""},on:{click:function(i){return e.$router.push({name:"Field",query:{id:t.row.guid}})}}},[e._v("字段管理")]),i("el-button",{attrs:{size:"mini",plain:""},on:{click:function(i){return e.previewHandle(t.row)}}},[e._v("预览")]),i("el-button",{attrs:{size:"mini",plain:""},on:{click:function(i){return e.modeEdit(t.row)}}},[e._v("编辑")]),i("el-button",{staticStyle:{"margin-right":"10px"},attrs:{size:"mini",type:1==t.row.status?"primary":"success"},on:{click:function(i){return e.changeStatus(t.row)}}},[e._v(e._s(1==t.row.status?"禁用":"启用"))]),i("el-popconfirm",{attrs:{"confirm-button-text":"确认","cancel-button-text":"不用了",icon:"el-icon-info","icon-color":"red",title:"是否确认删除"},on:{confirm:function(i){return e.delModeHandle(t.row)}}},[i("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},slot:"reference"},[e._v("删除")])],1)],1)]}}])})],1),i("div",{staticClass:"table-pagination"},[i("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[5,10,30,50],"page-size":e.size,layout:"total, sizes, prev, pager, next, jumper",total:e.num},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)])]),i("el-dialog",{attrs:{title:e.isModeAdd?"添加表单":"修改表单",visible:e.dialogVisible,width:"738px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("div",{staticClass:"form-dis"},[i("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"名称",prop:"mode_name"}},[i("el-input",{attrs:{placeholder:"请输入"},model:{value:e.ruleForm.mode_name,callback:function(t){e.$set(e.ruleForm,"mode_name",t)},expression:"ruleForm.mode_name"}})],1),i("el-form-item",{attrs:{label:"表名",prop:"table_name"}},[i("el-input",{attrs:{placeholder:"请输入，以字母开头，字母或数字或下划线开头",disabled:!e.isModeAdd},model:{value:e.ruleForm.table_name,callback:function(t){e.$set(e.ruleForm,"table_name",t)},expression:"ruleForm.table_name"}})],1),i("el-form-item",{attrs:{label:"描述",prop:"describe"}},[i("el-input",{attrs:{rows:3,placeholder:"请输入",type:"textarea"},model:{value:e.ruleForm.describe,callback:function(t){e.$set(e.ruleForm,"describe",t)},expression:"ruleForm.describe"}})],1)],1)],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary",loading:e.btnLoding},on:{click:e.sureAdd}},[e._v("确 定")])],1)]),i("el-dialog",{attrs:{title:e.modeShowName,visible:e.dialogShowVisible,width:"738px"},on:{"update:visible":function(t){e.dialogShowVisible=t}}},[i("MyForm",{attrs:{"mode-guid":e.modeGuid},on:{fail:e.closePreview}})],1)],1)},r=[],o=i("5530"),n=(i("d3b7"),i("b775"));function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["a"])({url:"/mode/create",method:"post",data:e})}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["a"])({url:"/mode/update",method:"post",data:e})}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["a"])({url:"/mode/status",method:"post",data:e})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["a"])({url:"/mode/del",method:"post",data:e})}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["a"])({url:"/mode/list",method:"post",data:e})}var m=i("53ca");i("ac1f"),i("5319"),i("4d63"),i("25f0"),i("4d90"),i("1276"),i("159b");function p(e,t){if(0===arguments.length||!e)return null;var i,a="{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(m["a"])(e)?i=e:("string"===typeof e&&(e=/^[0-9]+$/.test(e)?parseInt(e):e.replace(new RegExp(/-/gm),"/")),"number"===typeof e&&10===e.toString().length&&(e*=1e3),i=new Date(e));var r={y:i.getFullYear(),m:i.getMonth()+1,d:i.getDate(),h:i.getHours(),i:i.getMinutes(),s:i.getSeconds(),a:i.getDay()},o=a.replace(/{([ymdhisa])+}/g,(function(e,t){var i=r[t];return"a"===t?["日","一","二","三","四","五","六"][i]:i.toString().padStart(2,"0")}));return o}function f(e,t){e=10===(""+e).length?1e3*parseInt(e):+e;var i=new Date(e),a=Date.now(),r=(a-i)/1e3;return r<30?"刚刚":r<3600?Math.ceil(r/60)+"分钟前":r<86400?Math.ceil(r/3600)+"小时前":r<172800?"1天前":t?p(e):i.getMonth()+1+"月"+i.getDate()+"日"+i.getHours()+"时"+i.getMinutes()+"分"}var b=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"wrap"},[i("div",{staticClass:"form"},[i("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[e._l(e.fieldList,(function(t){return i("el-form-item",{key:t.guid,attrs:{label:t.field_name,prop:t.field}},["select"===t.input_type||"selectmultiple"===t.input_type?i("el-select",{attrs:{multiple:"selectmultiple"===t.input_type,clearable:"",placeholder:t.placeholder},model:{value:e.ruleForm[t.field],callback:function(i){e.$set(e.ruleForm,t.field,i)},expression:"ruleForm[item.field]"}},e._l(t.option.split("##"),(function(e,t){return i("el-option",{key:t,attrs:{label:e,value:e}})})),1):e._e(),"radio"===t.input_type?i("el-radio-group",{model:{value:e.ruleForm[t.field],callback:function(i){e.$set(e.ruleForm,t.field,i)},expression:"ruleForm[item.field]"}},e._l(t.option.split("##"),(function(a,r){return i("el-radio",{key:r,attrs:{label:a,name:e.ruleForm[t.field]}})})),1):e._e(),"checkbox"===t.input_type?i("el-checkbox-group",{model:{value:e.ruleForm[t.field],callback:function(i){e.$set(e.ruleForm,t.field,i)},expression:"ruleForm[item.field]"}},e._l(t.option.split("##"),(function(e,a){return i("el-checkbox",{key:a,attrs:{label:e,name:t.field}})})),1):e._e(),e.needOption.includes(t.input_type)?e._e():i("el-input",{attrs:{type:t.input_type||"text",placeholder:t.placeholder},model:{value:e.ruleForm[t.field],callback:function(i){e.$set(e.ruleForm,t.field,i)},expression:"ruleForm[item.field]"}})],1)})),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.showPush,expression:"showPush"}]},[i("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("提交")]),i("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],2)],1)])},h=[],g=(i("caad"),i("2532"),i("c7ea")),v=i("01ea"),_={props:{modeGuid:{type:String,default:"212222",required:!0},showPush:{type:Boolean,default:!1}},data:function(){return{needOption:v["b"],rules:{},loading:!1,btnLoading:!1,ruleForm:{},fieldList:[]}},watch:{modeGuid:{immediate:!0,handler:function(e){this.init()}}},methods:{submitForm:function(e){var t=this;this.btnLoading=!0,this.loading=!0,this.$refs[e].validate((function(i){if(!i)return t.btnLoading=!1,t.loading=!1,console.log("error submit!!"),!1;Object(g["d"])({mode_guid:t.mode_guid,form:Object(o["a"])({},t.changeObjString(t.ruleForm))}).then((function(i){t.$message({type:"success",message:"提交成功"}),t.resetForm(e)})).catch().finally((function(){t.btnLoading=!1,t.loading=!1}))}))},changeObjString:function(e){for(var t in e)if(Object.hasOwnProperty.call(e,t)){var i=e[t];"[object Array]"===Object.prototype.toString.call(i)&&(e[t]=e[t].toString())}return e},resetForm:function(e){this.$refs[e].resetFields()},init:function(){var e=this;this.loading=!0,Object(g["c"])({mode_guid:this.modeGuid}).then((function(t){var i=t||[];if(!i.length)return e.$message.error("该模型没有表单字段，请录入字段后再尝试"),void e.$emit("fail");i.forEach((function(t){"checkbox"!==t.input_type&&"selectmultiple"!==t.input_type||e.$set(e.ruleForm,t.field,[]),e.rules[t.field]=[],1===t.required&&e.rules[t.field].push({required:!0,message:"字段为必填",trigger:"blur"}),t.field_length&&!v["b"].includes(t.input_type)&&e.rules[t.field].push({max:t.field_length,message:"长度最大为 ".concat(t.field_length,"个字符"),trigger:"blur"})})),e.$nextTick((function(){e.loading=!1,e.fieldList=i}))}))}}},y=_,w=i("2877"),F=Object(w["a"])(y,b,h,!1,null,"edac401c",null),x=F.exports,k={name:"TableList",components:{MyForm:x},data:function(){var e=function(e,t,i){var a=/^[a-zA-Z]{1}([a-zA-Z0-9]|[_]){0,}$/g;return t?a.test(t)?void i():i(new Error("以字母开头，字母或数字或下划线组成")):i(new Error("该字段不能为空"))};return{modeGuid:"",modeShowName:"",dialogShowVisible:!1,dialogVisible:!1,isModeAdd:!0,formatTime:f,parseTime:p,modeName:"",btnLoding:!1,modeNameTemp:"",status:"",statusTemp:"",size:10,tableData:[],loading:!1,num:10,currentPage:1,rules:{mode_name:[{required:!0,message:"请输入表单名称",trigger:"blur"}],table_name:[{required:!0,validator:e,trigger:"blur"}],describe:[{min:2,max:255,message:"长度在 2 到  255个字符",trigger:"change"}]},ruleForm:{mode_name:"",table_name:""}}},created:function(){this.init()},methods:{closePreview:function(){this.dialogShowVisible=!1},previewHandle:function(e){this.modeGuid=e.guid,this.modeShowName=e.mode_name,this.dialogShowVisible=!0},newForm:function(e){var t=this.$router.resolve({name:"Form",query:{id:e}});window.open(t.href,"_blank")},changeStatus:function(e){var t=this;this.loading=!0,u({guid:e.guid,status:1===e.status?2:1}).then((function(i){t.$message({message:"修改成功",type:"success"}),t.loading=!1,e.status=1===e.status?2:1})).catch((function(){t.loading=!1,e.status=1===e.status?2:1,t.$message.error("修改失败")}))},delModeHandle:function(e){var t=this;this.loading=!0,d({guid:e.guid}).then((function(e){t.$message({message:"删除成功",type:"success"}),t.loading=!1,t.init()})).catch((function(){t.loading=!1}))},modeEdit:function(e){var t=this;this.ruleForm={guid:e.guid,mode_name:e.mode_name,table_name:e.table_name,describe:e.describe},this.$nextTick((function(){t.$refs.ruleForm.clearValidate()})),this.isModeAdd=!1,this.dialogVisible=!0},modeAdd:function(){var e=this;this.ruleForm={mode_name:"",table_name:""},this.$nextTick((function(){e.$refs.ruleForm.clearValidate()})),this.isModeAdd=!0,this.dialogVisible=!0},searchData:function(){this.modeName=this.modeNameTemp,this.status=this.statusTemp||null,this.init(1)},init:function(e){var t=this;this.loading=!0;var i=e||this.currentPage;this.currentPage=i;var a={page:i,size:this.size};this.modeName&&(a["mode_name"]=this.modeName),this.status&&(a["status"]=this.status),c(a).then((function(e){t.tableData=e.list,t.num=e.count})).finally((function(){t.loading=!1}))},handleSizeChange:function(e){this.size=e,this.init()},handleCurrentChange:function(e){this.currentPage=e,this.init()},sureAdd:function(){var e=this;this.btnLoding=!0,this.$refs.ruleForm.validate((function(t){if(!t)return console.log("error submit!!"),e.btnLoding=!1,!1;var i=e.isModeAdd?Object(o["a"])({},e.ruleForm):{guid:e.ruleForm.guid,mode_name:e.ruleForm.mode_name,describe:e.ruleForm.describe},a=e.isModeAdd?l:s;a(Object(o["a"])({},i)).then((function(){e.dialogVisible=!1,e.$message({message:"操作成功",type:"success"}),e.init()})).finally((function(){e.btnLoding=!1}))}))}}},T=k,$=(i("7e4e"),i("8ef9"),Object(w["a"])(T,a,r,!1,null,"01d1c56d",null));t["default"]=$.exports},b775:function(e,t,i){"use strict";i("d3b7");var a=i("bc3a"),r=i.n(a),o=i("5c96"),n=r.a.create({baseURL:"http://localhost:8080",timeout:5e3});n.interceptors.response.use((function(e){var t=e.data;return 200!==t.code?(Object(o["Message"])({message:t.data||"Error",type:"error",duration:5e3}),Promise.reject(new Error(t.data||"Error"))):t.data}),(function(e){return console.log("err"+e),Object(o["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)})),t["a"]=n},c7ea:function(e,t,i){"use strict";i.d(t,"c",(function(){return r})),i.d(t,"d",(function(){return o})),i.d(t,"b",(function(){return n})),i.d(t,"a",(function(){return l}));var a=i("b775");function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["a"])({url:"/form/get",method:"post",data:e})}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["a"])({url:"/form/push",method:"post",data:e})}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["a"])({url:"/form/header",method:"post",data:e})}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["a"])({url:"/form/table",method:"post",data:e})}},d400:function(e,t,i){}}]);