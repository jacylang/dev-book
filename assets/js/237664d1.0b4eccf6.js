"use strict";(self.webpackChunkdev_book=self.webpackChunkdev_book||[]).push([[4829],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35868:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],p={},c="Intro",s={unversionedId:"appendices/spec/intro",id:"appendices/spec/intro",isDocsHomePage:!1,title:"Intro",description:'Jacy, being WIP is updating everyday, and that\'s okay, but problem is that the main question is not answered yet: "What am I doing?".',source:"@site/docs/appendices/spec/intro.md",sourceDirName:"appendices/spec",slug:"/appendices/spec/intro",permalink:"/dev-book/docs/appendices/spec/intro",editUrl:"https://github.com/jacylang/dev-book/edit/master/docs/appendices/spec/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Spec",permalink:"/dev-book/docs/appendices/spec/index"},next:{title:"Specification",permalink:"/dev-book/docs/jon/spec"}},u=[{value:"What am I doing?",id:"what-am-i-doing",children:[],level:2},{value:"Ownership",id:"ownership",children:[{value:"Can we get rid of multiple function types?",id:"can-we-get-rid-of-multiple-function-types",children:[{value:"1. Is it possible to remove function pointer type?",id:"1-is-it-possible-to-remove-function-pointer-type",children:[],level:4}],level:3}],level:2}],l={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"intro"},"Intro"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Jacy"),', being WIP is updating everyday, and that\'s okay, but problem is that the main question is not answered yet: "What am I doing?".\nActually, I consider this as the most important question about ',(0,i.kt)("em",{parentName:"p"},"Jacy"),", as far as concepts growing from it affect everything starting from syntax and ending with code generation."),(0,i.kt)("h2",{id:"what-am-i-doing"},"What am I doing?"),(0,i.kt)("p",null,"I'm not sure if it is possible to call ",(0,i.kt)("em",{parentName:"p"},"Jacy"),' an experimental and even research project how I would like to see it.\nThe nearest characteristic is "DIY Project" \ud83d\ude10\ndoes not matter, anyway, I\'ve got my own opinion and view, thus I need to step away from Rust, not just because I want ',(0,i.kt)("em",{parentName:"p"},"Jacy"),' to be "special" and differ from Rust, but because I cannot inherit mostly everything from one language not knowing what I want to achieve.'),(0,i.kt)("h2",{id:"ownership"},"Ownership"),(0,i.kt)("p",null,"Everything is move by default, same as in Rust, and copy-types rule is applied too, of course."),(0,i.kt)("h3",{id:"can-we-get-rid-of-multiple-function-types"},"Can we get rid of multiple function types?"),(0,i.kt)("p",null,"Rust has: function pointer types, ",(0,i.kt)("inlineCode",{parentName:"p"},"Fn"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"FnMut")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"FnOnce"),"."),(0,i.kt)("h4",{id:"1-is-it-possible-to-remove-function-pointer-type"},"1. Is it possible to remove function pointer type?"),(0,i.kt)("p",null,"The answer is in what function pointer is -- it is pointer to function item, i.e."))}d.isMDXComponent=!0}}]);