(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),s=t(4),i=t.n(s),r=(t(9),t(3)),d=t(0),o="ecc00cf228e23a00290f425ae759b202",l="https://api.openweathermap.org/data/2.5/";var u=function(){var e=Object(n.useState)(""),a=Object(r.a)(e,2),t=a[0],c=a[1],s=Object(n.useState)({}),i=Object(r.a)(s,2),u=i[0],h=i[1];return console.log(u),Object(d.jsx)("div",{className:"app__wrapper",children:Object(d.jsx)("div",{id:"app",className:"undefined"!=typeof u.main?"Rain"===u.weather[0].main?"app rain-background":"Clouds"===u.weather[0].main?"app clouds-background":"Snow"===u.weather[0].main?"app snow-background":"Clear"===u.weather[0].main?"app sunny":"app":"app",children:Object(d.jsxs)("main",{children:[Object(d.jsxs)("div",{className:"search-box",children:[Object(d.jsx)("input",{type:"text",className:"search-bar",placeholder:"Enter the name of the country or city...",onChange:function(e){return c(e.target.value)},value:t,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(l,"weather?q=").concat(t,"&units=metric&APPID=").concat(o)).then((function(e){return e.json()})).then((function(e){h(e),c(""),console.log(e)}))}}),Object(d.jsx)("div",{className:"undefined"!=typeof u.main?"title ":"title active",children:"Weather App"})]}),"undefined"!=typeof u.main?Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"location-box",children:[Object(d.jsxs)("div",{className:"location",children:[u.name,", ",u.sys.country]}),Object(d.jsx)("div",{className:"date",children:function(e){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],t=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(a," ").concat(t," ").concat(n," ").concat(c)}(new Date)})]}),Object(d.jsxs)("div",{className:"weather-box",children:[Object(d.jsxs)("div",{className:"temp",children:[Math.round(u.main.temp),"\xb0c"]}),Object(d.jsxs)("div",{className:"weater__wrapper",children:[Object(d.jsx)("div",{className:"Rain"===u.weather[0].main?"rain":"Clouds"===u.weather[0].main?"clouds":"Snow"===u.weather[0].main?"snow":"weather__icon"}),Object(d.jsx)("div",{className:"weather",children:u.weather[0].main})]})]}),Object(d.jsxs)("div",{className:"wind",children:[Object(d.jsx)("div",{className:"wind__icon"}),Object(d.jsxs)("div",{className:"wind__data",children:[u.wind.speed," m/s"]})]})]}):""]})})})},h=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,12)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,s=a.getLCP,i=a.getTTFB;t(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root")),h()},9:function(e,a,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.9175a266.chunk.js.map