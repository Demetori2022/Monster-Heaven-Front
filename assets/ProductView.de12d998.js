import{_ as B,af as C,a as P,r as I,D as N,o as r,c as m,d as e,e as o,w as n,h as U,S as $,ay as z,a8 as D,an as A,aq as l,p as E,f as F,az as g,ap as v,ao as L,g as M,i as T,aA as j,aB as G}from"./index.abb58950.js";import{_ as H,a as J}from"./InputNumber.bba865db.js";import{_ as K}from"./Space.efdafc97.js";import"./Input.258223f9.js";import"./Tag.d38fec9f.js";const O=a=>(E("data-v-5f462187"),a=a(),F(),a),Q={id:"product"},R={id:"container"},W=O(()=>e("h1",{class:"title"},"\u5546\u54C1\u5217\u8868",-1)),X={class:"imgbox"},Y=["src"],Z={class:"content"},tt={class:"cart-button"},et=M(" \u52A0\u5165\u8CFC\u7269\u8ECA "),nt={__name:"ProductView",setup(a){const h=C(),{addCart:f}=h,u=P([]),s=I(1),_=12,p=N(()=>u.slice(s.value*_-_,s.value*_));return(async()=>{try{const{data:c}=await U.get("/products");u.push(...c.result.map(i=>({...i,quantity:1}))),console.log(c)}catch{$.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(c,i)=>{const y=J,w=K,x=T,S=j,k=G,V=z,b=H;return r(),m("div",Q,[e("div",R,[W,o(V,{cols:"1 s:2 m:3 l:4",responsive:"screen"},{default:n(()=>[(r(!0),m(D,null,A(l(p),(t,q)=>(r(),g(k,{key:q},{default:n(()=>[l(p).length>0?(r(),g(S,{key:t._id},{cover:n(()=>[e("div",X,[e("img",{src:t.image},null,8,Y)])]),default:n(()=>[e("div",Z,[e("h1",null,v(t.name),1),e("h2",null," \u5546\u54C1\u50F9\u683C : "+v(t.price),1),o(w,{vertical:""},{default:n(()=>[o(y,{"button-placement":"both",value:t.quantity,"onUpdate:value":d=>t.quantity=d,placeholder:"\u8CFC\u8CB7\u6578\u91CF",min:0},null,8,["value","onUpdate:value"])]),_:2},1024),e("div",tt,[o(x,{onClick:d=>l(f)({product:t._id,quantity:t.quantity}),strong:"",round:"",type:"warning"},{default:n(()=>[et]),_:2},1032,["onClick"])])])]),_:2},1024)):L("",!0)]),_:2},1024))),128))]),_:1}),o(b,{page:s.value,"onUpdate:page":i[0]||(i[0]=t=>s.value=t),"page-count":Math.ceil(u.length/_)},null,8,["page","page-count"])])])}}},rt=B(nt,[["__scopeId","data-v-5f462187"]]);export{rt as default};
