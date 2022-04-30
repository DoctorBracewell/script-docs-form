const Te=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};Te();function L(){}const xe=e=>e;function ke(e){return e()}function ae(){return Object.create(null)}function D(e){e.forEach(ke)}function we(e){return typeof e=="function"}function K(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ne(e){return Object.keys(e).length===0}const ve=typeof window!="undefined";let Re=ve?()=>window.performance.now():()=>Date.now(),oe=ve?e=>requestAnimationFrame(e):L;const q=new Set;function Ee(e){q.forEach(t=>{t.c(e)||(q.delete(t),t.f())}),q.size!==0&&oe(Ee)}function Fe(e){let t;return q.size===0&&oe(Ee),{promise:new Promise(n=>{q.add(t={c:e,f:n})}),abort(){q.delete(t)}}}function $(e,t){e.appendChild(t)}function Oe(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function De(e){const t=k("style");return Me(Oe(e),t),t.sheet}function Me(e,t){$(e.head||e,t)}function S(e,t,n){e.insertBefore(t,n||null)}function A(e){e.parentNode.removeChild(e)}function Be(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function k(e){return document.createElement(e)}function ee(e){return document.createTextNode(e)}function E(){return ee(" ")}function X(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function qe(e){return function(t){return t.preventDefault(),e.call(this,t)}}function g(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ze(e){return Array.from(e.childNodes)}function Ae(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Ie(e,t,n=!1){const l=document.createEvent("CustomEvent");return l.initCustomEvent(e,n,!1,t),l}const Y=new Map;let Z=0;function je(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function He(e,t){const n={stylesheet:De(t),rules:{}};return Y.set(e,n),n}function de(e,t,n,l,s,i,f,a=0){const u=16.666/l;let o=`{
`;for(let _=0;_<=1;_+=u){const b=t+(n-t)*i(_);o+=_*100+`%{${f(b,1-b)}}
`}const d=o+`100% {${f(n,1-n)}}
}`,r=`__svelte_${je(d)}_${a}`,p=Oe(e),{stylesheet:h,rules:c}=Y.get(p)||He(p,e);c[r]||(c[r]=!0,h.insertRule(`@keyframes ${r} ${d}`,h.cssRules.length));const m=e.style.animation||"";return e.style.animation=`${m?`${m}, `:""}${r} ${l}ms linear ${s}ms 1 both`,Z+=1,r}function Je(e,t){const n=(e.style.animation||"").split(", "),l=n.filter(t?i=>i.indexOf(t)<0:i=>i.indexOf("__svelte")===-1),s=n.length-l.length;s&&(e.style.animation=l.join(", "),Z-=s,Z||Ke())}function Ke(){oe(()=>{Z||(Y.forEach(e=>{const{stylesheet:t}=e;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.rules={}}),Y.clear())})}let fe;function j(e){fe=e}const I=[],me=[],V=[],pe=[],Qe=Promise.resolve();let re=!1;function Ue(){re||(re=!0,Qe.then(Ce))}function H(e){V.push(e)}const te=new Set;let Q=0;function Ce(){const e=fe;do{for(;Q<I.length;){const t=I[Q];Q++,j(t),Ve(t.$$)}for(j(null),I.length=0,Q=0;me.length;)me.pop()();for(let t=0;t<V.length;t+=1){const n=V[t];te.has(n)||(te.add(n),n())}V.length=0}while(I.length);for(;pe.length;)pe.pop()();re=!1,te.clear(),j(e)}function Ve(e){if(e.fragment!==null){e.update(),D(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(H)}}let z;function We(){return z||(z=Promise.resolve(),z.then(()=>{z=null})),z}function ne(e,t,n){e.dispatchEvent(Ie(`${t?"intro":"outro"}${n}`))}const W=new Set;let R;function le(){R={r:0,c:[],p:R}}function se(){R.r||D(R.c),R=R.p}function w(e,t){e&&e.i&&(W.delete(e),e.i(t))}function O(e,t,n,l){if(e&&e.o){if(W.has(e))return;W.add(e),R.c.push(()=>{W.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}}const Ge={duration:0};function he(e,t,n,l){let s=t(e,n),i=l?0:1,f=null,a=null,u=null;function o(){u&&Je(e,u)}function d(p,h){const c=p.b-i;return h*=Math.abs(c),{a:i,b:p.b,d:c,duration:h,start:p.start,end:p.start+h,group:p.group}}function r(p){const{delay:h=0,duration:c=300,easing:m=xe,tick:_=L,css:b}=s||Ge,P={start:Re()+h,b:p};p||(P.group=R,R.r+=1),f||a?a=P:(b&&(o(),u=de(e,i,p,c,h,m,b)),p&&_(0,1),f=d(P,c),H(()=>ne(e,p,"start")),Fe(y=>{if(a&&y>a.start&&(f=d(a,c),a=null,ne(e,f.b,"start"),b&&(o(),u=de(e,i,f.b,f.duration,0,m,s.css))),f){if(y>=f.end)_(i=f.b,1-i),ne(e,f.b,"end"),a||(f.b?o():--f.group.r||D(f.group.c)),f=null;else if(y>=f.start){const v=y-f.start;i=f.a+f.d*m(v/f.duration),_(i,1-i)}}return!!(f||a)}))}return{run(p){we(s)?We().then(()=>{s=s(),r(p)}):r(p)},end(){o(),f=a=null}}}function F(e){e&&e.c()}function T(e,t,n,l){const{fragment:s,on_mount:i,on_destroy:f,after_update:a}=e.$$;s&&s.m(t,n),l||H(()=>{const u=i.map(ke).filter(we);f?f.push(...u):D(u),e.$$.on_mount=[]}),a.forEach(H)}function N(e,t){const n=e.$$;n.fragment!==null&&(D(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Xe(e,t){e.$$.dirty[0]===-1&&(I.push(e),Ue(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ue(e,t,n,l,s,i,f,a=[-1]){const u=fe;j(e);const o=e.$$={fragment:null,ctx:null,props:i,update:L,not_equal:s,bound:ae(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:ae(),dirty:a,skip_bound:!1,root:t.target||u.$$.root};f&&f(o.root);let d=!1;if(o.ctx=n?n(e,t.props||{},(r,p,...h)=>{const c=h.length?h[0]:p;return o.ctx&&s(o.ctx[r],o.ctx[r]=c)&&(!o.skip_bound&&o.bound[r]&&o.bound[r](c),d&&Xe(e,r)),p}):[],o.update(),d=!0,D(o.before_update),o.fragment=l?l(o.ctx):!1,t.target){if(t.hydrate){const r=ze(t.target);o.fragment&&o.fragment.l(r),r.forEach(A)}else o.fragment&&o.fragment.c();t.intro&&w(e.$$.fragment),T(e,t.target,t.anchor,t.customElement),Ce()}j(u)}class ce{$destroy(){N(this,1),this.$destroy=L}$on(t,n){const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(t){this.$$set&&!Ne(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const B=[];function Ye(e,t=L){let n;const l=new Set;function s(a){if(K(e,a)&&(e=a,n)){const u=!B.length;for(const o of l)o[1](),B.push(o,e);if(u){for(let o=0;o<B.length;o+=2)B[o][0](B[o+1]);B.length=0}}}function i(a){s(a(e))}function f(a,u=L){const o=[a,u];return l.add(o),l.size===1&&(n=t(s)||L),a(e),()=>{l.delete(o),l.size===0&&(n(),n=null)}}return{set:s,update:i,subscribe:f}}const ie=e=>e.split("_").map(t=>t.charAt(0).toLocaleUpperCase()+t.slice(1)).join(" ");function*Ze(e,t){for(let n=0;n<e.length;n+=t)yield e.slice(n,n+t)}const G=Ye(0);function _e(e,{delay:t=0,duration:n=400,easing:l=xe}={}){const s=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:l,css:i=>`opacity: ${i*s}`}}const et=()=>!0,Se=e=>{let t="\\".charCodeAt(0),n=e.length,l=0;for(;n&&e.charCodeAt(--n)===t;)l++;return l%2==1},U=(e,t,n)=>{let l=n-1;for(;;){let s=l;if(l=e.indexOf(t,l+1),l<0)return-1;if(!Se(e.slice(s,l)))return l}},J=(e,t=[])=>{let n=[],l,s=r=>l&&l.type=="text"?(l.text+=r,l):i({type:"text",text:r}),i=r=>{let p=n.length;return(p?n[p-1].block:t).push(r),l=r},f=r=>(r.type=="link"&&(r={type:"link",block:r.block,url:"",ref:""}),i(r)),a=(r=et)=>{for(let p=n.length;--p>=0;){let h=n[p];if(!r(h))return h;f(n.pop())}},u=r=>o.lastIndex=d=r,o=/(^([*_-])\s*\2(?:\s*\2)+$)|(?:^(\s*)([>*+-]|\d+[.\)])\s+)|(?:^``` *(\w*)\n([\s\S]*?)```$)|(^(?:(?:\t|    )[^\n]*(?:\n|$))+)|(\!?\[)|(\](?:(\(|\[)|\:\s*(.+)$)?)|(?:^([^\s].*)\n(\-{3,}|={3,})$)|(?:^(#{1,6})(?:[ \t]+(.*))?$)|(?:`([^`].*?)`)|(  \n|\n\n)|(__|\*\*|[_*]|~~)/gm,d=0;for(;;){let r=o.exec(e),p=r?r.index:e.length,h=e.slice(d,p);if(h&&(s(h),r&&Se(h))){u(r.index+1),s(r[0][0]);continue}if(!r)break;let c=1;if(d=o.lastIndex,r[c])a(),i({type:"border",text:e.slice(p,p+r[0].length)});else if(r[c+=3]){a();let m=r[c],_=m==">",b=i(_?{type:"quote",block:[]}:{type:"list",block:[],indent:r[c-1],bullet:m}),P=_?/^\s{0,3}([*+-]|\d+[.\)])[ \t]/:/^\s*([>*+-]|\d+[.\)])[ \t]/,y=d;d=U(e,`
`,y),d<0&&(d=e.length);let v=e.slice(y,d);for(;d<e.length;){let x=d+1;if(e.charAt(x)==`
`)break;d=U(e,`
`,x),d<0&&(d=e.length);let C=e.slice(x,d);if(!C){d=x-1;break}if(C.match(P)){d=x;break}v+=`
`+C.match(_?/^\s*>?\s*(.*)$/:/^\s*(.*)$/)[1]}J(v,b.block),u(d)}else if(r[c+=2]!=null||r[c+1]){a();let m=r[c+1],_="",b="";m?(b=/^(\t|    )/.exec(m)[0],m=m.replace(/^(\t|    )/gm,""),m.slice(-1)==`
`&&(m=m.slice(0,-1),u(d-1))):(m=r[c].slice(0,-1),_=r[c-1].toLowerCase()),i({type:"codeBlock",code:m,syntax:_,indent:b})}else if(r[c+=2])if(r[c][0]=="!"){let m=U(e,"]",d);if(m<0){s(r[0]);continue}l=null,n.push({type:"image",alt:e.slice(r.index+2,m),url:"",ref:""}),u(m)}else l=null,n.push({type:"link",block:[],offset:d});else if(r[++c]){let m=/^(link|image)$/,_=a(b=>!m.test(b.type));if(_){if(n.pop(),r[c+2]){if(_.type=="link"){i({type:"linkDef",key:e.slice(_.offset,p),url:r[c+2]});continue}u(r.index+1)}if(_=f(_),r[c+1]){let b=U(e,r[c+1]=="("?")":"]",d);if(b<0)s(r[c+1]);else{let P=r.index+2,y=e.slice(P,b);u(b+1),r[c+1]=="("?_.url=y:_.ref=y}}}else s(r[0])}else if(r[c+=3]||r[c+2])a(),i({type:"title",block:J(r[c]||r[c+3]||""),rank:r[c+2]?r[c+2].length:r[c+1][0]=="="?1:2});else if(r[c+=4]){let m=p+1;i({type:"codeSpan",code:e.slice(m,m+r[c].length)})}else if(r[++c])a(),i({type:"break",text:r[0]});else if(r[++c]){let m=r[c],_=m.length<2?"italic":m=="~~"?"strike":"bold",b=n[n.length-1];b&&b.type==_&&b.style==m?i(n.pop()):(l=null,n.push({type:_,block:[],style:m}))}}return a(),t};Object.defineProperty(J,"default",{value:J});var tt=J;function nt(e){const t=new FormData(e),n=Object.fromEntries(t.entries()),{name:l,shortcut:s,return_type:i,description:f,code_example:a}=n,u=rt(n),o=lt(f);return{name:l,shortcut:s,return_type:i,parameters:u,description:o,code_example:a}}function rt(e){const t=Object.entries(e).filter(([n,l])=>n.startsWith("parameter")).map(([n,l])=>l);return[...Ze(t,2)].map(([n,l])=>({name:n,type:l}))}function lt(e){return e.split(`
`).map(l=>l.trim()).map(l=>{const i=[...tt(l)].filter(function u(o){return["text","bold","codeSpan","italic","strike"].includes(o.type)?o!=null&&o.block?(o.block=o.block.filter(u)).length:!0:!1});return Le(i,[]).map(({text:u,formatting:o})=>({text:u,formatting:o.length===new Set(o).size?o:[]}))})}function Le(e,t){const n={strike:"strikethrough"};return e.reduce((l,s)=>{var i;return s.type==="text"?[...l,{text:s.text,formatting:t}]:s.type==="codeSpan"?[...l,{text:s.code,formatting:["code"]}]:[...l,...Le(s.block,[...t,(i=n[s.type])!=null?i:s.type])]},[])}function st(e){let t;return{c(){t=k("input"),g(t,"type","text"),g(t,"class",Pe),g(t,"name",e[0]),g(t,"id",e[0])},m(n,l){S(n,t,l)},p(n,l){l&1&&g(t,"name",n[0]),l&1&&g(t,"id",n[0])},d(n){n&&A(t)}}}function it(e){let t;return{c(){t=k("textarea"),g(t,"type","text"),g(t,"class",Pe+" h-24"),g(t,"name",e[0]),g(t,"id",e[0])},m(n,l){S(n,t,l)},p(n,l){l&1&&g(t,"name",n[0]),l&1&&g(t,"id",n[0])},d(n){n&&A(t)}}}function ot(e){let t,n,l=ie(e[2]||e[0])+"",s,i;function f(o,d){return o[1]?it:st}let a=f(e),u=a(e);return{c(){t=k("div"),n=k("label"),s=ee(l),i=E(),u.c(),g(n,"for",e[0]),g(n,"class","m-auto mr-5 underline"),g(t,"class","flex my-4")},m(o,d){S(o,t,d),$(t,n),$(n,s),$(t,i),u.m(t,null)},p(o,[d]){d&5&&l!==(l=ie(o[2]||o[0])+"")&&Ae(s,l),d&1&&g(n,"for",o[0]),a===(a=f(o))&&u?u.p(o,d):(u.d(1),u=a(o),u&&(u.c(),u.m(t,null)))},i:L,o:L,d(o){o&&A(t),u.d()}}}const Pe="transition-all flex-1 my-0.5 block rounded-md bg-neutral-600 border-transparent hover:bg-neutral-700 focus:bg-neutral-700 focus:border-neutral-500 outline-none focus:ring-0 caret-white";function ft(e,t,n){let{name:l}=t,{textarea:s=!1}=t,{display:i=""}=t;return e.$$set=f=>{"name"in f&&n(0,l=f.name),"textarea"in f&&n(1,s=f.textarea),"display"in f&&n(2,i=f.display)},[l,s,i]}class M extends ce{constructor(t){super(),ue(this,t,ft,ot,K,{name:0,textarea:1,display:2})}}function ge(e,t,n){const l=e.slice();return l[3]=t[n],l[5]=n,l}function ye(e){let t,n,l=ie(`parameter_${e[5]}`)+"",s,i,f,a,u,o,d;return f=new M({props:{name:`parameter_${e[5]}_name`,display:"name"}}),u=new M({props:{name:`parameter_${e[5]}_type`,display:"type"}}),{c(){t=k("fieldset"),n=k("legend"),s=ee(l),i=E(),F(f.$$.fragment),a=E(),F(u.$$.fragment),o=E(),g(t,"class","border-2 border-neutral-400 px-3 rounded-md mb-5")},m(r,p){S(r,t,p),$(t,n),$(n,s),$(t,i),T(f,t,null),$(t,a),T(u,t,null),$(t,o),d=!0},p:L,i(r){d||(w(f.$$.fragment,r),w(u.$$.fragment,r),d=!0)},o(r){O(f.$$.fragment,r),O(u.$$.fragment,r),d=!1},d(r){r&&A(t),N(f),N(u)}}}function ut(e){let t,n,l,s,i,f,a,u,o,d=Array(e[0]),r=[];for(let h=0;h<d.length;h+=1)r[h]=ye(ge(e,d,h));const p=h=>O(r[h],1,1,()=>{r[h]=null});return{c(){t=k("div"),n=k("div"),l=k("button"),l.textContent="Add Parameter",s=E(),i=k("button"),i.textContent="Remove Parameter",f=E();for(let h=0;h<r.length;h+=1)r[h].c();g(l,"type","button"),g(l,"class","w-3/12 bg-neutral-200 py-3 text-black rounded-md hover:bg-neutral-400 transition-colors text-xl my-5 mr-3"),g(i,"type","button"),g(i,"class","w-3/12 bg-neutral-200 py-3 text-black rounded-md hover:bg-neutral-400 transition-colors text-xl my-5 ml-3"),g(n,"class","w-full flex flex-row justify-center"),g(t,"id","parameters"),g(t,"class","w-full flex flex-col")},m(h,c){S(h,t,c),$(t,n),$(n,l),$(n,s),$(n,i),$(t,f);for(let m=0;m<r.length;m+=1)r[m].m(t,null);a=!0,u||(o=[X(l,"click",e[1]),X(i,"click",e[2])],u=!0)},p(h,[c]){if(c&1){d=Array(h[0]);let m;for(m=0;m<d.length;m+=1){const _=ge(h,d,m);r[m]?(r[m].p(_,c),w(r[m],1)):(r[m]=ye(_),r[m].c(),w(r[m],1),r[m].m(t,null))}for(le(),m=d.length;m<r.length;m+=1)p(m);se()}},i(h){if(!a){for(let c=0;c<d.length;c+=1)w(r[c]);a=!0}},o(h){r=r.filter(Boolean);for(let c=0;c<r.length;c+=1)O(r[c]);a=!1},d(h){h&&A(t),Be(r,h),u=!1,D(o)}}}function ct(e,t,n){let l;return G.subscribe(f=>n(0,l=f)),[l,()=>{G.update(f=>f+1)},()=>{G.update(f=>f-1)}]}class at extends ce{constructor(t){super(),ue(this,t,ct,ut,K,{})}}function be(e){let t,n,l;return{c(){t=k("div"),t.innerHTML='<span class="m-auto text-lg">Copied to Clipboard!</span>',g(t,"class","absolute w-full flex text-neutral-200 h-14")},m(s,i){S(s,t,i),l=!0},i(s){l||(H(()=>{n||(n=he(t,_e,{},!0)),n.run(1)}),l=!0)},o(s){n||(n=he(t,_e,{},!1)),n.run(0),l=!1},d(s){s&&A(t),s&&n&&n.end()}}}function $e(e){let t,n,l,s,i,f,a,u,o,d;return t=new M({props:{name:"name"}}),l=new M({props:{name:"shortcut"}}),i=new M({props:{name:"return_type"}}),a=new M({props:{name:"description",textarea:!0}}),o=new M({props:{name:"code_example",textarea:!0}}),{c(){F(t.$$.fragment),n=E(),F(l.$$.fragment),s=E(),F(i.$$.fragment),f=E(),F(a.$$.fragment),u=E(),F(o.$$.fragment)},m(r,p){T(t,r,p),S(r,n,p),T(l,r,p),S(r,s,p),T(i,r,p),S(r,f,p),T(a,r,p),S(r,u,p),T(o,r,p),d=!0},p:L,i(r){d||(w(t.$$.fragment,r),w(l.$$.fragment,r),w(i.$$.fragment,r),w(a.$$.fragment,r),w(o.$$.fragment,r),d=!0)},o(r){O(t.$$.fragment,r),O(l.$$.fragment,r),O(i.$$.fragment,r),O(a.$$.fragment,r),O(o.$$.fragment,r),d=!1},d(r){N(t,r),r&&A(n),N(l,r),r&&A(s),N(i,r),r&&A(f),N(a,r),r&&A(u),N(o,r)}}}function dt(e){let t,n,l,s,i,f,a=e[1],u,o,d,r,p,h,c,m,_,b,P,y=e[2]&&be(),v=$e();return o=new at({}),{c(){y&&y.c(),t=E(),n=k("main"),l=k("form"),s=k("div"),i=k("button"),i.textContent="Reset",f=E(),v.c(),u=E(),F(o.$$.fragment),d=E(),r=k("div"),r.innerHTML='<button type="submit" class="mx-auto w-6/12 bg-green-600 py-5 rounded-md hover:bg-green-700 transition-colors text-3xl mt-14">Submit</button>',p=E(),h=k("div"),c=k("pre"),m=ee(e[0]),g(i,"type","button"),g(i,"class","mx-auto w-3/12 bg-red-600 py-5 rounded-md hover:bg-red-700 transition-colors text-xl mb-3"),g(s,"class","w-full flex"),g(r,"class","w-full flex"),g(l,"class","mr-20 flex-1"),g(h,"class","output flex-1 bg-neutral-900 rounded-lg w-100 p-5 font-mono overflow-auto"),g(n,"class","bg-neutral-800 w-full min-h-screen flex p-14 text-neutral-200")},m(x,C){y&&y.m(x,C),S(x,t,C),S(x,n,C),$(n,l),$(l,s),$(s,i),$(l,f),v.m(l,null),$(l,u),T(o,l,null),$(l,d),$(l,r),$(n,p),$(n,h),$(h,c),$(c,m),_=!0,b||(P=[X(i,"click",e[4]),X(l,"submit",qe(e[3]))],b=!0)},p(x,[C]){x[2]?y?C&4&&w(y,1):(y=be(),y.c(),w(y,1),y.m(t.parentNode,t)):y&&(le(),O(y,1,1,()=>{y=null}),se()),C&2&&K(a,a=x[1])?(le(),O(v,1,1,L),se(),v=$e(),v.c(),w(v),v.m(l,u)):v.p(x,C),(!_||C&1)&&Ae(m,x[0])},i(x){_||(w(y),w(v),w(o.$$.fragment,x),_=!0)},o(x){O(y),O(v),O(o.$$.fragment,x),_=!1},d(x){y&&y.d(x),x&&A(t),x&&A(n),v.d(x),N(o),b=!1,D(P)}}}function mt(e,t,n){let l,s="",i=!1,f=!1;return[s,i,f,o=>{l=nt(o.target),n(0,s=JSON.stringify(l,null,"	")),navigator.clipboard.writeText(s+","),n(2,f=!0),setTimeout(()=>n(2,f=!1),1500)},()=>{l=void 0,n(1,i=!i),G.set(0)}]}class pt extends ce{constructor(t){super(),ue(this,t,mt,dt,K,{})}}new pt({target:document.getElementById("app")});