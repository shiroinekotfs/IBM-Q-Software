var _JUPYTERLAB;
(() => {
    "use strict";
    var N = {
            769: (e, c, a) => {
                var d = { "./index": () => Promise.all([a.e(318), a.e(612)]).then(() => () => a(4612)), "./extension": () => Promise.all([a.e(318), a.e(612)]).then(() => () => a(4612)) },
                    v = (s, b) => (a.R = b, b = a.o(d, s) ? d[s]() : Promise.resolve().then(() => { throw new Error('Module "' + s + '" does not exist in container.') }), a.R = void 0, b),
                    l = (s, b) => {
                        if (!!a.S) {
                            var u = "default",
                                m = a.S[u];
                            if (m && m !== s) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                            return a.S[u] = s, a.I(u, b)
                        }
                    };
                a.d(c, { get: () => v, init: () => l })
            }
        },
        L = {};

    function i(e) { var c = L[e]; if (c !== void 0) return c.exports; var a = L[e] = { id: e, loaded: !1, exports: {} }; return N[e].call(a.exports, a, a.exports, i), a.loaded = !0, a.exports }
    i.m = N, i.c = L, i.amdD = function() { throw new Error("define cannot be used indirect") }, i.amdO = {}, (() => {
        var e = typeof Symbol == "function" ? Symbol("webpack queues") : "__webpack_queues__",
            c = typeof Symbol == "function" ? Symbol("webpack exports") : "__webpack_exports__",
            a = typeof Symbol == "function" ? Symbol("webpack error") : "__webpack_error__",
            d = l => { l && !l.d && (l.d = 1, l.forEach(s => s.r--), l.forEach(s => s.r-- ? s.r++ : s())) },
            v = l => l.map(s => {
                if (s !== null && typeof s == "object") {
                    if (s[e]) return s;
                    if (s.then) {
                        var b = [];
                        b.d = 0, s.then(p => { u[c] = p, d(b) }, p => { u[a] = p, d(b) });
                        var u = {};
                        return u[e] = p => p(b), u
                    }
                }
                var m = {};
                return m[e] = p => {}, m[c] = s, m
            });
        i.a = (l, s, b) => {
            var u;
            b && ((u = []).d = 1);
            var m = new Set,
                p = l.exports,
                S, E, x, C = new Promise((w, g) => { x = g, E = w });
            C[c] = p, C[e] = w => (u && w(u), m.forEach(w), C.catch(g => {})), l.exports = C, s(w => {
                S = v(w);
                var g, B = () => S.map(V => { if (V[a]) throw V[a]; return V[c] }),
                    $ = new Promise(V => {
                        g = () => V(B), g.r = 0;
                        var k = P => P !== u && !m.has(P) && (m.add(P), P && !P.d && (g.r++, P.push(g)));
                        S.map(P => P[e](k))
                    });
                return g.r ? $ : B()
            }, w => (w ? x(C[a] = w) : E(p), d(u))), u && (u.d = 0)
        }
    })(), i.n = e => { var c = e && e.__esModule ? () => e.default : () => e; return i.d(c, { a: c }), c }, (() => {
        var e = Object.getPrototypeOf ? a => Object.getPrototypeOf(a) : a => a.__proto__,
            c;
        i.t = function(a, d) {
            if (d & 1 && (a = this(a)), d & 8 || typeof a == "object" && a && (d & 4 && a.__esModule || d & 16 && typeof a.then == "function")) return a;
            var v = Object.create(null);
            i.r(v);
            var l = {};
            c = c || [null, e({}), e([]), e(e)];
            for (var s = d & 2 && a; typeof s == "object" && !~c.indexOf(s); s = e(s)) Object.getOwnPropertyNames(s).forEach(b => l[b] = () => a[b]);
            return l.default = () => a, i.d(v, l), v
        }
    })(), i.d = (e, c) => { for (var a in c) i.o(c, a) && !i.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: c[a] }) }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((c, a) => (i.f[a](e, c), c), [])), i.u = e => "" + e + "." + { 210: "f35dcc66ff3127969516", 292: "6dea1af252e10ab37479", 318: "8eadebcbb75521e4619f", 320: "c04981280d7473e1b3ee", 477: "a4ad13518a65ba0b4c7f", 612: "82d697c4d15692fd4ef2" }[e] + ".js?v=" + { 210: "f35dcc66ff3127969516", 292: "6dea1af252e10ab37479", 318: "8eadebcbb75521e4619f", 320: "c04981280d7473e1b3ee", 477: "a4ad13518a65ba0b4c7f", 612: "82d697c4d15692fd4ef2" }[e], i.miniCssF = e => "" + e + ".css", i.g = function() { if (typeof globalThis == "object") return globalThis; try { return this || new Function("return this")() } catch { if (typeof window == "object") return window } }(), i.hmd = e => (e = Object.create(e), e.children || (e.children = []), Object.defineProperty(e, "exports", { enumerable: !0, set: () => { throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id) } }), e), i.o = (e, c) => Object.prototype.hasOwnProperty.call(e, c), (() => {
        var e = {},
            c = "@quantum/lab-widgets:";
        i.l = (a, d, v, l) => {
            if (e[a]) { e[a].push(d); return }
            var s, b;
            if (v !== void 0)
                for (var u = document.getElementsByTagName("script"), m = 0; m < u.length; m++) { var p = u[m]; if (p.getAttribute("src") == a || p.getAttribute("data-webpack") == c + v) { s = p; break } }
            s || (b = !0, s = document.createElement("script"), s.charset = "utf-8", s.timeout = 120, i.nc && s.setAttribute("nonce", i.nc), s.setAttribute("data-webpack", c + v), s.src = a), e[a] = [d];
            var S = (x, C) => { s.onerror = s.onload = null, clearTimeout(E); var w = e[a]; if (delete e[a], s.parentNode && s.parentNode.removeChild(s), w && w.forEach(g => g(C)), x) return x(C) },
                E = setTimeout(S.bind(null, void 0, { type: "timeout", target: s }), 12e4);
            s.onerror = S.bind(null, s.onerror), s.onload = S.bind(null, s.onload), b && document.head.appendChild(s)
        }
    })(), i.r = e => { typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
        i.S = {};
        var e = {},
            c = {};
        i.I = (a, d) => {
            d || (d = []);
            var v = c[a];
            if (v || (v = c[a] = {}), !(d.indexOf(v) >= 0)) {
                if (d.push(v), e[a]) return e[a];
                i.o(i.S, a) || (i.S[a] = {});
                var l = i.S[a],
                    s = S => typeof console < "u" && console.warn && console.warn(S),
                    b = "@quantum/lab-widgets",
                    u = (S, E, x, C) => {
                        var w = l[S] = l[S] || {},
                            g = w[E];
                        (!g || !g.loaded && (!C != !g.eager ? C : b > g.from)) && (w[E] = { get: x, from: b, eager: !!C })
                    },
                    m = S => { var E = g => s("Initialization of sharing external failed: " + g); try { var x = i(S); if (!x) return; var C = g => g && g.init && g.init(i.S[a], d); if (x.then) return p.push(x.then(C, E)); var w = C(x); if (w && w.then) return p.push(w.catch(E)) } catch (g) { E(g) } },
                    p = [];
                switch (a) {
                    case "default":
                        u("@quantum/lab-widgets", "4.0.28", () => Promise.all([i.e(318), i.e(612)]).then(() => () => i(4612)));
                        break
                }
                return p.length ? e[a] = Promise.all(p).then(() => e[a] = 1) : e[a] = 1
            }
        }
    })(), i.v = (e, c, a, d) => { var v = fetch(i.p + "" + a + ".module.wasm"); return typeof WebAssembly.instantiateStreaming == "function" ? WebAssembly.instantiateStreaming(v, d).then(l => Object.assign(e, l.instance.exports)) : v.then(l => l.arrayBuffer()).then(l => WebAssembly.instantiate(l, d)).then(l => Object.assign(e, l.instance.exports)) }, (() => {
        var e;
        i.g.importScripts && (e = i.g.location + "");
        var c = i.g.document;
        if (!e && c && (c.currentScript && (e = c.currentScript.src), !e)) {
            var a = c.getElementsByTagName("script");
            a.length && (e = a[a.length - 1].src)
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
    })(), (() => {
        var e = t => {
                var n = f => f.split(".").map(h => +h == h ? +h : h),
                    r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(t),
                    o = r[1] ? n(r[1]) : [];
                return r[2] && (o.length++, o.push.apply(o, n(r[2]))), r[3] && (o.push([]), o.push.apply(o, n(r[3]))), o
            },
            c = (t, n) => {
                t = e(t), n = e(n);
                for (var r = 0;;) {
                    if (r >= t.length) return r < n.length && (typeof n[r])[0] != "u";
                    var o = t[r],
                        f = (typeof o)[0];
                    if (r >= n.length) return f == "u";
                    var h = n[r],
                        y = (typeof h)[0];
                    if (f != y) return f == "o" && y == "n" || y == "s" || f == "u";
                    if (f != "o" && f != "u" && o != h) return o < h;
                    r++
                }
            },
            a = t => {
                var n = t[0],
                    r = "";
                if (t.length === 1) return "*";
                if (n + .5) { r += n == 0 ? ">=" : n == -1 ? "<" : n == 1 ? "^" : n == 2 ? "~" : n > 0 ? "=" : "!="; for (var o = 1, f = 1; f < t.length; f++) o--, r += (typeof(y = t[f]))[0] == "u" ? "-" : (o > 0 ? "." : "") + (o = 2, y); return r }
                var h = [];
                for (f = 1; f < t.length; f++) {
                    var y = t[f];
                    h.push(y === 0 ? "not(" + j() + ")" : y === 1 ? "(" + j() + " || " + j() + ")" : y === 2 ? h.pop() + " " + h.pop() : a(y))
                }
                return j();

                function j() { return h.pop().replace(/^\((.+)\)$/, "$1") }
            },
            d = (t, n) => {
                if (0 in t) {
                    n = e(n);
                    var r = t[0],
                        o = r < 0;
                    o && (r = -r - 1);
                    for (var f = 0, h = 1, y = !0;; h++, f++) {
                        var j, M, O = h < t.length ? (typeof t[h])[0] : "";
                        if (f >= n.length || (M = (typeof(j = n[f]))[0]) == "o") return !y || (O == "u" ? h > r && !o : O == "" != o);
                        if (M == "u") { if (!y || O != "u") return !1 } else if (y)
                            if (O == M)
                                if (h <= r) { if (j != t[h]) return !1 } else {
                                    if (o ? j > t[h] : j < t[h]) return !1;
                                    j != t[h] && (y = !1)
                                }
                        else if (O != "s" && O != "n") {
                            if (o || h <= r) return !1;
                            y = !1, h--
                        } else {
                            if (h <= r || M < O != o) return !1;
                            y = !1
                        } else O != "s" && O != "n" && (y = !1, h--)
                    }
                }
                var D = [],
                    T = D.pop.bind(D);
                for (f = 1; f < t.length; f++) {
                    var F = t[f];
                    D.push(F == 1 ? T() | T() : F == 2 ? T() & T() : F ? d(F, n) : !T())
                }
                return !!T()
            },
            v = (t, n) => { var r = i.S[t]; if (!r || !i.o(r, n)) throw new Error("Shared module " + n + " doesn't exist in shared scope " + t); return r },
            l = (t, o) => {
                var r = t[o],
                    o = Object.keys(r).reduce((f, h) => !f || c(f, h) ? h : f, 0);
                return o && r[o]
            },
            s = (t, n) => { var r = t[n]; return Object.keys(r).reduce((o, f) => !o || !r[o].loaded && c(o, f) ? f : o, 0) },
            b = (t, n, r, o) => "Unsatisfied version " + r + " from " + (r && t[n][r].from) + " of shared singleton module " + n + " (required " + a(o) + ")",
            u = (t, n, r, o) => { var f = s(t, r); return w(t[r][f]) },
            m = (t, n, r, o) => { var f = s(t, r); return d(o, f) || typeof console < "u" && console.warn && console.warn(b(t, r, f, o)), w(t[r][f]) },
            p = (t, n, r, o) => { var f = s(t, r); if (!d(o, f)) throw new Error(b(t, r, f, o)); return w(t[r][f]) },
            S = (t, f, r) => {
                var o = t[f],
                    f = Object.keys(o).reduce((h, y) => d(r, y) && (!h || c(h, y)) ? y : h, 0);
                return f && o[f]
            },
            E = (t, n, r, o) => { var f = t[r]; return "No satisfying version (" + a(o) + ") of shared module " + r + " found in shared scope " + n + `.
Available versions: ` + Object.keys(f).map(h => h + " from " + f[h].from).join(", ") },
            x = (t, n, r, o) => { var f = S(t, r, o); if (f) return w(f); throw new Error(E(t, n, r, o)) },
            C = (t, n, r, o) => { typeof console < "u" && console.warn && console.warn(E(t, n, r, o)) },
            w = t => (t.loaded = 1, t.get()),
            g = t => function(n, r, o, f) { var h = i.I(n); return h && h.then ? h.then(t.bind(t, n, i.S[n], r, o, f)) : t(n, i.S[n], r, o, f) },
            B = g((t, n, r) => (v(t, r), w(l(n, r)))),
            $ = g((t, n, r, o) => n && i.o(n, r) ? w(l(n, r)) : o()),
            V = g((t, n, r, o) => (v(t, r), w(S(n, r, o) || C(n, t, r, o) || l(n, r)))),
            k = g((t, n, r) => (v(t, r), u(n, t, r))),
            P = g((t, n, r, o) => (v(t, r), m(n, t, r, o))),
            z = g((t, n, r, o) => (v(t, r), x(n, t, r, o))),
            R = g((t, n, r, o) => (v(t, r), p(n, t, r, o))),
            J = g((t, n, r, o, f) => !n || !i.o(n, r) ? f() : w(S(n, r, o) || C(n, t, r, o) || l(n, r))),
            K = g((t, n, r, o) => !n || !i.o(n, r) ? o() : u(n, t, r)),
            G = g((t, n, r, o, f) => !n || !i.o(n, r) ? f() : m(n, t, r, o)),
            H = g((t, n, r, o, f) => { var h = n && i.o(n, r) && S(n, r, o); return h ? w(h) : f() }),
            Y = g((t, n, r, o, f) => !n || !i.o(n, r) ? f() : p(n, t, r, o)),
            A = {},
            W = {
                2565: () => P("default", "@jupyter-widgets/base", [, [1, 4, 0, 0],
                    [1, 3, 0, 0],
                    [1, 2, 0, 0],
                    [1, 1, 1, 10], 1, 1, 1
                ]),
                4456: () => P("default", "react-dom", [1, 17, 0, 1]),
                5767: () => P("default", "@jupyterlab/notebook", [1, 3, 6, 1]),
                6271: () => P("default", "react", [1, 17, 0, 1])
            },
            U = { 612: [2565, 4456, 5767, 6271] };
        i.f.consumes = (t, n) => {
            i.o(U, t) && U[t].forEach(r => {
                if (i.o(A, r)) return n.push(A[r]);
                var o = y => { A[r] = 0, i.m[r] = j => { delete i.c[r], j.exports = y() } },
                    f = y => { delete A[r], i.m[r] = j => { throw delete i.c[r], y } };
                try {
                    var h = W[r]();
                    h.then ? n.push(A[r] = h.then(o).catch(f)) : o(h)
                } catch (y) { f(y) }
            })
        }
    })(), (() => {
        var e = (v, l, s, b) => {
                var u = document.createElement("link");
                u.rel = "stylesheet", u.type = "text/css";
                var m = p => {
                    if (u.onerror = u.onload = null, p.type === "load") s();
                    else {
                        var S = p && (p.type === "load" ? "missing" : p.type),
                            E = p && p.target && p.target.href || l,
                            x = new Error("Loading CSS chunk " + v + ` failed.
(` + E + ")");
                        x.code = "CSS_CHUNK_LOAD_FAILED", x.type = S, x.request = E, u.parentNode.removeChild(u), b(x)
                    }
                };
                return u.onerror = u.onload = m, u.href = l, document.head.appendChild(u), u
            },
            c = (v, l) => {
                for (var s = document.getElementsByTagName("link"), b = 0; b < s.length; b++) {
                    var u = s[b],
                        m = u.getAttribute("data-href") || u.getAttribute("href");
                    if (u.rel === "stylesheet" && (m === v || m === l)) return u
                }
                for (var p = document.getElementsByTagName("style"), b = 0; b < p.length; b++) {
                    var u = p[b],
                        m = u.getAttribute("data-href");
                    if (m === v || m === l) return u
                }
            },
            a = v => new Promise((l, s) => {
                var b = i.miniCssF(v),
                    u = i.p + b;
                if (c(b, u)) return l();
                e(v, u, l, s)
            }),
            d = { 997: 0 };
        i.f.miniCss = (v, l) => {
            var s = { 318: 1, 612: 1 };
            d[v] ? l.push(d[v]) : d[v] !== 0 && s[v] && l.push(d[v] = a(v).then(() => { d[v] = 0 }, b => { throw delete d[v], b }))
        }
    })(), (() => {
        var e = { 997: 0 };
        i.f.j = (d, v) => {
            var l = i.o(e, d) ? e[d] : void 0;
            if (l !== 0)
                if (l) v.push(l[2]);
                else {
                    var s = new Promise((p, S) => l = e[d] = [p, S]);
                    v.push(l[2] = s);
                    var b = i.p + i.u(d),
                        u = new Error,
                        m = p => {
                            if (i.o(e, d) && (l = e[d], l !== 0 && (e[d] = void 0), l)) {
                                var S = p && (p.type === "load" ? "missing" : p.type),
                                    E = p && p.target && p.target.src;
                                u.message = "Loading chunk " + d + ` failed.
(` + S + ": " + E + ")", u.name = "ChunkLoadError", u.type = S, u.request = E, l[1](u)
                            }
                        };
                    i.l(b, m, "chunk-" + d, d)
                }
        };
        var c = (d, v) => { var [l, s, b] = v, u, m, p = 0; if (l.some(E => e[E] !== 0)) { for (u in s) i.o(s, u) && (i.m[u] = s[u]); if (b) var S = b(i) } for (d && d(v); p < l.length; p++) m = l[p], i.o(e, m) && e[m] && e[m][0](), e[m] = 0 },
            a = self.webpackChunk_quantum_lab_widgets = self.webpackChunk_quantum_lab_widgets || [];
        a.forEach(c.bind(null, 0)), a.push = c.bind(null, a.push.bind(a))
    })(), i.nc = void 0;
    var Q = i(769);
    (_JUPYTERLAB = typeof _JUPYTERLAB > "u" ? {} : _JUPYTERLAB)["@quantum/lab-widgets"] = Q
})();