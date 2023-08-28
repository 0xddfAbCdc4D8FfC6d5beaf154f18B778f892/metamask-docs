"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1507],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(n),h=s,m=c["".concat(p,".").concat(h)]||c[h]||u[h]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:s,o[1]=i;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},86454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=n(87462),s=(n(67294),n(3905));const r={description:"Connect your dapp to existing, third-party snaps.",sidebar_position:5},o="Work with third-party snaps",i={unversionedId:"how-to/work-with-existing-snaps",id:"how-to/work-with-existing-snaps",title:"Work with third-party snaps",description:"Connect your dapp to existing, third-party snaps.",source:"@site/snaps/how-to/work-with-existing-snaps.md",sourceDirName:"how-to",slug:"/how-to/work-with-existing-snaps",permalink:"/android-sdk/snaps/how-to/work-with-existing-snaps",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/work-with-existing-snaps.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Connect your dapp to existing, third-party snaps.",sidebar_position:5},sidebar:"snapsSidebar",previous:{title:"Use custom UI",permalink:"/android-sdk/snaps/how-to/use-custom-ui"},next:{title:"Troubleshoot",permalink:"/android-sdk/snaps/how-to/troubleshoot"}},p={},l=[{value:"Connect to a snap",id:"connect-to-a-snap",level:2},{value:"User rejects the installation request",id:"user-rejects-the-installation-request",level:3},{value:"User approves the installation request",id:"user-approves-the-installation-request",level:3},{value:"Snap is already installed",id:"snap-is-already-installed",level:3},{value:"Determine whether a snap is installed",id:"determine-whether-a-snap-is-installed",level:2},{value:"Reconnect to a snap",id:"reconnect-to-a-snap",level:2}],d={toc:l},c="wrapper";function u(e){let{components:t,...n}=e;return(0,s.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"work-with-third-party-snaps"},"Work with third-party snaps"),(0,s.kt)("p",null,"Some existing, third-party snaps are designed to communicate with dapps.\nAs a dapp developer, you can use these snaps to take advantage of new features enabled by snaps.\nThis is possible because ",(0,s.kt)("a",{parentName:"p",href:"/android-sdk/snaps/reference/exports#onrpcrequest"},"snaps can expose a JSON-RPC API"),".\nSnaps can decide to make their API available to dapps by requesting the\n",(0,s.kt)("a",{parentName:"p",href:"/android-sdk/snaps/reference/permissions#endowmentrpc"},(0,s.kt)("inlineCode",{parentName:"a"},"endowment:rpc"))," permission."),(0,s.kt)("h2",{id:"connect-to-a-snap"},"Connect to a snap"),(0,s.kt)("p",null,"Connect to a snap by calling the ",(0,s.kt)("a",{parentName:"p",href:"/android-sdk/snaps/reference/rpc-api#wallet_requestsnaps"},(0,s.kt)("inlineCode",{parentName:"a"},"wallet_requestSnaps")),"\nmethod from your dapp.\nIf a user doesn't have the snap installed in their MetaMask wallet, MetaMask prompts the user to\ninstall the snap.\nThe following are different possible outcomes from calling ",(0,s.kt)("inlineCode",{parentName:"p"},"wallet_requestSnaps"),"."),(0,s.kt)("h3",{id:"user-rejects-the-installation-request"},"User rejects the installation request"),(0,s.kt)("p",null,"If the user rejects the installation request, the call to ",(0,s.kt)("inlineCode",{parentName:"p"},"wallet_requestSnaps")," throws the following error:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{ "code": 4001, "message": "User rejected the request." }\n')),(0,s.kt)("h3",{id:"user-approves-the-installation-request"},"User approves the installation request"),(0,s.kt)("p",null,"If the user approves the installation request, the call to ",(0,s.kt)("inlineCode",{parentName:"p"},"wallet_requestSnaps")," returns an object\nwith the following shape:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "SNAP_ID": {\n        "blocked": false,\n        "enabled": true,\n        "id": "SNAP_ID",\n        "initialPermissions": {\n            // ...all the permissions in the snap\'s manifest\n        },\n        "version": "SNAP_VERSION"\n    }\n}\n')),(0,s.kt)("h3",{id:"snap-is-already-installed"},"Snap is already installed"),(0,s.kt)("p",null,"If the snap is already installed, the call to ",(0,s.kt)("inlineCode",{parentName:"p"},"wallet_requestSnaps")," returns the same object as for a\nnew installation of the snap, but the user won't see a confirmation pop-up asking them to install the snap."),(0,s.kt)("admonition",{title:"important",type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Snaps are installed into the MetaMask instance of each user.\nIf a snap stores data, that data is specific to that user's MetaMask instance.\nHowever, that data can be shared with multiple dapps.\nDo not assume that data stored by a snap is unique to your dapp. ")),(0,s.kt)("h2",{id:"determine-whether-a-snap-is-installed"},"Determine whether a snap is installed"),(0,s.kt)("p",null,"Determine whether a snap is installed by calling the ",(0,s.kt)("a",{parentName:"p",href:"/android-sdk/snaps/reference/rpc-api#wallet_getsnaps"},(0,s.kt)("inlineCode",{parentName:"a"},"wallet_getSnaps")),"\nmethod from your dapp.\nThis method returns a list of only those snaps that are connected to your current dapp."),(0,s.kt)("p",null,"The response is in the form of an object keyed by the ID of the snap.\nEach value is a nested object with additional information, such as the version of the snap that is installed."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("inlineCode",{parentName:"p"},"wallet_getSnaps")," only returns the snaps that are connected to your dapp.\nThe user may have other snaps installed that your dapp is not aware of. ")),(0,s.kt)("p",null,"The following example verifies whether a snap with ID ",(0,s.kt)("inlineCode",{parentName:"p"},"npm:super-snap")," is installed:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const snaps = await ethereum.request({\n  method: 'wallet_getSnaps'\n});\n\nconst isMySnapInstalled = Object.keys(snaps).includes('npm:super-snap');\n")),(0,s.kt)("p",null,"If you need to work with a specific version of a snap, you can instead iterate over\n",(0,s.kt)("inlineCode",{parentName:"p"},"Object.values(snaps)"),", and use the ",(0,s.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"version")," properties inside each object to determine\nwhether the snap is installed with the required version."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"A user cannot install multiple versions of a snap into a single MetaMask instance.\nYou should avoid requiring a specific version of a snap unless you absolutely need to.\nIn most cases, you should request the latest version of the snap and architect your dapp to be able\nto work with that version.")),(0,s.kt)("h2",{id:"reconnect-to-a-snap"},"Reconnect to a snap"),(0,s.kt)("p",null,"At any time, a user can open their MetaMask Snaps settings menu and see all the dapps connected to a snap.\nFrom that menu they can revoke a dapp connection.\nIf your dapp loses the connection to a snap, you can reconnect by calling\n",(0,s.kt)("a",{parentName:"p",href:"/android-sdk/snaps/reference/rpc-api#wallet_requestsnaps"},(0,s.kt)("inlineCode",{parentName:"a"},"wallet_requestSnaps")),".\nSince the snap is already installed, this returns a success response without MetaMask showing a pop-up.\nHowever, if the user has disabled the snap, the response has ",(0,s.kt)("inlineCode",{parentName:"p"},"enabled")," set to ",(0,s.kt)("inlineCode",{parentName:"p"},"false")," for your ",(0,s.kt)("inlineCode",{parentName:"p"},"SNAP_ID"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "SNAP_ID": {\n        "blocked": false,\n        "enabled": false,\n        "id": "SNAP_ID",\n        "initialPermissions": {\n            // ...all the permissions in the snap\'s manifest\n        },\n        "version": "SNAP_VERSION"\n    }\n}\n')))}u.isMDXComponent=!0}}]);