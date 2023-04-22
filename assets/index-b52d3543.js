(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function bv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ui={},Fv={get exports(){return Ui},set exports(t){Ui=t}},hl={},O={},Uv={get exports(){return O},set exports(t){O=t}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hs=Symbol.for("react.element"),zv=Symbol.for("react.portal"),Wv=Symbol.for("react.fragment"),jv=Symbol.for("react.strict_mode"),Bv=Symbol.for("react.profiler"),Vv=Symbol.for("react.provider"),Hv=Symbol.for("react.context"),$v=Symbol.for("react.forward_ref"),Gv=Symbol.for("react.suspense"),Kv=Symbol.for("react.memo"),Qv=Symbol.for("react.lazy"),Md=Symbol.iterator;function qv(t){return t===null||typeof t!="object"?null:(t=Md&&t[Md]||t["@@iterator"],typeof t=="function"?t:null)}var Yf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xf=Object.assign,Jf={};function qr(t,e,n){this.props=t,this.context=e,this.refs=Jf,this.updater=n||Yf}qr.prototype.isReactComponent={};qr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Zf(){}Zf.prototype=qr.prototype;function Ku(t,e,n){this.props=t,this.context=e,this.refs=Jf,this.updater=n||Yf}var Qu=Ku.prototype=new Zf;Qu.constructor=Ku;Xf(Qu,qr.prototype);Qu.isPureReactComponent=!0;var Ld=Array.isArray,ep=Object.prototype.hasOwnProperty,qu={current:null},tp={key:!0,ref:!0,__self:!0,__source:!0};function np(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ep.call(e,r)&&!tp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:hs,type:t,key:s,ref:o,props:i,_owner:qu.current}}function Yv(t,e){return{$$typeof:hs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Yu(t){return typeof t=="object"&&t!==null&&t.$$typeof===hs}function Xv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var bd=/\/+/g;function Hl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Xv(""+t.key):e.toString(36)}function ro(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case hs:case zv:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Hl(o,0):r,Ld(i)?(n="",t!=null&&(n=t.replace(bd,"$&/")+"/"),ro(i,e,n,"",function(u){return u})):i!=null&&(Yu(i)&&(i=Yv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(bd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ld(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Hl(s,l);o+=ro(s,e,n,a,i)}else if(a=qv(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Hl(s,l++),o+=ro(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ls(t,e,n){if(t==null)return t;var r=[],i=0;return ro(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Jv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var De={current:null},io={transition:null},Zv={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:io,ReactCurrentOwner:qu};z.Children={map:Ls,forEach:function(t,e,n){Ls(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ls(t,function(){e++}),e},toArray:function(t){return Ls(t,function(e){return e})||[]},only:function(t){if(!Yu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Component=qr;z.Fragment=Wv;z.Profiler=Bv;z.PureComponent=Ku;z.StrictMode=jv;z.Suspense=Gv;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zv;z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Xf({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)ep.call(e,a)&&!tp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:hs,type:t.type,key:i,ref:s,props:r,_owner:o}};z.createContext=function(t){return t={$$typeof:Hv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Vv,_context:t},t.Consumer=t};z.createElement=np;z.createFactory=function(t){var e=np.bind(null,t);return e.type=t,e};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:$v,render:t}};z.isValidElement=Yu;z.lazy=function(t){return{$$typeof:Qv,_payload:{_status:-1,_result:t},_init:Jv}};z.memo=function(t,e){return{$$typeof:Kv,type:t,compare:e===void 0?null:e}};z.startTransition=function(t){var e=io.transition;io.transition={};try{t()}finally{io.transition=e}};z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};z.useCallback=function(t,e){return De.current.useCallback(t,e)};z.useContext=function(t){return De.current.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t){return De.current.useDeferredValue(t)};z.useEffect=function(t,e){return De.current.useEffect(t,e)};z.useId=function(){return De.current.useId()};z.useImperativeHandle=function(t,e,n){return De.current.useImperativeHandle(t,e,n)};z.useInsertionEffect=function(t,e){return De.current.useInsertionEffect(t,e)};z.useLayoutEffect=function(t,e){return De.current.useLayoutEffect(t,e)};z.useMemo=function(t,e){return De.current.useMemo(t,e)};z.useReducer=function(t,e,n){return De.current.useReducer(t,e,n)};z.useRef=function(t){return De.current.useRef(t)};z.useState=function(t){return De.current.useState(t)};z.useSyncExternalStore=function(t,e,n){return De.current.useSyncExternalStore(t,e,n)};z.useTransition=function(){return De.current.useTransition()};z.version="18.2.0";(function(t){t.exports=z})(Uv);const ey=bv(O);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ty=O,ny=Symbol.for("react.element"),ry=Symbol.for("react.fragment"),iy=Object.prototype.hasOwnProperty,sy=ty.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oy={key:!0,ref:!0,__self:!0,__source:!0};function rp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)iy.call(e,r)&&!oy.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:ny,type:t,key:s,ref:o,props:i,_owner:sy.current}}hl.Fragment=ry;hl.jsx=rp;hl.jsxs=rp;(function(t){t.exports=hl})(Fv);const Nt=Ui.Fragment,C=Ui.jsx,ee=Ui.jsxs;var Oa={},Aa={},ly={get exports(){return Aa},set exports(t){Aa=t}},Ye={},Da={},ay={get exports(){return Da},set exports(t){Da=t}},ip={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(T,D){var M=T.length;T.push(D);e:for(;0<M;){var Q=M-1>>>1,Z=T[Q];if(0<i(Z,D))T[Q]=D,T[M]=Z,M=Q;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var D=T[0],M=T.pop();if(M!==D){T[0]=M;e:for(var Q=0,Z=T.length,ii=Z>>>1;Q<ii;){var Gt=2*(Q+1)-1,si=T[Gt],Kt=Gt+1,oi=T[Kt];if(0>i(si,M))Kt<Z&&0>i(oi,si)?(T[Q]=oi,T[Kt]=M,Q=Kt):(T[Q]=si,T[Gt]=M,Q=Gt);else if(Kt<Z&&0>i(oi,M))T[Q]=oi,T[Kt]=M,Q=Kt;else break e}}return D}function i(T,D){var M=T.sortIndex-D.sortIndex;return M!==0?M:T.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,g=!1,_=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(T){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=T)r(u),D.sortIndex=D.expirationTime,e(a,D);else break;D=n(u)}}function y(T){if(v=!1,m(T),!_)if(n(a)!==null)_=!0,As(S);else{var D=n(u);D!==null&&ri(y,D.startTime-T)}}function S(T,D){_=!1,v&&(v=!1,p(R),R=-1),g=!0;var M=h;try{for(m(D),c=n(a);c!==null&&(!(c.expirationTime>D)||T&&!Se());){var Q=c.callback;if(typeof Q=="function"){c.callback=null,h=c.priorityLevel;var Z=Q(c.expirationTime<=D);D=t.unstable_now(),typeof Z=="function"?c.callback=Z:c===n(a)&&r(a),m(D)}else r(a);c=n(a)}if(c!==null)var ii=!0;else{var Gt=n(u);Gt!==null&&ri(y,Gt.startTime-D),ii=!1}return ii}finally{c=null,h=M,g=!1}}var k=!1,I=null,R=-1,B=5,L=-1;function Se(){return!(t.unstable_now()-L<B)}function xn(){if(I!==null){var T=t.unstable_now();L=T;var D=!0;try{D=I(!0,T)}finally{D?Ht():(k=!1,I=null)}}else k=!1}var Ht;if(typeof f=="function")Ht=function(){f(xn)};else if(typeof MessageChannel<"u"){var $t=new MessageChannel,Dd=$t.port2;$t.port1.onmessage=xn,Ht=function(){Dd.postMessage(null)}}else Ht=function(){x(xn,0)};function As(T){I=T,k||(k=!0,Ht())}function ri(T,D){R=x(function(){T(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(T){T.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,As(S))},t.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<T?Math.floor(1e3/T):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(T){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var M=h;h=D;try{return T()}finally{h=M}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(T,D){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var M=h;h=T;try{return D()}finally{h=M}},t.unstable_scheduleCallback=function(T,D,M){var Q=t.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?Q+M:Q):M=Q,T){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=M+Z,T={id:d++,callback:D,priorityLevel:T,startTime:M,expirationTime:Z,sortIndex:-1},M>Q?(T.sortIndex=M,e(u,T),n(a)===null&&T===n(u)&&(v?(p(R),R=-1):v=!0,ri(y,M-Q))):(T.sortIndex=Z,e(a,T),_||g||(_=!0,As(S))),T},t.unstable_shouldYield=Se,t.unstable_wrapCallback=function(T){var D=h;return function(){var M=h;h=D;try{return T.apply(this,arguments)}finally{h=M}}}})(ip);(function(t){t.exports=ip})(ay);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sp=O,qe=Da;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var op=new Set,zi={};function er(t,e){Mr(t,e),Mr(t+"Capture",e)}function Mr(t,e){for(zi[t]=e,t=0;t<e.length;t++)op.add(e[t])}var bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ma=Object.prototype.hasOwnProperty,uy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fd={},Ud={};function cy(t){return Ma.call(Ud,t)?!0:Ma.call(Fd,t)?!1:uy.test(t)?Ud[t]=!0:(Fd[t]=!0,!1)}function dy(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hy(t,e,n,r){if(e===null||typeof e>"u"||dy(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Me(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ee[t]=new Me(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ee[e]=new Me(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ee[t]=new Me(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ee[t]=new Me(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ee[t]=new Me(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ee[t]=new Me(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ee[t]=new Me(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ee[t]=new Me(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ee[t]=new Me(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xu=/[\-:]([a-z])/g;function Ju(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xu,Ju);Ee[e]=new Me(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xu,Ju);Ee[e]=new Me(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xu,Ju);Ee[e]=new Me(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ee[t]=new Me(t,1,!1,t.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ee[t]=new Me(t,1,!1,t.toLowerCase(),null,!0,!0)});function Zu(t,e,n,r){var i=Ee.hasOwnProperty(e)?Ee[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hy(e,n,i,r)&&(n=null),r||i===null?cy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Bt=sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bs=Symbol.for("react.element"),lr=Symbol.for("react.portal"),ar=Symbol.for("react.fragment"),ec=Symbol.for("react.strict_mode"),La=Symbol.for("react.profiler"),lp=Symbol.for("react.provider"),ap=Symbol.for("react.context"),tc=Symbol.for("react.forward_ref"),ba=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),nc=Symbol.for("react.memo"),Yt=Symbol.for("react.lazy"),up=Symbol.for("react.offscreen"),zd=Symbol.iterator;function li(t){return t===null||typeof t!="object"?null:(t=zd&&t[zd]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,$l;function yi(t){if($l===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);$l=e&&e[1]||""}return`
`+$l+t}var Gl=!1;function Kl(t,e){if(!t||Gl)return"";Gl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Gl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?yi(t):""}function fy(t){switch(t.tag){case 5:return yi(t.type);case 16:return yi("Lazy");case 13:return yi("Suspense");case 19:return yi("SuspenseList");case 0:case 2:case 15:return t=Kl(t.type,!1),t;case 11:return t=Kl(t.type.render,!1),t;case 1:return t=Kl(t.type,!0),t;default:return""}}function Ua(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ar:return"Fragment";case lr:return"Portal";case La:return"Profiler";case ec:return"StrictMode";case ba:return"Suspense";case Fa:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ap:return(t.displayName||"Context")+".Consumer";case lp:return(t._context.displayName||"Context")+".Provider";case tc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case nc:return e=t.displayName||null,e!==null?e:Ua(t.type)||"Memo";case Yt:e=t._payload,t=t._init;try{return Ua(t(e))}catch{}}return null}function py(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ua(e);case 8:return e===ec?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function cp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function my(t){var e=cp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fs(t){t._valueTracker||(t._valueTracker=my(t))}function dp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=cp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function wo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function za(t,e){var n=e.checked;return re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Wd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=yn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function hp(t,e){e=e.checked,e!=null&&Zu(t,"checked",e,!1)}function Wa(t,e){hp(t,e);var n=yn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ja(t,e.type,n):e.hasOwnProperty("defaultValue")&&ja(t,e.type,yn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ja(t,e,n){(e!=="number"||wo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var wi=Array.isArray;function Cr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+yn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ba(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(wi(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yn(n)}}function fp(t,e){var n=yn(e.value),r=yn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Vd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function pp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Va(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?pp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Us,mp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Us=Us||document.createElement("div"),Us.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Us.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gy=["Webkit","ms","Moz","O"];Object.keys(Ii).forEach(function(t){gy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ii[e]=Ii[t]})});function gp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ii.hasOwnProperty(t)&&Ii[t]?(""+e).trim():e+"px"}function _p(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=gp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var _y=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ha(t,e){if(e){if(_y[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function $a(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ga=null;function rc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ka=null,Ir=null,kr=null;function Hd(t){if(t=ms(t)){if(typeof Ka!="function")throw Error(w(280));var e=t.stateNode;e&&(e=_l(e),Ka(t.stateNode,t.type,e))}}function vp(t){Ir?kr?kr.push(t):kr=[t]:Ir=t}function yp(){if(Ir){var t=Ir,e=kr;if(kr=Ir=null,Hd(t),e)for(t=0;t<e.length;t++)Hd(e[t])}}function wp(t,e){return t(e)}function Ep(){}var Ql=!1;function Sp(t,e,n){if(Ql)return t(e,n);Ql=!0;try{return wp(t,e,n)}finally{Ql=!1,(Ir!==null||kr!==null)&&(Ep(),yp())}}function ji(t,e){var n=t.stateNode;if(n===null)return null;var r=_l(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var Qa=!1;if(bt)try{var ai={};Object.defineProperty(ai,"passive",{get:function(){Qa=!0}}),window.addEventListener("test",ai,ai),window.removeEventListener("test",ai,ai)}catch{Qa=!1}function vy(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var ki=!1,Eo=null,So=!1,qa=null,yy={onError:function(t){ki=!0,Eo=t}};function wy(t,e,n,r,i,s,o,l,a){ki=!1,Eo=null,vy.apply(yy,arguments)}function Ey(t,e,n,r,i,s,o,l,a){if(wy.apply(this,arguments),ki){if(ki){var u=Eo;ki=!1,Eo=null}else throw Error(w(198));So||(So=!0,qa=u)}}function tr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Cp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function $d(t){if(tr(t)!==t)throw Error(w(188))}function Sy(t){var e=t.alternate;if(!e){if(e=tr(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return $d(i),t;if(s===r)return $d(i),e;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function Ip(t){return t=Sy(t),t!==null?kp(t):null}function kp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=kp(t);if(e!==null)return e;t=t.sibling}return null}var Tp=qe.unstable_scheduleCallback,Gd=qe.unstable_cancelCallback,Cy=qe.unstable_shouldYield,Iy=qe.unstable_requestPaint,oe=qe.unstable_now,ky=qe.unstable_getCurrentPriorityLevel,ic=qe.unstable_ImmediatePriority,Np=qe.unstable_UserBlockingPriority,Co=qe.unstable_NormalPriority,Ty=qe.unstable_LowPriority,Rp=qe.unstable_IdlePriority,fl=null,vt=null;function Ny(t){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(fl,t,void 0,(t.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:Py,Ry=Math.log,xy=Math.LN2;function Py(t){return t>>>=0,t===0?32:31-(Ry(t)/xy|0)|0}var zs=64,Ws=4194304;function Ei(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Io(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ei(l):(s&=o,s!==0&&(r=Ei(s)))}else o=n&~i,o!==0?r=Ei(o):s!==0&&(r=Ei(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-dt(e),i=1<<n,r|=t[n],e&=~i;return r}function Oy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ay(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-dt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Oy(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Ya(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function xp(){var t=zs;return zs<<=1,!(zs&4194240)&&(zs=64),t}function ql(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-dt(e),t[e]=n}function Dy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-dt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function sc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-dt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var V=0;function Pp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Op,oc,Ap,Dp,Mp,Xa=!1,js=[],on=null,ln=null,an=null,Bi=new Map,Vi=new Map,Jt=[],My="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kd(t,e){switch(t){case"focusin":case"focusout":on=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":an=null;break;case"pointerover":case"pointerout":Bi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vi.delete(e.pointerId)}}function ui(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ms(e),e!==null&&oc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Ly(t,e,n,r,i){switch(e){case"focusin":return on=ui(on,t,e,n,r,i),!0;case"dragenter":return ln=ui(ln,t,e,n,r,i),!0;case"mouseover":return an=ui(an,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Bi.set(s,ui(Bi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Vi.set(s,ui(Vi.get(s)||null,t,e,n,r,i)),!0}return!1}function Lp(t){var e=Mn(t.target);if(e!==null){var n=tr(e);if(n!==null){if(e=n.tag,e===13){if(e=Cp(n),e!==null){t.blockedOn=e,Mp(t.priority,function(){Ap(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function so(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ja(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ga=r,n.target.dispatchEvent(r),Ga=null}else return e=ms(n),e!==null&&oc(e),t.blockedOn=n,!1;e.shift()}return!0}function Qd(t,e,n){so(t)&&n.delete(e)}function by(){Xa=!1,on!==null&&so(on)&&(on=null),ln!==null&&so(ln)&&(ln=null),an!==null&&so(an)&&(an=null),Bi.forEach(Qd),Vi.forEach(Qd)}function ci(t,e){t.blockedOn===e&&(t.blockedOn=null,Xa||(Xa=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,by)))}function Hi(t){function e(i){return ci(i,t)}if(0<js.length){ci(js[0],t);for(var n=1;n<js.length;n++){var r=js[n];r.blockedOn===t&&(r.blockedOn=null)}}for(on!==null&&ci(on,t),ln!==null&&ci(ln,t),an!==null&&ci(an,t),Bi.forEach(e),Vi.forEach(e),n=0;n<Jt.length;n++)r=Jt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Jt.length&&(n=Jt[0],n.blockedOn===null);)Lp(n),n.blockedOn===null&&Jt.shift()}var Tr=Bt.ReactCurrentBatchConfig,ko=!0;function Fy(t,e,n,r){var i=V,s=Tr.transition;Tr.transition=null;try{V=1,lc(t,e,n,r)}finally{V=i,Tr.transition=s}}function Uy(t,e,n,r){var i=V,s=Tr.transition;Tr.transition=null;try{V=4,lc(t,e,n,r)}finally{V=i,Tr.transition=s}}function lc(t,e,n,r){if(ko){var i=Ja(t,e,n,r);if(i===null)sa(t,e,r,To,n),Kd(t,r);else if(Ly(i,t,e,n,r))r.stopPropagation();else if(Kd(t,r),e&4&&-1<My.indexOf(t)){for(;i!==null;){var s=ms(i);if(s!==null&&Op(s),s=Ja(t,e,n,r),s===null&&sa(t,e,r,To,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else sa(t,e,r,null,n)}}var To=null;function Ja(t,e,n,r){if(To=null,t=rc(r),t=Mn(t),t!==null)if(e=tr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Cp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return To=t,null}function bp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ky()){case ic:return 1;case Np:return 4;case Co:case Ty:return 16;case Rp:return 536870912;default:return 16}default:return 16}}var rn=null,ac=null,oo=null;function Fp(){if(oo)return oo;var t,e=ac,n=e.length,r,i="value"in rn?rn.value:rn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return oo=i.slice(t,1<r?1-r:void 0)}function lo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Bs(){return!0}function qd(){return!1}function Xe(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Bs:qd,this.isPropagationStopped=qd,this}return re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bs)},persist:function(){},isPersistent:Bs}),e}var Yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uc=Xe(Yr),ps=re({},Yr,{view:0,detail:0}),zy=Xe(ps),Yl,Xl,di,pl=re({},ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==di&&(di&&t.type==="mousemove"?(Yl=t.screenX-di.screenX,Xl=t.screenY-di.screenY):Xl=Yl=0,di=t),Yl)},movementY:function(t){return"movementY"in t?t.movementY:Xl}}),Yd=Xe(pl),Wy=re({},pl,{dataTransfer:0}),jy=Xe(Wy),By=re({},ps,{relatedTarget:0}),Jl=Xe(By),Vy=re({},Yr,{animationName:0,elapsedTime:0,pseudoElement:0}),Hy=Xe(Vy),$y=re({},Yr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Gy=Xe($y),Ky=re({},Yr,{data:0}),Xd=Xe(Ky),Qy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Yy[t])?!!e[t]:!1}function cc(){return Xy}var Jy=re({},ps,{key:function(t){if(t.key){var e=Qy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=lo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cc,charCode:function(t){return t.type==="keypress"?lo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?lo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Zy=Xe(Jy),e0=re({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jd=Xe(e0),t0=re({},ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cc}),n0=Xe(t0),r0=re({},Yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),i0=Xe(r0),s0=re({},pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),o0=Xe(s0),l0=[9,13,27,32],dc=bt&&"CompositionEvent"in window,Ti=null;bt&&"documentMode"in document&&(Ti=document.documentMode);var a0=bt&&"TextEvent"in window&&!Ti,Up=bt&&(!dc||Ti&&8<Ti&&11>=Ti),Zd=String.fromCharCode(32),eh=!1;function zp(t,e){switch(t){case"keyup":return l0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ur=!1;function u0(t,e){switch(t){case"compositionend":return Wp(e);case"keypress":return e.which!==32?null:(eh=!0,Zd);case"textInput":return t=e.data,t===Zd&&eh?null:t;default:return null}}function c0(t,e){if(ur)return t==="compositionend"||!dc&&zp(t,e)?(t=Fp(),oo=ac=rn=null,ur=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Up&&e.locale!=="ko"?null:e.data;default:return null}}var d0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function th(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!d0[t.type]:e==="textarea"}function jp(t,e,n,r){vp(r),e=No(e,"onChange"),0<e.length&&(n=new uc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ni=null,$i=null;function h0(t){Jp(t,0)}function ml(t){var e=hr(t);if(dp(e))return t}function f0(t,e){if(t==="change")return e}var Bp=!1;if(bt){var Zl;if(bt){var ea="oninput"in document;if(!ea){var nh=document.createElement("div");nh.setAttribute("oninput","return;"),ea=typeof nh.oninput=="function"}Zl=ea}else Zl=!1;Bp=Zl&&(!document.documentMode||9<document.documentMode)}function rh(){Ni&&(Ni.detachEvent("onpropertychange",Vp),$i=Ni=null)}function Vp(t){if(t.propertyName==="value"&&ml($i)){var e=[];jp(e,$i,t,rc(t)),Sp(h0,e)}}function p0(t,e,n){t==="focusin"?(rh(),Ni=e,$i=n,Ni.attachEvent("onpropertychange",Vp)):t==="focusout"&&rh()}function m0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ml($i)}function g0(t,e){if(t==="click")return ml(e)}function _0(t,e){if(t==="input"||t==="change")return ml(e)}function v0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pt=typeof Object.is=="function"?Object.is:v0;function Gi(t,e){if(pt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ma.call(e,i)||!pt(t[i],e[i]))return!1}return!0}function ih(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sh(t,e){var n=ih(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ih(n)}}function Hp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $p(){for(var t=window,e=wo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=wo(t.document)}return e}function hc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function y0(t){var e=$p(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Hp(n.ownerDocument.documentElement,n)){if(r!==null&&hc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=sh(n,s);var o=sh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var w0=bt&&"documentMode"in document&&11>=document.documentMode,cr=null,Za=null,Ri=null,eu=!1;function oh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;eu||cr==null||cr!==wo(r)||(r=cr,"selectionStart"in r&&hc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ri&&Gi(Ri,r)||(Ri=r,r=No(Za,"onSelect"),0<r.length&&(e=new uc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=cr)))}function Vs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var dr={animationend:Vs("Animation","AnimationEnd"),animationiteration:Vs("Animation","AnimationIteration"),animationstart:Vs("Animation","AnimationStart"),transitionend:Vs("Transition","TransitionEnd")},ta={},Gp={};bt&&(Gp=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function gl(t){if(ta[t])return ta[t];if(!dr[t])return t;var e=dr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Gp)return ta[t]=e[n];return t}var Kp=gl("animationend"),Qp=gl("animationiteration"),qp=gl("animationstart"),Yp=gl("transitionend"),Xp=new Map,lh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kn(t,e){Xp.set(t,e),er(e,[t])}for(var na=0;na<lh.length;na++){var ra=lh[na],E0=ra.toLowerCase(),S0=ra[0].toUpperCase()+ra.slice(1);kn(E0,"on"+S0)}kn(Kp,"onAnimationEnd");kn(Qp,"onAnimationIteration");kn(qp,"onAnimationStart");kn("dblclick","onDoubleClick");kn("focusin","onFocus");kn("focusout","onBlur");kn(Yp,"onTransitionEnd");Mr("onMouseEnter",["mouseout","mouseover"]);Mr("onMouseLeave",["mouseout","mouseover"]);Mr("onPointerEnter",["pointerout","pointerover"]);Mr("onPointerLeave",["pointerout","pointerover"]);er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));er("onBeforeInput",["compositionend","keypress","textInput","paste"]);er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),C0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Si));function ah(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Ey(r,e,void 0,t),t.currentTarget=null}function Jp(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;ah(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;ah(i,l,u),s=a}}}if(So)throw t=qa,So=!1,qa=null,t}function q(t,e){var n=e[su];n===void 0&&(n=e[su]=new Set);var r=t+"__bubble";n.has(r)||(Zp(e,t,2,!1),n.add(r))}function ia(t,e,n){var r=0;e&&(r|=4),Zp(n,t,r,e)}var Hs="_reactListening"+Math.random().toString(36).slice(2);function Ki(t){if(!t[Hs]){t[Hs]=!0,op.forEach(function(n){n!=="selectionchange"&&(C0.has(n)||ia(n,!1,t),ia(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Hs]||(e[Hs]=!0,ia("selectionchange",!1,e))}}function Zp(t,e,n,r){switch(bp(e)){case 1:var i=Fy;break;case 4:i=Uy;break;default:i=lc}n=i.bind(null,e,n,t),i=void 0,!Qa||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function sa(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Mn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Sp(function(){var u=s,d=rc(n),c=[];e:{var h=Xp.get(t);if(h!==void 0){var g=uc,_=t;switch(t){case"keypress":if(lo(n)===0)break e;case"keydown":case"keyup":g=Zy;break;case"focusin":_="focus",g=Jl;break;case"focusout":_="blur",g=Jl;break;case"beforeblur":case"afterblur":g=Jl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=jy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=n0;break;case Kp:case Qp:case qp:g=Hy;break;case Yp:g=i0;break;case"scroll":g=zy;break;case"wheel":g=o0;break;case"copy":case"cut":case"paste":g=Gy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Jd}var v=(e&4)!==0,x=!v&&t==="scroll",p=v?h!==null?h+"Capture":null:h;v=[];for(var f=u,m;f!==null;){m=f;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=ji(f,p),y!=null&&v.push(Qi(f,y,m)))),x)break;f=f.return}0<v.length&&(h=new g(h,_,null,n,d),c.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Ga&&(_=n.relatedTarget||n.fromElement)&&(Mn(_)||_[Ft]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?Mn(_):null,_!==null&&(x=tr(_),_!==x||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(v=Yd,y="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Jd,y="onPointerLeave",p="onPointerEnter",f="pointer"),x=g==null?h:hr(g),m=_==null?h:hr(_),h=new v(y,f+"leave",g,n,d),h.target=x,h.relatedTarget=m,y=null,Mn(d)===u&&(v=new v(p,f+"enter",_,n,d),v.target=m,v.relatedTarget=x,y=v),x=y,g&&_)t:{for(v=g,p=_,f=0,m=v;m;m=ir(m))f++;for(m=0,y=p;y;y=ir(y))m++;for(;0<f-m;)v=ir(v),f--;for(;0<m-f;)p=ir(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=ir(v),p=ir(p)}v=null}else v=null;g!==null&&uh(c,h,g,v,!1),_!==null&&x!==null&&uh(c,x,_,v,!0)}}e:{if(h=u?hr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var S=f0;else if(th(h))if(Bp)S=_0;else{S=m0;var k=p0}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=g0);if(S&&(S=S(t,u))){jp(c,S,n,d);break e}k&&k(t,h,u),t==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&ja(h,"number",h.value)}switch(k=u?hr(u):window,t){case"focusin":(th(k)||k.contentEditable==="true")&&(cr=k,Za=u,Ri=null);break;case"focusout":Ri=Za=cr=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,oh(c,n,d);break;case"selectionchange":if(w0)break;case"keydown":case"keyup":oh(c,n,d)}var I;if(dc)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ur?zp(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Up&&n.locale!=="ko"&&(ur||R!=="onCompositionStart"?R==="onCompositionEnd"&&ur&&(I=Fp()):(rn=d,ac="value"in rn?rn.value:rn.textContent,ur=!0)),k=No(u,R),0<k.length&&(R=new Xd(R,t,null,n,d),c.push({event:R,listeners:k}),I?R.data=I:(I=Wp(n),I!==null&&(R.data=I)))),(I=a0?u0(t,n):c0(t,n))&&(u=No(u,"onBeforeInput"),0<u.length&&(d=new Xd("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=I))}Jp(c,e)})}function Qi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function No(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ji(t,n),s!=null&&r.unshift(Qi(t,s,i)),s=ji(t,e),s!=null&&r.push(Qi(t,s,i))),t=t.return}return r}function ir(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function uh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=ji(n,s),a!=null&&o.unshift(Qi(n,a,l))):i||(a=ji(n,s),a!=null&&o.push(Qi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var I0=/\r\n?/g,k0=/\u0000|\uFFFD/g;function ch(t){return(typeof t=="string"?t:""+t).replace(I0,`
`).replace(k0,"")}function $s(t,e,n){if(e=ch(e),ch(t)!==e&&n)throw Error(w(425))}function Ro(){}var tu=null,nu=null;function ru(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var iu=typeof setTimeout=="function"?setTimeout:void 0,T0=typeof clearTimeout=="function"?clearTimeout:void 0,dh=typeof Promise=="function"?Promise:void 0,N0=typeof queueMicrotask=="function"?queueMicrotask:typeof dh<"u"?function(t){return dh.resolve(null).then(t).catch(R0)}:iu;function R0(t){setTimeout(function(){throw t})}function oa(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Hi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Hi(e)}function un(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function hh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Xr=Math.random().toString(36).slice(2),_t="__reactFiber$"+Xr,qi="__reactProps$"+Xr,Ft="__reactContainer$"+Xr,su="__reactEvents$"+Xr,x0="__reactListeners$"+Xr,P0="__reactHandles$"+Xr;function Mn(t){var e=t[_t];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ft]||n[_t]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=hh(t);t!==null;){if(n=t[_t])return n;t=hh(t)}return e}t=n,n=t.parentNode}return null}function ms(t){return t=t[_t]||t[Ft],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function _l(t){return t[qi]||null}var ou=[],fr=-1;function Tn(t){return{current:t}}function X(t){0>fr||(t.current=ou[fr],ou[fr]=null,fr--)}function K(t,e){fr++,ou[fr]=t.current,t.current=e}var wn={},Ne=Tn(wn),We=Tn(!1),Vn=wn;function Lr(t,e){var n=t.type.contextTypes;if(!n)return wn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function je(t){return t=t.childContextTypes,t!=null}function xo(){X(We),X(Ne)}function fh(t,e,n){if(Ne.current!==wn)throw Error(w(168));K(Ne,e),K(We,n)}function em(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,py(t)||"Unknown",i));return re({},n,r)}function Po(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wn,Vn=Ne.current,K(Ne,t),K(We,We.current),!0}function ph(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=em(t,e,Vn),r.__reactInternalMemoizedMergedChildContext=t,X(We),X(Ne),K(Ne,t)):X(We),K(We,n)}var Tt=null,vl=!1,la=!1;function tm(t){Tt===null?Tt=[t]:Tt.push(t)}function O0(t){vl=!0,tm(t)}function Nn(){if(!la&&Tt!==null){la=!0;var t=0,e=V;try{var n=Tt;for(V=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Tt=null,vl=!1}catch(i){throw Tt!==null&&(Tt=Tt.slice(t+1)),Tp(ic,Nn),i}finally{V=e,la=!1}}return null}var pr=[],mr=0,Oo=null,Ao=0,Je=[],Ze=0,Hn=null,xt=1,Pt="";function Pn(t,e){pr[mr++]=Ao,pr[mr++]=Oo,Oo=t,Ao=e}function nm(t,e,n){Je[Ze++]=xt,Je[Ze++]=Pt,Je[Ze++]=Hn,Hn=t;var r=xt;t=Pt;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var s=32-dt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xt=1<<32-dt(e)+i|n<<i|r,Pt=s+t}else xt=1<<s|n<<i|r,Pt=t}function fc(t){t.return!==null&&(Pn(t,1),nm(t,1,0))}function pc(t){for(;t===Oo;)Oo=pr[--mr],pr[mr]=null,Ao=pr[--mr],pr[mr]=null;for(;t===Hn;)Hn=Je[--Ze],Je[Ze]=null,Pt=Je[--Ze],Je[Ze]=null,xt=Je[--Ze],Je[Ze]=null}var Qe=null,Ke=null,J=!1,lt=null;function rm(t,e){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Qe=t,Ke=un(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Qe=t,Ke=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hn!==null?{id:xt,overflow:Pt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Qe=t,Ke=null,!0):!1;default:return!1}}function lu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function au(t){if(J){var e=Ke;if(e){var n=e;if(!mh(t,e)){if(lu(t))throw Error(w(418));e=un(n.nextSibling);var r=Qe;e&&mh(t,e)?rm(r,n):(t.flags=t.flags&-4097|2,J=!1,Qe=t)}}else{if(lu(t))throw Error(w(418));t.flags=t.flags&-4097|2,J=!1,Qe=t}}}function gh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Qe=t}function Gs(t){if(t!==Qe)return!1;if(!J)return gh(t),J=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ru(t.type,t.memoizedProps)),e&&(e=Ke)){if(lu(t))throw im(),Error(w(418));for(;e;)rm(t,e),e=un(e.nextSibling)}if(gh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ke=un(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ke=null}}else Ke=Qe?un(t.stateNode.nextSibling):null;return!0}function im(){for(var t=Ke;t;)t=un(t.nextSibling)}function br(){Ke=Qe=null,J=!1}function mc(t){lt===null?lt=[t]:lt.push(t)}var A0=Bt.ReactCurrentBatchConfig;function st(t,e){if(t&&t.defaultProps){e=re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Do=Tn(null),Mo=null,gr=null,gc=null;function _c(){gc=gr=Mo=null}function vc(t){var e=Do.current;X(Do),t._currentValue=e}function uu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Nr(t,e){Mo=t,gc=gr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ue=!0),t.firstContext=null)}function nt(t){var e=t._currentValue;if(gc!==t)if(t={context:t,memoizedValue:e,next:null},gr===null){if(Mo===null)throw Error(w(308));gr=t,Mo.dependencies={lanes:0,firstContext:t}}else gr=gr.next=t;return e}var Ln=null;function yc(t){Ln===null?Ln=[t]:Ln.push(t)}function sm(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,yc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ut(t,r)}function Ut(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xt=!1;function wc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function om(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ut(t,n)}return i=r.interleaved,i===null?(e.next=e,yc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ut(t,n)}function ao(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sc(t,n)}}function _h(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Lo(t,e,n,r){var i=t.updateQueue;Xt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var h=l.lane,g=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,v=l;switch(h=e,g=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){c=_.call(g,c,h);break e}c=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,h=typeof _=="function"?_.call(g,c,h):_,h==null)break e;c=re({},c,h);break e;case 2:Xt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=g,a=c):d=d.next=g,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Gn|=o,t.lanes=o,t.memoizedState=c}}function vh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var lm=new sp.Component().refs;function cu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var yl={isMounted:function(t){return(t=t._reactInternals)?tr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ae(),i=hn(t),s=Mt(r,i);s.payload=e,n!=null&&(s.callback=n),e=cn(t,s,i),e!==null&&(ht(e,t,i,r),ao(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ae(),i=hn(t),s=Mt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cn(t,s,i),e!==null&&(ht(e,t,i,r),ao(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ae(),r=hn(t),i=Mt(n,r);i.tag=2,e!=null&&(i.callback=e),e=cn(t,i,r),e!==null&&(ht(e,t,r,n),ao(e,t,r))}};function yh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Gi(n,r)||!Gi(i,s):!0}function am(t,e,n){var r=!1,i=wn,s=e.contextType;return typeof s=="object"&&s!==null?s=nt(s):(i=je(e)?Vn:Ne.current,r=e.contextTypes,s=(r=r!=null)?Lr(t,i):wn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function wh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&yl.enqueueReplaceState(e,e.state,null)}function du(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=lm,wc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=nt(s):(s=je(e)?Vn:Ne.current,i.context=Lr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(cu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&yl.enqueueReplaceState(i,i.state,null),Lo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function hi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===lm&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function Ks(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Eh(t){var e=t._init;return e(t._payload)}function um(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=fn(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,m,y){return f===null||f.tag!==6?(f=pa(m,p.mode,y),f.return=p,f):(f=i(f,m),f.return=p,f)}function a(p,f,m,y){var S=m.type;return S===ar?d(p,f,m.props.children,y,m.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Yt&&Eh(S)===f.type)?(y=i(f,m.props),y.ref=hi(p,f,m),y.return=p,y):(y=mo(m.type,m.key,m.props,null,p.mode,y),y.ref=hi(p,f,m),y.return=p,y)}function u(p,f,m,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=ma(m,p.mode,y),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function d(p,f,m,y,S){return f===null||f.tag!==7?(f=Wn(m,p.mode,y,S),f.return=p,f):(f=i(f,m),f.return=p,f)}function c(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=pa(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case bs:return m=mo(f.type,f.key,f.props,null,p.mode,m),m.ref=hi(p,null,f),m.return=p,m;case lr:return f=ma(f,p.mode,m),f.return=p,f;case Yt:var y=f._init;return c(p,y(f._payload),m)}if(wi(f)||li(f))return f=Wn(f,p.mode,m,null),f.return=p,f;Ks(p,f)}return null}function h(p,f,m,y){var S=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:l(p,f,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case bs:return m.key===S?a(p,f,m,y):null;case lr:return m.key===S?u(p,f,m,y):null;case Yt:return S=m._init,h(p,f,S(m._payload),y)}if(wi(m)||li(m))return S!==null?null:d(p,f,m,y,null);Ks(p,m)}return null}function g(p,f,m,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,l(f,p,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case bs:return p=p.get(y.key===null?m:y.key)||null,a(f,p,y,S);case lr:return p=p.get(y.key===null?m:y.key)||null,u(f,p,y,S);case Yt:var k=y._init;return g(p,f,m,k(y._payload),S)}if(wi(y)||li(y))return p=p.get(m)||null,d(f,p,y,S,null);Ks(f,y)}return null}function _(p,f,m,y){for(var S=null,k=null,I=f,R=f=0,B=null;I!==null&&R<m.length;R++){I.index>R?(B=I,I=null):B=I.sibling;var L=h(p,I,m[R],y);if(L===null){I===null&&(I=B);break}t&&I&&L.alternate===null&&e(p,I),f=s(L,f,R),k===null?S=L:k.sibling=L,k=L,I=B}if(R===m.length)return n(p,I),J&&Pn(p,R),S;if(I===null){for(;R<m.length;R++)I=c(p,m[R],y),I!==null&&(f=s(I,f,R),k===null?S=I:k.sibling=I,k=I);return J&&Pn(p,R),S}for(I=r(p,I);R<m.length;R++)B=g(I,p,R,m[R],y),B!==null&&(t&&B.alternate!==null&&I.delete(B.key===null?R:B.key),f=s(B,f,R),k===null?S=B:k.sibling=B,k=B);return t&&I.forEach(function(Se){return e(p,Se)}),J&&Pn(p,R),S}function v(p,f,m,y){var S=li(m);if(typeof S!="function")throw Error(w(150));if(m=S.call(m),m==null)throw Error(w(151));for(var k=S=null,I=f,R=f=0,B=null,L=m.next();I!==null&&!L.done;R++,L=m.next()){I.index>R?(B=I,I=null):B=I.sibling;var Se=h(p,I,L.value,y);if(Se===null){I===null&&(I=B);break}t&&I&&Se.alternate===null&&e(p,I),f=s(Se,f,R),k===null?S=Se:k.sibling=Se,k=Se,I=B}if(L.done)return n(p,I),J&&Pn(p,R),S;if(I===null){for(;!L.done;R++,L=m.next())L=c(p,L.value,y),L!==null&&(f=s(L,f,R),k===null?S=L:k.sibling=L,k=L);return J&&Pn(p,R),S}for(I=r(p,I);!L.done;R++,L=m.next())L=g(I,p,R,L.value,y),L!==null&&(t&&L.alternate!==null&&I.delete(L.key===null?R:L.key),f=s(L,f,R),k===null?S=L:k.sibling=L,k=L);return t&&I.forEach(function(xn){return e(p,xn)}),J&&Pn(p,R),S}function x(p,f,m,y){if(typeof m=="object"&&m!==null&&m.type===ar&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case bs:e:{for(var S=m.key,k=f;k!==null;){if(k.key===S){if(S=m.type,S===ar){if(k.tag===7){n(p,k.sibling),f=i(k,m.props.children),f.return=p,p=f;break e}}else if(k.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Yt&&Eh(S)===k.type){n(p,k.sibling),f=i(k,m.props),f.ref=hi(p,k,m),f.return=p,p=f;break e}n(p,k);break}else e(p,k);k=k.sibling}m.type===ar?(f=Wn(m.props.children,p.mode,y,m.key),f.return=p,p=f):(y=mo(m.type,m.key,m.props,null,p.mode,y),y.ref=hi(p,f,m),y.return=p,p=y)}return o(p);case lr:e:{for(k=m.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=ma(m,p.mode,y),f.return=p,p=f}return o(p);case Yt:return k=m._init,x(p,f,k(m._payload),y)}if(wi(m))return _(p,f,m,y);if(li(m))return v(p,f,m,y);Ks(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=pa(m,p.mode,y),f.return=p,p=f),o(p)):n(p,f)}return x}var Fr=um(!0),cm=um(!1),gs={},yt=Tn(gs),Yi=Tn(gs),Xi=Tn(gs);function bn(t){if(t===gs)throw Error(w(174));return t}function Ec(t,e){switch(K(Xi,e),K(Yi,t),K(yt,gs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Va(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Va(e,t)}X(yt),K(yt,e)}function Ur(){X(yt),X(Yi),X(Xi)}function dm(t){bn(Xi.current);var e=bn(yt.current),n=Va(e,t.type);e!==n&&(K(Yi,t),K(yt,n))}function Sc(t){Yi.current===t&&(X(yt),X(Yi))}var te=Tn(0);function bo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var aa=[];function Cc(){for(var t=0;t<aa.length;t++)aa[t]._workInProgressVersionPrimary=null;aa.length=0}var uo=Bt.ReactCurrentDispatcher,ua=Bt.ReactCurrentBatchConfig,$n=0,ne=null,ue=null,me=null,Fo=!1,xi=!1,Ji=0,D0=0;function Ce(){throw Error(w(321))}function Ic(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pt(t[n],e[n]))return!1;return!0}function kc(t,e,n,r,i,s){if($n=s,ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,uo.current=t===null||t.memoizedState===null?F0:U0,t=n(r,i),xi){s=0;do{if(xi=!1,Ji=0,25<=s)throw Error(w(301));s+=1,me=ue=null,e.updateQueue=null,uo.current=z0,t=n(r,i)}while(xi)}if(uo.current=Uo,e=ue!==null&&ue.next!==null,$n=0,me=ue=ne=null,Fo=!1,e)throw Error(w(300));return t}function Tc(){var t=Ji!==0;return Ji=0,t}function gt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?ne.memoizedState=me=t:me=me.next=t,me}function rt(){if(ue===null){var t=ne.alternate;t=t!==null?t.memoizedState:null}else t=ue.next;var e=me===null?ne.memoizedState:me.next;if(e!==null)me=e,ue=t;else{if(t===null)throw Error(w(310));ue=t,t={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},me===null?ne.memoizedState=me=t:me=me.next=t}return me}function Zi(t,e){return typeof e=="function"?e(t):e}function ca(t){var e=rt(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if(($n&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,ne.lanes|=d,Gn|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,pt(r,e.memoizedState)||(Ue=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ne.lanes|=s,Gn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function da(t){var e=rt(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);pt(s,e.memoizedState)||(Ue=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function hm(){}function fm(t,e){var n=ne,r=rt(),i=e(),s=!pt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ue=!0),r=r.queue,Nc(gm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,es(9,mm.bind(null,n,r,i,e),void 0,null),ve===null)throw Error(w(349));$n&30||pm(n,e,i)}return i}function pm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ne.updateQueue,e===null?(e={lastEffect:null,stores:null},ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function mm(t,e,n,r){e.value=n,e.getSnapshot=r,_m(e)&&vm(t)}function gm(t,e,n){return n(function(){_m(e)&&vm(t)})}function _m(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pt(t,n)}catch{return!0}}function vm(t){var e=Ut(t,1);e!==null&&ht(e,t,1,-1)}function Sh(t){var e=gt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:t},e.queue=t,t=t.dispatch=b0.bind(null,ne,t),[e.memoizedState,t]}function es(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ne.updateQueue,e===null?(e={lastEffect:null,stores:null},ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ym(){return rt().memoizedState}function co(t,e,n,r){var i=gt();ne.flags|=t,i.memoizedState=es(1|e,n,void 0,r===void 0?null:r)}function wl(t,e,n,r){var i=rt();r=r===void 0?null:r;var s=void 0;if(ue!==null){var o=ue.memoizedState;if(s=o.destroy,r!==null&&Ic(r,o.deps)){i.memoizedState=es(e,n,s,r);return}}ne.flags|=t,i.memoizedState=es(1|e,n,s,r)}function Ch(t,e){return co(8390656,8,t,e)}function Nc(t,e){return wl(2048,8,t,e)}function wm(t,e){return wl(4,2,t,e)}function Em(t,e){return wl(4,4,t,e)}function Sm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Cm(t,e,n){return n=n!=null?n.concat([t]):null,wl(4,4,Sm.bind(null,e,t),n)}function Rc(){}function Im(t,e){var n=rt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ic(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function km(t,e){var n=rt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ic(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Tm(t,e,n){return $n&21?(pt(n,e)||(n=xp(),ne.lanes|=n,Gn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ue=!0),t.memoizedState=n)}function M0(t,e){var n=V;V=n!==0&&4>n?n:4,t(!0);var r=ua.transition;ua.transition={};try{t(!1),e()}finally{V=n,ua.transition=r}}function Nm(){return rt().memoizedState}function L0(t,e,n){var r=hn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Rm(t))xm(e,n);else if(n=sm(t,e,n,r),n!==null){var i=Ae();ht(n,t,r,i),Pm(n,e,r)}}function b0(t,e,n){var r=hn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rm(t))xm(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,pt(l,o)){var a=e.interleaved;a===null?(i.next=i,yc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=sm(t,e,i,r),n!==null&&(i=Ae(),ht(n,t,r,i),Pm(n,e,r))}}function Rm(t){var e=t.alternate;return t===ne||e!==null&&e===ne}function xm(t,e){xi=Fo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Pm(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sc(t,n)}}var Uo={readContext:nt,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},F0={readContext:nt,useCallback:function(t,e){return gt().memoizedState=[t,e===void 0?null:e],t},useContext:nt,useEffect:Ch,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,co(4194308,4,Sm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return co(4194308,4,t,e)},useInsertionEffect:function(t,e){return co(4,2,t,e)},useMemo:function(t,e){var n=gt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=gt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=L0.bind(null,ne,t),[r.memoizedState,t]},useRef:function(t){var e=gt();return t={current:t},e.memoizedState=t},useState:Sh,useDebugValue:Rc,useDeferredValue:function(t){return gt().memoizedState=t},useTransition:function(){var t=Sh(!1),e=t[0];return t=M0.bind(null,t[1]),gt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ne,i=gt();if(J){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),ve===null)throw Error(w(349));$n&30||pm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ch(gm.bind(null,r,s,t),[t]),r.flags|=2048,es(9,mm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=gt(),e=ve.identifierPrefix;if(J){var n=Pt,r=xt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ji++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=D0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},U0={readContext:nt,useCallback:Im,useContext:nt,useEffect:Nc,useImperativeHandle:Cm,useInsertionEffect:wm,useLayoutEffect:Em,useMemo:km,useReducer:ca,useRef:ym,useState:function(){return ca(Zi)},useDebugValue:Rc,useDeferredValue:function(t){var e=rt();return Tm(e,ue.memoizedState,t)},useTransition:function(){var t=ca(Zi)[0],e=rt().memoizedState;return[t,e]},useMutableSource:hm,useSyncExternalStore:fm,useId:Nm,unstable_isNewReconciler:!1},z0={readContext:nt,useCallback:Im,useContext:nt,useEffect:Nc,useImperativeHandle:Cm,useInsertionEffect:wm,useLayoutEffect:Em,useMemo:km,useReducer:da,useRef:ym,useState:function(){return da(Zi)},useDebugValue:Rc,useDeferredValue:function(t){var e=rt();return ue===null?e.memoizedState=t:Tm(e,ue.memoizedState,t)},useTransition:function(){var t=da(Zi)[0],e=rt().memoizedState;return[t,e]},useMutableSource:hm,useSyncExternalStore:fm,useId:Nm,unstable_isNewReconciler:!1};function zr(t,e){try{var n="",r=e;do n+=fy(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ha(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var W0=typeof WeakMap=="function"?WeakMap:Map;function Om(t,e,n){n=Mt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Wo||(Wo=!0,Su=r),hu(t,e)},n}function Am(t,e,n){n=Mt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){hu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hu(t,e),typeof r!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ih(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new W0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ew.bind(null,t,e,n),e.then(t,t))}function kh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Th(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Mt(-1,1),e.tag=2,cn(n,e,1))),n.lanes|=1),t)}var j0=Bt.ReactCurrentOwner,Ue=!1;function xe(t,e,n,r){e.child=t===null?cm(e,null,n,r):Fr(e,t.child,n,r)}function Nh(t,e,n,r,i){n=n.render;var s=e.ref;return Nr(e,i),r=kc(t,e,n,r,s,i),n=Tc(),t!==null&&!Ue?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zt(t,e,i)):(J&&n&&fc(e),e.flags|=1,xe(t,e,r,i),e.child)}function Rh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!bc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Dm(t,e,s,r,i)):(t=mo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Gi,n(o,r)&&t.ref===e.ref)return zt(t,e,i)}return e.flags|=1,t=fn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Dm(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Gi(s,r)&&t.ref===e.ref)if(Ue=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ue=!0);else return e.lanes=t.lanes,zt(t,e,i)}return fu(t,e,n,r,i)}function Mm(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(vr,Ge),Ge|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,K(vr,Ge),Ge|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,K(vr,Ge),Ge|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,K(vr,Ge),Ge|=r;return xe(t,e,i,n),e.child}function Lm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function fu(t,e,n,r,i){var s=je(n)?Vn:Ne.current;return s=Lr(e,s),Nr(e,i),n=kc(t,e,n,r,s,i),r=Tc(),t!==null&&!Ue?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zt(t,e,i)):(J&&r&&fc(e),e.flags|=1,xe(t,e,n,i),e.child)}function xh(t,e,n,r,i){if(je(n)){var s=!0;Po(e)}else s=!1;if(Nr(e,i),e.stateNode===null)ho(t,e),am(e,n,r),du(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=nt(u):(u=je(n)?Vn:Ne.current,u=Lr(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&wh(e,o,r,u),Xt=!1;var h=e.memoizedState;o.state=h,Lo(e,r,o,i),a=e.memoizedState,l!==r||h!==a||We.current||Xt?(typeof d=="function"&&(cu(e,n,d,r),a=e.memoizedState),(l=Xt||yh(e,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,om(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:st(e.type,l),o.props=u,c=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=nt(a):(a=je(n)?Vn:Ne.current,a=Lr(e,a));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&wh(e,o,r,a),Xt=!1,h=e.memoizedState,o.state=h,Lo(e,r,o,i);var _=e.memoizedState;l!==c||h!==_||We.current||Xt?(typeof g=="function"&&(cu(e,n,g,r),_=e.memoizedState),(u=Xt||yh(e,n,u,r,h,_,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return pu(t,e,n,r,s,i)}function pu(t,e,n,r,i,s){Lm(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ph(e,n,!1),zt(t,e,s);r=e.stateNode,j0.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Fr(e,t.child,null,s),e.child=Fr(e,null,l,s)):xe(t,e,l,s),e.memoizedState=r.state,i&&ph(e,n,!0),e.child}function bm(t){var e=t.stateNode;e.pendingContext?fh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&fh(t,e.context,!1),Ec(t,e.containerInfo)}function Ph(t,e,n,r,i){return br(),mc(i),e.flags|=256,xe(t,e,n,r),e.child}var mu={dehydrated:null,treeContext:null,retryLane:0};function gu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Fm(t,e,n){var r=e.pendingProps,i=te.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),K(te,i&1),t===null)return au(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Cl(o,r,0,null),t=Wn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=gu(n),e.memoizedState=mu,t):xc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return B0(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=fn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=fn(l,s):(s=Wn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?gu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=mu,r}return s=t.child,t=s.sibling,r=fn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function xc(t,e){return e=Cl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Qs(t,e,n,r){return r!==null&&mc(r),Fr(e,t.child,null,n),t=xc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function B0(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ha(Error(w(422))),Qs(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Cl({mode:"visible",children:r.children},i,0,null),s=Wn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Fr(e,t.child,null,o),e.child.memoizedState=gu(o),e.memoizedState=mu,s);if(!(e.mode&1))return Qs(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(w(419)),r=ha(s,r,void 0),Qs(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ue||l){if(r=ve,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ut(t,i),ht(r,t,i,-1))}return Lc(),r=ha(Error(w(421))),Qs(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=tw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ke=un(i.nextSibling),Qe=e,J=!0,lt=null,t!==null&&(Je[Ze++]=xt,Je[Ze++]=Pt,Je[Ze++]=Hn,xt=t.id,Pt=t.overflow,Hn=e),e=xc(e,r.children),e.flags|=4096,e)}function Oh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),uu(t.return,e,n)}function fa(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Um(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(xe(t,e,r.children,n),r=te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Oh(t,n,e);else if(t.tag===19)Oh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(K(te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&bo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),fa(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&bo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}fa(e,!0,n,null,s);break;case"together":fa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ho(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=fn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function V0(t,e,n){switch(e.tag){case 3:bm(e),br();break;case 5:dm(e);break;case 1:je(e.type)&&Po(e);break;case 4:Ec(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;K(Do,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(K(te,te.current&1),e.flags|=128,null):n&e.child.childLanes?Fm(t,e,n):(K(te,te.current&1),t=zt(t,e,n),t!==null?t.sibling:null);K(te,te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Um(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(te,te.current),r)break;return null;case 22:case 23:return e.lanes=0,Mm(t,e,n)}return zt(t,e,n)}var zm,_u,Wm,jm;zm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_u=function(){};Wm=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,bn(yt.current);var s=null;switch(n){case"input":i=za(t,i),r=za(t,r),s=[];break;case"select":i=re({},i,{value:void 0}),r=re({},r,{value:void 0}),s=[];break;case"textarea":i=Ba(t,i),r=Ba(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ro)}Ha(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&q("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};jm=function(t,e,n,r){n!==r&&(e.flags|=4)};function fi(t,e){if(!J)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ie(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function H0(t,e,n){var r=e.pendingProps;switch(pc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(e),null;case 1:return je(e.type)&&xo(),Ie(e),null;case 3:return r=e.stateNode,Ur(),X(We),X(Ne),Cc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Gs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,lt!==null&&(ku(lt),lt=null))),_u(t,e),Ie(e),null;case 5:Sc(e);var i=bn(Xi.current);if(n=e.type,t!==null&&e.stateNode!=null)Wm(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return Ie(e),null}if(t=bn(yt.current),Gs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[_t]=e,r[qi]=s,t=(e.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(i=0;i<Si.length;i++)q(Si[i],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":Wd(r,s),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},q("invalid",r);break;case"textarea":Bd(r,s),q("invalid",r)}Ha(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&$s(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&$s(r.textContent,l,t),i=["children",""+l]):zi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&q("scroll",r)}switch(n){case"input":Fs(r),jd(r,s,!0);break;case"textarea":Fs(r),Vd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ro)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=pp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[_t]=e,t[qi]=r,zm(t,e,!1,!1),e.stateNode=t;e:{switch(o=$a(n,r),n){case"dialog":q("cancel",t),q("close",t),i=r;break;case"iframe":case"object":case"embed":q("load",t),i=r;break;case"video":case"audio":for(i=0;i<Si.length;i++)q(Si[i],t);i=r;break;case"source":q("error",t),i=r;break;case"img":case"image":case"link":q("error",t),q("load",t),i=r;break;case"details":q("toggle",t),i=r;break;case"input":Wd(t,r),i=za(t,r),q("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=re({},r,{value:void 0}),q("invalid",t);break;case"textarea":Bd(t,r),i=Ba(t,r),q("invalid",t);break;default:i=r}Ha(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?_p(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&mp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Wi(t,a):typeof a=="number"&&Wi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(zi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&q("scroll",t):a!=null&&Zu(t,s,a,o))}switch(n){case"input":Fs(t),jd(t,r,!1);break;case"textarea":Fs(t),Vd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+yn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Cr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Cr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ro)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ie(e),null;case 6:if(t&&e.stateNode!=null)jm(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=bn(Xi.current),bn(yt.current),Gs(e)){if(r=e.stateNode,n=e.memoizedProps,r[_t]=e,(s=r.nodeValue!==n)&&(t=Qe,t!==null))switch(t.tag){case 3:$s(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$s(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_t]=e,e.stateNode=r}return Ie(e),null;case 13:if(X(te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(J&&Ke!==null&&e.mode&1&&!(e.flags&128))im(),br(),e.flags|=98560,s=!1;else if(s=Gs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(w(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[_t]=e}else br(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ie(e),s=!1}else lt!==null&&(ku(lt),lt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||te.current&1?he===0&&(he=3):Lc())),e.updateQueue!==null&&(e.flags|=4),Ie(e),null);case 4:return Ur(),_u(t,e),t===null&&Ki(e.stateNode.containerInfo),Ie(e),null;case 10:return vc(e.type._context),Ie(e),null;case 17:return je(e.type)&&xo(),Ie(e),null;case 19:if(X(te),s=e.memoizedState,s===null)return Ie(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)fi(s,!1);else{if(he!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=bo(t),o!==null){for(e.flags|=128,fi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return K(te,te.current&1|2),e.child}t=t.sibling}s.tail!==null&&oe()>Wr&&(e.flags|=128,r=!0,fi(s,!1),e.lanes=4194304)}else{if(!r)if(t=bo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),fi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!J)return Ie(e),null}else 2*oe()-s.renderingStartTime>Wr&&n!==1073741824&&(e.flags|=128,r=!0,fi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=oe(),e.sibling=null,n=te.current,K(te,r?n&1|2:n&1),e):(Ie(e),null);case 22:case 23:return Mc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ge&1073741824&&(Ie(e),e.subtreeFlags&6&&(e.flags|=8192)):Ie(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function $0(t,e){switch(pc(e),e.tag){case 1:return je(e.type)&&xo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ur(),X(We),X(Ne),Cc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Sc(e),null;case 13:if(X(te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));br()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return X(te),null;case 4:return Ur(),null;case 10:return vc(e.type._context),null;case 22:case 23:return Mc(),null;case 24:return null;default:return null}}var qs=!1,ke=!1,G0=typeof WeakSet=="function"?WeakSet:Set,N=null;function _r(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(t,e,r)}else n.current=null}function vu(t,e,n){try{n()}catch(r){ie(t,e,r)}}var Ah=!1;function K0(t,e){if(tu=ko,t=$p(),hc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)h=c,c=g;for(;;){if(c===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(a=o),(g=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(nu={focusedElem:t,selectionRange:n},ko=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,x=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:st(e.type,v),x);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){ie(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return _=Ah,Ah=!1,_}function Pi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&vu(e,n,s)}i=i.next}while(i!==r)}}function El(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function yu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Bm(t){var e=t.alternate;e!==null&&(t.alternate=null,Bm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_t],delete e[qi],delete e[su],delete e[x0],delete e[P0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Vm(t){return t.tag===5||t.tag===3||t.tag===4}function Dh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ro));else if(r!==4&&(t=t.child,t!==null))for(wu(t,e,n),t=t.sibling;t!==null;)wu(t,e,n),t=t.sibling}function Eu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Eu(t,e,n),t=t.sibling;t!==null;)Eu(t,e,n),t=t.sibling}var ye=null,ot=!1;function Qt(t,e,n){for(n=n.child;n!==null;)Hm(t,e,n),n=n.sibling}function Hm(t,e,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(fl,n)}catch{}switch(n.tag){case 5:ke||_r(n,e);case 6:var r=ye,i=ot;ye=null,Qt(t,e,n),ye=r,ot=i,ye!==null&&(ot?(t=ye,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(ot?(t=ye,n=n.stateNode,t.nodeType===8?oa(t.parentNode,n):t.nodeType===1&&oa(t,n),Hi(t)):oa(ye,n.stateNode));break;case 4:r=ye,i=ot,ye=n.stateNode.containerInfo,ot=!0,Qt(t,e,n),ye=r,ot=i;break;case 0:case 11:case 14:case 15:if(!ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&vu(n,e,o),i=i.next}while(i!==r)}Qt(t,e,n);break;case 1:if(!ke&&(_r(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ie(n,e,l)}Qt(t,e,n);break;case 21:Qt(t,e,n);break;case 22:n.mode&1?(ke=(r=ke)||n.memoizedState!==null,Qt(t,e,n),ke=r):Qt(t,e,n);break;default:Qt(t,e,n)}}function Mh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new G0),e.forEach(function(r){var i=nw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function it(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ye=l.stateNode,ot=!1;break e;case 3:ye=l.stateNode.containerInfo,ot=!0;break e;case 4:ye=l.stateNode.containerInfo,ot=!0;break e}l=l.return}if(ye===null)throw Error(w(160));Hm(s,o,i),ye=null,ot=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ie(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$m(e,t),e=e.sibling}function $m(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(it(e,t),mt(t),r&4){try{Pi(3,t,t.return),El(3,t)}catch(v){ie(t,t.return,v)}try{Pi(5,t,t.return)}catch(v){ie(t,t.return,v)}}break;case 1:it(e,t),mt(t),r&512&&n!==null&&_r(n,n.return);break;case 5:if(it(e,t),mt(t),r&512&&n!==null&&_r(n,n.return),t.flags&32){var i=t.stateNode;try{Wi(i,"")}catch(v){ie(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&hp(i,s),$a(l,o);var u=$a(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?_p(i,c):d==="dangerouslySetInnerHTML"?mp(i,c):d==="children"?Wi(i,c):Zu(i,d,c,u)}switch(l){case"input":Wa(i,s);break;case"textarea":fp(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Cr(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Cr(i,!!s.multiple,s.defaultValue,!0):Cr(i,!!s.multiple,s.multiple?[]:"",!1))}i[qi]=s}catch(v){ie(t,t.return,v)}}break;case 6:if(it(e,t),mt(t),r&4){if(t.stateNode===null)throw Error(w(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ie(t,t.return,v)}}break;case 3:if(it(e,t),mt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hi(e.containerInfo)}catch(v){ie(t,t.return,v)}break;case 4:it(e,t),mt(t);break;case 13:it(e,t),mt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ac=oe())),r&4&&Mh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(ke=(u=ke)||d,it(e,t),ke=u):it(e,t),mt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(N=t,d=t.child;d!==null;){for(c=N=d;N!==null;){switch(h=N,g=h.child,h.tag){case 0:case 11:case 14:case 15:Pi(4,h,h.return);break;case 1:_r(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){ie(r,n,v)}}break;case 5:_r(h,h.return);break;case 22:if(h.memoizedState!==null){bh(c);continue}}g!==null?(g.return=h,N=g):bh(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=gp("display",o))}catch(v){ie(t,t.return,v)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){ie(t,t.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:it(e,t),mt(t),r&4&&Mh(t);break;case 21:break;default:it(e,t),mt(t)}}function mt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Vm(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wi(i,""),r.flags&=-33);var s=Dh(t);Eu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Dh(t);wu(t,l,o);break;default:throw Error(w(161))}}catch(a){ie(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Q0(t,e,n){N=t,Gm(t)}function Gm(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||qs;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||ke;l=qs;var u=ke;if(qs=o,(ke=a)&&!u)for(N=i;N!==null;)o=N,a=o.child,o.tag===22&&o.memoizedState!==null?Fh(i):a!==null?(a.return=o,N=a):Fh(i);for(;s!==null;)N=s,Gm(s),s=s.sibling;N=i,qs=l,ke=u}Lh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):Lh(t)}}function Lh(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ke||El(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ke)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:st(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Hi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}ke||e.flags&512&&yu(e)}catch(h){ie(e,e.return,h)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function bh(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function Fh(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{El(4,e)}catch(a){ie(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ie(e,i,a)}}var s=e.return;try{yu(e)}catch(a){ie(e,s,a)}break;case 5:var o=e.return;try{yu(e)}catch(a){ie(e,o,a)}}}catch(a){ie(e,e.return,a)}if(e===t){N=null;break}var l=e.sibling;if(l!==null){l.return=e.return,N=l;break}N=e.return}}var q0=Math.ceil,zo=Bt.ReactCurrentDispatcher,Pc=Bt.ReactCurrentOwner,tt=Bt.ReactCurrentBatchConfig,W=0,ve=null,ae=null,we=0,Ge=0,vr=Tn(0),he=0,ts=null,Gn=0,Sl=0,Oc=0,Oi=null,Fe=null,Ac=0,Wr=1/0,kt=null,Wo=!1,Su=null,dn=null,Ys=!1,sn=null,jo=0,Ai=0,Cu=null,fo=-1,po=0;function Ae(){return W&6?oe():fo!==-1?fo:fo=oe()}function hn(t){return t.mode&1?W&2&&we!==0?we&-we:A0.transition!==null?(po===0&&(po=xp()),po):(t=V,t!==0||(t=window.event,t=t===void 0?16:bp(t.type)),t):1}function ht(t,e,n,r){if(50<Ai)throw Ai=0,Cu=null,Error(w(185));fs(t,n,r),(!(W&2)||t!==ve)&&(t===ve&&(!(W&2)&&(Sl|=n),he===4&&Zt(t,we)),Be(t,r),n===1&&W===0&&!(e.mode&1)&&(Wr=oe()+500,vl&&Nn()))}function Be(t,e){var n=t.callbackNode;Ay(t,e);var r=Io(t,t===ve?we:0);if(r===0)n!==null&&Gd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Gd(n),e===1)t.tag===0?O0(Uh.bind(null,t)):tm(Uh.bind(null,t)),N0(function(){!(W&6)&&Nn()}),n=null;else{switch(Pp(r)){case 1:n=ic;break;case 4:n=Np;break;case 16:n=Co;break;case 536870912:n=Rp;break;default:n=Co}n=eg(n,Km.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Km(t,e){if(fo=-1,po=0,W&6)throw Error(w(327));var n=t.callbackNode;if(Rr()&&t.callbackNode!==n)return null;var r=Io(t,t===ve?we:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Bo(t,r);else{e=r;var i=W;W|=2;var s=qm();(ve!==t||we!==e)&&(kt=null,Wr=oe()+500,zn(t,e));do try{J0();break}catch(l){Qm(t,l)}while(1);_c(),zo.current=s,W=i,ae!==null?e=0:(ve=null,we=0,e=he)}if(e!==0){if(e===2&&(i=Ya(t),i!==0&&(r=i,e=Iu(t,i))),e===1)throw n=ts,zn(t,0),Zt(t,r),Be(t,oe()),n;if(e===6)Zt(t,r);else{if(i=t.current.alternate,!(r&30)&&!Y0(i)&&(e=Bo(t,r),e===2&&(s=Ya(t),s!==0&&(r=s,e=Iu(t,s))),e===1))throw n=ts,zn(t,0),Zt(t,r),Be(t,oe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:On(t,Fe,kt);break;case 3:if(Zt(t,r),(r&130023424)===r&&(e=Ac+500-oe(),10<e)){if(Io(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ae(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=iu(On.bind(null,t,Fe,kt),e);break}On(t,Fe,kt);break;case 4:if(Zt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-dt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*q0(r/1960))-r,10<r){t.timeoutHandle=iu(On.bind(null,t,Fe,kt),r);break}On(t,Fe,kt);break;case 5:On(t,Fe,kt);break;default:throw Error(w(329))}}}return Be(t,oe()),t.callbackNode===n?Km.bind(null,t):null}function Iu(t,e){var n=Oi;return t.current.memoizedState.isDehydrated&&(zn(t,e).flags|=256),t=Bo(t,e),t!==2&&(e=Fe,Fe=n,e!==null&&ku(e)),t}function ku(t){Fe===null?Fe=t:Fe.push.apply(Fe,t)}function Y0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!pt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zt(t,e){for(e&=~Oc,e&=~Sl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-dt(e),r=1<<n;t[n]=-1,e&=~r}}function Uh(t){if(W&6)throw Error(w(327));Rr();var e=Io(t,0);if(!(e&1))return Be(t,oe()),null;var n=Bo(t,e);if(t.tag!==0&&n===2){var r=Ya(t);r!==0&&(e=r,n=Iu(t,r))}if(n===1)throw n=ts,zn(t,0),Zt(t,e),Be(t,oe()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,On(t,Fe,kt),Be(t,oe()),null}function Dc(t,e){var n=W;W|=1;try{return t(e)}finally{W=n,W===0&&(Wr=oe()+500,vl&&Nn())}}function Kn(t){sn!==null&&sn.tag===0&&!(W&6)&&Rr();var e=W;W|=1;var n=tt.transition,r=V;try{if(tt.transition=null,V=1,t)return t()}finally{V=r,tt.transition=n,W=e,!(W&6)&&Nn()}}function Mc(){Ge=vr.current,X(vr)}function zn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,T0(n)),ae!==null)for(n=ae.return;n!==null;){var r=n;switch(pc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xo();break;case 3:Ur(),X(We),X(Ne),Cc();break;case 5:Sc(r);break;case 4:Ur();break;case 13:X(te);break;case 19:X(te);break;case 10:vc(r.type._context);break;case 22:case 23:Mc()}n=n.return}if(ve=t,ae=t=fn(t.current,null),we=Ge=e,he=0,ts=null,Oc=Sl=Gn=0,Fe=Oi=null,Ln!==null){for(e=0;e<Ln.length;e++)if(n=Ln[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ln=null}return t}function Qm(t,e){do{var n=ae;try{if(_c(),uo.current=Uo,Fo){for(var r=ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Fo=!1}if($n=0,me=ue=ne=null,xi=!1,Ji=0,Pc.current=null,n===null||n.return===null){he=1,ts=e,ae=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=we,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=kh(o);if(g!==null){g.flags&=-257,Th(g,o,l,s,e),g.mode&1&&Ih(s,u,e),e=g,a=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(a),e.updateQueue=v}else _.add(a);break e}else{if(!(e&1)){Ih(s,u,e),Lc();break e}a=Error(w(426))}}else if(J&&l.mode&1){var x=kh(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Th(x,o,l,s,e),mc(zr(a,l));break e}}s=a=zr(a,l),he!==4&&(he=2),Oi===null?Oi=[s]:Oi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Om(s,a,e);_h(s,p);break e;case 1:l=a;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(dn===null||!dn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Am(s,l,e);_h(s,y);break e}}s=s.return}while(s!==null)}Xm(n)}catch(S){e=S,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(1)}function qm(){var t=zo.current;return zo.current=Uo,t===null?Uo:t}function Lc(){(he===0||he===3||he===2)&&(he=4),ve===null||!(Gn&268435455)&&!(Sl&268435455)||Zt(ve,we)}function Bo(t,e){var n=W;W|=2;var r=qm();(ve!==t||we!==e)&&(kt=null,zn(t,e));do try{X0();break}catch(i){Qm(t,i)}while(1);if(_c(),W=n,zo.current=r,ae!==null)throw Error(w(261));return ve=null,we=0,he}function X0(){for(;ae!==null;)Ym(ae)}function J0(){for(;ae!==null&&!Cy();)Ym(ae)}function Ym(t){var e=Zm(t.alternate,t,Ge);t.memoizedProps=t.pendingProps,e===null?Xm(t):ae=e,Pc.current=null}function Xm(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$0(n,e),n!==null){n.flags&=32767,ae=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{he=6,ae=null;return}}else if(n=H0(n,e,Ge),n!==null){ae=n;return}if(e=e.sibling,e!==null){ae=e;return}ae=e=t}while(e!==null);he===0&&(he=5)}function On(t,e,n){var r=V,i=tt.transition;try{tt.transition=null,V=1,Z0(t,e,n,r)}finally{tt.transition=i,V=r}return null}function Z0(t,e,n,r){do Rr();while(sn!==null);if(W&6)throw Error(w(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Dy(t,s),t===ve&&(ae=ve=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ys||(Ys=!0,eg(Co,function(){return Rr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=tt.transition,tt.transition=null;var o=V;V=1;var l=W;W|=4,Pc.current=null,K0(t,n),$m(n,t),y0(nu),ko=!!tu,nu=tu=null,t.current=n,Q0(n),Iy(),W=l,V=o,tt.transition=s}else t.current=n;if(Ys&&(Ys=!1,sn=t,jo=i),s=t.pendingLanes,s===0&&(dn=null),Ny(n.stateNode),Be(t,oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wo)throw Wo=!1,t=Su,Su=null,t;return jo&1&&t.tag!==0&&Rr(),s=t.pendingLanes,s&1?t===Cu?Ai++:(Ai=0,Cu=t):Ai=0,Nn(),null}function Rr(){if(sn!==null){var t=Pp(jo),e=tt.transition,n=V;try{if(tt.transition=null,V=16>t?16:t,sn===null)var r=!1;else{if(t=sn,sn=null,jo=0,W&6)throw Error(w(331));var i=W;for(W|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(N=u;N!==null;){var d=N;switch(d.tag){case 0:case 11:case 15:Pi(8,d,s)}var c=d.child;if(c!==null)c.return=d,N=c;else for(;N!==null;){d=N;var h=d.sibling,g=d.return;if(Bm(d),d===u){N=null;break}if(h!==null){h.return=g,N=h;break}N=g}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Pi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,N=p;break e}N=s.return}}var f=t.current;for(N=f;N!==null;){o=N;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,N=m;else e:for(o=f;N!==null;){if(l=N,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:El(9,l)}}catch(S){ie(l,l.return,S)}if(l===o){N=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,N=y;break e}N=l.return}}if(W=i,Nn(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(fl,t)}catch{}r=!0}return r}finally{V=n,tt.transition=e}}return!1}function zh(t,e,n){e=zr(n,e),e=Om(t,e,1),t=cn(t,e,1),e=Ae(),t!==null&&(fs(t,1,e),Be(t,e))}function ie(t,e,n){if(t.tag===3)zh(t,t,n);else for(;e!==null;){if(e.tag===3){zh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dn===null||!dn.has(r))){t=zr(n,t),t=Am(e,t,1),e=cn(e,t,1),t=Ae(),e!==null&&(fs(e,1,t),Be(e,t));break}}e=e.return}}function ew(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ae(),t.pingedLanes|=t.suspendedLanes&n,ve===t&&(we&n)===n&&(he===4||he===3&&(we&130023424)===we&&500>oe()-Ac?zn(t,0):Oc|=n),Be(t,e)}function Jm(t,e){e===0&&(t.mode&1?(e=Ws,Ws<<=1,!(Ws&130023424)&&(Ws=4194304)):e=1);var n=Ae();t=Ut(t,e),t!==null&&(fs(t,e,n),Be(t,n))}function tw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Jm(t,n)}function nw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),Jm(t,n)}var Zm;Zm=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||We.current)Ue=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ue=!1,V0(t,e,n);Ue=!!(t.flags&131072)}else Ue=!1,J&&e.flags&1048576&&nm(e,Ao,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ho(t,e),t=e.pendingProps;var i=Lr(e,Ne.current);Nr(e,n),i=kc(null,e,r,t,i,n);var s=Tc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,je(r)?(s=!0,Po(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wc(e),i.updater=yl,e.stateNode=i,i._reactInternals=e,du(e,r,t,n),e=pu(null,e,r,!0,s,n)):(e.tag=0,J&&s&&fc(e),xe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ho(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=iw(r),t=st(r,t),i){case 0:e=fu(null,e,r,t,n);break e;case 1:e=xh(null,e,r,t,n);break e;case 11:e=Nh(null,e,r,t,n);break e;case 14:e=Rh(null,e,r,st(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),fu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),xh(t,e,r,i,n);case 3:e:{if(bm(e),t===null)throw Error(w(387));r=e.pendingProps,s=e.memoizedState,i=s.element,om(t,e),Lo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=zr(Error(w(423)),e),e=Ph(t,e,r,n,i);break e}else if(r!==i){i=zr(Error(w(424)),e),e=Ph(t,e,r,n,i);break e}else for(Ke=un(e.stateNode.containerInfo.firstChild),Qe=e,J=!0,lt=null,n=cm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(br(),r===i){e=zt(t,e,n);break e}xe(t,e,r,n)}e=e.child}return e;case 5:return dm(e),t===null&&au(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ru(r,i)?o=null:s!==null&&ru(r,s)&&(e.flags|=32),Lm(t,e),xe(t,e,o,n),e.child;case 6:return t===null&&au(e),null;case 13:return Fm(t,e,n);case 4:return Ec(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Fr(e,null,r,n):xe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),Nh(t,e,r,i,n);case 7:return xe(t,e,e.pendingProps,n),e.child;case 8:return xe(t,e,e.pendingProps.children,n),e.child;case 12:return xe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,K(Do,r._currentValue),r._currentValue=o,s!==null)if(pt(s.value,o)){if(s.children===i.children&&!We.current){e=zt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Mt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),uu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),uu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}xe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Nr(e,n),i=nt(i),r=r(i),e.flags|=1,xe(t,e,r,n),e.child;case 14:return r=e.type,i=st(r,e.pendingProps),i=st(r.type,i),Rh(t,e,r,i,n);case 15:return Dm(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),ho(t,e),e.tag=1,je(r)?(t=!0,Po(e)):t=!1,Nr(e,n),am(e,r,i),du(e,r,i,n),pu(null,e,r,!0,t,n);case 19:return Um(t,e,n);case 22:return Mm(t,e,n)}throw Error(w(156,e.tag))};function eg(t,e){return Tp(t,e)}function rw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(t,e,n,r){return new rw(t,e,n,r)}function bc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function iw(t){if(typeof t=="function")return bc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===tc)return 11;if(t===nc)return 14}return 2}function fn(t,e){var n=t.alternate;return n===null?(n=et(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function mo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")bc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ar:return Wn(n.children,i,s,e);case ec:o=8,i|=8;break;case La:return t=et(12,n,e,i|2),t.elementType=La,t.lanes=s,t;case ba:return t=et(13,n,e,i),t.elementType=ba,t.lanes=s,t;case Fa:return t=et(19,n,e,i),t.elementType=Fa,t.lanes=s,t;case up:return Cl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case lp:o=10;break e;case ap:o=9;break e;case tc:o=11;break e;case nc:o=14;break e;case Yt:o=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=et(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Wn(t,e,n,r){return t=et(7,t,r,e),t.lanes=n,t}function Cl(t,e,n,r){return t=et(22,t,r,e),t.elementType=up,t.lanes=n,t.stateNode={isHidden:!1},t}function pa(t,e,n){return t=et(6,t,null,e),t.lanes=n,t}function ma(t,e,n){return e=et(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function sw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ql(0),this.expirationTimes=ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ql(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fc(t,e,n,r,i,s,o,l,a){return t=new sw(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=et(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wc(s),t}function ow(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:lr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function tg(t){if(!t)return wn;t=t._reactInternals;e:{if(tr(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(je(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(je(n))return em(t,n,e)}return e}function ng(t,e,n,r,i,s,o,l,a){return t=Fc(n,r,!0,t,i,s,o,l,a),t.context=tg(null),n=t.current,r=Ae(),i=hn(n),s=Mt(r,i),s.callback=e??null,cn(n,s,i),t.current.lanes=i,fs(t,i,r),Be(t,r),t}function Il(t,e,n,r){var i=e.current,s=Ae(),o=hn(i);return n=tg(n),e.context===null?e.context=n:e.pendingContext=n,e=Mt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=cn(i,e,o),t!==null&&(ht(t,i,o,s),ao(t,i,o)),o}function Vo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Uc(t,e){Wh(t,e),(t=t.alternate)&&Wh(t,e)}function lw(){return null}var rg=typeof reportError=="function"?reportError:function(t){console.error(t)};function zc(t){this._internalRoot=t}kl.prototype.render=zc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));Il(t,e,null,null)};kl.prototype.unmount=zc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kn(function(){Il(null,t,null,null)}),e[Ft]=null}};function kl(t){this._internalRoot=t}kl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Dp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Jt.length&&e!==0&&e<Jt[n].priority;n++);Jt.splice(n,0,t),n===0&&Lp(t)}};function Wc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jh(){}function aw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Vo(o);s.call(u)}}var o=ng(e,r,t,0,null,!1,!1,"",jh);return t._reactRootContainer=o,t[Ft]=o.current,Ki(t.nodeType===8?t.parentNode:t),Kn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Vo(a);l.call(u)}}var a=Fc(t,0,!1,null,null,!1,!1,"",jh);return t._reactRootContainer=a,t[Ft]=a.current,Ki(t.nodeType===8?t.parentNode:t),Kn(function(){Il(e,a,n,r)}),a}function Nl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Vo(o);l.call(a)}}Il(e,o,t,i)}else o=aw(n,e,t,i,r);return Vo(o)}Op=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ei(e.pendingLanes);n!==0&&(sc(e,n|1),Be(e,oe()),!(W&6)&&(Wr=oe()+500,Nn()))}break;case 13:Kn(function(){var r=Ut(t,1);if(r!==null){var i=Ae();ht(r,t,1,i)}}),Uc(t,1)}};oc=function(t){if(t.tag===13){var e=Ut(t,134217728);if(e!==null){var n=Ae();ht(e,t,134217728,n)}Uc(t,134217728)}};Ap=function(t){if(t.tag===13){var e=hn(t),n=Ut(t,e);if(n!==null){var r=Ae();ht(n,t,e,r)}Uc(t,e)}};Dp=function(){return V};Mp=function(t,e){var n=V;try{return V=t,e()}finally{V=n}};Ka=function(t,e,n){switch(e){case"input":if(Wa(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=_l(r);if(!i)throw Error(w(90));dp(r),Wa(r,i)}}}break;case"textarea":fp(t,n);break;case"select":e=n.value,e!=null&&Cr(t,!!n.multiple,e,!1)}};wp=Dc;Ep=Kn;var uw={usingClientEntryPoint:!1,Events:[ms,hr,_l,vp,yp,Dc]},pi={findFiberByHostInstance:Mn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},cw={bundleType:pi.bundleType,version:pi.version,rendererPackageName:pi.rendererPackageName,rendererConfig:pi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ip(t),t===null?null:t.stateNode},findFiberByHostInstance:pi.findFiberByHostInstance||lw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xs.isDisabled&&Xs.supportsFiber)try{fl=Xs.inject(cw),vt=Xs}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uw;Ye.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wc(e))throw Error(w(200));return ow(t,e,null,n)};Ye.createRoot=function(t,e){if(!Wc(t))throw Error(w(299));var n=!1,r="",i=rg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Fc(t,1,!1,null,null,n,!1,r,i),t[Ft]=e.current,Ki(t.nodeType===8?t.parentNode:t),new zc(e)};Ye.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=Ip(e),t=t===null?null:t.stateNode,t};Ye.flushSync=function(t){return Kn(t)};Ye.hydrate=function(t,e,n){if(!Tl(e))throw Error(w(200));return Nl(null,t,e,!0,n)};Ye.hydrateRoot=function(t,e,n){if(!Wc(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=rg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ng(e,null,t,1,n??null,i,!1,s,o),t[Ft]=e.current,Ki(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new kl(e)};Ye.render=function(t,e,n){if(!Tl(e))throw Error(w(200));return Nl(null,t,e,!1,n)};Ye.unmountComponentAtNode=function(t){if(!Tl(t))throw Error(w(40));return t._reactRootContainer?(Kn(function(){Nl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ft]=null})}),!0):!1};Ye.unstable_batchedUpdates=Dc;Ye.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Tl(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return Nl(t,e,n,!1,r)};Ye.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Ye})(ly);var Bh=Aa;Oa.createRoot=Bh.createRoot,Oa.hydrateRoot=Bh.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=function(t,e){if(!t)throw Jr(e)},Jr=function(t){return new Error("Firebase Database ("+ig.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},dw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},jc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(h=64)),r.push(n[d],n[c],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new hw;const h=s<<2|l>>4;if(r.push(h),u!==64){const g=l<<4&240|u>>2;if(r.push(g),c!==64){const _=u<<6&192|c;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const og=function(t){const e=sg(t);return jc.encodeByteArray(e,!0)},Ho=function(t){return og(t).replace(/\./g,"")},$o=function(t){try{return jc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(t){return lg(void 0,t)}function lg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!pw(n)||(t[n]=lg(t[n],e[n]));return t}function pw(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=()=>mw().__FIREBASE_DEFAULTS__,_w=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$o(t[1]);return e&&JSON.parse(e)},Bc=()=>{try{return gw()||_w()||vw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ag=t=>{var e,n;return(n=(e=Bc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},yw=t=>{const e=ag(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ww=()=>{var t;return(t=Bc())===null||t===void 0?void 0:t.config},ug=t=>{var e;return(e=Bc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Ho(JSON.stringify(n)),Ho(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function Sw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cw(){const t=Re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dg(){return ig.NODE_ADMIN===!0}function Iw(){try{return typeof indexedDB=="object"}catch{return!1}}function kw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw="FirebaseError";class Rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Tw,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_s.prototype.create)}}class _s{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Nw(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Rn(i,l,r)}}function Nw(t,e){return t.replace(Rw,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Rw=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(t){return JSON.parse(t)}function ce(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ns($o(s[0])||""),n=ns($o(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},xw=function(t){const e=hg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Pw=function(t){const e=hg(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function jr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Tu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Go(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ko(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Vh(s)&&Vh(o)){if(!Ko(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Vh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Aw(t,e){const n=new Dw(t,e);return n.subscribe.bind(n)}class Dw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Mw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ga),i.error===void 0&&(i.error=ga),i.complete===void 0&&(i.complete=ga);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Mw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ga(){}function Hc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,E(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},xl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(t){return t&&t._delegate?t._delegate:t}class Qn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Rl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Uw(e))try{this.getOrInitializeService({instanceIdentifier:An})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=An){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=An){return this.instances.has(e)}getOptions(e=An){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Fw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=An){return this.component?this.component.multipleInstances?e:An:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fw(t){return t===An?void 0:t}function Uw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(H||(H={}));const Ww={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},jw=H.INFO,Bw={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},Vw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Bw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $c{constructor(e){this.name=e,this._logLevel=jw,this._logHandler=Vw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ww[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const Hw=(t,e)=>e.some(n=>t instanceof n);let Hh,$h;function $w(){return Hh||(Hh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gw(){return $h||($h=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fg=new WeakMap,Nu=new WeakMap,pg=new WeakMap,_a=new WeakMap,Gc=new WeakMap;function Kw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(pn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fg.set(n,t)}).catch(()=>{}),Gc.set(e,t),e}function Qw(t){if(Nu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Nu.set(t,e)}let Ru={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qw(t){Ru=t(Ru)}function Yw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(va(this),e,...n);return pg.set(r,e.sort?e.sort():[e]),pn(r)}:Gw().includes(t)?function(...e){return t.apply(va(this),e),pn(fg.get(this))}:function(...e){return pn(t.apply(va(this),e))}}function Xw(t){return typeof t=="function"?Yw(t):(t instanceof IDBTransaction&&Qw(t),Hw(t,$w())?new Proxy(t,Ru):t)}function pn(t){if(t instanceof IDBRequest)return Kw(t);if(_a.has(t))return _a.get(t);const e=Xw(t);return e!==t&&(_a.set(t,e),Gc.set(e,t)),e}const va=t=>Gc.get(t);function Jw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=pn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(pn(o.result),a.oldVersion,a.newVersion,pn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const Zw=["get","getKey","getAll","getAllKeys","count"],eE=["put","add","delete","clear"],ya=new Map;function Gh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ya.get(e))return ya.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=eE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Zw.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return ya.set(e,s),s}qw(t=>({...t,get:(e,n,r)=>Gh(e,n)||t.get(e,n,r),has:(e,n)=>!!Gh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xu="@firebase/app",Kh="0.9.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=new $c("@firebase/app"),rE="@firebase/app-compat",iE="@firebase/analytics-compat",sE="@firebase/analytics",oE="@firebase/app-check-compat",lE="@firebase/app-check",aE="@firebase/auth",uE="@firebase/auth-compat",cE="@firebase/database",dE="@firebase/database-compat",hE="@firebase/functions",fE="@firebase/functions-compat",pE="@firebase/installations",mE="@firebase/installations-compat",gE="@firebase/messaging",_E="@firebase/messaging-compat",vE="@firebase/performance",yE="@firebase/performance-compat",wE="@firebase/remote-config",EE="@firebase/remote-config-compat",SE="@firebase/storage",CE="@firebase/storage-compat",IE="@firebase/firestore",kE="@firebase/firestore-compat",TE="firebase",NE="9.19.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu="[DEFAULT]",RE={[xu]:"fire-core",[rE]:"fire-core-compat",[sE]:"fire-analytics",[iE]:"fire-analytics-compat",[lE]:"fire-app-check",[oE]:"fire-app-check-compat",[aE]:"fire-auth",[uE]:"fire-auth-compat",[cE]:"fire-rtdb",[dE]:"fire-rtdb-compat",[hE]:"fire-fn",[fE]:"fire-fn-compat",[pE]:"fire-iid",[mE]:"fire-iid-compat",[gE]:"fire-fcm",[_E]:"fire-fcm-compat",[vE]:"fire-perf",[yE]:"fire-perf-compat",[wE]:"fire-rc",[EE]:"fire-rc-compat",[SE]:"fire-gcs",[CE]:"fire-gcs-compat",[IE]:"fire-fst",[kE]:"fire-fst-compat","fire-js":"fire-js",[TE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=new Map,Ou=new Map;function xE(t,e){try{t.container.addComponent(e)}catch(n){qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Br(t){const e=t.name;if(Ou.has(e))return qn.debug(`There were multiple attempts to register component ${e}.`),!1;Ou.set(e,t);for(const n of Qo.values())xE(n,t);return!0}function Kc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mn=new _s("app","Firebase",PE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=NE;function mg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Pu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mn.create("bad-app-name",{appName:String(i)});if(n||(n=ww()),!n)throw mn.create("no-options");const s=Qo.get(i);if(s){if(Ko(n,s.options)&&Ko(r,s.config))return s;throw mn.create("duplicate-app",{appName:i})}const o=new zw(i);for(const a of Ou.values())o.addComponent(a);const l=new OE(n,r,o);return Qo.set(i,l),l}function gg(t=Pu){const e=Qo.get(t);if(!e&&t===Pu)return mg();if(!e)throw mn.create("no-app",{appName:t});return e}function gn(t,e,n){var r;let i=(r=RE[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qn.warn(l.join(" "));return}Br(new Qn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE="firebase-heartbeat-database",DE=1,rs="firebase-heartbeat-store";let wa=null;function _g(){return wa||(wa=Jw(AE,DE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(rs)}}}).catch(t=>{throw mn.create("idb-open",{originalErrorMessage:t.message})})),wa}async function ME(t){try{return(await _g()).transaction(rs).objectStore(rs).get(vg(t))}catch(e){if(e instanceof Rn)qn.warn(e.message);else{const n=mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qn.warn(n.message)}}}async function Qh(t,e){try{const r=(await _g()).transaction(rs,"readwrite");return await r.objectStore(rs).put(e,vg(t)),r.done}catch(n){if(n instanceof Rn)qn.warn(n.message);else{const r=mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qn.warn(r.message)}}}function vg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE=1024,bE=30*24*60*60*1e3;class FE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=qh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=bE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=qh(),{heartbeatsToSend:n,unsentEntries:r}=UE(this._heartbeatsCache.heartbeats),i=Ho(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function qh(){return new Date().toISOString().substring(0,10)}function UE(t,e=LE){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Yh(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Yh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Iw()?kw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ME(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Yh(t){return Ho(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(t){Br(new Qn("platform-logger",e=>new tE(e),"PRIVATE")),Br(new Qn("heartbeat",e=>new FE(e),"PRIVATE")),gn(xu,Kh,t),gn(xu,Kh,"esm2017"),gn("fire-js","")}WE("");var jE="firebase",BE="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gn(jE,BE,"app");function Qc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function yg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const VE=yg,wg=new _s("auth","Firebase",yg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=new $c("@firebase/auth");function go(t,...e){Xh.logLevel<=H.ERROR&&Xh.error(`Auth (${vs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t,...e){throw qc(t,...e)}function wt(t,...e){return qc(t,...e)}function Eg(t,e,n){const r=Object.assign(Object.assign({},VE()),{[e]:n});return new _s("auth","Firebase",r).create(e,{appName:t.name})}function HE(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&St(t,"argument-error"),Eg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function qc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return wg.create(t,...e)}function A(t,e,...n){if(!t)throw qc(e,...n)}function Ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw go(e),new Error(e)}function Wt(t,e){t||Ot(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=new Map;function At(t){Wt(t instanceof Function,"Expected a class definition");let e=Jh.get(t);return e?(Wt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jh.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(t,e){const n=Kc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ko(s,e??{}))return i;St(i,"already-initialized")}return n.initialize({options:e})}function GE(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(At);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function KE(){return Zh()==="http:"||Zh()==="https:"}function Zh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(KE()||Sw()||"connection"in navigator)?navigator.onLine:!0}function qE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wt(n>e,"Short delay should be less than long delay!"),this.isMobile=Vc()||cg()}get(){return QE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(t,e){Wt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE=new ys(3e4,6e4);function Cg(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ws(t,e,n,r,i={}){return Ig(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Zr(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Sg.fetch()(Tg(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function Ig(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},YE),e);try{const i=new JE(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Js(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Js(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Js(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Js(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Eg(t,d,u);St(t,d)}}catch(i){if(i instanceof Rn)throw i;St(t,"network-request-failed",{message:String(i)})}}async function kg(t,e,n,r,i={}){const s=await ws(t,e,n,r,i);return"mfaPendingCredential"in s&&St(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Tg(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Yc(t.config,i):`${t.config.apiScheme}://${i}`}class JE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wt(this.auth,"network-request-failed")),XE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Js(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZE(t,e){return ws(t,"POST","/v1/accounts:delete",e)}async function eS(t,e){return ws(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tS(t,e=!1){const n=Le(t),r=await n.getIdToken(e),i=Xc(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Di(Ea(i.auth_time)),issuedAtTime:Di(Ea(i.iat)),expirationTime:Di(Ea(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ea(t){return Number(t)*1e3}function Xc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return go("JWT malformed, contained fewer than 3 sections"),null;try{const i=$o(n);return i?JSON.parse(i):(go("Failed to decode base64 JWT payload"),null)}catch(i){return go("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function nS(t){const e=Xc(t);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rn&&rS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function rS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Di(this.lastLoginAt),this.creationTime=Di(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Vr(t,eS(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?lS(s.providerUserInfo):[],l=oS(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Ng(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function sS(t){const e=Le(t);await qo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function lS(t){return t.map(e=>{var{providerId:n}=e,r=Qc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aS(t,e){const n=await Ig(t,{},async()=>{const r=Zr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Tg(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Sg.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return A(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await aS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new is;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new is,this.toJSON())}_performRefresh(){return Ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,e){A(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Qc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new iS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ng(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Vr(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tS(this,e)}reload(){return sS(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await qo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Vr(this,ZE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(l=n.tenantId)!==null&&l!==void 0?l:void 0,x=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:y,isAnonymous:S,providerData:k,stsTokenManager:I}=n;A(m&&I,e,"internal-error");const R=is.fromJSON(this.name,I);A(typeof m=="string",e,"internal-error"),qt(c,e.name),qt(h,e.name),A(typeof y=="boolean",e,"internal-error"),A(typeof S=="boolean",e,"internal-error"),qt(g,e.name),qt(_,e.name),qt(v,e.name),qt(x,e.name),qt(p,e.name),qt(f,e.name);const B=new jn({uid:m,auth:e,email:h,emailVerified:y,displayName:c,isAnonymous:S,photoURL:_,phoneNumber:g,tenantId:v,stsTokenManager:R,createdAt:p,lastLoginAt:f});return k&&Array.isArray(k)&&(B.providerData=k.map(L=>Object.assign({},L))),x&&(B._redirectEventId=x),B}static async _fromIdTokenResponse(e,n,r=!1){const i=new is;i.updateFromServerResponse(n);const s=new jn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await qo(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Rg.type="NONE";const ef=Rg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(t,e,n){return`firebase:${t}:${e}:${n}`}class xr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=_o(this.userKey,i.apiKey,s),this.fullPersistenceKey=_o("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xr(At(ef),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||At(ef);const o=_o(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const c=jn._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new xr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new xr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Og(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dg(e))return"Blackberry";if(Mg(e))return"Webos";if(Jc(e))return"Safari";if((e.includes("chrome/")||Pg(e))&&!e.includes("edge/"))return"Chrome";if(Ag(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xg(t=Re()){return/firefox\//i.test(t)}function Jc(t=Re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pg(t=Re()){return/crios\//i.test(t)}function Og(t=Re()){return/iemobile/i.test(t)}function Ag(t=Re()){return/android/i.test(t)}function Dg(t=Re()){return/blackberry/i.test(t)}function Mg(t=Re()){return/webos/i.test(t)}function Pl(t=Re()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function uS(t=Re()){var e;return Pl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cS(){return Cw()&&document.documentMode===10}function Lg(t=Re()){return Pl(t)||Ag(t)||Mg(t)||Dg(t)||/windows phone/i.test(t)||Og(t)}function dS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(t,e=[]){let n;switch(t){case"Browser":n=tf(Re());break;case"Worker":n=`${tf(Re())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nf(this),this.idTokenSubscription=new nf(this),this.beforeStateQueue=new hS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=At(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Le(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(At(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _s("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&At(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await xr.create(this,[At(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return A(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Es(t){return Le(t)}class nf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Aw(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function pS(t,e,n){const r=Es(t);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Fg(e),{host:o,port:l}=mS(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||gS()}function Fg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mS(t){const e=Fg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:rf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:rf(o)}}}function rf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ot("not implemented")}_getIdTokenResponse(e){return Ot("not implemented")}_linkToIdToken(e,n){return Ot("not implemented")}_getReauthenticationResolver(e){return Ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pr(t,e){return kg(t,"POST","/v1/accounts:signInWithIdp",Cg(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S="http://localhost";class Yn extends Ug{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):St("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Qc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Yn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Pr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Pr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Pr(e,n)}buildRequest(){const e={requestUri:_S,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss extends Zc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Ss{constructor(){super("facebook.com")}static credential(e){return Yn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends Ss{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Rt.credential(n,r)}catch{return null}}}Rt.GOOGLE_SIGN_IN_METHOD="google.com";Rt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Ss{constructor(){super("github.com")}static credential(e){return Yn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.GITHUB_SIGN_IN_METHOD="github.com";tn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Ss{constructor(){super("twitter.com")}static credential(e,n){return Yn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.TWITTER_SIGN_IN_METHOD="twitter.com";nn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vS(t,e){return kg(t,"POST","/v1/accounts:signUp",Cg(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await jn._fromIdTokenResponse(e,r,i),o=sf(r);return new En({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=sf(r);return new En({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function sf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yS(t){var e;const n=Es(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new En({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await vS(n,{returnSecureToken:!0}),i=await En._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo extends Rn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Yo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Yo(e,n,r,i)}}function zg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Yo._fromErrorAndOperation(t,s,e,r):s})}async function wS(t,e,n=!1){const r=await Vr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return En._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ES(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Vr(t,zg(r,i,e,t),n);A(s.idToken,r,"internal-error");const o=Xc(s.idToken);A(o,r,"internal-error");const{sub:l}=o;return A(t.uid===l,r,"user-mismatch"),En._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&St(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SS(t,e,n=!1){const r="signIn",i=await zg(t,r,e),s=await En._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CS(t,e){return ws(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IS(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Le(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Vr(r,CS(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:a})=>a==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function kS(t,e,n,r){return Le(t).onIdTokenChanged(e,n,r)}function TS(t,e,n){return Le(t).beforeAuthStateChanged(e,n)}function Wg(t,e,n,r){return Le(t).onAuthStateChanged(e,n,r)}const Xo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xo,"1"),this.storage.removeItem(Xo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(){const t=Re();return Jc(t)||Pl(t)}const RS=1e3,xS=10;class Bg extends jg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=NS()&&dS(),this.fallbackToPolling=Lg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);cS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,xS):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},RS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bg.type="LOCAL";const PS=Bg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg extends jg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Vg.type="SESSION";const Hg=Vg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ol(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await OS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ol.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=ed("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return window}function DS(t){Et().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(){return typeof Et().WorkerGlobalScope<"u"&&typeof Et().importScripts=="function"}async function MS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function bS(){return $g()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg="firebaseLocalStorageDb",FS=1,Jo="firebaseLocalStorage",Kg="fbase_key";class Cs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Al(t,e){return t.transaction([Jo],e?"readwrite":"readonly").objectStore(Jo)}function US(){const t=indexedDB.deleteDatabase(Gg);return new Cs(t).toPromise()}function Du(){const t=indexedDB.open(Gg,FS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Jo,{keyPath:Kg})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Jo)?e(r):(r.close(),await US(),e(await Du()))})})}async function of(t,e,n){const r=Al(t,!0).put({[Kg]:e,value:n});return new Cs(r).toPromise()}async function zS(t,e){const n=Al(t,!1).get(e),r=await new Cs(n).toPromise();return r===void 0?null:r.value}function lf(t,e){const n=Al(t,!0).delete(e);return new Cs(n).toPromise()}const WS=800,jS=3;class Qg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Du(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $g()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ol._getInstance(bS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await MS(),!this.activeServiceWorker)return;this.sender=new AS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||LS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Du();return await of(e,Xo,"1"),await lf(e,Xo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>of(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>zS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>lf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Al(i,!1).getAll();return new Cs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qg.type="LOCAL";const BS=Qg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function HS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=wt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",VS().appendChild(r)})}function $S(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ys(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t,e){return e?At(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td extends Ug{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Pr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Pr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function GS(t){return SS(t.auth,new td(t),t.bypassAuthState)}function KS(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),ES(n,new td(t),t.bypassAuthState)}async function QS(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),wS(n,new td(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GS;case"linkViaPopup":case"linkViaRedirect":return QS;case"reauthViaPopup":case"reauthViaRedirect":return KS;default:St(this.auth,"internal-error")}}resolve(e){Wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS=new ys(2e3,1e4);class yr extends Yg{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,yr.currentPopupAction&&yr.currentPopupAction.cancel(),yr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){Wt(this.filter.length===1,"Popup operations only handle one event");const e=ed();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,qS.get())};e()}}yr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS="pendingRedirect",vo=new Map;class XS extends Yg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=vo.get(this.auth._key());if(!e){try{const r=await JS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vo.set(this.auth._key(),e)}return this.bypassAuthState||vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function JS(t,e){const n=Jg(e),r=Xg(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function ZS(t,e){return Xg(t)._set(Jg(e),"true")}function eC(t,e){vo.set(t._key(),e)}function Xg(t){return At(t._redirectPersistence)}function Jg(t){return _o(YS,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(t,e,n){return nC(t,e,n)}async function nC(t,e,n){const r=Es(t);HE(t,e,Zc),await r._initializationPromise;const i=qg(r,n);return await ZS(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function rC(t,e,n=!1){const r=Es(t),i=qg(r,e),o=await new XS(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=10*60*1e3;class sC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Zg(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iC&&this.cachedEventUids.clear(),this.cachedEventUids.has(af(e))}saveEventToCache(e){this.cachedEventUids.add(af(e)),this.lastProcessedEventTime=Date.now()}}function af(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Zg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lC(t,e={}){return ws(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uC=/^https?/;async function cC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lC(t);for(const n of e)try{if(dC(n))return}catch{}St(t,"unauthorized-domain")}function dC(t){const e=Au(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!uC.test(n))return!1;if(aC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC=new ys(3e4,6e4);function uf(){const t=Et().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fC(t){return new Promise((e,n)=>{var r,i,s;function o(){uf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{uf(),n(wt(t,"network-request-failed"))},timeout:hC.get()})}if(!((i=(r=Et().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Et().gapi)===null||s===void 0)&&s.load)o();else{const l=$S("iframefcb");return Et()[l]=()=>{gapi.load?o():n(wt(t,"network-request-failed"))},HS(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw yo=null,e})}let yo=null;function pC(t){return yo=yo||fC(t),yo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC=new ys(5e3,15e3),gC="__/auth/iframe",_C="emulator/auth/iframe",vC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wC(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yc(e,_C):`https://${t.config.authDomain}/${gC}`,r={apiKey:e.apiKey,appName:t.name,v:vs},i=yC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Zr(r).slice(1)}`}async function EC(t){const e=await pC(t),n=Et().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:wC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=wt(t,"network-request-failed"),l=Et().setTimeout(()=>{s(o)},mC.get());function a(){Et().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},CC=500,IC=600,kC="_blank",TC="http://localhost";class cf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NC(t,e,n,r=CC,i=IC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},SC),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Re().toLowerCase();n&&(l=Pg(u)?kC:n),xg(u)&&(e=e||TC,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(uS(u)&&l!=="_self")return RC(e||"",l),new cf(null);const c=window.open(e||"",l,d);A(c,t,"popup-blocked");try{c.focus()}catch{}return new cf(c)}function RC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC="__/auth/handler",PC="emulator/auth/handler";function df(t,e,n,r,i,s){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:vs,eventId:i};if(e instanceof Zc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Tu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,u]of Object.entries(s||{}))o[a]=u}if(e instanceof Ss){const a=e.getScopes().filter(u=>u!=="");a.length>0&&(o.scopes=a.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const a of Object.keys(l))l[a]===void 0&&delete l[a];return`${OC(t)}?${Zr(l).slice(1)}`}function OC({config:t}){return t.emulator?Yc(t,PC):`https://${t.authDomain}/${xC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa="webStorageSupport";class AC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hg,this._completeRedirectFn=rC,this._overrideRedirectResult=eC}async _openPopup(e,n,r,i){var s;Wt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=df(e,n,r,Au(),i);return NC(e,o,ed())}async _openRedirect(e,n,r,i){return await this._originValidation(e),DS(df(e,n,r,Au(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Wt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await EC(e),r=new sC(e);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sa,{type:Sa},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Sa];o!==void 0&&n(!!o),St(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Lg()||Jc()||Pl()}}const DC=AC;var hf="@firebase/auth",ff="0.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function bC(t){Br(new Qn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((l,a)=>{A(s&&!s.includes(":"),"invalid-api-key",{appName:l.name}),A(!(o!=null&&o.includes(":")),"argument-error",{appName:l.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bg(t)},d=new fS(l,a,u);return GE(d,n),d})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Br(new Qn("auth-internal",e=>{const n=Es(e.getProvider("auth").getImmediate());return(r=>new MC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(hf,ff,LC(t)),gn(hf,ff,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=5*60,UC=ug("authIdTokenMaxAge")||FC;let pf=null;const zC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>UC)return;const i=n==null?void 0:n.token;pf!==i&&(pf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function e_(t=gg()){const e=Kc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$E(t,{popupRedirectResolver:DC,persistence:[BS,PS,Hg]}),r=ug("authTokenSyncURL");if(r){const s=zC(r);TS(n,s,()=>s(n.currentUser)),kS(n,o=>s(o))}const i=ag("auth");return i&&pS(n,`http://${i}`),n}bC("Browser");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function t_(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function l(d){try{u(r.next(d))}catch(c){o(c)}}function a(d){try{u(r.throw(d))}catch(c){o(c)}}function u(d){d.done?s(d.value):i(d.value).then(l,a)}u((r=r.apply(t,e||[])).next())})}function n_(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(u){return function(d){return a([u,d])}}function a(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(d){u=[6,d],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var wr=function(){return wr=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},wr.apply(this,arguments)},r_=function(t){return{loading:t==null,value:t}},WC=function(){return function(t,e){switch(e.type){case"error":return wr(wr({},t),{error:e.error,loading:!1,value:void 0});case"reset":return r_(e.defaultValue);case"value":return wr(wr({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},jC=function(t){var e=t?t():void 0,n=O.useReducer(WC(),r_(e)),r=n[0],i=n[1],s=O.useCallback(function(){var a=t?t():void 0;i({type:"reset",defaultValue:a})},[t]),o=O.useCallback(function(a){i({type:"error",error:a})},[]),l=O.useCallback(function(a){i({type:"value",value:a})},[]);return O.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:l,value:r.value}},[r.error,r.loading,s,o,l,r.value])},BC=function(t,e){var n=jC(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,l=n.value;return O.useEffect(function(){var a=Wg(t,function(u){return t_(void 0,void 0,void 0,function(){var d;return n_(this,function(c){switch(c.label){case 0:if(!(e!=null&&e.onUserChanged))return[3,4];c.label=1;case 1:return c.trys.push([1,3,,4]),[4,e.onUserChanged(u)];case 2:return c.sent(),[3,4];case 3:return d=c.sent(),s(d),[3,4];case 4:return o(u),[2]}})})},s);return function(){a()}},[t]),[l,i,r]},VC=function(t){var e=O.useState(),n=e[0],r=e[1],i=O.useState(!1),s=i[0],o=i[1],l=O.useCallback(function(a){return t_(void 0,void 0,void 0,function(){var u;return n_(this,function(d){switch(d.label){case 0:o(!0),r(void 0),d.label=1;case 1:return d.trys.push([1,5,6,7]),t.currentUser?[4,IS(t.currentUser,a)]:[3,3];case 2:return d.sent(),[2,!0];case 3:throw new Error("No user is logged in");case 4:return[3,7];case 5:return u=d.sent(),r(u),[2,!1];case 6:return o(!1),[7];case 7:return[2]}})})},[t]);return[l,s,n]};function HC(t){const e=e_(t.app);let n=t.user,r=t.loadingUser;return ee("div",{className:"h-[10vh] bg-gray-500 flex-row flex items-center justify-between px-4",children:[C("h1",{children:"RPS"}),C("div",{className:"",children:t.user?ee("div",{className:"flex items-center justify-end",children:[ee("h3",{className:"m-4",children:["Hello ",n.displayName,"!"]}),C("button",{className:"m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all whitespace-nowrap",onClick:()=>{t.auth.signOut()},children:"Sign Out"})]}):r?C(Nt,{children:"Loading"}):ee("div",{className:"flex items-center justify-center",children:[C("button",{className:"m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all",onClick:()=>{const i=new Rt;tC(e,i)},children:"Google Sign In"}),C("button",{className:"m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all",onClick:()=>{yS(e),t.setInputName(!0)},children:"Sign In Anonymously"})]})})]})}const mf="@firebase/database",gf="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i_="";function $C(t){i_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ce(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ns(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Vt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new GC(e)}}catch{}return new KC},Fn=s_("localStorage"),Mu=s_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new $c("@firebase/database"),QC=function(){let t=1;return function(){return t++}}(),o_=function(t){const e=Lw(t),n=new Ow;n.update(e);const r=n.digest();return jc.encodeByteArray(r)},Is=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Is.apply(null,r):typeof r=="object"?e+=ce(r):e+=r,e+=" "}return e};let Bn=null,_f=!0;const qC=function(t,e){E(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Or.logLevel=H.VERBOSE,Bn=Or.log.bind(Or),e&&Mu.set("logging_enabled",!0)):typeof t=="function"?Bn=t:(Bn=null,Mu.remove("logging_enabled"))},Te=function(...t){if(_f===!0&&(_f=!1,Bn===null&&Mu.get("logging_enabled")===!0&&qC(!0)),Bn){const e=Is.apply(null,t);Bn(e)}},ks=function(t){return function(...e){Te(t,...e)}},Lu=function(...t){const e="FIREBASE INTERNAL ERROR: "+Is(...t);Or.error(e)},jt=function(...t){const e=`FIREBASE FATAL ERROR: ${Is(...t)}`;throw Or.error(e),new Error(e)},Ve=function(...t){const e="FIREBASE WARNING: "+Is(...t);Or.warn(e)},YC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ve("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},l_=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},XC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Hr="[MIN_NAME]",Xn="[MAX_NAME]",ei=function(t,e){if(t===e)return 0;if(t===Hr||e===Xn)return-1;if(e===Hr||t===Xn)return 1;{const n=vf(t),r=vf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},JC=function(t,e){return t===e?0:t<e?-1:1},mi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ce(e))},nd=function(t){if(typeof t!="object"||t===null)return ce(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ce(e[r]),n+=":",n+=nd(t[e[r]]);return n+="}",n},a_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function He(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const u_=function(t){E(!l_(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},ZC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},eI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function tI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const nI=new RegExp("^-?(0*)\\d{1,10}$"),rI=-2147483648,iI=2147483647,vf=function(t){if(nI.test(t)){const e=Number(t);if(e>=rI&&e<=iI)return e}return null},ti=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ve("Exception was thrown by user callback.",n),e},Math.floor(0))}},sI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Mi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ve(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Te("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ve(e)}}class Ar{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ar.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="5",c_="v",d_="s",h_="r",f_="f",p_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,m_="ls",g_="p",bu="ac",__="websocket",v_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Fn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Fn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function aI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function w_(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let r;if(e===__)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===v_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);aI(t)&&(n.ns=t.namespace);const i=[];return He(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(){this.counters_={}}incrementCounter(e,n=1){Vt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return fw(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca={},Ia={};function id(t){const e=t.toString();return Ca[e]||(Ca[e]=new uI),Ca[e]}function cI(t,e){const n=t.toString();return Ia[n]||(Ia[n]=e()),Ia[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ti(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf="start",hI="close",fI="pLPCommand",pI="pRTLPCB",E_="id",S_="pw",C_="ser",mI="cb",gI="seg",_I="ts",vI="d",yI="dframe",I_=1870,k_=30,wI=I_-k_,EI=25e3,SI=3e4;class Er{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ks(e),this.stats_=id(n),this.urlFn=a=>(this.appCheckToken&&(a[bu]=this.appCheckToken),w_(n,v_,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new dI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(SI)),XC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new sd((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===yf)this.id=l,this.password=a;else if(o===hI)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[yf]="t",r[C_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[mI]=this.scriptTagHolder.uniqueCallbackIdentifier),r[c_]=rd,this.transportSessionId&&(r[d_]=this.transportSessionId),this.lastSessionId&&(r[m_]=this.lastSessionId),this.applicationId&&(r[g_]=this.applicationId),this.appCheckToken&&(r[bu]=this.appCheckToken),typeof location<"u"&&location.hostname&&p_.test(location.hostname)&&(r[h_]=f_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Er.forceAllow_=!0}static forceDisallow(){Er.forceDisallow_=!0}static isAvailable(){return Er.forceAllow_?!0:!Er.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ZC()&&!eI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=og(n),i=a_(r,wI);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[yI]="t",r[E_]=e,r[S_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ce(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class sd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=QC(),window[fI+this.uniqueCallbackIdentifier]=e,window[pI+this.uniqueCallbackIdentifier]=n,this.myIFrame=sd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Te("frame writing exception"),l.stack&&Te(l.stack),Te(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Te("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[E_]=this.myID,e[S_]=this.myPW,e[C_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+k_+r.length<=I_;){const o=this.pendingSegs.shift();r=r+"&"+gI+i+"="+o.seg+"&"+_I+i+"="+o.ts+"&"+vI+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(EI)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Te("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=16384,II=45e3;let Zo=null;typeof MozWebSocket<"u"?Zo=MozWebSocket:typeof WebSocket<"u"&&(Zo=WebSocket);class at{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ks(this.connId),this.stats_=id(n),this.connURL=at.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[c_]=rd,typeof location<"u"&&location.hostname&&p_.test(location.hostname)&&(o[h_]=f_),n&&(o[d_]=n),r&&(o[m_]=r),i&&(o[bu]=i),s&&(o[g_]=s),w_(e,__,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Fn.set("previous_websocket_failure",!0);try{let r;dg(),this.mySock=new Zo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){at.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Zo!==null&&!at.forceDisallow_}static previouslyFailed(){return Fn.isInMemoryStorage||Fn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Fn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ns(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=a_(n,CI);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(II))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}at.responsesRequiredToBeHealthy=2;at.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Er,at]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=at&&at.isAvailable();let r=n&&!at.previouslyFailed();if(e.webSocketOnly&&(n||Ve("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[at];else{const i=this.transports_=[];for(const s of ss.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ss.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ss.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=6e4,TI=5e3,NI=10*1024,RI=100*1024,ka="t",wf="d",xI="s",Ef="r",PI="e",Sf="o",Cf="a",If="n",kf="p",OI="h";class AI{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ks("c:"+this.id+":"),this.transportManager_=new ss(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Mi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>RI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>NI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ka in e){const n=e[ka];n===Cf?this.upgradeIfSecondaryHealthy_():n===Ef?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Sf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=mi("t",e),r=mi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:kf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Cf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:If,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=mi("t",e),r=mi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=mi(ka,e);if(wf in e){const r=e[wf];if(n===OI){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===If){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===xI?this.onConnectionShutdown_(r):n===Ef?this.onReset_(r):n===PI?Lu("Server Error: "+r):n===Sf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Lu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),rd!==r&&Ve("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Mi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(kI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Mi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(TI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:kf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Fn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el extends N_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Vc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new el}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf=32,Nf=768;class ${constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function j(){return new $("")}function b(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Sn(t){return t.pieces_.length-t.pieceNum_}function G(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new $(t.pieces_,e)}function R_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function DI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function x_(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function P_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new $(e,0)}function de(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof $)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new $(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function Oe(t,e){const n=b(t),r=b(e);if(n===null)return e;if(n===r)return Oe(G(t),G(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function od(t,e){if(Sn(t)!==Sn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ut(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Sn(t)>Sn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class MI{constructor(e,n){this.errorPrefix_=n,this.parts_=x_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=xl(this.parts_[r]);O_(this)}}function LI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=xl(e),O_(t)}function bI(t){const e=t.parts_.pop();t.byteLength_-=xl(e),t.parts_.length>0&&(t.byteLength_-=1)}function O_(t){if(t.byteLength_>Nf)throw new Error(t.errorPrefix_+"has a key path longer than "+Nf+" bytes ("+t.byteLength_+").");if(t.parts_.length>Tf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Tf+") or object contains a cycle "+Dn(t))}function Dn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld extends N_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new ld}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=1e3,FI=60*5*1e3,Rf=30*1e3,UI=1.3,zI=3e4,WI="server_kill",xf=3;class Lt extends T_{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Lt.nextPersistentConnectionId_++,this.log_=ks("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=gi,this.maxReconnectDelay_=FI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!dg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ld.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&el.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ce(s)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Rl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Lt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Vt(e,"w")){const r=jr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ve(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Pw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Rf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=xw(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ce(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Lu("Unrecognized action received from server: "+ce(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=gi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=gi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>zI&&(this.reconnectDelay_=gi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*UI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Lt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Te("getToken() completed but was canceled"):(Te("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new AI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Ve(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(WI)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Ve(c),a())}}}interrupt(e){Te("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Te("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Tu(this.interruptReasons_)&&(this.reconnectDelay_=gi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>nd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new $(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Te("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=xf&&(this.reconnectDelay_=Rf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Te("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=xf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+i_.replace(/\./g,"-")]=1,Vc()?e["framework.cordova"]=1:cg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=el.getInstance().currentlyOnline();return Tu(this.interruptReasons_)&&e}}Lt.nextPersistentConnectionId_=0;Lt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new F(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new F(Hr,e),i=new F(Hr,n);return this.compare(r,i)!==0}minPost(){return F.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zs;class A_ extends Dl{static get __EMPTY_NODE(){return Zs}static set __EMPTY_NODE(e){Zs=e}compare(e,n){return ei(e.name,n.name)}isDefinedOn(e){throw Jr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(Xn,Zs)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,Zs)}toString(){return".key"}}const Dr=new A_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ge{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ge.RED,this.left=i??ze.EMPTY_NODE,this.right=s??ze.EMPTY_NODE}copy(e,n,r,i,s){return new ge(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ze.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return ze.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ge.RED=!0;ge.BLACK=!1;class jI{copy(e,n,r,i,s){return this}insert(e,n,r){return new ge(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ze{constructor(e,n=ze.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ze(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ge.BLACK,null,null))}remove(e){return new ze(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ge.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new eo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new eo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new eo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new eo(this.root_,null,this.comparator_,!0,e)}}ze.EMPTY_NODE=new jI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(t,e){return ei(t.name,e.name)}function ad(t,e){return ei(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fu;function VI(t){Fu=t}const D_=function(t){return typeof t=="number"?"number:"+u_(t):"string:"+t},M_=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Vt(e,".sv"),"Priority must be a string or number.")}else E(t===Fu||t.isEmpty(),"priority of unexpected type.");E(t===Fu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pf;class pe{constructor(e,n=pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),M_(this.priorityNode_)}static set __childrenNodeConstructor(e){Pf=e}static get __childrenNodeConstructor(){return Pf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:b(e)===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=b(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(E(r!==".priority"||Sn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(G(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+D_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=u_(this.value_):e+=this.value_,this.lazyHash_=o_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof pe.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=pe.VALUE_TYPE_ORDER.indexOf(n),s=pe.VALUE_TYPE_ORDER.indexOf(r);return E(i>=0,"Unknown leaf type: "+n),E(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let L_,b_;function HI(t){L_=t}function $I(t){b_=t}class GI extends Dl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ei(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(Xn,new pe("[PRIORITY-POST]",b_))}makePost(e,n){const r=L_(e);return new F(n,new pe("[PRIORITY-POST]",r))}toString(){return".priority"}}const se=new GI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI=Math.log(2);class QI{constructor(e){const n=s=>parseInt(Math.log(s)/KI,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const tl=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=t[a],h=n?n(c):c,new ge(h,c.node,ge.BLACK,null,null);{const g=parseInt(d/2,10)+a,_=i(a,g),v=i(g+1,u);return c=t[g],h=n?n(c):c,new ge(h,c.node,ge.BLACK,_,v)}},s=function(a){let u=null,d=null,c=t.length;const h=function(_,v){const x=c-_,p=c;c-=_;const f=i(x+1,p),m=t[x],y=n?n(m):m;g(new ge(y,m.node,v,null,f))},g=function(_){u?(u.left=_,u=_):(d=_,u=_)};for(let _=0;_<a.count;++_){const v=a.nextBitIsOne(),x=Math.pow(2,a.count-(_+1));v?h(x,ge.BLACK):(h(x,ge.BLACK),h(x,ge.RED))}return d},o=new QI(t.length),l=s(o);return new ze(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ta;const sr={};class Dt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return E(sr&&se,"ChildrenNode.ts has not been loaded"),Ta=Ta||new Dt({".priority":sr},{".priority":se}),Ta}get(e){const n=jr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ze?n:null}hasIndex(e){return Vt(this.indexSet_,e.toString())}addIndex(e,n){E(e!==Dr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(F.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=tl(r,e.getCompare()):l=sr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new Dt(d,u)}addToIndexes(e,n){const r=Go(this.indexes_,(i,s)=>{const o=jr(this.indexSet_,s);if(E(o,"Missing index implementation for "+s),i===sr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(F.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),tl(l,o.getCompare())}else return sr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new F(e.name,l))),a.insert(e,e.node)}});return new Dt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Go(this.indexes_,i=>{if(i===sr)return i;{const s=n.get(e.name);return s?i.remove(new F(e.name,s)):i}});return new Dt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _i;class P{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&M_(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return _i||(_i=new P(new ze(ad),null,Dt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_i}updatePriority(e){return this.children_.isEmpty()?this:new P(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?_i:n}}getChild(e){const n=b(e);return n===null?this:this.getImmediateChild(n).getChild(G(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new F(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?_i:this.priorityNode_;return new P(i,o,s)}}updateChild(e,n){const r=b(e);if(r===null)return n;{E(b(e)!==".priority"||Sn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(G(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(se,(o,l)=>{n[o]=l.val(e),r++,s&&P.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+D_(this.getPriority().val())+":"),this.forEachChild(se,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":o_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new F(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ts?-1:0}withIndex(e){if(e===Dr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new P(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Dr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(se),i=n.getIterator(se);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Dr?null:this.indexMap_.get(e.toString())}}P.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class qI extends P{constructor(){super(new ze(ad),P.EMPTY_NODE,Dt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return P.EMPTY_NODE}isEmpty(){return!1}}const Ts=new qI;Object.defineProperties(F,{MIN:{value:new F(Hr,P.EMPTY_NODE)},MAX:{value:new F(Xn,Ts)}});A_.__EMPTY_NODE=P.EMPTY_NODE;pe.__childrenNodeConstructor=P;VI(Ts);$I(Ts);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=!0;function _e(t,e=null){if(t===null)return P.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new pe(n,_e(e))}if(!(t instanceof Array)&&YI){const n=[];let r=!1;if(He(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=_e(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new F(o,a)))}}),n.length===0)return P.EMPTY_NODE;const s=tl(n,BI,o=>o.name,ad);if(r){const o=tl(n,se.getCompare());return new P(s,_e(e),new Dt({".priority":o},{".priority":se}))}else return new P(s,_e(e),Dt.Default)}else{let n=P.EMPTY_NODE;return He(t,(r,i)=>{if(Vt(t,r)&&r.substring(0,1)!=="."){const s=_e(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(_e(e))}}HI(_e);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI extends Dl{constructor(e){super(),this.indexPath_=e,E(!U(e)&&b(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ei(e.name,n.name):s}makePost(e,n){const r=_e(e),i=P.EMPTY_NODE.updateChild(this.indexPath_,r);return new F(n,i)}maxPost(){const e=P.EMPTY_NODE.updateChild(this.indexPath_,Ts);return new F(Xn,e)}toString(){return x_(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI extends Dl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ei(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const r=_e(e);return new F(n,r)}toString(){return".value"}}const ZI=new JI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(t){return{type:"value",snapshotNode:t}}function $r(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function os(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ls(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function e1(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(os(n,l)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange($r(n,r)):o.trackChildChange(ls(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(se,(i,s)=>{n.hasChild(i)||r.trackChildChange(os(i,s))}),n.isLeafNode()||n.forEachChild(se,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ls(i,s,o))}else r.trackChildChange($r(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?P.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.indexedFilter_=new ud(e.getIndex()),this.index_=e.getIndex(),this.startPost_=as.getStartPost_(e),this.endPost_=as.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new F(n,r))||(r=P.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=P.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(P.EMPTY_NODE);const s=this;return n.forEachChild(se,(o,l)=>{s.matches(new F(o,l))||(i=i.updateImmediateChild(o,P.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new as(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new F(n,r))||(r=P.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=P.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=P.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(P.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,P.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,g)=>c(g,h)}else o=this.index_.getCompare();const l=e;E(l.numChildren()===this.limit_,"");const a=new F(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,a);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(ls(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(os(n,c));const v=l.updateImmediateChild(n,P.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange($r(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(os(u.name,u.node)),s.trackChildChange($r(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,P.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=se}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Hr}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===se}copy(){const e=new cd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function n1(t){return t.loadsAllData()?new ud(t.getIndex()):t.hasLimit()?new t1(t):new as(t)}function Of(t){const e={};if(t.isDefault())return e;let n;if(t.index_===se?n="$priority":t.index_===ZI?n="$value":t.index_===Dr?n="$key":(E(t.index_ instanceof XI,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ce(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ce(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ce(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ce(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ce(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Af(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==se&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl extends T_{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ks("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=nl.getListenId_(e,r),l={};this.listens_[o]=l;const a=Of(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),jr(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=nl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Of(e._queryParams),r=e._path.toString(),i=new Rl;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Zr(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ns(l.responseText)}catch{Ve("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Ve("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(){this.rootNode_=P.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(){return{value:null,children:new Map}}function U_(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=b(e);t.children.has(r)||t.children.set(r,rl());const i=t.children.get(r);e=G(e),U_(i,e,n)}}function Uu(t,e,n){t.value!==null?n(e,t.value):i1(t,(r,i)=>{const s=new $(e.toString()+"/"+r);Uu(i,s,n)})}function i1(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&He(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=10*1e3,o1=30*1e3,l1=5*60*1e3;class a1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new s1(e);const r=Df+(o1-Df)*Math.random();Mi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;He(e,(i,s)=>{s>0&&Vt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Mi(this.reportStats_.bind(this),Math.floor(Math.random()*2*l1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ct||(ct={}));function z_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function dd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function hd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ct.ACK_USER_WRITE,this.source=z_()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new $(e));return new il(j(),n,this.revert)}}else return E(b(this.path)===e,"operationForChild called for unrelated child."),new il(G(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,n){this.source=e,this.path=n,this.type=ct.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new us(this.source,j()):new us(this.source,G(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ct.OVERWRITE}operationForChild(e){return U(this.path)?new Jn(this.source,j(),this.snap.getImmediateChild(e)):new Jn(this.source,G(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ct.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new $(e));return n.isEmpty()?null:n.value?new Jn(this.source,j(),n.value):new cs(this.source,j(),n)}else return E(b(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new cs(this.source,G(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=b(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function c1(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(e1(o.childName,o.snapshotNode))}),vi(t,i,"child_removed",e,r,n),vi(t,i,"child_added",e,r,n),vi(t,i,"child_moved",s,r,n),vi(t,i,"child_changed",e,r,n),vi(t,i,"value",e,r,n),i}function vi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>h1(t,l,a)),o.forEach(l=>{const a=d1(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function d1(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function h1(t,e,n){if(e.childName==null||n.childName==null)throw Jr("Should only compare child_ events.");const r=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(t,e){return{eventCache:t,serverCache:e}}function Li(t,e,n,r){return Ml(new Cn(e,n,r),t.serverCache)}function W_(t,e,n,r){return Ml(t.eventCache,new Cn(e,n,r))}function sl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Zn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Na;const f1=()=>(Na||(Na=new ze(JC)),Na);class Y{constructor(e,n=f1()){this.value=e,this.children=n}static fromObject(e){let n=new Y(null);return He(e,(r,i)=>{n=n.set(new $(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:j(),value:this.value};if(U(e))return null;{const r=b(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(G(e),n);return s!=null?{path:de(new $(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=b(e),r=this.children.get(n);return r!==null?r.subtree(G(e)):new Y(null)}}set(e,n){if(U(e))return new Y(n,this.children);{const r=b(e),s=(this.children.get(r)||new Y(null)).set(G(e),n),o=this.children.insert(r,s);return new Y(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new Y(null):new Y(null,this.children);{const n=b(e),r=this.children.get(n);if(r){const i=r.remove(G(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Y(null):new Y(this.value,s)}else return this}}get(e){if(U(e))return this.value;{const n=b(e),r=this.children.get(n);return r?r.get(G(e)):null}}setTree(e,n){if(U(e))return n;{const r=b(e),s=(this.children.get(r)||new Y(null)).setTree(G(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Y(this.value,o)}}fold(e){return this.fold_(j(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(de(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,j(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(U(e))return null;{const s=b(e),o=this.children.get(s);return o?o.findOnPath_(G(e),de(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,j(),n)}foreachOnPath_(e,n,r){if(U(e))return this;{this.value&&r(n,this.value);const i=b(e),s=this.children.get(i);return s?s.foreachOnPath_(G(e),de(n,i),r):new Y(null)}}foreach(e){this.foreach_(j(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(de(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.writeTree_=e}static empty(){return new ft(new Y(null))}}function bi(t,e,n){if(U(e))return new ft(new Y(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Oe(i,e);return s=s.updateChild(o,n),new ft(t.writeTree_.set(i,s))}else{const i=new Y(n),s=t.writeTree_.setTree(e,i);return new ft(s)}}}function Mf(t,e,n){let r=t;return He(n,(i,s)=>{r=bi(r,de(e,i),s)}),r}function Lf(t,e){if(U(e))return ft.empty();{const n=t.writeTree_.setTree(e,new Y(null));return new ft(n)}}function zu(t,e){return nr(t,e)!=null}function nr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Oe(n.path,e)):null}function bf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(se,(r,i)=>{e.push(new F(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new F(r,i.value))}),e}function _n(t,e){if(U(e))return t;{const n=nr(t,e);return n!=null?new ft(new Y(n)):new ft(t.writeTree_.subtree(e))}}function Wu(t){return t.writeTree_.isEmpty()}function Gr(t,e){return j_(j(),t.writeTree_,e)}function j_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(E(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=j_(de(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(de(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(t,e){return $_(e,t)}function p1(t,e,n,r,i){E(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=bi(t.visibleWrites,e,n)),t.lastWriteId=r}function m1(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function g1(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&_1(l,r.path)?i=!1:ut(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return v1(t),!0;if(r.snap)t.visibleWrites=Lf(t.visibleWrites,r.path);else{const l=r.children;He(l,a=>{t.visibleWrites=Lf(t.visibleWrites,de(r.path,a))})}return!0}else return!1}function _1(t,e){if(t.snap)return ut(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ut(de(t.path,n),e))return!0;return!1}function v1(t){t.visibleWrites=B_(t.allWrites,y1,j()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function y1(t){return t.visible}function B_(t,e,n){let r=ft.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)ut(n,o)?(l=Oe(n,o),r=bi(r,l,s.snap)):ut(o,n)&&(l=Oe(o,n),r=bi(r,j(),s.snap.getChild(l)));else if(s.children){if(ut(n,o))l=Oe(n,o),r=Mf(r,l,s.children);else if(ut(o,n))if(l=Oe(o,n),U(l))r=Mf(r,j(),s.children);else{const a=jr(s.children,b(l));if(a){const u=a.getChild(G(l));r=bi(r,j(),u)}}}else throw Jr("WriteRecord should have .snap or .children")}}return r}function V_(t,e,n,r,i){if(!r&&!i){const s=nr(t.visibleWrites,e);if(s!=null)return s;{const o=_n(t.visibleWrites,e);if(Wu(o))return n;if(n==null&&!zu(o,j()))return null;{const l=n||P.EMPTY_NODE;return Gr(o,l)}}}else{const s=_n(t.visibleWrites,e);if(!i&&Wu(s))return n;if(!i&&n==null&&!zu(s,j()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(ut(u.path,e)||ut(e,u.path))},l=B_(t.allWrites,o,e),a=n||P.EMPTY_NODE;return Gr(l,a)}}}function w1(t,e,n){let r=P.EMPTY_NODE;const i=nr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(se,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=_n(t.visibleWrites,e);return n.forEachChild(se,(o,l)=>{const a=Gr(_n(s,new $(o)),l);r=r.updateImmediateChild(o,a)}),bf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=_n(t.visibleWrites,e);return bf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function E1(t,e,n,r,i){E(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=de(e,n);if(zu(t.visibleWrites,s))return null;{const o=_n(t.visibleWrites,s);return Wu(o)?i.getChild(n):Gr(o,i.getChild(n))}}function S1(t,e,n,r){const i=de(e,n),s=nr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=_n(t.visibleWrites,i);return Gr(o,r.getNode().getImmediateChild(n))}else return null}function C1(t,e){return nr(t.visibleWrites,e)}function I1(t,e,n,r,i,s,o){let l;const a=_n(t.visibleWrites,e),u=nr(a,j());if(u!=null)l=u;else if(n!=null)l=Gr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=h.getNext();for(;g&&d.length<i;)c(g,r)!==0&&d.push(g),g=h.getNext();return d}else return[]}function k1(){return{visibleWrites:ft.empty(),allWrites:[],lastWriteId:-1}}function ol(t,e,n,r){return V_(t.writeTree,t.treePath,e,n,r)}function fd(t,e){return w1(t.writeTree,t.treePath,e)}function Ff(t,e,n,r){return E1(t.writeTree,t.treePath,e,n,r)}function ll(t,e){return C1(t.writeTree,de(t.treePath,e))}function T1(t,e,n,r,i,s){return I1(t.writeTree,t.treePath,e,n,r,i,s)}function pd(t,e,n){return S1(t.writeTree,t.treePath,e,n)}function H_(t,e){return $_(de(t.treePath,e),t.writeTree)}function $_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ls(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,os(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,$r(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ls(r,e.snapshotNode,i.oldSnap));else throw Jr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const G_=new R1;class md{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Cn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return pd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Zn(this.viewCache_),s=T1(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x1(t){return{filter:t}}function P1(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function O1(t,e,n,r,i){const s=new N1;let o,l;if(n.type===ct.OVERWRITE){const u=n;u.source.fromUser?o=ju(t,e,u.path,u.snap,r,i,s):(E(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!U(u.path),o=al(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===ct.MERGE){const u=n;u.source.fromUser?o=D1(t,e,u.path,u.children,r,i,s):(E(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Bu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===ct.ACK_USER_WRITE){const u=n;u.revert?o=b1(t,e,u.path,r,i,s):o=M1(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===ct.LISTEN_COMPLETE)o=L1(t,e,n.path,r,s);else throw Jr("Unknown operation type: "+n.type);const a=s.getChanges();return A1(e,o,a),{viewCache:o,changes:a}}function A1(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=sl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(F_(sl(e)))}}function K_(t,e,n,r,i,s){const o=e.eventCache;if(ll(r,n)!=null)return e;{let l,a;if(U(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Zn(e),d=u instanceof P?u:P.EMPTY_NODE,c=fd(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=ol(r,Zn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=b(n);if(u===".priority"){E(Sn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=Ff(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=G(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=Ff(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=pd(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return Li(e,l,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function al(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(U(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),g,null)}else{const g=b(n);if(!a.isCompleteForPath(n)&&Sn(n)>1)return e;const _=G(n),x=a.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?u=d.updatePriority(a.getNode(),x):u=d.updateChild(a.getNode(),g,x,_,G_,null)}const c=W_(e,u,a.isFullyInitialized()||U(n),d.filtersNodes()),h=new md(i,c,s);return K_(t,c,n,i,h,l)}function ju(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new md(i,e,s);if(U(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Li(e,u,!0,t.filter.filtersNodes());else{const c=b(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Li(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=G(n),g=l.getNode().getImmediateChild(c);let _;if(U(h))_=r;else{const v=d.getCompleteChild(c);v!=null?R_(h)===".priority"&&v.getChild(P_(h)).isEmpty()?_=v:_=v.updateChild(h,r):_=P.EMPTY_NODE}if(g.equals(_))a=e;else{const v=t.filter.updateChild(l.getNode(),c,_,h,d,o);a=Li(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Uf(t,e){return t.eventCache.isCompleteForChild(e)}function D1(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=de(n,a);Uf(e,b(d))&&(l=ju(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=de(n,a);Uf(e,b(d))||(l=ju(t,l,d,u,i,s,o))}),l}function zf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Bu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;U(n)?u=r:u=new Y(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),_=zf(t,g,h);a=al(t,a,new $(c),_,i,s,o,l)}}),u.children.inorderTraversal((c,h)=>{const g=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!g){const _=e.serverCache.getNode().getImmediateChild(c),v=zf(t,_,h);a=al(t,a,new $(c),v,i,s,o,l)}}),a}function M1(t,e,n,r,i,s,o){if(ll(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(U(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return al(t,e,n,a.getNode().getChild(n),i,s,l,o);if(U(n)){let u=new Y(null);return a.getNode().forEachChild(Dr,(d,c)=>{u=u.set(new $(d),c)}),Bu(t,e,n,u,i,s,l,o)}else return e}else{let u=new Y(null);return r.foreach((d,c)=>{const h=de(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),Bu(t,e,n,u,i,s,l,o)}}function L1(t,e,n,r,i){const s=e.serverCache,o=W_(e,s.getNode(),s.isFullyInitialized()||U(n),s.isFiltered());return K_(t,o,n,r,G_,i)}function b1(t,e,n,r,i,s){let o;if(ll(r,n)!=null)return e;{const l=new md(r,e,i),a=e.eventCache.getNode();let u;if(U(n)||b(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=ol(r,Zn(e));else{const c=e.serverCache.getNode();E(c instanceof P,"serverChildren would be complete if leaf node"),d=fd(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=b(n);let c=pd(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,G(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,P.EMPTY_NODE,G(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ol(r,Zn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||ll(r,j())!=null,Li(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new ud(r.getIndex()),s=n1(r);this.processor_=x1(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(P.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(P.EMPTY_NODE,l.getNode(),null),d=new Cn(a,o.isFullyInitialized(),i.filtersNodes()),c=new Cn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Ml(c,d),this.eventGenerator_=new u1(this.query_)}get query(){return this.query_}}function U1(t){return t.viewCache_.serverCache.getNode()}function z1(t){return sl(t.viewCache_)}function W1(t,e){const n=Zn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(b(e)).isEmpty())?n.getChild(e):null}function Wf(t){return t.eventRegistrations_.length===0}function j1(t,e){t.eventRegistrations_.push(e)}function jf(t,e,n){const r=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Bf(t,e,n,r){e.type===ct.MERGE&&e.source.queryId!==null&&(E(Zn(t.viewCache_),"We should always have a full cache before handling merges"),E(sl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=O1(t.processor_,i,e,n,r);return P1(t.processor_,s.viewCache),E(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Q_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function B1(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(se,(s,o)=>{r.push($r(s,o))}),n.isFullyInitialized()&&r.push(F_(n.getNode())),Q_(t,r,n.getNode(),e)}function Q_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return c1(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ul;class q_{constructor(){this.views=new Map}}function V1(t){E(!ul,"__referenceConstructor has already been defined"),ul=t}function H1(){return E(ul,"Reference.ts has not been loaded"),ul}function $1(t){return t.views.size===0}function gd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return E(s!=null,"SyncTree gave us an op for an invalid query."),Bf(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Bf(o,e,n,r));return s}}function Y_(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=ol(n,i?r:null),a=!1;l?a=!0:r instanceof P?(l=fd(n,r),a=!1):(l=P.EMPTY_NODE,a=!1);const u=Ml(new Cn(l,a,!1),new Cn(r,i,!1));return new F1(e,u)}return o}function G1(t,e,n,r,i,s){const o=Y_(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),j1(o,n),B1(o,n)}function K1(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=In(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(jf(u,n,r)),Wf(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(jf(a,n,r)),Wf(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!In(t)&&s.push(new(H1())(e._repo,e._path)),{removed:s,events:o}}function X_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function vn(t,e){let n=null;for(const r of t.views.values())n=n||W1(r,e);return n}function J_(t,e){if(e._queryParams.loadsAllData())return bl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Z_(t,e){return J_(t,e)!=null}function In(t){return bl(t)!=null}function bl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cl;function Q1(t){E(!cl,"__referenceConstructor has already been defined"),cl=t}function q1(){return E(cl,"Reference.ts has not been loaded"),cl}let Y1=1;class Vf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Y(null),this.pendingWriteTree_=k1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ev(t,e,n,r,i){return p1(t.pendingWriteTree_,e,n,r,i),i?Rs(t,new Jn(z_(),e,n)):[]}function Un(t,e,n=!1){const r=m1(t.pendingWriteTree_,e);if(g1(t.pendingWriteTree_,e)){let s=new Y(null);return r.snap!=null?s=s.set(j(),!0):He(r.children,o=>{s=s.set(new $(o),!0)}),Rs(t,new il(r.path,s,n))}else return[]}function Ns(t,e,n){return Rs(t,new Jn(dd(),e,n))}function X1(t,e,n){const r=Y.fromObject(n);return Rs(t,new cs(dd(),e,r))}function J1(t,e){return Rs(t,new us(dd(),e))}function Z1(t,e,n){const r=vd(t,n);if(r){const i=yd(r),s=i.path,o=i.queryId,l=Oe(s,e),a=new us(hd(o),l);return wd(t,s,a)}else return[]}function dl(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Z_(o,e))){const a=K1(o,e,n,r);$1(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,g)=>In(g));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=nk(h);for(let _=0;_<g.length;++_){const v=g[_],x=v.query,p=iv(t,v);t.listenProvider_.startListening(Fi(x),ds(t,x),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Fi(e),null):u.forEach(h=>{const g=t.queryToTagMap.get(Fl(h));t.listenProvider_.stopListening(Fi(h),g)}))}rk(t,u)}return l}function tv(t,e,n,r){const i=vd(t,r);if(i!=null){const s=yd(i),o=s.path,l=s.queryId,a=Oe(o,e),u=new Jn(hd(l),a,n);return wd(t,o,u)}else return[]}function ek(t,e,n,r){const i=vd(t,r);if(i){const s=yd(i),o=s.path,l=s.queryId,a=Oe(o,e),u=Y.fromObject(n),d=new cs(hd(l),a,u);return wd(t,o,d)}else return[]}function Vu(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const _=Oe(h,i);s=s||vn(g,_),o=o||In(g)});let l=t.syncPointTree_.get(i);l?(o=o||In(l),s=s||vn(l,j())):(l=new q_,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=P.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const v=vn(_,j());v&&(s=s.updateImmediateChild(g,v))}));const u=Z_(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=Fl(e);E(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=ik();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const d=Ll(t.pendingWriteTree_,i);let c=G1(l,e,n,d,s,a);if(!u&&!o&&!r){const h=J_(l,e);c=c.concat(sk(t,e,h))}return c}function _d(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Oe(o,e),u=vn(l,a);if(u)return u});return V_(i,e,s,n,!0)}function tk(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=Oe(u,n);r=r||vn(d,c)});let i=t.syncPointTree_.get(n);i?r=r||vn(i,j()):(i=new q_,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Cn(r,!0,!1):null,l=Ll(t.pendingWriteTree_,e._path),a=Y_(i,e,l,s?o.getNode():P.EMPTY_NODE,s);return z1(a)}function Rs(t,e){return nv(e,t.syncPointTree_,null,Ll(t.pendingWriteTree_,j()))}function nv(t,e,n,r){if(U(t.path))return rv(t,e,n,r);{const i=e.get(j());n==null&&i!=null&&(n=vn(i,j()));let s=[];const o=b(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=H_(r,o);s=s.concat(nv(l,a,u,d))}return i&&(s=s.concat(gd(i,t,r,n))),s}}function rv(t,e,n,r){const i=e.get(j());n==null&&i!=null&&(n=vn(i,j()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=H_(r,o),d=t.operationForChild(o);d&&(s=s.concat(rv(d,l,a,u)))}),i&&(s=s.concat(gd(i,t,r,n))),s}function iv(t,e){const n=e.query,r=ds(t,n);return{hashFn:()=>(U1(e)||P.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?Z1(t,n._path,r):J1(t,n._path);{const s=tI(i,n);return dl(t,n,null,s)}}}}function ds(t,e){const n=Fl(e);return t.queryToTagMap.get(n)}function Fl(t){return t._path.toString()+"$"+t._queryIdentifier}function vd(t,e){return t.tagToQueryMap.get(e)}function yd(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new $(t.substr(0,e))}}function wd(t,e,n){const r=t.syncPointTree_.get(e);E(r,"Missing sync point for query tag that we're tracking");const i=Ll(t.pendingWriteTree_,e);return gd(r,n,i,null)}function nk(t){return t.fold((e,n,r)=>{if(n&&In(n))return[bl(n)];{let i=[];return n&&(i=X_(n)),He(r,(s,o)=>{i=i.concat(o)}),i}})}function Fi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(q1())(t._repo,t._path):t}function rk(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Fl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function ik(){return Y1++}function sk(t,e,n){const r=e._path,i=ds(t,e),s=iv(t,n),o=t.listenProvider_.startListening(Fi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)E(!In(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!U(u)&&d&&In(d))return[bl(d).query];{let h=[];return d&&(h=h.concat(X_(d).map(g=>g.query))),He(c,(g,_)=>{h=h.concat(_)}),h}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(Fi(d),ds(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ed(n)}node(){return this.node_}}class Sd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=de(this.path_,e);return new Sd(this.syncTree_,n)}node(){return _d(this.syncTree_,this.path_)}}const ok=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Hf=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return lk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return ak(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},lk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},ak=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&E(!1,"Unexpected increment value: "+r);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},uk=function(t,e,n,r){return Cd(e,new Sd(n,t),r)},sv=function(t,e,n){return Cd(t,new Ed(e),n)};function Cd(t,e,n){const r=t.getPriority().val(),i=Hf(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Hf(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new pe(l,_e(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new pe(i))),o.forEachChild(se,(l,a)=>{const u=Cd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function kd(t,e){let n=e instanceof $?e:new $(e),r=t,i=b(n);for(;i!==null;){const s=jr(r.node.children,i)||{children:{},childCount:0};r=new Id(i,r,s),n=G(n),i=b(n)}return r}function ni(t){return t.node.value}function ov(t,e){t.node.value=e,Hu(t)}function lv(t){return t.node.childCount>0}function ck(t){return ni(t)===void 0&&!lv(t)}function Ul(t,e){He(t.node.children,(n,r)=>{e(new Id(n,t,r))})}function av(t,e,n,r){n&&!r&&e(t),Ul(t,i=>{av(i,e,!0,r)}),n&&r&&e(t)}function dk(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function xs(t){return new $(t.parent===null?t.name:xs(t.parent)+"/"+t.name)}function Hu(t){t.parent!==null&&hk(t.parent,t.name,t)}function hk(t,e,n){const r=ck(n),i=Vt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Hu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Hu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk=/[\[\].#$\/\u0000-\u001F\u007F]/,pk=/[\[\].#$\u0000-\u001F\u007F]/,Ra=10*1024*1024,uv=function(t){return typeof t=="string"&&t.length!==0&&!fk.test(t)},cv=function(t){return typeof t=="string"&&t.length!==0&&!pk.test(t)},mk=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),cv(t)},dv=function(t,e,n,r){r&&e===void 0||Td(Hc(t,"value"),e,n)},Td=function(t,e,n){const r=n instanceof $?new MI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Dn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Dn(r)+" with contents = "+e.toString());if(l_(e))throw new Error(t+"contains "+e.toString()+" "+Dn(r));if(typeof e=="string"&&e.length>Ra/3&&xl(e)>Ra)throw new Error(t+"contains a string greater than "+Ra+" utf8 bytes "+Dn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(He(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!uv(o)))throw new Error(t+" contains an invalid key ("+o+") "+Dn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);LI(r,o),Td(t,l,r),bI(r)}),i&&s)throw new Error(t+' contains ".value" child '+Dn(r)+" in addition to actual children.")}},hv=function(t,e,n,r){if(!(r&&n===void 0)&&!cv(n))throw new Error(Hc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},gk=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),hv(t,e,n,r)},fv=function(t,e){if(b(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},_k=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!uv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!mk(n))throw new Error(Hc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Nd(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!od(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function pv(t,e,n){Nd(t,n),mv(t,r=>od(r,e))}function Ct(t,e,n){Nd(t,n),mv(t,r=>ut(r,e)||ut(e,r))}function mv(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(yk(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function yk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Bn&&Te("event: "+n.toString()),ti(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk="repo_interrupt",Ek=25;class Sk{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new vk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=rl(),this.transactionQueueTree_=new Id,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ck(t,e,n){if(t.stats_=id(t.repoInfo_),t.forceRestClient_||sI())t.server_=new nl(t.repoInfo_,(r,i,s,o)=>{$f(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Gf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ce(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Lt(t.repoInfo_,e,(r,i,s,o)=>{$f(t,r,i,s,o)},r=>{Gf(t,r)},r=>{Ik(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=cI(t.repoInfo_,()=>new a1(t.stats_,t.server_)),t.infoData_=new r1,t.infoSyncTree_=new Vf({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Ns(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),xd(t,"connected",!1),t.serverSyncTree_=new Vf({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Ct(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function gv(t){const n=t.infoData_.getNode(new $(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Rd(t){return ok({timestamp:gv(t)})}function $f(t,e,n,r,i){t.dataUpdateCount++;const s=new $(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Go(n,u=>_e(u));o=ek(t.serverSyncTree_,s,a,i)}else{const a=_e(n);o=tv(t.serverSyncTree_,s,a,i)}else if(r){const a=Go(n,u=>_e(u));o=X1(t.serverSyncTree_,s,a)}else{const a=_e(n);o=Ns(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Wl(t,s)),Ct(t.eventQueue_,l,o)}function Gf(t,e){xd(t,"connected",e),e===!1&&Nk(t)}function Ik(t,e){He(e,(n,r)=>{xd(t,n,r)})}function xd(t,e,n){const r=new $("/.info/"+e),i=_e(n);t.infoData_.updateSnapshot(r,i);const s=Ns(t.infoSyncTree_,r,i);Ct(t.eventQueue_,r,s)}function _v(t){return t.nextWriteId_++}function kk(t,e,n){const r=tk(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=_e(i).withIndex(e._queryParams.getIndex());Vu(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ns(t.serverSyncTree_,e._path,s);else{const l=ds(t.serverSyncTree_,e);o=tv(t.serverSyncTree_,e._path,s,l)}return Ct(t.eventQueue_,e._path,o),dl(t.serverSyncTree_,e,n,null,!0),s},i=>(zl(t,"get for query "+ce(e)+" failed: "+i),Promise.reject(new Error(i))))}function Tk(t,e,n,r,i){zl(t,"set",{path:e.toString(),value:n,priority:r});const s=Rd(t),o=_e(n,r),l=_d(t.serverSyncTree_,e),a=sv(o,l,s),u=_v(t),d=ev(t.serverSyncTree_,e,a,u,!0);Nd(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const _=h==="ok";_||Ve("set at "+e+" failed: "+h);const v=Un(t.serverSyncTree_,u,!_);Ct(t.eventQueue_,e,v),Pk(t,i,h,g)});const c=Sv(t,e);Wl(t,c),Ct(t.eventQueue_,c,[])}function Nk(t){zl(t,"onDisconnectEvents");const e=Rd(t),n=rl();Uu(t.onDisconnect_,j(),(i,s)=>{const o=uk(i,s,t.serverSyncTree_,e);U_(n,i,o)});let r=[];Uu(n,j(),(i,s)=>{r=r.concat(Ns(t.serverSyncTree_,i,s));const o=Sv(t,i);Wl(t,o)}),t.onDisconnect_=rl(),Ct(t.eventQueue_,j(),r)}function Rk(t,e,n){let r;b(e._path)===".info"?r=Vu(t.infoSyncTree_,e,n):r=Vu(t.serverSyncTree_,e,n),pv(t.eventQueue_,e._path,r)}function $u(t,e,n){let r;b(e._path)===".info"?r=dl(t.infoSyncTree_,e,n):r=dl(t.serverSyncTree_,e,n),pv(t.eventQueue_,e._path,r)}function xk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(wk)}function zl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Te(n,...e)}function Pk(t,e,n,r){e&&ti(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function vv(t,e,n){return _d(t.serverSyncTree_,e,n)||P.EMPTY_NODE}function Pd(t,e=t.transactionQueueTree_){if(e||jl(t,e),ni(e)){const n=wv(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Ok(t,xs(e),n)}else lv(e)&&Ul(e,n=>{Pd(t,n)})}function Ok(t,e,n){const r=n.map(u=>u.currentWriteId),i=vv(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];E(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Oe(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{zl(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Un(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();jl(t,kd(t.transactionQueueTree_,e)),Pd(t,t.transactionQueueTree_),Ct(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)ti(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Ve("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Wl(t,e)}},o)}function Wl(t,e){const n=yv(t,e),r=xs(n),i=wv(t,n);return Ak(t,i,r),r}function Ak(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Oe(n,a.path);let d=!1,c;if(E(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(Un(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Ek)d=!0,c="maxretry",i=i.concat(Un(t.serverSyncTree_,a.currentWriteId,!0));else{const h=vv(t,a.path,o);a.currentInputSnapshot=h;const g=e[l].update(h.val());if(g!==void 0){Td("transaction failed: Data returned ",g,a.path);let _=_e(g);typeof g=="object"&&g!=null&&Vt(g,".priority")||(_=_.updatePriority(h.getPriority()));const x=a.currentWriteId,p=Rd(t),f=sv(_,h,p);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=f,a.currentWriteId=_v(t),o.splice(o.indexOf(x),1),i=i.concat(ev(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(Un(t.serverSyncTree_,x,!0))}else d=!0,c="nodata",i=i.concat(Un(t.serverSyncTree_,a.currentWriteId,!0))}Ct(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}jl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ti(r[l]);Pd(t,t.transactionQueueTree_)}function yv(t,e){let n,r=t.transactionQueueTree_;for(n=b(e);n!==null&&ni(r)===void 0;)r=kd(r,n),e=G(e),n=b(e);return r}function wv(t,e){const n=[];return Ev(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Ev(t,e,n){const r=ni(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ul(e,i=>{Ev(t,i,n)})}function jl(t,e){const n=ni(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,ov(e,n.length>0?n:void 0)}Ul(e,r=>{jl(t,r)})}function Sv(t,e){const n=xs(yv(t,e)),r=kd(t.transactionQueueTree_,e);return dk(r,i=>{xa(t,i)}),xa(t,r),av(r,i=>{xa(t,i)}),n}function xa(t,e){const n=ni(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Un(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?ov(e,void 0):n.length=s+1,Ct(t.eventQueue_,xs(e),i);for(let o=0;o<r.length;o++)ti(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dk(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Mk(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ve(`Invalid query segment '${n}' in query '${t}'`)}return e}const Kf=function(t,e){const n=Lk(t),r=n.namespace;n.domain==="firebase.com"&&jt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&jt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||YC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new y_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new $(n.pathString)}},Lk=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=Dk(t.substring(d,c)));const h=Mk(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",bk=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Qf.charAt(n%64),n=Math.floor(n/64);E(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Qf.charAt(e[i]);return E(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ce(this.snapshot.exportVal())}}class Iv{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return U(this._path)?null:R_(this._path)}get ref(){return new It(this._repo,this._path)}get _queryIdentifier(){const e=Af(this._queryParams),n=nd(e);return n==="{}"?"default":n}get _queryObject(){return Af(this._queryParams)}isEqual(e){if(e=Le(e),!(e instanceof Ad))return!1;const n=this._repo===e._repo,r=od(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+DI(this._path)}}class It extends Ad{constructor(e,n){super(e,n,new cd,!1)}get parent(){const e=P_(this._path);return e===null?null:new It(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Kr{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new $(e),r=Qr(this.ref,e);return new Kr(this._node.getChild(n),r,se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Kr(i,Qr(this.ref,r),se)))}hasChild(e){const n=new $(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function be(t,e){return t=Le(t),t._checkNotDeleted("ref"),e!==void 0?Qr(t._root,e):t._root}function Qr(t,e){return t=Le(t),b(t._path)===null?gk("child","path",e,!1):hv("child","path",e,!1),new It(t._repo,de(t._path,e))}function Fk(t,e){t=Le(t),fv("push",t._path),dv("push",e,t._path,!0);const n=gv(t._repo),r=bk(n),i=Qr(t,r),s=Qr(t,r);let o;return e!=null?o=or(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function or(t,e){t=Le(t),fv("set",t._path),dv("set",e,t._path,!1);const n=new Rl;return Tk(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Uk(t){t=Le(t);const e=new Od(()=>{}),n=new Ps(e);return kk(t._repo,t,n).then(r=>new Kr(r,new It(t._repo,t._path),t._queryParams.getIndex()))}class Ps{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Cv("value",this,new Kr(e.snapshotNode,new It(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Iv(this,e,n):null}matches(e){return e instanceof Ps?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Bl{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Iv(this,e,n):null}createEvent(e,n){E(e.childName!=null,"Child events should have a childName.");const r=Qr(new It(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Cv(e.type,this,new Kr(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Bl?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Os(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(d,c)=>{$u(t._repo,t,l),a(d,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new Od(n,s||void 0),l=e==="value"?new Ps(o):new Bl(e,o);return Rk(t._repo,t,l),()=>$u(t._repo,t,l)}function kv(t,e,n,r){return Os(t,"value",e,n,r)}function qf(t,e,n,r){return Os(t,"child_added",e,n,r)}function zk(t,e,n,r){return Os(t,"child_changed",e,n,r)}function Wk(t,e,n,r){return Os(t,"child_moved",e,n,r)}function jk(t,e,n,r){return Os(t,"child_removed",e,n,r)}function Ci(t,e,n){let r=null;const i=n?new Od(n):null;e==="value"?r=new Ps(i):e&&(r=new Bl(e,i)),$u(t._repo,t,r)}V1(It);Q1(It);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk="FIREBASE_DATABASE_EMULATOR_HOST",Gu={};let Vk=!1;function Hk(t,e,n,r){t.repoInfo_=new y_(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function $k(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||jt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Te("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Kf(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[Bk]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=Kf(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const d=i&&a?new Ar(Ar.OWNER):new lI(t.name,t.options,e);_k("Invalid Firebase Database URL",o),U(o.path)||jt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=Kk(l,t,d,new oI(t.name,n));return new Qk(c,t)}function Gk(t,e){const n=Gu[e];(!n||n[t.key]!==t)&&jt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),xk(t),delete n[t.key]}function Kk(t,e,n,r){let i=Gu[e.name];i||(i={},Gu[e.name]=i);let s=i[t.toURLString()];return s&&jt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Sk(t,Vk,n,r),i[t.toURLString()]=s,s}class Qk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ck(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new It(this._repo,j())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Gk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&jt("Cannot call "+e+" on a deleted database.")}}function qk(t=gg(),e){const n=Kc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=yw("database");r&&Yk(n,...r)}return n}function Yk(t,e,n,r={}){t=Le(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&jt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&jt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Ar(Ar.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Ew(r.mockUserToken,t.app.options.projectId);s=new Ar(o)}Hk(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xk(t){$C(vs),Br(new Qn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return $k(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),gn(mf,gf,t),gn(mf,gf,"esm2017")}Lt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Lt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Xk();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Sr=function(){return Sr=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Sr.apply(this,arguments)},Tv=function(t){return{loading:t==null,value:t}},Jk=function(){return function(t,e){switch(e.type){case"error":return Sr(Sr({},t),{error:e.error,loading:!1,value:void 0});case"reset":return Tv(e.defaultValue);case"value":return Sr(Sr({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},Zk=function(t){var e=t?t():void 0,n=O.useReducer(Jk(),Tv(e)),r=n[0],i=n[1],s=O.useCallback(function(){var a=t?t():void 0;i({type:"reset",defaultValue:a})},[t]),o=O.useCallback(function(a){i({type:"error",error:a})},[]),l=O.useCallback(function(a){i({type:"value",value:a})},[]);return O.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:l,value:r.value}},[r.error,r.loading,s,o,l,r.value])},eT=function(t,e,n){var r=O.useRef(t);return O.useEffect(function(){e(t,r.current)||(r.current=t,n&&n())}),r},tT=function(t,e){var n=!t&&!e,r=!!t&&!!e&&t.isEqual(e);return n||r},Nv=function(t,e){return eT(t,tT,e)};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var fe=function(){return fe=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},fe.apply(this,arguments)};function Pe(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var Rv={loading:!0,value:{keys:[],values:[]}},nT=function(t,e){switch(e.type){case"add":return e.snapshot?fe(fe({},t),{error:void 0,value:xv(t.value,e.snapshot,e.previousKey)}):t;case"change":return e.snapshot?fe(fe({},t),{error:void 0,value:iT(t.value,e.snapshot)}):t;case"error":return fe(fe({},t),{error:e.error,loading:!1,value:{keys:void 0,values:void 0}});case"move":return e.snapshot?fe(fe({},t),{error:void 0,value:sT(t.value,e.snapshot,e.previousKey)}):t;case"remove":return e.snapshot?fe(fe({},t),{error:void 0,value:Pv(t.value,e.snapshot)}):t;case"reset":return Rv;case"value":return fe(fe({},t),{error:void 0,loading:!1,value:rT(e.snapshots)});case"empty":return fe(fe({},t),{loading:!1,value:{keys:void 0,values:void 0}});default:return t}},rT=function(t){if(!t)return{keys:[],values:[]};var e=[],n=[];return t.forEach(function(r){r.key&&(e.push(r.key),n.push(r))}),{keys:e,values:n}},xv=function(t,e,n){if(!e.key)return t;var r=t.keys,i=t.values;if(!n)return{keys:r?Pe([e.key],r,!0):[e.key],values:i?Pe([e],i,!0):[e]};var s=r?r.indexOf(n):0;return{keys:r?Pe(Pe(Pe([],r.slice(0,s+1),!0),[e.key],!1),r.slice(s+1),!0):[e.key],values:i?Pe(Pe(Pe([],i.slice(0,s+1),!0),[e],!1),i.slice(s+1),!0):[e]}},iT=function(t,e){if(!e.key)return t;var n=t.keys,r=t.values,i=n?n.indexOf(e.key):0;return fe(fe({},t),{values:r?Pe(Pe(Pe([],r.slice(0,i),!0),[e],!1),r.slice(i+1),!0):[e]})},Pv=function(t,e){if(!e.key)return t;var n=t.keys,r=t.values,i=n?n.indexOf(e.key):0;return{keys:n?Pe(Pe([],n.slice(0,i),!0),n.slice(i+1),!0):[],values:r?Pe(Pe([],r.slice(0,i),!0),r.slice(i+1),!0):[]}},sT=function(t,e,n){var r=Pv(t,e);return xv(r,e,n)},oT=function(){return O.useReducer(nT,Rv)},to=function(t){var e=oT(),n=e[0],r=e[1],i=Nv(t,function(){return r({type:"reset"})}),s=i.current;return O.useEffect(function(){if(!s){r({type:"empty"});return}var o=function(p,f){r({type:"add",previousKey:f,snapshot:p})},l=function(p){r({type:"change",snapshot:p})},a=function(p,f){r({type:"move",previousKey:f,snapshot:p})},u=function(p){r({type:"remove",snapshot:p})},d=function(p){r({type:"error",error:p})},c=function(p){r({type:"value",snapshots:p})},h,g=function(p){var f=p.val(),m=f?Object.keys(p.val()).length:0;if(m===0)h=qf(s,o,d),c([]);else{var y=[],S=function(k,I){if(m>0){m--,y.push(k),m===0&&c(y);return}o(k,I)};h=qf(s,S,d)}};kv(s,g,d,{onlyOnce:!0});var _=zk(s,l,d),v=Wk(s,a,d),x=jk(s,u,d);return function(){Ci(s,"child_added",h),Ci(s,"child_changed",_),Ci(s,"child_moved",v),Ci(s,"child_removed",x)}},[r,s]),[n.value.values,n.loading,n.error]},Pa=function(t){var e=Zk(),n=e.error,r=e.loading,i=e.reset,s=e.setError,o=e.setValue,l=e.value,a=Nv(t,i);return O.useEffect(function(){var u=a.current;if(!u){o(void 0);return}return kv(u,o,s),function(){Ci(u,"value",o)}},[a.current]),[l,r,n]};function lT(t){return ee("div",{className:"space-y-8",children:[C("div",{className:"text-4xl text-center select-none",children:"RPS!"}),C("div",{className:"",children:ee("div",{className:"flex flex-col lg:w-[20vh] items-center space-y-4 justify-center select-none ",children:[C("div",{className:"lg:h-[15vh] w-full bg-blue-400  hover:bg-blue-300 text-4xl transition-all flex items-center justify-center rounded-lg p-4",onClick:()=>{t.setScreen(1)},children:C("h1",{className:"m-auto",children:"Play"})}),C("div",{className:" w-full bg-red-400  hover:bg-red-300 text-4xl transition-all flex items-center justify-center rounded-lg p-4",onClick:()=>{t.setScreen(2)},children:C("h1",{className:"m-auto",children:"Friends"})}),C("div",{className:" w-full bg-green-500  hover:bg-green-400 text-4xl transition-all flex items-center justify-center rounded-lg p-4",onClick:()=>{t.setScreen(3)},children:C("h1",{className:"m-auto",children:"Options"})})]})})]})}function aT(t){return ee("div",{className:"",children:[C("div",{className:"text-4xl text-center select-none mb-4 lg:mb-10",children:"Play a Game"}),ee("div",{className:"flex flex-col lg:flex-row max-lg:space-y-2 items-center lg:space-x-4 justify-center select-none",children:[C("div",{className:"h-[20vh] w-[30vh] lg:h-[30vh] bg-blue-400  hover:bg-blue-300 text-3xl hover:text-4xl transition-all flex items-center justify-center rounded-lg",onClick:()=>{t.joinQueue()},children:C("h1",{className:"m-auto",children:"Casual"})}),C("div",{className:"h-[20vh] w-[30vh] lg:h-[30vh] bg-red-400  hover:bg-red-300 text-3xl hover:text-4xl transition-all flex items-center justify-center rounded-lg",children:C("h1",{className:"m-auto",children:"Ranked"})}),C("div",{className:"h-[20vh] w-[30vh] lg:h-[30vh] bg-green-500  hover:bg-green-400 text-3xl hover:text-4xl transition-all flex items-center justify-center rounded-lg",children:C("h1",{className:"m-auto",children:"VS AI"})}),C("div",{className:"h-[10vh] w-[30vh] lg:h-[15vh] bg-purple-600  hover:bg-purple-500 text-3xl hover:text-4xl transition-all flex items-center justify-center rounded-lg",onClick:()=>{t.setScreen(0)},children:C("h1",{className:"m-auto",children:"Back"})})]})]})}function uT(t){const e=qk(t.app),[n,r]=O.useState(0),[i,s]=O.useState(!1),[o,l]=O.useState(!1),[a,u]=O.useState(""),[d,c]=O.useState(""),[h,g]=O.useState(!0),[_,v]=O.useState(0),[x,p]=O.useState(0),[f,m]=O.useState(""),[y,S]=O.useState(!1),[k,I]=O.useState(!1),[R,B]=O.useState(0),[L,Se]=O.useState(""),[xn,Ht]=O.useState(!0),[$t,Dd,As]=Pa(be(e,"queue/"+t.user.uid));function ri(){or(be(e,"queue/"+t.user.uid),{uid:t.user.uid,name:t.user.displayName,email:t.user.email,photourl:t.user.photoURL}),s(!0)}function T(){or(be(e,"queue/"+t.user.uid),null),s(!1)}function D(){Ht(!1),I(!1),g(!0),S(!1)}function M(){or(be(e,"lobbies/"+a),null),l(!1),u(null),c(null),g(!0),v(0),p(0),m(""),S(!1),I(!1)}function Q(le){const rr=be(e,"lobbies/"+a+"/moves/player"+_);m(le),Fk(rr,le),or(be(e,"lobbies/"+a+"/ready/player"+_),!0),g(!1),S(!0)}const[Z,ii,Gt]=to(be(e,"lobbies/")),[si,Kt,oi]=to(be(e,"queue/")),[Ds,Av,hT]=Pa(be(e,"lobbies/"+a+"/ready/player"+_)),[Ms,Dv,fT]=Pa(be(e,"lobbies/"+a+"/ready/player"+x)),[Vl,Mv,pT]=to(be(e,"lobbies/"+a+"/moves/player"+_)),[$e,Lv,mT]=to(be(e,"lobbies/"+a+"/moves/player"+x));return O.useEffect(()=>{Z&&Z.forEach(le=>{le.val().player1.uid===t.user.uid?(s(!1),l(!0),c(le.val().player2.name),u(le.key),v(1),p(2),le.val().player2.photourl?Se(le.val().player2.photourl):Se("https://i.stack.imgur.com/34AD2.jpg")):le.val().player2.uid===t.user.uid&&(s(!1),l(!0),c(le.val().player1.name),u(le.key),v(2),p(1),le.val().player1.photourl?Se(le.val().player1.photourl):Se("https://i.stack.imgur.com/34AD2.jpg"))})},[Z]),O.useEffect(()=>{$t!=null&&$t.val()&&$t.val().uid===t.user.uid?s(!0):s(!1)},[si,$t]),O.useEffect(()=>{a&&Uk(be(e,"lobbies/"+a)).then(le=>{le.exists()||(l(!1),u(null),c(null),g(!0),v(0),p(0),m(""),S(!1),I(!1))})},[Z]),O.useEffect(()=>{Ds!=null&&Ds.val()&&(Ms!=null&&Ms.val())&&Vl&&$e&&(console.log("Opponent's Moves: ",$e),setTimeout(()=>{let le=Vl[Vl.length-1],rr=$e[$e.length-1];le.val()==="rock"&&rr.val()==="scissors"||le.val()==="scissors"&&rr.val()==="paper"||le.val()==="paper"&&rr.val()==="rock"?B(1):le.val()===rr.val()?B(0):B(2),I(!0)},1e3),setTimeout(()=>{or(be(e,"lobbies/"+a+"/ready/player"+_),!1)},2e3),Ht(!0))},[Ds,Ms,Mv,Lv,Av,Dv]),i&&!o?ee("div",{children:[C("h1",{children:"Waiting for other players..."}),C("button",{className:"m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all",onClick:()=>T(),children:"Leave Queue"})]}):!i&&o?ee("div",{className:"h-[90vh]",children:[C("h1",{className:"text-center text-xl",children:"In Game"}),ee("div",{className:"p-4 flex flex-col w-screen items-center justify-center",children:[C("section",{children:C("div",{className:"flex flex-row justify-center",children:ee("div",{className:"flex flex-col items-center",children:[C("h1",{children:"Opponent"}),C("h2",{children:d}),C("img",{src:L,alt:"Opponent",className:"rounded-full"})]})})}),C("section",{children:C("div",{className:"flex flex-row justify-center",children:ee("div",{className:"flex flex-col items-center",children:[C("h1",{children:"Controls"}),C("div",{children:h?ee(Nt,{children:[C("button",{className:"m-4 bg-yellow-900 hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded transition-all",onClick:()=>{Q("rock")},children:"Rock"}),C("button",{className:"m-4 bg-gray-100 hover:bg-gray-300 text-black font-medium py-2 px-4 rounded transition-all",onClick:()=>{Q("paper")},children:"Paper"}),C("button",{className:"m-4 bg-pink-400 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded transition-all",onClick:()=>{Q("scissors")},children:"Scissors"})]}):C("h1",{children:"Waiting for opponent..."})}),C("div",{children:C("button",{className:"m-4 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-all",onClick:()=>M(),children:"Leave Game"})}),ee("div",{children:[y?C("h1",{className:"text-4xl",children:f}):C("h1",{className:"text-4xl",children:"Select a move"}),k?ee(Nt,{children:[R===1?ee(Nt,{children:["Opponent's Move:"," ",C("h1",{className:"text-4xl text-green-400",children:$e?$e[$e.length-1].val():"hello"}),C("h1",{className:"text-4xl text-green-400",children:"You win! "})]}):R===2?ee(Nt,{children:["Opponent's Move:"," ",C("h1",{className:"text-4xl text-red-500",children:$e?$e[$e.length-1].val():"hello"}),C("h1",{className:"text-4xl text-red-500",children:"You lose!"})]}):ee(Nt,{children:["Opponent's Move:"," ",C("h1",{className:"text-4xl text-orange-500",children:$e?$e[$e.length-1].val():"hello"}),C("h1",{className:"text-4xl text-orange-500",children:"Draw!"})]}),xn&&C("button",{className:"m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all",onClick:()=>{D()},children:"Ready"})]}):null]})]})})})]})]}):C("div",{children:n===0?C(lT,{setScreen:r}):n===1?C(aT,{setScreen:r,joinQueue:ri}):n===2?ee("div",{children:[C("h1",{className:"text-4xl text-center select-none mb-4 lg:mb-10",children:"Friends"}),C("div",{className:"h-[10vh] w-[30vh] lg:h-[15vh] bg-purple-600  hover:bg-purple-500 text-3xl hover:text-4xl transition-all flex items-center justify-center rounded-lg",onClick:()=>{r(0)},children:C("h1",{className:"m-auto",children:"Back"})})]}):n===3?ee("div",{children:[C("h1",{className:"text-4xl text-center select-none mb-4 lg:mb-10",children:"Options"}),C("div",{className:"h-[10vh] w-[30vh] lg:h-[15vh] bg-purple-600  hover:bg-purple-500 text-3xl hover:text-4xl transition-all flex items-center justify-center rounded-lg",onClick:()=>{r(0)},children:C("h1",{className:"m-auto",children:"Back"})})]}):null})}const cT={apiKey:"AIzaSyDhWYptjj88s1qre32DwsUhBARM0D5ZkN8",authDomain:"fir-test-e003d.firebaseapp.com",databaseURL:"https://fir-test-e003d-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"fir-test-e003d",storageBucket:"fir-test-e003d.appspot.com",messagingSenderId:"1002363761303",appId:"1:1002363761303:web:4e9e04e3cbd48b10e02fd2",measurementId:"G-WDEJ45ZHK8"},Ov=mg(cT),no=e_(Ov);function dT(){const[t,e,n]=BC(no),[r,i]=O.useState(""),[s,o]=O.useState(!1),[l,a,u]=VC(no);return O.useEffect(()=>{Wg(no,c=>{console.log(c?"User is signed in.":"No user is signed in.")})},[t]),ee("div",{className:"App",children:[C(HC,{user:t,auth:no,loadingUser:e,setInputName:o}),C("div",{className:"h-[90vh] flex flex-col items-center justify-center",children:C("section",{children:t&&!s?C(uT,{user:t,app:Ov}):e&&!s?C(Nt,{children:"Loading Account..."}):s?ee(Nt,{children:[C("div",{children:"Set a Name"}),C("input",{type:"text",onChange:c=>i(c.target.value),onKeyDown:c=>{if(c.key==="Enter"){if(r==="")return;l({displayName:r}),o(!1)}},className:"bg-white text-black"}),C("button",{className:"m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all",onClick:()=>{l({displayName:r}),o(!1)},children:"Submit"})]}):C(Nt,{children:"Login to Play!"})})})]})}Oa.createRoot(document.getElementById("root")).render(C(ey.StrictMode,{children:C(dT,{})}));
