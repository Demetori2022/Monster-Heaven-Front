import{t as a,G as $,aC as g,n as b,aV as f,ah as l,x,z as m,r as v,D as O,B as u,aW as j,aX as T}from"./index.02af4335.js";const{cubicBezierEaseInOut:s,cubicBezierEaseOut:C,cubicBezierEaseIn:E}=$;function S({overflow:n="hidden",duration:e=".3s",originalTransition:t="",leavingDelay:o="0s",foldPadding:i=!1,enterToProps:d=void 0,leaveToProps:h=void 0,reverse:c=!1}={}){const p=c?"leave":"enter",r=c?"enter":"leave";return[a(`&.fade-in-height-expand-transition-${r}-from,
 &.fade-in-height-expand-transition-${p}-to`,Object.assign(Object.assign({},d),{opacity:1})),a(`&.fade-in-height-expand-transition-${r}-to,
 &.fade-in-height-expand-transition-${p}-from`,Object.assign(Object.assign({},h),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:i?"0 !important":void 0,paddingBottom:i?"0 !important":void 0})),a(`&.fade-in-height-expand-transition-${r}-active`,`
 overflow: ${n};
 transition:
 max-height ${e} ${s} ${o},
 opacity ${e} ${C} ${o},
 margin-top ${e} ${s} ${o},
 margin-bottom ${e} ${s} ${o},
 padding-top ${e} ${s} ${o},
 padding-bottom ${e} ${s} ${o}
 ${t?","+t:""}
 `),a(`&.fade-in-height-expand-transition-${p}-active`,`
 overflow: ${n};
 transition:
 max-height ${e} ${s},
 opacity ${e} ${E},
 margin-top ${e} ${s},
 margin-bottom ${e} ${s},
 padding-top ${e} ${s},
 padding-bottom ${e} ${s}
 ${t?","+t:""}
 `)]}const B={padding:"8px 14px"},P=n=>{const{borderRadius:e,boxShadow2:t,baseColor:o}=n;return Object.assign(Object.assign({},B),{borderRadius:e,boxShadow:t,color:l(o,"rgba(0, 0, 0, .85)"),textColor:o})},w=g({name:"Tooltip",common:b,peers:{Popover:f},self:P}),R=w,z=Object.assign(Object.assign({},T),m.props),_=x({name:"Tooltip",props:z,__popover__:!0,setup(n){const e=m("Tooltip","-tooltip",void 0,R,n),t=v(null);return Object.assign(Object.assign({},{syncPosition(){t.value.syncPosition()},setShow(i){t.value.setShow(i)}}),{popoverRef:t,mergedTheme:e,popoverThemeOverrides:O(()=>e.value.self)})},render(){const{mergedTheme:n,internalExtraClass:e}=this;return u(j,Object.assign(Object.assign({},this.$props),{theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:e.concat("tooltip"),ref:"popoverRef"}),this.$slots)}});export{_ as N,S as f,R as t};
