"use strict";(self.webpackChunkdev_book=self.webpackChunkdev_book||[]).push([[1733],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},49902:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={sidebar_position:1,title:"Specification"},l="_JON_ Specificiation",p={unversionedId:"jon/spec",id:"jon/spec",isDocsHomePage:!1,title:"Specification",description:"JON is an alternative to JSON I've made for Jacy.",source:"@site/docs/jon/spec.md",sourceDirName:"jon",slug:"/jon/spec",permalink:"/dev-book/docs/jon/spec",editUrl:"https://github.com/jacylang/dev-book/edit/master/docs/jon/spec.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Specification"},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/dev-book/docs/appendices/spec/intro"}},s=[{value:"Why <em>JON</em>?",id:"why-jon",children:[],level:2},{value:"Grammar",id:"grammar",children:[],level:2}],u={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"jon-specificiation"},(0,o.kt)("em",{parentName:"h1"},"JON")," Specificiation"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"JON")," is an alternative to JSON I've made for ",(0,o.kt)("em",{parentName:"p"},"Jacy"),'.\nThough this page is called "Specification", better think of it as of grammar description.'),(0,o.kt)("h2",{id:"why-jon"},"Why ",(0,o.kt)("em",{parentName:"h2"},"JON"),"?"),(0,o.kt)("p",null,'Spoiler: No clear reasons, I just like create "my" things.'),(0,o.kt)("p",null,"JSON is a very popular format used mostly everywhere, so why do we need a different format?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It is more liberal than JSON but still obvious and simple"),(0,o.kt)("li",{parentName:"ul"},"It is more human friendly but not that hard as YAML"),(0,o.kt)("li",{parentName:"ul"},"It is more complex than JSON, in a good way \ud83d\ude07")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"JON")," was also made as an alternative to TOML, as ",(0,o.kt)("em",{parentName:"p"},"Jacy")," is similar to ",(0,o.kt)("strong",{parentName:"p"},"Rust")," that uses TOML.\nI really don't like TOML \ud83d\ude10."),(0,o.kt)("h2",{id:"grammar"},"Grammar"),(0,o.kt)("p",null,"Here, I'll use ANTLR4-like grammar as it is more readable than EBNF."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-antlr4"},"")))}m.isMDXComponent=!0}}]);