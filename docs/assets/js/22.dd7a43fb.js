(window.webpackJsonp=window.webpackJsonp||[]).push([[22,28],{273:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return a})),n.d(e,"i",(function(){return s})),n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return u})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return d})),n.d(e,"k",(function(){return h})),n.d(e,"l",(function(){return p})),n.d(e,"c",(function(){return m})),n.d(e,"j",(function(){return b}));n(117),n(15),n(21),n(63),n(41);const r=/#.*$/,i=/\.(md|html)$/,a=/\/$/,s=/^(https?:|mailto:|tel:)/;function l(t){return decodeURI(t).replace(r,"").replace(i,"")}function o(t){return s.test(t)}function c(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function f(t){if(o(t))return t;const e=t.match(r),n=e?e[0]:"",i=l(t);return a.test(i)?t:i+".html"+n}function d(t,e){const n=t.hash,i=function(t){const e=t.match(r);if(e)return e[0]}(e);if(i&&n!==i)return!1;return l(t.path)===l(e)}function h(t,e,n){if(o(e))return{type:"external",path:e};n&&(e=function(t,e,n){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const a=t.replace(/^\//,"").split("/");for(let t=0;t<a.length;t++){const e=a[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const r=l(e);for(let e=0;e<t.length;e++)if(l(t[e].regularPath)===r)return Object.assign({},t[e],{type:"page",path:f(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function p(t,e,n,r){const{pages:i,themeConfig:a}=n,s=r&&a.locales&&a.locales[r]||a;if("auto"===(t.frontmatter.sidebar||s.sidebar||a.sidebar))return function(t){const e=m(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const l=s.sidebar||a.sidebar;if(l){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const r in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(r)))return{base:r,config:e[r]};var n;return{}}(e,l);return n?n.map(e=>function t(e,n,r,i=1){if("string"==typeof e)return h(n,e,r);if(Array.isArray(e))return Object.assign(h(n,e[0],r),{title:e[1]});{i>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const a=e.children||[];return 0===a.length&&e.path?Object.assign(h(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:a.map(e=>t(e,n,r,i+1)),collapsable:!1!==e.collapsable}}}(e,i,t)):[]}return[]}function m(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function b(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},281:function(t,e,n){"use strict";n.r(e);n(15),n(62);var r=n(273),i={props:{item:{required:!0}},computed:{link(){return Object(r.b)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link}},methods:{isExternal:r.f,isMailto:r.g,isTel:r.h}},a=n(26),s=Object(a.a)(i,(function(){var t=this,e=t._self._c;return t.isExternal(t.link)?e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n\n  "),e("OutboundLink")],1):e("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null);e.default=s.exports},290:function(t,e,n){},299:function(t,e,n){"use strict";n(290)},311:function(t,e,n){"use strict";n.r(e);var r={components:{NavLink:n(281).default},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},i=(n(299),n(26)),a=Object(i.a)(r,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[e("header",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?e("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),e("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(n,r){return e("div",{key:r,staticClass:"feature"},[e("h2",[t._v(t._s(n.title))]),t._v(" "),e("p",[t._v(t._s(n.details))])])})),0):t._e(),t._v(" "),e("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?e("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null);e.default=a.exports}}]);