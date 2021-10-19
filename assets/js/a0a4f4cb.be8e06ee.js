"use strict";(self.webpackChunkdev_book=self.webpackChunkdev_book||[]).push([[4880],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),k=c(n),d=o,m=k["".concat(s,".").concat(d)]||k[d]||u[d]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8338:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return k}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={},s="Blocks",c={unversionedId:"particles/syntax-decisions/blocks",id:"particles/syntax-decisions/blocks",isDocsHomePage:!1,title:"Blocks",description:"Before the control-flow chapter, I have to establish rules about blocks, which are different from Rust's. All blocks (in",source:"@site/docs/particles/syntax-decisions/blocks.md",sourceDirName:"particles/syntax-decisions",slug:"/particles/syntax-decisions/blocks",permalink:"/dev-book/docs/particles/syntax-decisions/blocks",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/particles/syntax-decisions/blocks.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Strings",permalink:"/dev-book/docs/particles/strings"},next:{title:"Control-Flow structures",permalink:"/dev-book/docs/particles/syntax-decisions/control-flow-structures"}},p=[{value:"One-line blocks",id:"one-line-blocks",children:[],level:2},{value:"Ignoring blocks",id:"ignoring-blocks",children:[],level:2}],u={toc:p};function k(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"blocks"},"Blocks"),(0,a.kt)("p",null,"Before the control-flow chapter, I have to establish rules about blocks, which are different from Rust's. All blocks (in\ncontrol-flow) which enclosed into ",(0,a.kt)("inlineCode",{parentName:"p"},"{}")," are last-statement typed (it means that the last expression of this block is the\nvalue and type of the whole block)."),(0,a.kt)("p",null,"While Rust has rules about the absence of ",(0,a.kt)("inlineCode",{parentName:"p"},";"),", ",(0,a.kt)("em",{parentName:"p"},"Jacy")," does not have required ",(0,a.kt)("inlineCode",{parentName:"p"},";"),", so this rule cannot be applied in the\nsame way. Let's look at some examples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This block is of type ",(0,a.kt)("inlineCode",{parentName:"li"},"bool")," and has result value ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),", even though we don't use this value")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jc"},"let a = {true}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This block will produce a type error because it either has a result of type of ",(0,a.kt)("inlineCode",{parentName:"li"},"myval")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"()")," (unit type)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jc"},"let a = {if myval => myval}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This block won't produce a type error, because we don't use the result value")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jc"},"{if myval => myval}\n")),(0,a.kt)("p",null,"So, we already can establish some requirements about type analysis -- we need union types which are impossible to be\ndeclared in language, but may exist in the type system."),(0,a.kt)("h2",{id:"one-line-blocks"},"One-line blocks"),(0,a.kt)("p",null,"In this thing, ",(0,a.kt)("em",{parentName:"p"},"Jacy")," blocks differ from Rust's. I really appreciate the opportunity to declare one-line blocks without\n",(0,a.kt)("inlineCode",{parentName:"p"},"{}"),". As far as I wanna ",(0,a.kt)("em",{parentName:"p"},"Jacy")," to be consistent, and I established that syntax of ",(0,a.kt)("inlineCode",{parentName:"p"},"match")," expression arms use ",(0,a.kt)("inlineCode",{parentName:"p"},"=>"),", for\none-line blocks we use the same syntax. Let's look at the syntax."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jc"},'while true => print("kek")\n')),(0,a.kt)("p",null,"After ",(0,a.kt)("inlineCode",{parentName:"p"},"=>")," we can only place one expression, and if we put ",(0,a.kt)("inlineCode",{parentName:"p"},"{}")," compiler will give a warning because there's no need to\nput ",(0,a.kt)("inlineCode",{parentName:"p"},"{}")," after ",(0,a.kt)("inlineCode",{parentName:"p"},"=>"),". So, the syntax looks kind of like that."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-antlr4"},"block: `=>` expr | blockExpression | ';';\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{}")," blocks in control-flow behave absolutely the same way as block-expressions."),(0,a.kt)("p",null,"One important thing is that function declaration has different syntax and rules about blocks, more about that soon\nbelow."),(0,a.kt)("h2",{id:"ignoring-blocks"},"Ignoring blocks"),(0,a.kt)("p",null,"This is a feature that satisfies one definite rule from Zen -- prototyping ease. It is a pretty simple thing -- we can\nignore any block (including control-structures, ",(0,a.kt)("inlineCode",{parentName:"p"},"mod"),"s, ",(0,a.kt)("inlineCode",{parentName:"p"},"func"),"s, etc.) with ",(0,a.kt)("inlineCode",{parentName:"p"},";"),"."),(0,a.kt)("p",null,"Examples."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jc"},"if myval;\nelse doSomething()\n")),(0,a.kt)("p",null,"Of course, I couldn't leave this thing without covering the Zen rule about helping a user with mistakes, so there will\nbe a warning if you're writing code like that."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Don't confuse block-ignorance with trait method signatures, in case of traits it is not ignorance.")))}k.isMDXComponent=!0}}]);