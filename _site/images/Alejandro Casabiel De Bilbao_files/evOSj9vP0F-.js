if (self.CavalryLogger) { CavalryLogger.start_js(["LyntS"]); }

__d("legacy:UIControllerRegistry",[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();b.__UIControllerRegistry=b.__UIControllerRegistry||{};}),3);
__d('NavigationTimingRecorder',['Banzai','BanzaiScuba','URI','performance'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='navigation_timing';if(c('performance').timing){var i=c('performance').timing,j=false,k=new (c('BanzaiScuba'))(h,null,{addBrowserFields:true,addGeoFields:true,addPredictedGeographyFields:true,addMobileDeviceFields:true}),l=function o(){var p={};return function(q,r){if(!(q in i||q in p)){p[q]=r;k.addInteger(q,r);}};},m=function o(){if(j)return;var p=Object.keys(i);if(p.length===0)if(typeof i.toJSON==='function'){p=Object.keys(i.toJSON());}else p=Object.keys(Object.getPrototypeOf(i));p.forEach(function(u){if(i[u])k.addInteger(u,i[u]);});var q=l();if(b.MCustomTimingRecorder){var r=b.MCustomTimingRecorder.getMarks();r.forEach(function(u){q(u.name,u.date);});}if(c('performance').getEntriesByType){var s=c('performance').getEntriesByType("mark");s.forEach(function(u){q(u.name,Math.round(u.startTime)+c('performance').timing.navigationStart);});}var t=new (c('URI'))(b.location.href);k.addNormal('protocol',t.getProtocol());k.addNormal('domain',t.getDomain());k.addNormal('port',t.getPort());k.addNormal('path',t.getPath());k.post();j=true;},n=function o(){c('Banzai').subscribe(c('Banzai').SEND,m);};if(b.document.readyState==='complete'){n();}else b.addEventListener('load',n);}}),null);