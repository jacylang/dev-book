"use strict";(self.webpackChunkdev_book=self.webpackChunkdev_book||[]).push([[1200],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=r,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},37877:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],l={},c="HIR",s={unversionedId:"compiler-workflow/lowering/hir",id:"compiler-workflow/lowering/hir",isDocsHomePage:!1,title:"HIR",description:"Same as Rust (again...) Jacy has HIR - High-level Intermediate Representation. It is an IR that contains a flattened version of AST, i.e. not in the structure of the tree but a collection of mapping from some identifiers to objects.",source:"@site/docs/compiler-workflow/lowering/hir.md",sourceDirName:"compiler-workflow/lowering",slug:"/compiler-workflow/lowering/hir",permalink:"/dev-book/docs/compiler-workflow/lowering/hir",editUrl:"https://github.com/jacylang/dev-book/edit/master/docs/compiler-workflow/lowering/hir.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Name resolution",permalink:"/dev-book/docs/compiler-workflow/name-res-stage/name-resolution"},next:{title:"Lowering & HIR",permalink:"/dev-book/docs/compiler-workflow/lowering/index"}},u=[{value:"Lowering",id:"lowering",children:[],level:2}],p={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hir"},"HIR"),(0,i.kt)("p",null,"Same as Rust (again...) ",(0,i.kt)("em",{parentName:"p"},"Jacy")," has HIR - High-level Intermediate Representation. It is an IR that contains a flattened version of AST, i.e. not in the structure of the tree but a collection of mapping from some identifiers to objects.\nFor example, you cannot access a child node from the parent node directly, every node that has children only contains a list of identifiers pointing to the children nodes. This is a convenient representation for type checking, etc. because we can walk through all specific items (e.g. all function bodies) to emit some logic on them."),(0,i.kt)("p",null,"The structure of HIR might seem to be confusing at first sight view, but it is not.\nThe AST produced by the parser is flattened into the collection of maps, e.g. there's a map of all function bodies, and that's all the executable code we have. If we need to walk through all function bodies, now we don't need to descend into the AST nodes ignoring nodes that not are function bodies."),(0,i.kt)("h2",{id:"lowering"},"Lowering"),(0,i.kt)("p",null,"Lowering is a process of converting some syntactically different structures to common structures."),(0,i.kt)("p",null,"E.g. all kinds of loops are converted to a ",(0,i.kt)("inlineCode",{parentName:"p"},"loop"),' structure because every loop is considered to "do something while\nsomething". That is, the ',(0,i.kt)("inlineCode",{parentName:"p"},"for")," loop iterates over data until there're some data, same for while and ",(0,i.kt)("inlineCode",{parentName:"p"},"while let"),"."),(0,i.kt)("p",null,"By doing so, we reduce a large amount of AST nodes to some more common structures."),(0,i.kt)("p",null,"More on lowering in the next chapter..."))}f.isMDXComponent=!0}}]);