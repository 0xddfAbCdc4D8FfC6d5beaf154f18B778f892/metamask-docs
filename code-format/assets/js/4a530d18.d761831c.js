"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1697],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>h});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},71548:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=t(58168),r=(t(96540),t(15680));const o={sidebar_label:"Android",sidebar_position:2,toc_max_heading_level:4,description:"Set up the SDK in your Android dapp.",tags:["Android SDK"]},i="Use MetaMask SDK with Android",l={unversionedId:"how-to/use-sdk/mobile/android",id:"how-to/use-sdk/mobile/android",title:"Use MetaMask SDK with Android",description:"Set up the SDK in your Android dapp.",source:"@site/wallet/how-to/use-sdk/mobile/android.md",sourceDirName:"how-to/use-sdk/mobile",slug:"/how-to/use-sdk/mobile/android",permalink:"/code-format/wallet/how-to/use-sdk/mobile/android",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/mobile/android.md",tags:[{label:"Android SDK",permalink:"/code-format/wallet/tags/android-sdk"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Android",sidebar_position:2,toc_max_heading_level:4,description:"Set up the SDK in your Android dapp.",tags:["Android SDK"]},sidebar:"walletSidebar",previous:{title:"iOS",permalink:"/code-format/wallet/how-to/use-sdk/mobile/ios"},next:{title:"Third-party libraries",permalink:"/code-format/wallet/how-to/use-sdk/3rd-party-libraries/"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Import the SDK",id:"2-import-the-sdk",level:3},{value:"3. Connect your dapp",id:"3-connect-your-dapp",level:3},{value:"3.1. Use the provider object directly",id:"31-use-the-provider-object-directly",level:4},{value:"3.2. Use a ViewModel",id:"32-use-a-viewmodel",level:4},{value:"4. Call methods",id:"4-call-methods",level:3},{value:"Example: Get account balance",id:"example-get-account-balance",level:4},{value:"Example: Sign message",id:"example-sign-message",level:4},{value:"Example: Send transaction",id:"example-send-transaction",level:4},{value:"Example: Switch chain",id:"example-switch-chain",level:4},{value:"Example",id:"example",level:2}],c={toc:d},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"use-metamask-sdk-with-android"},"Use MetaMask SDK with Android"),(0,r.yg)("p",null,"Import ",(0,r.yg)("a",{parentName:"p",href:"/code-format/wallet/concepts/sdk/"},"MetaMask SDK")," into your native Android dapp to enable\nyour users to easily connect with their MetaMask Mobile wallet."),(0,r.yg)("admonition",{title:"See also",type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/code-format/wallet/concepts/sdk/android"},"Android SDK architecture")))),(0,r.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"MetaMask Mobile version 7.6.0 or later installed on your target device (that is, a physical\ndevice or emulator).\nYou can install MetaMask Mobile from ",(0,r.yg)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=io.metamask"},"Google Play"),",\nor clone and compile MetaMask Mobile from ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-mobile"},"source"),"\nand build to your target device.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Android SDK version 23 or later."))),(0,r.yg)("h2",{id:"steps"},"Steps"),(0,r.yg)("h3",{id:"1-install-the-sdk"},"1. Install the SDK"),(0,r.yg)("p",null,"To add the SDK from Maven Central as a dependency to your project, in your ",(0,r.yg)("inlineCode",{parentName:"p"},"app/build.gradle")," file,\nadd the following entry to the ",(0,r.yg)("inlineCode",{parentName:"p"},"dependencies")," block:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-gradle",metastring:'title="build.gradle"',title:'"build.gradle"'},'dependencies {\n  implementation "io.metamask.androidsdk:metamask-android-sdk:0.2.1"\n}\n')),(0,r.yg)("p",null,"Then, sync your project with the Gradle settings.\nOnce the syncing completes, you can set up the rest of your project."),(0,r.yg)("h3",{id:"2-import-the-sdk"},"2. Import the SDK"),(0,r.yg)("p",null,"Import the SDK by adding the following line to the top of your project file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-kotlin"},"import io.metamask.androidsdk.Ethereum\n")),(0,r.yg)("h3",{id:"3-connect-your-dapp"},"3. Connect your dapp"),(0,r.yg)("p",null,"You can connect your dapp to MetaMask in one of two ways:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"#31-use-the-provider-object-directly"},"Use the ",(0,r.yg)("inlineCode",{parentName:"a"},"ethereum")," provider object directly"),".\nWe recommend using this method in a pure model layer."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"#32-use-a-viewmodel"},"Use a ViewModel")," that injects the ",(0,r.yg)("inlineCode",{parentName:"li"},"ethereum")," provider object.\nWe recommend using this method at the app level, because it provides a single instance that\nsurvives configuration changes and can be shared across all views.")),(0,r.yg)("admonition",{title:"Logging",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"By default, MetaMask logs three SDK events: ",(0,r.yg)("inlineCode",{parentName:"p"},"connection_request"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"connected"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"disconnected"),".\nThis allows MetaMask to monitor any SDK connection issues.\nTo disable this, set ",(0,r.yg)("inlineCode",{parentName:"p"},"ethereum.enableDebug = false"),".")),(0,r.yg)("h4",{id:"31-use-the-provider-object-directly"},"3.1. Use the provider object directly"),(0,r.yg)("p",null,"Use the ",(0,r.yg)("inlineCode",{parentName:"p"},"ethereum")," provider object directly to connect your dapp to MetaMask by adding the following\ncode to your project file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-kotlin"},'@AndroidEntryPoint\nclass SomeModel(private val repository: ApplicationRepository) {\n  val ethereum = Ethereum(context)\n\n  val dapp = Dapp("Droid Dapp", "https://droiddapp.com")\n\n  // This is the same as calling eth_requestAccounts.\n  ethereum.connect(dapp) { result ->\n    if (result is RequestError) {\n      Log.e(TAG, "Ethereum connection error: ${result.message}")\n    } else {\n      Log.d(TAG, "Ethereum connection result: $result")\n    }\n  }\n}\n')),(0,r.yg)("h4",{id:"32-use-a-viewmodel"},"3.2. Use a ViewModel"),(0,r.yg)("p",null,"To connect your dapp to MetaMask using a ViewModel, create a ViewModel that injects the\n",(0,r.yg)("inlineCode",{parentName:"p"},"ethereum")," provider object, then add wrapper functions for each Ethereum method you wish to call."),(0,r.yg)("p",null,"You can use a dependency manager such as ",(0,r.yg)("a",{parentName:"p",href:"https://developer.android.com/training/dependency-injection/hilt-android"},"Hilt"),"\nto initialize the ViewModel and maintain its state across configuration changes.\nIf you use Hilt, your setup might look like the following:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="EthereumViewModel.kt"',title:'"EthereumViewModel.kt"'},"@HiltViewModel\nclass EthereumViewModel @Inject constructor(\n  private val ethereum: Ethereum\n): ViewModel() {\n\n  val ethereumState = MediatorLiveData<EthereumState>().apply {\n    addSource(ethereum.ethereumState) { newEthereumState ->\n      value = newEthereumState\n    }\n  }\n\n  // Wrapper function to connect the dapp.\n  fun connect(dapp: Dapp, callback: ((Any?) -> Unit)?) {\n    ethereum.connect(dapp, callback)\n  }\n\n  // Wrapper function call all RPC methods.\n  fun sendRequest(request: EthereumRequest, callback: ((Any?) -> Unit)?) {\n    ethereum.sendRequest(request, callback)\n  }\n}\n")),(0,r.yg)("p",null,"To use the ViewModel, add the following code to your project file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-kotlin"},'val ethereumViewModel: EthereumViewModel by viewModels()\n\nval dapp = Dapp("Droid Dapp", "https://droiddapp.com")\n\n// This is the same as calling eth_requestAccounts.\nethereum.connect(dapp) { result ->\n  if (result is RequestError) {\n    Log.e(TAG, "Ethereum connection error: ${result.message}")\n  } else {\n    Log.d(TAG, "Ethereum connection result: $result")\n  }\n}\n')),(0,r.yg)("p",null,"See the example dapp's\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-android-sdk/blob/main/app/src/main/java/com/metamask/dapp/EthereumViewModel.kt"},(0,r.yg)("inlineCode",{parentName:"a"},"EthereumViewModel.kt")),"\nfile for more information."),(0,r.yg)("h3",{id:"4-call-methods"},"4. Call methods"),(0,r.yg)("p",null,"You can now call any ",(0,r.yg)("a",{parentName:"p",href:"/wallet/reference/json-rpc-api"},"JSON-RPC API method")," using\n",(0,r.yg)("inlineCode",{parentName:"p"},"ethereum.sendRequest()"),"."),(0,r.yg)("h4",{id:"example-get-account-balance"},"Example: Get account balance"),(0,r.yg)("p",null,"The following example gets the user's account balance by calling\n",(0,r.yg)("a",{parentName:"p",href:"/wallet/reference/eth_getBalance"},(0,r.yg)("inlineCode",{parentName:"a"},"eth_getBalance")),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-kotlin"},'var balance: String? = null\n\n// Create parameters.\nval params: List<String> = listOf(\n  ethereum.selectedAddress,\n  // "latest", "earliest", or "pending" (optional)\n  "latest"\n)\n\n// Create request.\nval getBalanceRequest = EthereumRequest(\n  method = EthereumMethod.ETHGETBALANCE.value,\n  params = params\n)\n\n// Make request.\nethereum.sendRequest(getBalanceRequest) { result ->\n  if (result is RequestError) {\n    // Handle error.\n  } else {\n    balance = result\n  }\n}\n')),(0,r.yg)("h4",{id:"example-sign-message"},"Example: Sign message"),(0,r.yg)("p",null,"The following example requests the user sign a message by calling\n",(0,r.yg)("a",{parentName:"p",href:"/wallet/reference/eth_signTypedData_v4"},(0,r.yg)("inlineCode",{parentName:"a"},"eth_signTypedData_v4")),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-kotlin"},'val message = "{\\"domain\\":{\\"chainId\\":\\"${ethereum.chainId}\\",\\"name\\":\\"Ether Mail\\",\\"verifyingContract\\":\\"0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC\\",\\"version\\":\\"1\\"},\\"message\\":{\\"contents\\":\\"Hello, Busa!\\",\\"from\\":{\\"name\\":\\"Kinno\\",\\"wallets\\":[\\"0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826\\",\\"0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF\\"]},\\"to\\":[{\\"name\\":\\"Busa\\",\\"wallets\\":[\\"0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB\\",\\"0xB0BdaBea57B0BDABeA57b0bdABEA57b0BDabEa57\\",\\"0xB0B0b0b0b0b0B000000000000000000000000000\\"]}]},\\"primaryType\\":\\"Mail\\",\\"types\\":{\\"EIP712Domain\\":[{\\"name\\":\\"name\\",\\"type\\":\\"string\\"},{\\"name\\":\\"version\\",\\"type\\":\\"string\\"},{\\"name\\":\\"chainId\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"verifyingContract\\",\\"type\\":\\"address\\"}],\\"Group\\":[{\\"name\\":\\"name\\",\\"type\\":\\"string\\"},{\\"name\\":\\"members\\",\\"type\\":\\"Person[]\\"}],\\"Mail\\":[{\\"name\\":\\"from\\",\\"type\\":\\"Person\\"},{\\"name\\":\\"to\\",\\"type\\":\\"Person[]\\"},{\\"name\\":\\"contents\\",\\"type\\":\\"string\\"}],\\"Person\\":[{\\"name\\":\\"name\\",\\"type\\":\\"string\\"},{\\"name\\":\\"wallets\\",\\"type\\":\\"address[]\\"}]}}"\n\nval from = ethereum.selectedAddress\nval params: List<String> = listOf(from, message)\n\nval signRequest = EthereumRequest(\n  method = EthereumMethod.ETH_SIGN_TYPED_DATA_V4.value,\n  params = params\n)\n\nethereum.sendRequest(signRequest) { result ->\n  if (result is RequestError) {\n    Log.e(TAG, "Ethereum sign error: ${result.message}")\n  } else {\n    Log.d(TAG, "Ethereum sign result: $result")\n  }\n}\n')),(0,r.yg)("h4",{id:"example-send-transaction"},"Example: Send transaction"),(0,r.yg)("p",null,"The following example sends a transaction by calling\n",(0,r.yg)("a",{parentName:"p",href:"/wallet/reference/eth_sendTransaction"},(0,r.yg)("inlineCode",{parentName:"a"},"eth_sendTransaction")),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-kotlin"},'// Create parameters.\nval from = ethereum.selectedAddress\nval to = "0x0000000000000000000000000000000000000000"\nval amount = "0x01"\nval params: Map<String, Any> = mapOf(\n  "from" to from,\n  "to" to to,\n  "amount" to amount\n)\n\n// Create request.\nval transactionRequest = EthereumRequest(\n  method = EthereumMethod.ETH_SEND_TRANSACTION.value,\n  params = listOf(params)\n)\n\n// Make a transaction request.\nethereum.sendRequest(transactionRequest) { result ->\n  if (result is RequestError) {\n    // Handle error.\n  } else {\n    Log.d(TAG, "Ethereum transaction result: $result")\n  }\n}\n')),(0,r.yg)("h4",{id:"example-switch-chain"},"Example: Switch chain"),(0,r.yg)("p",null,"The following example switches to a new Ethereum chain by calling\n",(0,r.yg)("a",{parentName:"p",href:"/wallet/reference/wallet_switchethereumchain"},(0,r.yg)("inlineCode",{parentName:"a"},"wallet_switchEthereumChain"))," and\n",(0,r.yg)("a",{parentName:"p",href:"/wallet/reference/wallet_addethereumchain"},(0,r.yg)("inlineCode",{parentName:"a"},"wallet_addEthereumChain")),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-kotlin"},'fun switchChain(\n  chainId: String,\n  onSuccess: (message: String) -> Unit,\n  onError: (message: String, action: (() -> Unit)?) -> Unit\n) {\n  val switchChainParams: Map<String, String> = mapOf("chainId" to chainId)\n  val switchChainRequest = EthereumRequest(\n    method = EthereumMethod.SWITCH_ETHEREUM_CHAIN.value,\n    params = listOf(switchChainParams)\n  )\n\n  ethereum.sendRequest(switchChainRequest) { result ->\n    if (result is RequestError) {\n      if (result.code == ErrorType.UNRECOGNIZED_CHAIN_ID.code || result.code == ErrorType.SERVER_ERROR.code) {\n        val message = "${Network.chainNameFor(chainId)} ($chainId) has not been added to your MetaMask wallet. Add chain?"\n\n        val action: () -> Unit = {\n          addEthereumChain(\n            chainId,\n            onSuccess = { result -> onSuccess(result) },\n            onError = { error -> onError(error, null) }\n          )\n        }\n        onError(message, action)\n      } else {\n        onError("Switch chain error: ${result.message}", null)\n      }\n    } else {\n      onSuccess("Successfully switched to ${Network.chainNameFor(chainId)} ($chainId)")\n    }\n  }\n}\n\nprivate fun addEthereumChain(\n  chainId: String,\n  onSuccess: (message: String) -> Unit,\n  onError: (message: String) -> Unit\n) {\n  Logger.log("Adding chainId: $chainId")\n\n  val addChainParams: Map<String, Any> = mapOf(\n    "chainId" to chainId,\n    "chainName" to Network.chainNameFor(chainId),\n    "rpcUrls" to Network.rpcUrls(Network.fromChainId(chainId))\n  )\n  val addChainRequest = EthereumRequest(\n    method = EthereumMethod.ADD_ETHEREUM_CHAIN.value,\n    params = listOf(addChainParams)\n  )\n\n  ethereum.sendRequest(addChainRequest) { result ->\n    if (result is RequestError) {\n      onError("Add chain error: ${result.message}")\n    } else {\n      if (chainId == ethereum.chainId) {\n        onSuccess("Successfully switched to ${Network.chainNameFor(chainId)} ($chainId)")\n      } else {\n        onSuccess("Successfully added ${Network.chainNameFor(chainId)} ($chainId)")\n      }\n    }\n  }\n}\n')),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"See the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-android-sdk/tree/main/app"},"example Android dapp")," in\nthe Android SDK GitHub repository for more information."))}u.isMDXComponent=!0}}]);