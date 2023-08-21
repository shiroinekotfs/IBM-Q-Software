"use strict";
(self.webpackChunk_quantum_lab_widgets = self.webpackChunk_quantum_lab_widgets || []).push([
    [612], {
        4612: (j, A, o) => {
            o.r(A), o.d(A, { default: () => Q });
            var I = o(2565);
            const b = "4.0.28",
                p = "@quantum/lab-widgets";
            var M = o(5767);
            const v = class extends I.DOMWidgetModel { defaults() { return {...super.defaults(), _model_name: v.model_name, _model_module: v.model_module, _model_module_version: v.model_module_version, _view_name: v.view_name, _view_module: v.view_module, _view_module_version: v.view_module_version } } };
            let h = v;
            h.model_name = "CircuitComposerModel", h.model_module = p, h.model_module_version = b, h.view_name = "CircuitComposerView", h.view_module = p, h.view_module_version = b, h.serializers = {...I.DOMWidgetModel.serializers, circuit: { serialize: t => JSON.stringify(t), deserialize: t => JSON.parse(t) } };
            var U = o(6551);

            function _() { return window.Jupyter !== void 0 }
            const L = -1;

            function O(t) { return _() ? k() : J(t) }

            function k() {
                const t = V(),
                    e = window.Jupyter.notebook;

                function n(l) { return l === L ? void 0 : e.get_cell(l) }

                function i(l = "code") { return e.insert_cell_below(l) }

                function d(l) { return e.find_cell_index(l) ? ? L }

                function a(l, r, u) { t.addListener(l, r, u) }

                function c(l) { t.removeAllListeners(l) }

                function m(l, r) { l.set_text(r) }

                function f(l) { return l.cell_id }
                return { getCellAtIndex: n, insertCellBelow: i, findCellIndex: d, addCellListener: a, removeAllCellListeners: c, setCellText: m, getCellId: f }
            }

            function J(t) {
                const e = T(t);
                let n;
                i();
                async function i() { n = (await Promise.resolve().then(o.t.bind(o, 5767, 23))).NotebookActions }

                function d() { return t.currentWidget ? .content ? ? void 0 }

                function a(s) { const C = d(); return C && C.model ? C.model.cells.get(s) : null }

                function c() { const s = d(); return s ? (n.insertBelow(s), t.activeCell ? .model ? ? null) : null }

                function m(s) {
                    const C = d();
                    if (!C || !C.model) return L;
                    const S = C.model.cells;
                    for (let x = 0; x < S.length; x++)
                        if (S.get(x) === s) return x;
                    return L
                }

                function f(s, C) { s.value.text = C }

                function l(s) { return s.id }

                function r(s, C, S) { e.addListener(s, C) }

                function u(s) { e.removeAllListeners() }
                return { getCellAtIndex: a, insertCellBelow: c, findCellIndex: m, addCellListener: r, removeAllCellListeners: u, setCellText: f, getCellId: l }
            }

            function V() {
                let t = e();

                function e() { return { created: w("create.Cell", "created"), selected: w("select.Cell", "selected"), deleted: w("delete.Cell", "deleted") } }

                function n(d, a, c) { t[d].addListener(a, c) }

                function i(d) { t.created.removeAllListeners(d), t.selected.removeAllListeners(d), t.deleted.removeAllListeners(d), t = e() }
                return { addListener: n, removeAllListeners: i }
            }

            function w(t, e) {
                let n = [];

                function i(c, m) { n.length === 0 && m.events.on(t, a), n.push(c) }

                function d(c) { n = [], c.events.of(t, a) }

                function a(c, m) { for (const f of n) f({ type: e, cellId: m.cell.cell_id, cellIndex: m.cell.index }) }
                return { addListener: i, removeAllListeners: d }
            }

            function T(t) {
                let e = n();

                function n() { return { created: [], moved: [], deleted: [] } }

                function i() { let l = 0; for (const r in e) Object.prototype.hasOwnProperty.call(e, r) && (l += e[r] ? .length ? ? 0); return l }

                function d() { const l = t.currentWidget; return l && l.model ? l.model.cells.changed.connect(f) : !1 }

                function a() { const l = t.currentWidget; return l && l.model ? l.model.cells.changed.disconnect(f) : !1 }

                function c(l, r) { i() === 0 && d(), e[l].push(r) }

                function m() { a(), e = n() }

                function f(l, r) {
                    let u;
                    switch (r.type) {
                        case "add":
                            u = "created";
                            break;
                        case "move":
                            u = "moved";
                            break;
                        case "remove":
                            u = "deleted";
                            break;
                        default:
                            return
                    }
                    for (const s of e[u]) s({ type: u, cellId: u === "deleted" ? r.oldValues[0].id : r.newValues[0].id, cellIndex: r.newIndex })
                }
                return { addListener: c, removeAllListeners: m }
            }
            var D = o(4456),
                W = o.n(D),
                E = o(6271),
                g = o.n(E),
                z = o(4001),
                B = o(9709);

            function P(t) { return (0, z.Z)((0, B.XR)(n => ({ qasm: t.qasm, editable: t.editable, syncCodeCell: t.syncCodeCell, setQasm: i => { n({ qasm: i }) }, setSyncCodeCell: i => { n({ syncCodeCell: i }) } }))) }
            const R = g().lazy(async() => ({ default: (await Promise.all([o.e(210), o.e(292)]).then(o.bind(o, 2540))).ComposerView })),
                N = -1;

            function X(t) { return g().createElement(E.Suspense, { fallback: g().createElement("div", null) }, g().createElement(R, {...t })) }
            class y extends I.DOMWidgetView {
                constructor(e) { super(e), this.codeCellIndex = N, this.cellUtils = O(y.NotebookTracker) }
                render() { super.render(), this.codeCellIndex = this.model.get("qiskit_code_cell_index"), this.codeCell = this.getCodeCellByIndex(this.codeCellIndex), this.store = P({ qasm: this.model.get("circuit"), syncCodeCell: this.codeCell !== void 0, editable: this.model.get("editable") }), this.store.subscribe(e => e.qasm, e => { this.model.set("circuit", e), this.touch(), this.store.getState().syncCodeCell && this.updateCodeCellContent(), this.saveWidgetState() }), this.store.subscribe(e => e.syncCodeCell, e => { e && (this.codeCell || (this.codeCell = this.cellUtils.insertCellBelow(), this.addCodeCellListeners(), this.updateCodeCellIndex())), this.updateCodeCellContent() }), W().render(g().createElement(X, { store: this.store }), this.el), this.codeCell && this.addCodeCellListeners(), this.saveWidgetState() }
                remove() { return W().unmountComponentAtNode(this.el), this.store.destroy(), super.remove() }
                addCodeCellListeners() { this.codeCell && (this.cellUtils.addCellListener("created", () => this.onCodeCellCreated(), this.codeCell), this.cellUtils.addCellListener("deleted", e => this.onCellDeleted(e), this.codeCell), _() ? this.cellUtils.addCellListener("selected", e => this.onCodeCellSelected(e), this.codeCell) : this.cellUtils.addCellListener("moved", e => this.onCodeCellMoved(e), this.codeCell)) }
                removeCodeCellListeners() { this.codeCell && this.cellUtils.removeAllCellListeners(this.codeCell) }
                updateCodeCellContent() {
                    if (!this.codeCell) return;
                    const { syncCodeCell: e, qasm: n } = this.store.getState(), i = `# This code is being generated automatically by the IBM Quantum Circuit Composer widget.
# It changes in every update of the widget, so any modifications done in this cell will be lost.
# State: ${e?"synchronized":"disconnected"}

${(0,U.uC)(n)}`;
                    this.cellUtils.setCellText(this.codeCell, i)
                }
                onCellDeleted(e) {
                    if (!this.codeCell) return;
                    this.cellUtils.getCellId(this.codeCell) === e.cellId ? (this.removeCodeCellListeners(), this.codeCell = void 0, this.codeCellIndex = N, this.store.getState().setSyncCodeCell(!1)) : this.codeCellIndex = this.cellUtils.findCellIndex(this.codeCell), this.saveCodeCellIndex(), this.saveWidgetState()
                }
                onCodeCellSelected(e) {
                    if (!this.codeCell) return;
                    this.cellUtils.getCellId(this.codeCell) === e.cellId && this.updateCodeCellIndex()
                }
                onCodeCellMoved(e) { this.updateCodeCellIndex() }
                onCodeCellCreated() { this.updateCodeCellIndex() }
                updateCodeCellIndex() {!this.codeCell || (this.codeCellIndex = this.cellUtils.findCellIndex(this.codeCell), this.saveCodeCellIndex(), this.saveWidgetState()) }
                getCodeCellByIndex(e) { return e === N ? void 0 : this.cellUtils.getCellAtIndex(e) }
                saveCodeCellIndex() { this.model.set("qiskit_code_cell_index", this.codeCellIndex), this.touch() }
                saveWidgetState() { _() && this.model.widget_manager.saveWidgetsAction.handler() }
            }
            const Q = { id: "ibm-q-lab-widgets-extension:plugin", requires: [I.IJupyterWidgetRegistry, M.INotebookTracker], activate: $, autoStart: !0 };

            function $(t, e, n) { e.registerWidget({ name: p, version: b, exports: { CircuitComposerModel: h, CircuitComposerView: y } }), y.NotebookTracker = n }
        }
    }
]);