(self.webpackChunk_quantum_lab_widgets = self.webpackChunk_quantum_lab_widgets || []).push([
    [292], {
        2540: (L, h, t) => {
            "use strict";
            t.r(h), t.d(h, { ComposerView: () => b });
            var r = t(8822),
                m = t(8009),
                a = t(6271),
                e = t.n(a),
                E = t(2629),
                C = t(1449),
                A = t.n(C);
            const M = e().lazy(async() => (console.log("loading composer"), { default: (await Promise.resolve().then(t.bind(t, 8822))).Composer })),
                v = e().lazy(async() => (console.log("loading composer readonly"), { default: (await Promise.resolve().then(t.bind(t, 8822))).ComposerQasmReadOnly })),
                y = (0, C.without)(r.allComposerFeatures, "inspect", "phaseDisk");

            function b(o) { const { store: s } = o; return (0, m.oR)(s, n => n.editable) ? e().createElement(D, {...o }) : e().createElement(O, {...o }) }

            function O(o) { const { store: s } = o, d = (0, m.oR)(s, i => i.qasm), l = g() === "light" ? r.themeLight : r.themeDark; return e().createElement("div", { className: "composer-widget" }, e().createElement(a.Suspense, { fallback: e().createElement("div", null) }, e().createElement(v, { qasm: d, theme: l, viewport: { overflow: "auto" }, className: "grid" }))) }

            function D(o) {
                const { store: s } = o, n = g() === "light" ? r.themeLight : r.themeDark, l = (0, m.oR)(s, c => c.setQasm), i = (0, m.oR)(s, c => c.syncCodeCell), P = (0, m.oR)(s, c => c.setSyncCodeCell), [u, R] = (0, r.useComposerQasmState)({ qasm: s.getState().qasm });
                (0, a.useEffect)(() => { l(u.qasm) }, [u.qasm, l]);
                const p = (0, a.useCallback)(c => { P(c === !0) }, []),
                    f = "sync";
                return e().createElement("div", { className: "composer-widget" }, e().createElement("div", { style: { height: 400 }, className: "border-solid border-2 border-ui-02" }, e().createElement(a.Suspense, { fallback: e().createElement("div", null) }, e().createElement(M, { theme: n, state: u, dispatch: R, features: y, initialCatalogView: "collapsed" }))), e().createElement("div", { className: "flex items-center gap-8 mt-8 mb-16" }, e().createElement(E.__.Root, { htmlFor: f }, "Create a cell and synchronize the circuit qiskit code output"), e().createElement(E.rs, { id: f, size: "small", checked: i, onCheckedChange: p })))
            }

            function g() {
                const [o, s] = (0, a.useState)("light");
                return (0, a.useEffect)(() => {
                    function d() {
                        const l = document.body.getAttribute("class") ? ? "";
                        if (l.includes("theme-mode-dark")) { s("dark"); return }
                        if (l.includes("theme-mode-light")) { s("light"); return }
                        s(document.body.getAttribute("data-jp-theme-light") === "false" ? "dark" : "light")
                    }
                    d();
                    const n = new MutationObserver(() => { d() });
                    return n.observe(document.body, { subtree: !1, childList: !1, attributes: !0, attributeFilter: ["data-jp-theme-light", "class"] }), () => n.disconnect()
                }, []), o
            }
        },
        660: () => {}
    }
]);