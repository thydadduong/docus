import{u as d}from"./asyncData.a9ea9ce1.js";import{a as l,am as f,I as v,z as p,$ as m,an as g,V as h,as as y,W as r,M as _}from"./entry.79f14b59.js";const N=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(u){const{query:a}=f(u),n=v(()=>{var t;return typeof((t=a.value)==null?void 0:t.params)=="function"?a.value.params():a.value});if(!n.value&&p("dd-navigation").value){const{navigation:t}=m();return{navigation:t}}const{data:o}=await d(`content-navigation-${g(n.value)}`,()=>y(n.value));return{navigation:o}},render(u){const a=h(),{navigation:n}=u,o=e=>r(_,{to:e._path},()=>e.title),t=(e,i)=>r("ul",i?{"data-level":i}:null,e.map(s=>s.children?r("li",null,[o(s),t(s.children,i+1)]):r("li",null,o(s)))),c=e=>t(e,0);return a!=null&&a.default?a.default({navigation:n,...this.$attrs}):c(n)}});export{N as default};
