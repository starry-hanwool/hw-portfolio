(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{399:function(t,l,c){"use strict";c.r(l);var e={name:"ImageSliderDialog",props:{project:{type:Object,required:!0}},data:function(){return{dialog:!1}}},r=c(78),o=c(106),v=c.n(o),n=c(422),d=c(423),_=c(397),m=c(463),f=c(464),C=c(457),y=c(462),j=c(392),k=c(158),w=c(458),component=Object(r.a)(e,(function(){var t=this,l=t.$createElement,c=t._self._c||l;return c("v-dialog",{attrs:{"max-width":"1200"},scopedSlots:t._u([{key:"activator",fn:function(l){var e=l.on,r=l.attrs;return[c("v-btn",t._g(t._b({attrs:{color:"blue-grey"}},"v-btn",r,!1),e),[t._v(" 더보기 ")])]}}]),model:{value:t.dialog,callback:function(l){t.dialog=l},expression:"dialog"}},[t._v(" "),c("v-card",{attrs:{outlined:""}},[c("v-card-title",{staticClass:"headline blue-grey darken-4"},[t._v("\n      "+t._s(t.project.title)+"\n    ")]),t._v(" "),c("v-row",{staticClass:"my-2"},[c("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"6"}},[c("v-card-text",[c("v-carousel",{attrs:{height:600}},t._l(t.project.imgs,(function(t,i){return c("v-carousel-item",{key:i,attrs:{src:t.src,contain:""}})})),1)],1)],1),t._v(" "),c("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"6"}},[c("v-card-text",[c("v-row",{staticClass:"mx-0"},[c("v-col",{attrs:{cols:"1"}},[c("v-icon",{attrs:{small:""}},[t._v("fas fa-calendar-check")])],1),t._v(" "),c("v-col",[c("div",{staticClass:"ml-3"},[t._v(t._s(t.project.period))])])],1),t._v(" "),c("v-row",{staticClass:"mx-0"},[c("v-col",{attrs:{cols:"1"}},[c("v-icon",{attrs:{small:""}},[t._v("fas fa-child")])],1),t._v(" "),c("v-col",[c("div",{staticClass:"ml-3"},[t._v(t._s(t.project.team))])])],1),t._v(" "),c("v-row",{staticClass:"mx-0"},[c("v-col",{attrs:{cols:"1"}},[c("v-icon",{attrs:{small:""}},[t._v("fas fa-clipboard-list")])],1),t._v(" "),c("v-col",t._l(t.project.charge,(function(l){return c("div",{key:l.subject},[c("div",{staticClass:"ml-3"},[t._v("\n                  "+t._s(l.subject)+"\n                ")]),t._v(" "),c("div",{staticClass:"grey--text ml-3 my-2"},t._l(l.content,(function(content){return c("ul",{key:content},[c("li",[t._v(t._s(content))])])})),0)])})),0)],1),t._v(" "),c("v-row",{staticClass:"mx-0"},[c("v-col",{attrs:{cols:"1"}},[c("v-icon",{attrs:{small:""}},[t._v("fas fa-hdd")])],1),t._v(" "),t._l(t.project.skills,(function(l){return c("v-col",{key:l.subject},[c("div",[c("div",{staticClass:"ml-3"},[t._v("\n                  "+t._s(l.subject)+"\n                ")]),t._v(" "),c("div",{staticClass:"grey--text ml-3 my-2"},t._l(l.content,(function(content){return c("ul",{key:content},[c("li",[t._v(t._s(content))])])})),0)])])}))],2)],1)],1)],1),t._v(" "),c("v-divider"),t._v(" "),c("v-card-actions",{staticClass:"justify-end"},[c("v-btn",{attrs:{color:"blue-grey",text:""},on:{click:function(l){t.dialog=!1}}},[t._v(" Close ")])],1)],1)],1)}),[],!1,null,"3b91a40a",null);l.default=component.exports;v()(component,{VBtn:n.a,VCard:d.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VCarousel:m.a,VCarouselItem:f.a,VCol:C.a,VDialog:y.a,VDivider:j.a,VIcon:k.a,VRow:w.a})}}]);