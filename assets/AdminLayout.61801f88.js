import{x as k,B as m,aC as ge,n as Ie,aL as ze,$ as U,v as Q,j as T,D as g,A as E,aM as L,a9 as ce,Y as be,r as V,a4 as de,aN as ye,aO as He,C as Y,aP as q,t as f,q as p,s as z,H as v,a1 as j,y as Ae,z as se,aQ as we,a5 as re,I as ne,a2 as ie,aR as Se,ad as P,N as Re,aS as Ne,_ as Pe,a as _e,b as Te,o as ke,c as Me,d as ve,e as G,p as Fe,f as Le,aT as W,aU as Oe}from"./index.eb6c3f73.js";import{t as Ee,N as Ke,f as $e}from"./Tooltip.6707a6f2.js";const je=k({name:"ChevronDownFilled",render(){return m("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},m("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});function Be(e,i,t,n){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:i,itemColorActiveHoverInverted:i,itemColorActiveCollapsedInverted:i,itemTextColorInverted:e,itemTextColorHoverInverted:t,itemTextColorChildActiveInverted:t,itemTextColorChildActiveHoverInverted:t,itemTextColorActiveInverted:t,itemTextColorActiveHoverInverted:t,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:t,itemTextColorChildActiveHorizontalInverted:t,itemTextColorChildActiveHoverHorizontalInverted:t,itemTextColorActiveHorizontalInverted:t,itemTextColorActiveHoverHorizontalInverted:t,itemIconColorInverted:e,itemIconColorHoverInverted:t,itemIconColorActiveInverted:t,itemIconColorActiveHoverInverted:t,itemIconColorChildActiveInverted:t,itemIconColorChildActiveHoverInverted:t,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:t,itemIconColorActiveHorizontalInverted:t,itemIconColorActiveHoverHorizontalInverted:t,itemIconColorChildActiveHorizontalInverted:t,itemIconColorChildActiveHoverHorizontalInverted:t,arrowColorInverted:e,arrowColorHoverInverted:t,arrowColorActiveInverted:t,arrowColorActiveHoverInverted:t,arrowColorChildActiveInverted:t,arrowColorChildActiveHoverInverted:t,groupTextColorInverted:n}}const Ve=e=>{const{borderRadius:i,textColor3:t,primaryColor:n,textColor2:l,textColor1:a,fontSize:d,dividerColor:c,hoverColor:s,primaryColorHover:I}=e;return Object.assign({borderRadius:i,color:"#0000",groupTextColor:t,itemColorHover:s,itemColorActive:U(n,{alpha:.1}),itemColorActiveHover:U(n,{alpha:.1}),itemColorActiveCollapsed:U(n,{alpha:.1}),itemTextColor:l,itemTextColorHover:l,itemTextColorActive:n,itemTextColorActiveHover:n,itemTextColorChildActive:n,itemTextColorChildActiveHover:n,itemTextColorHorizontal:l,itemTextColorHoverHorizontal:I,itemTextColorActiveHorizontal:n,itemTextColorActiveHoverHorizontal:n,itemTextColorChildActiveHorizontal:n,itemTextColorChildActiveHoverHorizontal:n,itemIconColor:a,itemIconColorHover:a,itemIconColorActive:n,itemIconColorActiveHover:n,itemIconColorChildActive:n,itemIconColorChildActiveHover:n,itemIconColorCollapsed:a,itemIconColorHorizontal:a,itemIconColorHoverHorizontal:I,itemIconColorActiveHorizontal:n,itemIconColorActiveHoverHorizontal:n,itemIconColorChildActiveHorizontal:n,itemIconColorChildActiveHoverHorizontal:n,itemHeight:"42px",arrowColor:l,arrowColorHover:l,arrowColorActive:n,arrowColorActiveHover:n,arrowColorChildActive:n,arrowColorChildActiveHover:n,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:d,dividerColor:c},Be("#BBB",n,"#FFF","#AAA"))},De=ge({name:"Menu",common:Ie,peers:{Tooltip:Ee,Dropdown:ze},self:Ve}),Ue=De,K=Q("n-menu"),Z=Q("n-submenu"),J=Q("n-menu-item-group"),B=8;function X(e){const i=T(K),{props:t,mergedCollapsedRef:n}=i,l=T(Z,null),a=T(J,null),d=g(()=>t.mode==="horizontal"),c=g(()=>d.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),s=g(()=>{var u;return Math.max((u=t.collapsedIconSize)!==null&&u!==void 0?u:t.iconSize,t.iconSize)}),I=g(()=>{var u;return!d.value&&e.root&&n.value&&(u=t.collapsedIconSize)!==null&&u!==void 0?u:t.iconSize}),S=g(()=>{if(d.value)return;const{collapsedWidth:u,indent:H,rootIndent:w}=t,{root:A,isGroup:R}=e,N=w===void 0?H:w;if(A)return n.value?u/2-s.value/2:N;if(a)return H/2+a.paddingLeftRef.value;if(l)return(R?H/2:H)+l.paddingLeftRef.value}),b=g(()=>{const{collapsedWidth:u,indent:H,rootIndent:w}=t,{value:A}=s,{root:R}=e;return d.value||!R||!n.value?B:(w===void 0?H:w)+A+B-(u+A)/2});return{dropdownPlacement:c,activeIconSize:I,maxIconSize:s,paddingLeft:S,iconMarginRight:b,NMenu:i,NSubmenu:l}}const ee={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},me=Object.assign(Object.assign({},ee),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),qe=k({name:"MenuOptionGroup",props:me,setup(e){E(Z,null);const i=X(e);E(J,{paddingLeftRef:i.paddingLeft});const{mergedClsPrefixRef:t,props:n}=T(K);return function(){const{value:l}=t,a=i.paddingLeft.value,{nodeProps:d}=n,c=d==null?void 0:d(e.tmNode.rawNode);return m("div",{class:`${l}-menu-item-group`,role:"group"},m("div",Object.assign({},c,{class:[`${l}-menu-item-group-title`,c==null?void 0:c.class],style:[(c==null?void 0:c.style)||"",a!==void 0?`padding-left: ${a}px;`:""]}),L(e.title),e.extra?m(ce,null," ",L(e.extra)):null),m("div",null,e.tmNodes.map(s=>oe(s,n))))}}}),ue=k({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:i}=T(K);return{menuProps:i,style:g(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:g(()=>{const{maxIconSize:t,activeIconSize:n,iconMarginRight:l}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${n}px`,marginRight:`${l}px`}})}},render(){const{clsPrefix:e,tmNode:i,menuProps:{renderIcon:t,renderLabel:n,renderExtra:l,expandIcon:a}}=this,d=t?t(i.rawNode):L(this.icon);return m("div",{onClick:c=>{var s;(s=this.onClick)===null||s===void 0||s.call(this,c)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},d&&m("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[d]),m("div",{class:`${e}-menu-item-content-header`,role:"none"},n?n(i.rawNode):L(this.title),this.extra||l?m("span",{class:`${e}-menu-item-content-header__extra`}," ",l?l(i.rawNode):L(this.extra)):null),this.showArrow?m(be,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>a?a(i.rawNode):m(je,null)}):null)}}),he=Object.assign(Object.assign({},ee),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),Ge=k({name:"Submenu",props:he,setup(e){const i=X(e),{NMenu:t,NSubmenu:n}=i,{props:l,mergedCollapsedRef:a,mergedThemeRef:d}=t,c=g(()=>{const{disabled:u}=e;return n!=null&&n.mergedDisabledRef.value||l.disabled?!0:u}),s=V(!1);E(Z,{paddingLeftRef:i.paddingLeft,mergedDisabledRef:c}),E(J,null);function I(){const{onClick:u}=e;u&&u()}function S(){c.value||(a.value||t.toggleExpand(e.internalKey),I())}function b(u){s.value=u}return{menuProps:l,mergedTheme:d,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:i.maxIconSize,activeIconSize:i.activeIconSize,iconMarginRight:i.iconMarginRight,dropdownPlacement:i.dropdownPlacement,dropdownShow:s,paddingLeft:i.paddingLeft,mergedDisabled:c,mergedValue:t.mergedValueRef,childActive:de(()=>t.activePathRef.value.includes(e.internalKey)),collapsed:g(()=>l.mode==="horizontal"?!1:a.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:g(()=>!c.value&&(l.mode==="horizontal"||a.value)),handlePopoverShowChange:b,handleClick:S}},render(){var e;const{mergedClsPrefix:i,menuProps:{renderIcon:t,renderLabel:n}}=this,l=()=>{const{isHorizontal:d,paddingLeft:c,collapsed:s,mergedDisabled:I,maxIconSize:S,activeIconSize:b,title:u,childActive:H,icon:w,handleClick:A,menuProps:{nodeProps:R},dropdownShow:N,iconMarginRight:D,tmNode:O,mergedClsPrefix:$}=this,M=R==null?void 0:R(O.rawNode);return m("div",Object.assign({},M,{class:[`${$}-menu-item`,M==null?void 0:M.class],role:"menuitem"}),m(ue,{tmNode:O,paddingLeft:c,collapsed:s,disabled:I,iconMarginRight:D,maxIconSize:S,activeIconSize:b,title:u,showArrow:!d,childActive:H,clsPrefix:$,icon:w,hover:N,onClick:A}))},a=()=>m(He,null,{default:()=>{const{tmNodes:d,collapsed:c}=this;return c?null:m("div",{class:`${i}-submenu-children`,role:"menu"},d.map(s=>oe(s,this.menuProps)))}});return this.root?m(ye,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:n}),{default:()=>m("div",{class:`${i}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},l(),this.isHorizontal?null:a())}):m("div",{class:`${i}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},l(),a())}}),pe=Object.assign(Object.assign({},ee),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),We=k({name:"MenuOption",props:pe,setup(e){const i=X(e),{NSubmenu:t,NMenu:n}=i,{props:l,mergedClsPrefixRef:a,mergedCollapsedRef:d}=n,c=t?t.mergedDisabledRef:{value:!1},s=g(()=>c.value||e.disabled);function I(b){const{onClick:u}=e;u&&u(b)}function S(b){s.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),I(b))}return{mergedClsPrefix:a,dropdownPlacement:i.dropdownPlacement,paddingLeft:i.paddingLeft,iconMarginRight:i.iconMarginRight,maxIconSize:i.maxIconSize,activeIconSize:i.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:l,dropdownEnabled:de(()=>e.root&&d.value&&l.mode!=="horizontal"&&!s.value),selected:g(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:s,handleClick:S}},render(){const{mergedClsPrefix:e,mergedTheme:i,tmNode:t,menuProps:{renderLabel:n,nodeProps:l}}=this,a=l==null?void 0:l(t.rawNode);return m("div",Object.assign({},a,{role:"menuitem",class:[`${e}-menu-item`,a==null?void 0:a.class]}),m(Ke,{theme:i.peers.Tooltip,themeOverrides:i.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(t.rawNode):L(this.title),trigger:()=>m(ue,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Qe=k({name:"MenuDivider",setup(){const e=T(K),{mergedClsPrefixRef:i,isHorizontalRef:t}=e;return()=>t.value?null:m("div",{class:`${i.value}-menu-divider`})}}),Ye=Y(me),Ze=Y(pe),Je=Y(he);function Xe(e){return e.type==="divider"||e.type==="render"}function eo(e){return e.type==="divider"}function oe(e,i){const{rawNode:t}=e;if(Xe(t))return eo(t)?m(Qe,Object.assign({key:e.key},t.props)):void 0;const{labelField:n}=i,{key:l,level:a,isGroup:d}=e,c=Object.assign(Object.assign({},t),{title:t.title||t[n],extra:t.titleExtra||t.extra,key:l,internalKey:l,level:a,root:a===0,isGroup:d});return e.children?e.isGroup?m(qe,q(c,Ye,{tmNode:e,tmNodes:e.children,key:l})):m(Ge,q(c,Je,{key:l,rawNodes:t[i.childrenField],tmNodes:e.children,tmNode:e})):m(We,q(c,Ze,{key:l,tmNode:e}))}const le=[f("&::before","background-color: var(--n-item-color-hover);"),v("arrow",`
 color: var(--n-arrow-color-hover);
 `),v("icon",`
 color: var(--n-item-icon-color-hover);
 `),p("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[f("a",`
 color: var(--n-item-text-color-hover);
 `),v("extra",`
 color: var(--n-item-text-color-hover);
 `)])],ae=[v("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),p("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[f("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),v("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],oo=f([p("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[z("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[p("submenu","margin: 0;"),p("menu-item","margin: 0;"),p("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[f("&::before","display: none;"),z("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),p("menu-item-content",[z("selected",[v("icon","color: var(--n-item-icon-color-active-horizontal);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[f("a","color: var(--n-item-text-color-active-horizontal);"),v("extra","color: var(--n-item-text-color-active-horizontal);")])]),z("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[f("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),v("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),v("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),j("disabled",[j("selected, child-active",[f("&:focus-within",ae)]),z("selected",[_(null,[v("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[f("a","color: var(--n-item-text-color-active-hover-horizontal);"),v("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),z("child-active",[_(null,[v("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[f("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),v("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),_("border-bottom: 2px solid var(--n-border-color-horizontal);",ae)]),p("menu-item-content-header",[f("a","color: var(--n-item-text-color-horizontal);")])])]),z("collapsed",[p("menu-item-content",[z("selected",[f("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),p("menu-item-content-header","opacity: 0;"),v("arrow","opacity: 0;"),v("icon","color: var(--n-item-icon-color-collapsed);")])]),p("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),p("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[f("> *","z-index: 1;"),f("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),z("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),z("collapsed",[v("arrow","transform: rotate(0);")]),z("selected",[f("&::before","background-color: var(--n-item-color-active);"),v("arrow","color: var(--n-arrow-color-active);"),v("icon","color: var(--n-item-icon-color-active);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[f("a","color: var(--n-item-text-color-active);"),v("extra","color: var(--n-item-text-color-active);")])]),z("child-active",[p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[f("a",`
 color: var(--n-item-text-color-child-active);
 `),v("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),v("arrow",`
 color: var(--n-arrow-color-child-active);
 `),v("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),j("disabled",[j("selected, child-active",[f("&:focus-within",le)]),z("selected",[_(null,[v("arrow","color: var(--n-arrow-color-active-hover);"),v("icon","color: var(--n-item-icon-color-active-hover);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[f("a","color: var(--n-item-text-color-active-hover);"),v("extra","color: var(--n-item-text-color-active-hover);")])])]),z("child-active",[_(null,[v("arrow","color: var(--n-arrow-color-child-active-hover);"),v("icon","color: var(--n-item-icon-color-child-active-hover);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[f("a","color: var(--n-item-text-color-child-active-hover);"),v("extra","color: var(--n-item-text-color-child-active-hover);")])])]),z("selected",[_(null,[f("&::before","background-color: var(--n-item-color-active-hover);")])]),_(null,le)]),v("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),v("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),p("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[f("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[f("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),v("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),p("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[p("menu-item-content",`
 height: var(--n-item-height);
 `),p("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[$e({duration:".2s"})])]),p("menu-item-group",[p("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),p("menu-tooltip",[f("a",`
 color: inherit;
 text-decoration: none;
 `)]),p("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function _(e,i){return[z("hover",e,i),f("&:hover",e,i)]}const to=Object.assign(Object.assign({},se.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),ro=k({name:"Menu",props:to,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:t}=Ae(e),n=se("Menu","-menu",oo,Ue,e,i),l=T(we,null),a=g(()=>{var h;const{collapsed:C}=e;if(C!==void 0)return C;if(l){const{collapseModeRef:o,collapsedRef:x}=l;if(o.value==="width")return(h=x.value)!==null&&h!==void 0?h:!1}return!1}),d=g(()=>{const{keyField:h,childrenField:C}=e;return Ne(e.items||e.options,{getChildren(o){return o[C]},getKey(o){var x;return(x=o[h])!==null&&x!==void 0?x:o.name}})}),c=g(()=>new Set(d.value.treeNodes.map(h=>h.key))),{watchProps:s}=e,I=V(null);s!=null&&s.includes("defaultValue")?re(()=>{I.value=e.defaultValue}):I.value=e.defaultValue;const S=ne(e,"value"),b=ie(S,I),u=V([]),H=()=>{u.value=e.defaultExpandAll?d.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||d.value.getPath(b.value,{includeSelf:!1}).keyPath};s!=null&&s.includes("defaultExpandedKeys")?re(H):H();const w=Se(e,["expandedNames","expandedKeys"]),A=ie(w,u),R=g(()=>d.value.treeNodes),N=g(()=>d.value.getPath(b.value).keyPath);E(K,{props:e,mergedCollapsedRef:a,mergedThemeRef:n,mergedValueRef:b,mergedExpandedKeysRef:A,activePathRef:N,mergedClsPrefixRef:i,isHorizontalRef:g(()=>e.mode==="horizontal"),invertedRef:ne(e,"inverted"),doSelect:D,toggleExpand:$});function D(h,C){const{"onUpdate:value":o,onUpdateValue:x,onSelect:y}=e;x&&P(x,h,C),o&&P(o,h,C),y&&P(y,h,C),I.value=h}function O(h){const{"onUpdate:expandedKeys":C,onUpdateExpandedKeys:o,onExpandedNamesChange:x,onOpenNamesChange:y}=e;C&&P(C,h),o&&P(o,h),x&&P(x,h),y&&P(y,h),u.value=h}function $(h){const C=Array.from(A.value),o=C.findIndex(x=>x===h);if(~o)C.splice(o,1);else{if(e.accordion&&c.value.has(h)){const x=C.findIndex(y=>c.value.has(y));x>-1&&C.splice(x,1)}C.push(h)}O(C)}const M=h=>{const C=d.value.getPath(h!=null?h:b.value,{includeSelf:!1}).keyPath;if(!C.length)return;const o=Array.from(A.value),x=new Set([...o,...C]);e.accordion&&c.value.forEach(y=>{x.has(y)&&!C.includes(y)&&x.delete(y)}),O(Array.from(x))},te=g(()=>{const{inverted:h}=e,{common:{cubicBezierEaseInOut:C},self:o}=n.value,{borderRadius:x,borderColorHorizontal:y,fontSize:fe,itemHeight:Ce,dividerColor:xe}=o,r={"--n-divider-color":xe,"--n-bezier":C,"--n-font-size":fe,"--n-border-color-horizontal":y,"--n-border-radius":x,"--n-item-height":Ce};return h?(r["--n-group-text-color"]=o.groupTextColorInverted,r["--n-color"]=o.colorInverted,r["--n-item-text-color"]=o.itemTextColorInverted,r["--n-item-text-color-hover"]=o.itemTextColorHoverInverted,r["--n-item-text-color-active"]=o.itemTextColorActiveInverted,r["--n-item-text-color-child-active"]=o.itemTextColorChildActiveInverted,r["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveInverted,r["--n-item-text-color-active-hover"]=o.itemTextColorActiveHoverInverted,r["--n-item-icon-color"]=o.itemIconColorInverted,r["--n-item-icon-color-hover"]=o.itemIconColorHoverInverted,r["--n-item-icon-color-active"]=o.itemIconColorActiveInverted,r["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHoverInverted,r["--n-item-icon-color-child-active"]=o.itemIconColorChildActiveInverted,r["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHoverInverted,r["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsedInverted,r["--n-item-text-color-horizontal"]=o.itemTextColorHorizontalInverted,r["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontalInverted,r["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontalInverted,r["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontalInverted,r["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontalInverted,r["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontalInverted,r["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontalInverted,r["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontalInverted,r["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontalInverted,r["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontalInverted,r["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontalInverted,r["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontalInverted,r["--n-arrow-color"]=o.arrowColorInverted,r["--n-arrow-color-hover"]=o.arrowColorHoverInverted,r["--n-arrow-color-active"]=o.arrowColorActiveInverted,r["--n-arrow-color-active-hover"]=o.arrowColorActiveHoverInverted,r["--n-arrow-color-child-active"]=o.arrowColorChildActiveInverted,r["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHoverInverted,r["--n-item-color-hover"]=o.itemColorHoverInverted,r["--n-item-color-active"]=o.itemColorActiveInverted,r["--n-item-color-active-hover"]=o.itemColorActiveHoverInverted,r["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsedInverted):(r["--n-group-text-color"]=o.groupTextColor,r["--n-color"]=o.color,r["--n-item-text-color"]=o.itemTextColor,r["--n-item-text-color-hover"]=o.itemTextColorHover,r["--n-item-text-color-active"]=o.itemTextColorActive,r["--n-item-text-color-child-active"]=o.itemTextColorChildActive,r["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveHover,r["--n-item-text-color-active-hover"]=o.itemTextColorActiveHover,r["--n-item-icon-color"]=o.itemIconColor,r["--n-item-icon-color-hover"]=o.itemIconColorHover,r["--n-item-icon-color-active"]=o.itemIconColorActive,r["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHover,r["--n-item-icon-color-child-active"]=o.itemIconColorChildActive,r["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHover,r["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsed,r["--n-item-text-color-horizontal"]=o.itemTextColorHorizontal,r["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontal,r["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontal,r["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontal,r["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontal,r["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontal,r["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontal,r["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontal,r["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontal,r["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontal,r["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontal,r["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontal,r["--n-arrow-color"]=o.arrowColor,r["--n-arrow-color-hover"]=o.arrowColorHover,r["--n-arrow-color-active"]=o.arrowColorActive,r["--n-arrow-color-active-hover"]=o.arrowColorActiveHover,r["--n-arrow-color-child-active"]=o.arrowColorChildActive,r["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHover,r["--n-item-color-hover"]=o.itemColorHover,r["--n-item-color-active"]=o.itemColorActive,r["--n-item-color-active-hover"]=o.itemColorActiveHover,r["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsed),r}),F=t?Re("menu",g(()=>e.inverted?"a":"b"),te,e):void 0;return{mergedClsPrefix:i,controlledExpandedKeys:w,uncontrolledExpanededKeys:u,mergedExpandedKeys:A,uncontrolledValue:I,mergedValue:b,activePath:N,tmNodes:R,mergedTheme:n,mergedCollapsed:a,cssVars:t?void 0:te,themeClass:F==null?void 0:F.themeClass,onRender:F==null?void 0:F.onRender,showOption:M}},render(){const{mergedClsPrefix:e,mode:i,themeClass:t,onRender:n}=this;return n==null||n(),m("div",{role:i==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${i}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(l=>oe(l,this.$props)))}});const no=e=>(Fe("data-v-69b7d838"),e=e(),Le(),e),io={class:"menubox"},lo=no(()=>ve("h1",null,"\u602A\u7378\u5929\u570B\u5F8C\u53F0\u7BA1\u7406\u7CFB\u7D71",-1)),ao={__name:"AdminLayout",setup(e){const i=V(null),t=_e([{label:()=>m(W,{to:{path:"/"}},{default:()=>"\u56DE\u9996\u9801"}),key:"back"},{label:()=>m(W,{to:{path:"/admin/products"}},{default:()=>"\u5546\u54C1\u7BA1\u7406"}),key:"products"},{label:()=>m(W,{to:{path:"/admin/orders"}},{default:()=>"\u8A02\u55AE\u7BA1\u7406"}),key:"orders"}]);return(n,l)=>{const a=ro,d=Oe,c=Te("RouterView");return ke(),Me(ce,null,[ve("div",io,[lo,G(a,{value:i.value,"onUpdate:value":l[0]||(l[0]=s=>i.value=s),options:t},null,8,["value","options"])]),G(d,{right:100}),G(c)],64)}}},vo=Pe(ao,[["__scopeId","data-v-69b7d838"]]);export{vo as default};
