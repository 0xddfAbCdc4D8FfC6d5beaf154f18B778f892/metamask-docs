"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3349],{15680:(e,t,a)=>{a.d(t,{xA:()=>l,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,d=u["".concat(p,".").concat(m)]||u[m]||f[m]||i;return a?n.createElement(d,o(o({ref:t},l),{},{components:a})):n.createElement(d,o({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},16658:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const i={description:"Display and update interactive user interfaces.",sidebar_position:1,sidebar_custom_props:{flask_only:!0}},o="Interactive UI",s={unversionedId:"features/custom-ui/interactive-ui",id:"features/custom-ui/interactive-ui",title:"Interactive UI",description:"Display and update interactive user interfaces.",source:"@site/snaps/features/custom-ui/interactive-ui.md",sourceDirName:"features/custom-ui",slug:"/features/custom-ui/interactive-ui",permalink:"/code-format/snaps/features/custom-ui/interactive-ui",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/custom-ui/interactive-ui.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Display and update interactive user interfaces.",sidebar_position:1,sidebar_custom_props:{flask_only:!0}},sidebar:"snapsSidebar",previous:{title:"Custom UI",permalink:"/code-format/snaps/features/custom-ui/"},next:{title:"Lifecycle hooks",permalink:"/code-format/snaps/features/lifecycle-hooks"}},p={},c=[{value:"Create an interactive interface",id:"create-an-interactive-interface",level:2},{value:"Update an interactive interface",id:"update-an-interactive-interface",level:2},{value:"Get an interactive interface&#39;s state",id:"get-an-interactive-interfaces-state",level:2},{value:"Example",id:"example",level:2}],l={toc:c},u="wrapper";function f(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"interactive-ui"},"Interactive UI"),(0,r.yg)("admonition",{type:"flaskOnly"}),(0,r.yg)("p",null,"You can display interactive user interface (UI) components.\nInteractive UI is an extension of ",(0,r.yg)("a",{parentName:"p",href:"/code-format/snaps/features/custom-ui/"},"custom UI"),".\nIt allows interfaces returned from ",(0,r.yg)("a",{parentName:"p",href:"/code-format/snaps/reference/snaps-api#snap_dialog"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_dialog")),",\n",(0,r.yg)("a",{parentName:"p",href:"/code-format/snaps/reference/entry-points#ontransaction"},(0,r.yg)("inlineCode",{parentName:"a"},"onTransaction")),", and\n",(0,r.yg)("a",{parentName:"p",href:"/code-format/snaps/reference/entry-points#onhomepage"},(0,r.yg)("inlineCode",{parentName:"a"},"onHomePage"))," to respond to user input."),(0,r.yg)("p",null,"The following interactive UI components are available:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/code-format/snaps/features/custom-ui/#button"},(0,r.yg)("inlineCode",{parentName:"a"},"button"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/code-format/snaps/features/custom-ui/#form"},(0,r.yg)("inlineCode",{parentName:"a"},"form"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/code-format/snaps/features/custom-ui/#input"},(0,r.yg)("inlineCode",{parentName:"a"},"input")))),(0,r.yg)("h2",{id:"create-an-interactive-interface"},"Create an interactive interface"),(0,r.yg)("p",null,"Create an interactive interface using the\n",(0,r.yg)("a",{parentName:"p",href:"/code-format/snaps/reference/snaps-api#snap_createinterface"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_createInterface"))," method.\nThis method returns the ID of the created interface.\nYou can pass this ID to ",(0,r.yg)("a",{parentName:"p",href:"/code-format/snaps/reference/snaps-api#snap_dialog"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_dialog")),", returned from\n",(0,r.yg)("a",{parentName:"p",href:"/code-format/snaps/reference/entry-points#ontransaction"},(0,r.yg)("inlineCode",{parentName:"a"},"onTransaction")),", or from\n",(0,r.yg)("a",{parentName:"p",href:"/code-format/snaps/reference/entry-points#onhomepage"},(0,r.yg)("inlineCode",{parentName:"a"},"onHomePage")),"."),(0,r.yg)("p",null,"If you need to ",(0,r.yg)("a",{parentName:"p",href:"#update-an-interactive-interface"},"update the interface")," or\n",(0,r.yg)("a",{parentName:"p",href:"#get-an-interactive-interfaces-state"},"get its state")," at a future time, you should store its ID in\nthe Snap's storage."),(0,r.yg)("h2",{id:"update-an-interactive-interface"},"Update an interactive interface"),(0,r.yg)("p",null,"To update an interactive interface that is still active, use the\n",(0,r.yg)("a",{parentName:"p",href:"/code-format/snaps/reference/snaps-api#snap_updateinterface"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_updateInterface"))," method.\nPass the ID of the interface to be updated, and the new UI."),(0,r.yg)("p",null,"Updating an interface can be done as part of the\n",(0,r.yg)("a",{parentName:"p",href:"/code-format/snaps/reference/entry-points#onuserinput"},(0,r.yg)("inlineCode",{parentName:"a"},"onUserInput"))," entry point or as part of an\nasynchronous process."),(0,r.yg)("p",null,"The following is an example flow:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The user activates an interactive interface to send Bitcoin funds to an address.\nThe initial interface contains an address input, an amount input, and a ",(0,r.yg)("strong",{parentName:"li"},"Send funds")," button."),(0,r.yg)("li",{parentName:"ol"},"The user fills the fields, and selects the ",(0,r.yg)("strong",{parentName:"li"},"Send funds")," button."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"onUserInput")," is called, and the logic detects that the ",(0,r.yg)("strong",{parentName:"li"},"Send funds")," button was selected."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"snap_updateInterface")," is called, replacing the ",(0,r.yg)("strong",{parentName:"li"},"Send funds")," button with a ",(0,r.yg)("a",{parentName:"li",href:"/code-format/snaps/features/custom-ui/#spinner"},(0,r.yg)("inlineCode",{parentName:"a"},"spinner")),"."),(0,r.yg)("li",{parentName:"ol"},"Custom logic sends the funds."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"snap_updateInterface")," is called again, replacing the whole UI with a success message.")),(0,r.yg)("h2",{id:"get-an-interactive-interfaces-state"},"Get an interactive interface's state"),(0,r.yg)("p",null,"At any point you can retrieve an interactive interface's state.\nTo do this, call the ",(0,r.yg)("a",{parentName:"p",href:"/code-format/snaps/reference/snaps-api#snap_getinterfacestate"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_getInterfaceState")),"\nmethod with the ID of the interface."),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"See the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/interactive-ui"},(0,r.yg)("inlineCode",{parentName:"a"},"@metamask/interactive-ui-example-snap")),"\npackage for a full example of implementing interactive UI."))}f.isMDXComponent=!0}}]);