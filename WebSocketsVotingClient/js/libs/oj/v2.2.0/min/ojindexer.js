/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","hammerjs","promise","ojs/ojjquery-hammer","ojs/ojcomponentcore"],function(a,g,b){(function(){a.Pa("oj.ojIndexer",g.oj.baseComponent,{defaultElement:"\x3cul\x3e",version:"1.2",widgetEventPrefix:"oj",options:{data:null},_ComponentCreate:function(){this._super();this.ab()},Ph:function(){var a;this._super();this.v5();this.Fz();this.zra();a=this.Hs()[0];this.xn(a);this.ABa(a)},_destroy:function(){var b,d;this._super();this.Sz();this.element.removeClass("oj-component-initnode");
b=this.Hs()[0];this.gp(b);this.OEa(b);d=this.rJ();null!=d&&this.DZ&&d.off(a.Bg.O.CHANGE,this.DZ);a.C.unwrap(this.element,g(b))},_setOption:function(a,b){this._superApply(arguments);"data"==a&&this.refresh()},widget:function(){return this.Hs()},refresh:function(){this._super();this.element.empty();this.v5();this.Fz();this.Ot=null},getNodeBySubId:function(a){var b,e,f,h,k;if(null==a)return this.element?this.element[0]:null;if("oj-indexer-prefix"===a.subId)for(a=a.prefix,b=this.element.children("li"),
e=0;e<b.length;e++){h=b.get(e);if(g(h).attr("data-range")==a)return h;k=g(h).attr("data-includes");if(null!=k)for(k=k.split("|"),f=0;f<k.length;f++)if(k[f]==a)return h}return null},getSubIdByNode:function(a){return null!=a&&(a=g(a).attr("data-range"),null!=a)?{subId:"oj-indexer-prefix",prefix:a}:null},Fz:function(){this.element.attr("role","slider").attr("aria-orientation","vertical").attr("aria-describedby",this.element.prop("id")+":desc").attr("aria-valuemin",0).attr("aria-valuemax",Math.max(0,
this.element.children().length-1))},Sz:function(){this.element.removeAttr("role").removeAttr("aria-orientation").removeAttr("aria-describedby").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuetext")},zra:function(){var b,d;b=a.C.hf()?"ariaTouchInstructionText":"ariaKeyboardInstructionText";d=g(document.createElement("div"));d.prop("id",this.element.prop("id")+":desc");d.addClass("oj-helper-hidden-accessible").text(this.F(b));this.Hs().append(d)},Hs:function(){null==this.IF&&
(this.IF=this.wra());return this.IF},wra:function(){var a;this.pe?a=g(this.pe):(a=g(document.createElement("div")),this.element.parent()[0].replaceChild(a[0],this.element[0]));a.addClass("oj-indexer oj-component");a.prepend(this.element);return a},v5:function(){var a,b,e,f,g,k,l;a=this.rJ();if(null!=a){b=this.element;e=a.getIndexablePrefixes();f=a.getPrefixes();a=this.F("indexerOthers");g=this.widget().outerHeight();k=this.uI(e[0],f);b.append(k);k=k.outerHeight();g=Math.floor(g/k);this.Hs().removeClass("oj-indexer-abbr");
g=Math.floor((e.length+1)/g)+1;1<g&&this.Hs().addClass("oj-indexer-abbr");for(k=1+g;k<e.length;k=k+g+1)1<g?(l=this.Ura(e,k-g,k-1),b.append(l)):k--,l=e[k],l=this.uI(l,f),b.append(l);e=this.uI(e[e.length-1],f);b.append(e);e=this.uI(a);e.attr("data-others","true");b.append(e)}},uI:function(a,b){var e=g(document.createElement("li"));e.attr("data-range",a).text(a);null!=b&&-1==b.indexOf(a)&&e.addClass("oj-disabled");return e},Ura:function(a,b,e){var f,h="";f=g(document.createElement("li"));for(f.addClass("oj-indexer-ellipsis").attr("data-range",
a[b+Math.round((e-b)/2)]);b<e;b++)h=h+a[b]+"|";h+=a[e];f.attr("data-includes",h);return f},ab:function(){var b=this,d;this.element.uniqueId().addClass("oj-component-initnode").attr("tabIndex",0);this._on(this.element,{click:function(a){b.Rva(a)},keydown:function(a){b.Fv(a)},focus:function(a){b.twa(a)},blur:function(a){b.Jva(a)}});d=this.rJ();null!=d&&(this.DZ=function(){b.refresh()},d.on(a.Bg.O.CHANGE,this.DZ));this._focusable({applyHighlight:!0,setupHandlers:function(a,d){b.Ny=a;b.rv=d}})},Rva:function(a){0===
a.button&&(a=g(a.target),this.mW(a))},twa:function(){this.Hs().addClass("oj-focus-ancestor");null==this.Ot?this.$j(this.element.children("li").first()):this.$j(this.Ot)},Jva:function(){this.Hs().removeClass("oj-focus-ancestor")},Fv:function(a){var b,e=!1;switch(a.keyCode){case 38:b=this.Ot.prev();break;case 40:b=this.Ot.next();break;case 13:this.mW(this.Ot),e=!0}null!=b&&0<b.length&&(e=!0,this.$j(b));e&&a.preventDefault()},$j:function(a){null!=this.Ot&&this.rv(this.Ot);this.Ny(a);this.SEa(a);this.Ot=
a},rJ:function(){var a=this.option("data");if(null!=a&&(void 0==a.setPrefix||void 0==a.getIndexablePrefixes||void 0==a.getPrefixes))throw"Invalid IndexerModel";return a},mW:function(b){var d=b.attr("data-range");b.attr("data-others")&&(d=a.Bg.PREFIX_OTHERS);this.oW(d)},oW:function(a){var b=this,e;this.rJ().setPrefix(a).then(function(a){null!=a&&(e=b.Ig(a),null!=e&&b.$j(e))})},SEa:function(b){var d,e="";d=b.attr("data-includes");null!=d?(d=d.split("|"),0<d.length&&(e=this.F("ariaInBetweenText",{first:d[0],
second:d[d.length-1]}))):(d=b.attr("data-range"),e=d===a.Bg.PREFIX_OTHERS?this.F("ariaOthersLabel"):d);b.hasClass("oj-disabled")&&(e=e+". "+this.F("ariaDisabledLabel"));this.element.attr("aria-valuetext",e);this.element.attr("aria-valuenow",b.index())},Ig:function(a){var b,e,f,h,k;b=this.element.children();for(e=0;e<b.length;e++)if(f=b.get(e),h=g(f).attr("data-range"),k=g(f).attr("data-includes"),null!=h&&h==a||null!=k&&-1<k.indexOf(a))return g(f);return null},gp:function(b){b&&this.Pg&&a.C.zm(b,
this.Pg)},xn:function(b){b&&(null==this.Pg&&(this.Pg=this.Mg.bind(this)),a.C.bl(b,this.Pg))},OEa:function(a){g(a).off("panstart panmove panend")},ABa:function(a){var d=this,e,f,h,k,l,m,r,t,s,q,p,n;e={recognizers:[[b.Pan,{direction:b.DIRECTION_VERTICAL}]]};g(a).tj(e).on("panstart",function(a){f=a.gesture.target;h=d.element[0].getBoundingClientRect().left+5;k=f.getBoundingClientRect().top;d.mW(g(f));l=f;m=f.getAttribute("data-range");r=k}).on("panmove",function(a){t=r;r=k+a.gesture.deltaY;f=document.elementFromPoint(h,
r);null!=f&&(s=r-t,l==f?(q=f.getAttribute("data-includes"),null!=q&&(q=q.split("|"),p=q.indexOf(m),n=null,0<s&&p<q.length-1?n=q[p+1]:0>s&&0<p&&(n=q[p-1]),null!=n&&(m=n,d.oW(n)))):f.hasAttribute("data-range")&&(q=f.getAttribute("data-includes"),n=null,null!=q&&(0<s&&f==l.nextElementSibling?n=q[0]:0>s&&f==l.previousElementSibling&&(n=q[q.length-1])),null==n&&(n=f.getAttribute("data-range")),l=f,m=n,d.oW(m)))}).on("panend",function(){n=r=m=l=null})},Mg:function(a,b){0<a&&0<b&&this.refresh()}})})();a.Ni=
function(a){this.Ea=a;this.Init()};o_("ListViewIndexerModel",a.Ni,a);a.b.sa(a.Ni,a.Aj,"oj.ListViewIndexerModel");a.Ni.prototype.getIndexablePrefixes=function(){return this.Ea.Y.F("indexerCharacters").split("|")};a.b.g("ListViewIndexerModel.prototype.getIndexablePrefixes",{getIndexablePrefixes:a.Ni.prototype.getIndexablePrefixes});a.Ni.prototype.getPrefixes=function(){null==this.IX&&(this.IX=this.Mta());return this.IX};a.b.g("ListViewIndexerModel.prototype.getPrefixes",{getPrefixes:a.Ni.prototype.getPrefixes});
a.Ni.prototype.Mta=function(){var a=[],b=this.Ea.gD();if(null!=b)for(var e=this.getIndexablePrefixes(),f=0;f<e.length;f++){var h=e[f];b.each(function(){if(0==g(this).text().indexOf(h))return a.push(h),!1})}return a};a.Ni.prototype.setPrefix=function(b){return b==a.Bg.PREFIX_OTHERS?this.vDa():this.xDa(b)};a.b.g("ListViewIndexerModel.prototype.setPrefix",{setPrefix:a.Ni.prototype.setPrefix});a.Ni.prototype.vDa=function(){var b,d=this,e,f,h,k,l;b=this.getIndexablePrefixes();return new Promise(function(m){e=
null;f=d.Ea.gD();null!=f&&f.each(function(){h=g(this).text();for(k=0;k<b.length;k++)if(l=b[k],0==h.indexOf(l))return!0;e=this;return!1});e?(d.Ea.pca(e),m(a.Bg.PREFIX_OTHERS)):m(null)})};a.Ni.prototype.xDa=function(a){var b,e,f=this,g=null,k;b=this.getIndexablePrefixes();e=b.indexOf(a);return new Promise(function(l){if(-1==e)l(null);else{for(;e<b.length;){a=b[e];k=f.uta(a);if(null!=k){f.Ea.pca(k);g=a;break}e++}l(g)}})};a.Ni.prototype.uta=function(a){var b,e,f;e=this.Ea.gD();null!=e&&e.each(function(){f=
g(this).text();if(0==f.indexOf(a))return b=this,!1});return b};a.Ni.prototype.vfa=function(){this.IX=null;this.handleEvent(a.Bg.O.CHANGE,{})};a.Bg=function(){};o_("IndexerModel",a.Bg,a);a.Bg.PREFIX_OTHERS="__others__";o_("IndexerModel.PREFIX_OTHERS",a.Bg.PREFIX_OTHERS,a);a.Bg.O={CHANGE:"change"};o_("IndexerModel.EventType",a.Bg.O,a);a.Bg.prototype.setPrefix=function(){};a.b.g("IndexerModel.prototype.setPrefix",{setPrefix:a.Bg.prototype.setPrefix});a.Bg.prototype.getIndexablePrefixes=function(){};
a.b.g("IndexerModel.prototype.getIndexablePrefixes",{getIndexablePrefixes:a.Bg.prototype.getIndexablePrefixes});a.Bg.prototype.getPrefixes=function(){};a.b.g("IndexerModel.prototype.getPrefixes",{getPrefixes:a.Bg.prototype.getPrefixes});a.Components.Wa("ojIndexer","baseComponent",{properties:{data:{}},methods:{getNodeBySubId:{},getSubIdByNode:{},refresh:{},widget:{}},extension:{_hasWrapper:!0,_innerElement:"ul",_widgetName:"ojIndexer"}});a.Components.register("oj-indexer",a.Components.getMetadata("ojIndexer"))});