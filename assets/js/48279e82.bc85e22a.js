"use strict";(self.webpackChunkdev_book=self.webpackChunkdev_book||[]).push([[3753],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9810:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],c={},s="Arguments labels",l={unversionedId:"ideas/named-arg-alias",id:"ideas/named-arg-alias",isDocsHomePage:!1,title:"Arguments labels",description:"The idea",source:"@site/docs/ideas/named-arg-alias.md",sourceDirName:"ideas",slug:"/ideas/named-arg-alias",permalink:"/dev-book/docs/ideas/named-arg-alias",editUrl:"https://github.com/jacylang/dev-book/edit/master/docs/ideas/named-arg-alias.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Inline match",permalink:"/dev-book/docs/ideas/inline-match"},next:{title:"Types as first-class citizens",permalink:"/dev-book/docs/ideas/types-as-first-class-citizens"}},u=[{value:"The idea",id:"the-idea",children:[],level:2}],p={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"arguments-labels"},"Arguments labels"),(0,o.kt)("h2",{id:"the-idea"},"The idea"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jc"},'func printName(name: str) {\n    print(name);\n}\n\nfunc main {\n    let name = "Kek";\n    foo(:name);\n}\n')))}d.isMDXComponent=!0}}]);