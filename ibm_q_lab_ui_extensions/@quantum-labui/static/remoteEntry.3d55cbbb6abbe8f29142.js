var _JUPYTERLAB;
(() => {
    "use strict";
    var $ = {
            49417: (n, v, l) => {
                var c = { "./index": () => Promise.all([l.e(57), l.e(978)]).then(() => () => l(78676)), "./extension": () => Promise.all([l.e(57), l.e(978)]).then(() => () => l(78676)), "./style": () => l.e(62).then(() => () => l(29062)) },
                    d = (f, b) => (l.R = b, b = l.o(c, f) ? c[f]() : Promise.resolve().then(() => { throw new Error('Module "' + f + '" does not exist in container.') }), l.R = void 0, b),
                    h = (f, b) => {
                        if (!!l.S) {
                            var s = "default",
                                y = l.S[s];
                            if (y && y !== f) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                            return l.S[s] = f, l.I(s, b)
                        }
                    };
                l.d(v, { get: () => d, init: () => h })
            }
        },
        F = {};

    function i(n) { var v = F[n]; if (v !== void 0) return v.exports; var l = F[n] = { id: n, loaded: !1, exports: {} }; return $[n].call(l.exports, l, l.exports, i), l.loaded = !0, l.exports }
    i.m = $, i.c = F, i.n = n => { var v = n && n.__esModule ? () => n.default : () => n; return i.d(v, { a: v }), v }, i.d = (n, v) => { for (var l in v) i.o(v, l) && !i.o(n, l) && Object.defineProperty(n, l, { enumerable: !0, get: v[l] }) }, i.f = {}, i.e = n => Promise.all(Object.keys(i.f).reduce((v, l) => (i.f[l](n, v), v), [])), i.u = n => "" + n + "." + { 47: "a483e34ebfe4ef830fb9", 57: "81095b3991f6051c34bf", 62: "b2c9b0b4a255405ad703", 227: "2f9e8895d4e10b2d74ae", 283: "94facee3beb8b5efffa5", 461: "3d67eb68e43d2eb823c3", 530: "c5f60b30428639a77b72", 790: "4a5158628ad78916e042", 801: "9fe4121fd66b2bcb1cc7", 853: "2c78e9e5c6b8597fa367", 863: "2ebe2d21b251d9c56e3c", 978: "368382515f4dda7415fb" }[n] + ".js?v=" + { 47: "a483e34ebfe4ef830fb9", 57: "81095b3991f6051c34bf", 62: "b2c9b0b4a255405ad703", 227: "2f9e8895d4e10b2d74ae", 283: "94facee3beb8b5efffa5", 461: "3d67eb68e43d2eb823c3", 530: "c5f60b30428639a77b72", 790: "4a5158628ad78916e042", 801: "9fe4121fd66b2bcb1cc7", 853: "2c78e9e5c6b8597fa367", 863: "2ebe2d21b251d9c56e3c", 978: "368382515f4dda7415fb" }[n], i.miniCssF = n => "" + n + ".css", i.g = function() { if (typeof globalThis == "object") return globalThis; try { return this || new Function("return this")() } catch { if (typeof window == "object") return window } }(), i.hmd = n => (n = Object.create(n), n.children || (n.children = []), Object.defineProperty(n, "exports", { enumerable: !0, set: () => { throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + n.id) } }), n), i.o = (n, v) => Object.prototype.hasOwnProperty.call(n, v), (() => {
        var n = {},
            v = "@quantum/lab-ui:";
        i.l = (l, c, d, h) => {
            if (n[l]) { n[l].push(c); return }
            var f, b;
            if (d !== void 0)
                for (var s = document.getElementsByTagName("script"), y = 0; y < s.length; y++) { var p = s[y]; if (p.getAttribute("src") == l || p.getAttribute("data-webpack") == v + d) { f = p; break } }
            f || (b = !0, f = document.createElement("script"), f.charset = "utf-8", f.timeout = 120, i.nc && f.setAttribute("nonce", i.nc), f.setAttribute("data-webpack", v + d), f.src = l), n[l] = [c];
            var S = (E, V) => { f.onerror = f.onload = null, clearTimeout(w); var C = n[l]; if (delete n[l], f.parentNode && f.parentNode.removeChild(f), C && C.forEach(m => m(V)), E) return E(V) },
                w = setTimeout(S.bind(null, void 0, { type: "timeout", target: f }), 12e4);
            f.onerror = S.bind(null, f.onerror), f.onload = S.bind(null, f.onload), b && document.head.appendChild(f)
        }
    })(), i.r = n => { typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 }) }, i.nmd = n => (n.paths = [], n.children || (n.children = []), n), (() => {
        i.S = {};
        var n = {},
            v = {};
        i.I = (l, c) => {
            c || (c = []);
            var d = v[l];
            if (d || (d = v[l] = {}), !(c.indexOf(d) >= 0)) {
                if (c.push(d), n[l]) return n[l];
                i.o(i.S, l) || (i.S[l] = {});
                var h = i.S[l],
                    f = S => typeof console < "u" && console.warn && console.warn(S),
                    b = "@quantum/lab-ui",
                    s = (S, w, E, V) => {
                        var C = h[S] = h[S] || {},
                            m = C[w];
                        (!m || !m.loaded && (!V != !m.eager ? V : b > m.from)) && (C[w] = { get: E, from: b, eager: !!V })
                    },
                    y = S => { var w = m => f("Initialization of sharing external failed: " + m); try { var E = i(S); if (!E) return; var V = m => m && m.init && m.init(i.S[l], c); if (E.then) return p.push(E.then(V, w)); var C = V(E); if (C && C.then) return p.push(C.catch(w)) } catch (m) { w(m) } },
                    p = [];
                switch (l) {
                    case "default":
                        s("@quantum/lab-ui", "4.0.28", () => Promise.all([i.e(57), i.e(978)]).then(() => () => i(78676))), s("dedent", "0.7.0", () => i.e(227).then(() => () => i(91227)));
                        break
                }
                return p.length ? n[l] = Promise.all(p).then(() => n[l] = 1) : n[l] = 1
            }
        }
    })(), (() => {
        var n;
        i.g.importScripts && (n = i.g.location + "");
        var v = i.g.document;
        if (!n && v && (v.currentScript && (n = v.currentScript.src), !n)) {
            var l = v.getElementsByTagName("script");
            l.length && (n = l[l.length - 1].src)
        }
        if (!n) throw new Error("Automatic publicPath is not supported in this browser");
        n = n.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = n
    })(), (() => {
        var n = e => {
                var t = o => o.split(".").map(u => +u == u ? +u : u),
                    r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                    a = r[1] ? t(r[1]) : [];
                return r[2] && (a.length++, a.push.apply(a, t(r[2]))), r[3] && (a.push([]), a.push.apply(a, t(r[3]))), a
            },
            v = (e, t) => {
                e = n(e), t = n(t);
                for (var r = 0;;) {
                    if (r >= e.length) return r < t.length && (typeof t[r])[0] != "u";
                    var a = e[r],
                        o = (typeof a)[0];
                    if (r >= t.length) return o == "u";
                    var u = t[r],
                        g = (typeof u)[0];
                    if (o != g) return o == "o" && g == "n" || g == "s" || o == "u";
                    if (o != "o" && o != "u" && a != u) return a < u;
                    r++
                }
            },
            l = e => {
                var t = e[0],
                    r = "";
                if (e.length === 1) return "*";
                if (t + .5) { r += t == 0 ? ">=" : t == -1 ? "<" : t == 1 ? "^" : t == 2 ? "~" : t > 0 ? "=" : "!="; for (var a = 1, o = 1; o < e.length; o++) a--, r += (typeof(g = e[o]))[0] == "u" ? "-" : (a > 0 ? "." : "") + (a = 2, g); return r }
                var u = [];
                for (o = 1; o < e.length; o++) {
                    var g = e[o];
                    u.push(g === 0 ? "not(" + x() + ")" : g === 1 ? "(" + x() + " || " + x() + ")" : g === 2 ? u.pop() + " " + u.pop() : l(g))
                }
                return x();

                function x() { return u.pop().replace(/^\((.+)\)$/, "$1") }
            },
            c = (e, t) => {
                if (0 in e) {
                    t = n(t);
                    var r = e[0],
                        a = r < 0;
                    a && (r = -r - 1);
                    for (var o = 0, u = 1, g = !0;; u++, o++) {
                        var x, O, P = u < e.length ? (typeof e[u])[0] : "";
                        if (o >= t.length || (O = (typeof(x = t[o]))[0]) == "o") return !g || (P == "u" ? u > r && !a : P == "" != a);
                        if (O == "u") { if (!g || P != "u") return !1 } else if (g)
                            if (P == O)
                                if (u <= r) { if (x != e[u]) return !1 } else {
                                    if (a ? x > e[u] : x < e[u]) return !1;
                                    x != e[u] && (g = !1)
                                }
                        else if (P != "s" && P != "n") {
                            if (a || u <= r) return !1;
                            g = !1, u--
                        } else {
                            if (u <= r || O < P != a) return !1;
                            g = !1
                        } else P != "s" && P != "n" && (g = !1, u--)
                    }
                }
                var L = [],
                    T = L.pop.bind(L);
                for (o = 1; o < e.length; o++) {
                    var A = e[o];
                    L.push(A == 1 ? T() | T() : A == 2 ? T() & T() : A ? c(A, t) : !T())
                }
                return !!T()
            },
            d = (e, t) => { var r = i.S[e]; if (!r || !i.o(r, t)) throw new Error("Shared module " + t + " doesn't exist in shared scope " + e); return r },
            h = (e, a) => {
                var r = e[a],
                    a = Object.keys(r).reduce((o, u) => !o || v(o, u) ? u : o, 0);
                return a && r[a]
            },
            f = (e, t) => { var r = e[t]; return Object.keys(r).reduce((a, o) => !a || !r[a].loaded && v(a, o) ? o : a, 0) },
            b = (e, t, r, a) => "Unsatisfied version " + r + " from " + (r && e[t][r].from) + " of shared singleton module " + t + " (required " + l(a) + ")",
            s = (e, t, r, a) => { var o = f(e, r); return C(e[r][o]) },
            y = (e, t, r, a) => { var o = f(e, r); return c(a, o) || typeof console < "u" && console.warn && console.warn(b(e, r, o, a)), C(e[r][o]) },
            p = (e, t, r, a) => { var o = f(e, r); if (!c(a, o)) throw new Error(b(e, r, o, a)); return C(e[r][o]) },
            S = (e, o, r) => {
                var a = e[o],
                    o = Object.keys(a).reduce((u, g) => c(r, g) && (!u || v(u, g)) ? g : u, 0);
                return o && a[o]
            },
            w = (e, t, r, a) => { var o = e[r]; return "No satisfying version (" + l(a) + ") of shared module " + r + " found in shared scope " + t + `.
Available versions: ` + Object.keys(o).map(u => u + " from " + o[u].from).join(", ") },
            E = (e, t, r, a) => { var o = S(e, r, a); if (o) return C(o); throw new Error(w(e, t, r, a)) },
            V = (e, t, r, a) => { typeof console < "u" && console.warn && console.warn(w(e, t, r, a)) },
            C = e => (e.loaded = 1, e.get()),
            m = e => function(t, r, a, o) { var u = i.I(t); return u && u.then ? u.then(e.bind(e, t, i.S[t], r, a, o)) : e(t, i.S[t], r, a, o) },
            J = m((e, t, r) => (d(e, r), C(h(t, r)))),
            K = m((e, t, r, a) => t && i.o(t, r) ? C(h(t, r)) : a()),
            U = m((e, t, r, a) => (d(e, r), C(S(t, r, a) || V(t, e, r, a) || h(t, r)))),
            G = m((e, t, r) => (d(e, r), s(t, e, r))),
            j = m((e, t, r, a) => (d(e, r), y(t, e, r, a))),
            H = m((e, t, r, a) => (d(e, r), E(t, e, r, a))),
            R = m((e, t, r, a) => (d(e, r), p(t, e, r, a))),
            W = m((e, t, r, a, o) => !t || !i.o(t, r) ? o() : C(S(t, r, a) || V(t, e, r, a) || h(t, r))),
            Y = m((e, t, r, a) => !t || !i.o(t, r) ? a() : s(t, e, r)),
            Q = m((e, t, r, a, o) => !t || !i.o(t, r) ? o() : y(t, e, r, a)),
            z = m((e, t, r, a, o) => { var u = t && i.o(t, r) && S(t, r, a); return u ? C(u) : o() }),
            X = m((e, t, r, a, o) => !t || !i.o(t, r) ? o() : p(t, e, r, a)),
            M = {},
            D = { 3313: () => z("default", "dedent", [2, 0, 7, 0], () => i.e(227).then(() => () => i(91227))), 3992: () => j("default", "@lumino/widgets", [1, 1, 33, 0]), 5012: () => j("default", "@jupyterlab/coreutils", [1, 5, 4, 8]), 14456: () => j("default", "react-dom", [1, 17, 0, 1]), 15149: () => j("default", "@jupyterlab/docmanager", [1, 3, 6, 1]), 15510: () => j("default", "@jupyterlab/apputils", [1, 3, 6, 1]), 15923: () => j("default", "@lumino/disposable", [1, 1, 10, 0]), 16866: () => j("default", "@jupyterlab/application", [1, 3, 6, 1]), 23535: () => j("default", "@jupyterlab/filebrowser", [1, 3, 6, 1]), 36998: () => U("default", "@jupyterlab/running", [1, 3, 6, 1]), 41279: () => j("default", "@jupyterlab/launcher", [1, 3, 6, 1]), 45442: () => j("default", "@jupyterlab/translation", [1, 3, 6, 1]), 46591: () => j("default", "@jupyterlab/ui-components", [1, 3, 6, 1]), 55705: () => j("default", "@jupyterlab/mainmenu", [1, 3, 6, 1]), 55767: () => j("default", "@jupyterlab/notebook", [1, 3, 6, 1]), 56271: () => j("default", "react", [1, 17, 0, 1]), 71840: () => j("default", "@lumino/signaling", [1, 1, 10, 0]), 75322: () => j("default", "@jupyterlab/services", [1, 6, 4, 8]), 91526: () => j("default", "@lumino/coreutils", [1, 1, 11, 0]) },
            B = { 978: [3313, 3992, 5012, 14456, 15149, 15510, 15923, 16866, 23535, 36998, 41279, 45442, 46591, 55705, 55767, 56271, 71840, 75322, 91526] };
        i.f.consumes = (e, t) => {
            i.o(B, e) && B[e].forEach(r => {
                if (i.o(M, r)) return t.push(M[r]);
                var a = g => { M[r] = 0, i.m[r] = x => { delete i.c[r], x.exports = g() } },
                    o = g => { delete M[r], i.m[r] = x => { throw delete i.c[r], g } };
                try {
                    var u = D[r]();
                    u.then ? t.push(M[r] = u.then(a).catch(o)) : a(u)
                } catch (g) { o(g) }
            })
        }
    })(), (() => {
        var n = (d, h, f, b) => {
                var s = document.createElement("link");
                s.rel = "stylesheet", s.type = "text/css";
                var y = p => {
                    if (s.onerror = s.onload = null, p.type === "load") f();
                    else {
                        var S = p && (p.type === "load" ? "missing" : p.type),
                            w = p && p.target && p.target.href || h,
                            E = new Error("Loading CSS chunk " + d + ` failed.
(` + w + ")");
                        E.code = "CSS_CHUNK_LOAD_FAILED", E.type = S, E.request = w, s.parentNode.removeChild(s), b(E)
                    }
                };
                return s.onerror = s.onload = y, s.href = h, document.head.appendChild(s), s
            },
            v = (d, h) => {
                for (var f = document.getElementsByTagName("link"), b = 0; b < f.length; b++) {
                    var s = f[b],
                        y = s.getAttribute("data-href") || s.getAttribute("href");
                    if (s.rel === "stylesheet" && (y === d || y === h)) return s
                }
                for (var p = document.getElementsByTagName("style"), b = 0; b < p.length; b++) {
                    var s = p[b],
                        y = s.getAttribute("data-href");
                    if (y === d || y === h) return s
                }
            },
            l = d => new Promise((h, f) => {
                var b = i.miniCssF(d),
                    s = i.p + b;
                if (v(b, s)) return h();
                n(d, s, h, f)
            }),
            c = { 339: 0 };
        i.f.miniCss = (d, h) => {
            var f = { 62: 1 };
            c[d] ? h.push(c[d]) : c[d] !== 0 && f[d] && h.push(c[d] = l(d).then(() => { c[d] = 0 }, b => { throw delete c[d], b }))
        }
    })(), (() => {
        var n = { 339: 0 };
        i.f.j = (c, d) => {
            var h = i.o(n, c) ? n[c] : void 0;
            if (h !== 0)
                if (h) d.push(h[2]);
                else {
                    var f = new Promise((p, S) => h = n[c] = [p, S]);
                    d.push(h[2] = f);
                    var b = i.p + i.u(c),
                        s = new Error,
                        y = p => {
                            if (i.o(n, c) && (h = n[c], h !== 0 && (n[c] = void 0), h)) {
                                var S = p && (p.type === "load" ? "missing" : p.type),
                                    w = p && p.target && p.target.src;
                                s.message = "Loading chunk " + c + ` failed.
(` + S + ": " + w + ")", s.name = "ChunkLoadError", s.type = S, s.request = w, h[1](s)
                            }
                        };
                    i.l(b, y, "chunk-" + c, c)
                }
        };
        var v = (c, d) => { var [h, f, b] = d, s, y, p = 0; if (h.some(w => n[w] !== 0)) { for (s in f) i.o(f, s) && (i.m[s] = f[s]); if (b) var S = b(i) } for (c && c(d); p < h.length; p++) y = h[p], i.o(n, y) && n[y] && n[y][0](), n[y] = 0 },
            l = self.webpackChunk_quantum_lab_ui = self.webpackChunk_quantum_lab_ui || [];
        l.forEach(v.bind(null, 0)), l.push = v.bind(null, l.push.bind(l))
    })();
    var N = i(49417);
    (_JUPYTERLAB = typeof _JUPYTERLAB > "u" ? {} : _JUPYTERLAB)["@quantum/lab-ui"] = N
})();