import{_ as w,a as x,o as e,c as n,d as t,e as o,w as _,am as S,S as V,a8 as m,an as h,ao as k,ap as c,p as I,f as b}from"./index.dd05efcd.js";import{_ as D,a as B}from"./Col.a782bb18.js";import{_ as N,a as O}from"./Table.93accf9a.js";import{_ as P}from"./Space.ae325f9c.js";const f=l=>(I("data-v-66c11d1b"),l=l(),b(),l),q={id:"orderPage"},C={id:"container"},L=f(()=>t("h1",{class:"title"},"\u8A02\u55AE",-1)),z=f(()=>t("thead",null,[t("tr",null,[t("th",{class:"id"},"ID"),t("th",null,"\u65E5\u671F"),t("th",null,"\u91D1\u984D"),t("th",null,"\u5546\u54C1")])],-1)),A={key:0},E={class:"id"},F={__name:"OrderView",setup(l){const d=x([]);return(async()=>{try{const{data:i}=await S.get("/orders");d.push(...i.result.map(r=>(r.totalPrice=r.products.reduce((u,a)=>u+a.product.price*a.quantity,0),r)))}catch(i){console.log(i),V.fire({icon:"error",title:"\u5931\u6557",text:"\u7121\u6CD5\u53D6\u5F97\u8A02\u55AE"})}})(),(i,r)=>{const u=N,a=B,g=O,y=P,v=D;return e(),n("div",q,[t("div",C,[o(v,null,{default:_(()=>[o(a,{span:24},{default:_(()=>[L,o(u)]),_:1}),o(a,{span:24},{default:_(()=>[t("div",null,[o(y,{vertical:""},{default:_(()=>[o(g,{size:"small",striped:""},{default:_(()=>[z,d.length>0?(e(),n("tbody",A,[(e(!0),n(m,null,h(d,s=>(e(),n("tr",{key:s._id},[t("td",E,c(s._id),1),t("td",null,c(new Date(s.date).toLocaleDateString()),1),t("td",null,c(s.totalPrice),1),t("td",null,[t("ul",null,[(e(!0),n(m,null,h(s.products,p=>(e(),n("li",{key:p._id},c(p.product.name)+" x "+c(p.quantity),1))),128))])])]))),128))])):k("",!0)]),_:1})]),_:1})])]),_:1})]),_:1})])])}}},M=w(F,[["__scopeId","data-v-66c11d1b"]]);export{M as default};
