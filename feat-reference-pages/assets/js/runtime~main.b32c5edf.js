(()=>{"use strict";var e,a,f,c,d,b={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var f=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(f.exports,f,f.exports,r),f.loaded=!0,f.exports}r.m=b,e=[],r.O=(a,f,c,d)=>{if(!f){var b=1/0;for(i=0;i<e.length;i++){f=e[i][0],c=e[i][1],d=e[i][2];for(var t=!0,o=0;o<f.length;o++)(!1&d||b>=d)&&Object.keys(r.O).every((e=>r.O[e](f[o])))?f.splice(o--,1):(t=!1,d<b&&(b=d));if(t){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[f,c,d]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var d=Object.create(null);r.r(d);var b={};a=a||[null,f({}),f([]),f(f)];for(var t=2&c&&e;"object"==typeof t&&!~a.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,r.d(d,b),d},r.d=(e,a)=>{for(var f in a)r.o(a,f)&&!r.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,f)=>(r.f[f](e,a),a)),[])),r.u=e=>"assets/js/"+({53:"74e5817e",153:"f2bb0f3e",242:"ba4cac81",257:"ab4cafa2",264:"a5395e14",289:"9fb62b98",296:"c66adc2f",317:"b247c127",409:"565191f5",431:"4ead4811",520:"cb2c0fed",528:"9cea254b",531:"52198f09",625:"80fc5192",680:"fe0a58ee",736:"f186a5d0",785:"e8973b68",792:"cfc76383",910:"a015cb1d",957:"c141421f",1158:"9659c6a2",1180:"92d77c2e",1199:"c73f5a50",1235:"a7456010",1266:"7d4adaa7",1273:"b91521d0",1343:"dfbcf5f2",1588:"8145e54e",1660:"6e004e16",1697:"4a530d18",1717:"40d431ee",1733:"ff576332",1784:"c66e041d",1874:"9947d6d2",1891:"aee6d0cb",1926:"54f1853a",1930:"030193d7",1969:"17a18c8c",1997:"b235dfdd",2008:"320bcfb3",2138:"1a4e3797",2146:"55d0cf22",2166:"df3ffe2a",2169:"76d3ef76",2358:"a767f895",2416:"63b87658",2419:"37351a6b",2445:"c23d85eb",2452:"d0e549fb",2520:"82c9c8ff",2675:"486ba757",2782:"3ee3d2fe",2844:"f8f7b6b2",2872:"ed70584f",2894:"3e112a3e",2923:"cc21c413",2971:"47fa8f02",2980:"3925c87d",3056:"284a1a9e",3102:"ce634f1e",3235:"b6db0fd4",3349:"c90162c2",3374:"f8a3ce18",3442:"453c9f5d",3492:"c3b5c454",3499:"97c42b41",3523:"54713468",3557:"c3be8443",3582:"03c51261",3623:"bdecca60",3692:"57e75615",3794:"d5f74ffe",3843:"cec98bc3",3860:"ba7d2542",3967:"4ecdda4a",4022:"6721d267",4050:"66ba7e9e",4151:"6380b8b5",4209:"70334ba8",4279:"df203c0f",4284:"d89de9d2",4520:"2a5de1af",4583:"1df93b7f",4687:"c5e4f5c1",4698:"2e39c2b3",4787:"3720c009",4933:"eb2b80f1",4939:"011b5d76",4961:"66d369c7",5044:"839511b6",5138:"666bb528",5157:"c98caafe",5188:"37285b91",5246:"cf946124",5272:"39ee8957",5312:"19fab523",5484:"4c2d8e7b",5569:"d4b4a7ff",5586:"c455d87c",5593:"2c1888ff",5632:"428a89bc",5685:"682638a2",5690:"6ebf937c",5693:"ae6e9ecd",5742:"aba21aa0",5892:"11b7fc92",5928:"d6be5fd3",5976:"6ca88a53",6023:"a2353af7",6041:"94590018",6075:"7adabfb7",6095:"ab8b636d",6213:"14bc7481",6286:"f9fecb86",6325:"f4fa537f",6373:"7c5954e6",6433:"3d86cae6",6594:"e4b21b58",6694:"f60fed4d",6744:"ee067fe3",6764:"286d8836",6802:"8cd631ec",6838:"4b100ba1",6875:"e1aa5429",6940:"090107f6",6943:"e67f7d1d",6969:"14eb3368",7038:"31e9ff6e",7098:"a7bd4aaa",7170:"0fffe3b1",7240:"51ac80f3",7441:"ab85252c",7540:"d70a1ef5",7775:"5e56b9d4",7785:"68c12626",8228:"f6d13bb3",8280:"ce260bbc",8298:"3e786943",8317:"501c7dd0",8362:"1cd57da2",8401:"17896441",8428:"f5000f06",8483:"78eb1577",8638:"037997aa",8691:"8329f30e",8760:"ab3b18fd",8873:"fd49626c",8874:"079a82bd",8883:"93556f9a",8957:"652081cc",9048:"a94703ab",9071:"4ad67257",9107:"90e119fe",9175:"d2011f4f",9329:"ef8d09aa",9375:"4efa9f2e",9400:"debbc54f",9477:"49f67c63",9545:"77a46a80",9566:"177a052f",9588:"44fb6b83",9594:"0db58064",9631:"41f5386a",9647:"5e95c892",9664:"95fa971a",9703:"b223888a",9807:"8dacb5d7",9862:"2d6a6903",9944:"7dd3f6c4",9987:"5a6432d3"}[e]||e)+"."+{4:"3b2e30f1",53:"a0cf1821",153:"d3b13939",242:"dc37a48e",257:"dc907426",264:"624385d3",289:"fe05844b",296:"ddfd39c7",317:"5faa4c3f",409:"f911dfb5",416:"cd044015",431:"0aa0050e",520:"06e60a8d",528:"d4614677",531:"444ba674",625:"ad236e69",660:"34100840",680:"9a3bac9b",736:"58d02bbd",751:"04caa54d",785:"1302b32b",792:"39a732db",910:"20604597",957:"41a3db51",1158:"525b1485",1169:"b53e2b87",1176:"925776c6",1180:"293fd96f",1199:"239cd605",1235:"f9c14d4b",1245:"6c57f6d0",1266:"e921d172",1273:"0e3e7137",1343:"9a0ba534",1412:"5b9a1462",1432:"ebb7a1e9",1555:"a6295fca",1588:"888968ad",1659:"3e430d53",1660:"6f0bf183",1697:"cec7a07f",1717:"67781391",1733:"56ec8128",1784:"4e966cb2",1874:"4539049f",1891:"d12afca0",1926:"fe75235d",1930:"24fed939",1969:"cfbbe7d3",1997:"28da012c",2008:"b29cbfc9",2130:"e4f7a6fc",2138:"becf8b9f",2146:"2544aa96",2166:"dbba55f7",2169:"4534a38a",2235:"3ed29692",2237:"a734cec9",2317:"f057e7ba",2358:"e2e2f64b",2416:"070b03d1",2419:"58bed487",2445:"2ddf871c",2452:"b33ebd23",2520:"9afa23d1",2675:"84ba4dad",2746:"2e11a940",2782:"9ab039d2",2844:"052c2f15",2872:"0dcad22b",2894:"9b47ce36",2923:"49989e63",2971:"12f25f1b",2980:"a9f414d1",3056:"f121c405",3102:"6e83c9d4",3235:"c8b66b94",3349:"73bea478",3374:"9017b9f4",3442:"5d798e55",3492:"58d3ce09",3499:"a34c5793",3523:"9e3b89fa",3557:"15300607",3582:"7f1ec9dc",3623:"e3484921",3692:"d7c79911",3794:"61b96f8f",3843:"21762a66",3860:"a18ff270",3863:"8e034069",3967:"d04b53a0",4022:"6c922ac1",4050:"f036e5a0",4151:"895e66bf",4209:"bfd8d7a9",4279:"92175d83",4284:"5c296d5f",4520:"ba0a810a",4583:"aacbceb9",4687:"b825dfd0",4698:"17e6c740",4787:"e4acceb8",4933:"e74cf751",4939:"57952934",4961:"c608c769",5044:"80a72148",5138:"c19ef7c1",5157:"fa767dd4",5188:"c3c5a0f1",5246:"82afa0b0",5272:"ada58e78",5312:"7925cfcf",5484:"26135d7a",5569:"c6052ea5",5586:"b58fe43b",5593:"5351960a",5632:"f07cb605",5642:"b45a5197",5685:"07529f8d",5688:"9599a08a",5690:"0bd96631",5693:"0757c85a",5742:"f55bb376",5892:"dd7f35a3",5928:"3279731b",5976:"1bd1fd34",6023:"eea4e997",6041:"a7843710",6063:"460b28a6",6075:"8a98c846",6095:"b25b7838",6213:"c8ce8b49",6216:"1141f61c",6286:"8812a458",6292:"01375355",6325:"3b6c91bb",6362:"f7c39f78",6373:"c6047da1",6433:"cd105203",6506:"1d0fb24a",6594:"4f551ad6",6694:"937d3798",6732:"4325602a",6744:"f7671749",6764:"286c4ec1",6802:"78d0d177",6838:"e9e1e649",6875:"93cba249",6940:"36233820",6943:"edd83c38",6969:"a0d54616",7038:"9345601c",7098:"bf956da2",7147:"6cdd15ff",7161:"1b5aebea",7170:"b801776c",7200:"e9875fb0",7211:"ea88d000",7240:"13d29024",7308:"e7166035",7441:"85f6b500",7540:"3c597960",7775:"f70f66d2",7785:"1bf62334",8228:"6ae54472",8280:"b534a4e6",8298:"4096257b",8317:"71495205",8327:"4507b199",8362:"8f4b4d7c",8401:"14e341b3",8428:"8d51103d",8483:"43c8bdfd",8609:"156ef001",8638:"4fd07345",8691:"be25c518",8747:"70b3d14c",8760:"9017aa92",8873:"1ebd9c66",8874:"84471e45",8883:"e291a5ab",8913:"a65b2f19",8947:"b6500e08",8957:"bdf18136",9048:"6c87deaf",9071:"684ad6b9",9107:"b7cc6627",9175:"57258f76",9329:"7fc572e1",9375:"9b5b5dbe",9400:"07623e97",9462:"d9acc313",9469:"05398b99",9477:"89e3ec67",9545:"07f87302",9566:"f7eac535",9588:"c9bede9b",9593:"453a0fb5",9594:"fdfef6a8",9631:"a6b88134",9647:"36645f55",9664:"edf0e107",9688:"2dc475ab",9703:"b9f89516",9807:"bd7bed0f",9862:"ec317fab",9944:"6394bdb8",9987:"c67204db"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},d="metamask-docs:",r.l=(e,a,f,b)=>{if(c[e])c[e].push(a);else{var t,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var s=n[i];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==d+f){t=s;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",d+f),t.src=e),c[e]=[a];var l=(a,f)=>{t.onerror=t.onload=null,clearTimeout(u);var d=c[e];if(delete c[e],t.parentNode&&t.parentNode.removeChild(t),d&&d.forEach((e=>e(f))),a)return a(f)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="/feat-reference-pages/",r.gca=function(e){return e={17896441:"8401",54713468:"3523",94590018:"6041","74e5817e":"53",f2bb0f3e:"153",ba4cac81:"242",ab4cafa2:"257",a5395e14:"264","9fb62b98":"289",c66adc2f:"296",b247c127:"317","565191f5":"409","4ead4811":"431",cb2c0fed:"520","9cea254b":"528","52198f09":"531","80fc5192":"625",fe0a58ee:"680",f186a5d0:"736",e8973b68:"785",cfc76383:"792",a015cb1d:"910",c141421f:"957","9659c6a2":"1158","92d77c2e":"1180",c73f5a50:"1199",a7456010:"1235","7d4adaa7":"1266",b91521d0:"1273",dfbcf5f2:"1343","8145e54e":"1588","6e004e16":"1660","4a530d18":"1697","40d431ee":"1717",ff576332:"1733",c66e041d:"1784","9947d6d2":"1874",aee6d0cb:"1891","54f1853a":"1926","030193d7":"1930","17a18c8c":"1969",b235dfdd:"1997","320bcfb3":"2008","1a4e3797":"2138","55d0cf22":"2146",df3ffe2a:"2166","76d3ef76":"2169",a767f895:"2358","63b87658":"2416","37351a6b":"2419",c23d85eb:"2445",d0e549fb:"2452","82c9c8ff":"2520","486ba757":"2675","3ee3d2fe":"2782",f8f7b6b2:"2844",ed70584f:"2872","3e112a3e":"2894",cc21c413:"2923","47fa8f02":"2971","3925c87d":"2980","284a1a9e":"3056",ce634f1e:"3102",b6db0fd4:"3235",c90162c2:"3349",f8a3ce18:"3374","453c9f5d":"3442",c3b5c454:"3492","97c42b41":"3499",c3be8443:"3557","03c51261":"3582",bdecca60:"3623","57e75615":"3692",d5f74ffe:"3794",cec98bc3:"3843",ba7d2542:"3860","4ecdda4a":"3967","6721d267":"4022","66ba7e9e":"4050","6380b8b5":"4151","70334ba8":"4209",df203c0f:"4279",d89de9d2:"4284","2a5de1af":"4520","1df93b7f":"4583",c5e4f5c1:"4687","2e39c2b3":"4698","3720c009":"4787",eb2b80f1:"4933","011b5d76":"4939","66d369c7":"4961","839511b6":"5044","666bb528":"5138",c98caafe:"5157","37285b91":"5188",cf946124:"5246","39ee8957":"5272","19fab523":"5312","4c2d8e7b":"5484",d4b4a7ff:"5569",c455d87c:"5586","2c1888ff":"5593","428a89bc":"5632","682638a2":"5685","6ebf937c":"5690",ae6e9ecd:"5693",aba21aa0:"5742","11b7fc92":"5892",d6be5fd3:"5928","6ca88a53":"5976",a2353af7:"6023","7adabfb7":"6075",ab8b636d:"6095","14bc7481":"6213",f9fecb86:"6286",f4fa537f:"6325","7c5954e6":"6373","3d86cae6":"6433",e4b21b58:"6594",f60fed4d:"6694",ee067fe3:"6744","286d8836":"6764","8cd631ec":"6802","4b100ba1":"6838",e1aa5429:"6875","090107f6":"6940",e67f7d1d:"6943","14eb3368":"6969","31e9ff6e":"7038",a7bd4aaa:"7098","0fffe3b1":"7170","51ac80f3":"7240",ab85252c:"7441",d70a1ef5:"7540","5e56b9d4":"7775","68c12626":"7785",f6d13bb3:"8228",ce260bbc:"8280","3e786943":"8298","501c7dd0":"8317","1cd57da2":"8362",f5000f06:"8428","78eb1577":"8483","037997aa":"8638","8329f30e":"8691",ab3b18fd:"8760",fd49626c:"8873","079a82bd":"8874","93556f9a":"8883","652081cc":"8957",a94703ab:"9048","4ad67257":"9071","90e119fe":"9107",d2011f4f:"9175",ef8d09aa:"9329","4efa9f2e":"9375",debbc54f:"9400","49f67c63":"9477","77a46a80":"9545","177a052f":"9566","44fb6b83":"9588","0db58064":"9594","41f5386a":"9631","5e95c892":"9647","95fa971a":"9664",b223888a:"9703","8dacb5d7":"9807","2d6a6903":"9862","7dd3f6c4":"9944","5a6432d3":"9987"}[e]||e,r.p+r.u(e)},(()=>{var e={5354:0,1869:0};r.f.j=(a,f)=>{var c=r.o(e,a)?e[a]:void 0;if(0!==c)if(c)f.push(c[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var d=new Promise(((f,d)=>c=e[a]=[f,d]));f.push(c[2]=d);var b=r.p+r.u(a),t=new Error;r.l(b,(f=>{if(r.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var d=f&&("load"===f.type?"missing":f.type),b=f&&f.target&&f.target.src;t.message="Loading chunk "+a+" failed.\n("+d+": "+b+")",t.name="ChunkLoadError",t.type=d,t.request=b,c[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,f)=>{var c,d,b=f[0],t=f[1],o=f[2],n=0;if(b.some((a=>0!==e[a]))){for(c in t)r.o(t,c)&&(r.m[c]=t[c]);if(o)var i=o(r)}for(a&&a(f);n<b.length;n++)d=b[n],r.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return r.O(i)},f=self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();