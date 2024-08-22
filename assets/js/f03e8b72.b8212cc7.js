"use strict";(self.webpackChunkmy_learnings=self.webpackChunkmy_learnings||[]).push([[468],{9084:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=n(4848),t=n(8453);const s={sidebar_position:6,Title:"Arrays",Description:"Information on Arrays in JavaScript"},i="Arrays",l={id:"JavaScript/Arrays",title:"Arrays",description:"Array is a datastructure.",source:"@site/docs/JavaScript/Arrays.md",sourceDirName:"JavaScript",slug:"/JavaScript/Arrays",permalink:"/learndocs/JavaScript/Arrays",draft:!1,unlisted:!1,editUrl:"https://github.com/stevenovak123/learndocs/tree/master/docs/JavaScript/Arrays.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,Title:"Arrays",Description:"Information on Arrays in JavaScript"},sidebar:"tutorialSidebar",previous:{title:"Functions",permalink:"/learndocs/JavaScript/Functions"},next:{title:"Objects",permalink:"/learndocs/JavaScript/Objects"}},o={},c=[{value:"Array Operations",id:"array-operations",level:2},{value:"Array Destructuring",id:"array-destructuring",level:2},{value:"Spread operator &amp; Rest pattern",id:"spread-operator--rest-pattern",level:2},{value:"For-of loop",id:"for-of-loop",level:2},{value:"Array Methods",id:"array-methods",level:2},{value:"Array.slice()",id:"arrayslice",level:3},{value:"Array.splice()",id:"arraysplice",level:3},{value:"Array.reverse()",id:"arrayreverse",level:3},{value:"Array.concat()",id:"arrayconcat",level:3},{value:"Array.join()",id:"arrayjoin",level:3}];function d(e){const r={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h1,{id:"arrays",children:"Arrays"}),"\n",(0,a.jsx)(r.p,{children:"Array is a datastructure.\r\nIt is big container in which we can throw variables and store them together.\r\nThere are different ways that an array can be created"}),"\n",(0,a.jsx)(r.p,{children:"Example"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-javascript",children:"// literal syntax\r\nconst friends = ['Steve', 'Peter', 'Paul'];\r\nconst years = new Array(1991, 1984, 2001, 2003);\n"})}),"\n",(0,a.jsx)(r.p,{children:"Arrays are 0 indexed."}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-javascript",children:"console.log(friends[0]); // output => Steve\r\nconsole.log(friends[2]); // output => Paul\n"})}),"\n",(0,a.jsx)(r.h2,{id:"array-operations",children:"Array Operations"}),"\n",(0,a.jsx)(r.p,{children:"There are multiple array methods. Often used are"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsx)(r.li,{children:"length : gives the size of the array."}),"\n",(0,a.jsx)(r.li,{children:"push : adds an element to the end of the array. Returns the length of the array."}),"\n",(0,a.jsx)(r.li,{children:"unshift : adds to the start of the array."}),"\n",(0,a.jsxs)(r.li,{children:["pop : remove the last element of the array. Returns the ",(0,a.jsx)(r.em,{children:"popped"})," element."]}),"\n",(0,a.jsx)(r.li,{children:"shift : remove the first element of the array. Returns the removed element."}),"\n",(0,a.jsx)(r.li,{children:"indexOf : return the index at which the element is located."}),"\n",(0,a.jsxs)(r.li,{children:["includes : returns a boolean depending on the element being present or not. Uses strict equality ",(0,a.jsx)(r.code,{children:"==="}),"."]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"array-destructuring",children:"Array Destructuring"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays into distnct variables.","\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"The original array is not affected."}),"\n"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:"let a, b;\r\n[a, b] = [10, 20];\r\nconsole.log(a); // output => 10\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"spread-operator--rest-pattern",children:"Spread operator & Rest pattern"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["Spread operators helps in spreading the array into a single variable.","\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["Syntax is ",(0,a.jsx)(r.code,{children:"[...]"}),"."]}),"\n",(0,a.jsx)(r.li,{children:"It expands an array into its elements."}),"\n"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:"const arr = [7, 6, 8];\r\nconst newArr = [1, 2, 3, ...arr];\r\nconsole.log(newArr); //output=> 1,2,3,7,6,8\n"})}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"It helps creates a shallow copy of the array."}),"\n",(0,a.jsx)(r.li,{children:"Join 2 or more arrays."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Rest pattern"})," has the same syntax.\r\n-It is used to pack all elements in an array.\r\n-Used on the left of the assignment.","\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"It must be the last element."}),"\n",(0,a.jsx)(r.li,{children:"Only 1 rest pattern in an assignment."}),"\n"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:"const [a, b, ...others] = [1, 2, 3, 4, 5, 6];\r\nconsole.log(a, b); //output => 1,2\r\nconsole.log(others); // output => 3,4,5,6\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"for-of-loop",children:"For-of loop"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"This is new way of looping over arrays."}),"\n",(0,a.jsx)(r.li,{children:"It lets you loop over iterables."}),"\n",(0,a.jsx)(r.li,{children:"It gives you the value."}),"\n"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:"const items = ['Steve', 'Dsouza', 'JavaScript'];\r\nfor (const name of item) {\r\n  console.log(name);\r\n} // ouput=> Steve Dsouza JavaScript\n"})}),"\n",(0,a.jsx)(r.h2,{id:"array-methods",children:"Array Methods"}),"\n",(0,a.jsx)(r.p,{children:"They are functions attached to Array objects. These are special built in functions that can be accessed."}),"\n",(0,a.jsx)(r.h3,{id:"arrayslice",children:"Array.slice()"}),"\n",(0,a.jsx)(r.p,{children:"We can extract the array without modifying the original array. We have to pass a start parameter, and optionally the end parameter. The end parameter is not included in the sliced array. Can use negative index to start from the end"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:"let arr=['s','t','e','v','e']\r\n// elements from index to till the end\r\nconsole.log(arr.slice(2))  // Output => ['e','v','e']\r\n// start and end \r\nconsole.log(arr.slice(2,4)) // Output => ['e','v']\r\n\n"})}),"\n",(0,a.jsx)(r.h3,{id:"arraysplice",children:"Array.splice()"}),"\n",(0,a.jsx)(r.p,{children:"It is similar to slice but it mutates the original array.\r\nThe syntax is splice(start, deleteCount, itemN)"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:"let arr=['s','t','e','v','e']\r\n// elements from index to till the end\r\nconsole.log(arr.splice(2))  // Output => ['e','v','e']\r\n// start and end \r\nconsole.log(arr) // Output => [ 's', 't' ]\n"})}),"\n",(0,a.jsx)(r.h3,{id:"arrayreverse",children:"Array.reverse()"}),"\n",(0,a.jsx)(r.p,{children:"It reverses the array. It mutates the original array."}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:"let arr=['s','t','e','v','e']\r\nconsole.log(arr.reverse())  // Output => ['e','v','e','t,'s']\n"})}),"\n",(0,a.jsx)(r.h3,{id:"arrayconcat",children:"Array.concat()"}),"\n",(0,a.jsx)(r.p,{children:"Concatenates two arrays together. does not mutate the original array."}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:"let arr=['s','t','e','v','e']\r\nlet arr2=['d','s','o','u','z','a']\r\nconsole.log(arr.concat(arr2))  // Output => ['s','t','e','v','e','d','s','o','u','z','a']\n"})}),"\n",(0,a.jsx)(r.h3,{id:"arrayjoin",children:"Array.join()"}),"\n",(0,a.jsx)(r.p,{children:"Joins the array together. Gives an output of string."}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:"const elements = ['Fire', 'Air', 'Water'];\r\nconsole.log(elements.join('-')); // Output => \"Fire-Air-Water\"\n"})})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>l});var a=n(6540);const t={},s=a.createContext(t);function i(e){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);