"use strict";(self.webpackChunkdev_book=self.webpackChunkdev_book||[]).push([[3624],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5500:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s="Variables",c={unversionedId:"particles/syntax-decisions/variables",id:"particles/syntax-decisions/variables",isDocsHomePage:!1,title:"Variables",description:"The first idea was to use var and val, it's pretty nice, we don't have weird let and let mut like Rust, but then",source:"@site/docs/particles/syntax-decisions/variables.md",sourceDirName:"particles/syntax-decisions",slug:"/particles/syntax-decisions/variables",permalink:"/dev-book/docs/particles/syntax-decisions/variables",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/particles/syntax-decisions/variables.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Semicolons",permalink:"/dev-book/docs/particles/syntax-decisions/semicolons"},next:{title:"_Lincy_",permalink:"/dev-book/docs/Lincy/index"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"variables"},"Variables"),(0,i.kt)("p",null,"The first idea was to use ",(0,i.kt)("inlineCode",{parentName:"p"},"var")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"val"),", it's pretty nice, we don't have weird ",(0,i.kt)("inlineCode",{parentName:"p"},"let")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"let mut"),' like Rust, but then\nI thought "',(0,i.kt)("inlineCode",{parentName:"p"},"var")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"val")," are pretty confusing, they only differ in ",(0,i.kt)("inlineCode",{parentName:"p"},"r")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"l"),', not easy to read". So, I replaced\n',(0,i.kt)("inlineCode",{parentName:"p"},"val")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"let")," and it looked like the solution. Now, we have ",(0,i.kt)("inlineCode",{parentName:"p"},"let")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"let mut")," \ud83d\ude0a... Why? I forgot about\npattern-matching, Rust's solution is right because ",(0,i.kt)("inlineCode",{parentName:"p"},"let")," is not a constant var declaration, it is just a declaration of\na variable, and the variable name is a pattern in which we can set if it is a ",(0,i.kt)("inlineCode",{parentName:"p"},"mut"),"able or not. I've already reserved\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"mut")," keyword, so now we have only one keyword for variable declaration (run-time!)."),(0,i.kt)("p",null,"The syntax."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-antlr4"},"'let' pattern (':' type)? ('=' expr)?\n")),(0,i.kt)("p",null,"Anyway, I'm able to add the ",(0,i.kt)("inlineCode",{parentName:"p"},"var")," keyword and just use it as an alias for ",(0,i.kt)("inlineCode",{parentName:"p"},"let mut"),". In this way, we are not able to use\npattern, just only an identifier, so we also lose the ability of destructuring. I think it does not worth it, let's stay\nwith ",(0,i.kt)("inlineCode",{parentName:"p"},"let")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"let mut"),"."))}d.isMDXComponent=!0}}]);