import{n as te,$ as c,q as ie,s as x,H as m,a1 as S,t as y,x as de,r as he,y as ge,z as V,A as be,I as ue,a6 as ve,D as N,M as g,N as Ce,ak as U,O as D,B as I,ax as pe,v as fe,ad as ke}from"./index.eb6c3f73.js";const xe={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px",closeMarginRtl:"0 4px 0 0"},me=e=>{const{textColor2:i,primaryColorHover:o,primaryColorPressed:h,primaryColor:t,infoColor:a,successColor:d,warningColor:s,errorColor:l,baseColor:C,borderColor:p,opacityDisabled:b,tagColor:u,closeIconColor:r,closeIconColorHover:n,closeIconColorPressed:k,borderRadiusSmall:v,fontSizeMini:f,fontSizeTiny:z,fontSizeSmall:P,fontSizeMedium:H,heightMini:$,heightTiny:M,heightSmall:B,heightMedium:R,closeColorHover:O,closeColorPressed:w,buttonColor2Hover:E,buttonColor2Pressed:_,fontWeightStrong:T}=e;return Object.assign(Object.assign({},xe),{closeBorderRadius:v,heightTiny:$,heightSmall:M,heightMedium:B,heightLarge:R,borderRadius:v,opacityDisabled:b,fontSizeTiny:f,fontSizeSmall:z,fontSizeMedium:P,fontSizeLarge:H,fontWeightStrong:T,textColorCheckable:i,textColorHoverCheckable:i,textColorPressedCheckable:i,textColorChecked:C,colorCheckable:"#0000",colorHoverCheckable:E,colorPressedCheckable:_,colorChecked:t,colorCheckedHover:o,colorCheckedPressed:h,border:`1px solid ${p}`,textColor:i,color:u,colorBordered:"rgb(250, 250, 252)",closeIconColor:r,closeIconColorHover:n,closeIconColorPressed:k,closeColorHover:O,closeColorPressed:w,borderPrimary:`1px solid ${c(t,{alpha:.3})}`,textColorPrimary:t,colorPrimary:c(t,{alpha:.12}),colorBorderedPrimary:c(t,{alpha:.1}),closeIconColorPrimary:t,closeIconColorHoverPrimary:t,closeIconColorPressedPrimary:t,closeColorHoverPrimary:c(t,{alpha:.12}),closeColorPressedPrimary:c(t,{alpha:.18}),borderInfo:`1px solid ${c(a,{alpha:.3})}`,textColorInfo:a,colorInfo:c(a,{alpha:.12}),colorBorderedInfo:c(a,{alpha:.1}),closeIconColorInfo:a,closeIconColorHoverInfo:a,closeIconColorPressedInfo:a,closeColorHoverInfo:c(a,{alpha:.12}),closeColorPressedInfo:c(a,{alpha:.18}),borderSuccess:`1px solid ${c(d,{alpha:.3})}`,textColorSuccess:d,colorSuccess:c(d,{alpha:.12}),colorBorderedSuccess:c(d,{alpha:.1}),closeIconColorSuccess:d,closeIconColorHoverSuccess:d,closeIconColorPressedSuccess:d,closeColorHoverSuccess:c(d,{alpha:.12}),closeColorPressedSuccess:c(d,{alpha:.18}),borderWarning:`1px solid ${c(s,{alpha:.35})}`,textColorWarning:s,colorWarning:c(s,{alpha:.15}),colorBorderedWarning:c(s,{alpha:.12}),closeIconColorWarning:s,closeIconColorHoverWarning:s,closeIconColorPressedWarning:s,closeColorHoverWarning:c(s,{alpha:.12}),closeColorPressedWarning:c(s,{alpha:.18}),borderError:`1px solid ${c(l,{alpha:.23})}`,textColorError:l,colorError:c(l,{alpha:.1}),colorBorderedError:c(l,{alpha:.08}),closeIconColorError:l,closeIconColorHoverError:l,closeIconColorPressedError:l,closeColorHoverError:c(l,{alpha:.12}),closeColorPressedError:c(l,{alpha:.18})})},Ie={name:"Tag",common:te,self:me},Se=Ie,ye={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},ze=ie("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[x("strong",`
 font-weight: var(--n-font-weight-strong);
 `),m("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),m("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),m("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),m("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 cursor: pointer;
 `),x("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[m("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),m("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),x("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),x("icon, avatar",[x("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),x("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),x("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[S("disabled",[y("&:hover","background-color: var(--n-color-hover-checkable);",[S("checked","color: var(--n-text-color-hover-checkable);")]),y("&:active","background-color: var(--n-color-pressed-checkable);",[S("checked","color: var(--n-text-color-pressed-checkable);")])]),x("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[S("disabled",[y("&:hover","background-color: var(--n-color-checked-hover);"),y("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Pe=Object.assign(Object.assign(Object.assign({},V.props),ye),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalStopClickPropagation:Boolean,onCheckedChange:{type:Function,validator:()=>!0,default:void 0}}),He=fe("n-tag"),Be=de({name:"Tag",props:Pe,setup(e){const i=he(null),{mergedBorderedRef:o,mergedClsPrefixRef:h,inlineThemeDisabled:t,mergedRtlRef:a}=ge(e),d=V("Tag","-tag",ze,Se,e,h);be(He,{roundRef:ue(e,"round")});function s(r){if(!e.disabled&&e.checkable){const{checked:n,onCheckedChange:k,onUpdateChecked:v,"onUpdate:checked":f}=e;v&&v(!n),f&&f(!n),k&&k(!n)}}function l(r){if(e.internalStopClickPropagation&&r.stopPropagation(),!e.disabled){const{onClose:n}=e;n&&ke(n,r)}}const C={setTextContent(r){const{value:n}=i;n&&(n.textContent=r)}},p=ve("Tag",a,h),b=N(()=>{const{type:r,size:n,color:{color:k,textColor:v}={}}=e,{common:{cubicBezierEaseInOut:f},self:{padding:z,closeMargin:P,closeMarginRtl:H,borderRadius:$,opacityDisabled:M,textColorCheckable:B,textColorHoverCheckable:R,textColorPressedCheckable:O,textColorChecked:w,colorCheckable:E,colorHoverCheckable:_,colorPressedCheckable:T,colorChecked:K,colorCheckedHover:q,colorCheckedPressed:G,closeBorderRadius:J,fontWeightStrong:Q,[g("colorBordered",r)]:X,[g("closeSize",n)]:Y,[g("closeIconSize",n)]:Z,[g("fontSize",n)]:ee,[g("height",n)]:F,[g("color",r)]:oe,[g("textColor",r)]:re,[g("border",r)]:le,[g("closeIconColor",r)]:A,[g("closeIconColorHover",r)]:ce,[g("closeIconColorPressed",r)]:ae,[g("closeColorHover",r)]:se,[g("closeColorPressed",r)]:ne}}=d.value;return{"--n-font-weight-strong":Q,"--n-avatar-size-override":`calc(${F} - 8px)`,"--n-bezier":f,"--n-border-radius":$,"--n-border":le,"--n-close-icon-size":Z,"--n-close-color-pressed":ne,"--n-close-color-hover":se,"--n-close-border-radius":J,"--n-close-icon-color":A,"--n-close-icon-color-hover":ce,"--n-close-icon-color-pressed":ae,"--n-close-icon-color-disabled":A,"--n-close-margin":P,"--n-close-margin-rtl":H,"--n-close-size":Y,"--n-color":k||(o.value?X:oe),"--n-color-checkable":E,"--n-color-checked":K,"--n-color-checked-hover":q,"--n-color-checked-pressed":G,"--n-color-hover-checkable":_,"--n-color-pressed-checkable":T,"--n-font-size":ee,"--n-height":F,"--n-opacity-disabled":M,"--n-padding":z,"--n-text-color":v||re,"--n-text-color-checkable":B,"--n-text-color-checked":w,"--n-text-color-hover-checkable":R,"--n-text-color-pressed-checkable":O}}),u=t?Ce("tag",N(()=>{let r="";const{type:n,size:k,color:{color:v,textColor:f}={}}=e;return r+=n[0],r+=k[0],v&&(r+=`a${U(v)}`),f&&(r+=`b${U(f)}`),o.value&&(r+="c"),r}),b,e):void 0;return Object.assign(Object.assign({},C),{rtlEnabled:p,mergedClsPrefix:h,contentRef:i,mergedBordered:o,handleClick:s,handleCloseClick:l,cssVars:t?void 0:b,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender})},render(){var e,i;const{mergedClsPrefix:o,rtlEnabled:h,closable:t,color:{borderColor:a}={},round:d,onRender:s,$slots:l}=this;s==null||s();const C=D(l.avatar,b=>b&&I("div",{class:`${o}-tag__avatar`},b)),p=D(l.icon,b=>b&&I("div",{class:`${o}-tag__icon`},b));return I("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:h,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:d,[`${o}-tag--avatar`]:C,[`${o}-tag--icon`]:p,[`${o}-tag--closable`]:t}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},p||C,I("span",{class:`${o}-tag__content`,ref:"contentRef"},(i=(e=this.$slots).default)===null||i===void 0?void 0:i.call(e)),!this.checkable&&t?I(pe,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:d,absolute:!0}):null,!this.checkable&&this.mergedBordered?I("div",{class:`${o}-tag__border`,style:{borderColor:a}}):null)}}),$e=(e={})=>{var i;const{root:o=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(i=e.threshold)!==null&&i!==void 0?i:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof o=="string"?document.querySelector(o):o)||document.documentElement})}},W=new WeakMap,j=new WeakMap,L=new WeakMap,Re=(e,i,o)=>{if(!e)return()=>{};const h=$e(i),{root:t}=h.options;let a;const d=W.get(t);d?a=d:(a=new Map,W.set(t,a));let s,l;a.has(h.hash)?(l=a.get(h.hash),l[1].has(e)||(s=l[0],l[1].add(e),s.observe(e))):(s=new IntersectionObserver(b=>{b.forEach(u=>{if(u.isIntersecting){const r=j.get(u.target),n=L.get(u.target);r&&r(),n&&(n.value=!0)}})},h.options),s.observe(e),l=[s,new Set([e])],a.set(h.hash,l));let C=!1;const p=()=>{C||(j.delete(e),L.delete(e),C=!0,l[1].has(e)&&(l[0].unobserve(e),l[1].delete(e)),l[1].size<=0&&a.delete(h.hash),a.size||W.delete(t))};return j.set(e,p),L.set(e,o),p};export{Be as N,Re as o,He as t};
