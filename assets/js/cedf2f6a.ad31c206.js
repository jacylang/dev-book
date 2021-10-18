"use strict";(self.webpackChunkdev_book=self.webpackChunkdev_book||[]).push([[8088],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),l=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):d(d({},e),t)),n},m=function(t){var e=l(t.components);return a.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),N=l(n),s=r,c=N["".concat(o,".").concat(s)]||N[s]||k[s]||i;return n?a.createElement(c,d(d({ref:e},m),{},{components:n})):a.createElement(c,d({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,d=new Array(i);d[0]=N;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,d[1]=p;for(var l=2;l<i;l++)d[l]=n[l];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},9269:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return m},default:function(){return N}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),d=["components"],p={},o="Operators and punctuations",l={unversionedId:"appendices/ops-and-puncts",id:"appendices/ops-and-puncts",isDocsHomePage:!1,title:"Operators and punctuations",description:"Operators in Jacy are not something internally special in comparison with",source:"@site/docs/appendices/ops-and-puncts.md",sourceDirName:"appendices",slug:"/appendices/ops-and-puncts",permalink:"/dev-book/docs/appendices/ops-and-puncts",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/appendices/ops-and-puncts.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"*Jacy* Programming language [checklist](https://www.mcmillen.dev/language_checklist.html)",permalink:"/dev-book/docs/appendices/checklist"},next:{title:"Taxonomy and glossary",permalink:"/dev-book/docs/appendices/taxonomy-&-glossary"}},m=[{value:"Operators in expressions",id:"operators-in-expressions",children:[],level:2},{value:"Punctuations",id:"punctuations",children:[],level:2},{value:"Operators and punctuations precedence",id:"operators-and-punctuations-precedence",children:[],level:2}],k={toc:m};function N(t){var e=t.components,n=(0,r.Z)(t,d);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"operators-and-punctuations"},"Operators and punctuations"),(0,i.kt)("p",null,"Operators in ",(0,i.kt)("em",{parentName:"p"},"Jacy")," are not something internally special in comparison with\nfunctions. When calling ",(0,i.kt)("inlineCode",{parentName:"p"},"a + b")," the trait ",(0,i.kt)("inlineCode",{parentName:"p"},"std::ops::Add")," will be used. Mostly\nall operators are overloadable."),(0,i.kt)("h2",{id:"operators-in-expressions"},"Operators in expressions"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Operator"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Trait to overload"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a + b")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::Add"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a - b")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::Sub"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a * b")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::Mul"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a / b")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::Div"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a % b")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::Rem"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a ** b")," (","*",")"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::Pow"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a or b")),(0,i.kt)("td",{parentName:"tr",align:"left"},"N/A")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a and b")),(0,i.kt)("td",{parentName:"tr",align:"left"},"N/A")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"!a")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::Not"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a & b")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::BitAnd"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"`a"),(0,i.kt)("td",{parentName:"tr",align:"left"},"b`")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a << b")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::Shl"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a >> b")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::Shr"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a ^ b")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::Xor"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a < b")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"a > b")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"a >= b")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"a <= b")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"a <=> b")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::Cmp"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a == b")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"a != b")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::Eq"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a === b")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"a !== b")),(0,i.kt)("td",{parentName:"tr",align:"left"},"??? (Not described)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a..b")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::Range"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a..=b")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::RangeIncl"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"..b")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::RangeTo"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a..")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::RangeFrom"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"..=b")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::RangeToIncl"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"..")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::RangeFull")," (","*","*",")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a += b")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::AddAssign"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a -= b")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::SubAssign"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a *= b")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::MulAssign"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a /= b")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::DivAssign"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a %= b")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::RemAssign"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a **= b")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::PowAssign"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"`a"),(0,i.kt)("td",{parentName:"tr",align:"left"},"= b`")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a &= b")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::BitAndAssign"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a <<= b")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::ShlAssign"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a >>= b")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::ShrAssign"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a ^= b")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::XorAssign"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::Try::branch"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a!")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::Try::unwrap"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a.b")),(0,i.kt)("td",{parentName:"tr",align:"left"},"N/A")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a()")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::Invoke"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"*a")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::Deref"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"*a = b")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"std::ops::DerefMut"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"&a")),(0,i.kt)("td",{parentName:"tr",align:"left"},"N/A")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"`a"),(0,i.kt)("td",{parentName:"tr",align:"left"},"> b`")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(","*",") For the exponentiation operator, there can be a conflict with\ndereferencing operator ",(0,i.kt)("inlineCode",{parentName:"li"},"*"),", to solve it you need to put white space between\nterms. E.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"a**b")," == ",(0,i.kt)("inlineCode",{parentName:"li"},"a ** b")," as far as ",(0,i.kt)("inlineCode",{parentName:"li"},"a **b")," == ",(0,i.kt)("inlineCode",{parentName:"li"},"a ** b")," but not == ",(0,i.kt)("inlineCode",{parentName:"li"},"a *\n*b"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"a*b")," == ",(0,i.kt)("inlineCode",{parentName:"li"},"a * b"),". So, with dereferencing, always put white space\nbefore ",(0,i.kt)("inlineCode",{parentName:"li"},"*")," (as dereferencing operator)."),(0,i.kt)("li",{parentName:"ul"},"(","*","*",") ",(0,i.kt)("inlineCode",{parentName:"li"},"RangeFull")," is not a real operator, it is an empty ",(0,i.kt)("inlineCode",{parentName:"li"},"struct")," which can\nbe passed somewhere.")),(0,i.kt)("h2",{id:"punctuations"},"Punctuations"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Punctuation"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Usages"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},":")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Type annotations in almost all constructions, function call argument name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"->")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Function types, lambdas")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},";")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Statement terminator, body ignorance, item declaration")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"=>")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"match")," arms")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h2",{id:"operators-and-punctuations-precedence"},"Operators and punctuations precedence"),(0,i.kt)("p",null,"Precedence (from highest to lowest)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Symbols"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a::b"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a.b"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a()")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"a[]"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a?"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"-a")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"*a")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"!a")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"&a")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"&mut a"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a as b"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a ** b"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a * b")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"a / b")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"a % b"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a + b")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"a - b"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a << b")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"a >> b"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a & b"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a ^ b"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"`a")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a == b")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"a != b")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"a === b")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"a !== b")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"a < b")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"a > b")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"a <= b")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"a >= b")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"<=>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a and b"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a or b"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a..b")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"a..")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"..")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"..=b")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"..b")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"a..=b"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"`a")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"a = b")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"a += b")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"a -= b")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"a *= b")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"a /= b")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"a %= b")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"a **= b")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"a &= b")," ","\xa0"," `a")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"return a")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"break a")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"td"},"() -> {}"))))))}N.isMDXComponent=!0}}]);