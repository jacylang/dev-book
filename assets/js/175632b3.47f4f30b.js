"use strict";(self.webpackChunkdev_book=self.webpackChunkdev_book||[]).push([[1022],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7986:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={},s="Module-Tree building",d={unversionedId:"compiler-workflow/name-res-stage/module-tree-building",id:"compiler-workflow/name-res-stage/module-tree-building",isDocsHomePage:!1,title:"Module-Tree building",description:"Let's look at the code sample.",source:"@site/docs/compiler-workflow/name-res-stage/module-tree-building.md",sourceDirName:"compiler-workflow/name-res-stage",slug:"/compiler-workflow/name-res-stage/module-tree-building",permalink:"/dev-book/docs/compiler-workflow/name-res-stage/module-tree-building",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/compiler-workflow/name-res-stage/module-tree-building.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Names & Imports",permalink:"/dev-book/docs/compiler-workflow/name-res-stage/index"},next:{title:"Name resolution",permalink:"/dev-book/docs/compiler-workflow/name-res-stage/name-resolution"}},c=[{value:"Involved Data Structures and Types",id:"involved-data-structures-and-types",children:[],level:2},{value:"Module-Tree usage",id:"module-tree-usage",children:[],level:2}],u={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"module-tree-building"},"Module-Tree building"),(0,i.kt)("p",null,"Let's look at the code sample."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jc"},"func main {\n    let var: a::A = 123;\n}\n\nmod a {\n    type A = b::B;\n}\n\nmod b {\n    type B = i32;\n}\n")),(0,i.kt)("p",null,"This is a valid code in ",(0,i.kt)("em",{parentName:"p"},"Jacy"),", and as you can see here we use items before they actually appear in the code. To make it\npossible name resolution goes in two stages, the first one is Module-Tree Building."),(0,i.kt)("p",null,"What is a module? Don't confuse it with ",(0,i.kt)("inlineCode",{parentName:"p"},"mod"),", a module is a wider concept that includes: ",(0,i.kt)("inlineCode",{parentName:"p"},"mod"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"trait"),", block\n(including block expression or ",(0,i.kt)("inlineCode",{parentName:"p"},"func")," body enclosed into ",(0,i.kt)("inlineCode",{parentName:"p"},"{}"),") or ",(0,i.kt)("inlineCode",{parentName:"p"},"enum"),"."),(0,i.kt)("p",null,"What exactly happens at this stage? - We go through the whole AST and define each item in each block (we don't actually\nresolve anything). All kinds of items (",(0,i.kt)("inlineCode",{parentName:"p"},"type")," alias, ",(0,i.kt)("inlineCode",{parentName:"p"},"func")," or whatever else except ",(0,i.kt)("inlineCode",{parentName:"p"},"let"),"s) are forwardly declared, this\nallows us to, for example, use function before it actually occurs in the code and what is more important -- we can\naccess nested items from current currently compiled scope."),(0,i.kt)("h2",{id:"involved-data-structures-and-types"},"Involved Data Structures and Types"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DefStorage")," - Interface for definitions which presented in the form of index vector (vector where an offset is an identifier for some data) of ",(0,i.kt)("inlineCode",{parentName:"li"},"Def"),"s"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Def")," - Definition structure with specific kind (",(0,i.kt)("inlineCode",{parentName:"li"},"Func"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Enum"),", etc.) common for all namespaces (e.g. types and items\nare all ",(0,i.kt)("inlineCode",{parentName:"li"},"Def")," but with different kinds), points to the name ",(0,i.kt)("inlineCode",{parentName:"li"},"nodeId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"def_id")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"Def")," identifier, numeric offset in ",(0,i.kt)("inlineCode",{parentName:"li"},"DefStorage")," definitions collection"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Module")," - Actually a scope with different namespaces (type, value, lifetime), where each namespace is a map of\n",(0,i.kt)("inlineCode",{parentName:"li"},"string -> def_id"),". Also contains a map of children and anonymous blocks, child is a named submodule (e.g. a ",(0,i.kt)("inlineCode",{parentName:"li"},"func"),"\ninside ",(0,i.kt)("inlineCode",{parentName:"li"},"mod"),") and an anonymous block is either a block expression or function body.")),(0,i.kt)("h2",{id:"module-tree-usage"},"Module-Tree usage"),(0,i.kt)("p",null,"You can think about the module tree as about directory structure in the computer filesystem -- module is like a\ndirectory and definitions are files. This analogy is also good to grasp how paths (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"a::b::c"),") are resolved. The\nstart point is the root module, that is, a module containing full Party definitions, when we see a path in the code we\nprocess it as a relative path, e.g. if we are inside ",(0,i.kt)("inlineCode",{parentName:"p"},"mod a")," which contains ",(0,i.kt)("inlineCode",{parentName:"p"},"mod b")," then we resolve the path\n",(0,i.kt)("inlineCode",{parentName:"p"},"b::something")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"a::b::something"),". Anyway, it is possible to qualify an absolute path (relative to the Party root)\nwith ",(0,i.kt)("inlineCode",{parentName:"p"},"::")," prefix, in this case, we'll resolve it starting from the root module but not from the current."))}p.isMDXComponent=!0}}]);