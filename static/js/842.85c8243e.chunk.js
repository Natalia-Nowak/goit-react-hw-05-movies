"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[842],{842:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(861),a=n(439),i=n(757),s=n.n(i),c=n(791),u=n(87),o=n(340),l=n(184);function h(){var e,t,n=(0,c.useState)(""),i=(0,a.Z)(n,2),h=i[0],d=i[1],m=function(e){var t=(0,c.useState)([]),n=(0,a.Z)(t,2),i=n[0],u=n[1];return(0,c.useEffect)((function(){var t=function(){var t=(0,r.Z)(s().mark((function t(){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTk4NTNiZmUxMDBkMjVmMGZiYTZjMTkwMTg3YzQ4ZiIsInN1YiI6IjY1NThkMzI3MjI5MzFhMDExYzk2Yzk2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FlUQQQ1eD5Nk8SJZYgRoUcjm4ddugKi_Hx1DLKb-DbA"}},t.next=3,o.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1"),n);case 3:r=t.sent,u(r.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e]),{data:i}}(h),p=function(){var e=(0,r.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,l.jsxs)("div",{children:[(0,l.jsxs)("form",{className:"movies-form",onSubmit:p,children:[(0,l.jsx)("input",{className:"movies-input",value:h,onChange:function(e){d(e.target.value)},placeholder:"Search here",type:"text"}),(0,l.jsx)("button",{className:"movies-button",type:"submit",children:"Search"})]}),(0,l.jsx)("ul",{className:"movies-list",children:null===m||void 0===m||null===(e=m.data)||void 0===e||null===(t=e.results)||void 0===t?void 0:t.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsx)(u.rU,{to:"/movies/"+e.id,children:(0,l.jsx)("p",{className:"movies-title",children:e.title})})},e.id)}))})]})}}}]);
//# sourceMappingURL=842.85c8243e.chunk.js.map