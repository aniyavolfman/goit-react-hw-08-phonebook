"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[435],{1435:function(e,n,t){t.r(n),t.d(n,{default:function(){return ue}});var r=t(2791),a="NOT_FOUND";var o=function(e,n){return e===n};function i(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,i=void 0===r?o:r,s=t.maxSize,c=void 0===s?1:s,u=t.resultEqualityCheck,l=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}}(i),d=1===c?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:a},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(l):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return a}return{get:r,put:function(n,o){r(n)===a&&(t.unshift({key:n,value:o}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(c,l);function f(){var n=d.get(arguments);if(n===a){if(n=e.apply(null,arguments),u){var t=d.getEntries(),r=t.find((function(e){return u(e.value,n)}));r&&(n=r.value)}d.put(arguments,n)}return n}return f.clearCache=function(){return d.clear()},f}function s(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function c(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var o,i=0,c={memoizeOptions:void 0},u=r.pop();if("object"===typeof u&&(c=u,u=r.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var l=c,d=l.memoizeOptions,f=void 0===d?t:d,p=Array.isArray(f)?f:[f],m=s(r),v=e.apply(void 0,[function(){return i++,u.apply(null,arguments)}].concat(p)),h=e((function(){for(var e=[],n=m.length,t=0;t<n;t++)e.push(m[t].apply(null,arguments));return o=v.apply(null,e)}));return Object.assign(h,{resultFunc:u,memoizedResultFunc:v,dependencies:m,lastResult:function(){return o},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),h};return a}var u=c(i),l=function(e){return e.filterData},d=function(e){return e.contactData.contacts.items},f=function(e){return e.contactData.isLoading},p=function(e){return e.contactData.error},m=u([d,l],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().trim().includes(n.toLowerCase())}))})),v=t(9434),h=t(1413),y=t(4942),x=t(4925),j=t(9439),C=t(4363),g=t(9886),_=t(7200),b=t(7872),Z=t(9219),L=t(2996),N=t(2952),I=t(3329),k=["children","styleType","stylePosition","spacing"],w=["as"],S=["as"],A=(0,g.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),z=(0,j.Z)(A,2),E=z[0],D=z[1],F=(0,b.G)((function(e,n){var t=(0,Z.jC)("List",e),r=(0,L.Lr)(e),a=r.children,o=r.styleType,i=void 0===o?"none":o,s=r.stylePosition,c=r.spacing,u=(0,x.Z)(r,k),l=(0,_.W)(a),d=c?(0,y.Z)({},"& > *:not(style) ~ *:not(style)",{mt:c}):{};return(0,I.jsx)(E,{value:t,children:(0,I.jsx)(N.m.ul,(0,h.Z)((0,h.Z)({ref:n,listStyleType:i,listStylePosition:s,role:"list",__css:(0,h.Z)((0,h.Z)({},t.container),d)},u),{},{children:l}))})}));F.displayName="List",(0,b.G)((function(e,n){e.as;var t=(0,x.Z)(e,w);return(0,I.jsx)(F,(0,h.Z)({ref:n,as:"ol",styleType:"decimal",marginStart:"1em"},t))})).displayName="OrderedList",(0,b.G)((function(e,n){e.as;var t=(0,x.Z)(e,S);return(0,I.jsx)(F,(0,h.Z)({ref:n,as:"ul",styleType:"initial",marginStart:"1em"},t))})).displayName="UnorderedList";var M=(0,b.G)((function(e,n){var t=D();return(0,I.jsx)(N.m.li,(0,h.Z)((0,h.Z)({ref:n},e),{},{__css:t.item}))}));M.displayName="ListItem";var O=(0,b.G)((function(e,n){var t=D();return(0,I.jsx)(C.J,(0,h.Z)((0,h.Z)({ref:n,role:"presentation"},e),{},{__css:t.icon}))}));O.displayName="ListIcon";var P=t(4224),T=t(6149),B="ContactListItem_buttonDelete__965SC";function G(e){var n=e.name,t=e.number,r=e.onButtonDelete,a=e.buttonId;return(0,I.jsxs)(M,{children:[(0,I.jsx)(O,{as:T.r,color:"#6c5ce7"}),n,": ",(0,I.jsx)("span",{children:t}),(0,I.jsx)(P.z,{size:"xs",colorScheme:"purple",id:a,onClick:r,className:B,children:"Delete"})]})}var q=t(6960),H="ContactsList_contactsList__ZQI1L";function J(){var e=(0,v.v9)(m),n=(0,v.I0)();(0,r.useEffect)((function(){n(q.yF())}),[n]);var t=function(e){n(q.GK(e.target.id))};return(0,I.jsx)(F,{className:H,children:e.map((function(e){var n=e.id,r=e.name,a=e.number;return(0,I.jsx)(G,{name:r,number:a,onButtonDelete:t,buttonId:n},n)}))})}var R="Container_container__VVOCq";function K(e){var n=e.children;return(0,I.jsx)("div",{className:R,children:n})}var U=t(311),V=t(7806),W=t(7697),Q=t(5903),$=(0,Q.I)({d:"M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z",displayName:"SearchIcon"}),X=t(1634),Y="Filter_input__N7T3z";function ee(){var e=(0,v.v9)(l),n=(0,v.I0)();return(0,I.jsxs)("div",{children:[(0,I.jsx)("p",{children:"Find contacts by name"}),(0,I.jsxs)(U.B,{children:[(0,I.jsx)(V.Z,{pointerEvents:"none",children:(0,I.jsx)($,{color:"#6c5ce7"})}),(0,I.jsx)(W.I,{variant:"filled",placeholder:"Find contact",type:"text",name:"filter",value:e,onChange:function(e){var t=e.target.value;n((0,X.Tv)(t))},className:Y})]})]})}var ne=t(5264),te=(0,Q.I)({displayName:"EditIcon",path:(0,I.jsxs)("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",children:[(0,I.jsx)("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),(0,I.jsx)("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})}),re=(0,Q.I)({d:"M2.20731,0.0127209 C2.1105,-0.0066419 1.99432,-0.00664663 1.91687,0.032079 C0.871279,0.438698 0.212942,1.92964 0.0580392,2.95587 C-0.426031,6.28627 2.20731,9.17133 4.62766,11.0689 C6.77694,12.7534 10.9012,15.5223 13.3409,12.8503 C13.6507,12.5211 14.0186,12.037 13.9993,11.553 C13.9412,10.7397 13.186,10.1588 12.6051,9.71349 C12.1598,9.38432 11.2304,8.47427 10.6495,8.49363 C10.1267,8.51299 9.79754,9.05515 9.46837,9.38432 L8.88748,9.96521 C8.79067,10.062 7.55145,9.24878 7.41591,9.15197 C6.91248,8.8228 6.4284,8.45491 6.00242,8.04829 C5.57644,7.64167 5.18919,7.19632 4.86002,6.73161 C4.7632,6.59607 3.96933,5.41495 4.04678,5.31813 C4.04678,5.31813 4.72448,4.58234 4.91811,4.2919 C5.32473,3.67229 5.63453,3.18822 5.16982,2.45243 C4.99556,2.18135 4.78257,1.96836 4.55021,1.73601 C4.14359,1.34875 3.73698,0.942131 3.27227,0.612963 C3.02055,0.419335 2.59457,0.0708094 2.20731,0.0127209 Z",displayName:"PhoneIcon",viewBox:"0 0 14 14"}),ae={formContact:"Form_formContact__gte1o"};function oe(){var e=(0,v.v9)(d),n=(0,v.I0)(),t=(0,r.useState)(""),a=(0,j.Z)(t,2),o=a[0],i=a[1],s=(0,r.useState)(""),c=(0,j.Z)(s,2),u=c[0],l=c[1],f={name:i,number:l},p=function(e){var n=e.target,t=n.name,r=n.value;f[t](r)},m=function(t){if(e.some((function(e){return e.name.toLowerCase()===t.name.toLowerCase()})))ne.Notify.info("Oops, ".concat(t.name," is already in contacts!"));else{var r=(0,h.Z)({},t);n(q.uK(r))}};return(0,I.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m({name:o,number:u}),i(""),l("")},className:ae.formContact,children:[(0,I.jsxs)("label",{children:[(0,I.jsx)("div",{children:"Name"}),(0,I.jsxs)(U.B,{children:[(0,I.jsx)(V.Z,{pointerEvents:"none",children:(0,I.jsx)(te,{color:"#6c5ce7"})}),(0,I.jsx)(W.I,{variant:"filled",placeholder:"Enter contact name",type:"text",name:"name",value:o,onChange:p,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})]}),(0,I.jsxs)("label",{children:[(0,I.jsx)("div",{children:"Number"}),(0,I.jsxs)(U.B,{children:[(0,I.jsx)(V.Z,{pointerEvents:"none",children:(0,I.jsx)(re,{color:"#6c5ce7"})}),(0,I.jsx)(W.I,{variant:"filled",placeholder:"Enter contact number",type:"tel",name:"number",value:u,onChange:p,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})]}),(0,I.jsx)(P.z,{type:"submit",colorScheme:"purple",className:ae.buttonSubmit,children:"Add contact"})]})}var ie=t(2639),se="ContactsPage_mainHeader__+ujJJ",ce="ContactsPage_header__HNG06";function ue(){var e=(0,v.v9)(f),n=(0,v.v9)(p);return(0,I.jsxs)(K,{children:[null!==n&&(0,I.jsxs)("p",{children:["Ooops, smth is wrong... Message: '",n,"'"]}),(0,I.jsx)("h1",{className:se,children:"Phonebook"}),(0,I.jsx)(oe,{}),(0,I.jsx)("h2",{className:ce,children:"Contacts"}),(0,I.jsx)(ee,{}),e&&(0,I.jsx)(ie.a,{}),(0,I.jsx)(J,{})]})}},6149:function(e,n,t){t.d(n,{r:function(){return r}});var r=(0,t(5903).I)({d:"M23.555,8.729a1.505,1.505,0,0,0-1.406-.98H16.062a.5.5,0,0,1-.472-.334L13.405,1.222a1.5,1.5,0,0,0-2.81,0l-.005.016L8.41,7.415a.5.5,0,0,1-.471.334H1.85A1.5,1.5,0,0,0,.887,10.4l5.184,4.3a.5.5,0,0,1,.155.543L4.048,21.774a1.5,1.5,0,0,0,2.31,1.684l5.346-3.92a.5.5,0,0,1,.591,0l5.344,3.919a1.5,1.5,0,0,0,2.312-1.683l-2.178-6.535a.5.5,0,0,1,.155-.543l5.194-4.306A1.5,1.5,0,0,0,23.555,8.729Z",displayName:"StarIcon"})}}]);
//# sourceMappingURL=435.d96dac16.chunk.js.map