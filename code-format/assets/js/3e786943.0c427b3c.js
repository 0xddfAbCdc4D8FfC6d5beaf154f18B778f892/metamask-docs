"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8298],{15680:(e,t,a)=>{a.d(t,{xA:()=>o,yg:()=>N});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),y=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=y(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,o=g(e,["components","mdxType","originalType","parentName"]),m=y(a),u=r,N=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return a?n.createElement(N,i(i({ref:t},o),{},{components:a})):n.createElement(N,i({ref:t},o))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var g={};for(var p in t)hasOwnProperty.call(t,p)&&(g[p]=t[p]);g.originalType=e,g[m]="string"==typeof e?e:r,i[1]=g;for(var y=2;y<l;y++)i[y]=a[y];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},56719:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>g,toc:()=>y});var n=a(58168),r=(a(96540),a(15680));const l={description:"Supported networks.",sidebar_position:2},i="Supported networks",g={unversionedId:"gas-api/supported-networks",id:"gas-api/supported-networks",title:"Supported networks",description:"Supported networks.",source:"@site/services/gas-api/supported-networks.md",sourceDirName:"gas-api",slug:"/gas-api/supported-networks",permalink:"/code-format/services/gas-api/supported-networks",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/gas-api/supported-networks.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Supported networks.",sidebar_position:2},sidebar:"servicesSidebar",previous:{title:"Quickstart",permalink:"/code-format/services/gas-api/quickstart"},next:{title:"API reference",permalink:"/code-format/services/gas-api/api-reference/"}},p={},y=[{value:"Arbitrum",id:"arbitrum",level:2},{value:"Avalanche (C-Chain)",id:"avalanche-c-chain",level:2},{value:"Base",id:"base",level:2},{value:"BNB Chain",id:"bnb-chain",level:2},{value:"Cronos",id:"cronos",level:2},{value:"Ethereum",id:"ethereum",level:2},{value:"Fantom",id:"fantom",level:2},{value:"Filecoin",id:"filecoin",level:2},{value:"Linea",id:"linea",level:2},{value:"Optimism",id:"optimism",level:2},{value:"Polygon",id:"polygon",level:2},{value:"zkSync Era",id:"zksync-era",level:2}],o={toc:y},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"supported-networks"},"Supported networks"),(0,r.yg)("p",null,"The Gas API supports multiple networks."),(0,r.yg)("p",null,"Specify the chain ID in your request to interact with the relevant network."),(0,r.yg)("h2",{id:"arbitrum"},"Arbitrum"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Network"),(0,r.yg)("th",{parentName:"tr",align:null},"Chain ID"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Mainnet"),(0,r.yg)("td",{parentName:"tr",align:null},"42161")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Nova"),(0,r.yg)("td",{parentName:"tr",align:null},"42170")))),(0,r.yg)("h2",{id:"avalanche-c-chain"},"Avalanche (C-Chain)"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Network"),(0,r.yg)("th",{parentName:"tr",align:null},"Chain ID"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Mainnet"),(0,r.yg)("td",{parentName:"tr",align:null},"43114")))),(0,r.yg)("h2",{id:"base"},"Base"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Network"),(0,r.yg)("th",{parentName:"tr",align:null},"Chain ID"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Mainnet"),(0,r.yg)("td",{parentName:"tr",align:null},"8453")))),(0,r.yg)("h2",{id:"bnb-chain"},"BNB Chain"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Network"),(0,r.yg)("th",{parentName:"tr",align:null},"Chain ID"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Mainnet"),(0,r.yg)("td",{parentName:"tr",align:null},"56")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"opBNB (layer 2)"),(0,r.yg)("td",{parentName:"tr",align:null},"204")))),(0,r.yg)("h2",{id:"cronos"},"Cronos"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Network"),(0,r.yg)("th",{parentName:"tr",align:null},"Chain ID"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Mainnet"),(0,r.yg)("td",{parentName:"tr",align:null},"25")))),(0,r.yg)("h2",{id:"ethereum"},"Ethereum"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Network"),(0,r.yg)("th",{parentName:"tr",align:null},"Chain ID"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Mainnet"),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Goerli"),(0,r.yg)("td",{parentName:"tr",align:null},"5")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Sepolia"),(0,r.yg)("td",{parentName:"tr",align:null},"11155111")))),(0,r.yg)("h2",{id:"fantom"},"Fantom"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Network"),(0,r.yg)("th",{parentName:"tr",align:null},"Chain ID"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Mainnet"),(0,r.yg)("td",{parentName:"tr",align:null},"250")))),(0,r.yg)("h2",{id:"filecoin"},"Filecoin"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Network"),(0,r.yg)("th",{parentName:"tr",align:null},"Chain ID"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Mainnet"),(0,r.yg)("td",{parentName:"tr",align:null},"314")))),(0,r.yg)("h2",{id:"linea"},"Linea"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Network"),(0,r.yg)("th",{parentName:"tr",align:null},"Chain ID"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Mainnet"),(0,r.yg)("td",{parentName:"tr",align:null},"59144")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Testnet"),(0,r.yg)("td",{parentName:"tr",align:null},"59140")))),(0,r.yg)("h2",{id:"optimism"},"Optimism"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Network"),(0,r.yg)("th",{parentName:"tr",align:null},"Chain ID"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Mainnet"),(0,r.yg)("td",{parentName:"tr",align:null},"10")))),(0,r.yg)("h2",{id:"polygon"},"Polygon"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Network"),(0,r.yg)("th",{parentName:"tr",align:null},"Network ID"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Mainnet"),(0,r.yg)("td",{parentName:"tr",align:null},"137")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Mumbai"),(0,r.yg)("td",{parentName:"tr",align:null},"80001")))),(0,r.yg)("h2",{id:"zksync-era"},"zkSync Era"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Network"),(0,r.yg)("th",{parentName:"tr",align:null},"Chain ID"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Mainnet"),(0,r.yg)("td",{parentName:"tr",align:null},"324")))))}d.isMDXComponent=!0}}]);