"use strict";(self.webpackChunkdev_book=self.webpackChunkdev_book||[]).push([[4379],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8873:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={},l="Invert Rust",u={unversionedId:"appendices/backlog/invert-rust-v2",id:"appendices/backlog/invert-rust-v2",isDocsHomePage:!1,title:"Invert Rust",description:'This (new version of old "Invert Rust") idea is also DEPRECATED, because it cannot live without GC \ud83d\ude2d',source:"@site/docs/appendices/backlog/invert-rust-v2.md",sourceDirName:"appendices/backlog",slug:"/appendices/backlog/invert-rust-v2",permalink:"/dev-book/docs/appendices/backlog/invert-rust-v2",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/appendices/backlog/invert-rust-v2.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Backlog",permalink:"/dev-book/docs/appendices/backlog/index"},next:{title:"Invert Rust for usability",permalink:"/dev-book/docs/appendices/backlog/invert-rust"}},p=[{value:"This (new version of old &quot;Invert Rust&quot;) idea is also DEPRECATED, because it cannot live without GC \ud83d\ude2d",id:"this-new-version-of-old-invert-rust-idea-is-also-deprecated-because-it-cannot-live-without-gc-",children:[{value:"Disclaimer",id:"disclaimer",children:[{value:"The concept",id:"the-concept",children:[],level:4}],level:3},{value:"First things first",id:"first-things-first",children:[{value:"Let&#39;s look at Rust",id:"lets-look-at-rust",children:[],level:4},{value:"The key",id:"the-key",children:[{value:"What we&#39;re unable to do",id:"what-were-unable-to-do",children:[],level:5},{value:"What problems we solve?",id:"what-problems-we-solve",children:[],level:5},{value:"What problems we produce?",id:"what-problems-we-produce",children:[],level:5}],level:4},{value:"Why is that idea deprecated?",id:"why-is-that-idea-deprecated",children:[],level:4}],level:3}],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"invert-rust"},"Invert Rust"),(0,o.kt)("h2",{id:"this-new-version-of-old-invert-rust-idea-is-also-deprecated-because-it-cannot-live-without-gc-"},'This (new version of old "Invert Rust") idea is also DEPRECATED, because it cannot live without GC \ud83d\ude2d'),(0,o.kt)("h3",{id:"disclaimer"},"Disclaimer"),(0,o.kt)("p",null,'I know that pass-by-reference is often understood wrong, as far as I know, there\'re a small count of languages which\nsupport "real" pass-by-reference (C++ sometimes), thus I\'ll try to avoid this term. Let\'s name it as what it does: "Make\na Reference and Pass the reference by Value" (',(0,o.kt)("strong",{parentName:"p"},"MRPV")," further)"),(0,o.kt)("h4",{id:"the-concept"},"The concept"),(0,o.kt)("p",null,"This idea is growing from my view on references usage, I don't have so much experience with low-level programming,\nanyway I'm almost sure that passing a reference (pointer) appears more often than moving, when we're talking about\nnon-primitive (non-copy) types."),(0,o.kt)("p",null,"There're languages like Java or, inherently, Kotlin that does not syntactically separate MRPV and raw pass-by-value, but\nboxed types are MRPV and primitives are pass-by-value. I don't want to confuse myself and, importantly, someone else\ndoing so."),(0,o.kt)("p",null,"There was the first idea, but it has many problems in the way that types unpredictably become reference-types.\nNow, I come up with a concept where everything is more clear."),(0,o.kt)("h3",{id:"first-things-first"},"First things first"),(0,o.kt)("p",null,"As ",(0,o.kt)("em",{parentName:"p"},"Jacy")," is hardly inspired by Rust, let's, at first, look at what Rust does. Rust is pass-by-move... that's all \ud83d\ude04"),(0,o.kt)("p",null,"No, question is wider and deeper. Rust is very good, pass-by-move is a nice rule that leads to straightforward code and\nsafes us from some accidents with owning. Anyway, as I claimed above -- we want reference by default. And ",(0,o.kt)("strong",{parentName:"p"},"questions"),"\nthat I need to answer are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Can it be actually done and how?"),(0,o.kt)("li",{parentName:"ul"},"Will it be consistent?"),(0,o.kt)("li",{parentName:"ul"},"Is it beautiful and so convenient that we need it?"),(0,o.kt)("li",{parentName:"ul"},"Does it cover enough low-level programming cases?")),(0,o.kt)("h4",{id:"lets-look-at-rust"},"Let's look at Rust"),(0,o.kt)("p",null,'Rust is pass by move, but what does "move" mean? ',(0,o.kt)("inlineCode",{parentName:"p"},"move")," is nothing more than ",(0,o.kt)("inlineCode",{parentName:"p"},"memcpy")," but with some static analysis that checks we don't use moved value.\nActually, assignment in Rust is always byte-by-byte copy, and ",(0,o.kt)("em",{parentName:"p"},"Jacy")," respects this, because assignment with side effects, etc. is bad."),(0,o.kt)("h4",{id:"the-key"},"The key"),(0,o.kt)("p",null,"I'm sadly describing this idea after I marked it as DEPRECATED. Why it is deprecated described below, now, let's look how it would look like."),(0,o.kt)("p",null,"Invert Rust means that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Non-copy type ",(0,o.kt)("inlineCode",{parentName:"li"},"T")," internally becomes ",(0,o.kt)("inlineCode",{parentName:"li"},"&T")),(0,o.kt)("li",{parentName:"ul"},"To make a non-ref type ",(0,o.kt)("inlineCode",{parentName:"li"},"own")," must be used -- ",(0,o.kt)("inlineCode",{parentName:"li"},"own T")),(0,o.kt)("li",{parentName:"ul"},"Copy types automatically becomes ",(0,o.kt)("inlineCode",{parentName:"li"},"own T"))),(0,o.kt)("p",null,"At first, it might be confusing or even a nice solution."),(0,o.kt)("p",null,"Let's look at examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jc"},"// We have\nfunc foo(a: str);\n// Rust has\nfunc foo(a: &str);\n\n// We have\nfunc foo(a: own String);\n// Rust have\nfunc foo(a: String);\n\n// We have\nfunc foo(a: i32);\n// Rust has\nfunc foo(a: i32);\n// As `i32` is copy type -- it automatically becomes `own i32`, so we don't need to write `own i32` ourself \n")),(0,o.kt)("p",null,"This examples show that when Rust use move -- we use ",(0,o.kt)("inlineCode",{parentName:"p"},"own"),", and when Rust use ",(0,o.kt)("inlineCode",{parentName:"p"},"&")," -- we don't annotate it as reference type, because for non-copy type, reference is default."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"own")," is kind of saying to compiler: \"it could be a reference type, but here's ",(0,o.kt)("inlineCode",{parentName:"p"},"own")," thus don't place here a reference by default\"."),(0,o.kt)("h5",{id:"what-were-unable-to-do"},"What we're unable to do"),(0,o.kt)("p",null,"This solution covers all use cases, and doesn't break Rust semantics until we don't have elision for reference types, etc.\nIf some rules becomes \"implicitly make this type ..., because it is convenient\" -- we break everything.\nThus, all semantics must be saved, but just inverted."),(0,o.kt)("h5",{id:"what-problems-we-solve"},"What problems we solve?"),(0,o.kt)("p",null,'Actually, by "problems" I mean "cover the most popular use cases to simplify writing code".'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Code becomes cleaner as we don't annotate ",(0,o.kt)("inlineCode",{parentName:"li"},"&")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"ref")," mostly everywhere"),(0,o.kt)("li",{parentName:"ul"},"We don't have strange ",(0,o.kt)("inlineCode",{parentName:"li"},"&str"),", etc.")),(0,o.kt)("h5",{id:"what-problems-we-produce"},"What problems we produce?"),(0,o.kt)("p",null,"The first one is the problem with copy-types. Above, I said that copy-types are ",(0,o.kt)("inlineCode",{parentName:"p"},"own T")," by default, sounds simple, but... How do we make a reference to copy-type?!\nIf we apply this rule -- no way, without annotating it with ",(0,o.kt)("inlineCode",{parentName:"p"},"&"),".\nAnd here we go again... Doing so, code becomes noisier, as we've got ",(0,o.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"own T")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"&T")," (",(0,o.kt)("em",{parentName:"p"},"but ",(0,o.kt)("inlineCode",{parentName:"em"},"&T")," is used just for some rare cases"),") -- disgusting \ud83e\udd22."),(0,o.kt)("p",null,'What could we do? - Remove rule "copy-type becomes ',(0,o.kt)("inlineCode",{parentName:"p"},"own T"),'", we save all the semantics.\nBut stop... Now we need to always write ',(0,o.kt)("inlineCode",{parentName:"p"},"own i32"),", etc. just not to make a ",(0,o.kt)("inlineCode",{parentName:"p"},"&i32")," by default?!! \ud83e\udd26"),(0,o.kt)("h4",{id:"why-is-that-idea-deprecated"},"Why is that idea deprecated?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Problem with copy-types, like ",(0,o.kt)("inlineCode",{parentName:"li"},"own i32")),(0,o.kt)("li",{parentName:"ul"},"Generics become ",(0,o.kt)("inlineCode",{parentName:"li"},"<own T, own T2, ...>")),(0,o.kt)("li",{parentName:"ul"},"We may be confused with ",(0,o.kt)("inlineCode",{parentName:"li"},"own")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"move"),", because ",(0,o.kt)("inlineCode",{parentName:"li"},"own")," is in-type annotation but ",(0,o.kt)("inlineCode",{parentName:"li"},"move")," is in-expression annotation")))}d.isMDXComponent=!0}}]);