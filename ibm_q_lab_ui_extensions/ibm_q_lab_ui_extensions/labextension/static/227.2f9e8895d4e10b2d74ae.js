"use strict";
(self.webpackChunk_quantum_lab_ui = self.webpackChunk_quantum_lab_ui || []).push([
    [227], {
        91227: s => {
            function c(u) {
                var r = void 0;
                typeof u == "string" ? r = [u] : r = u.raw;
                for (var e = "", n = 0; n < r.length; n++) e += r[n].replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`"), n < (arguments.length <= 1 ? 0 : arguments.length - 1) && (e += arguments.length <= n + 1 ? void 0 : arguments[n + 1]);
                var l = e.split(`
`),
                    t = null;
                return l.forEach(function(a) {
                    var f = a.match(/^(\s+)\S+/);
                    if (f) {
                        var i = f[1].length;
                        t ? t = Math.min(t, i) : t = i
                    }
                }), t !== null && (e = l.map(function(a) { return a[0] === " " ? a.slice(t) : a }).join(`
`)), e = e.trim(), e.replace(/\\n/g, `
`)
            }
            s.exports = c
        }
    }
]);