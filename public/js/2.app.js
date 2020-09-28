(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{107:function(e,t,o){var r=o(297);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};o(83)(r,a);r.locals&&(e.exports=r.locals)},296:function(e,t,o){"use strict";var r=o(107);o.n(r).a},297:function(e,t,o){(e.exports=o(5)(!1)).push([e.i,".custom-bg-color-gray[data-v-6a5a1493]{background-color:#f2f5f8}",""])},527:function(e,t,o){"use strict";o.r(t);var r=o(71),a=o(22),s=o(36),i=o(28),l=(o(130),o(21));function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){d(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function d(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var u={name:"AddUser",components:{Toolbar:r.a},props:["user"],computed:c(c({},Object(s.c)(i.a.USERS,["editSuccess","editError","addUserError","addUserSuccess"])),{},{showSuccessToast:{get:function(){return this.editSuccess||this.addUserSuccess},set:function(){this.$store.dispatch(l.default.users_close_success_snackbar)}},showErrorToast:{get:function(){return this.editError||this.addUserError},set:function(){this.$store.dispatch(l.default.users_close_error_snackbar)}}}),created:function(){this.$store.getters["user/isAdmin"]||this.$router.replace(a.default.home),this.user&&this.loadFromProps()},data:function(){return{drawer:!1,payload:{id:void 0,name:void 0,password:void 0,email:void 0,role:void 0},roles:[{roleName:"Admin",value:1},{roleName:"Regular",value:2}]}},methods:{loadFromProps:function(){this.payload.id=this.user.id,this.payload.name=this.user.name,this.payload.email=this.user.email,this.payload.role=this.user.role},resetForm:function(){this.payload={id:void 0,name:void 0,password:void 0,email:void 0,role:void 0}},submitUser:function(){this.user?this.$store.dispatch("users/updateUser",this.payload):this.$store.dispatch("users/addUser",this.payload)}}},p=(o(296),o(29)),v=o(32),m=o.n(v),f=o(14),b=o(10),h=o(12),y=o(55),w=o(42),_=o(84),g=o(51),O=o(33),k=Object(p.a)(u,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-main",{staticClass:"custom-bg-color-gray fill-height"},[o("toolbar"),e._v(" "),o("v-container",{staticClass:"mt-2",attrs:{fluid:""}},[o("v-card",[o("v-card-title",[e._v(" "+e._s(e.user?"Edit":"Add")+" user")]),e._v(" "),o("v-card-text",[o("v-form",{staticClass:"pa-5",on:{submit:function(e){e.preventDefault()}}},[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{attrs:{label:"Name"},model:{value:e.payload.name,callback:function(t){e.$set(e.payload,"name",t)},expression:"payload.name"}})],1)],1),e._v(" "),o("v-row",[o("v-col",{attrs:{cols:"6"}},[o("v-text-field",{attrs:{label:"Email",type:"email"},model:{value:e.payload.email,callback:function(t){e.$set(e.payload,"email",t)},expression:"payload.email"}})],1),e._v(" "),o("v-col",{attrs:{cols:"6"}},[o("v-select",{attrs:{label:"Role",items:e.roles,"item-text":"roleName","item-value":"value"},model:{value:e.payload.role,callback:function(t){e.$set(e.payload,"role",t)},expression:"payload.role"}})],1)],1),e._v(" "),o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{attrs:{label:"Password",type:"password"},model:{value:e.payload.password,callback:function(t){e.$set(e.payload,"password",t)},expression:"payload.password"}})],1)],1)],1)],1),e._v(" "),o("v-card-actions",[o("v-spacer"),e._v(" "),o("v-btn",{attrs:{color:"primary"},on:{click:e.submitUser}},[e._v("\n                    Submit\n                ")]),e._v(" "),o("v-btn",{attrs:{color:"warning"},on:{click:e.resetForm}},[e._v("\n                    Reset Form\n                ")])],1)],1)],1),e._v(" "),o("v-snackbar",{attrs:{color:"primary",right:"",timeout:e.$store.state.book.notificationTimeout},model:{value:e.showSuccessToast,callback:function(t){e.showSuccessToast=t},expression:"showSuccessToast"}},[e._v("\n        Operation completed successfully\n    ")]),e._v(" "),o("v-snackbar",{attrs:{color:"red",right:"",timeout:e.$store.state.book.notificationTimeout},model:{value:e.showErrorToast,callback:function(t){e.showErrorToast=t},expression:"showErrorToast"}},[e._v("\n        Operation failed..\n    ")])],1)}),[],!1,null,"6a5a1493",null);t.default=k.exports;m()(k,{VBtn:f.a,VCard:b.a,VCardActions:b.b,VCardText:b.d,VCardTitle:b.e,VCol:h.a,VContainer:h.b,VForm:y.a,VMain:w.a,VRow:h.c,VSelect:_.a,VSnackbar:g.a,VSpacer:h.d,VTextField:O.a})}}]);