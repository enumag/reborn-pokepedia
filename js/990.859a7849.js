"use strict";(self["webpackChunkreborn_pokepedia"]=self["webpackChunkreborn_pokepedia"]||[]).push([[990],{8990:function(e,t,n){n.r(t),n.d(t,{createSwipeBackGesture:function(){return a}});var r=n(6587),o=n(545),i=n(6515);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const a=(e,t,n,a,c)=>{const s=e.ownerDocument.defaultView,u=(0,o.i)(e),d=e=>{const t=50,{startX:n}=e;return u?n>=s.innerWidth-t:n<=t},h=e=>u?-e.deltaX:e.deltaX,l=e=>u?-e.velocityX:e.velocityX,p=e=>d(e)&&t(),k=e=>{const t=h(e),n=t/s.innerWidth;a(n)},b=e=>{const t=h(e),n=s.innerWidth,o=t/n,i=l(e),a=n/2,u=i>=0&&(i>.2||t>a),d=u?1-o:o,p=d*n;let k=0;if(p>5){const e=p/Math.abs(i);k=Math.min(e,540)}c(u,o<=0?.01:(0,r.j)(0,o,.9999),k)};return(0,i.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:p,onStart:n,onMove:k,onEnd:b})}}}]);
//# sourceMappingURL=990.859a7849.js.map