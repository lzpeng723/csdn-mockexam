(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35c22ee6"],{"01ea":function(e,t,r){"use strict";r.d(t,"d",(function(){return u})),r.d(t,"g",(function(){return l})),r.d(t,"e",(function(){return i})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return a})),r.d(t,"f",(function(){return s})),r.d(t,"a",(function(){return n}));var l=["TINYINT","INT","BIGINT","DATE","DATETIME","CHAR","VARCHAR","TEXT"],i=["DATE","DATETIME","TEXT","LONGTEXT"],o=[{type:"text",label:"单行文本(text)",role:["CHAR","VARCHAR","TEXT"]},{type:"radio",label:"单选(radio)",role:["CHAR","VARCHAR","TEXT"]},{type:"checkbox",label:"多选(checkbox)",role:["CHAR","VARCHAR","TEXT"]},{type:"select",label:"下拉框(select))",role:["CHAR","VARCHAR","TEXT"]},{type:"date",label:"日期(date)",role:["DATE","DATETIME"]},{type:"datetime",label:"日期和时间(datetime)",role:["DATETIME"]},{type:"textarea",label:"多行文本(textarea)",role:["VARCHAR","TEXT"]},{type:"number",label:"数字(number)",role:["INT","BIGINT"]},{type:"password",label:"密码(password)",role:["CHAR","VARCHAR","TEXT"]},{type:"selectmultiple",label:"多选下拉框(select_multiple)",role:["CHAR","VARCHAR","TEXT"]}],a={text:"单行文本",radio:"单选",checkbox:"多选",select:"下拉框",date:"日期",datetime:"日期和时间",textarea:"多行文本",number:"数字",password:"密码",selectmultiple:"多选下拉框"},n=["DATE","DATETIME"],s=["radio","checkbox","date","datetime"],u=["radio","checkbox","select","selectmultiple"]},"4df4":function(e,t,r){"use strict";var l=r("0366"),i=r("7b0b"),o=r("9bdd"),a=r("e95a"),n=r("50c4"),s=r("8418"),u=r("35a1");e.exports=function(e){var t,r,d,c,p,f,m=i(e),b="function"==typeof this?this:Array,g=arguments.length,h=g>1?arguments[1]:void 0,y=void 0!==h,v=u(m),_=0;if(y&&(h=l(h,g>2?arguments[2]:void 0,2)),void 0==v||b==Array&&a(v))for(t=n(m.length),r=new b(t);t>_;_++)f=y?h(m[_],_):m[_],s(r,_,f);else for(c=v.call(m),p=c.next,r=new b;!(d=p.call(c)).done;_++)f=y?o(c,h,[d.value,_],!0):d.value,s(r,_,f);return r.length=_,r}},"6c0b":function(e,t,r){"use strict";r("e33c")},"83c7":function(e,t,r){"use strict";r.r(t);var l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"wrap"},[r("header",[r("div",{staticClass:"input_box"},[r("el-input",{staticStyle:{width:"224px"},attrs:{size:"medium",clearable:"",placeholder:"字段别名"},model:{value:e.fieldTemp,callback:function(t){e.fieldTemp="string"===typeof t?t.trim():t},expression:"fieldTemp"}})],1),r("div",{staticClass:"btn_box"},[r("el-button",{staticClass:"filter-item",attrs:{size:"small",type:"primary",icon:"el-icon-search"},on:{click:e.searchData}},[e._v(" 搜索 ")]),r("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit",size:"small"},on:{click:e.modeAdd}},[e._v(" 添加 ")])],1)]),r("div",{staticClass:"main"},[r("div",{staticClass:"main-body"},[r("div",{staticClass:"mian-body-table"},[r("el-table",{ref:"ruleClockList",staticStyle:{width:"100%"},attrs:{data:e.tableData,"cell-style":{"padding-top":"12px","padding-bottom":"12px"},"default-sort":{prop:"create_time",order:"descending"}}},[r("el-table-column",{attrs:{prop:"field_guid",label:"ID",width:"150","show-overflow-tooltip":""}}),r("el-table-column",{attrs:{prop:"field_name",label:"字段别名","show-overflow-tooltip":""}}),r("el-table-column",{attrs:{prop:"field",label:"字段名","show-overflow-tooltip":""}}),r("el-table-column",{attrs:{label:"输入框类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.input_type?e.inputTypeObj[t.row.input_type]:"-")+" ")]}}])}),r("el-table-column",{attrs:{prop:"type",label:"字段类型","show-overflow-tooltip":""}}),r("el-table-column",{attrs:{label:"是否必填"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(1==t.row.required?"是":"否")+" ")]}}])}),r("el-table-column",{attrs:{label:"是否表单字段"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(1==t.row.required?"是":"否")+" ")]}}])}),r("el-table-column",{attrs:{label:"操作",width:"300",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticClass:"table-buttom"},[r("el-button",{staticStyle:{"margin-right":"10px"},attrs:{size:"mini",plain:"",disabled:"_id"==t.row.field},on:{click:function(r){return e.modeEdit(t.row)}}},[e._v("编辑")]),r("el-popconfirm",{attrs:{"confirm-button-text":"确认","cancel-button-text":"不用了",icon:"el-icon-info","icon-color":"red",title:"是否确认删除"},on:{confirm:function(r){return e.delFieldHandle(t.row)}}},[r("el-button",{attrs:{slot:"reference",size:"mini",type:"danger",disabled:"_id"==t.row.field},slot:"reference"},[e._v("删除")])],1)],1)]}}])})],1),r("div",{staticClass:"table-pagination"},[r("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[5,10,30,50],"page-size":e.size,layout:"total, sizes, prev, pager, next, jumper",total:e.num},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)])]),r("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"760px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"130px"}},[r("div",{staticClass:"divider-box"},[r("span",{staticClass:"divider-title"},[e._v("显示设置")]),r("el-form-item",{attrs:{label:"字段别名",prop:"field_name"}},[r("el-input",{attrs:{placeholder:"请输入字段别名称"},model:{value:e.ruleForm.field_name,callback:function(t){e.$set(e.ruleForm,"field_name","string"===typeof t?t.trim():t)},expression:"ruleForm.field_name"}})],1),r("el-form-item",{attrs:{label:"必填",prop:"required"}},[r("el-radio-group",{attrs:{disabled:!e.isAdd},model:{value:e.ruleForm.required,callback:function(t){e.$set(e.ruleForm,"required",t)},expression:"ruleForm.required"}},[r("el-radio",{attrs:{label:1}},[e._v("是")]),r("el-radio",{attrs:{label:2}},[e._v("否")])],1)],1),r("el-form-item",{attrs:{label:"显示类型",prop:"input_type"}},[r("el-select",{attrs:{filterable:"",placeholder:"请选择"},on:{change:e.isTypeChange},model:{value:e.ruleForm.input_type,callback:function(t){e.$set(e.ruleForm,"input_type",t)},expression:"ruleForm.input_type"}},e._l(e.inputTypeList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.type}})})),1)],1),e.needOption.includes(e.ruleForm.input_type)?r("el-form-item",{attrs:{label:"输入选项",prop:"option"}},[r("el-input",{attrs:{type:"textarea",placeholder:"不同选项以##号隔开"},model:{value:e.ruleForm.option,callback:function(t){e.$set(e.ruleForm,"option",t)},expression:"ruleForm.option"}})],1):e._e(),e.notNeedPla.includes(e.ruleForm.input_type)?e._e():r("el-form-item",{attrs:{label:"输入提示",prop:"placeholder"}},[r("el-input",{attrs:{type:"textarea",placeholder:"请输入字段提示"},model:{value:e.ruleForm.placeholder,callback:function(t){e.$set(e.ruleForm,"placeholder",t)},expression:"ruleForm.placeholder"}})],1)],1),r("div",{staticClass:"divider-box",staticStyle:{"margin-top":"38px"}},[r("span",{staticClass:"divider-title"},[e._v("数据表设置")]),r("el-form-item",{attrs:{label:"名",prop:"field"}},[r("el-input",{attrs:{disabled:!e.isAdd,placeholder:"请输入数字字母下划线"},model:{value:e.ruleForm.field,callback:function(t){e.$set(e.ruleForm,"field","string"===typeof t?t.trim():t)},expression:"ruleForm.field"}})],1),r("el-form-item",{attrs:{label:"类型",prop:"type"}},[r("el-select",{attrs:{filterable:"",disabled:!e.isAdd,placeholder:"请选择"},on:{change:e.typeChange},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},e._l(e.typeList,(function(e,t){return r("el-option",{key:t,attrs:{label:e,value:e}})})),1)],1),e.notNeedLen.includes(e.ruleForm.type)?e._e():r("el-form-item",{attrs:{label:"长度",prop:"field_length"}},[r("el-input",{attrs:{disabled:!e.isAdd,placeholder:"根据type字段类型,酌情填写，若该字段不需要长度，请一定保证为空"},model:{value:e.ruleForm.field_length,callback:function(t){e.$set(e.ruleForm,"field_length",e._n(t))},expression:"ruleForm.field_length"}})],1),r("el-form-item",{attrs:{label:"是否允许为空",prop:"allow_empty"}},[r("el-radio-group",{attrs:{disabled:!e.isAdd||e.allNULL.includes(e.ruleForm.type)},model:{value:e.ruleForm.allow_empty,callback:function(t){e.$set(e.ruleForm,"allow_empty",t)},expression:"ruleForm.allow_empty"}},[r("el-radio",{attrs:{label:1}},[e._v("是")]),r("el-radio",{attrs:{label:2}},[e._v("否")])],1)],1)],1)]),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary",loading:e.btnLoding},on:{click:e.sureAdd}},[e._v("确 定")])],1)],1)],1)},i=[];function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,l=new Array(t);r<t;r++)l[r]=e[r];return l}function a(e){if(Array.isArray(e))return o(e)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function n(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r("fb6a"),r("b0c0");function s(e,t){if(e){if("string"===typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e){return a(e)||n(e)||s(e)||u()}var c=r("5530"),p=(r("dca8"),r("caad"),r("2532"),r("4de4"),r("b775"));function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(p["a"])({url:"/field/add",method:"post",data:e})}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(p["a"])({url:"/field/update",method:"post",data:e})}function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(p["a"])({url:"/field/del",method:"post",data:e})}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(p["a"])({url:"/field/list",method:"post",data:e})}var h=r("01ea"),y={name:"OptionList",data:function(){var e=function(e,t,r){var l=/^\w+$/g;return t?l.test(t)?void r():r(new Error("只能是数字、字母或下划线")):r(new Error("该字段不能为空"))},t=function(e,t,r){var l=/^[a-zA-Z]+$/g;return t?l.test(t)?void r():r(new Error("只能是字母")):r(new Error("该字段不能为空"))},r=function(e,t,r){var l=/^[0-9]+$/g;if(""!==t&&!l.test(t)||0===t)return r(new Error("该字段必须为大于0的数值"));r()};return{typeList:h["g"],notNeedLen:h["e"],inputTypeList:h["b"],inputTypeObj:Object.freeze(h["c"]),notNeedPla:h["f"],needOption:h["d"],allNULL:h["a"],isAdd:!0,dialogVisible:!1,field:"",fieldTemp:"",table_guid:"",btnLoding:!1,address:"",tableData:[],loading:!1,size:10,num:10,currentPage:1,rules:{field_name:[{required:!0,message:"请输入字段别名",trigger:"blur"}],field:[{required:!0,validator:e,trigger:"blur"}],type:[{required:!0,validator:t,trigger:"blur"}],is_form:[{required:!0,message:"字段为必填",trigger:"blur"}],required:[{required:!0,message:"字段为必填",trigger:"blur"}],allow_empty:[{required:!0,message:"字段为必填",trigger:"blur"}],option:[{required:!0,message:"字段为必填",trigger:"blur"}],input_type:[{required:!0,validator:t,trigger:"blur"}],field_length:[{validator:r,trigger:"blur"}]},ruleForm:{field:"",field_name:"",type:"",required:1,field_length:null,input_type:"",allow_empty:1,placeholder:"",option:"选项一##选项二"}}},created:function(){this.table_guid=this.$route.params.id,this.init()},methods:{typeChange:function(e){this.notNeedLen.includes(e)&&(this.ruleForm.field_length=null),this.allNULL.includes(e)&&(this.ruleForm.allow_empty=1)},delFieldHandle:function(e){var t=this;this.loading=!0,b({field_guid:e.field_guid}).then((function(e){t.$message({message:"删除成功",type:"success"}),t.loading=!1,t.init()})).catch((function(){t.loading=!1}))},init:function(e){var t=this;this.loading=!0;var r=e||this.currentPage;this.currentPage=r;var l={page:r,size:this.size,table_guid:this.table_guid};this.field&&(l["field_name"]=this.field),g(l).then((function(e){t.tableData=e.list,t.num=e.count})).finally((function(){t.loading=!1}))},modeEdit:function(e){var t=this;this.ruleForm=Object(c["a"])({},e),this.$nextTick((function(){t.$refs.ruleForm.clearValidate()})),this.isAdd=!1,this.dialogVisible=!0},modeAdd:function(){var e=this;this.ruleForm={field:"",field_name:"",type:"",required:1,field_length:null,input_type:"",allow_empty:1,placeholder:"",option:"选项一##选项二"},this.$nextTick((function(){e.$refs.ruleForm.clearValidate()})),this.isAdd=!0,this.dialogVisible=!0},isFormChange:function(e){2===e&&2===this.ruleForm.allow_empty&&(this.ruleForm.allow_empty=1)},isTypeChange:function(e){var t=h["b"].filter((function(t){return t.type===e}))[0];this.typeList=t?d(t.role):h["g"],this.ruleForm.type="",this.ruleForm.field_length=null,h["f"].includes(e)&&(this.ruleForm.placeholder=null),h["d"].includes(e)?this.ruleForm.option="选项一##选项二":this.ruleForm.option=null},searchData:function(){this.field=this.fieldTemp,this.init(1)},handleSizeChange:function(e){this.size=e,this.init(1)},handleCurrentChange:function(e){this.currentPage=e,this.init()},sureAdd:function(){var e=this;this.btnLoding=!0,this.$refs.ruleForm.validate((function(t){if(!t)return console.log("error submit!!"),e.btnLoding=!1,!1;if(2===e.ruleForm.required&&2===e.ruleForm.allow_empty)return e.$message.error("非必填时请允许字段为空"),void(e.btnLoding=!1);var r=e.isAdd?Object(c["a"])(Object(c["a"])({},e.ruleForm),{},{table_guid:e.table_guid}):Object(c["a"])({},{input_type:e.ruleForm.input_type,field_name:e.ruleForm.field_name,option:e.ruleForm.option,placeholder:e.ruleForm.placeholder,field_guid:e.ruleForm.field_guid}),l=e.isAdd?f:m;l(Object(c["a"])({},r)).then((function(){e.dialogVisible=!1,e.$message({message:"操作成功",type:"success"}),e.init()})).finally((function(){e.btnLoding=!1}))}))}}},v=y,_=(r("6c0b"),r("2877")),A=Object(_["a"])(v,l,i,!1,null,"7498d820",null);t["default"]=A.exports},a630:function(e,t,r){var l=r("23e7"),i=r("4df4"),o=r("1c7e"),a=!o((function(e){Array.from(e)}));l({target:"Array",stat:!0,forced:a},{from:i})},b775:function(e,t,r){"use strict";r("d3b7");var l=r("bc3a"),i=r.n(l),o=r("5c96"),a=i.a.create({baseURL:"http://localhost:8080",timeout:5e3});a.interceptors.response.use((function(e){var t=e.data;return 200!==t.code?(o["Message"].closeAll(),Object(o["Message"])({message:t.data||"Error",type:"error",duration:5e3}),Promise.reject(new Error(t.data||"Error"))):t.data}),(function(e){return console.log("err"+e),Object(o["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)})),t["a"]=a},bb2f:function(e,t,r){var l=r("d039");e.exports=!l((function(){return Object.isExtensible(Object.preventExtensions({}))}))},d28b:function(e,t,r){var l=r("746f");l("iterator")},dca8:function(e,t,r){var l=r("23e7"),i=r("bb2f"),o=r("d039"),a=r("861d"),n=r("f183").onFreeze,s=Object.freeze,u=o((function(){s(1)}));l({target:"Object",stat:!0,forced:u,sham:!i},{freeze:function(e){return s&&a(e)?s(n(e)):e}})},e01a:function(e,t,r){"use strict";var l=r("23e7"),i=r("83ab"),o=r("da84"),a=r("5135"),n=r("861d"),s=r("9bf2").f,u=r("e893"),d=o.Symbol;if(i&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var c={},p=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof p?new d(e):void 0===e?d():d(e);return""===e&&(c[t]=!0),t};u(p,d);var f=p.prototype=d.prototype;f.constructor=p;var m=f.toString,b="Symbol(test)"==String(d("test")),g=/^Symbol\((.*)\)[^)]+$/;s(f,"description",{configurable:!0,get:function(){var e=n(this)?this.valueOf():this,t=m.call(e);if(a(c,e))return"";var r=b?t.slice(7,-1):t.replace(g,"$1");return""===r?void 0:r}}),l({global:!0,forced:!0},{Symbol:p})}},e33c:function(e,t,r){},f183:function(e,t,r){var l=r("d012"),i=r("861d"),o=r("5135"),a=r("9bf2").f,n=r("90e3"),s=r("bb2f"),u=n("meta"),d=0,c=Object.isExtensible||function(){return!0},p=function(e){a(e,u,{value:{objectID:"O"+ ++d,weakData:{}}})},f=function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,u)){if(!c(e))return"F";if(!t)return"E";p(e)}return e[u].objectID},m=function(e,t){if(!o(e,u)){if(!c(e))return!0;if(!t)return!1;p(e)}return e[u].weakData},b=function(e){return s&&g.REQUIRED&&c(e)&&!o(e,u)&&p(e),e},g=e.exports={REQUIRED:!1,fastKey:f,getWeakData:m,onFreeze:b};l[u]=!0},fb6a:function(e,t,r){"use strict";var l=r("23e7"),i=r("861d"),o=r("e8b5"),a=r("23cb"),n=r("50c4"),s=r("fc6a"),u=r("8418"),d=r("b622"),c=r("1dde"),p=r("ae40"),f=c("slice"),m=p("slice",{ACCESSORS:!0,0:0,1:2}),b=d("species"),g=[].slice,h=Math.max;l({target:"Array",proto:!0,forced:!f||!m},{slice:function(e,t){var r,l,d,c=s(this),p=n(c.length),f=a(e,p),m=a(void 0===t?p:t,p);if(o(c)&&(r=c.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?i(r)&&(r=r[b],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return g.call(c,f,m);for(l=new(void 0===r?Array:r)(h(m-f,0)),d=0;f<m;f++,d++)f in c&&u(l,d,c[f]);return l.length=d,l}})}}]);