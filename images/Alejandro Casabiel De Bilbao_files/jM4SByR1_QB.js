if (self.CavalryLogger) { CavalryLogger.start_js(["snbP3"]); }

__d("PrivacyConst",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={BaseValue:{FRIEND_LIST:129,FRIENDS_PLUS_GAMER_FRIENDS:128,FRIENDS_MINUS_ACQUAINTANCES:127,FACEBOOK_EMPLOYEES:112,CUSTOM:111,EVERYONE:80,NETWORKS_FRIENDS_OF_FRIENDS:60,NETWORKS_FRIENDS:55,FRIENDS_OF_FRIENDS:50,ALL_FRIENDS:40,SELF:10,NOBODY:0},CustomPrivacyTokens:{FRIENDS:247124075410460,FRIENDS_OF_FRIENDS:498125493540100},FriendsValue:{EVERYONE:80,NETWORKS_FRIENDS:55,FRIENDS_OF_FRIENDS:50,ALL_FRIENDS:40,SOME_FRIENDS:30,SELF:10,NO_FRIENDS:0},PostParam:{EVERYONE:300645083384735,NETWORKS_FRIENDS:123780391104836,FRIENDS_OF_FRIENDS:275425949243301,FRIENDS:291667064279714,FRIENDS_MINUS_ACQUAINTANCES:284920934947802,ONLY_ME:286958161406148,FB_ONLY:411331705596297,EVENT_PUBLIC:1493271774218406,EVENT_OPEN_INVITE:854618297899786,EVENT_GUESTS_AND_FRIENDS:1439959856260766,EVENT_INVITE_ONLY:599950423437029},PrivacyField:{CURRENT_COMPOSER:8787670733,DEFAULT_COMPOSER:875106179167765,TIMELINE_TAGGED_CONTENT_VISIBILITY:8787530733,WALL_POSTS:8787370733,TAG_EXPANDED_CONTENT:8787795733,SEARCH_BY_PHONE:8787815733,SEARCH_BY_EMAIL:8787820733,CAN_FRIEND:8787540733,DEPRECATED_APP_DEFAULT:8787700733,SEARCH_BY_NAME:8787755733,SEARCH_BY_CONTACT_INFO:8787760733,SCREENNAME:8787335733,CURRENT_ADDRESS:8787355733,FRIENDS:8787365733,WEBSITE:8787375733,STATUS_UPDATES:8787395733,BIRTHDAY:8787510733,BIRTHYEAR:8787805733,CAN_COMMENT:8787535733,CAN_MESSAGE:8787545733,RELATIONSHIPS:8787550733,PROFILE_PICTURE_ALBUM:8787565733,DASHBOARD_ACTIVITY:8787575733,FAMILY:8787585733,INTERESTED_IN_LOOKING_FOR:8787590733,PLACES:8787620733,NAME_DAY:8787810733,LANGUAGES:8787625733,QUOTATIONS:8787630733,ABOUT_ME:8787635733,POLITICAL:8787640733,RELIGIOUS:8787645733,CURRENT_CITY:8787650733,HOMETOWN:8787655733,PROFILE_LIKES_AND_INTERESTS:8787660733,BLURB:8787665733,OTHER_LIKES_AND_INTERESTS:8787680733,SUBSCRIBERS:8787690733,SUBSCRIBED_TO:8787695733,PERSONAL_CONTACT_DEFAULT:8787765733,PAGE_CONTACT_DEFAULT:8787770733,AUTO_GENERATED_FB_EMAIL:8787775733,SKILLS:8787780733,CUSTOM_GENDERS:237760973066217,LOCATION_DO_NOT_WRITE_DIRECTLY:8787785733,SOCIAL_ADS:7719929599,PLATFORM_ADS:126540474531,BASS_ADS:183468681673909,ACTIVITIES:144331422306930,INTERESTS:113693108715766,MUSIC:172372399483077,BOOKS:100725463352700,GAMES:199298603444535,MOVIES:201146206594049,TV_SHOWS:129665560441221,SPORTS_PLAYED:129991670408857,FAVORITE_TEAMS:225288534151802,FAVORITE_ATHLETES:203380763033334,PEOPLE_I_ADMIRE:210380795648667,FAVORITE_FOODS:585935528106425,FAVORITE_RESTAURANTS:172588449584647,FAVORITE_WEBSITES:180412195459106,CLOTHING_BRANDS:397391233714082,LAST_POST_PRIVACY:314763985364212,SECOND_TO_LAST_POST_PRIVACY:321179124722698,PREVIOUS_SECONDARY_COMPOSER:864562253561430,RECENT_COMPOSER:358304524327898,NOW_COMPOSER:421290164697736,BACKSTAGE_PRIVACY:809506612451171},TagExpansion:{NONE:0,TAGGEES:1,FRIENDS_OF_TAGGEES:2},ExpansionType:{NONE:0,TAGS_ONLY:1}};}),null);
__d("InstanceProxy",[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){"use strict";this.$InstanceProxy1=i;}h.prototype.getInstance=function(){"use strict";return this.$InstanceProxy1;};h.prototype.setInstance=function(i){"use strict";this.$InstanceProxy1=i;};f.exports=h;}),null);
__d('FeedTrackingAsync',['Arbiter','Run','collectDataAttributes'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h;f.exports.init=function(){if(h)return;h=c('Arbiter').subscribe('AsyncRequest/send',function(i,j){var k=j.request,l=k.getRelativeTo();if(l){var m=k.getData(),n=c('collectDataAttributes')(l,['ft']);if(n.ft&&Object.keys(n.ft).length)Object.assign(m,n);}});c('Run').onLeave(function(){h.unsubscribe();h=null;});};}),null);
__d('filterObject',[],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=Object.prototype.hasOwnProperty;function i(j,k,l){if(!j)return null;var m={};for(var n in j)if(h.call(j,n)&&k.call(l,j[n],n,j))m[n]=j[n];return m;}f.exports=i;}),null);
__d('XUIError',['cx','invariant','Promise','ARIA','Bootloader','CSS','DataStore','DOM','Event','Parent','filterObject','getActiveElement','getElementText','isNode','memoize','nl2br'],(function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j='data-xui-error-alignh',k='XUIError',l='data-xui-error',m="_1tp7",n='data-xui-error-position';c('Event').listen(document.documentElement,'mouseover',function(event){if(c('Parent').byClass(c('getActiveElement')(),m))return;var aa=c('Parent').byClass(event.getTarget(),m);if(aa){w(aa);}else x();});c('Event').listen(document.documentElement,'focusin',function(event){var aa=c('Parent').byClass(event.getTarget(),m);if(aa){w(aa);}else x();});c('Event').listen(document.documentElement,'focusout',function(event){x();});var o=c('memoize')(function(){return new (c('Promise'))(function(aa,ba){c('Bootloader').loadModules(["React","ReactDOM","XUIErrorDialogImpl"],function(ca,da,ea){aa(babelHelpers['extends']({React:ca,ReactDOM:da},ea.getNewDialog()));},'XUIError');});}),p=null;function q(aa){return babelHelpers['extends']({message:aa.getAttribute(l),position:aa.getAttribute(n),alignh:aa.getAttribute(j)},c('DataStore').get(aa,k));}function r(aa,ba){c('DataStore').set(aa,k,ba);}function s(aa,ba){c('DataStore').set(aa,k,babelHelpers['extends']({},c('DataStore').get(aa,k),ba));}function t(aa){c('DataStore').remove(aa,k);}var u=false,v=false;function w(aa){o().done(function(ba){var ca=ba.React,da=ba.ReactDOM,ea=ba.dialog,fa=ba.dialogMessageNode,ga=q(aa),ha=ga.message;if(ha==null)return;var ia=ca.isValidElement(ha);if(u&&!ia)da.unmountComponentAtNode(fa);if(ia){da.render(ha,fa);}else{!(typeof ha==='string'||c('isNode')(ha))?i(0):void 0;if(typeof ha==='string')ha=c('nl2br')(ha);c('DOM').setContent(fa,ha);}u=ia;ea.setContext(aa).setPosition(ga.position||'right').setAlignment(ga.alignh||(ga.position==='above'||ga.position==='below'?'right':null)).show();c('ARIA').notify(c('getElementText')(fa));p=aa;});v=true;}function x(){if(!v)return;o().done(function(aa){var ba=aa.React,ca=aa.ReactDOM,da=aa.dialog,ea=aa.dialogMessageNode;if(!p)return;if(u){ca.unmountComponentAtNode(ea);u=false;}da.hide();p=null;});}function y(aa){if(c('DOM').contains(aa,c('getActiveElement')()))w(aa);}var z={set:function aa(ba){var ca=ba.target,da=ba.message,ea=ba.position,fa=ba.alignh;!(da!==null)?i(0):void 0;c('CSS').addClass(ca,m);s(ca,c('filterObject')({message:da,position:ea,alignh:fa},function(ga){return ga!==undefined;}));y(ca);},clear:function aa(ba){c('CSS').removeClass(ba,m);ba.removeAttribute(l);t(ba);if(ba===p)x();},updatePosition:function aa(){if(!v)return;o().done(function(ba){var ca=ba.dialog;if(p)ca.updatePosition();});},__setReactError:function aa(ba,ca){var da=ca.message,ea=ca.position,fa=ca.alignh;!(da!==null)?i(0):void 0;r(ba,{message:da,position:ea,alignh:fa});y(ba);},__clearReactError:function aa(ba){t(ba);if(ba===p)x();}};f.exports=z;}),null);
__d('XUIError.react',['cx','React','ReactDOM','XUIError','joinClasses'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes,l="_1tp7";i=babelHelpers.inherits(m,c('React').Component);j=i&&i.prototype;m.prototype.componentDidMount=function(){if(this.props.xuiError!=null)c('XUIError').__setReactError(c('ReactDOM').findDOMNode(this),{message:this.props.xuiError,position:this.props.xuiErrorPosition,alignh:this.props.xuiErrorAlignh});};m.prototype.componentDidUpdate=function(){if(this.props.xuiError==null){c('XUIError').__clearReactError(c('ReactDOM').findDOMNode(this));}else c('XUIError').__setReactError(c('ReactDOM').findDOMNode(this),{message:this.props.xuiError,position:this.props.xuiErrorPosition,alignh:this.props.xuiErrorAlignh});};m.prototype.componentWillUnmount=function(){c('XUIError').__clearReactError(c('ReactDOM').findDOMNode(this));};m.prototype.render=function(){var n=c('React').Children.only(this.props.children);if(this.props.xuiError!=null)n=c('React').cloneElement(n,{className:c('joinClasses')(n.props.className,l)});return n;};function m(){i.apply(this,arguments);}m.propTypes={xuiError:k.any,xuiErrorPosition:k.oneOf(['above','below','left','right']),xuiErrorAlignh:k.oneOf(['left','center','right'])};f.exports=m;}),null);
__d('PrivacySelectorNewDispatcher',['Dispatcher_DEPRECATED'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='selector',i=Object.assign(new (c('Dispatcher_DEPRECATED'))(),{handleUpdateFromSelector:function j(k){this.dispatch(babelHelpers['extends']({payloadSource:h},k));}});f.exports=i;}),null);
__d('FbFeedAccessible',['csx','cx','fbt','invariant','AccessibilityConfig','Arbiter','ARIA','BootloadedComponent.react','CSS','DataAttributeUtils','DOMQuery','JSResource','LitestandMessages','React','ReactDOM','SubscriptionsHandler','ge','getOrCreateDOMID'],(function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l='Accessibility/StoriesRequested',m='Accessibility/StoriesLoaded',n='Accessibility/StoryContentInserted',o='Accessibility/SubstreamInserted',p=void 0,q=void 0,r={init:function s(t){p=t;if(c('AccessibilityConfig').a11yNewsfeedStoryEnumeration){var u=new (c('SubscriptionsHandler'))();u.addSubscriptions(c('Arbiter').subscribe(c('LitestandMessages').STORIES_REQUESTED,this._onStoriesRequested.bind(this)),c('Arbiter').subscribe(c('LitestandMessages').STORIES_INSERTED,this._onInsertedSubstream.bind(this)),c('Arbiter').subscribe(c('LitestandMessages').NEWER_STORIES_INSERTED,this._onInsertedSubstream.bind(this)),c('Arbiter').subscribe(m,this._processStoriesLoaded.bind(this)),c('Arbiter').subscribe(l,this._processStoriesRequested.bind(this)),c('Arbiter').subscribe(n,this._processStoryContentInserted.bind(this)),c('Arbiter').subscribe(o,this._processInsertedSubstream.bind(this)));this._enumerateStories();}},informStoryContentInserted:function s(t){c('Arbiter').inform(n,t);this.setAriaLabelledBy(t);},setAriaLabelledBy:function s(t){var u=c('ge')(t),v;if(u&&this._isStory(u)){if(u.getAttribute('aria-labelledby'))return;v=this._filterForElement(u,["._4gns","._5pbw",".timestampContent","._5pbx"]);if(v.length>0)u.setAttribute('aria-labelledby',v.map(function(w){return c('getOrCreateDOMID')(w);}).join(' '));}},_getStories:function s(t){return c('DOMQuery').scry(t||p,"._5jmm");},_onInsertedSubstream:function s(t,u){if(u&&u.substream_id)c('Arbiter').inform(o,u.substream_id);},_onStoriesRequested:function s(){c('Arbiter').inform(l);},_setEnumerationText:function s(t,u,v){var w=c('React').createElement(c('BootloadedComponent.react'),{bootloadLoader:c('JSResource')('FbFeedPager.react').__setRef('FbFeedAccessible'),bootloadPlaceholder:c('React').createElement('div',null),position:u,total:v,'aria-hidden':'true'});c('ReactDOM').render(w,t);},_enumerateStories:function s(){var t=this._getStories(p);q=t.length;t.forEach(function(u,v){this._enumerateStory(u,v+=1);}.bind(this));},_enumerateSubstream:function s(t){var u=this._getStories();q=u.length;var v=this._getStories(c('ge')(t)),w=v.length||0;for(var x=0;x<w;x++)this._registerStoryEnumerationPosition(v[x],q-w+(x+1),x+1);},_enumerateStory:function s(t,u){!this._isStory(t)?k(0):void 0;if(u>0){var v=c('DOMQuery').scry(t,"._4gns");if(v&&v[0])this._setEnumerationText(v[0],u,q);}},_processStoriesLoaded:function s(){c('ARIA').notify(j._("Se han cargado m\u00e1s historias."));},_processStoriesRequested:function s(){c('ARIA').notify(j._("Se han solicitado m\u00e1s historias."));},_processInsertedSubstream:function s(t,u){this._enumerateSubstream(u);this._enumerateStories();},_processStoryContentInserted:function s(t,u){var v=void 0,w=c('ge')(u);if(w)v=JSON.parse(c('DataAttributeUtils').getDataFt(w));if(v&&v.ordinal_position){var x=v.ordinal_position.split(':'),y=x[0],z=x[1];y=parseInt(y,10);z=parseInt(z,10);this._enumerateStory(w,y);if(z===1)c('Arbiter').inform(m);}},_registerStoryEnumerationPosition:function s(t,u,v){var w=JSON.parse(c('DataAttributeUtils').getDataFt(t));if(w){w.ordinal_position=u+':'+v;c('DataAttributeUtils').setDataFt(t,JSON.stringify(w));}},_isStory:function s(t){return c('CSS').matchesSelector(t,"._5jmm");},_filterForElement:function s(t,u){return u.map(function(v){return c('DOMQuery').scry(t||document,v)[0];}).filter(function(v){return !!v;});}};f.exports=r;}),null);
__d("XPrivacyCustomDialogController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/privacy\/custom_dialog\/",{id:{type:"String",required:true},option_id:{type:"String",required:true},autosave:{type:"Bool",defaultValue:false},explain_tags:{type:"Bool",defaultValue:false},limit_community:{type:"Bool",defaultValue:false},limit_facebook:{type:"Bool",defaultValue:false},limit_fof:{type:"Bool",defaultValue:false},limit_tagexpand:{type:"Bool",defaultValue:false},is_new_privacy_selector:{type:"Bool",defaultValue:false},render_location:{type:"Int"},content_type:{type:"String"},post_param:{type:"String"},privacy_data:{type:"String"},source:{type:"String"},tags:{type:"IntVector"},__asyncDialog:{type:"Int"}});}),null);