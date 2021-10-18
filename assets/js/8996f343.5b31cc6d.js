"use strict";(self.webpackChunkdev_book=self.webpackChunkdev_book||[]).push([[5247],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9802:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={},l="CTE Expressions",c={unversionedId:"particles/compile-time-evaluation/cte-expressions",id:"particles/compile-time-evaluation/cte-expressions",isDocsHomePage:!1,title:"CTE Expressions",description:"Compile-Time Evaluable Expressions (CTEE further) syntactically are the same as raw expressions (run-time). It means",source:"@site/docs/particles/compile-time-evaluation/cte-expressions.md",sourceDirName:"particles/compile-time-evaluation",slug:"/particles/compile-time-evaluation/cte-expressions",permalink:"/dev-book/docs/particles/compile-time-evaluation/cte-expressions",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/particles/compile-time-evaluation/cte-expressions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CTE Contexts",permalink:"/dev-book/docs/particles/compile-time-evaluation/cte-contexts"},next:{title:"CTE Functions",permalink:"/dev-book/docs/particles/compile-time-evaluation/cte-functions"}},u=[{value:"CTEE Rules",id:"ctee-rules",children:[],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cte-expressions"},"CTE Expressions"),(0,i.kt)("p",null,"Compile-Time Evaluable Expressions (CTEE further) syntactically are the same as raw expressions (run-time). It means\nthat when you look at some complex expression in the code you cannot always be sure that it is CTEE, but you always can\nfind if it is by yourself. To do that you need to check that every CTEE rule followed -- this is what the compiler does."),(0,i.kt)("h2",{id:"ctee-rules"},"CTEE Rules"),(0,i.kt)("p",null,"Expression is CTEE if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It is a literal (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"123.45"),", ",(0,i.kt)("inlineCode",{parentName:"li"},'"Hello, Jacy"'),", etc.)"),(0,i.kt)("li",{parentName:"ul"},"It is a struct whose fields are all CTEE types"),(0,i.kt)("li",{parentName:"ul"},"It is an enum whose variants are all CTEE types"),(0,i.kt)("li",{parentName:"ul"},"It is a result of ",(0,i.kt)("inlineCode",{parentName:"li"},"const func"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"More on CTE structures and enums in next chapters")))}m.isMDXComponent=!0}}]);