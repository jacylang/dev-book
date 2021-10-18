"use strict";(self.webpackChunkdev_book=self.webpackChunkdev_book||[]).push([[5233],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6869:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={},p="Structural/Nominal typing",s={unversionedId:"compiler-workflow/type-system/structural-nominal-typing",id:"compiler-workflow/type-system/structural-nominal-typing",isDocsHomePage:!1,title:"Structural/Nominal typing",description:"I wanna both:",source:"@site/docs/compiler-workflow/type-system/structural-nominal-typing.md",sourceDirName:"compiler-workflow/type-system",slug:"/compiler-workflow/type-system/structural-nominal-typing",permalink:"/dev-book/docs/compiler-workflow/type-system/structural-nominal-typing",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/compiler-workflow/type-system/structural-nominal-typing.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Type System",permalink:"/dev-book/docs/compiler-workflow/type-system/index"},next:{title:"Goal",permalink:"/dev-book/docs/concept/goal"}},u=[{value:"Problems",id:"problems",children:[{value:"Structurally typed records",id:"structurally-typed-records",children:[{value:"Solutions",id:"solutions",children:[{value:"#1 I don&#39;t like this one anyway",id:"1-i-dont-like-this-one-anyway",children:[],level:5},{value:"#2",id:"2",children:[],level:5},{value:"#3",id:"3",children:[{value:"#4",id:"4",children:[],level:6}],level:5}],level:4}],level:3}],level:2}],m={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"structuralnominal-typing"},"Structural/Nominal typing"),(0,l.kt)("p",null,"I wanna both:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Structurally typed records (aka ",(0,l.kt)("inlineCode",{parentName:"li"},"record")," or named-tuple)"),(0,l.kt)("li",{parentName:"ul"},"Nominally typed records (aka ",(0,l.kt)("inlineCode",{parentName:"li"},"struct"),")"),(0,l.kt)("li",{parentName:"ul"},"Structurally typed tuples (raw tuples)"),(0,l.kt)("li",{parentName:"ul"},"Nominally typed tuples (aka rustish tuple-structs)")),(0,l.kt)("h2",{id:"problems"},"Problems"),(0,l.kt)("h3",{id:"structurally-typed-records"},"Structurally typed records"),(0,l.kt)("p",null,"I consider using ",(0,l.kt)("inlineCode",{parentName:"p"},"()")," for tuples and ",(0,l.kt)("inlineCode",{parentName:"p"},"{}")," for structs. Anyway, there are some problems, as far as we've got\nblock-expression. ",(0,l.kt)("inlineCode",{parentName:"p"},"{}")," can be either a block-expression, either struct literal. This is why struct-literal is always\nnominal: ",(0,l.kt)("inlineCode",{parentName:"p"},"path::to::Struct {...}"),"."),(0,l.kt)("p",null,"Why not use ",(0,l.kt)("inlineCode",{parentName:"p"},"()")," and use named-tuples for structurally typed records? - I want to change syntax of lambda functions\n(which now use ",(0,l.kt)("inlineCode",{parentName:"p"},"|params...| expression")," syntax) to ",(0,l.kt)("inlineCode",{parentName:"p"},"(params...) -> expression"),". As far as lambda parameters can have\ntype annotation we cannot disambiguate named-tuple and lambda parameters, because in named-tuple we have ",(0,l.kt)("inlineCode",{parentName:"p"},"name:\nexpression")," but in lambda parameters ",(0,l.kt)("inlineCode",{parentName:"p"},"name: type"),"."),(0,l.kt)("h4",{id:"solutions"},"Solutions"),(0,l.kt)("h5",{id:"1-i-dont-like-this-one-anyway"},"#","1 I don't like this one anyway"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"|params...| expression")," syntax for lambda functions"),(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"(name: expression)")," syntax for named-tuples")),(0,l.kt)("h5",{id:"2"},"#2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"record {name: expression}"))),(0,l.kt)("p",null,"Why this is a bad solution:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"We reserve new keyword for mostly")),(0,l.kt)("h5",{id:"3"},"#3"),(0,l.kt)("p",null,"This is the most complex way, but it likely will allow us to save all preferred syntaxes. We improve parsing of\nexpressions enclosed into ",(0,l.kt)("inlineCode",{parentName:"p"},"()")," and save everything inside ",(0,l.kt)("inlineCode",{parentName:"p"},"()")," into some stack. Then if we see that there's a ",(0,l.kt)("inlineCode",{parentName:"p"},"->")," after\n",(0,l.kt)("inlineCode",{parentName:"p"},")")," -- it is a lambda, otherwise -- it is a named-tuple. As knowing that, we can parse tokens inside ",(0,l.kt)("inlineCode",{parentName:"p"},"()")," considering\n",(0,l.kt)("inlineCode",{parentName:"p"},"something")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"(name: something)")," to be either an expression either type."),(0,l.kt)("p",null,"Example."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jc"},"let a = (name: 123)\nlet b = (param: i32) -> param + 1\n")),(0,l.kt)("p",null,"When we parse ",(0,l.kt)("inlineCode",{parentName:"p"},"a"),"'s and ",(0,l.kt)("inlineCode",{parentName:"p"},"b"),"'s assigned expressions we see ",(0,l.kt)("inlineCode",{parentName:"p"},"("),", then collect all tokens until we find ",(0,l.kt)("inlineCode",{parentName:"p"},")")," and if we found\n",(0,l.kt)("inlineCode",{parentName:"p"},"->")," after ",(0,l.kt)("inlineCode",{parentName:"p"},")")," -- we parse these tokens as lambda parameters (",(0,l.kt)("inlineCode",{parentName:"p"},"b")," case), if there isn't ",(0,l.kt)("inlineCode",{parentName:"p"},"->")," after ",(0,l.kt)("inlineCode",{parentName:"p"},")")," -- we parse\ntokens as named-tuple (",(0,l.kt)("inlineCode",{parentName:"p"},"a")," case)."),(0,l.kt)("h6",{id:"4"},"#4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Do not have structurally typed records at all")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"I think this solution wins, why?"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"We won't have additional confusing syntax")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"We don't implement something we would rarely use (tuples are more"),(0,l.kt)("p",{parentName:"li"},"convenient than named-tuples in most cases)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Structurally typed records are not really useful (we cannot add"),(0,l.kt)("p",{parentName:"li"},"implementations for them, so in every complex case we would prefer"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"struct"),")")))))}c.isMDXComponent=!0}}]);