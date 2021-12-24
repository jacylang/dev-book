"use strict";(self.webpackChunkdev_book=self.webpackChunkdev_book||[]).push([[4488],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:e},s),{},{components:n})):r.createElement(h,i({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39433:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={},p="Optional Chaining and the Try operator",c={unversionedId:"particles/optional-chaining-&-try",id:"particles/optional-chaining-&-try",isDocsHomePage:!1,title:"Optional Chaining and the Try operator",description:"I want to have them all: optional-chaining, unwrap and try operators.",source:"@site/docs/particles/optional-chaining-&-try.md",sourceDirName:"particles",slug:"/particles/optional-chaining-&-try",permalink:"/dev-book/docs/particles/optional-chaining-&-try",editUrl:"https://github.com/jacylang/dev-book/edit/master/docs/particles/optional-chaining-&-try.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Operator-Constructors",permalink:"/dev-book/docs/particles/operator-constructors"},next:{title:"Organic _Jacy_",permalink:"/dev-book/docs/particles/organic-jacy"}},s=[{value:"Initials",id:"initials",children:[],level:2}],u={toc:s};function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"optional-chaining-and-the-try-operator"},"Optional Chaining and the Try operator"),(0,o.kt)("p",null,"I want to have them all: optional-chaining, unwrap and try operators.\n",(0,o.kt)("strong",{parentName:"p"},"Rust")," includes the try operator ",(0,o.kt)("inlineCode",{parentName:"p"},"?")," which is transformed into construction with ",(0,o.kt)("inlineCode",{parentName:"p"},"return"),' on the "fail" case, though it is possible to use ',(0,o.kt)("inlineCode",{parentName:"p"},"and_then")," as an alternative to JS/C# ",(0,o.kt)("inlineCode",{parentName:"p"},"?.")," operator (optional chaining).\nThe other thing is that ",(0,o.kt)("em",{parentName:"p"},"Jacy")," does not have the same syntax for macros as ",(0,o.kt)("strong",{parentName:"p"},"Rust")," because ",(0,o.kt)("inlineCode",{parentName:"p"},"!"),' is reserved as postfix "unwrap" operator, thus expression like ',(0,o.kt)("inlineCode",{parentName:"p"},"foo!(...)")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"std::ops::Unwrap(foo)(...)")," but not ",(0,o.kt)("inlineCode",{parentName:"p"},"foo!(...)")," macro call.\nBy the way, it is possible to both use macros syntax with ",(0,o.kt)("inlineCode",{parentName:"p"},"!")," and have ",(0,o.kt)("inlineCode",{parentName:"p"},"!")," as postfix operator -- store macros in the values namespace (i.e. name ",(0,o.kt)("inlineCode",{parentName:"p"},"foo!")," will collide with e.g. function ",(0,o.kt)("inlineCode",{parentName:"p"},"foo"),"), but I don't like this solution."),(0,o.kt)("p",null,"The other problem is that if we have ",(0,o.kt)("inlineCode",{parentName:"p"},"?"),' as optional chaining, how do we use the "try" operator? (',(0,o.kt)("inlineCode",{parentName:"p"},"?")," in ",(0,o.kt)("strong",{parentName:"p"},"Rust"),")."),(0,o.kt)("h2",{id:"initials"},"Initials"),(0,o.kt)("p",null,"I'd like to describe all the possible operators/ways to implement I see."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Operator"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible usage"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"?")," operator"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional chaining / Try operator")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"?.")," distinct operator (",(0,o.kt)("inlineCode",{parentName:"td"},".")," is included in ",(0,o.kt)("inlineCode",{parentName:"td"},"?."),")"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"!")," operator"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"&.")," operator from Ruby (optional chaining, aka safe navigation)"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"??")),(0,o.kt)("td",{parentName:"tr",align:null},"I want to use it for")))))}d.isMDXComponent=!0}}]);