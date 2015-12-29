﻿/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
(function(){function k(a){var e=this.editor,b=a.document,c=b.body,d=b.getElementById("cke_actscrpt");d&&d.parentNode.removeChild(d);(d=b.getElementById("cke_shimscrpt"))&&d.parentNode.removeChild(d);(d=b.getElementById("cke_basetagscrpt"))&&d.parentNode.removeChild(d);c.contentEditable=!0;CKEDITOR.env.ie&&(c.hideFocus=!0,c.disabled=!0,c.removeAttribute("disabled"));delete this._.isLoadingData;this.$=c;b=new CKEDITOR.dom.document(b);this.setup();this.fixInitialSelection();CKEDITOR.env.ie&&(b.getDocumentElement().addClass(b.$.compatMode),
e.config.enterMode!=CKEDITOR.ENTER_P&&this.attachListener(b,"selectionchange",function(){var a=b.getBody(),c=e.getSelection(),d=c&&c.getRanges()[0];d&&(a.getHtml().match(/^<p>(?:&nbsp;|<br>)<\/p>$/i)&&d.startContainer.equals(a))&&setTimeout(function(){d=e.getSelection().getRanges()[0];if(!d.startContainer.equals("body")){a.getFirst().remove(1);d.moveToElementEditEnd(a);d.select()}},0)}));if(CKEDITOR.env.webkit||CKEDITOR.env.ie&&10<CKEDITOR.env.version)b.getDocumentElement().on("mousedown",function(a){a.data.getTarget().is("html")&&
setTimeout(function(){e.editable().focus()})});l(e);try{e.document.$.execCommand("2D-position",!1,!0)}catch(g){}(CKEDITOR.env.gecko||CKEDITOR.env.ie&&"CSS1Compat"==e.document.$.compatMode)&&this.attachListener(this,"keydown",function(a){var b=a.data.getKeystroke();if(b==33||b==34)if(CKEDITOR.env.ie)setTimeout(function(){e.getSelection().scrollIntoView()},0);else if(e.window.$.innerHeight>this.$.offsetHeight){var c=e.createRange();c[b==33?"moveToElementEditStart":"moveToElementEditEnd"](this);c.select();
a.data.preventDefault()}});CKEDITOR.env.ie&&this.attachListener(b,"blur",function(){try{b.$.selection.empty()}catch(a){}});CKEDITOR.env.iOS&&this.attachListener(b,"touchend",function(){a.focus()});c=e.document.getElementsByTag("title").getItem(0);c.data("cke-title",c.getText());CKEDITOR.env.ie&&(e.document.$.title=this._.docTitle);CKEDITOR.tools.setTimeout(function(){if(this.status=="unloaded")this.status="ready";e.fire("contentDom");if(this._.isPendingFocus){e.focus();this._.isPendingFocus=false}setTimeout(function(){e.fire("dataReady")},
0);CKEDITOR.env.ie&&setTimeout(function(){if(e.document){var a=e.document.$.body;a.runtimeStyle.marginBottom="0px";a.runtimeStyle.marginBottom=""}},1E3)},0,this)}function l(a){function e(){var c;a.editable().attachListener(a,"selectionChange",function(){var d=a.getSelection().getSelectedElement();d&&(c&&(c.detachEvent("onresizestart",b),c=null),d.$.attachEvent("onresizestart",b),c=d.$)})}function b(a){a.returnValue=!1}if(CKEDITOR.env.gecko)try{var c=a.document.$;c.execCommand("enableObjectResizing",
!1,!a.config.disableObjectResizing);c.execCommand("enableInlineTableEditing",!1,!a.config.disableNativeTableHandles)}catch(d){}else CKEDITOR.env.ie&&(11>CKEDITOR.env.version&&a.config.disableObjectResizing)&&e(a)}function m(){var a=[];if(8<=CKEDITOR.document.$.documentMode){a.push("html.CSS1Compat [contenteditable=false]{min-height:0 !important}");var e=[],b;for(b in CKEDITOR.dtd.$removeEmpty)e.push("html.CSS1Compat "+b+"[contenteditable=false]");a.push(e.join(",")+"{display:inline-block}")}else CKEDITOR.env.gecko&&
(a.push("html{height:100% !important}"),a.push("img:-moz-broken{-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"));a.push("html{cursor:text;*cursor:auto}");a.push("img,input,textarea{cursor:default}");return a.join("\n")}CKEDITOR.plugins.add("wysiwygarea",{init:function(a){a.config.fullPage&&a.addFeature({allowedContent:"html head title; style [media,type]; body (*)[id]; meta link [*]",requiredContent:"body"});a.addMode("wysiwyg",function(e){function b(b){b&&b.removeListener();a.editable(new j(a,
d.$.contentWindow.document.body));a.setData(a.getData(1),e)}var c="document.open();"+(CKEDITOR.env.ie?"("+CKEDITOR.tools.fixDomain+")();":"")+"document.close();",c=CKEDITOR.env.air?"javascript:void(0)":CKEDITOR.env.ie?"javascript:void(function(){"+encodeURIComponent(c)+"}())":"",d=CKEDITOR.dom.element.createFromHtml('<iframe src="'+c+'" frameBorder="0"></iframe>');d.setStyles({width:"100%",height:"100%"});d.addClass("cke_wysiwyg_frame cke_reset");var g=a.ui.space("contents");g.append(d);if(c=CKEDITOR.env.ie||
CKEDITOR.env.gecko)d.on("load",b);var f=a.title,h=a.fire("ariaEditorHelpLabel",{}).label;f&&(CKEDITOR.env.ie&&h&&(f+=", "+h),d.setAttribute("title",f));if(h){var f=CKEDITOR.tools.getNextId(),i=CKEDITOR.dom.element.createFromHtml('<span id="'+f+'" class="cke_voice_label">'+h+"</span>");g.append(i,1);d.setAttribute("aria-describedby",f)}a.on("beforeModeUnload",function(a){a.removeListener();i&&i.remove()});d.setAttributes({tabIndex:a.tabIndex,allowTransparency:"true"});!c&&b();CKEDITOR.env.webkit&&
(c=function(){g.setStyle("width","100%");d.hide();d.setSize("width",g.getSize("width"));g.removeStyle("width");d.show()},d.setCustomData("onResize",c),CKEDITOR.document.getWindow().on("resize",c));a.fire("ariaWidget",d)})}});CKEDITOR.editor.prototype.addContentsCss=function(a){var e=this.config,b=e.contentsCss;CKEDITOR.tools.isArray(b)||(e.contentsCss=b?[b]:[]);e.contentsCss.push(a)};var j=CKEDITOR.tools.createClass({$:function(){this.base.apply(this,arguments);this._.frameLoadedHandler=CKEDITOR.tools.addFunction(function(a){CKEDITOR.tools.setTimeout(k,
0,this,a)},this);this._.docTitle=this.getWindow().getFrame().getAttribute("title")},base:CKEDITOR.editable,proto:{setData:function(a,e){var b=this.editor;if(e)this.setHtml(a),this.fixInitialSelection(),b.fire("dataReady");else{this._.isLoadingData=!0;b._.dataStore={id:1};var c=b.config,d=c.fullPage,g=c.docType,f=CKEDITOR.tools.buildStyleHtml(m()).replace(/<style>/,'<style data-cke-temp="1">');d||(f+=CKEDITOR.tools.buildStyleHtml(b.config.contentsCss));var h=c.baseHref?'<base href="'+c.baseHref+'" data-cke-temp="1" />':
"";d&&(a=a.replace(/<!DOCTYPE[^>]*>/i,function(a){b.docType=g=a;return""}).replace(/<\?xml\s[^\?]*\?>/i,function(a){b.xmlDeclaration=a;return""}));a=b.dataProcessor.toHtml(a);d?(/<body[\s|>]/.test(a)||(a="<body>"+a),/<html[\s|>]/.test(a)||(a="<html>"+a+"</html>"),/<head[\s|>]/.test(a)?/<title[\s|>]/.test(a)||(a=a.replace(/<head[^>]*>/,"$&<title></title>")):a=a.replace(/<html[^>]*>/,"$&<head><title></title></head>"),h&&(a=a.replace(/<head[^>]*?>/,"$&"+h)),a=a.replace(/<\/head\s*>/,f+"$&"),a=g+a):a=
c.docType+'<html dir="'+c.contentsLangDirection+'" lang="'+(c.contentsLanguage||b.langCode)+'"><head><title>'+this._.docTitle+"</title>"+h+f+"</head><body"+(c.bodyId?' id="'+c.bodyId+'"':"")+(c.bodyClass?' class="'+c.bodyClass+'"':"")+">"+a+"</body></html>";CKEDITOR.env.gecko&&(a=a.replace(/<body/,'<body contenteditable="true" '),2E4>CKEDITOR.env.version&&(a=a.replace(/<body[^>]*>/,"$&<\!-- cke-content-start --\>")));c='<script id="cke_actscrpt" type="text/javascript"'+(CKEDITOR.env.ie?' defer="defer" ':
"")+">var wasLoaded=0;function onload(){if(!wasLoaded)window.parent.CKEDITOR.tools.callFunction("+this._.frameLoadedHandler+",window);wasLoaded=1;}"+(CKEDITOR.env.ie?"onload();":'document.addEventListener("DOMContentLoaded", onload, false );')+"<\/script>";CKEDITOR.env.ie&&9>CKEDITOR.env.version&&(c+='<script id="cke_shimscrpt">window.parent.CKEDITOR.tools.enableHtml5Elements(document)<\/script>');h&&(CKEDITOR.env.ie&&10>CKEDITOR.env.version)&&(c+='<script id="cke_basetagscrpt">var baseTag = document.querySelector( "base" );baseTag.href = baseTag.href;<\/script>');
a=a.replace(/(?=\s*<\/(:?head)>)/,c);this.clearCustomData();this.clearListeners();b.fire("contentDomUnload");var i=this.getDocument();try{i.write(a)}catch(j){setTimeout(function(){i.write(a)},0)}}},getData:function(a){if(a)return this.getHtml();var a=this.editor,e=a.config,b=e.fullPage,c=b&&a.docType,d=b&&a.xmlDeclaration,g=this.getDocument(),b=b?g.getDocumentElement().getOuterHtml():g.getBody().getHtml();CKEDITOR.env.gecko&&e.enterMode!=CKEDITOR.ENTER_BR&&(b=b.replace(/<br>(?=\s*(:?$|<\/body>))/,
""));b=a.dataProcessor.toDataFormat(b);d&&(b=d+"\n"+b);c&&(b=c+"\n"+b);return b},focus:function(){this._.isLoadingData?this._.isPendingFocus=!0:j.baseProto.focus.call(this)},detach:function(){var a=this.editor,e=a.document,a=a.window.getFrame();j.baseProto.detach.call(this);this.clearCustomData();e.getDocumentElement().clearCustomData();a.clearCustomData();CKEDITOR.tools.removeFunction(this._.frameLoadedHandler);(e=a.removeCustomData("onResize"))&&e.removeListener();a.remove()}}})})();
CKEDITOR.config.disableObjectResizing=!1;CKEDITOR.config.disableNativeTableHandles=!0;CKEDITOR.config.disableNativeSpellChecker=!0;CKEDITOR.config.contentsCss=CKEDITOR.getUrl("contents.css");