function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=r);var i=r("7Y9D8");function u(e,t){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}const l=document.querySelector(".form");l.addEventListener("submit",(t=>{t.preventDefault();const n=document.querySelector('input[name="delay"]'),o=document.querySelector('input[name="step"]'),r=document.querySelector('input[name="amount"]');let a=Number(n.value),d=Number(o.value),s=Number(r.value);if(a<0||d<0||s<=0)alert("Внесіть значення більше 0");else for(let t=1;t<=s;t+=1){u(t,a+(t-1)*d).then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}))}l.reset()}));
//# sourceMappingURL=03-promises.0d7d367d.js.map
