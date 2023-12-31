"use strict";
(self.webpackChunk_quantum_lab_ui = self.webpackChunk_quantum_lab_ui || []).push([
    [801], {
        14550: (b, P, t) => {
            t.d(P, { Bh: () => re, Cb: () => te, LU: () => ee, T4: () => F, U2: () => ne, gz: () => q, o0: () => w });
            var o = t(9072),
                e = t(83922),
                f = t.n(e),
                h = t(51968),
                D = t(7326),
                g = t(81690),
                C = t(61228),
                T = t(67814),
                L = t(60197),
                y = t(6411),
                A = t(46938),
                m = t(89695),
                R = t(30946),
                a = t(91554),
                x = t(54550),
                N = t(95973),
                O = t(5929),
                H = t(92018),
                G = t(35883),
                Q = t(32253),
                V = t(86772),
                K = t(77707),
                Y = t(94280),
                _ = t(25065),
                $ = t(84760),
                W = t(97801);
            const Z = "MMM dd, yyyy",
                I = `${Z} h:mm aa`;

            function M(l, u) { if ((0, o.Z)(l)) return u ? X(l, u) : (0, h.Z)(l); if ((0, D.Z)(l)) return l; throw new Error("Invalid date object") }

            function X(l, u) { const E = (0, g.Z)(l, u, new Date); return (0, C.Z)(E) && (0, T.Z)(E, u) !== l ? new Date("a") : E }

            function z(l, u) { return l ? (0, T.Z)(M(l), u) : "" }

            function oe(l) { return z(l, Z) }

            function w(l) { return z(l, I) }

            function F(l) { return l ? (0, L.Z)(M(l), { addSuffix: !0 }) : "" }

            function S(l, u) {
                const E = M(l);
                switch (u) {
                    case "year":
                        return (0, y.Z)(E);
                    case "month":
                        return (0, A.Z)(E);
                    case "week":
                        return (0, m.Z)(E);
                    case "day":
                        return (0, R.Z)(E);
                    case "hour":
                        return (0, a.Z)(E);
                    case "minute":
                        return (0, x.Z)(E);
                    case "second":
                        return (0, N.Z)(E)
                }
            }

            function k(l, u) {
                const E = M(l);
                switch (u) {
                    case "year":
                        return (0, O.Z)(E);
                    case "month":
                        return (0, H.Z)(E);
                    case "week":
                        return (0, G.Z)(E);
                    case "day":
                        return (0, Q.Z)(E);
                    case "hour":
                        return (0, V.Z)(E);
                    case "minute":
                        return (0, K.Z)(E);
                    case "second":
                        return (0, Y.Z)(E)
                }
            }

            function q(l, u = "day") { const E = M(l); return { initialDate: S(E, u), endDate: k(E, u) } }

            function ee(l) { return isFinite(l) ? f()(l) : null }

            function te(l) { return (0, _.Z)(M(l)) }

            function ae(l, u = 1) {
                switch (l) {
                    case "year":
                        return { years: u };
                    case "month":
                        return { months: u };
                    case "week":
                        return { weeks: u };
                    case "day":
                        return { days: u };
                    case "hour":
                        return { hours: u };
                    case "minute":
                        return { minutes: u };
                    case "second":
                        return { seconds: u }
                }
            }

            function ne(l, u, E) { return (0, $.Z)(M(l), ae(E, u)) }

            function re(l, u) { return (0, W.Z)(M(l), M(u)) }
        },
        17956: (b, P, t) => {
            t.d(P, { O: () => f });
            var o = t(56271),
                e = t.n(o);

            function f(h) { const { error: D, children: g } = h, C = D instanceof Error ? D.message : void 0; return e().createElement("div", { className: "mt-16 error-panel mx-16 p-16" }, e().createElement("div", { className: "text-productive-heading-02" }, "Something went wrong"), g, !g && C && e().createElement("div", { className: "text-body-short-01" }, C)) }
        },
        44911: (b, P, t) => {
            t.d(P, { Y: () => R });
            var o = t(56271),
                e = t.n(o),
                f = t(90459),
                h = t(89209),
                D = t(71829),
                g = t(86914),
                C = t(58287),
                T = t(63492),
                L = t(19992),
                y = t(62593),
                A = t(30869);
            const m = "jp-ibmq-JobStatusTag";

            function R(a) { const { job: x } = a, N = (0, D.Z)((0, g.Z)(x.status)); let O; return (0, f.yB)(x) ? O = e().createElement("div", { className: `${m}-tip` }, e().createElement("span", { className: `${m}-status` }, e().createElement(C.Z, { className: `${m}-icon text-interactive-04` }), e().createElement("span", null, "Running"))) : (0, f.o1)(x) ? O = e().createElement(h.Z, { tooltipText: N, className: `${m}-tip`, triggerClassName: `${m}-trigger` }, e().createElement("span", { className: `${m}-status` }, e().createElement(T.Z, { className: `${m}-icon ${m}-icon-pending` }), e().createElement("span", null, "Pending"))) : (0, f.mx)(x) ? O = e().createElement("div", { className: `${m}-tip` }, e().createElement("span", { className: `${m}-status` }, e().createElement(L.Z, { className: `${m}-icon text-text-05` }), e().createElement("span", null, "Canceled"))) : (0, f.Vv)(x) ? O = e().createElement(h.Z, { tooltipText: N, className: `${m}-tip`, triggerClassName: `${m}-trigger` }, e().createElement("span", { className: `${m}-status` }, e().createElement(y.Z, { className: `${m}-icon ${m}-icon-error` }), e().createElement("span", null, "Error"))) : (0, f.rm)(x) ? O = e().createElement("div", { className: `${m}-tip` }, e().createElement("span", { className: `${m}-status` }, e().createElement(A.Z, { className: `${m}-icon text-support-02` }), e().createElement("span", null, "Completed"))) : O = e().createElement("div", { className: `${m}-tip` }, e().createElement("span", { className: `${m}-status` }, e().createElement("span", { className: `${m}-icon inline-block` }), e().createElement("span", null, N))), e().createElement("div", { className: m }, O) }
        },
        9801: (b, P, t) => {
            t.r(P), t.d(P, { LiveDataPage: () => De });
            var o = t(56271),
                e = t.n(o);

            function f(r) { const { job: n } = r; return e().createElement("div", { className: "border-solid text-body-short-01 space-y-16 " }, e().createElement("div", { className: "text-label-01 text-text-01 mb-16" }, "ID: ", n.id)) }

            function h() { return e().createElement("div", { className: "w-full my-16 border-solid border-b border-ui-03" }) }
            var D = t(56464),
                g = t(90459),
                C = t(44911);

            function T(r, n) { let s = Math.round(r / n * 100); return s > 100 ? s = 100 : (s < 0 || isNaN(s)) && (s = 0), s }

            function L(r) {
                const { job: n, value: s, maxValue: c } = {...r };
                let i = "bg-support-04",
                    d = T(s, c);
                return (0, g.rm)(n) ? (i = "bg-support-02", d = 100) : (0, g.Vv)(n) && (i = "bg-support-01"), e().createElement("div", { className: "w-2/3 flex justify-start my-24" }, e().createElement("div", { className: "live-progress-bar h-16 w-full bg-ui-03 mr-16" }, e().createElement("div", { className: `h-full ${i} origin-left`, style: { transform: `scaleX(${d/100})` } })), e().createElement("span", { className: "text-productive-heading-01 mr-8" }, `${d}%`), e().createElement(C.Y, { job: n }))
            }
            var y = t(14550);

            function A(r) { const { job: n, progressValue: s, progressMaxValue: c } = r, i = () => { if (n.status === "QUEUED" && !!n.infoQueue && !(0, y.Cb)(n.infoQueue.estimatedCompleteTime)) return n.infoQueue.estimatedCompleteTime }, d = () => (0, D.En)(n.hubInfo); return e().createElement("div", { className: "flex flex-col my-16" }, e().createElement("h1", { className: "text-productive-heading-01 text-text-02 m-0" }, "Live data details"), e().createElement(L, { job: n, value: s, maxValue: c }), e().createElement("div", { className: "flex justify-start mb-4" }, e().createElement("div", { className: "details-label text-caption-01 text-text-05" }, "Job status"), e().createElement("div", { className: "text-body-long-01" }, n.status)), i() && e().createElement("div", { className: "flex justify-start mb-4" }, e().createElement("div", { className: "details-label text-caption-01 text-text-05" }, "Estimated time to completion"), e().createElement("div", { className: "text-body-long-01" }, (0, y.T4)(i()))), e().createElement("div", { className: "flex justify-start mb-4" }, e().createElement("div", { className: "details-label text-caption-01 text-text-05" }, "System"), e().createElement("div", { className: "text-body-long-01" }, n.backend.name)), e().createElement("div", { className: "flex justify-start mb-4" }, e().createElement("div", { className: "details-label text-caption-01 text-text-05" }, "Instance"), e().createElement("div", { className: "text-body-long-01" }, d())), e().createElement("div", { className: "flex justify-start mb-4" }, e().createElement("div", { className: "details-label text-caption-01 text-text-05" }, "Sent to queue"), e().createElement("div", { className: "text-body-long-01" }, (0, y.o0)(n.creationDate)))) }
            var m = t(42377),
                R = t(37187),
                a = t(4688),
                x = t(17510),
                N = t(22751),
                O = t(14207),
                H = t(80941);

            function G(r) {
                const { channels: n, selectedChannel: s, onChange: c } = r;

                function i(d) {
                    const { selectedItem: p } = d;
                    c(p)
                }
                return n.length === 0 ? e().createElement("div", { className: "detail-channel-dropdown w-2/4 md:w-1/3 lg:w-1/4" }, e().createElement(O.Z, null)) : e().createElement("div", { className: "detail-channel-dropdown w-2/4 md:w-1/3 lg:w-1/4" }, e().createElement(H.Z, { id: "LiveDataChannelSelector", items: n, selectedItem: s, onChange: i, label: "Channels", titleText: "Channel" }))
            }
            var Q = (r => (r.LEVEL_0 = "avgLevel0", r.LEVEL_1 = "avgLevel1", r))(Q || {}),
                V = t(53635),
                K = t(51195),
                Y = t(45128),
                _ = t(43237),
                $ = t(75228),
                W = t(46414),
                Z = t(27877),
                le = t(71420),
                I = t(51504);

            function M({ active: r, payload: n }) { if (r && n && n.length) { const s = (0, I.y)(); return e().createElement("div", { className: "whitespace-nowrap text-body-short-01 border-ui-03" }, e().createElement("div", { className: "bg-ui-03 p-8 border-decorative-01" }, e().createElement("div", { className: "flex items-center" }, e().createElement("span", { className: "tooltip-dot", style: { backgroundColor: s[0] } }), e().createElement("div", null, "IQ Complex Plane"))), e().createElement("div", { className: "bg-ui-01 py-12 px-8" }, n.map(({ dataKey: c, value: i }) => e().createElement("div", { key: c }, c === "imag" ? "Q [arb units]" : "I [arb units]", ":", e().createElement("span", { className: "font-600" }, i))))) } return e().createElement(e().Fragment, null) }

            function X(r) { const { data: n } = r, s = (0, I.y)(), c = 400, i = { width: 500, height: c, margin: { top: 20, right: 20, bottom: 20, left: 40 } }, d = {}, p = {...d, type: "number", dataKey: "real", tick: { fontSize: 10 }, label: { value: "I [arb units]", position: "bottom", fontSize: 12, offset: 0 } }, U = {...d, type: "number", dataKey: "imag", tickFormatter: v => v > 1e3 || v < -1e3 ? v.toExponential(2) : v, tick: { fontSize: 10 }, label: { value: "Q [arb units]", position: "left", angle: -90, fontSize: 12, style: { textAnchor: "middle" }, dy: 0 } }; return e().createElement(K.h, { width: "100%", height: c }, e().createElement(Y.G, {...i }, e().createElement(_.q, null), e().createElement($.K, {...p }), e().createElement(W.B, {...U }), e().createElement(Z.u, { cursor: { strokeDasharray: "3 3" }, content: e().createElement(M, null) }), e().createElement(le.b, { name: "IQ Complex Plane", data: n, fill: s[0] }))) }

            function z(r) { return r.map(n => ({ group: "IQ Complex plane", real: n[0], imag: n[1] })) }

            function oe(r) { const { className: n, channelData: s } = r, c = z(s); return e().createElement("div", { className: n }, e().createElement("h1", { className: "text-productive-heading-01 text-text-02 w-full" }, "IQ Complex plane"), e().createElement(X, { data: c })) }
            var w = t(67733),
                F = t(55937),
                S = t(7387);

            function k({ active: r, payload: n, label: s }) { if (r && n && n.length) { const c = (0, I.y)(); return e().createElement("div", { className: "whitespace-nowrap text-body-short-01 border-ui-03" }, e().createElement("div", { className: "bg-ui-03 p-8 border-decorative-01" }, "Circuit: ", s), e().createElement("div", { className: "bg-ui-01 py-12 px-8" }, e().createElement("div", { className: "flex items-center" }, e().createElement("span", { className: "tooltip-dot", style: { backgroundColor: c[0] } }), e().createElement("div", null, "Optimal Qu. [arb units]: ", e().createElement("span", { className: "font-600" }, n[0].value))))) } return e().createElement(e().Fragment, null) }

            function q(r) { const { data: n } = r, s = (0, I.y)(), c = 400, i = { width: 500, height: c, margin: { top: 20, right: 20, bottom: 20, left: 50 } }, d = {}, p = {...d, type: "number", dataKey: "circuit", tick: { fontSize: 10 }, label: { value: "Circuit #", position: "bottom", fontSize: 12, offset: 0 } }, U = {...d, type: "number", dataKey: "value", tickFormatter: v => v > 1e3 || v < -1e3 ? v.toExponential(2) : v, tick: { fontSize: 10 }, label: { value: "Optimal Quadrature [arb units]", position: "left", angle: -90, fontSize: 12, style: { textAnchor: "middle" }, dy: 0 } }; return e().createElement(K.h, { width: "100%", height: c }, e().createElement(F.w, { data: n, ...i }, e().createElement(_.q, { vertical: !0, horizontal: !1 }), e().createElement($.K, {...p }), e().createElement(W.B, {...U }), e().createElement(Z.u, { cursor: { strokeDasharray: "3 3" }, content: e().createElement(k, null) }), e().createElement(S.x, { type: "linear", dot: !1, dataKey: "value", stroke: s[0] }))) }

            function ee(r) { return new w._(r).predict(r, { nComponents: 1 }).to1DArray().map((c, i) => ({ group: "Optimal Quadrature vs circuit", circuit: i, value: c })) }

            function te(r) { const { className: n, channelData: s } = r, c = ee(s); return e().createElement("div", { className: n }, e().createElement("h1", { className: "text-productive-heading-01 text-text-02 w-full" }, "Optimal Quadrature vs circuit"), e().createElement(q, { data: c })) }
            var ae = t(53900);

            function ne({ active: r, payload: n, label: s }) { if (r && n && n.length) { const c = (0, I.y)(); return e().createElement("div", { className: "whitespace-nowrap text-body-short-01 border-ui-03" }, e().createElement("div", { className: "bg-ui-03 p-8 border-decorative-01" }, "Circuit: ", s), e().createElement("div", { className: "bg-ui-01 py-12 px-8" }, n.map(({ dataKey: i, value: d }) => e().createElement("div", { key: i, className: "flex items-center" }, e().createElement("span", { className: "tooltip-dot", style: { backgroundColor: c[i === "qUnit" ? 0 : 1] } }), e().createElement("div", null, i === "qUnit" ? "Q [arb units]" : "I [arb units]", ":", e().createElement("span", { className: "font-600" }, d)))))) } return e().createElement(e().Fragment, null) }

            function re(r) { const { data: n } = r, s = (0, I.y)(), c = 460, i = { width: 500, height: c, margin: { top: 20, right: 20, bottom: 20, left: 20 } }, d = {}, p = {...d, type: "number", dataKey: "circuit", tick: { fontSize: 10 }, label: { value: "Circuit #", position: "bottom", fontSize: 12, offset: 0 } }, U = {...d, type: "number", padding: { left: 20 }, tickFormatter: v => v > 1e3 || v < -1e3 ? v.toExponential(2) : v, tick: { fontSize: 10 }, label: { value: "I/Q [arb units]", position: "left", angle: -90, fontSize: 12, style: { textAnchor: "middle" } } }; return e().createElement(K.h, { width: "100%", height: c }, e().createElement(F.w, { data: n, ...i }, e().createElement(_.q, { vertical: !0, horizontal: !1 }), e().createElement($.K, {...p }), e().createElement(W.B, {...U }), e().createElement(Z.u, { cursor: { strokeDasharray: "3 3" }, content: e().createElement(ne, null) }), e().createElement(ae.D, { height: 60 }), e().createElement(S.x, { type: "linear", name: "I [arb units]", dot: !1, dataKey: "iUnit", stroke: s[1] }), e().createElement(S.x, { type: "linear", name: "Q [arb units]", dot: !1, dataKey: "qUnit", stroke: s[0] }))) }

            function l(r) { return r.map((n, s) => ({ circuit: s, iUnit: n[0], qUnit: n[1] })) }

            function u(r) { const { className: n, channelData: s } = r, c = l(s); return e().createElement("div", { className: n }, e().createElement("h1", { className: "text-productive-heading-01 text-text-02 w-full" }, "Signal vs circuit"), e().createElement(re, { data: c })) }

            function E(r) { return (0, V.Z)(r[Q.LEVEL_1], n => (0, V.Z)(n, s => parseFloat(s))) }

            function me(r) {
                const { liveData: n, selectedChannel: s } = r;
                if (!n || !s) return e().createElement("div", null);
                const c = n[s],
                    i = E(c);
                return e().createElement("div", { className: "detail-visualization my-40" }, e().createElement("div", { className: "flex w-full" }, e().createElement(oe, { channelData: i, className: "w-1/3 m-0 pr-32" }), e().createElement(u, { channelData: i, className: "w-1/3 m-0 pr-32" }), e().createElement(te, { channelData: i, className: "w-1/3 m-0" })))
            }
            var ue = t(39564),
                Ee = t(35441),
                de = t(17956),
                fe = t(82786),
                ve = t(65828);

            function he(r) { return (0, a.Z)((0, x.Z)(r), "total_rounds").sort() }

            function pe(r) { r.send(JSON.stringify({ type: "client", data: "release" })) }

            function De(r) {
                const { jobId: n } = r, { isLoading: s, isError: c, data: i, error: d } = (0, Ee.C)(n), [p, U] = (0, o.useState)(null), [v, ge] = (0, o.useState)([]), [B, ce] = (0, o.useState)(null), [Pe, Ce] = (0, o.useState)(1), [Oe, Me] = (0, o.useState)(0), xe = (0, fe.G)(), Ne = (0, ve.O)();
                return (0, o.useEffect)(() => {
                    if (!i) return;
                    const j = `${Ne.apiWsUrl}/jobs/${i?.id??n}/live_data`,
                        ie = (0, m.eH)(j, xe, {
                            onMessage: J => {
                                if (J.type !== "authenticated") try {
                                    const se = new Uint8Array(J.data.data),
                                        ye = R.ZP.inflate(se, { to: "string" });
                                    U(JSON.parse(ye)), pe(ie)
                                } catch (se) { console.error("uncompressing", se) }
                            },
                            onError: J => { console.error("onerror", J) }
                        });
                    return () => {
                        (0, m.Fr)(ie)
                    }
                }, [i]), (0, o.useEffect)(() => {
                    (0, N.Z)(p) || (ge(he(p)), Ce(p.total_rounds))
                }, [p]), (0, o.useEffect)(() => {
                    (0, N.Z)(B) && v.length > 0 && ce(v[0])
                }, [v]), (0, o.useEffect)(() => {
                    if (!(0, N.Z)(B) && !(0, N.Z)(p)) {
                        const j = p[B];
                        Me(j.rounds)
                    }
                }, [B, p]), s ? e().createElement("div", { className: "jp-ibmq-LiveData flex h-full" }, e().createElement(ue.Z, { description: "Loading....", className: "justify-center" })) : c ? e().createElement("div", { className: "jp-ibmq-LiveData px-16 mt-16" }, e().createElement(de.O, { error: d })) : e().createElement("div", { className: "jp-ibmq-LiveData px-16 mt-16" }, e().createElement(f, { job: i }), e().createElement(h, null), e().createElement(A, { job: i, progressValue: Oe, progressMaxValue: Pe }), e().createElement(h, null), p && e().createElement("div", null, e().createElement(G, { channels: v, selectedChannel: B, onChange: j => ce(j) }), e().createElement(me, { liveData: p, selectedChannel: B })))
            }
        },
        51504: (b, P, t) => {
            t.d(P, { y: () => f });
            var o = t(4122),
                e = t(4274);

            function f() { const { themeName: h } = (0, o.F)(), D = [e.ERt, e.szG, e._H$, e.w51], g = [e.Ac_, e.tqd, e.MBN, e.wai]; return { white: D, g10: D, g90: g, g100: g }[h] }
        },
        35441: (b, P, t) => {
            t.d(P, { C: () => h });
            var o = t(57929),
                e = t(94417);
            const f = "job";

            function h(D) { const g = (0, e.m)(); return (0, o.useQuery)([f, D], () => D ? g.IBMQ.Jobs.getJob(D) : null) }
        },
        56464: (b, P, t) => {
            t.d(P, { En: () => C, hy: () => m, s7: () => T });
            var o = t(22751);

            function e(a) { return (0, o.Z)(a.group) && (0, o.Z)(a.project) }

            function f(a) { return !(0, o.Z)(a.group) && (0, o.Z)(a.project) }

            function h(a) { return !(0, o.Z)(a.group) && !(0, o.Z)(a.project) }

            function D(a) { if (h(a)) return InstanceType.PROJECT; if (f(a)) return InstanceType.GROUP; if (e(a)) return InstanceType.HUB; throw new Error("Invalid instance format") }

            function g(a) { if (h(a)) return { hub: a.hub, group: a.group }; if (f(a)) return { hub: a.hub } }

            function C(a) { return a ? h(a) ? `${a.hub.name}/${a.group.name}/${a.project.name}` : f(a) ? `${a.hub.name}/${a.group.name}` : e(a) ? `${a.hub.name}` : "" : "" }

            function T(a) { return a.hub && a.group && a.project ? `${a.hub}/${a.group}/${a.project}` : a.hub && a.group ? `${a.hub}/${a.group}` : a.hub ? `${a.hub}` : "" }

            function L(a) { return (0, o.Z)(a.group) && (0, o.Z)(a.project) }

            function y(a) { return !(0, o.Z)(a.group) && (0, o.Z)(a.project) }

            function A(a) { return !(0, o.Z)(a.group) && !(0, o.Z)(a.project) }

            function m(a) { return a ? A(a) ? `${a.hub.name}/${a.group.name}/${a.project.name}` : y(a) ? `${a.hub.name}/${a.group.name}` : L(a) ? `${a.hub.name}` : "" : "" }

            function R(a) { return { hub: a.hub.name, group: a.group ? .name, project: a.project ? .name } }
        }
    }
]);