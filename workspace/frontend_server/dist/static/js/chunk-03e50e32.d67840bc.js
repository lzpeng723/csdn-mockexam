(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03e50e32"],{"01ea":function(e,t,l){"use strict";l.d(t,"b",(function(){return o})),l.d(t,"d",(function(){return r})),l.d(t,"c",(function(){return i})),l.d(t,"a",(function(){return a}));var r=["TINYINT","INT","BIGINT","DATE","DATETIME","CHAR","VARCHAR","TEXT","LONGTEXT"],i=["DATE","DATETIME","TEXT","LONGTEXT"],a=[{type:"text",label:"单行文本(text)"},{type:"radio",label:"单选(radio)"},{type:"checkbox",label:"多选(checkbox)"},{type:"select",label:"下拉框(select))"},{type:"date",label:"日期(date)"},{type:"datetime",label:"日期和时间(datetime)"},{type:"email",label:"邮箱(email)"},{type:"textarea",label:"多行文本(textarea)"},{type:"number",label:"数字(number)"},{type:"password",label:"密码(password)"},{type:"selectmultiple",label:"多行下拉框(select_multiple)"}],o=["radio","checkbox","select","selectmultiple"]},"83c7":function(e,t,l){"use strict";l.r(t);var r=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"wrap"},[l("header",[l("div",{staticClass:"input_box"},[l("el-input",{staticStyle:{width:"224px"},attrs:{size:"medium",clearable:"",placeholder:"字段别名"},model:{value:e.fieldTemp,callback:function(t){e.fieldTemp="string"===typeof t?t.trim():t},expression:"fieldTemp"}})],1),l("div",{staticClass:"btn_box"},[l("el-button",{staticClass:"filter-item",attrs:{size:"small",type:"primary",icon:"el-icon-search"},on:{click:e.searchData}},[e._v(" 搜索 ")]),l("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit",size:"small"},on:{click:e.modeAdd}},[e._v(" 添加 ")])],1)]),l("div",{staticClass:"main"},[l("div",{staticClass:"main-body"},[l("div",{staticClass:"mian-body-table"},[l("el-table",{ref:"ruleClockList",staticStyle:{width:"100%"},attrs:{data:e.tableData.filter((function(e){return 1==e.is_form})),"cell-style":{"padding-top":"12px","padding-bottom":"12px"},"default-sort":{prop:"create_time",order:"descending"}}},[l("el-table-column",{attrs:{prop:"guid",label:"ID",width:"150","show-overflow-tooltip":""}}),l("el-table-column",{attrs:{prop:"field_name",label:"字段别名","show-overflow-tooltip":""}}),l("el-table-column",{attrs:{prop:"field",label:"字段名","show-overflow-tooltip":""}}),l("el-table-column",{attrs:{label:"输入框类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.input_type?t.row.input_type:"-")+" ")]}}])}),l("el-table-column",{attrs:{prop:"type",label:"字段类型","show-overflow-tooltip":""}}),l("el-table-column",{attrs:{label:"是否必填"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(1==t.row.required?"是":"否")+" ")]}}])}),l("el-table-column",{attrs:{label:"操作",width:"300",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("div",{staticClass:"table-buttom"},[l("el-button",{staticStyle:{"margin-right":"10px"},attrs:{size:"mini",plain:""},on:{click:function(l){return e.modeEdit(t.row)}}},[e._v("编辑")]),l("el-popconfirm",{attrs:{"confirm-button-text":"确认","cancel-button-text":"不用了",icon:"el-icon-info","icon-color":"red",title:"是否确认删除"},on:{onConfirm:function(l){return e.delFieldHandle(t.row)}}},[l("el-button",{attrs:{slot:"reference",size:"mini",type:"danger",disabled:"_id"==t.row.field},slot:"reference"},[e._v("删除")])],1)],1)]}}])})],1),l("div",{staticClass:"table-pagination"},[l("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[5,10,30,50],"page-size":e.size,layout:"total, sizes, prev, pager, next, jumper",total:e.num},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)])]),l("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"760px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[l("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"130px"}},[l("div",{staticClass:"divider-box"},[l("span",{staticClass:"divider-title"},[e._v("显示设置")]),l("el-form-item",{attrs:{label:"字段别名",prop:"field_name"}},[l("el-input",{attrs:{placeholder:"请输入字段别名称"},model:{value:e.ruleForm.field_name,callback:function(t){e.$set(e.ruleForm,"field_name","string"===typeof t?t.trim():t)},expression:"ruleForm.field_name"}})],1),l("el-form-item",{attrs:{label:"必填",prop:"required"}},[l("el-radio-group",{attrs:{disabled:!e.isAdd},model:{value:e.ruleForm.required,callback:function(t){e.$set(e.ruleForm,"required",t)},expression:"ruleForm.required"}},[l("el-radio",{attrs:{label:1}},[e._v("是")]),l("el-radio",{attrs:{label:2}},[e._v("否")])],1)],1),l("el-form-item",{attrs:{label:"显示类型",prop:"input_type"}},[l("el-select",{attrs:{filterable:"",placeholder:"请选择"},on:{change:e.isTypeChange},model:{value:e.ruleForm.input_type,callback:function(t){e.$set(e.ruleForm,"input_type",t)},expression:"ruleForm.input_type"}},e._l(e.inputTypeList,(function(e,t){return l("el-option",{key:t,attrs:{label:e.label,value:e.type}})})),1)],1),e.needOption.includes(e.ruleForm.input_type)?l("el-form-item",{attrs:{label:"输入选项",prop:"option"}},[l("el-input",{attrs:{type:"textarea",placeholder:"不同选项以##号隔开"},model:{value:e.ruleForm.option,callback:function(t){e.$set(e.ruleForm,"option",t)},expression:"ruleForm.option"}})],1):e._e(),l("el-form-item",{attrs:{label:"输入提示",prop:"placeholder"}},[l("el-input",{attrs:{type:"textarea",placeholder:"请输入字段提示"},model:{value:e.ruleForm.placeholder,callback:function(t){e.$set(e.ruleForm,"placeholder",t)},expression:"ruleForm.placeholder"}})],1)],1),l("div",{staticClass:"divider-box",staticStyle:{"margin-top":"38px"}},[l("span",{staticClass:"divider-title"},[e._v("数据表设置")]),l("el-form-item",{attrs:{label:"名",prop:"field"}},[l("el-input",{attrs:{disabled:!e.isAdd,placeholder:"请输入数字字母下划线"},model:{value:e.ruleForm.field,callback:function(t){e.$set(e.ruleForm,"field","string"===typeof t?t.trim():t)},expression:"ruleForm.field"}})],1),l("el-form-item",{attrs:{label:"类型",prop:"type"}},[l("el-select",{attrs:{filterable:"",disabled:!e.isAdd,placeholder:"请选择"},on:{change:e.typeChange},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},e._l(e.typeList,(function(e,t){return l("el-option",{key:t,attrs:{label:e,value:e}})})),1)],1),e.notNeedLen.includes(e.ruleForm.type)?e._e():l("el-form-item",{attrs:{label:"长度",prop:"field_length"}},[l("el-input",{attrs:{disabled:!e.isAdd,placeholder:"根据type字段类型,酌情填写，若该字段不需要长度，请一定保证为空"},model:{value:e.ruleForm.field_length,callback:function(t){e.$set(e.ruleForm,"field_length",e._n(t))},expression:"ruleForm.field_length"}})],1),l("el-form-item",{attrs:{label:"不是null",prop:"allow_empty"}},[l("el-radio-group",{attrs:{disabled:!e.isAdd},model:{value:e.ruleForm.allow_empty,callback:function(t){e.$set(e.ruleForm,"allow_empty",t)},expression:"ruleForm.allow_empty"}},[l("el-radio",{attrs:{label:2}},[e._v("是")]),l("el-radio",{attrs:{label:1}},[e._v("否")])],1)],1)],1)]),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),l("el-button",{attrs:{type:"primary",loading:e.btnLoding},on:{click:e.sureAdd}},[e._v("确 定")])],1)],1)],1)},i=[],a=l("5530"),o=(l("caad"),l("2532"),l("d3b7"),l("b775"));function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(o["a"])({url:"/field/add",method:"post",data:e})}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(o["a"])({url:"/field/update",method:"post",data:e})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(o["a"])({url:"/field/del",method:"post",data:e})}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(o["a"])({url:"/field/list",method:"post",data:e})}var c=l("01ea"),p={name:"OptionList",data:function(){var e=function(e,t,l){var r=/^\w+$/g;return t?r.test(t)?void l():l(new Error("只能是数字、字母或下划线")):l(new Error("该字段不能为空"))},t=function(e,t,l){var r=/^[a-zA-Z]+$/g;return t?r.test(t)?void l():l(new Error("只能是字母")):l(new Error("该字段不能为空"))},l=function(e,t,l){var r=/^[1-9]+$/g;if(""!==t&&!r.test(t))return l(new Error("该字段必须为大于0的数值"));l()};return{typeList:c["d"],notNeedLen:c["c"],inputTypeList:c["a"],needOption:c["b"],isAdd:!0,dialogVisible:!1,field:"",fieldTemp:"",mode_guid:"",btnLoding:!1,address:"",tableData:[],loading:!1,size:10,num:10,currentPage:1,rules:{field_name:[{required:!0,message:"请输入字段别名",trigger:"blur"}],field:[{required:!0,validator:e,trigger:"blur"}],type:[{required:!0,validator:t,trigger:"blur"}],is_form:[{required:!0,message:"字段为必填",trigger:"blur"}],required:[{required:!0,message:"字段为必填",trigger:"blur"}],allow_empty:[{required:!0,message:"字段为必填",trigger:"blur"}],option:[{required:!0,message:"字段为必填",trigger:"blur"}],input_type:[{required:!0,validator:t,trigger:"blur"}],field_length:[{validator:l,trigger:"blur"}]},ruleForm:{field:"",field_name:"",type:"varchar",required:1,field_length:255,input_type:"",allow_empty:1,placeholder:"",option:"选项一##选项二"}}},created:function(){this.mode_guid=this.$route.query.id,this.init()},methods:{typeChange:function(e){this.notNeedLen.includes(e)&&(this.ruleForm.field_length="")},delFieldHandle:function(e){var t=this;this.loading=!0,d({guid:e.guid}).then((function(e){t.$message({message:"删除成功",type:"success"}),t.loading=!1,t.init()})).catch((function(){t.loading=!1}))},init:function(e){var t=this;this.loading=!0;var l=e||this.currentPage;this.currentPage=l;var r={page:l,size:this.size,mode_guid:this.mode_guid};this.field&&(r["field_name"]=this.field),u(r).then((function(e){t.tableData=e.list,t.num=e.count})).finally((function(){t.loading=!1}))},modeEdit:function(e){var t=this;this.ruleForm=Object(a["a"])({},e),this.$nextTick((function(){t.$refs.ruleForm.clearValidate()})),this.isAdd=!1,this.dialogVisible=!0},modeAdd:function(){var e=this;this.ruleForm={field:"",field_name:"",type:"varchar",required:1,field_length:255,input_type:"",allow_empty:1,placeholder:"",option:"选项一##选项二"},this.$nextTick((function(){e.$refs.ruleForm.clearValidate()})),this.isAdd=!0,this.dialogVisible=!0},isFormChange:function(e){2===e&&2===this.ruleForm.allow_empty&&(this.ruleForm.allow_empty=1)},isTypeChange:function(e){c["b"].includes(e)?this.ruleForm.option="选项一##选项二":this.ruleForm.option=""},searchData:function(){this.field=this.fieldTemp,this.init(1)},handleSizeChange:function(e){this.size=e,this.init()},handleCurrentChange:function(e){this.currentPage=e,this.init()},sureAdd:function(){var e=this;this.btnLoding=!0,this.$refs.ruleForm.validate((function(t){if(!t)return console.log("error submit!!"),e.btnLoding=!1,!1;if(2===e.ruleForm.required&&2===e.ruleForm.allow_empty)return e.$message.error("非必填时请允许字段为空"),void(e.btnLoding=!1);var l=e.isAdd?Object(a["a"])(Object(a["a"])({},e.ruleForm),{},{mode_guid:e.mode_guid}):Object(a["a"])({},{input_type:e.ruleForm.input_type,field_name:e.ruleForm.field_name,option:e.ruleForm.option,placeholder:e.ruleForm.placeholder,guid:e.ruleForm.guid}),r=e.isAdd?n:s;r(Object(a["a"])({},l)).then((function(){e.dialogVisible=!1,e.$message({message:"操作成功",type:"success"}),e.init()})).finally((function(){e.btnLoding=!1}))}))}}},m=p,f=(l("d682"),l("2877")),b=Object(f["a"])(m,r,i,!1,null,"f50422aa",null);t["default"]=b.exports},b775:function(e,t,l){"use strict";l("d3b7");var r=l("bc3a"),i=l.n(r),a=l("5c96"),o=i.a.create({baseURL:"http://localhost:8080",timeout:5e3});o.interceptors.response.use((function(e){var t=e.data;return 200!==t.code?(Object(a["Message"])({message:t.data||"Error",type:"error",duration:5e3}),Promise.reject(new Error(t.data||"Error"))):t.data}),(function(e){return console.log("err"+e),Object(a["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)})),t["a"]=o},cb4d:function(e,t,l){},d682:function(e,t,l){"use strict";l("cb4d")}}]);