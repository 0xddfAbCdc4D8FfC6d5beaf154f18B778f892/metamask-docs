"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6556],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(t),d=o,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return t?a.createElement(h,r(r({ref:n},u),{},{components:t})):a.createElement(h,r({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[c]="string"==typeof e?e:o,r[1]=p;for(var l=2;l<i;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},44291:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=t(87462),o=(t(67294),t(3905));const i={description:"Develop, test, and publish a Snap.",sidebar_position:8},r="Publish a Snap",p={unversionedId:"how-to/publish-a-snap",id:"how-to/publish-a-snap",title:"Publish a Snap",description:"Develop, test, and publish a Snap.",source:"@site/snaps/how-to/publish-a-snap.md",sourceDirName:"how-to",slug:"/how-to/publish-a-snap",permalink:"/1006-sdk-wagmi/snaps/how-to/publish-a-snap",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/publish-a-snap.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{description:"Develop, test, and publish a Snap.",sidebar_position:8},sidebar:"snapsSidebar",previous:{title:"Troubleshoot common issues",permalink:"/1006-sdk-wagmi/snaps/how-to/debug-a-snap/common-issues"},next:{title:"Connect to a Snap",permalink:"/1006-sdk-wagmi/snaps/how-to/connect-to-a-snap"}},s={},l=[{value:"Distribute your Snap",id:"distribute-your-snap",level:2}],u={toc:l},c="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"publish-a-snap"},"Publish a Snap"),(0,o.kt)("p",null,"Snaps are npm packages, so publishing a Snap is as simple as publishing an npm package.\nRefer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v8/commands/npm-publish"},"npm CLI documentation")," for details\non publishing to the public registry.\nThe following details are specific to Snaps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The version in ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"snap.manifest.json")," should match."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"repository.url")," field in ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," should match the correct repository for your Snap."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"source.location.npm.packageName")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"snap.manifest.json")," should match the name in ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"proposedName")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"snap.manifest.json"),' should be a human-readable name and should not include\nthe words "MetaMask" or "Snap." '),(0,o.kt)("li",{parentName:"ul"},"The image specified in ",(0,o.kt)("inlineCode",{parentName:"li"},"iconPath")," in the manifest file is used as the icon displayed when\ninstalling the Snap, in custom dialogs, and in the settings menu.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This icon should be a valid SVG."),(0,o.kt)("li",{parentName:"ul"},"The icon will be cropped in a circle when displayed in MetaMask; you do not need to make the icon circular.")))),(0,o.kt)("p",null,"After publishing the Snap, any dapp can connect to the Snap by using the Snap ID ",(0,o.kt)("inlineCode",{parentName:"p"},"npm:[packageName]"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If you are using the Snap monorepo project generated in the ",(0,o.kt)("a",{parentName:"p",href:"/1006-sdk-wagmi/snaps/get-started/quickstart"},"quickstart"),",\nmake sure to only publish the Snap package in ",(0,o.kt)("inlineCode",{parentName:"p"},"/packages/snap"),".\nYou can use the ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.github.io/snaps/snaps-simulator/staging/#/manifest"},"Snaps Simulator")," to verify\nthat your Snap was published correctly ","\u2014"," just select ",(0,o.kt)("strong",{parentName:"p"},"localhost")," in the top right corner and change the\nSnap location to ",(0,o.kt)("strong",{parentName:"p"},"npm")," and the ID of your Snap. "),(0,o.kt)("p",{parentName:"admonition"},"Also, make sure to update the manifest file, icon file, and README to differentiate your Snap from the template.")),(0,o.kt)("h2",{id:"distribute-your-snap"},"Distribute your Snap"),(0,o.kt)("p",null,"You should deploy a companion dapp where users can learn about your Snap and install it, or\nintegrate with your existing dapp."),(0,o.kt)("p",null,"If your Snap is designed to communicate with dapps, you can encourage other dapp developers to\n",(0,o.kt)("a",{parentName:"p",href:"/1006-sdk-wagmi/snaps/how-to/connect-to-a-snap"},"connect to your Snap"),"."))}m.isMDXComponent=!0}}]);