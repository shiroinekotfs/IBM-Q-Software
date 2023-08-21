"use strict";
(self.webpackChunk_quantum_lab_widgets = self.webpackChunk_quantum_lab_widgets || []).push([
    [477], {
        9477: (c, g, i) => {
            i.a(c, async(p, s) => {
                try {
                    let y = function() { return (v === null || v.buffer !== t.memory.buffer) && (v = new Uint8Array(t.memory.buffer)), v },
                        H = function(n, e) { return b.decode(y().subarray(n, n + e)) },
                        V = function(n) { j === r.length && r.push(r.length + 1); const e = j; return j = r[e], r[e] = n, e },
                        x = function(n) { return r[n] },
                        X = function(n, e, f) {
                            if (f === void 0) {
                                const d = z.encode(n),
                                    N = e(d.length);
                                return y().subarray(N, N + d.length).set(d), J = d.length, N
                            }
                            let a = n.length,
                                l = e(a);
                            const T = y();
                            let o = 0;
                            for (; o < a; o++) {
                                const d = n.charCodeAt(o);
                                if (d > 127) break;
                                T[l + o] = d
                            }
                            if (o !== a) {
                                o !== 0 && (n = n.slice(o)), l = f(l, a, a = o + n.length * 3);
                                const d = y().subarray(l + o, l + a);
                                o += Q(n, d).written
                            }
                            return J = o, l
                        },
                        F = function() { return (S === null || S.buffer !== t.memory.buffer) && (S = new Int32Array(t.memory.buffer)), S },
                        Y = function(n) { if (w == 1) throw new Error("out of js stack"); return r[--w] = n, w },
                        Z = function(n) { n < 36 || (r[n] = j, j = n) },
                        $ = function(n) { const e = x(n); return Z(n), e },
                        k = function(n) { try { var e = t.get_phase_disk_data(Y(n)); return $(e) } finally { r[w++] = void 0 } },
                        q = function(n, e) { var f = JSON.parse(H(n, e)); return V(f) },
                        A = function(n, e) {
                            const f = x(e);
                            var a = JSON.stringify(f === void 0 ? null : f),
                                l = X(a, t.__wbindgen_malloc, t.__wbindgen_realloc),
                                T = J;
                            F()[n / 4 + 1] = T, F()[n / 4 + 0] = l
                        };
                    i.r(g), i.d(g, { __wbindgen_json_parse: () => q, __wbindgen_json_serialize: () => A, get_phase_disk_data: () => k });
                    var t = i(7660);
                    c = i.hmd(c);
                    var h = p([t]);
                    t = (h.then ? (await h)() : h)[0];
                    const u = typeof TextDecoder > "u" ? (0, c.require)("util").TextDecoder : TextDecoder;
                    let b = new u("utf-8", { ignoreBOM: !0, fatal: !0 });
                    b.decode();
                    let v = null;
                    const r = new Array(32).fill(void 0);
                    r.push(void 0, null, !0, !1);
                    let j = r.length,
                        J = 0;
                    const G = typeof TextEncoder > "u" ? (0, c.require)("util").TextEncoder : TextEncoder;
                    let z = new G("utf-8");
                    const Q = typeof z.encodeInto == "function" ? function(n, e) { return z.encodeInto(n, e) } : function(n, e) { const f = z.encode(n); return e.set(f), { read: n.length, written: f.length } };
                    let S = null,
                        w = 32;
                    s()
                } catch (u) { s(u) }
            })
        },
        7660: (c, g, i) => {
            var p = ([s]) => i.v(g, c.id, "7ce7c3479eb9a3c56784", { "./composer_next_utils_wasm_bg.js": { __wbindgen_json_parse: s.__wbindgen_json_parse, __wbindgen_json_serialize: s.__wbindgen_json_serialize } });
            i.a(c, async(s, t) => {
                try {
                    var u = i(9477),
                        h = s([u]),
                        [u] = h.then ? (await h)() : h;
                    await i.v(g, c.id, "7ce7c3479eb9a3c56784", { "./composer_next_utils_wasm_bg.js": { __wbindgen_json_parse: u.__wbindgen_json_parse, __wbindgen_json_serialize: u.__wbindgen_json_serialize } }), t()
                } catch (b) { t(b) }
            }, 1)
        }
    }
]);