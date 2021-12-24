"use strict";(self.webpackChunkdev_book=self.webpackChunkdev_book||[]).push([[391],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,y=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},81739:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={},l="Why affine types",p={unversionedId:"concept/why-affine-types",id:"concept/why-affine-types",isDocsHomePage:!1,title:"Why affine types",description:"Affine types are a version of linear types that do allow only single use of an object as linear types but allow discarding value, i.e. not using it.",source:"@site/docs/concept/why-affine-types.md",sourceDirName:"concept",slug:"/concept/why-affine-types",permalink:"/dev-book/docs/concept/why-affine-types",editUrl:"https://github.com/jacylang/dev-book/edit/master/docs/concept/why-affine-types.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The Idea",permalink:"/dev-book/docs/concept/the-idea"},next:{title:"Dev Mode",permalink:"/dev-book/docs/cli/dev-mode"}},s=[],u={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"why-affine-types"},"Why affine types"),(0,a.kt)("p",null,"Affine types are a version of linear types that do allow only single use of an object as linear types but allow discarding value, i.e. not using it."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Jacy")," supports affine types, not linear, however, linearity logic is controlled with warnings, i.e. the compiler will give a warning if you didn't use the value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jc"},"func foo() {\n    let r = Rc(0);\n    let r1 = Rc::clone(r);\n}\n")),(0,a.kt)("p",null,'At the code generation stage, we need to create a so-called "destruction scope", where we will drop the values owned by the scope we exit.\nThe RC ',(0,a.kt)("inlineCode",{parentName:"p"},"r")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"r1")," will be dropped when the body of the function ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," ends. ",(0,a.kt)("inlineCode",{parentName:"p"},"Rc")," implements ",(0,a.kt)("inlineCode",{parentName:"p"},"Drop::drop")," method which accepts ",(0,a.kt)("inlineCode",{parentName:"p"},"self")," by-move, thus you cannot ",(0,a.kt)("inlineCode",{parentName:"p"},"drop")," the value twice."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jc"},"func foo() {\n    let r = Rc(0);\n    let r1 = Rc::clone(r);\n}\n// Drop scope of the function `foo`\n{\n    Drop::drop(r1);\n    Drop::drop(r);\n}\n")),(0,a.kt)("p",null,"In this code, if we hadn't affine types, we could drop value ",(0,a.kt)("inlineCode",{parentName:"p"},"r1")," or value ",(0,a.kt)("inlineCode",{parentName:"p"},"r")," twice, and some of them couldn't be dropped correctly."),(0,a.kt)("p",null,"This example is the reason why affine types are cool, it just presents their main advantage -- data flow control. We know where data goes, from where, and that we lose access to it as it is moved."),(0,a.kt)("p",null,"Of course, there is the borrowing concept that allows us not to copy or move the data, but alias it with a new object."),(0,a.kt)("p",null,"Affine types solve many problems while making code stricter and safe from occasional user mistakes."))}f.isMDXComponent=!0}}]);