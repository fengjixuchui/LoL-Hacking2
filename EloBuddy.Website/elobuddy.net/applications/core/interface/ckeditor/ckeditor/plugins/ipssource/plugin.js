﻿CKEDITOR.plugins.add("ipssource",{init:function(b){b.on("instanceReady",function(a){this.dataProcessor.writer.selfClosingEnd="\x3e";a=CKEDITOR.dtd;for(var b in CKEDITOR.tools.extend({},a.$nonBodyContent,a.$block,a.$listItem,a.$tableContent))this.dataProcessor.writer.setRules(b,{indent:!0,breakBeforeOpen:!0,breakAfterOpen:!0,breakBeforeClose:!0,breakAfterClose:!0})})}});