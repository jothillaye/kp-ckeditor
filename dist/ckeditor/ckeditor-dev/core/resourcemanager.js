﻿/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.resourceManager=function(a,b){this.basePath=a;this.fileName=b;this.registered={};this.loaded={};this.externals={};this._={waitingList:{}}};
CKEDITOR.resourceManager.prototype={add:function(a,b){if(this.registered[a])throw Error('[CKEDITOR.resourceManager.add] The resource name "'+a+'" is already registered.');var d=this.registered[a]=b||{};d.name=a;d.path=this.getPath(a);CKEDITOR.fire(a+CKEDITOR.tools.capitalize(this.fileName)+"Ready",d);return this.get(a)},get:function(a){return this.registered[a]||null},getPath:function(a){var b=this.externals[a];return CKEDITOR.getUrl(b&&b.dir||this.basePath+a+"/")},getFilePath:function(a){var b=this.externals[a];
return CKEDITOR.getUrl(this.getPath(a)+(b?b.file:this.fileName+".js"))},addExternal:function(a,b,d){a=a.split(",");for(var g=0;g<a.length;g++){var h=a[g];d||(b=b.replace(/[^\/]+$/,function(a){d=a;return""}));this.externals[h]={dir:b,file:d||this.fileName+".js"}}},load:function(a,b,d){CKEDITOR.tools.isArray(a)||(a=a?[a]:[]);for(var g=this.loaded,h=this.registered,n=[],k={},l={},f=0;f<a.length;f++){var c=a[f];if(c)if(g[c]||h[c])l[c]=this.get(c);else{var e=this.getFilePath(c);n.push(e);e in k||(k[e]=
[]);k[e].push(c)}}CKEDITOR.scriptLoader.load(n,function(a,c){if(c.length)throw Error('[CKEDITOR.resourceManager.load] Resource name "'+k[c[0]].join(",")+'" was not found at "'+c[0]+'".');for(var e=0;e<a.length;e++)for(var h=k[a[e]],f=0;f<h.length;f++){var m=h[f];l[m]=this.get(m);g[m]=1}b.call(d,l)},this)}};