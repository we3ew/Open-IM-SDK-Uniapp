(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"0de9":function(e,t,n){"use strict";function i(e){var t=Object.prototype.toString.call(e);return t.substring(8,t.length-1)}function o(){return"string"===typeof __channelId__&&__channelId__}function r(e,t){switch(i(t)){case"Function":return"function() { [native code] }";default:return t}}function s(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];console[e].apply(console,n)}function a(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var s=t.shift();if(o())return t.push(t.pop().replace("at ","uni-app:///")),console[s].apply(console,t);var a=t.map((function(e){var t=Object.prototype.toString.call(e).toLowerCase();if("[object object]"===t||"[object array]"===t)try{e="---BEGIN:JSON---"+JSON.stringify(e,r)+"---END:JSON---"}catch(o){e=t}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var n=i(e).toUpperCase();e="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+e+"---END:"+n+"---":String(e)}return e})),u="";if(a.length>1){var c=a.pop();u=a.join("---COMMA---"),0===c.indexOf(" at ")?u+=c:u+="---COMMA---"+c}else u=a[0];console[s](u)}n.r(t),n.d(t,"log",(function(){return s})),n.d(t,"default",(function(){return a}))},"61de":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={onLaunch:function(){e("log","App Launch"," at App.vue:4")},onShow:function(){e("log","App Show"," at App.vue:7")},onHide:function(){e("log","App Hide"," at App.vue:10")}};t.default=n}).call(this,n("0de9")["default"])},6683:function(e,t,n){"use strict";n("c616");var i=r(n("858c")),o=r(n("8bbf"));function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}o.default.config.productionTip=!1,i.default.mpType="app";var c=new o.default(a({},i.default));c.$mount()},"6d8c":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=uni.requireNativePlugin("Tuoyun-OpenIMSDK"),i=uni.requireNativePlugin("globalEvent"),o={data:function(){return{title:"Hello",token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVSUQiOiIxODM4MTQxNTE2NSIsIlBsYXRmb3JtIjoiQW5kcm9pZCIsImV4cCI6MTk2MTEzMjQ5OCwibmJmIjoxNjQ1NzcyNDk4LCJpYXQiOjE2NDU3NzI0OTh9.o2dJTMhNf0_9kEJT31EyptyjR-igdYOsWEtvwwlIk_8",usermessages:[],createmessage:[],createpic:""}},onLoad:function(){e("log",n," at pages/index/index.vue:84")},methods:{init:function(t){e("log",t," at pages/index/index.vue:89");var i={platform:2,api_addr:"http://43.128.5.63:10000",ws_addr:"ws://43.128.5.63:17778",data_dir:t,log_level:6,object_storage:"cos"};e("log",i," at pages/index/index.vue:98");var o="444",r=n.initSDK(o,i);this.setListener(),this.addListener(),this.res(r),e("log",r," at pages/index/index.vue:104")},setListener:function(){n.setUserListener(),n.setUserListener(),n.setConversationListener(),n.setAdvancedMsgListener(),n.setFriendListener(),n.setGroupListener()},addListener:function(){i.addEventListener("onConnectSuccess",(function(t){e("log",t," at pages/index/index.vue:118")})),i.addEventListener("onConnectFailed",(function(t){e("log",t," at pages/index/index.vue:121")})),i.addEventListener("onSuccess",(function(t){e("log",t," at pages/index/index.vue:124")})),i.addEventListener("onError",(function(t){e("log",t," at pages/index/index.vue:127")}))},login:function(){var t=this,i="444",o="18381415165";n.login(i,o,this.token,(function(n){t.res(n),e("log",n," at pages/index/index.vue:137")}))},logout:function(){var t=this,i="444";n.logout(i,(function(n){t.res(n),e("log",n," at pages/index/index.vue:145")}))},getLoginUid:function(){var t=n.getLoginUid();e("log",t," at pages/index/index.vue:150")},createImageMsg:function(){var t=this;uni.chooseImage({count:6,sizeType:["original","compressed"],sourceType:["album"],success:function(n){e("log",n.tempFilePaths[0].replace("file://","")," at pages/index/index.vue:159"),t.createpic=plus.io.convertLocalFileSystemURL(n.tempFilePaths[0])}})},getUsersInfo:function(){var t=this,i="444",o=["18381415165","17726378428"];n.getUsersInfo(i,o,(function(n){t.res(n),e("log",n," at pages/index/index.vue:171")}))},setSelfInfo:function(){var t=this,i="444",o={userID:"18381415165",nickname:"mm",faceURL:"127.0.0.1/xx",gender:1,phoneNumber:"",birth:222222,email:"",createTime:222222,ex:""};n.setSelfInfo(i,o,(function(n){t.res(n),e("log",n," at pages/index/index.vue:190")}))},getSelfUserInfo:function(){var t=this,i="444";n.getSelfUserInfo(i,(function(n){t.res(n),e("log",n," at pages/index/index.vue:198")}))},getDesignatedFriendsInfo:function(){var t=this,i="444",o=["17726378428"];n.getDesignatedFriendsInfo(i,o,(function(n){t.res(n),e("log",n," at pages/index/index.vue:207")}))},getFriendList:function(){var t=this,i="444";n.getFriendList(i,(function(n){t.res(n),e("log",n," at pages/index/index.vue:215")}))},checkFriend:function(){var t=this,i="444",o=["17726378428"];n.checkFriend(i,o,(function(n){t.res(n),e("log",n," at pages/index/index.vue:224")}))},addFriend:function(){var t=this,i="444",o={toUserID:"18388888888",reqMsg:"hello"};n.addFriend(i,o,(function(n){t.res(n),e("log",n," at pages/index/index.vue:236")}))},setFriendRemark:function(){var t=this,i="444",o={toUserID:"17726378428",remark:"lo"};n.setFriendRemark(i,o,(function(n){t.res(n),e("log",n," at pages/index/index.vue:248")}))},deleteFriend:function(){var t=this,i="444",o="11147844";n.deleteFriend(i,o,(function(n){t.res(n),e("log",n," at pages/index/index.vue:257")}))},getRecvFriendApplicationList:function(){var t=this,i="444";n.getRecvFriendApplicationList(i,(function(n){t.res(n),e("log",n," at pages/index/index.vue:265")}))},getSendFriendApplicationList:function(){var t=this,i="444";n.getSendFriendApplicationList(i,(function(n){t.res(n),e("log",n," at pages/index/index.vue:273")}))},acceptFriendApplication:function(){var t=this,i="444",o={toUserID:"17726378428",handleMsg:"ok"};n.acceptFriendApplication(i,o,(function(n){t.res(n),e("log",n," at pages/index/index.vue:285")}))},refuseFriendApplication:function(){var t=this,i="444",o={toUserID:"user001",handleMsg:"ok"};n.refuseFriendApplication(i,o,(function(n){t.res(n),e("log",n," at pages/index/index.vue:297")}))},addBlack:function(){var t=this,i="444",o="17726378428";n.addBlack(i,o,(function(n){t.res(n),e("log",n," at pages/index/index.vue:306")}))},getBlackList:function(){var t=this,i="444";n.getBlackList(i,(function(n){t.res(n),e("log",n," at pages/index/index.vue:314")}))},removeBlack:function(){var t=this,i="444",o="17726378428";n.removeBlack(i,o,(function(n){t.res(n),e("log",n," at pages/index/index.vue:323")}))},createGroup:function(){var t=this,i="444",o={groupName:"test 888",groupType:0,notification:"",introduction:"",faceURL:"",ex:""},r=[];n.createGroup(i,o,r,(function(n){t.res(n),e("log",n," at pages/index/index.vue:340")}))},joinGroup:function(){var t=this,i="444",o="39cf8f3a4a6a7b98c84b08bf6de87592",r="sdf";n.joinGroup(i,o,r,(function(n){t.res(n),e("log",n," at pages/index/index.vue:351")}))},quitGroup:function(){var t=this,i="444",o="8795f6aaad7d9bd62f6ac774e6051ed8";n.quitGroup(i,o,(function(n){t.res(n),e("log",n," at pages/index/index.vue:360")}))},getJoinedGroupList:function(){var t=this,i="444";n.getJoinedGroupList(i,(function(n){t.res(n),e("log",n," at pages/index/index.vue:368")}))},getGroupsInfo:function(){var t=this,i="444",o=["492a7b26806a963a8900f77b04e653bb"];n.getGroupsInfo(i,o,(function(n){t.res(n),e("log",n," at pages/index/index.vue:377")}))},setGroupInfo:function(){var t=this,i="444",o="492a7b26806a963a8900f77b04e653bb",r={groupName:"test 777",notification:"",introduction:"",faceURL:"",ex:""};n.setGroupInfo(i,o,r,(function(n){t.res(n),e("log",n," at pages/index/index.vue:393")}))},getGroupMemberList:function(){var t=this,i="444",o="518b4fd71d299ae7aedec2347bc2576a",r=0,s=0,a=10;n.getGroupMemberList(i,o,r,s,a,(function(n){t.res(n),e("log",n," at pages/index/index.vue:405")}))},getGroupMembersInfo:function(){var t=this,i="444",o="518b4fd71d299ae7aedec2347bc2576a",r=["16612341234"];n.getGroupMembersInfo(i,o,r,(function(n){t.res(n),e("log",n," at pages/index/index.vue:415")}))},kickGroupMember:function(){var t=this,i="444",o="518b4fd71d299ae7aedec2347bc2576a",r="",s=["13900000000"];n.kickGroupMember(i,o,r,s,(function(n){t.res(n),e("log",n," at pages/index/index.vue:426")}))},transferGroupOwner:function(){var t=this,i="444",o="492a7b26806a963a8900f77b04e653bb",r="17726378428";n.transferGroupOwner(i,o,r,(function(n){t.res(n),e("log",n," at pages/index/index.vue:436")}))},inviteUserToGroup:function(){var t=this,i="444",o="518b4fd71d299ae7aedec2347bc2576a",r="",s=["13900000000"];n.inviteUserToGroup(i,o,r,s,(function(n){t.res(n),e("log",n," at pages/index/index.vue:447")}))},getRecvGroupApplicationList:function(){var t=this,i="444";n.getRecvGroupApplicationList(i,(function(n){t.res(n),e("log",n," at pages/index/index.vue:455")}))},acceptGroupApplication:function(){var t=this,i="444",o="c5f8bc79e1c67981c6e4aba5d2e88bd4",r="18388888888",s="jj";n.acceptGroupApplication(i,o,r,s,(function(n){t.res(n),e("log",n," at pages/index/index.vue:466")}))},refuseGroupApplication:function(){var t=this,i="444",o="959e824f59c0120e33bf4f039ba8f8c7",r="17726378428",s="";n.refuseGroupApplication(i,o,r,s,(function(n){t.res(n),e("log",n," at pages/index/index.vue:477")}))},getAllConversationList:function(){var t=this,i="444";n.getAllConversationList(i,(function(n){t.res(n),e("log",JSON.parse(n.data)," at pages/index/index.vue:485")}))},getConversationListSplit:function(){var t=this,i="444",o=0,r=5;n.getConversationListSplit(i,o,r,(function(n){t.res(n),e("log",JSON.parse(n.data)," at pages/index/index.vue:495")}))},getOneConversation:function(){var t=this,i="444",o=1,r="17726378428";n.getOneConversation(i,r,o,(function(n){t.res(n),e("log",n," at pages/index/index.vue:506")}))},getConversationIDBySessionType:function(){var t="444",i=1,o=n.getConversationIDBySessionType(t,i);e("log",o," at pages/index/index.vue:514")},getMultipleConversation:function(){var t=this,i="444",o=["single_17726378428"];n.getMultipleConversation(i,o,(function(n){t.res(n),e("log",n," at pages/index/index.vue:522")}))},deleteConversation:function(){var t=this,i="444",o="single_17726378428";n.deleteConversation(i,o,(function(n){t.res(n),e("log",n," at pages/index/index.vue:531")}))},setConversationDraft:function(){var t=this,i="444",o="single_17726378428",r="fgsdfg";n.setConversationDraft(i,o,r,(function(n){t.res(n),e("log",n," at pages/index/index.vue:541")}))},pinConversation:function(){var t=this,i="444",o="single_17726378428",r=!1;n.pinConversation(i,o,r,(function(n){t.res(n),e("log",n," at pages/index/index.vue:551")}))},getTotalUnreadMsgCount:function(){var t=this,i="444";n.getTotalUnreadMsgCount(i,(function(n){t.res(n),e("log",n," at pages/index/index.vue:559")}))},createTextMessage:function(){var t="444",i="asdfghjkl",o=n.createTextMessage(t,i);this.createmessage=o,e("log",JSON.parse(o)," at pages/index/index.vue:568")},createImageMessageFromFullPath:function(){var t="444",i=this.createpic;e("log",i," at pages/index/index.vue:574");var o=n.createImageMessageFromFullPath(t,i);this.createmessage=o,e("log",o," at pages/index/index.vue:577")},sendMessage:function(){var e="444",t=this.createmessage,i="18388888888",o="",r={title:"\u4f60\u6709\u4e00\u6761\u65b0\u6d88\u606f",desc:"",ex:"",iOSPushSound:"+1",iOSBadgeCount:!0};n.sendMessage(e,t,i,o,r)},sendMessageNotOss:function(){var e="444",t=this.createmessage,i="18388888888",o="",r={title:"\u4f60\u6709\u4e00\u6761\u65b0\u6d88\u606f",desc:"",ex:"",iOSPushSound:"+1",iOSBadgeCount:!0};n.sendMessageNotOss(e,t,i,o,r)},getHistoryMessageList:function(){var t=this,i="444",o={userID:"18388888888",groupID:"",startClientMsgID:"",count:3};n.getHistoryMessageList(i,o,(function(n){t.res(n),e("log",JSON.parse(n.data)," at pages/index/index.vue:621"),t.usermessages=JSON.parse(n.data)}))},revokeMessage:function(){var t=this,i="444",o=JSON.stringify(this.usermessages[0]);n.revokeMessage(i,o,(function(n){t.res(n),e("log",n," at pages/index/index.vue:631")}))},typingStatusUpdate:function(){var t=this,i="444",o="18381415165",r="";n.typingStatusUpdate(i,o,r,(function(n){t.res(n),e("log",n," at pages/index/index.vue:641")}))},markC2CMessageAsRead:function(){var t=this,i="444",o="18381415165",r=[];n.markC2CMessageAsRead(i,o,r,(function(n){t.res(n),e("log",n," at pages/index/index.vue:651")}))},deleteMessageFromLocalStorage:function(){var t=this,i="444",o=JSON.stringify(this.usermessages[0]);n.deleteMessageFromLocalStorage(i,o,(function(n){t.res(n),e("log",n," at pages/index/index.vue:660")}))},clearC2CHistoryMessage:function(){var t=this,i="444",o="18388888888";n.clearC2CHistoryMessage(i,o,(function(n){t.res(n),e("log",n," at pages/index/index.vue:669")}))},clearGroupHistoryMessage:function(){var t=this,i="444",o="8795f6aaad7d9bd62f6ac774e6051ed8";n.clearGroupHistoryMessage(i,o,(function(n){t.res(n),e("log",n," at pages/index/index.vue:678")}))},insertSingleMessageToLocalStorage:function(){var t=this,i="444",o=this.createmessage,r="18381415165",s="18388888888";n.insertSingleMessageToLocalStorage(i,o,r,s,(function(n){t.res(n),e("log",n," at pages/index/index.vue:689")}))},insertGroupMessageToLocalStorage:function(){var t=this,i="444",o=this.createmessage,r="45f28de54d83b94dd8f22674c4f7310d",s="17726378428";n.insertGroupMessageToLocalStorage(i,o,r,s,(function(n){t.res(n),e("log",n," at pages/index/index.vue:700")}))},searchLocalMessages:function(){var t=this,i="444",o={sourceID:"18090680773",sessionType:1,keywordList:["78"],keywordListMatchType:0,senderUserIDList:[],messageTypeList:[],searchTimePosition:0,searchTimePeriod:864e3,pageIndex:0,count:0};n.searchLocalMessages(i,o,(function(n){t.res(n),e("log",n," at pages/index/index.vue:722")}))},fileInfo:function(){var t=this;plus.io.requestFileSystem(plus.io.PRIVATE_DOC,(function(n){n.root.getDirectory("user",{create:!0},(function(e){t.init(e.fullPath)}),(function(t){e("log",t," at pages/index/index.vue:737")}))}))},res:function(e){!0===e||0===e.errCode?uni.showToast({title:"\u6210\u529f",duration:1500}):uni.showToast({title:"\u5931\u8d25",duration:1500,icon:"error"})}}};t.default=o}).call(this,n("0de9")["default"])},"858c":function(e,t,n){"use strict";n.r(t);var i=n("dd1a");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);var r,s,a,u,c=n("f0c5"),f=Object(c["a"])(i["default"],r,s,!1,null,null,null,!1,a,u);t["default"]=f.exports},"8bbf":function(e,t){e.exports=Vue},"975a":function(e,t,n){"use strict";n.r(t);var i=n("6d8c"),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},c616:function(e,t,n){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){throw n}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("ce1e").default)}))},ce1e:function(e,t,n){"use strict";n.r(t);var i=n("ce3a"),o=n("975a");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);var s,a=n("f0c5"),u=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);t["default"]=u.exports},ce3a:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:e._$s(0,"sc","content"),attrs:{_i:0}},[n("view",{staticClass:e._$s(1,"sc","interval"),attrs:{_i:1}}),n("button",{attrs:{_i:2},on:{click:function(t){return e.fileInfo()}}}),n("button",{attrs:{_i:3},on:{click:function(t){return e.login()}}}),n("button",{attrs:{_i:4},on:{click:function(t){return e.logout()}}}),n("view",{staticClass:e._$s(5,"sc","interval"),attrs:{_i:5}}),n("button",{attrs:{_i:6},on:{click:function(t){return e.getLoginUid()}}}),n("button",{attrs:{_i:7},on:{click:function(t){return e.getUsersInfo()}}}),n("button",{attrs:{_i:8},on:{click:function(t){return e.setSelfInfo()}}}),n("button",{attrs:{_i:9},on:{click:function(t){return e.getSelfUserInfo()}}}),n("view",{staticClass:e._$s(10,"sc","interval"),attrs:{_i:10}}),n("button",{attrs:{_i:11},on:{click:function(t){return e.getDesignatedFriendsInfo()}}}),n("button",{attrs:{_i:12},on:{click:function(t){return e.getFriendList()}}}),n("button",{attrs:{_i:13},on:{click:function(t){return e.checkFriend()}}}),n("button",{attrs:{_i:14},on:{click:function(t){return e.addFriend()}}}),n("button",{attrs:{_i:15},on:{click:function(t){return e.setFriendRemark()}}}),n("button",{attrs:{_i:16},on:{click:function(t){return e.deleteFriend()}}}),n("button",{attrs:{_i:17},on:{click:function(t){return e.getRecvFriendApplicationList()}}}),n("button",{attrs:{_i:18},on:{click:function(t){return e.getSendFriendApplicationList()}}}),n("button",{attrs:{_i:19},on:{click:function(t){return e.acceptFriendApplication()}}}),n("button",{attrs:{_i:20},on:{click:function(t){return e.refuseFriendApplication()}}}),n("button",{attrs:{_i:21},on:{click:function(t){return e.addBlack()}}}),n("button",{attrs:{_i:22},on:{click:function(t){return e.addFriend()}}}),n("button",{attrs:{_i:23},on:{click:function(t){return e.getBlackList()}}}),n("button",{attrs:{_i:24},on:{click:function(t){return e.removeBlack()}}}),n("view",{staticClass:e._$s(25,"sc","interval"),attrs:{_i:25}}),n("button",{attrs:{_i:26},on:{click:function(t){return e.createGroup()}}}),n("button",{attrs:{_i:27},on:{click:function(t){return e.joinGroup()}}}),n("button",{attrs:{_i:28},on:{click:function(t){return e.quitGroup()}}}),n("button",{attrs:{_i:29},on:{click:function(t){return e.getJoinedGroupList()}}}),n("button",{attrs:{_i:30},on:{click:function(t){return e.getGroupsInfo()}}}),n("button",{attrs:{_i:31},on:{click:function(t){return e.setGroupInfo()}}}),n("button",{attrs:{_i:32},on:{click:function(t){return e.getGroupMemberList()}}}),n("button",{attrs:{_i:33},on:{click:function(t){return e.getGroupMembersInfo()}}}),n("button",{attrs:{_i:34},on:{click:function(t){return e.kickGroupMember()}}}),n("button",{attrs:{_i:35},on:{click:function(t){return e.transferGroupOwner()}}}),n("button",{attrs:{_i:36},on:{click:function(t){return e.inviteUserToGroup()}}}),n("button",{attrs:{_i:37},on:{click:function(t){return e.getRecvGroupApplicationList()}}}),n("button",{attrs:{_i:38},on:{click:function(t){return e.acceptGroupApplication()}}}),n("button",{attrs:{_i:39},on:{click:function(t){return e.refuseGroupApplication()}}}),n("view",{staticClass:e._$s(40,"sc","interval"),attrs:{_i:40}}),n("button",{attrs:{_i:41},on:{click:function(t){return e.getAllConversationList()}}}),n("button",{attrs:{_i:42},on:{click:function(t){return e.getConversationListSplit()}}}),n("button",{attrs:{_i:43},on:{click:function(t){return e.getOneConversation()}}}),n("button",{attrs:{_i:44},on:{click:function(t){return e.getConversationIDBySessionType()}}}),n("button",{attrs:{_i:45},on:{click:function(t){return e.getMultipleConversation()}}}),n("button",{attrs:{_i:46},on:{click:function(t){return e.deleteConversation()}}}),n("button",{attrs:{_i:47},on:{click:function(t){return e.setConversationDraft()}}}),n("button",{attrs:{_i:48},on:{click:function(t){return e.pinConversation()}}}),n("button",{attrs:{_i:49},on:{click:function(t){return e.getTotalUnreadMsgCount()}}}),n("button",{attrs:{_i:50},on:{click:function(t){return e.createTextMessage()}}}),n("button",{attrs:{_i:51},on:{click:function(t){return e.sendMessage()}}}),n("button",{attrs:{_i:52},on:{click:function(t){return e.createImageMsg()}}}),n("button",{attrs:{_i:53},on:{click:function(t){return e.createImageMessageFromFullPath()}}}),n("button",{attrs:{_i:54},on:{click:function(t){return e.sendMessageNotOss()}}}),n("button",{attrs:{_i:55},on:{click:function(t){return e.getHistoryMessageList()}}}),n("button",{attrs:{_i:56},on:{click:function(t){return e.revokeMessage()}}}),n("button",{attrs:{_i:57},on:{click:function(t){return e.typingStatusUpdate()}}}),n("button",{attrs:{_i:58},on:{click:function(t){return e.markC2CMessageAsRead()}}}),n("button",{attrs:{_i:59},on:{click:function(t){return e.deleteMessageFromLocalStorage()}}}),n("button",{attrs:{_i:60},on:{click:function(t){return e.clearC2CHistoryMessage()}}}),n("button",{attrs:{_i:61},on:{click:function(t){return e.clearGroupHistoryMessage()}}}),n("button",{attrs:{_i:62},on:{click:function(t){return e.insertSingleMessageToLocalStorage()}}}),n("button",{attrs:{_i:63},on:{click:function(t){return e.insertGroupMessageToLocalStorage()}}}),n("button",{attrs:{_i:64},on:{click:function(t){return e.searchLocalMessages()}}})])},r=[]},dd1a:function(e,t,n){"use strict";n.r(t);var i=n("61de"),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},f0c5:function(e,t,n){"use strict";function i(e,t,n,i,o,r,s,a,u,c){var f,l="function"===typeof e?e.options:e;if(u){l.components||(l.components={});var d=Object.prototype.hasOwnProperty;for(var g in u)d.call(u,g)&&!d.call(l.components,g)&&(l.components[g]=u[g])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(l.mixins||(l.mixins=[])).push(c)),t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),s?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=f):o&&(f=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(l.functional){l._injectStyles=f;var p=l.render;l.render=function(e,t){return f.call(t),p(e,t)}}else{var v=l.beforeCreate;l.beforeCreate=v?[].concat(v,f):[f]}return{exports:e,options:l}}n.d(t,"a",(function(){return i}))}},[["6683","app-config"]]]);