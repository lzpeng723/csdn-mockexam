(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-89da7a80"],{5585:function(t,e,a){"use strict";a("8d7c")},"856d":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"wrap"},[a("div",{staticClass:"info"},[a("el-descriptions",{attrs:{title:t.name,column:2}},[a("el-descriptions-item",{attrs:{label:"表单ID"}},[t._v(t._s(t.table_guid))]),a("el-descriptions-item",{attrs:{label:"创建时间"}},[t._v(t._s(t.time?t.parseTime(t.time):"-"))])],1)],1),a("div",{staticClass:"main"},[a("div",{staticClass:"main-body"},[a("div",{staticClass:"mian-body-table"},[a("el-table",{ref:"ruleClockList",staticStyle:{width:"100%"},attrs:{data:t.tableData,"cell-style":{"padding-top":"12px","padding-bottom":"12px"}}},[t._l(t.tableHeader.filter((function(t){return"_created_time"!==t.field})).slice(0,4),(function(t,e){return a("el-table-column",{key:e,attrs:{prop:t.field,label:t.field_name,"show-overflow-tooltip":""}})})),a("el-table-column",{attrs:{label:"创建时间","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row._created_time?t.parseTime(e.row._created_time):"-")+" ")]}}])}),(t.tableHeader||[]).length>5?a("el-table-column",{attrs:{label:"操作",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"table-buttom"},[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return t.showDetail(e.row)}}},[t._v("详情")])],1)]}}],null,!1,3836823600)}):t._e()],2),a("div",{staticClass:"table-pagination"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[5,10,30,50],"page-size":t.size,layout:"total, sizes, prev, pager, next, jumper",total:t.num},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)])]),a("el-dialog",{attrs:{visible:t.dialogVisible,width:"760px",title:"已收信息-详情"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-descriptions",{attrs:{title:"",column:1}},t._l(t.tableHeader,(function(e,i){return a("el-descriptions-item",{key:i,attrs:{label:e.field_name}},[t._v(t._s(t.detailData[e.field]))])})),1)],1)],1)},n=[],r=(a("b0c0"),a("d3b7"),a("3ca3"),a("ddb0"),a("c7ea")),s=a("ed08"),l={name:"Data",data:function(){return{dialogVisible:!1,size:10,tableData:[],tableHeader:[],detailData:{},loading:!1,table_guid:"",name:"",time:"",num:10,currentPage:1}},created:function(){this.table_guid=this.$route.params.id,this.name=this.$route.query.name,this.time=this.$route.query.time,this.init()},methods:{parseTime:s["b"],showDetail:function(t){this.detailData=t,this.dialogVisible=!0},init:function(t){var e=this;this.loading=!0;var a=t||this.currentPage;this.currentPage=a;var i={page:a,size:this.size,table_guid:this.table_guid};Promise.all([Object(r["b"])({table_guid:this.table_guid}),Object(r["a"])(i)]).then((function(t){var a,i;e.tableHeader=t[0],e.tableData=null===(a=t[1])||void 0===a?void 0:a.list,e.num=null===(i=t[1])||void 0===i?void 0:i.count})).finally((function(){e.loading=!1}))},handleSizeChange:function(t){this.size=t,this.init(1)},handleCurrentChange:function(t){this.currentPage=t,this.init()}}},o=l,u=(a("5585"),a("c5bd"),a("2877")),c=Object(u["a"])(o,i,n,!1,null,"c51e6010",null);e["default"]=c.exports},"8d7c":function(t,e,a){},"9dec":function(t,e,a){},b775:function(t,e,a){"use strict";a("d3b7");var i=a("bc3a"),n=a.n(i),r=a("5c96"),s=n.a.create({baseURL:"http://localhost:8080",timeout:5e3});s.interceptors.response.use((function(t){var e=t.data;return 200!==e.code?(r["Message"].closeAll(),Object(r["Message"])({message:e.data||"Error",type:"error",duration:5e3}),Promise.reject(new Error(e.data||"Error"))):e.data}),(function(t){return console.log("err"+t),Object(r["Message"])({message:t.message,type:"error",duration:5e3}),Promise.reject(t)})),e["a"]=s},c5bd:function(t,e,a){"use strict";a("9dec")},c7ea:function(t,e,a){"use strict";a.d(e,"c",(function(){return n})),a.d(e,"d",(function(){return r})),a.d(e,"b",(function(){return s})),a.d(e,"a",(function(){return l}));var i=a("b775");function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["a"])({url:"/form/get",method:"post",data:t})}function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["a"])({url:"/form/push",method:"post",data:t})}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["a"])({url:"/form/header",method:"post",data:t})}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["a"])({url:"/form/table",method:"post",data:t})}},ed08:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return r}));var i=a("53ca");a("ac1f"),a("5319"),a("4d63"),a("25f0"),a("d3b7"),a("4d90"),a("1276"),a("159b");function n(t,e){if(0===arguments.length||!t)return null;var a,n="{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(i["a"])(t)?a=t:("string"===typeof t&&(t=/^[0-9]+$/.test(t)?parseInt(t):t.replace(new RegExp(/-/gm),"/")),"number"===typeof t&&10===t.toString().length&&(t*=1e3),a=new Date(t));var r={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},s=n.replace(/{([ymdhisa])+}/g,(function(t,e){var a=r[e];return"a"===e?["日","一","二","三","四","五","六"][a]:a.toString().padStart(2,"0")}));return s}function r(t,e){t=10===(""+t).length?1e3*parseInt(t):+t;var a=new Date(t),i=Date.now(),r=(i-a)/1e3;return r<30?"刚刚":r<3600?Math.ceil(r/60)+"分钟前":r<86400?Math.ceil(r/3600)+"小时前":r<172800?"1天前":e?n(t):a.getMonth()+1+"月"+a.getDate()+"日"+a.getHours()+"时"+a.getMinutes()+"分"}}}]);