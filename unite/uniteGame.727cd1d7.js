parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QCba":[function(require,module,exports) {
var e;!function(e){e.BLUE="blue",e.GREEN="green",e.ORANGE="orange",e.RED="red"}(e||(e={}));for(var t=[e.BLUE,e.GREEN,e.ORANGE,e.RED],o=function(){return t[Math.floor(Math.random()*t.length)]},n=function(){function e(e,t){this.code=e;var o=document.createElement("div");o.classList.add("cell",e),this.nodeEl=o,this.onInfectedCallback=t}return e.prototype.setInfected=function(){this.isInfected()||(this.nodeEl.classList.add("infected"),this.onInfectedCallback())},e.prototype.isInfected=function(){return this.nodeEl.classList.contains("infected")},e.prototype.neighborCellCodeUpdated=function(e,t){e===this.code&&t!==this.code&&this.updateCode(t),t!==this.code||this.isInfected()||(this.setInfected(),this.notifyNeighbors(this.code,this.code))},e.prototype.notifyNeighbors=function(e,t){this.topNeighbor&&this.topNeighbor.neighborCellCodeUpdated(e,t),this.rightNeighbor&&this.rightNeighbor.neighborCellCodeUpdated(e,t),this.bottomNeighbor&&this.bottomNeighbor.neighborCellCodeUpdated(e,t),this.leftNeighbor&&this.leftNeighbor.neighborCellCodeUpdated(e,t)},e.prototype.updateCode=function(e){this.nodeEl.classList.replace(this.code,e);var t=this.code;this.code=e,this.notifyNeighbors(t,e)},e.prototype.forceUpdateCode=function(e){this.setInfected(),this.updateCode(e)},e}(),i=[],r=13,d=13,c=[],s=0;s<d;s++){c[s]=[];for(var a=0;a<r;a++)c[s][a]=o()}var h=0,l=function(){h+=1,document.getElementById("infectedCount").innerText=h+"";var e=i.length-h;document.getElementById("notInfectedCount").innerText=e+"",0===e&&window.location.reload(!1)},u=document.getElementById("cellGrid");u.style.gridTemplateColumns="repeat("+r+", auto)",u.style.gridTemplateRows="repeat("+d+", auto)";for(s=0;s<c.length;s++)for(a=0;a<c[s].length;a++){var f=new n(c[s][a],l);i.push(f),u.appendChild(f.nodeEl)}var p=function(e){for(var t=function(t){var o=i[e*r+t];o.topNeighbor=function(){if(0!==e)return i[(e-1)*r+t]}(),o.bottomNeighbor=function(){if(e!==d-1)return i[(e+1)*r+t]}(),o.leftNeighbor=function(){if(0!==t)return i[e*r+t-1]}(),o.rightNeighbor=function(){if(t!==r-1)return i[e*r+t+1]}()},o=0;o<r;o++)t(o)};for(s=0;s<d;s++)p(s);var g=i[Math.floor(d*r/2)];g.forceUpdateCode(g.code),g.setInfected();var b=function(){g.forceUpdateCode(e.BLUE)},E=function(){g.forceUpdateCode(e.GREEN)},C=function(){g.forceUpdateCode(e.ORANGE)},y=function(){g.forceUpdateCode(e.RED)};document.querySelector(".colorButton button.blue").addEventListener("click",b),document.querySelector(".colorButton button.green").addEventListener("click",E),document.querySelector(".colorButton button.orange").addEventListener("click",C),document.querySelector(".colorButton button.red").addEventListener("click",y),document.addEventListener("keydown",function(e){switch(e.code){case"KeyA":b();break;case"KeyS":E();break;case"KeyD":C();break;case"KeyF":y()}});
},{}]},{},["QCba"], null)
//# sourceMappingURL=uniteGame.727cd1d7.js.map