(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ov(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ui={},Av={get exports(){return Ui},set exports(t){Ui=t}},cl={},D={},Dv={get exports(){return D},set exports(t){D=t}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hs=Symbol.for("react.element"),Mv=Symbol.for("react.portal"),Lv=Symbol.for("react.fragment"),bv=Symbol.for("react.strict_mode"),Fv=Symbol.for("react.profiler"),Uv=Symbol.for("react.provider"),zv=Symbol.for("react.context"),Wv=Symbol.for("react.forward_ref"),Bv=Symbol.for("react.suspense"),jv=Symbol.for("react.memo"),Vv=Symbol.for("react.lazy"),xd=Symbol.iterator;function Hv(t){return t===null||typeof t!="object"?null:(t=xd&&t[xd]||t["@@iterator"],typeof t=="function"?t:null)}var Kf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qf=Object.assign,qf={};function Xr(t,e,n){this.props=t,this.context=e,this.refs=qf,this.updater=n||Kf}Xr.prototype.isReactComponent={};Xr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Yf(){}Yf.prototype=Xr.prototype;function Hu(t,e,n){this.props=t,this.context=e,this.refs=qf,this.updater=n||Kf}var $u=Hu.prototype=new Yf;$u.constructor=Hu;Qf($u,Xr.prototype);$u.isPureReactComponent=!0;var Od=Array.isArray,Xf=Object.prototype.hasOwnProperty,Gu={current:null},Jf={key:!0,ref:!0,__self:!0,__source:!0};function Zf(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Xf.call(e,r)&&!Jf.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:hs,type:t,key:s,ref:o,props:i,_owner:Gu.current}}function $v(t,e){return{$$typeof:hs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ku(t){return typeof t=="object"&&t!==null&&t.$$typeof===hs}function Gv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ad=/\/+/g;function Bl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Gv(""+t.key):e.toString(36)}function to(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case hs:case Mv:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Bl(o,0):r,Od(i)?(n="",t!=null&&(n=t.replace(Ad,"$&/")+"/"),to(i,e,n,"",function(u){return u})):i!=null&&(Ku(i)&&(i=$v(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ad,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Od(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Bl(s,l);o+=to(s,e,n,a,i)}else if(a=Hv(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Bl(s,l++),o+=to(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ms(t,e,n){if(t==null)return t;var r=[],i=0;return to(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Kv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ae={current:null},no={transition:null},Qv={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:no,ReactCurrentOwner:Gu};z.Children={map:Ms,forEach:function(t,e,n){Ms(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ms(t,function(){e++}),e},toArray:function(t){return Ms(t,function(e){return e})||[]},only:function(t){if(!Ku(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Component=Xr;z.Fragment=Lv;z.Profiler=Fv;z.PureComponent=Hu;z.StrictMode=bv;z.Suspense=Bv;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qv;z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Qf({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Gu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Xf.call(e,a)&&!Jf.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:hs,type:t.type,key:i,ref:s,props:r,_owner:o}};z.createContext=function(t){return t={$$typeof:zv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Uv,_context:t},t.Consumer=t};z.createElement=Zf;z.createFactory=function(t){var e=Zf.bind(null,t);return e.type=t,e};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:Wv,render:t}};z.isValidElement=Ku;z.lazy=function(t){return{$$typeof:Vv,_payload:{_status:-1,_result:t},_init:Kv}};z.memo=function(t,e){return{$$typeof:jv,type:t,compare:e===void 0?null:e}};z.startTransition=function(t){var e=no.transition;no.transition={};try{t()}finally{no.transition=e}};z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};z.useCallback=function(t,e){return Ae.current.useCallback(t,e)};z.useContext=function(t){return Ae.current.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t){return Ae.current.useDeferredValue(t)};z.useEffect=function(t,e){return Ae.current.useEffect(t,e)};z.useId=function(){return Ae.current.useId()};z.useImperativeHandle=function(t,e,n){return Ae.current.useImperativeHandle(t,e,n)};z.useInsertionEffect=function(t,e){return Ae.current.useInsertionEffect(t,e)};z.useLayoutEffect=function(t,e){return Ae.current.useLayoutEffect(t,e)};z.useMemo=function(t,e){return Ae.current.useMemo(t,e)};z.useReducer=function(t,e,n){return Ae.current.useReducer(t,e,n)};z.useRef=function(t){return Ae.current.useRef(t)};z.useState=function(t){return Ae.current.useState(t)};z.useSyncExternalStore=function(t,e,n){return Ae.current.useSyncExternalStore(t,e,n)};z.useTransition=function(){return Ae.current.useTransition()};z.version="18.2.0";(function(t){t.exports=z})(Dv);const qv=Ov(D);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yv=D,Xv=Symbol.for("react.element"),Jv=Symbol.for("react.fragment"),Zv=Object.prototype.hasOwnProperty,ey=Yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ty={key:!0,ref:!0,__self:!0,__source:!0};function ep(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Zv.call(e,r)&&!ty.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Xv,type:t,key:s,ref:o,props:i,_owner:ey.current}}cl.Fragment=Jv;cl.jsx=ep;cl.jsxs=ep;(function(t){t.exports=cl})(Av);const Rt=Ui.Fragment,O=Ui.jsx,ye=Ui.jsxs;var Ra={},Pa={},ny={get exports(){return Pa},set exports(t){Pa=t}},qe={},xa={},ry={get exports(){return xa},set exports(t){xa=t}},tp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(T,x){var M=T.length;T.push(x);e:for(;0<M;){var re=M-1>>>1,Z=T[re];if(0<i(Z,x))T[re]=x,T[M]=Z,M=re;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var x=T[0],M=T.pop();if(M!==x){T[0]=M;e:for(var re=0,Z=T.length,sr=Z>>>1;re<sr;){var Gt=2*(re+1)-1,On=T[Gt],kt=Gt+1,oi=T[kt];if(0>i(On,M))kt<Z&&0>i(oi,On)?(T[re]=oi,T[kt]=M,re=kt):(T[re]=On,T[Gt]=M,re=Gt);else if(kt<Z&&0>i(oi,M))T[re]=oi,T[kt]=M,re=kt;else break e}}return x}function i(T,x){var M=T.sortIndex-x.sortIndex;return M!==0?M:T.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,g=!1,_=!1,v=!1,R=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(T){for(var x=n(u);x!==null;){if(x.callback===null)r(u);else if(x.startTime<=T)r(u),x.sortIndex=x.expirationTime,e(a,x);else break;x=n(u)}}function y(T){if(v=!1,m(T),!_)if(n(a)!==null)_=!0,$t(S);else{var x=n(u);x!==null&&Ds(y,x.startTime-T)}}function S(T,x){_=!1,v&&(v=!1,p(N),N=-1),g=!0;var M=h;try{for(m(x),c=n(a);c!==null&&(!(c.expirationTime>x)||T&&!Le());){var re=c.callback;if(typeof re=="function"){c.callback=null,h=c.priorityLevel;var Z=re(c.expirationTime<=x);x=t.unstable_now(),typeof Z=="function"?c.callback=Z:c===n(a)&&r(a),m(x)}else r(a);c=n(a)}if(c!==null)var sr=!0;else{var Gt=n(u);Gt!==null&&Ds(y,Gt.startTime-x),sr=!1}return sr}finally{c=null,h=M,g=!1}}var I=!1,C=null,N=-1,V=5,L=-1;function Le(){return!(t.unstable_now()-L<V)}function Pn(){if(C!==null){var T=t.unstable_now();L=T;var x=!0;try{x=C(!0,T)}finally{x?xn():(I=!1,C=null)}}else I=!1}var xn;if(typeof f=="function")xn=function(){f(Pn)};else if(typeof MessageChannel<"u"){var As=new MessageChannel,si=As.port2;As.port1.onmessage=Pn,xn=function(){si.postMessage(null)}}else xn=function(){R(Pn,0)};function $t(T){C=T,I||(I=!0,xn())}function Ds(T,x){N=R(function(){T(t.unstable_now())},x)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(T){T.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,$t(S))},t.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<T?Math.floor(1e3/T):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(T){switch(h){case 1:case 2:case 3:var x=3;break;default:x=h}var M=h;h=x;try{return T()}finally{h=M}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(T,x){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var M=h;h=T;try{return x()}finally{h=M}},t.unstable_scheduleCallback=function(T,x,M){var re=t.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?re+M:re):M=re,T){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=M+Z,T={id:d++,callback:x,priorityLevel:T,startTime:M,expirationTime:Z,sortIndex:-1},M>re?(T.sortIndex=M,e(u,T),n(a)===null&&T===n(u)&&(v?(p(N),N=-1):v=!0,Ds(y,M-re))):(T.sortIndex=Z,e(a,T),_||g||(_=!0,$t(S))),T},t.unstable_shouldYield=Le,t.unstable_wrapCallback=function(T){var x=h;return function(){var M=h;h=x;try{return T.apply(this,arguments)}finally{h=M}}}})(tp);(function(t){t.exports=tp})(ry);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var np=D,Qe=xa;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rp=new Set,zi={};function nr(t,e){br(t,e),br(t+"Capture",e)}function br(t,e){for(zi[t]=e,t=0;t<e.length;t++)rp.add(e[t])}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oa=Object.prototype.hasOwnProperty,iy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dd={},Md={};function sy(t){return Oa.call(Md,t)?!0:Oa.call(Dd,t)?!1:iy.test(t)?Md[t]=!0:(Dd[t]=!0,!1)}function oy(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ly(t,e,n,r){if(e===null||typeof e>"u"||oy(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function De(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ee[t]=new De(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ee[e]=new De(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ee[t]=new De(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ee[t]=new De(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ee[t]=new De(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ee[t]=new De(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ee[t]=new De(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ee[t]=new De(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ee[t]=new De(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qu=/[\-:]([a-z])/g;function qu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qu,qu);Ee[e]=new De(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qu,qu);Ee[e]=new De(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qu,qu);Ee[e]=new De(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ee[t]=new De(t,1,!1,t.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ee[t]=new De(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yu(t,e,n,r){var i=Ee.hasOwnProperty(e)?Ee[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ly(e,n,i,r)&&(n=null),r||i===null?sy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Vt=np.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ls=Symbol.for("react.element"),ur=Symbol.for("react.portal"),cr=Symbol.for("react.fragment"),Xu=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),ip=Symbol.for("react.provider"),sp=Symbol.for("react.context"),Ju=Symbol.for("react.forward_ref"),Da=Symbol.for("react.suspense"),Ma=Symbol.for("react.suspense_list"),Zu=Symbol.for("react.memo"),Yt=Symbol.for("react.lazy"),op=Symbol.for("react.offscreen"),Ld=Symbol.iterator;function li(t){return t===null||typeof t!="object"?null:(t=Ld&&t[Ld]||t["@@iterator"],typeof t=="function"?t:null)}var ne=Object.assign,jl;function yi(t){if(jl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);jl=e&&e[1]||""}return`
`+jl+t}var Vl=!1;function Hl(t,e){if(!t||Vl)return"";Vl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Vl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?yi(t):""}function ay(t){switch(t.tag){case 5:return yi(t.type);case 16:return yi("Lazy");case 13:return yi("Suspense");case 19:return yi("SuspenseList");case 0:case 2:case 15:return t=Hl(t.type,!1),t;case 11:return t=Hl(t.type.render,!1),t;case 1:return t=Hl(t.type,!0),t;default:return""}}function La(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case cr:return"Fragment";case ur:return"Portal";case Aa:return"Profiler";case Xu:return"StrictMode";case Da:return"Suspense";case Ma:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sp:return(t.displayName||"Context")+".Consumer";case ip:return(t._context.displayName||"Context")+".Provider";case Ju:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zu:return e=t.displayName||null,e!==null?e:La(t.type)||"Memo";case Yt:e=t._payload,t=t._init;try{return La(t(e))}catch{}}return null}function uy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return La(e);case 8:return e===Xu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function cy(t){var e=lp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function bs(t){t._valueTracker||(t._valueTracker=cy(t))}function ap(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=lp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function vo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ba(t,e){var n=e.checked;return ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=yn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function up(t,e){e=e.checked,e!=null&&Yu(t,"checked",e,!1)}function Fa(t,e){up(t,e);var n=yn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ua(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ua(t,e.type,yn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ua(t,e,n){(e!=="number"||vo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var wi=Array.isArray;function kr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+yn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function za(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ud(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(wi(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yn(n)}}function cp(t,e){var n=yn(e.value),r=yn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function zd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function dp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wa(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?dp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fs,hp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Fs=Fs||document.createElement("div"),Fs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dy=["Webkit","ms","Moz","O"];Object.keys(Ii).forEach(function(t){dy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ii[e]=Ii[t]})});function fp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ii.hasOwnProperty(t)&&Ii[t]?(""+e).trim():e+"px"}function pp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=fp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var hy=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ba(t,e){if(e){if(hy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function ja(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Va=null;function ec(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ha=null,Tr=null,Nr=null;function Wd(t){if(t=ms(t)){if(typeof Ha!="function")throw Error(w(280));var e=t.stateNode;e&&(e=ml(e),Ha(t.stateNode,t.type,e))}}function mp(t){Tr?Nr?Nr.push(t):Nr=[t]:Tr=t}function gp(){if(Tr){var t=Tr,e=Nr;if(Nr=Tr=null,Wd(t),e)for(t=0;t<e.length;t++)Wd(e[t])}}function _p(t,e){return t(e)}function vp(){}var $l=!1;function yp(t,e,n){if($l)return t(e,n);$l=!0;try{return _p(t,e,n)}finally{$l=!1,(Tr!==null||Nr!==null)&&(vp(),gp())}}function Bi(t,e){var n=t.stateNode;if(n===null)return null;var r=ml(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var $a=!1;if(Ft)try{var ai={};Object.defineProperty(ai,"passive",{get:function(){$a=!0}}),window.addEventListener("test",ai,ai),window.removeEventListener("test",ai,ai)}catch{$a=!1}function fy(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var ki=!1,yo=null,wo=!1,Ga=null,py={onError:function(t){ki=!0,yo=t}};function my(t,e,n,r,i,s,o,l,a){ki=!1,yo=null,fy.apply(py,arguments)}function gy(t,e,n,r,i,s,o,l,a){if(my.apply(this,arguments),ki){if(ki){var u=yo;ki=!1,yo=null}else throw Error(w(198));wo||(wo=!0,Ga=u)}}function rr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function wp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bd(t){if(rr(t)!==t)throw Error(w(188))}function _y(t){var e=t.alternate;if(!e){if(e=rr(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Bd(i),t;if(s===r)return Bd(i),e;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function Ep(t){return t=_y(t),t!==null?Sp(t):null}function Sp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Sp(t);if(e!==null)return e;t=t.sibling}return null}var Cp=Qe.unstable_scheduleCallback,jd=Qe.unstable_cancelCallback,vy=Qe.unstable_shouldYield,yy=Qe.unstable_requestPaint,oe=Qe.unstable_now,wy=Qe.unstable_getCurrentPriorityLevel,tc=Qe.unstable_ImmediatePriority,Ip=Qe.unstable_UserBlockingPriority,Eo=Qe.unstable_NormalPriority,Ey=Qe.unstable_LowPriority,kp=Qe.unstable_IdlePriority,dl=null,vt=null;function Sy(t){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(dl,t,void 0,(t.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:ky,Cy=Math.log,Iy=Math.LN2;function ky(t){return t>>>=0,t===0?32:31-(Cy(t)/Iy|0)|0}var Us=64,zs=4194304;function Ei(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function So(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ei(l):(s&=o,s!==0&&(r=Ei(s)))}else o=n&~i,o!==0?r=Ei(o):s!==0&&(r=Ei(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-dt(e),i=1<<n,r|=t[n],e&=~i;return r}function Ty(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ny(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-dt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Ty(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Ka(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Tp(){var t=Us;return Us<<=1,!(Us&4194240)&&(Us=64),t}function Gl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-dt(e),t[e]=n}function Ry(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-dt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function nc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-dt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var j=0;function Np(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Rp,rc,Pp,xp,Op,Qa=!1,Ws=[],on=null,ln=null,an=null,ji=new Map,Vi=new Map,Jt=[],Py="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vd(t,e){switch(t){case"focusin":case"focusout":on=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":an=null;break;case"pointerover":case"pointerout":ji.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vi.delete(e.pointerId)}}function ui(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ms(e),e!==null&&rc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function xy(t,e,n,r,i){switch(e){case"focusin":return on=ui(on,t,e,n,r,i),!0;case"dragenter":return ln=ui(ln,t,e,n,r,i),!0;case"mouseover":return an=ui(an,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ji.set(s,ui(ji.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Vi.set(s,ui(Vi.get(s)||null,t,e,n,r,i)),!0}return!1}function Ap(t){var e=bn(t.target);if(e!==null){var n=rr(e);if(n!==null){if(e=n.tag,e===13){if(e=wp(n),e!==null){t.blockedOn=e,Op(t.priority,function(){Pp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ro(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qa(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Va=r,n.target.dispatchEvent(r),Va=null}else return e=ms(n),e!==null&&rc(e),t.blockedOn=n,!1;e.shift()}return!0}function Hd(t,e,n){ro(t)&&n.delete(e)}function Oy(){Qa=!1,on!==null&&ro(on)&&(on=null),ln!==null&&ro(ln)&&(ln=null),an!==null&&ro(an)&&(an=null),ji.forEach(Hd),Vi.forEach(Hd)}function ci(t,e){t.blockedOn===e&&(t.blockedOn=null,Qa||(Qa=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,Oy)))}function Hi(t){function e(i){return ci(i,t)}if(0<Ws.length){ci(Ws[0],t);for(var n=1;n<Ws.length;n++){var r=Ws[n];r.blockedOn===t&&(r.blockedOn=null)}}for(on!==null&&ci(on,t),ln!==null&&ci(ln,t),an!==null&&ci(an,t),ji.forEach(e),Vi.forEach(e),n=0;n<Jt.length;n++)r=Jt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Jt.length&&(n=Jt[0],n.blockedOn===null);)Ap(n),n.blockedOn===null&&Jt.shift()}var Rr=Vt.ReactCurrentBatchConfig,Co=!0;function Ay(t,e,n,r){var i=j,s=Rr.transition;Rr.transition=null;try{j=1,ic(t,e,n,r)}finally{j=i,Rr.transition=s}}function Dy(t,e,n,r){var i=j,s=Rr.transition;Rr.transition=null;try{j=4,ic(t,e,n,r)}finally{j=i,Rr.transition=s}}function ic(t,e,n,r){if(Co){var i=qa(t,e,n,r);if(i===null)na(t,e,r,Io,n),Vd(t,r);else if(xy(i,t,e,n,r))r.stopPropagation();else if(Vd(t,r),e&4&&-1<Py.indexOf(t)){for(;i!==null;){var s=ms(i);if(s!==null&&Rp(s),s=qa(t,e,n,r),s===null&&na(t,e,r,Io,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else na(t,e,r,null,n)}}var Io=null;function qa(t,e,n,r){if(Io=null,t=ec(r),t=bn(t),t!==null)if(e=rr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=wp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Io=t,null}function Dp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wy()){case tc:return 1;case Ip:return 4;case Eo:case Ey:return 16;case kp:return 536870912;default:return 16}default:return 16}}var rn=null,sc=null,io=null;function Mp(){if(io)return io;var t,e=sc,n=e.length,r,i="value"in rn?rn.value:rn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return io=i.slice(t,1<r?1-r:void 0)}function so(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Bs(){return!0}function $d(){return!1}function Ye(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Bs:$d,this.isPropagationStopped=$d,this}return ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bs)},persist:function(){},isPersistent:Bs}),e}var Jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oc=Ye(Jr),ps=ne({},Jr,{view:0,detail:0}),My=Ye(ps),Kl,Ql,di,hl=ne({},ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==di&&(di&&t.type==="mousemove"?(Kl=t.screenX-di.screenX,Ql=t.screenY-di.screenY):Ql=Kl=0,di=t),Kl)},movementY:function(t){return"movementY"in t?t.movementY:Ql}}),Gd=Ye(hl),Ly=ne({},hl,{dataTransfer:0}),by=Ye(Ly),Fy=ne({},ps,{relatedTarget:0}),ql=Ye(Fy),Uy=ne({},Jr,{animationName:0,elapsedTime:0,pseudoElement:0}),zy=Ye(Uy),Wy=ne({},Jr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),By=Ye(Wy),jy=ne({},Jr,{data:0}),Kd=Ye(jy),Vy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$y={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$y[t])?!!e[t]:!1}function lc(){return Gy}var Ky=ne({},ps,{key:function(t){if(t.key){var e=Vy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=so(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Hy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lc,charCode:function(t){return t.type==="keypress"?so(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?so(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Qy=Ye(Ky),qy=ne({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qd=Ye(qy),Yy=ne({},ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lc}),Xy=Ye(Yy),Jy=ne({},Jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zy=Ye(Jy),e0=ne({},hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),t0=Ye(e0),n0=[9,13,27,32],ac=Ft&&"CompositionEvent"in window,Ti=null;Ft&&"documentMode"in document&&(Ti=document.documentMode);var r0=Ft&&"TextEvent"in window&&!Ti,Lp=Ft&&(!ac||Ti&&8<Ti&&11>=Ti),qd=String.fromCharCode(32),Yd=!1;function bp(t,e){switch(t){case"keyup":return n0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var dr=!1;function i0(t,e){switch(t){case"compositionend":return Fp(e);case"keypress":return e.which!==32?null:(Yd=!0,qd);case"textInput":return t=e.data,t===qd&&Yd?null:t;default:return null}}function s0(t,e){if(dr)return t==="compositionend"||!ac&&bp(t,e)?(t=Mp(),io=sc=rn=null,dr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Lp&&e.locale!=="ko"?null:e.data;default:return null}}var o0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!o0[t.type]:e==="textarea"}function Up(t,e,n,r){mp(r),e=ko(e,"onChange"),0<e.length&&(n=new oc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ni=null,$i=null;function l0(t){qp(t,0)}function fl(t){var e=pr(t);if(ap(e))return t}function a0(t,e){if(t==="change")return e}var zp=!1;if(Ft){var Yl;if(Ft){var Xl="oninput"in document;if(!Xl){var Jd=document.createElement("div");Jd.setAttribute("oninput","return;"),Xl=typeof Jd.oninput=="function"}Yl=Xl}else Yl=!1;zp=Yl&&(!document.documentMode||9<document.documentMode)}function Zd(){Ni&&(Ni.detachEvent("onpropertychange",Wp),$i=Ni=null)}function Wp(t){if(t.propertyName==="value"&&fl($i)){var e=[];Up(e,$i,t,ec(t)),yp(l0,e)}}function u0(t,e,n){t==="focusin"?(Zd(),Ni=e,$i=n,Ni.attachEvent("onpropertychange",Wp)):t==="focusout"&&Zd()}function c0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fl($i)}function d0(t,e){if(t==="click")return fl(e)}function h0(t,e){if(t==="input"||t==="change")return fl(e)}function f0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pt=typeof Object.is=="function"?Object.is:f0;function Gi(t,e){if(pt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oa.call(e,i)||!pt(t[i],e[i]))return!1}return!0}function eh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function th(t,e){var n=eh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=eh(n)}}function Bp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Bp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function jp(){for(var t=window,e=vo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vo(t.document)}return e}function uc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function p0(t){var e=jp(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Bp(n.ownerDocument.documentElement,n)){if(r!==null&&uc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=th(n,s);var o=th(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var m0=Ft&&"documentMode"in document&&11>=document.documentMode,hr=null,Ya=null,Ri=null,Xa=!1;function nh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xa||hr==null||hr!==vo(r)||(r=hr,"selectionStart"in r&&uc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ri&&Gi(Ri,r)||(Ri=r,r=ko(Ya,"onSelect"),0<r.length&&(e=new oc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=hr)))}function js(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var fr={animationend:js("Animation","AnimationEnd"),animationiteration:js("Animation","AnimationIteration"),animationstart:js("Animation","AnimationStart"),transitionend:js("Transition","TransitionEnd")},Jl={},Vp={};Ft&&(Vp=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function pl(t){if(Jl[t])return Jl[t];if(!fr[t])return t;var e=fr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Vp)return Jl[t]=e[n];return t}var Hp=pl("animationend"),$p=pl("animationiteration"),Gp=pl("animationstart"),Kp=pl("transitionend"),Qp=new Map,rh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kn(t,e){Qp.set(t,e),nr(e,[t])}for(var Zl=0;Zl<rh.length;Zl++){var ea=rh[Zl],g0=ea.toLowerCase(),_0=ea[0].toUpperCase()+ea.slice(1);kn(g0,"on"+_0)}kn(Hp,"onAnimationEnd");kn($p,"onAnimationIteration");kn(Gp,"onAnimationStart");kn("dblclick","onDoubleClick");kn("focusin","onFocus");kn("focusout","onBlur");kn(Kp,"onTransitionEnd");br("onMouseEnter",["mouseout","mouseover"]);br("onMouseLeave",["mouseout","mouseover"]);br("onPointerEnter",["pointerout","pointerover"]);br("onPointerLeave",["pointerout","pointerover"]);nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Si));function ih(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,gy(r,e,void 0,t),t.currentTarget=null}function qp(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;ih(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;ih(i,l,u),s=a}}}if(wo)throw t=Ga,wo=!1,Ga=null,t}function Q(t,e){var n=e[nu];n===void 0&&(n=e[nu]=new Set);var r=t+"__bubble";n.has(r)||(Yp(e,t,2,!1),n.add(r))}function ta(t,e,n){var r=0;e&&(r|=4),Yp(n,t,r,e)}var Vs="_reactListening"+Math.random().toString(36).slice(2);function Ki(t){if(!t[Vs]){t[Vs]=!0,rp.forEach(function(n){n!=="selectionchange"&&(v0.has(n)||ta(n,!1,t),ta(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Vs]||(e[Vs]=!0,ta("selectionchange",!1,e))}}function Yp(t,e,n,r){switch(Dp(e)){case 1:var i=Ay;break;case 4:i=Dy;break;default:i=ic}n=i.bind(null,e,n,t),i=void 0,!$a||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function na(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=bn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}yp(function(){var u=s,d=ec(n),c=[];e:{var h=Qp.get(t);if(h!==void 0){var g=oc,_=t;switch(t){case"keypress":if(so(n)===0)break e;case"keydown":case"keyup":g=Qy;break;case"focusin":_="focus",g=ql;break;case"focusout":_="blur",g=ql;break;case"beforeblur":case"afterblur":g=ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=by;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Xy;break;case Hp:case $p:case Gp:g=zy;break;case Kp:g=Zy;break;case"scroll":g=My;break;case"wheel":g=t0;break;case"copy":case"cut":case"paste":g=By;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Qd}var v=(e&4)!==0,R=!v&&t==="scroll",p=v?h!==null?h+"Capture":null:h;v=[];for(var f=u,m;f!==null;){m=f;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=Bi(f,p),y!=null&&v.push(Qi(f,y,m)))),R)break;f=f.return}0<v.length&&(h=new g(h,_,null,n,d),c.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Va&&(_=n.relatedTarget||n.fromElement)&&(bn(_)||_[Ut]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?bn(_):null,_!==null&&(R=rr(_),_!==R||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(v=Gd,y="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Qd,y="onPointerLeave",p="onPointerEnter",f="pointer"),R=g==null?h:pr(g),m=_==null?h:pr(_),h=new v(y,f+"leave",g,n,d),h.target=R,h.relatedTarget=m,y=null,bn(d)===u&&(v=new v(p,f+"enter",_,n,d),v.target=m,v.relatedTarget=R,y=v),R=y,g&&_)t:{for(v=g,p=_,f=0,m=v;m;m=or(m))f++;for(m=0,y=p;y;y=or(y))m++;for(;0<f-m;)v=or(v),f--;for(;0<m-f;)p=or(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=or(v),p=or(p)}v=null}else v=null;g!==null&&sh(c,h,g,v,!1),_!==null&&R!==null&&sh(c,R,_,v,!0)}}e:{if(h=u?pr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var S=a0;else if(Xd(h))if(zp)S=h0;else{S=c0;var I=u0}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=d0);if(S&&(S=S(t,u))){Up(c,S,n,d);break e}I&&I(t,h,u),t==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&Ua(h,"number",h.value)}switch(I=u?pr(u):window,t){case"focusin":(Xd(I)||I.contentEditable==="true")&&(hr=I,Ya=u,Ri=null);break;case"focusout":Ri=Ya=hr=null;break;case"mousedown":Xa=!0;break;case"contextmenu":case"mouseup":case"dragend":Xa=!1,nh(c,n,d);break;case"selectionchange":if(m0)break;case"keydown":case"keyup":nh(c,n,d)}var C;if(ac)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else dr?bp(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Lp&&n.locale!=="ko"&&(dr||N!=="onCompositionStart"?N==="onCompositionEnd"&&dr&&(C=Mp()):(rn=d,sc="value"in rn?rn.value:rn.textContent,dr=!0)),I=ko(u,N),0<I.length&&(N=new Kd(N,t,null,n,d),c.push({event:N,listeners:I}),C?N.data=C:(C=Fp(n),C!==null&&(N.data=C)))),(C=r0?i0(t,n):s0(t,n))&&(u=ko(u,"onBeforeInput"),0<u.length&&(d=new Kd("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=C))}qp(c,e)})}function Qi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ko(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Bi(t,n),s!=null&&r.unshift(Qi(t,s,i)),s=Bi(t,e),s!=null&&r.push(Qi(t,s,i))),t=t.return}return r}function or(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function sh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Bi(n,s),a!=null&&o.unshift(Qi(n,a,l))):i||(a=Bi(n,s),a!=null&&o.push(Qi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var y0=/\r\n?/g,w0=/\u0000|\uFFFD/g;function oh(t){return(typeof t=="string"?t:""+t).replace(y0,`
`).replace(w0,"")}function Hs(t,e,n){if(e=oh(e),oh(t)!==e&&n)throw Error(w(425))}function To(){}var Ja=null,Za=null;function eu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var tu=typeof setTimeout=="function"?setTimeout:void 0,E0=typeof clearTimeout=="function"?clearTimeout:void 0,lh=typeof Promise=="function"?Promise:void 0,S0=typeof queueMicrotask=="function"?queueMicrotask:typeof lh<"u"?function(t){return lh.resolve(null).then(t).catch(C0)}:tu;function C0(t){setTimeout(function(){throw t})}function ra(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Hi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Hi(e)}function un(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ah(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zr=Math.random().toString(36).slice(2),_t="__reactFiber$"+Zr,qi="__reactProps$"+Zr,Ut="__reactContainer$"+Zr,nu="__reactEvents$"+Zr,I0="__reactListeners$"+Zr,k0="__reactHandles$"+Zr;function bn(t){var e=t[_t];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ut]||n[_t]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ah(t);t!==null;){if(n=t[_t])return n;t=ah(t)}return e}t=n,n=t.parentNode}return null}function ms(t){return t=t[_t]||t[Ut],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function pr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function ml(t){return t[qi]||null}var ru=[],mr=-1;function Tn(t){return{current:t}}function Y(t){0>mr||(t.current=ru[mr],ru[mr]=null,mr--)}function K(t,e){mr++,ru[mr]=t.current,t.current=e}var wn={},Te=Tn(wn),ze=Tn(!1),$n=wn;function Fr(t,e){var n=t.type.contextTypes;if(!n)return wn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function We(t){return t=t.childContextTypes,t!=null}function No(){Y(ze),Y(Te)}function uh(t,e,n){if(Te.current!==wn)throw Error(w(168));K(Te,e),K(ze,n)}function Xp(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,uy(t)||"Unknown",i));return ne({},n,r)}function Ro(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wn,$n=Te.current,K(Te,t),K(ze,ze.current),!0}function ch(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=Xp(t,e,$n),r.__reactInternalMemoizedMergedChildContext=t,Y(ze),Y(Te),K(Te,t)):Y(ze),K(ze,n)}var Nt=null,gl=!1,ia=!1;function Jp(t){Nt===null?Nt=[t]:Nt.push(t)}function T0(t){gl=!0,Jp(t)}function Nn(){if(!ia&&Nt!==null){ia=!0;var t=0,e=j;try{var n=Nt;for(j=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Nt=null,gl=!1}catch(i){throw Nt!==null&&(Nt=Nt.slice(t+1)),Cp(tc,Nn),i}finally{j=e,ia=!1}}return null}var gr=[],_r=0,Po=null,xo=0,Je=[],Ze=0,Gn=null,xt=1,Ot="";function An(t,e){gr[_r++]=xo,gr[_r++]=Po,Po=t,xo=e}function Zp(t,e,n){Je[Ze++]=xt,Je[Ze++]=Ot,Je[Ze++]=Gn,Gn=t;var r=xt;t=Ot;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var s=32-dt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xt=1<<32-dt(e)+i|n<<i|r,Ot=s+t}else xt=1<<s|n<<i|r,Ot=t}function cc(t){t.return!==null&&(An(t,1),Zp(t,1,0))}function dc(t){for(;t===Po;)Po=gr[--_r],gr[_r]=null,xo=gr[--_r],gr[_r]=null;for(;t===Gn;)Gn=Je[--Ze],Je[Ze]=null,Ot=Je[--Ze],Je[Ze]=null,xt=Je[--Ze],Je[Ze]=null}var Ke=null,Ge=null,J=!1,lt=null;function em(t,e){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function dh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ke=t,Ge=un(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ke=t,Ge=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gn!==null?{id:xt,overflow:Ot}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ke=t,Ge=null,!0):!1;default:return!1}}function iu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function su(t){if(J){var e=Ge;if(e){var n=e;if(!dh(t,e)){if(iu(t))throw Error(w(418));e=un(n.nextSibling);var r=Ke;e&&dh(t,e)?em(r,n):(t.flags=t.flags&-4097|2,J=!1,Ke=t)}}else{if(iu(t))throw Error(w(418));t.flags=t.flags&-4097|2,J=!1,Ke=t}}}function hh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ke=t}function $s(t){if(t!==Ke)return!1;if(!J)return hh(t),J=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!eu(t.type,t.memoizedProps)),e&&(e=Ge)){if(iu(t))throw tm(),Error(w(418));for(;e;)em(t,e),e=un(e.nextSibling)}if(hh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ge=un(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ge=null}}else Ge=Ke?un(t.stateNode.nextSibling):null;return!0}function tm(){for(var t=Ge;t;)t=un(t.nextSibling)}function Ur(){Ge=Ke=null,J=!1}function hc(t){lt===null?lt=[t]:lt.push(t)}var N0=Vt.ReactCurrentBatchConfig;function st(t,e){if(t&&t.defaultProps){e=ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Oo=Tn(null),Ao=null,vr=null,fc=null;function pc(){fc=vr=Ao=null}function mc(t){var e=Oo.current;Y(Oo),t._currentValue=e}function ou(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Pr(t,e){Ao=t,fc=vr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Fe=!0),t.firstContext=null)}function nt(t){var e=t._currentValue;if(fc!==t)if(t={context:t,memoizedValue:e,next:null},vr===null){if(Ao===null)throw Error(w(308));vr=t,Ao.dependencies={lanes:0,firstContext:t}}else vr=vr.next=t;return e}var Fn=null;function gc(t){Fn===null?Fn=[t]:Fn.push(t)}function nm(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,gc(e)):(n.next=i.next,i.next=n),e.interleaved=n,zt(t,r)}function zt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xt=!1;function _c(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Lt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,zt(t,n)}return i=r.interleaved,i===null?(e.next=e,gc(r)):(e.next=i.next,i.next=e),r.interleaved=e,zt(t,n)}function oo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,nc(t,n)}}function fh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Do(t,e,n,r){var i=t.updateQueue;Xt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var h=l.lane,g=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,v=l;switch(h=e,g=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){c=_.call(g,c,h);break e}c=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,h=typeof _=="function"?_.call(g,c,h):_,h==null)break e;c=ne({},c,h);break e;case 2:Xt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=g,a=c):d=d.next=g,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Qn|=o,t.lanes=o,t.memoizedState=c}}function ph(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var im=new np.Component().refs;function lu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _l={isMounted:function(t){return(t=t._reactInternals)?rr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Oe(),i=hn(t),s=Lt(r,i);s.payload=e,n!=null&&(s.callback=n),e=cn(t,s,i),e!==null&&(ht(e,t,i,r),oo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Oe(),i=hn(t),s=Lt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cn(t,s,i),e!==null&&(ht(e,t,i,r),oo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Oe(),r=hn(t),i=Lt(n,r);i.tag=2,e!=null&&(i.callback=e),e=cn(t,i,r),e!==null&&(ht(e,t,r,n),oo(e,t,r))}};function mh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Gi(n,r)||!Gi(i,s):!0}function sm(t,e,n){var r=!1,i=wn,s=e.contextType;return typeof s=="object"&&s!==null?s=nt(s):(i=We(e)?$n:Te.current,r=e.contextTypes,s=(r=r!=null)?Fr(t,i):wn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_l,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function gh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&_l.enqueueReplaceState(e,e.state,null)}function au(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=im,_c(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=nt(s):(s=We(e)?$n:Te.current,i.context=Fr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(lu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&_l.enqueueReplaceState(i,i.state,null),Do(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function hi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===im&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function Gs(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _h(t){var e=t._init;return e(t._payload)}function om(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=fn(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,m,y){return f===null||f.tag!==6?(f=da(m,p.mode,y),f.return=p,f):(f=i(f,m),f.return=p,f)}function a(p,f,m,y){var S=m.type;return S===cr?d(p,f,m.props.children,y,m.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Yt&&_h(S)===f.type)?(y=i(f,m.props),y.ref=hi(p,f,m),y.return=p,y):(y=fo(m.type,m.key,m.props,null,p.mode,y),y.ref=hi(p,f,m),y.return=p,y)}function u(p,f,m,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=ha(m,p.mode,y),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function d(p,f,m,y,S){return f===null||f.tag!==7?(f=jn(m,p.mode,y,S),f.return=p,f):(f=i(f,m),f.return=p,f)}function c(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=da(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ls:return m=fo(f.type,f.key,f.props,null,p.mode,m),m.ref=hi(p,null,f),m.return=p,m;case ur:return f=ha(f,p.mode,m),f.return=p,f;case Yt:var y=f._init;return c(p,y(f._payload),m)}if(wi(f)||li(f))return f=jn(f,p.mode,m,null),f.return=p,f;Gs(p,f)}return null}function h(p,f,m,y){var S=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:l(p,f,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ls:return m.key===S?a(p,f,m,y):null;case ur:return m.key===S?u(p,f,m,y):null;case Yt:return S=m._init,h(p,f,S(m._payload),y)}if(wi(m)||li(m))return S!==null?null:d(p,f,m,y,null);Gs(p,m)}return null}function g(p,f,m,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,l(f,p,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ls:return p=p.get(y.key===null?m:y.key)||null,a(f,p,y,S);case ur:return p=p.get(y.key===null?m:y.key)||null,u(f,p,y,S);case Yt:var I=y._init;return g(p,f,m,I(y._payload),S)}if(wi(y)||li(y))return p=p.get(m)||null,d(f,p,y,S,null);Gs(f,y)}return null}function _(p,f,m,y){for(var S=null,I=null,C=f,N=f=0,V=null;C!==null&&N<m.length;N++){C.index>N?(V=C,C=null):V=C.sibling;var L=h(p,C,m[N],y);if(L===null){C===null&&(C=V);break}t&&C&&L.alternate===null&&e(p,C),f=s(L,f,N),I===null?S=L:I.sibling=L,I=L,C=V}if(N===m.length)return n(p,C),J&&An(p,N),S;if(C===null){for(;N<m.length;N++)C=c(p,m[N],y),C!==null&&(f=s(C,f,N),I===null?S=C:I.sibling=C,I=C);return J&&An(p,N),S}for(C=r(p,C);N<m.length;N++)V=g(C,p,N,m[N],y),V!==null&&(t&&V.alternate!==null&&C.delete(V.key===null?N:V.key),f=s(V,f,N),I===null?S=V:I.sibling=V,I=V);return t&&C.forEach(function(Le){return e(p,Le)}),J&&An(p,N),S}function v(p,f,m,y){var S=li(m);if(typeof S!="function")throw Error(w(150));if(m=S.call(m),m==null)throw Error(w(151));for(var I=S=null,C=f,N=f=0,V=null,L=m.next();C!==null&&!L.done;N++,L=m.next()){C.index>N?(V=C,C=null):V=C.sibling;var Le=h(p,C,L.value,y);if(Le===null){C===null&&(C=V);break}t&&C&&Le.alternate===null&&e(p,C),f=s(Le,f,N),I===null?S=Le:I.sibling=Le,I=Le,C=V}if(L.done)return n(p,C),J&&An(p,N),S;if(C===null){for(;!L.done;N++,L=m.next())L=c(p,L.value,y),L!==null&&(f=s(L,f,N),I===null?S=L:I.sibling=L,I=L);return J&&An(p,N),S}for(C=r(p,C);!L.done;N++,L=m.next())L=g(C,p,N,L.value,y),L!==null&&(t&&L.alternate!==null&&C.delete(L.key===null?N:L.key),f=s(L,f,N),I===null?S=L:I.sibling=L,I=L);return t&&C.forEach(function(Pn){return e(p,Pn)}),J&&An(p,N),S}function R(p,f,m,y){if(typeof m=="object"&&m!==null&&m.type===cr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ls:e:{for(var S=m.key,I=f;I!==null;){if(I.key===S){if(S=m.type,S===cr){if(I.tag===7){n(p,I.sibling),f=i(I,m.props.children),f.return=p,p=f;break e}}else if(I.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Yt&&_h(S)===I.type){n(p,I.sibling),f=i(I,m.props),f.ref=hi(p,I,m),f.return=p,p=f;break e}n(p,I);break}else e(p,I);I=I.sibling}m.type===cr?(f=jn(m.props.children,p.mode,y,m.key),f.return=p,p=f):(y=fo(m.type,m.key,m.props,null,p.mode,y),y.ref=hi(p,f,m),y.return=p,p=y)}return o(p);case ur:e:{for(I=m.key;f!==null;){if(f.key===I)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=ha(m,p.mode,y),f.return=p,p=f}return o(p);case Yt:return I=m._init,R(p,f,I(m._payload),y)}if(wi(m))return _(p,f,m,y);if(li(m))return v(p,f,m,y);Gs(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=da(m,p.mode,y),f.return=p,p=f),o(p)):n(p,f)}return R}var zr=om(!0),lm=om(!1),gs={},yt=Tn(gs),Yi=Tn(gs),Xi=Tn(gs);function Un(t){if(t===gs)throw Error(w(174));return t}function vc(t,e){switch(K(Xi,e),K(Yi,t),K(yt,gs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wa(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wa(e,t)}Y(yt),K(yt,e)}function Wr(){Y(yt),Y(Yi),Y(Xi)}function am(t){Un(Xi.current);var e=Un(yt.current),n=Wa(e,t.type);e!==n&&(K(Yi,t),K(yt,n))}function yc(t){Yi.current===t&&(Y(yt),Y(Yi))}var ee=Tn(0);function Mo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var sa=[];function wc(){for(var t=0;t<sa.length;t++)sa[t]._workInProgressVersionPrimary=null;sa.length=0}var lo=Vt.ReactCurrentDispatcher,oa=Vt.ReactCurrentBatchConfig,Kn=0,te=null,ae=null,pe=null,Lo=!1,Pi=!1,Ji=0,R0=0;function Se(){throw Error(w(321))}function Ec(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pt(t[n],e[n]))return!1;return!0}function Sc(t,e,n,r,i,s){if(Kn=s,te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,lo.current=t===null||t.memoizedState===null?A0:D0,t=n(r,i),Pi){s=0;do{if(Pi=!1,Ji=0,25<=s)throw Error(w(301));s+=1,pe=ae=null,e.updateQueue=null,lo.current=M0,t=n(r,i)}while(Pi)}if(lo.current=bo,e=ae!==null&&ae.next!==null,Kn=0,pe=ae=te=null,Lo=!1,e)throw Error(w(300));return t}function Cc(){var t=Ji!==0;return Ji=0,t}function gt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?te.memoizedState=pe=t:pe=pe.next=t,pe}function rt(){if(ae===null){var t=te.alternate;t=t!==null?t.memoizedState:null}else t=ae.next;var e=pe===null?te.memoizedState:pe.next;if(e!==null)pe=e,ae=t;else{if(t===null)throw Error(w(310));ae=t,t={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},pe===null?te.memoizedState=pe=t:pe=pe.next=t}return pe}function Zi(t,e){return typeof e=="function"?e(t):e}function la(t){var e=rt(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=ae,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((Kn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,te.lanes|=d,Qn|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,pt(r,e.memoizedState)||(Fe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,te.lanes|=s,Qn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function aa(t){var e=rt(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);pt(s,e.memoizedState)||(Fe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function um(){}function cm(t,e){var n=te,r=rt(),i=e(),s=!pt(r.memoizedState,i);if(s&&(r.memoizedState=i,Fe=!0),r=r.queue,Ic(fm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,es(9,hm.bind(null,n,r,i,e),void 0,null),_e===null)throw Error(w(349));Kn&30||dm(n,e,i)}return i}function dm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=te.updateQueue,e===null?(e={lastEffect:null,stores:null},te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function hm(t,e,n,r){e.value=n,e.getSnapshot=r,pm(e)&&mm(t)}function fm(t,e,n){return n(function(){pm(e)&&mm(t)})}function pm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pt(t,n)}catch{return!0}}function mm(t){var e=zt(t,1);e!==null&&ht(e,t,1,-1)}function vh(t){var e=gt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:t},e.queue=t,t=t.dispatch=O0.bind(null,te,t),[e.memoizedState,t]}function es(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=te.updateQueue,e===null?(e={lastEffect:null,stores:null},te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function gm(){return rt().memoizedState}function ao(t,e,n,r){var i=gt();te.flags|=t,i.memoizedState=es(1|e,n,void 0,r===void 0?null:r)}function vl(t,e,n,r){var i=rt();r=r===void 0?null:r;var s=void 0;if(ae!==null){var o=ae.memoizedState;if(s=o.destroy,r!==null&&Ec(r,o.deps)){i.memoizedState=es(e,n,s,r);return}}te.flags|=t,i.memoizedState=es(1|e,n,s,r)}function yh(t,e){return ao(8390656,8,t,e)}function Ic(t,e){return vl(2048,8,t,e)}function _m(t,e){return vl(4,2,t,e)}function vm(t,e){return vl(4,4,t,e)}function ym(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function wm(t,e,n){return n=n!=null?n.concat([t]):null,vl(4,4,ym.bind(null,e,t),n)}function kc(){}function Em(t,e){var n=rt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ec(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Sm(t,e){var n=rt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ec(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Cm(t,e,n){return Kn&21?(pt(n,e)||(n=Tp(),te.lanes|=n,Qn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Fe=!0),t.memoizedState=n)}function P0(t,e){var n=j;j=n!==0&&4>n?n:4,t(!0);var r=oa.transition;oa.transition={};try{t(!1),e()}finally{j=n,oa.transition=r}}function Im(){return rt().memoizedState}function x0(t,e,n){var r=hn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},km(t))Tm(e,n);else if(n=nm(t,e,n,r),n!==null){var i=Oe();ht(n,t,r,i),Nm(n,e,r)}}function O0(t,e,n){var r=hn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(km(t))Tm(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,pt(l,o)){var a=e.interleaved;a===null?(i.next=i,gc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=nm(t,e,i,r),n!==null&&(i=Oe(),ht(n,t,r,i),Nm(n,e,r))}}function km(t){var e=t.alternate;return t===te||e!==null&&e===te}function Tm(t,e){Pi=Lo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Nm(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,nc(t,n)}}var bo={readContext:nt,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},A0={readContext:nt,useCallback:function(t,e){return gt().memoizedState=[t,e===void 0?null:e],t},useContext:nt,useEffect:yh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ao(4194308,4,ym.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ao(4194308,4,t,e)},useInsertionEffect:function(t,e){return ao(4,2,t,e)},useMemo:function(t,e){var n=gt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=gt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=x0.bind(null,te,t),[r.memoizedState,t]},useRef:function(t){var e=gt();return t={current:t},e.memoizedState=t},useState:vh,useDebugValue:kc,useDeferredValue:function(t){return gt().memoizedState=t},useTransition:function(){var t=vh(!1),e=t[0];return t=P0.bind(null,t[1]),gt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=te,i=gt();if(J){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),_e===null)throw Error(w(349));Kn&30||dm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,yh(fm.bind(null,r,s,t),[t]),r.flags|=2048,es(9,hm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=gt(),e=_e.identifierPrefix;if(J){var n=Ot,r=xt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ji++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=R0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},D0={readContext:nt,useCallback:Em,useContext:nt,useEffect:Ic,useImperativeHandle:wm,useInsertionEffect:_m,useLayoutEffect:vm,useMemo:Sm,useReducer:la,useRef:gm,useState:function(){return la(Zi)},useDebugValue:kc,useDeferredValue:function(t){var e=rt();return Cm(e,ae.memoizedState,t)},useTransition:function(){var t=la(Zi)[0],e=rt().memoizedState;return[t,e]},useMutableSource:um,useSyncExternalStore:cm,useId:Im,unstable_isNewReconciler:!1},M0={readContext:nt,useCallback:Em,useContext:nt,useEffect:Ic,useImperativeHandle:wm,useInsertionEffect:_m,useLayoutEffect:vm,useMemo:Sm,useReducer:aa,useRef:gm,useState:function(){return aa(Zi)},useDebugValue:kc,useDeferredValue:function(t){var e=rt();return ae===null?e.memoizedState=t:Cm(e,ae.memoizedState,t)},useTransition:function(){var t=aa(Zi)[0],e=rt().memoizedState;return[t,e]},useMutableSource:um,useSyncExternalStore:cm,useId:Im,unstable_isNewReconciler:!1};function Br(t,e){try{var n="",r=e;do n+=ay(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ua(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function uu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var L0=typeof WeakMap=="function"?WeakMap:Map;function Rm(t,e,n){n=Lt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Uo||(Uo=!0,yu=r),uu(t,e)},n}function Pm(t,e,n){n=Lt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){uu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){uu(t,e),typeof r!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function wh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new L0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=q0.bind(null,t,e,n),e.then(t,t))}function Eh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Lt(-1,1),e.tag=2,cn(n,e,1))),n.lanes|=1),t)}var b0=Vt.ReactCurrentOwner,Fe=!1;function Re(t,e,n,r){e.child=t===null?lm(e,null,n,r):zr(e,t.child,n,r)}function Ch(t,e,n,r,i){n=n.render;var s=e.ref;return Pr(e,i),r=Sc(t,e,n,r,s,i),n=Cc(),t!==null&&!Fe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wt(t,e,i)):(J&&n&&cc(e),e.flags|=1,Re(t,e,r,i),e.child)}function Ih(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Dc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,xm(t,e,s,r,i)):(t=fo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Gi,n(o,r)&&t.ref===e.ref)return Wt(t,e,i)}return e.flags|=1,t=fn(s,r),t.ref=e.ref,t.return=e,e.child=t}function xm(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Gi(s,r)&&t.ref===e.ref)if(Fe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Fe=!0);else return e.lanes=t.lanes,Wt(t,e,i)}return cu(t,e,n,r,i)}function Om(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(wr,$e),$e|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,K(wr,$e),$e|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,K(wr,$e),$e|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,K(wr,$e),$e|=r;return Re(t,e,i,n),e.child}function Am(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function cu(t,e,n,r,i){var s=We(n)?$n:Te.current;return s=Fr(e,s),Pr(e,i),n=Sc(t,e,n,r,s,i),r=Cc(),t!==null&&!Fe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wt(t,e,i)):(J&&r&&cc(e),e.flags|=1,Re(t,e,n,i),e.child)}function kh(t,e,n,r,i){if(We(n)){var s=!0;Ro(e)}else s=!1;if(Pr(e,i),e.stateNode===null)uo(t,e),sm(e,n,r),au(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=nt(u):(u=We(n)?$n:Te.current,u=Fr(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&gh(e,o,r,u),Xt=!1;var h=e.memoizedState;o.state=h,Do(e,r,o,i),a=e.memoizedState,l!==r||h!==a||ze.current||Xt?(typeof d=="function"&&(lu(e,n,d,r),a=e.memoizedState),(l=Xt||mh(e,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,rm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:st(e.type,l),o.props=u,c=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=nt(a):(a=We(n)?$n:Te.current,a=Fr(e,a));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&gh(e,o,r,a),Xt=!1,h=e.memoizedState,o.state=h,Do(e,r,o,i);var _=e.memoizedState;l!==c||h!==_||ze.current||Xt?(typeof g=="function"&&(lu(e,n,g,r),_=e.memoizedState),(u=Xt||mh(e,n,u,r,h,_,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return du(t,e,n,r,s,i)}function du(t,e,n,r,i,s){Am(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ch(e,n,!1),Wt(t,e,s);r=e.stateNode,b0.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=zr(e,t.child,null,s),e.child=zr(e,null,l,s)):Re(t,e,l,s),e.memoizedState=r.state,i&&ch(e,n,!0),e.child}function Dm(t){var e=t.stateNode;e.pendingContext?uh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&uh(t,e.context,!1),vc(t,e.containerInfo)}function Th(t,e,n,r,i){return Ur(),hc(i),e.flags|=256,Re(t,e,n,r),e.child}var hu={dehydrated:null,treeContext:null,retryLane:0};function fu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Mm(t,e,n){var r=e.pendingProps,i=ee.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),K(ee,i&1),t===null)return su(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=El(o,r,0,null),t=jn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=fu(n),e.memoizedState=hu,t):Tc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return F0(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=fn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=fn(l,s):(s=jn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?fu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=hu,r}return s=t.child,t=s.sibling,r=fn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Tc(t,e){return e=El({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ks(t,e,n,r){return r!==null&&hc(r),zr(e,t.child,null,n),t=Tc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function F0(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ua(Error(w(422))),Ks(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=El({mode:"visible",children:r.children},i,0,null),s=jn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&zr(e,t.child,null,o),e.child.memoizedState=fu(o),e.memoizedState=hu,s);if(!(e.mode&1))return Ks(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(w(419)),r=ua(s,r,void 0),Ks(t,e,o,r)}if(l=(o&t.childLanes)!==0,Fe||l){if(r=_e,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,zt(t,i),ht(r,t,i,-1))}return Ac(),r=ua(Error(w(421))),Ks(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Y0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ge=un(i.nextSibling),Ke=e,J=!0,lt=null,t!==null&&(Je[Ze++]=xt,Je[Ze++]=Ot,Je[Ze++]=Gn,xt=t.id,Ot=t.overflow,Gn=e),e=Tc(e,r.children),e.flags|=4096,e)}function Nh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ou(t.return,e,n)}function ca(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Lm(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Re(t,e,r.children,n),r=ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Nh(t,n,e);else if(t.tag===19)Nh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(K(ee,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Mo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ca(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Mo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ca(e,!0,n,null,s);break;case"together":ca(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function uo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=fn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function U0(t,e,n){switch(e.tag){case 3:Dm(e),Ur();break;case 5:am(e);break;case 1:We(e.type)&&Ro(e);break;case 4:vc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;K(Oo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(K(ee,ee.current&1),e.flags|=128,null):n&e.child.childLanes?Mm(t,e,n):(K(ee,ee.current&1),t=Wt(t,e,n),t!==null?t.sibling:null);K(ee,ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Lm(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(ee,ee.current),r)break;return null;case 22:case 23:return e.lanes=0,Om(t,e,n)}return Wt(t,e,n)}var bm,pu,Fm,Um;bm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pu=function(){};Fm=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Un(yt.current);var s=null;switch(n){case"input":i=ba(t,i),r=ba(t,r),s=[];break;case"select":i=ne({},i,{value:void 0}),r=ne({},r,{value:void 0}),s=[];break;case"textarea":i=za(t,i),r=za(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=To)}Ba(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Q("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Um=function(t,e,n,r){n!==r&&(e.flags|=4)};function fi(t,e){if(!J)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ce(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function z0(t,e,n){var r=e.pendingProps;switch(dc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(e),null;case 1:return We(e.type)&&No(),Ce(e),null;case 3:return r=e.stateNode,Wr(),Y(ze),Y(Te),wc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&($s(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,lt!==null&&(Su(lt),lt=null))),pu(t,e),Ce(e),null;case 5:yc(e);var i=Un(Xi.current);if(n=e.type,t!==null&&e.stateNode!=null)Fm(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return Ce(e),null}if(t=Un(yt.current),$s(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[_t]=e,r[qi]=s,t=(e.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(i=0;i<Si.length;i++)Q(Si[i],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":bd(r,s),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Q("invalid",r);break;case"textarea":Ud(r,s),Q("invalid",r)}Ba(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Hs(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Hs(r.textContent,l,t),i=["children",""+l]):zi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Q("scroll",r)}switch(n){case"input":bs(r),Fd(r,s,!0);break;case"textarea":bs(r),zd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=To)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=dp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[_t]=e,t[qi]=r,bm(t,e,!1,!1),e.stateNode=t;e:{switch(o=ja(n,r),n){case"dialog":Q("cancel",t),Q("close",t),i=r;break;case"iframe":case"object":case"embed":Q("load",t),i=r;break;case"video":case"audio":for(i=0;i<Si.length;i++)Q(Si[i],t);i=r;break;case"source":Q("error",t),i=r;break;case"img":case"image":case"link":Q("error",t),Q("load",t),i=r;break;case"details":Q("toggle",t),i=r;break;case"input":bd(t,r),i=ba(t,r),Q("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ne({},r,{value:void 0}),Q("invalid",t);break;case"textarea":Ud(t,r),i=za(t,r),Q("invalid",t);break;default:i=r}Ba(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?pp(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&hp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Wi(t,a):typeof a=="number"&&Wi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(zi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&Q("scroll",t):a!=null&&Yu(t,s,a,o))}switch(n){case"input":bs(t),Fd(t,r,!1);break;case"textarea":bs(t),zd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+yn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?kr(t,!!r.multiple,s,!1):r.defaultValue!=null&&kr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=To)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ce(e),null;case 6:if(t&&e.stateNode!=null)Um(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=Un(Xi.current),Un(yt.current),$s(e)){if(r=e.stateNode,n=e.memoizedProps,r[_t]=e,(s=r.nodeValue!==n)&&(t=Ke,t!==null))switch(t.tag){case 3:Hs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Hs(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_t]=e,e.stateNode=r}return Ce(e),null;case 13:if(Y(ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(J&&Ge!==null&&e.mode&1&&!(e.flags&128))tm(),Ur(),e.flags|=98560,s=!1;else if(s=$s(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(w(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[_t]=e}else Ur(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ce(e),s=!1}else lt!==null&&(Su(lt),lt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ee.current&1?de===0&&(de=3):Ac())),e.updateQueue!==null&&(e.flags|=4),Ce(e),null);case 4:return Wr(),pu(t,e),t===null&&Ki(e.stateNode.containerInfo),Ce(e),null;case 10:return mc(e.type._context),Ce(e),null;case 17:return We(e.type)&&No(),Ce(e),null;case 19:if(Y(ee),s=e.memoizedState,s===null)return Ce(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)fi(s,!1);else{if(de!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Mo(t),o!==null){for(e.flags|=128,fi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return K(ee,ee.current&1|2),e.child}t=t.sibling}s.tail!==null&&oe()>jr&&(e.flags|=128,r=!0,fi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Mo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),fi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!J)return Ce(e),null}else 2*oe()-s.renderingStartTime>jr&&n!==1073741824&&(e.flags|=128,r=!0,fi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=oe(),e.sibling=null,n=ee.current,K(ee,r?n&1|2:n&1),e):(Ce(e),null);case 22:case 23:return Oc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?$e&1073741824&&(Ce(e),e.subtreeFlags&6&&(e.flags|=8192)):Ce(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function W0(t,e){switch(dc(e),e.tag){case 1:return We(e.type)&&No(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Wr(),Y(ze),Y(Te),wc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return yc(e),null;case 13:if(Y(ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));Ur()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Y(ee),null;case 4:return Wr(),null;case 10:return mc(e.type._context),null;case 22:case 23:return Oc(),null;case 24:return null;default:return null}}var Qs=!1,Ie=!1,B0=typeof WeakSet=="function"?WeakSet:Set,k=null;function yr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(t,e,r)}else n.current=null}function mu(t,e,n){try{n()}catch(r){ie(t,e,r)}}var Rh=!1;function j0(t,e){if(Ja=Co,t=jp(),uc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)h=c,c=g;for(;;){if(c===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(a=o),(g=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Za={focusedElem:t,selectionRange:n},Co=!1,k=e;k!==null;)if(e=k,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,k=t;else for(;k!==null;){e=k;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,R=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:st(e.type,v),R);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){ie(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}return _=Rh,Rh=!1,_}function xi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&mu(e,n,s)}i=i.next}while(i!==r)}}function yl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function gu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function zm(t){var e=t.alternate;e!==null&&(t.alternate=null,zm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_t],delete e[qi],delete e[nu],delete e[I0],delete e[k0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Wm(t){return t.tag===5||t.tag===3||t.tag===4}function Ph(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _u(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=To));else if(r!==4&&(t=t.child,t!==null))for(_u(t,e,n),t=t.sibling;t!==null;)_u(t,e,n),t=t.sibling}function vu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(vu(t,e,n),t=t.sibling;t!==null;)vu(t,e,n),t=t.sibling}var ve=null,ot=!1;function Qt(t,e,n){for(n=n.child;n!==null;)Bm(t,e,n),n=n.sibling}function Bm(t,e,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(dl,n)}catch{}switch(n.tag){case 5:Ie||yr(n,e);case 6:var r=ve,i=ot;ve=null,Qt(t,e,n),ve=r,ot=i,ve!==null&&(ot?(t=ve,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(ot?(t=ve,n=n.stateNode,t.nodeType===8?ra(t.parentNode,n):t.nodeType===1&&ra(t,n),Hi(t)):ra(ve,n.stateNode));break;case 4:r=ve,i=ot,ve=n.stateNode.containerInfo,ot=!0,Qt(t,e,n),ve=r,ot=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&mu(n,e,o),i=i.next}while(i!==r)}Qt(t,e,n);break;case 1:if(!Ie&&(yr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ie(n,e,l)}Qt(t,e,n);break;case 21:Qt(t,e,n);break;case 22:n.mode&1?(Ie=(r=Ie)||n.memoizedState!==null,Qt(t,e,n),Ie=r):Qt(t,e,n);break;default:Qt(t,e,n)}}function xh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new B0),e.forEach(function(r){var i=X0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function it(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ve=l.stateNode,ot=!1;break e;case 3:ve=l.stateNode.containerInfo,ot=!0;break e;case 4:ve=l.stateNode.containerInfo,ot=!0;break e}l=l.return}if(ve===null)throw Error(w(160));Bm(s,o,i),ve=null,ot=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ie(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)jm(e,t),e=e.sibling}function jm(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(it(e,t),mt(t),r&4){try{xi(3,t,t.return),yl(3,t)}catch(v){ie(t,t.return,v)}try{xi(5,t,t.return)}catch(v){ie(t,t.return,v)}}break;case 1:it(e,t),mt(t),r&512&&n!==null&&yr(n,n.return);break;case 5:if(it(e,t),mt(t),r&512&&n!==null&&yr(n,n.return),t.flags&32){var i=t.stateNode;try{Wi(i,"")}catch(v){ie(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&up(i,s),ja(l,o);var u=ja(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?pp(i,c):d==="dangerouslySetInnerHTML"?hp(i,c):d==="children"?Wi(i,c):Yu(i,d,c,u)}switch(l){case"input":Fa(i,s);break;case"textarea":cp(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?kr(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?kr(i,!!s.multiple,s.defaultValue,!0):kr(i,!!s.multiple,s.multiple?[]:"",!1))}i[qi]=s}catch(v){ie(t,t.return,v)}}break;case 6:if(it(e,t),mt(t),r&4){if(t.stateNode===null)throw Error(w(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ie(t,t.return,v)}}break;case 3:if(it(e,t),mt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hi(e.containerInfo)}catch(v){ie(t,t.return,v)}break;case 4:it(e,t),mt(t);break;case 13:it(e,t),mt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Pc=oe())),r&4&&xh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ie=(u=Ie)||d,it(e,t),Ie=u):it(e,t),mt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(k=t,d=t.child;d!==null;){for(c=k=d;k!==null;){switch(h=k,g=h.child,h.tag){case 0:case 11:case 14:case 15:xi(4,h,h.return);break;case 1:yr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){ie(r,n,v)}}break;case 5:yr(h,h.return);break;case 22:if(h.memoizedState!==null){Ah(c);continue}}g!==null?(g.return=h,k=g):Ah(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=fp("display",o))}catch(v){ie(t,t.return,v)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){ie(t,t.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:it(e,t),mt(t),r&4&&xh(t);break;case 21:break;default:it(e,t),mt(t)}}function mt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Wm(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wi(i,""),r.flags&=-33);var s=Ph(t);vu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Ph(t);_u(t,l,o);break;default:throw Error(w(161))}}catch(a){ie(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function V0(t,e,n){k=t,Vm(t)}function Vm(t,e,n){for(var r=(t.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Qs;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ie;l=Qs;var u=Ie;if(Qs=o,(Ie=a)&&!u)for(k=i;k!==null;)o=k,a=o.child,o.tag===22&&o.memoizedState!==null?Dh(i):a!==null?(a.return=o,k=a):Dh(i);for(;s!==null;)k=s,Vm(s),s=s.sibling;k=i,Qs=l,Ie=u}Oh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,k=s):Oh(t)}}function Oh(t){for(;k!==null;){var e=k;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ie||yl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ie)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:st(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ph(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ph(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Hi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}Ie||e.flags&512&&gu(e)}catch(h){ie(e,e.return,h)}}if(e===t){k=null;break}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}}function Ah(t){for(;k!==null;){var e=k;if(e===t){k=null;break}var n=e.sibling;if(n!==null){n.return=e.return,k=n;break}k=e.return}}function Dh(t){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yl(4,e)}catch(a){ie(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ie(e,i,a)}}var s=e.return;try{gu(e)}catch(a){ie(e,s,a)}break;case 5:var o=e.return;try{gu(e)}catch(a){ie(e,o,a)}}}catch(a){ie(e,e.return,a)}if(e===t){k=null;break}var l=e.sibling;if(l!==null){l.return=e.return,k=l;break}k=e.return}}var H0=Math.ceil,Fo=Vt.ReactCurrentDispatcher,Nc=Vt.ReactCurrentOwner,tt=Vt.ReactCurrentBatchConfig,W=0,_e=null,le=null,we=0,$e=0,wr=Tn(0),de=0,ts=null,Qn=0,wl=0,Rc=0,Oi=null,be=null,Pc=0,jr=1/0,Tt=null,Uo=!1,yu=null,dn=null,qs=!1,sn=null,zo=0,Ai=0,wu=null,co=-1,ho=0;function Oe(){return W&6?oe():co!==-1?co:co=oe()}function hn(t){return t.mode&1?W&2&&we!==0?we&-we:N0.transition!==null?(ho===0&&(ho=Tp()),ho):(t=j,t!==0||(t=window.event,t=t===void 0?16:Dp(t.type)),t):1}function ht(t,e,n,r){if(50<Ai)throw Ai=0,wu=null,Error(w(185));fs(t,n,r),(!(W&2)||t!==_e)&&(t===_e&&(!(W&2)&&(wl|=n),de===4&&Zt(t,we)),Be(t,r),n===1&&W===0&&!(e.mode&1)&&(jr=oe()+500,gl&&Nn()))}function Be(t,e){var n=t.callbackNode;Ny(t,e);var r=So(t,t===_e?we:0);if(r===0)n!==null&&jd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&jd(n),e===1)t.tag===0?T0(Mh.bind(null,t)):Jp(Mh.bind(null,t)),S0(function(){!(W&6)&&Nn()}),n=null;else{switch(Np(r)){case 1:n=tc;break;case 4:n=Ip;break;case 16:n=Eo;break;case 536870912:n=kp;break;default:n=Eo}n=Xm(n,Hm.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Hm(t,e){if(co=-1,ho=0,W&6)throw Error(w(327));var n=t.callbackNode;if(xr()&&t.callbackNode!==n)return null;var r=So(t,t===_e?we:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Wo(t,r);else{e=r;var i=W;W|=2;var s=Gm();(_e!==t||we!==e)&&(Tt=null,jr=oe()+500,Bn(t,e));do try{K0();break}catch(l){$m(t,l)}while(1);pc(),Fo.current=s,W=i,le!==null?e=0:(_e=null,we=0,e=de)}if(e!==0){if(e===2&&(i=Ka(t),i!==0&&(r=i,e=Eu(t,i))),e===1)throw n=ts,Bn(t,0),Zt(t,r),Be(t,oe()),n;if(e===6)Zt(t,r);else{if(i=t.current.alternate,!(r&30)&&!$0(i)&&(e=Wo(t,r),e===2&&(s=Ka(t),s!==0&&(r=s,e=Eu(t,s))),e===1))throw n=ts,Bn(t,0),Zt(t,r),Be(t,oe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:Dn(t,be,Tt);break;case 3:if(Zt(t,r),(r&130023424)===r&&(e=Pc+500-oe(),10<e)){if(So(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Oe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=tu(Dn.bind(null,t,be,Tt),e);break}Dn(t,be,Tt);break;case 4:if(Zt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-dt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*H0(r/1960))-r,10<r){t.timeoutHandle=tu(Dn.bind(null,t,be,Tt),r);break}Dn(t,be,Tt);break;case 5:Dn(t,be,Tt);break;default:throw Error(w(329))}}}return Be(t,oe()),t.callbackNode===n?Hm.bind(null,t):null}function Eu(t,e){var n=Oi;return t.current.memoizedState.isDehydrated&&(Bn(t,e).flags|=256),t=Wo(t,e),t!==2&&(e=be,be=n,e!==null&&Su(e)),t}function Su(t){be===null?be=t:be.push.apply(be,t)}function $0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!pt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zt(t,e){for(e&=~Rc,e&=~wl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-dt(e),r=1<<n;t[n]=-1,e&=~r}}function Mh(t){if(W&6)throw Error(w(327));xr();var e=So(t,0);if(!(e&1))return Be(t,oe()),null;var n=Wo(t,e);if(t.tag!==0&&n===2){var r=Ka(t);r!==0&&(e=r,n=Eu(t,r))}if(n===1)throw n=ts,Bn(t,0),Zt(t,e),Be(t,oe()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dn(t,be,Tt),Be(t,oe()),null}function xc(t,e){var n=W;W|=1;try{return t(e)}finally{W=n,W===0&&(jr=oe()+500,gl&&Nn())}}function qn(t){sn!==null&&sn.tag===0&&!(W&6)&&xr();var e=W;W|=1;var n=tt.transition,r=j;try{if(tt.transition=null,j=1,t)return t()}finally{j=r,tt.transition=n,W=e,!(W&6)&&Nn()}}function Oc(){$e=wr.current,Y(wr)}function Bn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,E0(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(dc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&No();break;case 3:Wr(),Y(ze),Y(Te),wc();break;case 5:yc(r);break;case 4:Wr();break;case 13:Y(ee);break;case 19:Y(ee);break;case 10:mc(r.type._context);break;case 22:case 23:Oc()}n=n.return}if(_e=t,le=t=fn(t.current,null),we=$e=e,de=0,ts=null,Rc=wl=Qn=0,be=Oi=null,Fn!==null){for(e=0;e<Fn.length;e++)if(n=Fn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Fn=null}return t}function $m(t,e){do{var n=le;try{if(pc(),lo.current=bo,Lo){for(var r=te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Lo=!1}if(Kn=0,pe=ae=te=null,Pi=!1,Ji=0,Nc.current=null,n===null||n.return===null){de=1,ts=e,le=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=we,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Eh(o);if(g!==null){g.flags&=-257,Sh(g,o,l,s,e),g.mode&1&&wh(s,u,e),e=g,a=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(a),e.updateQueue=v}else _.add(a);break e}else{if(!(e&1)){wh(s,u,e),Ac();break e}a=Error(w(426))}}else if(J&&l.mode&1){var R=Eh(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Sh(R,o,l,s,e),hc(Br(a,l));break e}}s=a=Br(a,l),de!==4&&(de=2),Oi===null?Oi=[s]:Oi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Rm(s,a,e);fh(s,p);break e;case 1:l=a;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(dn===null||!dn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Pm(s,l,e);fh(s,y);break e}}s=s.return}while(s!==null)}Qm(n)}catch(S){e=S,le===n&&n!==null&&(le=n=n.return);continue}break}while(1)}function Gm(){var t=Fo.current;return Fo.current=bo,t===null?bo:t}function Ac(){(de===0||de===3||de===2)&&(de=4),_e===null||!(Qn&268435455)&&!(wl&268435455)||Zt(_e,we)}function Wo(t,e){var n=W;W|=2;var r=Gm();(_e!==t||we!==e)&&(Tt=null,Bn(t,e));do try{G0();break}catch(i){$m(t,i)}while(1);if(pc(),W=n,Fo.current=r,le!==null)throw Error(w(261));return _e=null,we=0,de}function G0(){for(;le!==null;)Km(le)}function K0(){for(;le!==null&&!vy();)Km(le)}function Km(t){var e=Ym(t.alternate,t,$e);t.memoizedProps=t.pendingProps,e===null?Qm(t):le=e,Nc.current=null}function Qm(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=W0(n,e),n!==null){n.flags&=32767,le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{de=6,le=null;return}}else if(n=z0(n,e,$e),n!==null){le=n;return}if(e=e.sibling,e!==null){le=e;return}le=e=t}while(e!==null);de===0&&(de=5)}function Dn(t,e,n){var r=j,i=tt.transition;try{tt.transition=null,j=1,Q0(t,e,n,r)}finally{tt.transition=i,j=r}return null}function Q0(t,e,n,r){do xr();while(sn!==null);if(W&6)throw Error(w(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ry(t,s),t===_e&&(le=_e=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qs||(qs=!0,Xm(Eo,function(){return xr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=tt.transition,tt.transition=null;var o=j;j=1;var l=W;W|=4,Nc.current=null,j0(t,n),jm(n,t),p0(Za),Co=!!Ja,Za=Ja=null,t.current=n,V0(n),yy(),W=l,j=o,tt.transition=s}else t.current=n;if(qs&&(qs=!1,sn=t,zo=i),s=t.pendingLanes,s===0&&(dn=null),Sy(n.stateNode),Be(t,oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Uo)throw Uo=!1,t=yu,yu=null,t;return zo&1&&t.tag!==0&&xr(),s=t.pendingLanes,s&1?t===wu?Ai++:(Ai=0,wu=t):Ai=0,Nn(),null}function xr(){if(sn!==null){var t=Np(zo),e=tt.transition,n=j;try{if(tt.transition=null,j=16>t?16:t,sn===null)var r=!1;else{if(t=sn,sn=null,zo=0,W&6)throw Error(w(331));var i=W;for(W|=4,k=t.current;k!==null;){var s=k,o=s.child;if(k.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(k=u;k!==null;){var d=k;switch(d.tag){case 0:case 11:case 15:xi(8,d,s)}var c=d.child;if(c!==null)c.return=d,k=c;else for(;k!==null;){d=k;var h=d.sibling,g=d.return;if(zm(d),d===u){k=null;break}if(h!==null){h.return=g,k=h;break}k=g}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var R=v.sibling;v.sibling=null,v=R}while(v!==null)}}k=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,k=p;break e}k=s.return}}var f=t.current;for(k=f;k!==null;){o=k;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,k=m;else e:for(o=f;k!==null;){if(l=k,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:yl(9,l)}}catch(S){ie(l,l.return,S)}if(l===o){k=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,k=y;break e}k=l.return}}if(W=i,Nn(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(dl,t)}catch{}r=!0}return r}finally{j=n,tt.transition=e}}return!1}function Lh(t,e,n){e=Br(n,e),e=Rm(t,e,1),t=cn(t,e,1),e=Oe(),t!==null&&(fs(t,1,e),Be(t,e))}function ie(t,e,n){if(t.tag===3)Lh(t,t,n);else for(;e!==null;){if(e.tag===3){Lh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dn===null||!dn.has(r))){t=Br(n,t),t=Pm(e,t,1),e=cn(e,t,1),t=Oe(),e!==null&&(fs(e,1,t),Be(e,t));break}}e=e.return}}function q0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Oe(),t.pingedLanes|=t.suspendedLanes&n,_e===t&&(we&n)===n&&(de===4||de===3&&(we&130023424)===we&&500>oe()-Pc?Bn(t,0):Rc|=n),Be(t,e)}function qm(t,e){e===0&&(t.mode&1?(e=zs,zs<<=1,!(zs&130023424)&&(zs=4194304)):e=1);var n=Oe();t=zt(t,e),t!==null&&(fs(t,e,n),Be(t,n))}function Y0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),qm(t,n)}function X0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),qm(t,n)}var Ym;Ym=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ze.current)Fe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Fe=!1,U0(t,e,n);Fe=!!(t.flags&131072)}else Fe=!1,J&&e.flags&1048576&&Zp(e,xo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;uo(t,e),t=e.pendingProps;var i=Fr(e,Te.current);Pr(e,n),i=Sc(null,e,r,t,i,n);var s=Cc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,We(r)?(s=!0,Ro(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_c(e),i.updater=_l,e.stateNode=i,i._reactInternals=e,au(e,r,t,n),e=du(null,e,r,!0,s,n)):(e.tag=0,J&&s&&cc(e),Re(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(uo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Z0(r),t=st(r,t),i){case 0:e=cu(null,e,r,t,n);break e;case 1:e=kh(null,e,r,t,n);break e;case 11:e=Ch(null,e,r,t,n);break e;case 14:e=Ih(null,e,r,st(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),cu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),kh(t,e,r,i,n);case 3:e:{if(Dm(e),t===null)throw Error(w(387));r=e.pendingProps,s=e.memoizedState,i=s.element,rm(t,e),Do(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Br(Error(w(423)),e),e=Th(t,e,r,n,i);break e}else if(r!==i){i=Br(Error(w(424)),e),e=Th(t,e,r,n,i);break e}else for(Ge=un(e.stateNode.containerInfo.firstChild),Ke=e,J=!0,lt=null,n=lm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ur(),r===i){e=Wt(t,e,n);break e}Re(t,e,r,n)}e=e.child}return e;case 5:return am(e),t===null&&su(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,eu(r,i)?o=null:s!==null&&eu(r,s)&&(e.flags|=32),Am(t,e),Re(t,e,o,n),e.child;case 6:return t===null&&su(e),null;case 13:return Mm(t,e,n);case 4:return vc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=zr(e,null,r,n):Re(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),Ch(t,e,r,i,n);case 7:return Re(t,e,e.pendingProps,n),e.child;case 8:return Re(t,e,e.pendingProps.children,n),e.child;case 12:return Re(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,K(Oo,r._currentValue),r._currentValue=o,s!==null)if(pt(s.value,o)){if(s.children===i.children&&!ze.current){e=Wt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Lt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ou(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ou(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Re(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Pr(e,n),i=nt(i),r=r(i),e.flags|=1,Re(t,e,r,n),e.child;case 14:return r=e.type,i=st(r,e.pendingProps),i=st(r.type,i),Ih(t,e,r,i,n);case 15:return xm(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),uo(t,e),e.tag=1,We(r)?(t=!0,Ro(e)):t=!1,Pr(e,n),sm(e,r,i),au(e,r,i,n),du(null,e,r,!0,t,n);case 19:return Lm(t,e,n);case 22:return Om(t,e,n)}throw Error(w(156,e.tag))};function Xm(t,e){return Cp(t,e)}function J0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(t,e,n,r){return new J0(t,e,n,r)}function Dc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Z0(t){if(typeof t=="function")return Dc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ju)return 11;if(t===Zu)return 14}return 2}function fn(t,e){var n=t.alternate;return n===null?(n=et(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function fo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Dc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case cr:return jn(n.children,i,s,e);case Xu:o=8,i|=8;break;case Aa:return t=et(12,n,e,i|2),t.elementType=Aa,t.lanes=s,t;case Da:return t=et(13,n,e,i),t.elementType=Da,t.lanes=s,t;case Ma:return t=et(19,n,e,i),t.elementType=Ma,t.lanes=s,t;case op:return El(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ip:o=10;break e;case sp:o=9;break e;case Ju:o=11;break e;case Zu:o=14;break e;case Yt:o=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=et(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function jn(t,e,n,r){return t=et(7,t,r,e),t.lanes=n,t}function El(t,e,n,r){return t=et(22,t,r,e),t.elementType=op,t.lanes=n,t.stateNode={isHidden:!1},t}function da(t,e,n){return t=et(6,t,null,e),t.lanes=n,t}function ha(t,e,n){return e=et(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ew(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gl(0),this.expirationTimes=Gl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mc(t,e,n,r,i,s,o,l,a){return t=new ew(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=et(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_c(s),t}function tw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ur,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Jm(t){if(!t)return wn;t=t._reactInternals;e:{if(rr(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(We(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(We(n))return Xp(t,n,e)}return e}function Zm(t,e,n,r,i,s,o,l,a){return t=Mc(n,r,!0,t,i,s,o,l,a),t.context=Jm(null),n=t.current,r=Oe(),i=hn(n),s=Lt(r,i),s.callback=e??null,cn(n,s,i),t.current.lanes=i,fs(t,i,r),Be(t,r),t}function Sl(t,e,n,r){var i=e.current,s=Oe(),o=hn(i);return n=Jm(n),e.context===null?e.context=n:e.pendingContext=n,e=Lt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=cn(i,e,o),t!==null&&(ht(t,i,o,s),oo(t,i,o)),o}function Bo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Lc(t,e){bh(t,e),(t=t.alternate)&&bh(t,e)}function nw(){return null}var eg=typeof reportError=="function"?reportError:function(t){console.error(t)};function bc(t){this._internalRoot=t}Cl.prototype.render=bc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));Sl(t,e,null,null)};Cl.prototype.unmount=bc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qn(function(){Sl(null,t,null,null)}),e[Ut]=null}};function Cl(t){this._internalRoot=t}Cl.prototype.unstable_scheduleHydration=function(t){if(t){var e=xp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Jt.length&&e!==0&&e<Jt[n].priority;n++);Jt.splice(n,0,t),n===0&&Ap(t)}};function Fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Il(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fh(){}function rw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Bo(o);s.call(u)}}var o=Zm(e,r,t,0,null,!1,!1,"",Fh);return t._reactRootContainer=o,t[Ut]=o.current,Ki(t.nodeType===8?t.parentNode:t),qn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Bo(a);l.call(u)}}var a=Mc(t,0,!1,null,null,!1,!1,"",Fh);return t._reactRootContainer=a,t[Ut]=a.current,Ki(t.nodeType===8?t.parentNode:t),qn(function(){Sl(e,a,n,r)}),a}function kl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Bo(o);l.call(a)}}Sl(e,o,t,i)}else o=rw(n,e,t,i,r);return Bo(o)}Rp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ei(e.pendingLanes);n!==0&&(nc(e,n|1),Be(e,oe()),!(W&6)&&(jr=oe()+500,Nn()))}break;case 13:qn(function(){var r=zt(t,1);if(r!==null){var i=Oe();ht(r,t,1,i)}}),Lc(t,1)}};rc=function(t){if(t.tag===13){var e=zt(t,134217728);if(e!==null){var n=Oe();ht(e,t,134217728,n)}Lc(t,134217728)}};Pp=function(t){if(t.tag===13){var e=hn(t),n=zt(t,e);if(n!==null){var r=Oe();ht(n,t,e,r)}Lc(t,e)}};xp=function(){return j};Op=function(t,e){var n=j;try{return j=t,e()}finally{j=n}};Ha=function(t,e,n){switch(e){case"input":if(Fa(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ml(r);if(!i)throw Error(w(90));ap(r),Fa(r,i)}}}break;case"textarea":cp(t,n);break;case"select":e=n.value,e!=null&&kr(t,!!n.multiple,e,!1)}};_p=xc;vp=qn;var iw={usingClientEntryPoint:!1,Events:[ms,pr,ml,mp,gp,xc]},pi={findFiberByHostInstance:bn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},sw={bundleType:pi.bundleType,version:pi.version,rendererPackageName:pi.rendererPackageName,rendererConfig:pi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ep(t),t===null?null:t.stateNode},findFiberByHostInstance:pi.findFiberByHostInstance||nw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ys=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ys.isDisabled&&Ys.supportsFiber)try{dl=Ys.inject(sw),vt=Ys}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iw;qe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fc(e))throw Error(w(200));return tw(t,e,null,n)};qe.createRoot=function(t,e){if(!Fc(t))throw Error(w(299));var n=!1,r="",i=eg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Mc(t,1,!1,null,null,n,!1,r,i),t[Ut]=e.current,Ki(t.nodeType===8?t.parentNode:t),new bc(e)};qe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=Ep(e),t=t===null?null:t.stateNode,t};qe.flushSync=function(t){return qn(t)};qe.hydrate=function(t,e,n){if(!Il(e))throw Error(w(200));return kl(null,t,e,!0,n)};qe.hydrateRoot=function(t,e,n){if(!Fc(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=eg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Zm(e,null,t,1,n??null,i,!1,s,o),t[Ut]=e.current,Ki(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Cl(e)};qe.render=function(t,e,n){if(!Il(e))throw Error(w(200));return kl(null,t,e,!1,n)};qe.unmountComponentAtNode=function(t){if(!Il(t))throw Error(w(40));return t._reactRootContainer?(qn(function(){kl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ut]=null})}),!0):!1};qe.unstable_batchedUpdates=xc;qe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Il(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return kl(t,e,n,!1,r)};qe.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=qe})(ny);var Uh=Pa;Ra.createRoot=Uh.createRoot,Ra.hydrateRoot=Uh.hydrateRoot;/**
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
 */const tg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const E=function(t,e){if(!t)throw ei(e)},ei=function(t){return new Error("Firebase Database ("+tg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const ng=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ow=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Uc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(h=64)),r.push(n[d],n[c],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ng(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ow(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new lw;const h=s<<2|l>>4;if(r.push(h),u!==64){const g=l<<4&240|u>>2;if(r.push(g),c!==64){const _=u<<6&192|c;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rg=function(t){const e=ng(t);return Uc.encodeByteArray(e,!0)},jo=function(t){return rg(t).replace(/\./g,"")},Vo=function(t){try{return Uc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function aw(t){return ig(void 0,t)}function ig(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!uw(n)||(t[n]=ig(t[n],e[n]));return t}function uw(t){return t!=="__proto__"}/**
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
 */function cw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const dw=()=>cw().__FIREBASE_DEFAULTS__,hw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vo(t[1]);return e&&JSON.parse(e)},zc=()=>{try{return dw()||hw()||fw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sg=t=>{var e,n;return(n=(e=zc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},pw=t=>{const e=sg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},mw=()=>{var t;return(t=zc())===null||t===void 0?void 0:t.config},og=t=>{var e;return(e=zc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Tl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function gw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[jo(JSON.stringify(n)),jo(JSON.stringify(o)),l].join(".")}/**
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
 */function Ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function _w(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function lg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vw(){const t=Ne();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ag(){return tg.NODE_ADMIN===!0}function yw(){try{return typeof indexedDB=="object"}catch{return!1}}function ww(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Ew="FirebaseError";class Rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ew,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_s.prototype.create)}}class _s{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Sw(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Rn(i,l,r)}}function Sw(t,e){return t.replace(Cw,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Cw=/\{\$([^}]+)}/g;/**
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
 */function ns(t){return JSON.parse(t)}function ue(t){return JSON.stringify(t)}/**
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
 */const ug=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ns(Vo(s[0])||""),n=ns(Vo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Iw=function(t){const e=ug(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},kw=function(t){const e=ug(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ht(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Vr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Cu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ho(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function $o(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(zh(s)&&zh(o)){if(!$o(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function zh(t){return t!==null&&typeof t=="object"}/**
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
 */function ti(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class Tw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Nw(t,e){const n=new Rw(t,e);return n.subscribe.bind(n)}class Rw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Pw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=fa),i.error===void 0&&(i.error=fa),i.complete===void 0&&(i.complete=fa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function fa(){}function Bc(t,e){return`${t} failed: ${e} argument `}/**
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
 */const xw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,E(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Nl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Me(t){return t&&t._delegate?t._delegate:t}class Yn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Mn="[DEFAULT]";/**
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
 */class Ow{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Tl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dw(e))try{this.getOrInitializeService({instanceIdentifier:Mn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Mn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mn){return this.instances.has(e)}getOptions(e=Mn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Aw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mn){return this.component?this.component.multipleInstances?e:Mn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Aw(t){return t===Mn?void 0:t}function Dw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Mw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ow(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var H;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(H||(H={}));const Lw={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},bw=H.INFO,Fw={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},Uw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Fw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jc{constructor(e){this.name=e,this._logLevel=bw,this._logHandler=Uw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const zw=(t,e)=>e.some(n=>t instanceof n);let Wh,Bh;function Ww(){return Wh||(Wh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bw(){return Bh||(Bh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cg=new WeakMap,Iu=new WeakMap,dg=new WeakMap,pa=new WeakMap,Vc=new WeakMap;function jw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(pn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cg.set(n,t)}).catch(()=>{}),Vc.set(e,t),e}function Vw(t){if(Iu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Iu.set(t,e)}let ku={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Iu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Hw(t){ku=t(ku)}function $w(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ma(this),e,...n);return dg.set(r,e.sort?e.sort():[e]),pn(r)}:Bw().includes(t)?function(...e){return t.apply(ma(this),e),pn(cg.get(this))}:function(...e){return pn(t.apply(ma(this),e))}}function Gw(t){return typeof t=="function"?$w(t):(t instanceof IDBTransaction&&Vw(t),zw(t,Ww())?new Proxy(t,ku):t)}function pn(t){if(t instanceof IDBRequest)return jw(t);if(pa.has(t))return pa.get(t);const e=Gw(t);return e!==t&&(pa.set(t,e),Vc.set(e,t)),e}const ma=t=>Vc.get(t);function Kw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=pn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(pn(o.result),a.oldVersion,a.newVersion,pn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const Qw=["get","getKey","getAll","getAllKeys","count"],qw=["put","add","delete","clear"],ga=new Map;function jh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ga.get(e))return ga.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=qw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Qw.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return ga.set(e,s),s}Hw(t=>({...t,get:(e,n,r)=>jh(e,n)||t.get(e,n,r),has:(e,n)=>!!jh(e,n)||t.has(e,n)}));/**
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
 */class Yw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Xw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Xw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Tu="@firebase/app",Vh="0.9.7";/**
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
 */const Xn=new jc("@firebase/app"),Jw="@firebase/app-compat",Zw="@firebase/analytics-compat",eE="@firebase/analytics",tE="@firebase/app-check-compat",nE="@firebase/app-check",rE="@firebase/auth",iE="@firebase/auth-compat",sE="@firebase/database",oE="@firebase/database-compat",lE="@firebase/functions",aE="@firebase/functions-compat",uE="@firebase/installations",cE="@firebase/installations-compat",dE="@firebase/messaging",hE="@firebase/messaging-compat",fE="@firebase/performance",pE="@firebase/performance-compat",mE="@firebase/remote-config",gE="@firebase/remote-config-compat",_E="@firebase/storage",vE="@firebase/storage-compat",yE="@firebase/firestore",wE="@firebase/firestore-compat",EE="firebase",SE="9.19.1";/**
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
 */const Nu="[DEFAULT]",CE={[Tu]:"fire-core",[Jw]:"fire-core-compat",[eE]:"fire-analytics",[Zw]:"fire-analytics-compat",[nE]:"fire-app-check",[tE]:"fire-app-check-compat",[rE]:"fire-auth",[iE]:"fire-auth-compat",[sE]:"fire-rtdb",[oE]:"fire-rtdb-compat",[lE]:"fire-fn",[aE]:"fire-fn-compat",[uE]:"fire-iid",[cE]:"fire-iid-compat",[dE]:"fire-fcm",[hE]:"fire-fcm-compat",[fE]:"fire-perf",[pE]:"fire-perf-compat",[mE]:"fire-rc",[gE]:"fire-rc-compat",[_E]:"fire-gcs",[vE]:"fire-gcs-compat",[yE]:"fire-fst",[wE]:"fire-fst-compat","fire-js":"fire-js",[EE]:"fire-js-all"};/**
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
 */const Go=new Map,Ru=new Map;function IE(t,e){try{t.container.addComponent(e)}catch(n){Xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hr(t){const e=t.name;if(Ru.has(e))return Xn.debug(`There were multiple attempts to register component ${e}.`),!1;Ru.set(e,t);for(const n of Go.values())IE(n,t);return!0}function Hc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const kE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mn=new _s("app","Firebase",kE);/**
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
 */class TE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mn.create("app-deleted",{appName:this._name})}}/**
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
 */const vs=SE;function hg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Nu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mn.create("bad-app-name",{appName:String(i)});if(n||(n=mw()),!n)throw mn.create("no-options");const s=Go.get(i);if(s){if($o(n,s.options)&&$o(r,s.config))return s;throw mn.create("duplicate-app",{appName:i})}const o=new Mw(i);for(const a of Ru.values())o.addComponent(a);const l=new TE(n,r,o);return Go.set(i,l),l}function fg(t=Nu){const e=Go.get(t);if(!e&&t===Nu)return hg();if(!e)throw mn.create("no-app",{appName:t});return e}function gn(t,e,n){var r;let i=(r=CE[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xn.warn(l.join(" "));return}Hr(new Yn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const NE="firebase-heartbeat-database",RE=1,rs="firebase-heartbeat-store";let _a=null;function pg(){return _a||(_a=Kw(NE,RE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(rs)}}}).catch(t=>{throw mn.create("idb-open",{originalErrorMessage:t.message})})),_a}async function PE(t){try{return(await pg()).transaction(rs).objectStore(rs).get(mg(t))}catch(e){if(e instanceof Rn)Xn.warn(e.message);else{const n=mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xn.warn(n.message)}}}async function Hh(t,e){try{const r=(await pg()).transaction(rs,"readwrite");return await r.objectStore(rs).put(e,mg(t)),r.done}catch(n){if(n instanceof Rn)Xn.warn(n.message);else{const r=mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xn.warn(r.message)}}}function mg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const xE=1024,OE=30*24*60*60*1e3;class AE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ME(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=$h();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=OE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=$h(),{heartbeatsToSend:n,unsentEntries:r}=DE(this._heartbeatsCache.heartbeats),i=jo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function $h(){return new Date().toISOString().substring(0,10)}function DE(t,e=xE){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Gh(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Gh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ME{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yw()?ww().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await PE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Gh(t){return jo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function LE(t){Hr(new Yn("platform-logger",e=>new Yw(e),"PRIVATE")),Hr(new Yn("heartbeat",e=>new AE(e),"PRIVATE")),gn(Tu,Vh,t),gn(Tu,Vh,"esm2017"),gn("fire-js","")}LE("");var bE="firebase",FE="9.19.1";/**
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
 */gn(bE,FE,"app");function $c(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function gg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const UE=gg,_g=new _s("auth","Firebase",gg());/**
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
 */const Kh=new jc("@firebase/auth");function po(t,...e){Kh.logLevel<=H.ERROR&&Kh.error(`Auth (${vs}): ${t}`,...e)}/**
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
 */function St(t,...e){throw Gc(t,...e)}function wt(t,...e){return Gc(t,...e)}function vg(t,e,n){const r=Object.assign(Object.assign({},UE()),{[e]:n});return new _s("auth","Firebase",r).create(e,{appName:t.name})}function zE(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&St(t,"argument-error"),vg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Gc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return _g.create(t,...e)}function A(t,e,...n){if(!t)throw Gc(e,...n)}function At(t){const e="INTERNAL ASSERTION FAILED: "+t;throw po(e),new Error(e)}function Bt(t,e){t||At(e)}/**
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
 */const Qh=new Map;function Dt(t){Bt(t instanceof Function,"Expected a class definition");let e=Qh.get(t);return e?(Bt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Qh.set(t,e),e)}/**
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
 */function WE(t,e){const n=Hc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if($o(s,e??{}))return i;St(i,"already-initialized")}return n.initialize({options:e})}function BE(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Pu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function jE(){return qh()==="http:"||qh()==="https:"}function qh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function VE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jE()||_w()||"connection"in navigator)?navigator.onLine:!0}function HE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ys{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bt(n>e,"Short delay should be less than long delay!"),this.isMobile=Wc()||lg()}get(){return VE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Kc(t,e){Bt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class yg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;At("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;At("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;At("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const $E={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const GE=new ys(3e4,6e4);function wg(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ws(t,e,n,r,i={}){return Eg(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ti(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),yg.fetch()(Cg(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function Eg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},$E),e);try{const i=new KE(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Xs(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xs(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Xs(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Xs(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw vg(t,d,u);St(t,d)}}catch(i){if(i instanceof Rn)throw i;St(t,"network-request-failed",{message:String(i)})}}async function Sg(t,e,n,r,i={}){const s=await ws(t,e,n,r,i);return"mfaPendingCredential"in s&&St(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Cg(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Kc(t.config,i):`${t.config.apiScheme}://${i}`}class KE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wt(this.auth,"network-request-failed")),GE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function QE(t,e){return ws(t,"POST","/v1/accounts:delete",e)}async function qE(t,e){return ws(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Di(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function YE(t,e=!1){const n=Me(t),r=await n.getIdToken(e),i=Qc(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Di(va(i.auth_time)),issuedAtTime:Di(va(i.iat)),expirationTime:Di(va(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function va(t){return Number(t)*1e3}function Qc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return po("JWT malformed, contained fewer than 3 sections"),null;try{const i=Vo(n);return i?JSON.parse(i):(po("Failed to decode base64 JWT payload"),null)}catch(i){return po("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function XE(t){const e=Qc(t);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function $r(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rn&&JE(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function JE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ZE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ig{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Di(this.lastLoginAt),this.creationTime=Di(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ko(t){var e;const n=t.auth,r=await t.getIdToken(),i=await $r(t,qE(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?nS(s.providerUserInfo):[],l=tS(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Ig(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function eS(t){const e=Me(t);await Ko(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function nS(t){return t.map(e=>{var{providerId:n}=e,r=$c(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function rS(t,e){const n=await Eg(t,{},async()=>{const r=ti({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Cg(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",yg.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):XE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return A(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await rS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new is;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new is,this.toJSON())}_performRefresh(){return At("not implemented")}}/**
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
 */function qt(t,e){A(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=$c(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ZE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ig(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await $r(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return YE(this,e)}reload(){return eS(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ko(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await $r(this,QE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(l=n.tenantId)!==null&&l!==void 0?l:void 0,R=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:y,isAnonymous:S,providerData:I,stsTokenManager:C}=n;A(m&&C,e,"internal-error");const N=is.fromJSON(this.name,C);A(typeof m=="string",e,"internal-error"),qt(c,e.name),qt(h,e.name),A(typeof y=="boolean",e,"internal-error"),A(typeof S=="boolean",e,"internal-error"),qt(g,e.name),qt(_,e.name),qt(v,e.name),qt(R,e.name),qt(p,e.name),qt(f,e.name);const V=new Vn({uid:m,auth:e,email:h,emailVerified:y,displayName:c,isAnonymous:S,photoURL:_,phoneNumber:g,tenantId:v,stsTokenManager:N,createdAt:p,lastLoginAt:f});return I&&Array.isArray(I)&&(V.providerData=I.map(L=>Object.assign({},L))),R&&(V._redirectEventId=R),V}static async _fromIdTokenResponse(e,n,r=!1){const i=new is;i.updateFromServerResponse(n);const s=new Vn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ko(s),s}}/**
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
 */class kg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}kg.type="NONE";const Yh=kg;/**
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
 */function mo(t,e,n){return`firebase:${t}:${e}:${n}`}class Or{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=mo(this.userKey,i.apiKey,s),this.fullPersistenceKey=mo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Or(Dt(Yh),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Dt(Yh);const o=mo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const c=Vn._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Or(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Or(s,e,r))}}/**
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
 */function Xh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xg(e))return"Blackberry";if(Og(e))return"Webos";if(qc(e))return"Safari";if((e.includes("chrome/")||Ng(e))&&!e.includes("edge/"))return"Chrome";if(Pg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Tg(t=Ne()){return/firefox\//i.test(t)}function qc(t=Ne()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ng(t=Ne()){return/crios\//i.test(t)}function Rg(t=Ne()){return/iemobile/i.test(t)}function Pg(t=Ne()){return/android/i.test(t)}function xg(t=Ne()){return/blackberry/i.test(t)}function Og(t=Ne()){return/webos/i.test(t)}function Rl(t=Ne()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function iS(t=Ne()){var e;return Rl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sS(){return vw()&&document.documentMode===10}function Ag(t=Ne()){return Rl(t)||Pg(t)||Og(t)||xg(t)||/windows phone/i.test(t)||Rg(t)}function oS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Dg(t,e=[]){let n;switch(t){case"Browser":n=Xh(Ne());break;case"Worker":n=`${Xh(Ne())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vs}/${r}`}/**
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
 */class lS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class aS{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jh(this),this.idTokenSubscription=new Jh(this),this.beforeStateQueue=new lS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_g,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Dt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Or.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ko(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=HE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Me(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Dt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _s("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Dt(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await Or.create(this,[Dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return A(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Es(t){return Me(t)}class Jh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Nw(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function uS(t,e,n){const r=Es(t);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Mg(e),{host:o,port:l}=cS(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||dS()}function Mg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function cS(t){const e=Mg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Zh(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Zh(o)}}}function Zh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function dS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Lg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return At("not implemented")}_getIdTokenResponse(e){return At("not implemented")}_linkToIdToken(e,n){return At("not implemented")}_getReauthenticationResolver(e){return At("not implemented")}}/**
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
 */async function Ar(t,e){return Sg(t,"POST","/v1/accounts:signInWithIdp",wg(t,e))}/**
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
 */const hS="http://localhost";class Jn extends Lg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Jn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):St("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=$c(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Jn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ar(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ar(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ar(e,n)}buildRequest(){const e={requestUri:hS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ti(n)}return e}}/**
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
 */class Yc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ss extends Yc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class en extends Ss{constructor(){super("facebook.com")}static credential(e){return Jn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
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
 */class Pt extends Ss{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Jn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Pt.credential(n,r)}catch{return null}}}Pt.GOOGLE_SIGN_IN_METHOD="google.com";Pt.PROVIDER_ID="google.com";/**
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
 */class tn extends Ss{constructor(){super("github.com")}static credential(e){return Jn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.GITHUB_SIGN_IN_METHOD="github.com";tn.PROVIDER_ID="github.com";/**
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
 */class nn extends Ss{constructor(){super("twitter.com")}static credential(e,n){return Jn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.TWITTER_SIGN_IN_METHOD="twitter.com";nn.PROVIDER_ID="twitter.com";/**
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
 */async function fS(t,e){return Sg(t,"POST","/v1/accounts:signUp",wg(t,e))}/**
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
 */class En{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Vn._fromIdTokenResponse(e,r,i),o=ef(r);return new En({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ef(r);return new En({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ef(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function pS(t){var e;const n=Es(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new En({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await fS(n,{returnSecureToken:!0}),i=await En._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Qo extends Rn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Qo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Qo(e,n,r,i)}}function bg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Qo._fromErrorAndOperation(t,s,e,r):s})}async function mS(t,e,n=!1){const r=await $r(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return En._forOperation(t,"link",r)}/**
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
 */async function gS(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await $r(t,bg(r,i,e,t),n);A(s.idToken,r,"internal-error");const o=Qc(s.idToken);A(o,r,"internal-error");const{sub:l}=o;return A(t.uid===l,r,"user-mismatch"),En._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&St(r,"user-mismatch"),s}}/**
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
 */async function _S(t,e,n=!1){const r="signIn",i=await bg(t,r,e),s=await En._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}/**
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
 */async function vS(t,e){return ws(t,"POST","/v1/accounts:update",e)}/**
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
 */async function yS(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Me(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await $r(r,vS(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:a})=>a==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function wS(t,e,n,r){return Me(t).onIdTokenChanged(e,n,r)}function ES(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function Fg(t,e,n,r){return Me(t).onAuthStateChanged(e,n,r)}const qo="__sak";/**
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
 */class Ug{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qo,"1"),this.storage.removeItem(qo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function SS(){const t=Ne();return qc(t)||Rl(t)}const CS=1e3,IS=10;class zg extends Ug{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=SS()&&oS(),this.fallbackToPolling=Ag(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);sS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,IS):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},CS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zg.type="LOCAL";const kS=zg;/**
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
 */class Wg extends Ug{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wg.type="SESSION";const Bg=Wg;/**
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
 */function TS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Pl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Pl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await TS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pl.receivers=[];/**
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
 */function Xc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class NS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Xc("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Et(){return window}function RS(t){Et().location.href=t}/**
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
 */function jg(){return typeof Et().WorkerGlobalScope<"u"&&typeof Et().importScripts=="function"}async function PS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function OS(){return jg()?self:null}/**
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
 */const Vg="firebaseLocalStorageDb",AS=1,Yo="firebaseLocalStorage",Hg="fbase_key";class Cs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xl(t,e){return t.transaction([Yo],e?"readwrite":"readonly").objectStore(Yo)}function DS(){const t=indexedDB.deleteDatabase(Vg);return new Cs(t).toPromise()}function xu(){const t=indexedDB.open(Vg,AS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yo,{keyPath:Hg})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yo)?e(r):(r.close(),await DS(),e(await xu()))})})}async function tf(t,e,n){const r=xl(t,!0).put({[Hg]:e,value:n});return new Cs(r).toPromise()}async function MS(t,e){const n=xl(t,!1).get(e),r=await new Cs(n).toPromise();return r===void 0?null:r.value}function nf(t,e){const n=xl(t,!0).delete(e);return new Cs(n).toPromise()}const LS=800,bS=3;class $g{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>bS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pl._getInstance(OS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await PS(),!this.activeServiceWorker)return;this.sender=new NS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xu();return await tf(e,qo,"1"),await nf(e,qo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>tf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>MS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>nf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=xl(i,!1).getAll();return new Cs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),LS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$g.type="LOCAL";const FS=$g;/**
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
 */function US(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function zS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=wt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",US().appendChild(r)})}function WS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ys(3e4,6e4);/**
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
 */function Gg(t,e){return e?Dt(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Jc extends Lg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ar(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ar(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ar(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function BS(t){return _S(t.auth,new Jc(t),t.bypassAuthState)}function jS(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),gS(n,new Jc(t),t.bypassAuthState)}async function VS(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),mS(n,new Jc(t),t.bypassAuthState)}/**
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
 */class Kg{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BS;case"linkViaPopup":case"linkViaRedirect":return VS;case"reauthViaPopup":case"reauthViaRedirect":return jS;default:St(this.auth,"internal-error")}}resolve(e){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const HS=new ys(2e3,1e4);class Er extends Kg{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Er.currentPopupAction&&Er.currentPopupAction.cancel(),Er.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){Bt(this.filter.length===1,"Popup operations only handle one event");const e=Xc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Er.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,HS.get())};e()}}Er.currentPopupAction=null;/**
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
 */const $S="pendingRedirect",go=new Map;class GS extends Kg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=go.get(this.auth._key());if(!e){try{const r=await KS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}go.set(this.auth._key(),e)}return this.bypassAuthState||go.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KS(t,e){const n=qg(e),r=Qg(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function QS(t,e){return Qg(t)._set(qg(e),"true")}function qS(t,e){go.set(t._key(),e)}function Qg(t){return Dt(t._redirectPersistence)}function qg(t){return mo($S,t.config.apiKey,t.name)}/**
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
 */function YS(t,e,n){return XS(t,e,n)}async function XS(t,e,n){const r=Es(t);zE(t,e,Yc),await r._initializationPromise;const i=Gg(r,n);return await QS(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function JS(t,e,n=!1){const r=Es(t),i=Gg(r,e),o=await new GS(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const ZS=10*60*1e3;class eC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Yg(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ZS&&this.cachedEventUids.clear(),this.cachedEventUids.has(rf(e))}saveEventToCache(e){this.cachedEventUids.add(rf(e)),this.lastProcessedEventTime=Date.now()}}function rf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Yg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yg(t);default:return!1}}/**
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
 */async function nC(t,e={}){return ws(t,"GET","/v1/projects",e)}/**
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
 */const rC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iC=/^https?/;async function sC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nC(t);for(const n of e)try{if(oC(n))return}catch{}St(t,"unauthorized-domain")}function oC(t){const e=Pu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!iC.test(n))return!1;if(rC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const lC=new ys(3e4,6e4);function sf(){const t=Et().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function aC(t){return new Promise((e,n)=>{var r,i,s;function o(){sf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sf(),n(wt(t,"network-request-failed"))},timeout:lC.get()})}if(!((i=(r=Et().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Et().gapi)===null||s===void 0)&&s.load)o();else{const l=WS("iframefcb");return Et()[l]=()=>{gapi.load?o():n(wt(t,"network-request-failed"))},zS(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw _o=null,e})}let _o=null;function uC(t){return _o=_o||aC(t),_o}/**
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
 */const cC=new ys(5e3,15e3),dC="__/auth/iframe",hC="emulator/auth/iframe",fC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mC(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Kc(e,hC):`https://${t.config.authDomain}/${dC}`,r={apiKey:e.apiKey,appName:t.name,v:vs},i=pC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ti(r).slice(1)}`}async function gC(t){const e=await uC(t),n=Et().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:mC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=wt(t,"network-request-failed"),l=Et().setTimeout(()=>{s(o)},cC.get());function a(){Et().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const _C={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vC=500,yC=600,wC="_blank",EC="http://localhost";class of{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function SC(t,e,n,r=vC,i=yC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},_C),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ne().toLowerCase();n&&(l=Ng(u)?wC:n),Tg(u)&&(e=e||EC,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(iS(u)&&l!=="_self")return CC(e||"",l),new of(null);const c=window.open(e||"",l,d);A(c,t,"popup-blocked");try{c.focus()}catch{}return new of(c)}function CC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const IC="__/auth/handler",kC="emulator/auth/handler";function lf(t,e,n,r,i,s){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:vs,eventId:i};if(e instanceof Yc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Cu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,u]of Object.entries(s||{}))o[a]=u}if(e instanceof Ss){const a=e.getScopes().filter(u=>u!=="");a.length>0&&(o.scopes=a.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const a of Object.keys(l))l[a]===void 0&&delete l[a];return`${TC(t)}?${ti(l).slice(1)}`}function TC({config:t}){return t.emulator?Kc(t,kC):`https://${t.authDomain}/${IC}`}/**
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
 */const ya="webStorageSupport";class NC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bg,this._completeRedirectFn=JS,this._overrideRedirectResult=qS}async _openPopup(e,n,r,i){var s;Bt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=lf(e,n,r,Pu(),i);return SC(e,o,Xc())}async _openRedirect(e,n,r,i){return await this._originValidation(e),RS(lf(e,n,r,Pu(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Bt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await gC(e),r=new eC(e);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ya,{type:ya},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ya];o!==void 0&&n(!!o),St(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ag()||qc()||Rl()}}const RC=NC;var af="@firebase/auth",uf="0.22.0";/**
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
 */class PC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function xC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function OC(t){Hr(new Yn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((l,a)=>{A(s&&!s.includes(":"),"invalid-api-key",{appName:l.name}),A(!(o!=null&&o.includes(":")),"argument-error",{appName:l.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dg(t)},d=new aS(l,a,u);return BE(d,n),d})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Hr(new Yn("auth-internal",e=>{const n=Es(e.getProvider("auth").getImmediate());return(r=>new PC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(af,uf,xC(t)),gn(af,uf,"esm2017")}/**
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
 */const AC=5*60,DC=og("authIdTokenMaxAge")||AC;let cf=null;const MC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>DC)return;const i=n==null?void 0:n.token;cf!==i&&(cf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Xg(t=fg()){const e=Hc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=WE(t,{popupRedirectResolver:RC,persistence:[FS,kS,Bg]}),r=og("authTokenSyncURL");if(r){const s=MC(r);ES(n,s,()=>s(n.currentUser)),wS(n,o=>s(o))}const i=sg("auth");return i&&uS(n,`http://${i}`),n}OC("Browser");/*! *****************************************************************************
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
***************************************************************************** */function Jg(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function l(d){try{u(r.next(d))}catch(c){o(c)}}function a(d){try{u(r.throw(d))}catch(c){o(c)}}function u(d){d.done?s(d.value):i(d.value).then(l,a)}u((r=r.apply(t,e||[])).next())})}function Zg(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(u){return function(d){return a([u,d])}}function a(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(d){u=[6,d],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
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
***************************************************************************** */var Sr=function(){return Sr=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Sr.apply(this,arguments)},e_=function(t){return{loading:t==null,value:t}},LC=function(){return function(t,e){switch(e.type){case"error":return Sr(Sr({},t),{error:e.error,loading:!1,value:void 0});case"reset":return e_(e.defaultValue);case"value":return Sr(Sr({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},bC=function(t){var e=t?t():void 0,n=D.useReducer(LC(),e_(e)),r=n[0],i=n[1],s=D.useCallback(function(){var a=t?t():void 0;i({type:"reset",defaultValue:a})},[t]),o=D.useCallback(function(a){i({type:"error",error:a})},[]),l=D.useCallback(function(a){i({type:"value",value:a})},[]);return D.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:l,value:r.value}},[r.error,r.loading,s,o,l,r.value])},FC=function(t,e){var n=bC(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,l=n.value;return D.useEffect(function(){var a=Fg(t,function(u){return Jg(void 0,void 0,void 0,function(){var d;return Zg(this,function(c){switch(c.label){case 0:if(!(e!=null&&e.onUserChanged))return[3,4];c.label=1;case 1:return c.trys.push([1,3,,4]),[4,e.onUserChanged(u)];case 2:return c.sent(),[3,4];case 3:return d=c.sent(),s(d),[3,4];case 4:return o(u),[2]}})})},s);return function(){a()}},[t]),[l,i,r]},UC=function(t){var e=D.useState(),n=e[0],r=e[1],i=D.useState(!1),s=i[0],o=i[1],l=D.useCallback(function(a){return Jg(void 0,void 0,void 0,function(){var u;return Zg(this,function(d){switch(d.label){case 0:o(!0),r(void 0),d.label=1;case 1:return d.trys.push([1,5,6,7]),t.currentUser?[4,yS(t.currentUser,a)]:[3,3];case 2:return d.sent(),[2,!0];case 3:throw new Error("No user is logged in");case 4:return[3,7];case 5:return u=d.sent(),r(u),[2,!1];case 6:return o(!1),[7];case 7:return[2]}})})},[t]);return[l,s,n]};function zC(t){const e=Xg(t.app);let n=t.user,r=t.loadingUser;return ye("div",{className:"h-[10vh] bg-gray-500 flex-row flex items-center justify-between px-4",children:[O("h1",{children:"RPS"}),O("div",{className:"",children:t.user?ye("div",{className:"flex items-center justify-end",children:[ye("h3",{className:"m-4",children:["Hello ",n.displayName,"!"]}),O("button",{className:"m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all",onClick:()=>{t.auth.signOut()},children:"Sign Out"})]}):r?O(Rt,{children:"Loading"}):ye("div",{className:"flex items-center justify-center",children:[O("button",{className:"m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all",onClick:()=>{const i=new Pt;YS(e,i)},children:"Google Sign In"}),O("button",{className:"m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all",onClick:()=>{pS(e),t.setInputName(!0)},children:"Sign In Anonymously"})]})})]})}const df="@firebase/database",hf="0.14.4";/**
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
 */let t_="";function WC(t){t_=t}/**
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
 */class BC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ue(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ns(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class jC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ht(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const n_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new BC(e)}}catch{}return new jC},zn=n_("localStorage"),Ou=n_("sessionStorage");/**
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
 */const Dr=new jc("@firebase/database"),VC=function(){let t=1;return function(){return t++}}(),r_=function(t){const e=xw(t),n=new Tw;n.update(e);const r=n.digest();return Uc.encodeByteArray(r)},Is=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Is.apply(null,r):typeof r=="object"?e+=ue(r):e+=r,e+=" "}return e};let Hn=null,ff=!0;const HC=function(t,e){E(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Dr.logLevel=H.VERBOSE,Hn=Dr.log.bind(Dr),e&&Ou.set("logging_enabled",!0)):typeof t=="function"?Hn=t:(Hn=null,Ou.remove("logging_enabled"))},ke=function(...t){if(ff===!0&&(ff=!1,Hn===null&&Ou.get("logging_enabled")===!0&&HC(!0)),Hn){const e=Is.apply(null,t);Hn(e)}},ks=function(t){return function(...e){ke(t,...e)}},Au=function(...t){const e="FIREBASE INTERNAL ERROR: "+Is(...t);Dr.error(e)},jt=function(...t){const e=`FIREBASE FATAL ERROR: ${Is(...t)}`;throw Dr.error(e),new Error(e)},je=function(...t){const e="FIREBASE WARNING: "+Is(...t);Dr.warn(e)},$C=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&je("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},i_=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},GC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Gr="[MIN_NAME]",Zn="[MAX_NAME]",ni=function(t,e){if(t===e)return 0;if(t===Gr||e===Zn)return-1;if(e===Gr||t===Zn)return 1;{const n=pf(t),r=pf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},KC=function(t,e){return t===e?0:t<e?-1:1},mi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ue(e))},Zc=function(t){if(typeof t!="object"||t===null)return ue(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ue(e[r]),n+=":",n+=Zc(t[e[r]]);return n+="}",n},s_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ve(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const o_=function(t){E(!i_(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},QC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},qC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function YC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const XC=new RegExp("^-?(0*)\\d{1,10}$"),JC=-2147483648,ZC=2147483647,pf=function(t){if(XC.test(t)){const e=Number(t);if(e>=JC&&e<=ZC)return e}return null},ri=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw je("Exception was thrown by user callback.",n),e},Math.floor(0))}},eI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Mi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class tI{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){je(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class nI{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ke("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',je(e)}}class Mr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Mr.OWNER="owner";/**
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
 */const ed="5",l_="v",a_="s",u_="r",c_="f",d_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,h_="ls",f_="p",Du="ac",p_="websocket",m_="long_polling";/**
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
 */class g_{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=zn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&zn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function rI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function __(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let r;if(e===p_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===m_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);rI(t)&&(n.ns=t.namespace);const i=[];return Ve(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class iI{constructor(){this.counters_={}}incrementCounter(e,n=1){Ht(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return aw(this.counters_)}}/**
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
 */const wa={},Ea={};function td(t){const e=t.toString();return wa[e]||(wa[e]=new iI),wa[e]}function sI(t,e){const n=t.toString();return Ea[n]||(Ea[n]=e()),Ea[n]}/**
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
 */class oI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ri(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const mf="start",lI="close",aI="pLPCommand",uI="pRTLPCB",v_="id",y_="pw",w_="ser",cI="cb",dI="seg",hI="ts",fI="d",pI="dframe",E_=1870,S_=30,mI=E_-S_,gI=25e3,_I=3e4;class Cr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ks(e),this.stats_=td(n),this.urlFn=a=>(this.appCheckToken&&(a[Du]=this.appCheckToken),__(n,m_,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new oI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(_I)),GC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new nd((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===mf)this.id=l,this.password=a;else if(o===lI)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[mf]="t",r[w_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[cI]=this.scriptTagHolder.uniqueCallbackIdentifier),r[l_]=ed,this.transportSessionId&&(r[a_]=this.transportSessionId),this.lastSessionId&&(r[h_]=this.lastSessionId),this.applicationId&&(r[f_]=this.applicationId),this.appCheckToken&&(r[Du]=this.appCheckToken),typeof location<"u"&&location.hostname&&d_.test(location.hostname)&&(r[u_]=c_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Cr.forceAllow_=!0}static forceDisallow(){Cr.forceDisallow_=!0}static isAvailable(){return Cr.forceAllow_?!0:!Cr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!QC()&&!qC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=rg(n),i=s_(r,mI);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[pI]="t",r[v_]=e,r[y_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ue(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class nd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=VC(),window[aI+this.uniqueCallbackIdentifier]=e,window[uI+this.uniqueCallbackIdentifier]=n,this.myIFrame=nd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ke("frame writing exception"),l.stack&&ke(l.stack),ke(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ke("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[v_]=this.myID,e[y_]=this.myPW,e[w_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+S_+r.length<=E_;){const o=this.pendingSegs.shift();r=r+"&"+dI+i+"="+o.seg+"&"+hI+i+"="+o.ts+"&"+fI+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(gI)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ke("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const vI=16384,yI=45e3;let Xo=null;typeof MozWebSocket<"u"?Xo=MozWebSocket:typeof WebSocket<"u"&&(Xo=WebSocket);class at{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ks(this.connId),this.stats_=td(n),this.connURL=at.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[l_]=ed,typeof location<"u"&&location.hostname&&d_.test(location.hostname)&&(o[u_]=c_),n&&(o[a_]=n),r&&(o[h_]=r),i&&(o[Du]=i),s&&(o[f_]=s),__(e,p_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,zn.set("previous_websocket_failure",!0);try{let r;ag(),this.mySock=new Xo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){at.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Xo!==null&&!at.forceDisallow_}static previouslyFailed(){return zn.isInMemoryStorage||zn.get("previous_websocket_failure")===!0}markConnectionHealthy(){zn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ns(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=s_(n,vI);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(yI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}at.responsesRequiredToBeHealthy=2;at.healthyTimeout=3e4;/**
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
 */class ss{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Cr,at]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=at&&at.isAvailable();let r=n&&!at.previouslyFailed();if(e.webSocketOnly&&(n||je("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[at];else{const i=this.transports_=[];for(const s of ss.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ss.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ss.globalTransportInitialized_=!1;/**
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
 */const wI=6e4,EI=5e3,SI=10*1024,CI=100*1024,Sa="t",gf="d",II="s",_f="r",kI="e",vf="o",yf="a",wf="n",Ef="p",TI="h";class NI{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ks("c:"+this.id+":"),this.transportManager_=new ss(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Mi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>CI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>SI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Sa in e){const n=e[Sa];n===yf?this.upgradeIfSecondaryHealthy_():n===_f?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===vf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=mi("t",e),r=mi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ef,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:yf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:wf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=mi("t",e),r=mi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=mi(Sa,e);if(gf in e){const r=e[gf];if(n===TI){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===wf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===II?this.onConnectionShutdown_(r):n===_f?this.onReset_(r):n===kI?Au("Server Error: "+r):n===vf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Au("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ed!==r&&je("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Mi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(wI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Mi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(EI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ef,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(zn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class C_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class I_{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Jo extends I_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Wc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Jo}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Sf=32,Cf=768;class ${constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function B(){return new $("")}function b(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Sn(t){return t.pieces_.length-t.pieceNum_}function G(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new $(t.pieces_,e)}function k_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function RI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function T_(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function N_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new $(e,0)}function ce(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof $)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new $(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function xe(t,e){const n=b(t),r=b(e);if(n===null)return e;if(n===r)return xe(G(t),G(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function rd(t,e){if(Sn(t)!==Sn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ut(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Sn(t)>Sn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class PI{constructor(e,n){this.errorPrefix_=n,this.parts_=T_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Nl(this.parts_[r]);R_(this)}}function xI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Nl(e),R_(t)}function OI(t){const e=t.parts_.pop();t.byteLength_-=Nl(e),t.parts_.length>0&&(t.byteLength_-=1)}function R_(t){if(t.byteLength_>Cf)throw new Error(t.errorPrefix_+"has a key path longer than "+Cf+" bytes ("+t.byteLength_+").");if(t.parts_.length>Sf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Sf+") or object contains a cycle "+Ln(t))}function Ln(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class id extends I_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new id}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const gi=1e3,AI=60*5*1e3,If=30*1e3,DI=1.3,MI=3e4,LI="server_kill",kf=3;class bt extends C_{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=bt.nextPersistentConnectionId_++,this.log_=ks("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=gi,this.maxReconnectDelay_=AI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!ag())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");id.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Jo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ue(s)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Tl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;bt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ht(e,"w")){const r=Vr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();je(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||kw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=If)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Iw(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ue(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Au("Unrecognized action received from server: "+ue(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=gi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=gi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>MI&&(this.reconnectDelay_=gi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*DI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+bt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?ke("getToken() completed but was canceled"):(ke("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new NI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{je(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(LI)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&je(c),a())}}}interrupt(e){ke("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ke("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Cu(this.interruptReasons_)&&(this.reconnectDelay_=gi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Zc(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new $(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ke("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=kf&&(this.reconnectDelay_=If,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ke("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=kf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+t_.replace(/\./g,"-")]=1,Wc()?e["framework.cordova"]=1:lg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Jo.getInstance().currentlyOnline();return Cu(this.interruptReasons_)&&e}}bt.nextPersistentConnectionId_=0;bt.nextConnectionId_=0;/**
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
 */class Ol{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new F(Gr,e),i=new F(Gr,n);return this.compare(r,i)!==0}minPost(){return F.MIN}}/**
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
 */let Js;class P_ extends Ol{static get __EMPTY_NODE(){return Js}static set __EMPTY_NODE(e){Js=e}compare(e,n){return ni(e.name,n.name)}isDefinedOn(e){throw ei("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(Zn,Js)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,Js)}toString(){return".key"}}const Lr=new P_;/**
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
 */class Zs{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class me{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??me.RED,this.left=i??Ue.EMPTY_NODE,this.right=s??Ue.EMPTY_NODE}copy(e,n,r,i,s){return new me(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ue.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ue.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}me.RED=!0;me.BLACK=!1;class bI{copy(e,n,r,i,s){return this}insert(e,n,r){return new me(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ue{constructor(e,n=Ue.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ue(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,me.BLACK,null,null))}remove(e){return new Ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,me.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Zs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Zs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Zs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Zs(this.root_,null,this.comparator_,!0,e)}}Ue.EMPTY_NODE=new bI;/**
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
 */function FI(t,e){return ni(t.name,e.name)}function sd(t,e){return ni(t,e)}/**
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
 */let Mu;function UI(t){Mu=t}const x_=function(t){return typeof t=="number"?"number:"+o_(t):"string:"+t},O_=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ht(e,".sv"),"Priority must be a string or number.")}else E(t===Mu||t.isEmpty(),"priority of unexpected type.");E(t===Mu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Tf;class fe{constructor(e,n=fe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),O_(this.priorityNode_)}static set __childrenNodeConstructor(e){Tf=e}static get __childrenNodeConstructor(){return Tf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new fe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:fe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:b(e)===".priority"?this.priorityNode_:fe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:fe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=b(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(E(r!==".priority"||Sn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,fe.__childrenNodeConstructor.EMPTY_NODE.updateChild(G(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+x_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=o_(this.value_):e+=this.value_,this.lazyHash_=r_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===fe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof fe.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=fe.VALUE_TYPE_ORDER.indexOf(n),s=fe.VALUE_TYPE_ORDER.indexOf(r);return E(i>=0,"Unknown leaf type: "+n),E(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}fe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let A_,D_;function zI(t){A_=t}function WI(t){D_=t}class BI extends Ol{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ni(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(Zn,new fe("[PRIORITY-POST]",D_))}makePost(e,n){const r=A_(e);return new F(n,new fe("[PRIORITY-POST]",r))}toString(){return".priority"}}const se=new BI;/**
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
 */const jI=Math.log(2);class VI{constructor(e){const n=s=>parseInt(Math.log(s)/jI,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Zo=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=t[a],h=n?n(c):c,new me(h,c.node,me.BLACK,null,null);{const g=parseInt(d/2,10)+a,_=i(a,g),v=i(g+1,u);return c=t[g],h=n?n(c):c,new me(h,c.node,me.BLACK,_,v)}},s=function(a){let u=null,d=null,c=t.length;const h=function(_,v){const R=c-_,p=c;c-=_;const f=i(R+1,p),m=t[R],y=n?n(m):m;g(new me(y,m.node,v,null,f))},g=function(_){u?(u.left=_,u=_):(d=_,u=_)};for(let _=0;_<a.count;++_){const v=a.nextBitIsOne(),R=Math.pow(2,a.count-(_+1));v?h(R,me.BLACK):(h(R,me.BLACK),h(R,me.RED))}return d},o=new VI(t.length),l=s(o);return new Ue(r||e,l)};/**
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
 */let Ca;const lr={};class Mt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return E(lr&&se,"ChildrenNode.ts has not been loaded"),Ca=Ca||new Mt({".priority":lr},{".priority":se}),Ca}get(e){const n=Vr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ue?n:null}hasIndex(e){return Ht(this.indexSet_,e.toString())}addIndex(e,n){E(e!==Lr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(F.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Zo(r,e.getCompare()):l=lr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new Mt(d,u)}addToIndexes(e,n){const r=Ho(this.indexes_,(i,s)=>{const o=Vr(this.indexSet_,s);if(E(o,"Missing index implementation for "+s),i===lr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(F.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Zo(l,o.getCompare())}else return lr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new F(e.name,l))),a.insert(e,e.node)}});return new Mt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Ho(this.indexes_,i=>{if(i===lr)return i;{const s=n.get(e.name);return s?i.remove(new F(e.name,s)):i}});return new Mt(r,this.indexSet_)}}/**
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
 */let _i;class P{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&O_(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return _i||(_i=new P(new Ue(sd),null,Mt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_i}updatePriority(e){return this.children_.isEmpty()?this:new P(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?_i:n}}getChild(e){const n=b(e);return n===null?this:this.getImmediateChild(n).getChild(G(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new F(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?_i:this.priorityNode_;return new P(i,o,s)}}updateChild(e,n){const r=b(e);if(r===null)return n;{E(b(e)!==".priority"||Sn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(G(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(se,(o,l)=>{n[o]=l.val(e),r++,s&&P.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+x_(this.getPriority().val())+":"),this.forEachChild(se,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":r_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new F(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ts?-1:0}withIndex(e){if(e===Lr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new P(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Lr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(se),i=n.getIterator(se);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Lr?null:this.indexMap_.get(e.toString())}}P.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class HI extends P{constructor(){super(new Ue(sd),P.EMPTY_NODE,Mt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return P.EMPTY_NODE}isEmpty(){return!1}}const Ts=new HI;Object.defineProperties(F,{MIN:{value:new F(Gr,P.EMPTY_NODE)},MAX:{value:new F(Zn,Ts)}});P_.__EMPTY_NODE=P.EMPTY_NODE;fe.__childrenNodeConstructor=P;UI(Ts);WI(Ts);/**
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
 */const $I=!0;function ge(t,e=null){if(t===null)return P.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new fe(n,ge(e))}if(!(t instanceof Array)&&$I){const n=[];let r=!1;if(Ve(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ge(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new F(o,a)))}}),n.length===0)return P.EMPTY_NODE;const s=Zo(n,FI,o=>o.name,sd);if(r){const o=Zo(n,se.getCompare());return new P(s,ge(e),new Mt({".priority":o},{".priority":se}))}else return new P(s,ge(e),Mt.Default)}else{let n=P.EMPTY_NODE;return Ve(t,(r,i)=>{if(Ht(t,r)&&r.substring(0,1)!=="."){const s=ge(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ge(e))}}zI(ge);/**
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
 */class GI extends Ol{constructor(e){super(),this.indexPath_=e,E(!U(e)&&b(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ni(e.name,n.name):s}makePost(e,n){const r=ge(e),i=P.EMPTY_NODE.updateChild(this.indexPath_,r);return new F(n,i)}maxPost(){const e=P.EMPTY_NODE.updateChild(this.indexPath_,Ts);return new F(Zn,e)}toString(){return T_(this.indexPath_,0).join("/")}}/**
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
 */class KI extends Ol{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ni(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const r=ge(e);return new F(n,r)}toString(){return".value"}}const QI=new KI;/**
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
 */function M_(t){return{type:"value",snapshotNode:t}}function Kr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function os(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ls(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function qI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class od{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(os(n,l)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Kr(n,r)):o.trackChildChange(ls(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(se,(i,s)=>{n.hasChild(i)||r.trackChildChange(os(i,s))}),n.isLeafNode()||n.forEachChild(se,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ls(i,s,o))}else r.trackChildChange(Kr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?P.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class as{constructor(e){this.indexedFilter_=new od(e.getIndex()),this.index_=e.getIndex(),this.startPost_=as.getStartPost_(e),this.endPost_=as.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new F(n,r))||(r=P.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=P.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(P.EMPTY_NODE);const s=this;return n.forEachChild(se,(o,l)=>{s.matches(new F(o,l))||(i=i.updateImmediateChild(o,P.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class YI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new as(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new F(n,r))||(r=P.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=P.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=P.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(P.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,P.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,g)=>c(g,h)}else o=this.index_.getCompare();const l=e;E(l.numChildren()===this.limit_,"");const a=new F(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,a);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(ls(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(os(n,c));const v=l.updateImmediateChild(n,P.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Kr(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(os(u.name,u.node)),s.trackChildChange(Kr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,P.EMPTY_NODE)):e}}/**
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
 */class ld{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=se}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Gr}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Zn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===se}copy(){const e=new ld;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function XI(t){return t.loadsAllData()?new od(t.getIndex()):t.hasLimit()?new YI(t):new as(t)}function Nf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===se?n="$priority":t.index_===QI?n="$value":t.index_===Lr?n="$key":(E(t.index_ instanceof GI,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ue(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ue(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ue(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ue(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ue(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Rf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==se&&(e.i=t.index_.toString()),e}/**
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
 */class el extends C_{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ks("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=el.getListenId_(e,r),l={};this.listens_[o]=l;const a=Nf(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Vr(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=el.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Nf(e._queryParams),r=e._path.toString(),i=new Tl;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ti(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ns(l.responseText)}catch{je("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&je("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class JI{constructor(){this.rootNode_=P.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function tl(){return{value:null,children:new Map}}function L_(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=b(e);t.children.has(r)||t.children.set(r,tl());const i=t.children.get(r);e=G(e),L_(i,e,n)}}function Lu(t,e,n){t.value!==null?n(e,t.value):ZI(t,(r,i)=>{const s=new $(e.toString()+"/"+r);Lu(i,s,n)})}function ZI(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class e1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ve(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Pf=10*1e3,t1=30*1e3,n1=5*60*1e3;class r1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new e1(e);const r=Pf+(t1-Pf)*Math.random();Mi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ve(e,(i,s)=>{s>0&&Ht(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Mi(this.reportStats_.bind(this),Math.floor(Math.random()*2*n1))}}/**
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
 */var ct;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ct||(ct={}));function b_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ad(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ud(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class nl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ct.ACK_USER_WRITE,this.source=b_()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new $(e));return new nl(B(),n,this.revert)}}else return E(b(this.path)===e,"operationForChild called for unrelated child."),new nl(G(this.path),this.affectedTree,this.revert)}}/**
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
 */class us{constructor(e,n){this.source=e,this.path=n,this.type=ct.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new us(this.source,B()):new us(this.source,G(this.path))}}/**
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
 */class er{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ct.OVERWRITE}operationForChild(e){return U(this.path)?new er(this.source,B(),this.snap.getImmediateChild(e)):new er(this.source,G(this.path),this.snap)}}/**
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
 */class cs{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ct.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new $(e));return n.isEmpty()?null:n.value?new er(this.source,B(),n.value):new cs(this.source,B(),n)}else return E(b(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new cs(this.source,G(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class i1{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function s1(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(qI(o.childName,o.snapshotNode))}),vi(t,i,"child_removed",e,r,n),vi(t,i,"child_added",e,r,n),vi(t,i,"child_moved",s,r,n),vi(t,i,"child_changed",e,r,n),vi(t,i,"value",e,r,n),i}function vi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>l1(t,l,a)),o.forEach(l=>{const a=o1(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function o1(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function l1(t,e,n){if(e.childName==null||n.childName==null)throw ei("Should only compare child_ events.");const r=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Al(t,e){return{eventCache:t,serverCache:e}}function Li(t,e,n,r){return Al(new Cn(e,n,r),t.serverCache)}function F_(t,e,n,r){return Al(t.eventCache,new Cn(e,n,r))}function rl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function tr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ia;const a1=()=>(Ia||(Ia=new Ue(KC)),Ia);class q{constructor(e,n=a1()){this.value=e,this.children=n}static fromObject(e){let n=new q(null);return Ve(e,(r,i)=>{n=n.set(new $(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:B(),value:this.value};if(U(e))return null;{const r=b(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(G(e),n);return s!=null?{path:ce(new $(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=b(e),r=this.children.get(n);return r!==null?r.subtree(G(e)):new q(null)}}set(e,n){if(U(e))return new q(n,this.children);{const r=b(e),s=(this.children.get(r)||new q(null)).set(G(e),n),o=this.children.insert(r,s);return new q(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new q(null):new q(null,this.children);{const n=b(e),r=this.children.get(n);if(r){const i=r.remove(G(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new q(null):new q(this.value,s)}else return this}}get(e){if(U(e))return this.value;{const n=b(e),r=this.children.get(n);return r?r.get(G(e)):null}}setTree(e,n){if(U(e))return n;{const r=b(e),s=(this.children.get(r)||new q(null)).setTree(G(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new q(this.value,o)}}fold(e){return this.fold_(B(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ce(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,B(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(U(e))return null;{const s=b(e),o=this.children.get(s);return o?o.findOnPath_(G(e),ce(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,B(),n)}foreachOnPath_(e,n,r){if(U(e))return this;{this.value&&r(n,this.value);const i=b(e),s=this.children.get(i);return s?s.foreachOnPath_(G(e),ce(n,i),r):new q(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ce(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class ft{constructor(e){this.writeTree_=e}static empty(){return new ft(new q(null))}}function bi(t,e,n){if(U(e))return new ft(new q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=xe(i,e);return s=s.updateChild(o,n),new ft(t.writeTree_.set(i,s))}else{const i=new q(n),s=t.writeTree_.setTree(e,i);return new ft(s)}}}function xf(t,e,n){let r=t;return Ve(n,(i,s)=>{r=bi(r,ce(e,i),s)}),r}function Of(t,e){if(U(e))return ft.empty();{const n=t.writeTree_.setTree(e,new q(null));return new ft(n)}}function bu(t,e){return ir(t,e)!=null}function ir(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(xe(n.path,e)):null}function Af(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(se,(r,i)=>{e.push(new F(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new F(r,i.value))}),e}function _n(t,e){if(U(e))return t;{const n=ir(t,e);return n!=null?new ft(new q(n)):new ft(t.writeTree_.subtree(e))}}function Fu(t){return t.writeTree_.isEmpty()}function Qr(t,e){return U_(B(),t.writeTree_,e)}function U_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(E(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=U_(ce(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ce(t,".priority"),r)),n}}/**
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
 */function Dl(t,e){return j_(e,t)}function u1(t,e,n,r,i){E(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=bi(t.visibleWrites,e,n)),t.lastWriteId=r}function c1(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function d1(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&h1(l,r.path)?i=!1:ut(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return f1(t),!0;if(r.snap)t.visibleWrites=Of(t.visibleWrites,r.path);else{const l=r.children;Ve(l,a=>{t.visibleWrites=Of(t.visibleWrites,ce(r.path,a))})}return!0}else return!1}function h1(t,e){if(t.snap)return ut(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ut(ce(t.path,n),e))return!0;return!1}function f1(t){t.visibleWrites=z_(t.allWrites,p1,B()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function p1(t){return t.visible}function z_(t,e,n){let r=ft.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)ut(n,o)?(l=xe(n,o),r=bi(r,l,s.snap)):ut(o,n)&&(l=xe(o,n),r=bi(r,B(),s.snap.getChild(l)));else if(s.children){if(ut(n,o))l=xe(n,o),r=xf(r,l,s.children);else if(ut(o,n))if(l=xe(o,n),U(l))r=xf(r,B(),s.children);else{const a=Vr(s.children,b(l));if(a){const u=a.getChild(G(l));r=bi(r,B(),u)}}}else throw ei("WriteRecord should have .snap or .children")}}return r}function W_(t,e,n,r,i){if(!r&&!i){const s=ir(t.visibleWrites,e);if(s!=null)return s;{const o=_n(t.visibleWrites,e);if(Fu(o))return n;if(n==null&&!bu(o,B()))return null;{const l=n||P.EMPTY_NODE;return Qr(o,l)}}}else{const s=_n(t.visibleWrites,e);if(!i&&Fu(s))return n;if(!i&&n==null&&!bu(s,B()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(ut(u.path,e)||ut(e,u.path))},l=z_(t.allWrites,o,e),a=n||P.EMPTY_NODE;return Qr(l,a)}}}function m1(t,e,n){let r=P.EMPTY_NODE;const i=ir(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(se,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=_n(t.visibleWrites,e);return n.forEachChild(se,(o,l)=>{const a=Qr(_n(s,new $(o)),l);r=r.updateImmediateChild(o,a)}),Af(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=_n(t.visibleWrites,e);return Af(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function g1(t,e,n,r,i){E(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ce(e,n);if(bu(t.visibleWrites,s))return null;{const o=_n(t.visibleWrites,s);return Fu(o)?i.getChild(n):Qr(o,i.getChild(n))}}function _1(t,e,n,r){const i=ce(e,n),s=ir(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=_n(t.visibleWrites,i);return Qr(o,r.getNode().getImmediateChild(n))}else return null}function v1(t,e){return ir(t.visibleWrites,e)}function y1(t,e,n,r,i,s,o){let l;const a=_n(t.visibleWrites,e),u=ir(a,B());if(u!=null)l=u;else if(n!=null)l=Qr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=h.getNext();for(;g&&d.length<i;)c(g,r)!==0&&d.push(g),g=h.getNext();return d}else return[]}function w1(){return{visibleWrites:ft.empty(),allWrites:[],lastWriteId:-1}}function il(t,e,n,r){return W_(t.writeTree,t.treePath,e,n,r)}function cd(t,e){return m1(t.writeTree,t.treePath,e)}function Df(t,e,n,r){return g1(t.writeTree,t.treePath,e,n,r)}function sl(t,e){return v1(t.writeTree,ce(t.treePath,e))}function E1(t,e,n,r,i,s){return y1(t.writeTree,t.treePath,e,n,r,i,s)}function dd(t,e,n){return _1(t.writeTree,t.treePath,e,n)}function B_(t,e){return j_(ce(t.treePath,e),t.writeTree)}function j_(t,e){return{treePath:t,writeTree:e}}/**
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
 */class S1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ls(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,os(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Kr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ls(r,e.snapshotNode,i.oldSnap));else throw ei("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class C1{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const V_=new C1;class hd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Cn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return dd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:tr(this.viewCache_),s=E1(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function I1(t){return{filter:t}}function k1(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function T1(t,e,n,r,i){const s=new S1;let o,l;if(n.type===ct.OVERWRITE){const u=n;u.source.fromUser?o=Uu(t,e,u.path,u.snap,r,i,s):(E(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!U(u.path),o=ol(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===ct.MERGE){const u=n;u.source.fromUser?o=R1(t,e,u.path,u.children,r,i,s):(E(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=zu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===ct.ACK_USER_WRITE){const u=n;u.revert?o=O1(t,e,u.path,r,i,s):o=P1(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===ct.LISTEN_COMPLETE)o=x1(t,e,n.path,r,s);else throw ei("Unknown operation type: "+n.type);const a=s.getChanges();return N1(e,o,a),{viewCache:o,changes:a}}function N1(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=rl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(M_(rl(e)))}}function H_(t,e,n,r,i,s){const o=e.eventCache;if(sl(r,n)!=null)return e;{let l,a;if(U(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=tr(e),d=u instanceof P?u:P.EMPTY_NODE,c=cd(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=il(r,tr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=b(n);if(u===".priority"){E(Sn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=Df(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=G(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=Df(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=dd(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return Li(e,l,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function ol(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(U(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),g,null)}else{const g=b(n);if(!a.isCompleteForPath(n)&&Sn(n)>1)return e;const _=G(n),R=a.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?u=d.updatePriority(a.getNode(),R):u=d.updateChild(a.getNode(),g,R,_,V_,null)}const c=F_(e,u,a.isFullyInitialized()||U(n),d.filtersNodes()),h=new hd(i,c,s);return H_(t,c,n,i,h,l)}function Uu(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new hd(i,e,s);if(U(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Li(e,u,!0,t.filter.filtersNodes());else{const c=b(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Li(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=G(n),g=l.getNode().getImmediateChild(c);let _;if(U(h))_=r;else{const v=d.getCompleteChild(c);v!=null?k_(h)===".priority"&&v.getChild(N_(h)).isEmpty()?_=v:_=v.updateChild(h,r):_=P.EMPTY_NODE}if(g.equals(_))a=e;else{const v=t.filter.updateChild(l.getNode(),c,_,h,d,o);a=Li(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Mf(t,e){return t.eventCache.isCompleteForChild(e)}function R1(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=ce(n,a);Mf(e,b(d))&&(l=Uu(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=ce(n,a);Mf(e,b(d))||(l=Uu(t,l,d,u,i,s,o))}),l}function Lf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function zu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;U(n)?u=r:u=new q(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),_=Lf(t,g,h);a=ol(t,a,new $(c),_,i,s,o,l)}}),u.children.inorderTraversal((c,h)=>{const g=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!g){const _=e.serverCache.getNode().getImmediateChild(c),v=Lf(t,_,h);a=ol(t,a,new $(c),v,i,s,o,l)}}),a}function P1(t,e,n,r,i,s,o){if(sl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(U(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return ol(t,e,n,a.getNode().getChild(n),i,s,l,o);if(U(n)){let u=new q(null);return a.getNode().forEachChild(Lr,(d,c)=>{u=u.set(new $(d),c)}),zu(t,e,n,u,i,s,l,o)}else return e}else{let u=new q(null);return r.foreach((d,c)=>{const h=ce(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),zu(t,e,n,u,i,s,l,o)}}function x1(t,e,n,r,i){const s=e.serverCache,o=F_(e,s.getNode(),s.isFullyInitialized()||U(n),s.isFiltered());return H_(t,o,n,r,V_,i)}function O1(t,e,n,r,i,s){let o;if(sl(r,n)!=null)return e;{const l=new hd(r,e,i),a=e.eventCache.getNode();let u;if(U(n)||b(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=il(r,tr(e));else{const c=e.serverCache.getNode();E(c instanceof P,"serverChildren would be complete if leaf node"),d=cd(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=b(n);let c=dd(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,G(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,P.EMPTY_NODE,G(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=il(r,tr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||sl(r,B())!=null,Li(e,u,o,t.filter.filtersNodes())}}/**
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
 */class A1{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new od(r.getIndex()),s=XI(r);this.processor_=I1(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(P.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(P.EMPTY_NODE,l.getNode(),null),d=new Cn(a,o.isFullyInitialized(),i.filtersNodes()),c=new Cn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Al(c,d),this.eventGenerator_=new i1(this.query_)}get query(){return this.query_}}function D1(t){return t.viewCache_.serverCache.getNode()}function M1(t){return rl(t.viewCache_)}function L1(t,e){const n=tr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(b(e)).isEmpty())?n.getChild(e):null}function bf(t){return t.eventRegistrations_.length===0}function b1(t,e){t.eventRegistrations_.push(e)}function Ff(t,e,n){const r=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Uf(t,e,n,r){e.type===ct.MERGE&&e.source.queryId!==null&&(E(tr(t.viewCache_),"We should always have a full cache before handling merges"),E(rl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=T1(t.processor_,i,e,n,r);return k1(t.processor_,s.viewCache),E(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,$_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function F1(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(se,(s,o)=>{r.push(Kr(s,o))}),n.isFullyInitialized()&&r.push(M_(n.getNode())),$_(t,r,n.getNode(),e)}function $_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return s1(t.eventGenerator_,e,n,i)}/**
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
 */let ll;class G_{constructor(){this.views=new Map}}function U1(t){E(!ll,"__referenceConstructor has already been defined"),ll=t}function z1(){return E(ll,"Reference.ts has not been loaded"),ll}function W1(t){return t.views.size===0}function fd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return E(s!=null,"SyncTree gave us an op for an invalid query."),Uf(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Uf(o,e,n,r));return s}}function K_(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=il(n,i?r:null),a=!1;l?a=!0:r instanceof P?(l=cd(n,r),a=!1):(l=P.EMPTY_NODE,a=!1);const u=Al(new Cn(l,a,!1),new Cn(r,i,!1));return new A1(e,u)}return o}function B1(t,e,n,r,i,s){const o=K_(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),b1(o,n),F1(o,n)}function j1(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=In(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Ff(u,n,r)),bf(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Ff(a,n,r)),bf(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!In(t)&&s.push(new(z1())(e._repo,e._path)),{removed:s,events:o}}function Q_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function vn(t,e){let n=null;for(const r of t.views.values())n=n||L1(r,e);return n}function q_(t,e){if(e._queryParams.loadsAllData())return Ml(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Y_(t,e){return q_(t,e)!=null}function In(t){return Ml(t)!=null}function Ml(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let al;function V1(t){E(!al,"__referenceConstructor has already been defined"),al=t}function H1(){return E(al,"Reference.ts has not been loaded"),al}let $1=1;class zf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new q(null),this.pendingWriteTree_=w1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function X_(t,e,n,r,i){return u1(t.pendingWriteTree_,e,n,r,i),i?Rs(t,new er(b_(),e,n)):[]}function Wn(t,e,n=!1){const r=c1(t.pendingWriteTree_,e);if(d1(t.pendingWriteTree_,e)){let s=new q(null);return r.snap!=null?s=s.set(B(),!0):Ve(r.children,o=>{s=s.set(new $(o),!0)}),Rs(t,new nl(r.path,s,n))}else return[]}function Ns(t,e,n){return Rs(t,new er(ad(),e,n))}function G1(t,e,n){const r=q.fromObject(n);return Rs(t,new cs(ad(),e,r))}function K1(t,e){return Rs(t,new us(ad(),e))}function Q1(t,e,n){const r=md(t,n);if(r){const i=gd(r),s=i.path,o=i.queryId,l=xe(s,e),a=new us(ud(o),l);return _d(t,s,a)}else return[]}function ul(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Y_(o,e))){const a=j1(o,e,n,r);W1(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,g)=>In(g));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=X1(h);for(let _=0;_<g.length;++_){const v=g[_],R=v.query,p=tv(t,v);t.listenProvider_.startListening(Fi(R),ds(t,R),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Fi(e),null):u.forEach(h=>{const g=t.queryToTagMap.get(Ll(h));t.listenProvider_.stopListening(Fi(h),g)}))}J1(t,u)}return l}function J_(t,e,n,r){const i=md(t,r);if(i!=null){const s=gd(i),o=s.path,l=s.queryId,a=xe(o,e),u=new er(ud(l),a,n);return _d(t,o,u)}else return[]}function q1(t,e,n,r){const i=md(t,r);if(i){const s=gd(i),o=s.path,l=s.queryId,a=xe(o,e),u=q.fromObject(n),d=new cs(ud(l),a,u);return _d(t,o,d)}else return[]}function Wu(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const _=xe(h,i);s=s||vn(g,_),o=o||In(g)});let l=t.syncPointTree_.get(i);l?(o=o||In(l),s=s||vn(l,B())):(l=new G_,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=P.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const v=vn(_,B());v&&(s=s.updateImmediateChild(g,v))}));const u=Y_(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=Ll(e);E(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=Z1();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const d=Dl(t.pendingWriteTree_,i);let c=B1(l,e,n,d,s,a);if(!u&&!o&&!r){const h=q_(l,e);c=c.concat(ek(t,e,h))}return c}function pd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=xe(o,e),u=vn(l,a);if(u)return u});return W_(i,e,s,n,!0)}function Y1(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=xe(u,n);r=r||vn(d,c)});let i=t.syncPointTree_.get(n);i?r=r||vn(i,B()):(i=new G_,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Cn(r,!0,!1):null,l=Dl(t.pendingWriteTree_,e._path),a=K_(i,e,l,s?o.getNode():P.EMPTY_NODE,s);return M1(a)}function Rs(t,e){return Z_(e,t.syncPointTree_,null,Dl(t.pendingWriteTree_,B()))}function Z_(t,e,n,r){if(U(t.path))return ev(t,e,n,r);{const i=e.get(B());n==null&&i!=null&&(n=vn(i,B()));let s=[];const o=b(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=B_(r,o);s=s.concat(Z_(l,a,u,d))}return i&&(s=s.concat(fd(i,t,r,n))),s}}function ev(t,e,n,r){const i=e.get(B());n==null&&i!=null&&(n=vn(i,B()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=B_(r,o),d=t.operationForChild(o);d&&(s=s.concat(ev(d,l,a,u)))}),i&&(s=s.concat(fd(i,t,r,n))),s}function tv(t,e){const n=e.query,r=ds(t,n);return{hashFn:()=>(D1(e)||P.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?Q1(t,n._path,r):K1(t,n._path);{const s=YC(i,n);return ul(t,n,null,s)}}}}function ds(t,e){const n=Ll(e);return t.queryToTagMap.get(n)}function Ll(t){return t._path.toString()+"$"+t._queryIdentifier}function md(t,e){return t.tagToQueryMap.get(e)}function gd(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new $(t.substr(0,e))}}function _d(t,e,n){const r=t.syncPointTree_.get(e);E(r,"Missing sync point for query tag that we're tracking");const i=Dl(t.pendingWriteTree_,e);return fd(r,n,i,null)}function X1(t){return t.fold((e,n,r)=>{if(n&&In(n))return[Ml(n)];{let i=[];return n&&(i=Q_(n)),Ve(r,(s,o)=>{i=i.concat(o)}),i}})}function Fi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(H1())(t._repo,t._path):t}function J1(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Ll(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Z1(){return $1++}function ek(t,e,n){const r=e._path,i=ds(t,e),s=tv(t,n),o=t.listenProvider_.startListening(Fi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)E(!In(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!U(u)&&d&&In(d))return[Ml(d).query];{let h=[];return d&&(h=h.concat(Q_(d).map(g=>g.query))),Ve(c,(g,_)=>{h=h.concat(_)}),h}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(Fi(d),ds(t,d))}}return o}/**
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
 */class vd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new vd(n)}node(){return this.node_}}class yd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ce(this.path_,e);return new yd(this.syncTree_,n)}node(){return pd(this.syncTree_,this.path_)}}const tk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Wf=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return nk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return rk(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},nk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},rk=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&E(!1,"Unexpected increment value: "+r);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},ik=function(t,e,n,r){return wd(e,new yd(n,t),r)},nv=function(t,e,n){return wd(t,new vd(e),n)};function wd(t,e,n){const r=t.getPriority().val(),i=Wf(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Wf(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new fe(l,ge(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new fe(i))),o.forEachChild(se,(l,a)=>{const u=wd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class Ed{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Sd(t,e){let n=e instanceof $?e:new $(e),r=t,i=b(n);for(;i!==null;){const s=Vr(r.node.children,i)||{children:{},childCount:0};r=new Ed(i,r,s),n=G(n),i=b(n)}return r}function ii(t){return t.node.value}function rv(t,e){t.node.value=e,Bu(t)}function iv(t){return t.node.childCount>0}function sk(t){return ii(t)===void 0&&!iv(t)}function bl(t,e){Ve(t.node.children,(n,r)=>{e(new Ed(n,t,r))})}function sv(t,e,n,r){n&&!r&&e(t),bl(t,i=>{sv(i,e,!0,r)}),n&&r&&e(t)}function ok(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ps(t){return new $(t.parent===null?t.name:Ps(t.parent)+"/"+t.name)}function Bu(t){t.parent!==null&&lk(t.parent,t.name,t)}function lk(t,e,n){const r=sk(n),i=Ht(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Bu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Bu(t))}/**
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
 */const ak=/[\[\].#$\/\u0000-\u001F\u007F]/,uk=/[\[\].#$\u0000-\u001F\u007F]/,ka=10*1024*1024,ov=function(t){return typeof t=="string"&&t.length!==0&&!ak.test(t)},lv=function(t){return typeof t=="string"&&t.length!==0&&!uk.test(t)},ck=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),lv(t)},av=function(t,e,n,r){r&&e===void 0||Cd(Bc(t,"value"),e,n)},Cd=function(t,e,n){const r=n instanceof $?new PI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ln(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ln(r)+" with contents = "+e.toString());if(i_(e))throw new Error(t+"contains "+e.toString()+" "+Ln(r));if(typeof e=="string"&&e.length>ka/3&&Nl(e)>ka)throw new Error(t+"contains a string greater than "+ka+" utf8 bytes "+Ln(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ve(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!ov(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ln(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);xI(r,o),Cd(t,l,r),OI(r)}),i&&s)throw new Error(t+' contains ".value" child '+Ln(r)+" in addition to actual children.")}},uv=function(t,e,n,r){if(!(r&&n===void 0)&&!lv(n))throw new Error(Bc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},dk=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),uv(t,e,n,r)},cv=function(t,e){if(b(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},hk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ov(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ck(n))throw new Error(Bc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class fk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Id(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!rd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function dv(t,e,n){Id(t,n),hv(t,r=>rd(r,e))}function Ct(t,e,n){Id(t,n),hv(t,r=>ut(r,e)||ut(e,r))}function hv(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(pk(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function pk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Hn&&ke("event: "+n.toString()),ri(r)}}}/**
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
 */const mk="repo_interrupt",gk=25;class _k{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new fk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=tl(),this.transactionQueueTree_=new Ed,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function vk(t,e,n){if(t.stats_=td(t.repoInfo_),t.forceRestClient_||eI())t.server_=new el(t.repoInfo_,(r,i,s,o)=>{Bf(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>jf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ue(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new bt(t.repoInfo_,e,(r,i,s,o)=>{Bf(t,r,i,s,o)},r=>{jf(t,r)},r=>{yk(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=sI(t.repoInfo_,()=>new r1(t.stats_,t.server_)),t.infoData_=new JI,t.infoSyncTree_=new zf({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Ns(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Td(t,"connected",!1),t.serverSyncTree_=new zf({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Ct(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function fv(t){const n=t.infoData_.getNode(new $(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function kd(t){return tk({timestamp:fv(t)})}function Bf(t,e,n,r,i){t.dataUpdateCount++;const s=new $(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Ho(n,u=>ge(u));o=q1(t.serverSyncTree_,s,a,i)}else{const a=ge(n);o=J_(t.serverSyncTree_,s,a,i)}else if(r){const a=Ho(n,u=>ge(u));o=G1(t.serverSyncTree_,s,a)}else{const a=ge(n);o=Ns(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Ul(t,s)),Ct(t.eventQueue_,l,o)}function jf(t,e){Td(t,"connected",e),e===!1&&Sk(t)}function yk(t,e){Ve(e,(n,r)=>{Td(t,n,r)})}function Td(t,e,n){const r=new $("/.info/"+e),i=ge(n);t.infoData_.updateSnapshot(r,i);const s=Ns(t.infoSyncTree_,r,i);Ct(t.eventQueue_,r,s)}function pv(t){return t.nextWriteId_++}function wk(t,e,n){const r=Y1(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=ge(i).withIndex(e._queryParams.getIndex());Wu(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ns(t.serverSyncTree_,e._path,s);else{const l=ds(t.serverSyncTree_,e);o=J_(t.serverSyncTree_,e._path,s,l)}return Ct(t.eventQueue_,e._path,o),ul(t.serverSyncTree_,e,n,null,!0),s},i=>(Fl(t,"get for query "+ue(e)+" failed: "+i),Promise.reject(new Error(i))))}function Ek(t,e,n,r,i){Fl(t,"set",{path:e.toString(),value:n,priority:r});const s=kd(t),o=ge(n,r),l=pd(t.serverSyncTree_,e),a=nv(o,l,s),u=pv(t),d=X_(t.serverSyncTree_,e,a,u,!0);Id(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const _=h==="ok";_||je("set at "+e+" failed: "+h);const v=Wn(t.serverSyncTree_,u,!_);Ct(t.eventQueue_,e,v),kk(t,i,h,g)});const c=yv(t,e);Ul(t,c),Ct(t.eventQueue_,c,[])}function Sk(t){Fl(t,"onDisconnectEvents");const e=kd(t),n=tl();Lu(t.onDisconnect_,B(),(i,s)=>{const o=ik(i,s,t.serverSyncTree_,e);L_(n,i,o)});let r=[];Lu(n,B(),(i,s)=>{r=r.concat(Ns(t.serverSyncTree_,i,s));const o=yv(t,i);Ul(t,o)}),t.onDisconnect_=tl(),Ct(t.eventQueue_,B(),r)}function Ck(t,e,n){let r;b(e._path)===".info"?r=Wu(t.infoSyncTree_,e,n):r=Wu(t.serverSyncTree_,e,n),dv(t.eventQueue_,e._path,r)}function ju(t,e,n){let r;b(e._path)===".info"?r=ul(t.infoSyncTree_,e,n):r=ul(t.serverSyncTree_,e,n),dv(t.eventQueue_,e._path,r)}function Ik(t){t.persistentConnection_&&t.persistentConnection_.interrupt(mk)}function Fl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ke(n,...e)}function kk(t,e,n,r){e&&ri(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function mv(t,e,n){return pd(t.serverSyncTree_,e,n)||P.EMPTY_NODE}function Nd(t,e=t.transactionQueueTree_){if(e||zl(t,e),ii(e)){const n=_v(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Tk(t,Ps(e),n)}else iv(e)&&bl(e,n=>{Nd(t,n)})}function Tk(t,e,n){const r=n.map(u=>u.currentWriteId),i=mv(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];E(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=xe(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Fl(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Wn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();zl(t,Sd(t.transactionQueueTree_,e)),Nd(t,t.transactionQueueTree_),Ct(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)ri(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{je("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Ul(t,e)}},o)}function Ul(t,e){const n=gv(t,e),r=Ps(n),i=_v(t,n);return Nk(t,i,r),r}function Nk(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=xe(n,a.path);let d=!1,c;if(E(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(Wn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=gk)d=!0,c="maxretry",i=i.concat(Wn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=mv(t,a.path,o);a.currentInputSnapshot=h;const g=e[l].update(h.val());if(g!==void 0){Cd("transaction failed: Data returned ",g,a.path);let _=ge(g);typeof g=="object"&&g!=null&&Ht(g,".priority")||(_=_.updatePriority(h.getPriority()));const R=a.currentWriteId,p=kd(t),f=nv(_,h,p);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=f,a.currentWriteId=pv(t),o.splice(o.indexOf(R),1),i=i.concat(X_(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(Wn(t.serverSyncTree_,R,!0))}else d=!0,c="nodata",i=i.concat(Wn(t.serverSyncTree_,a.currentWriteId,!0))}Ct(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}zl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ri(r[l]);Nd(t,t.transactionQueueTree_)}function gv(t,e){let n,r=t.transactionQueueTree_;for(n=b(e);n!==null&&ii(r)===void 0;)r=Sd(r,n),e=G(e),n=b(e);return r}function _v(t,e){const n=[];return vv(t,e,n),n.sort((r,i)=>r.order-i.order),n}function vv(t,e,n){const r=ii(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);bl(e,i=>{vv(t,i,n)})}function zl(t,e){const n=ii(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,rv(e,n.length>0?n:void 0)}bl(e,r=>{zl(t,r)})}function yv(t,e){const n=Ps(gv(t,e)),r=Sd(t.transactionQueueTree_,e);return ok(r,i=>{Ta(t,i)}),Ta(t,r),sv(r,i=>{Ta(t,i)}),n}function Ta(t,e){const n=ii(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Wn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?rv(e,void 0):n.length=s+1,Ct(t.eventQueue_,Ps(e),i);for(let o=0;o<r.length;o++)ri(r[o])}}/**
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
 */function Rk(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Pk(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):je(`Invalid query segment '${n}' in query '${t}'`)}return e}const Vf=function(t,e){const n=xk(t),r=n.namespace;n.domain==="firebase.com"&&jt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&jt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||$C();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new g_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new $(n.pathString)}},xk=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=Rk(t.substring(d,c)));const h=Pk(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */const Hf="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Ok=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Hf.charAt(n%64),n=Math.floor(n/64);E(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Hf.charAt(e[i]);return E(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class wv{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ue(this.snapshot.exportVal())}}class Ev{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Rd{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Pd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return U(this._path)?null:k_(this._path)}get ref(){return new It(this._repo,this._path)}get _queryIdentifier(){const e=Rf(this._queryParams),n=Zc(e);return n==="{}"?"default":n}get _queryObject(){return Rf(this._queryParams)}isEqual(e){if(e=Me(e),!(e instanceof Pd))return!1;const n=this._repo===e._repo,r=rd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+RI(this._path)}}class It extends Pd{constructor(e,n){super(e,n,new ld,!1)}get parent(){const e=N_(this._path);return e===null?null:new It(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class qr{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new $(e),r=Yr(this.ref,e);return new qr(this._node.getChild(n),r,se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new qr(i,Yr(this.ref,r),se)))}hasChild(e){const n=new $(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Xe(t,e){return t=Me(t),t._checkNotDeleted("ref"),e!==void 0?Yr(t._root,e):t._root}function Yr(t,e){return t=Me(t),b(t._path)===null?dk("child","path",e,!1):uv("child","path",e,!1),new It(t._repo,ce(t._path,e))}function Ak(t,e){t=Me(t),cv("push",t._path),av("push",e,t._path,!0);const n=fv(t._repo),r=Ok(n),i=Yr(t,r),s=Yr(t,r);let o;return e!=null?o=ar(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function ar(t,e){t=Me(t),cv("set",t._path),av("set",e,t._path,!1);const n=new Tl;return Ek(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Dk(t){t=Me(t);const e=new Rd(()=>{}),n=new xs(e);return wk(t._repo,t,n).then(r=>new qr(r,new It(t._repo,t._path),t._queryParams.getIndex()))}class xs{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new wv("value",this,new qr(e.snapshotNode,new It(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Ev(this,e,n):null}matches(e){return e instanceof xs?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Wl{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Ev(this,e,n):null}createEvent(e,n){E(e.childName!=null,"Child events should have a childName.");const r=Yr(new It(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new wv(e.type,this,new qr(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Wl?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Os(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(d,c)=>{ju(t._repo,t,l),a(d,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new Rd(n,s||void 0),l=e==="value"?new xs(o):new Wl(e,o);return Ck(t._repo,t,l),()=>ju(t._repo,t,l)}function Sv(t,e,n,r){return Os(t,"value",e,n,r)}function $f(t,e,n,r){return Os(t,"child_added",e,n,r)}function Mk(t,e,n,r){return Os(t,"child_changed",e,n,r)}function Lk(t,e,n,r){return Os(t,"child_moved",e,n,r)}function bk(t,e,n,r){return Os(t,"child_removed",e,n,r)}function Ci(t,e,n){let r=null;const i=n?new Rd(n):null;e==="value"?r=new xs(i):e&&(r=new Wl(e,i)),ju(t._repo,t,r)}U1(It);V1(It);/**
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
 */const Fk="FIREBASE_DATABASE_EMULATOR_HOST",Vu={};let Uk=!1;function zk(t,e,n,r){t.repoInfo_=new g_(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function Wk(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||jt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ke("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Vf(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[Fk]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=Vf(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const d=i&&a?new Mr(Mr.OWNER):new nI(t.name,t.options,e);hk("Invalid Firebase Database URL",o),U(o.path)||jt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=jk(l,t,d,new tI(t.name,n));return new Vk(c,t)}function Bk(t,e){const n=Vu[e];(!n||n[t.key]!==t)&&jt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Ik(t),delete n[t.key]}function jk(t,e,n,r){let i=Vu[e.name];i||(i={},Vu[e.name]=i);let s=i[t.toURLString()];return s&&jt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new _k(t,Uk,n,r),i[t.toURLString()]=s,s}class Vk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(vk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new It(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Bk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&jt("Cannot call "+e+" on a deleted database.")}}function Hk(t=fg(),e){const n=Hc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=pw("database");r&&$k(n,...r)}return n}function $k(t,e,n,r={}){t=Me(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&jt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&jt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Mr(Mr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:gw(r.mockUserToken,t.app.options.projectId);s=new Mr(o)}zk(i,e,n,s)}/**
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
 */function Gk(t){WC(vs),Hr(new Yn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Wk(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),gn(df,hf,t),gn(df,hf,"esm2017")}bt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};bt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Gk();/*! *****************************************************************************
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
***************************************************************************** */var Ir=function(){return Ir=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Ir.apply(this,arguments)},Cv=function(t){return{loading:t==null,value:t}},Kk=function(){return function(t,e){switch(e.type){case"error":return Ir(Ir({},t),{error:e.error,loading:!1,value:void 0});case"reset":return Cv(e.defaultValue);case"value":return Ir(Ir({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},Qk=function(t){var e=t?t():void 0,n=D.useReducer(Kk(),Cv(e)),r=n[0],i=n[1],s=D.useCallback(function(){var a=t?t():void 0;i({type:"reset",defaultValue:a})},[t]),o=D.useCallback(function(a){i({type:"error",error:a})},[]),l=D.useCallback(function(a){i({type:"value",value:a})},[]);return D.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:l,value:r.value}},[r.error,r.loading,s,o,l,r.value])},qk=function(t,e,n){var r=D.useRef(t);return D.useEffect(function(){e(t,r.current)||(r.current=t,n&&n())}),r},Yk=function(t,e){var n=!t&&!e,r=!!t&&!!e&&t.isEqual(e);return n||r},Iv=function(t,e){return qk(t,Yk,e)};/*! *****************************************************************************
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
***************************************************************************** */var he=function(){return he=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},he.apply(this,arguments)};function Pe(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var kv={loading:!0,value:{keys:[],values:[]}},Xk=function(t,e){switch(e.type){case"add":return e.snapshot?he(he({},t),{error:void 0,value:Tv(t.value,e.snapshot,e.previousKey)}):t;case"change":return e.snapshot?he(he({},t),{error:void 0,value:Zk(t.value,e.snapshot)}):t;case"error":return he(he({},t),{error:e.error,loading:!1,value:{keys:void 0,values:void 0}});case"move":return e.snapshot?he(he({},t),{error:void 0,value:eT(t.value,e.snapshot,e.previousKey)}):t;case"remove":return e.snapshot?he(he({},t),{error:void 0,value:Nv(t.value,e.snapshot)}):t;case"reset":return kv;case"value":return he(he({},t),{error:void 0,loading:!1,value:Jk(e.snapshots)});case"empty":return he(he({},t),{loading:!1,value:{keys:void 0,values:void 0}});default:return t}},Jk=function(t){if(!t)return{keys:[],values:[]};var e=[],n=[];return t.forEach(function(r){r.key&&(e.push(r.key),n.push(r))}),{keys:e,values:n}},Tv=function(t,e,n){if(!e.key)return t;var r=t.keys,i=t.values;if(!n)return{keys:r?Pe([e.key],r,!0):[e.key],values:i?Pe([e],i,!0):[e]};var s=r?r.indexOf(n):0;return{keys:r?Pe(Pe(Pe([],r.slice(0,s+1),!0),[e.key],!1),r.slice(s+1),!0):[e.key],values:i?Pe(Pe(Pe([],i.slice(0,s+1),!0),[e],!1),i.slice(s+1),!0):[e]}},Zk=function(t,e){if(!e.key)return t;var n=t.keys,r=t.values,i=n?n.indexOf(e.key):0;return he(he({},t),{values:r?Pe(Pe(Pe([],r.slice(0,i),!0),[e],!1),r.slice(i+1),!0):[e]})},Nv=function(t,e){if(!e.key)return t;var n=t.keys,r=t.values,i=n?n.indexOf(e.key):0;return{keys:n?Pe(Pe([],n.slice(0,i),!0),n.slice(i+1),!0):[],values:r?Pe(Pe([],r.slice(0,i),!0),r.slice(i+1),!0):[]}},eT=function(t,e,n){var r=Nv(t,e);return Tv(r,e,n)},tT=function(){return D.useReducer(Xk,kv)},Na=function(t){var e=tT(),n=e[0],r=e[1],i=Iv(t,function(){return r({type:"reset"})}),s=i.current;return D.useEffect(function(){if(!s){r({type:"empty"});return}var o=function(p,f){r({type:"add",previousKey:f,snapshot:p})},l=function(p){r({type:"change",snapshot:p})},a=function(p,f){r({type:"move",previousKey:f,snapshot:p})},u=function(p){r({type:"remove",snapshot:p})},d=function(p){r({type:"error",error:p})},c=function(p){r({type:"value",snapshots:p})},h,g=function(p){var f=p.val(),m=f?Object.keys(p.val()).length:0;if(m===0)h=$f(s,o,d),c([]);else{var y=[],S=function(I,C){if(m>0){m--,y.push(I),m===0&&c(y);return}o(I,C)};h=$f(s,S,d)}};Sv(s,g,d,{onlyOnce:!0});var _=Mk(s,l,d),v=Lk(s,a,d),R=bk(s,u,d);return function(){Ci(s,"child_added",h),Ci(s,"child_changed",_),Ci(s,"child_moved",v),Ci(s,"child_removed",R)}},[r,s]),[n.value.values,n.loading,n.error]},Gf=function(t){var e=Qk(),n=e.error,r=e.loading,i=e.reset,s=e.setError,o=e.setValue,l=e.value,a=Iv(t,i);return D.useEffect(function(){var u=a.current;if(!u){o(void 0);return}return Sv(u,o,s),function(){Ci(u,"value",o)}},[a.current]),[l,r,n]};function nT(t){const e=Hk(t.app),[n,r]=D.useState(!1),[i,s]=D.useState(!1),[o,l]=D.useState(""),[a,u]=D.useState(""),[d,c]=D.useState(!0),[h,g]=D.useState(0),[_,v]=D.useState(0),[R,p]=D.useState(""),[f,m]=D.useState(!1),[y,S]=D.useState(!1),[I,C]=D.useState(0),[N,V]=D.useState(""),[L,Le]=D.useState(!0);function Pn(X){const Kt=Xe(e,"queue/"+X.uid);ar(Kt,{uid:X.uid,name:X.displayName,email:X.email,photourl:X.photoURL})}function xn(){ar(Xe(e,"queue/"+t.user.uid),null),r(!1)}function As(){ar(Xe(e,"lobbies/"+o),null),s(!1),l(null),u(null),c(!0),g(0),v(0),p(""),m(!1),S(!1)}function si(X){const Kt=Xe(e,"lobbies/"+o+"/moves/player"+h);p(X),Ak(Kt,X),ar(Xe(e,"lobbies/"+o+"/ready/player"+h),!0),c(!1),m(!0)}const[$t,Ds,T]=Na(Xe(e,"lobbies/"));D.useEffect(()=>{$t&&$t.forEach(X=>{X.val().player1.uid===t.user.uid?(r(!1),s(!0),u(X.val().player2.name),l(X.key),g(1),v(2),V(X.val().player2.photourl)):X.val().player2.uid===t.user.uid&&(r(!1),s(!0),u(X.val().player1.name),l(X.key),g(2),v(1),V(X.val().player1.photourl))})},[$t]),D.useEffect(()=>{o&&Dk(Xe(e,"lobbies/"+o)).then(X=>{X.exists()||(s(!1),l(null),u(null),c(!0),g(0),v(0),p(""),m(!1),S(!1))})},[$t]);const[x,M,re]=Gf(Xe(e,"lobbies/"+o+"/ready/player"+h)),[Z,sr,Gt]=Gf(Xe(e,"lobbies/"+o+"/ready/player"+_)),[On,kt,oi]=Na(Xe(e,"lobbies/"+o+"/moves/player"+h)),[He,Pv,sT]=Na(Xe(e,"lobbies/"+o+"/moves/player"+_));function xv(){Le(!1),S(!1),c(!0),m(!1)}return D.useEffect(()=>{x!=null&&x.val()&&(Z!=null&&Z.val())&&On&&He&&(console.log("Opponent's Moves: ",He),setTimeout(()=>{let X=On[On.length-1],Kt=He[He.length-1];X.val()==="rock"&&Kt.val()==="scissors"||X.val()==="scissors"&&Kt.val()==="paper"||X.val()==="paper"&&Kt.val()==="rock"?C(1):X.val()===Kt.val()?C(0):C(2),S(!0)},1e3),setTimeout(()=>{ar(Xe(e,"lobbies/"+o+"/ready/player"+h),!1)},2e3),Le(!0))},[x,Z,kt,Pv,M,sr]),n&&!i?ye("div",{children:[O("h1",{children:"Waiting for other players..."}),O("button",{className:"m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all",onClick:()=>xn(),children:"Leave Queue"})]}):!n&&i?ye("div",{className:"h-[90vh]",children:[O("h1",{className:"text-center text-xl",children:"In Game"}),ye("div",{className:"p-4 flex flex-col w-screen items-center justify-center",children:[O("section",{children:O("div",{className:"flex flex-row justify-center",children:ye("div",{className:"flex flex-col items-center",children:[O("h1",{children:"Opponent"}),O("h2",{children:a}),O("img",{src:N,alt:"Opponent",className:"rounded-full"})]})})}),O("section",{children:O("div",{className:"flex flex-row justify-center",children:ye("div",{className:"flex flex-col items-center",children:[O("h1",{children:"Controls"}),O("div",{children:d?ye(Rt,{children:[O("button",{className:"m-4 bg-yellow-900 hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded transition-all",onClick:()=>{si("rock")},children:"Rock"}),O("button",{className:"m-4 bg-gray-100 hover:bg-gray-300 text-black font-medium py-2 px-4 rounded transition-all",onClick:()=>{si("paper")},children:"Paper"}),O("button",{className:"m-4 bg-pink-400 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded transition-all",onClick:()=>{si("scissors")},children:"Scissors"})]}):O("h1",{children:"Waiting for opponent..."})}),O("div",{children:O("button",{className:"m-4 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-all",onClick:()=>As(),children:"Leave Game"})}),ye("div",{children:[f?O("h1",{className:"text-4xl",children:R}):O("h1",{className:"text-4xl",children:"Select a move"}),y?ye(Rt,{children:[I===1?ye(Rt,{children:["Opponent's Move:"," ",O("h1",{className:"text-4xl text-green-400",children:He?He[He.length-1].val():"hello"}),O("h1",{className:"text-4xl text-green-400",children:"You win! "})]}):I===2?ye(Rt,{children:["Opponent's Move:"," ",O("h1",{className:"text-4xl text-red-500",children:He?He[He.length-1].val():"hello"}),O("h1",{className:"text-4xl text-red-500",children:"You lose!"})]}):ye(Rt,{children:["Opponent's Move:"," ",O("h1",{className:"text-4xl text-orange-500",children:He?He[He.length-1].val():"hello"}),O("h1",{className:"text-4xl text-orange-500",children:"Draw!"})]}),L&&O("button",{className:"m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all",onClick:()=>{xv()},children:"Ready"})]}):null]})]})})})]})]}):O("div",{children:O("button",{className:"m-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-all",onClick:()=>{Pn(t.user),r(!0)},children:"Queue"})})}const rT={apiKey:"AIzaSyDhWYptjj88s1qre32DwsUhBARM0D5ZkN8",authDomain:"fir-test-e003d.firebaseapp.com",databaseURL:"https://fir-test-e003d-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"fir-test-e003d",storageBucket:"fir-test-e003d.appspot.com",messagingSenderId:"1002363761303",appId:"1:1002363761303:web:4e9e04e3cbd48b10e02fd2",measurementId:"G-WDEJ45ZHK8"},Rv=hg(rT),eo=Xg(Rv);function iT(){const[t,e,n]=FC(eo),[r,i]=D.useState(""),[s,o]=D.useState(!1),[l,a,u]=UC(eo);return D.useEffect(()=>{Fg(eo,c=>{console.log(c?"User is signed in.":"No user is signed in.")})},[t]),ye("div",{className:"App",children:[O(zC,{user:t,auth:eo,loadingUser:e,setInputName:o}),O("div",{className:"h-[90vh] flex flex-col items-center justify-center",children:O("section",{children:t&&!s?O(nT,{user:t,app:Rv}):e&&!s?O(Rt,{children:"Loading Account..."}):s?ye(Rt,{children:[O("div",{children:"Set a Name"}),O("input",{type:"text",onChange:c=>i(c.target.value),onKeyDown:c=>{if(c.key==="Enter"){if(r==="")return;l({displayName:r}),o(!1)}}}),O("button",{className:"m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all",onClick:()=>{l({displayName:r}),o(!1)},children:"Submit"})]}):O(Rt,{children:"Login to Play!"})})})]})}Ra.createRoot(document.getElementById("root")).render(O(qv.StrictMode,{children:O(iT,{})}));
