!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,r.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var i=r("h6c0i");function o(e,n){var t=Math.random()>.3;return new Promise((function(r,i){setTimeout((function(){t?r({position:e,delay:n}):i({position:e,delay:n})}),n)}))}document.querySelector("form.form").addEventListener("submit",(function(e){var n,t;(e.preventDefault(),e.currentTarget.getAttribute("pending"))||(n=e.currentTarget,t={amount:function(e){var n=!isNaN(e)&&e>0;return n||i.Notify.warning("amount must be integer > 0"),n},delay:function(e){var n=!isNaN(e)&&e>=0;return n||i.Notify.warning("delay must be integer >= 0"),n},step:function(e){var n=!isNaN(e)&&e>=0;return n||i.Notify.warning("step must be integer >= 0"),n}},Object.keys(t).reduce((function(e,r){var i=parseInt(n.elements[r].value,10),o=t[r](i);return e&&o}),!0)&&function(e){e.position;var n=e.form,t=n.elements,r=parseInt(t.amount.value,10),a=parseInt(t.delay.value,10),u=parseInt(t.step.value,10),s=u;n.setAttribute("pending","true"),s=a;for(var c=function(e){e===r&&n.removeAttribute("pending")},f=0;f<r;f++)o(f+1,s).then((function(e){var n=e.position,t=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms")),c(n)})).catch((function(e){var n=e.position,t=e.delay;i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms")),c(n)})),s+=u}({position:1,form:e.currentTarget}))}))}();
//# sourceMappingURL=03-promises.c749c08b.js.map
