(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{198:function(t,e,a){"use strict";var i=a(82);a.n(i).a},213:function(t,e,a){"use strict";a.r(e);var i=a(125),s=a(123),n=(a(66),a(43),a(27));function r(t,e,a,i,s){arguments.length>5&&void 0!==arguments[5]&&arguments[5];return null}var o={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var a=e.parent,i=a.$page,s=(a.$site,a.$route),o=a.$themeConfig,c=a.$themeLocaleConfig,l=e.props,h=l.item,d=l.sidebarDepth,u=Object(n.e)(s,h.path),p="auto"===h.type?u||h.children.some(function(t){return Object(n.e)(s,h.basePath+"#"+t.slug)}):u,b="external"===h.type?function(t,e,a){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[a,t("OutboundLink")])}(t,h.path,h.title||h.path):function(t,e,a,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"nav-link":!0},attrs:{"data-scroll":!0}},a)}(t,h.path,h.title||h.path,p),f=i.frontmatter.sidebarDepth||d||c.sidebarDepth||o.sidebarDepth,g=null==f?1:f,m=c.displayAllHeaders||o.displayAllHeaders;return"auto"===h.type?[b,r(t,h.children,h.basePath,s,g)]:(p||m)&&h.headers&&!n.d.test(h.path)?[b,r(t,Object(n.c)(h.headers),h.path,s,g)]:b}},c=a(1);var l={name:"TocLinks",components:{TocLink:Object(c.a)(o,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var a=0;a<e.length;a++){var i=e[a];if("group"===i.type&&i.children.some(function(e){return"page"===e.type&&Object(n.e)(t,e.path)}))return a}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(n.e)(this.$route,t.regularPath)}}},h={name:"Sidebar",components:{TocLinks:Object(c.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return this.items[0].children?e("ul",{staticClass:"nav flex-column toc",attrs:{id:"toc"}},this._l(this.items[0].children,function(t,a){return e("li",{key:a,staticClass:"nav-item"},[e("TocLink",{attrs:{item:t}})],1)}),0):this._e()},[],!1,null,null,null).exports},props:["items"]},d=Object(c.a)(h,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sticky"},[this._t("top"),this._v(" "),e("TocLinks",{attrs:{depth:1,items:this.items}}),this._v(" "),this._t("bottom")],2)},[],!1,null,null,null).exports;function u(t,e,a){var i=[];!function t(e,a){for(var i=0,s=e.length;i<s;i++)"group"===e[i].type?t(e[i].children||[],a):a.push(e[i])}(e,i);for(var s=0;s<i.length;s++){var n=i[s];if("page"===n.type&&n.path===decodeURIComponent(t.path))return i[s+a]}}var p={components:{Sidebar:d},props:["sidebarItems"],computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,a=this.$page.frontmatter.prev;return!1===a?void 0:a?Object(n.k)(this.$site.pages,a,this.$route.path):(t=this.$page,e=this.sidebarItems,u(t,e,-1))},next:function(){var t,e,a=this.$page.frontmatter.next;return!1===a?void 0:a?Object(n.k)(this.$site.pages,a,this.$route.path):(t=this.$page,e=this.sidebarItems,u(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,a=t.editLinks,i=t.docsDir,s=void 0===i?"":i,n=t.docsBranch,r=void 0===n?"master":n,o=t.docsRepo,c=void 0===o?e:o;return c&&a&&this.$page.relativePath?this.createEditLink(e,c,s,r,this.$page.relativePath):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},createEditLink:function(t,e,a,i,s){return/bitbucket.org/.test(t)?(n.i.test(e)?e:t).replace(n.a,"")+"/src"+"/".concat(i,"/")+(a?a.replace(n.a,"")+"/":"")+s+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(n.i.test(e)?e:"https://github.com/".concat(e)).replace(n.a,"")+"/edit"+"/".concat(i,"/")+(a?a.replace(n.a,"")+"/":"")+s}}},b=(a(198),Object(c.a)(p,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"col-lg-9 col-xxl-10 doc-content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"doc-content-header"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col"},[a("nav",{staticClass:"breadcrumb-nav align-items-center",attrs:{"aria-label":"breadcrumb"}},[t.$page.frontmatter.home?t._e():a("router-link",{staticClass:"breadcrumb-back",attrs:{to:"/",title:"Back"}}),t._v(" "),a("ol",{staticClass:"breadcrumb d-none d-lg-inline-flex"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:"/"}},[t._v("\n                    Documentation\n                  ")])],1),t._v(" "),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.$page.title))])])],1)]),t._v(" "),a("div",{staticClass:"col text-right"},[a("img",{attrs:{src:t.$withBase("/logo-sap@2x.png"),height:"30"}})])])])])]),t._v(" "),a("div",{staticClass:"row justify-content-between doc-content-body"},[a("article",{staticClass:"col-md-9 col-xxl-8"},[a("Content",{staticClass:"theme-default-content"})],1),t._v(" "),a("aside",{staticClass:"col-md-3 col-xxl-3 d-none d-md-block"},[a("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2)],1)])])},[],!1,null,null,null).exports),f={components:{Home:i.a,Page:b,Sidebar:d,Navbar:s.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(n.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach(function(){t.isSidebarOpen=!1})},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},g=Object(c.a)(f,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"py-0"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row justify-content-between"},[a("aside",{staticClass:"col-lg-3 col-xxl-2 p-3 doc-sidebar"},[a("div",{staticClass:"sticky"},[t.shouldShowNavbar?a("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e()],1)]),t._v(" "),a("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)]),t._v(" "),a("SvgsAndCss")],1)},[],!1,null,null,null);e.default=g.exports},82:function(t,e,a){}}]);