"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5569],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>g});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(96540),r=a(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,o),hidden:a},t)}},4865:(e,t,a)=>{a.d(t,{A:()=>m});var n=a(58168),r=a(96540),l=a(20053),o=a(23104),s=a(47751),i=a(92303);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),n=c[a].value;n!==s&&(d(t),i(n))},g=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:g,onClick:m},o,{className:(0,l.A)("tabs__item",u.tabItem,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function p(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function d(e){const t=(0,s.u)(e);return r.createElement("div",{className:(0,l.A)("tabs-container",u.tabList)},r.createElement(c,(0,n.A)({},e,t)),r.createElement(p,(0,n.A)({},e,t)))}function m(e){const t=(0,i.A)();return r.createElement(d,(0,n.A)({key:String(t)},e))}},47751:(e,t,a)=>{a.d(t,{u:()=>d});var n=a(96540),r=a(56347),l=a(57485),o=a(31682),s=a(89466);function i(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??i(a);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const o=(0,r.W6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(o.location.search);t.set(s,e),o.replace({...o.location,search:t.toString()})}),[s,o])]}function d(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=u(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[d,m]=p({queryString:a,groupId:r}),[g,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,s.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),h=(()=>{const e=d??g;return c({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),m(e),y(e)}),[m,y,l]),tabValues:l}}},49122:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(58168),r=(a(96540),a(15680)),l=a(4865),o=a(19365);const s={sidebar_label:"iOS",sidebar_position:1,toc_max_heading_level:4,description:"Set up the SDK in your iOS dapp.",tags:["iOS SDK"]},i="Use MetaMask SDK with iOS",u={unversionedId:"how-to/use-sdk/mobile/ios",id:"how-to/use-sdk/mobile/ios",title:"Use MetaMask SDK with iOS",description:"Set up the SDK in your iOS dapp.",source:"@site/wallet/how-to/use-sdk/mobile/ios.md",sourceDirName:"how-to/use-sdk/mobile",slug:"/how-to/use-sdk/mobile/ios",permalink:"/code-format/wallet/how-to/use-sdk/mobile/ios",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/mobile/ios.md",tags:[{label:"iOS SDK",permalink:"/code-format/wallet/tags/i-os-sdk"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"iOS",sidebar_position:1,toc_max_heading_level:4,description:"Set up the SDK in your iOS dapp.",tags:["iOS SDK"]},sidebar:"walletSidebar",previous:{title:"Mobile",permalink:"/code-format/wallet/how-to/use-sdk/mobile/"},next:{title:"Android",permalink:"/code-format/wallet/how-to/use-sdk/mobile/android"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Import the SDK",id:"2-import-the-sdk",level:3},{value:"3. Connect your dapp",id:"3-connect-your-dapp",level:3},{value:"4. Call methods",id:"4-call-methods",level:3},{value:"Example: Get chain ID",id:"example-get-chain-id",level:4},{value:"Example: Get account balance",id:"example-get-account-balance",level:4},{value:"Example: Send transaction",id:"example-send-transaction",level:4},{value:"Example",id:"example",level:2}],d={toc:p},m="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"use-metamask-sdk-with-ios"},"Use MetaMask SDK with iOS"),(0,r.yg)("p",null,"Import ",(0,r.yg)("a",{parentName:"p",href:"/code-format/wallet/concepts/sdk/"},"MetaMask SDK")," into your native iOS dapp to enable your\nusers to easily connect with their MetaMask Mobile wallet."),(0,r.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"MetaMask Mobile version 7.6.0 or later installed on your target device (that is, a physical device\nor emulator).\nYou can install MetaMask Mobile from the ",(0,r.yg)("a",{parentName:"p",href:"https://apps.apple.com/us/app/metamask-blockchain-wallet/id1438144202"},"App Store"),"\nor clone and compile MetaMask Mobile from ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-mobile"},"source"),"\nand build to your target device.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"iOS version 14 or later.\nThe SDK supports ",(0,r.yg)("inlineCode",{parentName:"p"},"ios-arm64")," (iOS devices) and ",(0,r.yg)("inlineCode",{parentName:"p"},"ios-arm64-simulator")," (M1 chip simulators).\nIt currently doesn't support ",(0,r.yg)("inlineCode",{parentName:"p"},"ios-ax86_64-simulator")," (Intel chip simulators)."))),(0,r.yg)("h2",{id:"steps"},"Steps"),(0,r.yg)("h3",{id:"1-install-the-sdk"},"1. Install the SDK"),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(o.A,{value:"CocoaPods",mdxType:"TabItem"},(0,r.yg)("p",null,"To add the SDK as a CocoaPods dependency to your project, add the following entry to our Podfile:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},'pod "metamask-ios-sdk"\n')),(0,r.yg)("p",null,"Run the following command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"pod install\n"))),(0,r.yg)(o.A,{value:"Swift Package Manager",mdxType:"TabItem"},(0,r.yg)("p",null,"To add the SDK as a Swift Package Manager (SPM) package to your project, in Xcode, select\n",(0,r.yg)("strong",{parentName:"p"},"File > Swift Packages > Add Package Dependency"),".\nEnter the URL of the MetaMask iOS SDK repository: ",(0,r.yg)("inlineCode",{parentName:"p"},"https://github.com/MetaMask/metamask-ios-sdk"),"."),(0,r.yg)("p",null,"Alternatively, you can add the URL directly in your project's package file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-swift"},'dependencies: [\n  .package(\n    url: "https://github.com/MetaMask/metamask-ios-sdk",\n    from: "0.3.0"\n  )\n]\n')))),(0,r.yg)("h3",{id:"2-import-the-sdk"},"2. Import the SDK"),(0,r.yg)("p",null,"Import the SDK by adding the following line to the top of your project file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-swift"},"import metamask_ios_sdk\n")),(0,r.yg)("h3",{id:"3-connect-your-dapp"},"3. Connect your dapp"),(0,r.yg)("p",null,"Connect your dapp to MetaMask by adding the following code to your project file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-swift"},'let appMetadata = AppMetadata(name: "Dub Dapp", url: "https://dubdapp.com")\n\n@ObservedObject var metamaskSDK = MetaMaskSDK.shared(appMetadata)\n\nmetamaskSDK.connect()\n')),(0,r.yg)("p",null,"By default, MetaMask logs three SDK events: ",(0,r.yg)("inlineCode",{parentName:"p"},"connectionRequest"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"connected"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"disconnected"),".\nThis allows MetaMask to monitor any SDK connection issues.\nTo disable this, set ",(0,r.yg)("inlineCode",{parentName:"p"},"MetaMaskSDK.shared.enableDebug = false")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"ethereum.enableDebug = false"),"."),(0,r.yg)("h3",{id:"4-call-methods"},"4. Call methods"),(0,r.yg)("p",null,"You can now call any ",(0,r.yg)("a",{parentName:"p",href:"/wallet/reference/json-rpc-api"},"JSON-RPC API method")," using ",(0,r.yg)("inlineCode",{parentName:"p"},"metamaskSDK.request()"),"."),(0,r.yg)("h4",{id:"example-get-chain-id"},"Example: Get chain ID"),(0,r.yg)("p",null,"The following example gets the user's chain ID by calling\n",(0,r.yg)("a",{parentName:"p",href:"/wallet/reference/eth_chainId"},(0,r.yg)("inlineCode",{parentName:"a"},"eth_chainId")),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-swift"},"let chainIdRequest = EthereumRequest(method: .ethChainId)\nlet chainId = await metamaskSDK.request(chainIdRequest)\n")),(0,r.yg)("h4",{id:"example-get-account-balance"},"Example: Get account balance"),(0,r.yg)("p",null,"The following example gets the user's account balance by calling\n",(0,r.yg)("a",{parentName:"p",href:"/wallet/reference/eth_getBalance"},(0,r.yg)("inlineCode",{parentName:"a"},"eth_getBalance")),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-swift"},'// Create parameters.\nlet account = metamaskSDK.account\n\nlet parameters: [String] = [\n  // Account to check for balance.\n  account,\n  // "latest", "earliest", or "pending" (optional)\n  "latest"\n]\n\n// Create request.\nlet getBalanceRequest = EthereumRequest(\n  method: .ethGetBalance,\n  params: parameters\n)\n\n// Make request.\nlet accountBalance = await metamaskSDK.request(getBalanceRequest)\n')),(0,r.yg)("h4",{id:"example-send-transaction"},"Example: Send transaction"),(0,r.yg)("p",null,"The following example sends a transaction by calling\n",(0,r.yg)("a",{parentName:"p",href:"/wallet/reference/eth_sendTransaction"},(0,r.yg)("inlineCode",{parentName:"a"},"eth_sendTransaction")),"."),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(o.A,{value:"Use a dictionary",mdxType:"TabItem"},(0,r.yg)("p",null,"If your request parameters make up a simple dictionary of string key-value pairs, you can use the\ndictionary directly.\nNote that ",(0,r.yg)("inlineCode",{parentName:"p"},"Any")," or even ",(0,r.yg)("inlineCode",{parentName:"p"},"AnyHashable")," types aren't supported, since the type must be explicitly known."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-swift"},'// Create parameters.\nlet account = metamaskSDK.account\n\nlet parameters: [String: String] = [\n  // Receiver address.\n  "to": "0x...",\n  // Sender address.\n  "from": account,\n  // Amount to send.\n  "value": "0x..."\n]\n\n// Create request.\nlet transactionRequest = EthereumRequest(\n  method: .ethSendTransaction,\n  // eth_sendTransaction expects an array parameters object.\n  params: [parameters]\n)\n\n// Make a transaction request.\nlet transactionResult = await metamaskSDK.request(transactionRequest)\n'))),(0,r.yg)(o.A,{value:"Use a struct",mdxType:"TabItem"},(0,r.yg)("p",null,"For more complex parameter representations, define and use a struct that conforms to ",(0,r.yg)("inlineCode",{parentName:"p"},"CodableData"),",\nthat is, a struct that implements the following requirement:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"func socketRepresentation() -> NetworkData\n")),(0,r.yg)("p",null,"The type can then be represented as a socket packet."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-swift"},'struct Transaction: CodableData {\n  let to: String\n  let from: String\n  let value: String\n  let data: String?\n\n  init(to: String, from: String, value: String, data: String? = nil) {\n    self.to = to\n    self.from = from\n    self.value = value\n    self.data = data\n  }\n\n  func socketRepresentation() -> NetworkData {\n    [\n      "to": to,\n      "from": from,\n      "value": value,\n      "data": data\n    ]\n  }\n}\n\n// Create parameters.\nlet account = metamaskSDK.account\n\nlet transaction = Transaction(\n  // Receiver address.\n  to: "0x...",\n  // Sender address.\n  from: account,\n  // Amount.\n  value: "0x..."\n)\n\n// Create request.\nlet transactionRequest = EthereumRequest(\n  method: .ethSendTransaction,\n  // eth_sendTransaction expects an array parameters object.\n  params: [transaction]\n)\n\n// Make a transaction request.\nlet result = await metamaskSDK.request(transactionRequest)\n')))),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"See the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-ios-sdk/tree/main/Example"},"example iOS dapp")," in the\niOS SDK GitHub repository for more information."))}g.isMDXComponent=!0}}]);