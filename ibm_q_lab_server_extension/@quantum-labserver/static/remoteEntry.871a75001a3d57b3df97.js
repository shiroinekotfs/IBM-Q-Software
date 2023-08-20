var _JUPYTERLAB;
(() => {
    "use strict";
    var e, r, t = {
            731: (e, r, t) => {
                var n = { "./index": () => t.e(688).then((() => () => t(688))), "./extension": () => t.e(688).then((() => () => t(688))), "./style": () => t.e(138).then((() => () => t(138))) },
                    o = (e, r) => (t.R = r, r = t.o(n, e) ? n[e]() : Promise.resolve().then((() => { throw new Error('Module "' + e + '" does not exist in container.') })), t.R = void 0, r),
                    a = (e, r) => {
                        if (t.S) {
                            var n = "default",
                                o = t.S[n];
                            if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                            return t.S[n] = e, t.I(n, r)
                        }
                    };
                t.d(r, { get: () => o, init: () => a })
            }
        },
        n = {};

    function o(e) { var r = n[e]; if (void 0 !== r) return r.exports; var a = n[e] = { id: e, exports: {} }; return t[e](a, a.exports, o), a.exports }
    o.m = t, o.c = n, o.d = (e, r) => { for (var t in r) o.o(r, t) && !o.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: r[t] }) }, o.f = {}, o.e = e => Promise.all(Object.keys(o.f).reduce(((r, t) => (o.f[t](e, r), r)), [])), o.u = e => e + "." + { 138: "cc3f2542e28369ae594d", 688: "09e8a1383c921569f1e2" }[e] + ".js?v=" + { 138: "cc3f2542e28369ae594d", 688: "09e8a1383c921569f1e2" }[e], o.g = function() { if ("object" == typeof globalThis) return globalThis; try { return this || new Function("return this")() } catch (e) { if ("object" == typeof window) return window } }(), o.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, r = "@quantum/lab-server:", o.l = (t, n, a, i) => {
        if (e[t]) e[t].push(n);
        else {
            var l, u;
            if (void 0 !== a)
                for (var s = document.getElementsByTagName("script"), d = 0; d < s.length; d++) { var c = s[d]; if (c.getAttribute("src") == t || c.getAttribute("data-webpack") == r + a) { l = c; break } }
            l || (u = !0, (l = document.createElement("script")).charset = "utf-8", l.timeout = 120, o.nc && l.setAttribute("nonce", o.nc), l.setAttribute("data-webpack", r + a), l.src = t), e[t] = [n];
            var f = (r, n) => { l.onerror = l.onload = null, clearTimeout(p); var o = e[t]; if (delete e[t], l.parentNode && l.parentNode.removeChild(l), o && o.forEach((e => e(n))), r) return r(n) },
                p = setTimeout(f.bind(null, void 0, { type: "timeout", target: l }), 12e4);
            l.onerror = f.bind(null, l.onerror), l.onload = f.bind(null, l.onload), u && document.head.appendChild(l)
        }
    }, o.r = e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, (() => {
        o.S = {};
        var e = {},
            r = {};
        o.I = (t, n) => {
            n || (n = []);
            var a = r[t];
            if (a || (a = r[t] = {}), !(n.indexOf(a) >= 0)) {
                if (n.push(a), e[t]) return e[t];
                o.o(o.S, t) || (o.S[t] = {});
                var i = o.S[t],
                    l = "@quantum/lab-server",
                    u = [];
                return "default" === t && ((e, r, t, n) => {
                    var a = i[e] = i[e] || {},
                        u = a[r];
                    (!u || !u.loaded && (1 != !u.eager ? n : l > u.from)) && (a[r] = { get: () => o.e(688).then((() => () => o(688))), from: l, eager: !1 })
                })("@quantum/lab-server", "4.0.28"), e[t] = u.length ? Promise.all(u).then((() => e[t] = 1)) : 1
            }
        }
    })(), (() => {
        var e;
        o.g.importScripts && (e = o.g.location + "");
        var r = o.g.document;
        if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
            var t = r.getElementsByTagName("script");
            t.length && (e = t[t.length - 1].src)
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), o.p = e
    })(), (() => {
        var e = { 261: 0 };
        o.f.j = (r, t) => {
            var n = o.o(e, r) ? e[r] : void 0;
            if (0 !== n)
                if (n) t.push(n[2]);
                else {
                    var a = new Promise(((t, o) => n = e[r] = [t, o]));
                    t.push(n[2] = a);
                    var i = o.p + o.u(r),
                        l = new Error;
                    o.l(i, (t => {
                        if (o.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
                            var a = t && ("load" === t.type ? "missing" : t.type),
                                i = t && t.target && t.target.src;
                            l.message = "Loading chunk " + r + " failed.\n(" + a + ": " + i + ")", l.name = "ChunkLoadError", l.type = a, l.request = i, n[1](l)
                        }
                    }), "chunk-" + r, r)
                }
        };
        var r = (r, t) => {
                var n, a, [i, l, u] = t,
                    s = 0;
                if (i.some((r => 0 !== e[r]))) {
                    for (n in l) o.o(l, n) && (o.m[n] = l[n]);
                    u && u(o)
                }
                for (r && r(t); s < i.length; s++) a = i[s], o.o(e, a) && e[a] && e[a][0](), e[a] = 0
            },
            t = self.webpackChunk_quantum_lab_server = self.webpackChunk_quantum_lab_server || [];
        t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
    })(), o.nc = void 0;
    var a = o(731);
    (_JUPYTERLAB = void 0 === _JUPYTERLAB ? {} : _JUPYTERLAB)["@quantum/lab-server"] = a
})();