(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{220:function(t,e,s){"use strict";s.r(e);var a=s(125),i=s(123),o=s(27),n=["Oh no! That’s a big 4-0-4.","How did we get here?","Looks like we’ve got some broken links."],r={components:{Home:a.a,Navbar:i.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(o.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach(function(){t.isSidebarOpen=!1})},methods:{getMsg:function(){return n[Math.floor(Math.random()*n.length)]},toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,s=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(s)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},l=s(1),c=Object(l.a)(r,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"py-0"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row justify-content-between"},[s("aside",{staticClass:"col-lg-3 col-xxl-2 p-3 doc-sidebar"},[s("div",{staticClass:"sticky"},[t.shouldShowNavbar?s("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e()],1)]),t._v(" "),s("div",{staticClass:"col-lg-9 col-xxl-10 doc-content"},[s("div",{staticClass:"row justify-content-between doc-content-body"},[s("article",{staticClass:"col-md-9 col-xxl-8"},[s("figure",{staticClass:"sapIllus sapIllus_Scene"},[s("svg",{staticClass:"sapIllus_Image",attrs:{role:"img"}},[s("use",{attrs:{"xlink:href":"#sapIllus-Dialog-NoSearchResults"}})]),t._v(" "),s("figcaption",{staticClass:"sapIllus_Caption"},[s("h3",{staticClass:"sapIllus_CaptionHeader"},[t._v(t._s(t.getMsg()))]),t._v(" "),s("p",{staticClass:"sapIllus_CaptionMessage"},[t._v("Use the site navigation to find the page you need or return to the "),s("router-link",{attrs:{to:"/"}},[t._v("home page")]),t._v(".")],1)])])])])])])]),t._v(" "),s("SvgsAndCss")],1)},[],!1,null,null,null);e.default=c.exports}}]);