(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var n,r=s(4),c=s.n(r),i=s(5),o=s(6),a=s(9),l=s(7),u=s(8),h=s(1),b=s.n(h),d=(s(14),s(15),s(2)),p=s.n(d),j=s(0),y=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(e){e.NONE="none",e.ALPABET="alpabet",e.LENGTH="length"}(n||(n={}));var v=function(e){Object(a.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(i.a)(this,s);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={isReversed:!1,sortType:n.NONE},e.handleReverse=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.sortByalphabetically=function(){e.setState({sortType:n.ALPABET})},e.sortbylength=function(){e.setState({sortType:n.LENGTH})},e.handleReset=function(){e.setState({isReversed:!1,sortType:n.NONE})},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this.state,t=e.sortType,s=e.isReversed,r=function(e,t){var s=t.sortType,n=t.isReversed,r=Object(u.a)(e);return console.log(s,n),r}(y,{sortType:t,isReversed:s});return r.sort((function(e,s){switch(t){case n.ALPABET:return e.localeCompare(s);case n.LENGTH:return e.length-s.length;default:return 0}})),s&&r.reverse(),Object(j.jsxs)("div",{className:"section content",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",className:p()("button is-info ",{"is-light":t!==n.ALPABET}),onClick:this.sortByalphabetically,children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",className:p()("button is-success",{"is-light":t!==n.LENGTH}),onClick:this.sortbylength,children:"Sort by length"}),Object(j.jsx)("button",{type:"button",className:p()("button is-warning",{"is-light":!1===s}),onClick:this.handleReverse,children:"Reverse"}),(t!==n.NONE||s)&&Object(j.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.handleReset,children:"Reset"})]}),Object(j.jsx)("ul",{children:Object(j.jsx)("ul",{children:r.map((function(e){return Object(j.jsx)("li",{children:e},e)}))})})]})}}]),s}(b.a.Component);c.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.88e32056.chunk.js.map