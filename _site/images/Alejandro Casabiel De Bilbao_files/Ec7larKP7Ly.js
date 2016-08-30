if (self.CavalryLogger) { CavalryLogger.start_js(["04h1R"]); }

__d('XUIDialogHeader.react',['cx','fbt','React','XUICardHeader.react','XUICloseButton.react'],(function a(b,c,d,e,f,g,h,i){var j,k;if(c.__markCompiled)c.__markCompiled();var l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;m.prototype.render=function(){'use strict';var n=null;if(this.props.showCloseButton)n=c('React').createElement(c('XUICloseButton.react'),{label:this.props.closeButtonText,className:"layerCancel _51-t"});return (c('React').createElement(c('XUICardHeader.react'),babelHelpers['extends']({},this.props,{className:"_4-i0",link:n,type:'primary'}),this.props.children));};function m(){'use strict';j.apply(this,arguments);}m.propTypes={closeButtonText:l.string,showCloseButton:l.bool,activeTabKey:l.string,defaultActiveTabKey:l.string,onTabClick:l.func};m.defaultProps={closeButtonText:i._("Cerrar"),onTabClick:function n(){return true;},showCloseButton:true};f.exports=m;}),null);
__d('XUIRadioList.react',['cx','Focus','InputLabel.react','Map','React','RTLKeys','XUIRadioInput.react','joinClasses','KeyStatus','VirtualCursorStatus'],(function a(b,c,d,e,f,g,h){var i,j,k,l;if(c.__markCompiled)c.__markCompiled();var m=c('KeyStatus').isKeyDown,n=c('VirtualCursorStatus').isVirtualCursorTriggered,o=c('React').PropTypes;i=babelHelpers.inherits(p,c('React').Component);j=i&&i.prototype;function p(){var q,r;'use strict';for(var s=arguments.length,t=Array(s),u=0;u<s;u++)t[u]=arguments[u];return q=(r=j.constructor).call.apply(r,[this].concat(t)),this.$XUIRadioList3=function(v){if(v>=this.$XUIRadioList1.size){v=0;}else if(v<0)v=this.$XUIRadioList1.size-1;var w=this.$XUIRadioList1.get(v),x=this.$XUIRadioList2.get(v);if(!w.props.disabled)x.getElementsByTagName('input')[0].click();c('Focus').set(x);}.bind(this),this.$XUIRadioList4=function(v){return function(event){switch(event.keyCode){case c('RTLKeys').UP:case c('RTLKeys').getLeft():event.preventDefault();this.$XUIRadioList3(v-1);break;case c('RTLKeys').DOWN:case c('RTLKeys').getRight():event.preventDefault();this.$XUIRadioList3(v+1);break;case c('RTLKeys').SPACE:event.preventDefault();this.$XUIRadioList3(v);break;}}.bind(this);}.bind(this),q;}p.prototype.componentWillMount=function(){'use strict';this.$XUIRadioList1=new (c('Map'))();this.$XUIRadioList2=new (c('Map'))();};p.prototype.render=function(){'use strict';var q=c('React').Children.map(this.props.children,function(t){return t?t.props.value:null;}).some(function(t){return t===this.props.selectedValue;}.bind(this)),r=c('React').Children.map(this.props.children,function(t,u){return t===null?null:c('React').cloneElement(t,{name:this.props.name,onKeyDown:this.$XUIRadioList4(u),onSelect:this.props.onValueChange,ref:function(v){this.$XUIRadioList1.set(u,v);}.bind(this),selectedValue:this.props.selectedValue,setupRadioRef:function(v){this.$XUIRadioList2.set(u,v);}.bind(this),tabIndex:this.props.selectedValue===t.props.value||!q&&u===0?0:-1});},this),s=this.props.selectedValue!==undefined&&!this.props.onValueChange;return (c('React').createElement('ul',babelHelpers['extends']({},this.props,{'aria-readonly':s,name:null,role:'radiogroup'}),r));};p.propTypes={name:o.string,onValueChange:o.func,selectedValue:o.any};p.Item=(l=k=function(){var q,r;q=babelHelpers.inherits(s,c('React').Component);r=q&&q.prototype;function s(){var t,u;'use strict';for(var v=arguments.length,w=Array(v),x=0;x<v;x++)w[x]=arguments[x];return t=(u=r.constructor).call.apply(u,[this].concat(w)),this.state={showFocusRing:false},this.$_class1=function(){this.setState({showFocusRing:false});}.bind(this),this.$_class2=function(){if(m()||n())this.setState({showFocusRing:true});}.bind(this),this.$_class3=function(event){this.props.onSelect&&this.props.onSelect(event.target.value);}.bind(this),t;}s.prototype.render=function(){'use strict';var t=this.props.selectedValue===this.props.value,u=!!this.props.disabled;return c('React').createElement('li',{'aria-checked':t,'aria-disabled':u,className:c('joinClasses')(this.props.className,!this.state.showFocusRing?"_1az7":''),onBlur:this.$_class1,onFocus:this.$_class2,onKeyDown:this.props.onKeyDown,ref:this.props.setupRadioRef,role:'radio',tabIndex:this.props.tabIndex},c('React').createElement(c('InputLabel.react'),{'aria-label':this.props['aria-label'],'data-hover':this.props['data-hover'],'data-tooltip-content':this.props['data-tooltip-content'],'data-tooltip-position':this.props['data-tooltip-position'],display:'inline'},c('React').createElement(c('XUIRadioInput.react'),{checked:t,disabled:u,name:this.props.name,onChange:this.$_class3,tabIndex:-1,value:this.props.value}),c('React').createElement('label',null,this.props.children)));};return s;}(),k.propTypes={disabled:o.bool,name:o.string,onKeyDown:o.func,onSelect:o.func,selectedValue:o.any,setupRadioRef:o.func,tabIndex:o.number,value:o.any},l);f.exports=p;}),null);
__d('MessengerProfileImageWrapper.react',['cssVar','cx','React','TooltipData','getViewportDimensions','joinClasses'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l,m;if(c.__markCompiled)c.__markCompiled();var n=c('React').PropTypes;j=babelHelpers.inherits(o,c('React').PureComponent);k=j&&j.prototype;function o(){var q,r;for(var s=arguments.length,t=Array(s),u=0;u<s;u++)t[u]=arguments[u];return q=(r=k.constructor).call.apply(r,[this].concat(t)),this.$MessengerProfileImageWrapper1=function(){if(!this.props.showBadge||this.props.isMessengerUser==null)return null;return (c('React').createElement(p,{className:"_4ld_",isMessengerUser:this.props.isMessengerUser}));}.bind(this),q;}o.prototype.render=function(){var q={};if(this.props.tooltipContent){var r=c('getViewportDimensions')().width,s=parseInt("640px".replace('px',''),10),t=r<=s?'above':'left';Object.assign(q,c('TooltipData').propsFor(this.props.tooltipContent,t));}return c('React').createElement('div',babelHelpers['extends']({className:c('joinClasses')("_4ldz",this.props.className),style:{width:this.props.size+'px',height:this.props.size+'px'}},q),c('React').createElement('div',{className:"_4ld-",style:{width:this.props.size+'px',height:this.props.size+'px'}},this.props.children),this.$MessengerProfileImageWrapper1());};o.propTypes={isMessengerUser:n.bool,showBadge:n.bool,size:n.number,tooltipContent:n.string};l=babelHelpers.inherits(p,c('React').PureComponent);m=l&&l.prototype;p.prototype.render=function(){return (c('React').createElement('div',{className:c('joinClasses')(this.props.className,"_2pom")},c('React').createElement('div',{className:"_2pon"+(this.props.isMessengerUser?' '+"_2poo":'')+(!this.props.isMessengerUser?' '+"_2pop":'')})));};function p(){l.apply(this,arguments);}p.propTypes={isMessengerUser:n.bool,size:n.number};f.exports=o;}),null);
__d('MessengerContactImage.react',['Image.react','MessengerProfileImageWrapper.react','React'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').PureComponent);i=h&&h.prototype;k.prototype.render=function(){'use strict';return (c('React').createElement('div',{className:this.props.className},c('React').createElement(c('MessengerProfileImageWrapper.react'),{isMessengerUser:this.props.isMessengerUser,size:this.props.size,showBadge:true},c('React').createElement(c('Image.react'),{alt:'',height:this.props.size,src:this.props.src,width:this.props.size}))));};function k(){'use strict';h.apply(this,arguments);}k.propTypes={isMessengerUser:j.bool,size:j.number.isRequired,src:c('Image.react').validateImageSrcPropType};f.exports=k;}),null);
__d('MessengerDialogTitle.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){return (c('React').createElement('div',{className:c('joinClasses')("_19jt",this.props.className)},this.props.children));};function k(){i.apply(this,arguments);}f.exports=k;}),null);
__d('ArtilleryTraceIDUtils',['Alea','ErrorUtils','ServerNonce'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',i=c('Alea')(c('ServerNonce').ServerNonce),j=function l(){var m=0,n=0,o='';for(var p=10;p>=0;p--){if(m<6){n=Math.floor(2147483648*i());m=32;}if(p===0)n&=7;o+=h.charAt(n&63);n>>=6;m-=6;}return o;},k={newTraceId:function l(){var m=void 0;for(var n=3;n>0;n--){m=j();if(m!=this.getDummyId())return m;}c('ErrorUtils').reportError(new Error('failed to generate valid Fbtrace id'));return this.getDummyId();},newObjectId:function l(){return this.newTraceId();},getDummyId:function l(){return 'AAAAAAAAAAA';},traceIdToBucket:function l(m){var n=m.charAt(m.length-1);return h.indexOf(n)%32;}};f.exports=k;}),null);
__d('BanzaiScribe',['Banzai'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j){return {log:function k(l,m,n){var o=[m];if(n!=null)o.push(n);c('Banzai').post('scribe:'+l,o,j);}};}var i=h({});i.create=h;f.exports=i;}),null);
__d('SamplingPolicyBase',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){'use strict';throw 'Tried to instantiate SamplingPolicyBase';}h.prototype.getName=function(){'use strict';return this.name;};h.prototype.isSampled=function(){'use strict';if(typeof this.sampled=='undefined')this.sampled=this.decideIfSampled();return this.sampled;};f.exports=h;}),null);
__d('FbtraceForcedByServerPolicy',['FbtraceForcedByServer','SamplingPolicyBase'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=void 0;function i(){this.name='FbtraceForcedByServerPolicy';}i.get=function(){if(typeof h=='undefined')h=new i();return h;};function j(){return c('FbtraceForcedByServer').forced;}Object.assign(i.prototype,c('SamplingPolicyBase').prototype,{decideIfSampled:j});f.exports=i;}),null);
__d("guardFunction",[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k){return function(){if(i.apply(k||this,arguments))j.apply(k||this,arguments);};}f.exports=h;}),null);
__d('Fbtrace',['Arbiter','ArtilleryTraceIDUtils','BanzaiScribe','FbtraceForcedByServer','FbtraceForcedByServerPolicy','SiteData','guardFunction'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(){Object.assign(this,h);}Object.assign(h,{isOn:function s(){return false;},replySend:function s(t,u){},requestSend:function s(t,u,v){m(t,u);return {metadata:function w(){return undefined;},replyReceive:function w(x){}};}});var i=new h();function j(s,t,u){if(!s)throw {name:'ArgumentError',message:'no valid service name specified'};if(!t)throw {name:'ArgumentError',message:'no valid version specified'};var v=c('BanzaiScribe'),w=0,x=c('ArtilleryTraceIDUtils').newTraceId(),y=c('ArtilleryTraceIDUtils').newObjectId(),z=c('ArtilleryTraceIDUtils').traceIdToBucket(x),aa={service:s,version:t},ba=function ga(ha){if(typeof ha=='undefined')return 'undefined';if(typeof ha!='string')ha=ga(JSON.stringify(ha));return ha;},ca=function ga(ha){var ia='';for(var ja in ha){if(ia.length>0)ia+='\x02';ia+=ba(ja)+'\x03'+ba(ha[ja]);}return ia;},da=function ga(ha,ia,event,ja,ka){w++;return [ka,w,x,ha,ia,ba(event),ca(ja)].join('\x01');},ea=function ga(ha,ia,event,ja,ka){if(!ka&&typeof ka=='undefined')ka=Date.now()*1000;var la=da(ha,ia,event,ja,ka);v.log('fbtrace',la,z);},fa=function ga(){return y;};ea(c('ArtilleryTraceIDUtils').getDummyId(),y,'#rqrecv',Object.assign(u||{},aa));Object.assign(this,j,{replySend:function ga(ha,ia){ia=babelHelpers['extends']({},ia,aa,{success:ha?'true':'false'});ea(c('ArtilleryTraceIDUtils').getDummyId(),y,'#rpsend',ia);},requestSend:function ga(ha,ia,ja){m(ha,ia);var ka=fa(),la=c('ArtilleryTraceIDUtils').newObjectId();ja=babelHelpers['extends']({},ja,aa,{op:ha,'remote:service':ia});ea(ka,la,'#rqsend',ja);return {metadata:function ma(){return x+la;},replyReceive:function ma(na){ea(ka,la,'#rprecv',Object.assign(na||{},aa));},parentNode:this};}});}Object.assign(j,{isOn:function s(){return true;}});function k(){return i;}function l(s,t,u){u=u||{};u.init=true;var v=c('FbtraceForcedByServerPolicy').get();if(v.isSampled()){return new j(s,t,u);}else return new h();}function m(s,t){if(!s)throw {name:'ArgumentError',message:'no valid operation specified'};if(!t)throw {name:'ArgumentError',message:'no valid remote:service specified'};}function n(s,t){var u=i,v=void 0;i=s;try{v=t();}finally{i=u;}return v;}var o=function s(t,u){var v=k(),w=u.request,x=false;if(!v.isOn()&&c('FbtraceForcedByServer').forced&&/\/upload\/(?:composer|photos)\/|\/ajax\/composerx\/attachment\/media\//.test(w.uri.toString())){v=l('photo_upload_kludge',String(c('SiteData').revision||'dev'),{policy:'PhotoUpload'});x=true;}if(v.isOn()){var y=x?{policy:'PhotoUpload'}:{};if(w.userActionId)y.user_action_id=w.userActionId;var z=v.requestSend(w.uri.toString(),'www',y);w.fbtraceRemoteNode=z;w.transport.setRequestHeader('X-Fbtrace-Meta',z.metadata());}},p=function s(t,u){u.request.fbtraceRemoteNode.replyReceive({is_last:u.response.is_last,success:true});setTimeout(function(){u.request.fbtraceRemoteNode.parentNode.replySend(true,{});},0);},q=function s(t,u){u.request.fbtraceRemoteNode.replyReceive({is_last:u.response.is_last,success:false,error_code:u.response.error,error_summary:u.response.errorSummary,error_description:u.response.errorDescription});setTimeout(function(){u.request.fbtraceRemoteNode.parentNode.replySend(false,{});},0);},r=function s(t,u){return u.request.fbtraceRemoteNode;};c('Arbiter').subscribe('AsyncRequest/will_send',o);c('Arbiter').subscribe('AsyncRequest/response',c('guardFunction')(r,p));c('Arbiter').subscribe('AsyncRequest/error',c('guardFunction')(r,q));f.exports={defaultNode:k,requestReceive:l,withDefaultNode:n};}),null);
__d('FileFormResetOnSubmit',['DOMQuery','Event','emptyFunction'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j,k){var l=c('Event').listen(j,'change',c('emptyFunction').thatReturnsFalse,c('Event').Priority.URGENT);try{k();}catch(m){throw m;}finally{l.remove();}}function i(j){'use strict';this._form=j;}i.prototype.enable=function(){'use strict';var j=this._reset.bind(this);this._subscription=this._form.subscribe('submit',function(){setTimeout(j,0);});};i.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;};i.prototype._reset=function(){'use strict';var j=this._form.getRoot();h(j,function(){var k=c('DOMQuery').scry(j,'input[type="file"]');k.forEach(function(l){l.value='';});});};f.exports=i;}),null);
__d('Token',['fbt','CSS','DataStore','DOM','Locale','UnicodeBidi'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j,k){'use strict';this.info=j;this.paramName=k;}i.prototype.getInfo=function(){'use strict';return this.info;};i.prototype.getText=function(){'use strict';return this.info.text;};i.prototype.getValue=function(){'use strict';return this.info.uid;};i.prototype.isFreeform=function(){'use strict';return !!this.info.freeform;};i.prototype.setSelected=function(j){'use strict';c('CSS').conditionClass(this.getElement(),'uiTokenSelected',j);return this;};i.prototype.getElement=function(){'use strict';if(!this.element)this.setElement(this.createElement());return this.element;};i.prototype.setElement=function(j){'use strict';c('DataStore').set(j,'Token',this);this.element=j;return this;};i.prototype.isRemovable=function(){'use strict';return c('CSS').hasClass(this.element,'removable');};i.prototype.getTextDirection=function(){'use strict';var j=c('UnicodeBidi').isDirectionRTL(this.getText()),k=c('Locale').isRTL();if(j&&!k)return 'rtl';if(!j&&k)return 'ltr';return null;};i.prototype.createElement=function(j,k){'use strict';var l=this.paramName,m=this.getValue(),n=this.getText(),o=c('DOM').create('span',{className:'uiTokenText'},n),p=c('DOM').create('a',{href:'#','aria-label':h._("\u00bfEliminar {item}?",[h.param('item',n)]),className:'remove uiCloseButton uiCloseButtonSmall'});if(j)c('CSS').addClass(p,'uiCloseButtonSmallGray');var q=c('DOM').create('input',{type:'hidden',value:m,name:l+'[]',autocomplete:'off'}),r=c('DOM').create('input',{type:'hidden',value:n,name:'text_'+l+'[]',autocomplete:'off'}),s={className:'removable uiToken'},t=this.getTextDirection();if(t!==null)s.dir=t;var u=c('DOM').create('span',s,[o,q,r,p]);if(j)c('CSS').addClass(u,'uiTokenGray');if(k){var v=c('DOM').create('i',{className:k});c('DOM').prependContent(u,v);}return u;};f.exports=i;}),null);
__d('WeakToken',['CSS','Token'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('Token'));i=h&&h.prototype;j.prototype.createElement=function(){'use strict';var k=i.createElement.call(this,true,'UFIWeakReferenceIcon');c('CSS').addClass(k,'uiTokenWeakReference');return k;};function j(){'use strict';h.apply(this,arguments);}f.exports=j;}),null);
__d('Tokenizer',['Arbiter','ArbiterMixin','CSS','DataStore','DOM','DOMQuery','Event','Focus','Input','Keys','Parent','StickyPlaceholderInput','Style','TextMetrics','Token','UserAgent_DEPRECATED','WeakToken','createObjectFrom','emptyFunction','mixin'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j=20;h=babelHelpers.inherits(k,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;function k(l,m,n){'use strict';i.constructor.call(this);this.element=l;this.typeahead=m;this.input=m.getCore().getElement();if(n)this.init(n.tokenarea,n.param_name,n.initial_info,n.options);c('DataStore').set(this.element,'Tokenizer',this);}k.prototype.init=function(l,m,n,o){'use strict';this._handleEvents=this.handleEvents.bind(this);this.init=c('emptyFunction');this.setTokenarea(l);this.paramName=m;if(!this.placeholder)this.placeholder=this.input.getAttribute('data-placeholder')||this.input.getAttribute('placeholder')||'';Object.assign(this,o);this.initEvents();this.initTypeahead();this.reset(n);this.initBehaviors();setTimeout(this.adjustWidth.bind(this),0);c('Arbiter').inform('Tokenizer/init',this,c('Arbiter').BEHAVIOR_PERSISTENT);this.inform('init',{tokens:this.getTokens()});};k.prototype.reset=function(l){'use strict';this.tokens=[];this.unique={};if(l){this.populate(l);}else c('DOM').empty(this.tokenarea);this.updateTokenarea();};k.prototype.populate=function(l){'use strict';var m=[];this.tokens=this.getTokenElements().map(function(n,o){var p=l[o];m.push(this._tokenKey(p));return this.createToken(p,n);},this);this.unique=c('createObjectFrom')(m,this.tokens);};k.prototype.setTokenarea=function(l){'use strict';var m=!this.tokenarea;if(l!==this.tokenarea){if(this.tokenarea){c('DOM').remove(this.tokenarea);for(var n in this._tokenareaListeners)this._tokenareaListeners[n].remove();}this._tokenareaListeners=c('Event').listen(l,{click:this._handleEvents,keydown:this._handleEvents});this.tokenarea=l;}if(!m)this.reset();};k.prototype.getElement=function(){'use strict';return this.element;};k.prototype.getTypeahead=function(){'use strict';return this.typeahead;};k.prototype.getInput=function(){'use strict';return this.input;};k.prototype.initBehaviors=function(){'use strict';this.behaviors=this.behaviors||[];if(this.behaviors instanceof Array){this.behaviors.forEach(function(n){n.behavior(this,n.config);}.bind(this));}else for(var l in this.behaviors||{}){var m=window.TokenizerBehaviors&&window.TokenizerBehaviors[l];m.call(null,this,this.behaviors[l]);}};k.prototype.initTypeahead=function(){'use strict';var l=this.typeahead.getCore();l.resetOnSelect=true;l.setValueOnSelect=false;l.preventFocusChangeOnTab=true;if(this.inline){var m=this.typeahead.getView();c('CSS').addClass(m.getElement(),'uiInlineTokenizerView');}this.typeahead.subscribe('select',function(n,o){return this.handleSelect(o);}.bind(this));this.typeahead.subscribe('blur',this.handleBlur.bind(this));};k.prototype.handleBlur=function(event){'use strict';this.inform('blur',{event:event});this.updatePlaceholder();};k.prototype.handleSelect=function(l){'use strict';var m=l.selected;if('uid' in m){this.updateInput();this.addToken(this.createToken(m));}};k.prototype.initEvents=function(){'use strict';var l=c('UserAgent_DEPRECATED').firefox()<4?'keypress':'keydown';c('Event').listen(this.input,'paste',this.paste.bind(this));c('Event').listen(this.input,l,this.keydown.bind(this));};k.prototype.handleEvents=function(event){'use strict';var l=event.getTarget(),m=l&&this.getTokenElementFromTarget(l);if(!m)return;if(event.type!='keydown'||c('Event').getKeyCode(event)==c('Keys').RETURN)this.processEvents(event,l,m);};k.prototype.processEvents=function(event,l,m){'use strict';if(c('Parent').byClass(l,'remove')){var n=m.nextSibling;n=n&&c('DOMQuery').scry(m.nextSibling,'.remove')[0];var o=this.getTokenFromElement(m);o=this.addTokenData(o,l);this.removeToken(o);this.focusOnTokenRemoval(event,n);event.kill();}};k.prototype.focusOnTokenRemoval=function(event,l){'use strict';c('Focus').set(event.type=='keydown'&&l||this.input);};k.prototype.addTokenData=function(l,m){'use strict';return l;};k.prototype.keydown=function(event){'use strict';this.inform('keydown',{event:event});var l=c('Event').getKeyCode(event),m=this.input;if(this.inline&&l==c('Keys').BACKSPACE&&c('Input').isEmpty(m)){var n=this.getLastToken();if(n&&n.isRemovable())this.removeToken(n);}this.updateInput();};k.prototype.paste=function(event){'use strict';this.inform('paste',{event:event});this.updateInput(true);};k.prototype.focusInput=function(){'use strict';c('Focus').set(this.input);};k.prototype.updateInput=function(l){'use strict';if(!this.inline)return;setTimeout(function(){this.adjustWidth(this.input.value);if(l)this.input.value=this.input.value;}.bind(this),20);c('StickyPlaceholderInput').setPlaceholderText(this.input,'');this.inform('resize');};k.prototype.setPlaceholder=function(l){'use strict';this.placeholder=l;if(this.stickyPlaceholder)c('StickyPlaceholderInput').setPlaceholderText(this.input,l);this.updatePlaceholder();};k.prototype.updatePlaceholder=function(){'use strict';if(!this.inline||this.input.value)return;var l=!this.tokens.length,m='';if(l||this.stickyPlaceholder){this.adjustWidth(this.placeholder);m=this.placeholder;}else this.adjustWidth(this.input.value);c('StickyPlaceholderInput').setPlaceholderText(this.input,m);};k.prototype.adjustWidth=function(l){'use strict';if(!this.inline||!this._getIsInDOM())return;if(!l&&this.input.value==='')l=this.placeholder;var m=j;if(l!==this.placeholder||!this.getTokens().length||this.stickyPlaceholder){var n=c('Style').getFloat(this.getElement(),'width'),o=this._getMetrics().measure(l);m=o.width+this._getWidthOffset()+10;m=m>=n?n:m;}c('Style').set(this.input,'width',m+'px');this.inform('resize');c('Arbiter').inform('reflow');};k.prototype.getToken=function(l){'use strict';return this.unique[l]||null;};k.prototype.getTokens=function(){'use strict';return this.tokens||[];};k.prototype.getTokenElements=function(){'use strict';return c('DOMQuery').scry(this.tokenarea,'span.uiToken');};k.prototype.getTokenElementFromTarget=function(l){'use strict';return c('Parent').byClass(l,'uiToken');};k.prototype.getTokenFromElement=function(l){'use strict';return c('DataStore').get(l,'Token');};k.prototype.getTokenValues=function(){'use strict';if(!this.tokens)return [];return this.tokens.map(function(l){return l.getValue();});};k.prototype.getFirstToken=function(){'use strict';return this.tokens[0]||null;};k.prototype.getLastToken=function(){'use strict';return this.tokens[this.tokens.length-1]||null;};k.prototype.hasMaxTokens=function(){'use strict';return this.maxTokens&&this.maxTokens<=this.tokens.length;};k.prototype.createToken=function(l,m){'use strict';var n=this.getToken(this._tokenKey(l));if(!n)n=l.weak_reference?new (c('WeakToken'))(l,this.paramName):new (c('Token'))(l,this.paramName);m&&n.setElement(m);return n;};k.prototype.addToken=function(l){'use strict';if(this.hasMaxTokens())return;var m=this._tokenKey(l.getInfo());if(m in this.unique)return;this.unique[m]=l;this.tokens.push(l);this.insertToken(l);this.updateTokenarea();this.inform('addToken',l);this.inform('changeTokens');c('Arbiter').inform('Form/change',{node:this.element});};k.prototype.insertToken=function(l){'use strict';c('DOM').appendContent(this.tokenarea,l.getElement());};k.prototype.removeToken=function(l){'use strict';if(!l)return;var m=this.tokens.indexOf(l);if(m<0)return;this.tokens.splice(this.tokens.indexOf(l),1);delete this.unique[this._tokenKey(l.getInfo())];c('DOM').remove(l.getElement());this.updateTokenarea();this.inform('removeToken',l);this.inform('changeTokens');c('Arbiter').inform('Form/change',{node:this.element});};k.prototype.removeAllTokens=function(){'use strict';this.reset();this.inform('changeTokens');this.inform('removeAllTokens');};k.prototype.updateTokenarea=function(){'use strict';var l=this.typeahead.getCore(),m=this.getTokenValues();if(this.excludeDuplicates){this._exclusions||(this._exclusions=l.getExclusions());l.setExclusions(m.concat(this._exclusions));}l.setEnabled(!this.hasMaxTokens());this.updateTokenareaVisibility();this.updatePlaceholder();this.inform('resize');c('Arbiter').inform('reflow');};k.prototype.updateTokenareaVisibility=function(){'use strict';c('CSS').conditionShow(this.tokenarea,this.tokens.length!==0);};k.prototype._tokenKey=function(l){'use strict';return l.uid+(l.freeform?':':'');};k.prototype._getWidthOffset=function(){'use strict';if(this._widthOffset===null){var l=this.input.clientWidth,m=c('Style').getFloat(this.input,'width');if(l==m){this._widthOffset=c('Style').getFloat(this.input,'paddingLeft')+c('Style').getFloat(this.input,'paddingRight');}else this._widthOffset=0;}return this._widthOffset;};k.prototype._getMetrics=function(){'use strict';if(!this._metrics)this._metrics=new (c('TextMetrics'))(this.input,this.inline);return this._metrics;};k.prototype._getIsInDOM=function(){'use strict';return this._isInDOM||(this._isInDOM=c('DOMQuery').contains(document.body,this.input));};k.getInstance=function(l){'use strict';var m=c('Parent').byClass(l,'uiTokenizer');return m?c('DataStore').get(m,'Tokenizer'):null;};k.init=function(l,m){'use strict';l.init(m.tokenarea,m.param_name,m.initial_info,m.options);};Object.assign(k.prototype,{inline:false,maxTokens:null,excludeDuplicates:true,placeholder:'',_widthOffset:null,_metrics:null});f.exports=k;}),null);
__d('UntrustedLink',['DOM','Event','URI','UserAgent_DEPRECATED'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k,l){this.dom=i;this.url=i.href;this.hash=j;this.func_get_params=l||function(){return {};};c('Event').listen(this.dom,'click',this.onclick.bind(this));c('Event').listen(this.dom,'mousedown',this.onmousedown.bind(this));c('Event').listen(this.dom,'mouseup',this.onmouseup.bind(this));c('Event').listen(this.dom,'mouseout',this.onmouseout.bind(this));this.onmousedown(c('Event').$E(k));}h.bootstrap=function(i,j,k,l){if(i.__untrusted)return;i.__untrusted=true;new h(i,j,k,l);};h.prototype.getRewrittenURI=function(){var i=babelHelpers['extends']({u:this.url,h:this.hash},this.func_get_params(this.dom)),j=new (c('URI'))('/l.php').setSubdomain('www');if(new (c('URI'))(this.url).getProtocol()=='https'){return j.setQueryData(i).setProtocol('https');}else return j.setQueryData(i).setProtocol('http');};h.prototype.onclick=function(){setTimeout(function(){this.setHref(this.url);}.bind(this),100);this.setHref(this.getRewrittenURI());};h.prototype.onmousedown=function(i){if(i.button==2)this.setHref(this.getRewrittenURI());};h.prototype.onmouseup=function(){this.setHref(this.getRewrittenURI());};h.prototype.onmouseout=function(){this.setHref(this.url);};h.prototype.setHref=function(i){if(c('UserAgent_DEPRECATED').ie()<9){var j=c('DOM').create('span');c('DOM').appendContent(this.dom,j);this.dom.href=i;c('DOM').remove(j);}else this.dom.href=i;};f.exports=h;}),null);
__d('FormSubmitOnChange',['Event','submitForm'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';this._form=i;}h.prototype.enable=function(){'use strict';this._listener=c('Event').listen(this._form.getRoot(),'change',this._submit.bind(this));};h.prototype.disable=function(){'use strict';this._listener.remove();this._listener=null;};h.prototype._submit=function(){'use strict';c('submitForm')(this._form.getRoot());};Object.assign(h.prototype,{_listener:null});f.exports=h;}),null);
__d('AbstractDialogFitHeight',['csx','cx','CSS','DOM','Event','Style','SubscriptionsHandler','Vector','throttle'],(function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=450,k=100,l=67,m=67;function n(o){'use strict';this.$AbstractDialogFitHeight1=o;}n.prototype.enable=function(){'use strict';this.$AbstractDialogFitHeight2=new (c('SubscriptionsHandler'))();this.$AbstractDialogFitHeight2.addSubscriptions(this.$AbstractDialogFitHeight1.subscribe('beforeshow',this.$AbstractDialogFitHeight3.bind(this)),c('Event').listen(window,'resize',c('throttle')(this.$AbstractDialogFitHeight3.bind(this))));this.$AbstractDialogFitHeight4=c('DOM').find(this.$AbstractDialogFitHeight1.getRoot(),"._4-i2");c('CSS').addClass(this.$AbstractDialogFitHeight4,"_5pfh");this.$AbstractDialogFitHeight5=k;if(c('DOM').scry(this.$AbstractDialogFitHeight1.getRoot(),"._4-i0").length)this.$AbstractDialogFitHeight5+=l;if(c('DOM').scry(this.$AbstractDialogFitHeight1.getRoot(),"._5a8u").length)this.$AbstractDialogFitHeight5+=m;};n.prototype.disable=function(){'use strict';this.$AbstractDialogFitHeight2.release();this.$AbstractDialogFitHeight2=null;c('CSS').removeClass(this.$AbstractDialogFitHeight4,"_5pfh");};n.prototype.$AbstractDialogFitHeight3=function(){'use strict';var o=c('Vector').getViewportDimensions().y,p=o-this.$AbstractDialogFitHeight5;c('Style').set(this.$AbstractDialogFitHeight4,this.getHeightProperty(),Math.max(j,p)+'px');this.$AbstractDialogFitHeight1.updatePosition();};f.exports=n;}),null);
__d('DialogFitHeight',['AbstractDialogFitHeight'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('AbstractDialogFitHeight'));i=h&&h.prototype;j.prototype.getHeightProperty=function(){'use strict';return 'height';};function j(){'use strict';h.apply(this,arguments);}f.exports=j;}),null);
__d('VaultBoxURI',['URI'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={PHOTOS_SYNCED:'photos_synced',isVaultBoxURI:function i(j){var k=new RegExp("\/"+h.PHOTOS_SYNCED+"\/?$");return j.getPath().match(k)&&j.getQueryData().hasOwnProperty('view_image');},isVaultArchiveURI:function i(j){var k=new RegExp("\/"+h.PHOTOS_SYNCED+"\/?$");return j.getPath().match(k);},getSyncedTabURI:function i(){return new (c('URI'))('/me/'+h.PHOTOS_SYNCED).getQualifiedURI();}};f.exports=h;}),null);
__d('getViewerRecordID',['RelayStore'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('RelayStore').getStoreData();function i(){return h.getCachedStore().getDataID('viewer');}f.exports=i;}),null);