(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{323:function(s,t,e){},336:function(s,t,e){"use strict";e(323)},356:function(s,t,e){"use strict";e.r(t);var a=e(351),i=e(352),r=e(372),n=e(344),l={components:{"b-card":a.a,"b-tabs":i.a,"b-tab":r.a,"b-card-text":n.a},props:{id:String,type:String,header:{type:String,default:"Lorem ipsum dolor"},message:{type:String,default:"Cras imperdiet nec erat ac condimentum. Sed nulla hendrerit interdum orci a posuere."}},computed:{uppercaseType(){return this.type.charAt(0).toUpperCase()+this.type.slice(1)}}},p=(e(336),e(26)),c=Object(p.a)(l,(function(){var s=this._self._c;return s("div",{staticClass:"library-example"},[s("b-card",{attrs:{"no-body":""}},[s("b-tabs",{attrs:{pills:"",card:""}},[s("b-tab",{attrs:{title:"Preview",active:""}},[s("b-card-text",[s("Moment",{attrs:{type:this.type,id:this.id,header:this.header,message:this.message}})],1)],1),this._v(" "),s("b-tab",{attrs:{title:"Code"}},[s("b-card-text",[s("pre",[s("code",{staticClass:"language-markup"},[this._v('\n<figure class="sapIllus sapIllus_'+this._s(this.uppercaseType)+'">\n  <svg class="sapIllus_Image" role="img">\n    <use xlink:href="#sapIllus-Dialog-NoSearchResults"></use>\n  </svg>\n  <figcaption class="sapIllus_Caption">\n    <h3 class="sapIllus_CaptionHeader">'+this._s(this.header)+'</h3>\n    <p class="sapIllus_CaptionMessage">'+this._s(this.message)+"</p>\n  </figcaption>\n</figure>\n          ")])])])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=c.exports}}]);