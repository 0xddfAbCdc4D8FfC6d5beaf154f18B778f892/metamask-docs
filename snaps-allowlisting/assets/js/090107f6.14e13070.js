"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[280],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),h=i,c=d["".concat(s,".").concat(h)]||d[h]||m[h]||o;return a?n.createElement(c,r(r({ref:t},u),{},{components:a})):n.createElement(c,r({ref:t},u))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},51837:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const o={description:"Submit your Snap for allowlisting on MetaMask extension.",sidebar_position:7},r="Get allowlisted",l={unversionedId:"how-to/get-allowlisted",id:"how-to/get-allowlisted",title:"Get allowlisted",description:"Submit your Snap for allowlisting on MetaMask extension.",source:"@site/snaps/how-to/get-allowlisted.md",sourceDirName:"how-to",slug:"/how-to/get-allowlisted",permalink:"/snaps-allowlisting/snaps/how-to/get-allowlisted",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/get-allowlisted.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{description:"Submit your Snap for allowlisting on MetaMask extension.",sidebar_position:7},sidebar:"snapsSidebar",previous:{title:"Publish a Snap",permalink:"/snaps-allowlisting/snaps/how-to/publish-a-snap"},next:{title:"Connect to a Snap",permalink:"/snaps-allowlisting/snaps/how-to/connect-to-a-snap"}},s={},p=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Submit your Snap",id:"submit-your-snap",level:2},{value:"Allowlist review",id:"allowlist-review",level:2},{value:"Directory listing",id:"directory-listing",level:2},{value:"Distribute your Snap",id:"distribute-your-snap",level:2},{value:"Updating your Snap",id:"updating-your-snap",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"get-allowlisted"},"Get allowlisted"),(0,i.kt)("p",null,"You have built your Snap, tested it, published it to npm, and now you are ready to make it available to MetaMask users.\nIn the MetaMask Snaps Open Beta, an allowlist restricts which Snaps can be installed by users. "),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"As part of the launch of MetaMask Snaps, individual Snaps must be put on an allowlist before they can be installed by users. This means that at this time, only selected, reviewed Snaps can be installed. In the future, this system will be opened up. By including a Snap on the allowlist, Consensys is not endorsing, recommending, or guaranteeing the safety of this Snap for your use or use for any reason. Always do your own research before installing any Snap.")),(0,i.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,i.kt)("p",null,"To be added to the allowlist, a Snap must: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make the source code publicly available. This does not mean that the Snap source code has to be published with an open-source license, but users should be able to read the source code of the Snap package. "),(0,i.kt)("li",{parentName:"ul"},"Be published to npmjs.com. "),(0,i.kt)("li",{parentName:"ul"},"Not impair our compliance with laws or regulations. ")),(0,i.kt)("p",null,"Furthermore, any Snap that uses any of the following permissions pertaining to key management must also provide evidence of a third-party audit from an approved auditor, covering the Snap source code itself that is to run within the Snaps system along with any modules used for key management, with evidence of the commit hash that was audited and the commit that has any fixes documented in the audit report: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"snap_getBip32Entropy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"snap_getBip32PublicKey")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"snap_getBip44Entropy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"snap_getEntropy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"snap_manageAccounts"))),(0,i.kt)("p",null,"A list of approved third-party auditors and details about the audit process are available on the MetaMask Snaps Builder Engagement Program:\n",(0,i.kt)("a",{parentName:"p",href:"https://consensys.notion.site/Audit-process-1acbc67819dc4631b7a3d6c664e387a3"},"Approved Auditors"),". "),(0,i.kt)("h2",{id:"submit-your-snap"},"Submit your Snap"),(0,i.kt)("p",null,"When you are ready to submit your Snap, you should fill out the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/forms/d/e/1FAIpQLSeDAnk0Di_k8Qgrsj9_ofnf-1d_NfbG3fmSOHD1m8dKun1pXw/viewform"},"MetaMask Snaps Directory Information Form"),".\nYou will need to provide the following information: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Email",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"So we can get in touch with you if we have any questions."))),(0,i.kt)("li",{parentName:"ul"},"Snap name",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The name of your Snap. This ",(0,i.kt)("strong",{parentName:"li"},"must")," match the ",(0,i.kt)("inlineCode",{parentName:"li"},"proposedName")," field from the Snap manifest."),(0,i.kt)("li",{parentName:"ul"},"You cannot use these words in the name: MetaMask, Snap, Meta, Mask."))),(0,i.kt)("li",{parentName:"ul"},"Snap builder name and URL",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This should match the company, project, or personal site for your brand, where users can learn more about you."))),(0,i.kt)("li",{parentName:"ul"},"Snap website URL",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This is a website where users can interact with your Snap. If your Snap does not require a website to be used, this can be left blank."),(0,i.kt)("li",{parentName:"ul"},"If your Snap works with multiple websites, you can include the URLs of additional websites in the ",(0,i.kt)("em",{parentName:"li"},"long description"),', but this URL should be specifically for an "official" website designed to interact with your Snap.'))),(0,i.kt)("li",{parentName:"ul"},"Snap short description",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Brief description of the snap, 1 or 2 sentences long."),(0,i.kt)("li",{parentName:"ul"},'Try not to say "is a MetaMask Snap" -- users already know this!'))),(0,i.kt)("li",{parentName:"ul"},"Snap long description",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Description of the snap features and how to use them. You can use line breaks, lists, and even URLs here. You cannot use HTML."),(0,i.kt)("li",{parentName:"ul"},"If applicable, you should also describe quick steps to onboard and use the Snap. For example: ",(0,i.kt)("inlineCode",{parentName:"li"},"After installing the Snap, visit the companion dapp at https://voyager-snap.linea.build to connect an account and track your Linea Voyage progress.")))),(0,i.kt)("li",{parentName:"ul"},"Link to the public GitHub repo and npm package",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If your Snap is hosted on a different site, like GitLab, you can link to that instead."),(0,i.kt)("li",{parentName:"ul"},"Please ensure that you have ",(0,i.kt)("a",{parentName:"li",href:"/snaps-allowlisting/snaps/how-to/publish-a-snap"},"correctly published the Snap package itself"),"."))),(0,i.kt)("li",{parentName:"ul"},"Snap version number to be allowlisted",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Make sure that the version number in ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"snap.manifest.json")," match, and that the Snap has been built with the correct ",(0,i.kt)("inlineCode",{parentName:"li"},"shasum"),"."))),(0,i.kt)("li",{parentName:"ul"},"Snap auditor and audit report",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If your Snap uses one or more of the permissions listed above, please provide a PDF or link to where the audit report has been published. Otherwise, leave this field blank."),(0,i.kt)("li",{parentName:"ul"},"Please note: the audit report will be made public. You may ask your auditor to publish the report on their website and provide the link to us."))),(0,i.kt)("li",{parentName:"ul"},"Customer support details",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"To ensure a smooth user experience, we require customer support details for your Snap. This allows us to escalate any issues that the user is facing with your Snap. You can find more details ",(0,i.kt)("a",{parentName:"li",href:"https://consensys.notion.site/Providing-User-Support-Information-cff79a7d896e4da6a2f8a17ce074e585"},"here"),". The Escalation Contact will be kept confidential between our teams, the rest of the information will be public. You must provide an Escalation Contact and at least one of the remaining items."))),(0,i.kt)("li",{parentName:"ul"},"Images",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Here's your opportunity to provide compelling previews of your Snap! These can be screenshots or promotional images to help users get an idea of what your Snap can do. "),(0,i.kt)("li",{parentName:"ul"},"Please provide 3 images with the following dimensions: 960w x 540h. PNG or JPG are allowed."))),(0,i.kt)("li",{parentName:"ul"},"Demo video",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This will help our team review your Snap. It may also be used by our marketing team.")))),(0,i.kt)("h2",{id:"allowlist-review"},"Allowlist review"),(0,i.kt)("p",null,'Your Snap will be reviewed by the MetaMask Snaps team to ensure it is functional and well-designed.\nIf the Snap requires an audit, the audit report will be reviewed to ensure that all vulnerabilities with "medium" or higher risk have been addressed.\nAll Snaps will require at least 2 approvals to be allowlisted.'),(0,i.kt)("h2",{id:"directory-listing"},"Directory listing"),(0,i.kt)("p",null,"Once your Snap is on the allowlist, it will appear in the ",(0,i.kt)("a",{parentName:"p",href:"https://snaps.metamask.io"},"MetaMask Snaps Directory"),".\nYou can direct users to the directory to find and install your Snap. "),(0,i.kt)("h2",{id:"distribute-your-snap"},"Distribute your Snap"),(0,i.kt)("p",null,"You should deploy a companion dapp where users can learn about your Snap and install it, or\nintegrate with your existing dapp."),(0,i.kt)("p",null,"If your Snap is designed to communicate with dapps, you can encourage other dapp developers to\n",(0,i.kt)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/how-to/connect-to-a-snap"},"connect to your Snap"),"."),(0,i.kt)("h2",{id:"updating-your-snap"},"Updating your Snap"),(0,i.kt)("p",null,"The allowlist uses strict versioning for all Snaps. When you have a new version of your Snap published to npm, you will need to submit it for allowlisting again. Users will not be able to install new versions until they are allowlisted. "),(0,i.kt)("p",null,"Please submit the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/forms/d/e/1FAIpQLSeDAnk0Di_k8Qgrsj9_ofnf-1d_NfbG3fmSOHD1m8dKun1pXw/viewform"},"Directory Information Form"),' again for any new version of your Snap. You can also update any information about your Snap with this form. For any fields that do not need to be changed, you can leave them blank or enter "n/a." When providing the version to be allowlisted, please also let let us know if previous versions of your Snap can remain allowlisted or should be replaced with this new version. '),(0,i.kt)("p",null,"If you need to update information about your Snap in the ",(0,i.kt)("a",{parentName:"p",href:"https://snaps.metamask.io"},"Snaps Directory")," without submitting a new version to the allowlist, ",(0,i.kt)("a",{parentName:"p",href:"https://consensys.notion.site/Connect-with-us-7ffcbcc7981b4a4da7f1a1d39f6c127b"},"get in touch with our Builder Engagement Program"),"."))}m.isMDXComponent=!0}}]);