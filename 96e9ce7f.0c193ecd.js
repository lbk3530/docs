(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(9),a=(n(0),n(182)),i={id:"bugBounty",title:"Bug Bounty \ud83d\udcb0",sidebar_label:"Bug Bounty \ud83d\udcb0"},c={id:"bugBounty",isDocsHomePage:!1,title:"Bug Bounty \ud83d\udcb0",description:"Scope",source:"@site/docs/bugBounty.md",permalink:"/docs/docs/bugBounty",editUrl:"https://github.com/DODOEX/docs/edit/master/docs/bugBounty.md",sidebar_label:"Bug Bounty \ud83d\udcb0",sidebar:"someSidebar",previous:{title:"Deployed Infomation",permalink:"/docs/docs/deployedInfo"},next:{title:"Audit",permalink:"/docs/docs/audit"}},l=[{value:"Scope",id:"scope",children:[]},{value:"Rewards",id:"rewards",children:[]},{value:"Disclosure",id:"disclosure",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"scope"},"Scope"),Object(a.b)("p",null,"All contracts in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/DODOEX/dodo-smart-contract"}),"DODO smart contracts repo"),"."),Object(a.b)("p",null,"Sort by importance, ",Object(a.b)("inlineCode",{parentName:"p"},"Core"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Entrance"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Helper"),", the probability of wining reward decreases."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://dodoex.github.io/docs/img/dodo_framework.jpeg",alt:null}))),Object(a.b)("h2",{id:"rewards"},"Rewards"),Object(a.b)("p",null,"Severity of bugs will be assessed under the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.first.org/cvss/calculator/3.0"}),"CVSS Risk Rating")," scale, as follows:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Critical (9.0-10.0): Up to ","$","50,000"),Object(a.b)("li",{parentName:"ul"},"High (7.0-8.9): Up to ","$","10,000"),Object(a.b)("li",{parentName:"ul"},"Medium (4.0-6.9): Up to ","$","2,000"),Object(a.b)("li",{parentName:"ul"},"Low (0.1-3.9): Up to ","$","1,000")),Object(a.b)("p",null,"In addition to assessing severity, rewards will be considered based on the impact of the discovered vulnerability as well as the level of difficulty in discovering such vulnerability."),Object(a.b)("h2",{id:"disclosure"},"Disclosure"),Object(a.b)("p",null,"Any vulnerability or bug discovered must be reported only to the following email: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"mailto:contact@dodoex.io"}),"contact@dodoex.io"),"; must not be disclosed publicly; must not be disclosed to any other person, entity or email address prior to disclosure to the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"mailto:contact@dodoex.io"}),"contact@dodoex.io")," email; and must not be disclosed in any way other than to the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"mailto:contact@dodoex.io"}),"contact@dodoex.io")," email. In addition, disclosure to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"mailto:contact@dodoex.io"}),"contact@dodoex.io")," must be made promptly following discovery of the vulnerability. Please include as much information about the vulnerability as possible, including:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The conditions on which reproducing the bug is contingent."),Object(a.b)("li",{parentName:"ul"},"The steps needed to reproduce the bug or, preferably, a proof of concept."),Object(a.b)("li",{parentName:"ul"},"The potential implications of the vulnerability being abused.")),Object(a.b)("p",null,"A detailed report of a vulnerability increases the likelihood of a reward and may increase the reward amount."),Object(a.b)("p",null,"Anyone who reports a unique, previously-unreported vulnerability that results in a change to the code or a configuration change and who keeps such vulnerability confidential until it has been resolved by our engineers will be recognized publicly for their contribution, if agreed."))}s.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(n),p=r,m=b["".concat(i,".").concat(p)]||b[p]||d[p]||a;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);