(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{107:function(e,t,r){var o=r(297);"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r(83)(o,a);o.locals&&(e.exports=o.locals)},296:function(e,t,r){"use strict";var o=r(107);r.n(o).a},297:function(e,t,r){(e.exports=r(5)(!1)).push([e.i,".custom-bg-color-gray[data-v-c56c9db4]{background-color:#f2f5f8}",""])},526:function(e,t,r){"use strict";r.r(t);var o=r(71),a=r(24),s=r(36),i=r(28),l=(r(130),r(21));function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u={name:"AddUser",components:{Toolbar:o.a},props:["user"],computed:n(n({},Object(s.c)(i.a.USERS,["editSuccess","editError","addUserError","addUserSuccess"])),{},{showSuccessToast:{get:function(){return this.editSuccess||this.addUserSuccess},set:function(){this.$store.dispatch(l.default.users_close_success_snackbar)}},showErrorToast:{get:function(){return this.editError||this.addUserError},set:function(){this.$store.dispatch(l.default.users_close_error_snackbar)}}}),created:function(){this.$store.getters["user/isAdmin"]||this.$router.replace(a.default.home),this.user&&this.loadFromProps()},data:function(){return{drawer:!1,payload:{id:void 0,name:void 0,password:void 0,email:void 0,role:void 0},roles:[{roleName:"Admin",value:1},{roleName:"Regular",value:2}]}},methods:{loadFromProps:function(){this.payload.id=this.user.id,this.payload.name=this.user.name,this.payload.email=this.user.email,this.payload.role=this.user.role},resetForm:function(){this.payload={id:void 0,name:void 0,password:void 0,email:void 0,role:void 0}},submitUser:function(){this.user?this.$store.dispatch("users/updateUser",this.payload):this.$store.dispatch("users/addUser",this.payload)}}},p=(r(296),r(29)),v=r(32),m=r.n(v),f=r(14),b=r(10),h=r(12),y=r(55),w=r(42),_=r(84),g=r(50),O=r(33),k=Object(p.a)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-main",{staticClass:"custom-bg-color-gray fill-height"},[r("toolbar"),e._v(" "),r("v-container",{staticClass:"mt-2",attrs:{fluid:""}},[r("v-card",[r("v-card-title",[e._v(" "+e._s(e.user?"Edit":"Add")+" user")]),e._v(" "),r("v-card-text",[r("v-form",{staticClass:"pa-5",on:{submit:function(t){return t.preventDefault(),e.submitUser(t)}}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Name"},model:{value:e.payload.name,callback:function(t){e.$set(e.payload,"name",t)},expression:"payload.name"}})],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:"Email",type:"email"},model:{value:e.payload.email,callback:function(t){e.$set(e.payload,"email",t)},expression:"payload.email"}})],1),e._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-select",{attrs:{label:"Role",items:e.roles,"item-text":"roleName","item-value":"value"},model:{value:e.payload.role,callback:function(t){e.$set(e.payload,"role",t)},expression:"payload.role"}})],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Password",type:"password"},model:{value:e.payload.password,callback:function(t){e.$set(e.payload,"password",t)},expression:"payload.password"}})],1)],1)],1)],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary"},on:{click:e.submitUser}},[e._v("\n                    Submit\n                ")]),e._v(" "),r("v-btn",{attrs:{color:"warning"},on:{click:e.resetForm}},[e._v("\n                    Reset Form\n                ")])],1)],1)],1),e._v(" "),r("v-snackbar",{attrs:{color:"primary",right:"",timeout:e.$store.state.book.notificationTimeout},model:{value:e.showSuccessToast,callback:function(t){e.showSuccessToast=t},expression:"showSuccessToast"}},[e._v("\n        Operation completed successfully\n    ")]),e._v(" "),r("v-snackbar",{attrs:{color:"red",right:"",timeout:e.$store.state.book.notificationTimeout},model:{value:e.showErrorToast,callback:function(t){e.showErrorToast=t},expression:"showErrorToast"}},[e._v("\n        Operation failed..\n    ")])],1)}),[],!1,null,"c56c9db4",null);t.default=k.exports;m()(k,{VBtn:f.a,VCard:b.a,VCardActions:b.b,VCardText:b.d,VCardTitle:b.e,VCol:h.a,VContainer:h.b,VForm:y.a,VMain:w.a,VRow:h.c,VSelect:_.a,VSnackbar:g.a,VSpacer:h.d,VTextField:O.a})}}]);