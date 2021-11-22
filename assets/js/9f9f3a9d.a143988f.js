"use strict";(self.webpackChunkdev_book=self.webpackChunkdev_book||[]).push([[6928],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),g=o,m=u["".concat(s,".").concat(g)]||u[g]||p[g]||a;return t?i.createElement(m,r(r({ref:n},c),{},{components:t})):i.createElement(m,r({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<a;d++)r[d]=t[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},68397:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var i=t(87462),o=t(63366),a=(t(67294),t(3905)),r=["components"],l={},s="Logger & Panics",d={unversionedId:"code-docs/logger-and-panics",id:"code-docs/logger-and-panics",isDocsHomePage:!1,title:"Logger & Panics",description:"Logger is an important class, it has a powerful but simple interface for printing, logging, and panicking.",source:"@site/docs/code-docs/logger-and-panics.md",sourceDirName:"code-docs",slug:"/code-docs/logger-and-panics",permalink:"/dev-book/docs/code-docs/logger-and-panics",editUrl:"https://github.com/jacylang/dev-book/edit/master/docs/code-docs/logger-and-panics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"interning",permalink:"/dev-book/docs/code-docs/interning"},next:{title:"_Lincy_",permalink:"/dev-book/docs/particles/Lincy/index"}},c=[{value:"Logger owners",id:"logger-owners",children:[{value:"Logger config",id:"logger-config",children:[],level:3}],level:2},{value:"Panics",id:"panics",children:[],level:2},{value:"Log-levels",id:"log-levels",children:[],level:2},{value:"Additional methods",id:"additional-methods",children:[],level:2}],p={toc:c};function u(e){var n=e.components,t=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"logger--panics"},"Logger & Panics"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Logger")," is an important class, it has a powerful but simple interface for printing, logging, and panicking."),(0,a.kt)("p",null,"Logger formatting works simple, each logger method is a template function that accepts any type that overloads\n",(0,a.kt)("inlineCode",{parentName:"p"},"std::ostream<<")," operator. White spaces are not placed automatically (but that's how it was before) because some\nentities must be printed without white space and it's hard to implement overloading for each type which must not print\nwhite space after or before it as we need to compare each two neighbors types in the log method parameter list."),(0,a.kt)("h2",{id:"logger-owners"},"Logger owners"),(0,a.kt)("p",null,"All big classes have a Logger instance inited with an owner name corresponding to the class name. Logs produced by\nlogger owners with non-static methods are complemented with log info: owner name and colorized log-level name."),(0,a.kt)("h3",{id:"logger-config"},"Logger config"),(0,a.kt)("p",null,"An owned logger can be configured, directly in the source code or automatically by Config with CLI options."),(0,a.kt)("p",null,"Configurations influencing each non-static log invocation:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"level")," - (default: Set by ",(0,a.kt)("inlineCode",{parentName:"li"},"Config"),") - Logger instance log-level, set by ",(0,a.kt)("inlineCode",{parentName:"li"},"Config")," default value, global CLI option\n",(0,a.kt)("inlineCode",{parentName:"li"},"-log-level")," or by specific CLI options for owner (some logger owners have CLI-confugurable log-level)\n",(0,a.kt)("inlineCode",{parentName:"li"},"-{owner}-log-level")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"printOwner")," - (default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),") - Prints owner name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"printLevel")," - (default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),") - Prints log-level name in each non-static log invocation"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"colorize")," - (default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),") - Colorizes additional info (e.g. log-level name with corresponding color), each\nlog-level has its own color.")),(0,a.kt)("h2",{id:"panics"},"Panics"),(0,a.kt)("p",null,"Panic is actually throwing an exception, everywhere in the compiler code we panic when some check failed which\nconsidered a bug. For example, at the name resolution stage, we put some definition to storage and then extract it by\nits id, we cannot have wrong ",(0,a.kt)("inlineCode",{parentName:"p"},"defId")," on the hands so if non-existent ",(0,a.kt)("inlineCode",{parentName:"p"},"defId")," was requested it is actually a bug and we\nmust panic."),(0,a.kt)("p",null,"To panic, there's a static method ",(0,a.kt)("inlineCode",{parentName:"p"},"Logger::devPanic"),", it follows common format rules, that is, we can pass any types\nthat overload ",(0,a.kt)("inlineCode",{parentName:"p"},"std::ostream<<")," operator to it delimited by commas as arguments."),(0,a.kt)("h2",{id:"log-levels"},"Log-levels"),(0,a.kt)("p",null,"This is the list of log levels ordered by priority (lowest -",">"," highest):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dev")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"debug")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"info")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"warn")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"error"))),(0,a.kt)("p",null,"Each log-level Logger has a corresponding method with the same name."),(0,a.kt)("p",null,"Don't confuse logs with suggestions (errors, warning, notes about code given to user), logs are about compiler internals\nand used mostly for development. By default, the log level is ",(0,a.kt)("inlineCode",{parentName:"p"},"info")," that is used to notify a user about something is\nenabled, e.g. if a user added ",(0,a.kt)("inlineCode",{parentName:"p"},"-print=ast")," in CLI then we print ",(0,a.kt)("inlineCode",{parentName:"p"},"info: Printing AST...")," before printing AST."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dev")," log-level may seem confusing, but it is the most often used log-level in the code. Actually, its usage is to\nproduce verbose debug info that is useful when working at a specific compilation stage."),(0,a.kt)("h2",{id:"additional-methods"},"Additional methods"),(0,a.kt)("p",null,"These are methods that differ from log methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"print")," - (no NL) - static method for raw formatted text printing"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"raw")," - (no NL) - same as ",(0,a.kt)("inlineCode",{parentName:"li"},"print")," but non-static"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"format")," - receives parameters list and formats it producing a string"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"devDebug")," - (appends NL) - static alternative for ",(0,a.kt)("inlineCode",{parentName:"li"},"dev")," method used in classes that aren't logger owners"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nl")," - shortcut for ",(0,a.kt)("inlineCode",{parentName:"li"},"std::endl"),", convenient for logger methods chaining"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"printTitleDev")," - (appends NL) - prints text in title style (short text wrapped into repeated ",(0,a.kt)("inlineCode",{parentName:"li"},"="),") only if dev-mode is\nenabled. Used only for compilation stage visual separation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"colorized")," - (appends NL) - Receives ",(0,a.kt)("inlineCode",{parentName:"li"},"Color")," as first argument and print full text colorized resetting color at the\nend. Used rarely as not so many logs should be fully colorized."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"notImplemented")," - TODO dev-panic.")))}u.isMDXComponent=!0}}]);