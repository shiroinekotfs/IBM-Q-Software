"use strict";
(self.webpackChunk_quantum_lab_ui = self.webpackChunk_quantum_lab_ui || []).push([
    [530], {
        14550: (_, j, a) => {
            a.d(j, { Bh: () => Ne, Cb: () => de, LU: () => Se, T4: () => ue, U2: () => Le, gz: () => te, o0: () => ce });
            var d = a(9072),
                e = a(83922),
                R = a.n(e),
                J = a(51968),
                P = a(7326),
                A = a(81690),
                S = a(61228),
                k = a(67814),
                w = a(60197),
                F = a(6411),
                B = a(46938),
                y = a(89695),
                U = a(30946),
                f = a(91554),
                G = a(54550),
                H = a(95973),
                V = a(5929),
                ye = a(92018),
                De = a(35883),
                Ie = a(32253),
                Te = a(86772),
                Pe = a(77707),
                oe = a(94280),
                L = a(25065),
                Y = a(84760),
                ee = a(97801);
            const K = "MMM dd, yyyy",
                Re = `${K} h:mm aa`;

            function W(N, I) { if ((0, d.Z)(N)) return I ? Me(N, I) : (0, J.Z)(N); if ((0, P.Z)(N)) return N; throw new Error("Invalid date object") }

            function Me(N, I) { const x = (0, A.Z)(N, I, new Date); return (0, S.Z)(x) && (0, k.Z)(x, I) !== N ? new Date("a") : x }

            function ie(N, I) { return N ? (0, k.Z)(W(N), I) : "" }

            function Ze(N) { return ie(N, K) }

            function ce(N) { return ie(N, Re) }

            function ue(N) { return N ? (0, w.Z)(W(N), { addSuffix: !0 }) : "" }

            function Je(N, I) {
                const x = W(N);
                switch (I) {
                    case "year":
                        return (0, F.Z)(x);
                    case "month":
                        return (0, B.Z)(x);
                    case "week":
                        return (0, y.Z)(x);
                    case "day":
                        return (0, U.Z)(x);
                    case "hour":
                        return (0, f.Z)(x);
                    case "minute":
                        return (0, G.Z)(x);
                    case "second":
                        return (0, H.Z)(x)
                }
            }

            function me(N, I) {
                const x = W(N);
                switch (I) {
                    case "year":
                        return (0, V.Z)(x);
                    case "month":
                        return (0, ye.Z)(x);
                    case "week":
                        return (0, De.Z)(x);
                    case "day":
                        return (0, Ie.Z)(x);
                    case "hour":
                        return (0, Te.Z)(x);
                    case "minute":
                        return (0, Pe.Z)(x);
                    case "second":
                        return (0, oe.Z)(x)
                }
            }

            function te(N, I = "day") { const x = W(N); return { initialDate: Je(x, I), endDate: me(x, I) } }

            function Se(N) { return isFinite(N) ? R()(N) : null }

            function de(N) { return (0, L.Z)(W(N)) }

            function ge(N, I = 1) {
                switch (N) {
                    case "year":
                        return { years: I };
                    case "month":
                        return { months: I };
                    case "week":
                        return { weeks: I };
                    case "day":
                        return { days: I };
                    case "hour":
                        return { hours: I };
                    case "minute":
                        return { minutes: I };
                    case "second":
                        return { seconds: I }
                }
            }

            function Le(N, I, x) { return (0, Y.Z)(W(N), ge(x, I)) }

            function Ne(N, I) { return (0, ee.Z)(W(N), W(I)) }
        },
        59530: (_, j, a) => {
            a.r(j), a.d(j, { JobPanel: () => on });
            var d = a(56271),
                e = a.n(d),
                R = a(39564),
                J = a(72926),
                P = a(3927),
                A = a(32201),
                S = a(17273),
                k = a(97054),
                w = a(41851);

            function F(r = null) { const [t, s] = (0, d.useState)(!1), [i, u] = (0, d.useState)(r); return { isOpen: t, item: i, open(n) { u(n), s(!0) }, close() { s(!1), u(null) } } }
            var B = a(57929);
            class y extends Error { constructor(t) { super(`#${t.code}: ${t.internalMessage}`), this.code = t.code, this.userMessage = t ? .userMessage, this.internalMessage = t ? .internalMessage, Object.setPrototypeOf(this, y.prototype) } }
            var U = a(94417);
            const f = null,
                G = "ERROR_CREATING_JOB",
                H = "ERROR_RUNNING_JOB",
                V = [G, "ERROR_VALIDATING_JOB", H, "ERROR_TRANSPILING_JOB", "CANCELLED"],
                ye = ["COMPLETED"],
                De = 1024 * 1024,
                Ie = "job-result";

            function Te(r) {
                const t = (0, U.m)();
                return (0, B.useQuery)([Ie, { result: r }], async({ queryKey: i }) => {
                    const u = i[1].result;
                    if (!u || ![...ye, H].includes(u.status)) return null;
                    if ((u.summaryData ? .size ? .output ? ? 0) >= De) throw new y({ code: "jobs.tooBig" });
                    const n = await t.IBMQ.Jobs.getQObjectResultFromStorage(u.id);
                    if (u.private && u.hubInfo) {
                        const c = u.hubInfo.hub ? .name,
                            v = u.hubInfo.group ? .name,
                            o = u.hubInfo.project ? .name;
                        await t.IBMQ.Jobs.markJobResultAsRead(c, v, o, u.id)
                    }
                    return n
                })
            }
            var Pe = a(35441);

            function oe(r) { navigator.clipboard.writeText(r) }
            var L = a(90459),
                Y = a(17483),
                ee = a(13469),
                K = a(13545);
            const Oe = (0, d.forwardRef)((r, t) => {
                const { status: s, buttonTexts: i, onRequestSubmit: u, ...l } = r, [n, c] = (0, d.useState)(s), [v, o] = (0, d.useState)("inactive");

                function E(b) {
                    switch (b) {
                        case "initial":
                            return "inactive";
                        case "processing":
                            return "active";
                        case "success":
                            return "finished";
                        case "error":
                        case "canceled":
                        default:
                            return "error"
                    }
                }(0, d.useEffect)(() => c(s), [s]), (0, d.useEffect)(() => {
                    const b = E(n);
                    o(b)
                }, [n]);
                const m = async() => {
                    c("processing");
                    try {
                        const b = await u();
                        c(b)
                    } catch { c("error") }
                };

                function p(b) {
                    switch (b) {
                        case "active":
                            return i[1];
                        case "finished":
                            return i[2];
                        case "error":
                            return n === "canceled" ? "Canceled" : "Error";
                        default:
                            return i[0]
                    }
                }
                return e().createElement(S.Z, { ref: t, disabled: s !== "initial", ...l, onClick: m }, s === "initial" ? e().createElement("span", null, i[0]) : e().createElement(R.Z, { className: "text-body-short-01", description: p(v), status: v }))
            });
            Oe.defaultProps = { kind: "primary", status: "initial", buttonTexts: ["Save", "Saving...", "Saved"] };
            var Re = a(15794),
                W = a.n(Re),
                Me = a(14456),
                ie = a.n(Me);
            const Ze = W()("300");

            function ce(r) {
                const { open: t, title: s, danger: i, shouldSubmitOnEnter: u, className: l, primaryButtonTexts: n, children: c, onRequestAction: v, onClose: o, ...E } = r, [m, p] = (0, d.useState)(t), [b, g] = (0, d.useState)("initial"), C = (0, d.useRef)(!1), T = (0, d.useRef)();
                (0, d.useEffect)(() => { t && (C.current = !1, g("initial")), p(t) }, [t]);
                const M = () => (b === "processing" ? (C.current = !0, g("canceled"), setTimeout(() => o(), Ze)) : o(), !0),
                    O = async() => { g("processing"); let Q; try { await v(), Q = C.current ? "canceled" : "success" } catch { Q = "error" } return setTimeout(() => o(), Ze), Q },
                    re = Q => { Q.key === "Enter" && u && T.current.click() };

                function X(Q) { return (0, ee.Z)(c) ? c.find(h => h.type === Q) : c ? .type === Q ? c : void 0 }

                function le() { if (!c) return e().createElement(K.fe, null); const h = ((0, ee.Z)(c) ? c : [c]).filter(Z => Z.type !== K.xB && Z.type !== K.mz); return e().createElement(K.fe, null, h) }
                const $ = X(K.xB) ? ? e().createElement(K.xB, null, e().createElement("p", { className: "bx--modal-header__heading" }, s)),
                    pe = X(K.fe) ? ? le(),
                    Ke = X(K.mz) ? ? e().createElement(K.mz, null, e().createElement(S.Z, { kind: "secondary", onClick: M }, "Cancel"), e().createElement(Oe, { ref: T, kind: i ? "danger" : "primary", status: b, buttonTexts: n, onRequestSubmit: O })),
                    be = e().createElement(K.ZP, { open: m, className: `jp-ibmq-AsyncActionModal ${l}`, onClose: M, onKeyDown: re, ...E }, $, pe, Ke);
                return ie().createPortal(be, document.body)
            }
            ce.defaultProps = { open: !1, title: "", danger: !1, shouldSubmitOnEnter: !0, size: "sm", primaryButtonTexts: ["Save", "Saving...", "Saved"], onClose: () => {} };

            function ue(r) {
                const { job: t, open: s, onJobDeleted: i, onClose: u } = r, [l, n] = (0, d.useState)(s), c = (0, U.m)(), { showNotification: v } = (0, Y.z)(), o = t ? t.name || t.id : "";
                (0, d.useEffect)(() => n(s), [s]);
                const E = async() => { if (!t) return !1; try { return await c.Runtime.Jobs.deleteJob(t.id), i ? .(), v({ kind: "success", title: "", subtitle: "Job was successfully deleted" }), !0 } catch (m) { return console.log(m), v({ kind: "error", title: "Job not deleted", subtitle: m.message }), !1 } };
                return e().createElement(ce, { open: l, danger: !0, title: "Delete job", primaryButtonTexts: ["Delete", "Deleting...", "Deleted"], onRequestAction: E, onClose: u }, e().createElement("p", { className: "text-body-short-01 pb-32" }, "Are you sure you want to delete the job ", e().createElement("span", { className: "font-600" }, o), " ?"))
            }
            var Je = a(79956),
                me = a(68707),
                te = a(57142),
                Se = a(66118),
                de = a(58615),
                ge = a(76184),
                Le = a(58548),
                Ne = a(80907);

            function N(r, t) { return r.toLowerCase().includes(t.toLowerCase()) }
            var I = a(10181);
            const x = "jp-ibmq-TagsInput";

            function we(r) {
                const { label: t, tags: s, availableTags: i, placeholder: u, className: l, onTagsChanged: n } = r, [c, v] = (0, d.useState)(!1), [o, E] = (0, d.useState)(0), [m, p] = (0, d.useState)(""), b = (0, d.useRef)(null), g = (0, d.useRef)(null), [C] = (0, I.O)(() => v(!1)), [T, M] = (0, d.useState)(!1), [O, re] = (0, d.useState)([]);
                (0, d.useEffect)(() => {
                    const h = m.length > 0 && !(0, de.Z)(i, m) && !(0, de.Z)(s, m);
                    M(h)
                }, [i, s, m]), (0, d.useEffect)(() => {
                    const h = (0, te.Z)(i, s);
                    m.trim().length === 0 ? re(h) : re(h.filter(Z => N(Z, m)))
                }, [i, s, m]), (0, d.useEffect)(() => {
                    const h = T ? O.length + 1 : O.length;
                    E((0, ge.Z)(o, 0, h - 1))
                }, [O.length, T]);

                function X(h) {
                    if (!!b.current) {
                        if (h.key === "ArrowDown" || h.key === "ArrowUp") {
                            h.preventDefault();
                            const Z = h.key === "ArrowDown" ? 1 : -1,
                                he = T ? O.length + 1 : O.length;
                            E((0, ge.Z)(o + Z, 0, he - 1)), le(o);
                            return
                        }
                        if (h.key === "Enter") { h.preventDefault(), h.stopPropagation(), be(o), p(""); return }
                        if (h.key === "Escape") { h.preventDefault(), h.stopPropagation(), pe(); return }
                        h.key === "Backspace" && b.current.selectionStart === b.current.selectionEnd && b.current.selectionStart === 0 && n((0, Le.Z)(s))
                    }
                }

                function le(h) {
                    const Z = g.current;
                    if (!Z) return;
                    Z.children.item(h) ? .scrollIntoView({ block: "center" })
                }

                function $() { E(0), b.current ? .focus(), v(!0) }

                function pe() { v(!1), C.current ? .focus() }

                function Ke(h) { n((0, Ne.Z)(s, h)), b.current ? .focus() }

                function be(h) {
                    if (T && h === 0) { n([...s, m]), p(""), b.current ? .focus(); return }
                    const Z = T ? h - 1 : h,
                        he = O[Z];
                    he && (n([...s, he]), b.current ? .focus())
                }
                const Q = s.map((h, Z) => e().createElement(A.Z, { key: h + Z, filter: !0, title: h, type: "blue", className: "mr-4 mb-4", onClose: () => Ke(h) }, h));
                return e().createElement("div", { ref: C, tabIndex: 0 }, e().createElement("label", { className: `${x}-label text-12 pb-8 pt-12 block` }, t), e().createElement("div", { className: [`${x}-input-container`, "flex text-body-short-01 items-center focus-within-outline relative border-b", `${!c&&"overflow-hidden"}`].join(" "), onClick: () => b.current.focus }, e().createElement("div", { className: "p-16 flex items-center flex-wrap w-full" }, Q, e().createElement("input", { ref: b, value: m, placeholder: u, type: "text", className: `${x}-input flex-1 outline-none h-24 ${l}`, style: { minWidth: "130px" }, onChange: h => p(h.target.value), onKeyDown: X, onFocus: $ })), c && e().createElement("div", { ref: g, className: `${x}-options-container absolute w-full overflow-y-auto z-10`, style: { maxHeight: "200px", top: "calc(100% + 1px)" } }, T && e().createElement("button", { className: [`${x}-option`, "block px-16 py-8 w-full text-left focus-outline", `${o===0&&x+"-option-highlight"}`].join(" "), onMouseMove: () => E(0), onClick: () => be(0) }, 'Create new tag "', m, '"'), O.map((h, Z) => e().createElement("button", { key: h + Z, className: ["block px-16 py-8 w-full text-left focus-outline", `${o===(T?Z+1:Z)&&x+"-option-highlight"}`].join(" "), onMouseMove: () => E(T ? Z + 1 : Z), onClick: () => be(T ? Z + 1 : Z) }, h)))))
            }
            we.defaultProps = { label: null, tags: [], availableTags: [], placeholder: "Add or search tags...", className: "", onTagsChanged: () => {} };

            function Ae(r) {
                const { open: t, job: s, onJobTagsChanged: i, onClose: u } = r, l = (0, U.m)(), [n, c] = (0, d.useState)(t), [v, o] = (0, d.useState)((0, L.JB)(s ? .tags || []) ? ? []), { showNotification: E } = (0, Y.z)(), m = [];
                (0, d.useEffect)(() => c(t), [t]), (0, d.useEffect)(() => o((0, L.JB)(s ? .tags || []) ? ? []), [s]);
                const p = async() => {
                    const b = s ? .tags,
                        g = ct(b, v);
                    if (!s || (0, Je.Z)((0, me.Z)(g), (0, me.Z)(b))) return !1;
                    try { return await l.Runtime.Jobs.updateTags(s.id, s.instance, g), E({ kind: "success", title: "", subtitle: "Job was successfully tagged" }), i ? .(s, { id: s.id, tags: g }), !0 } catch (C) { return E({ kind: "error", title: "Job not tagged", subtitle: C instanceof Error ? C.message : "" }), !1 }
                };
                return e().createElement(ce, { open: n, className: "jp-ibmq-JobTagsModal", title: "Job tags", selectorPrimaryFocus: ".TagsInput", onRequestAction: p, onClose: u }, e().createElement("p", { className: "text-body-short-01 my-8" }, "Assign tags by choosing them or creating new ones in the field below."), e().createElement(we, { label: "Tags", tags: v, availableTags: m, onTagsChanged: o, className: "TagsInput" }))
            }

            function ct(r, t) {
                const s = (0, L.JB)(r || []),
                    i = (0, te.Z)(s, t),
                    u = (0, te.Z)(t, s);
                return (0, Se.Z)([...(0, te.Z)(r, i), ...u])
            }
            var je = a(44911),
                Be = a(56464),
                D = a(14550);

            function ut(r) { const { result: t } = r, s = () => t.summaryData ? .summary ? .qobj_config ? .shots ? ? null, i = () => t.summaryData ? .summary ? .num_circuits ? ? null; return e().createElement("div", { className: "text-body-short-01 space-y-16" }, e().createElement("div", null, e().createElement("div", { className: "text-label-01 text-text-05 mb-4" }, "Created on"), e().createElement("div", null, (0, D.o0)(t.creationDate))), e().createElement("div", null, e().createElement("div", { className: "text-label-01 text-text-05 mb-4" }, "Instance"), e().createElement("div", null, (0, Be.En)(t.hubInfo))), e().createElement("div", null, e().createElement("div", { className: "text-label-01 text-text-05 mb-4" }, "Run mode"), e().createElement("div", null, (0, L.w9)(t.runMode))), e().createElement("div", null, e().createElement("div", { className: "text-label-01 text-text-05 mb-4" }, "# of shots"), e().createElement("div", null, s() || "N/A")), e().createElement("div", null, e().createElement("div", { className: "text-label-01 text-text-05 mb-4" }, "# of circuits"), e().createElement("div", null, i() || "N/A")), t.name && e().createElement("div", null, e().createElement("div", { className: "text-label-01 text-text-05 mb-4" }, "Id"), e().createElement("div", null, t.id)), t.private && e().createElement("div", null, e().createElement("div", { className: "text-label-01 text-text-05 mb-4" }, "Private"), e().createElement("div", null, "Yes"), e().createElement("div", { className: "text-label-01" }, "Private jobs are removed from the database after being opened or after 48 hours"))) }
            var xe = a(17956),
                z = a(53635),
                mt = a(45233),
                dt = a(51195),
                Et = a(99302),
                ft = a(43237),
                vt = a(75228),
                pt = a(46414),
                bt = a(27877),
                ht = a(77751),
                gt = a(1493),
                We = a(51504);

            function Nt({ active: r, payload: t, label: s }) { if (r && t && t.length) { const i = (0, We.y)(); return e().createElement("div", { className: "whitespace-nowrap text-body-short-01 border-ui-03" }, e().createElement("div", { className: "bg-ui-03 p-8 border-decorative-01" }, s), e().createElement("div", { className: "bg-ui-01 py-12 px-8" }, e().createElement("div", { className: "flex items-center" }, e().createElement("span", { className: "tooltip-dot", style: { backgroundColor: i[1] } }), e().createElement("div", null, "Probabilities: ", e().createElement("span", { className: "font-600" }, t[0].value))))) } return null }

            function xt(r) { const { data: t } = r, s = (0, We.y)(), [i, u] = (0, d.useState)(null), l = Math.max(250, 23 * 2 * t.length), n = { width: 340, height: l, margin: { right: 10, left: 20, bottom: 10 }, layout: "vertical" }, c = { strokeWidth: .5, tick: { fontSize: 11, strokeWidth: 0 }, interval: 0 }, v = {...c, type: "number", tickLine: !1, tickCount: 11, height: 42, label: { value: "Measurement probability (%)", position: "bottom", fontSize: 12, offset: 0 } }, o = {...c, type: "category", dataKey: "name", label: { value: "Computational basis states", position: "left", fontSize: 12, angle: -90, style: { textAnchor: "middle" }, dy: 0 } }; return e().createElement(dt.h, { width: "100%", height: l }, e().createElement(Et.v, {...n, data: t, onMouseMove: E => { E.isTooltipActive ? u(E.activeTooltipIndex) : u(null) } }, e().createElement(ft.q, { vertical: !0, horizontal: !1 }), e().createElement(vt.K, {...v }), e().createElement(pt.B, {...o }), e().createElement(bt.u, { cursor: !1, content: e().createElement(Nt, null) }), e().createElement(ht.$, { barSize: 23, dataKey: "value" }, t.map((E, m) => e().createElement(gt.b, { key: `cell-${m}`, style: i === m ? { opacity: .7 } : {}, fill: s[1] }))))) }
            var ne = a(3557);
            const Ue = 32;

            function Ct(r) {
                const { data: t } = r, s = (0, d.useMemo)(() => t.length > Ue, [t]), [i, u] = (0, d.useState)([]);
                return (0, d.useEffect)(() => {
                    const l = t.length > Ue;
                    let n = t;
                    l && (n = n.sort((c, v) => v.value - c.value).slice(0, Ue)), u(n.sort((c, v) => {
                        const o = parseInt(c.name, 2),
                            E = parseInt(v.name, 2);
                        return o - E
                    }).map(c => ({ group: "probabilities", ...c })))
                }, [t]), e().createElement(ne.f, { variant: !0 }, i.length > 0 && e().createElement("div", { className: "h-full jp-ibmq-JobDetailsPanel-barchart" }, s && e().createElement(mt.K0, { kind: "info", title: "", subtitle: `Displaying a subset of the ${t.length} measurement outcomes.
            Download the result to see the full details.`, className: "visualization-inline-notification", hideCloseButton: !0 }), e().createElement(xt, { data: i })))
            }
            var Qe = a(80941);

            function cn(r, t) { const s = parseInt(r, 10); return isNaN(s) ? t : s }

            function un(r, t) { const s = parseFloat(r); return isNaN(s) ? t : s }

            function yt(r, t = 0) { return parseInt(r, 16).toString(2).padStart(t, "0") }

            function Dt(r) {
                const { jobResult: t } = r, s = (0, d.useMemo)(() => t.results.map((n, c) => ({ index: c, result: n })), [t.results]), [i, u] = (0, d.useState)(s[0]), l = () => {
                    if (!i) return [];
                    const n = i.result,
                        c = n.header.memory_slots ? ? n.header.n_qubits ? ? 0;
                    return (0, z.Z)(n.data ? .counts, (o, E) => {
                        const m = E.includes("x") ? yt(E, c) : E,
                            p = o / n.shots * 100;
                        return { name: m, value: p }
                    })
                };
                return e().createElement("div", null, t.results.length > 1 && e().createElement(Qe.Z, { id: "default", titleText: "", helperText: "", label: "", items: s, itemToString: n => `Circuit ${n.index}`, selectedItem: i, className: "mb-16", onChange: n => u(n.selectedItem) }), l().length > 0 && e().createElement(Ct, { data: l() }))
            }
            var Ge = a(64229),
                Ve = a(30111),
                ke = a(58173),
                ze = a(91724),
                He = a(58308),
                Ye = a(26775);

            function It(r) {
                const { result: t, jobResult: s } = r, i = (n, c) => { if (!(!n || !c)) return (0, D.Bh)(n, c) }, u = (n, c, v) => { const o = (0, Ge.Z)(n, E => E.label === c); return (0, z.Z)(n, (E, m) => m < o ? {...E, status: "completed" } : m === o ? v ? .status ? {...E, status: v.status } : {...E, status: "current" } : {...E, status: "uncompleted" }) }, l = () => {
                    const { timePerStep: n } = t, c = (0, L.Wo)(t, s), v = (0, L.l2)(t);

                    function o() { if (!!c) return c.isApproximate ? `approx. time in system ${(0,D.LU)(c.time)}` : `time in system ${(0,D.LU)(c.time)}` }

                    function E() { if (t.status === "QUEUED" && !!t.infoQueue && !(0, D.Cb)(t.infoQueue.estimatedCompleteTime)) return `expected to run in ${(0,D.T4)(t.infoQueue.estimatedCompleteTime)}` }
                    const m = [{ label: "Created", date: n.CREATING }, { label: "Transpiling", duration: i(n.TRANSPILED, n.TRANSPILING), date: n.TRANSPILED ? ? n.ERROR_TRANSPILING_JOB }, { label: "Validating", duration: i(n.VALIDATED, n.VALIDATING), date: n.VALIDATED ? ? n.ERROR_VALIDATING_JOB }, { label: "In queue", duration: i(n.RUNNING, n.QUEUED), date: n.QUEUED ? n.RUNNING : void 0 }, { label: "Running", duration: v, description: o() ? ? E(), date: n.COMPLETED ? ? n.ERROR_RUNNING_JOB }, { label: "Completed", date: n.COMPLETED }];
                    switch (t.status) {
                        case "COMPLETED":
                        case "Successful completion":
                            return (0, z.Z)(m, p => ({...p, status: "completed" }));
                        case "RUNNING":
                            return u(m, "Running");
                        case "QUEUED":
                            return u(m, "In queue");
                        case "ERROR_TRANSPILING_JOB":
                            return u(m, "Transpiling", { status: "error" });
                        case "ERROR_RUNNING_JOB":
                            return u(m, "Running", { status: "error" });
                        case "ERROR_VALIDATING_JOB":
                            return u(m, "Validating", { status: "error" });
                        case "TRANSPILED":
                            return u(m, "Validating");
                        case "TRANSPILING":
                            return u(m, "Transpiling");
                        case "CANCELLED":
                            { const p = m.findIndex(b => b.duration === void 0 && b.date === void 0); return p >= 0 ? u(m, m[p].label, { status: "cancelled" }) : (0, z.Z)(m, b => ({...b, status: "uncompleted" })) }
                        case "CREATING":
                        default:
                            return (0, z.Z)(m, p => ({...p, status: "uncompleted" }))
                    }
                };
                return e().createElement("div", null, e().createElement("div", null, e().createElement("div", null, l().map((n, c) => e().createElement("div", { key: n.label, className: `step ${n.status==="uncompleted"&&"text-disabled-03"}` }, e().createElement("div", { className: "flex relative" }, e().createElement("div", { className: "mr-8 flex flex-col items-center" }, e().createElement("div", { className: `status-line flex-1 ${n.status==="uncompleted"&&"status-line-uncompleted"}` }), e().createElement("div", null, n.status === "uncompleted" && e().createElement(Ve.Z, { className: "status-icon text-disabled-03" }), n.status === "current" && e().createElement(ke.Z, { className: "status-icon text-interactive-04 animate-spin" }), n.status === "completed" && e().createElement(ze.Z, { className: "status-icon" }), n.status === "error" && e().createElement(He.Z, { className: "status-icon text-text-error" }), n.status === "cancelled" && e().createElement(Ye.Z, { className: "status-icon text-disabled-03" })), e().createElement("div", { className: `status-line flex-1 ${l()[c+1]&&l()[c+1].status==="uncompleted"&&"status-line-uncompleted"}` })), e().createElement("div", { className: "py-4" }, e().createElement("div", { className: "text-body-short-01" }, n.duration && e().createElement("div", null, n.label, ": ", (0, D.LU)(n.duration)), !n.duration && n.date && e().createElement("div", null, n.label, ": ", (0, D.o0)(n.date)), !n.duration && !n.date && e().createElement("div", null, n.label), n.status === "cancelled" && e().createElement("div", null, "cancelled"), n.status === "error" && e().createElement("div", null, "error"), n.description && e().createElement("div", null, n.description)))))))))
            }
            var Xe = a(16675),
                qe = a(20734),
                $e = a(20301),
                Tt = a(68372),
                Ee = a(47909);

            function Pt(r) {
                const { jobId: t, onViewLiveData: s, onClose: i } = r, u = (0, U.m)(), { showNotification: l } = (0, Y.z)(), n = (0, Ee.V)(), { isLoading: c, isError: v, data: o, error: E, refetch: m } = (0, Pe.C)(t), { isLoading: p, isError: b, data: g, error: C } = Te(o);
                (0, Xe.b)({ onMessage($) { $.id === t && m() } });
                const T = F(),
                    M = F(),
                    O = $ => { oe($.id), l({ kind: "success", title: "", subtitle: "Job Id copied to clipboard" }) },
                    re = async $ => { try { await u.Runtime.Jobs.cancelJob($.id), await m(), l({ kind: "error", title: "", subtitle: `Job ${$.id} canceled` }) } catch (pe) { l({ kind: "error", title: "The job was not canceled", subtitle: pe.message }) } },
                    X = () => { if (!o ? .timePerStep.COMPLETED) return; const { creationDate: $ } = o; return (0, D.Bh)(o.timePerStep.COMPLETED, $) },
                    le = () => { if (o.status === "QUEUED" && !!o.infoQueue && !(0, D.Cb)(o.infoQueue.estimatedCompleteTime)) return o.infoQueue.estimatedCompleteTime };
                return e().createElement("div", { className: "h-full text-text-01 jp-ibmq-JobDetailsPanel-container" }, !o && e().createElement("div", { className: "px-16 mt-16 text-body-short-01" }, e().createElement("button", { className: "link-color hover:underline", onClick: i }, "Jobs"), " ", "/"), c && e().createElement("div", { className: "flex justify-center w-32 m-auto pt-32" }, e().createElement(R.Z, { description: "" })), v && e().createElement(xe.O, { error: E }), e().createElement("div", { className: "h-full flex flex-col overflow-y-auto" }, o && e().createElement("div", { className: "px-16 mt-16 text-body-short-01" }, e().createElement("div", { className: "flex items-start" }, e().createElement("div", { className: "flex-1" }, e().createElement("div", null, e().createElement("button", { className: "link-color hover:underline", onClick: i }, "Jobs"), " ", "/"), e().createElement("h3", { className: "m-0 mt-4 flex-1 text-productive-heading-03" }, o.name || o.id)), e().createElement(J.ZP, { renderIcon: qe.Z, className: "jp-ibmq-JobDetailsPanel-overflow", menuOptionsClass: "jp-ibmq-JobDetailsPanel-overflow-menu", flipped: !0 }, e().createElement(P.Z, { itemText: "Copy ID", onClick: () => O(o) }), e().createElement(P.Z, { itemText: "Edit tags", onClick: () => T.open(o) }), e().createElement(P.Z, { itemText: "Download", href: n.iqx.downloadJobs({ ids: [o.id] }) }), (0, L.o1)(o) && e().createElement(P.Z, { hasDivider: !0, isDelete: !0, itemText: "Cancel", onClick: () => re(o) }), !(0, L.o1)(o) && e().createElement(P.Z, { hasDivider: !0, isDelete: !0, itemText: "Delete", onClick: () => M.open(o) }))), o.tags && o.tags.length > 0 && e().createElement("div", { className: "my-16" }, o.tags.map($ => e().createElement(A.Z, null, $))), e().createElement("div", { className: "flex justify-end my-16" }, (0, L.KG)(o) && e().createElement(S.Z, { kind: "tertiary", size: "small", className: "jp-ibmq-JobDetailsPanel-btn", onClick: () => s ? .() }, e().createElement("span", { className: "mr-8" }, "View live data"), e().createElement($e.Z, null)), e().createElement(S.Z, { size: "small", className: "jp-ibmq-JobDetailsPanel-btn", style: { marginLeft: "0.5rem" }, onClick: () => { window.open(n.iqx.jobsId({ id: o.id }), "_blank") } }, e().createElement("span", { className: "mr-8" }, "View more details"), e().createElement($e.Z, null))), e().createElement("div", { className: "border-top-line pt-16 pb-16" }, e().createElement("div", { className: "text-body-short-01 space-y-16" }, X() && e().createElement("div", null, e().createElement("div", { className: "text-label-01 text-03 mb-4" }, "Completed"), e().createElement("div", null, (0, D.o0)(o.timePerStep.COMPLETED), e().createElement("span", { className: "text-label-01" }, "(in ", (0, D.LU)(X()), ")"))), le() && e().createElement("div", null, e().createElement("div", { className: "text-label-01 text-03 mb-4" }, "Estimated time to completion"), e().createElement("div", null, (0, D.T4)(le()))), o.error && o.error.message && e().createElement("div", null, e().createElement("div", { className: "text-label-01 text-03 mb-4" }, "Error"), e().createElement("div", null, o.error.message, o.error.code && e().createElement("a", { href: n.iqx.docs({ path: `manage/errors#error${o.error.code}` }), target: "_blank" }, "[", o.error.code, "]"))), e().createElement("div", null, e().createElement("div", { className: "text-label-01 text-03 mb-4" }, "Compute resource"), e().createElement("div", null, o.backend.name)))), e().createElement(ne.f, { variant: !0 }, e().createElement(k.ZP, null, e().createElement(w.Z, { title: e().createElement("div", { className: "flex items-center" }, e().createElement("span", { className: "font-600" }, "Status timeline"), e().createElement("div", { className: "flex-1" }), e().createElement(je.Y, { job: o })) }, e().createElement(It, { result: o, jobResult: g })), e().createElement(w.Z, { title: e().createElement("span", { className: "font-600" }, "Details") }, e().createElement(ut, { result: o })), (0, L.rm)(o) && e().createElement(w.Z, { open: !0, title: e().createElement("span", { className: "font-600" }, "Result - histogram") }, p && e().createElement("div", { className: "flex justify-center w-32 m-auto pt-32" }, e().createElement(R.Z, { description: "" })), b && e().createElement(xe.O, { error: C }, C ? .code === "jobs.tooBig" && e().createElement(e().Fragment, null, e().createElement("div", { className: "text-body-short-01 my-16" }, "This result is too big to be displayed. Please, download it."), e().createElement(S.Z, { size: "small", className: "jp-ibmq-JobDetailsPanel-btn", onClick: () => { window.open(n.iqx.downloadJobs({ ids: [o.id] }), "_blank") } }, "Download ", e().createElement(Tt.Z, null)))), g && e().createElement(Dt, { jobResult: g })))))), e().createElement(Ae, { open: T.isOpen, job: T.item ? { id: T.item.id, tags: T.item.tags, instance: { hub: T.item.hubInfo.hub.name, group: T.item.hubInfo.group.name, project: T.item.hubInfo.project.name } } : null, onJobTagsChanged: () => m(), onClose: T.close }), e().createElement(ue, { open: M.isOpen, job: M.item, onClose: M.close, onJobDeleted: i }))
            }
            var _e = a(80341),
                Ot = a(40863);
            const Rt = () => { const r = (0, Ee.V)(); return e().createElement("div", { className: "px-16 mt-16 text-body-short-01" }, e().createElement("div", { className: "text-right mb-4" }, e().createElement(_e.Z, { href: r.iqx.jobs() }, "View all jobs", e().createElement(Ot.Z, { className: "ml-4 w-12 h-12 inline-block" }))), e().createElement("h3", { className: "m-0 text-productive-heading-03" }, "Jobs")) };
            var Mt = a(66832);
            const ae = (0, d.createContext)({ filter: {}, hiddenFilters: [], setFilter: () => {}, resetFilter: () => {} });
            var Zt = a(22575);
            const Jt = r => {
                    const { labelText: t } = r, { setFilter: s } = (0, d.useContext)(ae), [i, u] = (0, Zt.N)();
                    (0, d.useEffect)(() => { s({ search: i }) }, [i]);

                    function l(n) {
                        const c = n.target.value;
                        u(c)
                    }
                    return e().createElement(Mt.Z, { labelText: t, placeHolderText: "Search jobs", onChange: l })
                },
                fe = r => {
                    const { filterFieldName: t, emptyFieldName: s, items: i, ...u } = r, l = s ? { id: "_all_", name: s, value: null } : null, { filter: n, setFilter: c } = (0, d.useContext)(ae), [v, o] = (0, d.useState)(l);
                    (0, d.useEffect)(() => {
                        const p = n[t],
                            b = i.find(g => g.id === p) ? ? l;
                        o(b)
                    }, [n]);

                    function E(m) {
                        const { selectedItem: p } = m;
                        c({
                            [t]: p.value
                        })
                    }
                    return e().createElement(Qe.Z, { id: t, items: [l, ...i], selectedItem: v, onChange: E, ...u })
                };
            fe.defaultProps = { label: "", size: "xl", itemToString: r => r ? .name ? ? "" };
            var St = a(23034);
            const Lt = r => { const { children: t } = r, [s, i] = (0, d.useState)(!1), { resetFilter: u } = (0, d.useContext)(ae); return e().createElement(J.ZP, { renderIcon: St.Z, className: "jp-ibmq-PanelFilterDropdown-overflow", menuOptionsClass: "jp-ibmq-PanelFilterDropdown-overflow-menu", flipped: !0, open: s, onOpen: () => i(!0) }, t, e().createElement("div", { className: "flex justify-end pt-16 mt-24 border-solid border-t border-ui-03 w-full" }, e().createElement(S.Z, { kind: "ghost", onClick: u }, "Reset filter"), e().createElement(S.Z, { kind: "secondary", onClick: () => i(!1) }, "Close"))) };
            var At = a(34511);

            function jt(r, t) {
                const s = [];
                for (const i of Object.keys(r)) {
                    const u = i,
                        l = r[u];
                    if (l != null && !(t ? .hiddenFilters && (0, de.Z)(t.hiddenFilters, i))) {
                        if ((0, ee.Z)(l)) {
                            const n = l.map(c => ({ field: u, value: c, label: c }));
                            s.push(...n)
                        }(0, At.Z)(l) && l && s.push({ field: u, value: l, label: u }), s.push({ field: u, value: l, label: l.toString() })
                    }
                }
                return s
            }
            const Bt = () => {
                    const { filter: r, setFilter: t, hiddenFilters: s } = (0, d.useContext)(ae), u = jt(r, { hiddenFilters: s }).map(n => e().createElement(A.Z, { key: n.field, filter: !0, type: "high-contrast", onClose: () => l(n) }, n.label));

                    function l(n) {
                        const c = r[n.field];
                        let v = null;
                        (0, ee.Z)(c) && (v = (0, Ne.Z)(c, n.value)), t({
                            [n.field]: v
                        })
                    }
                    return e().createElement("div", { className: "items-center" }, u)
                },
                ve = new Date;

            function et() { return { statuses: [{ id: "pending", value: "pending", name: "Pending" }, { id: "returned", value: "returned", name: "Returned" }], intervals: [{ id: "today", value: "today", name: "Today", ...(0, D.gz)(ve, "day") }, { id: "yesterday", value: "yesterday", name: "Yesterday", ...(0, D.gz)((0, D.U2)(ve, 1, "day"), "day") }, { id: "this-month", value: "this-month", name: "This Month", ...(0, D.gz)(ve, "month") }, { id: "last-month", value: "last-month", name: "Last Month", ...(0, D.gz)((0, D.U2)(ve, 1, "month"), "month") }, { id: "this-year", value: "this-year", name: "This Year", ...(0, D.gz)(ve, "year") }] } }

            function Ut() { const r = (0, U.m)(); return (0, B.useQuery)("userHubs", () => r.IBMQ.Network.getUserNetwork()) }
            var Ce = a(38486);

            function Fe(r) { return (0, Ce.Z)(r, t => (0, Ce.Z)(t.groups, s => (0, Ce.Z)(s.projects, i => ({ hub: t, group: s, project: i })))) }

            function mn(r, t) { const s = Fe(r); return filter(s, i => !!i.project.devices ? .[t]) }

            function dn(r, t) { const s = Fe(r); return filter(s, i => !!i.project.users ? .[t]) }

            function $t() {
                const r = Ut(),
                    t = r.isSuccess ? Fe(r.data) : [];
                return {...r, data: t }
            }

            function Ft() {
                const r = (0, U.m)(),
                    t = (0, B.useQuery)("backends/all", async() => (await r.IBMQ.Backends.getAll()).data ? ? []);
                return t.isSuccess ? t : {...t, data: [] }
            }
            const tt = et();

            function Kt() {
                const { data: r } = Ft(), t = r.map(l => ({ id: l.name, name: l.name, value: l.name })), { data: s } = $t(), i = (0, me.Z)(s.map(l => u(l)), l => l.name);

                function u(l) { const n = (0, Be.hy)(l); return { id: n, name: n, value: n } }
                return e().createElement("div", { className: "jp-ibmq-JobPanelFilter px-16 mt-16" }, e().createElement(ne.f, { variant: !0 }, e().createElement("div", { className: "flex" }, e().createElement(Jt, { labelText: "Search jobs" }), e().createElement(Lt, null, e().createElement(fe, { titleText: "Status", filterFieldName: "status", emptyFieldName: "All statuses", items: tt.statuses }), e().createElement(fe, { titleText: "Time", filterFieldName: "interval", emptyFieldName: "All time", items: tt.intervals }), e().createElement(fe, { titleText: "Compute resource", filterFieldName: "backend", emptyFieldName: "All Compute resources", items: t }), e().createElement(fe, { titleText: "Instances", filterFieldName: "instance", emptyFieldName: "All Instances", items: i }))), e().createElement("div", { className: "mt-8 mb-8" }, e().createElement(Bt, null))))
            }
            var nt = a(96110),
                wt = a(58434);
            const Wt = "jobs",
                at = { skip: 0, limit: 10 };

            function Qt(r) {
                const t = { offset: at.skip, limit: at.limit, pending: r.status ? r.status === "pending" : void 0, search: r.search ? ? void 0, backend: r.backend ? ? void 0, provider: r.instance ? ? void 0 },
                    i = et().intervals.find(u => u.value === r.interval);
                return i && (t.createdAfter = i.initialDate.toISOString(), t.createdBefore = i.endDate.toISOString()), t
            }

            function Gt(r) {
                const t = (0, U.m)(),
                    s = Qt(r),
                    i = (0, B.useQueryClient)();

                function u(o) { const { skip: E, limit: m, count: p } = o.meta; return p > E + m ? { offset: E + m, limit: m } : void 0 }
                const l = [Wt, s],
                    n = (0, B.useInfiniteQuery)(l, async o => { const { pageParam: E } = o, m = (0, wt.Z)({}, s, E), p = await t.Runtime.Jobs.getJobs(m); return { meta: { skip: p.offset, count: p.count, limit: p.limit }, items: p.jobs } }, { keepPreviousData: !0, getNextPageParam: u });

                function c() { n.refetch() }

                function v(o) { i.setQueryData(l, E => ({ pages: E.pages.map(m => ({...m, items: m.items.map(o) })), pageParams: E.pageParams })) }
                return { queryKey: l, query: n, refresh: c, optimisticUpdateJobs: v }
            }

            function Vt(r, { threshold: t = 0, root: s = null, rootMargin: i = "0%" }) {
                const [u, l] = (0, d.useState)(), n = ([c]) => { l(c) };
                return (0, d.useEffect)(() => {
                    const c = r ? .current;
                    if (!!!window.IntersectionObserver || !c) return;
                    const o = { threshold: t, root: s, rootMargin: i },
                        E = new IntersectionObserver(n, o);
                    return E.observe(c), () => E.disconnect()
                }, [r, t, s, i]), u
            }
            var se = a(98562);

            function kt(r) { const { className: t, infiniteQuery: s, children: i } = r, u = (0, d.useRef)(), l = (0, d.useRef)(), n = Vt(l, { root: u.current, rootMargin: "0px 0px 200px 0px" }); return (0, d.useEffect)(() => { n ? .isIntersecting && s.hasNextPage && !s.isFetchingNextPage && s.fetchNextPage() }, [n ? .isIntersecting, s.isFetchingNextPage, s.hasNextPage]), e().createElement("div", { ref: u, className: (0, se.Z)("overflow-y-auto", t) }, i, s.isFetchingNextPage && e().createElement("div", { className: "flex my-16 justify-center" }, e().createElement(nt.Z, { small: !0, withOverlay: !1 })), e().createElement("div", { ref: l })) }
            const zt = r => { const { className: t } = r; return e().createElement("svg", { width: "80", height: "80", viewBox: "0 0 80 80", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: t }, e().createElement("path", { d: "M39.9999 78.34L11.1299 61.67L39.9999 45.01L68.8599 61.67L39.9999 78.34Z", fill: "url(#paint0_linear)" }), e().createElement("path", { d: "M40.0001 68.35L11.1201 51.68L11.1301 18.33L40.0001 34.99V68.35Z", fill: "url(#paint1_linear)" }), e().createElement("path", { d: "M68.88 51.68L40 68.35V34.99L68.87 18.33L68.88 51.68Z", fill: "url(#paint2_linear)" }), e().createElement("path", { d: "M39.9999 34.99L11.1299 18.33L39.9999 1.65997L68.8699 18.33L39.9999 34.99Z", fill: "url(#paint3_linear)" }), e().createElement("path", { d: "M25.97 26.67L54.64 10.12L54.22 9.88L25.54 26.44L25.97 26.67Z", fill: "#C6C6C6" }), e().createElement("path", { d: "M39.9999 35.24L11.1299 18.57V18.33L11.3399 18.21L40.2099 34.88L39.9999 34.99V35.24Z", fill: "white" }), e().createElement("path", { d: "M21.49 33.33L13.29 28.6L13.3 22.91L21.49 27.65V33.33Z", fill: "white" }), e().createElement("defs", null, e().createElement("linearGradient", { id: "paint0_linear", x1: "18.3499", y1: "74.17", x2: "61.6499", y2: "49.17", gradientUnits: "userSpaceOnUse" }, e().createElement("stop", { stopColor: "#525252", stopOpacity: "0.05" }), e().createElement("stop", { offset: "1", stopOpacity: "0.1" })), e().createElement("linearGradient", { id: "paint1_linear", x1: "15.1601", y1: "43.34", x2: "40.3101", y2: "43.34", gradientUnits: "userSpaceOnUse" }, e().createElement("stop", { stopColor: "#E0E0E0" }), e().createElement("stop", { offset: "1", stopColor: "#C6C6C6" })), e().createElement("linearGradient", { id: "paint2_linear", x1: "40", y1: "43.34", x2: "68.88", y2: "43.34", gradientUnits: "userSpaceOnUse" }, e().createElement("stop", { stopColor: "#A8A8A8" }), e().createElement("stop", { offset: "1", stopColor: "#C6C6C6" })), e().createElement("linearGradient", { id: "paint3_linear", x1: "18.3499", y1: "30.83", x2: "61.6499", y2: "5.82998", gradientUnits: "userSpaceOnUse" }, e().createElement("stop", { stopColor: "#F4F4F4" }), e().createElement("stop", { offset: "1", stopColor: "#E0E0E0" })))) },
                Ht = r => { const t = (0, Ee.V)(); return e().createElement("div", { className: (0, se.Z)("flex flex-col px-16 mt-16", r.className) }, e().createElement(zt, { className: "mt-48" }), e().createElement("h3", { className: "text-productive-heading-03 mb-8" }, "You have not run any jobs with Lab yet"), e().createElement("p", { className: "my-8 text-body-short-01" }, "Once you have run a circuit on a system or simulator, you can track the job\u2019s status and view details from this panel."), e().createElement(_e.Z, { href: t.iqx.docs({ path: "iqx/run-circuits" }), className: "my-24" }, "Learn how to run jobs")) };
            var q = a(63520),
                Yt = a(45409),
                st = a(16478);
            const Xt = r => {
                const { job: t, onJobClick: s, onJobEditTags: i, onJobDownload: u, onJobCancel: l, onJobDelete: n } = r, { showNotification: c } = (0, Y.z)(), v = (0, Yt.E)(), o = (0, st.Vj)(v), [E, m] = (0, d.useState)(o);
                (0, d.useEffect)(() => {
                    const b = (0, st.Vj)(v);
                    m(b)
                }, [v]);

                function p(b) { oe(b.id), c({ kind: "success", title: "", subtitle: "Job Id copied to clipboard" }) }
                return e().createElement("div", { className: "pl-16" }, e().createElement(q.W4, { id: t.id }, e().createElement("div", { className: "border-solid border-b border-ui-03 flex hover:bg-hover-ui" }, e().createElement("div", { className: "flex-1 min-w-0 space-x-8 py-16 px-8 cursor-pointer", onClick: () => s(t) }, e().createElement("div", { className: "text-body-short-01 flex items-center" }, e().createElement(je.Y, { job: t }), e().createElement("span", { className: "whitespace-nowrap" }, ": ", (0, D.o0)(t.created))), e().createElement("div", { className: "flex text-label-01 text-text-05 pl-16" }, e().createElement("div", { className: "truncate" }, t.name ? t.name : `ID: ${t.id}`), e().createElement("div", { className: "flex-1 whitespace-nowrap ml-2" }, "| ", t.backend))))), ie().createPortal(e().createElement(ne.f, { theme: E }, e().createElement(q.xV, { id: t.id }, e().createElement(q.sN, { onClick: () => p(t) }, "Copy ID"), e().createElement(q.sN, { onClick: () => i ? .(t) }, "Edit tags"), e().createElement(q.sN, { onClick: () => u ? .(t) }, "Download"), (0, L.o1)(t) && e().createElement(q.sN, { onClick: () => l ? .(t) }, "Cancel"), !(0, L.o1)(t) && e().createElement(q.sN, { onClick: () => n ? .(t) }, "Delete"))), document.body))
            };

            function qt(r) {
                const { className: t, onJobClick: s, onJobLiveData: i } = r, u = (0, d.useRef)(), { filter: l } = (0, d.useContext)(ae), { query: n, refresh: c, optimisticUpdateJobs: v } = Gt(l), o = F(), E = F(), m = F(), p = (0, U.m)(), { showNotification: b } = (0, Y.z)(), g = (0, Ee.V)(), C = (0, Ce.Z)(n.data ? .pages, M => M.items);
                (0, Xe.b)({
                    onMessage(M) {
                        if (M.status === "TRANSPILING" || M.status === "Queued") { c(); return }
                        C.find(O => M.id === O.id) && v(O => O.id !== M.id ? O : {...O, status: M.status })
                    }
                });
                async function T(M) { try { await p.Runtime.Jobs.cancelJob(M.id), c() } catch (O) { b({ kind: "error", title: "The job was not canceled", subtitle: O.message }) } }
                return n.status === "loading" ? e().createElement("div", { className: "flex justify-center mt-48" }, n.isFetching, e().createElement(nt.Z, { small: !0, withOverlay: !1 })) : n.status === "error" ? e().createElement("div", null, "Error: ", n.error.message) : e().createElement("div", { ref: u, className: (0, se.Z)("flex-1 overflow-hidden", t) }, e().createElement(kt, { infiniteQuery: n, itemHeight: 67, className: "h-full" }, C.length === 0 && e().createElement(Ht, null), C.length > 0 && e().createElement(e().Fragment, null, C.map(M => e().createElement(Xt, { key: M.id, job: M, onJobClick: O => s(O), onJobLiveData: O => i(O), onJobRename: o.open, onJobEditTags: E.open, onJobDownload: O => window.open(g.iqx.downloadJobs({ ids: [O.id] }), "_blank"), onJobCancel: T, onJobDelete: m.open })))), e().createElement(Ae, { open: E.isOpen, job: E.item ? { id: E.item.id, tags: E.item.tags, instance: { hub: E.item.hub, group: E.item.group, project: E.item.project } } : null, onClose: E.close }), e().createElement(ue, { open: m.isOpen, job: m.item, onJobDeleted: c, onClose: m.close }))
            }
            const _t = r => { const { onJobClick: t, onJobLiveData: s } = r; return e().createElement(ne.f, { variant: !0, className: "h-full flex flex-col" }, e().createElement(Rt, null), e().createElement(Kt, null), e().createElement(qt, { onJobClick: t, onJobLiveData: s })) };
            var rt = a(55492);
            const lt = r => {
                const { filter: t, hiddenFilters: s, onFilterChange: i, children: u } = r, [l, n] = (0, d.useState)(t), [c, v] = (0, d.useState)(s);
                (0, d.useEffect)(() => n(t), [t]), (0, d.useEffect)(() => v(c), [c]);

                function o(m) {
                    const p = {...l, skip: 0, ...m };
                    n(p), i(p)
                }

                function E() {
                    const { search: m } = l, p = { search: m, skip: 0 };
                    n(p), i(p)
                }
                return e().createElement(ae.Provider, { value: { filter: l, hiddenFilters: c, setFilter: o, resetFilter: E } }, u)
            };
            lt.defaultProps = { filter: {}, hiddenFilters: ["search", "skip", "limit", "order"], children: [], onFilterChange: () => {} };
            var en = a(63051),
                ot = a(22751);

            function tn(r) {
                const { job: t, jobMetrics: s } = r, i = t.state.status, u = (0, d.useMemo)(() => {
                    const { timestamps: l, bss: n } = s;

                    function c() { if ((0, en.Z)(n ? .seconds)) return `time in classical and quantum computation ${it(n.seconds*1e3)}` }

                    function v() { if (i !== "Queued") return; const { estimated_start_time: m, position_in_queue: p, position_in_provider: b } = r.jobMetrics; if (!m || (0, D.Cb)(m)) return; const g = [`expected to run ${(0,D.T4)(m)}`]; return b && g.push(`project pos: ${b}`), p && g.push(`system pos: ${p}`), g.join(", ") }

                    function o(m, p, b) { const g = (0, Ge.Z)(m, C => C.label === p); return (0, z.Z)(m, (C, T) => T < g ? {...C, status: "completed" } : T === g ? b ? .status ? {...C, status: b.status } : {...C, status: "current" } : {...C, status: "uncompleted" }) }
                    const E = [{ label: "Created", date: l.created }, { label: "In queue", duration: nn(l.running, l.created) }, { label: "Running", description: c() ? ? v(), date: l.running }, { label: "Completed", date: i === "Failed" || i === "Unknown" || i === "Cancelled" ? void 0 : l.finished }];
                    switch (i) {
                        case "Queued":
                            return o(E, "In queue");
                        case "Running":
                            return o(E, "Running");
                        case "Failed":
                            return o(E, "Running", { status: "error" });
                        case "Completed":
                            return (0, z.Z)(E, m => ({...m, status: "completed" }));
                        case "Cancelled":
                            { const m = E.findIndex(p => (0, ot.Z)(p.duration) && (0, ot.Z)(p.date)); return m >= 0 ? o(E, E[m].label, { status: "cancelled" }) : (0, z.Z)(E, p => ({...p, status: "uncompleted" })) }
                        case "Unknown":
                        default:
                            return (0, z.Z)(E, m => ({...m, status: "unknown" }))
                    }
                }, [s]);
                return e().createElement("div", null, u.map((l, n) => e().createElement("div", { key: l.label, className: (0, se.Z)("step", { "text-disabled-03": l.status === "uncompleted" }), "data-testid": "runtime-job-timeline-step" }, e().createElement("div", { className: "flex relative" }, e().createElement("div", { className: "mr-8 flex flex-col items-center", title: l.status }, e().createElement("div", { className: (0, se.Z)("status-line flex-1", { "status-line-uncompleted": l.status === "uncompleted" }) }), e().createElement("div", null, l.status === "uncompleted" && e().createElement(Ve.Z, { className: "status-icon text-disabled-03" }), l.status === "current" && e().createElement(ke.Z, { className: "status-icon text-interactive-04 animate-spin" }), l.status === "completed" && e().createElement(ze.Z, { className: "status-icon" }), l.status === "error" && e().createElement(He.Z, { className: "status-icon text-text-error" }), l.status === "cancelled" && e().createElement(Ye.Z, { className: "status-icon text-disabled-03" })), e().createElement("div", { className: (0, se.Z)("status-line flex-1", { "status-line-uncompleted": u[n + 1] ? .status === "uncompleted" }) })), e().createElement("div", { className: "py-4" }, e().createElement("div", { className: "text-body-short-01" }, l.duration && e().createElement("div", null, l.label, ": ", it(l.duration)), !l.duration && l.date && e().createElement("div", null, l.label, ": ", (0, D.o0)(l.date)), !l.duration && !l.date && e().createElement("div", null, l.label), l.status === "cancelled" && e().createElement("div", null, "cancelled"), l.status === "error" && e().createElement("div", null, "error"), l.description && e().createElement("div", null, l.description)))))))
            }

            function nn(r, t) { if (!(!r || !t)) return (0, D.Bh)(r, t) }

            function it(r) { return isFinite(r) && r < 1e3 ? "less than a second" : (0, D.LU)(r) ? ? "" }

            function an(r) { const { job: t, jobResults: s } = r, i = s ? .metadata ? .[0] ? .shots, u = Array.isArray(s ? .quasi_dists) ? s.quasi_dists.length : void 0; return e().createElement("div", { className: "text-body-short-01 space-y-16" }, e().createElement("div", null, e().createElement("div", { className: "text-label-01 text-text-05 mb-4" }, "Created on"), e().createElement("div", null, (0, D.o0)(t.created))), e().createElement("div", null, e().createElement("div", { className: "text-label-01 text-text-05 mb-4" }, "Instance"), e().createElement("div", null, (0, Be.s7)({ hub: t.hub, group: t.group, project: t.project }))), i !== void 0 && e().createElement("div", null, e().createElement("div", { className: "text-label-01 text-text-05 mb-4" }, "# of shots"), e().createElement("div", null, i ? ? "N/A")), u !== void 0 && e().createElement("div", null, e().createElement("div", { className: "text-label-01 text-text-05 mb-4" }, "# of circuits"), e().createElement("div", null, u ? ? "N/A"))) }

            function sn(r) { const { jobResults: t } = r; return e().createElement("div", null, e().createElement("pre", { className: "text-code-01" }, e().createElement("code", null, JSON.stringify(t, null, 2)))) }

            function rn(r) {
                const { jobId: t, onClose: s } = r, i = (0, U.m)(), { showNotification: u } = (0, Y.z)(), l = (0, Ee.V)(), n = (0, B.useQuery)(["runtime/jobs", t], ({ queryKey: g }) => { const [, C] = g; return i.Runtime.Jobs.getJob(C) }), c = (0, B.useQuery)(["runtime/jobs/metrics", t], ({ queryKey: g }) => { const [, C] = g; return i.Runtime.Jobs.getJobMetrics(C) }), v = (0, B.useQuery)(["runtime/jobs/results", t], ({ queryKey: g }) => { const [, C] = g; return i.Runtime.Jobs.getJobResults(C) }, { enabled: n.data ? .state.status === "Completed" }), o = F(), E = F();

                function m() { oe(t), u({ kind: "success", title: "", subtitle: "Job Id copied to clipboard" }) }
                async function p() { try { await i.Runtime.Jobs.cancelJob(t), u({ kind: "error", title: "", subtitle: `Job ${t} canceled` }), await n.refetch() } catch (g) { u({ kind: "error", title: "The job was not canceled", subtitle: g instanceof Error ? g.message : "" }) } }
                const b = (0, d.useMemo)(() => {
                    if (!c.data) return;
                    const g = c.data.timestamps.created,
                        C = c.data.timestamps.finished;
                    if (!(!g || !C)) return (0, D.LU)((0, D.Bh)(C, g))
                }, [c.data]);
                return e().createElement("div", { className: "h-full text-text-01 jp-ibmq-JobDetailsPanel-container" }, !n.data || !c.data && e().createElement("div", { className: "px-16 mt-16 text-body-short-01" }, e().createElement("button", { className: "link-color hover:underline", onClick: s }, "Jobs"), " ", "/"), (n.isLoading || c.isLoading) && e().createElement("div", { className: "flex justify-center w-32 m-auto pt-32" }, e().createElement(R.Z, { description: "" })), (n.isError || c.isError) && e().createElement(xe.O, { error: n.error || c.error }), e().createElement("div", { className: "h-full flex flex-col overflow-y-auto" }, n.data && c.data && e().createElement("div", { className: "px-16 mt-16 text-body-short-01" }, e().createElement("div", { className: "flex items-start" }, e().createElement("div", { className: "flex-1" }, e().createElement("div", null, e().createElement("button", { className: "link-color hover:underline", onClick: s }, "Jobs"), " ", "/"), e().createElement("h3", { className: "m-0 mt-4 flex-1 text-productive-heading-03" }, n.data.id)), e().createElement(J.ZP, { renderIcon: qe.Z, className: "jp-ibmq-JobDetailsPanel-overflow", menuOptionsClass: "jp-ibmq-JobDetailsPanel-overflow-menu", flipped: !0 }, e().createElement(P.Z, { itemText: "Copy ID", onClick: () => m() }), e().createElement(P.Z, { itemText: "Edit tags", onClick: () => o.open(n.data) }), e().createElement(P.Z, { itemText: "Download", href: l.iqx.downloadJobs({ ids: [t] }) }), (0, L.o1)({ status: n.data.state.status }) && e().createElement(P.Z, { hasDivider: !0, isDelete: !0, itemText: "Cancel", onClick: () => p() }), !(0, L.o1)({ status: n.data.state.status }) && e().createElement(P.Z, { hasDivider: !0, isDelete: !0, itemText: "Delete", onClick: () => E.open(n.data) }))), n.data.tags && n.data.tags.length > 0 && e().createElement("div", { className: "my-16" }, (0, L.JB)(n ? .data ? .tags ? ? []) ? .map(g => e().createElement(A.Z, null, g))), e().createElement("div", { className: "flex justify-end my-16" }, e().createElement(S.Z, { size: "small", className: "jp-ibmq-JobDetailsPanel-btn", style: { marginLeft: "0.5rem" }, onClick: () => { window.open(l.iqx.jobsId({ id: t }), "_blank") } }, e().createElement("span", { className: "mr-8" }, "View more details"), e().createElement($e.Z, null))), e().createElement("div", { className: "border-top-line pt-16 pb-16" }, e().createElement("div", { className: "text-body-short-01 space-y-16" }, b && e().createElement("div", null, e().createElement("div", { className: "text-label-01 text-03 mb-4" }, "Completed"), e().createElement("div", null, (0, D.o0)(c.data.timestamps.finished), e().createElement("span", { className: "text-label-01" }, "(in ", b, ")"))), e().createElement("div", null, e().createElement("div", { className: "text-label-01 text-03 mb-4" }, "Compute resource"), e().createElement("div", null, n.data.backend)))), e().createElement(ne.f, { variant: !0 }, e().createElement(k.ZP, null, e().createElement(w.Z, { title: e().createElement("div", { className: "flex items-center" }, e().createElement("span", { className: "font-600" }, "Status timeline"), e().createElement("div", { className: "flex-1" }), e().createElement(je.Y, { job: { status: n.data.state.status } })) }, e().createElement(tn, { job: n.data, jobMetrics: c.data })), e().createElement(w.Z, { title: e().createElement("span", { className: "font-600" }, "Details") }, e().createElement(an, { job: n.data, jobResults: v.data })), (0, L.rm)({ status: n.data.state.status }) && e().createElement(w.Z, { open: !0, title: e().createElement("span", { className: "font-600" }, "Results") }, v.isLoading && e().createElement("div", { className: "flex justify-center w-32 m-auto pt-32" }, e().createElement(R.Z, { description: "" })), v.isError && e().createElement(xe.O, { error: v.error }), v.data && e().createElement(sn, { job: n.data, jobResults: v.data })))))), e().createElement(Ae, { open: o.isOpen, job: o.item ? { id: o.item.id, tags: o.item.tags, instance: { hub: o.item.hub, group: o.item.group, project: o.item.project } } : null, onJobTagsChanged: () => n.refetch(), onClose: o.close }), e().createElement(ue, { open: E.isOpen, job: E.item, onClose: E.close, onJobDeleted: s }))
            }
            var ln = a(47500);
            const on = () => {
                const r = (0, ln.T)(),
                    [t, s] = (0, d.useState)(null);

                function i(n) { r.execute(rt.W.trackButtonEvent, { action: "Click to enter on Job details", text: "See Job's detail" }), s(n) }

                function u() { r.execute(rt.W.trackButtonEvent, { action: "Click to enter on Job live data", text: "See Job's live data" }), r.execute("ibm-q-lab-jobs-live-data:open", { jobId: t.id }) }

                function l() { s(null) }
                return e().createElement("div", { className: "h-full jp-ibmq-JobPanel" }, e().createElement(lt, null, t ? .type === "IQX" && e().createElement(Pt, { jobId: t.id, onViewLiveData: u, onClose: l }), t ? .type === "RUNTIME" && e().createElement(rn, { jobId: t.id, onClose: l }), !t && e().createElement(_t, { onJobClick: i, onJobLiveData: u })))
            }
        },
        17956: (_, j, a) => {
            a.d(j, { O: () => R });
            var d = a(56271),
                e = a.n(d);

            function R(J) { const { error: P, children: A } = J, S = P instanceof Error ? P.message : void 0; return e().createElement("div", { className: "mt-16 error-panel mx-16 p-16" }, e().createElement("div", { className: "text-productive-heading-02" }, "Something went wrong"), A, !A && S && e().createElement("div", { className: "text-body-short-01" }, S)) }
        },
        44911: (_, j, a) => {
            a.d(j, { Y: () => U });
            var d = a(56271),
                e = a.n(d),
                R = a(90459),
                J = a(89209),
                P = a(71829),
                A = a(86914),
                S = a(58287),
                k = a(63492),
                w = a(19992),
                F = a(62593),
                B = a(30869);
            const y = "jp-ibmq-JobStatusTag";

            function U(f) { const { job: G } = f, H = (0, P.Z)((0, A.Z)(G.status)); let V; return (0, R.yB)(G) ? V = e().createElement("div", { className: `${y}-tip` }, e().createElement("span", { className: `${y}-status` }, e().createElement(S.Z, { className: `${y}-icon text-interactive-04` }), e().createElement("span", null, "Running"))) : (0, R.o1)(G) ? V = e().createElement(J.Z, { tooltipText: H, className: `${y}-tip`, triggerClassName: `${y}-trigger` }, e().createElement("span", { className: `${y}-status` }, e().createElement(k.Z, { className: `${y}-icon ${y}-icon-pending` }), e().createElement("span", null, "Pending"))) : (0, R.mx)(G) ? V = e().createElement("div", { className: `${y}-tip` }, e().createElement("span", { className: `${y}-status` }, e().createElement(w.Z, { className: `${y}-icon text-text-05` }), e().createElement("span", null, "Canceled"))) : (0, R.Vv)(G) ? V = e().createElement(J.Z, { tooltipText: H, className: `${y}-tip`, triggerClassName: `${y}-trigger` }, e().createElement("span", { className: `${y}-status` }, e().createElement(F.Z, { className: `${y}-icon ${y}-icon-error` }), e().createElement("span", null, "Error"))) : (0, R.rm)(G) ? V = e().createElement("div", { className: `${y}-tip` }, e().createElement("span", { className: `${y}-status` }, e().createElement(B.Z, { className: `${y}-icon text-support-02` }), e().createElement("span", null, "Completed"))) : V = e().createElement("div", { className: `${y}-tip` }, e().createElement("span", { className: `${y}-status` }, e().createElement("span", { className: `${y}-icon inline-block` }), e().createElement("span", null, H))), e().createElement("div", { className: y }, V) }
        },
        51504: (_, j, a) => {
            a.d(j, { y: () => R });
            var d = a(4122),
                e = a(4274);

            function R() { const { themeName: J } = (0, d.F)(), P = [e.ERt, e.szG, e._H$, e.w51], A = [e.Ac_, e.tqd, e.MBN, e.wai]; return { white: P, g10: P, g90: A, g100: A }[J] }
        },
        35441: (_, j, a) => {
            a.d(j, { C: () => J });
            var d = a(57929),
                e = a(94417);
            const R = "job";

            function J(P) { const A = (0, e.m)(); return (0, d.useQuery)([R, P], () => P ? A.IBMQ.Jobs.getJob(P) : null) }
        },
        56464: (_, j, a) => {
            a.d(j, { En: () => S, hy: () => y, s7: () => k });
            var d = a(22751);

            function e(f) { return (0, d.Z)(f.group) && (0, d.Z)(f.project) }

            function R(f) { return !(0, d.Z)(f.group) && (0, d.Z)(f.project) }

            function J(f) { return !(0, d.Z)(f.group) && !(0, d.Z)(f.project) }

            function P(f) { if (J(f)) return InstanceType.PROJECT; if (R(f)) return InstanceType.GROUP; if (e(f)) return InstanceType.HUB; throw new Error("Invalid instance format") }

            function A(f) { if (J(f)) return { hub: f.hub, group: f.group }; if (R(f)) return { hub: f.hub } }

            function S(f) { return f ? J(f) ? `${f.hub.name}/${f.group.name}/${f.project.name}` : R(f) ? `${f.hub.name}/${f.group.name}` : e(f) ? `${f.hub.name}` : "" : "" }

            function k(f) { return f.hub && f.group && f.project ? `${f.hub}/${f.group}/${f.project}` : f.hub && f.group ? `${f.hub}/${f.group}` : f.hub ? `${f.hub}` : "" }

            function w(f) { return (0, d.Z)(f.group) && (0, d.Z)(f.project) }

            function F(f) { return !(0, d.Z)(f.group) && (0, d.Z)(f.project) }

            function B(f) { return !(0, d.Z)(f.group) && !(0, d.Z)(f.project) }

            function y(f) { return f ? B(f) ? `${f.hub.name}/${f.group.name}/${f.project.name}` : F(f) ? `${f.hub.name}/${f.group.name}` : w(f) ? `${f.hub.name}` : "" : "" }

            function U(f) { return { hub: f.hub.name, group: f.group ? .name, project: f.project ? .name } }
        }
    }
]);