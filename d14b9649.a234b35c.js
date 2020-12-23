(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{355:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(8),c=(a(0),a(413)),i={id:"imagebackground",title:"ImageBackground"},o={unversionedId:"imagebackground",id:"version-0.63/imagebackground",isDocsHomePage:!1,title:"ImageBackground",description:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(84.21%), sunnylqm(15.79%)",source:"@site/versioned_docs/version-0.63/imagebackground.md",slug:"/imagebackground",permalink:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/imagebackground",editUrl:"/github.com/reactnativecn/react-native-website/blob/production/cnwebsite/versioned_docs/version-0.63/imagebackground.md",version:"0.63",lastUpdatedAt:1608733239,sidebar:"version-0.63/\u7ec4\u4ef6",previous:{title:"Image",permalink:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/image"},next:{title:"KeyboardAvoidingView",permalink:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/keyboardavoidingview"}},b=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"Props",id:"props",children:[{value:"Image Props",id:"image-props",children:[]},{value:"<code>imageStyle</code>",id:"imagestyle",children:[]},{value:"<code>imageRef</code>",id:"imageref",children:[]},{value:"<code>style</code>",id:"style",children:[]}]}],l={toc:b};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm8421-sunnylqm1579"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",Object(c.b)("a",Object(n.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(84.21%), ",Object(c.b)("a",Object(n.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(15.79%)"),Object(c.b)("p",null,"A common feature request from developers familiar with the web is ",Object(c.b)("inlineCode",{parentName:"p"},"background-image"),". To handle this use case, you can use the ",Object(c.b)("inlineCode",{parentName:"p"},"<ImageBackground>")," component, which has the same props as ",Object(c.b)("inlineCode",{parentName:"p"},"<Image>"),", and add whatever children to it you would like to layer on top of it."),Object(c.b)("p",null,"You might not want to use ",Object(c.b)("inlineCode",{parentName:"p"},"<ImageBackground>")," in some cases, since the implementation is very simple. Refer to ",Object(c.b)("inlineCode",{parentName:"p"},"<ImageBackground>"),"'s ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/Libraries/Image/ImageBackground.js"}),"source code")," for more insight, and create your own custom component when needed."),Object(c.b)("p",null,"Note that you must specify some width and height style attributes."),Object(c.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(c.b)("div",{className:"snack-player","data-snack-name":"ImageBackground","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20ImageBackground%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20image%20%3D%20%7B%20uri%3A%20%22https%3A%2F%2Fzh-hans.reactjs.org%2Flogo-og.png%22%20%7D%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CImageBackground%20source%3D%7Bimage%7D%20style%3D%7Bstyles.image%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EInside%3C%2FText%3E%0A%20%20%20%20%3C%2FImageBackground%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20flexDirection%3A%20%22column%22%0A%20%20%7D%2C%0A%20%20image%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20resizeMode%3A%20%22cover%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20fontSize%3A%2042%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%2C%0A%20%20%20%20background%3A%20%22%23000000a0%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(c.b)("hr",null),Object(c.b)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("h3",{id:"image-props"},Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/image#props"}),"Image Props")),Object(c.b)("h3",{id:"imagestyle"},Object(c.b)("inlineCode",{parentName:"h3"},"imageStyle")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/image-style-props"}),"image styles")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(c.b)("h3",{id:"imageref"},Object(c.b)("inlineCode",{parentName:"h3"},"imageRef")),Object(c.b)("p",null,"Allows to set a reference to the inner ",Object(c.b)("inlineCode",{parentName:"p"},"Image")," component"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://zh-hans.reactjs.org/docs/refs-and-the-dom.html"}),"Ref")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(c.b)("h3",{id:"style"},Object(c.b)("inlineCode",{parentName:"h3"},"style")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/view-style-props"}),"View Style"))))))}s.isMDXComponent=!0},413:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,u=p["".concat(i,".").concat(m)]||p[m]||d[m]||c;return a?r.a.createElement(u,o(o({ref:t},l),{},{components:a})):r.a.createElement(u,o({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<c;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);