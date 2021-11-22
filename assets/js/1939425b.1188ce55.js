"use strict";(self.webpackChunkdev_book=self.webpackChunkdev_book||[]).push([[6724],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},87204:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={},p="Range Operators",l={unversionedId:"particles/syntax-decisions/range-operators",id:"particles/syntax-decisions/range-operators",isDocsHomePage:!1,title:"Range Operators",description:"Here, I'm going to explain why .. and ..= operators were chosen as range operators instead of other variants.",source:"@site/docs/particles/syntax-decisions/range-operators.md",sourceDirName:"particles/syntax-decisions",slug:"/particles/syntax-decisions/range-operators",permalink:"/dev-book/docs/particles/syntax-decisions/range-operators",editUrl:"https://github.com/jacylang/dev-book/edit/master/docs/particles/syntax-decisions/range-operators.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lambdas syntax",permalink:"/dev-book/docs/particles/syntax-decisions/lambdas"},next:{title:"Semicolons",permalink:"/dev-book/docs/particles/syntax-decisions/semicolons"}},c=[],u={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"range-operators"},"Range Operators"),(0,a.kt)("p",null,"Here, I'm going to explain why ",(0,a.kt)("inlineCode",{parentName:"p"},"..")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"..=")," operators were chosen as range operators instead of other variants."),(0,a.kt)("p",null,'At first, I\'d like to say that the idea of having all 4 options, i.e. range operators "from to both inclusive", "from to left exclusive", "from to right exclusive" and "from to both exclusive", considered bad options for me even though I thought it\'s could be a nice feature.'),(0,a.kt)("p",null,"The range operators I want to see are from-to-inclusive and from-to-right-exclusive, because all-inclusive option is obviously needed in many places, but from-to-right-exclusive is kind of required as it is a way to iterate over indices, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"for i in 0..size"),"."),(0,a.kt)("p",null,"Why not ",(0,a.kt)("inlineCode",{parentName:"p"},"..<")," like in Swift? - The problem is that ",(0,a.kt)("inlineCode",{parentName:"p"},"..<")," is a very popular construction and it looks awkward for me. Yes, just a personal opinion.\nWhy not ",(0,a.kt)("inlineCode",{parentName:"p"},"...")," like many other languages do? - I see ",(0,a.kt)("inlineCode",{parentName:"p"},"...")," as better option for spread operator or rest pattern (such as in ",(0,a.kt)("inlineCode",{parentName:"p"},"Struct {a, b, ...}"),"), and also it would be more familiar to JavaScript programmers."),(0,a.kt)("p",null,"This exclusions leave us with two options ",(0,a.kt)("inlineCode",{parentName:"p"},"..")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"..="),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"..")," is likely to be the most popular usage of range operators at all, thus has the simplest construction.\nThat's all."))}d.isMDXComponent=!0}}]);