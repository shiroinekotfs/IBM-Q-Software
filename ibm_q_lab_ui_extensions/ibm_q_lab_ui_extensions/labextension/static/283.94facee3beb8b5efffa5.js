"use strict";
(self.webpackChunk_quantum_lab_ui = self.webpackChunk_quantum_lab_ui || []).push([
    [283], {
        83957: (P, h, l) => {
            l.d(h, {
                Z: () => E
            });
            var v = l(79830),
                s = l(84582);

            function m(i, g) {
                var f = -1,
                    x = (0, s.Z)(i) ? Array(i.length) : [];
                return (0, v.Z)(i, function(D, O, L) {
                    x[++f] = g(D, O, L)
                }), x
            }
            const E = m
        },
        38486: (P, h, l) => {
            l.d(h, {
                Z: () => E
            });
            var v = l(34840),
                s = l(53635);

            function m(i, g) {
                return (0, v.Z)((0, s.Z)(i, g), 1)
            }
            const E = m
        },
        53635: (P, h, l) => {
            l.d(h, {
                Z: () => g
            });
            var v = l(86205),
                s = l(10482),
                m = l(83957),
                E = l(13469);

            function i(f, x) {
                var D = (0, E.Z)(f) ? v.Z : m.Z;
                return D(f, (0, s.Z)(x, 3))
            }
            const g = i
        },
        85283: (P, h, l) => {
            l.r(h), l.d(h, {
                DocsPanel: () => Ce
            });
            var v = l(56271),
                s = l.n(v),
                m = l(19517),
                E, i, g = ["children"],
                f = s().forwardRef(function(e, a) {
                    var n = e.children,
                        o = (0, m._)(e, g);
                    return s().createElement(m.I, (0, m.a)({
                        width: 16,
                        height: 16,
                        viewBox: "0 0 16 16",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "currentColor",
                        ref: a
                    }, o), E || (E = s().createElement("path", {
                        d: "M13,14H3c-0.6,0-1-0.4-1-1V3c0-0.6,0.4-1,1-1h5v1H3v10h10V8h1v5C14,13.6,13.6,14,13,14z"
                    })), i || (i = s().createElement("path", {
                        d: "M10 1L10 2 13.3 2 9 6.3 9.7 7 14 2.7 14 6 15 6 15 1z"
                    })), n)
                }),
                x = l(99323);

            function D(t) {
                const {
                    url: e,
                    level: a,
                    onItemClick: n,
                    isActive: o
                } = {
                    level: 1,
                    isActive: !1,
                    ...t
                };
                return e && (0, x.xf)(e) ? s().createElement("a", {
                    href: e,
                    className: `doc-toc-item text-body-short-01 level-${a} hover:bg-hover-ui`,
                    target: "_blank"
                }, s().createElement("span", null, t.children), s().createElement(f, {
                    className: "block ml-8 text-text-03"
                })) : n ? s().createElement("button", {
                    className: `doc-toc-item text-body-short-01 focus-outline level-${a} hover:bg-hover-ui ${o?"active":""}`,
                    onClick: () => n(e)
                }, s().createElement("span", null, t.children)) : s().createElement("div", {
                    className: `doc-toc-item text-body-short-01 level-${a} hover:bg-hover-ui ${o&&"active"}`
                }, t.children)
            }
            var O = l(13787),
                L = l(53935),
                K = l(3557);

            function R(t) {
                const {
                    open: e,
                    level: a
                } = {
                    open: !1,
                    level: 1,
                    ...t
                }, [n, o] = (0, v.useState)(e);

                function r() {
                    const c = !n;
                    o(c), t.onClick && t.onClick(c)
                }
                return s().createElement(K.f, {
                    variant: !0
                }, s().createElement("button", {
                    className: `doc-toc-section flex items-center pr-16 py-8 w-full text-body-short-01 focus-outline level-${a} hover:bg-hover-ui`,
                    onClick: r
                }, s().createElement("span", null, t.children), s().createElement("span", {
                    className: "flex-1"
                }), s().createElement("span", {
                    className: "chevron p-8 flex items-center justify-center -my-8"
                }, n ? s().createElement(O.Z, null) : s().createElement(L.Z, null))))
            }
            var j = l(33607),
                p = l(10482),
                y = l(84582),
                _ = l(17510);

            function S(t) {
                return function(e, a, n) {
                    var o = Object(e);
                    if (!(0, y.Z)(e)) {
                        var r = (0, p.Z)(a, 3);
                        e = (0, _.Z)(e), a = function(d) {
                            return r(o[d], d, o)
                        }
                    }
                    var c = t(e, a, n);
                    return c > -1 ? o[r ? e[c] : c] : void 0
                }
            }
            const $ = S;
            var F = l(31978),
                G = l(37543),
                H = Math.max,
                V = Math.min;

            function X(t, e, a) {
                var n = t == null ? 0 : t.length;
                if (!n) return -1;
                var o = n - 1;
                return a !== void 0 && (o = (0, G.Z)(a), o = a < 0 ? H(n + o, 0) : V(o, n - 1)), (0, F.Z)(t, (0, p.Z)(e, 3), o, !0)
            }
            var z = $(X);
            const U = z;
            var Q = l(38652);

            function J(t, e, a) {
                for (var n = -1, o = t.length; ++n < o;) {
                    var r = t[n],
                        c = e(r);
                    if (c != null && (d === void 0 ? c === c && !(0, Q.Z)(c) : a(c, d))) var d = c,
                        T = r
                }
                return T
            }
            const Y = J;

            function k(t, e) {
                return t < e
            }
            const w = k;
            var q = l(63294);

            function ee(t) {
                return t && t.length ? Y(t, q.Z, w) : void 0
            }
            const te = ee;
            var ne = l(38486),
                ae = l(35872),
                le = Math.ceil,
                se = Math.max;

            function oe(t, e, a, n) {
                for (var o = -1, r = se(le((e - t) / (a || 1)), 0), c = Array(r); r--;) c[n ? r : ++o] = t, t += a;
                return c
            }
            const ce = oe;
            var re = l(11930),
                A = l(98251);

            function ie(t) {
                return function(e, a, n) {
                    return n && typeof n != "number" && (0, re.Z)(e, a, n) && (a = n = void 0), e = (0, A.Z)(e), a === void 0 ? (a = e, e = 0) : a = (0, A.Z)(a), n = n === void 0 ? e < a ? 1 : -1 : (0, A.Z)(n), ce(e, a, n, t)
                }
            }
            var ue = ie();
            const de = ue;

            function ve(t) {
                for (var e = -1, a = t == null ? 0 : t.length, n = 0, o = []; ++e < a;) {
                    var r = t[e];
                    r && (o[n++] = r)
                }
                return o
            }
            const N = ve;

            function B(t) {
                const e = t.map(n => ({
                    ...n,
                    children: []
                }));
                e.forEach((n, o) => {
                    const r = U(e.slice(0, o), c => c.level === n.level - 1);
                    r && r.children.push(n)
                });
                const a = te(t.map(n => n.level));
                return e.filter(n => n.level === a)
            }

            function C(t) {
                return (0, ne.Z)(t, e => {
                    const a = C(e.children);
                    return [(0, ae.Z)(e, "children"), ...a]
                })
            }

            function W(t, e) {
                return e.includes("index") ? t === e || t === e.slice(0, e.indexOf("index")) : t === e
            }

            function me(t, e) {
                const a = t.findIndex(c => W(c.url, e));
                if (a === -1) return [];
                const n = t[a],
                    r = de(1, n.level).map(c => U(t.slice(0, a + 1), d => d.level === c));
                return N(r)
            }
            var fe = l(26380);

            function he(t) {
                for (var e = -1, a = t == null ? 0 : t.length, n = {}; ++e < a;) {
                    var o = t[e];
                    n[o[0]] = o[1]
                }
                return n
            }
            const Ee = he;

            function b(t) {
                const {
                    nestedToc: e,
                    onItemClick: a,
                    display: n
                } = {
                    display: !1,
                    ...t
                }, [o, r] = (0, v.useState)({}), {
                    docPath: c
                } = (0, j.R)();
                (0, v.useEffect)(() => {
                    if (c) {
                        const M = me(C(e), c).map(d),
                            Z = e.map(d),
                            Ie = N((0, fe.Z)(M, Z));
                        r({
                            ...o,
                            ...Ee(Ie.map(Oe => [Oe, !0]))
                        })
                    }
                }, [c]);

                function d(u) {
                    return u.url ? `${u.url}-${u.title}` : u.title
                }

                function T(u, M) {
                    const Z = d(u);
                    r({
                        ...o,
                        [Z]: M
                    })
                }

                function I(u) {
                    return !!o[d(u)]
                }
                return s().createElement("ul", {
                    className: `toc-tree mb-16 ${n?"":"hidden"}`
                }, e.map(u => s().createElement("li", {
                    key: d(u)
                }, u.children.length === 0 ? s().createElement(D, {
                    level: u.level - 1,
                    url: u.url,
                    path: u.path,
                    onItemClick: a,
                    isActive: c && W(u.url, c)
                }, u.title) : s().createElement(s().Fragment, null, s().createElement(R, {
                    level: u.level - 1,
                    onClick: M => T(u, M),
                    open: I(u)
                }, u.title), s().createElement(b, {
                    nestedToc: u.children,
                    onItemClick: a,
                    display: I(u)
                })))))
            }
            var ge = l(57929),
                xe = l(94417),
                Te = l(65828);

            function De() {
                const t = (0, Te.O)(),
                    e = (0, xe.m)();
                return (0, ge.useQuery)("doc/globalToc", async() => await e.Documentation.getGlobalToc({
                    baseURL: t.documentationUrl
                }))
            }

            function Pe(t) {
                const {
                    data: e,
                    ...a
                } = De(), [n, o] = (0, v.useState)(e);
                return (0, v.useEffect)(() => {
                    if (!e) return;
                    const r = B(e),
                        c = r.find(T => T.path === `app/${t}`);
                    c && o(C(c.children));
                    const d = r.find(T => T.path === "app/default");
                    d && o(C(d.children))
                }, [e]), {
                    ...a,
                    data: n
                }
            }
            var Me = l(96110);

            function Ce(t) {
                const {
                    openDocItem: e
                } = t, {
                    isLoading: a,
                    data: n,
                    isError: o,
                    error: r
                } = Pe("lab"), c = n ? B(n) : [], [d, T] = (0, v.useState)(!0);
                return a ? s().createElement("div", {
                    className: "flex justify-center mt-48"
                }, s().createElement(Me.Z, {
                    small: !0,
                    withOverlay: !1
                })) : o ? s().createElement("div", null, "Error: ", r.message) : s().createElement("div", {
                    className: "jp-ibmq-DocsPanel overflow-y-auto"
                }, s().createElement("h3", {
                    className: "text-productive-heading-03 my-32 mx-16"
                }, "Lab docs & tutorials"), s().createElement("div", {
                    className: "px-16"
                }, s().createElement("ul", {
                    className: "mb-16"
                }, s().createElement("li", null, s().createElement(R, {
                    open: d,
                    onClick: I => T(I)
                }, "Getting started"), d && s().createElement("ul", null, s().createElement(D, {
                    level: 2,
                    onItemClick: () => e("tutorials")
                }, "Tutorials")))), s().createElement(b, {
                    nestedToc: c,
                    onItemClick: e,
                    display: !0
                })))
            }
        },
        99323: (P, h, l) => {
            l.d(h, {
                Gx: () => E,
                Nn: () => s,
                ni: () => m,
                xf: () => v
            });

            function v(i) {
                return /^https?:\/\//.test(i)
            }

            function s(i) {
                return i.indexOf("#") >= 0
            }

            function m(i) {
                return s(i) ? i.split("#").pop() : null
            }

            function E(i, g) {
                const f = i.indexOf("#");
                if (f < 0 || f > 0 && i.charAt(f - 1) === "/") return !1;
                const x = i.substring(0, f);
                return g.includes(x)
            }
        },
        33607: (P, h, l) => {
            l.d(h, {
                R: () => E
            });
            var v = l(18609),
                s = l(24741),
                m = l(77099);

            function E() {
                const i = (0, v.I0)(),
                    g = (0, v.v9)(m.cH);

                function f(x) {
                    i((0, s.W7)(x))
                }
                return {
                    docPath: g,
                    setDocPath: f
                }
            }
        }
    }
]);