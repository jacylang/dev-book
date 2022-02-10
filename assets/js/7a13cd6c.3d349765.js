"use strict";(self.webpackChunkdev_book=self.webpackChunkdev_book||[]).push([[816],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11558:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={},l="Invert Rust for usability",p={unversionedId:"appendices/backlog/invert-rust",id:"appendices/backlog/invert-rust",isDocsHomePage:!1,title:"Invert Rust for usability",description:"This article is deprecated as far as the key concept was invalidly described, there're replacement in ideas/invert-rust which is right",source:"@site/docs/appendices/backlog/invert-rust.md",sourceDirName:"appendices/backlog",slug:"/appendices/backlog/invert-rust",permalink:"/dev-book/docs/appendices/backlog/invert-rust",editUrl:"https://github.com/jacylang/dev-book/edit/master/docs/appendices/backlog/invert-rust.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Invert Rust",permalink:"/dev-book/docs/appendices/backlog/invert-rust-v2"},next:{title:"Cheatsheets",permalink:"/dev-book/docs/appendices/cheatsheets/index"}},c=[{value:"This article is deprecated as far as the key concept was invalidly described, there&#39;re replacement in ideas/invert-rust which is right",id:"this-article-is-deprecated-as-far-as-the-key-concept-was-invalidly-described-therere-replacement-in-ideasinvert-rust-which-is-right",children:[],level:2},{value:"Why not Rust-like",id:"why-not-rust-like",children:[{value:"Move by default",id:"move-by-default",children:[],level:3},{value:"The problems I see",id:"the-problems-i-see",children:[{value:"Copy-Types borrowing",id:"copy-types-borrowing",children:[],level:4},{value:"Lack of explicitness",id:"lack-of-explicitness",children:[],level:4},{value:"Actual types",id:"actual-types",children:[],level:4},{value:"Generics (!important)",id:"generics-important",children:[],level:4},{value:"How do I actually pass-by-value? (!important)",id:"how-do-i-actually-pass-by-value-important",children:[],level:4},{value:"<code>Clone</code> trait (!important)",id:"clone-trait-important",children:[],level:4},{value:"Patterns",id:"patterns",children:[],level:4}],level:3},{value:"Examples",id:"examples",children:[{value:"&quot;Passes&quot;",id:"passes",children:[{value:"Assignment",id:"assignment",children:[],level:5},{value:"Functions",id:"functions",children:[],level:5}],level:4}],level:3},{value:"Rules",id:"rules",children:[{value:"1. If non-copy type passed to function or assigned, it is borrowed",id:"1-if-non-copy-type-passed-to-function-or-assigned-it-is-borrowed",children:[],level:4},{value:"2. Moves are explicit in signatures and in calls",id:"2-moves-are-explicit-in-signatures-and-in-calls",children:[],level:4},{value:"3. Data, stored in structures must be explicitly qualified as reference",id:"3-data-stored-in-structures-must-be-explicitly-qualified-as-reference",children:[],level:4}],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"invert-rust-for-usability"},"Invert Rust for usability"),(0,r.kt)("h2",{id:"this-article-is-deprecated-as-far-as-the-key-concept-was-invalidly-described-therere-replacement-in-ideasinvert-rust-which-is-right"},"This article is deprecated as far as the key concept was invalidly described, there're replacement in ideas/invert-rust which is right"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Please read this"),"\nWhen reading my ideas keep in mind that it is a mind flow but not a RFC. While you read you can how my opinion is\njumping back and forth, so statements described earlier can conflict with some later.")),(0,r.kt)("p",null,"This idea is really complex and it is hard to predict if it would work."),(0,r.kt)("p",null,"As far as I want ",(0,r.kt)("em",{parentName:"p"},"Jacy")," to be aimed at more high-level than Rust do, I appreciate usability in the way when we save the\nmost important aspects of Rustish safety and power with a lack of some low-level features."),(0,r.kt)("h2",{id:"why-not-rust-like"},"Why not Rust-like"),(0,r.kt)("p",null,"What is problematic for me in Rust design (this is not a list of Rust cons, no, these are things I find too\nexplicit/low-level, etc.)."),(0,r.kt)("h3",{id:"move-by-default"},"Move by default"),(0,r.kt)("p",null,'Rust is "always move" PL, which means that even primitives are moved but copied before. This is a good solution and I\nlike it more than C++ where we need to write ',(0,r.kt)("inlineCode",{parentName:"p"},"const &")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"std::move")," always everywhere."),(0,r.kt)("p",null,"Anyway, most of the time we pass non-Copy types as immutable references, that is, we rarely need to get a reference to\nmodify its underlying value. Moves, as I think, used more often than ",(0,r.kt)("inlineCode",{parentName:"p"},"&mut")," but not as often as immutable references."),(0,r.kt)("p",null,'The solution is to have immutable references by default, that is, we replace "Move or Copy" with "Borrow or Copy". I\'ll\ncall this PIR (Pass by Immutable Reference) further.'),(0,r.kt)("p",null,'I want to note that I don\'t really like the idea of dividing all programming languages to groups like "pass-by-value" or\n"pass-by-reference", etc. Because most of the languages mix it, or "pass-by-reference" in case means "make a reference\nand pass-by-value", anyway I\'ll use PIR as it is simple to describe common cases. Just keep in mind that it mostly about\nassignment and passing to functions.'),(0,r.kt)("p",null,'Doing so requires "move" to be a first-class operation, it can be a specific operator, e.g. prefix ',(0,r.kt)("inlineCode",{parentName:"p"},"^")," to move or just\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"move")," keyword."),(0,r.kt)("p",null,"Example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jc"},"struct Struct {\n    field: i32,\n}\n\nfunc printByRef(instance: A) {\n    print(instance.field);\n}\n\nfunc printMove(move instance: A) {\n    print(instance.field);\n}\n\nfunc printNum(num: i32) {\n    print(num);\n}\n\nfunc changeNum(ref num: i32) {\n    num = 0;\n}\n\nfunc main {\n    let instance = Struct {field: 666};\n\n    printByRef(instance); // `instance` is not moved here like in Rust\n    printByRef(instance); // `instance` here and before is passed by reference\n\n    printMove(move instance); // `move` is explicit\n    // printMove(move instance); // Error: `instance` is moved\n    // printByRef(instance); // Same error: `instance` is moved\n\n    let num = 1000;\n\n    printNum(num);\n    printNum(num); // Everything is find -- `i32` is a Copy-type\n\n    let mut var = 0xB16B00B5;\n\n    print(var); // Prints 2976579765\n    changeNum(var);\n    print(var); // Prints 0\n    \n\n    let mut a = Struct {field: 100};\n    \n    let mut r0 = a;\n    let mut r1 = a; // Error: Cannot borrow `a` as mutable more than once\n}\n")),(0,r.kt)("p",null,"Rust revolves around an idea of owning, as ",(0,r.kt)("em",{parentName:"p"},"Jacy"),' does, thus being hardly inspired by Rust we can consider "making a\nreference" not being a "usage". What this means is just all about how we see the language to take a place in world of\ntype theory, saying that we\'ve got affine type, that is, value must be used one or no times, we can say that some cases\nare not under these rules. That\'s what Rust does -- making reference to some value, we do not use the value just\nimmutably borrowing it. Considering this, our hands are clean \ud83d\ude03. Anyway, affine types in Rust give us some cleaner code\nthan PIR, as we make references implicitly, thus it opens a vista to do break linearity of program.'),(0,r.kt)("h3",{id:"the-problems-i-see"},"The problems I see"),(0,r.kt)("p",null,'I think it is actually impossible to replace Rustish "move by default" with "ref by default" and break everything. The\nonly problems that come up from this solution appear from the view of semantics.'),(0,r.kt)("h4",{id:"copy-types-borrowing"},"Copy-Types borrowing"),(0,r.kt)("p",null,"Having PIR we cannot get rid of references in semantics, as far as we don't borrow Copy-types and so need a way to pass\nthem by reference. E.g. we have a variable storing ",(0,r.kt)("inlineCode",{parentName:"p"},"i32"),", that is, it won't be passed as PIR, and if we need to have a\nfunction modifying ",(0,r.kt)("inlineCode",{parentName:"p"},"i32")," we need to explicitly pass it by reference."),(0,r.kt)("p",null,"Thus let's imagine we have ",(0,r.kt)("inlineCode",{parentName:"p"},"ref")," keyword which is used in both function signature and passing to function."),(0,r.kt)("h4",{id:"lack-of-explicitness"},"Lack of explicitness"),(0,r.kt)("p",null,"E.g. in Rust when we want to slice an array, we write ",(0,r.kt)("inlineCode",{parentName:"p"},"let slice = &array[from..to]"),", 'cause the size of the slice is\nnot known at compile-time, so we cannot allocate it on the stack. In PIR it would be ",(0,r.kt)("inlineCode",{parentName:"p"},"let slice = array[from..to]"),", as\nfar as the slice is not a Copy-Type (same in Rust). That's just an example of what we hide with PIR but not a problem."),(0,r.kt)("h4",{id:"actual-types"},"Actual types"),(0,r.kt)("p",null,"If we consider that a type which is not a Copy-Type and passed without any qualifiers -- it is a reference to type, then\nthis is a reference type. So, let's assume we have some intrinsic method to get type of an expression as string, what\nwill it print for function that accepts ",(0,r.kt)("inlineCode",{parentName:"p"},"Struct {field: 1234}"),"? -- ",(0,r.kt)("inlineCode",{parentName:"p"},"Struct")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"&Struct"),"."),(0,r.kt)("p",null,"As far as we don't remove references at all (they are still required to be in the language) -- the type is... \ud83e\udd41\ud83e\udd41\ud83e\udd41\n",(0,r.kt)("inlineCode",{parentName:"p"},"&Struct"),". Yeah, user have written ",(0,r.kt)("inlineCode",{parentName:"p"},"Struct")," but that's not the truth as all non-copy-types are passed by reference. And\nas far as we anyway separate concepts of references and values, we need it to be a reference."),(0,r.kt)("h4",{id:"generics-important"},"Generics (!important)"),(0,r.kt)("p",null,"This is really interesting problem to solve. As we do not have GC we cannot rely on the fact that everything will be\ncleared as we put ",(0,r.kt)("inlineCode",{parentName:"p"},"free")," at CT. The problem is not that ",(0,r.kt)("inlineCode",{parentName:"p"},"Vec<Struct>")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"&Vec<Struct>"),"... No, the problem is that is it\n",(0,r.kt)("inlineCode",{parentName:"p"},"&Vec<Struct>")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"&Vec<&Struct>"),"?! Rapidly answering this question I would say, it is a ",(0,r.kt)("inlineCode",{parentName:"p"},"&Vec<Struct>"),", because having\n",(0,r.kt)("inlineCode",{parentName:"p"},"&Vec<&Struct>")," we will require user to always have all ",(0,r.kt)("inlineCode",{parentName:"p"},"Struct"),"s alive as long as ",(0,r.kt)("inlineCode",{parentName:"p"},"Vec")," is used, as far as it contains\nreferences."),(0,r.kt)("p",null,"From the problem of generics I deduce maybe the most important rule about PIR:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"PIR means prepending passed non-copy type with reference, but not that all types are reference-types by default"))),(0,r.kt)("p",null,"Considering this, everything becomes more clear and I hope that I don't miss anything. \ud83d\ude10"),(0,r.kt)("h4",{id:"how-do-i-actually-pass-by-value-important"},"How do I actually pass-by-value? (!important)"),(0,r.kt)("p",null,"Same as generics this one is really complex question too. Keep in mind that we aren't talking about \"How to\npass-by-value could be implemented\" from view of code generation -- this is an answered question. The problem is in the\nsemantics and syntax. What am I talking about is that removing explicit reference types mostly everywhere we get lack of\nopportunity to qualify value type. Further I'm gonna describe a list of all rules about PIR, so here won't be\ncomprehensive solution as it would be more understandable as if we just look at specific rules. Anyway, here it is."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jc"},'// `Kitty` is a structure declared somewhere\nfunc foo(kitty: Kitty) {\n    print(kitty.msg);\n}\n\nfunc main {\n    let kitty = Kitty {msg: "Meow, bitch"};\n    foo(kitty);\n}\n')),(0,r.kt)("p",null,"Here I meant to copy ",(0,r.kt)("inlineCode",{parentName:"p"},"kitty"),", but because of PIR ",(0,r.kt)("inlineCode",{parentName:"p"},"kitty")," is passed by reference. STOP, it is C++ and not Rust, we don't\ncopy by default, and we don't move by default. So... How do I make it creating a copy of ",(0,r.kt)("inlineCode",{parentName:"p"},"kitty"),"?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Overload ",(0,r.kt)("inlineCode",{parentName:"li"},"Copy")," trait?"),(0,r.kt)("li",{parentName:"ul"},"Overload ",(0,r.kt)("inlineCode",{parentName:"li"},"Clone")," trait? Both."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Copy")," - When type overloads ",(0,r.kt)("inlineCode",{parentName:"li"},"Copy")," trait, it is always (forget about optimizations) copied, thus no reference\ncreated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Clone")," - When type overloads ",(0,r.kt)("inlineCode",{parentName:"li"},"Clone")," trait, it is passed by reference!")),(0,r.kt)("p",null,"The rule about ",(0,r.kt)("inlineCode",{parentName:"p"},"Clone")," sounds right as we don't actually modify the source and we just make a copy explicitly. There's\nstill a problem -- why do we need a reference as we cloned source, we'll just add additional work for run-time which is\nnot actually required?"),(0,r.kt)("h4",{id:"clone-trait-important"},(0,r.kt)("inlineCode",{parentName:"h4"},"Clone")," trait (!important)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Clone")," trait in ",(0,r.kt)("em",{parentName:"p"},"Jacy")," as in Rust is used to provide explicit way to copy source object."),(0,r.kt)("p",null,"Let's look at an example similar to one above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jc"},'// Assume somewhere exists the `Kitty` type and it implements the `Clone` trait\nfunc foo(kitty: Kitty) {\n    print(kitty.msg);\n}\n\nfunc main {\n    let kitty = Kitty {msg: "Meow, bitch"};\n    foo(kitty.clone());\n} \n')),(0,r.kt)("p",null,"We made a clone, but is there any reason to pass it by reference? It is a rhetorical question, and the answer is NO, and\nit forces me to describe implicit-move rules. In C++, it is common to optimize some copy cases to move, e.g., when we\nreturn a local variable, it is moved -- it is called copy/move elision. In ",(0,r.kt)("em",{parentName:"p"},"Jacy")," these cases are wider as we need not\nonly to handle copies but also references."),(0,r.kt)("h4",{id:"patterns"},"Patterns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"let")," bindings and ",(0,r.kt)("inlineCode",{parentName:"p"},"func")," parameters are patterns, also there're ",(0,r.kt)("inlineCode",{parentName:"p"},"if let")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"match"),". Do patterns need to be PIR or\nnot? -- Actually, they MUST."),(0,r.kt)("p",null,"Let's assume we've got."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jc"},"struct StructType {\n    field: Vec<i32>,\n}\n")),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"StructType.field")," is not of type ",(0,r.kt)("inlineCode",{parentName:"p"},"&Vec<i32>"),", it is non-reference, because PIR is only about passing values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jc"},"let a: StructType = structInstance; // `structInstance` is non-copy type\n\n// Desugared to\nlet a: &StructType = &structInstance;\n// or\nlet ref a: &StructType = structInstance;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jc"},"func foo(param: StructType);\nfoo(structInstance);\n\n// Desugared to\nfunc foo(param: &StructType);\nfoo(&structInstance);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jc"},"match a {\n    StructType {field} => // ...\n}\n\n// Desugared to\nmatch &a {\n    StructType {ref field} => // ...\n}\n")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("h4",{id:"passes"},'"Passes"'),(0,r.kt)("h5",{id:"assignment"},"Assignment"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a = b")," in Rust is ",(0,r.kt)("inlineCode",{parentName:"p"},"a = move b")," but with PIR it will become ",(0,r.kt)("inlineCode",{parentName:"p"},"a = &b"),", if ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," is another variable of non-copy type."),(0,r.kt)("p",null,"Let's look at examples to grasp when variable is automatically becomes a reference and where not."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jc"},"let a = StructType {field: Vec::new()};\nlet b = a;\n")),(0,r.kt)("p",null,"Here, ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," is of type ",(0,r.kt)("inlineCode",{parentName:"p"},"StructType")," because of move elision, but ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," would be ",(0,r.kt)("inlineCode",{parentName:"p"},"&StructType")," as it is automatically\nborrowed."),(0,r.kt)("h5",{id:"functions"},"Functions"),(0,r.kt)("p",null,"When we create a function like ",(0,r.kt)("inlineCode",{parentName:"p"},"func foo(param: String)"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"param")," is of type ",(0,r.kt)("inlineCode",{parentName:"p"},"&String"),". To make it mutable type must be\nprepended with ",(0,r.kt)("inlineCode",{parentName:"p"},"mut"),", so it gonna look like ",(0,r.kt)("inlineCode",{parentName:"p"},"mut String")," which is actually a ",(0,r.kt)("inlineCode",{parentName:"p"},"&mut String"),"."),(0,r.kt)("p",null,"Copy-types (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"i32"),") passed by copy, that is, they are passed by value and copied. So, if we want to change the value\nof some variable containing copy type we would write ",(0,r.kt)("inlineCode",{parentName:"p"},"func foo(param: ref mut i32)")," and must be explicitly passed with\n",(0,r.kt)("inlineCode",{parentName:"p"},"ref mut")," prefix."),(0,r.kt)("h3",{id:"rules"},"Rules"),(0,r.kt)("p",null,"Finally, after reviewing some cases, I'd like to reduce them to the list of rules."),(0,r.kt)("h4",{id:"1-if-non-copy-type-passed-to-function-or-assigned-it-is-borrowed"},"1. If non-copy type passed to function or assigned, it is borrowed"),(0,r.kt)("p",null,"Examples."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jc"},'func foo(name: String) {\n    print("My name is $name");\n}\n\nfunc main {\n    let savedName = String::from("Mr. Doctor");\n    let name = savedName; // `savedName` is not either copied or moved -- `name` is an immutable reference to `savedName`\n    foo(name); // `name` is not moved -- it is passed by immutable reference\n}\n')),(0,r.kt)("h4",{id:"2-moves-are-explicit-in-signatures-and-in-calls"},"2. Moves are explicit in signatures and in calls"),(0,r.kt)("p",null,"Example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jc"},'func foo(move name: String) {\n    print("My name is $name");\n}\n\nfunc main {\n    let name = "Brendan Eich";\n    foo(move name); // `name` must be moved explicitly\n}\n')),(0,r.kt)("h4",{id:"3-data-stored-in-structures-must-be-explicitly-qualified-as-reference"},"3. Data, stored in structures must be explicitly qualified as reference"),(0,r.kt)("p",null,"Example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jc"},"struct Data {\n    inner: Vec<i32>\n}\n\nstruct Struct {\n    data: &Data,\n}\n\nfunc main {\n    let data = Data {inner: Vec::from([1, 2, 3])};\n    let s = Struct {data: &data};\n\n    // let s2 = Struct {data: data} // Error: expected `&Data` type for `data`\n}\n")),(0,r.kt)("p",null,"Actually, this is just an example where we omit usage of lifetimes. No-lifetimes solutions gonna be researched in\nfurther ideas."))}d.isMDXComponent=!0}}]);