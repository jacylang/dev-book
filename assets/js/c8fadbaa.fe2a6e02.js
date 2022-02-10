"use strict";(self.webpackChunkdev_book=self.webpackChunkdev_book||[]).push([[9487],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25690:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={},p="The Idea",c={unversionedId:"concept/the-idea",id:"concept/the-idea",isDocsHomePage:!1,title:"The Idea",description:"Jacy is an experimental project that is aimed to have powerful features with ease of use but without an implicitness.",source:"@site/docs/concept/the-idea.md",sourceDirName:"concept",slug:"/concept/the-idea",permalink:"/dev-book/docs/concept/the-idea",editUrl:"https://github.com/jacylang/dev-book/edit/master/docs/concept/the-idea.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Goal",permalink:"/dev-book/docs/concept/goal"},next:{title:"Why affine types",permalink:"/dev-book/docs/concept/why-affine-types"}},s=[],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-idea"},"The Idea"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Jacy")," is an experimental project that is aimed to have powerful features with ease of use but without an implicitness."),(0,o.kt)("p",null,"Some main features ",(0,o.kt)("em",{parentName:"p"},"Jacy")," would have one day:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The base of functional programming (first-class monads, pattern matching,"),(0,o.kt)("p",{parentName:"li"},"etc.)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Rustish ownership system and safety")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"trait")," system")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Comprehensive type system (generics, type bounds, ",(0,o.kt)("inlineCode",{parentName:"p"},"where")," clause,"),(0,o.kt)("p",{parentName:"li"},"etc.)"))),(0,o.kt)("p",null,"All of these features are not firmly established, that's just a starting point from which the way of research will be\ndone."),(0,o.kt)("p",null,"What is the muse of ",(0,o.kt)("em",{parentName:"p"},"Jacy"),"? -- Do as much as we can on compilation-time. At first, I was inspired by modern languages\nthat became fairly popular -- Kotlin/Swift, etc. Anyway, the reason for their popularity is that their purpose is to\nmodernize old technologies, Kotlin for Java, Swift for Objective-C. I fell into a stupor, I didn't want to solve\nproblems of old languages, I wanted to make something new and solid."),(0,o.kt)("p",null,"Also, I want to describe some kind of Zen, I need a list of common values that ",(0,o.kt)("em",{parentName:"p"},"Jacy")," should have in my opinion:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Convenience is more important than anything else, except the cases when convenience violates any other rule."),(0,o.kt)("li",{parentName:"ol"},"Everything that can be explicit -- must be explicit."),(0,o.kt)("li",{parentName:"ol"},"Safety, safety, and safety, but it is important as far as there's no lack of convenience."),(0,o.kt)("li",{parentName:"ol"},"Sometimes we just prototype something and want to write code with the speed of speaking. So every feature in ",(0,o.kt)("em",{parentName:"li"},"Jacy"),"\nshould be review from the side of coding speed and ease."),(0,o.kt)("li",{parentName:"ol"},"If we can help a user with avoiding mistakes -- we help him.")))}m.isMDXComponent=!0}}]);