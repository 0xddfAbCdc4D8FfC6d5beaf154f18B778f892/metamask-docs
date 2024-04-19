"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8691],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(n),g=r,m=c["".concat(u,".").concat(g)]||c[g]||y[g]||i;return n?a.createElement(m,o(o({ref:t},l),{},{components:n})):a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const i={description:"Set up MetaMask SDK with Infura in your Unity game.",sidebar_position:2,sidebar_label:"Set up Infura",tags:["Unity SDK"]},o="Set up Infura in Unity",s={unversionedId:"how-to/use-sdk/gaming/unity/infura",id:"how-to/use-sdk/gaming/unity/infura",title:"Set up Infura in Unity",description:"Set up MetaMask SDK with Infura in your Unity game.",source:"@site/wallet/how-to/use-sdk/gaming/unity/infura.md",sourceDirName:"how-to/use-sdk/gaming/unity",slug:"/how-to/use-sdk/gaming/unity/infura",permalink:"/code-format/wallet/how-to/use-sdk/gaming/unity/infura",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/gaming/unity/infura.md",tags:[{label:"Unity SDK",permalink:"/code-format/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:2,frontMatter:{description:"Set up MetaMask SDK with Infura in your Unity game.",sidebar_position:2,sidebar_label:"Set up Infura",tags:["Unity SDK"]},sidebar:"walletSidebar",previous:{title:"Connect and sign",permalink:"/code-format/wallet/how-to/use-sdk/gaming/unity/connect-and-sign"},next:{title:"Interact with smart contracts",permalink:"/code-format/wallet/how-to/use-sdk/gaming/unity/smart-contracts/"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2}],l={toc:p},c="wrapper";function y(e){let{components:t,...i}=e;return(0,r.yg)(c,(0,a.A)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"set-up-infura-in-unity"},"Set up Infura in Unity"),(0,r.yg)("p",null,"You can set up ",(0,r.yg)("a",{parentName:"p",href:"/code-format/wallet/concepts/sdk/"},"MetaMask SDK")," with ",(0,r.yg)("a",{parentName:"p",href:"https://docs.infura.io/"},"Infura")," in\nyour Unity game."),(0,r.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"An Infura API key.\nCreate one by following the first two steps in the\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.infura.io/getting-started"},"Infura getting started guide"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/use-an-allowlist"},"An allowlist configured for your API key.")),(0,r.yg)("admonition",{parentName:"li",title:"important",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Your API key, when used with the SDK, is vulnerable to exposure.\nIf someone inspects your dapp's code, they can potentially retrieve your API key and submit\nrequests to Infura, impersonating your account."),(0,r.yg)("p",{parentName:"admonition"},"Use ",(0,r.yg)("a",{parentName:"p",href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/use-an-allowlist"},"allowlists"),"\nto protect against this vulnerability.\nYou can restrict interactions with your API key to specific addresses, origins, user agents, and request methods.\nWe recommend using all allowlist options to maximize the security of your API key and dapp."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"/code-format/wallet/how-to/use-sdk/gaming/unity/"},"MetaMask SDK set up")," in your Unity game."))),(0,r.yg)("h2",{id:"steps"},"Steps"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Open your Unity project with the SDK installed.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Navigate to the game object in your scene (or the Prefab instance) that currently stores the\n",(0,r.yg)("inlineCode",{parentName:"p"},"MetaMask Unity")," script.\nIn the ",(0,r.yg)("inlineCode",{parentName:"p"},"Demo")," scene, this is the ",(0,r.yg)("inlineCode",{parentName:"p"},"MetaMaskUnitySDK")," game object.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Select the ",(0,r.yg)("inlineCode",{parentName:"p"},"MetaMaskUnitySDK")," Prefab to view its properties in the ",(0,r.yg)("strong",{parentName:"p"},"Inspector")," window. ")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In the ",(0,r.yg)("strong",{parentName:"p"},"MetaMask Unity (Script)")," section, enter your Infura API key into the ",(0,r.yg)("strong",{parentName:"p"},"Infura Project\nId")," field."))),(0,r.yg)("p",{align:"center"},(0,r.yg)("p",null,(0,r.yg)("img",{alt:"MetaMask Unity script",src:n(90695).A,width:"600",height:"512"}))),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},"Save your changes.\nThis automatically configures all RPC URLs that Infura supports.")))}y.isMDXComponent=!0},90695:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/unity-infura-9adaae27bdb7cf33527d987bedffce2e.png"}}]);