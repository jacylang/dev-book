"use strict";(self.webpackChunkdev_book=self.webpackChunkdev_book||[]).push([[1094],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||c;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},41557:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(87462),o=n(63366),c=(n(67294),n(3905)),i=["components"],a={},s="Interface",l={unversionedId:"code-docs/interface",id:"code-docs/interface",isDocsHomePage:!1,title:"Interface",description:"Interface is the main class that runs each compilation stage. Also, some logic is directly placed inside the interface",source:"@site/docs/code-docs/interface.md",sourceDirName:"code-docs",slug:"/code-docs/interface",permalink:"/dev-book/docs/code-docs/interface",editUrl:"https://github.com/jacylang/dev-book/edit/master/docs/code-docs/interface.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Code Docs",permalink:"/dev-book/docs/code-docs/index"},next:{title:"interning",permalink:"/dev-book/docs/code-docs/interning"}},u=[],d={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"interface"},"Interface"),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"Interface")," is the main class that runs each compilation stage. Also, some logic is directly placed inside the interface\nbut not in stage classes, it's kinda bad but..."),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"Interface")," catches errors, that is, when something went wrong at any stage we can log debug info about the current\ncompiler state, etc."))}p.isMDXComponent=!0}}]);