"use strict";(self.webpackChunkdev_book=self.webpackChunkdev_book||[]).push([[5417],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81336:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(87462),l=n(63366),i=(n(67294),n(3905)),o=["components"],r={},s="Control-Flow structures",p={unversionedId:"particles/syntax-decisions/control-flow-structures",id:"particles/syntax-decisions/control-flow-structures",isDocsHomePage:!1,title:"Control-Flow structures",description:"The control flow of Jacy is mostly inspired by Rust.",source:"@site/docs/particles/syntax-decisions/control-flow-structures.md",sourceDirName:"particles/syntax-decisions",slug:"/particles/syntax-decisions/control-flow-structures",permalink:"/dev-book/docs/particles/syntax-decisions/control-flow-structures",editUrl:"https://github.com/jacylang/dev-book/edit/master/docs/particles/syntax-decisions/control-flow-structures.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Blocks",permalink:"/dev-book/docs/particles/syntax-decisions/blocks"},next:{title:"Syntax Decisions",permalink:"/dev-book/docs/particles/syntax-decisions/index"}},c=[{value:"<code>if</code>/<code>if let</code>",id:"ifif-let",children:[{value:"<code>if let</code>",id:"if-let",children:[],level:3}],level:2},{value:"<code>while</code>/<code>while let</code>",id:"whilewhile-let",children:[{value:"<code>while</code>/<code>while let</code> are expressions",id:"whilewhile-let-are-expressions",children:[],level:3}],level:2},{value:"<code>for</code> loop",id:"for-loop",children:[],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"control-flow-structures"},"Control-Flow structures"),(0,i.kt)("p",null,"The control flow of ",(0,i.kt)("em",{parentName:"p"},"Jacy")," is mostly inspired by Rust."),(0,i.kt)("p",null,"We've got ",(0,i.kt)("inlineCode",{parentName:"p"},"if"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"if let")," as an expression, ",(0,i.kt)("inlineCode",{parentName:"p"},"loop")," as an expression, ",(0,i.kt)("inlineCode",{parentName:"p"},"while"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"while let")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"for"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"while"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"while let")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," are statements, because:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Why we need to use them as expressions if they return ",(0,i.kt)("inlineCode",{parentName:"li"},"()")," (unit)"),(0,i.kt)("li",{parentName:"ul"},"I'm trying to solve the problem above, and it will be solved they'll become expression which returns an any-type value"),(0,i.kt)("li",{parentName:"ul"},"If I made them expressions then it would break backward compatibility:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You could put them in expression place, but they returned ",(0,i.kt)("inlineCode",{parentName:"li"},"()"),", and in the new version, they started returning some\nnon-",(0,i.kt)("inlineCode",{parentName:"li"},"()")," value")))),(0,i.kt)("h2",{id:"ifif-let"},(0,i.kt)("inlineCode",{parentName:"h2"},"if"),"/",(0,i.kt)("inlineCode",{parentName:"h2"},"if let")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"if")," is an expression, works the same as in other languages, here's nothing to say about except that I need to note that\n",(0,i.kt)("em",{parentName:"p"},"Jacy")," does not support implicit ",(0,i.kt)("inlineCode",{parentName:"p"},"bool")," conversion even through operator overloading like C++ does."),(0,i.kt)("h3",{id:"if-let"},(0,i.kt)("inlineCode",{parentName:"h3"},"if let")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"if let")," is a way to check if some value matches a specific pattern. Also, as this is a pattern matching we able to\ndestruct our value."),(0,i.kt)("p",null,"Syntax is following."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-antlr4"},"ifLetExpression: 'if let' pattern '=' expr block\n")),(0,i.kt)("h2",{id:"whilewhile-let"},(0,i.kt)("inlineCode",{parentName:"h2"},"while"),"/",(0,i.kt)("inlineCode",{parentName:"h2"},"while let")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"while")," is a statement that works the same as ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," in other c-like languages"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"while let")," is the same as ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," except that its condition behaves like ",(0,i.kt)("inlineCode",{parentName:"p"},"if let"),"."),(0,i.kt)("h3",{id:"whilewhile-let-are-expressions"},(0,i.kt)("inlineCode",{parentName:"h3"},"while"),"/",(0,i.kt)("inlineCode",{parentName:"h3"},"while let")," are expressions"),(0,i.kt)("p",null,"Here are some thoughts about possible solutions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jc"},"while myval {\n    // Do something if `myval` is true\n} else {\n    // Do something if `myval` is false (at first)\n}\n")),(0,i.kt)("p",null,"It is an obvious solution, but has some problems:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"As far as ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," can return some value it must explicitly ",(0,i.kt)("inlineCode",{parentName:"p"},"break")," with value. We cannot just use the last statement\nof the ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," block as the result value, because ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," is possibly multiple-times iterable.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If we don't ",(0,i.kt)("inlineCode",{parentName:"p"},"break")," with value, then what would be the result? - It cannot be simply written in asm-like code with\njumps, because we don't know when our ",(0,i.kt)("inlineCode",{parentName:"p"},"while"),' "does not break".'))),(0,i.kt)("p",null,"Problem example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jc"},"let a = while myval {\n    if somethingElse => break true\n} else {\n    false\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What is the type of this ",(0,i.kt)("inlineCode",{parentName:"li"},"while")," expression? - ",(0,i.kt)("inlineCode",{parentName:"li"},"bool | ()"),", but we don't support inferred union types.")),(0,i.kt)("p",null,"For now, I cannot come up with any good solution, so ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," is a statement. Anyway, let's try something:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"IDEA ","#","1")," This one requires static-analysis (maybe complex)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jc"},"let a = while myval {\n    if somethingElse => break true\n    break false\n} else {\n    false\n}\n")),(0,i.kt)("p",null,"We can analyze this code and say that each ",(0,i.kt)("inlineCode",{parentName:"p"},"break"),"-value is ",(0,i.kt)("inlineCode",{parentName:"p"},"bool"),", so we allow this."),(0,i.kt)("p",null,"What about this?."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jc"},"let a = while myval {\n    if somethingElse => break true\n} else {\n    false\n}\n")),(0,i.kt)("p",null,"Each ",(0,i.kt)("inlineCode",{parentName:"p"},"break"),"-value is of type ",(0,i.kt)("inlineCode",{parentName:"p"},"bool"),", so we allow it because the alternative workflow is an infinite loop."),(0,i.kt)("p",null,"We required some static-analysis on ",(0,i.kt)("inlineCode",{parentName:"p"},"while"),", which is, as I see, is not really complex and not differs much from the\n",(0,i.kt)("inlineCode",{parentName:"p"},"if")," expression value inference. The only problem is that the use cases of ",(0,i.kt)("inlineCode",{parentName:"p"},"while-else")," are not common, especially when\nwe cover only this use case."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jc"},"let a = if myval {\n    let mut result = false\n    while myval {\n        // ...\n        if somethingElse {\n            result = true\n            break\n        }\n    }\n    return result\n} else {\n    false\n}\n")),(0,i.kt)("h2",{id:"for-loop"},(0,i.kt)("inlineCode",{parentName:"h2"},"for")," loop"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"for"),"-loop is a statement, not an expression, here, problems with making it an expression are the same as for ",(0,i.kt)("inlineCode",{parentName:"p"},"while"),"\n(read above) but even more complex. ",(0,i.kt)("inlineCode",{parentName:"p"},"for"),"-loop in ",(0,i.kt)("em",{parentName:"p"},"Jacy")," has only one syntax (",(0,i.kt)("inlineCode",{parentName:"p"},"for ... in ..."),") same as Rust, which\ncovers all usages (almost) of ",(0,i.kt)("inlineCode",{parentName:"p"},"for"),"-loop from C++."),(0,i.kt)("p",null,"The syntax is the following."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-antlr4"},"forLoop: 'for' pattern 'in' expression block\n")),(0,i.kt)("p",null,"Examples."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},"// In C++ we write\nfor (int i = 0; i < something; i++) {\n    // ...\n}\n\n```jc\n// In Jacy:\nfor i in 0..=something {\n    // ...\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},"// In C++\nfor (const auto & x : vec) {\n    // ...\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jc"},"// In Jacy\nfor x in &vec {\n    // ...\n}\n")))}m.isMDXComponent=!0}}]);