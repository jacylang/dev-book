"use strict";(self.webpackChunkdev_book=self.webpackChunkdev_book||[]).push([[5535],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(t),m=i,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||r;return t?o.createElement(d,a(a({ref:n},s),{},{components:t})):o.createElement(d,a({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<r;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},73409:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var o=t(87462),i=t(63366),r=(t(67294),t(3905)),a=["components"],c={},l="CTE Functions",u={unversionedId:"particles/compile-time-evaluation/cte-functions",id:"particles/compile-time-evaluation/cte-functions",isDocsHomePage:!1,title:"CTE Functions",description:"A function is CTE if:",source:"@site/docs/particles/compile-time-evaluation/cte-functions.md",sourceDirName:"particles/compile-time-evaluation",slug:"/particles/compile-time-evaluation/cte-functions",permalink:"/dev-book/docs/particles/compile-time-evaluation/cte-functions",editUrl:"https://github.com/jacylang/dev-book/edit/master/docs/particles/compile-time-evaluation/cte-functions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CTE Expressions",permalink:"/dev-book/docs/particles/compile-time-evaluation/cte-expressions"},next:{title:"Compile-Time Evaluation",permalink:"/dev-book/docs/particles/compile-time-evaluation/index"}},s=[{value:"const inference",id:"const-inference",children:[],level:2}],p={toc:s};function f(e){var n=e.components,t=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cte-functions"},"CTE Functions"),(0,r.kt)("p",null,"A function is CTE if:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It is marked with ",(0,r.kt)("inlineCode",{parentName:"li"},"const")," modifier"),(0,r.kt)("li",{parentName:"ul"},"It is possible to infer that function can be CTE")),(0,r.kt)("p",null,"We mark a function as CTE so."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jc"},"const func foo() {}\n")),(0,r.kt)("p",null,"Then the compiler will check that all computations performed inside this function ",(0,r.kt)("inlineCode",{parentName:"p"},"'foo'")," are CTE, if not, it gives an\nerror."),(0,r.kt)("p",null,"In another way, the result of the function won't be inlined in usage places, but it is possible to use a function that\nwasn't qualified as ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," in a CTE context. More about that below."),(0,r.kt)("h2",{id:"const-inference"},"const inference"),(0,r.kt)("p",null,"Another approach is more complex for the compiler but simple for the user: If we declare a function and use it in CTE\ncontext when compiler goes to this function and checks that it's CTE function. Anyway, if we use this function in a\nrun-time context it won't be inlined and evaluated at compile-time. Example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jc"},"// Just a simple function that returns `1`\nfunc foo = 1\n\nconst func myConstFunc {\n    const a = foo()\n}\n\nfunc myRawFunc {\n    let a = foo()\n}\n")),(0,r.kt)("p",null,"After ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," expansion this code will look (structurally) like that."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jc"},"func foo() = 1\n\nconst func myConstFunc() {\n    const a = 1\n}\n\nfunc myRawFunc() {\n    let a = foo()\n}\n")),(0,r.kt)("p",null,"As you can see in ",(0,r.kt)("inlineCode",{parentName:"p"},"myRawFunc")," ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," is still a function call, because ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," used in a non-",(0,r.kt)("inlineCode",{parentName:"p"},"const")," context. Whereas in\n",(0,r.kt)("inlineCode",{parentName:"p"},"myConstFunc")," value returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," was inlined as we declared ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"const"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," qualifier does not mean that\neverything inside it will be inlined, you still can declare ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," or use ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," inside of it. ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," just means the\ncompiler will check function for constness and tell you if it's not."))}f.isMDXComponent=!0}}]);