(window.webpackJsonp=window.webpackJsonp||[]).push([[19,20,25,28],{273:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"i",(function(){return s})),n.d(e,"f",(function(){return a})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return p})),n.d(e,"k",(function(){return h})),n.d(e,"l",(function(){return b})),n.d(e,"c",(function(){return d})),n.d(e,"j",(function(){return v}));n(117),n(15),n(21),n(63),n(41);const r=/#.*$/,i=/\.(md|html)$/,o=/\/$/,s=/^(https?:|mailto:|tel:)/;function c(t){return decodeURI(t).replace(r,"").replace(i,"")}function a(t){return s.test(t)}function u(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function f(t){if(a(t))return t;const e=t.match(r),n=e?e[0]:"",i=c(t);return o.test(i)?t:i+".html"+n}function p(t,e){const n=t.hash,i=function(t){const e=t.match(r);if(e)return e[0]}(e);if(i&&n!==i)return!1;return c(t.path)===c(e)}function h(t,e,n){if(a(e))return{type:"external",path:e};n&&(e=function(t,e,n){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const o=t.replace(/^\//,"").split("/");for(let t=0;t<o.length;t++){const e=o[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const r=c(e);for(let e=0;e<t.length;e++)if(c(t[e].regularPath)===r)return Object.assign({},t[e],{type:"page",path:f(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function b(t,e,n,r){const{pages:i,themeConfig:o}=n,s=r&&o.locales&&o.locales[r]||o;if("auto"===(t.frontmatter.sidebar||s.sidebar||o.sidebar))return function(t){const e=d(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const c=s.sidebar||o.sidebar;if(c){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const r in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(r)))return{base:r,config:e[r]};var n;return{}}(e,c);return n?n.map(e=>function t(e,n,r,i=1){if("string"==typeof e)return h(n,e,r);if(Array.isArray(e))return Object.assign(h(n,e[0],r),{title:e[1]});{i>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const o=e.children||[];return 0===o.length&&e.path?Object.assign(h(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:o.map(e=>t(e,n,r,i+1)),collapsable:!1!==e.collapsable}}}(e,i,t)):[]}return[]}function d(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},279:function(t,e,n){},281:function(t,e,n){"use strict";n.r(e);n(15),n(62);var r=n(273),i={props:{item:{required:!0}},computed:{link(){return Object(r.b)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link}},methods:{isExternal:r.f,isMailto:r.g,isTel:r.h}},o=n(26),s=Object(o.a)(i,(function(){var t=this,e=t._self._c;return t.isExternal(t.link)?e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n\n  "),e("OutboundLink")],1):e("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null);e.default=s.exports},282:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return a})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return f})),n.d(e,"i",(function(){return p})),n.d(e,"j",(function(){return h})),n.d(e,"k",(function(){return b}));var r=n(272),i="activate-tab",o="changed",s="click",c="first",a="input",u="last",l="next",f="prev",p=(r.d,r.d,"update:"),h="bv",b="::"},285:function(t,e,n){"use strict";n(279)},289:function(t,e,n){},291:function(t,e,n){"use strict";n.r(e);var r={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},i=(n(285),n(26)),o=Object(i.a)(r,(function(){return(0,this._self._c)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.default=o.exports},295:function(t,e,n){"use strict";n.d(e,"d",(function(){return p})),n.d(e,"e",(function(){return h})),n.d(e,"c",(function(){return b})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return v}));var r=n(286),i=n(288),o=n(278),s=n(276),c=n(308),a=n(280),u=function(t){return"%"+t.charCodeAt(0).toString(16)},l=function(t){return encodeURIComponent(Object(a.c)(t)).replace(r.c,u).replace(r.b,",")},f=(decodeURIComponent,function(t){if(!Object(o.h)(t))return"";var e=Object(s.g)(t).map((function(e){var n=t[e];return Object(o.j)(n)?"":Object(o.f)(n)?l(e):Object(o.a)(n)?n.reduce((function(t,n){return Object(o.f)(n)?t.push(l(e)):Object(o.j)(n)||t.push(l(e)+"="+l(n)),t}),[]).join("&"):l(e)+"="+l(n)})).filter((function(t){return t.length>0})).join("&");return e?"?".concat(e):""}),p=function(t){return!(!t.href&&!t.to)},h=function(t){return!(!t||Object(i.e)(t,"a"))},b=function(t,e){var n=t.to,r=t.disabled,i=t.routerComponentName,o=!!Object(c.a)(e).$router,s=!!Object(c.a)(e).$nuxt;return!o||o&&(r||!n)?"a":i||(s?"nuxt-link":"router-link")},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.target,n=t.rel;return"_blank"===e&&Object(o.f)(n)?"noopener":n||null},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.href,n=t.to,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"a",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"/";if(e)return e;if(h(r))return null;if(Object(o.i)(n))return n||s;if(Object(o.h)(n)&&(n.path||n.query||n.hash)){var c=Object(a.c)(n.path),u=f(n.query),l=Object(a.c)(n.hash);return l=l&&"#"!==l.charAt(0)?"#".concat(l):l,"".concat(c).concat(u).concat(l)||s}return i}},296:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return a}));n(293);var r=n(282),i=n(286),o=(n(278),n(280)),s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.preventDefault,r=void 0===n||n,i=e.propagation,o=void 0===i||i,s=e.immediatePropagation,c=void 0!==s&&s;r&&t.preventDefault(),o&&t.stopPropagation(),c&&t.stopImmediatePropagation()},c=function(t){return Object(o.a)(t.replace(i.a,""))},a=function(t,e){return[r.j,c(t),e].join(r.k)}},298:function(t,e,n){"use strict";n(289)},304:function(t,e,n){"use strict";n.d(e,"b",(function(){return x})),n.d(e,"a",(function(){return R}));var r=n(272),i=n(277),o=n(282),s=n(275),c=n(283),a=n(288),u=n(296),l=n(278),f=n(276),p=n(274),h=n(295),b=n(287),d="$_rootListeners",v=Object(r.c)({computed:{bvEventRoot:function(){return(t=this).$root.$options.bvEventRoot||t.$root;var t}},created:function(){this[d]={}},beforeDestroy:function(){var t=this;Object(f.g)(this[d]||{}).forEach((function(e){t[d][e].forEach((function(n){t.listenOffRoot(e,n)}))})),this[d]=null},methods:{registerRootListener:function(t,e){this[d]&&(this[d][t]=this[d][t]||[],Object(c.a)(this[d][t],e)||this[d][t].push(e))},unregisterRootListener:function(t,e){this[d]&&this[d][t]&&(this[d][t]=this[d][t].filter((function(t){return t!==e})))},listenOnRoot:function(t,e){this.bvEventRoot&&(this.bvEventRoot.$on(t,e),this.registerRootListener(t,e))},listenOnRootOnce:function(t,e){var n=this;if(this.bvEventRoot){var r=function t(){n.unregisterRootListener(t),e.apply(void 0,arguments)};this.bvEventRoot.$once(t,r),this.registerRootListener(t,r)}},listenOffRoot:function(t,e){this.unregisterRootListener(t,e),this.bvEventRoot&&this.bvEventRoot.$off(t,e)},emitOnRoot:function(t){if(this.bvEventRoot){for(var e,n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];(e=this.bvEventRoot).$emit.apply(e,[t].concat(r))}}}}),g=n(294),O=n(284);function j(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?k(Object(n),!0).forEach((function(e){w(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var L=Object(u.a)(i.k,"clicked"),_={activeClass:Object(p.b)(s.j),append:Object(p.b)(s.d,!1),event:Object(p.b)(s.c),exact:Object(p.b)(s.d,!1),exactActiveClass:Object(p.b)(s.j),exactPath:Object(p.b)(s.d,!1),exactPathActiveClass:Object(p.b)(s.j),replace:Object(p.b)(s.d,!1),routerTag:Object(p.b)(s.j),to:Object(p.b)(s.i)},C={noPrefetch:Object(p.b)(s.d,!1),prefetch:Object(p.b)(s.d,null)},x=Object(p.c)(Object(f.k)(y(y(y({},C),_),{},{active:Object(p.b)(s.d,!1),disabled:Object(p.b)(s.d,!1),href:Object(p.b)(s.j),rel:Object(p.b)(s.j,null),routerComponentName:Object(p.b)(s.j),target:Object(p.b)(s.j,"_self")})),i.k),R=Object(r.c)({name:i.k,mixins:[b.a,g.a,v,O.a],inheritAttrs:!1,props:x,computed:{computedTag:function(){var t=this.to,e=this.disabled,n=this.routerComponentName;return Object(h.c)({to:t,disabled:e,routerComponentName:n},this)},isRouterLink:function(){return Object(h.e)(this.computedTag)},computedRel:function(){var t=this.target,e=this.rel;return Object(h.b)({target:t,rel:e})},computedHref:function(){var t=this.to,e=this.href;return Object(h.a)({to:t,href:e},this.computedTag)},computedProps:function(){var t=this.event,e=this.prefetch,n=this.routerTag;return this.isRouterLink?y(y(y(y({},Object(p.d)(Object(f.h)(y(y({},_),"nuxt-link"===this.computedTag?C:{}),["event","prefetch","routerTag"]),this)),t?{event:t}:{}),Object(l.b)(e)?{prefetch:e}:{}),n?{tag:n}:{}):{}},computedAttrs:function(){var t=this.bvAttrs,e=this.computedHref,n=this.computedRel,r=this.disabled,i=this.target,o=this.routerTag,s=this.isRouterLink;return y(y(y(y({},t),e?{href:e}:{}),s&&o&&!Object(a.e)(o,"a")?{}:{rel:n,target:i}),{},{tabindex:r?"-1":Object(l.j)(t.tabindex)?null:t.tabindex,"aria-disabled":r?"true":null})},computedListeners:function(){return y(y({},this.bvListeners),{},{click:this.onClick})}},methods:{onClick:function(t){var e=arguments,n=Object(l.d)(t),r=this.isRouterLink,i=this.bvListeners.click;if(n&&this.disabled)Object(u.b)(t,{immediatePropagation:!0});else{var s;if(r)null===(s=t.currentTarget.__vue__)||void 0===s||s.$emit(o.c,t);Object(c.b)(i).filter((function(t){return Object(l.e)(t)})).forEach((function(t){t.apply(void 0,j(e))})),this.emitOnRoot(L,t),this.emitOnRoot("clicked::link",t)}n&&!r&&"#"===this.computedHref&&Object(u.b)(t,{propagation:!1})},focus:function(){Object(a.c)(this.$el)},blur:function(){Object(a.b)(this.$el)}},render:function(t){var e=this.active,n=this.disabled;return t(this.computedTag,w({class:{active:e,disabled:n},attrs:this.computedAttrs,props:this.computedProps},this.isRouterLink?"nativeOn":"on",this.computedListeners),this.normalizeSlot())}})},310:function(t,e,n){"use strict";n.r(e);var r=n(281),i=n(291),o={components:{NavLink:r.default,DropdownTransition:i.default},data:()=>({open:!1}),props:{item:{required:!0}},methods:{toggle(){this.open=!this.open}}},s=(n(298),n(26)),c=Object(s.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[e("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[e("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),e("DropdownTransition",[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(n,r){return e("li",{key:n.link||r,staticClass:"dropdown-item"},["links"===n.type?e("h4",[t._v(t._s(n.text))]):t._e(),t._v(" "),"links"===n.type?e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(n.items,(function(t){return e("li",{key:t.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:t}})],1)})),0):e("NavLink",{attrs:{item:n}})],1)})),0)])],1)}),[],!1,null,null,null);e.default=c.exports},328:function(t,e,n){"use strict";n.r(e);n(15),n(41),n(62);var r=n(310),i=n(273),o=n(281),s=n(333),c={components:{NavLink:o.default,DropdownLink:r.default,"b-badge":s.a},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,n=this.$router.options.routes,r=this.$site.themeConfig.locales||{},i={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(t).map(i=>{const o=t[i],s=r[i]&&r[i].label||o.lang;let c;return o.lang===this.$lang?c=e:(c=e.replace(this.$localeConfig.path,i),n.some(t=>t.path===c)||(c=i)),{text:s,link:c}})};return[...this.userNav,i]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(Object(i.j)(t),{items:(t.items||[]).map(i.j)}))},repoLink(){const{repo:t}=this.$site.themeConfig;if(t)return/^https?:/.test(t)?t:"https://github.com/"+t},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let n=0;n<e.length;n++){const r=e[n];if(new RegExp(r,"i").test(t))return r}return"Source"}}},a=n(26),u=Object(a.a)(c,(function(){var t=this,e=t._self._c;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav flex-column nav-vertical-2",attrs:{id:"page-nav"}},[t._l(t.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[e("span",{staticClass:"icon-github"}),t._v(" "),e("span",{staticClass:"sr-only"},[t._v(t._s(t.repoLabel))]),t._v(" "),e("OutboundLink"),t._v(" "),e("b-badge",{staticClass:"d-inline",attrs:{variant:"primary"}},[t._v("v0.1")])],1):t._e()],2):t._e()}),[],!1,null,null,null);e.default=u.exports},333:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var r=n(272),i=n(317),o=n(277),s=n(275),c=n(276),a=n(274),u=n(295),l=n(304);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){h(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b=Object(c.h)(l.b,["event","routerTag"]);delete b.href.default,delete b.to.default;var d=Object(a.c)(Object(c.k)(p(p({},b),{},{pill:Object(a.b)(s.d,!1),tag:Object(a.b)(s.j,"span"),variant:Object(a.b)(s.j,"secondary")})),o.a),v=Object(r.c)({name:o.a,functional:!0,props:d,render:function(t,e){var n=e.props,r=e.data,o=e.children,s=n.active,c=n.disabled,f=Object(u.d)(n),p=f?l.a:n.tag,h=n.variant||"secondary";return t(p,Object(i.a)(r,{staticClass:"badge",class:["badge-".concat(h),{"badge-pill":n.pill,active:s,disabled:c}],props:f?Object(a.d)(b,n):{}}),o)}})}}]);