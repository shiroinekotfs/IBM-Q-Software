"use strict";
(self.webpackChunk_quantum_lab_ui = self.webpackChunk_quantum_lab_ui || []).push([
    [790], {
        14207: (Ie, se, z) => {
            z.d(se, { Z: () => It });
            var Jt = z(81765),
                Rt = z.n(Jt),
                he = z(56271),
                ne = z.n(he),
                Wt = z(89938),
                Ft = z.n(Wt),
                ae = z(63286),
                _t = z(56001),
                de = z(76343);

            function _e() { return _e = Object.assign || function(it) { for (var bt = 1; bt < arguments.length; bt++) { var Et = arguments[bt]; for (var gt in Et) Object.prototype.hasOwnProperty.call(Et, gt) && (it[gt] = Et[gt]) } return it }, _e.apply(this, arguments) }

            function ie(it, bt, Et) { return bt in it ? Object.defineProperty(it, bt, { value: Et, enumerable: !0, configurable: !0, writable: !0 }) : it[bt] = Et, it }

            function Qt(it, bt) {
                if (it == null) return {};
                var Et = $t(it, bt),
                    gt, pt;
                if (Object.getOwnPropertySymbols) { var kt = Object.getOwnPropertySymbols(it); for (pt = 0; pt < kt.length; pt++) gt = kt[pt], !(bt.indexOf(gt) >= 0) && (!Object.prototype.propertyIsEnumerable.call(it, gt) || (Et[gt] = it[gt])) }
                return Et
            }

            function $t(it, bt) {
                if (it == null) return {};
                var Et = {},
                    gt = Object.keys(it),
                    pt, kt;
                for (kt = 0; kt < gt.length; kt++) pt = gt[kt], !(bt.indexOf(pt) >= 0) && (Et[pt] = it[pt]);
                return Et
            }
            var yt = ae.Z.prefix,
                qt = function(bt) {
                    var Et, gt = bt.className,
                        pt = bt.size,
                        kt = bt.inline,
                        re = Qt(bt, ["className", "size", "inline"]),
                        Ht = Ft()(gt, (Et = {}, ie(Et, "".concat(yt, "--skeleton"), !0), ie(Et, "".concat(yt, "--dropdown-v2"), !0), ie(Et, "".concat(yt, "--list-box"), !0), ie(Et, "".concat(yt, "--form-item"), !0), ie(Et, "".concat(yt, "--list-box--").concat(pt), pt), Et));
                    return ne().createElement("div", _e({ className: Ht }, re), ne().createElement("div", { className: "".concat(yt, "--list-box__field") }, ne().createElement("span", { className: "".concat(yt, "--list-box__label") })))
                };
            qt.propTypes = { className: Rt().string, inline: (0, _t.Z)(Rt().bool, "The `inline` prop has been deprecated and will\n    be removed in the next major release. To specify the inline variant of Dropdown, please use the `type` prop."), size: de.u };
            const It = qt
        },
        4688: (Ie, se, z) => {
            z.d(se, { Z: () => qt });
            var Jt = z(99788),
                Rt = z(86205),
                he = z(87500);

            function ne(It, it, bt, Et) {
                for (var gt = bt - 1, pt = It.length; ++gt < pt;)
                    if (Et(It[gt], it)) return gt;
                return -1
            }
            const Wt = ne;
            var Ft = z(20771),
                ae = z(33657),
                _t = Array.prototype,
                de = _t.splice;

            function _e(It, it, bt, Et) {
                var gt = Et ? Wt : he.Z,
                    pt = -1,
                    kt = it.length,
                    re = It;
                for (It === it && (it = (0, ae.Z)(it)), bt && (re = (0, Rt.Z)(It, (0, Ft.Z)(bt))); ++pt < kt;)
                    for (var Ht = 0, Vt = it[pt], ye = bt ? bt(Vt) : Vt;
                        (Ht = gt(re, ye, Ht, Et)) > -1;) re !== It && de.call(re, Ht, 1), de.call(It, Ht, 1);
                return It
            }
            const ie = _e;

            function Qt(It, it) { return It && It.length && it && it.length ? ie(It, it) : It }
            const $t = Qt;
            var yt = (0, Jt.Z)($t);
            const qt = yt
        },
        67733: (Ie, se, z) => {
            z.d(se, { _: () => xt });
            const Jt = Object.prototype.toString;

            function Rt(l) { return Jt.call(l).endsWith("Array]") }

            function he(l) {
                var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                if (!Rt(l)) throw new TypeError("input must be an array");
                if (l.length === 0) throw new TypeError("input must not be empty");
                var i = r.fromIndex,
                    t = i === void 0 ? 0 : i,
                    n = r.toIndex,
                    s = n === void 0 ? l.length : n;
                if (t < 0 || t >= l.length || !Number.isInteger(t)) throw new Error("fromIndex must be a positive integer smaller than length");
                if (s <= t || s > l.length || !Number.isInteger(s)) throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");
                for (var c = l[t], g = t + 1; g < s; g++) l[g] > c && (c = l[g]);
                return c
            }

            function ne(l) {
                var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                if (!Rt(l)) throw new TypeError("input must be an array");
                if (l.length === 0) throw new TypeError("input must not be empty");
                var i = r.fromIndex,
                    t = i === void 0 ? 0 : i,
                    n = r.toIndex,
                    s = n === void 0 ? l.length : n;
                if (t < 0 || t >= l.length || !Number.isInteger(t)) throw new Error("fromIndex must be a positive integer smaller than length");
                if (s <= t || s > l.length || !Number.isInteger(s)) throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");
                for (var c = l[t], g = t + 1; g < s; g++) l[g] < c && (c = l[g]);
                return c
            }

            function Wt(l) {
                var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                if (Rt(l)) { if (l.length === 0) throw new TypeError("input must not be empty") } else throw new TypeError("input must be an array");
                var i;
                if (r.output !== void 0) {
                    if (!Rt(r.output)) throw new TypeError("output option must be an array if specified");
                    i = r.output
                } else i = new Array(l.length);
                var t = ne(l),
                    n = he(l);
                if (t === n) throw new RangeError("minimum and maximum input values are equal. Cannot rescale a constant array");
                var s = r.min,
                    c = s === void 0 ? r.autoMinMax ? t : 0 : s,
                    g = r.max,
                    w = g === void 0 ? r.autoMinMax ? n : 1 : g;
                if (c >= w) throw new RangeError("min option must be smaller than max option");
                for (var u = (w - c) / (n - t), E = 0; E < l.length; E++) i[E] = (l[E] - t) * u + c;
                return i
            }
            const Ft = " ".repeat(2),
                ae = " ".repeat(4);

            function _t() { return de(this) }

            function de(l, r = {}) { const { maxRows: i = 15, maxColumns: t = 10, maxNumSize: n = 8 } = r; return `${l.constructor.name} {
${Ft}[
${ae}${_e(l,i,t,n)}
${Ft}]
${Ft}rows: ${l.rows}
${Ft}columns: ${l.columns}
}` }

            function _e(l, r, i, t) {
                const { rows: n, columns: s } = l, c = Math.min(n, r), g = Math.min(s, i), w = [];
                for (let u = 0; u < c; u++) {
                    let E = [];
                    for (let p = 0; p < g; p++) E.push(ie(l.get(u, p), t));
                    w.push(`${E.join(" ")}`)
                }
                return g !== s && (w[w.length - 1] += ` ... ${s-i} more columns`), c !== n && w.push(`... ${n-r} more rows`), w.join(`
${ae}`)
            }

            function ie(l, r) {
                const i = String(l);
                if (i.length <= r) return i.padEnd(r, " ");
                const t = l.toPrecision(r - 2);
                if (t.length <= r) return t;
                const n = l.toExponential(r - 2),
                    s = n.indexOf("e"),
                    c = n.slice(s);
                return n.slice(0, r - c.length) + c
            }

            function Qt(l, r) {
                l.prototype.add = function(t) { return typeof t == "number" ? this.addS(t) : this.addM(t) }, l.prototype.addS = function(t) {
                    for (let n = 0; n < this.rows; n++)
                        for (let s = 0; s < this.columns; s++) this.set(n, s, this.get(n, s) + t);
                    return this
                }, l.prototype.addM = function(t) {
                    if (t = r.checkMatrix(t), this.rows !== t.rows || this.columns !== t.columns) throw new RangeError("Matrices dimensions must be equal");
                    for (let n = 0; n < this.rows; n++)
                        for (let s = 0; s < this.columns; s++) this.set(n, s, this.get(n, s) + t.get(n, s));
                    return this
                }, l.add = function(t, n) { return new r(t).add(n) }, l.prototype.sub = function(t) { return typeof t == "number" ? this.subS(t) : this.subM(t) }, l.prototype.subS = function(t) {
                    for (let n = 0; n < this.rows; n++)
                        for (let s = 0; s < this.columns; s++) this.set(n, s, this.get(n, s) - t);
                    return this
                }, l.prototype.subM = function(t) {
                    if (t = r.checkMatrix(t), this.rows !== t.rows || this.columns !== t.columns) throw new RangeError("Matrices dimensions must be equal");
                    for (let n = 0; n < this.rows; n++)
                        for (let s = 0; s < this.columns; s++) this.set(n, s, this.get(n, s) - t.get(n, s));
                    return this
                }, l.sub = function(t, n) { return new r(t).sub(n) }, l.prototype.subtract = l.prototype.sub, l.prototype.subtractS = l.prototype.subS, l.prototype.subtractM = l.prototype.subM, l.subtract = l.sub, l.prototype.mul = function(t) { return typeof t == "number" ? this.mulS(t) : this.mulM(t) }, l.prototype.mulS = function(t) {
                    for (let n = 0; n < this.rows; n++)
                        for (let s = 0; s < this.columns; s++) this.set(n, s, this.get(n, s) * t);
                    return this
                }, l.prototype.mulM = function(t) {
                    if (t = r.checkMatrix(t), this.rows !== t.rows || this.columns !== t.columns) throw new RangeError("Matrices dimensions must be equal");
                    for (let n = 0; n < this.rows; n++)
                        for (let s = 0; s < this.columns; s++) this.set(n, s, this.get(n, s) * t.get(n, s));
                    return this
                }, l.mul = function(t, n) { return new r(t).mul(n) }, l.prototype.multiply = l.prototype.mul, l.prototype.multiplyS = l.prototype.mulS, l.prototype.multiplyM = l.prototype.mulM, l.multiply = l.mul, l.prototype.div = function(t) { return typeof t == "number" ? this.divS(t) : this.divM(t) }, l.prototype.divS = function(t) {
                    for (let n = 0; n < this.rows; n++)
                        for (let s = 0; s < this.columns; s++) this.set(n, s, this.get(n, s) / t);
                    return this
                }, l.prototype.divM = function(t) {
                    if (t = r.checkMatrix(t), this.rows !== t.rows || this.columns !== t.columns) throw new RangeError("Matrices dimensions must be equal");
                    for (let n = 0; n < this.rows; n++)
                        for (let s = 0; s < this.columns; s++) this.set(n, s, this.get(n, s) / t.get(n, s));
                    return this
                }, l.div = function(t, n) { return new r(t).div(n) }, l.prototype.divide = l.prototype.div, l.prototype.divideS = l.prototype.divS, l.prototype.divideM = l.prototype.divM, l.divide = l.div, l.prototype.mod = function(t) { return typeof t == "number" ? this.modS(t) : this.modM(t) }, l.prototype.modS = function(t) {
                    for (let n = 0; n < this.rows; n++)
                        for (let s = 0; s < this.columns; s++) this.set(n, s, this.get(n, s) % t);
                    return this
                }, l.prototype.modM = function(t) {
                    if (t = r.checkMatrix(t), this.rows !== t.rows || this.columns !== t.columns) throw new RangeError("Matrices dimensions must be equal");
                    for (let n = 0; n < this.rows; n++)
                        for (let s = 0; s < this.columns; s++) this.set(n, s, this.get(n, s) % t.get(n, s));
                    return this
                }, l.mod = function(t, n) { return new r(t).mod(n) }, l.prototype.modulus = l.prototype.mod, l.prototype.modulusS = l.prototype.modS, l.prototype.modulusM = l.prototype.modM, l.modulus = l.mod, l.prototype.and = function(t) { return typeof t == "number" ? this.andS(t) : this.andM(t) }, l.prototype.andS = function(t) {
                    for (let n = 0; n < this.rows; n++)
                        for (let s = 0; s < this.columns; s++) this.set(n, s, this.get(n, s) & t);
                    return this
                }, l.prototype.andM = function(t) {
                    if (t = r.checkMatrix(t), this.rows !== t.rows || this.columns !== t.columns) throw new RangeError("Matrices dimensions must be equal");
                    for (let n = 0; n < this.rows; n++)
                        for (let s = 0; s < this.columns; s++) this.set(n, s, this.get(n, s) & t.get(n, s));
                    return this
                }, l.and = function(t, n) { return new r(t).and(n) }, l.prototype.or = function(t) { return typeof t == "number" ? this.orS(t) : this.orM(t) }, l.prototype.orS = function(t) {
                    for (let n = 0; n < this.rows; n++)
                        for (let s = 0; s < this.columns; s++) this.set(n, s, this.get(n, s) | t);
                    return this
                }, l.prototype.orM = function(t) {
                    if (t = r.checkMatrix(t), this.rows !== t.rows || this.columns !== t.columns) throw new RangeError("Matrices dimensions must be equal");
                    for (let n = 0; n < this.rows; n++)
                        for (let s = 0; s < this.columns; s++) this.set(n, s, this.get(n, s) | t.get(n, s));
                    return this
                }, l.or = function(t, n) { return new r(t).or(n) }, l.prototype.xor = function(t) { return typeof t == "number" ? this.xorS(t) : this.xorM(t) }, l.prototype.xorS = function(t) {
                    for (let n = 0; n < this.rows; n++)
                        for (let s = 0; s < this.columns; s++) this.set(n, s, this.get(n, s) ^ t);
                    return this
                }, l.prototype.xorM = function(t) {
                    if (t = r.checkMatrix(t), this.rows !== t.rows || this.columns !== t.columns) throw new RangeError("Matrices dimensions must be equal");
                    for (let n = 0; n < this.rows; n++)
                        for (let s = 0; s < this.columns; s++) this.set(n, s, this.get(n, s) ^ t.get(n, s));
                    return this
                }, l.xor = function(t, n) { return new r(t).xor(n) }, l.prototype.leftShift = function(t) { return typeof t == "number" ? this.leftShiftS(t) : this.leftShiftM(t) }, l.prototype.leftShiftS = function(t) {
                    for (let n = 0; n < this.rows; n++)
                        for (let s = 0; s < this.columns; s++) this.set(n, s, this.get(n, s) << t);
                    return this
                }, l.prototype.leftShiftM = function(t) {
                    if (t = r.checkMatrix(t), this.rows !== t.rows || this.columns !== t.columns) throw new RangeError("Matrices dimensions must be equal");
                    for (let n = 0; n < this.rows; n++)
                        for (let s = 0; s < this.columns; s++) this.set(n, s, this.get(n, s) << t.get(n, s));
                    return this
                }, l.leftShift = function(t, n) { return new r(t).leftShift(n) }, l.prototype.signPropagatingRightShift = function(t) { return typeof t == "number" ? this.signPropagatingRightShiftS(t) : this.signPropagatingRightShiftM(t) }, l.prototype.signPropagatingRightShiftS = function(t) {
                    for (let n = 0; n < this.rows; n++)
                        for (let s = 0; s < this.columns; s++) this.set(n, s, this.get(n, s) >> t);
                    return this
                }, l.prototype.signPropagatingRightShiftM = function(t) {
                    if (t = r.checkMatrix(t), this.rows !== t.rows || this.columns !== t.columns) throw new RangeError("Matrices dimensions must be equal");
                    for (let n = 0; n < this.rows; n++)
                        for (let s = 0; s < this.columns; s++) this.set(n, s, this.get(n, s) >> t.get(n, s));
                    return this
                }, l.signPropagatingRightShift = function(t, n) { return new r(t).signPropagatingRightShift(n) }, l.prototype.rightShift = function(t) { return typeof t == "number" ? this.rightShiftS(t) : this.rightShiftM(t) }, l.prototype.rightShiftS = function(t) {
                    for (let n = 0; n < this.rows; n++)
                        for (let s = 0; s < this.columns; s++) this.set(n, s, this.get(n, s) >>> t);
                    return this
                }, l.prototype.rightShiftM = function(t) {
                    if (t = r.checkMatrix(t), this.rows !== t.rows || this.columns !== t.columns) throw new RangeError("Matrices dimensions must be equal");
                    for (let n = 0; n < this.rows; n++)
                        for (let s = 0; s < this.columns; s++) this.set(n, s, this.get(n, s) >>> t.get(n, s));
                    return this
                }, l.rightShift = function(t, n) { return new r(t).rightShift(n) }, l.prototype.zeroFillRightShift = l.prototype.rightShift, l.prototype.zeroFillRightShiftS = l.prototype.rightShiftS, l.prototype.zeroFillRightShiftM = l.prototype.rightShiftM, l.zeroFillRightShift = l.rightShift, l.prototype.not = function() {
                    for (let t = 0; t < this.rows; t++)
                        for (let n = 0; n < this.columns; n++) this.set(t, n, ~this.get(t, n));
                    return this
                }, l.not = function(t) { return new r(t).not() }, l.prototype.abs = function() {
                    for (let t = 0; t < this.rows; t++)
                        for (let n = 0; n < this.columns; n++) this.set(t, n, Math.abs(this.get(t, n)));
                    return this
                }, l.abs = function(t) { return new r(t).abs() }, l.prototype.acos = function() {
                    for (let t = 0; t < this.rows; t++)
                        for (let n = 0; n < this.columns; n++) this.set(t, n, Math.acos(this.get(t, n)));
                    return this
                }, l.acos = function(t) { return new r(t).acos() }, l.prototype.acosh = function() {
                    for (let t = 0; t < this.rows; t++)
                        for (let n = 0; n < this.columns; n++) this.set(t, n, Math.acosh(this.get(t, n)));
                    return this
                }, l.acosh = function(t) { return new r(t).acosh() }, l.prototype.asin = function() {
                    for (let t = 0; t < this.rows; t++)
                        for (let n = 0; n < this.columns; n++) this.set(t, n, Math.asin(this.get(t, n)));
                    return this
                }, l.asin = function(t) { return new r(t).asin() }, l.prototype.asinh = function() {
                    for (let t = 0; t < this.rows; t++)
                        for (let n = 0; n < this.columns; n++) this.set(t, n, Math.asinh(this.get(t, n)));
                    return this
                }, l.asinh = function(t) { return new r(t).asinh() }, l.prototype.atan = function() {
                    for (let t = 0; t < this.rows; t++)
                        for (let n = 0; n < this.columns; n++) this.set(t, n, Math.atan(this.get(t, n)));
                    return this
                }, l.atan = function(t) { return new r(t).atan() }, l.prototype.atanh = function() {
                    for (let t = 0; t < this.rows; t++)
                        for (let n = 0; n < this.columns; n++) this.set(t, n, Math.atanh(this.get(t, n)));
                    return this
                }, l.atanh = function(t) { return new r(t).atanh() }, l.prototype.cbrt = function() {
                    for (let t = 0; t < this.rows; t++)
                        for (let n = 0; n < this.columns; n++) this.set(t, n, Math.cbrt(this.get(t, n)));
                    return this
                }, l.cbrt = function(t) { return new r(t).cbrt() }, l.prototype.ceil = function() {
                    for (let t = 0; t < this.rows; t++)
                        for (let n = 0; n < this.columns; n++) this.set(t, n, Math.ceil(this.get(t, n)));
                    return this
                }, l.ceil = function(t) { return new r(t).ceil() }, l.prototype.clz32 = function() {
                    for (let t = 0; t < this.rows; t++)
                        for (let n = 0; n < this.columns; n++) this.set(t, n, Math.clz32(this.get(t, n)));
                    return this
                }, l.clz32 = function(t) { return new r(t).clz32() }, l.prototype.cos = function() {
                    for (let t = 0; t < this.rows; t++)
                        for (let n = 0; n < this.columns; n++) this.set(t, n, Math.cos(this.get(t, n)));
                    return this
                }, l.cos = function(t) { return new r(t).cos() }, l.prototype.cosh = function() {
                    for (let t = 0; t < this.rows; t++)
                        for (let n = 0; n < this.columns; n++) this.set(t, n, Math.cosh(this.get(t, n)));
                    return this
                }, l.cosh = function(t) { return new r(t).cosh() }, l.prototype.exp = function() {
                    for (let t = 0; t < this.rows; t++)
                        for (let n = 0; n < this.columns; n++) this.set(t, n, Math.exp(this.get(t, n)));
                    return this
                }, l.exp = function(t) { return new r(t).exp() }, l.prototype.expm1 = function() {
                    for (let t = 0; t < this.rows; t++)
                        for (let n = 0; n < this.columns; n++) this.set(t, n, Math.expm1(this.get(t, n)));
                    return this
                }, l.expm1 = function(t) { return new r(t).expm1() }, l.prototype.floor = function() {
                    for (let t = 0; t < this.rows; t++)
                        for (let n = 0; n < this.columns; n++) this.set(t, n, Math.floor(this.get(t, n)));
                    return this
                }, l.floor = function(t) { return new r(t).floor() }, l.prototype.fround = function() {
                    for (let t = 0; t < this.rows; t++)
                        for (let n = 0; n < this.columns; n++) this.set(t, n, Math.fround(this.get(t, n)));
                    return this
                }, l.fround = function(t) { return new r(t).fround() }, l.prototype.log = function() {
                    for (let t = 0; t < this.rows; t++)
                        for (let n = 0; n < this.columns; n++) this.set(t, n, Math.log(this.get(t, n)));
                    return this
                }, l.log = function(t) { return new r(t).log() }, l.prototype.log1p = function() {
                    for (let t = 0; t < this.rows; t++)
                        for (let n = 0; n < this.columns; n++) this.set(t, n, Math.log1p(this.get(t, n)));
                    return this
                }, l.log1p = function(t) { return new r(t).log1p() }, l.prototype.log10 = function() {
                    for (let t = 0; t < this.rows; t++)
                        for (let n = 0; n < this.columns; n++) this.set(t, n, Math.log10(this.get(t, n)));
                    return this
                }, l.log10 = function(t) { return new r(t).log10() }, l.prototype.log2 = function() {
                    for (let t = 0; t < this.rows; t++)
                        for (let n = 0; n < this.columns; n++) this.set(t, n, Math.log2(this.get(t, n)));
                    return this
                }, l.log2 = function(t) { return new r(t).log2() }, l.prototype.round = function() {
                    for (let t = 0; t < this.rows; t++)
                        for (let n = 0; n < this.columns; n++) this.set(t, n, Math.round(this.get(t, n)));
                    return this
                }, l.round = function(t) { return new r(t).round() }, l.prototype.sign = function() {
                    for (let t = 0; t < this.rows; t++)
                        for (let n = 0; n < this.columns; n++) this.set(t, n, Math.sign(this.get(t, n)));
                    return this
                }, l.sign = function(t) { return new r(t).sign() }, l.prototype.sin = function() {
                    for (let t = 0; t < this.rows; t++)
                        for (let n = 0; n < this.columns; n++) this.set(t, n, Math.sin(this.get(t, n)));
                    return this
                }, l.sin = function(t) { return new r(t).sin() }, l.prototype.sinh = function() {
                    for (let t = 0; t < this.rows; t++)
                        for (let n = 0; n < this.columns; n++) this.set(t, n, Math.sinh(this.get(t, n)));
                    return this
                }, l.sinh = function(t) { return new r(t).sinh() }, l.prototype.sqrt = function() {
                    for (let t = 0; t < this.rows; t++)
                        for (let n = 0; n < this.columns; n++) this.set(t, n, Math.sqrt(this.get(t, n)));
                    return this
                }, l.sqrt = function(t) { return new r(t).sqrt() }, l.prototype.tan = function() {
                    for (let t = 0; t < this.rows; t++)
                        for (let n = 0; n < this.columns; n++) this.set(t, n, Math.tan(this.get(t, n)));
                    return this
                }, l.tan = function(t) { return new r(t).tan() }, l.prototype.tanh = function() {
                    for (let t = 0; t < this.rows; t++)
                        for (let n = 0; n < this.columns; n++) this.set(t, n, Math.tanh(this.get(t, n)));
                    return this
                }, l.tanh = function(t) { return new r(t).tanh() }, l.prototype.trunc = function() {
                    for (let t = 0; t < this.rows; t++)
                        for (let n = 0; n < this.columns; n++) this.set(t, n, Math.trunc(this.get(t, n)));
                    return this
                }, l.trunc = function(t) { return new r(t).trunc() }, l.pow = function(t, n) { return new r(t).pow(n) }, l.prototype.pow = function(t) { return typeof t == "number" ? this.powS(t) : this.powM(t) }, l.prototype.powS = function(t) {
                    for (let n = 0; n < this.rows; n++)
                        for (let s = 0; s < this.columns; s++) this.set(n, s, Math.pow(this.get(n, s), t));
                    return this
                }, l.prototype.powM = function(t) {
                    if (t = r.checkMatrix(t), this.rows !== t.rows || this.columns !== t.columns) throw new RangeError("Matrices dimensions must be equal");
                    for (let n = 0; n < this.rows; n++)
                        for (let s = 0; s < this.columns; s++) this.set(n, s, Math.pow(this.get(n, s), t.get(n, s)));
                    return this
                }
            }

            function $t(l, r, i) { let t = i ? l.rows : l.rows - 1; if (r < 0 || r > t) throw new RangeError("Row index out of range") }

            function yt(l, r, i) { let t = i ? l.columns : l.columns - 1; if (r < 0 || r > t) throw new RangeError("Column index out of range") }

            function qt(l, r) { if (r.to1DArray && (r = r.to1DArray()), r.length !== l.columns) throw new RangeError("vector size must be the same as the number of columns"); return r }

            function It(l, r) { if (r.to1DArray && (r = r.to1DArray()), r.length !== l.rows) throw new RangeError("vector size must be the same as the number of rows"); return r }

            function it(l, r) {
                if (!Rt(r)) throw new TypeError("row indices must be an array");
                for (let i = 0; i < r.length; i++)
                    if (r[i] < 0 || r[i] >= l.rows) throw new RangeError("row indices are out of range")
            }

            function bt(l, r) {
                if (!Rt(r)) throw new TypeError("column indices must be an array");
                for (let i = 0; i < r.length; i++)
                    if (r[i] < 0 || r[i] >= l.columns) throw new RangeError("column indices are out of range")
            }

            function Et(l, r, i, t, n) { if (arguments.length !== 5) throw new RangeError("expected 4 arguments"); if (pt("startRow", r), pt("endRow", i), pt("startColumn", t), pt("endColumn", n), r > i || t > n || r < 0 || r >= l.rows || i < 0 || i >= l.rows || t < 0 || t >= l.columns || n < 0 || n >= l.columns) throw new RangeError("Submatrix indices are out of range") }

            function gt(l, r = 0) { let i = []; for (let t = 0; t < l; t++) i.push(r); return i }

            function pt(l, r) { if (typeof r != "number") throw new TypeError(`${l} must be a number`) }

            function kt(l) { if (l.isEmpty()) throw new Error("Empty matrix has no elements to index") }

            function re(l) {
                let r = gt(l.rows);
                for (let i = 0; i < l.rows; ++i)
                    for (let t = 0; t < l.columns; ++t) r[i] += l.get(i, t);
                return r
            }

            function Ht(l) {
                let r = gt(l.columns);
                for (let i = 0; i < l.rows; ++i)
                    for (let t = 0; t < l.columns; ++t) r[t] += l.get(i, t);
                return r
            }

            function Vt(l) {
                let r = 0;
                for (let i = 0; i < l.rows; i++)
                    for (let t = 0; t < l.columns; t++) r += l.get(i, t);
                return r
            }

            function ye(l) {
                let r = gt(l.rows, 1);
                for (let i = 0; i < l.rows; ++i)
                    for (let t = 0; t < l.columns; ++t) r[i] *= l.get(i, t);
                return r
            }

            function Tt(l) {
                let r = gt(l.columns, 1);
                for (let i = 0; i < l.rows; ++i)
                    for (let t = 0; t < l.columns; ++t) r[t] *= l.get(i, t);
                return r
            }

            function Ue(l) {
                let r = 1;
                for (let i = 0; i < l.rows; i++)
                    for (let t = 0; t < l.columns; t++) r *= l.get(i, t);
                return r
            }

            function Gt(l, r, i) {
                const t = l.rows,
                    n = l.columns,
                    s = [];
                for (let c = 0; c < t; c++) {
                    let g = 0,
                        w = 0,
                        u = 0;
                    for (let E = 0; E < n; E++) u = l.get(c, E) - i[c], g += u, w += u * u;
                    r ? s.push((w - g * g / n) / (n - 1)) : s.push((w - g * g / n) / n)
                }
                return s
            }

            function ge(l, r, i) {
                const t = l.rows,
                    n = l.columns,
                    s = [];
                for (let c = 0; c < n; c++) {
                    let g = 0,
                        w = 0,
                        u = 0;
                    for (let E = 0; E < t; E++) u = l.get(E, c) - i[c], g += u, w += u * u;
                    r ? s.push((w - g * g / t) / (t - 1)) : s.push((w - g * g / t) / t)
                }
                return s
            }

            function be(l, r, i) {
                const t = l.rows,
                    n = l.columns,
                    s = t * n;
                let c = 0,
                    g = 0,
                    w = 0;
                for (let u = 0; u < t; u++)
                    for (let E = 0; E < n; E++) w = l.get(u, E) - i, c += w, g += w * w;
                return r ? (g - c * c / s) / (s - 1) : (g - c * c / s) / s
            }

            function Ee(l, r) {
                for (let i = 0; i < l.rows; i++)
                    for (let t = 0; t < l.columns; t++) l.set(i, t, l.get(i, t) - r[i])
            }

            function Se(l, r) {
                for (let i = 0; i < l.rows; i++)
                    for (let t = 0; t < l.columns; t++) l.set(i, t, l.get(i, t) - r[t])
            }

            function pe(l, r) {
                for (let i = 0; i < l.rows; i++)
                    for (let t = 0; t < l.columns; t++) l.set(i, t, l.get(i, t) - r)
            }

            function Re(l) {
                const r = [];
                for (let i = 0; i < l.rows; i++) {
                    let t = 0;
                    for (let n = 0; n < l.columns; n++) t += Math.pow(l.get(i, n), 2) / (l.columns - 1);
                    r.push(Math.sqrt(t))
                }
                return r
            }

            function Te(l, r) {
                for (let i = 0; i < l.rows; i++)
                    for (let t = 0; t < l.columns; t++) l.set(i, t, l.get(i, t) / r[i])
            }

            function xe(l) {
                const r = [];
                for (let i = 0; i < l.columns; i++) {
                    let t = 0;
                    for (let n = 0; n < l.rows; n++) t += Math.pow(l.get(n, i), 2) / (l.rows - 1);
                    r.push(Math.sqrt(t))
                }
                return r
            }

            function ke(l, r) {
                for (let i = 0; i < l.rows; i++)
                    for (let t = 0; t < l.columns; t++) l.set(i, t, l.get(i, t) / r[t])
            }

            function ce(l) {
                const r = l.size - 1;
                let i = 0;
                for (let t = 0; t < l.columns; t++)
                    for (let n = 0; n < l.rows; n++) i += Math.pow(l.get(n, t), 2) / r;
                return Math.sqrt(i)
            }

            function Q(l, r) {
                for (let i = 0; i < l.rows; i++)
                    for (let t = 0; t < l.columns; t++) l.set(i, t, l.get(i, t) / r)
            }
            class A {
                static from1DArray(r, i, t) {
                    if (r * i !== t.length) throw new RangeError("data length does not match given dimensions");
                    let s = new R(r, i);
                    for (let c = 0; c < r; c++)
                        for (let g = 0; g < i; g++) s.set(c, g, t[c * i + g]);
                    return s
                }
                static rowVector(r) { let i = new R(1, r.length); for (let t = 0; t < r.length; t++) i.set(0, t, r[t]); return i }
                static columnVector(r) { let i = new R(r.length, 1); for (let t = 0; t < r.length; t++) i.set(t, 0, r[t]); return i }
                static zeros(r, i) { return new R(r, i) }
                static ones(r, i) { return new R(r, i).fill(1) }
                static rand(r, i, t = {}) {
                    if (typeof t != "object") throw new TypeError("options must be an object");
                    const { random: n = Math.random } = t;
                    let s = new R(r, i);
                    for (let c = 0; c < r; c++)
                        for (let g = 0; g < i; g++) s.set(c, g, n());
                    return s
                }
                static randInt(r, i, t = {}) {
                    if (typeof t != "object") throw new TypeError("options must be an object");
                    const { min: n = 0, max: s = 1e3, random: c = Math.random } = t;
                    if (!Number.isInteger(n)) throw new TypeError("min must be an integer");
                    if (!Number.isInteger(s)) throw new TypeError("max must be an integer");
                    if (n >= s) throw new RangeError("min must be smaller than max");
                    let g = s - n,
                        w = new R(r, i);
                    for (let u = 0; u < r; u++)
                        for (let E = 0; E < i; E++) {
                            let p = n + Math.round(c() * g);
                            w.set(u, E, p)
                        }
                    return w
                }
                static eye(r, i, t) {
                    i === void 0 && (i = r), t === void 0 && (t = 1);
                    let n = Math.min(r, i),
                        s = this.zeros(r, i);
                    for (let c = 0; c < n; c++) s.set(c, c, t);
                    return s
                }
                static diag(r, i, t) {
                    let n = r.length;
                    i === void 0 && (i = n), t === void 0 && (t = i);
                    let s = Math.min(n, i, t),
                        c = this.zeros(i, t);
                    for (let g = 0; g < s; g++) c.set(g, g, r[g]);
                    return c
                }
                static min(r, i) {
                    r = this.checkMatrix(r), i = this.checkMatrix(i);
                    let t = r.rows,
                        n = r.columns,
                        s = new R(t, n);
                    for (let c = 0; c < t; c++)
                        for (let g = 0; g < n; g++) s.set(c, g, Math.min(r.get(c, g), i.get(c, g)));
                    return s
                }
                static max(r, i) {
                    r = this.checkMatrix(r), i = this.checkMatrix(i);
                    let t = r.rows,
                        n = r.columns,
                        s = new this(t, n);
                    for (let c = 0; c < t; c++)
                        for (let g = 0; g < n; g++) s.set(c, g, Math.max(r.get(c, g), i.get(c, g)));
                    return s
                }
                static checkMatrix(r) { return A.isMatrix(r) ? r : new R(r) }
                static isMatrix(r) { return r != null && r.klass === "Matrix" }
                get size() { return this.rows * this.columns }
                apply(r) {
                    if (typeof r != "function") throw new TypeError("callback must be a function");
                    for (let i = 0; i < this.rows; i++)
                        for (let t = 0; t < this.columns; t++) r.call(this, i, t);
                    return this
                }
                to1DArray() {
                    let r = [];
                    for (let i = 0; i < this.rows; i++)
                        for (let t = 0; t < this.columns; t++) r.push(this.get(i, t));
                    return r
                }
                to2DArray() { let r = []; for (let i = 0; i < this.rows; i++) { r.push([]); for (let t = 0; t < this.columns; t++) r[i].push(this.get(i, t)) } return r }
                toJSON() { return this.to2DArray() }
                isRowVector() { return this.rows === 1 }
                isColumnVector() { return this.columns === 1 }
                isVector() { return this.rows === 1 || this.columns === 1 }
                isSquare() { return this.rows === this.columns }
                isEmpty() { return this.rows === 0 || this.columns === 0 }
                isSymmetric() {
                    if (this.isSquare()) {
                        for (let r = 0; r < this.rows; r++)
                            for (let i = 0; i <= r; i++)
                                if (this.get(r, i) !== this.get(i, r)) return !1;
                        return !0
                    }
                    return !1
                }
                isEchelonForm() {
                    let r = 0,
                        i = 0,
                        t = -1,
                        n = !0,
                        s = !1;
                    for (; r < this.rows && n;) {
                        for (i = 0, s = !1; i < this.columns && s === !1;) this.get(r, i) === 0 ? i++ : this.get(r, i) === 1 && i > t ? (s = !0, t = i) : (n = !1, s = !0);
                        r++
                    }
                    return n
                }
                isReducedEchelonForm() {
                    let r = 0,
                        i = 0,
                        t = -1,
                        n = !0,
                        s = !1;
                    for (; r < this.rows && n;) {
                        for (i = 0, s = !1; i < this.columns && s === !1;) this.get(r, i) === 0 ? i++ : this.get(r, i) === 1 && i > t ? (s = !0, t = i) : (n = !1, s = !0);
                        for (let c = i + 1; c < this.rows; c++) this.get(r, c) !== 0 && (n = !1);
                        r++
                    }
                    return n
                }
                echelonForm() {
                    let r = this.clone(),
                        i = 0,
                        t = 0;
                    for (; i < r.rows && t < r.columns;) {
                        let n = i;
                        for (let s = i; s < r.rows; s++) r.get(s, t) > r.get(n, t) && (n = s);
                        if (r.get(n, t) === 0) t++;
                        else {
                            r.swapRows(i, n);
                            let s = r.get(i, t);
                            for (let c = t; c < r.columns; c++) r.set(i, c, r.get(i, c) / s);
                            for (let c = i + 1; c < r.rows; c++) {
                                let g = r.get(c, t) / r.get(i, t);
                                r.set(c, t, 0);
                                for (let w = t + 1; w < r.columns; w++) r.set(c, w, r.get(c, w) - r.get(i, w) * g)
                            }
                            i++, t++
                        }
                    }
                    return r
                }
                reducedEchelonForm() {
                    let r = this.echelonForm(),
                        i = r.columns,
                        t = r.rows,
                        n = t - 1;
                    for (; n >= 0;)
                        if (r.maxRow(n) === 0) n--;
                        else {
                            let s = 0,
                                c = !1;
                            for (; s < t && c === !1;) r.get(n, s) === 1 ? c = !0 : s++;
                            for (let g = 0; g < n; g++) {
                                let w = r.get(g, s);
                                for (let u = s; u < i; u++) {
                                    let E = r.get(g, u) - w * r.get(n, u);
                                    r.set(g, u, E)
                                }
                            }
                            n--
                        }
                    return r
                }
                set() { throw new Error("set method is unimplemented") }
                get() { throw new Error("get method is unimplemented") }
                repeat(r = {}) {
                    if (typeof r != "object") throw new TypeError("options must be an object");
                    const { rows: i = 1, columns: t = 1 } = r;
                    if (!Number.isInteger(i) || i <= 0) throw new TypeError("rows must be a positive integer");
                    if (!Number.isInteger(t) || t <= 0) throw new TypeError("columns must be a positive integer");
                    let n = new R(this.rows * i, this.columns * t);
                    for (let s = 0; s < i; s++)
                        for (let c = 0; c < t; c++) n.setSubMatrix(this, this.rows * s, this.columns * c);
                    return n
                }
                fill(r) {
                    for (let i = 0; i < this.rows; i++)
                        for (let t = 0; t < this.columns; t++) this.set(i, t, r);
                    return this
                }
                neg() { return this.mulS(-1) }
                getRow(r) { $t(this, r); let i = []; for (let t = 0; t < this.columns; t++) i.push(this.get(r, t)); return i }
                getRowVector(r) { return R.rowVector(this.getRow(r)) }
                setRow(r, i) { $t(this, r), i = qt(this, i); for (let t = 0; t < this.columns; t++) this.set(r, t, i[t]); return this }
                swapRows(r, i) {
                    $t(this, r), $t(this, i);
                    for (let t = 0; t < this.columns; t++) {
                        let n = this.get(r, t);
                        this.set(r, t, this.get(i, t)), this.set(i, t, n)
                    }
                    return this
                }
                getColumn(r) { yt(this, r); let i = []; for (let t = 0; t < this.rows; t++) i.push(this.get(t, r)); return i }
                getColumnVector(r) { return R.columnVector(this.getColumn(r)) }
                setColumn(r, i) { yt(this, r), i = It(this, i); for (let t = 0; t < this.rows; t++) this.set(t, r, i[t]); return this }
                swapColumns(r, i) {
                    yt(this, r), yt(this, i);
                    for (let t = 0; t < this.rows; t++) {
                        let n = this.get(t, r);
                        this.set(t, r, this.get(t, i)), this.set(t, i, n)
                    }
                    return this
                }
                addRowVector(r) {
                    r = qt(this, r);
                    for (let i = 0; i < this.rows; i++)
                        for (let t = 0; t < this.columns; t++) this.set(i, t, this.get(i, t) + r[t]);
                    return this
                }
                subRowVector(r) {
                    r = qt(this, r);
                    for (let i = 0; i < this.rows; i++)
                        for (let t = 0; t < this.columns; t++) this.set(i, t, this.get(i, t) - r[t]);
                    return this
                }
                mulRowVector(r) {
                    r = qt(this, r);
                    for (let i = 0; i < this.rows; i++)
                        for (let t = 0; t < this.columns; t++) this.set(i, t, this.get(i, t) * r[t]);
                    return this
                }
                divRowVector(r) {
                    r = qt(this, r);
                    for (let i = 0; i < this.rows; i++)
                        for (let t = 0; t < this.columns; t++) this.set(i, t, this.get(i, t) / r[t]);
                    return this
                }
                addColumnVector(r) {
                    r = It(this, r);
                    for (let i = 0; i < this.rows; i++)
                        for (let t = 0; t < this.columns; t++) this.set(i, t, this.get(i, t) + r[i]);
                    return this
                }
                subColumnVector(r) {
                    r = It(this, r);
                    for (let i = 0; i < this.rows; i++)
                        for (let t = 0; t < this.columns; t++) this.set(i, t, this.get(i, t) - r[i]);
                    return this
                }
                mulColumnVector(r) {
                    r = It(this, r);
                    for (let i = 0; i < this.rows; i++)
                        for (let t = 0; t < this.columns; t++) this.set(i, t, this.get(i, t) * r[i]);
                    return this
                }
                divColumnVector(r) {
                    r = It(this, r);
                    for (let i = 0; i < this.rows; i++)
                        for (let t = 0; t < this.columns; t++) this.set(i, t, this.get(i, t) / r[i]);
                    return this
                }
                mulRow(r, i) { $t(this, r); for (let t = 0; t < this.columns; t++) this.set(r, t, this.get(r, t) * i); return this }
                mulColumn(r, i) { yt(this, r); for (let t = 0; t < this.rows; t++) this.set(t, r, this.get(t, r) * i); return this }
                max(r) {
                    if (this.isEmpty()) return NaN;
                    switch (r) {
                        case "row":
                            {
                                const i = new Array(this.rows).fill(Number.NEGATIVE_INFINITY);
                                for (let t = 0; t < this.rows; t++)
                                    for (let n = 0; n < this.columns; n++) this.get(t, n) > i[t] && (i[t] = this.get(t, n));
                                return i
                            }
                        case "column":
                            {
                                const i = new Array(this.columns).fill(Number.NEGATIVE_INFINITY);
                                for (let t = 0; t < this.rows; t++)
                                    for (let n = 0; n < this.columns; n++) this.get(t, n) > i[n] && (i[n] = this.get(t, n));
                                return i
                            }
                        case void 0:
                            {
                                let i = this.get(0, 0);
                                for (let t = 0; t < this.rows; t++)
                                    for (let n = 0; n < this.columns; n++) this.get(t, n) > i && (i = this.get(t, n));
                                return i
                            }
                        default:
                            throw new Error(`invalid option: ${r}`)
                    }
                }
                maxIndex() {
                    kt(this);
                    let r = this.get(0, 0),
                        i = [0, 0];
                    for (let t = 0; t < this.rows; t++)
                        for (let n = 0; n < this.columns; n++) this.get(t, n) > r && (r = this.get(t, n), i[0] = t, i[1] = n);
                    return i
                }
                min(r) {
                    if (this.isEmpty()) return NaN;
                    switch (r) {
                        case "row":
                            {
                                const i = new Array(this.rows).fill(Number.POSITIVE_INFINITY);
                                for (let t = 0; t < this.rows; t++)
                                    for (let n = 0; n < this.columns; n++) this.get(t, n) < i[t] && (i[t] = this.get(t, n));
                                return i
                            }
                        case "column":
                            {
                                const i = new Array(this.columns).fill(Number.POSITIVE_INFINITY);
                                for (let t = 0; t < this.rows; t++)
                                    for (let n = 0; n < this.columns; n++) this.get(t, n) < i[n] && (i[n] = this.get(t, n));
                                return i
                            }
                        case void 0:
                            {
                                let i = this.get(0, 0);
                                for (let t = 0; t < this.rows; t++)
                                    for (let n = 0; n < this.columns; n++) this.get(t, n) < i && (i = this.get(t, n));
                                return i
                            }
                        default:
                            throw new Error(`invalid option: ${r}`)
                    }
                }
                minIndex() {
                    kt(this);
                    let r = this.get(0, 0),
                        i = [0, 0];
                    for (let t = 0; t < this.rows; t++)
                        for (let n = 0; n < this.columns; n++) this.get(t, n) < r && (r = this.get(t, n), i[0] = t, i[1] = n);
                    return i
                }
                maxRow(r) { if ($t(this, r), this.isEmpty()) return NaN; let i = this.get(r, 0); for (let t = 1; t < this.columns; t++) this.get(r, t) > i && (i = this.get(r, t)); return i }
                maxRowIndex(r) {
                    $t(this, r), kt(this);
                    let i = this.get(r, 0),
                        t = [r, 0];
                    for (let n = 1; n < this.columns; n++) this.get(r, n) > i && (i = this.get(r, n), t[1] = n);
                    return t
                }
                minRow(r) { if ($t(this, r), this.isEmpty()) return NaN; let i = this.get(r, 0); for (let t = 1; t < this.columns; t++) this.get(r, t) < i && (i = this.get(r, t)); return i }
                minRowIndex(r) {
                    $t(this, r), kt(this);
                    let i = this.get(r, 0),
                        t = [r, 0];
                    for (let n = 1; n < this.columns; n++) this.get(r, n) < i && (i = this.get(r, n), t[1] = n);
                    return t
                }
                maxColumn(r) { if (yt(this, r), this.isEmpty()) return NaN; let i = this.get(0, r); for (let t = 1; t < this.rows; t++) this.get(t, r) > i && (i = this.get(t, r)); return i }
                maxColumnIndex(r) {
                    yt(this, r), kt(this);
                    let i = this.get(0, r),
                        t = [0, r];
                    for (let n = 1; n < this.rows; n++) this.get(n, r) > i && (i = this.get(n, r), t[0] = n);
                    return t
                }
                minColumn(r) { if (yt(this, r), this.isEmpty()) return NaN; let i = this.get(0, r); for (let t = 1; t < this.rows; t++) this.get(t, r) < i && (i = this.get(t, r)); return i }
                minColumnIndex(r) {
                    yt(this, r), kt(this);
                    let i = this.get(0, r),
                        t = [0, r];
                    for (let n = 1; n < this.rows; n++) this.get(n, r) < i && (i = this.get(n, r), t[0] = n);
                    return t
                }
                diag() {
                    let r = Math.min(this.rows, this.columns),
                        i = [];
                    for (let t = 0; t < r; t++) i.push(this.get(t, t));
                    return i
                }
                norm(r = "frobenius") {
                    let i = 0;
                    if (r === "max") return this.max();
                    if (r === "frobenius") {
                        for (let t = 0; t < this.rows; t++)
                            for (let n = 0; n < this.columns; n++) i = i + this.get(t, n) * this.get(t, n);
                        return Math.sqrt(i)
                    } else throw new RangeError(`unknown norm type: ${r}`)
                }
                cumulativeSum() {
                    let r = 0;
                    for (let i = 0; i < this.rows; i++)
                        for (let t = 0; t < this.columns; t++) r += this.get(i, t), this.set(i, t, r);
                    return this
                }
                dot(r) { A.isMatrix(r) && (r = r.to1DArray()); let i = this.to1DArray(); if (i.length !== r.length) throw new RangeError("vectors do not have the same size"); let t = 0; for (let n = 0; n < i.length; n++) t += i[n] * r[n]; return t }
                mmul(r) {
                    r = R.checkMatrix(r);
                    let i = this.rows,
                        t = this.columns,
                        n = r.columns,
                        s = new R(i, n),
                        c = new Float64Array(t);
                    for (let g = 0; g < n; g++) {
                        for (let w = 0; w < t; w++) c[w] = r.get(w, g);
                        for (let w = 0; w < i; w++) {
                            let u = 0;
                            for (let E = 0; E < t; E++) u += this.get(w, E) * c[E];
                            s.set(w, g, u)
                        }
                    }
                    return s
                }
                strassen2x2(r) {
                    r = R.checkMatrix(r);
                    let i = new R(2, 2);
                    const t = this.get(0, 0),
                        n = r.get(0, 0),
                        s = this.get(0, 1),
                        c = r.get(0, 1),
                        g = this.get(1, 0),
                        w = r.get(1, 0),
                        u = this.get(1, 1),
                        E = r.get(1, 1),
                        p = (t + u) * (n + E),
                        M = (g + u) * n,
                        C = t * (c - E),
                        k = u * (w - n),
                        D = (t + s) * E,
                        B = (g - t) * (n + c),
                        _ = (s - u) * (w + E),
                        j = p + k - D + _,
                        K = C + D,
                        Y = M + k,
                        et = p - M + C + B;
                    return i.set(0, 0, j), i.set(0, 1, K), i.set(1, 0, Y), i.set(1, 1, et), i
                }
                strassen3x3(r) {
                    r = R.checkMatrix(r);
                    let i = new R(3, 3);
                    const t = this.get(0, 0),
                        n = this.get(0, 1),
                        s = this.get(0, 2),
                        c = this.get(1, 0),
                        g = this.get(1, 1),
                        w = this.get(1, 2),
                        u = this.get(2, 0),
                        E = this.get(2, 1),
                        p = this.get(2, 2),
                        M = r.get(0, 0),
                        C = r.get(0, 1),
                        k = r.get(0, 2),
                        D = r.get(1, 0),
                        B = r.get(1, 1),
                        _ = r.get(1, 2),
                        j = r.get(2, 0),
                        K = r.get(2, 1),
                        Y = r.get(2, 2),
                        et = (t + n + s - c - g - E - p) * B,
                        mt = (t - c) * (-C + B),
                        X = g * (-M + C + D - B - _ - j + Y),
                        H = (-t + c + g) * (M - C + B),
                        jt = (c + g) * (-M + C),
                        At = t * M,
                        v = (-t + u + E) * (M - k + _),
                        T = (-t + u) * (k - _),
                        $ = (u + E) * (-M + k),
                        P = (t + n + s - g - w - u - E) * _,
                        ht = E * (-M + k + D - B - _ - j + K),
                        Ct = (-s + E + p) * (B + j - K),
                        zt = (s - p) * (B - K),
                        Mt = s * j,
                        Ut = (E + p) * (-j + K),
                        Xt = (-s + g + w) * (_ + j - Y),
                        me = (s - w) * (_ - Y),
                        we = (g + w) * (-j + Y),
                        Oe = n * D,
                        lt = w * K,
                        te = c * k,
                        fe = u * C,
                        ue = p * Y,
                        Yt = At + Mt + Oe,
                        We = et + H + jt + At + Ct + Mt + Ut,
                        En = At + v + $ + P + Mt + Xt + we,
                        Sn = mt + X + H + At + Mt + Xt + me,
                        kn = mt + H + jt + At + lt,
                        Mn = Mt + Xt + me + we + te,
                        Un = At + v + T + ht + Ct + zt + Mt,
                        Xe = Ct + zt + Mt + Ut + fe,
                        On = At + v + T + $ + ue;
                    return i.set(0, 0, Yt), i.set(0, 1, We), i.set(0, 2, En), i.set(1, 0, Sn), i.set(1, 1, kn), i.set(1, 2, Mn), i.set(2, 0, Un), i.set(2, 1, Xe), i.set(2, 2, On), i
                }
                mmulStrassen(r) {
                    r = R.checkMatrix(r);
                    let i = this.clone(),
                        t = i.rows,
                        n = i.columns,
                        s = r.rows,
                        c = r.columns;
                    n !== s && console.warn(`Multiplying ${t} x ${n} and ${s} x ${c} matrix: dimensions do not match.`);

                    function g(p, M, C) {
                        let k = p.rows,
                            D = p.columns;
                        if (k === M && D === C) return p; { let B = A.zeros(M, C); return B = B.setSubMatrix(p, 0, 0), B }
                    }
                    let w = Math.max(t, s),
                        u = Math.max(n, c);
                    i = g(i, w, u), r = g(r, w, u);

                    function E(p, M, C, k) {
                        if (C <= 512 || k <= 512) return p.mmul(M);
                        C % 2 === 1 && k % 2 === 1 ? (p = g(p, C + 1, k + 1), M = g(M, C + 1, k + 1)) : C % 2 === 1 ? (p = g(p, C + 1, k), M = g(M, C + 1, k)) : k % 2 === 1 && (p = g(p, C, k + 1), M = g(M, C, k + 1));
                        let D = parseInt(p.rows / 2, 10),
                            B = parseInt(p.columns / 2, 10),
                            _ = p.subMatrix(0, D - 1, 0, B - 1),
                            j = M.subMatrix(0, D - 1, 0, B - 1),
                            K = p.subMatrix(0, D - 1, B, p.columns - 1),
                            Y = M.subMatrix(0, D - 1, B, M.columns - 1),
                            et = p.subMatrix(D, p.rows - 1, 0, B - 1),
                            mt = M.subMatrix(D, M.rows - 1, 0, B - 1),
                            X = p.subMatrix(D, p.rows - 1, B, p.columns - 1),
                            H = M.subMatrix(D, M.rows - 1, B, M.columns - 1),
                            jt = E(A.add(_, X), A.add(j, H), D, B),
                            At = E(A.add(et, X), j, D, B),
                            v = E(_, A.sub(Y, H), D, B),
                            T = E(X, A.sub(mt, j), D, B),
                            $ = E(A.add(_, K), H, D, B),
                            P = E(A.sub(et, _), A.add(j, Y), D, B),
                            ht = E(A.sub(K, X), A.add(mt, H), D, B),
                            Ct = A.add(jt, T);
                        Ct.sub($), Ct.add(ht);
                        let zt = A.add(v, $),
                            Mt = A.add(At, T),
                            Ut = A.sub(jt, At);
                        Ut.add(v), Ut.add(P);
                        let Xt = A.zeros(2 * Ct.rows, 2 * Ct.columns);
                        return Xt = Xt.setSubMatrix(Ct, 0, 0), Xt = Xt.setSubMatrix(zt, Ct.rows, 0), Xt = Xt.setSubMatrix(Mt, 0, Ct.columns), Xt = Xt.setSubMatrix(Ut, Ct.rows, Ct.columns), Xt.subMatrix(0, C - 1, 0, k - 1)
                    }
                    return E(i, r, w, u)
                }
                scaleRows(r = {}) {
                    if (typeof r != "object") throw new TypeError("options must be an object");
                    const { min: i = 0, max: t = 1 } = r;
                    if (!Number.isFinite(i)) throw new TypeError("min must be a number");
                    if (!Number.isFinite(t)) throw new TypeError("max must be a number");
                    if (i >= t) throw new RangeError("min must be smaller than max");
                    let n = new R(this.rows, this.columns);
                    for (let s = 0; s < this.rows; s++) {
                        const c = this.getRow(s);
                        c.length > 0 && Wt(c, { min: i, max: t, output: c }), n.setRow(s, c)
                    }
                    return n
                }
                scaleColumns(r = {}) {
                    if (typeof r != "object") throw new TypeError("options must be an object");
                    const { min: i = 0, max: t = 1 } = r;
                    if (!Number.isFinite(i)) throw new TypeError("min must be a number");
                    if (!Number.isFinite(t)) throw new TypeError("max must be a number");
                    if (i >= t) throw new RangeError("min must be smaller than max");
                    let n = new R(this.rows, this.columns);
                    for (let s = 0; s < this.columns; s++) {
                        const c = this.getColumn(s);
                        c.length && Wt(c, { min: i, max: t, output: c }), n.setColumn(s, c)
                    }
                    return n
                }
                flipRows() {
                    const r = Math.ceil(this.columns / 2);
                    for (let i = 0; i < this.rows; i++)
                        for (let t = 0; t < r; t++) {
                            let n = this.get(i, t),
                                s = this.get(i, this.columns - 1 - t);
                            this.set(i, t, s), this.set(i, this.columns - 1 - t, n)
                        }
                    return this
                }
                flipColumns() {
                    const r = Math.ceil(this.rows / 2);
                    for (let i = 0; i < this.columns; i++)
                        for (let t = 0; t < r; t++) {
                            let n = this.get(t, i),
                                s = this.get(this.rows - 1 - t, i);
                            this.set(t, i, s), this.set(this.rows - 1 - t, i, n)
                        }
                    return this
                }
                kroneckerProduct(r) {
                    r = R.checkMatrix(r);
                    let i = this.rows,
                        t = this.columns,
                        n = r.rows,
                        s = r.columns,
                        c = new R(i * n, t * s);
                    for (let g = 0; g < i; g++)
                        for (let w = 0; w < t; w++)
                            for (let u = 0; u < n; u++)
                                for (let E = 0; E < s; E++) c.set(n * g + u, s * w + E, this.get(g, w) * r.get(u, E));
                    return c
                }
                kroneckerSum(r) {
                    if (r = R.checkMatrix(r), !this.isSquare() || !r.isSquare()) throw new Error("Kronecker Sum needs two Square Matrices");
                    let i = this.rows,
                        t = r.rows,
                        n = this.kroneckerProduct(R.eye(t, t)),
                        s = R.eye(i, i).kroneckerProduct(r);
                    return n.add(s)
                }
                transpose() {
                    let r = new R(this.columns, this.rows);
                    for (let i = 0; i < this.rows; i++)
                        for (let t = 0; t < this.columns; t++) r.set(t, i, this.get(i, t));
                    return r
                }
                sortRows(r = Z) { for (let i = 0; i < this.rows; i++) this.setRow(i, this.getRow(i).sort(r)); return this }
                sortColumns(r = Z) { for (let i = 0; i < this.columns; i++) this.setColumn(i, this.getColumn(i).sort(r)); return this }
                subMatrix(r, i, t, n) {
                    Et(this, r, i, t, n);
                    let s = new R(i - r + 1, n - t + 1);
                    for (let c = r; c <= i; c++)
                        for (let g = t; g <= n; g++) s.set(c - r, g - t, this.get(c, g));
                    return s
                }
                subMatrixRow(r, i, t) {
                    if (i === void 0 && (i = 0), t === void 0 && (t = this.columns - 1), i > t || i < 0 || i >= this.columns || t < 0 || t >= this.columns) throw new RangeError("Argument out of range");
                    let n = new R(r.length, t - i + 1);
                    for (let s = 0; s < r.length; s++)
                        for (let c = i; c <= t; c++) {
                            if (r[s] < 0 || r[s] >= this.rows) throw new RangeError(`Row index out of range: ${r[s]}`);
                            n.set(s, c - i, this.get(r[s], c))
                        }
                    return n
                }
                subMatrixColumn(r, i, t) {
                    if (i === void 0 && (i = 0), t === void 0 && (t = this.rows - 1), i > t || i < 0 || i >= this.rows || t < 0 || t >= this.rows) throw new RangeError("Argument out of range");
                    let n = new R(t - i + 1, r.length);
                    for (let s = 0; s < r.length; s++)
                        for (let c = i; c <= t; c++) {
                            if (r[s] < 0 || r[s] >= this.columns) throw new RangeError(`Column index out of range: ${r[s]}`);
                            n.set(c - i, s, this.get(c, r[s]))
                        }
                    return n
                }
                setSubMatrix(r, i, t) {
                    if (r = R.checkMatrix(r), r.isEmpty()) return this;
                    let n = i + r.rows - 1,
                        s = t + r.columns - 1;
                    Et(this, i, n, t, s);
                    for (let c = 0; c < r.rows; c++)
                        for (let g = 0; g < r.columns; g++) this.set(i + c, t + g, r.get(c, g));
                    return this
                }
                selection(r, i) {
                    it(this, r), bt(this, i);
                    let t = new R(r.length, i.length);
                    for (let n = 0; n < r.length; n++) {
                        let s = r[n];
                        for (let c = 0; c < i.length; c++) {
                            let g = i[c];
                            t.set(n, c, this.get(s, g))
                        }
                    }
                    return t
                }
                trace() {
                    let r = Math.min(this.rows, this.columns),
                        i = 0;
                    for (let t = 0; t < r; t++) i += this.get(t, t);
                    return i
                }
                clone() {
                    let r = new R(this.rows, this.columns);
                    for (let i = 0; i < this.rows; i++)
                        for (let t = 0; t < this.columns; t++) r.set(i, t, this.get(i, t));
                    return r
                }
                sum(r) {
                    switch (r) {
                        case "row":
                            return re(this);
                        case "column":
                            return Ht(this);
                        case void 0:
                            return Vt(this);
                        default:
                            throw new Error(`invalid option: ${r}`)
                    }
                }
                product(r) {
                    switch (r) {
                        case "row":
                            return ye(this);
                        case "column":
                            return Tt(this);
                        case void 0:
                            return Ue(this);
                        default:
                            throw new Error(`invalid option: ${r}`)
                    }
                }
                mean(r) {
                    const i = this.sum(r);
                    switch (r) {
                        case "row":
                            { for (let t = 0; t < this.rows; t++) i[t] /= this.columns; return i }
                        case "column":
                            { for (let t = 0; t < this.columns; t++) i[t] /= this.rows; return i }
                        case void 0:
                            return i / this.size;
                        default:
                            throw new Error(`invalid option: ${r}`)
                    }
                }
                variance(r, i = {}) {
                    if (typeof r == "object" && (i = r, r = void 0), typeof i != "object") throw new TypeError("options must be an object");
                    const { unbiased: t = !0, mean: n = this.mean(r) } = i;
                    if (typeof t != "boolean") throw new TypeError("unbiased must be a boolean");
                    switch (r) {
                        case "row":
                            { if (!Rt(n)) throw new TypeError("mean must be an array"); return Gt(this, t, n) }
                        case "column":
                            { if (!Rt(n)) throw new TypeError("mean must be an array"); return ge(this, t, n) }
                        case void 0:
                            { if (typeof n != "number") throw new TypeError("mean must be a number"); return be(this, t, n) }
                        default:
                            throw new Error(`invalid option: ${r}`)
                    }
                }
                standardDeviation(r, i) { typeof r == "object" && (i = r, r = void 0); const t = this.variance(r, i); if (r === void 0) return Math.sqrt(t); for (let n = 0; n < t.length; n++) t[n] = Math.sqrt(t[n]); return t }
                center(r, i = {}) {
                    if (typeof r == "object" && (i = r, r = void 0), typeof i != "object") throw new TypeError("options must be an object");
                    const { center: t = this.mean(r) } = i;
                    switch (r) {
                        case "row":
                            { if (!Rt(t)) throw new TypeError("center must be an array"); return Ee(this, t), this }
                        case "column":
                            { if (!Rt(t)) throw new TypeError("center must be an array"); return Se(this, t), this }
                        case void 0:
                            { if (typeof t != "number") throw new TypeError("center must be a number"); return pe(this, t), this }
                        default:
                            throw new Error(`invalid option: ${r}`)
                    }
                }
                scale(r, i = {}) {
                    if (typeof r == "object" && (i = r, r = void 0), typeof i != "object") throw new TypeError("options must be an object");
                    let t = i.scale;
                    switch (r) {
                        case "row":
                            {
                                if (t === void 0) t = Re(this);
                                else if (!Rt(t)) throw new TypeError("scale must be an array");
                                return Te(this, t),
                                this
                            }
                        case "column":
                            {
                                if (t === void 0) t = xe(this);
                                else if (!Rt(t)) throw new TypeError("scale must be an array");
                                return ke(this, t),
                                this
                            }
                        case void 0:
                            {
                                if (t === void 0) t = ce(this);
                                else if (typeof t != "number") throw new TypeError("scale must be a number");
                                return Q(this, t),
                                this
                            }
                        default:
                            throw new Error(`invalid option: ${r}`)
                    }
                }
                toString(r) { return de(this, r) }
            }
            A.prototype.klass = "Matrix", typeof Symbol < "u" && (A.prototype[Symbol.for("nodejs.util.inspect.custom")] = _t);

            function Z(l, r) { return l - r }

            function V(l) { return l.every(r => typeof r == "number") }
            A.random = A.rand, A.randomInt = A.randInt, A.diagonal = A.diag, A.prototype.diagonal = A.prototype.diag, A.identity = A.eye, A.prototype.negate = A.prototype.neg, A.prototype.tensorProduct = A.prototype.kroneckerProduct;
            class R extends A {
                constructor(r, i) {
                    if (super(), R.isMatrix(r)) return r.clone();
                    if (Number.isInteger(r) && r >= 0)
                        if (this.data = [], Number.isInteger(i) && i >= 0)
                            for (let t = 0; t < r; t++) this.data.push(new Float64Array(i));
                        else throw new TypeError("nColumns must be a positive integer");
                    else if (Rt(r)) {
                        const t = r;
                        if (r = t.length, i = r ? t[0].length : 0, typeof i != "number") throw new TypeError("Data must be a 2D array with at least one element");
                        this.data = [];
                        for (let n = 0; n < r; n++) {
                            if (t[n].length !== i) throw new RangeError("Inconsistent array dimensions");
                            if (!V(t[n])) throw new TypeError("Input data contains non-numeric values");
                            this.data.push(Float64Array.from(t[n]))
                        }
                    } else throw new TypeError("First argument must be a positive number or an array");
                    this.rows = r, this.columns = i
                }
                set(r, i, t) { return this.data[r][i] = t, this }
                get(r, i) { return this.data[r][i] }
                removeRow(r) { return $t(this, r), this.data.splice(r, 1), this.rows -= 1, this }
                addRow(r, i) { return i === void 0 && (i = r, r = this.rows), $t(this, r, !0), i = Float64Array.from(qt(this, i)), this.data.splice(r, 0, i), this.rows += 1, this }
                removeColumn(r) {
                    yt(this, r);
                    for (let i = 0; i < this.rows; i++) {
                        const t = new Float64Array(this.columns - 1);
                        for (let n = 0; n < r; n++) t[n] = this.data[i][n];
                        for (let n = r + 1; n < this.columns; n++) t[n - 1] = this.data[i][n];
                        this.data[i] = t
                    }
                    return this.columns -= 1, this
                }
                addColumn(r, i) {
                    typeof i > "u" && (i = r, r = this.columns), yt(this, r, !0), i = It(this, i);
                    for (let t = 0; t < this.rows; t++) {
                        const n = new Float64Array(this.columns + 1);
                        let s = 0;
                        for (; s < r; s++) n[s] = this.data[t][s];
                        for (n[s++] = i[t]; s < this.columns + 1; s++) n[s] = this.data[t][s - 1];
                        this.data[t] = n
                    }
                    return this.columns += 1, this
                }
            }
            Qt(A, R);
            class st extends A { constructor(r, i, t) { super(), this.matrix = r, this.rows = i, this.columns = t } }
            class O extends st {
                constructor(r) { super(r, r.columns, r.rows) }
                set(r, i, t) { return this.matrix.set(i, r, t), this }
                get(r, i) { return this.matrix.get(i, r) }
            }
            class U extends A {
                constructor(r) { super(), this.data = r, this.rows = r.length, this.columns = r[0].length }
                set(r, i, t) { return this.data[r][i] = t, this }
                get(r, i) { return this.data[r][i] }
            }

            function N(l, r) { let i = 0; return Math.abs(l) > Math.abs(r) ? (i = r / l, Math.abs(l) * Math.sqrt(1 + i * i)) : r !== 0 ? (i = l / r, Math.abs(r) * Math.sqrt(1 + i * i)) : 0 }
            class L {
                constructor(r, i = {}) {
                    if (r = U.checkMatrix(r), r.isEmpty()) throw new Error("Matrix must be non-empty");
                    let t = r.rows,
                        n = r.columns;
                    const { computeLeftSingularVectors: s = !0, computeRightSingularVectors: c = !0, autoTranspose: g = !1 } = i;
                    let w = Boolean(s),
                        u = Boolean(c),
                        E = !1,
                        p;
                    if (t < n)
                        if (!g) p = r.clone(), console.warn("Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose");
                        else {
                            p = r.transpose(), t = p.rows, n = p.columns, E = !0;
                            let v = w;
                            w = u, u = v
                        }
                    else p = r.clone();
                    let M = Math.min(t, n),
                        C = Math.min(t + 1, n),
                        k = new Float64Array(C),
                        D = new R(t, M),
                        B = new R(n, n),
                        _ = new Float64Array(n),
                        j = new Float64Array(t),
                        K = new Float64Array(C);
                    for (let v = 0; v < C; v++) K[v] = v;
                    let Y = Math.min(t - 1, n),
                        et = Math.max(0, Math.min(n - 2, t)),
                        mt = Math.max(Y, et);
                    for (let v = 0; v < mt; v++) {
                        if (v < Y) {
                            k[v] = 0;
                            for (let T = v; T < t; T++) k[v] = N(k[v], p.get(T, v));
                            if (k[v] !== 0) {
                                p.get(v, v) < 0 && (k[v] = -k[v]);
                                for (let T = v; T < t; T++) p.set(T, v, p.get(T, v) / k[v]);
                                p.set(v, v, p.get(v, v) + 1)
                            }
                            k[v] = -k[v]
                        }
                        for (let T = v + 1; T < n; T++) {
                            if (v < Y && k[v] !== 0) {
                                let $ = 0;
                                for (let P = v; P < t; P++) $ += p.get(P, v) * p.get(P, T);
                                $ = -$ / p.get(v, v);
                                for (let P = v; P < t; P++) p.set(P, T, p.get(P, T) + $ * p.get(P, v))
                            }
                            _[T] = p.get(v, T)
                        }
                        if (w && v < Y)
                            for (let T = v; T < t; T++) D.set(T, v, p.get(T, v));
                        if (v < et) {
                            _[v] = 0;
                            for (let T = v + 1; T < n; T++) _[v] = N(_[v], _[T]);
                            if (_[v] !== 0) {
                                _[v + 1] < 0 && (_[v] = 0 - _[v]);
                                for (let T = v + 1; T < n; T++) _[T] /= _[v];
                                _[v + 1] += 1
                            }
                            if (_[v] = -_[v], v + 1 < t && _[v] !== 0) {
                                for (let T = v + 1; T < t; T++) j[T] = 0;
                                for (let T = v + 1; T < t; T++)
                                    for (let $ = v + 1; $ < n; $++) j[T] += _[$] * p.get(T, $);
                                for (let T = v + 1; T < n; T++) { let $ = -_[T] / _[v + 1]; for (let P = v + 1; P < t; P++) p.set(P, T, p.get(P, T) + $ * j[P]) }
                            }
                            if (u)
                                for (let T = v + 1; T < n; T++) B.set(T, v, _[T])
                        }
                    }
                    let X = Math.min(n, t + 1);
                    if (Y < n && (k[Y] = p.get(Y, Y)), t < X && (k[X - 1] = 0), et + 1 < X && (_[et] = p.get(et, X - 1)), _[X - 1] = 0, w) {
                        for (let v = Y; v < M; v++) {
                            for (let T = 0; T < t; T++) D.set(T, v, 0);
                            D.set(v, v, 1)
                        }
                        for (let v = Y - 1; v >= 0; v--)
                            if (k[v] !== 0) {
                                for (let T = v + 1; T < M; T++) {
                                    let $ = 0;
                                    for (let P = v; P < t; P++) $ += D.get(P, v) * D.get(P, T);
                                    $ = -$ / D.get(v, v);
                                    for (let P = v; P < t; P++) D.set(P, T, D.get(P, T) + $ * D.get(P, v))
                                }
                                for (let T = v; T < t; T++) D.set(T, v, -D.get(T, v));
                                D.set(v, v, 1 + D.get(v, v));
                                for (let T = 0; T < v - 1; T++) D.set(T, v, 0)
                            } else {
                                for (let T = 0; T < t; T++) D.set(T, v, 0);
                                D.set(v, v, 1)
                            }
                    }
                    if (u)
                        for (let v = n - 1; v >= 0; v--) {
                            if (v < et && _[v] !== 0)
                                for (let T = v + 1; T < n; T++) {
                                    let $ = 0;
                                    for (let P = v + 1; P < n; P++) $ += B.get(P, v) * B.get(P, T);
                                    $ = -$ / B.get(v + 1, v);
                                    for (let P = v + 1; P < n; P++) B.set(P, T, B.get(P, T) + $ * B.get(P, v))
                                }
                            for (let T = 0; T < n; T++) B.set(T, v, 0);
                            B.set(v, v, 1)
                        }
                    let H = X - 1,
                        jt = 0,
                        At = Number.EPSILON;
                    for (; X > 0;) {
                        let v, T;
                        for (v = X - 2; v >= -1 && v !== -1; v--) { const $ = Number.MIN_VALUE + At * Math.abs(k[v] + Math.abs(k[v + 1])); if (Math.abs(_[v]) <= $ || Number.isNaN(_[v])) { _[v] = 0; break } }
                        if (v === X - 2) T = 4;
                        else {
                            let $;
                            for ($ = X - 1; $ >= v && $ !== v; $--) { let P = ($ !== X ? Math.abs(_[$]) : 0) + ($ !== v + 1 ? Math.abs(_[$ - 1]) : 0); if (Math.abs(k[$]) <= At * P) { k[$] = 0; break } }
                            $ === v ? T = 3 : $ === X - 1 ? T = 1 : (T = 2, v = $)
                        }
                        switch (v++, T) {
                            case 1:
                                {
                                    let $ = _[X - 2];_[X - 2] = 0;
                                    for (let P = X - 2; P >= v; P--) {
                                        let ht = N(k[P], $),
                                            Ct = k[P] / ht,
                                            zt = $ / ht;
                                        if (k[P] = ht, P !== v && ($ = -zt * _[P - 1], _[P - 1] = Ct * _[P - 1]), u)
                                            for (let Mt = 0; Mt < n; Mt++) ht = Ct * B.get(Mt, P) + zt * B.get(Mt, X - 1), B.set(Mt, X - 1, -zt * B.get(Mt, P) + Ct * B.get(Mt, X - 1)), B.set(Mt, P, ht)
                                    }
                                    break
                                }
                            case 2:
                                {
                                    let $ = _[v - 1];_[v - 1] = 0;
                                    for (let P = v; P < X; P++) {
                                        let ht = N(k[P], $),
                                            Ct = k[P] / ht,
                                            zt = $ / ht;
                                        if (k[P] = ht, $ = -zt * _[P], _[P] = Ct * _[P], w)
                                            for (let Mt = 0; Mt < t; Mt++) ht = Ct * D.get(Mt, P) + zt * D.get(Mt, v - 1), D.set(Mt, v - 1, -zt * D.get(Mt, P) + Ct * D.get(Mt, v - 1)), D.set(Mt, P, ht)
                                    }
                                    break
                                }
                            case 3:
                                {
                                    const $ = Math.max(Math.abs(k[X - 1]), Math.abs(k[X - 2]), Math.abs(_[X - 2]), Math.abs(k[v]), Math.abs(_[v])),
                                        P = k[X - 1] / $,
                                        ht = k[X - 2] / $,
                                        Ct = _[X - 2] / $,
                                        zt = k[v] / $,
                                        Mt = _[v] / $,
                                        Ut = ((ht + P) * (ht - P) + Ct * Ct) / 2,
                                        Xt = P * Ct * (P * Ct);
                                    let me = 0;
                                    (Ut !== 0 || Xt !== 0) && (Ut < 0 ? me = 0 - Math.sqrt(Ut * Ut + Xt) : me = Math.sqrt(Ut * Ut + Xt), me = Xt / (Ut + me));
                                    let we = (zt + P) * (zt - P) + me,
                                        Oe = zt * Mt;
                                    for (let lt = v; lt < X - 1; lt++) {
                                        let te = N(we, Oe);
                                        te === 0 && (te = Number.MIN_VALUE);
                                        let fe = we / te,
                                            ue = Oe / te;
                                        if (lt !== v && (_[lt - 1] = te), we = fe * k[lt] + ue * _[lt], _[lt] = fe * _[lt] - ue * k[lt], Oe = ue * k[lt + 1], k[lt + 1] = fe * k[lt + 1], u)
                                            for (let Yt = 0; Yt < n; Yt++) te = fe * B.get(Yt, lt) + ue * B.get(Yt, lt + 1), B.set(Yt, lt + 1, -ue * B.get(Yt, lt) + fe * B.get(Yt, lt + 1)), B.set(Yt, lt, te);
                                        if (te = N(we, Oe), te === 0 && (te = Number.MIN_VALUE), fe = we / te, ue = Oe / te, k[lt] = te, we = fe * _[lt] + ue * k[lt + 1], k[lt + 1] = -ue * _[lt] + fe * k[lt + 1], Oe = ue * _[lt + 1], _[lt + 1] = fe * _[lt + 1], w && lt < t - 1)
                                            for (let Yt = 0; Yt < t; Yt++) te = fe * D.get(Yt, lt) + ue * D.get(Yt, lt + 1), D.set(Yt, lt + 1, -ue * D.get(Yt, lt) + fe * D.get(Yt, lt + 1)), D.set(Yt, lt, te)
                                    }
                                    _[X - 2] = we,
                                    jt = jt + 1;
                                    break
                                }
                            case 4:
                                {
                                    if (k[v] <= 0 && (k[v] = k[v] < 0 ? -k[v] : 0, u))
                                        for (let $ = 0; $ <= H; $++) B.set($, v, -B.get($, v));
                                    for (; v < H && !(k[v] >= k[v + 1]);) {
                                        let $ = k[v];
                                        if (k[v] = k[v + 1], k[v + 1] = $, u && v < n - 1)
                                            for (let P = 0; P < n; P++) $ = B.get(P, v + 1), B.set(P, v + 1, B.get(P, v)), B.set(P, v, $);
                                        if (w && v < t - 1)
                                            for (let P = 0; P < t; P++) $ = D.get(P, v + 1), D.set(P, v + 1, D.get(P, v)), D.set(P, v, $);
                                        v++
                                    }
                                    jt = 0,
                                    X--;
                                    break
                                }
                        }
                    }
                    if (E) {
                        let v = B;
                        B = D, D = v
                    }
                    this.m = t, this.n = n, this.s = k, this.U = D, this.V = B
                }
                solve(r) {
                    let i = r,
                        t = this.threshold,
                        n = this.s.length,
                        s = R.zeros(n, n);
                    for (let M = 0; M < n; M++) Math.abs(this.s[M]) <= t ? s.set(M, M, 0) : s.set(M, M, 1 / this.s[M]);
                    let c = this.U,
                        g = this.rightSingularVectors,
                        w = g.mmul(s),
                        u = g.rows,
                        E = c.rows,
                        p = R.zeros(u, E);
                    for (let M = 0; M < u; M++)
                        for (let C = 0; C < E; C++) {
                            let k = 0;
                            for (let D = 0; D < n; D++) k += w.get(M, D) * c.get(C, D);
                            p.set(M, C, k)
                        }
                    return p.mmul(i)
                }
                solveForDiagonal(r) { return this.solve(R.diag(r)) }
                inverse() {
                    let r = this.V,
                        i = this.threshold,
                        t = r.rows,
                        n = r.columns,
                        s = new R(t, this.s.length);
                    for (let E = 0; E < t; E++)
                        for (let p = 0; p < n; p++) Math.abs(this.s[p]) > i && s.set(E, p, r.get(E, p) / this.s[p]);
                    let c = this.U,
                        g = c.rows,
                        w = c.columns,
                        u = new R(t, g);
                    for (let E = 0; E < t; E++)
                        for (let p = 0; p < g; p++) {
                            let M = 0;
                            for (let C = 0; C < w; C++) M += s.get(E, C) * c.get(p, C);
                            u.set(E, p, M)
                        }
                    return u
                }
                get condition() { return this.s[0] / this.s[Math.min(this.m, this.n) - 1] }
                get norm2() { return this.s[0] }
                get rank() {
                    let r = Math.max(this.m, this.n) * this.s[0] * Number.EPSILON,
                        i = 0,
                        t = this.s;
                    for (let n = 0, s = t.length; n < s; n++) t[n] > r && i++;
                    return i
                }
                get diagonal() { return Array.from(this.s) }
                get threshold() { return Number.EPSILON / 2 * Math.max(this.m, this.n) * this.s[0] }
                get leftSingularVectors() { return this.U }
                get rightSingularVectors() { return this.V }
                get diagonalMatrix() { return R.diag(this.s) }
            }
            class x {
                constructor(r, i = {}) {
                    const { assumeSymmetric: t = !1 } = i;
                    if (r = U.checkMatrix(r), !r.isSquare()) throw new Error("Matrix is not a square matrix");
                    if (r.isEmpty()) throw new Error("Matrix must be non-empty");
                    let n = r.columns,
                        s = new R(n, n),
                        c = new Float64Array(n),
                        g = new Float64Array(n),
                        w = r,
                        u, E, p = !1;
                    if (t ? p = !0 : p = r.isSymmetric(), p) {
                        for (u = 0; u < n; u++)
                            for (E = 0; E < n; E++) s.set(u, E, w.get(u, E));
                        q(n, g, c, s), tt(n, g, c, s)
                    } else {
                        let M = new R(n, n),
                            C = new Float64Array(n);
                        for (E = 0; E < n; E++)
                            for (u = 0; u < n; u++) M.set(u, E, w.get(u, E));
                        F(n, M, C, s), rt(n, g, c, s, M)
                    }
                    this.n = n, this.e = g, this.d = c, this.V = s
                }
                get realEigenvalues() { return Array.from(this.d) }
                get imaginaryEigenvalues() { return Array.from(this.e) }
                get eigenvectorMatrix() { return this.V }
                get diagonalMatrix() {
                    let r = this.n,
                        i = this.e,
                        t = this.d,
                        n = new R(r, r),
                        s, c;
                    for (s = 0; s < r; s++) {
                        for (c = 0; c < r; c++) n.set(s, c, 0);
                        n.set(s, s, t[s]), i[s] > 0 ? n.set(s, s + 1, i[s]) : i[s] < 0 && n.set(s, s - 1, i[s])
                    }
                    return n
                }
            }

            function q(l, r, i, t) {
                let n, s, c, g, w, u, E, p;
                for (w = 0; w < l; w++) i[w] = t.get(l - 1, w);
                for (g = l - 1; g > 0; g--) {
                    for (p = 0, c = 0, u = 0; u < g; u++) p = p + Math.abs(i[u]);
                    if (p === 0)
                        for (r[g] = i[g - 1], w = 0; w < g; w++) i[w] = t.get(g - 1, w), t.set(g, w, 0), t.set(w, g, 0);
                    else {
                        for (u = 0; u < g; u++) i[u] /= p, c += i[u] * i[u];
                        for (n = i[g - 1], s = Math.sqrt(c), n > 0 && (s = -s), r[g] = p * s, c = c - n * s, i[g - 1] = n - s, w = 0; w < g; w++) r[w] = 0;
                        for (w = 0; w < g; w++) {
                            for (n = i[w], t.set(w, g, n), s = r[w] + t.get(w, w) * n, u = w + 1; u <= g - 1; u++) s += t.get(u, w) * i[u], r[u] += t.get(u, w) * n;
                            r[w] = s
                        }
                        for (n = 0, w = 0; w < g; w++) r[w] /= c, n += r[w] * i[w];
                        for (E = n / (c + c), w = 0; w < g; w++) r[w] -= E * i[w];
                        for (w = 0; w < g; w++) {
                            for (n = i[w], s = r[w], u = w; u <= g - 1; u++) t.set(u, w, t.get(u, w) - (n * r[u] + s * i[u]));
                            i[w] = t.get(g - 1, w), t.set(g, w, 0)
                        }
                    }
                    i[g] = c
                }
                for (g = 0; g < l - 1; g++) { if (t.set(l - 1, g, t.get(g, g)), t.set(g, g, 1), c = i[g + 1], c !== 0) { for (u = 0; u <= g; u++) i[u] = t.get(u, g + 1) / c; for (w = 0; w <= g; w++) { for (s = 0, u = 0; u <= g; u++) s += t.get(u, g + 1) * t.get(u, w); for (u = 0; u <= g; u++) t.set(u, w, t.get(u, w) - s * i[u]) } } for (u = 0; u <= g; u++) t.set(u, g + 1, 0) }
                for (w = 0; w < l; w++) i[w] = t.get(l - 1, w), t.set(l - 1, w, 0);
                t.set(l - 1, l - 1, 1), r[0] = 0
            }

            function tt(l, r, i, t) {
                let n, s, c, g, w, u, E, p, M, C, k, D, B, _, j, K, Y;
                for (c = 1; c < l; c++) r[c - 1] = r[c];
                r[l - 1] = 0;
                let et = 0,
                    mt = 0,
                    X = Number.EPSILON;
                for (u = 0; u < l; u++) {
                    for (mt = Math.max(mt, Math.abs(i[u]) + Math.abs(r[u])), E = u; E < l && !(Math.abs(r[E]) <= X * mt);) E++;
                    if (E > u) {
                        Y = 0;
                        do {
                            for (Y = Y + 1, n = i[u], p = (i[u + 1] - n) / (2 * r[u]), M = N(p, 1), p < 0 && (M = -M), i[u] = r[u] / (p + M), i[u + 1] = r[u] * (p + M), C = i[u + 1], s = n - i[u], c = u + 2; c < l; c++) i[c] -= s;
                            for (et = et + s, p = i[E], k = 1, D = k, B = k, _ = r[u + 1], j = 0, K = 0, c = E - 1; c >= u; c--)
                                for (B = D, D = k, K = j, n = k * r[c], s = k * p, M = N(p, r[c]), r[c + 1] = j * M, j = r[c] / M, k = p / M, p = k * i[c] - j * n, i[c + 1] = s + j * (k * n + j * i[c]), w = 0; w < l; w++) s = t.get(w, c + 1), t.set(w, c + 1, j * t.get(w, c) + k * s), t.set(w, c, k * t.get(w, c) - j * s);
                            p = -j * K * B * _ * r[u] / C, r[u] = j * p, i[u] = k * p
                        } while (Math.abs(r[u]) > X * mt)
                    }
                    i[u] = i[u] + et, r[u] = 0
                }
                for (c = 0; c < l - 1; c++) {
                    for (w = c, p = i[c], g = c + 1; g < l; g++) i[g] < p && (w = g, p = i[g]);
                    if (w !== c)
                        for (i[w] = i[c], i[c] = p, g = 0; g < l; g++) p = t.get(g, c), t.set(g, c, t.get(g, w)), t.set(g, w, p)
                }
            }

            function F(l, r, i, t) {
                let n = 0,
                    s = l - 1,
                    c, g, w, u, E, p, M;
                for (p = n + 1; p <= s - 1; p++) {
                    for (M = 0, u = p; u <= s; u++) M = M + Math.abs(r.get(u, p - 1));
                    if (M !== 0) {
                        for (w = 0, u = s; u >= p; u--) i[u] = r.get(u, p - 1) / M, w += i[u] * i[u];
                        for (g = Math.sqrt(w), i[p] > 0 && (g = -g), w = w - i[p] * g, i[p] = i[p] - g, E = p; E < l; E++) { for (c = 0, u = s; u >= p; u--) c += i[u] * r.get(u, E); for (c = c / w, u = p; u <= s; u++) r.set(u, E, r.get(u, E) - c * i[u]) }
                        for (u = 0; u <= s; u++) { for (c = 0, E = s; E >= p; E--) c += i[E] * r.get(u, E); for (c = c / w, E = p; E <= s; E++) r.set(u, E, r.get(u, E) - c * i[E]) }
                        i[p] = M * i[p], r.set(p, p - 1, M * g)
                    }
                }
                for (u = 0; u < l; u++)
                    for (E = 0; E < l; E++) t.set(u, E, u === E ? 1 : 0);
                for (p = s - 1; p >= n + 1; p--)
                    if (r.get(p, p - 1) !== 0) { for (u = p + 1; u <= s; u++) i[u] = r.get(u, p - 1); for (E = p; E <= s; E++) { for (g = 0, u = p; u <= s; u++) g += i[u] * t.get(u, E); for (g = g / i[p] / r.get(p, p - 1), u = p; u <= s; u++) t.set(u, E, t.get(u, E) + g * i[u]) } }
            }

            function rt(l, r, i, t, n) {
                let s = l - 1,
                    c = 0,
                    g = l - 1,
                    w = Number.EPSILON,
                    u = 0,
                    E = 0,
                    p = 0,
                    M = 0,
                    C = 0,
                    k = 0,
                    D = 0,
                    B = 0,
                    _, j, K, Y, et, mt, X, H, jt, At, v, T, $, P, ht;
                for (_ = 0; _ < l; _++)
                    for ((_ < c || _ > g) && (i[_] = n.get(_, _), r[_] = 0), j = Math.max(_ - 1, 0); j < l; j++) E = E + Math.abs(n.get(_, j));
                for (; s >= c;) {
                    for (Y = s; Y > c && (k = Math.abs(n.get(Y - 1, Y - 1)) + Math.abs(n.get(Y, Y)), k === 0 && (k = E), !(Math.abs(n.get(Y, Y - 1)) < w * k));) Y--;
                    if (Y === s) n.set(s, s, n.get(s, s) + u), i[s] = n.get(s, s), r[s] = 0, s--, B = 0;
                    else if (Y === s - 1) {
                        if (X = n.get(s, s - 1) * n.get(s - 1, s), p = (n.get(s - 1, s - 1) - n.get(s, s)) / 2, M = p * p + X, D = Math.sqrt(Math.abs(M)), n.set(s, s, n.get(s, s) + u), n.set(s - 1, s - 1, n.get(s - 1, s - 1) + u), H = n.get(s, s), M >= 0) { for (D = p >= 0 ? p + D : p - D, i[s - 1] = H + D, i[s] = i[s - 1], D !== 0 && (i[s] = H - X / D), r[s - 1] = 0, r[s] = 0, H = n.get(s, s - 1), k = Math.abs(H) + Math.abs(D), p = H / k, M = D / k, C = Math.sqrt(p * p + M * M), p = p / C, M = M / C, j = s - 1; j < l; j++) D = n.get(s - 1, j), n.set(s - 1, j, M * D + p * n.get(s, j)), n.set(s, j, M * n.get(s, j) - p * D); for (_ = 0; _ <= s; _++) D = n.get(_, s - 1), n.set(_, s - 1, M * D + p * n.get(_, s)), n.set(_, s, M * n.get(_, s) - p * D); for (_ = c; _ <= g; _++) D = t.get(_, s - 1), t.set(_, s - 1, M * D + p * t.get(_, s)), t.set(_, s, M * t.get(_, s) - p * D) } else i[s - 1] = H + p, i[s] = H + p, r[s - 1] = D, r[s] = -D;
                        s = s - 2, B = 0
                    } else {
                        if (H = n.get(s, s), jt = 0, X = 0, Y < s && (jt = n.get(s - 1, s - 1), X = n.get(s, s - 1) * n.get(s - 1, s)), B === 10) {
                            for (u += H, _ = c; _ <= s; _++) n.set(_, _, n.get(_, _) - H);
                            k = Math.abs(n.get(s, s - 1)) + Math.abs(n.get(s - 1, s - 2)), H = jt = .75 * k, X = -.4375 * k * k
                        }
                        if (B === 30 && (k = (jt - H) / 2, k = k * k + X, k > 0)) {
                            for (k = Math.sqrt(k), jt < H && (k = -k), k = H - X / ((jt - H) / 2 + k), _ = c; _ <= s; _++) n.set(_, _, n.get(_, _) - k);
                            u += k, H = jt = X = .964
                        }
                        for (B = B + 1, et = s - 2; et >= Y && (D = n.get(et, et), C = H - D, k = jt - D, p = (C * k - X) / n.get(et + 1, et) + n.get(et, et + 1), M = n.get(et + 1, et + 1) - D - C - k, C = n.get(et + 2, et + 1), k = Math.abs(p) + Math.abs(M) + Math.abs(C), p = p / k, M = M / k, C = C / k, !(et === Y || Math.abs(n.get(et, et - 1)) * (Math.abs(M) + Math.abs(C)) < w * (Math.abs(p) * (Math.abs(n.get(et - 1, et - 1)) + Math.abs(D) + Math.abs(n.get(et + 1, et + 1))))));) et--;
                        for (_ = et + 2; _ <= s; _++) n.set(_, _ - 2, 0), _ > et + 2 && n.set(_, _ - 3, 0);
                        for (K = et; K <= s - 1 && (P = K !== s - 1, K !== et && (p = n.get(K, K - 1), M = n.get(K + 1, K - 1), C = P ? n.get(K + 2, K - 1) : 0, H = Math.abs(p) + Math.abs(M) + Math.abs(C), H !== 0 && (p = p / H, M = M / H, C = C / H)), H !== 0); K++)
                            if (k = Math.sqrt(p * p + M * M + C * C), p < 0 && (k = -k), k !== 0) { for (K !== et ? n.set(K, K - 1, -k * H) : Y !== et && n.set(K, K - 1, -n.get(K, K - 1)), p = p + k, H = p / k, jt = M / k, D = C / k, M = M / p, C = C / p, j = K; j < l; j++) p = n.get(K, j) + M * n.get(K + 1, j), P && (p = p + C * n.get(K + 2, j), n.set(K + 2, j, n.get(K + 2, j) - p * D)), n.set(K, j, n.get(K, j) - p * H), n.set(K + 1, j, n.get(K + 1, j) - p * jt); for (_ = 0; _ <= Math.min(s, K + 3); _++) p = H * n.get(_, K) + jt * n.get(_, K + 1), P && (p = p + D * n.get(_, K + 2), n.set(_, K + 2, n.get(_, K + 2) - p * C)), n.set(_, K, n.get(_, K) - p), n.set(_, K + 1, n.get(_, K + 1) - p * M); for (_ = c; _ <= g; _++) p = H * t.get(_, K) + jt * t.get(_, K + 1), P && (p = p + D * t.get(_, K + 2), t.set(_, K + 2, t.get(_, K + 2) - p * C)), t.set(_, K, t.get(_, K) - p), t.set(_, K + 1, t.get(_, K + 1) - p * M) }
                    }
                }
                if (E !== 0) {
                    for (s = l - 1; s >= 0; s--)
                        if (p = i[s], M = r[s], M === 0)
                            for (Y = s, n.set(s, s, 1), _ = s - 1; _ >= 0; _--) {
                                for (X = n.get(_, _) - p, C = 0, j = Y; j <= s; j++) C = C + n.get(_, j) * n.get(j, s);
                                if (r[_] < 0) D = X, k = C;
                                else if (Y = _, r[_] === 0 ? n.set(_, s, X !== 0 ? -C / X : -C / (w * E)) : (H = n.get(_, _ + 1), jt = n.get(_ + 1, _), M = (i[_] - p) * (i[_] - p) + r[_] * r[_], mt = (H * k - D * C) / M, n.set(_, s, mt), n.set(_ + 1, s, Math.abs(H) > Math.abs(D) ? (-C - X * mt) / H : (-k - jt * mt) / D)), mt = Math.abs(n.get(_, s)), w * mt * mt > 1)
                                    for (j = _; j <= s; j++) n.set(j, s, n.get(j, s) / mt)
                            } else if (M < 0)
                                for (Y = s - 1, Math.abs(n.get(s, s - 1)) > Math.abs(n.get(s - 1, s)) ? (n.set(s - 1, s - 1, M / n.get(s, s - 1)), n.set(s - 1, s, -(n.get(s, s) - p) / n.get(s, s - 1))) : (ht = at(0, -n.get(s - 1, s), n.get(s - 1, s - 1) - p, M), n.set(s - 1, s - 1, ht[0]), n.set(s - 1, s, ht[1])), n.set(s, s - 1, 0), n.set(s, s, 1), _ = s - 2; _ >= 0; _--) {
                                    for (At = 0, v = 0, j = Y; j <= s; j++) At = At + n.get(_, j) * n.get(j, s - 1), v = v + n.get(_, j) * n.get(j, s);
                                    if (X = n.get(_, _) - p, r[_] < 0) D = X, C = At, k = v;
                                    else if (Y = _, r[_] === 0 ? (ht = at(-At, -v, X, M), n.set(_, s - 1, ht[0]), n.set(_, s, ht[1])) : (H = n.get(_, _ + 1), jt = n.get(_ + 1, _), T = (i[_] - p) * (i[_] - p) + r[_] * r[_] - M * M, $ = (i[_] - p) * 2 * M, T === 0 && $ === 0 && (T = w * E * (Math.abs(X) + Math.abs(M) + Math.abs(H) + Math.abs(jt) + Math.abs(D))), ht = at(H * C - D * At + M * v, H * k - D * v - M * At, T, $), n.set(_, s - 1, ht[0]), n.set(_, s, ht[1]), Math.abs(H) > Math.abs(D) + Math.abs(M) ? (n.set(_ + 1, s - 1, (-At - X * n.get(_, s - 1) + M * n.get(_, s)) / H), n.set(_ + 1, s, (-v - X * n.get(_, s) - M * n.get(_, s - 1)) / H)) : (ht = at(-C - jt * n.get(_, s - 1), -k - jt * n.get(_, s), D, M), n.set(_ + 1, s - 1, ht[0]), n.set(_ + 1, s, ht[1]))), mt = Math.max(Math.abs(n.get(_, s - 1)), Math.abs(n.get(_, s))), w * mt * mt > 1)
                                        for (j = _; j <= s; j++) n.set(j, s - 1, n.get(j, s - 1) / mt), n.set(j, s, n.get(j, s) / mt)
                                }
                    for (_ = 0; _ < l; _++)
                        if (_ < c || _ > g)
                            for (j = _; j < l; j++) t.set(_, j, n.get(_, j));
                    for (j = l - 1; j >= c; j--)
                        for (_ = c; _ <= g; _++) {
                            for (D = 0, K = c; K <= Math.min(j, g); K++) D = D + t.get(_, K) * n.get(K, j);
                            t.set(_, j, D)
                        }
                }
            }

            function at(l, r, i, t) { let n, s; return Math.abs(i) > Math.abs(t) ? (n = t / i, s = i + n * t, [(l + n * r) / s, (r - n * l) / s]) : (n = i / t, s = t + n * i, [(n * l + r) / s, (n * r - l) / s]) }
            class dt {
                constructor(r, i = {}) {
                    r = U.checkMatrix(r);
                    let { Y: t } = i;
                    const { scaleScores: n = !1, maxIterations: s = 1e3, terminationCriteria: c = 1e-10 } = i;
                    let g;
                    if (t) {
                        if (Rt(t) && typeof t[0] == "number" ? t = R.columnVector(t) : t = U.checkMatrix(t), t.rows !== r.rows) throw new Error("Y should have the same number of rows as X");
                        g = t.getColumnVector(0)
                    } else g = r.getColumnVector(0);
                    let w = 1,
                        u, E, p, M;
                    for (let C = 0; C < s && w > c; C++) p = r.transpose().mmul(g).div(g.transpose().mmul(g).get(0, 0)), p = p.div(p.norm()), u = r.mmul(p).div(p.transpose().mmul(p).get(0, 0)), C > 0 && (w = u.clone().sub(M).pow(2).sum()), M = u.clone(), t ? (E = t.transpose().mmul(u).div(u.transpose().mmul(u).get(0, 0)), E = E.div(E.norm()), g = t.mmul(E).div(E.transpose().mmul(E).get(0, 0))) : g = u;
                    if (t) {
                        let C = r.transpose().mmul(u).div(u.transpose().mmul(u).get(0, 0));
                        C = C.div(C.norm());
                        let k = r.clone().sub(u.clone().mmul(C.transpose())),
                            D = g.transpose().mmul(u).div(u.transpose().mmul(u).get(0, 0)),
                            B = t.clone().sub(u.clone().mulS(D.get(0, 0)).mmul(E.transpose()));
                        this.t = u, this.p = C.transpose(), this.w = p.transpose(), this.q = E, this.u = g, this.s = u.transpose().mmul(u), this.xResidual = k, this.yResidual = B, this.betas = D
                    } else this.w = p.transpose(), this.s = u.transpose().mmul(u).sqrt(), n ? this.t = u.clone().div(this.s.get(0, 0)) : this.t = u, this.xResidual = r.sub(u.mmul(p.transpose()))
                }
            }
            class xt {
                constructor(r, i = {}) {
                    if (r === !0) {
                        const u = i;
                        this.center = u.center, this.scale = u.scale, this.means = u.means, this.stdevs = u.stdevs, this.U = R.checkMatrix(u.U), this.S = u.S, this.R = u.R, this.excludedFeatures = u.excludedFeatures || [];
                        return
                    }
                    r = new R(r);
                    const { isCovarianceMatrix: t = !1, method: n = "SVD", nCompNIPALS: s = 2, center: c = !0, scale: g = !1, ignoreZeroVariance: w = !1 } = i;
                    if (this.center = c, this.scale = g, this.means = null, this.stdevs = null, this.excludedFeatures = [], t) { this._computeFromCovarianceMatrix(r); return }
                    switch (this._adjust(r, w), n) {
                        case "covarianceMatrix":
                            { const u = new O(r).mmul(r).div(r.rows - 1);this._computeFromCovarianceMatrix(u); break }
                        case "NIPALS":
                            { this._computeWithNIPALS(r, s); break }
                        case "SVD":
                            {
                                const u = new L(r, { computeLeftSingularVectors: !1, computeRightSingularVectors: !0, autoTranspose: !0 });this.U = u.rightSingularVectors;
                                const E = u.diagonal,
                                    p = [];
                                for (const M of E) p.push(M * M / (r.rows - 1));this.S = p;
                                break
                            }
                        default:
                            throw new Error(`unknown method: ${n}`)
                    }
                }
                static load(r) { if (typeof r.name != "string") throw new TypeError("model must have a name property"); if (r.name !== "PCA") throw new RangeError(`invalid model: ${r.name}`); return new xt(!0, r) }
                predict(r, i = {}) {
                    const { nComponents: t = this.U.columns } = i;
                    if (r = new R(r), this.center && (r.subRowVector(this.means), this.scale)) {
                        for (let s of this.excludedFeatures) r.removeColumn(s);
                        r.divRowVector(this.stdevs)
                    }
                    let n = r.mmul(this.U);
                    return n.subMatrix(0, n.rows - 1, 0, t - 1)
                }
                invert(r) { r = R.checkMatrix(r); let i = r.mmul(this.U.transpose()); return this.center && (this.scale && i.mulRowVector(this.stdevs), i.addRowVector(this.means)), i }
                getExplainedVariance() { let r = 0; for (const i of this.S) r += i; return this.S.map(i => i / r) }
                getCumulativeVariance() { let r = this.getExplainedVariance(); for (let i = 1; i < r.length; i++) r[i] += r[i - 1]; return r }
                getEigenvectors() { return this.U }
                getEigenvalues() { return this.S }
                getStandardDeviations() { return this.S.map(r => Math.sqrt(r)) }
                getLoadings() { return this.U.transpose() }
                toJSON() { return { name: "PCA", center: this.center, scale: this.scale, means: this.means, stdevs: this.stdevs, U: this.U, S: this.S, excludedFeatures: this.excludedFeatures } }
                _adjust(r, i) {
                    if (this.center) {
                        const t = r.mean("column"),
                            n = this.scale ? r.standardDeviation("column", { mean: t }) : null;
                        if (this.means = t, r.subRowVector(t), this.scale) {
                            for (let s = 0; s < n.length; s++)
                                if (n[s] === 0)
                                    if (i) r.removeColumn(s), n.splice(s, 1), this.excludedFeatures.push(s), s--;
                                    else throw new RangeError(`Cannot scale the dataset (standard deviation is zero at index ${s}`);
                            this.stdevs = n, r.divRowVector(n)
                        }
                    }
                }
                _computeFromCovarianceMatrix(r) {
                    const i = new x(r, { assumeSymmetric: !0 });
                    this.U = i.eigenvectorMatrix, this.U.flipRows(), this.S = i.realEigenvalues, this.S.reverse()
                }
                _computeWithNIPALS(r, i) {
                    this.U = new R(i, r.columns), this.S = [];
                    let t = r;
                    for (let n = 0; n < i; n++) {
                        let s = new dt(t);
                        this.U.setRow(n, s.w.transpose()), this.S.push(Math.pow(s.s.get(0, 0), 2)), t = s.xResidual
                    }
                    this.U = this.U.transpose()
                }
            }
        },
        37187: (Ie, se, z) => {
            z.d(se, { ZP: () => $o }); /*! pako 2.0.4 https://github.com/nodeca/pako @license (MIT AND Zlib) */
            const Jt = 4,
                Rt = 0,
                he = 1,
                ne = 2;

            function Wt(e) { let a = e.length; for (; --a >= 0;) e[a] = 0 }
            const Ft = 0,
                ae = 1,
                _t = 2,
                de = 3,
                _e = 258,
                ie = 29,
                Qt = 256,
                $t = Qt + 1 + ie,
                yt = 30,
                qt = 19,
                It = 2 * $t + 1,
                it = 15,
                bt = 16,
                Et = 7,
                gt = 256,
                pt = 16,
                kt = 17,
                re = 18,
                Ht = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]),
                Vt = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]),
                ye = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]),
                Tt = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
                Ue = 512,
                Gt = new Array(($t + 2) * 2);
            Wt(Gt);
            const ge = new Array(yt * 2);
            Wt(ge);
            const be = new Array(Ue);
            Wt(be);
            const Ee = new Array(_e - de + 1);
            Wt(Ee);
            const Se = new Array(ie);
            Wt(Se);
            const pe = new Array(yt);
            Wt(pe);

            function Re(e, a, o, f, h) { this.static_tree = e, this.extra_bits = a, this.extra_base = o, this.elems = f, this.max_length = h, this.has_stree = e && e.length }
            let Te, xe, ke;

            function ce(e, a) { this.dyn_tree = e, this.max_code = 0, this.stat_desc = a }
            const Q = e => e < 256 ? be[e] : be[256 + (e >>> 7)],
                A = (e, a) => { e.pending_buf[e.pending++] = a & 255, e.pending_buf[e.pending++] = a >>> 8 & 255 },
                Z = (e, a, o) => { e.bi_valid > bt - o ? (e.bi_buf |= a << e.bi_valid & 65535, A(e, e.bi_buf), e.bi_buf = a >> bt - e.bi_valid, e.bi_valid += o - bt) : (e.bi_buf |= a << e.bi_valid & 65535, e.bi_valid += o) },
                V = (e, a, o) => { Z(e, o[a * 2], o[a * 2 + 1]) },
                R = (e, a) => {
                    let o = 0;
                    do o |= e & 1, e >>>= 1, o <<= 1; while (--a > 0);
                    return o >>> 1
                },
                st = e => { e.bi_valid === 16 ? (A(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = e.bi_buf & 255, e.bi_buf >>= 8, e.bi_valid -= 8) },
                O = (e, a) => {
                    const o = a.dyn_tree,
                        f = a.max_code,
                        h = a.stat_desc.static_tree,
                        d = a.stat_desc.has_stree,
                        b = a.stat_desc.extra_bits,
                        y = a.stat_desc.extra_base,
                        J = a.stat_desc.max_length;
                    let m, S, Dt, G, I, nt, Kt = 0;
                    for (G = 0; G <= it; G++) e.bl_count[G] = 0;
                    for (o[e.heap[e.heap_max] * 2 + 1] = 0, m = e.heap_max + 1; m < It; m++) S = e.heap[m], G = o[o[S * 2 + 1] * 2 + 1] + 1, G > J && (G = J, Kt++), o[S * 2 + 1] = G, !(S > f) && (e.bl_count[G]++, I = 0, S >= y && (I = b[S - y]), nt = o[S * 2], e.opt_len += nt * (G + I), d && (e.static_len += nt * (h[S * 2 + 1] + I)));
                    if (Kt !== 0) {
                        do {
                            for (G = J - 1; e.bl_count[G] === 0;) G--;
                            e.bl_count[G]--, e.bl_count[G + 1] += 2, e.bl_count[J]--, Kt -= 2
                        } while (Kt > 0);
                        for (G = J; G !== 0; G--)
                            for (S = e.bl_count[G]; S !== 0;) Dt = e.heap[--m], !(Dt > f) && (o[Dt * 2 + 1] !== G && (e.opt_len += (G - o[Dt * 2 + 1]) * o[Dt * 2], o[Dt * 2 + 1] = G), S--)
                    }
                },
                U = (e, a, o) => {
                    const f = new Array(it + 1);
                    let h = 0,
                        d, b;
                    for (d = 1; d <= it; d++) f[d] = h = h + o[d - 1] << 1;
                    for (b = 0; b <= a; b++) {
                        let y = e[b * 2 + 1];
                        y !== 0 && (e[b * 2] = R(f[y]++, y))
                    }
                },
                N = () => {
                    let e, a, o, f, h;
                    const d = new Array(it + 1);
                    for (o = 0, f = 0; f < ie - 1; f++)
                        for (Se[f] = o, e = 0; e < 1 << Ht[f]; e++) Ee[o++] = f;
                    for (Ee[o - 1] = f, h = 0, f = 0; f < 16; f++)
                        for (pe[f] = h, e = 0; e < 1 << Vt[f]; e++) be[h++] = f;
                    for (h >>= 7; f < yt; f++)
                        for (pe[f] = h << 7, e = 0; e < 1 << Vt[f] - 7; e++) be[256 + h++] = f;
                    for (a = 0; a <= it; a++) d[a] = 0;
                    for (e = 0; e <= 143;) Gt[e * 2 + 1] = 8, e++, d[8]++;
                    for (; e <= 255;) Gt[e * 2 + 1] = 9, e++, d[9]++;
                    for (; e <= 279;) Gt[e * 2 + 1] = 7, e++, d[7]++;
                    for (; e <= 287;) Gt[e * 2 + 1] = 8, e++, d[8]++;
                    for (U(Gt, $t + 1, d), e = 0; e < yt; e++) ge[e * 2 + 1] = 5, ge[e * 2] = R(e, 5);
                    Te = new Re(Gt, Ht, Qt + 1, $t, it), xe = new Re(ge, Vt, 0, yt, it), ke = new Re(new Array(0), ye, 0, qt, Et)
                },
                L = e => {
                    let a;
                    for (a = 0; a < $t; a++) e.dyn_ltree[a * 2] = 0;
                    for (a = 0; a < yt; a++) e.dyn_dtree[a * 2] = 0;
                    for (a = 0; a < qt; a++) e.bl_tree[a * 2] = 0;
                    e.dyn_ltree[gt * 2] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0
                },
                x = e => { e.bi_valid > 8 ? A(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0 },
                q = (e, a, o, f) => { x(e), f && (A(e, o), A(e, ~o)), e.pending_buf.set(e.window.subarray(a, a + o), e.pending), e.pending += o },
                tt = (e, a, o, f) => {
                    const h = a * 2,
                        d = o * 2;
                    return e[h] < e[d] || e[h] === e[d] && f[a] <= f[o]
                },
                F = (e, a, o) => {
                    const f = e.heap[o];
                    let h = o << 1;
                    for (; h <= e.heap_len && (h < e.heap_len && tt(a, e.heap[h + 1], e.heap[h], e.depth) && h++, !tt(a, f, e.heap[h], e.depth));) e.heap[o] = e.heap[h], o = h, h <<= 1;
                    e.heap[o] = f
                },
                rt = (e, a, o) => {
                    let f, h, d = 0,
                        b, y;
                    if (e.last_lit !== 0)
                        do f = e.pending_buf[e.d_buf + d * 2] << 8 | e.pending_buf[e.d_buf + d * 2 + 1], h = e.pending_buf[e.l_buf + d], d++, f === 0 ? V(e, h, a) : (b = Ee[h], V(e, b + Qt + 1, a), y = Ht[b], y !== 0 && (h -= Se[b], Z(e, h, y)), f--, b = Q(f), V(e, b, o), y = Vt[b], y !== 0 && (f -= pe[b], Z(e, f, y))); while (d < e.last_lit);
                    V(e, gt, a)
                },
                at = (e, a) => {
                    const o = a.dyn_tree,
                        f = a.stat_desc.static_tree,
                        h = a.stat_desc.has_stree,
                        d = a.stat_desc.elems;
                    let b, y, J = -1,
                        m;
                    for (e.heap_len = 0, e.heap_max = It, b = 0; b < d; b++) o[b * 2] !== 0 ? (e.heap[++e.heap_len] = J = b, e.depth[b] = 0) : o[b * 2 + 1] = 0;
                    for (; e.heap_len < 2;) m = e.heap[++e.heap_len] = J < 2 ? ++J : 0, o[m * 2] = 1, e.depth[m] = 0, e.opt_len--, h && (e.static_len -= f[m * 2 + 1]);
                    for (a.max_code = J, b = e.heap_len >> 1; b >= 1; b--) F(e, o, b);
                    m = d;
                    do b = e.heap[1], e.heap[1] = e.heap[e.heap_len--], F(e, o, 1), y = e.heap[1], e.heap[--e.heap_max] = b, e.heap[--e.heap_max] = y, o[m * 2] = o[b * 2] + o[y * 2], e.depth[m] = (e.depth[b] >= e.depth[y] ? e.depth[b] : e.depth[y]) + 1, o[b * 2 + 1] = o[y * 2 + 1] = m, e.heap[1] = m++, F(e, o, 1); while (e.heap_len >= 2);
                    e.heap[--e.heap_max] = e.heap[1], O(e, a), U(o, J, e.bl_count)
                },
                dt = (e, a, o) => {
                    let f, h = -1,
                        d, b = a[0 * 2 + 1],
                        y = 0,
                        J = 7,
                        m = 4;
                    for (b === 0 && (J = 138, m = 3), a[(o + 1) * 2 + 1] = 65535, f = 0; f <= o; f++) d = b, b = a[(f + 1) * 2 + 1], !(++y < J && d === b) && (y < m ? e.bl_tree[d * 2] += y : d !== 0 ? (d !== h && e.bl_tree[d * 2]++, e.bl_tree[pt * 2]++) : y <= 10 ? e.bl_tree[kt * 2]++ : e.bl_tree[re * 2]++, y = 0, h = d, b === 0 ? (J = 138, m = 3) : d === b ? (J = 6, m = 3) : (J = 7, m = 4))
                },
                xt = (e, a, o) => {
                    let f, h = -1,
                        d, b = a[0 * 2 + 1],
                        y = 0,
                        J = 7,
                        m = 4;
                    for (b === 0 && (J = 138, m = 3), f = 0; f <= o; f++)
                        if (d = b, b = a[(f + 1) * 2 + 1], !(++y < J && d === b)) {
                            if (y < m)
                                do V(e, d, e.bl_tree); while (--y !== 0);
                            else d !== 0 ? (d !== h && (V(e, d, e.bl_tree), y--), V(e, pt, e.bl_tree), Z(e, y - 3, 2)) : y <= 10 ? (V(e, kt, e.bl_tree), Z(e, y - 3, 3)) : (V(e, re, e.bl_tree), Z(e, y - 11, 7));
                            y = 0, h = d, b === 0 ? (J = 138, m = 3) : d === b ? (J = 6, m = 3) : (J = 7, m = 4)
                        }
                },
                l = e => { let a; for (dt(e, e.dyn_ltree, e.l_desc.max_code), dt(e, e.dyn_dtree, e.d_desc.max_code), at(e, e.bl_desc), a = qt - 1; a >= 3 && e.bl_tree[Tt[a] * 2 + 1] === 0; a--); return e.opt_len += 3 * (a + 1) + 5 + 5 + 4, a },
                r = (e, a, o, f) => {
                    let h;
                    for (Z(e, a - 257, 5), Z(e, o - 1, 5), Z(e, f - 4, 4), h = 0; h < f; h++) Z(e, e.bl_tree[Tt[h] * 2 + 1], 3);
                    xt(e, e.dyn_ltree, a - 1), xt(e, e.dyn_dtree, o - 1)
                },
                i = e => {
                    let a = 4093624447,
                        o;
                    for (o = 0; o <= 31; o++, a >>>= 1)
                        if (a & 1 && e.dyn_ltree[o * 2] !== 0) return Rt;
                    if (e.dyn_ltree[9 * 2] !== 0 || e.dyn_ltree[10 * 2] !== 0 || e.dyn_ltree[13 * 2] !== 0) return he;
                    for (o = 32; o < Qt; o++)
                        if (e.dyn_ltree[o * 2] !== 0) return he;
                    return Rt
                };
            let t = !1;
            const n = e => { t || (N(), t = !0), e.l_desc = new ce(e.dyn_ltree, Te), e.d_desc = new ce(e.dyn_dtree, xe), e.bl_desc = new ce(e.bl_tree, ke), e.bi_buf = 0, e.bi_valid = 0, L(e) },
                s = (e, a, o, f) => { Z(e, (Ft << 1) + (f ? 1 : 0), 3), q(e, a, o, !0) },
                c = e => { Z(e, ae << 1, 3), V(e, gt, Gt), st(e) },
                g = (e, a, o, f) => {
                    let h, d, b = 0;
                    e.level > 0 ? (e.strm.data_type === ne && (e.strm.data_type = i(e)), at(e, e.l_desc), at(e, e.d_desc), b = l(e), h = e.opt_len + 3 + 7 >>> 3, d = e.static_len + 3 + 7 >>> 3, d <= h && (h = d)) : h = d = o + 5, o + 4 <= h && a !== -1 ? s(e, a, o, f) : e.strategy === Jt || d === h ? (Z(e, (ae << 1) + (f ? 1 : 0), 3), rt(e, Gt, ge)) : (Z(e, (_t << 1) + (f ? 1 : 0), 3), r(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, b + 1), rt(e, e.dyn_ltree, e.dyn_dtree)), L(e), f && x(e)
                },
                w = (e, a, o) => (e.pending_buf[e.d_buf + e.last_lit * 2] = a >>> 8 & 255, e.pending_buf[e.d_buf + e.last_lit * 2 + 1] = a & 255, e.pending_buf[e.l_buf + e.last_lit] = o & 255, e.last_lit++, a === 0 ? e.dyn_ltree[o * 2]++ : (e.matches++, a--, e.dyn_ltree[(Ee[o] + Qt + 1) * 2]++, e.dyn_dtree[Q(a) * 2]++), e.last_lit === e.lit_bufsize - 1);
            var u = n,
                E = s,
                p = g,
                M = w,
                C = c,
                k = { _tr_init: u, _tr_stored_block: E, _tr_flush_block: p, _tr_tally: M, _tr_align: C },
                B = (e, a, o, f) => {
                    let h = e & 65535 | 0,
                        d = e >>> 16 & 65535 | 0,
                        b = 0;
                    for (; o !== 0;) {
                        b = o > 2e3 ? 2e3 : o, o -= b;
                        do h = h + a[f++] | 0, d = d + h | 0; while (--b);
                        h %= 65521, d %= 65521
                    }
                    return h | d << 16 | 0
                };
            const _ = () => {
                    let e, a = [];
                    for (var o = 0; o < 256; o++) {
                        e = o;
                        for (var f = 0; f < 8; f++) e = e & 1 ? 3988292384 ^ e >>> 1 : e >>> 1;
                        a[o] = e
                    }
                    return a
                },
                j = new Uint32Array(_());
            var Y = (e, a, o, f) => {
                    const h = j,
                        d = f + o;
                    e ^= -1;
                    for (let b = f; b < d; b++) e = e >>> 8 ^ h[(e ^ a[b]) & 255];
                    return e ^ -1
                },
                et = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" },
                mt = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_MEM_ERROR: -4, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
            const { _tr_init: X, _tr_stored_block: H, _tr_flush_block: jt, _tr_tally: At, _tr_align: v } = k, { Z_NO_FLUSH: T, Z_PARTIAL_FLUSH: $, Z_FULL_FLUSH: P, Z_FINISH: ht, Z_BLOCK: Ct, Z_OK: zt, Z_STREAM_END: Mt, Z_STREAM_ERROR: Ut, Z_DATA_ERROR: Xt, Z_BUF_ERROR: me, Z_DEFAULT_COMPRESSION: we, Z_FILTERED: Oe, Z_HUFFMAN_ONLY: lt, Z_RLE: te, Z_FIXED: fe, Z_DEFAULT_STRATEGY: ue, Z_UNKNOWN: Yt, Z_DEFLATED: We } = mt, En = 9, Sn = 15, kn = 8, Mn = 29, Xe = 256 + 1 + Mn, On = 30, zi = 19, Ui = 2 * Xe + 1, Bi = 15, vt = 3, je = 258, Me = je + vt + 1, Fi = 32, ln = 42, Dn = 69, hn = 73, fn = 91, un = 103, Be = 113, Je = 666, ee = 1, Qe = 2, Fe = 3, Ve = 4, $i = 3, Le = (e, a) => (e.msg = et[a], a), Bn = e => (e << 1) - (e > 4 ? 9 : 0), Ce = e => { let a = e.length; for (; --a >= 0;) e[a] = 0 };
            let Ne = (e, a, o) => (a << e.hash_shift ^ o) & e.hash_mask;
            const ze = e => {
                    const a = e.state;
                    let o = a.pending;
                    o > e.avail_out && (o = e.avail_out), o !== 0 && (e.output.set(a.pending_buf.subarray(a.pending_out, a.pending_out + o), e.next_out), e.next_out += o, a.pending_out += o, e.total_out += o, e.avail_out -= o, a.pending -= o, a.pending === 0 && (a.pending_out = 0))
                },
                le = (e, a) => { jt(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, a), e.block_start = e.strstart, ze(e.strm) },
                Ot = (e, a) => { e.pending_buf[e.pending++] = a },
                qe = (e, a) => { e.pending_buf[e.pending++] = a >>> 8 & 255, e.pending_buf[e.pending++] = a & 255 },
                Zi = (e, a, o, f) => { let h = e.avail_in; return h > f && (h = f), h === 0 ? 0 : (e.avail_in -= h, a.set(e.input.subarray(e.next_in, e.next_in + h), o), e.state.wrap === 1 ? e.adler = B(e.adler, a, h, o) : e.state.wrap === 2 && (e.adler = Y(e.adler, a, h, o)), e.next_in += h, e.total_in += h, h) },
                Fn = (e, a) => {
                    let o = e.max_chain_length,
                        f = e.strstart,
                        h, d, b = e.prev_length,
                        y = e.nice_match;
                    const J = e.strstart > e.w_size - Me ? e.strstart - (e.w_size - Me) : 0,
                        m = e.window,
                        S = e.w_mask,
                        Dt = e.prev,
                        G = e.strstart + je;
                    let I = m[f + b - 1],
                        nt = m[f + b];
                    e.prev_length >= e.good_match && (o >>= 2), y > e.lookahead && (y = e.lookahead);
                    do
                        if (h = a, !(m[h + b] !== nt || m[h + b - 1] !== I || m[h] !== m[f] || m[++h] !== m[f + 1])) {
                            f += 2, h++;
                            do; while (m[++f] === m[++h] && m[++f] === m[++h] && m[++f] === m[++h] && m[++f] === m[++h] && m[++f] === m[++h] && m[++f] === m[++h] && m[++f] === m[++h] && m[++f] === m[++h] && f < G);
                            if (d = je - (G - f), f = G - je, d > b) {
                                if (e.match_start = a, b = d, d >= y) break;
                                I = m[f + b - 1], nt = m[f + b]
                            }
                        }
                    while ((a = Dt[a & S]) > J && --o !== 0);
                    return b <= e.lookahead ? b : e.lookahead
                },
                $e = e => {
                    const a = e.w_size;
                    let o, f, h, d, b;
                    do {
                        if (d = e.window_size - e.lookahead - e.strstart, e.strstart >= a + (a - Me)) {
                            e.window.set(e.window.subarray(a, a + a), 0), e.match_start -= a, e.strstart -= a, e.block_start -= a, f = e.hash_size, o = f;
                            do h = e.head[--o], e.head[o] = h >= a ? h - a : 0; while (--f);
                            f = a, o = f;
                            do h = e.prev[--o], e.prev[o] = h >= a ? h - a : 0; while (--f);
                            d += a
                        }
                        if (e.strm.avail_in === 0) break;
                        if (f = Zi(e.strm, e.window, e.strstart + e.lookahead, d), e.lookahead += f, e.lookahead + e.insert >= vt)
                            for (b = e.strstart - e.insert, e.ins_h = e.window[b], e.ins_h = Ne(e, e.ins_h, e.window[b + 1]); e.insert && (e.ins_h = Ne(e, e.ins_h, e.window[b + vt - 1]), e.prev[b & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = b, b++, e.insert--, !(e.lookahead + e.insert < vt)););
                    } while (e.lookahead < Me && e.strm.avail_in !== 0)
                },
                Ki = (e, a) => {
                    let o = 65535;
                    for (o > e.pending_buf_size - 5 && (o = e.pending_buf_size - 5);;) {
                        if (e.lookahead <= 1) { if ($e(e), e.lookahead === 0 && a === T) return ee; if (e.lookahead === 0) break }
                        e.strstart += e.lookahead, e.lookahead = 0;
                        const f = e.block_start + o;
                        if ((e.strstart === 0 || e.strstart >= f) && (e.lookahead = e.strstart - f, e.strstart = f, le(e, !1), e.strm.avail_out === 0) || e.strstart - e.block_start >= e.w_size - Me && (le(e, !1), e.strm.avail_out === 0)) return ee
                    }
                    return e.insert = 0, a === ht ? (le(e, !0), e.strm.avail_out === 0 ? Fe : Ve) : (e.strstart > e.block_start && (le(e, !1), e.strm.avail_out === 0), ee)
                },
                Rn = (e, a) => {
                    let o, f;
                    for (;;) {
                        if (e.lookahead < Me) { if ($e(e), e.lookahead < Me && a === T) return ee; if (e.lookahead === 0) break }
                        if (o = 0, e.lookahead >= vt && (e.ins_h = Ne(e, e.ins_h, e.window[e.strstart + vt - 1]), o = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), o !== 0 && e.strstart - o <= e.w_size - Me && (e.match_length = Fn(e, o)), e.match_length >= vt)
                            if (f = At(e, e.strstart - e.match_start, e.match_length - vt), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= vt) {
                                e.match_length--;
                                do e.strstart++, e.ins_h = Ne(e, e.ins_h, e.window[e.strstart + vt - 1]), o = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart; while (--e.match_length !== 0);
                                e.strstart++
                            } else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = Ne(e, e.ins_h, e.window[e.strstart + 1]);
                        else f = At(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
                        if (f && (le(e, !1), e.strm.avail_out === 0)) return ee
                    }
                    return e.insert = e.strstart < vt - 1 ? e.strstart : vt - 1, a === ht ? (le(e, !0), e.strm.avail_out === 0 ? Fe : Ve) : e.last_lit && (le(e, !1), e.strm.avail_out === 0) ? ee : Qe
                },
                Ye = (e, a) => {
                    let o, f, h;
                    for (;;) {
                        if (e.lookahead < Me) { if ($e(e), e.lookahead < Me && a === T) return ee; if (e.lookahead === 0) break }
                        if (o = 0, e.lookahead >= vt && (e.ins_h = Ne(e, e.ins_h, e.window[e.strstart + vt - 1]), o = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = vt - 1, o !== 0 && e.prev_length < e.max_lazy_match && e.strstart - o <= e.w_size - Me && (e.match_length = Fn(e, o), e.match_length <= 5 && (e.strategy === Oe || e.match_length === vt && e.strstart - e.match_start > 4096) && (e.match_length = vt - 1)), e.prev_length >= vt && e.match_length <= e.prev_length) {
                            h = e.strstart + e.lookahead - vt, f = At(e, e.strstart - 1 - e.prev_match, e.prev_length - vt), e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
                            do ++e.strstart <= h && (e.ins_h = Ne(e, e.ins_h, e.window[e.strstart + vt - 1]), o = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart); while (--e.prev_length !== 0);
                            if (e.match_available = 0, e.match_length = vt - 1, e.strstart++, f && (le(e, !1), e.strm.avail_out === 0)) return ee
                        } else if (e.match_available) { if (f = At(e, 0, e.window[e.strstart - 1]), f && le(e, !1), e.strstart++, e.lookahead--, e.strm.avail_out === 0) return ee } else e.match_available = 1, e.strstart++, e.lookahead--
                    }
                    return e.match_available && (f = At(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < vt - 1 ? e.strstart : vt - 1, a === ht ? (le(e, !0), e.strm.avail_out === 0 ? Fe : Ve) : e.last_lit && (le(e, !1), e.strm.avail_out === 0) ? ee : Qe
                },
                Wi = (e, a) => {
                    let o, f, h, d;
                    const b = e.window;
                    for (;;) {
                        if (e.lookahead <= je) { if ($e(e), e.lookahead <= je && a === T) return ee; if (e.lookahead === 0) break }
                        if (e.match_length = 0, e.lookahead >= vt && e.strstart > 0 && (h = e.strstart - 1, f = b[h], f === b[++h] && f === b[++h] && f === b[++h])) {
                            d = e.strstart + je;
                            do; while (f === b[++h] && f === b[++h] && f === b[++h] && f === b[++h] && f === b[++h] && f === b[++h] && f === b[++h] && f === b[++h] && h < d);
                            e.match_length = je - (d - h), e.match_length > e.lookahead && (e.match_length = e.lookahead)
                        }
                        if (e.match_length >= vt ? (o = At(e, 1, e.match_length - vt), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (o = At(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), o && (le(e, !1), e.strm.avail_out === 0)) return ee
                    }
                    return e.insert = 0, a === ht ? (le(e, !0), e.strm.avail_out === 0 ? Fe : Ve) : e.last_lit && (le(e, !1), e.strm.avail_out === 0) ? ee : Qe
                },
                Vi = (e, a) => { let o; for (;;) { if (e.lookahead === 0 && ($e(e), e.lookahead === 0)) { if (a === T) return ee; break } if (e.match_length = 0, o = At(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, o && (le(e, !1), e.strm.avail_out === 0)) return ee } return e.insert = 0, a === ht ? (le(e, !0), e.strm.avail_out === 0 ? Fe : Ve) : e.last_lit && (le(e, !1), e.strm.avail_out === 0) ? ee : Qe };

            function De(e, a, o, f, h) { this.good_length = e, this.max_lazy = a, this.nice_length = o, this.max_chain = f, this.func = h }
            const He = [new De(0, 0, 0, 0, Ki), new De(4, 4, 8, 4, Rn), new De(4, 5, 16, 8, Rn), new De(4, 6, 32, 32, Rn), new De(4, 4, 16, 16, Ye), new De(8, 16, 32, 32, Ye), new De(8, 16, 128, 128, Ye), new De(8, 32, 128, 256, Ye), new De(32, 128, 258, 1024, Ye), new De(32, 258, 258, 4096, Ye)],
                Yi = e => { e.window_size = 2 * e.w_size, Ce(e.head), e.max_lazy_match = He[e.level].max_lazy, e.good_match = He[e.level].good_length, e.nice_match = He[e.level].nice_length, e.max_chain_length = He[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = vt - 1, e.match_available = 0, e.ins_h = 0 };

            function Gi() { this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = We, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(Ui * 2), this.dyn_dtree = new Uint16Array((2 * On + 1) * 2), this.bl_tree = new Uint16Array((2 * zi + 1) * 2), Ce(this.dyn_ltree), Ce(this.dyn_dtree), Ce(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(Bi + 1), this.heap = new Uint16Array(2 * Xe + 1), Ce(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(2 * Xe + 1), Ce(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0 }
            const $n = e => {
                    if (!e || !e.state) return Le(e, Ut);
                    e.total_in = e.total_out = 0, e.data_type = Yt;
                    const a = e.state;
                    return a.pending = 0, a.pending_out = 0, a.wrap < 0 && (a.wrap = -a.wrap), a.status = a.wrap ? ln : Be, e.adler = a.wrap === 2 ? 0 : 1, a.last_flush = T, X(a), zt
                },
                Zn = e => { const a = $n(e); return a === zt && Yi(e.state), a },
                Xi = (e, a) => !e || !e.state || e.state.wrap !== 2 ? Ut : (e.state.gzhead = a, zt),
                Kn = (e, a, o, f, h, d) => {
                    if (!e) return Ut;
                    let b = 1;
                    if (a === we && (a = 6), f < 0 ? (b = 0, f = -f) : f > 15 && (b = 2, f -= 16), h < 1 || h > En || o !== We || f < 8 || f > 15 || a < 0 || a > 9 || d < 0 || d > fe) return Le(e, Ut);
                    f === 8 && (f = 9);
                    const y = new Gi;
                    return e.state = y, y.strm = e, y.wrap = b, y.gzhead = null, y.w_bits = f, y.w_size = 1 << y.w_bits, y.w_mask = y.w_size - 1, y.hash_bits = h + 7, y.hash_size = 1 << y.hash_bits, y.hash_mask = y.hash_size - 1, y.hash_shift = ~~((y.hash_bits + vt - 1) / vt), y.window = new Uint8Array(y.w_size * 2), y.head = new Uint16Array(y.hash_size), y.prev = new Uint16Array(y.w_size), y.lit_bufsize = 1 << h + 6, y.pending_buf_size = y.lit_bufsize * 4, y.pending_buf = new Uint8Array(y.pending_buf_size), y.d_buf = 1 * y.lit_bufsize, y.l_buf = (1 + 2) * y.lit_bufsize, y.level = a, y.strategy = d, y.method = o, Zn(e)
                },
                Ji = (e, a) => Kn(e, a, We, Sn, kn, ue),
                Qi = (e, a) => {
                    let o, f;
                    if (!e || !e.state || a > Ct || a < 0) return e ? Le(e, Ut) : Ut;
                    const h = e.state;
                    if (!e.output || !e.input && e.avail_in !== 0 || h.status === Je && a !== ht) return Le(e, e.avail_out === 0 ? me : Ut);
                    h.strm = e;
                    const d = h.last_flush;
                    if (h.last_flush = a, h.status === ln)
                        if (h.wrap === 2) e.adler = 0, Ot(h, 31), Ot(h, 139), Ot(h, 8), h.gzhead ? (Ot(h, (h.gzhead.text ? 1 : 0) + (h.gzhead.hcrc ? 2 : 0) + (h.gzhead.extra ? 4 : 0) + (h.gzhead.name ? 8 : 0) + (h.gzhead.comment ? 16 : 0)), Ot(h, h.gzhead.time & 255), Ot(h, h.gzhead.time >> 8 & 255), Ot(h, h.gzhead.time >> 16 & 255), Ot(h, h.gzhead.time >> 24 & 255), Ot(h, h.level === 9 ? 2 : h.strategy >= lt || h.level < 2 ? 4 : 0), Ot(h, h.gzhead.os & 255), h.gzhead.extra && h.gzhead.extra.length && (Ot(h, h.gzhead.extra.length & 255), Ot(h, h.gzhead.extra.length >> 8 & 255)), h.gzhead.hcrc && (e.adler = Y(e.adler, h.pending_buf, h.pending, 0)), h.gzindex = 0, h.status = Dn) : (Ot(h, 0), Ot(h, 0), Ot(h, 0), Ot(h, 0), Ot(h, 0), Ot(h, h.level === 9 ? 2 : h.strategy >= lt || h.level < 2 ? 4 : 0), Ot(h, $i), h.status = Be);
                        else {
                            let b = We + (h.w_bits - 8 << 4) << 8,
                                y = -1;
                            h.strategy >= lt || h.level < 2 ? y = 0 : h.level < 6 ? y = 1 : h.level === 6 ? y = 2 : y = 3, b |= y << 6, h.strstart !== 0 && (b |= Fi), b += 31 - b % 31, h.status = Be, qe(h, b), h.strstart !== 0 && (qe(h, e.adler >>> 16), qe(h, e.adler & 65535)), e.adler = 1
                        }
                    if (h.status === Dn)
                        if (h.gzhead.extra) {
                            for (o = h.pending; h.gzindex < (h.gzhead.extra.length & 65535) && !(h.pending === h.pending_buf_size && (h.gzhead.hcrc && h.pending > o && (e.adler = Y(e.adler, h.pending_buf, h.pending - o, o)), ze(e), o = h.pending, h.pending === h.pending_buf_size));) Ot(h, h.gzhead.extra[h.gzindex] & 255), h.gzindex++;
                            h.gzhead.hcrc && h.pending > o && (e.adler = Y(e.adler, h.pending_buf, h.pending - o, o)), h.gzindex === h.gzhead.extra.length && (h.gzindex = 0, h.status = hn)
                        } else h.status = hn;
                    if (h.status === hn)
                        if (h.gzhead.name) {
                            o = h.pending;
                            do {
                                if (h.pending === h.pending_buf_size && (h.gzhead.hcrc && h.pending > o && (e.adler = Y(e.adler, h.pending_buf, h.pending - o, o)), ze(e), o = h.pending, h.pending === h.pending_buf_size)) { f = 1; break }
                                h.gzindex < h.gzhead.name.length ? f = h.gzhead.name.charCodeAt(h.gzindex++) & 255 : f = 0, Ot(h, f)
                            } while (f !== 0);
                            h.gzhead.hcrc && h.pending > o && (e.adler = Y(e.adler, h.pending_buf, h.pending - o, o)), f === 0 && (h.gzindex = 0, h.status = fn)
                        } else h.status = fn;
                    if (h.status === fn)
                        if (h.gzhead.comment) {
                            o = h.pending;
                            do {
                                if (h.pending === h.pending_buf_size && (h.gzhead.hcrc && h.pending > o && (e.adler = Y(e.adler, h.pending_buf, h.pending - o, o)), ze(e), o = h.pending, h.pending === h.pending_buf_size)) { f = 1; break }
                                h.gzindex < h.gzhead.comment.length ? f = h.gzhead.comment.charCodeAt(h.gzindex++) & 255 : f = 0, Ot(h, f)
                            } while (f !== 0);
                            h.gzhead.hcrc && h.pending > o && (e.adler = Y(e.adler, h.pending_buf, h.pending - o, o)), f === 0 && (h.status = un)
                        } else h.status = un;
                    if (h.status === un && (h.gzhead.hcrc ? (h.pending + 2 > h.pending_buf_size && ze(e), h.pending + 2 <= h.pending_buf_size && (Ot(h, e.adler & 255), Ot(h, e.adler >> 8 & 255), e.adler = 0, h.status = Be)) : h.status = Be), h.pending !== 0) { if (ze(e), e.avail_out === 0) return h.last_flush = -1, zt } else if (e.avail_in === 0 && Bn(a) <= Bn(d) && a !== ht) return Le(e, me);
                    if (h.status === Je && e.avail_in !== 0) return Le(e, me);
                    if (e.avail_in !== 0 || h.lookahead !== 0 || a !== T && h.status !== Je) { let b = h.strategy === lt ? Vi(h, a) : h.strategy === te ? Wi(h, a) : He[h.level].func(h, a); if ((b === Fe || b === Ve) && (h.status = Je), b === ee || b === Fe) return e.avail_out === 0 && (h.last_flush = -1), zt; if (b === Qe && (a === $ ? v(h) : a !== Ct && (H(h, 0, 0, !1), a === P && (Ce(h.head), h.lookahead === 0 && (h.strstart = 0, h.block_start = 0, h.insert = 0))), ze(e), e.avail_out === 0)) return h.last_flush = -1, zt }
                    return a !== ht ? zt : h.wrap <= 0 ? Mt : (h.wrap === 2 ? (Ot(h, e.adler & 255), Ot(h, e.adler >> 8 & 255), Ot(h, e.adler >> 16 & 255), Ot(h, e.adler >> 24 & 255), Ot(h, e.total_in & 255), Ot(h, e.total_in >> 8 & 255), Ot(h, e.total_in >> 16 & 255), Ot(h, e.total_in >> 24 & 255)) : (qe(h, e.adler >>> 16), qe(h, e.adler & 65535)), ze(e), h.wrap > 0 && (h.wrap = -h.wrap), h.pending !== 0 ? zt : Mt)
                },
                qi = e => { if (!e || !e.state) return Ut; const a = e.state.status; return a !== ln && a !== Dn && a !== hn && a !== fn && a !== un && a !== Be && a !== Je ? Le(e, Ut) : (e.state = null, a === Be ? Le(e, Xt) : zt) },
                Hi = (e, a) => {
                    let o = a.length;
                    if (!e || !e.state) return Ut;
                    const f = e.state,
                        h = f.wrap;
                    if (h === 2 || h === 1 && f.status !== ln || f.lookahead) return Ut;
                    if (h === 1 && (e.adler = B(e.adler, a, o, 0)), f.wrap = 0, o >= f.w_size) {
                        h === 0 && (Ce(f.head), f.strstart = 0, f.block_start = 0, f.insert = 0);
                        let J = new Uint8Array(f.w_size);
                        J.set(a.subarray(o - f.w_size, o), 0), a = J, o = f.w_size
                    }
                    const d = e.avail_in,
                        b = e.next_in,
                        y = e.input;
                    for (e.avail_in = o, e.next_in = 0, e.input = a, $e(f); f.lookahead >= vt;) {
                        let J = f.strstart,
                            m = f.lookahead - (vt - 1);
                        do f.ins_h = Ne(f, f.ins_h, f.window[J + vt - 1]), f.prev[J & f.w_mask] = f.head[f.ins_h], f.head[f.ins_h] = J, J++; while (--m);
                        f.strstart = J, f.lookahead = vt - 1, $e(f)
                    }
                    return f.strstart += f.lookahead, f.block_start = f.strstart, f.insert = f.lookahead, f.lookahead = 0, f.match_length = f.prev_length = vt - 1, f.match_available = 0, e.next_in = b, e.input = y, e.avail_in = d, f.wrap = h, zt
                };
            var tr = Ji,
                er = Kn,
                nr = Zn,
                ir = $n,
                rr = Xi,
                or = Qi,
                sr = qi,
                ar = Hi,
                lr = "pako deflate (from Nodeca project)",
                tn = { deflateInit: tr, deflateInit2: er, deflateReset: nr, deflateResetKeep: ir, deflateSetHeader: rr, deflate: or, deflateEnd: sr, deflateSetDictionary: ar, deflateInfo: lr };
            const hr = (e, a) => Object.prototype.hasOwnProperty.call(e, a);
            var fr = function(e) { const a = Array.prototype.slice.call(arguments, 1); for (; a.length;) { const o = a.shift(); if (!!o) { if (typeof o != "object") throw new TypeError(o + "must be non-object"); for (const f in o) hr(o, f) && (e[f] = o[f]) } } return e },
                ur = e => {
                    let a = 0;
                    for (let f = 0, h = e.length; f < h; f++) a += e[f].length;
                    const o = new Uint8Array(a);
                    for (let f = 0, h = 0, d = e.length; f < d; f++) {
                        let b = e[f];
                        o.set(b, h), h += b.length
                    }
                    return o
                },
                cn = { assign: fr, flattenChunks: ur };
            let Wn = !0;
            try { String.fromCharCode.apply(null, new Uint8Array(1)) } catch { Wn = !1 }
            const en = new Uint8Array(256);
            for (let e = 0; e < 256; e++) en[e] = e >= 252 ? 6 : e >= 248 ? 5 : e >= 240 ? 4 : e >= 224 ? 3 : e >= 192 ? 2 : 1;
            en[254] = en[254] = 1;
            var cr = e => {
                if (typeof TextEncoder == "function" && TextEncoder.prototype.encode) return new TextEncoder().encode(e);
                let a, o, f, h, d, b = e.length,
                    y = 0;
                for (h = 0; h < b; h++) o = e.charCodeAt(h), (o & 64512) === 55296 && h + 1 < b && (f = e.charCodeAt(h + 1), (f & 64512) === 56320 && (o = 65536 + (o - 55296 << 10) + (f - 56320), h++)), y += o < 128 ? 1 : o < 2048 ? 2 : o < 65536 ? 3 : 4;
                for (a = new Uint8Array(y), d = 0, h = 0; d < y; h++) o = e.charCodeAt(h), (o & 64512) === 55296 && h + 1 < b && (f = e.charCodeAt(h + 1), (f & 64512) === 56320 && (o = 65536 + (o - 55296 << 10) + (f - 56320), h++)), o < 128 ? a[d++] = o : o < 2048 ? (a[d++] = 192 | o >>> 6, a[d++] = 128 | o & 63) : o < 65536 ? (a[d++] = 224 | o >>> 12, a[d++] = 128 | o >>> 6 & 63, a[d++] = 128 | o & 63) : (a[d++] = 240 | o >>> 18, a[d++] = 128 | o >>> 12 & 63, a[d++] = 128 | o >>> 6 & 63, a[d++] = 128 | o & 63);
                return a
            };
            const dr = (e, a) => { if (a < 65534 && e.subarray && Wn) return String.fromCharCode.apply(null, e.length === a ? e : e.subarray(0, a)); let o = ""; for (let f = 0; f < a; f++) o += String.fromCharCode(e[f]); return o };
            var _r = (e, a) => {
                    const o = a || e.length;
                    if (typeof TextDecoder == "function" && TextDecoder.prototype.decode) return new TextDecoder().decode(e.subarray(0, a));
                    let f, h;
                    const d = new Array(o * 2);
                    for (h = 0, f = 0; f < o;) {
                        let b = e[f++];
                        if (b < 128) { d[h++] = b; continue }
                        let y = en[b];
                        if (y > 4) { d[h++] = 65533, f += y - 1; continue }
                        for (b &= y === 2 ? 31 : y === 3 ? 15 : 7; y > 1 && f < o;) b = b << 6 | e[f++] & 63, y--;
                        if (y > 1) { d[h++] = 65533; continue }
                        b < 65536 ? d[h++] = b : (b -= 65536, d[h++] = 55296 | b >> 10 & 1023, d[h++] = 56320 | b & 1023)
                    }
                    return dr(d, h)
                },
                gr = (e, a) => { a = a || e.length, a > e.length && (a = e.length); let o = a - 1; for (; o >= 0 && (e[o] & 192) === 128;) o--; return o < 0 || o === 0 ? a : o + en[e[o]] > a ? o : a },
                nn = { string2buf: cr, buf2string: _r, utf8border: gr };

            function pr() { this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0 }
            var Vn = pr;
            const Yn = Object.prototype.toString,
                { Z_NO_FLUSH: mr, Z_SYNC_FLUSH: wr, Z_FULL_FLUSH: vr, Z_FINISH: yr, Z_OK: dn, Z_STREAM_END: br, Z_DEFAULT_COMPRESSION: Er, Z_DEFAULT_STRATEGY: Sr, Z_DEFLATED: kr } = mt;

            function rn(e) {
                this.options = cn.assign({ level: Er, method: kr, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: Sr }, e || {});
                let a = this.options;
                a.raw && a.windowBits > 0 ? a.windowBits = -a.windowBits : a.gzip && a.windowBits > 0 && a.windowBits < 16 && (a.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Vn, this.strm.avail_out = 0;
                let o = tn.deflateInit2(this.strm, a.level, a.method, a.windowBits, a.memLevel, a.strategy);
                if (o !== dn) throw new Error(et[o]);
                if (a.header && tn.deflateSetHeader(this.strm, a.header), a.dictionary) {
                    let f;
                    if (typeof a.dictionary == "string" ? f = nn.string2buf(a.dictionary) : Yn.call(a.dictionary) === "[object ArrayBuffer]" ? f = new Uint8Array(a.dictionary) : f = a.dictionary, o = tn.deflateSetDictionary(this.strm, f), o !== dn) throw new Error(et[o]);
                    this._dict_set = !0
                }
            }
            rn.prototype.push = function(e, a) {
                const o = this.strm,
                    f = this.options.chunkSize;
                let h, d;
                if (this.ended) return !1;
                for (a === ~~a ? d = a : d = a === !0 ? yr : mr, typeof e == "string" ? o.input = nn.string2buf(e) : Yn.call(e) === "[object ArrayBuffer]" ? o.input = new Uint8Array(e) : o.input = e, o.next_in = 0, o.avail_in = o.input.length;;) { if (o.avail_out === 0 && (o.output = new Uint8Array(f), o.next_out = 0, o.avail_out = f), (d === wr || d === vr) && o.avail_out <= 6) { this.onData(o.output.subarray(0, o.next_out)), o.avail_out = 0; continue } if (h = tn.deflate(o, d), h === br) return o.next_out > 0 && this.onData(o.output.subarray(0, o.next_out)), h = tn.deflateEnd(this.strm), this.onEnd(h), this.ended = !0, h === dn; if (o.avail_out === 0) { this.onData(o.output); continue } if (d > 0 && o.next_out > 0) { this.onData(o.output.subarray(0, o.next_out)), o.avail_out = 0; continue } if (o.avail_in === 0) break }
                return !0
            }, rn.prototype.onData = function(e) { this.chunks.push(e) }, rn.prototype.onEnd = function(e) { e === dn && (this.result = cn.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg };

            function Tn(e, a) { const o = new rn(a); if (o.push(e, !0), o.err) throw o.msg || et[o.err]; return o.result }

            function Mr(e, a) { return a = a || {}, a.raw = !0, Tn(e, a) }

            function Or(e, a) { return a = a || {}, a.gzip = !0, Tn(e, a) }
            var Dr = rn,
                Rr = Tn,
                Tr = Mr,
                Ar = Or,
                Pr = mt,
                Ir = { Deflate: Dr, deflate: Rr, deflateRaw: Tr, gzip: Ar, constants: Pr };
            const _n = 30,
                xr = 12;
            var jr = function(a, o) {
                let f, h, d, b, y, J, m, S, Dt, G, I, nt, Kt, St, ft, Lt, wt, W, Pt, oe, ot, Bt, Nt, ut;
                const ct = a.state;
                f = a.next_in, Nt = a.input, h = f + (a.avail_in - 5), d = a.next_out, ut = a.output, b = d - (o - a.avail_out), y = d + (a.avail_out - 257), J = ct.dmax, m = ct.wsize, S = ct.whave, Dt = ct.wnext, G = ct.window, I = ct.hold, nt = ct.bits, Kt = ct.lencode, St = ct.distcode, ft = (1 << ct.lenbits) - 1, Lt = (1 << ct.distbits) - 1;
                t: do {
                    nt < 15 && (I += Nt[f++] << nt, nt += 8, I += Nt[f++] << nt, nt += 8), wt = Kt[I & ft];
                    e: for (;;) {
                        if (W = wt >>> 24, I >>>= W, nt -= W, W = wt >>> 16 & 255, W === 0) ut[d++] = wt & 65535;
                        else if (W & 16) {
                            Pt = wt & 65535, W &= 15, W && (nt < W && (I += Nt[f++] << nt, nt += 8), Pt += I & (1 << W) - 1, I >>>= W, nt -= W), nt < 15 && (I += Nt[f++] << nt, nt += 8, I += Nt[f++] << nt, nt += 8), wt = St[I & Lt];
                            n: for (;;) {
                                if (W = wt >>> 24, I >>>= W, nt -= W, W = wt >>> 16 & 255, W & 16) {
                                    if (oe = wt & 65535, W &= 15, nt < W && (I += Nt[f++] << nt, nt += 8, nt < W && (I += Nt[f++] << nt, nt += 8)), oe += I & (1 << W) - 1, oe > J) { a.msg = "invalid distance too far back", ct.mode = _n; break t }
                                    if (I >>>= W, nt -= W, W = d - b, oe > W) {
                                        if (W = oe - W, W > S && ct.sane) { a.msg = "invalid distance too far back", ct.mode = _n; break t }
                                        if (ot = 0, Bt = G, Dt === 0) {
                                            if (ot += m - W, W < Pt) {
                                                Pt -= W;
                                                do ut[d++] = G[ot++]; while (--W);
                                                ot = d - oe, Bt = ut
                                            }
                                        } else if (Dt < W) {
                                            if (ot += m + Dt - W, W -= Dt, W < Pt) {
                                                Pt -= W;
                                                do ut[d++] = G[ot++]; while (--W);
                                                if (ot = 0, Dt < Pt) {
                                                    W = Dt, Pt -= W;
                                                    do ut[d++] = G[ot++]; while (--W);
                                                    ot = d - oe, Bt = ut
                                                }
                                            }
                                        } else if (ot += Dt - W, W < Pt) {
                                            Pt -= W;
                                            do ut[d++] = G[ot++]; while (--W);
                                            ot = d - oe, Bt = ut
                                        }
                                        for (; Pt > 2;) ut[d++] = Bt[ot++], ut[d++] = Bt[ot++], ut[d++] = Bt[ot++], Pt -= 3;
                                        Pt && (ut[d++] = Bt[ot++], Pt > 1 && (ut[d++] = Bt[ot++]))
                                    } else {
                                        ot = d - oe;
                                        do ut[d++] = ut[ot++], ut[d++] = ut[ot++], ut[d++] = ut[ot++], Pt -= 3; while (Pt > 2);
                                        Pt && (ut[d++] = ut[ot++], Pt > 1 && (ut[d++] = ut[ot++]))
                                    }
                                } else if ((W & 64) === 0) { wt = St[(wt & 65535) + (I & (1 << W) - 1)]; continue n } else { a.msg = "invalid distance code", ct.mode = _n; break t }
                                break
                            }
                        } else if ((W & 64) === 0) { wt = Kt[(wt & 65535) + (I & (1 << W) - 1)]; continue e } else if (W & 32) { ct.mode = xr; break t } else { a.msg = "invalid literal/length code", ct.mode = _n; break t }
                        break
                    }
                } while (f < h && d < y);
                Pt = nt >> 3, f -= Pt, nt -= Pt << 3, I &= (1 << nt) - 1, a.next_in = f, a.next_out = d, a.avail_in = f < h ? 5 + (h - f) : 5 - (f - h), a.avail_out = d < y ? 257 + (y - d) : 257 - (d - y), ct.hold = I, ct.bits = nt
            };
            const Ge = 15,
                Gn = 852,
                Xn = 592,
                Jn = 0,
                An = 1,
                Qn = 2,
                Lr = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]),
                Cr = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]),
                Nr = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]),
                zr = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
            var on = (e, a, o, f, h, d, b, y) => {
                const J = y.bits;
                let m = 0,
                    S = 0,
                    Dt = 0,
                    G = 0,
                    I = 0,
                    nt = 0,
                    Kt = 0,
                    St = 0,
                    ft = 0,
                    Lt = 0,
                    wt, W, Pt, oe, ot, Bt = null,
                    Nt = 0,
                    ut;
                const ct = new Uint16Array(Ge + 1),
                    Ke = new Uint16Array(Ge + 1);
                let vn = null,
                    Ci = 0,
                    Ni, yn, bn;
                for (m = 0; m <= Ge; m++) ct[m] = 0;
                for (S = 0; S < f; S++) ct[a[o + S]]++;
                for (I = J, G = Ge; G >= 1 && ct[G] === 0; G--);
                if (I > G && (I = G), G === 0) return h[d++] = 1 << 24 | 64 << 16 | 0, h[d++] = 1 << 24 | 64 << 16 | 0, y.bits = 1, 0;
                for (Dt = 1; Dt < G && ct[Dt] === 0; Dt++);
                for (I < Dt && (I = Dt), St = 1, m = 1; m <= Ge; m++)
                    if (St <<= 1, St -= ct[m], St < 0) return -1;
                if (St > 0 && (e === Jn || G !== 1)) return -1;
                for (Ke[1] = 0, m = 1; m < Ge; m++) Ke[m + 1] = Ke[m] + ct[m];
                for (S = 0; S < f; S++) a[o + S] !== 0 && (b[Ke[a[o + S]]++] = S);
                if (e === Jn ? (Bt = vn = b, ut = 19) : e === An ? (Bt = Lr, Nt -= 257, vn = Cr, Ci -= 257, ut = 256) : (Bt = Nr, vn = zr, ut = -1), Lt = 0, S = 0, m = Dt, ot = d, nt = I, Kt = 0, Pt = -1, ft = 1 << I, oe = ft - 1, e === An && ft > Gn || e === Qn && ft > Xn) return 1;
                for (;;) {
                    Ni = m - Kt, b[S] < ut ? (yn = 0, bn = b[S]) : b[S] > ut ? (yn = vn[Ci + b[S]], bn = Bt[Nt + b[S]]) : (yn = 32 + 64, bn = 0), wt = 1 << m - Kt, W = 1 << nt, Dt = W;
                    do W -= wt, h[ot + (Lt >> Kt) + W] = Ni << 24 | yn << 16 | bn | 0; while (W !== 0);
                    for (wt = 1 << m - 1; Lt & wt;) wt >>= 1;
                    if (wt !== 0 ? (Lt &= wt - 1, Lt += wt) : Lt = 0, S++, --ct[m] === 0) {
                        if (m === G) break;
                        m = a[o + b[S]]
                    }
                    if (m > I && (Lt & oe) !== Pt) {
                        for (Kt === 0 && (Kt = I), ot += Dt, nt = m - Kt, St = 1 << nt; nt + Kt < G && (St -= ct[nt + Kt], !(St <= 0));) nt++, St <<= 1;
                        if (ft += 1 << nt, e === An && ft > Gn || e === Qn && ft > Xn) return 1;
                        Pt = Lt & oe, h[Pt] = I << 24 | nt << 16 | ot - d | 0
                    }
                }
                return Lt !== 0 && (h[ot + Lt] = m - Kt << 24 | 64 << 16 | 0), y.bits = I, 0
            };
            const Ur = 0,
                qn = 1,
                Hn = 2,
                { Z_FINISH: ti, Z_BLOCK: Br, Z_TREES: gn, Z_OK: Ze, Z_STREAM_END: Fr, Z_NEED_DICT: $r, Z_STREAM_ERROR: ve, Z_DATA_ERROR: ei, Z_MEM_ERROR: ni, Z_BUF_ERROR: Zr, Z_DEFLATED: ii } = mt,
                ri = 1,
                oi = 2,
                si = 3,
                ai = 4,
                li = 5,
                hi = 6,
                fi = 7,
                ui = 8,
                ci = 9,
                di = 10,
                pn = 11,
                Ae = 12,
                Pn = 13,
                _i = 14,
                In = 15,
                gi = 16,
                pi = 17,
                mi = 18,
                wi = 19,
                mn = 20,
                wn = 21,
                vi = 22,
                yi = 23,
                bi = 24,
                Ei = 25,
                Si = 26,
                xn = 27,
                ki = 28,
                Mi = 29,
                Zt = 30,
                Oi = 31,
                Kr = 32,
                Wr = 852,
                Vr = 592,
                Yr = 15,
                Di = e => (e >>> 24 & 255) + (e >>> 8 & 65280) + ((e & 65280) << 8) + ((e & 255) << 24);

            function Gr() { this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0 }
            const Ri = e => { if (!e || !e.state) return ve; const a = e.state; return e.total_in = e.total_out = a.total = 0, e.msg = "", a.wrap && (e.adler = a.wrap & 1), a.mode = ri, a.last = 0, a.havedict = 0, a.dmax = 32768, a.head = null, a.hold = 0, a.bits = 0, a.lencode = a.lendyn = new Int32Array(Wr), a.distcode = a.distdyn = new Int32Array(Vr), a.sane = 1, a.back = -1, Ze },
                Ti = e => { if (!e || !e.state) return ve; const a = e.state; return a.wsize = 0, a.whave = 0, a.wnext = 0, Ri(e) },
                Ai = (e, a) => { let o; if (!e || !e.state) return ve; const f = e.state; return a < 0 ? (o = 0, a = -a) : (o = (a >> 4) + 1, a < 48 && (a &= 15)), a && (a < 8 || a > 15) ? ve : (f.window !== null && f.wbits !== a && (f.window = null), f.wrap = o, f.wbits = a, Ti(e)) },
                Pi = (e, a) => {
                    if (!e) return ve;
                    const o = new Gr;
                    e.state = o, o.window = null;
                    const f = Ai(e, a);
                    return f !== Ze && (e.state = null), f
                },
                Xr = e => Pi(e, Yr);
            let Ii = !0,
                jn, Ln;
            const Jr = e => {
                    if (Ii) {
                        jn = new Int32Array(512), Ln = new Int32Array(32);
                        let a = 0;
                        for (; a < 144;) e.lens[a++] = 8;
                        for (; a < 256;) e.lens[a++] = 9;
                        for (; a < 280;) e.lens[a++] = 7;
                        for (; a < 288;) e.lens[a++] = 8;
                        for (on(qn, e.lens, 0, 288, jn, 0, e.work, { bits: 9 }), a = 0; a < 32;) e.lens[a++] = 5;
                        on(Hn, e.lens, 0, 32, Ln, 0, e.work, { bits: 5 }), Ii = !1
                    }
                    e.lencode = jn, e.lenbits = 9, e.distcode = Ln, e.distbits = 5
                },
                xi = (e, a, o, f) => { let h; const d = e.state; return d.window === null && (d.wsize = 1 << d.wbits, d.wnext = 0, d.whave = 0, d.window = new Uint8Array(d.wsize)), f >= d.wsize ? (d.window.set(a.subarray(o - d.wsize, o), 0), d.wnext = 0, d.whave = d.wsize) : (h = d.wsize - d.wnext, h > f && (h = f), d.window.set(a.subarray(o - f, o - f + h), d.wnext), f -= h, f ? (d.window.set(a.subarray(o - f, o), 0), d.wnext = f, d.whave = d.wsize) : (d.wnext += h, d.wnext === d.wsize && (d.wnext = 0), d.whave < d.wsize && (d.whave += h))), 0 },
                Qr = (e, a) => {
                    let o, f, h, d, b, y, J, m, S, Dt, G, I, nt, Kt, St = 0,
                        ft, Lt, wt, W, Pt, oe, ot, Bt;
                    const Nt = new Uint8Array(4);
                    let ut, ct;
                    const Ke = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
                    if (!e || !e.state || !e.output || !e.input && e.avail_in !== 0) return ve;
                    o = e.state, o.mode === Ae && (o.mode = Pn), b = e.next_out, h = e.output, J = e.avail_out, d = e.next_in, f = e.input, y = e.avail_in, m = o.hold, S = o.bits, Dt = y, G = J, Bt = Ze;
                    t: for (;;) switch (o.mode) {
                        case ri:
                            if (o.wrap === 0) { o.mode = Pn; break }
                            for (; S < 16;) {
                                if (y === 0) break t;
                                y--, m += f[d++] << S, S += 8
                            }
                            if (o.wrap & 2 && m === 35615) { o.check = 0, Nt[0] = m & 255, Nt[1] = m >>> 8 & 255, o.check = Y(o.check, Nt, 2, 0), m = 0, S = 0, o.mode = oi; break }
                            if (o.flags = 0, o.head && (o.head.done = !1), !(o.wrap & 1) || (((m & 255) << 8) + (m >> 8)) % 31) { e.msg = "incorrect header check", o.mode = Zt; break }
                            if ((m & 15) !== ii) { e.msg = "unknown compression method", o.mode = Zt; break }
                            if (m >>>= 4, S -= 4, ot = (m & 15) + 8, o.wbits === 0) o.wbits = ot;
                            else if (ot > o.wbits) { e.msg = "invalid window size", o.mode = Zt; break }
                            o.dmax = 1 << o.wbits, e.adler = o.check = 1, o.mode = m & 512 ? di : Ae, m = 0, S = 0;
                            break;
                        case oi:
                            for (; S < 16;) {
                                if (y === 0) break t;
                                y--, m += f[d++] << S, S += 8
                            }
                            if (o.flags = m, (o.flags & 255) !== ii) { e.msg = "unknown compression method", o.mode = Zt; break }
                            if (o.flags & 57344) { e.msg = "unknown header flags set", o.mode = Zt; break }
                            o.head && (o.head.text = m >> 8 & 1), o.flags & 512 && (Nt[0] = m & 255, Nt[1] = m >>> 8 & 255, o.check = Y(o.check, Nt, 2, 0)), m = 0, S = 0, o.mode = si;
                        case si:
                            for (; S < 32;) {
                                if (y === 0) break t;
                                y--, m += f[d++] << S, S += 8
                            }
                            o.head && (o.head.time = m), o.flags & 512 && (Nt[0] = m & 255, Nt[1] = m >>> 8 & 255, Nt[2] = m >>> 16 & 255, Nt[3] = m >>> 24 & 255, o.check = Y(o.check, Nt, 4, 0)), m = 0, S = 0, o.mode = ai;
                        case ai:
                            for (; S < 16;) {
                                if (y === 0) break t;
                                y--, m += f[d++] << S, S += 8
                            }
                            o.head && (o.head.xflags = m & 255, o.head.os = m >> 8), o.flags & 512 && (Nt[0] = m & 255, Nt[1] = m >>> 8 & 255, o.check = Y(o.check, Nt, 2, 0)), m = 0, S = 0, o.mode = li;
                        case li:
                            if (o.flags & 1024) {
                                for (; S < 16;) {
                                    if (y === 0) break t;
                                    y--, m += f[d++] << S, S += 8
                                }
                                o.length = m, o.head && (o.head.extra_len = m), o.flags & 512 && (Nt[0] = m & 255, Nt[1] = m >>> 8 & 255, o.check = Y(o.check, Nt, 2, 0)), m = 0, S = 0
                            } else o.head && (o.head.extra = null);
                            o.mode = hi;
                        case hi:
                            if (o.flags & 1024 && (I = o.length, I > y && (I = y), I && (o.head && (ot = o.head.extra_len - o.length, o.head.extra || (o.head.extra = new Uint8Array(o.head.extra_len)), o.head.extra.set(f.subarray(d, d + I), ot)), o.flags & 512 && (o.check = Y(o.check, f, I, d)), y -= I, d += I, o.length -= I), o.length)) break t;
                            o.length = 0, o.mode = fi;
                        case fi:
                            if (o.flags & 2048) {
                                if (y === 0) break t;
                                I = 0;
                                do ot = f[d + I++], o.head && ot && o.length < 65536 && (o.head.name += String.fromCharCode(ot)); while (ot && I < y);
                                if (o.flags & 512 && (o.check = Y(o.check, f, I, d)), y -= I, d += I, ot) break t
                            } else o.head && (o.head.name = null);
                            o.length = 0, o.mode = ui;
                        case ui:
                            if (o.flags & 4096) {
                                if (y === 0) break t;
                                I = 0;
                                do ot = f[d + I++], o.head && ot && o.length < 65536 && (o.head.comment += String.fromCharCode(ot)); while (ot && I < y);
                                if (o.flags & 512 && (o.check = Y(o.check, f, I, d)), y -= I, d += I, ot) break t
                            } else o.head && (o.head.comment = null);
                            o.mode = ci;
                        case ci:
                            if (o.flags & 512) {
                                for (; S < 16;) {
                                    if (y === 0) break t;
                                    y--, m += f[d++] << S, S += 8
                                }
                                if (m !== (o.check & 65535)) { e.msg = "header crc mismatch", o.mode = Zt; break }
                                m = 0, S = 0
                            }
                            o.head && (o.head.hcrc = o.flags >> 9 & 1, o.head.done = !0), e.adler = o.check = 0, o.mode = Ae;
                            break;
                        case di:
                            for (; S < 32;) {
                                if (y === 0) break t;
                                y--, m += f[d++] << S, S += 8
                            }
                            e.adler = o.check = Di(m), m = 0, S = 0, o.mode = pn;
                        case pn:
                            if (o.havedict === 0) return e.next_out = b, e.avail_out = J, e.next_in = d, e.avail_in = y, o.hold = m, o.bits = S, $r;
                            e.adler = o.check = 1, o.mode = Ae;
                        case Ae:
                            if (a === Br || a === gn) break t;
                        case Pn:
                            if (o.last) { m >>>= S & 7, S -= S & 7, o.mode = xn; break }
                            for (; S < 3;) {
                                if (y === 0) break t;
                                y--, m += f[d++] << S, S += 8
                            }
                            switch (o.last = m & 1, m >>>= 1, S -= 1, m & 3) {
                                case 0:
                                    o.mode = _i;
                                    break;
                                case 1:
                                    if (Jr(o), o.mode = mn, a === gn) { m >>>= 2, S -= 2; break t }
                                    break;
                                case 2:
                                    o.mode = pi;
                                    break;
                                case 3:
                                    e.msg = "invalid block type", o.mode = Zt
                            }
                            m >>>= 2, S -= 2;
                            break;
                        case _i:
                            for (m >>>= S & 7, S -= S & 7; S < 32;) {
                                if (y === 0) break t;
                                y--, m += f[d++] << S, S += 8
                            }
                            if ((m & 65535) !== (m >>> 16 ^ 65535)) { e.msg = "invalid stored block lengths", o.mode = Zt; break }
                            if (o.length = m & 65535, m = 0, S = 0, o.mode = In, a === gn) break t;
                        case In:
                            o.mode = gi;
                        case gi:
                            if (I = o.length, I) {
                                if (I > y && (I = y), I > J && (I = J), I === 0) break t;
                                h.set(f.subarray(d, d + I), b), y -= I, d += I, J -= I, b += I, o.length -= I;
                                break
                            }
                            o.mode = Ae;
                            break;
                        case pi:
                            for (; S < 14;) {
                                if (y === 0) break t;
                                y--, m += f[d++] << S, S += 8
                            }
                            if (o.nlen = (m & 31) + 257, m >>>= 5, S -= 5, o.ndist = (m & 31) + 1, m >>>= 5, S -= 5, o.ncode = (m & 15) + 4, m >>>= 4, S -= 4, o.nlen > 286 || o.ndist > 30) { e.msg = "too many length or distance symbols", o.mode = Zt; break }
                            o.have = 0, o.mode = mi;
                        case mi:
                            for (; o.have < o.ncode;) {
                                for (; S < 3;) {
                                    if (y === 0) break t;
                                    y--, m += f[d++] << S, S += 8
                                }
                                o.lens[Ke[o.have++]] = m & 7, m >>>= 3, S -= 3
                            }
                            for (; o.have < 19;) o.lens[Ke[o.have++]] = 0;
                            if (o.lencode = o.lendyn, o.lenbits = 7, ut = { bits: o.lenbits }, Bt = on(Ur, o.lens, 0, 19, o.lencode, 0, o.work, ut), o.lenbits = ut.bits, Bt) { e.msg = "invalid code lengths set", o.mode = Zt; break }
                            o.have = 0, o.mode = wi;
                        case wi:
                            for (; o.have < o.nlen + o.ndist;) {
                                for (; St = o.lencode[m & (1 << o.lenbits) - 1], ft = St >>> 24, Lt = St >>> 16 & 255, wt = St & 65535, !(ft <= S);) {
                                    if (y === 0) break t;
                                    y--, m += f[d++] << S, S += 8
                                }
                                if (wt < 16) m >>>= ft, S -= ft, o.lens[o.have++] = wt;
                                else {
                                    if (wt === 16) {
                                        for (ct = ft + 2; S < ct;) {
                                            if (y === 0) break t;
                                            y--, m += f[d++] << S, S += 8
                                        }
                                        if (m >>>= ft, S -= ft, o.have === 0) { e.msg = "invalid bit length repeat", o.mode = Zt; break }
                                        ot = o.lens[o.have - 1], I = 3 + (m & 3), m >>>= 2, S -= 2
                                    } else if (wt === 17) {
                                        for (ct = ft + 3; S < ct;) {
                                            if (y === 0) break t;
                                            y--, m += f[d++] << S, S += 8
                                        }
                                        m >>>= ft, S -= ft, ot = 0, I = 3 + (m & 7), m >>>= 3, S -= 3
                                    } else {
                                        for (ct = ft + 7; S < ct;) {
                                            if (y === 0) break t;
                                            y--, m += f[d++] << S, S += 8
                                        }
                                        m >>>= ft, S -= ft, ot = 0, I = 11 + (m & 127), m >>>= 7, S -= 7
                                    }
                                    if (o.have + I > o.nlen + o.ndist) { e.msg = "invalid bit length repeat", o.mode = Zt; break }
                                    for (; I--;) o.lens[o.have++] = ot
                                }
                            }
                            if (o.mode === Zt) break;
                            if (o.lens[256] === 0) { e.msg = "invalid code -- missing end-of-block", o.mode = Zt; break }
                            if (o.lenbits = 9, ut = { bits: o.lenbits }, Bt = on(qn, o.lens, 0, o.nlen, o.lencode, 0, o.work, ut), o.lenbits = ut.bits, Bt) { e.msg = "invalid literal/lengths set", o.mode = Zt; break }
                            if (o.distbits = 6, o.distcode = o.distdyn, ut = { bits: o.distbits }, Bt = on(Hn, o.lens, o.nlen, o.ndist, o.distcode, 0, o.work, ut), o.distbits = ut.bits, Bt) { e.msg = "invalid distances set", o.mode = Zt; break }
                            if (o.mode = mn, a === gn) break t;
                        case mn:
                            o.mode = wn;
                        case wn:
                            if (y >= 6 && J >= 258) { e.next_out = b, e.avail_out = J, e.next_in = d, e.avail_in = y, o.hold = m, o.bits = S, jr(e, G), b = e.next_out, h = e.output, J = e.avail_out, d = e.next_in, f = e.input, y = e.avail_in, m = o.hold, S = o.bits, o.mode === Ae && (o.back = -1); break }
                            for (o.back = 0; St = o.lencode[m & (1 << o.lenbits) - 1], ft = St >>> 24, Lt = St >>> 16 & 255, wt = St & 65535, !(ft <= S);) {
                                if (y === 0) break t;
                                y--, m += f[d++] << S, S += 8
                            }
                            if (Lt && (Lt & 240) === 0) {
                                for (W = ft, Pt = Lt, oe = wt; St = o.lencode[oe + ((m & (1 << W + Pt) - 1) >> W)], ft = St >>> 24, Lt = St >>> 16 & 255, wt = St & 65535, !(W + ft <= S);) {
                                    if (y === 0) break t;
                                    y--, m += f[d++] << S, S += 8
                                }
                                m >>>= W, S -= W, o.back += W
                            }
                            if (m >>>= ft, S -= ft, o.back += ft, o.length = wt, Lt === 0) { o.mode = Si; break }
                            if (Lt & 32) { o.back = -1, o.mode = Ae; break }
                            if (Lt & 64) { e.msg = "invalid literal/length code", o.mode = Zt; break }
                            o.extra = Lt & 15, o.mode = vi;
                        case vi:
                            if (o.extra) {
                                for (ct = o.extra; S < ct;) {
                                    if (y === 0) break t;
                                    y--, m += f[d++] << S, S += 8
                                }
                                o.length += m & (1 << o.extra) - 1, m >>>= o.extra, S -= o.extra, o.back += o.extra
                            }
                            o.was = o.length, o.mode = yi;
                        case yi:
                            for (; St = o.distcode[m & (1 << o.distbits) - 1], ft = St >>> 24, Lt = St >>> 16 & 255, wt = St & 65535, !(ft <= S);) {
                                if (y === 0) break t;
                                y--, m += f[d++] << S, S += 8
                            }
                            if ((Lt & 240) === 0) {
                                for (W = ft, Pt = Lt, oe = wt; St = o.distcode[oe + ((m & (1 << W + Pt) - 1) >> W)], ft = St >>> 24, Lt = St >>> 16 & 255, wt = St & 65535, !(W + ft <= S);) {
                                    if (y === 0) break t;
                                    y--, m += f[d++] << S, S += 8
                                }
                                m >>>= W, S -= W, o.back += W
                            }
                            if (m >>>= ft, S -= ft, o.back += ft, Lt & 64) { e.msg = "invalid distance code", o.mode = Zt; break }
                            o.offset = wt, o.extra = Lt & 15, o.mode = bi;
                        case bi:
                            if (o.extra) {
                                for (ct = o.extra; S < ct;) {
                                    if (y === 0) break t;
                                    y--, m += f[d++] << S, S += 8
                                }
                                o.offset += m & (1 << o.extra) - 1, m >>>= o.extra, S -= o.extra, o.back += o.extra
                            }
                            if (o.offset > o.dmax) { e.msg = "invalid distance too far back", o.mode = Zt; break }
                            o.mode = Ei;
                        case Ei:
                            if (J === 0) break t;
                            if (I = G - J, o.offset > I) {
                                if (I = o.offset - I, I > o.whave && o.sane) { e.msg = "invalid distance too far back", o.mode = Zt; break }
                                I > o.wnext ? (I -= o.wnext, nt = o.wsize - I) : nt = o.wnext - I, I > o.length && (I = o.length), Kt = o.window
                            } else Kt = h, nt = b - o.offset, I = o.length;
                            I > J && (I = J), J -= I, o.length -= I;
                            do h[b++] = Kt[nt++]; while (--I);
                            o.length === 0 && (o.mode = wn);
                            break;
                        case Si:
                            if (J === 0) break t;
                            h[b++] = o.length, J--, o.mode = wn;
                            break;
                        case xn:
                            if (o.wrap) {
                                for (; S < 32;) {
                                    if (y === 0) break t;
                                    y--, m |= f[d++] << S, S += 8
                                }
                                if (G -= J, e.total_out += G, o.total += G, G && (e.adler = o.check = o.flags ? Y(o.check, h, G, b - G) : B(o.check, h, G, b - G)), G = J, (o.flags ? m : Di(m)) !== o.check) { e.msg = "incorrect data check", o.mode = Zt; break }
                                m = 0, S = 0
                            }
                            o.mode = ki;
                        case ki:
                            if (o.wrap && o.flags) {
                                for (; S < 32;) {
                                    if (y === 0) break t;
                                    y--, m += f[d++] << S, S += 8
                                }
                                if (m !== (o.total & 4294967295)) { e.msg = "incorrect length check", o.mode = Zt; break }
                                m = 0, S = 0
                            }
                            o.mode = Mi;
                        case Mi:
                            Bt = Fr;
                            break t;
                        case Zt:
                            Bt = ei;
                            break t;
                        case Oi:
                            return ni;
                        case Kr:
                        default:
                            return ve
                    }
                    return e.next_out = b, e.avail_out = J, e.next_in = d, e.avail_in = y, o.hold = m, o.bits = S, (o.wsize || G !== e.avail_out && o.mode < Zt && (o.mode < xn || a !== ti)) && xi(e, e.output, e.next_out, G - e.avail_out), Dt -= e.avail_in, G -= e.avail_out, e.total_in += Dt, e.total_out += G, o.total += G, o.wrap && G && (e.adler = o.check = o.flags ? Y(o.check, h, G, e.next_out - G) : B(o.check, h, G, e.next_out - G)), e.data_type = o.bits + (o.last ? 64 : 0) + (o.mode === Ae ? 128 : 0) + (o.mode === mn || o.mode === In ? 256 : 0), (Dt === 0 && G === 0 || a === ti) && Bt === Ze && (Bt = Zr), Bt
                },
                qr = e => { if (!e || !e.state) return ve; let a = e.state; return a.window && (a.window = null), e.state = null, Ze },
                Hr = (e, a) => { if (!e || !e.state) return ve; const o = e.state; return (o.wrap & 2) === 0 ? ve : (o.head = a, a.done = !1, Ze) },
                to = (e, a) => { const o = a.length; let f, h, d; return !e || !e.state || (f = e.state, f.wrap !== 0 && f.mode !== pn) ? ve : f.mode === pn && (h = 1, h = B(h, a, o, 0), h !== f.check) ? ei : (d = xi(e, a, o, o), d ? (f.mode = Oi, ni) : (f.havedict = 1, Ze)) };
            var eo = Ti,
                no = Ai,
                io = Ri,
                ro = Xr,
                oo = Pi,
                so = Qr,
                ao = qr,
                lo = Hr,
                ho = to,
                fo = "pako inflate (from Nodeca project)",
                Pe = { inflateReset: eo, inflateReset2: no, inflateResetKeep: io, inflateInit: ro, inflateInit2: oo, inflate: so, inflateEnd: ao, inflateGetHeader: lo, inflateSetDictionary: ho, inflateInfo: fo };

            function uo() { this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1 }
            var co = uo;
            const ji = Object.prototype.toString,
                { Z_NO_FLUSH: _o, Z_FINISH: go, Z_OK: sn, Z_STREAM_END: Cn, Z_NEED_DICT: Nn, Z_STREAM_ERROR: po, Z_DATA_ERROR: Li, Z_MEM_ERROR: mo } = mt;

            function an(e) {
                this.options = cn.assign({ chunkSize: 1024 * 64, windowBits: 15, to: "" }, e || {});
                const a = this.options;
                a.raw && a.windowBits >= 0 && a.windowBits < 16 && (a.windowBits = -a.windowBits, a.windowBits === 0 && (a.windowBits = -15)), a.windowBits >= 0 && a.windowBits < 16 && !(e && e.windowBits) && (a.windowBits += 32), a.windowBits > 15 && a.windowBits < 48 && (a.windowBits & 15) === 0 && (a.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Vn, this.strm.avail_out = 0;
                let o = Pe.inflateInit2(this.strm, a.windowBits);
                if (o !== sn) throw new Error(et[o]);
                if (this.header = new co, Pe.inflateGetHeader(this.strm, this.header), a.dictionary && (typeof a.dictionary == "string" ? a.dictionary = nn.string2buf(a.dictionary) : ji.call(a.dictionary) === "[object ArrayBuffer]" && (a.dictionary = new Uint8Array(a.dictionary)), a.raw && (o = Pe.inflateSetDictionary(this.strm, a.dictionary), o !== sn))) throw new Error(et[o])
            }
            an.prototype.push = function(e, a) {
                const o = this.strm,
                    f = this.options.chunkSize,
                    h = this.options.dictionary;
                let d, b, y;
                if (this.ended) return !1;
                for (a === ~~a ? b = a : b = a === !0 ? go : _o, ji.call(e) === "[object ArrayBuffer]" ? o.input = new Uint8Array(e) : o.input = e, o.next_in = 0, o.avail_in = o.input.length;;) {
                    for (o.avail_out === 0 && (o.output = new Uint8Array(f), o.next_out = 0, o.avail_out = f), d = Pe.inflate(o, b), d === Nn && h && (d = Pe.inflateSetDictionary(o, h), d === sn ? d = Pe.inflate(o, b) : d === Li && (d = Nn)); o.avail_in > 0 && d === Cn && o.state.wrap > 0 && e[o.next_in] !== 0;) Pe.inflateReset(o), d = Pe.inflate(o, b);
                    switch (d) {
                        case po:
                        case Li:
                        case Nn:
                        case mo:
                            return this.onEnd(d), this.ended = !0, !1
                    }
                    if (y = o.avail_out, o.next_out && (o.avail_out === 0 || d === Cn))
                        if (this.options.to === "string") {
                            let J = nn.utf8border(o.output, o.next_out),
                                m = o.next_out - J,
                                S = nn.buf2string(o.output, J);
                            o.next_out = m, o.avail_out = f - m, m && o.output.set(o.output.subarray(J, J + m), 0), this.onData(S)
                        } else this.onData(o.output.length === o.next_out ? o.output : o.output.subarray(0, o.next_out));
                    if (!(d === sn && y === 0)) { if (d === Cn) return d = Pe.inflateEnd(this.strm), this.onEnd(d), this.ended = !0, !0; if (o.avail_in === 0) break }
                }
                return !0
            }, an.prototype.onData = function(e) { this.chunks.push(e) }, an.prototype.onEnd = function(e) { e === sn && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = cn.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg };

            function zn(e, a) { const o = new an(a); if (o.push(e), o.err) throw o.msg || et[o.err]; return o.result }

            function wo(e, a) { return a = a || {}, a.raw = !0, zn(e, a) }
            var vo = an,
                yo = zn,
                bo = wo,
                Eo = zn,
                So = mt,
                ko = { Inflate: vo, inflate: yo, inflateRaw: bo, ungzip: Eo, constants: So };
            const { Deflate: Mo, deflate: Oo, deflateRaw: Do, gzip: Ro } = Ir, { Inflate: To, inflate: Ao, inflateRaw: Po, ungzip: Io } = ko;
            var xo = Mo,
                jo = Oo,
                Lo = Do,
                Co = Ro,
                No = To,
                zo = Ao,
                Uo = Po,
                Bo = Io,
                Fo = mt,
                $o = { Deflate: xo, deflate: jo, deflateRaw: Lo, gzip: Co, Inflate: No, inflate: zo, inflateRaw: Uo, ungzip: Bo, constants: Fo }
        },
        7387: (Ie, se, z) => {
            z.d(se, { x: () => st });
            var Jt = z(63582),
                Rt = z.n(Jt),
                he = z(977),
                ne = z.n(he),
                Wt = z(87863),
                Ft = z.n(Wt),
                ae = z(56271),
                _t = z.n(ae),
                de = z(70251),
                _e = z(5209),
                ie = z.n(_e),
                Qt = z(76331),
                $t = z(98646),
                yt = z(5552),
                qt = z(33519),
                It = z(15222),
                it = z(2003),
                bt = z(77721),
                Et = z(10219),
                gt = z(55402),
                pt = z(81658);

            function kt(O) { return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? kt = function(N) { return typeof N } : kt = function(N) { return N && typeof Symbol == "function" && N.constructor === Symbol && N !== Symbol.prototype ? "symbol" : typeof N }, kt(O) }

            function re(O, U) {
                if (O == null) return {};
                var N = Ht(O, U),
                    L, x;
                if (Object.getOwnPropertySymbols) { var q = Object.getOwnPropertySymbols(O); for (x = 0; x < q.length; x++) L = q[x], !(U.indexOf(L) >= 0) && (!Object.prototype.propertyIsEnumerable.call(O, L) || (N[L] = O[L])) }
                return N
            }

            function Ht(O, U) {
                if (O == null) return {};
                var N = {},
                    L = Object.keys(O),
                    x, q;
                for (q = 0; q < L.length; q++) x = L[q], !(U.indexOf(x) >= 0) && (N[x] = O[x]);
                return N
            }

            function Vt() { return Vt = Object.assign || function(O) { for (var U = 1; U < arguments.length; U++) { var N = arguments[U]; for (var L in N) Object.prototype.hasOwnProperty.call(N, L) && (O[L] = N[L]) } return O }, Vt.apply(this, arguments) }

            function ye(O, U) {
                var N = Object.keys(O);
                if (Object.getOwnPropertySymbols) {
                    var L = Object.getOwnPropertySymbols(O);
                    U && (L = L.filter(function(x) { return Object.getOwnPropertyDescriptor(O, x).enumerable })), N.push.apply(N, L)
                }
                return N
            }

            function Tt(O) {
                for (var U = 1; U < arguments.length; U++) {
                    var N = arguments[U] != null ? arguments[U] : {};
                    U % 2 ? ye(Object(N), !0).forEach(function(L) { Ue(O, L, N[L]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(N)) : ye(Object(N)).forEach(function(L) { Object.defineProperty(O, L, Object.getOwnPropertyDescriptor(N, L)) })
                }
                return O
            }

            function Ue(O, U, N) { return U in O ? Object.defineProperty(O, U, { value: N, enumerable: !0, configurable: !0, writable: !0 }) : O[U] = N, O }

            function Gt(O) { return Se(O) || Ee(O) || be(O) || ge() }

            function ge() { throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`) }

            function be(O, U) { if (!!O) { if (typeof O == "string") return pe(O, U); var N = Object.prototype.toString.call(O).slice(8, -1); if (N === "Object" && O.constructor && (N = O.constructor.name), N === "Map" || N === "Set") return Array.from(O); if (N === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(N)) return pe(O, U) } }

            function Ee(O) { if (typeof Symbol < "u" && Symbol.iterator in Object(O)) return Array.from(O) }

            function Se(O) { if (Array.isArray(O)) return pe(O) }

            function pe(O, U) {
                (U == null || U > O.length) && (U = O.length);
                for (var N = 0, L = new Array(U); N < U; N++) L[N] = O[N];
                return L
            }

            function Re(O, U) { if (!(O instanceof U)) throw new TypeError("Cannot call a class as a function") }

            function Te(O, U) {
                for (var N = 0; N < U.length; N++) {
                    var L = U[N];
                    L.enumerable = L.enumerable || !1, L.configurable = !0, "value" in L && (L.writable = !0), Object.defineProperty(O, L.key, L)
                }
            }

            function xe(O, U, N) { return U && Te(O.prototype, U), N && Te(O, N), O }

            function ke(O, U) {
                if (typeof U != "function" && U !== null) throw new TypeError("Super expression must either be null or a function");
                O.prototype = Object.create(U && U.prototype, { constructor: { value: O, writable: !0, configurable: !0 } }), U && ce(O, U)
            }

            function ce(O, U) { return ce = Object.setPrototypeOf || function(L, x) { return L.__proto__ = x, L }, ce(O, U) }

            function Q(O) {
                var U = V();
                return function() {
                    var L = R(O),
                        x;
                    if (U) {
                        var q = R(this).constructor;
                        x = Reflect.construct(L, arguments, q)
                    } else x = L.apply(this, arguments);
                    return A(this, x)
                }
            }

            function A(O, U) { return U && (kt(U) === "object" || typeof U == "function") ? U : Z(O) }

            function Z(O) { if (O === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return O }

            function V() { if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1; if (typeof Proxy == "function") return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0 } catch { return !1 } }

            function R(O) { return R = Object.setPrototypeOf ? Object.getPrototypeOf : function(N) { return N.__proto__ || Object.getPrototypeOf(N) }, R(O) }
            var st = function(O) {
                ke(N, O);
                var U = Q(N);

                function N() {
                    var L;
                    Re(this, N);
                    for (var x = arguments.length, q = new Array(x), tt = 0; tt < x; tt++) q[tt] = arguments[tt];
                    return L = U.call.apply(U, [this].concat(q)), L.mainCurve = void 0, L.state = { isAnimationFinished: !0, totalLength: 0 }, L.getStrokeDasharray = function(F, rt, at) {
                        for (var dt = at.reduce(function(c, g) { return c + g }), xt = Math.floor(F / dt), l = F % dt, r = rt - F, i = [], t = 0, n = 0;; n += at[t], ++t)
                            if (n + at[t] > l) { i = [].concat(Gt(at.slice(0, t)), [l - n]); break }
                        var s = i.length % 2 === 0 ? [0, r] : [r];
                        return [].concat(Gt(N.repeat(at, xt)), Gt(i), s).map(function(c) { return "".concat(c, "px") }).join(", ")
                    }, L.id = (0, it.EL)("recharts-line-"), L.pathRef = function(F) { L.mainCurve = F }, L.handleAnimationEnd = function() { L.setState({ isAnimationFinished: !0 }), L.props.onAnimationEnd && L.props.onAnimationEnd() }, L.handleAnimationStart = function() { L.setState({ isAnimationFinished: !1 }), L.props.onAnimationStart && L.props.onAnimationStart() }, L
                }
                return xe(N, [{
                    key: "componentDidMount",
                    value: function() {
                        if (!!this.props.isAnimationActive) {
                            var x = this.getTotalLength();
                            this.setState({ totalLength: x })
                        }
                    }
                }, { key: "getTotalLength", value: function() { var x = this.mainCurve; try { return x && x.getTotalLength && x.getTotalLength() || 0 } catch { return 0 } } }, {
                    key: "renderErrorBar",
                    value: function() {
                        if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
                        var x = this.props,
                            q = x.points,
                            tt = x.xAxis,
                            F = x.yAxis,
                            rt = x.layout,
                            at = x.children,
                            dt = (0, bt.NN)(at, It.W.displayName);
                        if (!dt) return null;

                        function xt(l, r) { return { x: l.x, y: l.y, value: l.value, errorVal: (0, gt.F$)(l.payload, r) } }
                        return dt.map(function(l, r) { return _t().cloneElement(l, { key: "bar-".concat(r), data: q, xAxis: tt, yAxis: F, layout: rt, dataPointFormatter: xt }) })
                    }
                }, {
                    key: "renderDots",
                    value: function(x, q) {
                        var tt = this.props.isAnimationActive;
                        if (tt && !this.state.isAnimationFinished) return null;
                        var F = this.props,
                            rt = F.dot,
                            at = F.points,
                            dt = F.dataKey,
                            xt = (0, pt.L6)(this.props),
                            l = (0, pt.L6)(rt, !0),
                            r = at.map(function(t, n) { var s = Tt(Tt(Tt({ key: "dot-".concat(n), r: 3 }, xt), l), {}, { value: t.value, dataKey: dt, cx: t.x, cy: t.y, index: n, payload: t.payload }); return N.renderDotItem(rt, s) }),
                            i = { clipPath: x ? "url(#clipPath-".concat(q, ")") : null };
                        return _t().createElement(yt.m, Vt({ className: "recharts-line-dots", key: "dots" }, i), r)
                    }
                }, {
                    key: "renderCurveStatically",
                    value: function(x, q, tt, F) {
                        var rt = this.props,
                            at = rt.type,
                            dt = rt.layout,
                            xt = rt.connectNulls,
                            l = rt.ref,
                            r = re(rt, ["type", "layout", "connectNulls", "ref"]),
                            i = Tt(Tt(Tt({}, (0, pt.L6)(r, !0)), {}, { fill: "none", className: "recharts-line-curve", clipPath: q ? "url(#clipPath-".concat(tt, ")") : null, points: x }, F), {}, { type: at, layout: dt, connectNulls: xt });
                        return _t().createElement(Qt.H, Vt({}, i, { pathRef: this.pathRef }))
                    }
                }, {
                    key: "renderCurveWithAnimation",
                    value: function(x, q) {
                        var tt = this,
                            F = this.props,
                            rt = F.points,
                            at = F.strokeDasharray,
                            dt = F.isAnimationActive,
                            xt = F.animationBegin,
                            l = F.animationDuration,
                            r = F.animationEasing,
                            i = F.animationId,
                            t = F.animateNewValues,
                            n = F.width,
                            s = F.height,
                            c = this.state,
                            g = c.prevPoints,
                            w = c.totalLength;
                        return _t().createElement(de.ZP, { begin: xt, duration: l, isActive: dt, easing: r, from: { t: 0 }, to: { t: 1 }, key: "line-".concat(i), onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, function(u) {
                            var E = u.t;
                            if (g) {
                                var p = g.length / rt.length,
                                    M = rt.map(function(_, j) {
                                        var K = Math.floor(j * p);
                                        if (g[K]) {
                                            var Y = g[K],
                                                et = (0, it.k4)(Y.x, _.x),
                                                mt = (0, it.k4)(Y.y, _.y);
                                            return Tt(Tt({}, _), {}, { x: et(E), y: mt(E) })
                                        }
                                        if (t) {
                                            var X = (0, it.k4)(n * 2, _.x),
                                                H = (0, it.k4)(s / 2, _.y);
                                            return Tt(Tt({}, _), {}, { x: X(E), y: H(E) })
                                        }
                                        return Tt(Tt({}, _), {}, { x: _.x, y: _.y })
                                    });
                                return tt.renderCurveStatically(M, x, q)
                            }
                            var C = (0, it.k4)(0, w),
                                k = C(E),
                                D;
                            if (at) {
                                var B = "".concat(at).split(/[,\s]+/gim).map(function(_) { return parseFloat(_) });
                                D = tt.getStrokeDasharray(k, w, B)
                            } else D = "".concat(k, "px ").concat(w - k, "px");
                            return tt.renderCurveStatically(rt, x, q, { strokeDasharray: D })
                        })
                    }
                }, {
                    key: "renderCurve",
                    value: function(x, q) {
                        var tt = this.props,
                            F = tt.points,
                            rt = tt.isAnimationActive,
                            at = this.state,
                            dt = at.prevPoints,
                            xt = at.totalLength;
                        return rt && F && F.length && (!dt && xt > 0 || !Rt()(dt, F)) ? this.renderCurveWithAnimation(x, q) : this.renderCurveStatically(F, x, q)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var x = this.props,
                            q = x.hide,
                            tt = x.dot,
                            F = x.points,
                            rt = x.className,
                            at = x.xAxis,
                            dt = x.yAxis,
                            xt = x.top,
                            l = x.left,
                            r = x.width,
                            i = x.height,
                            t = x.isAnimationActive,
                            n = x.id;
                        if (q || !F || !F.length) return null;
                        var s = this.state.isAnimationFinished,
                            c = F.length === 1,
                            g = ie()("recharts-line", rt),
                            w = at && at.allowDataOverflow || dt && dt.allowDataOverflow,
                            u = Ft()(n) ? this.id : n;
                        return _t().createElement(yt.m, { className: g }, w ? _t().createElement("defs", null, _t().createElement("clipPath", { id: "clipPath-".concat(u) }, _t().createElement("rect", { x: l, y: xt, width: r, height: i }))) : null, !c && this.renderCurve(w, u), this.renderErrorBar(), (c || tt) && this.renderDots(w, u), (!t || s) && qt.e.renderCallByParent(this.props, F))
                    }
                }], [{ key: "getDerivedStateFromProps", value: function(x, q) { return x.animationId !== q.prevAnimationId ? { prevAnimationId: x.animationId, curPoints: x.points, prevPoints: q.curPoints } : x.points !== q.curPoints ? { curPoints: x.points } : null } }, { key: "repeat", value: function(x, q) { for (var tt = x.length % 2 !== 0 ? [].concat(Gt(x), [0]) : x, F = [], rt = 0; rt < q; ++rt) F = [].concat(Gt(F), Gt(tt)); return F } }, {
                    key: "renderDotItem",
                    value: function(x, q) {
                        var tt;
                        if (_t().isValidElement(x)) tt = _t().cloneElement(x, q);
                        else if (ne()(x)) tt = x(q);
                        else {
                            var F = ie()("recharts-line-dot", x ? x.className : "");
                            tt = _t().createElement($t.o, Vt({}, q, { className: F }))
                        }
                        return tt
                    }
                }]), N
            }(ae.PureComponent);
            st.displayName = "Line", st.defaultProps = { xAxisId: 0, yAxisId: 0, connectNulls: !1, activeDot: !0, dot: !0, legendType: "line", stroke: "#3182bd", strokeWidth: 1, fill: "#fff", points: [], isAnimationActive: !Et.x.isSsr, animateNewValues: !0, animationBegin: 0, animationDuration: 1500, animationEasing: "ease", hide: !1 }, st.getComposedData = function(O) {
                var U = O.props,
                    N = O.xAxis,
                    L = O.yAxis,
                    x = O.xAxisTicks,
                    q = O.yAxisTicks,
                    tt = O.dataKey,
                    F = O.bandSize,
                    rt = O.displayedData,
                    at = O.offset,
                    dt = U.layout,
                    xt = rt.map(function(l, r) { var i = (0, gt.F$)(l, tt); return dt === "horizontal" ? { x: (0, gt.Hv)({ axis: N, ticks: x, bandSize: F, entry: l, index: r }), y: Ft()(i) ? null : L.scale(i), value: i, payload: l } : { x: Ft()(i) ? null : N.scale(i), y: (0, gt.Hv)({ axis: L, ticks: q, bandSize: F, entry: l, index: r }), value: i, payload: l } });
                return Tt({ points: xt, layout: dt }, at)
            }
        },
        71420: (Ie, se, z) => {
            z.d(se, { b: () => ce });
            var Jt = z(63582),
                Rt = z.n(Jt),
                he = z(977),
                ne = z.n(he),
                Wt = z(87863),
                Ft = z.n(Wt),
                ae = z(56271),
                _t = z.n(ae),
                de = z(70251),
                _e = z(5209),
                ie = z.n(_e),
                Qt = z(5552),
                $t = z(33519),
                yt = z(77721),
                qt = z(10219),
                It = z(317),
                it = z(76331),
                bt = z(69318),
                Et = z(15222),
                gt = z(1493),
                pt = z(2003),
                kt = z(55402),
                re = z(81658);

            function Ht(Q) { return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ht = function(Z) { return typeof Z } : Ht = function(Z) { return Z && typeof Symbol == "function" && Z.constructor === Symbol && Z !== Symbol.prototype ? "symbol" : typeof Z }, Ht(Q) }

            function Vt() { return Vt = Object.assign || function(Q) { for (var A = 1; A < arguments.length; A++) { var Z = arguments[A]; for (var V in Z) Object.prototype.hasOwnProperty.call(Z, V) && (Q[V] = Z[V]) } return Q }, Vt.apply(this, arguments) }

            function ye(Q, A) {
                var Z = Object.keys(Q);
                if (Object.getOwnPropertySymbols) {
                    var V = Object.getOwnPropertySymbols(Q);
                    A && (V = V.filter(function(R) { return Object.getOwnPropertyDescriptor(Q, R).enumerable })), Z.push.apply(Z, V)
                }
                return Z
            }

            function Tt(Q) {
                for (var A = 1; A < arguments.length; A++) {
                    var Z = arguments[A] != null ? arguments[A] : {};
                    A % 2 ? ye(Object(Z), !0).forEach(function(V) { Ue(Q, V, Z[V]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(Q, Object.getOwnPropertyDescriptors(Z)) : ye(Object(Z)).forEach(function(V) { Object.defineProperty(Q, V, Object.getOwnPropertyDescriptor(Z, V)) })
                }
                return Q
            }

            function Ue(Q, A, Z) { return A in Q ? Object.defineProperty(Q, A, { value: Z, enumerable: !0, configurable: !0, writable: !0 }) : Q[A] = Z, Q }

            function Gt(Q, A) { if (!(Q instanceof A)) throw new TypeError("Cannot call a class as a function") }

            function ge(Q, A) {
                for (var Z = 0; Z < A.length; Z++) {
                    var V = A[Z];
                    V.enumerable = V.enumerable || !1, V.configurable = !0, "value" in V && (V.writable = !0), Object.defineProperty(Q, V.key, V)
                }
            }

            function be(Q, A, Z) { return A && ge(Q.prototype, A), Z && ge(Q, Z), Q }

            function Ee(Q, A) {
                if (typeof A != "function" && A !== null) throw new TypeError("Super expression must either be null or a function");
                Q.prototype = Object.create(A && A.prototype, { constructor: { value: Q, writable: !0, configurable: !0 } }), A && Se(Q, A)
            }

            function Se(Q, A) { return Se = Object.setPrototypeOf || function(V, R) { return V.__proto__ = R, V }, Se(Q, A) }

            function pe(Q) {
                var A = xe();
                return function() {
                    var V = ke(Q),
                        R;
                    if (A) {
                        var st = ke(this).constructor;
                        R = Reflect.construct(V, arguments, st)
                    } else R = V.apply(this, arguments);
                    return Re(this, R)
                }
            }

            function Re(Q, A) { return A && (Ht(A) === "object" || typeof A == "function") ? A : Te(Q) }

            function Te(Q) { if (Q === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return Q }

            function xe() { if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1; if (typeof Proxy == "function") return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0 } catch { return !1 } }

            function ke(Q) { return ke = Object.setPrototypeOf ? Object.getPrototypeOf : function(Z) { return Z.__proto__ || Object.getPrototypeOf(Z) }, ke(Q) }
            var ce = function(Q) {
                Ee(Z, Q);
                var A = pe(Z);

                function Z() {
                    var V;
                    Gt(this, Z);
                    for (var R = arguments.length, st = new Array(R), O = 0; O < R; O++) st[O] = arguments[O];
                    return V = A.call.apply(A, [this].concat(st)), V.state = { isAnimationFinished: !1 }, V.handleAnimationEnd = function() { V.setState({ isAnimationFinished: !0 }) }, V.handleAnimationStart = function() { V.setState({ isAnimationFinished: !1 }) }, V.id = (0, pt.EL)("recharts-scatter-"), V
                }
                return be(Z, [{
                    key: "renderSymbolsStatically",
                    value: function(R) {
                        var st = this,
                            O = this.props,
                            U = O.shape,
                            N = O.activeShape,
                            L = O.activeIndex,
                            x = (0, re.L6)(this.props);
                        return R.map(function(q, tt) { var F = Tt(Tt({ key: "symbol-".concat(tt) }, x), q); return _t().createElement(Qt.m, Vt({ className: "recharts-scatter-symbol" }, (0, re.bw)(st.props, q, tt), { key: "symbol-".concat(tt) }), Z.renderSymbolItem(L === tt ? N : U, F)) })
                    }
                }, {
                    key: "renderSymbolsWithAnimation",
                    value: function() {
                        var R = this,
                            st = this.props,
                            O = st.points,
                            U = st.isAnimationActive,
                            N = st.animationBegin,
                            L = st.animationDuration,
                            x = st.animationEasing,
                            q = st.animationId,
                            tt = this.state.prevPoints;
                        return _t().createElement(de.ZP, { begin: N, duration: L, isActive: U, easing: x, from: { t: 0 }, to: { t: 1 }, key: "pie-".concat(q), onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, function(F) {
                            var rt = F.t,
                                at = O.map(function(dt, xt) {
                                    var l = tt && tt[xt];
                                    if (l) {
                                        var r = (0, pt.k4)(l.cx, dt.cx),
                                            i = (0, pt.k4)(l.cy, dt.cy),
                                            t = (0, pt.k4)(l.size, dt.size);
                                        return Tt(Tt({}, dt), {}, { cx: r(rt), cy: i(rt), size: t(rt) })
                                    }
                                    var n = (0, pt.k4)(0, dt.size);
                                    return Tt(Tt({}, dt), {}, { size: n(rt) })
                                });
                            return _t().createElement(Qt.m, null, R.renderSymbolsStatically(at))
                        })
                    }
                }, {
                    key: "renderSymbols",
                    value: function() {
                        var R = this.props,
                            st = R.points,
                            O = R.isAnimationActive,
                            U = this.state.prevPoints;
                        return O && st && st.length && (!U || !Rt()(U, st)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(st)
                    }
                }, {
                    key: "renderErrorBar",
                    value: function() {
                        var R = this.props.isAnimationActive;
                        if (R && !this.state.isAnimationFinished) return null;
                        var st = this.props,
                            O = st.points,
                            U = st.xAxis,
                            N = st.yAxis,
                            L = st.children,
                            x = (0, yt.NN)(L, Et.W.displayName);
                        if (!x) return null;

                        function q(F, rt) { return { x: F.cx, y: F.cy, value: +F.node.y, errorVal: (0, kt.F$)(F, rt) } }

                        function tt(F, rt) { return { x: F.cx, y: F.cy, value: +F.node.x, errorVal: (0, kt.F$)(F, rt) } }
                        return x.map(function(F, rt) { var at = F.props.direction; return _t().cloneElement(F, { key: rt, data: O, xAxis: U, yAxis: N, layout: at === "x" ? "vertical" : "horizontal", dataPointFormatter: at === "x" ? tt : q }) })
                    }
                }, {
                    key: "renderLine",
                    value: function() {
                        var R = this.props,
                            st = R.points,
                            O = R.line,
                            U = R.lineType,
                            N = R.lineJointType,
                            L = (0, re.L6)(this.props),
                            x = (0, re.L6)(O),
                            q, tt;
                        if (U === "joint") q = st.map(function(i) { return { x: i.cx, y: i.cy } });
                        else if (U === "fitting") {
                            var F = (0, pt.wr)(st),
                                rt = F.xmin,
                                at = F.xmax,
                                dt = F.a,
                                xt = F.b,
                                l = function(t) { return dt * t + xt };
                            q = [{ x: rt, y: l(rt) }, { x: at, y: l(at) }]
                        }
                        var r = Tt(Tt(Tt({}, L), {}, { fill: "none", stroke: L && L.fill }, x), {}, { points: q });
                        return _t().isValidElement(O) ? tt = _t().cloneElement(O, r) : ne()(O) ? tt = O(r) : tt = _t().createElement(it.H, Vt({}, r, { type: N })), _t().createElement(Qt.m, { className: "recharts-scatter-line", key: "recharts-scatter-line" }, tt)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var R = this.props,
                            st = R.hide,
                            O = R.points,
                            U = R.line,
                            N = R.className,
                            L = R.xAxis,
                            x = R.yAxis,
                            q = R.left,
                            tt = R.top,
                            F = R.width,
                            rt = R.height,
                            at = R.id,
                            dt = R.isAnimationActive;
                        if (st || !O || !O.length) return null;
                        var xt = this.state.isAnimationFinished,
                            l = ie()("recharts-scatter", N),
                            r = L && L.allowDataOverflow || x && x.allowDataOverflow,
                            i = Ft()(at) ? this.id : at;
                        return _t().createElement(Qt.m, { className: l, clipPath: r ? "url(#clipPath-".concat(i, ")") : null }, r ? _t().createElement("defs", null, _t().createElement("clipPath", { id: "clipPath-".concat(i) }, _t().createElement("rect", { x: q, y: tt, width: F, height: rt }))) : null, U && this.renderLine(), this.renderErrorBar(), _t().createElement(Qt.m, { key: "recharts-scatter-symbols" }, this.renderSymbols()), (!dt || xt) && $t.e.renderCallByParent(this.props, O))
                    }
                }], [{ key: "getDerivedStateFromProps", value: function(R, st) { return R.animationId !== st.prevAnimationId ? { prevAnimationId: R.animationId, curPoints: R.points, prevPoints: st.curPoints } : R.points !== st.curPoints ? { curPoints: R.points } : null } }, { key: "renderSymbolItem", value: function(R, st) { var O; return _t().isValidElement(R) ? O = _t().cloneElement(R, st) : ne()(R) ? O = R(st) : typeof R == "string" && (O = _t().createElement(bt.v, Vt({}, st, { type: R }))), O } }]), Z
            }(ae.PureComponent);
            ce.displayName = "Scatter", ce.defaultProps = { xAxisId: 0, yAxisId: 0, zAxisId: 0, legendType: "circle", lineType: "joint", lineJointType: "linear", data: [], shape: "circle", hide: !1, isAnimationActive: !qt.x.isSsr, animationBegin: 0, animationDuration: 400, animationEasing: "linear" }, ce.getComposedData = function(Q) {
                var A = Q.xAxis,
                    Z = Q.yAxis,
                    V = Q.zAxis,
                    R = Q.item,
                    st = Q.displayedData,
                    O = Q.xAxisTicks,
                    U = Q.yAxisTicks,
                    N = Q.offset,
                    L = R.props.tooltipType,
                    x = (0, yt.NN)(R.props.children, gt.b.displayName),
                    q = Ft()(A.dataKey) ? R.props.dataKey : A.dataKey,
                    tt = Ft()(Z.dataKey) ? R.props.dataKey : Z.dataKey,
                    F = V && V.dataKey,
                    rt = V ? V.range : It.d.defaultProps.range,
                    at = rt && rt[0],
                    dt = A.scale.bandwidth ? A.scale.bandwidth() : 0,
                    xt = Z.scale.bandwidth ? Z.scale.bandwidth() : 0,
                    l = st.map(function(r, i) {
                        var t = (0, kt.F$)(r, q),
                            n = (0, kt.F$)(r, tt),
                            s = !Ft()(F) && (0, kt.F$)(r, F) || "-",
                            c = [{ name: Ft()(A.dataKey) ? R.props.name : A.name || A.dataKey, unit: A.unit || "", value: t, payload: r, dataKey: q, type: L }, { name: Ft()(Z.dataKey) ? R.props.name : Z.name || Z.dataKey, unit: Z.unit || "", value: n, payload: r, dataKey: tt, type: L }];
                        s !== "-" && c.push({ name: V.name || V.dataKey, unit: V.unit || "", value: s, payload: r, dataKey: F, type: L });
                        var g = (0, kt.Hv)({ axis: A, ticks: O, bandSize: dt, entry: r, index: i, dataKey: q }),
                            w = (0, kt.Hv)({ axis: Z, ticks: U, bandSize: xt, entry: r, index: i, dataKey: tt }),
                            u = s !== "-" ? V.scale(s) : at,
                            E = Math.sqrt(Math.max(u, 0) / Math.PI);
                        return Tt(Tt({}, r), {}, { cx: g, cy: w, x: g - E, y: w - E, xAxis: A, yAxis: Z, zAxis: V, width: 2 * E, height: 2 * E, size: u, node: { x: t, y: n, z: s }, tooltipPayload: c, tooltipPosition: { x: g, y: w }, payload: r }, x && x[i] && x[i].props)
                    });
                return Tt({ points: l }, N)
            }
        },
        317: (Ie, se, z) => {
            z.d(se, { d: () => Jt });
            var Jt = function() { return null };
            Jt.displayName = "ZAxis", Jt.defaultProps = { zAxisId: 0, range: [64, 64], scale: "auto", type: "number" }
        },
        55937: (Ie, se, z) => {
            z.d(se, { w: () => Ft });
            var Jt = z(78544),
                Rt = z(7387),
                he = z(75228),
                ne = z(46414),
                Wt = z(74659),
                Ft = (0, Jt.z)({ chartName: "LineChart", GraphicalChild: Rt.x, axisComponents: [{ axisType: "xAxis", AxisComp: he.K }, { axisType: "yAxis", AxisComp: ne.B }], formatAxisMap: Wt.t9 })
        },
        45128: (Ie, se, z) => {
            z.d(se, { G: () => ae });
            var Jt = z(78544),
                Rt = z(71420),
                he = z(75228),
                ne = z(46414),
                Wt = z(317),
                Ft = z(74659),
                ae = (0, Jt.z)({ chartName: "ScatterChart", GraphicalChild: Rt.b, defaultTooltipEventType: "item", validateTooltipEventTypes: ["item"], axisComponents: [{ axisType: "xAxis", AxisComp: he.K }, { axisType: "yAxis", AxisComp: ne.B }, { axisType: "zAxis", AxisComp: Wt.d }], formatAxisMap: Ft.t9 })
        }
    }
]);