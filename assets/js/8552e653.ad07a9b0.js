"use strict";(self.webpackChunkdev_book=self.webpackChunkdev_book||[]).push([[3983],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3296:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},p="Code Style Conventions",s={unversionedId:"ideas/code-style-conventions",id:"ideas/code-style-conventions",isDocsHomePage:!1,title:"Code Style Conventions",description:"As far as Jacy is VERY WIP, I won't describe serious conventions, thus it's gonna be here -- in ideas.",source:"@site/docs/ideas/code-style-conventions.md",sourceDirName:"ideas",slug:"/ideas/code-style-conventions",permalink:"/dev-book/docs/ideas/code-style-conventions",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/ideas/code-style-conventions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Algebraic Effects",permalink:"/dev-book/docs/ideas/alg-effects"},next:{title:"Ideas",permalink:"/dev-book/docs/ideas/index"}},d=[{value:"Namings",id:"namings",children:[{value:"To be (snake) or not to be",id:"to-be-snake-or-not-to-be",children:[],level:3},{value:"Intro and common rules",id:"intro-and-common-rules",children:[],level:3},{value:"Variables and functions",id:"variables-and-functions",children:[],level:3},{value:"Constants",id:"constants",children:[],level:3},{value:"Type names",id:"type-names",children:[],level:3},{value:"Type parameters",id:"type-parameters",children:[],level:3},{value:"Modules (<code>mod</code>)",id:"modules-mod",children:[],level:3}],level:2}],m={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"code-style-conventions"},"Code Style Conventions"),(0,i.kt)("p",null,"As far as ",(0,i.kt)("em",{parentName:"p"},"Jacy")," is VERY WIP, I won't describe serious conventions, thus it's gonna be here -- in ideas."),(0,i.kt)("h2",{id:"namings"},"Namings"),(0,i.kt)("p",null,'Okay, I respect Rust, but snake_case is not kind of what most of people use I think, even not considering things like\n"most people do ...", does not matter, I can describe everything from my view.'),(0,i.kt)("h3",{id:"to-be-snake-or-not-to-be"},"To be (snake) or not to be"),(0,i.kt)("p",null,"Actually, it does not matter for me. The only thing I won't accept is usage of, so called, PascalCase for functions,\nvariables, etc. except types, names."),(0,i.kt)("h3",{id:"intro-and-common-rules"},"Intro and common rules"),(0,i.kt)("p",null,"List of all writing styles referenced in convention:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"camelCase")," - starts with lowercase letter, each next word starts with uppercase"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"PascalCase")," - starts with uppercase letter, each next word starts with uppercase"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"snake_case")," - each word starts with lowercase letter, words separated with ",(0,i.kt)("inlineCode",{parentName:"li"},"_")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SCREAMING_SNAKE_CASE")," - all letters in uppercase, words separated with ",(0,i.kt)("inlineCode",{parentName:"li"},"_"))),(0,i.kt)("p",null,"All other variations MUST NOT be used in code."),(0,i.kt)("p",null,'Further in this text I will use "MUST" and "SHOULD", "MAY" (mostly for alternatives to things that "SHOULD BE..."), so\nthat gonna be clean what is my view.'),(0,i.kt)("p",null,'"',(0,i.kt)("strong",{parentName:"p"},"Different code-styles MUST not be mixed"),'" is the most important rule here, I think. It means, that if somewhere here\nis written that something "SHOULD BE ..." but "MAY BE ..." and you\'ve chosen a described alternative -- use it\neverywhere in your code.'),(0,i.kt)("h3",{id:"variables-and-functions"},"Variables and functions"),(0,i.kt)("p",null,"Variables and functions SHOULD be named in ",(0,i.kt)("strong",{parentName:"p"},"camelCase"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"somethingSomewhere"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"myFunction"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"barBazFuzz")),(0,i.kt)("p",null,"Variables and functions MAY be named in ",(0,i.kt)("strong",{parentName:"p"},"snake_case"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"something_somewhere"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"my_function"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"bar_baz_fuzz")),(0,i.kt)("p",null,"If one of style is chosen it MUST be followed in the whole code."),(0,i.kt)("h3",{id:"constants"},"Constants"),(0,i.kt)("p",null,"Talking about constants, I mean constants declared with ",(0,i.kt)("inlineCode",{parentName:"p"},"const"),". Actually ",(0,i.kt)("inlineCode",{parentName:"p"},"let")," without ",(0,i.kt)("inlineCode",{parentName:"p"},"mut")," is a constant, but ",(0,i.kt)("inlineCode",{parentName:"p"},"let"),"\nis under rule above"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"const")," SHOULD BE named in ",(0,i.kt)("strong",{parentName:"p"},"SCREAMING_SNAKE_CASE"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"UNCHANGEABLE_VALUE")),(0,i.kt)("p",null,"Scientific constants like PI number MUST BE named in ",(0,i.kt)("strong",{parentName:"p"},"SCREAMING_SNAKE_CASE"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"PI"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"G")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"const")," MAY BE named in ",(0,i.kt)("strong",{parentName:"p"},"camelCase"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"myImportantValue")),(0,i.kt)("h3",{id:"type-names"},"Type names"),(0,i.kt)("p",null,"Type names include names for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"struct")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"trait")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enum")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")),(0,i.kt)("li",{parentName:"ul"},"type parameters (read further)")),(0,i.kt)("p",null,"All types MUST be in ",(0,i.kt)("strong",{parentName:"p"},"PascalCase"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"MyType"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SomeStructure"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"EnumWithEverythingINeed")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Exception")," is built-in primitive types: ",(0,i.kt)("inlineCode",{parentName:"p"},"i8"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"i16"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"i32"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"i64"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"i128"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"u8"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"u16"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"u32"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"uint"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"u64"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"u128"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"isize"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"usize"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"f32"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"f64"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"double"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"bool"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"char"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"str")),(0,i.kt)("p",null,"Nothing else CANNOT BE named in ",(0,i.kt)("strong",{parentName:"p"},"PascalCase")," except user-defined types!"),(0,i.kt)("h3",{id:"type-parameters"},"Type parameters"),(0,i.kt)("p",null,'Actually, type parameters are under rule above ("Type names"), anyway, they are styled a little bit different.'),(0,i.kt)("p",null,"Type parameters MUST BE named in ",(0,i.kt)("strong",{parentName:"p"},"PascalCase"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"U"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"V")," and SHOULD BE 1 character long."),(0,i.kt)("p",null,"As you can see, 1 uppercase character is used for type parameters, but which to use when there're more than one or usage\nis specific? Here's the table of common cases:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Case"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Names"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},'Single "any" type'),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Key-value types"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"K")," for key and ",(0,i.kt)("inlineCode",{parentName:"td"},"V")," for value. Often used in mapping structures")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Multiple types"),(0,i.kt)("td",{parentName:"tr",align:"left"},"First - ",(0,i.kt)("inlineCode",{parentName:"td"},"T"),", Second - ",(0,i.kt)("inlineCode",{parentName:"td"},"S"),", Third - ",(0,i.kt)("inlineCode",{parentName:"td"},"U"),", Fourth - ",(0,i.kt)("inlineCode",{parentName:"td"},"V"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Meaningful types"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TSize"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"TInput"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"TOutput"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},'A lot of "any" types'),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T0"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"T1"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"T2"),", ..., ",(0,i.kt)("inlineCode",{parentName:"td"},"TN"),". Rarely needed, but can occur in, for example, tuple type implementations")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'"any" type imply cases when it is not important to refer to this type, and it just needed to be annotated.')),(0,i.kt)("h3",{id:"modules-mod"},"Modules (",(0,i.kt)("inlineCode",{parentName:"h3"},"mod"),")"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"mod")," MUST BE named in ",(0,i.kt)("strong",{parentName:"p"},"snake_case"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"std"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"my_lib"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"some_module")))}c.isMDXComponent=!0}}]);