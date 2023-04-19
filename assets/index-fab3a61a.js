(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Cv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Li={},Iv={get exports(){return Li},set exports(t){Li=t}},sl={},U={},kv={get exports(){return U},set exports(t){U=t}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cs=Symbol.for("react.element"),Tv=Symbol.for("react.portal"),Nv=Symbol.for("react.fragment"),Rv=Symbol.for("react.strict_mode"),Pv=Symbol.for("react.profiler"),xv=Symbol.for("react.provider"),Ov=Symbol.for("react.context"),Av=Symbol.for("react.forward_ref"),Dv=Symbol.for("react.suspense"),Mv=Symbol.for("react.memo"),Lv=Symbol.for("react.lazy"),Rd=Symbol.iterator;function bv(t){return t===null||typeof t!="object"?null:(t=Rd&&t[Rd]||t["@@iterator"],typeof t=="function"?t:null)}var Gf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kf=Object.assign,Qf={};function qr(t,e,n){this.props=t,this.context=e,this.refs=Qf,this.updater=n||Gf}qr.prototype.isReactComponent={};qr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function qf(){}qf.prototype=qr.prototype;function Bu(t,e,n){this.props=t,this.context=e,this.refs=Qf,this.updater=n||Gf}var ju=Bu.prototype=new qf;ju.constructor=Bu;Kf(ju,qr.prototype);ju.isPureReactComponent=!0;var Pd=Array.isArray,Yf=Object.prototype.hasOwnProperty,Vu={current:null},Xf={key:!0,ref:!0,__self:!0,__source:!0};function Jf(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Yf.call(e,r)&&!Xf.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:cs,type:t,key:s,ref:o,props:i,_owner:Vu.current}}function Fv(t,e){return{$$typeof:cs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hu(t){return typeof t=="object"&&t!==null&&t.$$typeof===cs}function Uv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xd=/\/+/g;function Ul(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Uv(""+t.key):e.toString(36)}function Ys(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case cs:case Tv:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ul(o,0):r,Pd(i)?(n="",t!=null&&(n=t.replace(xd,"$&/")+"/"),Ys(i,e,n,"",function(u){return u})):i!=null&&(Hu(i)&&(i=Fv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(xd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Pd(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Ul(s,l);o+=Ys(s,e,n,a,i)}else if(a=bv(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Ul(s,l++),o+=Ys(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function xs(t,e,n){if(t==null)return t;var r=[],i=0;return Ys(t,r,"","",function(s){return e.call(n,s,i++)}),r}function zv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ae={current:null},Xs={transition:null},Wv={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:Xs,ReactCurrentOwner:Vu};z.Children={map:xs,forEach:function(t,e,n){xs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return xs(t,function(){e++}),e},toArray:function(t){return xs(t,function(e){return e})||[]},only:function(t){if(!Hu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Component=qr;z.Fragment=Nv;z.Profiler=Pv;z.PureComponent=Bu;z.StrictMode=Rv;z.Suspense=Dv;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wv;z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Kf({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Vu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Yf.call(e,a)&&!Xf.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:cs,type:t.type,key:i,ref:s,props:r,_owner:o}};z.createContext=function(t){return t={$$typeof:Ov,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:xv,_context:t},t.Consumer=t};z.createElement=Jf;z.createFactory=function(t){var e=Jf.bind(null,t);return e.type=t,e};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:Av,render:t}};z.isValidElement=Hu;z.lazy=function(t){return{$$typeof:Lv,_payload:{_status:-1,_result:t},_init:zv}};z.memo=function(t,e){return{$$typeof:Mv,type:t,compare:e===void 0?null:e}};z.startTransition=function(t){var e=Xs.transition;Xs.transition={};try{t()}finally{Xs.transition=e}};z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};z.useCallback=function(t,e){return Ae.current.useCallback(t,e)};z.useContext=function(t){return Ae.current.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t){return Ae.current.useDeferredValue(t)};z.useEffect=function(t,e){return Ae.current.useEffect(t,e)};z.useId=function(){return Ae.current.useId()};z.useImperativeHandle=function(t,e,n){return Ae.current.useImperativeHandle(t,e,n)};z.useInsertionEffect=function(t,e){return Ae.current.useInsertionEffect(t,e)};z.useLayoutEffect=function(t,e){return Ae.current.useLayoutEffect(t,e)};z.useMemo=function(t,e){return Ae.current.useMemo(t,e)};z.useReducer=function(t,e,n){return Ae.current.useReducer(t,e,n)};z.useRef=function(t){return Ae.current.useRef(t)};z.useState=function(t){return Ae.current.useState(t)};z.useSyncExternalStore=function(t,e,n){return Ae.current.useSyncExternalStore(t,e,n)};z.useTransition=function(){return Ae.current.useTransition()};z.version="18.2.0";(function(t){t.exports=z})(kv);const Bv=Cv(U);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jv=U,Vv=Symbol.for("react.element"),Hv=Symbol.for("react.fragment"),$v=Object.prototype.hasOwnProperty,Gv=jv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kv={key:!0,ref:!0,__self:!0,__source:!0};function Zf(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)$v.call(e,r)&&!Kv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Vv,type:t,key:s,ref:o,props:i,_owner:Gv.current}}sl.Fragment=Hv;sl.jsx=Zf;sl.jsxs=Zf;(function(t){t.exports=sl})(Iv);const mi=Li.Fragment,M=Li.jsx,He=Li.jsxs;var ka={},Ta={},Qv={get exports(){return Ta},set exports(t){Ta=t}},qe={},Na={},qv={get exports(){return Na},set exports(t){Na=t}},ep={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,A){var O=k.length;k.push(A);e:for(;0<O;){var J=O-1>>>1,le=k[J];if(0<i(le,A))k[J]=A,k[O]=le,O=J;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var A=k[0],O=k.pop();if(O!==A){k[0]=O;e:for(var J=0,le=k.length,Gt=le>>>1;J<Gt;){var Tt=2*(J+1)-1,Ps=k[Tt],he=Tt+1,rr=k[he];if(0>i(Ps,O))he<le&&0>i(rr,Ps)?(k[J]=rr,k[he]=O,J=he):(k[J]=Ps,k[Tt]=O,J=Tt);else if(he<le&&0>i(rr,O))k[J]=rr,k[he]=O,J=he;else break e}}return A}function i(k,A){var O=k.sortIndex-A.sortIndex;return O!==0?O:k.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,g=!1,_=!1,v=!1,R=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(k){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=k)r(u),A.sortIndex=A.expirationTime,e(a,A);else break;A=n(u)}}function y(k){if(v=!1,m(k),!_)if(n(a)!==null)_=!0,Rs(S);else{var A=n(u);A!==null&&$t(y,A.startTime-k)}}function S(k,A){_=!1,v&&(v=!1,p(N),N=-1),g=!0;var O=h;try{for(m(A),c=n(a);c!==null&&(!(c.expirationTime>A)||k&&!Ve());){var J=c.callback;if(typeof J=="function"){c.callback=null,h=c.priorityLevel;var le=J(c.expirationTime<=A);A=t.unstable_now(),typeof le=="function"?c.callback=le:c===n(a)&&r(a),m(A)}else r(a);c=n(a)}if(c!==null)var Gt=!0;else{var Tt=n(u);Tt!==null&&$t(y,Tt.startTime-A),Gt=!1}return Gt}finally{c=null,h=O,g=!1}}var I=!1,C=null,N=-1,V=5,D=-1;function Ve(){return!(t.unstable_now()-D<V)}function Nn(){if(C!==null){var k=t.unstable_now();D=k;var A=!0;try{A=C(!0,k)}finally{A?kt():(I=!1,C=null)}}else I=!1}var kt;if(typeof f=="function")kt=function(){f(Nn)};else if(typeof MessageChannel<"u"){var Rn=new MessageChannel,Nd=Rn.port2;Rn.port1.onmessage=Nn,kt=function(){Nd.postMessage(null)}}else kt=function(){R(Nn,0)};function Rs(k){C=k,I||(I=!0,kt())}function $t(k,A){N=R(function(){k(t.unstable_now())},A)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,Rs(S))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(k){switch(h){case 1:case 2:case 3:var A=3;break;default:A=h}var O=h;h=A;try{return k()}finally{h=O}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,A){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var O=h;h=k;try{return A()}finally{h=O}},t.unstable_scheduleCallback=function(k,A,O){var J=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?J+O:J):O=J,k){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=O+le,k={id:d++,callback:A,priorityLevel:k,startTime:O,expirationTime:le,sortIndex:-1},O>J?(k.sortIndex=O,e(u,k),n(a)===null&&k===n(u)&&(v?(p(N),N=-1):v=!0,$t(y,O-J))):(k.sortIndex=le,e(a,k),_||g||(_=!0,Rs(S))),k},t.unstable_shouldYield=Ve,t.unstable_wrapCallback=function(k){var A=h;return function(){var O=h;h=A;try{return k.apply(this,arguments)}finally{h=O}}}})(ep);(function(t){t.exports=ep})(qv);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp=U,Qe=Na;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var np=new Set,bi={};function er(t,e){Mr(t,e),Mr(t+"Capture",e)}function Mr(t,e){for(bi[t]=e,t=0;t<e.length;t++)np.add(e[t])}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ra=Object.prototype.hasOwnProperty,Yv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Od={},Ad={};function Xv(t){return Ra.call(Ad,t)?!0:Ra.call(Od,t)?!1:Yv.test(t)?Ad[t]=!0:(Od[t]=!0,!1)}function Jv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Zv(t,e,n,r){if(e===null||typeof e>"u"||Jv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function De(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ee[t]=new De(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ee[e]=new De(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ee[t]=new De(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ee[t]=new De(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ee[t]=new De(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ee[t]=new De(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ee[t]=new De(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ee[t]=new De(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ee[t]=new De(t,5,!1,t.toLowerCase(),null,!1,!1)});var $u=/[\-:]([a-z])/g;function Gu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($u,Gu);Ee[e]=new De(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($u,Gu);Ee[e]=new De(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($u,Gu);Ee[e]=new De(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ee[t]=new De(t,1,!1,t.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ee[t]=new De(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ku(t,e,n,r){var i=Ee.hasOwnProperty(e)?Ee[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Zv(e,n,i,r)&&(n=null),r||i===null?Xv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Vt=tp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Os=Symbol.for("react.element"),lr=Symbol.for("react.portal"),ar=Symbol.for("react.fragment"),Qu=Symbol.for("react.strict_mode"),Pa=Symbol.for("react.profiler"),rp=Symbol.for("react.provider"),ip=Symbol.for("react.context"),qu=Symbol.for("react.forward_ref"),xa=Symbol.for("react.suspense"),Oa=Symbol.for("react.suspense_list"),Yu=Symbol.for("react.memo"),qt=Symbol.for("react.lazy"),sp=Symbol.for("react.offscreen"),Dd=Symbol.iterator;function ri(t){return t===null||typeof t!="object"?null:(t=Dd&&t[Dd]||t["@@iterator"],typeof t=="function"?t:null)}var ne=Object.assign,zl;function gi(t){if(zl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);zl=e&&e[1]||""}return`
`+zl+t}var Wl=!1;function Bl(t,e){if(!t||Wl)return"";Wl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Wl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?gi(t):""}function ey(t){switch(t.tag){case 5:return gi(t.type);case 16:return gi("Lazy");case 13:return gi("Suspense");case 19:return gi("SuspenseList");case 0:case 2:case 15:return t=Bl(t.type,!1),t;case 11:return t=Bl(t.type.render,!1),t;case 1:return t=Bl(t.type,!0),t;default:return""}}function Aa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ar:return"Fragment";case lr:return"Portal";case Pa:return"Profiler";case Qu:return"StrictMode";case xa:return"Suspense";case Oa:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ip:return(t.displayName||"Context")+".Consumer";case rp:return(t._context.displayName||"Context")+".Provider";case qu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yu:return e=t.displayName||null,e!==null?e:Aa(t.type)||"Memo";case qt:e=t._payload,t=t._init;try{return Aa(t(e))}catch{}}return null}function ty(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Aa(e);case 8:return e===Qu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function op(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ny(t){var e=op(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function As(t){t._valueTracker||(t._valueTracker=ny(t))}function lp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=op(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function fo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Da(t,e){var n=e.checked;return ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Md(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=vn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ap(t,e){e=e.checked,e!=null&&Ku(t,"checked",e,!1)}function Ma(t,e){ap(t,e);var n=vn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?La(t,e.type,n):e.hasOwnProperty("defaultValue")&&La(t,e.type,vn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ld(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function La(t,e,n){(e!=="number"||fo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _i=Array.isArray;function Cr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+vn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ba(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(_i(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:vn(n)}}function up(t,e){var n=vn(e.value),r=vn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Fd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function cp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fa(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?cp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ds,dp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ds=Ds||document.createElement("div"),Ds.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ds.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ei={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ry=["Webkit","ms","Moz","O"];Object.keys(Ei).forEach(function(t){ry.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ei[e]=Ei[t]})});function hp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ei.hasOwnProperty(t)&&Ei[t]?(""+e).trim():e+"px"}function fp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=hp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var iy=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ua(t,e){if(e){if(iy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function za(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wa=null;function Xu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ba=null,Ir=null,kr=null;function Ud(t){if(t=fs(t)){if(typeof Ba!="function")throw Error(w(280));var e=t.stateNode;e&&(e=cl(e),Ba(t.stateNode,t.type,e))}}function pp(t){Ir?kr?kr.push(t):kr=[t]:Ir=t}function mp(){if(Ir){var t=Ir,e=kr;if(kr=Ir=null,Ud(t),e)for(t=0;t<e.length;t++)Ud(e[t])}}function gp(t,e){return t(e)}function _p(){}var jl=!1;function vp(t,e,n){if(jl)return t(e,n);jl=!0;try{return gp(t,e,n)}finally{jl=!1,(Ir!==null||kr!==null)&&(_p(),mp())}}function Ui(t,e){var n=t.stateNode;if(n===null)return null;var r=cl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var ja=!1;if(Ft)try{var ii={};Object.defineProperty(ii,"passive",{get:function(){ja=!0}}),window.addEventListener("test",ii,ii),window.removeEventListener("test",ii,ii)}catch{ja=!1}function sy(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Si=!1,po=null,mo=!1,Va=null,oy={onError:function(t){Si=!0,po=t}};function ly(t,e,n,r,i,s,o,l,a){Si=!1,po=null,sy.apply(oy,arguments)}function ay(t,e,n,r,i,s,o,l,a){if(ly.apply(this,arguments),Si){if(Si){var u=po;Si=!1,po=null}else throw Error(w(198));mo||(mo=!0,Va=u)}}function tr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function yp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zd(t){if(tr(t)!==t)throw Error(w(188))}function uy(t){var e=t.alternate;if(!e){if(e=tr(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return zd(i),t;if(s===r)return zd(i),e;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function wp(t){return t=uy(t),t!==null?Ep(t):null}function Ep(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ep(t);if(e!==null)return e;t=t.sibling}return null}var Sp=Qe.unstable_scheduleCallback,Wd=Qe.unstable_cancelCallback,cy=Qe.unstable_shouldYield,dy=Qe.unstable_requestPaint,se=Qe.unstable_now,hy=Qe.unstable_getCurrentPriorityLevel,Ju=Qe.unstable_ImmediatePriority,Cp=Qe.unstable_UserBlockingPriority,go=Qe.unstable_NormalPriority,fy=Qe.unstable_LowPriority,Ip=Qe.unstable_IdlePriority,ol=null,vt=null;function py(t){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(ol,t,void 0,(t.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:_y,my=Math.log,gy=Math.LN2;function _y(t){return t>>>=0,t===0?32:31-(my(t)/gy|0)|0}var Ms=64,Ls=4194304;function vi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _o(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=vi(l):(s&=o,s!==0&&(r=vi(s)))}else o=n&~i,o!==0?r=vi(o):s!==0&&(r=vi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-dt(e),i=1<<n,r|=t[n],e&=~i;return r}function vy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yy(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-dt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=vy(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Ha(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function kp(){var t=Ms;return Ms<<=1,!(Ms&4194240)&&(Ms=64),t}function Vl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ds(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-dt(e),t[e]=n}function wy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-dt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Zu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-dt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var j=0;function Tp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Np,ec,Rp,Pp,xp,$a=!1,bs=[],sn=null,on=null,ln=null,zi=new Map,Wi=new Map,Xt=[],Ey="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bd(t,e){switch(t){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":zi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wi.delete(e.pointerId)}}function si(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=fs(e),e!==null&&ec(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Sy(t,e,n,r,i){switch(e){case"focusin":return sn=si(sn,t,e,n,r,i),!0;case"dragenter":return on=si(on,t,e,n,r,i),!0;case"mouseover":return ln=si(ln,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return zi.set(s,si(zi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Wi.set(s,si(Wi.get(s)||null,t,e,n,r,i)),!0}return!1}function Op(t){var e=Mn(t.target);if(e!==null){var n=tr(e);if(n!==null){if(e=n.tag,e===13){if(e=yp(n),e!==null){t.blockedOn=e,xp(t.priority,function(){Rp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Js(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ga(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Wa=r,n.target.dispatchEvent(r),Wa=null}else return e=fs(n),e!==null&&ec(e),t.blockedOn=n,!1;e.shift()}return!0}function jd(t,e,n){Js(t)&&n.delete(e)}function Cy(){$a=!1,sn!==null&&Js(sn)&&(sn=null),on!==null&&Js(on)&&(on=null),ln!==null&&Js(ln)&&(ln=null),zi.forEach(jd),Wi.forEach(jd)}function oi(t,e){t.blockedOn===e&&(t.blockedOn=null,$a||($a=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,Cy)))}function Bi(t){function e(i){return oi(i,t)}if(0<bs.length){oi(bs[0],t);for(var n=1;n<bs.length;n++){var r=bs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(sn!==null&&oi(sn,t),on!==null&&oi(on,t),ln!==null&&oi(ln,t),zi.forEach(e),Wi.forEach(e),n=0;n<Xt.length;n++)r=Xt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Xt.length&&(n=Xt[0],n.blockedOn===null);)Op(n),n.blockedOn===null&&Xt.shift()}var Tr=Vt.ReactCurrentBatchConfig,vo=!0;function Iy(t,e,n,r){var i=j,s=Tr.transition;Tr.transition=null;try{j=1,tc(t,e,n,r)}finally{j=i,Tr.transition=s}}function ky(t,e,n,r){var i=j,s=Tr.transition;Tr.transition=null;try{j=4,tc(t,e,n,r)}finally{j=i,Tr.transition=s}}function tc(t,e,n,r){if(vo){var i=Ga(t,e,n,r);if(i===null)Zl(t,e,r,yo,n),Bd(t,r);else if(Sy(i,t,e,n,r))r.stopPropagation();else if(Bd(t,r),e&4&&-1<Ey.indexOf(t)){for(;i!==null;){var s=fs(i);if(s!==null&&Np(s),s=Ga(t,e,n,r),s===null&&Zl(t,e,r,yo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Zl(t,e,r,null,n)}}var yo=null;function Ga(t,e,n,r){if(yo=null,t=Xu(r),t=Mn(t),t!==null)if(e=tr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=yp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yo=t,null}function Ap(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hy()){case Ju:return 1;case Cp:return 4;case go:case fy:return 16;case Ip:return 536870912;default:return 16}default:return 16}}var nn=null,nc=null,Zs=null;function Dp(){if(Zs)return Zs;var t,e=nc,n=e.length,r,i="value"in nn?nn.value:nn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Zs=i.slice(t,1<r?1-r:void 0)}function eo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fs(){return!0}function Vd(){return!1}function Ye(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fs:Vd,this.isPropagationStopped=Vd,this}return ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fs)},persist:function(){},isPersistent:Fs}),e}var Yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rc=Ye(Yr),hs=ne({},Yr,{view:0,detail:0}),Ty=Ye(hs),Hl,$l,li,ll=ne({},hs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ic,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==li&&(li&&t.type==="mousemove"?(Hl=t.screenX-li.screenX,$l=t.screenY-li.screenY):$l=Hl=0,li=t),Hl)},movementY:function(t){return"movementY"in t?t.movementY:$l}}),Hd=Ye(ll),Ny=ne({},ll,{dataTransfer:0}),Ry=Ye(Ny),Py=ne({},hs,{relatedTarget:0}),Gl=Ye(Py),xy=ne({},Yr,{animationName:0,elapsedTime:0,pseudoElement:0}),Oy=Ye(xy),Ay=ne({},Yr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Dy=Ye(Ay),My=ne({},Yr,{data:0}),$d=Ye(My),Ly={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},by={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Fy[t])?!!e[t]:!1}function ic(){return Uy}var zy=ne({},hs,{key:function(t){if(t.key){var e=Ly[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=eo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?by[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ic,charCode:function(t){return t.type==="keypress"?eo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?eo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Wy=Ye(zy),By=ne({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gd=Ye(By),jy=ne({},hs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ic}),Vy=Ye(jy),Hy=ne({},Yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),$y=Ye(Hy),Gy=ne({},ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ky=Ye(Gy),Qy=[9,13,27,32],sc=Ft&&"CompositionEvent"in window,Ci=null;Ft&&"documentMode"in document&&(Ci=document.documentMode);var qy=Ft&&"TextEvent"in window&&!Ci,Mp=Ft&&(!sc||Ci&&8<Ci&&11>=Ci),Kd=String.fromCharCode(32),Qd=!1;function Lp(t,e){switch(t){case"keyup":return Qy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ur=!1;function Yy(t,e){switch(t){case"compositionend":return bp(e);case"keypress":return e.which!==32?null:(Qd=!0,Kd);case"textInput":return t=e.data,t===Kd&&Qd?null:t;default:return null}}function Xy(t,e){if(ur)return t==="compositionend"||!sc&&Lp(t,e)?(t=Dp(),Zs=nc=nn=null,ur=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Mp&&e.locale!=="ko"?null:e.data;default:return null}}var Jy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Jy[t.type]:e==="textarea"}function Fp(t,e,n,r){pp(r),e=wo(e,"onChange"),0<e.length&&(n=new rc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ii=null,ji=null;function Zy(t){Qp(t,0)}function al(t){var e=hr(t);if(lp(e))return t}function e0(t,e){if(t==="change")return e}var Up=!1;if(Ft){var Kl;if(Ft){var Ql="oninput"in document;if(!Ql){var Yd=document.createElement("div");Yd.setAttribute("oninput","return;"),Ql=typeof Yd.oninput=="function"}Kl=Ql}else Kl=!1;Up=Kl&&(!document.documentMode||9<document.documentMode)}function Xd(){Ii&&(Ii.detachEvent("onpropertychange",zp),ji=Ii=null)}function zp(t){if(t.propertyName==="value"&&al(ji)){var e=[];Fp(e,ji,t,Xu(t)),vp(Zy,e)}}function t0(t,e,n){t==="focusin"?(Xd(),Ii=e,ji=n,Ii.attachEvent("onpropertychange",zp)):t==="focusout"&&Xd()}function n0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return al(ji)}function r0(t,e){if(t==="click")return al(e)}function i0(t,e){if(t==="input"||t==="change")return al(e)}function s0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pt=typeof Object.is=="function"?Object.is:s0;function Vi(t,e){if(pt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ra.call(e,i)||!pt(t[i],e[i]))return!1}return!0}function Jd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zd(t,e){var n=Jd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jd(n)}}function Wp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Wp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Bp(){for(var t=window,e=fo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fo(t.document)}return e}function oc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function o0(t){var e=Bp(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Wp(n.ownerDocument.documentElement,n)){if(r!==null&&oc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Zd(n,s);var o=Zd(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var l0=Ft&&"documentMode"in document&&11>=document.documentMode,cr=null,Ka=null,ki=null,Qa=!1;function eh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qa||cr==null||cr!==fo(r)||(r=cr,"selectionStart"in r&&oc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ki&&Vi(ki,r)||(ki=r,r=wo(Ka,"onSelect"),0<r.length&&(e=new rc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=cr)))}function Us(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var dr={animationend:Us("Animation","AnimationEnd"),animationiteration:Us("Animation","AnimationIteration"),animationstart:Us("Animation","AnimationStart"),transitionend:Us("Transition","TransitionEnd")},ql={},jp={};Ft&&(jp=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function ul(t){if(ql[t])return ql[t];if(!dr[t])return t;var e=dr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in jp)return ql[t]=e[n];return t}var Vp=ul("animationend"),Hp=ul("animationiteration"),$p=ul("animationstart"),Gp=ul("transitionend"),Kp=new Map,th="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cn(t,e){Kp.set(t,e),er(e,[t])}for(var Yl=0;Yl<th.length;Yl++){var Xl=th[Yl],a0=Xl.toLowerCase(),u0=Xl[0].toUpperCase()+Xl.slice(1);Cn(a0,"on"+u0)}Cn(Vp,"onAnimationEnd");Cn(Hp,"onAnimationIteration");Cn($p,"onAnimationStart");Cn("dblclick","onDoubleClick");Cn("focusin","onFocus");Cn("focusout","onBlur");Cn(Gp,"onTransitionEnd");Mr("onMouseEnter",["mouseout","mouseover"]);Mr("onMouseLeave",["mouseout","mouseover"]);Mr("onPointerEnter",["pointerout","pointerover"]);Mr("onPointerLeave",["pointerout","pointerover"]);er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));er("onBeforeInput",["compositionend","keypress","textInput","paste"]);er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),c0=new Set("cancel close invalid load scroll toggle".split(" ").concat(yi));function nh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ay(r,e,void 0,t),t.currentTarget=null}function Qp(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;nh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;nh(i,l,u),s=a}}}if(mo)throw t=Va,mo=!1,Va=null,t}function Q(t,e){var n=e[Za];n===void 0&&(n=e[Za]=new Set);var r=t+"__bubble";n.has(r)||(qp(e,t,2,!1),n.add(r))}function Jl(t,e,n){var r=0;e&&(r|=4),qp(n,t,r,e)}var zs="_reactListening"+Math.random().toString(36).slice(2);function Hi(t){if(!t[zs]){t[zs]=!0,np.forEach(function(n){n!=="selectionchange"&&(c0.has(n)||Jl(n,!1,t),Jl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zs]||(e[zs]=!0,Jl("selectionchange",!1,e))}}function qp(t,e,n,r){switch(Ap(e)){case 1:var i=Iy;break;case 4:i=ky;break;default:i=tc}n=i.bind(null,e,n,t),i=void 0,!ja||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Zl(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Mn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}vp(function(){var u=s,d=Xu(n),c=[];e:{var h=Kp.get(t);if(h!==void 0){var g=rc,_=t;switch(t){case"keypress":if(eo(n)===0)break e;case"keydown":case"keyup":g=Wy;break;case"focusin":_="focus",g=Gl;break;case"focusout":_="blur",g=Gl;break;case"beforeblur":case"afterblur":g=Gl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Hd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Ry;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Vy;break;case Vp:case Hp:case $p:g=Oy;break;case Gp:g=$y;break;case"scroll":g=Ty;break;case"wheel":g=Ky;break;case"copy":case"cut":case"paste":g=Dy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Gd}var v=(e&4)!==0,R=!v&&t==="scroll",p=v?h!==null?h+"Capture":null:h;v=[];for(var f=u,m;f!==null;){m=f;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=Ui(f,p),y!=null&&v.push($i(f,y,m)))),R)break;f=f.return}0<v.length&&(h=new g(h,_,null,n,d),c.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Wa&&(_=n.relatedTarget||n.fromElement)&&(Mn(_)||_[Ut]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?Mn(_):null,_!==null&&(R=tr(_),_!==R||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(v=Hd,y="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Gd,y="onPointerLeave",p="onPointerEnter",f="pointer"),R=g==null?h:hr(g),m=_==null?h:hr(_),h=new v(y,f+"leave",g,n,d),h.target=R,h.relatedTarget=m,y=null,Mn(d)===u&&(v=new v(p,f+"enter",_,n,d),v.target=m,v.relatedTarget=R,y=v),R=y,g&&_)t:{for(v=g,p=_,f=0,m=v;m;m=ir(m))f++;for(m=0,y=p;y;y=ir(y))m++;for(;0<f-m;)v=ir(v),f--;for(;0<m-f;)p=ir(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=ir(v),p=ir(p)}v=null}else v=null;g!==null&&rh(c,h,g,v,!1),_!==null&&R!==null&&rh(c,R,_,v,!0)}}e:{if(h=u?hr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var S=e0;else if(qd(h))if(Up)S=i0;else{S=n0;var I=t0}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=r0);if(S&&(S=S(t,u))){Fp(c,S,n,d);break e}I&&I(t,h,u),t==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&La(h,"number",h.value)}switch(I=u?hr(u):window,t){case"focusin":(qd(I)||I.contentEditable==="true")&&(cr=I,Ka=u,ki=null);break;case"focusout":ki=Ka=cr=null;break;case"mousedown":Qa=!0;break;case"contextmenu":case"mouseup":case"dragend":Qa=!1,eh(c,n,d);break;case"selectionchange":if(l0)break;case"keydown":case"keyup":eh(c,n,d)}var C;if(sc)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else ur?Lp(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Mp&&n.locale!=="ko"&&(ur||N!=="onCompositionStart"?N==="onCompositionEnd"&&ur&&(C=Dp()):(nn=d,nc="value"in nn?nn.value:nn.textContent,ur=!0)),I=wo(u,N),0<I.length&&(N=new $d(N,t,null,n,d),c.push({event:N,listeners:I}),C?N.data=C:(C=bp(n),C!==null&&(N.data=C)))),(C=qy?Yy(t,n):Xy(t,n))&&(u=wo(u,"onBeforeInput"),0<u.length&&(d=new $d("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=C))}Qp(c,e)})}function $i(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ui(t,n),s!=null&&r.unshift($i(t,s,i)),s=Ui(t,e),s!=null&&r.push($i(t,s,i))),t=t.return}return r}function ir(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Ui(n,s),a!=null&&o.unshift($i(n,a,l))):i||(a=Ui(n,s),a!=null&&o.push($i(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var d0=/\r\n?/g,h0=/\u0000|\uFFFD/g;function ih(t){return(typeof t=="string"?t:""+t).replace(d0,`
`).replace(h0,"")}function Ws(t,e,n){if(e=ih(e),ih(t)!==e&&n)throw Error(w(425))}function Eo(){}var qa=null,Ya=null;function Xa(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ja=typeof setTimeout=="function"?setTimeout:void 0,f0=typeof clearTimeout=="function"?clearTimeout:void 0,sh=typeof Promise=="function"?Promise:void 0,p0=typeof queueMicrotask=="function"?queueMicrotask:typeof sh<"u"?function(t){return sh.resolve(null).then(t).catch(m0)}:Ja;function m0(t){setTimeout(function(){throw t})}function ea(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Bi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Bi(e)}function an(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function oh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Xr=Math.random().toString(36).slice(2),_t="__reactFiber$"+Xr,Gi="__reactProps$"+Xr,Ut="__reactContainer$"+Xr,Za="__reactEvents$"+Xr,g0="__reactListeners$"+Xr,_0="__reactHandles$"+Xr;function Mn(t){var e=t[_t];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ut]||n[_t]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=oh(t);t!==null;){if(n=t[_t])return n;t=oh(t)}return e}t=n,n=t.parentNode}return null}function fs(t){return t=t[_t]||t[Ut],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function cl(t){return t[Gi]||null}var eu=[],fr=-1;function In(t){return{current:t}}function Y(t){0>fr||(t.current=eu[fr],eu[fr]=null,fr--)}function K(t,e){fr++,eu[fr]=t.current,t.current=e}var yn={},Te=In(yn),Fe=In(!1),Vn=yn;function Lr(t,e){var n=t.type.contextTypes;if(!n)return yn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ue(t){return t=t.childContextTypes,t!=null}function So(){Y(Fe),Y(Te)}function lh(t,e,n){if(Te.current!==yn)throw Error(w(168));K(Te,e),K(Fe,n)}function Yp(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,ty(t)||"Unknown",i));return ne({},n,r)}function Co(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yn,Vn=Te.current,K(Te,t),K(Fe,Fe.current),!0}function ah(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=Yp(t,e,Vn),r.__reactInternalMemoizedMergedChildContext=t,Y(Fe),Y(Te),K(Te,t)):Y(Fe),K(Fe,n)}var Rt=null,dl=!1,ta=!1;function Xp(t){Rt===null?Rt=[t]:Rt.push(t)}function v0(t){dl=!0,Xp(t)}function kn(){if(!ta&&Rt!==null){ta=!0;var t=0,e=j;try{var n=Rt;for(j=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Rt=null,dl=!1}catch(i){throw Rt!==null&&(Rt=Rt.slice(t+1)),Sp(Ju,kn),i}finally{j=e,ta=!1}}return null}var pr=[],mr=0,Io=null,ko=0,Je=[],Ze=0,Hn=null,xt=1,Ot="";function xn(t,e){pr[mr++]=ko,pr[mr++]=Io,Io=t,ko=e}function Jp(t,e,n){Je[Ze++]=xt,Je[Ze++]=Ot,Je[Ze++]=Hn,Hn=t;var r=xt;t=Ot;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var s=32-dt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xt=1<<32-dt(e)+i|n<<i|r,Ot=s+t}else xt=1<<s|n<<i|r,Ot=t}function lc(t){t.return!==null&&(xn(t,1),Jp(t,1,0))}function ac(t){for(;t===Io;)Io=pr[--mr],pr[mr]=null,ko=pr[--mr],pr[mr]=null;for(;t===Hn;)Hn=Je[--Ze],Je[Ze]=null,Ot=Je[--Ze],Je[Ze]=null,xt=Je[--Ze],Je[Ze]=null}var Ke=null,Ge=null,X=!1,lt=null;function Zp(t,e){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function uh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ke=t,Ge=an(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ke=t,Ge=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hn!==null?{id:xt,overflow:Ot}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ke=t,Ge=null,!0):!1;default:return!1}}function tu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nu(t){if(X){var e=Ge;if(e){var n=e;if(!uh(t,e)){if(tu(t))throw Error(w(418));e=an(n.nextSibling);var r=Ke;e&&uh(t,e)?Zp(r,n):(t.flags=t.flags&-4097|2,X=!1,Ke=t)}}else{if(tu(t))throw Error(w(418));t.flags=t.flags&-4097|2,X=!1,Ke=t}}}function ch(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ke=t}function Bs(t){if(t!==Ke)return!1;if(!X)return ch(t),X=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xa(t.type,t.memoizedProps)),e&&(e=Ge)){if(tu(t))throw em(),Error(w(418));for(;e;)Zp(t,e),e=an(e.nextSibling)}if(ch(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ge=an(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ge=null}}else Ge=Ke?an(t.stateNode.nextSibling):null;return!0}function em(){for(var t=Ge;t;)t=an(t.nextSibling)}function br(){Ge=Ke=null,X=!1}function uc(t){lt===null?lt=[t]:lt.push(t)}var y0=Vt.ReactCurrentBatchConfig;function st(t,e){if(t&&t.defaultProps){e=ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var To=In(null),No=null,gr=null,cc=null;function dc(){cc=gr=No=null}function hc(t){var e=To.current;Y(To),t._currentValue=e}function ru(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Nr(t,e){No=t,cc=gr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Le=!0),t.firstContext=null)}function nt(t){var e=t._currentValue;if(cc!==t)if(t={context:t,memoizedValue:e,next:null},gr===null){if(No===null)throw Error(w(308));gr=t,No.dependencies={lanes:0,firstContext:t}}else gr=gr.next=t;return e}var Ln=null;function fc(t){Ln===null?Ln=[t]:Ln.push(t)}function tm(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,fc(e)):(n.next=i.next,i.next=n),e.interleaved=n,zt(t,r)}function zt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yt=!1;function pc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Lt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function un(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,zt(t,n)}return i=r.interleaved,i===null?(e.next=e,fc(r)):(e.next=i.next,i.next=e),r.interleaved=e,zt(t,n)}function to(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zu(t,n)}}function dh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ro(t,e,n,r){var i=t.updateQueue;Yt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var h=l.lane,g=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,v=l;switch(h=e,g=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){c=_.call(g,c,h);break e}c=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,h=typeof _=="function"?_.call(g,c,h):_,h==null)break e;c=ne({},c,h);break e;case 2:Yt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=g,a=c):d=d.next=g,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Gn|=o,t.lanes=o,t.memoizedState=c}}function hh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var rm=new tp.Component().refs;function iu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hl={isMounted:function(t){return(t=t._reactInternals)?tr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Oe(),i=dn(t),s=Lt(r,i);s.payload=e,n!=null&&(s.callback=n),e=un(t,s,i),e!==null&&(ht(e,t,i,r),to(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Oe(),i=dn(t),s=Lt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=un(t,s,i),e!==null&&(ht(e,t,i,r),to(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Oe(),r=dn(t),i=Lt(n,r);i.tag=2,e!=null&&(i.callback=e),e=un(t,i,r),e!==null&&(ht(e,t,r,n),to(e,t,r))}};function fh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Vi(n,r)||!Vi(i,s):!0}function im(t,e,n){var r=!1,i=yn,s=e.contextType;return typeof s=="object"&&s!==null?s=nt(s):(i=Ue(e)?Vn:Te.current,r=e.contextTypes,s=(r=r!=null)?Lr(t,i):yn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ph(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&hl.enqueueReplaceState(e,e.state,null)}function su(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=rm,pc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=nt(s):(s=Ue(e)?Vn:Te.current,i.context=Lr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(iu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&hl.enqueueReplaceState(i,i.state,null),Ro(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ai(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===rm&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function js(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function mh(t){var e=t._init;return e(t._payload)}function sm(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=hn(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,m,y){return f===null||f.tag!==6?(f=aa(m,p.mode,y),f.return=p,f):(f=i(f,m),f.return=p,f)}function a(p,f,m,y){var S=m.type;return S===ar?d(p,f,m.props.children,y,m.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===qt&&mh(S)===f.type)?(y=i(f,m.props),y.ref=ai(p,f,m),y.return=p,y):(y=lo(m.type,m.key,m.props,null,p.mode,y),y.ref=ai(p,f,m),y.return=p,y)}function u(p,f,m,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=ua(m,p.mode,y),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function d(p,f,m,y,S){return f===null||f.tag!==7?(f=Wn(m,p.mode,y,S),f.return=p,f):(f=i(f,m),f.return=p,f)}function c(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=aa(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Os:return m=lo(f.type,f.key,f.props,null,p.mode,m),m.ref=ai(p,null,f),m.return=p,m;case lr:return f=ua(f,p.mode,m),f.return=p,f;case qt:var y=f._init;return c(p,y(f._payload),m)}if(_i(f)||ri(f))return f=Wn(f,p.mode,m,null),f.return=p,f;js(p,f)}return null}function h(p,f,m,y){var S=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:l(p,f,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Os:return m.key===S?a(p,f,m,y):null;case lr:return m.key===S?u(p,f,m,y):null;case qt:return S=m._init,h(p,f,S(m._payload),y)}if(_i(m)||ri(m))return S!==null?null:d(p,f,m,y,null);js(p,m)}return null}function g(p,f,m,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,l(f,p,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Os:return p=p.get(y.key===null?m:y.key)||null,a(f,p,y,S);case lr:return p=p.get(y.key===null?m:y.key)||null,u(f,p,y,S);case qt:var I=y._init;return g(p,f,m,I(y._payload),S)}if(_i(y)||ri(y))return p=p.get(m)||null,d(f,p,y,S,null);js(f,y)}return null}function _(p,f,m,y){for(var S=null,I=null,C=f,N=f=0,V=null;C!==null&&N<m.length;N++){C.index>N?(V=C,C=null):V=C.sibling;var D=h(p,C,m[N],y);if(D===null){C===null&&(C=V);break}t&&C&&D.alternate===null&&e(p,C),f=s(D,f,N),I===null?S=D:I.sibling=D,I=D,C=V}if(N===m.length)return n(p,C),X&&xn(p,N),S;if(C===null){for(;N<m.length;N++)C=c(p,m[N],y),C!==null&&(f=s(C,f,N),I===null?S=C:I.sibling=C,I=C);return X&&xn(p,N),S}for(C=r(p,C);N<m.length;N++)V=g(C,p,N,m[N],y),V!==null&&(t&&V.alternate!==null&&C.delete(V.key===null?N:V.key),f=s(V,f,N),I===null?S=V:I.sibling=V,I=V);return t&&C.forEach(function(Ve){return e(p,Ve)}),X&&xn(p,N),S}function v(p,f,m,y){var S=ri(m);if(typeof S!="function")throw Error(w(150));if(m=S.call(m),m==null)throw Error(w(151));for(var I=S=null,C=f,N=f=0,V=null,D=m.next();C!==null&&!D.done;N++,D=m.next()){C.index>N?(V=C,C=null):V=C.sibling;var Ve=h(p,C,D.value,y);if(Ve===null){C===null&&(C=V);break}t&&C&&Ve.alternate===null&&e(p,C),f=s(Ve,f,N),I===null?S=Ve:I.sibling=Ve,I=Ve,C=V}if(D.done)return n(p,C),X&&xn(p,N),S;if(C===null){for(;!D.done;N++,D=m.next())D=c(p,D.value,y),D!==null&&(f=s(D,f,N),I===null?S=D:I.sibling=D,I=D);return X&&xn(p,N),S}for(C=r(p,C);!D.done;N++,D=m.next())D=g(C,p,N,D.value,y),D!==null&&(t&&D.alternate!==null&&C.delete(D.key===null?N:D.key),f=s(D,f,N),I===null?S=D:I.sibling=D,I=D);return t&&C.forEach(function(Nn){return e(p,Nn)}),X&&xn(p,N),S}function R(p,f,m,y){if(typeof m=="object"&&m!==null&&m.type===ar&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Os:e:{for(var S=m.key,I=f;I!==null;){if(I.key===S){if(S=m.type,S===ar){if(I.tag===7){n(p,I.sibling),f=i(I,m.props.children),f.return=p,p=f;break e}}else if(I.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===qt&&mh(S)===I.type){n(p,I.sibling),f=i(I,m.props),f.ref=ai(p,I,m),f.return=p,p=f;break e}n(p,I);break}else e(p,I);I=I.sibling}m.type===ar?(f=Wn(m.props.children,p.mode,y,m.key),f.return=p,p=f):(y=lo(m.type,m.key,m.props,null,p.mode,y),y.ref=ai(p,f,m),y.return=p,p=y)}return o(p);case lr:e:{for(I=m.key;f!==null;){if(f.key===I)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=ua(m,p.mode,y),f.return=p,p=f}return o(p);case qt:return I=m._init,R(p,f,I(m._payload),y)}if(_i(m))return _(p,f,m,y);if(ri(m))return v(p,f,m,y);js(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=aa(m,p.mode,y),f.return=p,p=f),o(p)):n(p,f)}return R}var Fr=sm(!0),om=sm(!1),ps={},yt=In(ps),Ki=In(ps),Qi=In(ps);function bn(t){if(t===ps)throw Error(w(174));return t}function mc(t,e){switch(K(Qi,e),K(Ki,t),K(yt,ps),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fa(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fa(e,t)}Y(yt),K(yt,e)}function Ur(){Y(yt),Y(Ki),Y(Qi)}function lm(t){bn(Qi.current);var e=bn(yt.current),n=Fa(e,t.type);e!==n&&(K(Ki,t),K(yt,n))}function gc(t){Ki.current===t&&(Y(yt),Y(Ki))}var ee=In(0);function Po(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var na=[];function _c(){for(var t=0;t<na.length;t++)na[t]._workInProgressVersionPrimary=null;na.length=0}var no=Vt.ReactCurrentDispatcher,ra=Vt.ReactCurrentBatchConfig,$n=0,te=null,ae=null,me=null,xo=!1,Ti=!1,qi=0,w0=0;function Se(){throw Error(w(321))}function vc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pt(t[n],e[n]))return!1;return!0}function yc(t,e,n,r,i,s){if($n=s,te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,no.current=t===null||t.memoizedState===null?I0:k0,t=n(r,i),Ti){s=0;do{if(Ti=!1,qi=0,25<=s)throw Error(w(301));s+=1,me=ae=null,e.updateQueue=null,no.current=T0,t=n(r,i)}while(Ti)}if(no.current=Oo,e=ae!==null&&ae.next!==null,$n=0,me=ae=te=null,xo=!1,e)throw Error(w(300));return t}function wc(){var t=qi!==0;return qi=0,t}function gt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?te.memoizedState=me=t:me=me.next=t,me}function rt(){if(ae===null){var t=te.alternate;t=t!==null?t.memoizedState:null}else t=ae.next;var e=me===null?te.memoizedState:me.next;if(e!==null)me=e,ae=t;else{if(t===null)throw Error(w(310));ae=t,t={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},me===null?te.memoizedState=me=t:me=me.next=t}return me}function Yi(t,e){return typeof e=="function"?e(t):e}function ia(t){var e=rt(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=ae,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if(($n&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,te.lanes|=d,Gn|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,pt(r,e.memoizedState)||(Le=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,te.lanes|=s,Gn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function sa(t){var e=rt(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);pt(s,e.memoizedState)||(Le=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function am(){}function um(t,e){var n=te,r=rt(),i=e(),s=!pt(r.memoizedState,i);if(s&&(r.memoizedState=i,Le=!0),r=r.queue,Ec(hm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,Xi(9,dm.bind(null,n,r,i,e),void 0,null),ve===null)throw Error(w(349));$n&30||cm(n,e,i)}return i}function cm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=te.updateQueue,e===null?(e={lastEffect:null,stores:null},te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function dm(t,e,n,r){e.value=n,e.getSnapshot=r,fm(e)&&pm(t)}function hm(t,e,n){return n(function(){fm(e)&&pm(t)})}function fm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pt(t,n)}catch{return!0}}function pm(t){var e=zt(t,1);e!==null&&ht(e,t,1,-1)}function gh(t){var e=gt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:t},e.queue=t,t=t.dispatch=C0.bind(null,te,t),[e.memoizedState,t]}function Xi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=te.updateQueue,e===null?(e={lastEffect:null,stores:null},te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function mm(){return rt().memoizedState}function ro(t,e,n,r){var i=gt();te.flags|=t,i.memoizedState=Xi(1|e,n,void 0,r===void 0?null:r)}function fl(t,e,n,r){var i=rt();r=r===void 0?null:r;var s=void 0;if(ae!==null){var o=ae.memoizedState;if(s=o.destroy,r!==null&&vc(r,o.deps)){i.memoizedState=Xi(e,n,s,r);return}}te.flags|=t,i.memoizedState=Xi(1|e,n,s,r)}function _h(t,e){return ro(8390656,8,t,e)}function Ec(t,e){return fl(2048,8,t,e)}function gm(t,e){return fl(4,2,t,e)}function _m(t,e){return fl(4,4,t,e)}function vm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ym(t,e,n){return n=n!=null?n.concat([t]):null,fl(4,4,vm.bind(null,e,t),n)}function Sc(){}function wm(t,e){var n=rt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Em(t,e){var n=rt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Sm(t,e,n){return $n&21?(pt(n,e)||(n=kp(),te.lanes|=n,Gn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Le=!0),t.memoizedState=n)}function E0(t,e){var n=j;j=n!==0&&4>n?n:4,t(!0);var r=ra.transition;ra.transition={};try{t(!1),e()}finally{j=n,ra.transition=r}}function Cm(){return rt().memoizedState}function S0(t,e,n){var r=dn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Im(t))km(e,n);else if(n=tm(t,e,n,r),n!==null){var i=Oe();ht(n,t,r,i),Tm(n,e,r)}}function C0(t,e,n){var r=dn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Im(t))km(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,pt(l,o)){var a=e.interleaved;a===null?(i.next=i,fc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=tm(t,e,i,r),n!==null&&(i=Oe(),ht(n,t,r,i),Tm(n,e,r))}}function Im(t){var e=t.alternate;return t===te||e!==null&&e===te}function km(t,e){Ti=xo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Tm(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zu(t,n)}}var Oo={readContext:nt,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},I0={readContext:nt,useCallback:function(t,e){return gt().memoizedState=[t,e===void 0?null:e],t},useContext:nt,useEffect:_h,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ro(4194308,4,vm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ro(4194308,4,t,e)},useInsertionEffect:function(t,e){return ro(4,2,t,e)},useMemo:function(t,e){var n=gt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=gt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=S0.bind(null,te,t),[r.memoizedState,t]},useRef:function(t){var e=gt();return t={current:t},e.memoizedState=t},useState:gh,useDebugValue:Sc,useDeferredValue:function(t){return gt().memoizedState=t},useTransition:function(){var t=gh(!1),e=t[0];return t=E0.bind(null,t[1]),gt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=te,i=gt();if(X){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),ve===null)throw Error(w(349));$n&30||cm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,_h(hm.bind(null,r,s,t),[t]),r.flags|=2048,Xi(9,dm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=gt(),e=ve.identifierPrefix;if(X){var n=Ot,r=xt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=qi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=w0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},k0={readContext:nt,useCallback:wm,useContext:nt,useEffect:Ec,useImperativeHandle:ym,useInsertionEffect:gm,useLayoutEffect:_m,useMemo:Em,useReducer:ia,useRef:mm,useState:function(){return ia(Yi)},useDebugValue:Sc,useDeferredValue:function(t){var e=rt();return Sm(e,ae.memoizedState,t)},useTransition:function(){var t=ia(Yi)[0],e=rt().memoizedState;return[t,e]},useMutableSource:am,useSyncExternalStore:um,useId:Cm,unstable_isNewReconciler:!1},T0={readContext:nt,useCallback:wm,useContext:nt,useEffect:Ec,useImperativeHandle:ym,useInsertionEffect:gm,useLayoutEffect:_m,useMemo:Em,useReducer:sa,useRef:mm,useState:function(){return sa(Yi)},useDebugValue:Sc,useDeferredValue:function(t){var e=rt();return ae===null?e.memoizedState=t:Sm(e,ae.memoizedState,t)},useTransition:function(){var t=sa(Yi)[0],e=rt().memoizedState;return[t,e]},useMutableSource:am,useSyncExternalStore:um,useId:Cm,unstable_isNewReconciler:!1};function zr(t,e){try{var n="",r=e;do n+=ey(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function oa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ou(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var N0=typeof WeakMap=="function"?WeakMap:Map;function Nm(t,e,n){n=Lt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Do||(Do=!0,gu=r),ou(t,e)},n}function Rm(t,e,n){n=Lt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ou(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ou(t,e),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function vh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new N0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=B0.bind(null,t,e,n),e.then(t,t))}function yh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function wh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Lt(-1,1),e.tag=2,un(n,e,1))),n.lanes|=1),t)}var R0=Vt.ReactCurrentOwner,Le=!1;function Re(t,e,n,r){e.child=t===null?om(e,null,n,r):Fr(e,t.child,n,r)}function Eh(t,e,n,r,i){n=n.render;var s=e.ref;return Nr(e,i),r=yc(t,e,n,r,s,i),n=wc(),t!==null&&!Le?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wt(t,e,i)):(X&&n&&lc(e),e.flags|=1,Re(t,e,r,i),e.child)}function Sh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!xc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Pm(t,e,s,r,i)):(t=lo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Vi,n(o,r)&&t.ref===e.ref)return Wt(t,e,i)}return e.flags|=1,t=hn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Pm(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Vi(s,r)&&t.ref===e.ref)if(Le=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Le=!0);else return e.lanes=t.lanes,Wt(t,e,i)}return lu(t,e,n,r,i)}function xm(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(vr,$e),$e|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,K(vr,$e),$e|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,K(vr,$e),$e|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,K(vr,$e),$e|=r;return Re(t,e,i,n),e.child}function Om(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function lu(t,e,n,r,i){var s=Ue(n)?Vn:Te.current;return s=Lr(e,s),Nr(e,i),n=yc(t,e,n,r,s,i),r=wc(),t!==null&&!Le?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wt(t,e,i)):(X&&r&&lc(e),e.flags|=1,Re(t,e,n,i),e.child)}function Ch(t,e,n,r,i){if(Ue(n)){var s=!0;Co(e)}else s=!1;if(Nr(e,i),e.stateNode===null)io(t,e),im(e,n,r),su(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=nt(u):(u=Ue(n)?Vn:Te.current,u=Lr(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&ph(e,o,r,u),Yt=!1;var h=e.memoizedState;o.state=h,Ro(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Fe.current||Yt?(typeof d=="function"&&(iu(e,n,d,r),a=e.memoizedState),(l=Yt||fh(e,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,nm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:st(e.type,l),o.props=u,c=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=nt(a):(a=Ue(n)?Vn:Te.current,a=Lr(e,a));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&ph(e,o,r,a),Yt=!1,h=e.memoizedState,o.state=h,Ro(e,r,o,i);var _=e.memoizedState;l!==c||h!==_||Fe.current||Yt?(typeof g=="function"&&(iu(e,n,g,r),_=e.memoizedState),(u=Yt||fh(e,n,u,r,h,_,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return au(t,e,n,r,s,i)}function au(t,e,n,r,i,s){Om(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ah(e,n,!1),Wt(t,e,s);r=e.stateNode,R0.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Fr(e,t.child,null,s),e.child=Fr(e,null,l,s)):Re(t,e,l,s),e.memoizedState=r.state,i&&ah(e,n,!0),e.child}function Am(t){var e=t.stateNode;e.pendingContext?lh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lh(t,e.context,!1),mc(t,e.containerInfo)}function Ih(t,e,n,r,i){return br(),uc(i),e.flags|=256,Re(t,e,n,r),e.child}var uu={dehydrated:null,treeContext:null,retryLane:0};function cu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Dm(t,e,n){var r=e.pendingProps,i=ee.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),K(ee,i&1),t===null)return nu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=gl(o,r,0,null),t=Wn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=cu(n),e.memoizedState=uu,t):Cc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return P0(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=hn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=hn(l,s):(s=Wn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?cu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=uu,r}return s=t.child,t=s.sibling,r=hn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Cc(t,e){return e=gl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Vs(t,e,n,r){return r!==null&&uc(r),Fr(e,t.child,null,n),t=Cc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function P0(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=oa(Error(w(422))),Vs(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=gl({mode:"visible",children:r.children},i,0,null),s=Wn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Fr(e,t.child,null,o),e.child.memoizedState=cu(o),e.memoizedState=uu,s);if(!(e.mode&1))return Vs(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(w(419)),r=oa(s,r,void 0),Vs(t,e,o,r)}if(l=(o&t.childLanes)!==0,Le||l){if(r=ve,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,zt(t,i),ht(r,t,i,-1))}return Pc(),r=oa(Error(w(421))),Vs(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=j0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ge=an(i.nextSibling),Ke=e,X=!0,lt=null,t!==null&&(Je[Ze++]=xt,Je[Ze++]=Ot,Je[Ze++]=Hn,xt=t.id,Ot=t.overflow,Hn=e),e=Cc(e,r.children),e.flags|=4096,e)}function kh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ru(t.return,e,n)}function la(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Mm(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Re(t,e,r.children,n),r=ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kh(t,n,e);else if(t.tag===19)kh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(K(ee,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Po(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),la(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Po(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}la(e,!0,n,null,s);break;case"together":la(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function io(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=hn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=hn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function x0(t,e,n){switch(e.tag){case 3:Am(e),br();break;case 5:lm(e);break;case 1:Ue(e.type)&&Co(e);break;case 4:mc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;K(To,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(K(ee,ee.current&1),e.flags|=128,null):n&e.child.childLanes?Dm(t,e,n):(K(ee,ee.current&1),t=Wt(t,e,n),t!==null?t.sibling:null);K(ee,ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Mm(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(ee,ee.current),r)break;return null;case 22:case 23:return e.lanes=0,xm(t,e,n)}return Wt(t,e,n)}var Lm,du,bm,Fm;Lm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};du=function(){};bm=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,bn(yt.current);var s=null;switch(n){case"input":i=Da(t,i),r=Da(t,r),s=[];break;case"select":i=ne({},i,{value:void 0}),r=ne({},r,{value:void 0}),s=[];break;case"textarea":i=ba(t,i),r=ba(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Eo)}Ua(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Q("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Fm=function(t,e,n,r){n!==r&&(e.flags|=4)};function ui(t,e){if(!X)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ce(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function O0(t,e,n){var r=e.pendingProps;switch(ac(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(e),null;case 1:return Ue(e.type)&&So(),Ce(e),null;case 3:return r=e.stateNode,Ur(),Y(Fe),Y(Te),_c(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Bs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,lt!==null&&(yu(lt),lt=null))),du(t,e),Ce(e),null;case 5:gc(e);var i=bn(Qi.current);if(n=e.type,t!==null&&e.stateNode!=null)bm(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return Ce(e),null}if(t=bn(yt.current),Bs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[_t]=e,r[Gi]=s,t=(e.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(i=0;i<yi.length;i++)Q(yi[i],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":Md(r,s),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Q("invalid",r);break;case"textarea":bd(r,s),Q("invalid",r)}Ua(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ws(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ws(r.textContent,l,t),i=["children",""+l]):bi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Q("scroll",r)}switch(n){case"input":As(r),Ld(r,s,!0);break;case"textarea":As(r),Fd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Eo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[_t]=e,t[Gi]=r,Lm(t,e,!1,!1),e.stateNode=t;e:{switch(o=za(n,r),n){case"dialog":Q("cancel",t),Q("close",t),i=r;break;case"iframe":case"object":case"embed":Q("load",t),i=r;break;case"video":case"audio":for(i=0;i<yi.length;i++)Q(yi[i],t);i=r;break;case"source":Q("error",t),i=r;break;case"img":case"image":case"link":Q("error",t),Q("load",t),i=r;break;case"details":Q("toggle",t),i=r;break;case"input":Md(t,r),i=Da(t,r),Q("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ne({},r,{value:void 0}),Q("invalid",t);break;case"textarea":bd(t,r),i=ba(t,r),Q("invalid",t);break;default:i=r}Ua(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?fp(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&dp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Fi(t,a):typeof a=="number"&&Fi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&Q("scroll",t):a!=null&&Ku(t,s,a,o))}switch(n){case"input":As(t),Ld(t,r,!1);break;case"textarea":As(t),Fd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+vn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Cr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Cr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Eo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ce(e),null;case 6:if(t&&e.stateNode!=null)Fm(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=bn(Qi.current),bn(yt.current),Bs(e)){if(r=e.stateNode,n=e.memoizedProps,r[_t]=e,(s=r.nodeValue!==n)&&(t=Ke,t!==null))switch(t.tag){case 3:Ws(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ws(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_t]=e,e.stateNode=r}return Ce(e),null;case 13:if(Y(ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(X&&Ge!==null&&e.mode&1&&!(e.flags&128))em(),br(),e.flags|=98560,s=!1;else if(s=Bs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(w(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[_t]=e}else br(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ce(e),s=!1}else lt!==null&&(yu(lt),lt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ee.current&1?de===0&&(de=3):Pc())),e.updateQueue!==null&&(e.flags|=4),Ce(e),null);case 4:return Ur(),du(t,e),t===null&&Hi(e.stateNode.containerInfo),Ce(e),null;case 10:return hc(e.type._context),Ce(e),null;case 17:return Ue(e.type)&&So(),Ce(e),null;case 19:if(Y(ee),s=e.memoizedState,s===null)return Ce(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ui(s,!1);else{if(de!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Po(t),o!==null){for(e.flags|=128,ui(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return K(ee,ee.current&1|2),e.child}t=t.sibling}s.tail!==null&&se()>Wr&&(e.flags|=128,r=!0,ui(s,!1),e.lanes=4194304)}else{if(!r)if(t=Po(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ui(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!X)return Ce(e),null}else 2*se()-s.renderingStartTime>Wr&&n!==1073741824&&(e.flags|=128,r=!0,ui(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=se(),e.sibling=null,n=ee.current,K(ee,r?n&1|2:n&1),e):(Ce(e),null);case 22:case 23:return Rc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?$e&1073741824&&(Ce(e),e.subtreeFlags&6&&(e.flags|=8192)):Ce(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function A0(t,e){switch(ac(e),e.tag){case 1:return Ue(e.type)&&So(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ur(),Y(Fe),Y(Te),_c(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return gc(e),null;case 13:if(Y(ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));br()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Y(ee),null;case 4:return Ur(),null;case 10:return hc(e.type._context),null;case 22:case 23:return Rc(),null;case 24:return null;default:return null}}var Hs=!1,Ie=!1,D0=typeof WeakSet=="function"?WeakSet:Set,T=null;function _r(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(t,e,r)}else n.current=null}function hu(t,e,n){try{n()}catch(r){re(t,e,r)}}var Th=!1;function M0(t,e){if(qa=vo,t=Bp(),oc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)h=c,c=g;for(;;){if(c===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(a=o),(g=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ya={focusedElem:t,selectionRange:n},vo=!1,T=e;T!==null;)if(e=T,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,T=t;else for(;T!==null;){e=T;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,R=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:st(e.type,v),R);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){re(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,T=t;break}T=e.return}return _=Th,Th=!1,_}function Ni(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&hu(e,n,s)}i=i.next}while(i!==r)}}function pl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function fu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Um(t){var e=t.alternate;e!==null&&(t.alternate=null,Um(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_t],delete e[Gi],delete e[Za],delete e[g0],delete e[_0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function zm(t){return t.tag===5||t.tag===3||t.tag===4}function Nh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||zm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Eo));else if(r!==4&&(t=t.child,t!==null))for(pu(t,e,n),t=t.sibling;t!==null;)pu(t,e,n),t=t.sibling}function mu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(mu(t,e,n),t=t.sibling;t!==null;)mu(t,e,n),t=t.sibling}var ye=null,ot=!1;function Kt(t,e,n){for(n=n.child;n!==null;)Wm(t,e,n),n=n.sibling}function Wm(t,e,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(ol,n)}catch{}switch(n.tag){case 5:Ie||_r(n,e);case 6:var r=ye,i=ot;ye=null,Kt(t,e,n),ye=r,ot=i,ye!==null&&(ot?(t=ye,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(ot?(t=ye,n=n.stateNode,t.nodeType===8?ea(t.parentNode,n):t.nodeType===1&&ea(t,n),Bi(t)):ea(ye,n.stateNode));break;case 4:r=ye,i=ot,ye=n.stateNode.containerInfo,ot=!0,Kt(t,e,n),ye=r,ot=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&hu(n,e,o),i=i.next}while(i!==r)}Kt(t,e,n);break;case 1:if(!Ie&&(_r(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){re(n,e,l)}Kt(t,e,n);break;case 21:Kt(t,e,n);break;case 22:n.mode&1?(Ie=(r=Ie)||n.memoizedState!==null,Kt(t,e,n),Ie=r):Kt(t,e,n);break;default:Kt(t,e,n)}}function Rh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new D0),e.forEach(function(r){var i=V0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function it(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ye=l.stateNode,ot=!1;break e;case 3:ye=l.stateNode.containerInfo,ot=!0;break e;case 4:ye=l.stateNode.containerInfo,ot=!0;break e}l=l.return}if(ye===null)throw Error(w(160));Wm(s,o,i),ye=null,ot=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){re(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Bm(e,t),e=e.sibling}function Bm(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(it(e,t),mt(t),r&4){try{Ni(3,t,t.return),pl(3,t)}catch(v){re(t,t.return,v)}try{Ni(5,t,t.return)}catch(v){re(t,t.return,v)}}break;case 1:it(e,t),mt(t),r&512&&n!==null&&_r(n,n.return);break;case 5:if(it(e,t),mt(t),r&512&&n!==null&&_r(n,n.return),t.flags&32){var i=t.stateNode;try{Fi(i,"")}catch(v){re(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&ap(i,s),za(l,o);var u=za(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?fp(i,c):d==="dangerouslySetInnerHTML"?dp(i,c):d==="children"?Fi(i,c):Ku(i,d,c,u)}switch(l){case"input":Ma(i,s);break;case"textarea":up(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Cr(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Cr(i,!!s.multiple,s.defaultValue,!0):Cr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Gi]=s}catch(v){re(t,t.return,v)}}break;case 6:if(it(e,t),mt(t),r&4){if(t.stateNode===null)throw Error(w(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){re(t,t.return,v)}}break;case 3:if(it(e,t),mt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bi(e.containerInfo)}catch(v){re(t,t.return,v)}break;case 4:it(e,t),mt(t);break;case 13:it(e,t),mt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Tc=se())),r&4&&Rh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ie=(u=Ie)||d,it(e,t),Ie=u):it(e,t),mt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(T=t,d=t.child;d!==null;){for(c=T=d;T!==null;){switch(h=T,g=h.child,h.tag){case 0:case 11:case 14:case 15:Ni(4,h,h.return);break;case 1:_r(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){re(r,n,v)}}break;case 5:_r(h,h.return);break;case 22:if(h.memoizedState!==null){xh(c);continue}}g!==null?(g.return=h,T=g):xh(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=hp("display",o))}catch(v){re(t,t.return,v)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){re(t,t.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:it(e,t),mt(t),r&4&&Rh(t);break;case 21:break;default:it(e,t),mt(t)}}function mt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(zm(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fi(i,""),r.flags&=-33);var s=Nh(t);mu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Nh(t);pu(t,l,o);break;default:throw Error(w(161))}}catch(a){re(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function L0(t,e,n){T=t,jm(t)}function jm(t,e,n){for(var r=(t.mode&1)!==0;T!==null;){var i=T,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Hs;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ie;l=Hs;var u=Ie;if(Hs=o,(Ie=a)&&!u)for(T=i;T!==null;)o=T,a=o.child,o.tag===22&&o.memoizedState!==null?Oh(i):a!==null?(a.return=o,T=a):Oh(i);for(;s!==null;)T=s,jm(s),s=s.sibling;T=i,Hs=l,Ie=u}Ph(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,T=s):Ph(t)}}function Ph(t){for(;T!==null;){var e=T;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ie||pl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ie)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:st(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&hh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Bi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}Ie||e.flags&512&&fu(e)}catch(h){re(e,e.return,h)}}if(e===t){T=null;break}if(n=e.sibling,n!==null){n.return=e.return,T=n;break}T=e.return}}function xh(t){for(;T!==null;){var e=T;if(e===t){T=null;break}var n=e.sibling;if(n!==null){n.return=e.return,T=n;break}T=e.return}}function Oh(t){for(;T!==null;){var e=T;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{pl(4,e)}catch(a){re(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){re(e,i,a)}}var s=e.return;try{fu(e)}catch(a){re(e,s,a)}break;case 5:var o=e.return;try{fu(e)}catch(a){re(e,o,a)}}}catch(a){re(e,e.return,a)}if(e===t){T=null;break}var l=e.sibling;if(l!==null){l.return=e.return,T=l;break}T=e.return}}var b0=Math.ceil,Ao=Vt.ReactCurrentDispatcher,Ic=Vt.ReactCurrentOwner,tt=Vt.ReactCurrentBatchConfig,W=0,ve=null,oe=null,we=0,$e=0,vr=In(0),de=0,Ji=null,Gn=0,ml=0,kc=0,Ri=null,Me=null,Tc=0,Wr=1/0,Nt=null,Do=!1,gu=null,cn=null,$s=!1,rn=null,Mo=0,Pi=0,_u=null,so=-1,oo=0;function Oe(){return W&6?se():so!==-1?so:so=se()}function dn(t){return t.mode&1?W&2&&we!==0?we&-we:y0.transition!==null?(oo===0&&(oo=kp()),oo):(t=j,t!==0||(t=window.event,t=t===void 0?16:Ap(t.type)),t):1}function ht(t,e,n,r){if(50<Pi)throw Pi=0,_u=null,Error(w(185));ds(t,n,r),(!(W&2)||t!==ve)&&(t===ve&&(!(W&2)&&(ml|=n),de===4&&Jt(t,we)),ze(t,r),n===1&&W===0&&!(e.mode&1)&&(Wr=se()+500,dl&&kn()))}function ze(t,e){var n=t.callbackNode;yy(t,e);var r=_o(t,t===ve?we:0);if(r===0)n!==null&&Wd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Wd(n),e===1)t.tag===0?v0(Ah.bind(null,t)):Xp(Ah.bind(null,t)),p0(function(){!(W&6)&&kn()}),n=null;else{switch(Tp(r)){case 1:n=Ju;break;case 4:n=Cp;break;case 16:n=go;break;case 536870912:n=Ip;break;default:n=go}n=Ym(n,Vm.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Vm(t,e){if(so=-1,oo=0,W&6)throw Error(w(327));var n=t.callbackNode;if(Rr()&&t.callbackNode!==n)return null;var r=_o(t,t===ve?we:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Lo(t,r);else{e=r;var i=W;W|=2;var s=$m();(ve!==t||we!==e)&&(Nt=null,Wr=se()+500,zn(t,e));do try{z0();break}catch(l){Hm(t,l)}while(1);dc(),Ao.current=s,W=i,oe!==null?e=0:(ve=null,we=0,e=de)}if(e!==0){if(e===2&&(i=Ha(t),i!==0&&(r=i,e=vu(t,i))),e===1)throw n=Ji,zn(t,0),Jt(t,r),ze(t,se()),n;if(e===6)Jt(t,r);else{if(i=t.current.alternate,!(r&30)&&!F0(i)&&(e=Lo(t,r),e===2&&(s=Ha(t),s!==0&&(r=s,e=vu(t,s))),e===1))throw n=Ji,zn(t,0),Jt(t,r),ze(t,se()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:On(t,Me,Nt);break;case 3:if(Jt(t,r),(r&130023424)===r&&(e=Tc+500-se(),10<e)){if(_o(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Oe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ja(On.bind(null,t,Me,Nt),e);break}On(t,Me,Nt);break;case 4:if(Jt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-dt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*b0(r/1960))-r,10<r){t.timeoutHandle=Ja(On.bind(null,t,Me,Nt),r);break}On(t,Me,Nt);break;case 5:On(t,Me,Nt);break;default:throw Error(w(329))}}}return ze(t,se()),t.callbackNode===n?Vm.bind(null,t):null}function vu(t,e){var n=Ri;return t.current.memoizedState.isDehydrated&&(zn(t,e).flags|=256),t=Lo(t,e),t!==2&&(e=Me,Me=n,e!==null&&yu(e)),t}function yu(t){Me===null?Me=t:Me.push.apply(Me,t)}function F0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!pt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Jt(t,e){for(e&=~kc,e&=~ml,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-dt(e),r=1<<n;t[n]=-1,e&=~r}}function Ah(t){if(W&6)throw Error(w(327));Rr();var e=_o(t,0);if(!(e&1))return ze(t,se()),null;var n=Lo(t,e);if(t.tag!==0&&n===2){var r=Ha(t);r!==0&&(e=r,n=vu(t,r))}if(n===1)throw n=Ji,zn(t,0),Jt(t,e),ze(t,se()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,On(t,Me,Nt),ze(t,se()),null}function Nc(t,e){var n=W;W|=1;try{return t(e)}finally{W=n,W===0&&(Wr=se()+500,dl&&kn())}}function Kn(t){rn!==null&&rn.tag===0&&!(W&6)&&Rr();var e=W;W|=1;var n=tt.transition,r=j;try{if(tt.transition=null,j=1,t)return t()}finally{j=r,tt.transition=n,W=e,!(W&6)&&kn()}}function Rc(){$e=vr.current,Y(vr)}function zn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,f0(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(ac(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&So();break;case 3:Ur(),Y(Fe),Y(Te),_c();break;case 5:gc(r);break;case 4:Ur();break;case 13:Y(ee);break;case 19:Y(ee);break;case 10:hc(r.type._context);break;case 22:case 23:Rc()}n=n.return}if(ve=t,oe=t=hn(t.current,null),we=$e=e,de=0,Ji=null,kc=ml=Gn=0,Me=Ri=null,Ln!==null){for(e=0;e<Ln.length;e++)if(n=Ln[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ln=null}return t}function Hm(t,e){do{var n=oe;try{if(dc(),no.current=Oo,xo){for(var r=te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xo=!1}if($n=0,me=ae=te=null,Ti=!1,qi=0,Ic.current=null,n===null||n.return===null){de=1,Ji=e,oe=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=we,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=yh(o);if(g!==null){g.flags&=-257,wh(g,o,l,s,e),g.mode&1&&vh(s,u,e),e=g,a=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(a),e.updateQueue=v}else _.add(a);break e}else{if(!(e&1)){vh(s,u,e),Pc();break e}a=Error(w(426))}}else if(X&&l.mode&1){var R=yh(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),wh(R,o,l,s,e),uc(zr(a,l));break e}}s=a=zr(a,l),de!==4&&(de=2),Ri===null?Ri=[s]:Ri.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Nm(s,a,e);dh(s,p);break e;case 1:l=a;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(cn===null||!cn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Rm(s,l,e);dh(s,y);break e}}s=s.return}while(s!==null)}Km(n)}catch(S){e=S,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(1)}function $m(){var t=Ao.current;return Ao.current=Oo,t===null?Oo:t}function Pc(){(de===0||de===3||de===2)&&(de=4),ve===null||!(Gn&268435455)&&!(ml&268435455)||Jt(ve,we)}function Lo(t,e){var n=W;W|=2;var r=$m();(ve!==t||we!==e)&&(Nt=null,zn(t,e));do try{U0();break}catch(i){Hm(t,i)}while(1);if(dc(),W=n,Ao.current=r,oe!==null)throw Error(w(261));return ve=null,we=0,de}function U0(){for(;oe!==null;)Gm(oe)}function z0(){for(;oe!==null&&!cy();)Gm(oe)}function Gm(t){var e=qm(t.alternate,t,$e);t.memoizedProps=t.pendingProps,e===null?Km(t):oe=e,Ic.current=null}function Km(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=A0(n,e),n!==null){n.flags&=32767,oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{de=6,oe=null;return}}else if(n=O0(n,e,$e),n!==null){oe=n;return}if(e=e.sibling,e!==null){oe=e;return}oe=e=t}while(e!==null);de===0&&(de=5)}function On(t,e,n){var r=j,i=tt.transition;try{tt.transition=null,j=1,W0(t,e,n,r)}finally{tt.transition=i,j=r}return null}function W0(t,e,n,r){do Rr();while(rn!==null);if(W&6)throw Error(w(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(wy(t,s),t===ve&&(oe=ve=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$s||($s=!0,Ym(go,function(){return Rr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=tt.transition,tt.transition=null;var o=j;j=1;var l=W;W|=4,Ic.current=null,M0(t,n),Bm(n,t),o0(Ya),vo=!!qa,Ya=qa=null,t.current=n,L0(n),dy(),W=l,j=o,tt.transition=s}else t.current=n;if($s&&($s=!1,rn=t,Mo=i),s=t.pendingLanes,s===0&&(cn=null),py(n.stateNode),ze(t,se()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Do)throw Do=!1,t=gu,gu=null,t;return Mo&1&&t.tag!==0&&Rr(),s=t.pendingLanes,s&1?t===_u?Pi++:(Pi=0,_u=t):Pi=0,kn(),null}function Rr(){if(rn!==null){var t=Tp(Mo),e=tt.transition,n=j;try{if(tt.transition=null,j=16>t?16:t,rn===null)var r=!1;else{if(t=rn,rn=null,Mo=0,W&6)throw Error(w(331));var i=W;for(W|=4,T=t.current;T!==null;){var s=T,o=s.child;if(T.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(T=u;T!==null;){var d=T;switch(d.tag){case 0:case 11:case 15:Ni(8,d,s)}var c=d.child;if(c!==null)c.return=d,T=c;else for(;T!==null;){d=T;var h=d.sibling,g=d.return;if(Um(d),d===u){T=null;break}if(h!==null){h.return=g,T=h;break}T=g}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var R=v.sibling;v.sibling=null,v=R}while(v!==null)}}T=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,T=o;else e:for(;T!==null;){if(s=T,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ni(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,T=p;break e}T=s.return}}var f=t.current;for(T=f;T!==null;){o=T;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,T=m;else e:for(o=f;T!==null;){if(l=T,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:pl(9,l)}}catch(S){re(l,l.return,S)}if(l===o){T=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,T=y;break e}T=l.return}}if(W=i,kn(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(ol,t)}catch{}r=!0}return r}finally{j=n,tt.transition=e}}return!1}function Dh(t,e,n){e=zr(n,e),e=Nm(t,e,1),t=un(t,e,1),e=Oe(),t!==null&&(ds(t,1,e),ze(t,e))}function re(t,e,n){if(t.tag===3)Dh(t,t,n);else for(;e!==null;){if(e.tag===3){Dh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){t=zr(n,t),t=Rm(e,t,1),e=un(e,t,1),t=Oe(),e!==null&&(ds(e,1,t),ze(e,t));break}}e=e.return}}function B0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Oe(),t.pingedLanes|=t.suspendedLanes&n,ve===t&&(we&n)===n&&(de===4||de===3&&(we&130023424)===we&&500>se()-Tc?zn(t,0):kc|=n),ze(t,e)}function Qm(t,e){e===0&&(t.mode&1?(e=Ls,Ls<<=1,!(Ls&130023424)&&(Ls=4194304)):e=1);var n=Oe();t=zt(t,e),t!==null&&(ds(t,e,n),ze(t,n))}function j0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Qm(t,n)}function V0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),Qm(t,n)}var qm;qm=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Fe.current)Le=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Le=!1,x0(t,e,n);Le=!!(t.flags&131072)}else Le=!1,X&&e.flags&1048576&&Jp(e,ko,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;io(t,e),t=e.pendingProps;var i=Lr(e,Te.current);Nr(e,n),i=yc(null,e,r,t,i,n);var s=wc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ue(r)?(s=!0,Co(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pc(e),i.updater=hl,e.stateNode=i,i._reactInternals=e,su(e,r,t,n),e=au(null,e,r,!0,s,n)):(e.tag=0,X&&s&&lc(e),Re(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(io(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=$0(r),t=st(r,t),i){case 0:e=lu(null,e,r,t,n);break e;case 1:e=Ch(null,e,r,t,n);break e;case 11:e=Eh(null,e,r,t,n);break e;case 14:e=Sh(null,e,r,st(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),lu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),Ch(t,e,r,i,n);case 3:e:{if(Am(e),t===null)throw Error(w(387));r=e.pendingProps,s=e.memoizedState,i=s.element,nm(t,e),Ro(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=zr(Error(w(423)),e),e=Ih(t,e,r,n,i);break e}else if(r!==i){i=zr(Error(w(424)),e),e=Ih(t,e,r,n,i);break e}else for(Ge=an(e.stateNode.containerInfo.firstChild),Ke=e,X=!0,lt=null,n=om(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(br(),r===i){e=Wt(t,e,n);break e}Re(t,e,r,n)}e=e.child}return e;case 5:return lm(e),t===null&&nu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Xa(r,i)?o=null:s!==null&&Xa(r,s)&&(e.flags|=32),Om(t,e),Re(t,e,o,n),e.child;case 6:return t===null&&nu(e),null;case 13:return Dm(t,e,n);case 4:return mc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Fr(e,null,r,n):Re(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),Eh(t,e,r,i,n);case 7:return Re(t,e,e.pendingProps,n),e.child;case 8:return Re(t,e,e.pendingProps.children,n),e.child;case 12:return Re(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,K(To,r._currentValue),r._currentValue=o,s!==null)if(pt(s.value,o)){if(s.children===i.children&&!Fe.current){e=Wt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Lt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ru(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ru(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Re(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Nr(e,n),i=nt(i),r=r(i),e.flags|=1,Re(t,e,r,n),e.child;case 14:return r=e.type,i=st(r,e.pendingProps),i=st(r.type,i),Sh(t,e,r,i,n);case 15:return Pm(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),io(t,e),e.tag=1,Ue(r)?(t=!0,Co(e)):t=!1,Nr(e,n),im(e,r,i),su(e,r,i,n),au(null,e,r,!0,t,n);case 19:return Mm(t,e,n);case 22:return xm(t,e,n)}throw Error(w(156,e.tag))};function Ym(t,e){return Sp(t,e)}function H0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(t,e,n,r){return new H0(t,e,n,r)}function xc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $0(t){if(typeof t=="function")return xc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qu)return 11;if(t===Yu)return 14}return 2}function hn(t,e){var n=t.alternate;return n===null?(n=et(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function lo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")xc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ar:return Wn(n.children,i,s,e);case Qu:o=8,i|=8;break;case Pa:return t=et(12,n,e,i|2),t.elementType=Pa,t.lanes=s,t;case xa:return t=et(13,n,e,i),t.elementType=xa,t.lanes=s,t;case Oa:return t=et(19,n,e,i),t.elementType=Oa,t.lanes=s,t;case sp:return gl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rp:o=10;break e;case ip:o=9;break e;case qu:o=11;break e;case Yu:o=14;break e;case qt:o=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=et(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Wn(t,e,n,r){return t=et(7,t,r,e),t.lanes=n,t}function gl(t,e,n,r){return t=et(22,t,r,e),t.elementType=sp,t.lanes=n,t.stateNode={isHidden:!1},t}function aa(t,e,n){return t=et(6,t,null,e),t.lanes=n,t}function ua(t,e,n){return e=et(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function G0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vl(0),this.expirationTimes=Vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Oc(t,e,n,r,i,s,o,l,a){return t=new G0(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=et(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pc(s),t}function K0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:lr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Xm(t){if(!t)return yn;t=t._reactInternals;e:{if(tr(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ue(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(Ue(n))return Yp(t,n,e)}return e}function Jm(t,e,n,r,i,s,o,l,a){return t=Oc(n,r,!0,t,i,s,o,l,a),t.context=Xm(null),n=t.current,r=Oe(),i=dn(n),s=Lt(r,i),s.callback=e??null,un(n,s,i),t.current.lanes=i,ds(t,i,r),ze(t,r),t}function _l(t,e,n,r){var i=e.current,s=Oe(),o=dn(i);return n=Xm(n),e.context===null?e.context=n:e.pendingContext=n,e=Lt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=un(i,e,o),t!==null&&(ht(t,i,o,s),to(t,i,o)),o}function bo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Mh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ac(t,e){Mh(t,e),(t=t.alternate)&&Mh(t,e)}function Q0(){return null}var Zm=typeof reportError=="function"?reportError:function(t){console.error(t)};function Dc(t){this._internalRoot=t}vl.prototype.render=Dc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));_l(t,e,null,null)};vl.prototype.unmount=Dc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kn(function(){_l(null,t,null,null)}),e[Ut]=null}};function vl(t){this._internalRoot=t}vl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Pp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xt.length&&e!==0&&e<Xt[n].priority;n++);Xt.splice(n,0,t),n===0&&Op(t)}};function Mc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Lh(){}function q0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=bo(o);s.call(u)}}var o=Jm(e,r,t,0,null,!1,!1,"",Lh);return t._reactRootContainer=o,t[Ut]=o.current,Hi(t.nodeType===8?t.parentNode:t),Kn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=bo(a);l.call(u)}}var a=Oc(t,0,!1,null,null,!1,!1,"",Lh);return t._reactRootContainer=a,t[Ut]=a.current,Hi(t.nodeType===8?t.parentNode:t),Kn(function(){_l(e,a,n,r)}),a}function wl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=bo(o);l.call(a)}}_l(e,o,t,i)}else o=q0(n,e,t,i,r);return bo(o)}Np=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=vi(e.pendingLanes);n!==0&&(Zu(e,n|1),ze(e,se()),!(W&6)&&(Wr=se()+500,kn()))}break;case 13:Kn(function(){var r=zt(t,1);if(r!==null){var i=Oe();ht(r,t,1,i)}}),Ac(t,1)}};ec=function(t){if(t.tag===13){var e=zt(t,134217728);if(e!==null){var n=Oe();ht(e,t,134217728,n)}Ac(t,134217728)}};Rp=function(t){if(t.tag===13){var e=dn(t),n=zt(t,e);if(n!==null){var r=Oe();ht(n,t,e,r)}Ac(t,e)}};Pp=function(){return j};xp=function(t,e){var n=j;try{return j=t,e()}finally{j=n}};Ba=function(t,e,n){switch(e){case"input":if(Ma(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=cl(r);if(!i)throw Error(w(90));lp(r),Ma(r,i)}}}break;case"textarea":up(t,n);break;case"select":e=n.value,e!=null&&Cr(t,!!n.multiple,e,!1)}};gp=Nc;_p=Kn;var Y0={usingClientEntryPoint:!1,Events:[fs,hr,cl,pp,mp,Nc]},ci={findFiberByHostInstance:Mn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},X0={bundleType:ci.bundleType,version:ci.version,rendererPackageName:ci.rendererPackageName,rendererConfig:ci.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=wp(t),t===null?null:t.stateNode},findFiberByHostInstance:ci.findFiberByHostInstance||Q0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gs.isDisabled&&Gs.supportsFiber)try{ol=Gs.inject(X0),vt=Gs}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y0;qe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mc(e))throw Error(w(200));return K0(t,e,null,n)};qe.createRoot=function(t,e){if(!Mc(t))throw Error(w(299));var n=!1,r="",i=Zm;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Oc(t,1,!1,null,null,n,!1,r,i),t[Ut]=e.current,Hi(t.nodeType===8?t.parentNode:t),new Dc(e)};qe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=wp(e),t=t===null?null:t.stateNode,t};qe.flushSync=function(t){return Kn(t)};qe.hydrate=function(t,e,n){if(!yl(e))throw Error(w(200));return wl(null,t,e,!0,n)};qe.hydrateRoot=function(t,e,n){if(!Mc(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Zm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Jm(e,null,t,1,n??null,i,!1,s,o),t[Ut]=e.current,Hi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new vl(e)};qe.render=function(t,e,n){if(!yl(e))throw Error(w(200));return wl(null,t,e,!1,n)};qe.unmountComponentAtNode=function(t){if(!yl(t))throw Error(w(40));return t._reactRootContainer?(Kn(function(){wl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ut]=null})}),!0):!1};qe.unstable_batchedUpdates=Nc;qe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!yl(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return wl(t,e,n,!1,r)};qe.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=qe})(Qv);var bh=Ta;ka.createRoot=bh.createRoot,ka.hydrateRoot=bh.hydrateRoot;/**
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
 */const eg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const E=function(t,e){if(!t)throw Jr(e)},Jr=function(t){return new Error("Firebase Database ("+eg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const tg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},J0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Lc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(h=64)),r.push(n[d],n[c],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):J0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new Z0;const h=s<<2|l>>4;if(r.push(h),u!==64){const g=l<<4&240|u>>2;if(r.push(g),c!==64){const _=u<<6&192|c;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Z0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ng=function(t){const e=tg(t);return Lc.encodeByteArray(e,!0)},Fo=function(t){return ng(t).replace(/\./g,"")},Uo=function(t){try{return Lc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ew(t){return rg(void 0,t)}function rg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!tw(n)||(t[n]=rg(t[n],e[n]));return t}function tw(t){return t!=="__proto__"}/**
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
 */function nw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rw=()=>nw().__FIREBASE_DEFAULTS__,iw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Uo(t[1]);return e&&JSON.parse(e)},bc=()=>{try{return rw()||iw()||sw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ig=t=>{var e,n;return(n=(e=bc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ow=t=>{const e=ig(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},lw=()=>{var t;return(t=bc())===null||t===void 0?void 0:t.config},sg=t=>{var e;return(e=bc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class El{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function aw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Fo(JSON.stringify(n)),Fo(JSON.stringify(o)),l].join(".")}/**
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
 */function Ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function uw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function og(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cw(){const t=Ne();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function lg(){return eg.NODE_ADMIN===!0}function dw(){try{return typeof indexedDB=="object"}catch{return!1}}function hw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const fw="FirebaseError";class Tn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=fw,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ms.prototype.create)}}class ms{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?pw(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Tn(i,l,r)}}function pw(t,e){return t.replace(mw,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const mw=/\{\$([^}]+)}/g;/**
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
 */function Zi(t){return JSON.parse(t)}function ue(t){return JSON.stringify(t)}/**
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
 */const ag=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Zi(Uo(s[0])||""),n=Zi(Uo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},gw=function(t){const e=ag(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},_w=function(t){const e=ag(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ht(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Br(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function wu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Wo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Fh(s)&&Fh(o)){if(!Wo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Fh(t){return t!==null&&typeof t=="object"}/**
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
 */class vw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function yw(t,e){const n=new ww(t,e);return n.subscribe.bind(n)}class ww{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ew(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ca),i.error===void 0&&(i.error=ca),i.complete===void 0&&(i.complete=ca);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ew(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ca(){}function Uc(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Sw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,E(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Sl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function je(t){return t&&t._delegate?t._delegate:t}class Qn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Cw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new El;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kw(e))try{this.getOrInitializeService({instanceIdentifier:An})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=An){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=An){return this.instances.has(e)}getOptions(e=An){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Iw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=An){return this.component?this.component.multipleInstances?e:An:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Iw(t){return t===An?void 0:t}function kw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Tw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Cw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var H;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(H||(H={}));const Nw={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},Rw=H.INFO,Pw={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},xw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Pw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zc{constructor(e){this.name=e,this._logLevel=Rw,this._logHandler=xw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Nw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const Ow=(t,e)=>e.some(n=>t instanceof n);let Uh,zh;function Aw(){return Uh||(Uh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dw(){return zh||(zh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ug=new WeakMap,Eu=new WeakMap,cg=new WeakMap,da=new WeakMap,Wc=new WeakMap;function Mw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(fn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ug.set(n,t)}).catch(()=>{}),Wc.set(e,t),e}function Lw(t){if(Eu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Eu.set(t,e)}let Su={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Eu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bw(t){Su=t(Su)}function Fw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ha(this),e,...n);return cg.set(r,e.sort?e.sort():[e]),fn(r)}:Dw().includes(t)?function(...e){return t.apply(ha(this),e),fn(ug.get(this))}:function(...e){return fn(t.apply(ha(this),e))}}function Uw(t){return typeof t=="function"?Fw(t):(t instanceof IDBTransaction&&Lw(t),Ow(t,Aw())?new Proxy(t,Su):t)}function fn(t){if(t instanceof IDBRequest)return Mw(t);if(da.has(t))return da.get(t);const e=Uw(t);return e!==t&&(da.set(t,e),Wc.set(e,t)),e}const ha=t=>Wc.get(t);function zw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=fn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(fn(o.result),a.oldVersion,a.newVersion,fn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const Ww=["get","getKey","getAll","getAllKeys","count"],Bw=["put","add","delete","clear"],fa=new Map;function Wh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fa.get(e))return fa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Bw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ww.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return fa.set(e,s),s}bw(t=>({...t,get:(e,n,r)=>Wh(e,n)||t.get(e,n,r),has:(e,n)=>!!Wh(e,n)||t.has(e,n)}));/**
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
 */class jw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Vw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Vw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cu="@firebase/app",Bh="0.9.7";/**
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
 */const qn=new zc("@firebase/app"),Hw="@firebase/app-compat",$w="@firebase/analytics-compat",Gw="@firebase/analytics",Kw="@firebase/app-check-compat",Qw="@firebase/app-check",qw="@firebase/auth",Yw="@firebase/auth-compat",Xw="@firebase/database",Jw="@firebase/database-compat",Zw="@firebase/functions",eE="@firebase/functions-compat",tE="@firebase/installations",nE="@firebase/installations-compat",rE="@firebase/messaging",iE="@firebase/messaging-compat",sE="@firebase/performance",oE="@firebase/performance-compat",lE="@firebase/remote-config",aE="@firebase/remote-config-compat",uE="@firebase/storage",cE="@firebase/storage-compat",dE="@firebase/firestore",hE="@firebase/firestore-compat",fE="firebase",pE="9.19.1";/**
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
 */const Iu="[DEFAULT]",mE={[Cu]:"fire-core",[Hw]:"fire-core-compat",[Gw]:"fire-analytics",[$w]:"fire-analytics-compat",[Qw]:"fire-app-check",[Kw]:"fire-app-check-compat",[qw]:"fire-auth",[Yw]:"fire-auth-compat",[Xw]:"fire-rtdb",[Jw]:"fire-rtdb-compat",[Zw]:"fire-fn",[eE]:"fire-fn-compat",[tE]:"fire-iid",[nE]:"fire-iid-compat",[rE]:"fire-fcm",[iE]:"fire-fcm-compat",[sE]:"fire-perf",[oE]:"fire-perf-compat",[lE]:"fire-rc",[aE]:"fire-rc-compat",[uE]:"fire-gcs",[cE]:"fire-gcs-compat",[dE]:"fire-fst",[hE]:"fire-fst-compat","fire-js":"fire-js",[fE]:"fire-js-all"};/**
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
 */const Bo=new Map,ku=new Map;function gE(t,e){try{t.container.addComponent(e)}catch(n){qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jr(t){const e=t.name;if(ku.has(e))return qn.debug(`There were multiple attempts to register component ${e}.`),!1;ku.set(e,t);for(const n of Bo.values())gE(n,t);return!0}function Bc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const _E={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pn=new ms("app","Firebase",_E);/**
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
 */class vE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pn.create("app-deleted",{appName:this._name})}}/**
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
 */const gs=pE;function dg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Iu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw pn.create("bad-app-name",{appName:String(i)});if(n||(n=lw()),!n)throw pn.create("no-options");const s=Bo.get(i);if(s){if(Wo(n,s.options)&&Wo(r,s.config))return s;throw pn.create("duplicate-app",{appName:i})}const o=new Tw(i);for(const a of ku.values())o.addComponent(a);const l=new vE(n,r,o);return Bo.set(i,l),l}function hg(t=Iu){const e=Bo.get(t);if(!e&&t===Iu)return dg();if(!e)throw pn.create("no-app",{appName:t});return e}function mn(t,e,n){var r;let i=(r=mE[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qn.warn(l.join(" "));return}jr(new Qn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const yE="firebase-heartbeat-database",wE=1,es="firebase-heartbeat-store";let pa=null;function fg(){return pa||(pa=zw(yE,wE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(es)}}}).catch(t=>{throw pn.create("idb-open",{originalErrorMessage:t.message})})),pa}async function EE(t){try{return(await fg()).transaction(es).objectStore(es).get(pg(t))}catch(e){if(e instanceof Tn)qn.warn(e.message);else{const n=pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qn.warn(n.message)}}}async function jh(t,e){try{const r=(await fg()).transaction(es,"readwrite");return await r.objectStore(es).put(e,pg(t)),r.done}catch(n){if(n instanceof Tn)qn.warn(n.message);else{const r=pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qn.warn(r.message)}}}function pg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const SE=1024,CE=30*24*60*60*1e3;class IE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Vh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=CE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Vh(),{heartbeatsToSend:n,unsentEntries:r}=kE(this._heartbeatsCache.heartbeats),i=Fo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Vh(){return new Date().toISOString().substring(0,10)}function kE(t,e=SE){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Hh(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Hh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class TE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dw()?hw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await EE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Hh(t){return Fo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function NE(t){jr(new Qn("platform-logger",e=>new jw(e),"PRIVATE")),jr(new Qn("heartbeat",e=>new IE(e),"PRIVATE")),mn(Cu,Bh,t),mn(Cu,Bh,"esm2017"),mn("fire-js","")}NE("");var RE="firebase",PE="9.19.1";/**
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
 */mn(RE,PE,"app");function jc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function mg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xE=mg,gg=new ms("auth","Firebase",mg());/**
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
 */const $h=new zc("@firebase/auth");function ao(t,...e){$h.logLevel<=H.ERROR&&$h.error(`Auth (${gs}): ${t}`,...e)}/**
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
 */function St(t,...e){throw Vc(t,...e)}function wt(t,...e){return Vc(t,...e)}function _g(t,e,n){const r=Object.assign(Object.assign({},xE()),{[e]:n});return new ms("auth","Firebase",r).create(e,{appName:t.name})}function OE(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&St(t,"argument-error"),_g(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Vc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return gg.create(t,...e)}function x(t,e,...n){if(!t)throw Vc(e,...n)}function At(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ao(e),new Error(e)}function Bt(t,e){t||At(e)}/**
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
 */const Gh=new Map;function Dt(t){Bt(t instanceof Function,"Expected a class definition");let e=Gh.get(t);return e?(Bt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gh.set(t,e),e)}/**
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
 */function AE(t,e){const n=Bc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Wo(s,e??{}))return i;St(i,"already-initialized")}return n.initialize({options:e})}function DE(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Tu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ME(){return Kh()==="http:"||Kh()==="https:"}function Kh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function LE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ME()||uw()||"connection"in navigator)?navigator.onLine:!0}function bE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class _s{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bt(n>e,"Short delay should be less than long delay!"),this.isMobile=Fc()||og()}get(){return LE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Hc(t,e){Bt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class vg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;At("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;At("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;At("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const FE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const UE=new _s(3e4,6e4);function zE(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Cl(t,e,n,r,i={}){return yg(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Zr(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),vg.fetch()(wg(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function yg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},FE),e);try{const i=new BE(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ks(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ks(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Ks(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Ks(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw _g(t,d,u);St(t,d)}}catch(i){if(i instanceof Tn)throw i;St(t,"network-request-failed",{message:String(i)})}}async function WE(t,e,n,r,i={}){const s=await Cl(t,e,n,r,i);return"mfaPendingCredential"in s&&St(t,"multi-factor-auth-required",{_serverResponse:s}),s}function wg(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Hc(t.config,i):`${t.config.apiScheme}://${i}`}class BE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wt(this.auth,"network-request-failed")),UE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ks(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function jE(t,e){return Cl(t,"POST","/v1/accounts:delete",e)}async function VE(t,e){return Cl(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function xi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function HE(t,e=!1){const n=je(t),r=await n.getIdToken(e),i=$c(r);x(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:xi(ma(i.auth_time)),issuedAtTime:xi(ma(i.iat)),expirationTime:xi(ma(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ma(t){return Number(t)*1e3}function $c(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ao("JWT malformed, contained fewer than 3 sections"),null;try{const i=Uo(n);return i?JSON.parse(i):(ao("Failed to decode base64 JWT payload"),null)}catch(i){return ao("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $E(t){const e=$c(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ts(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tn&&GE(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function GE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class KE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Eg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xi(this.lastLoginAt),this.creationTime=xi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function jo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ts(t,VE(n,{idToken:r}));x(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?YE(s.providerUserInfo):[],l=qE(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Eg(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function QE(t){const e=je(t);await jo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qE(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function YE(t){return t.map(e=>{var{providerId:n}=e,r=jc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function XE(t,e){const n=await yg(t,{},async()=>{const r=Zr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=wg(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",vg.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$E(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return x(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await XE(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ns;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(x(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(x(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ns,this.toJSON())}_performRefresh(){return At("not implemented")}}/**
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
 */function Qt(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=jc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new KE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Eg(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ts(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return HE(this,e)}reload(){return QE(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await jo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ts(this,jE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(l=n.tenantId)!==null&&l!==void 0?l:void 0,R=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:y,isAnonymous:S,providerData:I,stsTokenManager:C}=n;x(m&&C,e,"internal-error");const N=ns.fromJSON(this.name,C);x(typeof m=="string",e,"internal-error"),Qt(c,e.name),Qt(h,e.name),x(typeof y=="boolean",e,"internal-error"),x(typeof S=="boolean",e,"internal-error"),Qt(g,e.name),Qt(_,e.name),Qt(v,e.name),Qt(R,e.name),Qt(p,e.name),Qt(f,e.name);const V=new Bn({uid:m,auth:e,email:h,emailVerified:y,displayName:c,isAnonymous:S,photoURL:_,phoneNumber:g,tenantId:v,stsTokenManager:N,createdAt:p,lastLoginAt:f});return I&&Array.isArray(I)&&(V.providerData=I.map(D=>Object.assign({},D))),R&&(V._redirectEventId=R),V}static async _fromIdTokenResponse(e,n,r=!1){const i=new ns;i.updateFromServerResponse(n);const s=new Bn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await jo(s),s}}/**
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
 */class Sg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Sg.type="NONE";const Qh=Sg;/**
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
 */function uo(t,e,n){return`firebase:${t}:${e}:${n}`}class Pr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=uo(this.userKey,i.apiKey,s),this.fullPersistenceKey=uo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Pr(Dt(Qh),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Dt(Qh);const o=uo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const c=Bn._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Pr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Pr(s,e,r))}}/**
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
 */function qh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ng(e))return"Blackberry";if(Rg(e))return"Webos";if(Gc(e))return"Safari";if((e.includes("chrome/")||Ig(e))&&!e.includes("edge/"))return"Chrome";if(Tg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Cg(t=Ne()){return/firefox\//i.test(t)}function Gc(t=Ne()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ig(t=Ne()){return/crios\//i.test(t)}function kg(t=Ne()){return/iemobile/i.test(t)}function Tg(t=Ne()){return/android/i.test(t)}function Ng(t=Ne()){return/blackberry/i.test(t)}function Rg(t=Ne()){return/webos/i.test(t)}function Il(t=Ne()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function JE(t=Ne()){var e;return Il(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ZE(){return cw()&&document.documentMode===10}function Pg(t=Ne()){return Il(t)||Tg(t)||Rg(t)||Ng(t)||/windows phone/i.test(t)||kg(t)}function eS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function xg(t,e=[]){let n;switch(t){case"Browser":n=qh(Ne());break;case"Worker":n=`${qh(Ne())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gs}/${r}`}/**
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
 */class tS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class nS{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yh(this),this.idTokenSubscription=new Yh(this),this.beforeStateQueue=new tS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Dt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Pr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?je(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Dt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ms("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Dt(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await Pr.create(this,[Dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return x(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function kl(t){return je(t)}class Yh{constructor(e){this.auth=e,this.observer=null,this.addObserver=yw(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function rS(t,e,n){const r=kl(t);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Og(e),{host:o,port:l}=iS(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||sS()}function Og(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function iS(t){const e=Og(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Xh(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Xh(o)}}}function Xh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function sS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ag{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return At("not implemented")}_getIdTokenResponse(e){return At("not implemented")}_linkToIdToken(e,n){return At("not implemented")}_getReauthenticationResolver(e){return At("not implemented")}}/**
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
 */async function xr(t,e){return WE(t,"POST","/v1/accounts:signInWithIdp",zE(t,e))}/**
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
 */const oS="http://localhost";class Yn extends Ag{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):St("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=jc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Yn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return xr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,xr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xr(e,n)}buildRequest(){const e={requestUri:oS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zr(n)}return e}}/**
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
 */class Kc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class vs extends Kc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Zt extends vs{constructor(){super("facebook.com")}static credential(e){return Yn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zt.credential(e.oauthAccessToken)}catch{return null}}}Zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zt.PROVIDER_ID="facebook.com";/**
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
 */class Pt extends vs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Pt.credential(n,r)}catch{return null}}}Pt.GOOGLE_SIGN_IN_METHOD="google.com";Pt.PROVIDER_ID="google.com";/**
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
 */class en extends vs{constructor(){super("github.com")}static credential(e){return Yn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.GITHUB_SIGN_IN_METHOD="github.com";en.PROVIDER_ID="github.com";/**
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
 */class tn extends vs{constructor(){super("twitter.com")}static credential(e,n){return Yn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return tn.credential(n,r)}catch{return null}}}tn.TWITTER_SIGN_IN_METHOD="twitter.com";tn.PROVIDER_ID="twitter.com";/**
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
 */class Vr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Bn._fromIdTokenResponse(e,r,i),o=Jh(r);return new Vr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Jh(r);return new Vr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Jh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Vo extends Tn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Vo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Vo(e,n,r,i)}}function Dg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Vo._fromErrorAndOperation(t,s,e,r):s})}async function lS(t,e,n=!1){const r=await ts(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vr._forOperation(t,"link",r)}/**
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
 */async function aS(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ts(t,Dg(r,i,e,t),n);x(s.idToken,r,"internal-error");const o=$c(s.idToken);x(o,r,"internal-error");const{sub:l}=o;return x(t.uid===l,r,"user-mismatch"),Vr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&St(r,"user-mismatch"),s}}/**
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
 */async function uS(t,e,n=!1){const r="signIn",i=await Dg(t,r,e),s=await Vr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function cS(t,e,n,r){return je(t).onIdTokenChanged(e,n,r)}function dS(t,e,n){return je(t).beforeAuthStateChanged(e,n)}function hS(t,e,n,r){return je(t).onAuthStateChanged(e,n,r)}const Ho="__sak";/**
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
 */class Mg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ho,"1"),this.storage.removeItem(Ho),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function fS(){const t=Ne();return Gc(t)||Il(t)}const pS=1e3,mS=10;class Lg extends Mg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=fS()&&eS(),this.fallbackToPolling=Pg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ZE()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mS):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},pS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lg.type="LOCAL";const gS=Lg;/**
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
 */class bg extends Mg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}bg.type="SESSION";const Fg=bg;/**
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
 */function _S(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Tl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Tl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await _S(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tl.receivers=[];/**
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
 */function Qc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class vS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Qc("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Et(){return window}function yS(t){Et().location.href=t}/**
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
 */function Ug(){return typeof Et().WorkerGlobalScope<"u"&&typeof Et().importScripts=="function"}async function wS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ES(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function SS(){return Ug()?self:null}/**
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
 */const zg="firebaseLocalStorageDb",CS=1,$o="firebaseLocalStorage",Wg="fbase_key";class ys{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Nl(t,e){return t.transaction([$o],e?"readwrite":"readonly").objectStore($o)}function IS(){const t=indexedDB.deleteDatabase(zg);return new ys(t).toPromise()}function Nu(){const t=indexedDB.open(zg,CS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore($o,{keyPath:Wg})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains($o)?e(r):(r.close(),await IS(),e(await Nu()))})})}async function Zh(t,e,n){const r=Nl(t,!0).put({[Wg]:e,value:n});return new ys(r).toPromise()}async function kS(t,e){const n=Nl(t,!1).get(e),r=await new ys(n).toPromise();return r===void 0?null:r.value}function ef(t,e){const n=Nl(t,!0).delete(e);return new ys(n).toPromise()}const TS=800,NS=3;class Bg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>NS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ug()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tl._getInstance(SS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wS(),!this.activeServiceWorker)return;this.sender=new vS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ES()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nu();return await Zh(e,Ho,"1"),await ef(e,Ho),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>kS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ef(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Nl(i,!1).getAll();return new ys(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bg.type="LOCAL";const RS=Bg;/**
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
 */function PS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function xS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=wt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",PS().appendChild(r)})}function OS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new _s(3e4,6e4);/**
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
 */function jg(t,e){return e?Dt(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class qc extends Ag{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function AS(t){return uS(t.auth,new qc(t),t.bypassAuthState)}function DS(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),aS(n,new qc(t),t.bypassAuthState)}async function MS(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),lS(n,new qc(t),t.bypassAuthState)}/**
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
 */class Vg{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AS;case"linkViaPopup":case"linkViaRedirect":return MS;case"reauthViaPopup":case"reauthViaRedirect":return DS;default:St(this.auth,"internal-error")}}resolve(e){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const LS=new _s(2e3,1e4);class yr extends Vg{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,yr.currentPopupAction&&yr.currentPopupAction.cancel(),yr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){Bt(this.filter.length===1,"Popup operations only handle one event");const e=Qc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,LS.get())};e()}}yr.currentPopupAction=null;/**
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
 */const bS="pendingRedirect",co=new Map;class FS extends Vg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=co.get(this.auth._key());if(!e){try{const r=await US(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}co.set(this.auth._key(),e)}return this.bypassAuthState||co.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function US(t,e){const n=$g(e),r=Hg(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function zS(t,e){return Hg(t)._set($g(e),"true")}function WS(t,e){co.set(t._key(),e)}function Hg(t){return Dt(t._redirectPersistence)}function $g(t){return uo(bS,t.config.apiKey,t.name)}/**
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
 */function BS(t,e,n){return jS(t,e,n)}async function jS(t,e,n){const r=kl(t);OE(t,e,Kc),await r._initializationPromise;const i=jg(r,n);return await zS(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function VS(t,e,n=!1){const r=kl(t),i=jg(r,e),o=await new FS(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const HS=10*60*1e3;class $S{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!GS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Gg(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=HS&&this.cachedEventUids.clear(),this.cachedEventUids.has(tf(e))}saveEventToCache(e){this.cachedEventUids.add(tf(e)),this.lastProcessedEventTime=Date.now()}}function tf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Gg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function GS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gg(t);default:return!1}}/**
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
 */async function KS(t,e={}){return Cl(t,"GET","/v1/projects",e)}/**
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
 */const QS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qS=/^https?/;async function YS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await KS(t);for(const n of e)try{if(XS(n))return}catch{}St(t,"unauthorized-domain")}function XS(t){const e=Tu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!qS.test(n))return!1;if(QS.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const JS=new _s(3e4,6e4);function nf(){const t=Et().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ZS(t){return new Promise((e,n)=>{var r,i,s;function o(){nf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{nf(),n(wt(t,"network-request-failed"))},timeout:JS.get()})}if(!((i=(r=Et().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Et().gapi)===null||s===void 0)&&s.load)o();else{const l=OS("iframefcb");return Et()[l]=()=>{gapi.load?o():n(wt(t,"network-request-failed"))},xS(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw ho=null,e})}let ho=null;function eC(t){return ho=ho||ZS(t),ho}/**
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
 */const tC=new _s(5e3,15e3),nC="__/auth/iframe",rC="emulator/auth/iframe",iC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oC(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hc(e,rC):`https://${t.config.authDomain}/${nC}`,r={apiKey:e.apiKey,appName:t.name,v:gs},i=sC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Zr(r).slice(1)}`}async function lC(t){const e=await eC(t),n=Et().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:oC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=wt(t,"network-request-failed"),l=Et().setTimeout(()=>{s(o)},tC.get());function a(){Et().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const aC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uC=500,cC=600,dC="_blank",hC="http://localhost";class rf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fC(t,e,n,r=uC,i=cC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},aC),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ne().toLowerCase();n&&(l=Ig(u)?dC:n),Cg(u)&&(e=e||hC,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(JE(u)&&l!=="_self")return pC(e||"",l),new rf(null);const c=window.open(e||"",l,d);x(c,t,"popup-blocked");try{c.focus()}catch{}return new rf(c)}function pC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const mC="__/auth/handler",gC="emulator/auth/handler";function sf(t,e,n,r,i,s){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:gs,eventId:i};if(e instanceof Kc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",wu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,u]of Object.entries(s||{}))o[a]=u}if(e instanceof vs){const a=e.getScopes().filter(u=>u!=="");a.length>0&&(o.scopes=a.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const a of Object.keys(l))l[a]===void 0&&delete l[a];return`${_C(t)}?${Zr(l).slice(1)}`}function _C({config:t}){return t.emulator?Hc(t,gC):`https://${t.authDomain}/${mC}`}/**
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
 */const ga="webStorageSupport";class vC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fg,this._completeRedirectFn=VS,this._overrideRedirectResult=WS}async _openPopup(e,n,r,i){var s;Bt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=sf(e,n,r,Tu(),i);return fC(e,o,Qc())}async _openRedirect(e,n,r,i){return await this._originValidation(e),yS(sf(e,n,r,Tu(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Bt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await lC(e),r=new $S(e);return n.register("authEvent",i=>(x(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ga,{type:ga},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ga];o!==void 0&&n(!!o),St(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=YS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Pg()||Gc()||Il()}}const yC=vC;var of="@firebase/auth",lf="0.22.0";/**
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
 */class wC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function EC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function SC(t){jr(new Qn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((l,a)=>{x(s&&!s.includes(":"),"invalid-api-key",{appName:l.name}),x(!(o!=null&&o.includes(":")),"argument-error",{appName:l.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xg(t)},d=new nS(l,a,u);return DE(d,n),d})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),jr(new Qn("auth-internal",e=>{const n=kl(e.getProvider("auth").getImmediate());return(r=>new wC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mn(of,lf,EC(t)),mn(of,lf,"esm2017")}/**
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
 */const CC=5*60,IC=sg("authIdTokenMaxAge")||CC;let af=null;const kC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>IC)return;const i=n==null?void 0:n.token;af!==i&&(af=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Kg(t=hg()){const e=Bc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=AE(t,{popupRedirectResolver:yC,persistence:[RS,gS,Fg]}),r=sg("authTokenSyncURL");if(r){const s=kC(r);dS(n,s,()=>s(n.currentUser)),cS(n,o=>s(o))}const i=ig("auth");return i&&rS(n,`http://${i}`),n}SC("Browser");/*! *****************************************************************************
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
***************************************************************************** */function TC(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function l(d){try{u(r.next(d))}catch(c){o(c)}}function a(d){try{u(r.throw(d))}catch(c){o(c)}}function u(d){d.done?s(d.value):i(d.value).then(l,a)}u((r=r.apply(t,e||[])).next())})}function NC(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(u){return function(d){return a([u,d])}}function a(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(d){u=[6,d],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
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
***************************************************************************** */var wr=function(){return wr=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},wr.apply(this,arguments)},Qg=function(t){return{loading:t==null,value:t}},RC=function(){return function(t,e){switch(e.type){case"error":return wr(wr({},t),{error:e.error,loading:!1,value:void 0});case"reset":return Qg(e.defaultValue);case"value":return wr(wr({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},PC=function(t){var e=t?t():void 0,n=U.useReducer(RC(),Qg(e)),r=n[0],i=n[1],s=U.useCallback(function(){var a=t?t():void 0;i({type:"reset",defaultValue:a})},[t]),o=U.useCallback(function(a){i({type:"error",error:a})},[]),l=U.useCallback(function(a){i({type:"value",value:a})},[]);return U.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:l,value:r.value}},[r.error,r.loading,s,o,l,r.value])},xC=function(t,e){var n=PC(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,l=n.value;return U.useEffect(function(){var a=hS(t,function(u){return TC(void 0,void 0,void 0,function(){var d;return NC(this,function(c){switch(c.label){case 0:if(!(e!=null&&e.onUserChanged))return[3,4];c.label=1;case 1:return c.trys.push([1,3,,4]),[4,e.onUserChanged(u)];case 2:return c.sent(),[3,4];case 3:return d=c.sent(),s(d),[3,4];case 4:return o(u),[2]}})})},s);return function(){a()}},[t]),[l,i,r]};function OC(t){const e=Kg(t.app);let n=t.user;return He("div",{className:"h-[10vh] bg-gray-500 flex-row flex items-center justify-between px-4",children:[M("h1",{children:"RPS"}),M("div",{className:"",children:t.user?He("div",{className:"flex items-center justify-end",children:[He("h3",{className:"m-4",children:["Hello ",n.email,"!"]}),M("button",{className:"m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all",onClick:()=>{t.auth.signOut()},children:"Sign Out"})]}):M("div",{className:"flex items-center justify-center",children:M("button",{className:"m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all",onClick:()=>{const r=new Pt;BS(e,r)},children:"Sign In"})})})]})}const uf="@firebase/database",cf="0.14.4";/**
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
 */let qg="";function AC(t){qg=t}/**
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
 */class DC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ue(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Zi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class MC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ht(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Yg=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new DC(e)}}catch{}return new MC},Fn=Yg("localStorage"),Ru=Yg("sessionStorage");/**
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
 */const Or=new zc("@firebase/database"),LC=function(){let t=1;return function(){return t++}}(),Xg=function(t){const e=Sw(t),n=new vw;n.update(e);const r=n.digest();return Lc.encodeByteArray(r)},ws=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ws.apply(null,r):typeof r=="object"?e+=ue(r):e+=r,e+=" "}return e};let jn=null,df=!0;const bC=function(t,e){E(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Or.logLevel=H.VERBOSE,jn=Or.log.bind(Or),e&&Ru.set("logging_enabled",!0)):typeof t=="function"?jn=t:(jn=null,Ru.remove("logging_enabled"))},ke=function(...t){if(df===!0&&(df=!1,jn===null&&Ru.get("logging_enabled")===!0&&bC(!0)),jn){const e=ws.apply(null,t);jn(e)}},Es=function(t){return function(...e){ke(t,...e)}},Pu=function(...t){const e="FIREBASE INTERNAL ERROR: "+ws(...t);Or.error(e)},jt=function(...t){const e=`FIREBASE FATAL ERROR: ${ws(...t)}`;throw Or.error(e),new Error(e)},We=function(...t){const e="FIREBASE WARNING: "+ws(...t);Or.warn(e)},FC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&We("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Jg=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},UC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Hr="[MIN_NAME]",Xn="[MAX_NAME]",ei=function(t,e){if(t===e)return 0;if(t===Hr||e===Xn)return-1;if(e===Hr||t===Xn)return 1;{const n=hf(t),r=hf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},zC=function(t,e){return t===e?0:t<e?-1:1},di=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ue(e))},Yc=function(t){if(typeof t!="object"||t===null)return ue(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ue(e[r]),n+=":",n+=Yc(t[e[r]]);return n+="}",n},Zg=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Be(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const e_=function(t){E(!Jg(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},WC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},BC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function jC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const VC=new RegExp("^-?(0*)\\d{1,10}$"),HC=-2147483648,$C=2147483647,hf=function(t){if(VC.test(t)){const e=Number(t);if(e>=HC&&e<=$C)return e}return null},ti=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw We("Exception was thrown by user callback.",n),e},Math.floor(0))}},GC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Oi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class KC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){We(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class QC{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ke("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',We(e)}}class Ar{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ar.OWNER="owner";/**
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
 */const Xc="5",t_="v",n_="s",r_="r",i_="f",s_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,o_="ls",l_="p",xu="ac",a_="websocket",u_="long_polling";/**
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
 */class c_{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Fn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Fn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function qC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function d_(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let r;if(e===a_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===u_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);qC(t)&&(n.ns=t.namespace);const i=[];return Be(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class YC{constructor(){this.counters_={}}incrementCounter(e,n=1){Ht(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ew(this.counters_)}}/**
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
 */const _a={},va={};function Jc(t){const e=t.toString();return _a[e]||(_a[e]=new YC),_a[e]}function XC(t,e){const n=t.toString();return va[n]||(va[n]=e()),va[n]}/**
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
 */class JC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ti(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ff="start",ZC="close",eI="pLPCommand",tI="pRTLPCB",h_="id",f_="pw",p_="ser",nI="cb",rI="seg",iI="ts",sI="d",oI="dframe",m_=1870,g_=30,lI=m_-g_,aI=25e3,uI=3e4;class Er{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Es(e),this.stats_=Jc(n),this.urlFn=a=>(this.appCheckToken&&(a[xu]=this.appCheckToken),d_(n,u_,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new JC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(uI)),UC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Zc((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ff)this.id=l,this.password=a;else if(o===ZC)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[ff]="t",r[p_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[nI]=this.scriptTagHolder.uniqueCallbackIdentifier),r[t_]=Xc,this.transportSessionId&&(r[n_]=this.transportSessionId),this.lastSessionId&&(r[o_]=this.lastSessionId),this.applicationId&&(r[l_]=this.applicationId),this.appCheckToken&&(r[xu]=this.appCheckToken),typeof location<"u"&&location.hostname&&s_.test(location.hostname)&&(r[r_]=i_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Er.forceAllow_=!0}static forceDisallow(){Er.forceDisallow_=!0}static isAvailable(){return Er.forceAllow_?!0:!Er.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!WC()&&!BC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ng(n),i=Zg(r,lI);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[oI]="t",r[h_]=e,r[f_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ue(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Zc{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=LC(),window[eI+this.uniqueCallbackIdentifier]=e,window[tI+this.uniqueCallbackIdentifier]=n,this.myIFrame=Zc.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ke("frame writing exception"),l.stack&&ke(l.stack),ke(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ke("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[h_]=this.myID,e[f_]=this.myPW,e[p_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+g_+r.length<=m_;){const o=this.pendingSegs.shift();r=r+"&"+rI+i+"="+o.seg+"&"+iI+i+"="+o.ts+"&"+sI+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(aI)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ke("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const cI=16384,dI=45e3;let Go=null;typeof MozWebSocket<"u"?Go=MozWebSocket:typeof WebSocket<"u"&&(Go=WebSocket);class at{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Es(this.connId),this.stats_=Jc(n),this.connURL=at.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[t_]=Xc,typeof location<"u"&&location.hostname&&s_.test(location.hostname)&&(o[r_]=i_),n&&(o[n_]=n),r&&(o[o_]=r),i&&(o[xu]=i),s&&(o[l_]=s),d_(e,a_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Fn.set("previous_websocket_failure",!0);try{let r;lg(),this.mySock=new Go(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){at.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Go!==null&&!at.forceDisallow_}static previouslyFailed(){return Fn.isInMemoryStorage||Fn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Fn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Zi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Zg(n,cI);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(dI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}at.responsesRequiredToBeHealthy=2;at.healthyTimeout=3e4;/**
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
 */class rs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Er,at]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=at&&at.isAvailable();let r=n&&!at.previouslyFailed();if(e.webSocketOnly&&(n||We("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[at];else{const i=this.transports_=[];for(const s of rs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);rs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}rs.globalTransportInitialized_=!1;/**
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
 */const hI=6e4,fI=5e3,pI=10*1024,mI=100*1024,ya="t",pf="d",gI="s",mf="r",_I="e",gf="o",_f="a",vf="n",yf="p",vI="h";class yI{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Es("c:"+this.id+":"),this.transportManager_=new rs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Oi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>mI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>pI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ya in e){const n=e[ya];n===_f?this.upgradeIfSecondaryHealthy_():n===mf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===gf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=di("t",e),r=di("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:yf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:_f,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:vf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=di("t",e),r=di("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=di(ya,e);if(pf in e){const r=e[pf];if(n===vI){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===vf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===gI?this.onConnectionShutdown_(r):n===mf?this.onReset_(r):n===_I?Pu("Server Error: "+r):n===gf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Pu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Xc!==r&&We("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Oi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(hI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Oi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(fI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:yf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Fn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class __{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class v_{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Ko extends v_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Fc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ko}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const wf=32,Ef=768;class ${constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function B(){return new $("")}function L(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function wn(t){return t.pieces_.length-t.pieceNum_}function G(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new $(t.pieces_,e)}function y_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function wI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function w_(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function E_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new $(e,0)}function ce(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof $)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new $(n,0)}function F(t){return t.pieceNum_>=t.pieces_.length}function xe(t,e){const n=L(t),r=L(e);if(n===null)return e;if(n===r)return xe(G(t),G(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ed(t,e){if(wn(t)!==wn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ut(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(wn(t)>wn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class EI{constructor(e,n){this.errorPrefix_=n,this.parts_=w_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Sl(this.parts_[r]);S_(this)}}function SI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Sl(e),S_(t)}function CI(t){const e=t.parts_.pop();t.byteLength_-=Sl(e),t.parts_.length>0&&(t.byteLength_-=1)}function S_(t){if(t.byteLength_>Ef)throw new Error(t.errorPrefix_+"has a key path longer than "+Ef+" bytes ("+t.byteLength_+").");if(t.parts_.length>wf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+wf+") or object contains a cycle "+Dn(t))}function Dn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class td extends v_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new td}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const hi=1e3,II=60*5*1e3,Sf=30*1e3,kI=1.3,TI=3e4,NI="server_kill",Cf=3;class bt extends __{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=bt.nextPersistentConnectionId_++,this.log_=Es("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=hi,this.maxReconnectDelay_=II,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!lg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");td.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ko.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ue(s)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new El,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;bt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ht(e,"w")){const r=Br(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();We(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||_w(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Sf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=gw(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ue(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Pu("Unrecognized action received from server: "+ue(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=hi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=hi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>TI&&(this.reconnectDelay_=hi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*kI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+bt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?ke("getToken() completed but was canceled"):(ke("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new yI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{We(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(NI)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&We(c),a())}}}interrupt(e){ke("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ke("Resuming connection for reason: "+e),delete this.interruptReasons_[e],wu(this.interruptReasons_)&&(this.reconnectDelay_=hi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Yc(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new $(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ke("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Cf&&(this.reconnectDelay_=Sf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ke("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Cf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+qg.replace(/\./g,"-")]=1,Fc()?e["framework.cordova"]=1:og()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ko.getInstance().currentlyOnline();return wu(this.interruptReasons_)&&e}}bt.nextPersistentConnectionId_=0;bt.nextConnectionId_=0;/**
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
 */class b{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new b(e,n)}}/**
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
 */class Rl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new b(Hr,e),i=new b(Hr,n);return this.compare(r,i)!==0}minPost(){return b.MIN}}/**
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
 */let Qs;class C_ extends Rl{static get __EMPTY_NODE(){return Qs}static set __EMPTY_NODE(e){Qs=e}compare(e,n){return ei(e.name,n.name)}isDefinedOn(e){throw Jr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return b.MIN}maxPost(){return new b(Xn,Qs)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new b(e,Qs)}toString(){return".key"}}const Dr=new C_;/**
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
 */class qs{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ge{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ge.RED,this.left=i??be.EMPTY_NODE,this.right=s??be.EMPTY_NODE}copy(e,n,r,i,s){return new ge(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return be.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return be.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ge.RED=!0;ge.BLACK=!1;class RI{copy(e,n,r,i,s){return this}insert(e,n,r){return new ge(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class be{constructor(e,n=be.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new be(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ge.BLACK,null,null))}remove(e){return new be(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ge.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new qs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new qs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new qs(this.root_,null,this.comparator_,!0,e)}}be.EMPTY_NODE=new RI;/**
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
 */function PI(t,e){return ei(t.name,e.name)}function nd(t,e){return ei(t,e)}/**
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
 */let Ou;function xI(t){Ou=t}const I_=function(t){return typeof t=="number"?"number:"+e_(t):"string:"+t},k_=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ht(e,".sv"),"Priority must be a string or number.")}else E(t===Ou||t.isEmpty(),"priority of unexpected type.");E(t===Ou||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let If;class pe{constructor(e,n=pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),k_(this.priorityNode_)}static set __childrenNodeConstructor(e){If=e}static get __childrenNodeConstructor(){return If}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return F(e)?this:L(e)===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=L(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(E(r!==".priority"||wn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(G(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+I_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=e_(this.value_):e+=this.value_,this.lazyHash_=Xg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof pe.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=pe.VALUE_TYPE_ORDER.indexOf(n),s=pe.VALUE_TYPE_ORDER.indexOf(r);return E(i>=0,"Unknown leaf type: "+n),E(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let T_,N_;function OI(t){T_=t}function AI(t){N_=t}class DI extends Rl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ei(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return b.MIN}maxPost(){return new b(Xn,new pe("[PRIORITY-POST]",N_))}makePost(e,n){const r=T_(e);return new b(n,new pe("[PRIORITY-POST]",r))}toString(){return".priority"}}const ie=new DI;/**
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
 */const MI=Math.log(2);class LI{constructor(e){const n=s=>parseInt(Math.log(s)/MI,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Qo=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=t[a],h=n?n(c):c,new ge(h,c.node,ge.BLACK,null,null);{const g=parseInt(d/2,10)+a,_=i(a,g),v=i(g+1,u);return c=t[g],h=n?n(c):c,new ge(h,c.node,ge.BLACK,_,v)}},s=function(a){let u=null,d=null,c=t.length;const h=function(_,v){const R=c-_,p=c;c-=_;const f=i(R+1,p),m=t[R],y=n?n(m):m;g(new ge(y,m.node,v,null,f))},g=function(_){u?(u.left=_,u=_):(d=_,u=_)};for(let _=0;_<a.count;++_){const v=a.nextBitIsOne(),R=Math.pow(2,a.count-(_+1));v?h(R,ge.BLACK):(h(R,ge.BLACK),h(R,ge.RED))}return d},o=new LI(t.length),l=s(o);return new be(r||e,l)};/**
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
 */let wa;const sr={};class Mt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return E(sr&&ie,"ChildrenNode.ts has not been loaded"),wa=wa||new Mt({".priority":sr},{".priority":ie}),wa}get(e){const n=Br(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof be?n:null}hasIndex(e){return Ht(this.indexSet_,e.toString())}addIndex(e,n){E(e!==Dr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(b.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Qo(r,e.getCompare()):l=sr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new Mt(d,u)}addToIndexes(e,n){const r=zo(this.indexes_,(i,s)=>{const o=Br(this.indexSet_,s);if(E(o,"Missing index implementation for "+s),i===sr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(b.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Qo(l,o.getCompare())}else return sr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new b(e.name,l))),a.insert(e,e.node)}});return new Mt(r,this.indexSet_)}removeFromIndexes(e,n){const r=zo(this.indexes_,i=>{if(i===sr)return i;{const s=n.get(e.name);return s?i.remove(new b(e.name,s)):i}});return new Mt(r,this.indexSet_)}}/**
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
 */let fi;class P{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&k_(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fi||(fi=new P(new be(nd),null,Mt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fi}updatePriority(e){return this.children_.isEmpty()?this:new P(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?fi:n}}getChild(e){const n=L(e);return n===null?this:this.getImmediateChild(n).getChild(G(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new b(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?fi:this.priorityNode_;return new P(i,o,s)}}updateChild(e,n){const r=L(e);if(r===null)return n;{E(L(e)!==".priority"||wn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(G(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ie,(o,l)=>{n[o]=l.val(e),r++,s&&P.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+I_(this.getPriority().val())+":"),this.forEachChild(ie,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Xg(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new b(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new b(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new b(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,b.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,b.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ss?-1:0}withIndex(e){if(e===Dr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new P(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Dr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ie),i=n.getIterator(ie);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Dr?null:this.indexMap_.get(e.toString())}}P.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class bI extends P{constructor(){super(new be(nd),P.EMPTY_NODE,Mt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return P.EMPTY_NODE}isEmpty(){return!1}}const Ss=new bI;Object.defineProperties(b,{MIN:{value:new b(Hr,P.EMPTY_NODE)},MAX:{value:new b(Xn,Ss)}});C_.__EMPTY_NODE=P.EMPTY_NODE;pe.__childrenNodeConstructor=P;xI(Ss);AI(Ss);/**
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
 */const FI=!0;function _e(t,e=null){if(t===null)return P.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new pe(n,_e(e))}if(!(t instanceof Array)&&FI){const n=[];let r=!1;if(Be(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=_e(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new b(o,a)))}}),n.length===0)return P.EMPTY_NODE;const s=Qo(n,PI,o=>o.name,nd);if(r){const o=Qo(n,ie.getCompare());return new P(s,_e(e),new Mt({".priority":o},{".priority":ie}))}else return new P(s,_e(e),Mt.Default)}else{let n=P.EMPTY_NODE;return Be(t,(r,i)=>{if(Ht(t,r)&&r.substring(0,1)!=="."){const s=_e(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(_e(e))}}OI(_e);/**
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
 */class UI extends Rl{constructor(e){super(),this.indexPath_=e,E(!F(e)&&L(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ei(e.name,n.name):s}makePost(e,n){const r=_e(e),i=P.EMPTY_NODE.updateChild(this.indexPath_,r);return new b(n,i)}maxPost(){const e=P.EMPTY_NODE.updateChild(this.indexPath_,Ss);return new b(Xn,e)}toString(){return w_(this.indexPath_,0).join("/")}}/**
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
 */class zI extends Rl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ei(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return b.MIN}maxPost(){return b.MAX}makePost(e,n){const r=_e(e);return new b(n,r)}toString(){return".value"}}const WI=new zI;/**
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
 */function R_(t){return{type:"value",snapshotNode:t}}function $r(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function is(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ss(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function BI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class rd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(is(n,l)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange($r(n,r)):o.trackChildChange(ss(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ie,(i,s)=>{n.hasChild(i)||r.trackChildChange(is(i,s))}),n.isLeafNode()||n.forEachChild(ie,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ss(i,s,o))}else r.trackChildChange($r(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?P.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class os{constructor(e){this.indexedFilter_=new rd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=os.getStartPost_(e),this.endPost_=os.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new b(n,r))||(r=P.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=P.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(P.EMPTY_NODE);const s=this;return n.forEachChild(ie,(o,l)=>{s.matches(new b(o,l))||(i=i.updateImmediateChild(o,P.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class jI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new os(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new b(n,r))||(r=P.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=P.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=P.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(P.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,P.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,g)=>c(g,h)}else o=this.index_.getCompare();const l=e;E(l.numChildren()===this.limit_,"");const a=new b(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,a);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(ss(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(is(n,c));const v=l.updateImmediateChild(n,P.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange($r(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(is(u.name,u.node)),s.trackChildChange($r(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,P.EMPTY_NODE)):e}}/**
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
 */class id{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Hr}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ie}copy(){const e=new id;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function VI(t){return t.loadsAllData()?new rd(t.getIndex()):t.hasLimit()?new jI(t):new os(t)}function kf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ie?n="$priority":t.index_===WI?n="$value":t.index_===Dr?n="$key":(E(t.index_ instanceof UI,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ue(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ue(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ue(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ue(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ue(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Tf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ie&&(e.i=t.index_.toString()),e}/**
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
 */class qo extends __{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Es("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=qo.getListenId_(e,r),l={};this.listens_[o]=l;const a=kf(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Br(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=qo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=kf(e._queryParams),r=e._path.toString(),i=new El;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Zr(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Zi(l.responseText)}catch{We("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&We("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class HI{constructor(){this.rootNode_=P.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Yo(){return{value:null,children:new Map}}function P_(t,e,n){if(F(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=L(e);t.children.has(r)||t.children.set(r,Yo());const i=t.children.get(r);e=G(e),P_(i,e,n)}}function Au(t,e,n){t.value!==null?n(e,t.value):$I(t,(r,i)=>{const s=new $(e.toString()+"/"+r);Au(i,s,n)})}function $I(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class GI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Be(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Nf=10*1e3,KI=30*1e3,QI=5*60*1e3;class qI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new GI(e);const r=Nf+(KI-Nf)*Math.random();Oi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Be(e,(i,s)=>{s>0&&Ht(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Oi(this.reportStats_.bind(this),Math.floor(Math.random()*2*QI))}}/**
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
 */var ct;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ct||(ct={}));function x_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function sd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function od(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Xo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ct.ACK_USER_WRITE,this.source=x_()}operationForChild(e){if(F(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new $(e));return new Xo(B(),n,this.revert)}}else return E(L(this.path)===e,"operationForChild called for unrelated child."),new Xo(G(this.path),this.affectedTree,this.revert)}}/**
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
 */class ls{constructor(e,n){this.source=e,this.path=n,this.type=ct.LISTEN_COMPLETE}operationForChild(e){return F(this.path)?new ls(this.source,B()):new ls(this.source,G(this.path))}}/**
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
 */class Jn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ct.OVERWRITE}operationForChild(e){return F(this.path)?new Jn(this.source,B(),this.snap.getImmediateChild(e)):new Jn(this.source,G(this.path),this.snap)}}/**
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
 */class as{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ct.MERGE}operationForChild(e){if(F(this.path)){const n=this.children.subtree(new $(e));return n.isEmpty()?null:n.value?new Jn(this.source,B(),n.value):new as(this.source,B(),n)}else return E(L(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new as(this.source,G(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class En{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(F(e))return this.isFullyInitialized()&&!this.filtered_;const n=L(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class YI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function XI(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(BI(o.childName,o.snapshotNode))}),pi(t,i,"child_removed",e,r,n),pi(t,i,"child_added",e,r,n),pi(t,i,"child_moved",s,r,n),pi(t,i,"child_changed",e,r,n),pi(t,i,"value",e,r,n),i}function pi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>ZI(t,l,a)),o.forEach(l=>{const a=JI(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function JI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function ZI(t,e,n){if(e.childName==null||n.childName==null)throw Jr("Should only compare child_ events.");const r=new b(e.childName,e.snapshotNode),i=new b(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Pl(t,e){return{eventCache:t,serverCache:e}}function Ai(t,e,n,r){return Pl(new En(e,n,r),t.serverCache)}function O_(t,e,n,r){return Pl(t.eventCache,new En(e,n,r))}function Jo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Zn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ea;const e1=()=>(Ea||(Ea=new be(zC)),Ea);class q{constructor(e,n=e1()){this.value=e,this.children=n}static fromObject(e){let n=new q(null);return Be(e,(r,i)=>{n=n.set(new $(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:B(),value:this.value};if(F(e))return null;{const r=L(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(G(e),n);return s!=null?{path:ce(new $(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(F(e))return this;{const n=L(e),r=this.children.get(n);return r!==null?r.subtree(G(e)):new q(null)}}set(e,n){if(F(e))return new q(n,this.children);{const r=L(e),s=(this.children.get(r)||new q(null)).set(G(e),n),o=this.children.insert(r,s);return new q(this.value,o)}}remove(e){if(F(e))return this.children.isEmpty()?new q(null):new q(null,this.children);{const n=L(e),r=this.children.get(n);if(r){const i=r.remove(G(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new q(null):new q(this.value,s)}else return this}}get(e){if(F(e))return this.value;{const n=L(e),r=this.children.get(n);return r?r.get(G(e)):null}}setTree(e,n){if(F(e))return n;{const r=L(e),s=(this.children.get(r)||new q(null)).setTree(G(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new q(this.value,o)}}fold(e){return this.fold_(B(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ce(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,B(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(F(e))return null;{const s=L(e),o=this.children.get(s);return o?o.findOnPath_(G(e),ce(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,B(),n)}foreachOnPath_(e,n,r){if(F(e))return this;{this.value&&r(n,this.value);const i=L(e),s=this.children.get(i);return s?s.foreachOnPath_(G(e),ce(n,i),r):new q(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ce(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class ft{constructor(e){this.writeTree_=e}static empty(){return new ft(new q(null))}}function Di(t,e,n){if(F(e))return new ft(new q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=xe(i,e);return s=s.updateChild(o,n),new ft(t.writeTree_.set(i,s))}else{const i=new q(n),s=t.writeTree_.setTree(e,i);return new ft(s)}}}function Rf(t,e,n){let r=t;return Be(n,(i,s)=>{r=Di(r,ce(e,i),s)}),r}function Pf(t,e){if(F(e))return ft.empty();{const n=t.writeTree_.setTree(e,new q(null));return new ft(n)}}function Du(t,e){return nr(t,e)!=null}function nr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(xe(n.path,e)):null}function xf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ie,(r,i)=>{e.push(new b(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new b(r,i.value))}),e}function gn(t,e){if(F(e))return t;{const n=nr(t,e);return n!=null?new ft(new q(n)):new ft(t.writeTree_.subtree(e))}}function Mu(t){return t.writeTree_.isEmpty()}function Gr(t,e){return A_(B(),t.writeTree_,e)}function A_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(E(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=A_(ce(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ce(t,".priority"),r)),n}}/**
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
 */function xl(t,e){return b_(e,t)}function t1(t,e,n,r,i){E(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Di(t.visibleWrites,e,n)),t.lastWriteId=r}function n1(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function r1(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&i1(l,r.path)?i=!1:ut(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return s1(t),!0;if(r.snap)t.visibleWrites=Pf(t.visibleWrites,r.path);else{const l=r.children;Be(l,a=>{t.visibleWrites=Pf(t.visibleWrites,ce(r.path,a))})}return!0}else return!1}function i1(t,e){if(t.snap)return ut(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ut(ce(t.path,n),e))return!0;return!1}function s1(t){t.visibleWrites=D_(t.allWrites,o1,B()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function o1(t){return t.visible}function D_(t,e,n){let r=ft.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)ut(n,o)?(l=xe(n,o),r=Di(r,l,s.snap)):ut(o,n)&&(l=xe(o,n),r=Di(r,B(),s.snap.getChild(l)));else if(s.children){if(ut(n,o))l=xe(n,o),r=Rf(r,l,s.children);else if(ut(o,n))if(l=xe(o,n),F(l))r=Rf(r,B(),s.children);else{const a=Br(s.children,L(l));if(a){const u=a.getChild(G(l));r=Di(r,B(),u)}}}else throw Jr("WriteRecord should have .snap or .children")}}return r}function M_(t,e,n,r,i){if(!r&&!i){const s=nr(t.visibleWrites,e);if(s!=null)return s;{const o=gn(t.visibleWrites,e);if(Mu(o))return n;if(n==null&&!Du(o,B()))return null;{const l=n||P.EMPTY_NODE;return Gr(o,l)}}}else{const s=gn(t.visibleWrites,e);if(!i&&Mu(s))return n;if(!i&&n==null&&!Du(s,B()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(ut(u.path,e)||ut(e,u.path))},l=D_(t.allWrites,o,e),a=n||P.EMPTY_NODE;return Gr(l,a)}}}function l1(t,e,n){let r=P.EMPTY_NODE;const i=nr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ie,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=gn(t.visibleWrites,e);return n.forEachChild(ie,(o,l)=>{const a=Gr(gn(s,new $(o)),l);r=r.updateImmediateChild(o,a)}),xf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=gn(t.visibleWrites,e);return xf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function a1(t,e,n,r,i){E(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ce(e,n);if(Du(t.visibleWrites,s))return null;{const o=gn(t.visibleWrites,s);return Mu(o)?i.getChild(n):Gr(o,i.getChild(n))}}function u1(t,e,n,r){const i=ce(e,n),s=nr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=gn(t.visibleWrites,i);return Gr(o,r.getNode().getImmediateChild(n))}else return null}function c1(t,e){return nr(t.visibleWrites,e)}function d1(t,e,n,r,i,s,o){let l;const a=gn(t.visibleWrites,e),u=nr(a,B());if(u!=null)l=u;else if(n!=null)l=Gr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=h.getNext();for(;g&&d.length<i;)c(g,r)!==0&&d.push(g),g=h.getNext();return d}else return[]}function h1(){return{visibleWrites:ft.empty(),allWrites:[],lastWriteId:-1}}function Zo(t,e,n,r){return M_(t.writeTree,t.treePath,e,n,r)}function ld(t,e){return l1(t.writeTree,t.treePath,e)}function Of(t,e,n,r){return a1(t.writeTree,t.treePath,e,n,r)}function el(t,e){return c1(t.writeTree,ce(t.treePath,e))}function f1(t,e,n,r,i,s){return d1(t.writeTree,t.treePath,e,n,r,i,s)}function ad(t,e,n){return u1(t.writeTree,t.treePath,e,n)}function L_(t,e){return b_(ce(t.treePath,e),t.writeTree)}function b_(t,e){return{treePath:t,writeTree:e}}/**
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
 */class p1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ss(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,is(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,$r(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ss(r,e.snapshotNode,i.oldSnap));else throw Jr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class m1{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const F_=new m1;class ud{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new En(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ad(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Zn(this.viewCache_),s=f1(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function g1(t){return{filter:t}}function _1(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function v1(t,e,n,r,i){const s=new p1;let o,l;if(n.type===ct.OVERWRITE){const u=n;u.source.fromUser?o=Lu(t,e,u.path,u.snap,r,i,s):(E(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!F(u.path),o=tl(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===ct.MERGE){const u=n;u.source.fromUser?o=w1(t,e,u.path,u.children,r,i,s):(E(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=bu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===ct.ACK_USER_WRITE){const u=n;u.revert?o=C1(t,e,u.path,r,i,s):o=E1(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===ct.LISTEN_COMPLETE)o=S1(t,e,n.path,r,s);else throw Jr("Unknown operation type: "+n.type);const a=s.getChanges();return y1(e,o,a),{viewCache:o,changes:a}}function y1(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Jo(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(R_(Jo(e)))}}function U_(t,e,n,r,i,s){const o=e.eventCache;if(el(r,n)!=null)return e;{let l,a;if(F(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Zn(e),d=u instanceof P?u:P.EMPTY_NODE,c=ld(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=Zo(r,Zn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=L(n);if(u===".priority"){E(wn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=Of(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=G(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=Of(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=ad(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return Ai(e,l,o.isFullyInitialized()||F(n),t.filter.filtersNodes())}}function tl(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(F(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),g,null)}else{const g=L(n);if(!a.isCompleteForPath(n)&&wn(n)>1)return e;const _=G(n),R=a.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?u=d.updatePriority(a.getNode(),R):u=d.updateChild(a.getNode(),g,R,_,F_,null)}const c=O_(e,u,a.isFullyInitialized()||F(n),d.filtersNodes()),h=new ud(i,c,s);return U_(t,c,n,i,h,l)}function Lu(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new ud(i,e,s);if(F(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Ai(e,u,!0,t.filter.filtersNodes());else{const c=L(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Ai(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=G(n),g=l.getNode().getImmediateChild(c);let _;if(F(h))_=r;else{const v=d.getCompleteChild(c);v!=null?y_(h)===".priority"&&v.getChild(E_(h)).isEmpty()?_=v:_=v.updateChild(h,r):_=P.EMPTY_NODE}if(g.equals(_))a=e;else{const v=t.filter.updateChild(l.getNode(),c,_,h,d,o);a=Ai(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Af(t,e){return t.eventCache.isCompleteForChild(e)}function w1(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=ce(n,a);Af(e,L(d))&&(l=Lu(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=ce(n,a);Af(e,L(d))||(l=Lu(t,l,d,u,i,s,o))}),l}function Df(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function bu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;F(n)?u=r:u=new q(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),_=Df(t,g,h);a=tl(t,a,new $(c),_,i,s,o,l)}}),u.children.inorderTraversal((c,h)=>{const g=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!g){const _=e.serverCache.getNode().getImmediateChild(c),v=Df(t,_,h);a=tl(t,a,new $(c),v,i,s,o,l)}}),a}function E1(t,e,n,r,i,s,o){if(el(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(F(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return tl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(F(n)){let u=new q(null);return a.getNode().forEachChild(Dr,(d,c)=>{u=u.set(new $(d),c)}),bu(t,e,n,u,i,s,l,o)}else return e}else{let u=new q(null);return r.foreach((d,c)=>{const h=ce(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),bu(t,e,n,u,i,s,l,o)}}function S1(t,e,n,r,i){const s=e.serverCache,o=O_(e,s.getNode(),s.isFullyInitialized()||F(n),s.isFiltered());return U_(t,o,n,r,F_,i)}function C1(t,e,n,r,i,s){let o;if(el(r,n)!=null)return e;{const l=new ud(r,e,i),a=e.eventCache.getNode();let u;if(F(n)||L(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Zo(r,Zn(e));else{const c=e.serverCache.getNode();E(c instanceof P,"serverChildren would be complete if leaf node"),d=ld(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=L(n);let c=ad(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,G(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,P.EMPTY_NODE,G(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Zo(r,Zn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||el(r,B())!=null,Ai(e,u,o,t.filter.filtersNodes())}}/**
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
 */class I1{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new rd(r.getIndex()),s=VI(r);this.processor_=g1(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(P.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(P.EMPTY_NODE,l.getNode(),null),d=new En(a,o.isFullyInitialized(),i.filtersNodes()),c=new En(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Pl(c,d),this.eventGenerator_=new YI(this.query_)}get query(){return this.query_}}function k1(t){return t.viewCache_.serverCache.getNode()}function T1(t){return Jo(t.viewCache_)}function N1(t,e){const n=Zn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!F(e)&&!n.getImmediateChild(L(e)).isEmpty())?n.getChild(e):null}function Mf(t){return t.eventRegistrations_.length===0}function R1(t,e){t.eventRegistrations_.push(e)}function Lf(t,e,n){const r=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function bf(t,e,n,r){e.type===ct.MERGE&&e.source.queryId!==null&&(E(Zn(t.viewCache_),"We should always have a full cache before handling merges"),E(Jo(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=v1(t.processor_,i,e,n,r);return _1(t.processor_,s.viewCache),E(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,z_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function P1(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ie,(s,o)=>{r.push($r(s,o))}),n.isFullyInitialized()&&r.push(R_(n.getNode())),z_(t,r,n.getNode(),e)}function z_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return XI(t.eventGenerator_,e,n,i)}/**
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
 */let nl;class W_{constructor(){this.views=new Map}}function x1(t){E(!nl,"__referenceConstructor has already been defined"),nl=t}function O1(){return E(nl,"Reference.ts has not been loaded"),nl}function A1(t){return t.views.size===0}function cd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return E(s!=null,"SyncTree gave us an op for an invalid query."),bf(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(bf(o,e,n,r));return s}}function B_(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Zo(n,i?r:null),a=!1;l?a=!0:r instanceof P?(l=ld(n,r),a=!1):(l=P.EMPTY_NODE,a=!1);const u=Pl(new En(l,a,!1),new En(r,i,!1));return new I1(e,u)}return o}function D1(t,e,n,r,i,s){const o=B_(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),R1(o,n),P1(o,n)}function M1(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Sn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Lf(u,n,r)),Mf(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Lf(a,n,r)),Mf(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Sn(t)&&s.push(new(O1())(e._repo,e._path)),{removed:s,events:o}}function j_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function _n(t,e){let n=null;for(const r of t.views.values())n=n||N1(r,e);return n}function V_(t,e){if(e._queryParams.loadsAllData())return Ol(t);{const r=e._queryIdentifier;return t.views.get(r)}}function H_(t,e){return V_(t,e)!=null}function Sn(t){return Ol(t)!=null}function Ol(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let rl;function L1(t){E(!rl,"__referenceConstructor has already been defined"),rl=t}function b1(){return E(rl,"Reference.ts has not been loaded"),rl}let F1=1;class Ff{constructor(e){this.listenProvider_=e,this.syncPointTree_=new q(null),this.pendingWriteTree_=h1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function $_(t,e,n,r,i){return t1(t.pendingWriteTree_,e,n,r,i),i?Is(t,new Jn(x_(),e,n)):[]}function Un(t,e,n=!1){const r=n1(t.pendingWriteTree_,e);if(r1(t.pendingWriteTree_,e)){let s=new q(null);return r.snap!=null?s=s.set(B(),!0):Be(r.children,o=>{s=s.set(new $(o),!0)}),Is(t,new Xo(r.path,s,n))}else return[]}function Cs(t,e,n){return Is(t,new Jn(sd(),e,n))}function U1(t,e,n){const r=q.fromObject(n);return Is(t,new as(sd(),e,r))}function z1(t,e){return Is(t,new ls(sd(),e))}function W1(t,e,n){const r=hd(t,n);if(r){const i=fd(r),s=i.path,o=i.queryId,l=xe(s,e),a=new ls(od(o),l);return pd(t,s,a)}else return[]}function il(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||H_(o,e))){const a=M1(o,e,n,r);A1(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,g)=>Sn(g));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=V1(h);for(let _=0;_<g.length;++_){const v=g[_],R=v.query,p=q_(t,v);t.listenProvider_.startListening(Mi(R),us(t,R),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Mi(e),null):u.forEach(h=>{const g=t.queryToTagMap.get(Al(h));t.listenProvider_.stopListening(Mi(h),g)}))}H1(t,u)}return l}function G_(t,e,n,r){const i=hd(t,r);if(i!=null){const s=fd(i),o=s.path,l=s.queryId,a=xe(o,e),u=new Jn(od(l),a,n);return pd(t,o,u)}else return[]}function B1(t,e,n,r){const i=hd(t,r);if(i){const s=fd(i),o=s.path,l=s.queryId,a=xe(o,e),u=q.fromObject(n),d=new as(od(l),a,u);return pd(t,o,d)}else return[]}function Fu(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const _=xe(h,i);s=s||_n(g,_),o=o||Sn(g)});let l=t.syncPointTree_.get(i);l?(o=o||Sn(l),s=s||_n(l,B())):(l=new W_,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=P.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const v=_n(_,B());v&&(s=s.updateImmediateChild(g,v))}));const u=H_(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=Al(e);E(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=$1();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const d=xl(t.pendingWriteTree_,i);let c=D1(l,e,n,d,s,a);if(!u&&!o&&!r){const h=V_(l,e);c=c.concat(G1(t,e,h))}return c}function dd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=xe(o,e),u=_n(l,a);if(u)return u});return M_(i,e,s,n,!0)}function j1(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=xe(u,n);r=r||_n(d,c)});let i=t.syncPointTree_.get(n);i?r=r||_n(i,B()):(i=new W_,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new En(r,!0,!1):null,l=xl(t.pendingWriteTree_,e._path),a=B_(i,e,l,s?o.getNode():P.EMPTY_NODE,s);return T1(a)}function Is(t,e){return K_(e,t.syncPointTree_,null,xl(t.pendingWriteTree_,B()))}function K_(t,e,n,r){if(F(t.path))return Q_(t,e,n,r);{const i=e.get(B());n==null&&i!=null&&(n=_n(i,B()));let s=[];const o=L(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=L_(r,o);s=s.concat(K_(l,a,u,d))}return i&&(s=s.concat(cd(i,t,r,n))),s}}function Q_(t,e,n,r){const i=e.get(B());n==null&&i!=null&&(n=_n(i,B()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=L_(r,o),d=t.operationForChild(o);d&&(s=s.concat(Q_(d,l,a,u)))}),i&&(s=s.concat(cd(i,t,r,n))),s}function q_(t,e){const n=e.query,r=us(t,n);return{hashFn:()=>(k1(e)||P.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?W1(t,n._path,r):z1(t,n._path);{const s=jC(i,n);return il(t,n,null,s)}}}}function us(t,e){const n=Al(e);return t.queryToTagMap.get(n)}function Al(t){return t._path.toString()+"$"+t._queryIdentifier}function hd(t,e){return t.tagToQueryMap.get(e)}function fd(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new $(t.substr(0,e))}}function pd(t,e,n){const r=t.syncPointTree_.get(e);E(r,"Missing sync point for query tag that we're tracking");const i=xl(t.pendingWriteTree_,e);return cd(r,n,i,null)}function V1(t){return t.fold((e,n,r)=>{if(n&&Sn(n))return[Ol(n)];{let i=[];return n&&(i=j_(n)),Be(r,(s,o)=>{i=i.concat(o)}),i}})}function Mi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(b1())(t._repo,t._path):t}function H1(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Al(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function $1(){return F1++}function G1(t,e,n){const r=e._path,i=us(t,e),s=q_(t,n),o=t.listenProvider_.startListening(Mi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)E(!Sn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!F(u)&&d&&Sn(d))return[Ol(d).query];{let h=[];return d&&(h=h.concat(j_(d).map(g=>g.query))),Be(c,(g,_)=>{h=h.concat(_)}),h}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(Mi(d),us(t,d))}}return o}/**
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
 */class md{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new md(n)}node(){return this.node_}}class gd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ce(this.path_,e);return new gd(this.syncTree_,n)}node(){return dd(this.syncTree_,this.path_)}}const K1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Uf=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Q1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return q1(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Q1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},q1=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&E(!1,"Unexpected increment value: "+r);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Y1=function(t,e,n,r){return _d(e,new gd(n,t),r)},Y_=function(t,e,n){return _d(t,new md(e),n)};function _d(t,e,n){const r=t.getPriority().val(),i=Uf(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Uf(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new pe(l,_e(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new pe(i))),o.forEachChild(ie,(l,a)=>{const u=_d(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class vd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function yd(t,e){let n=e instanceof $?e:new $(e),r=t,i=L(n);for(;i!==null;){const s=Br(r.node.children,i)||{children:{},childCount:0};r=new vd(i,r,s),n=G(n),i=L(n)}return r}function ni(t){return t.node.value}function X_(t,e){t.node.value=e,Uu(t)}function J_(t){return t.node.childCount>0}function X1(t){return ni(t)===void 0&&!J_(t)}function Dl(t,e){Be(t.node.children,(n,r)=>{e(new vd(n,t,r))})}function Z_(t,e,n,r){n&&!r&&e(t),Dl(t,i=>{Z_(i,e,!0,r)}),n&&r&&e(t)}function J1(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ks(t){return new $(t.parent===null?t.name:ks(t.parent)+"/"+t.name)}function Uu(t){t.parent!==null&&Z1(t.parent,t.name,t)}function Z1(t,e,n){const r=X1(n),i=Ht(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Uu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Uu(t))}/**
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
 */const ek=/[\[\].#$\/\u0000-\u001F\u007F]/,tk=/[\[\].#$\u0000-\u001F\u007F]/,Sa=10*1024*1024,ev=function(t){return typeof t=="string"&&t.length!==0&&!ek.test(t)},tv=function(t){return typeof t=="string"&&t.length!==0&&!tk.test(t)},nk=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),tv(t)},nv=function(t,e,n,r){r&&e===void 0||wd(Uc(t,"value"),e,n)},wd=function(t,e,n){const r=n instanceof $?new EI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Dn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Dn(r)+" with contents = "+e.toString());if(Jg(e))throw new Error(t+"contains "+e.toString()+" "+Dn(r));if(typeof e=="string"&&e.length>Sa/3&&Sl(e)>Sa)throw new Error(t+"contains a string greater than "+Sa+" utf8 bytes "+Dn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Be(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!ev(o)))throw new Error(t+" contains an invalid key ("+o+") "+Dn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);SI(r,o),wd(t,l,r),CI(r)}),i&&s)throw new Error(t+' contains ".value" child '+Dn(r)+" in addition to actual children.")}},rv=function(t,e,n,r){if(!(r&&n===void 0)&&!tv(n))throw new Error(Uc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},rk=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),rv(t,e,n,r)},iv=function(t,e){if(L(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},ik=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ev(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!nk(n))throw new Error(Uc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class sk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ed(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!ed(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function sv(t,e,n){Ed(t,n),ov(t,r=>ed(r,e))}function Ct(t,e,n){Ed(t,n),ov(t,r=>ut(r,e)||ut(e,r))}function ov(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(ok(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function ok(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();jn&&ke("event: "+n.toString()),ti(r)}}}/**
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
 */const lk="repo_interrupt",ak=25;class uk{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new sk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Yo(),this.transactionQueueTree_=new vd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ck(t,e,n){if(t.stats_=Jc(t.repoInfo_),t.forceRestClient_||GC())t.server_=new qo(t.repoInfo_,(r,i,s,o)=>{zf(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Wf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ue(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new bt(t.repoInfo_,e,(r,i,s,o)=>{zf(t,r,i,s,o)},r=>{Wf(t,r)},r=>{dk(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=XC(t.repoInfo_,()=>new qI(t.stats_,t.server_)),t.infoData_=new HI,t.infoSyncTree_=new Ff({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Cs(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Cd(t,"connected",!1),t.serverSyncTree_=new Ff({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Ct(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function lv(t){const n=t.infoData_.getNode(new $(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Sd(t){return K1({timestamp:lv(t)})}function zf(t,e,n,r,i){t.dataUpdateCount++;const s=new $(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=zo(n,u=>_e(u));o=B1(t.serverSyncTree_,s,a,i)}else{const a=_e(n);o=G_(t.serverSyncTree_,s,a,i)}else if(r){const a=zo(n,u=>_e(u));o=U1(t.serverSyncTree_,s,a)}else{const a=_e(n);o=Cs(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Ll(t,s)),Ct(t.eventQueue_,l,o)}function Wf(t,e){Cd(t,"connected",e),e===!1&&pk(t)}function dk(t,e){Be(e,(n,r)=>{Cd(t,n,r)})}function Cd(t,e,n){const r=new $("/.info/"+e),i=_e(n);t.infoData_.updateSnapshot(r,i);const s=Cs(t.infoSyncTree_,r,i);Ct(t.eventQueue_,r,s)}function av(t){return t.nextWriteId_++}function hk(t,e,n){const r=j1(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=_e(i).withIndex(e._queryParams.getIndex());Fu(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Cs(t.serverSyncTree_,e._path,s);else{const l=us(t.serverSyncTree_,e);o=G_(t.serverSyncTree_,e._path,s,l)}return Ct(t.eventQueue_,e._path,o),il(t.serverSyncTree_,e,n,null,!0),s},i=>(Ml(t,"get for query "+ue(e)+" failed: "+i),Promise.reject(new Error(i))))}function fk(t,e,n,r,i){Ml(t,"set",{path:e.toString(),value:n,priority:r});const s=Sd(t),o=_e(n,r),l=dd(t.serverSyncTree_,e),a=Y_(o,l,s),u=av(t),d=$_(t.serverSyncTree_,e,a,u,!0);Ed(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const _=h==="ok";_||We("set at "+e+" failed: "+h);const v=Un(t.serverSyncTree_,u,!_);Ct(t.eventQueue_,e,v),_k(t,i,h,g)});const c=fv(t,e);Ll(t,c),Ct(t.eventQueue_,c,[])}function pk(t){Ml(t,"onDisconnectEvents");const e=Sd(t),n=Yo();Au(t.onDisconnect_,B(),(i,s)=>{const o=Y1(i,s,t.serverSyncTree_,e);P_(n,i,o)});let r=[];Au(n,B(),(i,s)=>{r=r.concat(Cs(t.serverSyncTree_,i,s));const o=fv(t,i);Ll(t,o)}),t.onDisconnect_=Yo(),Ct(t.eventQueue_,B(),r)}function mk(t,e,n){let r;L(e._path)===".info"?r=Fu(t.infoSyncTree_,e,n):r=Fu(t.serverSyncTree_,e,n),sv(t.eventQueue_,e._path,r)}function zu(t,e,n){let r;L(e._path)===".info"?r=il(t.infoSyncTree_,e,n):r=il(t.serverSyncTree_,e,n),sv(t.eventQueue_,e._path,r)}function gk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(lk)}function Ml(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ke(n,...e)}function _k(t,e,n,r){e&&ti(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function uv(t,e,n){return dd(t.serverSyncTree_,e,n)||P.EMPTY_NODE}function Id(t,e=t.transactionQueueTree_){if(e||bl(t,e),ni(e)){const n=dv(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&vk(t,ks(e),n)}else J_(e)&&Dl(e,n=>{Id(t,n)})}function vk(t,e,n){const r=n.map(u=>u.currentWriteId),i=uv(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];E(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=xe(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Ml(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Un(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();bl(t,yd(t.transactionQueueTree_,e)),Id(t,t.transactionQueueTree_),Ct(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)ti(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{We("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Ll(t,e)}},o)}function Ll(t,e){const n=cv(t,e),r=ks(n),i=dv(t,n);return yk(t,i,r),r}function yk(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=xe(n,a.path);let d=!1,c;if(E(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(Un(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=ak)d=!0,c="maxretry",i=i.concat(Un(t.serverSyncTree_,a.currentWriteId,!0));else{const h=uv(t,a.path,o);a.currentInputSnapshot=h;const g=e[l].update(h.val());if(g!==void 0){wd("transaction failed: Data returned ",g,a.path);let _=_e(g);typeof g=="object"&&g!=null&&Ht(g,".priority")||(_=_.updatePriority(h.getPriority()));const R=a.currentWriteId,p=Sd(t),f=Y_(_,h,p);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=f,a.currentWriteId=av(t),o.splice(o.indexOf(R),1),i=i.concat($_(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(Un(t.serverSyncTree_,R,!0))}else d=!0,c="nodata",i=i.concat(Un(t.serverSyncTree_,a.currentWriteId,!0))}Ct(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}bl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ti(r[l]);Id(t,t.transactionQueueTree_)}function cv(t,e){let n,r=t.transactionQueueTree_;for(n=L(e);n!==null&&ni(r)===void 0;)r=yd(r,n),e=G(e),n=L(e);return r}function dv(t,e){const n=[];return hv(t,e,n),n.sort((r,i)=>r.order-i.order),n}function hv(t,e,n){const r=ni(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Dl(e,i=>{hv(t,i,n)})}function bl(t,e){const n=ni(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,X_(e,n.length>0?n:void 0)}Dl(e,r=>{bl(t,r)})}function fv(t,e){const n=ks(cv(t,e)),r=yd(t.transactionQueueTree_,e);return J1(r,i=>{Ca(t,i)}),Ca(t,r),Z_(r,i=>{Ca(t,i)}),n}function Ca(t,e){const n=ni(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Un(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?X_(e,void 0):n.length=s+1,Ct(t.eventQueue_,ks(e),i);for(let o=0;o<r.length;o++)ti(r[o])}}/**
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
 */function wk(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Ek(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):We(`Invalid query segment '${n}' in query '${t}'`)}return e}const Bf=function(t,e){const n=Sk(t),r=n.namespace;n.domain==="firebase.com"&&jt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&jt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||FC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new c_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new $(n.pathString)}},Sk=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=wk(t.substring(d,c)));const h=Ek(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */const jf="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Ck=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=jf.charAt(n%64),n=Math.floor(n/64);E(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=jf.charAt(e[i]);return E(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class pv{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ue(this.snapshot.exportVal())}}class mv{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class kd{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Td{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return F(this._path)?null:y_(this._path)}get ref(){return new It(this._repo,this._path)}get _queryIdentifier(){const e=Tf(this._queryParams),n=Yc(e);return n==="{}"?"default":n}get _queryObject(){return Tf(this._queryParams)}isEqual(e){if(e=je(e),!(e instanceof Td))return!1;const n=this._repo===e._repo,r=ed(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+wI(this._path)}}class It extends Td{constructor(e,n){super(e,n,new id,!1)}get parent(){const e=E_(this._path);return e===null?null:new It(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Kr{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new $(e),r=Qr(this.ref,e);return new Kr(this._node.getChild(n),r,ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Kr(i,Qr(this.ref,r),ie)))}hasChild(e){const n=new $(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Xe(t,e){return t=je(t),t._checkNotDeleted("ref"),e!==void 0?Qr(t._root,e):t._root}function Qr(t,e){return t=je(t),L(t._path)===null?rk("child","path",e,!1):rv("child","path",e,!1),new It(t._repo,ce(t._path,e))}function Ik(t,e){t=je(t),iv("push",t._path),nv("push",e,t._path,!0);const n=lv(t._repo),r=Ck(n),i=Qr(t,r),s=Qr(t,r);let o;return e!=null?o=or(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function or(t,e){t=je(t),iv("set",t._path),nv("set",e,t._path,!1);const n=new El;return fk(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function kk(t){t=je(t);const e=new kd(()=>{}),n=new Ts(e);return hk(t._repo,t,n).then(r=>new Kr(r,new It(t._repo,t._path),t._queryParams.getIndex()))}class Ts{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new pv("value",this,new Kr(e.snapshotNode,new It(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new mv(this,e,n):null}matches(e){return e instanceof Ts?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Fl{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new mv(this,e,n):null}createEvent(e,n){E(e.childName!=null,"Child events should have a childName.");const r=Qr(new It(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new pv(e.type,this,new Kr(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Fl?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Ns(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(d,c)=>{zu(t._repo,t,l),a(d,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new kd(n,s||void 0),l=e==="value"?new Ts(o):new Fl(e,o);return mk(t._repo,t,l),()=>zu(t._repo,t,l)}function gv(t,e,n,r){return Ns(t,"value",e,n,r)}function Vf(t,e,n,r){return Ns(t,"child_added",e,n,r)}function Tk(t,e,n,r){return Ns(t,"child_changed",e,n,r)}function Nk(t,e,n,r){return Ns(t,"child_moved",e,n,r)}function Rk(t,e,n,r){return Ns(t,"child_removed",e,n,r)}function wi(t,e,n){let r=null;const i=n?new kd(n):null;e==="value"?r=new Ts(i):e&&(r=new Fl(e,i)),zu(t._repo,t,r)}x1(It);L1(It);/**
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
 */const Pk="FIREBASE_DATABASE_EMULATOR_HOST",Wu={};let xk=!1;function Ok(t,e,n,r){t.repoInfo_=new c_(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function Ak(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||jt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ke("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Bf(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[Pk]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=Bf(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const d=i&&a?new Ar(Ar.OWNER):new QC(t.name,t.options,e);ik("Invalid Firebase Database URL",o),F(o.path)||jt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=Mk(l,t,d,new KC(t.name,n));return new Lk(c,t)}function Dk(t,e){const n=Wu[e];(!n||n[t.key]!==t)&&jt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),gk(t),delete n[t.key]}function Mk(t,e,n,r){let i=Wu[e.name];i||(i={},Wu[e.name]=i);let s=i[t.toURLString()];return s&&jt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new uk(t,xk,n,r),i[t.toURLString()]=s,s}class Lk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ck(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new It(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Dk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&jt("Cannot call "+e+" on a deleted database.")}}function bk(t=hg(),e){const n=Bc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=ow("database");r&&Fk(n,...r)}return n}function Fk(t,e,n,r={}){t=je(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&jt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&jt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Ar(Ar.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:aw(r.mockUserToken,t.app.options.projectId);s=new Ar(o)}Ok(i,e,n,s)}/**
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
 */function Uk(t){AC(gs),jr(new Qn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Ak(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),mn(uf,cf,t),mn(uf,cf,"esm2017")}bt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};bt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Uk();/*! *****************************************************************************
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
***************************************************************************** */var Sr=function(){return Sr=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Sr.apply(this,arguments)},_v=function(t){return{loading:t==null,value:t}},zk=function(){return function(t,e){switch(e.type){case"error":return Sr(Sr({},t),{error:e.error,loading:!1,value:void 0});case"reset":return _v(e.defaultValue);case"value":return Sr(Sr({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},Wk=function(t){var e=t?t():void 0,n=U.useReducer(zk(),_v(e)),r=n[0],i=n[1],s=U.useCallback(function(){var a=t?t():void 0;i({type:"reset",defaultValue:a})},[t]),o=U.useCallback(function(a){i({type:"error",error:a})},[]),l=U.useCallback(function(a){i({type:"value",value:a})},[]);return U.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:l,value:r.value}},[r.error,r.loading,s,o,l,r.value])},Bk=function(t,e,n){var r=U.useRef(t);return U.useEffect(function(){e(t,r.current)||(r.current=t,n&&n())}),r},jk=function(t,e){var n=!t&&!e,r=!!t&&!!e&&t.isEqual(e);return n||r},vv=function(t,e){return Bk(t,jk,e)};/*! *****************************************************************************
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
***************************************************************************** */var fe=function(){return fe=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},fe.apply(this,arguments)};function Pe(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var yv={loading:!0,value:{keys:[],values:[]}},Vk=function(t,e){switch(e.type){case"add":return e.snapshot?fe(fe({},t),{error:void 0,value:wv(t.value,e.snapshot,e.previousKey)}):t;case"change":return e.snapshot?fe(fe({},t),{error:void 0,value:$k(t.value,e.snapshot)}):t;case"error":return fe(fe({},t),{error:e.error,loading:!1,value:{keys:void 0,values:void 0}});case"move":return e.snapshot?fe(fe({},t),{error:void 0,value:Gk(t.value,e.snapshot,e.previousKey)}):t;case"remove":return e.snapshot?fe(fe({},t),{error:void 0,value:Ev(t.value,e.snapshot)}):t;case"reset":return yv;case"value":return fe(fe({},t),{error:void 0,loading:!1,value:Hk(e.snapshots)});case"empty":return fe(fe({},t),{loading:!1,value:{keys:void 0,values:void 0}});default:return t}},Hk=function(t){if(!t)return{keys:[],values:[]};var e=[],n=[];return t.forEach(function(r){r.key&&(e.push(r.key),n.push(r))}),{keys:e,values:n}},wv=function(t,e,n){if(!e.key)return t;var r=t.keys,i=t.values;if(!n)return{keys:r?Pe([e.key],r,!0):[e.key],values:i?Pe([e],i,!0):[e]};var s=r?r.indexOf(n):0;return{keys:r?Pe(Pe(Pe([],r.slice(0,s+1),!0),[e.key],!1),r.slice(s+1),!0):[e.key],values:i?Pe(Pe(Pe([],i.slice(0,s+1),!0),[e],!1),i.slice(s+1),!0):[e]}},$k=function(t,e){if(!e.key)return t;var n=t.keys,r=t.values,i=n?n.indexOf(e.key):0;return fe(fe({},t),{values:r?Pe(Pe(Pe([],r.slice(0,i),!0),[e],!1),r.slice(i+1),!0):[e]})},Ev=function(t,e){if(!e.key)return t;var n=t.keys,r=t.values,i=n?n.indexOf(e.key):0;return{keys:n?Pe(Pe([],n.slice(0,i),!0),n.slice(i+1),!0):[],values:r?Pe(Pe([],r.slice(0,i),!0),r.slice(i+1),!0):[]}},Gk=function(t,e,n){var r=Ev(t,e);return wv(r,e,n)},Kk=function(){return U.useReducer(Vk,yv)},Ia=function(t){var e=Kk(),n=e[0],r=e[1],i=vv(t,function(){return r({type:"reset"})}),s=i.current;return U.useEffect(function(){if(!s){r({type:"empty"});return}var o=function(p,f){r({type:"add",previousKey:f,snapshot:p})},l=function(p){r({type:"change",snapshot:p})},a=function(p,f){r({type:"move",previousKey:f,snapshot:p})},u=function(p){r({type:"remove",snapshot:p})},d=function(p){r({type:"error",error:p})},c=function(p){r({type:"value",snapshots:p})},h,g=function(p){var f=p.val(),m=f?Object.keys(p.val()).length:0;if(m===0)h=Vf(s,o,d),c([]);else{var y=[],S=function(I,C){if(m>0){m--,y.push(I),m===0&&c(y);return}o(I,C)};h=Vf(s,S,d)}};gv(s,g,d,{onlyOnce:!0});var _=Tk(s,l,d),v=Nk(s,a,d),R=Rk(s,u,d);return function(){wi(s,"child_added",h),wi(s,"child_changed",_),wi(s,"child_moved",v),wi(s,"child_removed",R)}},[r,s]),[n.value.values,n.loading,n.error]},Hf=function(t){var e=Wk(),n=e.error,r=e.loading,i=e.reset,s=e.setError,o=e.setValue,l=e.value,a=vv(t,i);return U.useEffect(function(){var u=a.current;if(!u){o(void 0);return}return gv(u,o,s),function(){wi(u,"value",o)}},[a.current]),[l,r,n]};function Qk(t){const e=bk(t.app),[n,r]=U.useState(!1),[i,s]=U.useState(!1),[o,l]=U.useState(""),[a,u]=U.useState(""),[d,c]=U.useState(!0),[h,g]=U.useState(0),[_,v]=U.useState(0),[R,p]=U.useState(""),[f,m]=U.useState(!1),[y,S]=U.useState(!1),[I,C]=U.useState(!1),[N,V]=U.useState("");function D(Z){const Pn=Xe(e,"queue/"+Z.uid);or(Pn,{uid:Z.uid,name:Z.displayName,email:Z.email,photourl:Z.photoURL})}function Ve(){or(Xe(e,"queue/"+t.user.uid),null),r(!1)}function Nn(){or(Xe(e,"lobbies/"+o),null),s(!1),l(null),u(null),c(!0),g(0),v(0),p(""),m(!1),S(!1)}function kt(Z){const Pn=Xe(e,"lobbies/"+o+"/moves/player"+h);p(Z),Ik(Pn,Z),or(Xe(e,"lobbies/"+o+"/ready/player"+h),!0),c(!1),m(!0)}const[Rn,Nd,Rs]=Ia(Xe(e,"lobbies/"));U.useEffect(()=>{Rn&&Rn.forEach(Z=>{Z.val().player1.uid===t.user.uid?(r(!1),s(!0),u(Z.val().player2.email),l(Z.key),g(1),v(2),V(Z.val().player2.photourl)):Z.val().player2.uid===t.user.uid&&(r(!1),s(!0),u(Z.val().player1.email),l(Z.key),g(2),v(1),V(Z.val().player1.photourl))})},[Rn]),U.useEffect(()=>{o&&kk(Xe(e,"lobbies/"+o)).then(Z=>{Z.exists()||(s(!1),l(null),u(null),c(!0),g(0),v(0),p(""),m(!1),S(!1))})},[Rn]);const[$t,k,A]=Hf(Xe(e,"lobbies/"+o+"/ready/player"+h)),[O,J,le]=Hf(Xe(e,"lobbies/"+o+"/ready/player"+_)),[Gt,Tt,Ps]=Ia(Xe(e,"lobbies/"+o+"/moves/player"+h)),[he,rr,Xk]=Ia(Xe(e,"lobbies/"+o+"/moves/player"+_));return U.useEffect(()=>{$t!=null&&$t.val()&&(O!=null&&O.val())&&Gt&&he&&(console.log("Opponent's Moves: ",he),setTimeout(()=>{let Z=Gt[Gt.length-1],Pn=he[he.length-1];Z.val()==="rock"&&Pn.val()==="scissors"||Z.val()==="scissors"&&Pn.val()==="paper"||Z.val()==="paper"&&Pn.val()==="rock"?C(!0):C(!1),S(!0)},1e3),setTimeout(()=>{or(Xe(e,"lobbies/"+o+"/ready/player"+h),!1)},2e3),setTimeout(()=>{S(!1),c(!0),m(!1)},6e3))},[$t,O,Tt,rr,k,J]),n&&!i?He("div",{children:[M("h1",{children:"Waiting for other players..."}),M("button",{className:"m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all",onClick:()=>Ve(),children:"Leave Queue"})]}):!n&&i?He("div",{className:"h-[90vh]",children:[M("h1",{className:"text-center text-xl",children:"In Game"}),He("div",{className:"p-4 flex flex-col w-screen items-center justify-center",children:[M("section",{children:M("div",{className:"flex flex-row justify-center",children:He("div",{className:"flex flex-col items-center",children:[M("h1",{children:"Opponent"}),M("h2",{children:a}),M("img",{src:N,alt:"Opponent",className:"rounded-full"})]})})}),M("section",{children:M("div",{className:"flex flex-row justify-center",children:He("div",{className:"flex flex-col items-center",children:[M("h1",{children:"Controls"}),M("div",{children:d?He(mi,{children:[M("button",{className:"m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all",onClick:()=>{kt("rock")},children:"Rock"}),M("button",{className:"m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all",onClick:()=>{kt("paper")},children:"Paper"}),M("button",{className:"m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all",onClick:()=>{kt("scissors")},children:"Scissors"})]}):M("h1",{children:"Waiting for opponent..."})}),M("div",{children:M("button",{className:"m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all",onClick:()=>Nn(),children:"Leave Game"})}),He("div",{children:[f?M("h1",{className:"text-4xl",children:R}):M("h1",{className:"text-4xl",children:"Select a move"}),y?M(mi,{children:I?He(mi,{children:["Opponent's Move:"," ",M("h1",{className:"text-4xl text-green-400",children:he?he[he.length-1].val():"hello"}),M("h1",{className:"text-4xl text-green-400",children:"You win! "})]}):He(mi,{children:["Opponent's Move:"," ",M("h1",{className:"text-4xl text-red-500",children:he?he[he.length-1].val():"hello"}),M("h1",{className:"text-4xl text-red-500",children:"You lose!"})]})}):null]})]})})})]})]}):M("div",{children:M("button",{className:"m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all",onClick:()=>{D(t.user),r(!0)},children:"Queue"})})}const qk={apiKey:"AIzaSyDhWYptjj88s1qre32DwsUhBARM0D5ZkN8",authDomain:"fir-test-e003d.firebaseapp.com",databaseURL:"https://fir-test-e003d-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"fir-test-e003d",storageBucket:"fir-test-e003d.appspot.com",messagingSenderId:"1002363761303",appId:"1:1002363761303:web:4e9e04e3cbd48b10e02fd2",measurementId:"G-WDEJ45ZHK8"},Sv=dg(qk),$f=Kg(Sv);function Yk(){const[t]=xC($f);return He("div",{className:"App",children:[M(OC,{user:t,auth:$f}),M("div",{className:"h-[90vh] flex flex-col items-center justify-center",children:M("section",{children:t?M(Qk,{user:t,app:Sv}):M(mi,{children:"Login to Play"})})})]})}ka.createRoot(document.getElementById("root")).render(M(Bv.StrictMode,{children:M(Yk,{})}));
