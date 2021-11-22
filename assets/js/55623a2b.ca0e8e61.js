"use strict";(self.webpackChunkdev_book=self.webpackChunkdev_book||[]).push([[9885],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84816:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={},s="Function types & names",u={unversionedId:"particles/function-type-&-names",id:"particles/function-type-&-names",isDocsHomePage:!1,title:"Function types & names",description:"This particle is mostly about the name resolution but also affects the type system.",source:"@site/docs/particles/function-type-&-names.md",sourceDirName:"particles",slug:"/particles/function-type-&-names",permalink:"/dev-book/docs/particles/function-type-&-names",editUrl:"https://github.com/jacylang/dev-book/edit/master/docs/particles/function-type-&-names.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom Operators",permalink:"/dev-book/docs/particles/custom-operators"},next:{title:"Particles",permalink:"/dev-book/docs/particles/index"}},p=[{value:"Named arguments",id:"named-arguments",children:[{value:"Require labels",id:"require-labels",children:[],level:3}],level:2},{value:"Label function overloading",id:"label-function-overloading",children:[{value:"Examples of errors",id:"examples-of-errors",children:[{value:"#1. Ambiguous invocation",id:"1-ambiguous-invocation",children:[],level:4}],level:3}],level:2}],c={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"function-types--names"},"Function types & names"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This particle is mostly about the name resolution but also affects the type system.\nStuff discussed here grows from the idea of the function named arguments")),(0,r.kt)("h2",{id:"named-arguments"},"Named arguments"),(0,r.kt)("p",null,"Let's begin with what named arguments are."),(0,r.kt)("p",null,"In Swift parameter labels is a really important concept: labels are required by default and much of internal logic is dependent on labels (function overloading, name resolution, etc)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"func NAME((LABEL | _)? PARAM_NAME: TYPE)\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LABEL")," is optional, and if no label is given -- ",(0,r.kt)("inlineCode",{parentName:"p"},"PARAM_NAME")," becomes a label name, as a shortcut ",(0,r.kt)("inlineCode",{parentName:"p"},"PARAM_NAME: TYPE")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"PARAM_NAME PARAM_NAME: TYPE"),".\nTo disallow passing argument as named we need to place ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," instead of a label, then parameter becomes positional."),(0,r.kt)("h3",{id:"require-labels"},"Require labels"),(0,r.kt)("p",null,"Swift by default requires a parameter label, and what if we invert this logic?\nFor example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jc"},"func foo(label! paramName: Type)\n")),(0,r.kt)("p",null,"Here, we annotate ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"!")," to say that the user must pass a parameter with a label, otherwise, it would be an error."),(0,r.kt)("p",null,"The shortcut variant would look like that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jc"},"func foo(paramName!: Type)\n")),(0,r.kt)("p",null,"Here, the parameter name is ",(0,r.kt)("inlineCode",{parentName:"p"},"paramName")," and the label is ",(0,r.kt)("inlineCode",{parentName:"p"},"paramName")," too, also it is required."),(0,r.kt)("h2",{id:"label-function-overloading"},"Label function overloading"),(0,r.kt)("p",null,"Thanks to Swift for the idea of overloading without type checking.\nSwift supports overloading by parameter labels, e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"func do(with: Int)\nfunc do(from: Int)\n")),(0,r.kt)("p",null,"Why this is a really cool feature:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We don't need to know the types"),(0,r.kt)("li",{parentName:"ul"},"We can have the same types but depend on label names."),(0,r.kt)("li",{parentName:"ul"},"Overloading's are resolved at the name resolution stage and don't require type check")),(0,r.kt)("p",null,"Anyway, there're some cons from the view of additional complexity in the compiler."),(0,r.kt)("h3",{id:"examples-of-errors"},"Examples of errors"),(0,r.kt)("h4",{id:"1-ambiguous-invocation"},"#1. Ambiguous invocation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jc"},"func doSmth(with: int);\nfunc doSmth(from: int);\n\nfunc main {\n    // Error: Call to `doSmth` is ambiguous -- add argument label `with` or `from`\n    doSmth(123);\n}\n")),(0,r.kt)("p",null,"The solution to disambiguate this case is the same as in Swift."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Function types do not have labels"),(0,r.kt)("li",{parentName:"ol"},"Labels are used only for function overloading resolution (in name resolution) and nowhere else")),(0,r.kt)("p",null,"We cannot store some function in a variable with type ",(0,r.kt)("inlineCode",{parentName:"p"},"(foo: T, bar: U) -> V"),", it would be ",(0,r.kt)("inlineCode",{parentName:"p"},"(T, U) -> V"),", thus when a function is assigned to a variable (or passed to function), that is, stored somewhere, it does not have labels.\nSumming up, parameter labels are just name-resolution level overloading and markers for calls, nothing more.\nAnyway, to disambiguate the case present above we need some mechanism to say that we're gonna use the specific ",(0,r.kt)("inlineCode",{parentName:"p"},"doSmth")," function. It is done with Swift-like syntax ",(0,r.kt)("inlineCode",{parentName:"p"},"functionName(label1:label2:...)"),", that is, we don't call function but resolve its overloading."),(0,r.kt)("p",null,"So, it looks such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jc"},"func doSmth(with: int);\nfunc doSmth(from: int);\n\nfunc main {\n    // Error: Call to `doSmth` is ambiguous -- add argument label `with` or `from`\n    doSmth(with:)(123);\n}\n")),(0,r.kt)("p",null,"I need to note that type of ",(0,r.kt)("inlineCode",{parentName:"p"},"doSmth(with:)")," is not ",(0,r.kt)("inlineCode",{parentName:"p"},"(with: int) -> ()"),", just a ",(0,r.kt)("inlineCode",{parentName:"p"},"(int) -> ()"),".\nSo, names have gone and cannot be used after."),(0,r.kt)("p",null,"Anyway, parameter names in function types are allowed, but they just markers for user and do not affect real function type. That is to say, parameter names in types are used for documentation purposes."))}m.isMDXComponent=!0}}]);