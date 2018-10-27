// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/geoenrichment/templates/PageNavigator.html":'\x3cdiv class\x3d"esriGEPageNavigator"\x3e\r\n    \x3cdiv class\x3d"dijitInline esriGESpaceAfter20 esriGEPaginationArrowLeft" data-dojo-attach-point\x3d"prevPageButton"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"dijitInline esriGESpaceAfter20 esriGEClickable" data-dojo-attach-point\x3d"currentPageLabel"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"dijitInline esriGEPaginationArrowRight" data-dojo-attach-point\x3d"nextPageButton"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/geoenrichment/PageNavigator","dojo/_base/declare dojo/on dojo/string dojo/dom-class dojo/dom-construct dojo/dom-style dijit/_WidgetBase dijit/_TemplatedMixin esri/dijit/geoenrichment/utils/DomUtil esri/dijit/geoenrichment/utils/NodeLabelEditor dojo/text!./templates/PageNavigator.html dojo/i18n!../../nls/jsapi".split(" "),function(f,c,g,d,n,p,h,k,e,l,m,b){b=b.geoenrichment.dijit.ReportPlayer.PageNavigator;return f([h,k],{templateString:m,nls:b,hideForSinglePage:!0,showArrows:!0,
_labelEditor:null,postCreate:function(){var a=this;this.inherited(arguments);this._labelEditor=new l({numericOnly:!0,onApply:function(b){a._showPageAt(b-1)},onCancel:function(){a._updatePageNavigator()}});this.showArrows?(c(this.prevPageButton,"click",function(){a._showPrevPage()}),c(this.nextPageButton,"click",function(){a._showNextPage()})):e.hide([this.prevPageButton,this.nextPageButton]);c(this.currentPageLabel,"click",function(){a._labelEditor.range={min:1,max:a.getNumPages()};a._labelEditor.editNodeLabel(a.currentPageLabel,
a._currentPageIndex+1)})},_currentPageIndex:0,_updatePageNavigator:function(){var a=this.getNumPages();e[1==a&&this.hideForSinglePage?"hide":"show"](this.domNode);this.currentPageLabel.innerHTML=g.substitute(b.currentPageOutOfN,{current:this._currentPageIndex+1,total:a});d[0==this._currentPageIndex?"add":"remove"](this.prevPageButton,"disabled");d[this._currentPageIndex==a-1?"add":"remove"](this.nextPageButton,"disabled")},_showPrevPage:function(){0!==this._currentPageIndex&&this.setCurrentPageIndex(this._currentPageIndex-
1,!0)},_showNextPage:function(){this._currentPageIndex!==this.getNumPages()-1&&this.setCurrentPageIndex(this._currentPageIndex+1,!0)},_showPageAt:function(a){0>a||a>this.getNumPages()-1||a===this._currentPageIndex||this.setCurrentPageIndex(a,!0)},getCurrentPageIndex:function(){return this._currentPageIndex},getNumPages:function(){return 0},setCurrentPageIndex:function(a,b){this._currentPageIndex=a;this._updatePageNavigator();b&&this.onPageChanged(this._currentPageIndex)},reset:function(){this.setCurrentPageIndex(0)},
onPageChanged:function(a){}})});