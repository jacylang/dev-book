"use strict";(self.webpackChunkdev_book=self.webpackChunkdev_book||[]).push([[1374],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(t),g=r,d=m["".concat(l,".").concat(g)]||m[g]||p[g]||a;return t?o.createElement(d,i(i({ref:n},u),{},{components:t})):o.createElement(d,i({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4514:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],s={title:"Programming Language Checklist \ud83d\ude05",sidebar_position:50},l="*Jacy* Programming language [checklist](https://www.mcmillen.dev/language_checklist.html)",c={unversionedId:"appendices/checklist",id:"appendices/checklist",isDocsHomePage:!1,title:"Programming Language Checklist \ud83d\ude05",description:"",source:"@site/docs/appendices/checklist.md",sourceDirName:"appendices",slug:"/appendices/checklist",permalink:"/dev-book/docs/appendices/checklist",editUrl:"https://github.com/jacylang/dev-book/edit/master/docs/appendices/checklist.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"Programming Language Checklist \ud83d\ude05",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Taxonomy and glossary",permalink:"/dev-book/docs/appendices/taxonomy-&-glossary"},next:{title:"Roadmaps",permalink:"/dev-book/docs/appendices/roadmaps/index"}},u=[],p={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jacy-programming-language-checklist"},(0,a.kt)("em",{parentName:"h1"},"Jacy")," Programming language ",(0,a.kt)("a",{parentName:"h1",href:"https://www.mcmillen.dev/language_checklist.html"},"checklist")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},'You appear to be advocating a new:\n[x] functional  [x] imperative  [x] object-oriented  [ ] procedural [ ] stack-based\n[x] "multi-paradigm"  [ ] lazy  [x] eager  [x] statically-typed  [ ] dynamically-typed\n[ ] pure  [ ] impure  [ ] non-hygienic  [ ] visual  [ ] beginner-friendly\n[ ] non-programmer-friendly  [ ] completely incomprehensible\nprogramming language.  Your language will not work.  Here is why it will not work.\n\nYou appear to believe that:\n[ ] Syntax is what makes programming difficult\n[ ] Garbage collection is free                [ ] Computers have infinite memory\n[ ] Nobody really needs:\n    [ ] concurrency  [ ] a REPL  [ ] debugger support  [ ] IDE support  [ ] I/O\n    [ ] to interact with code not written in your language\n[ ] The entire world speaks 7-bit ASCII\n[ ] Scaling up to large software projects will be easy\n[ ] Convincing programmers to adopt a new language will be easy\n[ ] Convincing programmers to adopt a language-specific IDE will be easy\n[ ] Programmers love writing lots of boilerplate\n[ ] Specifying behaviors as "undefined" means that programmers won\'t rely on them\n[ ] "Spooky action at a distance" makes programming more fun\n\nUnfortunately, your language (has/lacks):\n[h] comprehensible syntax  [h] semicolons  [ ] significant whitespace  [One day \ud83d\ude43] macros\n[ ] implicit type conversion  [h] explicit casting  [h] type inference\n[ ] goto  [ ] exceptions  [h] closures  [ ] tail recursion  [ ] coroutines\n[ ] reflection  [h] subtyping  [ ] multiple inheritance  [h] operator overloading\n[h] algebraic datatypes  [kind of] recursive types  [ ] polymorphic types\n[ ] covariant array typing  [I hope] monads  [ ] dependent types\n[h] infix operators  [ ] nested comments  [ ] multi-line strings  [ ] regexes\n[h] call-by-value  [ ] call-by-name  [h] call-by-reference  [ ] call-cc\n\nThe following philosophical objections apply:\n[ ] Programmers should not need to understand category theory to write "Hello, World!"\n[ ] Programmers should not develop RSI from writing "Hello, World!"\n[ ] The most significant program written in your language is its own compiler\n[ ] The most significant program written in your language isn\'t even its own compiler\n[x] No language spec\n[x] "The implementation is the spec"\n   [ ] The implementation is closed-source  [ ] covered by patents  [ ] not owned by you\n[ ] Your type system is unsound  [ ] Your language cannot be unambiguously parsed\n   [ ] a proof of same is attached\n   [ ] invoking this proof crashes the compiler\n[ ] The name of your language makes it impossible to find on Google\n[ ] Interpreted languages will never be as fast as C\n[ ] Compiled languages will never be "extensible"\n[ ] Writing a compiler that understands English is AI-complete\n[ ] Your language relies on an optimization which has never been shown possible\n[ ] There are less than 100 programmers on Earth smart enough to use your language\n[ ] ____________________________ takes exponential time\n[x] Type system is known to be undecidable, as far as it gonna be Turing-complete\n\nYour implementation has the following flaws:\n[ ] CPUs do not work that way\n[ ] RAM does not work that way\n[ ] VMs do not work that way\n[ ] Compilers do not work that way\n[ ] Compilers cannot work that way\n[ ] Shift-reduce conflicts in parsing seem to be resolved using rand()\n[ ] You require the compiler to be present at runtime\n[ ] You require the language runtime to be present at compile-time\n[ ] Your compiler errors are completely inscrutable\n[ ] Dangerous behavior is only a warning\n[ ] The compiler crashes if you look at it funny\n[ ] The VM crashes if you look at it funny\n[ ] You don\'t seem to understand basic optimization techniques\n[ ] You don\'t seem to understand basic systems programming\n[ ] You don\'t seem to understand pointers\n[ ] You don\'t seem to understand functions\n\nAdditionally, your marketing has the following problems:\n[ ] Unsupported claims of increased productivity\n[ ] Unsupported claims of greater "ease of use"\n[ ] Obviously rigged benchmarks\n   [ ] Graphics, simulation, or crypto benchmarks where your code just calls\n       handwritten assembly through your FFI\n   [ ] String-processing benchmarks where you just call PCRE\n   [ ] Matrix-math benchmarks where you just call BLAS\n[ ] Noone really believes that your language is faster than:\n    [ ] assembly  [ ] C  [ ] FORTRAN  [ ] Java  [ ] Ruby  [ ] Prolog\n[ ] Rejection of orthodox programming-language theory without justification\n[ ] Rejection of orthodox systems programming without justification\n[ ] Rejection of orthodox algorithmic theory without justification\n[ ] Rejection of basic computer science without justification\n\nTaking the wider ecosystem into account, I would like to note that:\n[ ] Your complex sample code would be one line in: _______________________\n[x] We already have an unsafe imperative language\n[ ] We already have a safe imperative OO language\n[ ] We already have a safe statically-typed eager functional language\n[ ] You have reinvented Lisp but worse\n[ ] You have reinvented Javascript but worse\n[ ] You have reinvented Java but worse\n[ ] You have reinvented C++ but worse\n[ ] You have reinvented PHP but worse\n[ ] You have reinvented PHP better, but that\'s still no justification\n[ ] You have reinvented Brainfuck but non-ironically\n\nIn conclusion, this is what I think of you:\n[ ] You have some interesting ideas, but this won\'t fly.\n[ ] This is a bad language, and you should feel bad for inventing it.\n[ ] Programming in this language is an adequate punishment for inventing it.\n')))}m.isMDXComponent=!0}}]);