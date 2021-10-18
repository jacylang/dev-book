"use strict";(self.webpackChunkdev_book=self.webpackChunkdev_book||[]).push([[1562],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return p}});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),g=c(r),p=s,m=g["".concat(i,".").concat(p)]||g[p]||d[p]||o;return r?n.createElement(m,u(u({ref:t},l),{},{components:r})):n.createElement(m,u({ref:t},l))}));function p(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,u=new Array(o);u[0]=g;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:s,u[1]=a;for(var c=2;c<o;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7008:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return g}});var n=r(7462),s=r(3366),o=(r(7294),r(3905)),u=["components"],a={},i="Suggestions structure",c={unversionedId:"code-docs/messages/structure",id:"code-docs/messages/structure",isDocsHomePage:!1,title:"Suggestions structure",description:"Here, I'm going to describe what kinds of suggestions (should) exist and how they are structured.",source:"@site/docs/code-docs/messages/structure.md",sourceDirName:"code-docs/messages",slug:"/code-docs/messages/structure",permalink:"/dev-book/docs/code-docs/messages/structure",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/code-docs/messages/structure.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Suggestion System",permalink:"/dev-book/docs/code-docs/messages/index"},next:{title:"Syntax Highlighting",permalink:"/dev-book/docs/code-docs/messages/syntax-highlighting"}},l=[{value:"Suggestions update",id:"suggestions-update",children:[],level:2},{value:"The structure",id:"the-structure",children:[],level:2}],d={toc:l};function g(e){var t=e.components,r=(0,s.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"suggestions-structure"},"Suggestions structure"),(0,o.kt)("p",null,"Here, I'm going to describe what kinds of suggestions (should) exist and how they are structured."),(0,o.kt)("h2",{id:"suggestions-update"},"Suggestions update"),(0,o.kt)("p",null,'Currently (29.09.2021), suggestion system is pretty powerful for WIP language, however not that ideal and extensible -- all suggestions are structured in the same way, and the only additional feature is the "hint" messages support.'),(0,o.kt)("p",null,"What I want:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Header message, i.e. the actual "error/warning" message, the most essential part'),(0,o.kt)("li",{parentName:"ul"},"Span highlighting styles")),(0,o.kt)("h2",{id:"the-structure"},"The structure"),(0,o.kt)("p",null,"Each suggestion must have a base, i.e. the main message and span (currently required and likely non-spanned suggestions will be implemented differently).\nEach suggestion can have any count of children."))}g.isMDXComponent=!0}}]);