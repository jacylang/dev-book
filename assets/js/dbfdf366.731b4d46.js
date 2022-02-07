"use strict";(self.webpackChunkdev_book=self.webpackChunkdev_book||[]).push([[8373],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,h=u["".concat(s,".").concat(c)]||u[c]||d[c]||o;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45250:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),l=["components"],r={},s="Name resolution",p={unversionedId:"compiler-workflow/name-res-stage/name-resolution",id:"compiler-workflow/name-res-stage/name-resolution",isDocsHomePage:!1,title:"Name resolution",description:"If you want a brief overview of the Name Resolution internals, checkout Name Resolution Cheatsheet",source:"@site/docs/compiler-workflow/name-res-stage/name-resolution.md",sourceDirName:"compiler-workflow/name-res-stage",slug:"/compiler-workflow/name-res-stage/name-resolution",permalink:"/dev-book/docs/compiler-workflow/name-res-stage/name-resolution",editUrl:"https://github.com/jacylang/dev-book/edit/master/docs/compiler-workflow/name-res-stage/name-resolution.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Module-Tree building",permalink:"/dev-book/docs/compiler-workflow/name-res-stage/module-tree-building"},next:{title:"HIR Pretty printing",permalink:"/dev-book/docs/compiler-workflow/lowering/hir-pretty-print"}},m=[{value:"Name shadowing",id:"name-shadowing",children:[{value:"Ribs",id:"ribs",children:[{value:"Module vs Rib",id:"module-vs-rib",children:[],level:4}],level:3},{value:"NameResolver",id:"nameresolver",children:[{value:"Paths",id:"paths",children:[],level:4},{value:"Namespaces",id:"namespaces",children:[],level:4},{value:"Result -- Resolutions",id:"result----resolutions",children:[],level:4},{value:"Patterns",id:"patterns",children:[],level:4},{value:"Labels and lifetimes",id:"labels-and-lifetimes",children:[],level:4},{value:"<code>lang</code> items",id:"lang-items",children:[],level:4}],level:3},{value:"Path resolution",id:"path-resolution",children:[{value:"1. Resolving specific items",id:"1-resolving-specific-items",children:[{value:"2. Resolving single name imports",id:"2-resolving-single-name-imports",children:[],level:5},{value:"3. Descending to module (<code>use *</code> and <code>use {}</code>)",id:"3-descending-to-module-use--and-use-",children:[{value:"<code>use *</code>",id:"use-",children:[],level:6},{value:"<code>use {}</code>",id:"use--1",children:[],level:6}],level:5}],level:4}],level:3}],level:2}],d={toc:m};function u(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"name-resolution"},"Name resolution"),(0,o.kt)("p",null,"If you want a brief overview of the Name Resolution internals, checkout ",(0,o.kt)("a",{parentName:"p",href:"../../appendices/cheatsheets/name-resolution-cheatsheet"},"Name Resolution Cheatsheet")),(0,o.kt)("p",null,"Now, we've got the module tree, we forward-declared everything and can resolve all names."),(0,o.kt)("p",null,'The first concept we need to grasp is so-called "ribs" (yeah, from Rust). "rib" is something close to the scope, but rib\nis a wider thing as it is pushed onto the stack each time one of these rules can be applied:'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"We allow name shadowing"),(0,o.kt)("li",{parentName:"ol"},"We enter scope which name-resolution rules are specific"),(0,o.kt)("li",{parentName:"ol"},"We actually enter a new scope")),(0,o.kt)("p",null,"So, a rib is pushed onto the rib stack not only when we enter a block ",(0,o.kt)("inlineCode",{parentName:"p"},"{}"),", but also when ",(0,o.kt)("inlineCode",{parentName:"p"},"let")," is met or when rib names\ncould collide with other names but we don't want this for reasons of possibility to make it work."),(0,o.kt)("h2",{id:"name-shadowing"},"Name shadowing"),(0,o.kt)("p",null,"The one important thing we need to establish -- ",(0,o.kt)("em",{parentName:"p"},"Jacy")," allows local names shadowing! Why? Let's look at an example where\nit is practically convenient."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jc"},"func strangeCheck(param: i32): i32? = // Note: `T?` is a shortcut for `Option<T>`\n    if param <= 10 {None} else {Some(param)}\n\nfunc main {\n    let a = strangeCheck(10);\n    let a = a.unwrap();\n}\n")),(0,o.kt)("p",null,"The function ",(0,o.kt)("inlineCode",{parentName:"p"},"strangeCheck")," returns ",(0,o.kt)("inlineCode",{parentName:"p"},"Option")," and we want to do something with this result, in other languages we either\ndon't need this (because of lack of so many wrappers like ",(0,o.kt)("inlineCode",{parentName:"p"},"Option"),", etc.) or we write code like that."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jc"},"let maybeA = strangeCheck(10);\nlet a = maybeA.unwrap();\n")),(0,o.kt)("p",null,"Which is annoying... Why do we need to add a new variable making code noisier? We've got ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," and it is logically still\n",(0,o.kt)("inlineCode",{parentName:"p"},"a")," wrapped it or not."),(0,o.kt)("p",null,"One could argue that someone would write unclear code using this feature. This is why ",(0,o.kt)("em",{parentName:"p"},"Jacy"),' has a linter warning for\nthese cases, and the rule not to get this warning is simple: "Only shadow variable with computations related to the\nshadowed variable", for example.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jc"},"// This is a good case to use variable shadowing\nlet a: i32? = None;\nlet a = a.unwrap();\n\n// This one will produce a warning,\n//  because you just lost the previous value of `param`\nfunc foo(param: i32) {\n    param = 123;\n}\n")),(0,o.kt)("p",null,"How variable shadowing is possible? Do we use multi-entry mapping for local variables at the name resolution stage? --\nActually, no, every time we meet a ",(0,o.kt)("inlineCode",{parentName:"p"},"let")," statement -- we push a new rib onto the stack. You can think that by doing so we\ncan accidentally allow redeclarations of items -- again, no. All items are already defined in the module tree and, as\nfar as when we're building the module tree we operating with strict scopes -- redeclarations are not possible."),(0,o.kt)("p",null,"Example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jc"},'mod a {\n    func nested() {}\n    func nested() {} // Here is an error produced at "Module-tree Building" stage\n}\n')),(0,o.kt)("p",null,"As a result, what does ",(0,o.kt)("inlineCode",{parentName:"p"},"NameResolver"),' actually do from the view of defining is only local variables definitions. Thus at\nthe "Module-Tree Building" stage, we can use an easy concept of modules and suppose to define the things which\ncan be forward-used. And when we resolve names we define the things which cannot be forward-used, these are local\nvariables, function/closure parameters, labels, and lifetimes, keeping name resolution simple.'),(0,o.kt)("h3",{id:"ribs"},"Ribs"),(0,o.kt)("p",null,"Why do we need ribs instead of raw scopes? You've already read about ",(0,o.kt)("inlineCode",{parentName:"p"},"let")," and how ribs solve name shadowing, but there're also some cases when ribs are helpful. Each rib has a kind and each kind has lookup restrictions, e.g. when we enter a local function (a function defined inside another function), we're unable to use the upper function locals -- this rule is described with rib kind. There's also ",(0,o.kt)("inlineCode",{parentName:"p"},"Raw")," kind, that is, just a rib without specific restrictions."),(0,o.kt)("p",null,"Rib does not have to contain any definitions except local variables (actually function parameters too) because\neverything is already defined in the module tree. When a new rib is pushed onto the rib stack specific module from the\ncurrent module children can be bound, it happens all the time except these cases: ",(0,o.kt)("inlineCode",{parentName:"p"},"let")," statement rib, function\nparameters rib (parameter names could collide with ",(0,o.kt)("inlineCode",{parentName:"p"},"const")," generic parameters but we don't want this)."),(0,o.kt)("h4",{id:"module-vs-rib"},"Module vs Rib"),(0,o.kt)("p",null,"The module is a node in the module tree, that is, a scope containing definitions, whereas rib is kind of a part of an\nelongating sword that we poke into the module tree. At first, we start with one rib and root the module, then build up a\nstack of ribs checking the first child of the module until we reach a module without nested modules after that pop the\ncurrent rib and check the next child of the module, and repeat that till we resolve the whole AST."),(0,o.kt)("h3",{id:"nameresolver"},"NameResolver"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"NameResolver")," is the main class of this stage -- it resolves each name in the ",(0,o.kt)("em",{parentName:"p"},"party")," and reports errors if failed to\nresolve."),(0,o.kt)("h4",{id:"paths"},"Paths"),(0,o.kt)("p",null,"We don't have raw identifiers in the code, even in types. So, if we write ",(0,o.kt)("inlineCode",{parentName:"p"},"a + 1"),' from the view of AST, it is\n"PathExpr(A) ...". There\'re some exceptions like labels (e.g. ',(0,o.kt)("inlineCode",{parentName:"p"},"break@myLoop"),") and lifetimes, but their resolution is\nmuch simpler and will be discussed further."),(0,o.kt)("p",null,"All paths, including type paths, are pointing to some definition in the module tree, and as we've already defined\neverything at the previous stage, resolving paths is mostly a simple process."),(0,o.kt)("p",null,"More about path resolution read ",(0,o.kt)("a",{parentName:"p",href:"#path-resolution"},"the further chapter"),"."),(0,o.kt)("h4",{id:"namespaces"},"Namespaces"),(0,o.kt)("p",null,"In ",(0,o.kt)("em",{parentName:"p"},"Jacy"),", you can define type ",(0,o.kt)("inlineCode",{parentName:"p"},"i32"),", function ",(0,o.kt)("inlineCode",{parentName:"p"},"i32"),", or a lifetime with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"i32"),".\nIt is possible because all these items are context-dependent -- you cannot use function as a type and cannot use type alias as a value in an expression.\nAt the module-tree-building stage, we define all items, each in the namespace it belongs to, at the name resolution stage, we lookup for a name in a specific namespace in a module."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jc"},"struct foo {}\n\nfunc foo() {\n    let f: foo;\n}\n")),(0,o.kt)("p",null,"By convention, this code is not a good one, as we use a lower-case name for ",(0,o.kt)("inlineCode",{parentName:"p"},"struct"),", but this code is valid from the view of name resolution."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ModuleTreeBuilder")," defines:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"foo")," in ROOT module in ",(0,o.kt)("em",{parentName:"li"},"type")," namespace"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"foo")," in ROOT module in ",(0,o.kt)("em",{parentName:"li"},"value")," namespace")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"NameResolver")," goes inside the ROOT module and resolves:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"foo")," type for local variable ",(0,o.kt)("inlineCode",{parentName:"li"},"f"),", looking up for it in ",(0,o.kt)("em",{parentName:"li"},"type")," namespace (doesn't even try to find it in ",(0,o.kt)("em",{parentName:"li"},"value")," namespace).")),(0,o.kt)("p",null,"What namespace does each item belong to?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Value namespace",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"func")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"init")," (initializers, aka constructors)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"const")," items and ",(0,o.kt)("inlineCode",{parentName:"li"},"const")," generic parameters"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"static")),(0,o.kt)("li",{parentName:"ul"},"Pattern bindings in ",(0,o.kt)("inlineCode",{parentName:"li"},"let")," locals, ",(0,o.kt)("inlineCode",{parentName:"li"},"for")," loops, ",(0,o.kt)("inlineCode",{parentName:"li"},"match")," (",(0,o.kt)("inlineCode",{parentName:"li"},"if let"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"while let"),"), function parameters and lambda parameters. Just all pattern bindings."))),(0,o.kt)("li",{parentName:"ul"},"Type namespace",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mod")," (modules)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"struct")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"enum")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"type")," (aliases and associated types too)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"trait")),(0,o.kt)("li",{parentName:"ul"},"Generic types")))),(0,o.kt)("p",null,"There are also Lifetime, macro, and label namespaces, but I'll write about them after (especially, macros is not a fully developed idea)."),(0,o.kt)("h4",{id:"result----resolutions"},"Result -- Resolutions"),(0,o.kt)("p",null,"As a result, we've got filled ",(0,o.kt)("inlineCode",{parentName:"p"},"ResStorage")," which contains mapped values ",(0,o.kt)("inlineCode",{parentName:"p"},"name nodeId -> Res"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"Res")," is a structure\ncontaining info about a resolved name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Res")," can be of different kinds as far as some names could point to definitions, some to local variables, etc. Also\n",(0,o.kt)("inlineCode",{parentName:"p"},"Res")," can be ill-formed (of kind ",(0,o.kt)("inlineCode",{parentName:"p"},"Error"),") that is an unresolved name."),(0,o.kt)("p",null,"An important thing that I need to establish is that resolution (",(0,o.kt)("inlineCode",{parentName:"p"},"Res"),") points to the identifier node (either to an\nidentifier of name in ",(0,o.kt)("inlineCode",{parentName:"p"},"Def")," or to a local variable identifier) but key in ",(0,o.kt)("inlineCode",{parentName:"p"},"ResStorage")," map is a node id of a resolved\npath (",(0,o.kt)("inlineCode",{parentName:"p"},"TypePath")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"PathExpr"),"), except labels and lifetimes which are not paths."),(0,o.kt)("h4",{id:"patterns"},"Patterns"),(0,o.kt)("p",null,"What about patterns? We talked about the ",(0,o.kt)("inlineCode",{parentName:"p"},"let")," statement and ",(0,o.kt)("inlineCode",{parentName:"p"},"func")," parameters, but they are patterns. There's\nnothing hard in pattern name resolution -- mostly every identifier, except PathExpr, that appeared in the pattern is\na binding."),(0,o.kt)("h4",{id:"labels-and-lifetimes"},"Labels and lifetimes"),(0,o.kt)("p",null,"TODO"),(0,o.kt)("h4",{id:"lang-items"},(0,o.kt)("inlineCode",{parentName:"h4"},"lang")," items"),(0,o.kt)("p",null,"Some items are required for internal logic, e.g. when we write ",(0,o.kt)("inlineCode",{parentName:"p"},"int?"),", it is an ",(0,o.kt)("inlineCode",{parentName:"p"},"Option<int>")," type, and the compiler must at first find the ",(0,o.kt)("inlineCode",{parentName:"p"},"Option")," ADT to lower ",(0,o.kt)("inlineCode",{parentName:"p"},"int?"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"lang")," is an attribute of the form ",(0,o.kt)("inlineCode",{parentName:"p"},"@lang(name: '[NAME]')"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," is an optional label and should be used to avoid problems if in the future new parameters will be added."),(0,o.kt)("h3",{id:"path-resolution"},"Path resolution"),(0,o.kt)("p",null,"Here the interesting things come up.\nIn ",(0,o.kt)("em",{parentName:"p"},"Jacy"),', a path is actually "any name", just an ',(0,o.kt)("inlineCode",{parentName:"p"},"a")," is a path, ",(0,o.kt)("inlineCode",{parentName:"p"},"path::to::something")," is a path too."),(0,o.kt)("p",null,"For name resolution, we look at the path as at following structure:\n",(0,o.kt)("inlineCode",{parentName:"p"},"path::to::something")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path"),' is a prefix segment, which is always "something from type namespace"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"to")," is also a prefix segment"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"something")," is, so-called, ",(0,o.kt)("em",{parentName:"li"},"target")," segment, this is what the user wants")),(0,o.kt)("p",null,"All prefix segments are items from the ",(0,o.kt)("em",{parentName:"p"},"type")," namespace because only items from the ",(0,o.kt)("em",{parentName:"p"},"type")," namespace can export something outside."),(0,o.kt)("p",null,"One special, but the most popular case is a single-segment path. In that case, we need to think of a path not only as a possible path to an item but also as a local variable.\nIn single-segment paths, local variables have higher precedence, that is, if we see a single-segment path we need at first check if there's a local variable with this name and only if it does not exists -- check for items."),(0,o.kt)("p",null,"The work for resolving items in the module tree is implemented inside ",(0,o.kt)("inlineCode",{parentName:"p"},"PathResolver"),".\nWhen resolving items we need to keep in mind some concepts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Multiple namespaces - ",(0,o.kt)("em",{parentName:"li"},"type"),", ",(0,o.kt)("em",{parentName:"li"},"value"),", etc. namespaces have pretty different logic"),(0,o.kt)("li",{parentName:"ul"},"Function overloading - in ",(0,o.kt)("em",{parentName:"li"},"value")," namespace instead of having pair ",(0,o.kt)("inlineCode",{parentName:"li"},"Name: DefId")," it can be ",(0,o.kt)("inlineCode",{parentName:"li"},"Name: FuncOverloadId"),", which points to, possibly multiple, function definitions"),(0,o.kt)("li",{parentName:"ul"},"Only items from ",(0,o.kt)("em",{parentName:"li"},"type")," namespace export items outside")),(0,o.kt)("p",null,"Even though resolution source code might look hard to comprehend, it's pretty straightforward, however complex.\nAssume we have path ",(0,o.kt)("inlineCode",{parentName:"p"},"path::to::something"),", these steps are included in the workflow:\n0. At the start point we know:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What namespace look for an item in. It is known from context, for example in ",(0,o.kt)("inlineCode",{parentName:"li"},"1 + foo")," we are 100% sure that ",(0,o.kt)("inlineCode",{parentName:"li"},"foo")," is from the ",(0,o.kt)("em",{parentName:"li"},"value")," namespace because it is used in an expression. Having a target namespace is not required for all resolution cases though."),(0,o.kt)("li",{parentName:"ul"},"Suffix (option). E.g. if user has written ",(0,o.kt)("inlineCode",{parentName:"li"},"path::to::function(a: 123, b: 123)")," the suffix is ",(0,o.kt)("inlineCode",{parentName:"li"},"(a:b:)"),".")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Lookup for a module that has a ",(0,o.kt)("inlineCode",{parentName:"li"},"path")," item starting from the current module and going up until the root module",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If the root module is reached and nothing is found -- report an error"))),(0,o.kt)("li",{parentName:"ol"},'When the first "search-module" is found we don\'t repeat step one as only the first segment is resolved relatively and subsequent segments relative to it.'),(0,o.kt)("li",{parentName:"ol"},"Lookup for a ",(0,o.kt)("inlineCode",{parentName:"li"},"to"),' item in the current "search-module".'),(0,o.kt)("li",{parentName:"ol"},"After the ",(0,o.kt)("inlineCode",{parentName:"li"},"path::to")," prefix (this is how I call all segments going before the last one) is successfully resolved and we are now searching inside the ",(0,o.kt)("inlineCode",{parentName:"li"},"path::to")," module, we apply specific rules for the last segment, depending on resolution case."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"read further"))),(0,o.kt)("p",null,"There are three common resolution cases:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Resolve specific item (usage of some item)"),(0,o.kt)("li",{parentName:"ol"},"Resolve single name import (",(0,o.kt)("inlineCode",{parentName:"li"},"use ..."),")"),(0,o.kt)("li",{parentName:"ol"},"Descend to the module and apply custom logic (specific for some ",(0,o.kt)("inlineCode",{parentName:"li"},"use ...")," cases)")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Some terminology:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"use *")," is called use-all import"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"use {...}")," is called use-specific import"),(0,o.kt)("li",{parentName:"ul"},'"target" namespace is the namespace context requires (e.g. in expression ',(0,o.kt)("em",{parentName:"li"},"value"),' namespace is used). "target" segment is the last segment of the path, that in some cases is resolved inside a specific namespace, sometimes in all.'),(0,o.kt)("li",{parentName:"ul"},'"path prefix" or "prefix of the path" is a part of the path that includes all segments begin the last one.'),(0,o.kt)("li",{parentName:"ul"},'"import (-s)" one or more ',(0,o.kt)("inlineCode",{parentName:"li"},"use")," declarations."))),(0,o.kt)("h4",{id:"1-resolving-specific-items"},"1. Resolving specific items"),(0,o.kt)("p",null,"This way is how the resolver works most of the time. When a user writes ",(0,o.kt)("inlineCode",{parentName:"p"},"let a = b")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," is not a local, we need to resolve ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," as some item."),(0,o.kt)("p",null,"As described above, we resolved the ",(0,o.kt)("inlineCode",{parentName:"p"},"path::to")," prefix part, now having the ",(0,o.kt)("inlineCode",{parentName:"p"},"something")," part on hand we lookup for a specific item in the target namespace.\n",(0,o.kt)("inlineCode",{parentName:"p"},"path::")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"to::")," parts were found in the ",(0,o.kt)("em",{parentName:"p"},"type")," namespace because only items from ",(0,o.kt)("em",{parentName:"p"},"type")," namespace can be looked into via path."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Search for an item in the current "search-module"'),(0,o.kt)("li",{parentName:"ol"},"If found, now we have either ",(0,o.kt)("inlineCode",{parentName:"li"},"DefId")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"FuncOverloadId"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In the case of ",(0,o.kt)("inlineCode",{parentName:"li"},"DefId")," we reached the target and just set the resolution binding ",(0,o.kt)("inlineCode",{parentName:"li"},"path.node_id -> found DefId")),(0,o.kt)("li",{parentName:"ul"},"In the case of ",(0,o.kt)("inlineCode",{parentName:"li"},"FuncOverloadId")," we need to get overloads",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If there is a single overload -- just use it"),(0,o.kt)("li",{parentName:"ul"},"If there is a single overload and it is private -- report an error"),(0,o.kt)("li",{parentName:"ul"},"If there are no overloads -- it is a resolution error (actually, having ",(0,o.kt)("inlineCode",{parentName:"li"},"FuncOverloadId")," pointing to empty overloads list is considered a bug as we don't create ",(0,o.kt)("inlineCode",{parentName:"li"},"FuncOverloadId")," unless some function appeared)"),(0,o.kt)("li",{parentName:"ul"},'If there are multiple overloads we need to disambiguate usage of function with suffix, if no suffix is present it is an "ambiguous use of the function"'),(0,o.kt)("li",{parentName:"ul"},"If there are multiple overloads and all of them are not public -- report an error"),(0,o.kt)("li",{parentName:"ul"},"If we have a suffix and no matter how many overloads -- we lookup for an overload by ",(0,o.kt)("inlineCode",{parentName:"li"},"suffix -> DefId")," map"))))),(0,o.kt)("li",{parentName:"ol"},"We always end up with either an error resolution or a ",(0,o.kt)("strong",{parentName:"li"},"single")," definition id.")),(0,o.kt)("h5",{id:"2-resolving-single-name-imports"},"2. Resolving single name imports"),(0,o.kt)("p",null,"When a user writes ",(0,o.kt)("inlineCode",{parentName:"p"},"use path::to::something")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"use path::to::something as rebinding")," we need to resolve the whole path, but, in contrast with ",(0,o.kt)("a",{parentName:"p",href:"#1-resolving-specific-items"},'"specific resolution"'),", we collect all the items with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"something"),".\nAs a result, we got an error or a list of definitions ids."),(0,o.kt)("p",null,"More about importing items read ",(0,o.kt)("a",{parentName:"p",href:"importation-&-module-system"},"Importation & Module System"),"."),(0,o.kt)("h5",{id:"3-descending-to-module-use--and-use-"},"3. Descending to module (",(0,o.kt)("inlineCode",{parentName:"h5"},"use *")," and ",(0,o.kt)("inlineCode",{parentName:"h5"},"use {}"),")"),(0,o.kt)("p",null,"Resolution of ",(0,o.kt)("inlineCode",{parentName:"p"},"use path::to::something::*")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"use {...}")," differ from single name imports resolution -- in these cases we import multiple names."),(0,o.kt)("h6",{id:"use-"},(0,o.kt)("inlineCode",{parentName:"h6"},"use *")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"use path::to::something::*")," is a bad decision for general use in your code, anyway it is useful, for example, in the prelude."),(0,o.kt)("p",null,"The logic of collecting names is following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For each namespace in ",(0,o.kt)("inlineCode",{parentName:"li"},"path::to::something")," module",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Collect each definition"),(0,o.kt)("li",{parentName:"ul"},"Collect all definitions of function overloads",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Only if definition is public"))))),(0,o.kt)("li",{parentName:"ul"},"If no definitions inside ",(0,o.kt)("inlineCode",{parentName:"li"},"path::to::something")," module -- do nothing"),(0,o.kt)("li",{parentName:"ul"},"Apply ",(0,o.kt)("a",{parentName:"li",href:"importation-&-module-system"},"Importation & Module System")," logic")),(0,o.kt)("h6",{id:"use--1"},(0,o.kt)("inlineCode",{parentName:"h6"},"use {}")),(0,o.kt)("p",null,"This kind of ",(0,o.kt)("inlineCode",{parentName:"p"},"use"),' is called "specific", what it does is importing multiple paths relatively to prefix one, i.e. in ',(0,o.kt)("inlineCode",{parentName:"p"},"use path::to::something::{...}")," all imports inside ",(0,o.kt)("inlineCode",{parentName:"p"},"{}")," are resolved relatively to ",(0,o.kt)("inlineCode",{parentName:"p"},"path::to::something"),". That's it, nothing complex, we just descend into the module ",(0,o.kt)("inlineCode",{parentName:"p"},"path::to::something")," and then resolve each import inside ",(0,o.kt)("inlineCode",{parentName:"p"},"{}")," starting the search from ",(0,o.kt)("inlineCode",{parentName:"p"},"path::to::something"),"."))}u.isMDXComponent=!0}}]);