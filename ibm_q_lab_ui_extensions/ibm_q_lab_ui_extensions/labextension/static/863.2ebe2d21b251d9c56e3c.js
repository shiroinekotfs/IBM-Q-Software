"use strict";
(self.webpackChunk_quantum_lab_ui = self.webpackChunk_quantum_lab_ui || []).push([
    [863], {
        69863: (U, v, o) => {
            o.r(v), o.d(v, { DocsPage: () => Y });
            var i = o(56271),
                e = o.n(i),
                x = o(39564),
                P = o(57929),
                c = o(94417),
                E = o(65828);

            function d(n) {
                const s = (0, E.O)(),
                    r = (0, c.m)();
                return (0, P.useQuery)(["doc/pages", n], async() => await r.Documentation.getPage({ baseURL: s.documentationUrl, path: n }))
            }

            function D(n) { const { error: s } = n; let r; return s.status === 404 ? r = e().createElement("div", { className: "my-48" }, e().createElement("p", { className: "text-productive-heading-07" }, "404"), e().createElement("p", { className: "text-productive-heading-05 mt-32" }, "Page not found")) : r = e().createElement(e().Fragment, null, e().createElement("div", { className: "my-48" }, e().createElement("p", { className: "text-productive-heading-07" }, "Something went wrong"), e().createElement("p", { className: "text-productive-heading-03 my-32" }, "There was a problem loading the page"), e().createElement("p", { className: "text-body-short-01" }, "Try again later"))), e().createElement("div", { className: "flex-1 flex flex-col items-center justify-center" }, e().createElement("div", { className: "text-center" }, r)) }
            var L = o(17273),
                I = o(16252),
                y = o(5012),
                b = o(47500);

            function f(n, s) { return n.startsWith(s) ? n.substring(s.length) : n }

            function O(n) { return n.startsWith("/iql") || n.startsWith("iql") || n.startsWith("/lab/docs") }

            function A(n) {
                const { previous: s, next: r } = n, t = (0, b.T)(), l = C => {
                    const W = f(C, "/lab/docs");
                    t.execute(I.E.open, { path: `/${y.PathExt.normalize(W)}` })
                };
                let m;
                s && O(s.url) && (m = e().createElement(L.Z, { kind: "tertiary", className: "mb-16", onClick: () => l(s.url) }, "Previous: ", s.title));
                let a;
                return r && O(r.url) && (a = e().createElement(L.Z, { kind: "tertiary", className: "mb-16", onClick: () => l(r.url) }, "Next: ", r.title)), e().createElement("div", { className: "flex md:items-center border-ui-02 border-t mt-40 py-40 flex-col-reverse md:flex-row" }, m, e().createElement("div", { className: "flex-1 px-16 hidden md:block" }), a)
            }
            var N = o(99323),
                w = o(14456),
                B = o.n(w),
                S = o(48325);

            function $(n) { const { previewImageUrl: s, onPreviewClose: r } = n; if (!s) return null; const t = e().createElement(S.Z, { open: !!s, passiveModal: !0, onRequestClose: r, className: "doc-preview-image-modal" }, e().createElement("div", { className: "text-center" }, e().createElement("img", { className: "inline", src: s }))); return B().createPortal(t, document.body) }

            function M(n, s) {
                const r = n.charAt(0) === "#" ? n.substring(1) : n,
                    t = document.getElementById(r),
                    l = document.querySelector(s);
                if (t && l) {
                    l.scrollTo(0, 0);
                    const { top: m } = t.getBoundingClientRect(), { top: a } = l.getBoundingClientRect();
                    l.scrollTo(0, m - a)
                }
            }
            var j = o(47909);

            function Z() {
                const n = (0, j.V)();

                function s(r) { let t = f(r, "/docs"); if (t = f(t, "/composer/docs"), t = f(t, "/lab/docs"), t = f(t, "/admin/docs"), t = f(t, "/services/docs"), t = f(t, "/"), t.startsWith("iqx/")) return n.iqx.composerDocs({ path: t }); if (t.startsWith("admin/")) return n.iqx.adminDocs({ path: t }); if (t.startsWith("services/")) return n.iqx.servicesDocs({ path: t }); throw new Error("Unknown URL") }
                return { resolve: s }
            }
            var F = o(91569),
                K = o.n(F);

            function z(n) {
                const { page: s, path: r } = n, [t, l] = (0, i.useState)(null), m = (0, b.T)(), a = Z(), C = (0, E.O)();

                function W(g) {
                    if (g.ctrlKey || g.metaKey || g.button === 2) return;
                    const T = g.target;
                    if (T.tagName === "IMG" && !T.classList.contains("no-enlarge")) { g.preventDefault(), l(T.src); return }
                    const u = T.closest("a") ? .getAttribute("href");
                    if (u)
                        if (g.preventDefault(), (0, N.xf)(u) || u.startsWith("mailto:")) window.open(u, "_blank");
                        else if (u.startsWith("/_images")) window.open(`${C.documentationUrl.replace(/\/$/,"")}${u}`, "_blank");
                    else {
                        if (u.startsWith("#")) { M(u, ".doc-tab-container"); return }
                        if ((0, N.Gx)(u, r)) { M((0, N.ni)(u), ".doc-tab-container"); return }
                        let h = u;
                        if (h.startsWith("./") || h.startsWith("../")) {
                            const p = r.slice(-1) !== "/" ? y.PathExt.dirname(r) : r;
                            h = `/${y.PathExt.join(p,u)}`
                        }
                        if (h.startsWith("/iql") || h.startsWith("iql") || h.startsWith("/lab/docs")) {
                            const p = f(h, "/lab/docs");
                            m.execute(I.E.open, { path: `/${y.PathExt.normalize(p)}` });
                            return
                        }
                        try {
                            const p = a.resolve(h);
                            window.open(p, "_blank")
                        } catch {
                            const k = y.PathExt.join("/iql/", u);
                            m.execute(I.E.open, { path: `/${k}` })
                        }
                    }
                }
                const R = (0, i.useMemo)(() => K().sanitize(s.html), [s]);
                return (0, N.Nn)(r) && setTimeout(() => { M((0, N.ni)(r), ".doc-tab-container") }, 0), e().createElement("div", null, e().createElement("div", { onClick: W, dangerouslySetInnerHTML: { __html: R } }), e().createElement($, { previewImageUrl: t, onPreviewClose: () => l(null) }))
            }
            var G = o(13787);

            function H({ container: n }) {
                const [s, r] = (0, i.useState)(!1), t = (0, i.useMemo)(() => n && document.querySelector(n) || window, [n]);

                function l() { r((t ? .scrollTop || t ? .pageYOffset) > 800) }
                return (0, i.useEffect)(() => (t.addEventListener("scroll", l), () => { t.removeEventListener("scroll", l) }), []), s ? e().createElement(L.Z, { kind: "tertiary", renderIcon: G.Z, hasIconOnly: !0, size: "sm", className: "back-to-top", onClick: () => { t.scrollTo(0, 0) } }) : null
            }
            var Q = o(33607),
                V = o(87335);

            function Y(n) {
                const { path: s, onRedirect: r } = n, { setDocPath: t } = (0, Q.R)(), { isLoading: l, isError: m, data: a, error: C } = d(s);
                if (t(s), (0, V.GD)(a)) { r && r(a.redirectPath); return }
                const W = (0, i.useMemo)(() => a ? .meta ? .showFooterNavigation ? a ? .next !== null || a ? .previous !== null : !1, [a]),
                    R = (0, i.useMemo)(() => a ? .meta ? .fullWidth ? ? !1, [a]);
                return l ? e().createElement("div", { className: "flex h-full" }, e().createElement(x.Z, { description: "Loading....", className: "justify-center" })) : m ? e().createElement(D, { error: C }) : e().createElement("div", { className: `jp-ibmq-DocsPage ${R&&"full-width"}` }, e().createElement(z, { page: a, path: s }), W && e().createElement(A, { next: a.next, previous: a.previous }), e().createElement(H, { container: ".doc-tab-container" }))
            }
        },
        99323: (U, v, o) => {
            o.d(v, { Gx: () => P, Nn: () => e, ni: () => x, xf: () => i });

            function i(c) { return /^https?:\/\//.test(c) }

            function e(c) { return c.indexOf("#") >= 0 }

            function x(c) { return e(c) ? c.split("#").pop() : null }

            function P(c, E) { const d = c.indexOf("#"); if (d < 0 || d > 0 && c.charAt(d - 1) === "/") return !1; const D = c.substring(0, d); return E.includes(D) }
        },
        33607: (U, v, o) => {
            o.d(v, { R: () => P });
            var i = o(18609),
                e = o(24741),
                x = o(77099);

            function P() {
                const c = (0, i.I0)(),
                    E = (0, i.v9)(x.cH);

                function d(D) { c((0, e.W7)(D)) }
                return { docPath: E, setDocPath: d }
            }
        }
    }
]);