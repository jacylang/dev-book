"use strict";(self.webpackChunkdev_book=self.webpackChunkdev_book||[]).push([[7033],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),s=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=s(t),u=r,w=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return t?o.createElement(w,l(l({ref:n},c),{},{components:t})):o.createElement(w,l({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var s=2;s<i;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7012:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),l=["components"],a={},p="Lowering",s={unversionedId:"compiler-workflow/lowering/lowering",id:"compiler-workflow/lowering/lowering",isDocsHomePage:!1,title:"Lowering",description:"Lowering, i.e. IR simplifying is the process when we take one IR, remove useless information, and generalize similar units to common structures, producing the second, lowered IR.",source:"@site/docs/compiler-workflow/lowering/lowering.md",sourceDirName:"compiler-workflow/lowering",slug:"/compiler-workflow/lowering/lowering",permalink:"/dev-book/docs/compiler-workflow/lowering/lowering",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/compiler-workflow/lowering/lowering.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lowering & HIR",permalink:"/dev-book/docs/compiler-workflow/lowering/index"},next:{title:"Type System",permalink:"/dev-book/docs/compiler-workflow/type-system/index"}},c=[{value:"Transformations",id:"transformations",children:[{value:"Nodes lowered to <code>loop</code>",id:"nodes-lowered-to-loop",children:[{value:"<code>for</code> loop lowering",id:"for-loop-lowering",children:[],level:4},{value:"<code>while</code> loop lowering",id:"while-loop-lowering",children:[],level:4}],level:3}],level:2}],d={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lowering"},"Lowering"),(0,i.kt)("p",null,"Lowering, i.e. IR simplifying is the process when we take one IR, remove useless information, and generalize similar units to common structures, producing the second, lowered IR.\nA common example of lowering is AST to HIR lowering, which is done right after parsing and name resolution stages are complete. There are also other lowering modifications but they are atomic and done during more complex stages, whereas AST lowering is a separate stage."),(0,i.kt)("h2",{id:"transformations"},"Transformations"),(0,i.kt)("p",null,"During AST lowering bunch of AST nodes are removed completely and replaced with more common ones."),(0,i.kt)("h3",{id:"nodes-lowered-to-loop"},"Nodes lowered to ",(0,i.kt)("inlineCode",{parentName:"h3"},"loop")),(0,i.kt)("p",null,"In the HIR there is nothing like ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," loops -- they are replaced with ",(0,i.kt)("inlineCode",{parentName:"p"},"loop")," expression."),(0,i.kt)("h4",{id:"for-loop-lowering"},(0,i.kt)("inlineCode",{parentName:"h4"},"for")," loop lowering"),(0,i.kt)("p",null,"At first, we need to establish what the ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," loop can do in ",(0,i.kt)("em",{parentName:"p"},"Jacy"),". No C-like ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," loop exists and the only one construction is using iterator. C-like loops iterating over integer values are covered with iteration over ranges."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jc"},"for i in 0..100 {\n    print(i);\n}\n")),(0,i.kt)("p",null,"Let's disassemble this loop into instructions that are done implicitly.\n",(0,i.kt)("inlineCode",{parentName:"p"},"for")," loop accepts the expression of a type that implements the ",(0,i.kt)("inlineCode",{parentName:"p"},"Iterator")," trait. In this case, it is an integer range from ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"100")," exclusively. So, at first, we need to get an iterator of ",(0,i.kt)("inlineCode",{parentName:"p"},"0..100"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jc"},"let mut iter = (0..100).intoIter();\n")),(0,i.kt)("p",null,"Here, the compiler uses ",(0,i.kt)("inlineCode",{parentName:"p"},"intoIter")," because ",(0,i.kt)("inlineCode",{parentName:"p"},"0..100")," is moved into the ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," loop, not borrowed."),(0,i.kt)("p",null,"Then we need to go through all values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jc"},"let mut iter = (0..100).intoIter();\n\n// Added\nwhile let Some(i) = iter.next() {\n    print(i);\n}\n")),(0,i.kt)("p",null,"Here we use ",(0,i.kt)("inlineCode",{parentName:"p"},"while let"),' which is a high-level syntactic sugar that is in fact "while the pattern on the left side matches the value on the right side do ...". ',(0,i.kt)("inlineCode",{parentName:"p"},"while let")," loop is also lowered, read further for more information.\n",(0,i.kt)("inlineCode",{parentName:"p"},"iter.next")," (",(0,i.kt)("inlineCode",{parentName:"p"},"Iterator::next"),") method returns ",(0,i.kt)("inlineCode",{parentName:"p"},"T?")," (in this particular case ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),"), that is an optional next value if some exists."),(0,i.kt)("p",null,"The body of the ",(0,i.kt)("inlineCode",{parentName:"p"},"while let")," is the same as for the initial ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," loop."),(0,i.kt)("p",null,"In the next chapters, we will discuss ",(0,i.kt)("inlineCode",{parentName:"p"},"while let")," lowering where this example will be lowered completely."),(0,i.kt)("h4",{id:"while-loop-lowering"},(0,i.kt)("inlineCode",{parentName:"h4"},"while")," loop lowering"))}m.isMDXComponent=!0}}]);