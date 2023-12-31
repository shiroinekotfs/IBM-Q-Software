(self.webpackChunk_quantum_lab_ui = self.webpackChunk_quantum_lab_ui || []).push([
    [461], {
        48325: (_t, Le, A) => {
            "use strict";
            A.d(Le, { Z: () => re });
            var Ie = A(81765),
                d = A.n(Ie),
                Ne = A(56271),
                g = A.n(Ne),
                R = A(89938),
                P = A.n(R),
                qe = A(63286),
                we = A(3892),
                q = A(79469),
                Q = A(17273),
                Ye = A(81724),
                Pe = A(56001),
                ee = A(69677),
                te = A(34178),
                xe = A(27629);

            function U(s) { return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? U = function(c) { return typeof c } : U = function(c) { return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c }, U(s) }
            var v;

            function ne() { return ne = Object.assign || function(s) { for (var u = 1; u < arguments.length; u++) { var c = arguments[u]; for (var n in c) Object.prototype.hasOwnProperty.call(c, n) && (s[n] = c[n]) } return s }, ne.apply(this, arguments) }

            function I(s, u) {
                if (s == null) return {};
                var c = Te(s, u),
                    n, p;
                if (Object.getOwnPropertySymbols) { var b = Object.getOwnPropertySymbols(s); for (p = 0; p < b.length; p++) n = b[p], !(u.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(s, n) || (c[n] = s[n])) }
                return c
            }

            function Te(s, u) {
                if (s == null) return {};
                var c = {},
                    n = Object.keys(s),
                    p, b;
                for (b = 0; b < n.length; b++) p = n[b], !(u.indexOf(p) >= 0) && (c[p] = s[p]);
                return c
            }

            function H(s, u) { if (!(s instanceof u)) throw new TypeError("Cannot call a class as a function") }

            function ke(s, u) {
                for (var c = 0; c < u.length; c++) {
                    var n = u[c];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(s, n.key, n)
                }
            }

            function m(s, u, c) { return u && ke(s.prototype, u), c && ke(s, c), s }

            function K(s, u) {
                if (typeof u != "function" && u !== null) throw new TypeError("Super expression must either be null or a function");
                s.prototype = Object.create(u && u.prototype, { constructor: { value: s, writable: !0, configurable: !0 } }), u && Y(s, u)
            }

            function Y(s, u) { return Y = Object.setPrototypeOf || function(n, p) { return n.__proto__ = p, n }, Y(s, u) }

            function Fe(s) {
                var u = Ve();
                return function() {
                    var n = V(s),
                        p;
                    if (u) {
                        var b = V(this).constructor;
                        p = Reflect.construct(n, arguments, b)
                    } else p = n.apply(this, arguments);
                    return Ee(this, p)
                }
            }

            function Ee(s, u) { return u && (U(u) === "object" || typeof u == "function") ? u : O(s) }

            function O(s) { if (s === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return s }

            function Ve() { if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1; if (typeof Proxy == "function") return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0 } catch { return !1 } }

            function V(s) { return V = Object.setPrototypeOf ? Object.getPrototypeOf : function(c) { return c.__proto__ || Object.getPrototypeOf(c) }, V(s) }

            function l(s, u, c) { return u in s ? Object.defineProperty(s, u, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : s[u] = c, s }
            var T = qe.Z.prefix,
                Be = (0, xe.Z)(),
                re = function(s) {
                    K(c, s);
                    var u = Fe(c);

                    function c() {
                        var n;
                        H(this, c);
                        for (var p = arguments.length, b = new Array(p), _ = 0; _ < p; _++) b[_] = arguments[_];
                        return n = u.call.apply(u, [this].concat(b)), l(O(n), "button", g().createRef()), l(O(n), "outerModal", g().createRef()), l(O(n), "innerModal", g().createRef()), l(O(n), "startTrap", g().createRef()), l(O(n), "endTrap", g().createRef()), l(O(n), "modalInstanceId", "modal-".concat(Be())), l(O(n), "modalLabelId", "".concat(T, "--modal-header__label--").concat(n.modalInstanceId)), l(O(n), "modalHeadingId", "".concat(T, "--modal-header__heading--").concat(n.modalInstanceId)), l(O(n), "modalBodyId", "".concat(T, "--modal-body--").concat(n.modalInstanceId)), l(O(n), "handleKeyDown", function(E) { n.props.open && (E.which === 27 && n.props.onRequestClose(E), E.which === 13 && n.props.shouldSubmitOnEnter && n.props.onRequestSubmit(E)) }), l(O(n), "handleMousedown", function(E) { n.innerModal.current && !n.innerModal.current.contains(E.target) && !(0, te.s)(E.target, n.props.selectorsFloatingMenus) && !n.props.preventCloseOnClickOutside && n.props.onRequestClose(E) }), l(O(n), "handleBlur", function(E) {
                            var x = E.target,
                                $ = E.relatedTarget,
                                k = n.props,
                                F = k.open,
                                le = k.selectorsFloatingMenus;
                            if (F && $ && x) {
                                var ge = n.innerModal.current,
                                    se = n.startTrap.current,
                                    ue = n.endTrap.current;
                                (0, te.Z)({ bodyNode: ge, startTrapNode: se, endTrapNode: ue, currentActiveNode: $, oldActiveNode: x, selectorsFloatingMenus: le })
                            }
                        }), l(O(n), "initialFocus", function(E) {
                            var x = E || n.innerModal.current,
                                $ = x ? x.querySelector(n.props.selectorPrimaryFocus) : null;
                            return $ || n.button && n.button.current
                        }), l(O(n), "focusButton", function(E) {
                            var x = n.initialFocus(E);
                            x && x.focus()
                        }), l(O(n), "handleTransitionEnd", function(E) { E.target === E.currentTarget && n.outerModal.current && n.outerModal.current.offsetWidth && n.outerModal.current.offsetHeight && n.beingOpen && (n.focusButton(E.currentTarget), n.beingOpen = !1) }), n
                    }
                    return m(c, [{ key: "componentDidUpdate", value: function(p) {!p.open && this.props.open ? this.beingOpen = !0 : p.open && !this.props.open && (this.beingOpen = !1), (0, q.Z)(document.body, "".concat(T, "--body--with-modal-open"), this.props.open) } }, {
                        key: "componentWillUnmount",
                        value: function() {
                            (0, q.Z)(document.body, "".concat(T, "--body--with-modal-open"), !1)
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            (0, q.Z)(document.body, "".concat(T, "--body--with-modal-open"), this.props.open), this.props.open && this.focusButton(this.innerModal.current)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var p, b, _ = this.props,
                                E = _.modalHeading,
                                x = _.modalLabel,
                                $ = _.modalAriaLabel,
                                k = _.passiveModal,
                                F = _.hasForm,
                                le = _.secondaryButtonText,
                                ge = _.primaryButtonText,
                                se = _.open,
                                ue = _.onRequestClose,
                                r = _.onRequestSubmit,
                                o = _.onSecondarySubmit,
                                f = _.iconDescription,
                                h = _.primaryButtonDisabled,
                                S = _.danger,
                                ae = _.alert,
                                W = _.secondaryButtons,
                                be = _.selectorPrimaryFocus,
                                Ue = _.selectorsFloatingMenus,
                                Xe = _.shouldSubmitOnEnter,
                                He = _.size,
                                Ae = _.hasScrollingContent,
                                yt = _.preventCloseOnClickOutside,
                                Je = I(_, ["modalHeading", "modalLabel", "modalAriaLabel", "passiveModal", "hasForm", "secondaryButtonText", "primaryButtonText", "open", "onRequestClose", "onRequestSubmit", "onSecondarySubmit", "iconDescription", "primaryButtonDisabled", "danger", "alert", "secondaryButtons", "selectorPrimaryFocus", "selectorsFloatingMenus", "shouldSubmitOnEnter", "size", "hasScrollingContent", "preventCloseOnClickOutside"]),
                                ce = o || ue,
                                Qe = P()((p = {}, l(p, "".concat(T, "--modal"), !0), l(p, "".concat(T, "--modal-tall"), !k), l(p, "is-visible", se), l(p, "".concat(T, "--modal--danger"), this.props.danger), l(p, this.props.className, this.props.className), p)),
                                et = P()("".concat(T, "--modal-container"), l({}, "".concat(T, "--modal-container--").concat(He), He)),
                                tt = P()("".concat(T, "--modal-content"), (b = {}, l(b, "".concat(T, "--modal-content--with-form"), F), l(b, "".concat(T, "--modal-scroll-content"), Ae), b)),
                                Oe = P()("".concat(T, "--modal-footer"), l({}, "".concat(T, "--modal-footer--three-button"), Array.isArray(W) && W.length === 2)),
                                fe = g().createElement("button", { className: "".concat(T, "--modal-close"), type: "button", onClick: ue, title: f, "aria-label": f, ref: this.button }, g().createElement(we.dOq, { "aria-label": f, className: "".concat(T, "--modal-close__icon") })),
                                G = x || this.props["aria-label"] || $ || E,
                                Me = x ? this.modalLabelId : this.modalHeadingId,
                                me = Ae ? { tabIndex: 0, role: "region", "aria-label": G, "aria-labelledby": Me } : {},
                                X = {};
                            ae && k && (X.role = "alert"), ae && !k && (X.role = "alertdialog", X["aria-describedby"] = this.modalBodyId);
                            var nt = function() {
                                    return Array.isArray(W) && W.length <= 2 ? W.map(function(ze, We) {
                                        var z = ze.buttonText,
                                            Se = ze.onClick;
                                        return g().createElement(Q.Z, { key: "".concat(z, "-").concat(We), kind: "secondary", onClick: Se }, z)
                                    }) : le ? g().createElement(Q.Z, { kind: "secondary", onClick: ce }, le) : null
                                },
                                rt = g().createElement("div", ne({ ref: this.innerModal, role: "dialog" }, X, { className: et, "aria-label": G, "aria-modal": "true", tabIndex: "-1" }), g().createElement("div", { className: "".concat(T, "--modal-header") }, k && fe, x && g().createElement("h2", { id: this.modalLabelId, className: "".concat(T, "--modal-header__label") }, x), g().createElement("h3", { id: this.modalHeadingId, className: "".concat(T, "--modal-header__heading") }, E), !k && fe), g().createElement("div", ne({ id: this.modalBodyId, className: tt }, me, { "aria-labelledby": Me }), this.props.children), Ae && g().createElement("div", { className: "".concat(T, "--modal-content--overflow-indicator") }), !k && g().createElement(Ye.Z, { className: Oe }, g().createElement(nt, null), g().createElement(Q.Z, { kind: S ? "danger" : "primary", disabled: h, onClick: r, ref: this.button }, ge)));
                            return g().createElement("div", ne({}, Je, { onKeyDown: this.handleKeyDown, onMouseDown: this.handleMousedown, onBlur: this.handleBlur, className: Qe, role: "presentation", onTransitionEnd: this.props.open ? this.handleTransitionEnd : void 0, ref: this.outerModal }), g().createElement("span", { ref: this.startTrap, tabIndex: "0", role: "link", className: "".concat(T, "--visually-hidden") }, "Focus sentinel"), rt, g().createElement("span", { ref: this.endTrap, tabIndex: "0", role: "link", className: "".concat(T, "--visually-hidden") }, "Focus sentinel"))
                        }
                    }]), c
                }(Ne.Component);
            l(re, "propTypes", (v = { alert: d().bool }, l(v, "aria-label", (0, ee.Z)("hasScrollingContent", d().string)), l(v, "children", d().node), l(v, "className", d().string), l(v, "danger", d().bool), l(v, "focusTrap", (0, Pe.Z)(d().bool, "\nThe prop `focusTrap` for Modal has been deprecated, as the feature of `focusTrap` runs by default.")), l(v, "hasForm", d().bool), l(v, "hasScrollingContent", d().bool), l(v, "iconDescription", d().string), l(v, "id", d().string), l(v, "modalAriaLabel", d().string), l(v, "modalHeading", d().node), l(v, "modalLabel", d().node), l(v, "onKeyDown", d().func), l(v, "onRequestClose", d().func), l(v, "onRequestSubmit", d().func), l(v, "onSecondarySubmit", d().func), l(v, "open", d().bool), l(v, "passiveModal", d().bool), l(v, "preventCloseOnClickOutside", d().bool), l(v, "primaryButtonDisabled", d().bool), l(v, "primaryButtonText", d().node), l(v, "secondaryButtonText", d().node), l(v, "secondaryButtons", function(u, c, n) {
                if (u.secondaryButtons) {
                    if (!Array.isArray(u.secondaryButtons) || u.secondaryButtons.length !== 2) return new Error("".concat(c, " needs to be an array of two button config objects"));
                    var p = { buttonText: d().node, onClick: d().func };
                    u[c].forEach(function(b) { d().checkPropTypes(p, b, c, n) })
                }
                return null
            }), l(v, "selectorPrimaryFocus", d().string), l(v, "selectorsFloatingMenus", d().arrayOf(d().string)), l(v, "shouldSubmitOnEnter", d().bool), l(v, "size", d().oneOf(["xs", "sm", "md", "lg"])), v)), l(re, "defaultProps", { onRequestClose: function() {}, onRequestSubmit: function() {}, primaryButtonDisabled: !1, onKeyDown: function() {}, passiveModal: !1, iconDescription: "Close", modalHeading: "", modalLabel: "", preventCloseOnClickOutside: !1, selectorPrimaryFocus: "[data-modal-primary-focus]", hasScrollingContent: !1 })
        },
        91569: function(_t) { /*! @license DOMPurify 2.3.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.6/LICENSE */
            (function(Le, A) { _t.exports = A() })(this, function() {
                "use strict";

                function Le(r) { if (Array.isArray(r)) { for (var o = 0, f = Array(r.length); o < r.length; o++) f[o] = r[o]; return f } else return Array.from(r) }
                var A = Object.hasOwnProperty,
                    Ie = Object.setPrototypeOf,
                    d = Object.isFrozen,
                    Ne = Object.getPrototypeOf,
                    g = Object.getOwnPropertyDescriptor,
                    R = Object.freeze,
                    P = Object.seal,
                    qe = Object.create,
                    we = typeof Reflect < "u" && Reflect,
                    q = we.apply,
                    Q = we.construct;
                q || (q = function(o, f, h) { return o.apply(f, h) }), R || (R = function(o) { return o }), P || (P = function(o) { return o }), Q || (Q = function(o, f) { return new(Function.prototype.bind.apply(o, [null].concat(Le(f)))) });
                var Ye = H(Array.prototype.forEach),
                    Pe = H(Array.prototype.pop),
                    ee = H(Array.prototype.push),
                    te = H(String.prototype.toLowerCase),
                    xe = H(String.prototype.match),
                    U = H(String.prototype.replace),
                    v = H(String.prototype.indexOf),
                    ne = H(String.prototype.trim),
                    I = H(RegExp.prototype.test),
                    Te = ke(TypeError);

                function H(r) { return function(o) { for (var f = arguments.length, h = Array(f > 1 ? f - 1 : 0), S = 1; S < f; S++) h[S - 1] = arguments[S]; return q(r, o, h) } }

                function ke(r) { return function() { for (var o = arguments.length, f = Array(o), h = 0; h < o; h++) f[h] = arguments[h]; return Q(r, f) } }

                function m(r, o) {
                    Ie && Ie(r, null);
                    for (var f = o.length; f--;) {
                        var h = o[f];
                        if (typeof h == "string") {
                            var S = te(h);
                            S !== h && (d(o) || (o[f] = S), h = S)
                        }
                        r[h] = !0
                    }
                    return r
                }

                function K(r) {
                    var o = qe(null),
                        f = void 0;
                    for (f in r) q(A, r, [f]) && (o[f] = r[f]);
                    return o
                }

                function Y(r, o) {
                    for (; r !== null;) {
                        var f = g(r, o);
                        if (f) { if (f.get) return H(f.get); if (typeof f.value == "function") return H(f.value) }
                        r = Ne(r)
                    }

                    function h(S) { return console.warn("fallback value for", S), null }
                    return h
                }
                var Fe = R(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
                    Ee = R(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
                    O = R(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
                    Ve = R(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
                    V = R(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
                    l = R(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
                    T = R(["#text"]),
                    Be = R(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
                    re = R(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
                    s = R(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
                    u = R(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
                    c = P(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
                    n = P(/<%[\s\S]*|[\s\S]*%>/gm),
                    p = P(/^data-[\-\w.\u00B7-\uFFFF]/),
                    b = P(/^aria-[\-\w]+$/),
                    _ = P(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
                    E = P(/^(?:\w+script|data):/i),
                    x = P(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
                    $ = P(/^html$/i),
                    k = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) { return typeof r } : function(r) { return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r };

                function F(r) { if (Array.isArray(r)) { for (var o = 0, f = Array(r.length); o < r.length; o++) f[o] = r[o]; return f } else return Array.from(r) }
                var le = function() { return typeof window > "u" ? null : window },
                    ge = function(o, f) {
                        if ((typeof o > "u" ? "undefined" : k(o)) !== "object" || typeof o.createPolicy != "function") return null;
                        var h = null,
                            S = "data-tt-policy-suffix";
                        f.currentScript && f.currentScript.hasAttribute(S) && (h = f.currentScript.getAttribute(S));
                        var ae = "dompurify" + (h ? "#" + h : "");
                        try { return o.createPolicy(ae, { createHTML: function(be) { return be } }) } catch { return console.warn("TrustedTypes policy " + ae + " could not be created."), null }
                    };

                function se() {
                    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : le(),
                        o = function(e) { return se(e) };
                    if (o.version = "2.3.6", o.removed = [], !r || !r.document || r.document.nodeType !== 9) return o.isSupported = !1, o;
                    var f = r.document,
                        h = r.document,
                        S = r.DocumentFragment,
                        ae = r.HTMLTemplateElement,
                        W = r.Node,
                        be = r.Element,
                        Ue = r.NodeFilter,
                        Xe = r.NamedNodeMap,
                        He = Xe === void 0 ? r.NamedNodeMap || r.MozNamedAttrMap : Xe,
                        Ae = r.HTMLFormElement,
                        yt = r.DOMParser,
                        Je = r.trustedTypes,
                        ce = be.prototype,
                        Qe = Y(ce, "cloneNode"),
                        et = Y(ce, "nextSibling"),
                        tt = Y(ce, "childNodes"),
                        Oe = Y(ce, "parentNode");
                    if (typeof ae == "function") {
                        var fe = h.createElement("template");
                        fe.content && fe.content.ownerDocument && (h = fe.content.ownerDocument)
                    }
                    var G = ge(Je, f),
                        Me = G ? G.createHTML("") : "",
                        me = h,
                        X = me.implementation,
                        nt = me.createNodeIterator,
                        rt = me.createDocumentFragment,
                        Tt = me.getElementsByTagName,
                        ze = f.importNode,
                        We = {};
                    try { We = K(h).documentMode ? h.documentMode : {} } catch {}
                    var z = {};
                    o.isSupported = typeof Oe == "function" && X && typeof X.createHTMLDocument < "u" && We !== 9;
                    var Se = c,
                        at = n,
                        zt = p,
                        Wt = b,
                        Gt = E,
                        Et = x,
                        ot = _,
                        D = null,
                        gt = m({}, [].concat(F(Fe), F(Ee), F(O), F(V), F(T))),
                        C = null,
                        bt = m({}, [].concat(F(Be), F(re), F(s), F(u))),
                        M = Object.seal(Object.create(null, { tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null }, attributeNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null }, allowCustomizedBuiltInElements: { writable: !0, configurable: !1, enumerable: !0, value: !1 } })),
                        De = null,
                        it = null,
                        At = !0,
                        lt = !0,
                        Ot = !1,
                        de = !1,
                        oe = !1,
                        st = !1,
                        ut = !1,
                        pe = !1,
                        Ge = !1,
                        Ke = !1,
                        Mt = !0,
                        ct = !0,
                        Re = !1,
                        he = {},
                        ve = null,
                        St = m({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
                        Dt = null,
                        Rt = m({}, ["audio", "video", "img", "source", "image", "track"]),
                        ft = null,
                        Ct = m({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
                        mt = "http://www.w3.org/1998/Math/MathML",
                        dt = "http://www.w3.org/2000/svg",
                        J = "http://www.w3.org/1999/xhtml",
                        $e = J,
                        pt = !1,
                        _e = void 0,
                        Kt = ["application/xhtml+xml", "text/html"],
                        $t = "text/html",
                        ie = void 0,
                        ye = null,
                        jt = h.createElement("form"),
                        Lt = function(e) { return e instanceof RegExp || e instanceof Function },
                        ht = function(e) { ye && ye === e || ((!e || (typeof e > "u" ? "undefined" : k(e)) !== "object") && (e = {}), e = K(e), D = "ALLOWED_TAGS" in e ? m({}, e.ALLOWED_TAGS) : gt, C = "ALLOWED_ATTR" in e ? m({}, e.ALLOWED_ATTR) : bt, ft = "ADD_URI_SAFE_ATTR" in e ? m(K(Ct), e.ADD_URI_SAFE_ATTR) : Ct, Dt = "ADD_DATA_URI_TAGS" in e ? m(K(Rt), e.ADD_DATA_URI_TAGS) : Rt, ve = "FORBID_CONTENTS" in e ? m({}, e.FORBID_CONTENTS) : St, De = "FORBID_TAGS" in e ? m({}, e.FORBID_TAGS) : {}, it = "FORBID_ATTR" in e ? m({}, e.FORBID_ATTR) : {}, he = "USE_PROFILES" in e ? e.USE_PROFILES : !1, At = e.ALLOW_ARIA_ATTR !== !1, lt = e.ALLOW_DATA_ATTR !== !1, Ot = e.ALLOW_UNKNOWN_PROTOCOLS || !1, de = e.SAFE_FOR_TEMPLATES || !1, oe = e.WHOLE_DOCUMENT || !1, pe = e.RETURN_DOM || !1, Ge = e.RETURN_DOM_FRAGMENT || !1, Ke = e.RETURN_TRUSTED_TYPE || !1, ut = e.FORCE_BODY || !1, Mt = e.SANITIZE_DOM !== !1, ct = e.KEEP_CONTENT !== !1, Re = e.IN_PLACE || !1, ot = e.ALLOWED_URI_REGEXP || ot, $e = e.NAMESPACE || J, e.CUSTOM_ELEMENT_HANDLING && Lt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (M.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && Lt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (M.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (M.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), _e = Kt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? _e = $t : _e = e.PARSER_MEDIA_TYPE, ie = _e === "application/xhtml+xml" ? function(t) { return t } : te, de && (lt = !1), Ge && (pe = !0), he && (D = m({}, [].concat(F(T))), C = [], he.html === !0 && (m(D, Fe), m(C, Be)), he.svg === !0 && (m(D, Ee), m(C, re), m(C, u)), he.svgFilters === !0 && (m(D, O), m(C, re), m(C, u)), he.mathMl === !0 && (m(D, V), m(C, s), m(C, u))), e.ADD_TAGS && (D === gt && (D = K(D)), m(D, e.ADD_TAGS)), e.ADD_ATTR && (C === bt && (C = K(C)), m(C, e.ADD_ATTR)), e.ADD_URI_SAFE_ATTR && m(ft, e.ADD_URI_SAFE_ATTR), e.FORBID_CONTENTS && (ve === St && (ve = K(ve)), m(ve, e.FORBID_CONTENTS)), ct && (D["#text"] = !0), oe && m(D, ["html", "head", "body"]), D.table && (m(D, ["tbody"]), delete De.tbody), R && R(e), ye = e) },
                        It = m({}, ["mi", "mo", "mn", "ms", "mtext"]),
                        Nt = m({}, ["foreignobject", "desc", "title", "annotation-xml"]),
                        je = m({}, Ee);
                    m(je, O), m(je, Ve);
                    var vt = m({}, V);
                    m(vt, l);
                    var Zt = function(e) {
                            var t = Oe(e);
                            (!t || !t.tagName) && (t = { namespaceURI: J, tagName: "template" });
                            var a = te(e.tagName),
                                y = te(t.tagName);
                            if (e.namespaceURI === dt) return t.namespaceURI === J ? a === "svg" : t.namespaceURI === mt ? a === "svg" && (y === "annotation-xml" || It[y]) : Boolean(je[a]);
                            if (e.namespaceURI === mt) return t.namespaceURI === J ? a === "math" : t.namespaceURI === dt ? a === "math" && Nt[y] : Boolean(vt[a]);
                            if (e.namespaceURI === J) { if (t.namespaceURI === dt && !Nt[y] || t.namespaceURI === mt && !It[y]) return !1; var N = m({}, ["title", "style", "font", "a", "script"]); return !vt[a] && (N[a] || !je[a]) }
                            return !1
                        },
                        j = function(e) { ee(o.removed, { element: e }); try { e.parentNode.removeChild(e) } catch { try { e.outerHTML = Me } catch { e.remove() } } },
                        wt = function(e, t) {
                            try { ee(o.removed, { attribute: t.getAttributeNode(e), from: t }) } catch { ee(o.removed, { attribute: null, from: t }) }
                            if (t.removeAttribute(e), e === "is" && !C[e])
                                if (pe || Ge) try { j(t) } catch {} else try { t.setAttribute(e, "") } catch {}
                        },
                        Pt = function(e) {
                            var t = void 0,
                                a = void 0;
                            if (ut) e = "<remove></remove>" + e;
                            else {
                                var y = xe(e, /^[\r\n\t ]+/);
                                a = y && y[0]
                            }
                            _e === "application/xhtml+xml" && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
                            var N = G ? G.createHTML(e) : e;
                            if ($e === J) try { t = new yt().parseFromString(N, _e) } catch {}
                            if (!t || !t.documentElement) { t = X.createDocument($e, "template", null); try { t.documentElement.innerHTML = pt ? "" : N } catch {} }
                            var w = t.body || t.documentElement;
                            return e && a && w.insertBefore(h.createTextNode(a), w.childNodes[0] || null), $e === J ? Tt.call(t, oe ? "html" : "body")[0] : oe ? t.documentElement : w
                        },
                        xt = function(e) { return nt.call(e.ownerDocument || e, e, Ue.SHOW_ELEMENT | Ue.SHOW_COMMENT | Ue.SHOW_TEXT, null, !1) },
                        qt = function(e) { return e instanceof Ae && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof He) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function") },
                        Ce = function(e) { return (typeof W > "u" ? "undefined" : k(W)) === "object" ? e instanceof W : e && (typeof e > "u" ? "undefined" : k(e)) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string" },
                        Z = function(e, t, a) {!z[e] || Ye(z[e], function(y) { y.call(o, t, a, ye) }) },
                        kt = function(e) {
                            var t = void 0;
                            if (Z("beforeSanitizeElements", e, null), qt(e) || xe(e.nodeName, /[\u0080-\uFFFF]/)) return j(e), !0;
                            var a = ie(e.nodeName);
                            if (Z("uponSanitizeElement", e, { tagName: a, allowedTags: D }), !Ce(e.firstElementChild) && (!Ce(e.content) || !Ce(e.content.firstElementChild)) && I(/<[/\w]/g, e.innerHTML) && I(/<[/\w]/g, e.textContent) || a === "select" && I(/<template/i, e.innerHTML)) return j(e), !0;
                            if (!D[a] || De[a]) {
                                if (!De[a] && Bt(a) && (M.tagNameCheck instanceof RegExp && I(M.tagNameCheck, a) || M.tagNameCheck instanceof Function && M.tagNameCheck(a))) return !1;
                                if (ct && !ve[a]) {
                                    var y = Oe(e) || e.parentNode,
                                        N = tt(e) || e.childNodes;
                                    if (N && y)
                                        for (var w = N.length, L = w - 1; L >= 0; --L) y.insertBefore(Qe(N[L], !0), et(e))
                                }
                                return j(e), !0
                            }
                            return e instanceof be && !Zt(e) || (a === "noscript" || a === "noembed") && I(/<\/no(script|embed)/i, e.innerHTML) ? (j(e), !0) : (de && e.nodeType === 3 && (t = e.textContent, t = U(t, Se, " "), t = U(t, at, " "), e.textContent !== t && (ee(o.removed, { element: e.cloneNode() }), e.textContent = t)), Z("afterSanitizeElements", e, null), !1)
                        },
                        Ft = function(e, t, a) { if (Mt && (t === "id" || t === "name") && (a in h || a in jt)) return !1; if (!(lt && !it[t] && I(zt, t))) { if (!(At && I(Wt, t))) { if (!C[t] || it[t]) { if (!(Bt(e) && (M.tagNameCheck instanceof RegExp && I(M.tagNameCheck, e) || M.tagNameCheck instanceof Function && M.tagNameCheck(e)) && (M.attributeNameCheck instanceof RegExp && I(M.attributeNameCheck, t) || M.attributeNameCheck instanceof Function && M.attributeNameCheck(t)) || t === "is" && M.allowCustomizedBuiltInElements && (M.tagNameCheck instanceof RegExp && I(M.tagNameCheck, a) || M.tagNameCheck instanceof Function && M.tagNameCheck(a)))) return !1 } else if (!ft[t]) { if (!I(ot, U(a, Et, ""))) { if (!((t === "src" || t === "xlink:href" || t === "href") && e !== "script" && v(a, "data:") === 0 && Dt[e])) { if (!(Ot && !I(Gt, U(a, Et, "")))) { if (a) return !1 } } } } } } return !0 },
                        Bt = function(e) { return e.indexOf("-") > 0 },
                        Ut = function(e) {
                            var t = void 0,
                                a = void 0,
                                y = void 0,
                                N = void 0;
                            Z("beforeSanitizeAttributes", e, null);
                            var w = e.attributes;
                            if (!!w) {
                                var L = { attrName: "", attrValue: "", keepAttr: !0, allowedAttributes: C };
                                for (N = w.length; N--;) {
                                    t = w[N];
                                    var Ze = t,
                                        B = Ze.name,
                                        Ht = Ze.namespaceURI;
                                    if (a = ne(t.value), y = ie(B), L.attrName = y, L.attrValue = a, L.keepAttr = !0, L.forceKeepAttr = void 0, Z("uponSanitizeAttribute", e, L), a = L.attrValue, !L.forceKeepAttr && (wt(B, e), !!L.keepAttr)) {
                                        if (I(/\/>/i, a)) { wt(B, e); continue }
                                        de && (a = U(a, Se, " "), a = U(a, at, " "));
                                        var Vt = ie(e.nodeName);
                                        if (!!Ft(Vt, y, a)) try { Ht ? e.setAttributeNS(Ht, B, a) : e.setAttribute(B, a), Pe(o.removed) } catch {}
                                    }
                                }
                                Z("afterSanitizeAttributes", e, null)
                            }
                        },
                        Yt = function i(e) {
                            var t = void 0,
                                a = xt(e);
                            for (Z("beforeSanitizeShadowDOM", e, null); t = a.nextNode();) Z("uponSanitizeShadowNode", t, null), !kt(t) && (t.content instanceof S && i(t.content), Ut(t));
                            Z("afterSanitizeShadowDOM", e, null)
                        };
                    return o.sanitize = function(i, e) {
                        var t = void 0,
                            a = void 0,
                            y = void 0,
                            N = void 0,
                            w = void 0;
                        if (pt = !i, pt && (i = "<!-->"), typeof i != "string" && !Ce(i)) { if (typeof i.toString != "function") throw Te("toString is not a function"); if (i = i.toString(), typeof i != "string") throw Te("dirty is not a string, aborting") }
                        if (!o.isSupported) { if (k(r.toStaticHTML) === "object" || typeof r.toStaticHTML == "function") { if (typeof i == "string") return r.toStaticHTML(i); if (Ce(i)) return r.toStaticHTML(i.outerHTML) } return i }
                        if (st || ht(e), o.removed = [], typeof i == "string" && (Re = !1), Re) { if (i.nodeName) { var L = ie(i.nodeName); if (!D[L] || De[L]) throw Te("root node is forbidden and cannot be sanitized in-place") } } else if (i instanceof W) t = Pt("<!---->"), a = t.ownerDocument.importNode(i, !0), a.nodeType === 1 && a.nodeName === "BODY" || a.nodeName === "HTML" ? t = a : t.appendChild(a);
                        else { if (!pe && !de && !oe && i.indexOf("<") === -1) return G && Ke ? G.createHTML(i) : i; if (t = Pt(i), !t) return pe ? null : Ke ? Me : "" }
                        t && ut && j(t.firstChild);
                        for (var Ze = xt(Re ? i : t); y = Ze.nextNode();) y.nodeType === 3 && y === N || kt(y) || (y.content instanceof S && Yt(y.content), Ut(y), N = y);
                        if (N = null, Re) return i;
                        if (pe) {
                            if (Ge)
                                for (w = rt.call(t.ownerDocument); t.firstChild;) w.appendChild(t.firstChild);
                            else w = t;
                            return C.shadowroot && (w = ze.call(f, w, !0)), w
                        }
                        var B = oe ? t.outerHTML : t.innerHTML;
                        return oe && D["!doctype"] && t.ownerDocument && t.ownerDocument.doctype && t.ownerDocument.doctype.name && I($, t.ownerDocument.doctype.name) && (B = "<!DOCTYPE " + t.ownerDocument.doctype.name + `>
` + B), de && (B = U(B, Se, " "), B = U(B, at, " ")), G && Ke ? G.createHTML(B) : B
                    }, o.setConfig = function(i) { ht(i), st = !0 }, o.clearConfig = function() { ye = null, st = !1 }, o.isValidAttribute = function(i, e, t) {
                        ye || ht({});
                        var a = ie(i),
                            y = ie(e);
                        return Ft(a, y, t)
                    }, o.addHook = function(i, e) { typeof e == "function" && (z[i] = z[i] || [], ee(z[i], e)) }, o.removeHook = function(i) { z[i] && Pe(z[i]) }, o.removeHooks = function(i) { z[i] && (z[i] = []) }, o.removeAllHooks = function() { z = {} }, o
                }
                var ue = se();
                return ue
            })
        }
    }
]);