(function() {
    (function() {
        var g = google_exportSymbol, h = document, aa = isNaN, k = google_exportProperty, l = Math, n = Array, p = Number, q = Error, s = parseInt, t = String;
        function x(a, b) {
            return a.format = b
        }
        function ba(a, b) {
            return a.type = b
        }
        var ca = "exec", y = "replace", z = "floor", B = "charAt", C = "format", da = "getColumnType", ea = "getHours", fa = "getTime", ga = "getElementsByTagName", ha = "substr", ia = "toString", ja = "propertyIsEnumerable", ka = "split", la = "setProperty", ma = "apply", D = "push", na = "test", E = "round", pa = "slice", F = "indexOf", qa = "fromCharCode", ra = "getValue", sa = "getNumberOfRows", G = "length", H = "prototype", ta = "setFormattedValue", I = "call", ua = "substring", J = "join", va = "toLowerCase", wa = "getTimezoneOffset", K = "", xa = " ", ya = '" />', za = "#", Aa = "#$1$1$2$2$3$3", Ba = "$1",
                Ca = "%", Da = "'", Ea = "''", Fa = "(", Ga = "(\\d*)(\\D*)", Ia = ")", Ja = "+", Ka = ",", L = "-", M = ".", La = '.png" height="12" width="', Ma = "//ajax.googleapis.com/ajax", Na = "/static/modules/gviz/", Oa = "/util/bar_", Pa = "/util/format.css", N = "0", Qa = "0000000000000000", Ra = "1", Sa = "1.0", Ta = ":", Ua = ";", Va = "</span>\u00a0", Wa = '<img style="padding: 0" src="', Xa = '<span style="padding: 0; float: left; white-space: nowrap;">', Ya = "Can't combine significant digits and minimum fraction digits", Za = "E", $a = "Etc/GMT", ab = "G", bb = "GMT", cb = "H", db = "K",
                eb = "L", fb = "LINK", O = "M", gb = "Min value must be less than max value", hb = "Q", jb = "S", kb = "Too many percent/permill", lb = "UTC", mb = "Z", nb = "[object Array]", ob = "[object Function]", pb = "[object Window]", qb = "\\", rb = "_bar_format_old_value", sb = "a", tb = "addGradientRange", ub = "array", vb = "b", wb = "background-color:", xb = "body", yb = "boolean", zb = "c", Ab = "call", Bb = "className", Cb = "clearMinutes", Db = "color:", Eb = "d", Fb = "date", Gb = "datetime", Hb = "decimalSymbol", Ib = "false", P = "format", Jb = "formatType", Kb = "fractionDigits", Lb = "full", Mb =
                "function", Nb = "g", Ob = "google-visualization-formatters-arrow-dr", Pb = "google-visualization-formatters-arrow-empty", Qb = "google-visualization-formatters-arrow-ug", Rb = "google.loader.GoogleApisBase", Sb = "google.visualization.Version", Tb = "groupingSymbol", Ub = "h", Vb = "head", Wb = "hex", Xb = "html", Yb = "k", Zb = "link", $b = "long", ac = "m", bc = "medium", cc = "named", dc = "native code", ec = "negativeColor", fc = "negativeParens", gc = "none", hc = "null", Q = "number", ic = "object", jc = "other", kc = "pattern", lc = "prefix", mc = "r", nc = "rgb", oc = "s", pc =
                "scaleFactor", qc = "short", sc = "splice", tc = "string", uc = "style", vc = "stylesheet", wc = "suffix", xc = "text/css", yc = "time", zc = "timeZone", Ac = "timeofday", Bc = "transparent", Cc = "true", Dc = "v", Ec = "valueType", Fc = "w", Gc = "y", Hc = "z", Ic = "{0}", Jc = "{1}", Kc = "{1} {0}", Lc = "\u00a0", Mc = "\u00a4", Nc = "\u2030", R, S = this;
        function Oc(a, b) {
            for (var c = a[ka](M), d = b || S, e; e = c.shift(); )
                if (null != d[e])
                    d = d[e];
                else
                    return null;
            return d
        }
        function Pc(a) {
            var b = typeof a;
            if (b == ic)
                if (a) {
                    if (a instanceof n)
                        return ub;
                    if (a instanceof Object)
                        return b;
                    var c = Object[H][ia][I](a);
                    if (c == pb)
                        return ic;
                    if (c == nb || typeof a[G] == Q && "undefined" != typeof a.splice && "undefined" != typeof a[ja] && !a[ja](sc))
                        return ub;
                    if (c == ob || "undefined" != typeof a[I] && "undefined" != typeof a[ja] && !a[ja](Ab))
                        return Mb
                } else
                    return hc;
            else if (b == Mb && "undefined" == typeof a[I])
                return ic;
            return b
        }
        function Qc(a) {
            var b = typeof a;
            return(b == ic && null != a || b == Mb) && typeof a.getFullYear == Mb
        }
        function Rc(a, b, c) {
            return a[I][ma](a.bind, arguments)
        }
        function Sc(a, b, c) {
            if (!a)
                throw q();
            if (2 < arguments[G]) {
                var d = n[H][pa][I](arguments, 2);
                return function() {
                    var c = n[H][pa][I](arguments);
                    n[H].unshift[ma](c, d);
                    return a[ma](b, c)
                }
            }
            return function() {
                return a[ma](b, arguments)
            }
        }
        function Tc(a, b, c) {
            Tc = Function[H].bind && -1 != Function[H].bind[ia]()[F](dc) ? Rc : Sc;
            return Tc[ma](null, arguments)
        }
        function Uc(a, b) {
            var c = n[H][pa][I](arguments, 1);
            return function() {
                var b = c[pa]();
                b[D][ma](b, arguments);
                return a[ma](this, b)
            }
        }
        function Vc(a, b) {
            function c() {
            }
            c.prototype = b[H];
            a.mc = b[H];
            a.prototype = new c
        }
        ;
        function Wc(a) {
            this.S = a || {};
            t:{
                var b = Xc() + Pa;
                a = h[ga](fb);
                for (var c = 0; c < a[G]; c++)
                    if (a[c] && a[c].href && a[c].href == b)
                        break t;
                a = h.createElement(Zb);
                a.href = b;
                a.rel = vc;
                ba(a, xc);
                if (0 == h[ga](Vb)[G]) {
                    var b = h[ga](Xb)[0], c = h[ga](xb)[0], d = h.createElement(Vb);
                    b.insertBefore(d, c)
                }
                h[ga](Vb)[0].appendChild(a)
            }
        }
        x(Wc[H], function(a, b) {
            if (a[da](b) == Q)
                for (var c = this.S.base || 0, d = 0; d < a[sa](); d++) {
                    var e = a[ra](d, b), f = null, f = e < c ? Ob : e > c ? Qb : Pb;
                    a[la](d, b, Bb, f)
                }
        });
        function T(a, b, c) {
            a = void 0 !== c ? a.toFixed(c) : t(a);
            c = a[F](M);
            -1 == c && (c = a[G]);
            b = l.max(0, b - c);
            return n(b + 1)[J](N) + a
        }
        function Yc(a, b) {
            for (var c = 0, d = t(a)[y](/^[\s\xa0]+|[\s\xa0]+$/g, K)[ka](M), e = t(b)[y](/^[\s\xa0]+|[\s\xa0]+$/g, K)[ka](M), f = l.max(d[G], e[G]), m = 0; 0 == c && m < f; m++) {
                var u = d[m] || K, v = e[m] || K, U = RegExp(Ga, Nb), Ha = RegExp(Ga, Nb);
                do {
                    var r = U[ca](u) || [K, K, K], w = Ha[ca](v) || [K, K, K];
                    if (0 == r[0][G] && 0 == w[0][G])
                        break;
                    c = ((0 == r[1][G] ? 0 : s(r[1], 10)) < (0 == w[1][G] ? 0 : s(w[1], 10)) ? -1 : (0 == r[1][G] ? 0 : s(r[1], 10)) > (0 == w[1][G] ? 0 : s(w[1], 10)) ? 1 : 0) || ((0 == r[2][G]) < (0 == w[2][G]) ? -1 : (0 == r[2][G]) > (0 == w[2][G]) ? 1 : 0) || (r[2] < w[2] ? -1 : r[2] > w[2] ? 1 : 0)
                } while (0 ==
                        c)
            }
            return c
        }
        ;
        var Zc = n[H], $c = Zc[F] ? function(a, b, c) {
            return Zc[F][I](a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? l.max(0, a[G] + c) : c;
            if (typeof a == tc)
                return typeof b == tc && 1 == b[G] ? a[F](b, c) : -1;
            for (; c < a[G]; c++)
                if (c in a && a[c] === b)
                    return c;
            return-1
        };
        var ad = {aliceblue: "#f0f8ff", antiquewhite: "#faebd7", aqua: "#00ffff", aquamarine: "#7fffd4", azure: "#f0ffff", beige: "#f5f5dc", bisque: "#ffe4c4", black: "#000000", blanchedalmond: "#ffebcd", blue: "#0000ff", blueviolet: "#8a2be2", brown: "#a52a2a", burlywood: "#deb887", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkgray: "#a9a9a9", darkgreen: "#006400",
            darkgrey: "#a9a9a9", darkkhaki: "#bdb76b", darkmagenta: "#8b008b", darkolivegreen: "#556b2f", darkorange: "#ff8c00", darkorchid: "#9932cc", darkred: "#8b0000", darksalmon: "#e9967a", darkseagreen: "#8fbc8f", darkslateblue: "#483d8b", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", darkturquoise: "#00ced1", darkviolet: "#9400d3", deeppink: "#ff1493", deepskyblue: "#00bfff", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1e90ff", firebrick: "#b22222", floralwhite: "#fffaf0", forestgreen: "#228b22", fuchsia: "#ff00ff", gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff", gold: "#ffd700", goldenrod: "#daa520", gray: "#808080", green: "#008000", greenyellow: "#adff2f", grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", indianred: "#cd5c5c", indigo: "#4b0082", ivory: "#fffff0", khaki: "#f0e68c", lavender: "#e6e6fa", lavenderblush: "#fff0f5", lawngreen: "#7cfc00", lemonchiffon: "#fffacd", lightblue: "#add8e6", lightcoral: "#f08080", lightcyan: "#e0ffff", lightgoldenrodyellow: "#fafad2", lightgray: "#d3d3d3", lightgreen: "#90ee90", lightgrey: "#d3d3d3", lightpink: "#ffb6c1", lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa", lightskyblue: "#87cefa", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#b0c4de", lightyellow: "#ffffe0", lime: "#00ff00", limegreen: "#32cd32", linen: "#faf0e6", magenta: "#ff00ff", maroon: "#800000", mediumaquamarine: "#66cdaa", mediumblue: "#0000cd", mediumorchid: "#ba55d3", mediumpurple: "#9370db", mediumseagreen: "#3cb371", mediumslateblue: "#7b68ee", mediumspringgreen: "#00fa9a", mediumturquoise: "#48d1cc", mediumvioletred: "#c71585", midnightblue: "#191970", mintcream: "#f5fffa", mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5", navajowhite: "#ffdead", navy: "#000080", oldlace: "#fdf5e6", olive: "#808000", olivedrab: "#6b8e23", orange: "#ffa500", orangered: "#ff4500", orchid: "#da70d6", palegoldenrod: "#eee8aa", palegreen: "#98fb98", paleturquoise: "#afeeee", palevioletred: "#db7093", papayawhip: "#ffefd5", peachpuff: "#ffdab9", peru: "#cd853f", pink: "#ffc0cb", plum: "#dda0dd", powderblue: "#b0e0e6", purple: "#800080", red: "#ff0000", rosybrown: "#bc8f8f", royalblue: "#4169e1", saddlebrown: "#8b4513", salmon: "#fa8072", sandybrown: "#f4a460", seagreen: "#2e8b57",
            seashell: "#fff5ee", sienna: "#a0522d", silver: "#c0c0c0", skyblue: "#87ceeb", slateblue: "#6a5acd", slategray: "#708090", slategrey: "#708090", snow: "#fffafa", springgreen: "#00ff7f", steelblue: "#4682b4", tan: "#d2b48c", teal: "#008080", thistle: "#d8bfd8", tomato: "#ff6347", turquoise: "#40e0d0", violet: "#ee82ee", wheat: "#f5deb3", white: "#ffffff", whitesmoke: "#f5f5f5", yellow: "#ffff00", yellowgreen: "#9acd32"};
        function bd(a) {
            var b = {};
            a = t(a);
            var c = a[B](0) == za ? a : za + a;
            if (cd[na](c))
                return b.m = dd(c), ba(b, Wb), b;
            t:{
                var d = a.match(ed);
                if (d) {
                    var c = p(d[1]), e = p(d[2]), d = p(d[3]);
                    if (0 <= c && 255 >= c && 0 <= e && 255 >= e && 0 <= d && 255 >= d) {
                        c = [c, e, d];
                        break t
                    }
                }
                c = []
            }
            if (c[G])
                return b.m = fd(c[0], c[1], c[2]), ba(b, nc), b;
            if (ad && (c = ad[a[va]()]))
                return b.m = c, ba(b, cc), b;
            throw q(a + " is not a valid color string");
        }
        var gd = /#(.)(.)(.)/;
        function dd(a) {
            if (!cd[na](a))
                throw q(Da + a + "' is not a valid hex color");
            4 == a[G] && (a = a[y](gd, Aa));
            return a[va]()
        }
        function hd(a) {
            a = dd(a);
            return[s(a[ha](1, 2), 16), s(a[ha](3, 2), 16), s(a[ha](5, 2), 16)]
        }
        function fd(a, b, c) {
            a = p(a);
            b = p(b);
            c = p(c);
            if (aa(a) || 0 > a || 255 < a || aa(b) || 0 > b || 255 < b || aa(c) || 0 > c || 255 < c)
                throw q('"(' + a + Ka + b + Ka + c + '") is not a valid RGB color');
            a = id(a[ia](16));
            b = id(b[ia](16));
            c = id(c[ia](16));
            return za + a + b + c
        }
        var cd = /^#(?:[0-9a-f]{3}){1,2}$/i, ed = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
        function id(a) {
            return 1 == a[G] ? N + a : a
        }
        ;
        var jd, kd, ld, md;
        function nd() {
            return S.navigator ? S.navigator.userAgent : null
        }
        md = ld = kd = jd = !1;
        var od;
        if (od = nd()) {
            var pd = S.navigator;
            jd = 0 == od.lastIndexOf("Opera", 0);
            kd = !jd && (-1 != od[F]("MSIE") || -1 != od[F]("Trident"));
            ld = !jd && -1 != od[F]("WebKit");
            md = !jd && !ld && !kd && "Gecko" == pd.product
        }
        var qd = kd, rd = md, sd = ld;
        function td() {
            var a = S.document;
            return a ? a.documentMode : void 0
        }
        var ud;
        t:{
            var vd = K, wd;
            if (jd && S.opera)
                var xd = S.opera.version, vd = typeof xd == Mb ? xd() : xd;
            else if (rd ? wd = /rv\:([^\);]+)(\)|;)/ : qd ? wd = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : sd && (wd = /WebKit\/(\S+)/), wd)
                var yd = wd[ca](nd()), vd = yd ? yd[1] : K;
            if (qd) {
                var zd = td();
                if (zd > parseFloat(vd)) {
                    ud = t(zd);
                    break t
                }
            }
            ud = vd
        }
        var Ad = ud, Bd = {}, Cd = S.document, Dd = Cd && qd ? td() || ("CSS1Compat" == Cd.compatMode ? s(Ad, 10) : 5) : void 0;
        !rd && !qd || qd && qd && 9 <= Dd || rd && (Bd["1.9.1"] || (Bd["1.9.1"] = 0 <= Yc(Ad, "1.9.1")));
        qd && (Bd["9"] || (Bd["9"] = 0 <= Yc(Ad, "9")));
        function Ed(a) {
            return a == gc || a == K || a == Bc ? gc : bd(a).m
        }
        ;
        function Fd(a) {
            a = a || {};
            null != a.fill && this.qb(a.fill);
            null != a.ha && this.rb(a.ha);
            null != a.stroke && this.tb(a.stroke);
            null != a.ia && this.ub(a.ia);
            this.i = null;
            if (a.i) {
                var b = a.i, c = {}, d;
                for (d in b)
                    c[d] = b[d];
                this.i = c;
                this.i.ob = Ed(this.i.ob);
                this.i.pb = Ed(this.i.pb)
            }
            this.e = null;
            a.pattern && this.sb(a.pattern)
        }
        R = Fd[H];
        R.qb = function(a) {
            Ed(a)
        };
        R.rb = function(a) {
            l.min(l.max(a, 0), 1)
        };
        R.tb = function(a) {
            Ed(a)
        };
        R.ub = function(a) {
            l.min(l.max(a, 0), 1)
        };
        R.sb = function(a) {
            this.e = a
        };
        new Fd({ha: 0, fill: "white", ia: 0, stroke: "white"});
        var V;
        V = {Tb: ["av. J.-C.", "ap. J.-C."], Sb: ["avant J\u00e9sus-Christ", "apr\u00e8s J\u00e9sus-Christ"], Cb: ["J", "F", O, "A", O, "J", "J", "A", jb, "O", "N", "D"], Fb: ["J", "F", O, "A", O, "J", "J", "A", jb, "O", "N", "D"], Bb: "janvier f\u00e9vrier mars avril mai juin juillet ao\u00fbt septembre octobre novembre d\u00e9cembre".split(" "), Eb: "janvier f\u00e9vrier mars avril mai juin juillet ao\u00fbt septembre octobre novembre d\u00e9cembre".split(" "), Db: "janv. f\u00e9vr. mars avr. mai juin juil. ao\u00fbt sept. oct. nov. d\u00e9c.".split(" "), Hb: "janv. f\u00e9vr. mars avr. mai juin juil. ao\u00fbt sept. oct. nov. d\u00e9c.".split(" "),
            Xb: "dimanche lundi mardi mercredi jeudi vendredi samedi".split(" "), Jb: "dimanche lundi mardi mercredi jeudi vendredi samedi".split(" "), Wb: "dim. lun. mar. mer. jeu. ven. sam.".split(" "), Ib: "dim. lun. mar. mer. jeu. ven. sam.".split(" "), jc: ["D", eb, O, O, "J", "V", jb], Gb: ["D", eb, O, O, "J", "V", jb], Vb: ["T1", "T2", "T3", "T4"], Ub: ["1er trimestre", "2e trimestre", "3e trimestre", "4e trimestre"], $b: ["AM", "PM"], oa: ["EEEE d MMMM y", "d MMMM y", "d MMM y", "dd/MM/y"], pa: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
            wb: [Kc, Kc, Kc, Kc], ec: 0, lc: [5, 6], fc: 3};
        function Gd(a) {
            this.Ga = a
        }
        function Hd(a, b, c) {
            t:{
                b = b[ka](M);
                a = a || S;
                for (var d = 0; d < b[G]; d++) {
                    var e = b[d];
                    if (null != a[e])
                        a = a[e];
                    else {
                        b = null;
                        break t
                    }
                }
                b = a
            }
            return null != b && Pc(c) == Mb ? c(b) : b
        }
        R = Gd[H];
        R.f = function(a, b, c) {
            for (var d = null, e = 0; e < this.Ga[G]; e++) {
                t:{
                    var d = this.Ga[e], f = a, m = c;
                    if (typeof f == tc)
                        d = Hd(d, f, m);
                    else {
                        for (var u = 0; u < f[G]; ++u) {
                            var v = Hd(d, f[u], m);
                            if (null != v) {
                                d = v;
                                break t
                            }
                        }
                        d = null
                    }
                }
                if (null != d)
                    return d
            }
            d = b;
            return void 0 !== d ? d : null
        };
        function Id(a) {
            if (null == a)
                return null;
            if (typeof a == yb)
                return a;
            a = t(a);
            return a == Ra || a[va]() == Cc ? !0 : a == N || a[va]() == Ib ? !1 : null
        }
        R.Y = function(a, b) {
            var c = this.ac(a);
            if (null != c)
                return c;
            void 0 !== b || (b = !1);
            return b
        };
        R.ac = function(a) {
            return this.f(a, null, Id)
        };
        function Jd(a) {
            if (null == a)
                return null;
            if (typeof a == Q)
                return a;
            a = t(a);
            var b = p(a);
            a = 0 == b && /^[\s\xa0]*$/[na](a) ? NaN : b;
            return aa(a) ? null : a
        }
        R.Pa = function(a, b) {
            var c = this.ga(a);
            if (null != c)
                return c;
            void 0 !== b || (b = 0);
            return b
        };
        R.ga = function(a) {
            return this.f(a, null, Jd)
        };
        function Kd(a) {
            a = Jd(a);
            return null != a && 0 <= a ? a : null
        }
        R.Oa = function(a, b) {
            var c = this.bc(a);
            if (null != c)
                return c;
            void 0 !== b || (b = 0);
            return b
        };
        R.bc = function(a) {
            return this.f(a, null, Kd)
        };
        function Ld(a) {
            return null != a ? t(a) : null
        }
        R.u = function(a, b) {
            void 0 !== b || (b = K);
            return this.f(a, b, Ld)
        };
        R.Ra = function(a) {
            return this.f(a, null, Ld)
        };
        function Md(a, b) {
            var c = Ld(a);
            return c ? 0 <= $c(b || [], c) ? c : Ed(c) : null
        }
        R.Qa = function(a) {
            return this.f(a, null, Md)
        };
        function Nd(a, b) {
            var c = Ld(b), d;
            t:{
                for (d in a)
                    if (a[d] == c) {
                        d = !0;
                        break t
                    }
                d = !1
            }
            return d ? c : null
        }
        R.fa = function(a, b) {
            return this.f(a, null, Tc(Nd, null, b))
        };
        function Xc() {
            var a = Oc(Rb);
            null != a || (a = Ma);
            var b = Oc(Sb);
            null != b || (b = Sa);
            return a + Na + b
        }
        ;
        function Od(a) {
            this.S = a || {};
            Pd || (Pd = Xc() + Oa)
        }
        var Pd = null, Qd = {red: mc, blue: vb, green: Nb};
        function W(a, b, c) {
            0 < b && c[D](Wa, Pd, a, La, b, ya)
        }
        x(Od[H], function(a, b) {
            if (a[da](b) == Q) {
                var c = this.S, d = c.min, e = c.max, f = null;
                if (null == d || null == e)
                    f = a.getColumnRange(b), null == e && (e = f.max), null == d && (d = l.min(0, f.min));
                d >= e && (f = f || a.getColumnRange(b), e = f.max, d = f.min);
                d == e && (0 == d ? e = 1 : 0 < d ? d = 0 : e = 0);
                var f = e - d, m = c.base || 0, m = l.max(d, l.min(e, m)), u = c.width || 100, v = c.showValue;
                null == v && (v = !0);
                for (var U = l[E]((m - d) / f * u), Ha = u - U, r = 0; r < a[sa](); r++) {
                    var w = a[ra](r, b), A = [], w = l.max(d, l.min(e, w)), oa = l.ceil((w - d) / f * u);
                    A[D](Xa);
                    W(oc, 1, A);
                    var rc = Rd(c.colorPositive, vb), he = Rd(c.colorNegative,
                            mc), ib = c.drawZeroLine ? 1 : 0;
                    0 < U ? w < m ? (W(Fc, oa, A), W(he, U - oa, A), 0 < ib && W(Hc, ib, A), W(Fc, Ha, A)) : (W(Fc, U, A), 0 < ib && W(Hc, ib, A), W(rc, oa - U, A), W(Fc, u - oa, A)) : (W(rc, oa, A), W(Fc, u - oa, A));
                    W(oc, 1, A);
                    w = a.getProperty(r, b, rb);
                    null == w && (w = a.getFormattedValue(r, b), a[la](r, b, rb, w));
                    v && (A[D](Lc), A[D](w));
                    A[D](Va);
                    a[ta](r, b, A[J](K))
                }
            }
        });
        function Rd(a, b) {
            a = (a || K)[va]();
            return Qd[a] || b
        }
        ;
        function Sd(a, b, c, d) {
            Qc(a) && (a = a[fa]());
            Qc(b) && (b = b[fa]());
            Pc(a) == ub && (a = Td(a));
            Pc(b) == ub && (b = Td(b));
            this.wa = a;
            this.Qb = b;
            this.Mb = c;
            this.Rb = d
        }
        Sd[H].contains = function(a) {
            var b = this.wa, c = this.Qb;
            if (null == a)
                return null == b && null == c;
            Qc(a) ? a = a[fa]() : Pc(a) == ub && (a = Td(a));
            return(null == b || a >= b) && (null == c || a < c)
        };
        Sd[H].Ca = function() {
            return this.Rb
        };
        function Ud(a, b, c, d, e) {
            Sd[I](this, a, b, c, K);
            this.P = b - a;
            0 >= this.P && (this.P = 1);
            this.Kb = hd(bd(d).m);
            this.Lb = hd(bd(e).m)
        }
        Vc(Ud, Sd);
        Ud[H].Ca = function(a) {
            var b;
            b = this.Kb;
            var c = this.Lb;
            a = 1 - (a - this.wa) / this.P;
            a = l.min(l.max(a, 0), 1);
            b = [l[E](a * b[0] + (1 - a) * c[0]), l[E](a * b[1] + (1 - a) * c[1]), l[E](a * b[2] + (1 - a) * c[2])];
            return fd(b[0], b[1], b[2])
        };
        function X() {
            this.C = []
        }
        X[H].addRange = function(a, b, c, d) {
            this.C[D](new Sd(a, b, c, d))
        };
        X[H].addGradientRange = function(a, b, c, d, e) {
            this.C[D](new Ud(a, b, c, d, e))
        };
        x(X[H], function(a, b) {
            var c = a[da](b);
            if (c == Q || c == tc || c == Fb || c == Gb || c == Ac)
                for (c = 0; c < a[sa](); c++) {
                    for (var d = a[ra](c, b), e = K, f = 0; f < this.C[G]; f++) {
                        var m = this.C[f];
                        if (m.contains(d)) {
                            f = m.Mb;
                            d = m.Ca(d);
                            f && (e += Db + f + Ua);
                            d && (e += wb + d + Ua);
                            break
                        }
                    }
                    a[la](c, b, uc, e)
                }
        });
        function Td(a) {
            return 36E5 * a[0] + 6E4 * a[1] + 1E3 * a[2] + (4 == a[G] ? a[3] : 0)
        }
        ;
        function Vd() {
        }
        function Wd(a) {
            if (typeof a == Q) {
                var b = new Vd;
                b.xa = a;
                var c;
                c = a;
                if (0 == c)
                    c = $a;
                else {
                    var d = [$a, 0 > c ? L : Ja];
                    c = l.abs(c);
                    d[D](l[z](c / 60) % 100);
                    c %= 60;
                    0 != c && d[D](Ta, T(c, 2));
                    c = d[J](K)
                }
                b.Ba = c;
                0 == a ? a = lb : (c = [lb, 0 > a ? Ja : L], a = l.abs(a), c[D](l[z](a / 60) % 100), a %= 60, 0 != a && c[D](Ta, a), a = c[J](K));
                b.Q = [a, a];
                b.B = [];
                return b
            }
            b = new Vd;
            b.Ba = a.id;
            b.xa = -a.std_offset;
            b.Q = a.names;
            b.B = a.transitions;
            return b
        }
        R = Vd[H];
        R.Ea = function(a) {
            a = Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), a.getUTCHours(), a.getUTCMinutes()) / 36E5;
            for (var b = 0; b < this.B[G] && a >= this.B[b]; )
                b += 2;
            return 0 == b ? 0 : this.B[b - 1]
        };
        R.Nb = function(a) {
            a = this.R(a);
            var b = [bb];
            b[D](0 >= a ? Ja : L);
            a = l.abs(a);
            b[D](T(l[z](a / 60) % 100, 2), Ta, T(a % 60, 2));
            return b[J](K)
        };
        R.Yb = function(a) {
            return this.Q[this.Da(a) ? 3 : 1]
        };
        R.R = function(a) {
            return this.xa - this.Ea(a)
        };
        R.Ob = function(a) {
            a = -this.R(a);
            var b = [0 > a ? L : Ja];
            a = l.abs(a);
            b[D](T(l[z](a / 60) % 100, 2), T(a % 60, 2));
            return b[J](K)
        };
        R.Zb = function(a) {
            return this.Q[this.Da(a) ? 2 : 0]
        };
        R.Da = function(a) {
            return 0 < this.Ea(a)
        };
        function Xd(a) {
            this.A = [];
            typeof a == Q ? this.r(a) : this.c(a)
        }
        var Yd = [/^\'(?:[^\']|\'\')*\'/, /^(?:G+|y+|M+|k+|S+|E+|a+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|z+|Z+)/, /^[^\'GyMkSEahKHcLQdmsvzZ]+/];
        R = Xd[H];
        R.c = function(a) {
            for (; a; )
                for (var b = 0; b < Yd[G]; ++b) {
                    var c = a.match(Yd[b]);
                    if (c) {
                        c = c[0];
                        a = a[ua](c[G]);
                        0 == b && (c == Ea ? c = Da : (c = c[ua](1, c[G] - 1), c = c[y](/\'\'/, Da)));
                        this.A[D]({text: c, type: b});
                        break
                    }
                }
        };
        x(R, function(a, b) {
            var c = b ? 6E4 * (a[wa]() - b.R(a)) : 0, d = c ? new Date(a[fa]() + c) : a, e = d;
            b && d[wa]() != a[wa]() && (e = new Date(a[fa]() + (c + (0 < c ? -864E5 : 864E5))));
            for (var c = [], f = 0; f < this.A[G]; ++f) {
                var m = this.A[f].text;
                1 == this.A[f].type ? c[D](this.Pb(m, a, d, e, b)) : c[D](m)
            }
            return c[J](K)
        });
        R.r = function(a) {
            var b;
            if (4 > a)
                b = V.oa[a];
            else if (8 > a)
                b = V.pa[a - 4];
            else if (12 > a)
                b = V.wb[a - 8], b = b[y](Jc, V.oa[a - 8]), b = b[y](Ic, V.pa[a - 8]);
            else {
                this.r(10);
                return
            }
            this.c(b)
        };
        R.a = function(a) {
            if (void 0 === V.Fa)
                return a;
            for (var b = [], c = 0; c < a[G]; c++) {
                var d = a.charCodeAt(c);
                b[D](48 <= d && 57 >= d ? t[qa](V.Fa + d - 48) : a[B](c))
            }
            return b[J](K)
        };
        R.$a = function(a, b) {
            var c = 0 < b.getFullYear() ? 1 : 0;
            return 4 <= a ? V.Sb[c] : V.Tb[c]
        };
        R.lb = function(a, b) {
            var c = b.getFullYear();
            0 > c && (c = -c);
            return this.a(2 == a ? T(c % 100, 2) : t(c))
        };
        R.cb = function(a, b) {
            var c = b.getMonth();
            switch (a) {
                case 5:
                    return V.Cb[c];
                case 4:
                    return V.Bb[c];
                case 3:
                    return V.Db[c];
                default:
                    return this.a(T(c + 1, a))
                }
        };
        R.Wa = function(a, b) {
            return this.a(T(b[ea]() || 24, a))
        };
        R.ab = function(a, b) {
            return this.a((b[fa]() % 1E3 / 1E3).toFixed(l.min(3, a))[ha](2) + (3 < a ? T(0, a - 3) : K))
        };
        R.Za = function(a, b) {
            var c = b.getDay();
            return 4 <= a ? V.Xb[c] : V.Wb[c]
        };
        R.Xa = function(a, b) {
            var c = b[ea]();
            return V.$b[12 <= c && 24 > c ? 1 : 0]
        };
        R.Va = function(a, b) {
            return this.a(T(b[ea]() % 12 || 12, a))
        };
        R.Ta = function(a, b) {
            return this.a(T(b[ea]() % 12, a))
        };
        R.Ua = function(a, b) {
            return this.a(T(b[ea](), a))
        };
        R.gb = function(a, b) {
            var c = b.getDay();
            switch (a) {
                case 5:
                    return V.Gb[c];
                case 4:
                    return V.Jb[c];
                case 3:
                    return V.Ib[c];
                default:
                    return this.a(T(c, 1))
                }
        };
        R.hb = function(a, b) {
            var c = b.getMonth();
            switch (a) {
                case 5:
                    return V.Fb[c];
                case 4:
                    return V.Eb[c];
                case 3:
                    return V.Hb[c];
                default:
                    return this.a(T(c + 1, a))
                }
        };
        R.eb = function(a, b) {
            var c = l[z](b.getMonth() / 3);
            return 4 > a ? V.Vb[c] : V.Ub[c]
        };
        R.Ya = function(a, b) {
            return this.a(T(b.getDate(), a))
        };
        R.bb = function(a, b) {
            return this.a(T(b.getMinutes(), a))
        };
        R.fb = function(a, b) {
            return this.a(T(b.getSeconds(), a))
        };
        R.jb = function(a, b, c) {
            c = c || Wd(b[wa]());
            return 4 > a ? c.Ob(b) : this.a(c.Nb(b))
        };
        R.kb = function(a, b, c) {
            c = c || Wd(b[wa]());
            return 4 > a ? c.Zb(b) : c.Yb(b)
        };
        R.ib = function(a, b) {
            b = b || Wd(a[wa]());
            return b.Ba
        };
        R.Pb = function(a, b, c, d, e) {
            var f = a[G];
            switch (a[B](0)) {
                case ab:
                    return this.$a(f, c);
                case Gc:
                    return this.lb(f, c);
                case O:
                    return this.cb(f, c);
                case Yb:
                    return this.Wa(f, d);
                case jb:
                    return this.ab(f, d);
                case Za:
                    return this.Za(f, c);
                case sb:
                    return this.Xa(f, d);
                case Ub:
                    return this.Va(f, d);
                case db:
                    return this.Ta(f, d);
                case cb:
                    return this.Ua(f, d);
                case zb:
                    return this.gb(f, c);
                case eb:
                    return this.hb(f, c);
                case hb:
                    return this.eb(f, c);
                case Eb:
                    return this.Ya(f, c);
                case ac:
                    return this.bb(f, d);
                case oc:
                    return this.fb(f, d);
                case Dc:
                    return this.ib(b,
                            e);
                case Hc:
                    return this.kb(f, b, e);
                case mb:
                    return this.jb(f, b, e);
                default:
                    return K
                }
        };
        function Y(a) {
            a = new Gd([a || {}, {formatType: qc, valueType: Gb}]);
            this.e = a.f(kc);
            this.O = null;
            this.nb = a.fa(Jb, Zd);
            this.Sa = a.fa(Ec, $d);
            this.mb = a.Y(Cb, !1);
            this.ea = null;
            a = a.ga(zc);
            null != a && (this.ea = Wd(60 * -a))
        }
        var Zd = {gc: Lb, hc: $b, ic: bc, SHORT: qc}, $d = {cc: Fb, dc: Gb, kc: yc};
        function ae() {
            V.Fa = void 0
        }
        function be(a, b) {
            switch (a) {
                case Fb:
                    switch (b) {
                        case Lb:
                            return 0;
                        case $b:
                            return 1;
                        case bc:
                            return 2;
                        case qc:
                            return 3
                    }
                case Gb:
                    switch (b) {
                        case Lb:
                            return 8;
                        case $b:
                            return 9;
                        case bc:
                            return 10;
                        case qc:
                            return 11
                    }
                case yc:
                    switch (b) {
                        case Lb:
                            return 4;
                        case $b:
                            return 5;
                        case bc:
                            return 6;
                        case qc:
                            return 7
                        }
                }
        }
        x(Y[H], function(a, b) {
            var c = a[da](b);
            if (c == Fb || c == Gb)
                for (var c = this.Aa(c), d = a[sa](), e = 0; e < d; e++) {
                    var f = a[ra](e, b), f = this.v(c, f);
                    a[ta](e, b, f)
                }
        });
        Y[H].formatValue = function(a) {
            this.O || (this.O = this.Aa(this.Sa));
            return this.v(this.O, a)
        };
        Y[H].Aa = function(a) {
            var b = this.e;
            null != b || (b = be(a, this.nb));
            return new Xd(b)
        };
        Y[H].v = function(a, b) {
            if (null === b)
                return K;
            var c = this.ea;
            null == c && (c = Wd(b[wa]()));
            var d = new Date(b[fa]());
            this.mb && d.setMinutes(0);
            return a[C](d, c)
        };
        var ce = {za: {1E3: {other: "0K"}, 1E4: {other: "00K"}, 1E5: {other: "000K"}, 1E6: {other: "0M"}, 1E7: {other: "00M"}, 1E8: {other: "000M"}, 1E9: {other: "0B"}, 1E10: {other: "00B"}, 1E11: {other: "000B"}, 1E12: {other: "0T"}, 1E13: {other: "00T"}, 1E14: {other: "000T"}}, ya: {1E3: {other: "0 thousand"}, 1E4: {other: "00 thousand"}, 1E5: {other: "000 thousand"}, 1E6: {other: "0 million"}, 1E7: {other: "00 million"}, 1E8: {other: "000 million"}, 1E9: {other: "0 billion"}, 1E10: {other: "00 billion"}, 1E11: {other: "000 billion"}, 1E12: {other: "0 trillion"}, 1E13: {other: "00 trillion"},
                1E14: {other: "000 trillion"}}}, ce = {za: {1E3: {other: "0\u00a0K"}, 1E4: {other: "00\u00a0K"}, 1E5: {other: "000\u00a0K"}, 1E6: {other: "0\u00a0M"}, 1E7: {other: "00\u00a0M"}, 1E8: {other: "000\u00a0M"}, 1E9: {other: "0\u00a0Md"}, 1E10: {other: "00\u00a0Md"}, 1E11: {other: "000\u00a0Md"}, 1E12: {other: "0\u00a0Bn"}, 1E13: {other: "00\u00a0Bn"}, 1E14: {other: "000\u00a0Bn"}}, ya: {1E3: {other: "0 mille"}, 1E4: {other: "00 mille"}, 1E5: {other: "000 mille"}, 1E6: {other: "0 millions"}, 1E7: {other: "00 millions"}, 1E8: {other: "000 millions"}, 1E9: {other: "0 milliards"},
                1E10: {other: "00 milliards"}, 1E11: {other: "000 milliards"}, 1E12: {other: "0 billions"}, 1E13: {other: "00 billions"}, 1E14: {other: "000 billions"}}};
        function de(a, b) {
            var c = [N], d = ee[b][0] & 7;
            if (0 < d) {
                c[D](M);
                for (var e = 0; e < d; e++)
                    c[D](N)
            }
            return a[y](/0.00/g, c[J](K))
        }
        var ee = {AED: [2, "dh", "\u062f.\u0625.", "DH"], ALL: [0, "Lek", "Lek"], AUD: [2, "$", "AU$"], BDT: [2, "\u09f3", "Tk"], BGN: [2, "lev", "lev"], BRL: [2, "R$", "R$"], CAD: [2, "$", "C$"], CDF: [2, "FrCD", "CDF"], CHF: [2, "CHF", "CHF"], CLP: [0, "$", "CL$"], CNY: [2, "\u00a5", "RMB\u00a5"], COP: [0, "$", "COL$"], CRC: [0, "\u20a1", "CR\u20a1"], CZK: [50, "K\u010d", "K\u010d"], DKK: [18, "kr", "kr"], DOP: [2, "$", "RD$"], EGP: [2, "\u00a3", "LE"], ETB: [2, "Birr", "Birr"], EUR: [2, "\u20ac", "\u20ac"], GBP: [2, "\u00a3", "GB\u00a3"], HKD: [2, "$", "HK$"], HRK: [2, "kn", "kn"], HUF: [0, "Ft",
                "Ft"], IDR: [0, "Rp", "Rp"], ILS: [2, "\u20aa", "IL\u20aa"], INR: [2, "\u20b9", "Rs"], IRR: [0, "Rial", "IRR"], ISK: [0, "kr", "kr"], JMD: [2, "$", "JA$"], JPY: [0, "\u00a5", "JP\u00a5"], KRW: [0, "\u20a9", "KR\u20a9"], LKR: [2, "Rs", "SLRs"], LTL: [2, "Lt", "Lt"], LVL: [2, "Ls", "Ls"], MNT: [0, "\u20ae", "MN\u20ae"], MXN: [2, "$", "Mex$"], MYR: [2, "RM", "RM"], NOK: [50, "kr", "NOkr"], PAB: [2, "B/.", "B/."], PEN: [2, "S/.", "S/."], PHP: [2, "\u20b1", "Php"], PKR: [0, "Rs", "PKRs."], PLN: [50, "z\u0142", "z\u0142"], RON: [2, "RON", "RON"], RSD: [0, "din", "RSD"], RUB: [50, "\u0440\u0443\u0431.",
                "\u0440\u0443\u0431."], SAR: [2, "Rial", "Rial"], SEK: [2, "kr", "kr"], SGD: [2, "$", "S$"], THB: [2, "\u0e3f", "THB"], TRY: [2, "TL", "YTL"], TWD: [2, "NT$", "NT$"], TZS: [0, "TSh", "TSh"], UAH: [2, "\u20b4", "UAH"], USD: [2, "$", "US$"], UYU: [2, "$", "$U"], VND: [0, "\u20ab", "VN\u20ab"], YER: [0, "Rial", "Rial"], ZAR: [2, "R", "ZAR"]};
        var Z = {DECIMAL_SEP: M, GROUP_SEP: Ka, ua: Ca, K: N, ta: Ja, sa: L, ra: Za, va: Nc, aa: "\u221e", ba: "NaN", DECIMAL_PATTERN: "#,##0.###", la: "#E0", ka: "#,##0%", ja: "\u00a4#,##0.00;(\u00a4#,##0.00)", X: "USD"}, Z = {DECIMAL_SEP: Ka, GROUP_SEP: Lc, ua: Ca, K: N, ta: Ja, sa: L, ra: Za, va: Nc, aa: "\u221e", ba: "NaN", DECIMAL_PATTERN: "#,##0.###", la: "#E0", ka: "#,##0\u00a0%", ja: "#,##0.00\u00a0\u00a4;(#,##0.00\u00a0\u00a4)", X: "EUR"};
        function fe(a, b, c) {
            this.k = b || Z.X;
            this.Ha = c || 0;
            this.s = 40;
            this.b = 1;
            this.h = 0;
            this.g = 3;
            this.q = this.d = 0;
            this.V = this.W = !1;
            this.F = this.D = K;
            this.n = L;
            this.o = K;
            this.j = 1;
            this.H = 3;
            this.p = this.T = !1;
            this.G = 0;
            this.U = null;
            typeof a == Q ? this.r(a) : this.c(a)
        }
        var ge = !1;
        R = fe[H];
        R.zb = function(a) {
            if (a > this.g)
                throw q(gb);
            if (0 < this.h && 0 < a)
                throw q(Ya);
            this.d = a
        };
        R.yb = function(a) {
            if (this.d > a)
                throw q(gb);
            this.g = a
        };
        R.Ab = function(a) {
            if (0 < this.d && 0 <= a)
                throw q(Ya);
            this.h = a
        };
        R.c = function(a) {
            this.e = a[y](/ /g, Lc);
            var b = [0];
            this.D = this.w(a, b);
            var c = b[0];
            this.vb(a, b);
            c = b[0] - c;
            this.F = this.w(a, b);
            b[0] < a[G] && a[B](b[0]) == Ua ? (b[0]++, this.n = this.w(a, b), b[0] += c, this.o = this.w(a, b)) : (this.n = this.D + this.n, this.o += this.F)
        };
        R.r = function(a) {
            switch (a) {
                case 1:
                    this.c(Z.DECIMAL_PATTERN);
                    break;
                case 2:
                    this.c(Z.la);
                    break;
                case 3:
                    this.c(Z.ka);
                    break;
                case 4:
                    this.c(de(Z.ja, this.k));
                    break;
                case 5:
                    this.ma(1);
                    break;
                case 6:
                    this.ma(2);
                    break;
                default:
                    throw q("Unsupported pattern type.");
                }
        };
        R.ma = function(a) {
            this.G = a;
            this.c(Z.DECIMAL_PATTERN);
            this.zb(0);
            this.yb(2);
            this.Ab(2)
        };
        x(R, function(a) {
            if (aa(a))
                return Z.ba;
            var b = [], c = this.Ia(null === this.U ? a : this.U, a);
            a /= l.pow(10, c.I);
            b[D](c.prefix);
            var d = 0 > a || 0 == a && 0 > 1 / a;
            b[D](d ? this.n : this.D);
            if (isFinite(a))
                a = a * (d ? -1 : 1) * this.j, this.p ? this.Ja(a, b) : this.J(a, this.b, b);
            else
                b[D](Z.aa);
            b[D](d ? this.o : this.F);
            b[D](c.Z);
            return b[J](K)
        });
        R.L = function(a) {
            var b = l.pow(10, this.g), c = 0 >= this.h ? l[E](a * b) : l[z](this.xb(a * b, this.h, this.g));
            isFinite(c) ? (a = l[z](c / b), b = l[z](c - a * b)) : b = 0;
            return{$: a, Ma: b}
        };
        R.J = function(a, b, c) {
            a = this.L(a);
            var d = l.pow(10, this.g), e = a.$, f = a.Ma, m = 0 == e ? 0 : this.t(e) + 1, u = 0 < this.d || 0 < f || this.V && m < this.h;
            a = this.d;
            u && (a = this.V && 0 < this.h ? this.h - m : this.d);
            for (var v = K, m = e; 1E20 < m; )
                v = N + v, m = l[E](m / 10);
            var v = m + v, U = Z.DECIMAL_SEP, Ha = Z.GROUP_SEP, m = ge ? 48 : Z.K.charCodeAt(0), r = v[G];
            if (0 < e || 0 < b) {
                for (e = r; e < b; e++)
                    c[D](t[qa](m));
                for (e = 0; e < r; e++)
                    c[D](t[qa](m + 1 * v[B](e))), 1 < r - e && 0 < this.H && 1 == (r - e) % this.H && c[D](Ha)
            } else
                u || c[D](t[qa](m));
            (this.T || u) && c[D](U);
            b = K + (f + d);
            for (d = b[G]; b[B](d - 1) == N && d > a + 1; )
                d--;
            for (e = 1; e < d; e++)
                c[D](t[qa](m + 1 * b[B](e)))
        };
        R.qa = function(a, b) {
            b[D](Z.ra);
            0 > a ? (a = -a, b[D](Z.sa)) : this.W && b[D](Z.ta);
            for (var c = K + a, d = ge ? N : Z.K, e = c[G]; e < this.q; e++)
                b[D](d);
            b[D](c)
        };
        R.Ja = function(a, b) {
            if (0 == a)
                this.J(a, this.b, b), this.qa(0, b);
            else {
                var c;
                c = l.log(a) / l.log(10);
                c = l[z](c + 2E-15);
                a /= l.pow(10, c);
                var d = this.b;
                if (1 < this.s && this.s > this.b) {
                    for (; 0 != c % this.s; )
                        a *= 10, c--;
                    d = 1
                } else
                    1 > this.b ? (c++, a /= 10) : (c -= this.b - 1, a *= l.pow(10, this.b - 1));
                this.J(a, d, b);
                this.qa(c, b)
            }
        };
        R.w = function(a, b) {
            for (var c = K, d = !1, e = a[G]; b[0] < e; b[0]++) {
                var f = a[B](b[0]);
                if (f == Da)
                    b[0] + 1 < e && a[B](b[0] + 1) == Da ? (b[0]++, c += Da) : d = !d;
                else if (d)
                    c += f;
                else
                    switch (f) {
                        case za:
                        case N:
                        case Ka:
                        case M:
                        case Ua:
                            return c;
                        case Mc:
                            if (b[0] + 1 < e && a[B](b[0] + 1) == Mc)
                                b[0]++, c += this.k;
                            else
                                switch (this.Ha) {
                                    case 0:
                                        c += ee[this.k][1];
                                        break;
                                    case 2:
                                        var f = this.k, m = ee[f], c = c + (f == m[1] ? f : f + xa + m[1]);
                                        break;
                                    case 1:
                                        c += ee[this.k][2]
                                }
                            break;
                        case Ca:
                            if (1 != this.j)
                                throw q(kb);
                            this.j = 100;
                            c += Z.ua;
                            break;
                        case Nc:
                            if (1 != this.j)
                                throw q(kb);
                            this.j =
                                    1E3;
                            c += Z.va;
                            break;
                        default:
                            c += f
                        }
            }
            return c
        };
        R.vb = function(a, b) {
            for (var c = -1, d = 0, e = 0, f = 0, m = -1, u = a[G], v = !0; b[0] < u && v; b[0]++)
                switch (a[B](b[0])) {
                    case za:
                        0 < e ? f++ : d++;
                        0 <= m && 0 > c && m++;
                        break;
                    case N:
                        if (0 < f)
                            throw q('Unexpected "0" in pattern "' + a + '"');
                        e++;
                        0 <= m && 0 > c && m++;
                        break;
                    case Ka:
                        m = 0;
                        break;
                    case M:
                        if (0 <= c)
                            throw q('Multiple decimal separators in pattern "' + a + '"');
                        c = d + e + f;
                        break;
                    case Za:
                        if (this.p)
                            throw q('Multiple exponential symbols in pattern "' + a + '"');
                        this.p = !0;
                        this.q = 0;
                        b[0] + 1 < u && a[B](b[0] + 1) == Ja && (b[0]++, this.W = !0);
                        for (; b[0] + 1 < u && a[B](b[0] + 1) == N; )
                            b[0]++,
                                    this.q++;
                        if (1 > d + e || 1 > this.q)
                            throw q('Malformed exponential pattern "' + a + '"');
                        v = !1;
                        break;
                    default:
                        b[0]--, v = !1
                }
            0 == e && 0 < d && 0 <= c && (e = c, 0 == e && e++, f = d - e, d = e - 1, e = 1);
            if (0 > c && 0 < f || 0 <= c && (c < d || c > d + e) || 0 == m)
                throw q('Malformed pattern "' + a + '"');
            f = d + e + f;
            this.g = 0 <= c ? f - c : 0;
            0 <= c && (this.d = d + e - c, 0 > this.d && (this.d = 0));
            this.b = (0 <= c ? c : f) - d;
            this.p && (this.s = d + this.b, 0 == this.g && 0 == this.b && (this.b = 1));
            this.H = l.max(0, m);
            this.T = 0 == c || c == f
        };
        var ie = {prefix: K, Z: K, I: 0};
        fe[H].na = function(a, b) {
            var c = 1 == this.G ? ce.za : ce.ya;
            if (3 > a)
                return ie;
            a = l.min(14, a);
            c = c[l.pow(10, a)];
            if (!c)
                return ie;
            c = c[b];
            return c && c != N ? (c = /([^0]*)(0+)(.*)/[ca](c)) ? {prefix: c[1], Z: c[3], I: a - (c[2][G] - 1)} : ie : ie
        };
        fe[H].Ia = function(a, b) {
            if (0 == this.G)
                return ie;
            a = l.abs(a);
            b = l.abs(b);
            var c = this.na(1 >= a ? 0 : this.t(a), jc).I;
            this.L(b / l.pow(10, c));
            var d = this.L(a / l.pow(10, c));
            return this.na(c + this.t(d.$), jc)
        };
        fe[H].t = function(a) {
            for (var b = 0; 1 <= (a /= 10); )
                b++;
            return b
        };
        fe[H].xb = function(a, b, c) {
            if (!a)
                return a;
            b = b - this.t(a) - 1;
            if (b < -c)
                return c = l.pow(10, c), l[E](a / c) * c;
            c = l.pow(10, b);
            return l[E](a * c) / c
        };
        function $(a) {
            a = new Gd([a || {}, {decimalSymbol: je, groupingSymbol: ke, fractionDigits: 2, negativeParens: !1, prefix: K, suffix: K, scaleFactor: 1}]);
            this.l = a.Oa(Kb);
            this.Na = a.u(Hb);
            this.M = a.u(Tb);
            this.Ka = a.u(lc);
            this.La = a.u(wc);
            this.N = a.Qa(ec);
            this.ca = a.Y(fc);
            this.e = a.Ra(kc);
            this.da = a.Pa(pc);
            if (0 >= this.da)
                throw q("Scale factor must be a positive number.");
        }
        var je = Z.DECIMAL_SEP, ke = Z.GROUP_SEP, le = Z.DECIMAL_PATTERN;
        x($[H], function(a, b) {
            if (a[da](b) == Q)
                for (var c = 0; c < a[sa](); c++) {
                    var d = a[ra](c, b);
                    if (null != d) {
                        var e = this.formatValue(d);
                        a[ta](c, b, e);
                        !/^[\s\xa0]*$/[na](null == this.N ? K : t(this.N)) && 0 > d && a[la](c, b, uc, Db + this.N + Ua)
                    }
                }
        });
        $[H].formatValue = function(a) {
            var b = null, b = a / this.da;
            null === this.e ? (this.ca && (b = l.abs(b)), b = this.v(b), b = this.Ka + b + this.La, this.ca && 0 > a && (b = Fa + b + Ia)) : b = (new fe(this.e))[C](b);
            return b
        };
        $[H].v = function(a) {
            0 == this.l && (a = l[E](a));
            var b = [];
            0 > a && (a = -a, b[D](L));
            var c = l.pow(10, this.l), d = l[E](a * c);
            a = t(l[z](d / c));
            c = t(d % c);
            if (3 < a[G] && this.M)
                for (d = a[G] % 3, 0 < d && (b[D](a[ua](0, d), this.M), a = a[ua](d)); 3 < a[G]; )
                    b[D](a[ua](0, 3), this.M), a = a[ua](3);
            b[D](a);
            0 < this.l && (b[D](this.Na), c[G] < this.l && (c = Qa + c), b[D](c[ua](c[G] - this.l)));
            return b[J](K)
        };
        function me(a) {
            this.e = a || K
        }
        function ne(a, b, c, d, e, f, m) {
            return 0 < f && m[f - 1] == qb ? d : b.getFormattedValue(a, c[s(e, 10)])
        }
        x(me[H], function(a, b, c, d) {
            var e = b[0];
            null != c && Pc(c) == Q && (e = c);
            c = d || null;
            for (d = 0; d < a[sa](); d++) {
                var f = this.e[y](/{(\d+)}/g, Uc(ne, d, a, b)), f = f[y](/\\(.)/g, Ba);
                c ? a[la](d, e, c, f) : a[ta](d, e, f)
            }
        });
        g("google.visualization.NumberFormat", $);
        k($[H], P, $[H][C]);
        k($[H], "formatValue", $[H].formatValue);
        g("google.visualization.NumberFormat.useNativeCharactersIfAvailable", function(a) {
            ge = !a
        });
        g("google.visualization.NumberFormat.DECIMAL_SEP", je);
        g("google.visualization.NumberFormat.GROUP_SEP", ke);
        g("google.visualization.NumberFormat.DECIMAL_PATTERN", le);
        g("google.visualization.ColorFormat", X);
        k(X[H], P, X[H][C]);
        k(X[H], "addRange", X[H].addRange);
        k(X[H], tb, X[H].addGradientRange);
        g("google.visualization.BarFormat", Od);
        k(Od[H], P, Od[H][C]);
        g("google.visualization.ArrowFormat", Wc);
        k(Wc[H], P, Wc[H][C]);
        g("google.visualization.PatternFormat", me);
        k(me[H], P, me[H][C]);
        g("google.visualization.DateFormat", Y);
        k(ae, "dontLocalizeDigits", ae);
        k(Y[H], P, Y[H][C]);
        k(Y[H], "formatValue", Y[H].formatValue);
        g("google.visualization.TableNumberFormat", $);
        k($[H], P, $[H][C]);
        g("google.visualization.TableColorFormat", X);
        k(X[H], P, X[H][C]);
        k(X[H], "addRange", X[H].addRange);
        k(X[H], tb, X[H].addGradientRange);
        g("google.visualization.TableBarFormat", Od);
        k(Od[H], P, Od[H][C]);
        g("google.visualization.TableArrowFormat", Wc);
        k(Wc[H], P, Wc[H][C]);
        g("google.visualization.TablePatternFormat", me);
        k(me[H], P, me[H][C]);
        g("google.visualization.TableDateFormat", Y);
        k(Y[H], P, Y[H][C]);
    })();



    (function() {
        if (window["__gvizguard__"])
            return;
        var aa = encodeURIComponent, e = google_exportSymbol, ca = window, da = Object, ea = Infinity, fa = document, ga = isNaN, g = google_exportProperty, l = Math, ha = Array, ia = Number, m = Error, ja = parseInt, la = parseFloat, ma = String, na = isFinite, oa = decodeURIComponent, pa = RegExp;
        function qa(a, b) {
            return a.width = b
        }
        function ra(a, b) {
            return a.floor = b
        }
        function sa(a, b) {
            return a.screenX = b
        }
        function ta(a, b) {
            return a.screenY = b
        }
        function ua(a, b) {
            return a.keyCode = b
        }
        function va(a, b) {
            return a.depth = b
        }
        function wa(a, b) {
            return a.altKey = b
        }
        function xa(a, b) {
            return a.next = b
        }
        function ya(a, b) {
            return a.clone = b
        }
        function Aa(a, b) {
            return a.bottom = b
        }
        function Ba(a, b) {
            return a.getContainer = b
        }
        function Ca(a, b) {
            return a.display = b
        }
        function Da(a, b) {
            return a.height = b
        }
        function Fa(a, b) {
            return a.right = b
        }
        function Ga(a, b) {
            return a.round = b
        }
        function Ia(a, b) {
            return a.innerHTML = b
        }
        function Ja(a, b) {
            return a.currentTarget = b
        }
        function Ka(a, b) {
            return a.left = b
        }
        function La(a, b) {
            return a.type = b
        }
        function Ma(a, b) {
            return a.setContent = b
        }
        function Na(a, b) {
            return a.getValue = b
        }
        function Oa(a, b) {
            return a.clientX = b
        }
        function Pa(a, b) {
            return a.clientY = b
        }
        function Qa(a, b) {
            return a.visibility = b
        }
        function Ra(a, b) {
            return a.setState = b
        }
        function Sa(a, b) {
            return a.length = b
        }
        function Ta(a, b) {
            return a.setValue = b
        }
        function Ua(a, b) {
            return a.className = b
        }
        function Va(a, b) {
            return a.visualization = b
        }
        function Wa(a, b) {
            return a.target = b
        }
        var Xa = "appendChild", Ya = "getBoundingClientRect", Za = "getParent", $a = "relatedTarget", ab = "clearTimeout", p = "width", bb = "collapse", q = "replace", cb = "floor", db = "offsetWidth", eb = "concat", fb = "charAt", gb = "createTextNode", hb = "getDataTable", ib = "preventDefault", jb = "insertBefore", kb = "setEnd", r = "dispatchEvent", lb = "screenX", mb = "screenY", nb = "match", pb = "getBoxObjectFor", qb = "send", rb = "getName", sb = "charCode", tb = "remove", ub = "focus", vb = "createElement", wb = "scrollHeight", xb = "keyCode", yb = "getColumnType", zb = "firstChild", Ab = "forEach",
                Bb = "clientLeft", Cb = "setAttribute", Db = "clientTop", Eb = "handleEvent", Fb = "getTableProperties", Gb = "depth", Hb = "childNodes", Jb = "setCell", Kb = "bind", Lb = "source", Mb = "nextSibling", Nb = "getElementsByTagName", Ob = "documentElement", Pb = "toString", Qb = "altKey", Rb = "getView", Sb = "propertyIsEnumerable", Tb = "addError", Ub = "sourceIndex", Vb = "toJSON", Wb = "setTimeout", Xb = "setDataSourceUrl", Yb = "split", Zb = "getColumnProperty", ac = "offsetParent", bc = "constructor", cc = "stopPropagation", dc = "getColumnPattern", ec = "location", fc = "clearChart",
                hc = "message", ic = "hasOwnProperty", s = "style", jc = "getColumnId", kc = "clone", lc = "lastChild", mc = "getOption", nc = "isEnabled", oc = "setDataTable", pc = "scrollWidth", qc = "random", rc = "getFullYear", sc = "getState", tc = "scrollLeft", uc = "getContainerId", vc = "bottom", wc = "href", xc = "rows", yc = "apply", zc = "tagName", Ac = "getContainer", Bc = "errors", Cc = "removeAttribute", Dc = "label", Ec = "offsetTop", t = "height", Fc = "setColumns", Gc = "execScript", Hc = "right", v = "push", Ic = "isCollapsed", Jc = "open", Kc = "test", Lc = "round", Mc = "slice", Nc = "nodeType", Oc =
                "events", Pc = "getElementById", Qc = "getOptions", Rc = "RequestParameters", w = "getNumberOfColumns", Sc = "value", x = "indexOf", Tc = "metaKey", Uc = "compareDocumentPosition", Vc = "capture", Wc = "getColumnProperties", Xc = "nodeName", Yc = "createRange", y = "left", Zc = "toPOJO", $c = "isError", ad = "getColumnLabel", bd = "toDataTable", cd = "getSortedRows", dd = "getTableRowIndex", ed = "play", fd = "getRowProperties", gd = "setRefreshInterval", z = "type", hd = "defaultView", id = "setContent", jd = "name", A = "getValue", kd = "addRows", ld = "setActive", md = "clientX", nd =
                "clientY", od = "setState", pd = "scrollTop", qd = "stop", rd = "getMonth", sd = "setStart", td = "getNumberOfRows", B = "length", ud = "getProperties", E = "prototype", vd = "setValue", wd = "clientWidth", xd = "abort", yd = "document", zd = "ctrlKey", F = "visualization", Ad = "disabled", Bd = "offsetLeft", Cd = "setView", Dd = "setQuery", Ed = "body", Fd = "removeChild", Gd = "getDataSourceUrl", Hd = "target", G = "call", Id = "removeAll", Jd = "lastIndexOf", Kd = "draw", Ld = "DataView", Md = "getRefreshInterval", Nd = "clientHeight", Od = "charCodeAt", Pd = "getPackages", Qd = "currentStyle",
                Rd = "substring", Sd = "getQuery", Td = "isDefaultVisualization", Ud = "shiftKey", Vd = "addColumn", Wd = "element", Xd = "getFormattedValue", H = "parentNode", Yd = "splice", Zd = "join", $d = "toLowerCase", ae = "setOption", I = "", be = "\n", ce = "\n\x3c/script>", de = " ", ee = " [", fe = " does not match type ", ge = ' name="', he = ' type="', ie = '"', je = '" />', ke = '" src="http://www.google.com/ig/ifr?url=', le = '""', me = '">\n', ne = "#", oe = "#$1$1$2$2$3$3", pe = "%", qe = "%22", re = "%27", se = "&", te = "&amp;", ue = "&gt;", ve = "&lt;", we = "&quot;", xe = "&requireauth=1&", ye = "&up_",
                ze = "&up__table_query_url=", Ae = "').send(\n     function(response) {\n      new ", Be = "']});\n\n   function drawVisualization() {\n    new google.visualization.Query('", Ce = "(", De = '(\n       document.getElementById(\'visualization\')).\n        draw(response.getDataTable(), null);\n      });\n   }\n\n   google.setOnLoadCallback(drawVisualization);\n  \x3c/script>\n </head>\n <body>\n  <div id="visualization" style="width: 500px; height: 500px;"></div>\n </body>\n</html>', Ee = "(\\d*)(\\D*)", Fe = ")", Ge = "*",
                He = ",", Ie = ", ", Je = "-active", Ke = "-bg", Le = "-buttons", Me = "-caption", Ne = "-checkbox", Oe = "-checked", Pe = "-content", Qe = "-default", Re = "-disabled", Se = "-dropdown", Te = "-focused", Ue = "-highlight", Ve = "-horizontal", We = "-hover", Xe = "-inner-box", Ye = "-moz-transform", Ze = "-ms-transform", $e = "-o-transform", af = "-open", bf = "-outer-box", cf = "-rtl", df = "-selected", ef = "-title", ff = "-title-close", gf = "-title-draggable", hf = "-title-text", jf = "-vertical", kf = "-webkit-transform", mf = ".", nf = "..", of = "./", pf = ".format", qf = "/", rf = "/.", sf = "//",
                tf = "//ajax.googleapis.com/ajax", uf = "/chart.html", vf = "/chart.js", wf = "/gviz/tq", xf = "/static/modules/gviz/", yf = "/tq", zf = "/util/toolbar.css", Af = "0", Bf = "0.5", Cf = "0.6", Df = "00", Ef = "000", Ff = "1", Gf = "1.0", Hf = "1.9", If = "10", Jf = "525", Kf = "528", Lf = "533.17.9", Mf = "7", Nf = "8", Of = ":", Pf = ";", Qf = ";sig:", Rf = ";type:", Sf = "<", Tf = '<html>\n <head>\n  <title>Google Visualization API</title>\n  <script type="text/javascript" src="http://www.google.com/jsapi">\x3c/script>\n  <script type="text/javascript">\n   google.load(\'visualization\', \'1\', {packages: [\'',
                Uf = '<iframe style="', Vf = '<script type="text/javascript" src="', Wf = "=", Xf = ">", Yf = "?", Zf = "@", $f = "A", ag = "APPLET", bg = "AREA", cg = "Add to iGoogle", dg = "BASE", eg = "BODY", fg = "BR", gg = "BUTTON", hg = "BarChart", ig = "BubbleChart", jg = "COL", kg = "COMMAND", lg = "CSS1Compat", mg = "Chart options", ng = "Component already rendered", og = "Content-Type", pg = "Copy-Paste this code to an HTML page", qg = "Dashboard", rg = "Date(", sg = "EMBED", tg = "End", ug = "EndToEnd", vg = "Export data as CSV", wg = "Export data as HTML", xg = "FRAME", yg = "GET", zg = "Google Visualization",
                Ag = "Google_Visualization", Bg = "HR", Cg = "HTML", Dg = "IFRAME", Eg = "IMG", Fg = "INPUT", Gg = "ISINDEX", Hg = "Invalid DataView column type.", Ig = "JavaScript", Jg = "Javascript code", Kg = "KEYGEN", Lg = "LINK", Mg = "META", Ng = "MSXML2.XMLHTTP", Og = "MSXML2.XMLHTTP.3.0", Pg = "MSXML2.XMLHTTP.6.0", Qg = "Microsoft.XMLHTTP", Rg = "MozOpacity", Sg = "NOFRAMES", Tg = "NOSCRIPT", Ug = "Name", Vg = "Not a valid 2D array.", Wg = "OBJECT", Xg = "PARAM", Yg = "POST", Zg = "Publish to web page", $g = "Q", ah = "Request timed out", bh = "SCRIPT", ch = "SELECT", dh = "SOURCE", eh = "STYLE", fh =
                "ScatterChart", gh = "Start", hh = "StartToEnd", ih = "StartToStart", jh = "Style", kh = "TEXTAREA", lh = "TR", mh = "TRACK", nh = "Timed out after ", oh = "To", ph = "Type", qh = "Type mismatch. Value ", rh = "Unable to set parent component", sh = "W", th = "WBR", uh = "Width", vh = "[", wh = "[object Array]", xh = "[object Function]", yh = "[object Window]", zh = "\\\\", Ah = "\\c", Bh = "\\s", Ch = "\\u", Dh = "]", Eh = "_", Fh = "_table_query_refresh_interval", Gh = "_table_query_url", Hh = "abort", Ih = "absolute", Jh = "action", Kh = "activate", Lh = "activedescendant", Mh = "addTrendLine",
                Nh = "additions text", Oh = "afterhide", Ph = "aftershow", Qh = "alpha(opacity=", Rh = "application/x-www-form-urlencoded;charset=utf-8", Sh = "aria-", Th = "aria-activedescendant", Uh = "aria-hidden", Vh = "array", Wh = "auto", Xh = "beforedrag", Yh = "beforehide", Zh = "beforeshow", $h = "block", ai = "blur", bi = "body", ci = "boolean", di = "border-box", ei = "border:0;vertical-align:bottom;", fi = "borderBottom", gi = "borderBottomWidth", hi = "borderLeft", ii = "borderLeftWidth", ji = "borderRight", ki = "borderRightWidth", li = "borderTop", mi = "borderTopWidth", ni = "br",
                oi = "button", pi = "call", qi = "callee", ri = "change", si = "character", ti = "chart", ui = "check", vi = "checked", wi = "class", xi = "click", yi = "close", zi = "column", Ai = "columnFilters[", Bi = "compare", Ci = "complete", Di = "content-type", Ei = "contextmenu", Fi = "control", Gi = "controls", Hi = "corechart", Ii = "csv", Ji = "dashboard", Ki = "data-", Li = "date", Mi = "datetime", Ni = "dblclick", Oi = "deactivate", Pi = "desc", Qi = "detailed_message", Ri = "dialogselect", Si = "direction", Ti = "disable", Ui = "disabled", Vi = "display", Wi = "display: none; padding-top: 2px", Xi = "div",
                Yi = "domainAxis", Zi = "drag", $i = "dragstart", aj = "draw", bj = "earlycancel", cj = "emptyString", dj = "enable", ej = "end", fj = "enter", gj = "error", hj = "expanded", ij = "false", jj = "filter", kj = "fixed", lj = "focus", mj = "focusin", nj = "focusout", oj = "for", pj = "full", qj = "function", rj = "g", sj = "gadgets.io.makeRequest", tj = "gadgets.io.makeRequest failed", uj = "getColumnIndex", vj = "getColumnLabel", wj = "getColumnPattern", xj = "getColumnProperties", yj = "getColumnProperty", zj = "getColumnRange", Aj = "getContainerId", Bj = "getDataSourceUrl", Cj = "getDataTable",
                Dj = "getDistinctValues", Ej = "getFilteredRows", Fj = "getFormattedValue", Gj = "getNumberOfColumns", Hj = "getNumberOfRows", Ij = "getPackages", Jj = "getQuery", Kj = "getRefreshInterval", Lj = "getRowProperties", Mj = "getRowProperty", Nj = "getSnapshot", Oj = "getTableProperties", Pj = "getTableProperty", Qj = "goog-button", Rj = "goog-container", Sj = "goog-control", Tj = "goog-custom-button", Uj = "goog-inline-block ", Vj = "goog-menu", Wj = "goog-menu-button", Xj = "goog-menuheader", Yj = "goog-menuitem", Zj = "goog-menuitem-accel", ak = "goog-menuitem-mnemonic-separator",
                bk = "goog-menuseparator", ck = "goog-modalpopup", dk = "goog-option", ek = "goog-option-selected", fk = "google-visualization-toolbar-big-dialog", gk = "google-visualization-toolbar-export-data", hk = "google-visualization-toolbar-export-igoogle", ik = "google-visualization-toolbar-html-code", jk = "google-visualization-toolbar-html-code-explanation", kk = "google-visualization-toolbar-small-dialog", lk = "google-visualization-toolbar-triangle", mk = "google.loader.GoogleApisBase", nk = "google.visualization.", ok = "google.visualization.Query",
                pk = "google.visualization.Version", qk = "hasLabelsColumn", rk = "haspopup", sk = "head", tk = "hex", uk = "hidden", vk = "hide", wk = "highlight", xk = "horizontal", yk = "html", zk = "htmlcode", Ak = "http", Bk = "http%", Ck = "http://dummy.com", Dk = "http://www.google.com/ig/adde?moduleurl=", Ek = "https", Fk = "https%", Gk = "identity", Hk = "iframe", Ik = "igoogle", Jk = "img", Kk = "inline", Lk = "innerText", Mk = "input", Nk = "invalid_query", Ok = 'javascript:""', Pk = "jscode", Qk = "json", Rk = "key", Sk = "keydown", Tk = "keypress", Uk = "keyup", Vk = "labelledby", Wk = "leave", Yk = "left",
                Zk = "link", $k = "losecapture", al = "makeRequest", bl = "make_request_failed", cl = "maxValue", dl = "medium", el = "menu", fl = "menuitem", gl = "message", hl = "minValue", il = "modal-dialog", jl = "modifier", kl = "mousedown", ll = "mousemove", ml = "mouseout", nl = "mouseover", ol = "mouseup", pl = "ms, aborting", ql = "named", rl = "native code", sl = "new ", tl = "nodeType", ul = "none", vl = "not_modified", wl = "null", J = "number", xl = "o", yl = "object", zl = "off", Al = "on", Bl = "opacity", Cl = "open", Dl = "option", El = "options", Fl = "out:csv;", Gl = "out:html;", Hl = "outerHTML", Il = "overflow",
                Jl = "overflowX", Kl = "package", Ll = "padding: 2px", Ml = "paddingBottom", Nl = "paddingLeft", Ol = "paddingRight", Pl = "paddingTop", Ql = "percent", Rl = "pixelLeft", Sl = "position", Tl = "position:fixed;width:0;height:0;left:0;top:0;", Ul = "pre", Vl = "pressed", Wl = "pub", Xl = "px", Yl = "range", Zl = "ready", $l = "readystatechange", am = "reason", bm = "refresh", cm = "relative", dm = "reqId:", em = "resize", fm = "rgb", gm = "right", hm = "role", im = "rtl", jm = "script", km = "scroll", lm = "select", mm = "selected", nm = "separator", om = "series.1.lineWidth", pm = "series.1.pointSize",
                qm = "series.1.visibleInLegend", rm = "setContainerId", sm = "setDataSourceUrl", tm = "setDataTable", um = "setOptions", vm = "setPackages", wm = "setQuery", xm = "setRefreshInterval", ym = "show", zm = "sig:", Am = "solid", Bm = "sortColumns", Cm = "sortColumns[", Dm = "sourceIndex", Em = "span", Fm = "splice", Gm = "start", Hm = "statechange", Im = "static", L = "string", Jm = "stringify", Km = "style", Lm = "stylesheet", Mm = "success", Nm = "tabIndex", Om = "tabindex", Pm = "targetAxes.0", Qm = "targetAxes.1", Rm = "targetAxis", Sm = "text", Tm = "text/css", Um = "text/javascript", Vm = "textContent",
                Wm = "tick", Xm = "timeofday", Ym = "timeout", Zm = "toJSON", $m = "touchcancel", an = "touchend", bn = "touchmove", cn = "touchstart", dn = "tqrt", en = "tqx", fn = "transform", gn = "transparent", hn = "true", jn = "type", kn = "uncheck", ln = "unhighlight", mn = "unselect", nn = "unselectable", on = "user_not_authenticated", pn = "vAxis", qn = "value", rn = "var ", sn = "var _et_ = 1;", tn = "vertical", un = "visible", vn = "visualization", wn = "warning", xn = "width: 700px; height: 500px;", yn = "window.event", zn = "withCredentials", An = "xhr", Bn = "xhrpost", Cn = "zx", Dn = "{", En = "}", Fn =
                "\u00a0", Gn = "\u00d7", Hn = "\u25bc", M, In = In || {}, N = this;
        function Jn(a, b) {
            for (var c = a[Yb](mf), d = b || N, f; f = c.shift(); )
                if (null != d[f])
                    d = d[f];
                else
                    return null;
            return d
        }
        function Kn() {
        }
        function Ln(a) {
            a.ya = function() {
                return a.Zh ? a.Zh : a.Zh = new a
            }
        }
        function Mn(a) {
            var b = typeof a;
            if (b == yl)
                if (a) {
                    if (a instanceof ha)
                        return Vh;
                    if (a instanceof da)
                        return b;
                    var c = da[E][Pb][G](a);
                    if (c == yh)
                        return yl;
                    if (c == wh || typeof a[B] == J && "undefined" != typeof a[Yd] && "undefined" != typeof a[Sb] && !a[Sb](Fm))
                        return Vh;
                    if (c == xh || "undefined" != typeof a[G] && "undefined" != typeof a[Sb] && !a[Sb](pi))
                        return qj
                } else
                    return wl;
            else if (b == qj && "undefined" == typeof a[G])
                return yl;
            return b
        }
        function Nn(a) {
            return void 0 !== a
        }
        function O(a) {
            return Mn(a) == Vh
        }
        function On(a) {
            var b = Mn(a);
            return b == Vh || b == yl && typeof a[B] == J
        }
        function Pn(a) {
            return Qn(a) && typeof a[rc] == qj
        }
        function P(a) {
            return typeof a == L
        }
        function Rn(a) {
            return typeof a == ci
        }
        function Sn(a) {
            return typeof a == J
        }
        function R(a) {
            return Mn(a) == qj
        }
        function Qn(a) {
            var b = typeof a;
            return b == yl && null != a || b == qj
        }
        function Tn(a) {
            return a[Un] || (a[Un] = ++Vn)
        }
        var Un = "closure_uid_" + (1E9 * l[qc]() >>> 0), Vn = 0;
        function Wn(a, b, c) {
            return a[G][yc](a[Kb], arguments)
        }
        function Xn(a, b, c) {
            if (!a)
                throw m();
            if (2 < arguments[B]) {
                var d = ha[E][Mc][G](arguments, 2);
                return function() {
                    var c = ha[E][Mc][G](arguments);
                    ha[E].unshift[yc](c, d);
                    return a[yc](b, c)
                }
            }
            return function() {
                return a[yc](b, arguments)
            }
        }
        function Yn(a, b, c) {
            Yn = Function[E][Kb] && -1 != Function[E][Kb][Pb]()[x](rl) ? Wn : Xn;
            return Yn[yc](null, arguments)
        }
        function Zn(a, b) {
            var c = ha[E][Mc][G](arguments, 1);
            return function() {
                var b = c[Mc]();
                b[v][yc](b, arguments);
                return a[yc](this, b)
            }
        }
        var $n = Date.now || function() {
            return+new Date
        };
        function ao(a) {
            if (N[Gc])
                N[Gc](a, Ig);
            else if (N.eval)
                if (null == bo && (N.eval(sn), "undefined" != typeof N._et_ ? (delete N._et_, bo = !0) : bo = !1), bo)
                    N.eval(a);
                else {
                    var b = N[yd], c = b[vb](jm);
                    La(c, Um);
                    c.defer = !1;
                    c[Xa](b[gb](a));
                    b[Ed][Xa](c);
                    b[Ed][Fd](c)
                }
            else
                throw m("goog.globalEval not available");
        }
        var bo = null;
        function S(a, b) {
            function c() {
            }
            c.prototype = b[E];
            a.b = b[E];
            a.prototype = new c;
            a[E].constructor = a
        }
        ;
        function co(a) {
            var b;
            if (0 == fa[Nb](sk)[B]) {
                b = fa[Nb](yk)[0];
                var c = fa[Nb](bi)[0], d = fa[vb](sk);
                b[jb](d, c)
            }
            b = fa[Nb](sk)[0];
            c = fa[vb](jm);
            La(c, Um);
            c.src = a;
            b[Xa](c)
        }
        function eo(a) {
            return function(b) {
                google[F][Bc][Id](a);
                var c = b[$c]();
                c && google[F][Bc].addErrorFromQueryResponse(a, b);
                return!c
            }
        }
        ;
        function fo(a) {
            a = ma(a);
            if (/^\s*$/[Kc](a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/[Kc](a[q](/\\["\\\/bfnrtu]/g, Zf)[q](/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, Dh)[q](/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, I)))
                try {
                    return eval(Ce + a + Fe)
                } catch (b) {
                }
            throw m("Invalid JSON string: " + a);
        }
        function go(a) {
            this.re = a
        }
        go[E].ti = function(a) {
            var b = [];
            this.Tf(a, b);
            return b[Zd](I)
        };
        go[E].Tf = function(a, b) {
            switch (typeof a) {
                case L:
                    this.Vh(a, b);
                    break;
                case J:
                    this.tl(a, b);
                    break;
                case ci:
                    b[v](a);
                    break;
                case "undefined":
                    b[v](wl);
                    break;
                case yl:
                    if (null == a) {
                        b[v](wl);
                        break
                    }
                    if (O(a)) {
                        this.sl(a, b);
                        break
                    }
                    this.ul(a, b);
                    break;
                case qj:
                    break;
                default:
                    throw m("Unknown type: " + typeof a);
                }
        };
        var ho = {'"': '\\"', "\\": zh, "/": "\\/", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\x0B": "\\u000b"}, io = /\uffff/[Kc]("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
        go[E].Vh = function(a, b) {
            b[v](ie, a[q](io, function(a) {
                if (a in ho)
                    return ho[a];
                var b = a[Od](0), f = Ch;
                16 > b ? f += Ef : 256 > b ? f += Df : 4096 > b && (f += Af);
                return ho[a] = f + b[Pb](16)
            }), ie)
        };
        go[E].tl = function(a, b) {
            b[v](na(a) && !ga(a) ? a : wl)
        };
        go[E].sl = function(a, b) {
            var c = a[B];
            b[v](vh);
            for (var d = I, f = 0; f < c; f++)
                b[v](d), d = a[f], this.Tf(this.re ? this.re[G](a, ma(f), d) : d, b), d = He;
            b[v](Dh)
        };
        go[E].ul = function(a, b) {
            b[v](Dn);
            var c = I, d;
            for (d in a)
                if (da[E][ic][G](a, d)) {
                    var f = a[d];
                    typeof f != qj && (b[v](c), this.Vh(d, b), b[v](Of), this.Tf(this.re ? this.re[G](a, d, f) : f, b), c = He)
                }
            b[v](En)
        };
        function jo(a) {
            a = ko(a, lo);
            return(new go(void 0)).ti(a)
        }
        function mo(a) {
            fo(a);
            return no(a)
        }
        function no(a) {
            a = oo(a);
            return eval(Ce + a + Fe)
        }
        function ko(a, b) {
            a = b(a);
            var c = Mn(a);
            if (c == yl || c == Vh) {
                var c = c == Vh ? [] : {}, d;
                for (d in a)
                    if (a[ic](d)) {
                        var f = ko(a[d], b);
                        Nn(f) && (c[d] = f)
                    }
            } else
                c = a;
            return c
        }
        function oo(a) {
            return a[q](/"(Date\([\d,\s]*\))"/g, function(a, c) {
                return sl + c
            })
        }
        function lo(a) {
            Pn(a) && (a = 0 !== a.getMilliseconds() ? [a[rc](), a[rd](), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds(), a.getMilliseconds()] : 0 !== a.getSeconds() || 0 !== a.getMinutes() || 0 !== a.getHours() ? [a[rc](), a[rd](), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()] : [a[rc](), a[rd](), a.getDate()], a = rg + a[Zd](Ie) + Fe);
            return a
        }
        ;
        function po(a) {
            return/^[\s\xa0]*$/[Kc](a)
        }
        function qo(a) {
            return a[q](/[\t\r\n ]+/g, de)[q](/^[\t\r\n ]+|[\t\r\n ]+$/g, I)
        }
        function ro(a) {
            return a[q](/^[\s\xa0]+|[\s\xa0]+$/g, I)
        }
        function so(a, b) {
            if (b)
                return a[q](to, te)[q](uo, ve)[q](vo, ue)[q](wo, we);
            if (!xo[Kc](a))
                return a;
            -1 != a[x](se) && (a = a[q](to, te));
            -1 != a[x](Sf) && (a = a[q](uo, ve));
            -1 != a[x](Xf) && (a = a[q](vo, ue));
            -1 != a[x](ie) && (a = a[q](wo, we));
            return a
        }
        var to = /&/g, uo = /</g, vo = />/g, wo = /\"/g, xo = /[&<>\"]/;
        function yo(a) {
            return null == a ? I : ma(a)
        }
        ;
        var zo = ha[E], Ao = zo[x] ? function(a, b, c) {
            return zo[x][G](a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? l.max(0, a[B] + c) : c;
            if (P(a))
                return P(b) && 1 == b[B] ? a[x](b, c) : -1;
            for (; c < a[B]; c++)
                if (c in a && a[c] === b)
                    return c;
            return-1
        }, Bo = zo[Ab] ? function(a, b, c) {
            zo[Ab][G](a, b, c)
        } : function(a, b, c) {
            for (var d = a[B], f = P(a) ? a[Yb](I) : a, h = 0; h < d; h++)
                h in f && b[G](c, f[h], h, a)
        }, Co = zo.filter ? function(a, b, c) {
            return zo.filter[G](a, b, c)
        } : function(a, b, c) {
            for (var d = a[B], f = [], h = 0, k = P(a) ? a[Yb](I) : a, n = 0; n < d; n++)
                if (n in k) {
                    var u = k[n];
                    b[G](c, u, n, a) &&
                            (f[h++] = u)
                }
            return f
        }, Do = zo.map ? function(a, b, c) {
            return zo.map[G](a, b, c)
        } : function(a, b, c) {
            for (var d = a[B], f = ha(d), h = P(a) ? a[Yb](I) : a, k = 0; k < d; k++)
                k in h && (f[k] = b[G](c, h[k], k, a));
            return f
        }, Eo = zo.some ? function(a, b, c) {
            return zo.some[G](a, b, c)
        } : function(a, b, c) {
            for (var d = a[B], f = P(a) ? a[Yb](I) : a, h = 0; h < d; h++)
                if (h in f && b[G](c, f[h], h, a))
                    return!0;
            return!1
        }, Fo = zo.every ? function(a, b, c) {
            return zo.every[G](a, b, c)
        } : function(a, b, c) {
            for (var d = a[B], f = P(a) ? a[Yb](I) : a, h = 0; h < d; h++)
                if (h in f && !b[G](c, f[h], h, a))
                    return!1;
            return!0
        };
        function Go(a, b, c) {
            t:{
                for (var d = a[B], f = P(a) ? a[Yb](I) : a, h = 0; h < d; h++)
                    if (h in f && b[G](c, f[h], h, a)) {
                        b = h;
                        break t
                    }
                b = -1
            }
            return 0 > b ? null : P(a) ? a[fb](b) : a[b]
        }
        function Ho(a, b) {
            return 0 <= Ao(a, b)
        }
        function Io(a, b) {
            var c = Ao(a, b), d;
            (d = 0 <= c) && zo[Yd][G](a, c, 1);
            return d
        }
        function Jo(a) {
            return zo[eb][yc](zo, arguments)
        }
        function Ko(a) {
            var b = a[B];
            if (0 < b) {
                for (var c = ha(b), d = 0; d < b; d++)
                    c[d] = a[d];
                return c
            }
            return[]
        }
        function Lo(a, b) {
            for (var c = 1; c < arguments[B]; c++) {
                var d = arguments[c], f;
                if (O(d) || (f = On(d)) && da[E][ic][G](d, qi))
                    a[v][yc](a, d);
                else if (f)
                    for (var h = a[B], k = d[B], n = 0; n < k; n++)
                        a[h + n] = d[n];
                else
                    a[v](d)
            }
        }
        function Mo(a, b, c, d) {
            return zo[Yd][yc](a, No(arguments, 1))
        }
        function No(a, b, c) {
            return 2 >= arguments[B] ? zo[Mc][G](a, b) : zo[Mc][G](a, b, c)
        }
        function Oo(a, b) {
            for (var c = b || a, d = {}, f = 0, h = 0; h < a[B]; ) {
                var k = a[h++], n = Qn(k) ? xl + Tn(k) : (typeof k)[fb](0) + k;
                da[E][ic][G](d, n) || (d[n] = !0, c[f++] = k)
            }
            Sa(c, f)
        }
        function Po(a, b) {
            zo.sort[G](a, b || Qo)
        }
        function Ro(a, b) {
            for (var c = 0; c < a[B]; c++)
                a[c] = {index: c, value: a[c]};
            var d = b || Qo;
            Po(a, function(a, b) {
                return d(a[Sc], b[Sc]) || a.index - b.index
            });
            for (c = 0; c < a[B]; c++)
                a[c] = a[c][Sc]
        }
        function Qo(a, b) {
            return a > b ? 1 : a < b ? -1 : 0
        }
        ;
        function So(a, b) {
            this.x = Nn(a) ? a : 0;
            this.y = Nn(b) ? b : 0
        }
        ya(So[E], function() {
            return new So(this.x, this.y)
        });
        function To(a, b) {
            return new So(a.x - b.x, a.y - b.y)
        }
        ra(So[E], function() {
            this.x = l[cb](this.x);
            this.y = l[cb](this.y);
            return this
        });
        Ga(So[E], function() {
            this.x = l[Lc](this.x);
            this.y = l[Lc](this.y);
            return this
        });
        function Uo(a, b) {
            qa(this, a);
            Da(this, b)
        }
        ya(Uo[E], function() {
            return new Uo(this[p], this[t])
        });
        ra(Uo[E], function() {
            qa(this, l[cb](this[p]));
            Da(this, l[cb](this[t]));
            return this
        });
        Ga(Uo[E], function() {
            qa(this, l[Lc](this[p]));
            Da(this, l[Lc](this[t]));
            return this
        });
        var Vo, Wo, Xo, Yo, Zo, $o;
        function ap() {
            return N.navigator ? N.navigator.userAgent : null
        }
        function bp() {
            return N.navigator
        }
        Yo = Xo = Wo = Vo = !1;
        var cp;
        if (cp = ap()) {
            var dp = bp();
            Vo = 0 == cp[Jd]("Opera", 0);
            Wo = !Vo && (-1 != cp[x]("MSIE") || -1 != cp[x]("Trident"));
            (Xo = !Vo && -1 != cp[x]("WebKit")) && cp[x]("Mobile");
            Yo = !Vo && !Xo && !Wo && "Gecko" == dp.product
        }
        var ep = Vo, T = Wo, fp = Yo, gp = Xo, hp = bp(), ip = hp && hp.platform || I;
        Zo = -1 != ip[x]("Mac");
        ip[x]("Win");
        ip[x]("Linux");
        $o = !!bp() && -1 != (bp().appVersion || I)[x]("X11");
        var jp = ap();
        jp && jp[x]("Android");
        jp && jp[x]("iPhone");
        jp && jp[x]("iPad");
        function kp() {
            var a = N[yd];
            return a ? a.documentMode : void 0
        }
        var lp;
        t:{
            var mp = I, np;
            if (ep && N.opera)
                var op = N.opera.version, mp = typeof op == qj ? op() : op;
            else if (fp ? np = /rv\:([^\);]+)(\)|;)/ : T ? np = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : gp && (np = /WebKit\/(\S+)/), np)
                var pp = np.exec(ap()), mp = pp ? pp[1] : I;
            if (T) {
                var qp = kp();
                if (qp > la(mp)) {
                    lp = ma(qp);
                    break t
                }
            }
            lp = mp
        }
        var rp = lp, sp = {};
        function tp(a) {
            var b;
            if (!(b = sp[a])) {
                b = 0;
                for (var c = ro(ma(rp))[Yb](mf), d = ro(ma(a))[Yb](mf), f = l.max(c[B], d[B]), h = 0; 0 == b && h < f; h++) {
                    var k = c[h] || I, n = d[h] || I, u = pa(Ee, rj), C = pa(Ee, rj);
                    do {
                        var D = u.exec(k) || [I, I, I], Q = C.exec(n) || [I, I, I];
                        if (0 == D[0][B] && 0 == Q[0][B])
                            break;
                        b = ((0 == D[1][B] ? 0 : ja(D[1], 10)) < (0 == Q[1][B] ? 0 : ja(Q[1], 10)) ? -1 : (0 == D[1][B] ? 0 : ja(D[1], 10)) > (0 == Q[1][B] ? 0 : ja(Q[1], 10)) ? 1 : 0) || ((0 == D[2][B]) < (0 == Q[2][B]) ? -1 : (0 == D[2][B]) > (0 == Q[2][B]) ? 1 : 0) || (D[2] < Q[2] ? -1 : D[2] > Q[2] ? 1 : 0)
                    } while (0 == b)
                }
                b = sp[a] = 0 <= b
            }
            return b
        }
        function up(a) {
            return T && vp >= a
        }
        var wp = N[yd], vp = wp && T ? kp() || (wp.compatMode == lg ? ja(rp, 10) : 5) : void 0;
        var xp = pa("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
        function yp(a) {
            if (zp) {
                zp = !1;
                var b = N[ec];
                if (b) {
                    var c = b[wc];
                    if (c && (c = Ap(c)) && c != b.hostname)
                        throw zp = !0, m();
                }
            }
            return a[nb](xp)
        }
        var zp = gp;
        function Ap(a) {
            return(a = yp(a)[3] || null) && oa(a)
        }
        function Bp(a) {
            return(a = yp(a)[5] || null) && oa(a)
        }
        var Cp = /#|$/;
        var Dp = /\/spreadsheet/, Ep = /\/(ccc|tq|pub)$/, Fp = /^spreadsheets?[0-9]?\.google\.com$/, Gp = /^docs\.google\.com*$/, Hp = /^(trix|spreadsheets|docs|webdrive)(-[a-z]+)?\.(corp|sandbox)\.google\.com/, Ip = /^(\w*\.){1,2}corp\.google\.com$/, Jp = /\/spreadsheets(\/d\/[^/]+)?/, Kp = /\/(edit|gviz\/tq|)$/, Lp = /^docs\.google\.com*$/, Mp = /^docs\.sandbox\.google\.com*$/, Np = /^(\w*\.){1,2}corp\.google\.com$/, Op = /^\/a\/([\w-]+\.)+\w+/, Pp = /^(\/a\/([\w-]+\.)+\w+)?/;
        function Qp(a) {
            var b = Ap(a), c = Fp[Kc](b), d = Hp[Kc](b), f = Ip[Kc](b), b = Gp[Kc](b), h = Bp(a), k = pa(Pp[Lb] + Ep[Lb]), h = (a = pa(Pp[Lb] + Dp[Lb] + Ep[Lb])[Kc](h)) || k[Kc](h);
            return b && a || (d || f || c) && h
        }
        function Rp(a) {
            var b = Ap(a), c = Mp[Kc](b), d = Np[Kc](b), b = Lp[Kc](b);
            a = Bp(a);
            a = pa(Pp[Lb] + Jp[Lb] + Kp[Lb])[Kc](a);
            return(b || c || d) && a
        }
        ;
        function Sp(a, b, c) {
            for (var d in a)
                b[G](c, a[d], d, a)
        }
        function Tp(a) {
            var b = [], c = 0, d;
            for (d in a)
                b[c++] = a[d];
            return b
        }
        function Up(a) {
            var b = [], c = 0, d;
            for (d in a)
                b[c++] = d;
            return b
        }
        function Vp(a, b) {
            for (var c in a)
                if (a[c] == b)
                    return!0;
            return!1
        }
        function Wp(a, b) {
            var c;
            (c = b in a) && delete a[b];
            return c
        }
        function Xp(a) {
            var b = {}, c;
            for (c in a)
                b[c] = a[c];
            return b
        }
        function Yp(a) {
            var b = Mn(a);
            if (b == yl || b == Vh) {
                if (a[kc])
                    return a[kc]();
                var b = b == Vh ? [] : {}, c;
                for (c in a)
                    b[c] = Yp(a[c]);
                return b
            }
            return a
        }
        var Zp = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
        function $p(a, b) {
            for (var c, d, f = 1; f < arguments[B]; f++) {
                d = arguments[f];
                for (c in d)
                    a[c] = d[c];
                for (var h = 0; h < Zp[B]; h++)
                    c = Zp[h], da[E][ic][G](d, c) && (a[c] = d[c])
            }
        }
        ;
        var aq, bq = !T || up(9);
        !fp && !T || T && up(9) || fp && tp("1.9.1");
        var cq = T && !tp("9");
        function dq(a) {
            a = a.className;
            return P(a) && a[nb](/\S+/g) || []
        }
        function eq(a, b) {
            for (var c = dq(a), d = No(arguments, 1), f = c[B] + d[B], h = c, k = 0; k < d[B]; k++)
                Ho(h, d[k]) || h[v](d[k]);
            h = c[Zd](de);
            Ua(a, h);
            return c[B] == f
        }
        function fq(a, b) {
            var c = dq(a), d = No(arguments, 1), f = gq(c, d), h = f[Zd](de);
            Ua(a, h);
            return f[B] == c[B] - d[B]
        }
        function gq(a, b) {
            return Co(a, function(a) {
                return!Ho(b, a)
            })
        }
        ;
        function hq(a) {
            return a ? new iq(jq(a)) : aq || (aq = new iq)
        }
        function kq(a, b) {
            Sp(b, function(b, d) {
                d == Km ? a[s].cssText = b : d == wi ? Ua(a, b) : d == oj ? a.htmlFor = b : d in lq ? a[Cb](lq[d], b) : 0 == d[Jd](Sh, 0) || 0 == d[Jd](Ki, 0) ? a[Cb](d, b) : a[d] = b
            })
        }
        var lq = {cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", role: hm, rowspan: "rowSpan", type: jn, usemap: "useMap", valign: "vAlign", width: "width"};
        function mq(a) {
            a = a[yd];
            a = nq(a) ? a[Ob] : a[Ed];
            return new Uo(a[wd], a[Nd])
        }
        function oq(a) {
            return a ? a.parentWindow || a[hd] : ca
        }
        function pq(a, b, c) {
            return qq(fa, arguments)
        }
        function qq(a, b) {
            var c = b[0], d = b[1];
            if (!bq && d && (d[jd] || d[z])) {
                c = [Sf, c];
                d[jd] && c[v](ge, so(d[jd]), ie);
                if (d[z]) {
                    c[v](he, so(d[z]), ie);
                    var f = {};
                    $p(f, d);
                    delete f[z];
                    d = f
                }
                c[v](Xf);
                c = c[Zd](I)
            }
            c = a[vb](c);
            d && (P(d) ? Ua(c, d) : O(d) ? eq[yc](null, [c][eb](d)) : kq(c, d));
            2 < b[B] && rq(a, c, b, 2);
            return c
        }
        function rq(a, b, c, d) {
            function f(c) {
                c && b[Xa](P(c) ? a[gb](c) : c)
            }
            for (; d < c[B]; d++) {
                var h = c[d];
                On(h) && !sq(h) ? Bo(tq(h) ? Ko(h) : h, f) : f(h)
            }
        }
        function nq(a) {
            return a.compatMode == lg
        }
        function uq(a) {
            if (1 != a[Nc])
                return!1;
            switch (a[zc]) {
                case ag:
                case bg:
                case dg:
                case fg:
                case jg:
                case kg:
                case sg:
                case xg:
                case Bg:
                case Eg:
                case Fg:
                case Dg:
                case Gg:
                case Kg:
                case Lg:
                case Sg:
                case Tg:
                case Mg:
                case Wg:
                case Xg:
                case bh:
                case dh:
                case eh:
                case mh:
                case th:
                    return!1
            }
            return!0
        }
        function vq(a, b) {
            rq(jq(a), a, arguments, 1)
        }
        function wq(a) {
            for (var b; b = a[zb]; )
                a[Fd](b)
        }
        function xq(a, b) {
            b[H] && b[H][jb](a, b)
        }
        function yq(a) {
            return a && a[H] ? a[H][Fd](a) : null
        }
        function sq(a) {
            return Qn(a) && 0 < a[Nc]
        }
        function zq(a, b) {
            if (a.contains && 1 == b[Nc])
                return a == b || a.contains(b);
            if ("undefined" != typeof a[Uc])
                return a == b || Boolean(a[Uc](b) & 16);
            for (; b && a != b; )
                b = b[H];
            return b == a
        }
        function Aq(a, b) {
            if (a == b)
                return 0;
            if (a[Uc])
                return a[Uc](b) & 2 ? 1 : -1;
            if (T && !up(9)) {
                if (9 == a[Nc])
                    return-1;
                if (9 == b[Nc])
                    return 1
            }
            if (Dm in a || a[H] && Dm in a[H]) {
                var c = 1 == a[Nc], d = 1 == b[Nc];
                if (c && d)
                    return a[Ub] - b[Ub];
                var f = a[H], h = b[H];
                return f == h ? Bq(a, b) : !c && zq(f, b) ? -1 * Cq(a, b) : !d && zq(h, a) ? Cq(b, a) : (c ? a[Ub] : f[Ub]) - (d ? b[Ub] : h[Ub])
            }
            d = jq(a);
            c = d[Yc]();
            c.selectNode(a);
            c[bb](!0);
            d = d[Yc]();
            d.selectNode(b);
            d[bb](!0);
            return c.compareBoundaryPoints(N.Range.START_TO_END, d)
        }
        function Cq(a, b) {
            var c = a[H];
            if (c == b)
                return-1;
            for (var d = b; d[H] != c; )
                d = d[H];
            return Bq(d, a)
        }
        function Bq(a, b) {
            for (var c = b; c = c.previousSibling; )
                if (c == a)
                    return-1;
            return 1
        }
        function jq(a) {
            return 9 == a[Nc] ? a : a.ownerDocument || a[yd]
        }
        function Dq(a, b) {
            if (Vm in a)
                a.textContent = b;
            else if (a[zb] && 3 == a[zb][Nc]) {
                for (; a[lc] != a[zb]; )
                    a[Fd](a[lc]);
                a[zb].data = b
            } else
                wq(a), a[Xa](jq(a)[gb](ma(b)))
        }
        function Eq(a) {
            if (Hl in a)
                return a.outerHTML;
            var b = jq(a)[vb](Xi);
            b[Xa](a.cloneNode(!0));
            return b.innerHTML
        }
        var Fq = {SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1}, Gq = {IMG: de, BR: be};
        function Hq(a, b) {
            b ? a.tabIndex = 0 : (a.tabIndex = -1, a[Cc](Nm))
        }
        function Iq(a) {
            a = a.getAttributeNode(Om);
            return null != a && a.specified
        }
        function Jq(a) {
            a = a.tabIndex;
            return Sn(a) && 0 <= a && 32768 > a
        }
        function Kq(a) {
            var b = [];
            Lq(a, b, !1);
            return b[Zd](I)
        }
        function Lq(a, b, c) {
            if (!(a[Xc]in Fq))
                if (3 == a[Nc])
                    c ? b[v](ma(a.nodeValue)[q](/(\r\n|\r|\n)/g, I)) : b[v](a.nodeValue);
                else if (a[Xc]in Gq)
                    b[v](Gq[a[Xc]]);
                else
                    for (a = a[zb]; a; )
                        Lq(a, b, c), a = a[Mb]
        }
        function tq(a) {
            if (a && typeof a[B] == J) {
                if (Qn(a))
                    return typeof a.item == qj || typeof a.item == L;
                if (R(a))
                    return typeof a.item == qj
            }
            return!1
        }
        function iq(a) {
            this.S = a || N[yd] || fa
        }
        M = iq[E];
        M.n = hq;
        M.L = function() {
            return this.S
        };
        M.a = function(a) {
            return P(a) ? this.S[Pc](a) : a
        };
        M.setProperties = kq;
        M.Yk = function(a) {
            a = a || this.Hc();
            return mq(a || ca)
        };
        M.d = function(a, b, c) {
            return qq(this.S, arguments)
        };
        M.createElement = function(a) {
            return this.S[vb](a)
        };
        M.createTextNode = function(a) {
            return this.S[gb](ma(a))
        };
        M.Hf = function() {
            return nq(this.S)
        };
        M.Hc = function() {
            return this.S.parentWindow || this.S[hd]
        };
        M.Xk = function() {
            return!gp && nq(this.S) ? this.S[Ob] : this.S[Ed]
        };
        M.gc = function() {
            var a = this.S, b = !gp && nq(a) ? a[Ob] : a[Ed], a = a.parentWindow || a[hd];
            return T && tp(If) && a.pageYOffset != b[pd] ? new So(b[tc], b[pd]) : new So(a.pageXOffset || b[tc], a.pageYOffset || b[pd])
        };
        M.appendChild = function(a, b) {
            a[Xa](b)
        };
        M.Wg = wq;
        M.Pe = xq;
        M.removeNode = yq;
        M.contains = zq;
        M.bb = function(a) {
            var b;
            (b = a[zc] == Fg || a[zc] == kh || a[zc] == ch || a[zc] == gg ? !a[Ad] && (!Iq(a) || Jq(a)) : Iq(a) && Jq(a)) && T ? (a = R(a[Ya]) ? a[Ya]() : {height: a.offsetHeight, width: a[db]}, a = null != a && 0 < a[t] && 0 < a[p]) : a = b;
            return a
        };
        function Mq() {
        }
        M = Mq[E];
        M.$b = !1;
        M.fa = function() {
            this.$b || (this.$b = !0, this.k())
        };
        M.Kk = function(a) {
            this.Ol(Zn(Nq, a))
        };
        M.Ol = function(a, b) {
            this.fd || (this.fd = []);
            this.fd[v](Yn(a, b))
        };
        M.k = function() {
            if (this.fd)
                for (; this.fd[B]; )
                    this.fd.shift()()
        };
        function Nq(a) {
            a && typeof a.fa == qj && a.fa()
        }
        ;
        function Oq(a, b) {
            La(this, a);
            Wa(this, b);
            Ja(this, this[Hd])
        }
        M = Oq[E];
        M.k = function() {
        };
        M.fa = function() {
        };
        M.wb = !1;
        M.defaultPrevented = !1;
        M.yh = !0;
        M.stopPropagation = function() {
            this.wb = !0
        };
        M.preventDefault = function() {
            this.defaultPrevented = !0;
            this.yh = !1
        };
        function Pq(a) {
            a[ib]()
        }
        ;
        function Qq(a) {
            Qq[de](a);
            return a
        }
        Qq[de] = Kn;
        var Rq = !T || up(9), Sq = !T || up(9), Tq = T && !tp("9");
        !gp || tp(Kf);
        fp && tp("1.9b") || T && tp(Nf) || ep && tp("9.5") || gp && tp(Kf);
        fp && !tp(Nf) || T && tp("9");
        function Uq(a, b) {
            a && this.oe(a, b)
        }
        S(Uq, Oq);
        var Vq = [1, 4, 2];
        M = Uq[E];
        Wa(M, null);
        M.relatedTarget = null;
        M.offsetX = 0;
        M.offsetY = 0;
        Oa(M, 0);
        Pa(M, 0);
        sa(M, 0);
        ta(M, 0);
        M.button = 0;
        ua(M, 0);
        M.charCode = 0;
        M.ctrlKey = !1;
        wa(M, !1);
        M.shiftKey = !1;
        M.metaKey = !1;
        M.vf = !1;
        M.za = null;
        M.oe = function(a, b) {
            var c = La(this, a[z]);
            Oq[G](this, c);
            Wa(this, a[Hd] || a.srcElement);
            Ja(this, b);
            var d = a[$a];
            if (d) {
                if (fp) {
                    var f;
                    t:{
                        try {
                            Qq(d[Xc]);
                            f = !0;
                            break t
                        } catch (h) {
                        }
                        f = !1
                    }
                    f || (d = null)
                }
            } else
                c == nl ? d = a.fromElement : c == ml && (d = a.toElement);
            this.relatedTarget = d;
            this.offsetX = gp || void 0 !== a.offsetX ? a.offsetX : a.layerX;
            this.offsetY = gp || void 0 !== a.offsetY ? a.offsetY : a.layerY;
            Oa(this, void 0 !== a[md] ? a[md] : a.pageX);
            Pa(this, void 0 !== a[nd] ? a[nd] : a.pageY);
            sa(this, a[lb] || 0);
            ta(this, a[mb] || 0);
            this.button = a.button;
            ua(this,
                    a[xb] || 0);
            this.charCode = a[sb] || (c == Tk ? a[xb] : 0);
            this.ctrlKey = a[zd];
            wa(this, a[Qb]);
            this.shiftKey = a[Ud];
            this.metaKey = a[Tc];
            this.vf = Zo ? a[Tc] : a[zd];
            this.state = a.state;
            this.za = a;
            a.defaultPrevented && this[ib]();
            delete this.wb
        };
        M.Sl = function(a) {
            return Rq ? this.za.button == a : this[z] == xi ? 0 == a : !!(this.za.button & Vq[a])
        };
        M.Ne = function() {
            return this.Sl(0) && !(gp && Zo && this[zd])
        };
        M.stopPropagation = function() {
            Uq.b[cc][G](this);
            this.za[cc] ? this.za[cc]() : this.za.cancelBubble = !0
        };
        M.preventDefault = function() {
            Uq.b[ib][G](this);
            var a = this.za;
            if (a[ib])
                a[ib]();
            else if (a.returnValue = !1, Tq)
                try {
                    (a[zd] || 112 <= a[xb] && 123 >= a[xb]) && ua(a, -1)
                } catch (b) {
                }
        };
        M.k = function() {
        };
        var Wq = "closure_listenable_" + (1E6 * l[qc]() | 0);
        function Xq(a) {
            try {
                return!(!a || !a[Wq])
            } catch (b) {
                return!1
            }
        }
        var Yq = 0;
        function Zq(a, b, c, d, f, h) {
            this.Wb = a;
            this.ce = b;
            this.src = c;
            La(this, d);
            this.capture = !!f;
            this.$d = h;
            this.key = ++Yq;
            this.tc = this.Zd = !1
        }
        Zq[E].de = function() {
            this.tc = !0;
            this.$d = this.src = this.ce = this.Wb = null
        };
        function $q(a) {
            this.src = a;
            this.T = {};
            this.cd = 0
        }
        M = $q[E];
        M.add = function(a, b, c, d, f) {
            var h = this.T[a];
            h || (h = this.T[a] = [], this.cd++);
            var k = ar(h, b, d, f);
            -1 < k ? (a = h[k], c || (a.Zd = !1)) : (a = new Zq(b, null, this.src, a, !!d, f), a.Zd = c, h[v](a));
            return a
        };
        M.remove = function(a, b, c, d) {
            if (!(a in this.T))
                return!1;
            var f = this.T[a];
            b = ar(f, b, c, d);
            return-1 < b ? (f[b].de(), zo[Yd][G](f, b, 1), 0 == f[B] && (delete this.T[a], this.cd--), !0) : !1
        };
        M.Ih = function(a) {
            var b = a[z];
            if (!(b in this.T))
                return!1;
            var c = Io(this.T[b], a);
            c && (a.de(), 0 == this.T[b][B] && (delete this.T[b], this.cd--));
            return c
        };
        M.removeAll = function(a) {
            var b = 0, c;
            for (c in this.T)
                if (!a || c == a) {
                    for (var d = this.T[c], f = 0; f < d[B]; f++)
                        ++b, d[f].de();
                    delete this.T[c];
                    this.cd--
                }
            return b
        };
        M.dd = function(a, b, c, d) {
            a = this.T[a];
            var f = -1;
            a && (f = ar(a, b, c, d));
            return-1 < f ? a[f] : null
        };
        function ar(a, b, c, d) {
            for (var f = 0; f < a[B]; ++f) {
                var h = a[f];
                if (!h.tc && h.Wb == b && h[Vc] == !!c && h.$d == d)
                    return f
            }
            return-1
        }
        ;
        var br = {}, cr = {}, dr = {};
        function er(a, b, c, d, f) {
            if (O(b)) {
                for (var h = 0; h < b[B]; h++)
                    er(a, b[h], c, d, f);
                return null
            }
            c = fr(c);
            return Xq(a) ? a.i(b, c, d, f) : gr(a, b, c, !1, d, f)
        }
        function gr(a, b, c, d, f, h) {
            if (!b)
                throw m("Invalid event type");
            var k = !!f, n = Tn(a), u = cr[n];
            u || (cr[n] = u = new $q(a));
            c = u.add(b, c, d, f, h);
            if (c.ce)
                return c;
            d = hr();
            c.ce = d;
            d.src = a;
            d.Wb = c;
            a.addEventListener ? a.addEventListener(b, d, k) : a.attachEvent(b in dr ? dr[b] : dr[b] = Al + b, d);
            return br[c.key] = c
        }
        function hr() {
            var a = ir, b = Sq ? function(c) {
                return a[G](b.src, b.Wb, c)
            } : function(c) {
                c = a[G](b.src, b.Wb, c);
                if (!c)
                    return c
            };
            return b
        }
        function jr(a, b, c, d, f) {
            if (O(b)) {
                for (var h = 0; h < b[B]; h++)
                    jr(a, b[h], c, d, f);
                return null
            }
            c = fr(c);
            return Xq(a) ? a.Rd(b, c, d, f) : gr(a, b, c, !0, d, f)
        }
        function kr(a, b, c, d, f) {
            if (O(b)) {
                for (var h = 0; h < b[B]; h++)
                    kr(a, b[h], c, d, f);
                return null
            }
            c = fr(c);
            if (Xq(a))
                return a.Z(b, c, d, f);
            if (!a)
                return!1;
            d = !!d;
            if (a = lr(a))
                if (b = a.dd(b, c, d, f))
                    return mr(b);
            return!1
        }
        function mr(a) {
            if (Sn(a) || !a || a.tc)
                return!1;
            var b = a.src;
            if (Xq(b))
                return b.mh(a);
            var c = a[z], d = a.ce;
            b.removeEventListener ? b.removeEventListener(c, d, a[Vc]) : b.detachEvent && b.detachEvent(c in dr ? dr[c] : dr[c] = Al + c, d);
            (c = lr(b)) ? (c.Ih(a), 0 == c.cd && (c.src = null, delete cr[Tn(b)])) : a.de();
            delete br[a.key];
            return!0
        }
        function nr(a, b) {
            var c = cr[a];
            if (!c)
                return 0;
            var d = 0, f;
            for (f in c.T)
                if (!b || f == b)
                    for (var h = Ko(c.T[f]), k = 0; k < h[B]; ++k)
                        mr(h[k]) && ++d;
            return d
        }
        function or(a, b, c, d) {
            var f = 1;
            if (a = lr(a))
                if (b = a.T[b])
                    for (b = Ko(b), a = 0; a < b[B]; a++) {
                        var h = b[a];
                        h && h[Vc] == c && !h.tc && (f &= !1 !== pr(h, d))
                    }
            return Boolean(f)
        }
        function pr(a, b) {
            var c = a.Wb, d = a.$d || a.src;
            a.Zd && mr(a);
            return c[G](d, b)
        }
        function ir(a, b) {
            if (a.tc)
                return!0;
            if (!Sq) {
                var c = b || Jn(yn), d = new Uq(c, this), f = !0;
                if (!(0 > c[xb] || void 0 != c.returnValue)) {
                    t:{
                        var h = !1;
                        if (0 == c[xb])
                            try {
                                ua(c, -1);
                                break t
                            } catch (k) {
                                h = !0
                            }
                        if (h || void 0 == c.returnValue)
                            c.returnValue = !0
                    }
                    c = [];
                    for (h = d.currentTarget; h; h = h[H])
                        c[v](h);
                    for (var h = a[z], n = c[B] - 1; !d.wb && 0 <= n; n--)
                        Ja(d, c[n]), f &= or(c[n], h, !0, d);
                    for (n = 0; !d.wb && n < c[B]; n++)
                        Ja(d, c[n]), f &= or(c[n], h, !1, d)
                }
                return f
            }
            return pr(a, new Uq(b, this))
        }
        function lr(a) {
            return a[Un] ? cr[Tn(a)] || null : null
        }
        var qr = "__closure_events_fn_" + (1E9 * l[qc]() >>> 0);
        function fr(a) {
            return R(a) ? a : a[qr] || (a[qr] = function(b) {
                return a[Eb](b)
            })
        }
        ;
        function rr() {
            this.ub = new $q(this);
            this.Sk = this
        }
        S(rr, Mq);
        rr[E][Wq] = !0;
        M = rr[E];
        M.Qd = null;
        M.nf = function(a) {
            this.Qd = a
        };
        M.addEventListener = function(a, b, c, d) {
            er(this, a, b, c, d)
        };
        M.removeEventListener = function(a, b, c, d) {
            kr(this, a, b, c, d)
        };
        M.dispatchEvent = function(a) {
            var b, c = this.Qd;
            if (c) {
                b = [];
                for (var d = 1; c; c = c.Qd)
                    b[v](c), ++d
            }
            c = this.Sk;
            d = a[z] || a;
            if (P(a))
                a = new Oq(a, c);
            else if (a instanceof Oq)
                Wa(a, a[Hd] || c);
            else {
                var f = a;
                a = new Oq(d, c);
                $p(a, f)
            }
            var f = !0, h;
            if (b)
                for (var k = b[B] - 1; !a.wb && 0 <= k; k--)
                    h = Ja(a, b[k]), f = h.ke(d, !0, a) && f;
            a.wb || (h = Ja(a, c), f = h.ke(d, !0, a) && f, a.wb || (f = h.ke(d, !1, a) && f));
            if (b)
                for (k = 0; !a.wb && k < b[B]; k++)
                    h = Ja(a, b[k]), f = h.ke(d, !1, a) && f;
            return f
        };
        M.k = function() {
            rr.b.k[G](this);
            this.removeAllListeners();
            this.Qd = null
        };
        M.i = function(a, b, c, d) {
            return this.ub.add(a, b, !1, c, d)
        };
        M.Rd = function(a, b, c, d) {
            return this.ub.add(a, b, !0, c, d)
        };
        M.Z = function(a, b, c, d) {
            return this.ub[tb](a, b, c, d)
        };
        M.mh = function(a) {
            return this.ub.Ih(a)
        };
        M.removeAllListeners = function(a) {
            return this.ub ? this.ub[Id](a) : 0
        };
        M.ke = function(a, b, c) {
            a = this.ub.T[a];
            if (!a)
                return!0;
            a = Ko(a);
            for (var d = !0, f = 0; f < a[B]; ++f) {
                var h = a[f];
                if (h && !h.tc && h[Vc] == b) {
                    var k = h.Wb, n = h.$d || h.src;
                    h.Zd && this.mh(h);
                    d = !1 !== k[G](n, c) && d
                }
            }
            return d && !1 != c.yh
        };
        M.dd = function(a, b, c, d) {
            return this.ub.dd(a, b, c, d)
        };
        var sr = "StopIteration"in N ? N.StopIteration : m("StopIteration");
        function tr() {
        }
        xa(tr[E], function() {
            throw sr;
        });
        tr[E].Xf = function() {
            return this
        };
        function ur(a, b) {
            this.Ba = {};
            this.G = [];
            this.Mb = this.P = 0;
            var c = arguments[B];
            if (1 < c) {
                if (c % 2)
                    throw m("Uneven number of arguments");
                for (var d = 0; d < c; d += 2)
                    this.set(arguments[d], arguments[d + 1])
            } else
                a && this.nk(a)
        }
        M = ur[E];
        M.$a = function() {
            this.ae();
            for (var a = [], b = 0; b < this.G[B]; b++)
                a[v](this.Ba[this.G[b]]);
            return a
        };
        M.kb = function() {
            this.ae();
            return this.G[eb]()
        };
        M.bd = function(a) {
            return vr(this.Ba, a)
        };
        M.clear = function() {
            this.Ba = {};
            Sa(this.G, 0);
            this.Mb = this.P = 0
        };
        M.remove = function(a) {
            return vr(this.Ba, a) ? (delete this.Ba[a], this.P--, this.Mb++, this.G[B] > 2 * this.P && this.ae(), !0) : !1
        };
        M.ae = function() {
            if (this.P != this.G[B]) {
                for (var a = 0, b = 0; a < this.G[B]; ) {
                    var c = this.G[a];
                    vr(this.Ba, c) && (this.G[b++] = c);
                    a++
                }
                Sa(this.G, b)
            }
            if (this.P != this.G[B]) {
                for (var d = {}, b = a = 0; a < this.G[B]; )
                    c = this.G[a], vr(d, c) || (this.G[b++] = c, d[c] = 1), a++;
                Sa(this.G, b)
            }
        };
        M.get = function(a, b) {
            return vr(this.Ba, a) ? this.Ba[a] : b
        };
        M.set = function(a, b) {
            vr(this.Ba, a) || (this.P++, this.G[v](a), this.Mb++);
            this.Ba[a] = b
        };
        M.nk = function(a) {
            var b;
            a instanceof ur ? (b = a.kb(), a = a.$a()) : (b = Up(a), a = Tp(a));
            for (var c = 0; c < b[B]; c++)
                this.set(b[c], a[c])
        };
        ya(M, function() {
            return new ur(this)
        });
        M.Xf = function(a) {
            this.ae();
            var b = 0, c = this.G, d = this.Ba, f = this.Mb, h = this, k = new tr;
            xa(k, function() {
                for (; ; ) {
                    if (f != h.Mb)
                        throw m("The map has changed since the iterator was created");
                    if (b >= c[B])
                        throw sr;
                    var k = c[b++];
                    return a ? k : d[k]
                }
            });
            return k
        };
        function vr(a, b) {
            return da[E][ic][G](a, b)
        }
        ;
        function wr(a) {
            if (typeof a.$a == qj)
                return a.$a();
            if (P(a))
                return a[Yb](I);
            if (On(a)) {
                for (var b = [], c = a[B], d = 0; d < c; d++)
                    b[v](a[d]);
                return b
            }
            return Tp(a)
        }
        function xr(a, b, c) {
            if (typeof a[Ab] == qj)
                a[Ab](b, c);
            else if (On(a) || P(a))
                Bo(a, b, c);
            else {
                var d;
                if (typeof a.kb == qj)
                    d = a.kb();
                else if (typeof a.$a != qj)
                    if (On(a) || P(a)) {
                        d = [];
                        for (var f = a[B], h = 0; h < f; h++)
                            d[v](h)
                    } else
                        d = Up(a);
                else
                    d = void 0;
                for (var f = wr(a), h = f[B], k = 0; k < h; k++)
                    b[G](c, f[k], d && d[k], a)
            }
        }
        ;
        function yr(a, b) {
            rr[G](this);
            this.ee = a || 1;
            this.kc = b || N;
            this.Af = Yn(this.al, this);
            this.Bf = $n()
        }
        S(yr, rr);
        M = yr[E];
        M.enabled = !1;
        M.$ = null;
        M.al = function() {
            if (this.enabled) {
                var a = $n() - this.Bf;
                0 < a && a < 0.8 * this.ee ? this.$ = this.kc[Wb](this.Af, this.ee - a) : (this.$ && (this.kc[ab](this.$), this.$ = null), this.Jk(), this.enabled && (this.$ = this.kc[Wb](this.Af, this.ee), this.Bf = $n()))
            }
        };
        M.Jk = function() {
            this[r](Wm)
        };
        M.start = function() {
            this.enabled = !0;
            this.$ || (this.$ = this.kc[Wb](this.Af, this.ee), this.Bf = $n())
        };
        M.stop = function() {
            this.enabled = !1;
            this.$ && (this.kc[ab](this.$), this.$ = null)
        };
        M.k = function() {
            yr.b.k[G](this);
            this[qd]();
            delete this.kc
        };
        function zr(a, b, c) {
            if (R(a))
                c && (a = Yn(a, c));
            else if (a && typeof a[Eb] == qj)
                a = Yn(a[Eb], a);
            else
                throw m("Invalid listener argument");
            return 2147483647 < b ? -1 : N[Wb](a, b || 0)
        }
        ;
        function Ar() {
        }
        Ar[E].pi = null;
        Ar[E].getOptions = function() {
            return this.pi || (this.pi = this.Il())
        };
        var Br;
        function Cr() {
        }
        S(Cr, Ar);
        Cr[E].gi = function() {
            var a = this.ri();
            return a ? new ActiveXObject(a) : new XMLHttpRequest
        };
        Cr[E].Il = function() {
            var a = {};
            this.ri() && (a[0] = !0, a[1] = !0);
            return a
        };
        Cr[E].ri = function() {
            if (!this.si && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                for (var a = [Pg, Og, Ng, Qg], b = 0; b < a[B]; b++) {
                    var c = a[b];
                    try {
                        return new ActiveXObject(c), this.si = c
                    } catch (d) {
                    }
                }
                throw m("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
            }
            return this.si
        };
        Br = new Cr;
        function Dr(a) {
            rr[G](this);
            this.headers = new ur;
            this.Kd = a || null;
            this.hb = !1;
            this.Dd = this.l = null;
            this.Lb = this.Xe = I;
            this.Hb = this.Se = this.Ad = this.We = !1;
            this.Md = 0;
            this.Ld = null;
            this.Cg = I;
            this.Ve = this.Dg = !1
        }
        S(Dr, rr);
        var Er = /^https?$/i, Fr = [Yg, "PUT"], Gr = [];
        M = Dr[E];
        M.yj = function() {
            this.fa();
            Io(Gr, this)
        };
        M.Dj = function(a) {
            this.Dg = a
        };
        M.send = function(a, b, c, d) {
            if (this.l)
                throw m("[goog.net.XhrIo] Object is active with another request=" + this.Xe + "; newUri=" + a);
            b = b ? b.toUpperCase() : yg;
            this.Xe = a;
            this.Lb = I;
            this.We = !1;
            this.hb = !0;
            this.l = this.dj();
            this.Dd = this.Kd ? this.Kd[Qc]() : Br[Qc]();
            this.l.onreadystatechange = Yn(this.vg, this);
            try {
                this.Se = !0, this.l[Jc](b, a, !0), this.Se = !1
            } catch (f) {
                this.Pg(5, f);
                return
            }
            a = c || I;
            var h = this.headers[kc]();
            d && xr(d, function(a, b) {
                h.set(b, a)
            });
            d = Go(h.kb(), Hr);
            c = N.FormData && a instanceof N.FormData;
            !Ho(Fr, b) || d || c || h.set(og,
                    Rh);
            xr(h, function(a, b) {
                this.l.setRequestHeader(b, a)
            }, this);
            this.Cg && (this.l.responseType = this.Cg);
            zn in this.l && (this.l.withCredentials = this.Dg);
            try {
                this.Og(), 0 < this.Md && ((this.Ve = T && tp(9) && Sn(this.l.timeout) && Nn(this.l.ontimeout)) ? (this.l.timeout = this.Md, this.l.ontimeout = Yn(this.Qg, this)) : this.Ld = zr(this.Qg, this.Md, this)), this.Ad = !0, this.l[qb](a), this.Ad = !1
            } catch (k) {
                this.Pg(5, k)
            }
        };
        function Hr(a) {
            return Di == a[$d]()
        }
        M.dj = function() {
            return this.Kd ? this.Kd.gi() : Br.gi()
        };
        M.Qg = function() {
            "undefined" != typeof In && this.l && (this.Lb = nh + this.Md + pl, this[r](Ym), this[xd](8))
        };
        M.Pg = function(a, b) {
            this.hb = !1;
            this.l && (this.Hb = !0, this.l[xd](), this.Hb = !1);
            this.Lb = b;
            this.Zg();
            this.zd()
        };
        M.Zg = function() {
            this.We || (this.We = !0, this[r](Ci), this[r](gj))
        };
        M.abort = function() {
            this.l && this.hb && (this.hb = !1, this.Hb = !0, this.l[xd](), this.Hb = !1, this[r](Ci), this[r](Hh), this.zd())
        };
        M.k = function() {
            this.l && (this.hb && (this.hb = !1, this.Hb = !0, this.l[xd](), this.Hb = !1), this.zd(!0));
            Dr.b.k[G](this)
        };
        M.vg = function() {
            this.$b || (this.Se || this.Ad || this.Hb ? this.Mh() : this.Tk())
        };
        M.Tk = function() {
            this.Mh()
        };
        M.Mh = function() {
            if (this.hb && "undefined" != typeof In && (!this.Dd[1] || 4 != this.ad() || 2 != this.xf()))
                if (this.Ad && 4 == this.ad())
                    zr(this.vg, 0, this);
                else if (this[r]($l), this.sk()) {
                    this.hb = !1;
                    try {
                        this.nh() ? (this[r](Ci), this[r](Mm)) : (this.Lb = this.rk() + ee + this.xf() + Dh, this.Zg())
                    } finally {
                        this.zd()
                    }
                }
        };
        M.zd = function(a) {
            if (this.l) {
                this.Og();
                var b = this.l, c = this.Dd[0] ? Kn : null;
                this.Dd = this.l = null;
                a || this[r](Zl);
                try {
                    b.onreadystatechange = c
                } catch (d) {
                }
            }
        };
        M.Og = function() {
            this.l && this.Ve && (this.l.ontimeout = null);
            Sn(this.Ld) && (N[ab](this.Ld), this.Ld = null)
        };
        M.Ia = function() {
            return!!this.l
        };
        M.sk = function() {
            return 4 == this.ad()
        };
        M.nh = function() {
            var a = this.xf(), b;
            t:switch (a) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                    b = !0;
                    break t;
                default:
                    b = !1
            }
            return b || 0 === a && !this.Dl()
        };
        M.Dl = function() {
            var a = yp(ma(this.Xe))[1] || null;
            !a && self[ec] && (a = self[ec].protocol, a = a.substr(0, a[B] - 1));
            return Er[Kc](a ? a[$d]() : I)
        };
        M.ad = function() {
            return this.l ? this.l.readyState : 0
        };
        M.xf = function() {
            try {
                return 2 < this.ad() ? this.l.status : -1
            } catch (a) {
                return-1
            }
        };
        M.rk = function() {
            try {
                return 2 < this.ad() ? this.l.statusText : I
            } catch (a) {
                return I
            }
        };
        M.cl = function() {
            try {
                return this.l ? this.l.responseText : I
            } catch (a) {
                return I
            }
        };
        M.Uh = function() {
            return P(this.Lb) ? this.Lb : ma(this.Lb)
        };
        function Ir(a, b) {
            var c;
            a instanceof Ir ? (this.qa = Nn(b) ? b : a.qa, this.Vc(a.nb), this.$e(a.Sc), this.Ye(a.Qc), this.Uc(a.lb), this.Tc(a.Ta), this.Nd(a.ra[kc]()), this.Ze(a.Rc)) : a && (c = yp(ma(a))) ? (this.qa = !!b, this.Vc(c[1] || I, !0), this.$e(c[2] || I, !0), this.Ye(c[3] || I, !0), this.Uc(c[4]), this.Tc(c[5] || I, !0), this.Nd(c[6] || I, !0), this.Ze(c[7] || I, !0)) : (this.qa = !!b, this.ra = new Jr(null, null, this.qa))
        }
        M = Ir[E];
        M.nb = I;
        M.Sc = I;
        M.Qc = I;
        M.lb = null;
        M.Ta = I;
        M.Rc = I;
        M.Tl = !1;
        M.qa = !1;
        M.toString = function() {
            var a = [], b = this.nb;
            b && a[v](Kr(b, Lr), Of);
            if (b = this.Qc) {
                a[v](sf);
                var c = this.Sc;
                c && a[v](Kr(c, Lr), Zf);
                a[v](aa(ma(b)));
                b = this.lb;
                null != b && a[v](Of, ma(b))
            }
            if (b = this.Ta)
                this.ef() && b[fb](0) != qf && a[v](qf), a[v](Kr(b, b[fb](0) == qf ? Mr : Nr));
            (b = this.Ah()) && a[v](Yf, b);
            (b = this.Rc) && a[v](ne, Kr(b, Or));
            return a[Zd](I)
        };
        M.Bj = function(a) {
            var b = this[kc](), c = a.pj();
            c ? b.Vc(a.nb) : c = a.qj();
            c ? b.$e(a.Sc) : c = a.ef();
            c ? b.Ye(a.Qc) : c = a.nj();
            var d = a.Ta;
            if (c)
                b.Uc(a.lb);
            else if (c = a.Xg()) {
                if (d[fb](0) != qf)
                    if (this.ef() && !this.Xg())
                        d = qf + d;
                    else {
                        var f = b.Ta[Jd](qf);
                        -1 != f && (d = b.Ta.substr(0, f + 1) + d)
                    }
                f = d;
                if (f == nf || f == mf)
                    d = I;
                else if (-1 != f[x](of) || -1 != f[x](rf)) {
                    for (var d = 0 == f[Jd](qf, 0), f = f[Yb](qf), h = [], k = 0; k < f[B]; ) {
                        var n = f[k++];
                        n == mf ? d && k == f[B] && h[v](I) : n == nf ? ((1 < h[B] || 1 == h[B] && h[0] != I) && h.pop(), d && k == f[B] && h[v](I)) : (h[v](n), d = !0)
                    }
                    d = h[Zd](qf)
                } else
                    d =
                    f
            }
            c ? b.Tc(d) : c = a.oj();
            c ? b.Nd(a.lj()) : c = a.mj();
            c && b.Ze(a.Rc);
            return b
        };
        ya(M, function() {
            return new Ir(this)
        });
        M.Vc = function(a, b) {
            this.Za();
            if (this.nb = b ? a ? oa(a) : I : a)
                this.nb = this.nb[q](/:$/, I);
            return this
        };
        M.pj = function() {
            return!!this.nb
        };
        M.$e = function(a, b) {
            this.Za();
            this.Sc = b ? a ? oa(a) : I : a;
            return this
        };
        M.qj = function() {
            return!!this.Sc
        };
        M.Ye = function(a, b) {
            this.Za();
            this.Qc = b ? a ? oa(a) : I : a;
            return this
        };
        M.ef = function() {
            return!!this.Qc
        };
        M.Uc = function(a) {
            this.Za();
            if (a) {
                a = ia(a);
                if (ga(a) || 0 > a)
                    throw m("Bad port number " + a);
                this.lb = a
            } else
                this.lb = null;
            return this
        };
        M.nj = function() {
            return null != this.lb
        };
        M.Tc = function(a, b) {
            this.Za();
            this.Ta = b ? a ? oa(a) : I : a;
            return this
        };
        M.Xg = function() {
            return!!this.Ta
        };
        M.oj = function() {
            return this.ra[Pb]() !== I
        };
        M.Nd = function(a, b) {
            this.Za();
            a instanceof Jr ? (this.ra = a, this.ra.If(this.qa)) : (b || (a = Kr(a, Pr)), this.ra = new Jr(a, null, this.qa));
            return this
        };
        M.setQuery = function(a, b) {
            return this.Nd(a, b)
        };
        M.Ah = function() {
            return this.ra[Pb]()
        };
        M.lj = function() {
            return this.ra.ql()
        };
        M.getQuery = function() {
            return this.Ah()
        };
        M.Id = function(a, b) {
            this.Za();
            this.ra.set(a, b);
            return this
        };
        M.Qh = function(a) {
            return this.ra.get(a)
        };
        M.Ze = function(a, b) {
            this.Za();
            this.Rc = b ? a ? oa(a) : I : a;
            return this
        };
        M.mj = function() {
            return!!this.Rc
        };
        M.Hk = function() {
            this.Za();
            this.Id(Cn, l[cb](2147483648 * l[qc]())[Pb](36) + l.abs(l[cb](2147483648 * l[qc]()) ^ $n())[Pb](36));
            return this
        };
        M.Za = function() {
            if (this.Tl)
                throw m("Tried to modify a read-only Uri");
        };
        M.If = function(a) {
            this.qa = a;
            this.ra && this.ra.If(a);
            return this
        };
        function Kr(a, b) {
            return P(a) ? encodeURI(a)[q](b, Qr) : null
        }
        function Qr(a) {
            a = a[Od](0);
            return pe + (a >> 4 & 15)[Pb](16) + (a & 15)[Pb](16)
        }
        var Lr = /[#\/\?@]/g, Nr = /[\#\?:]/g, Mr = /[\#\?]/g, Pr = /[\#\?@]/g, Or = /#/g;
        function Jr(a, b, c) {
            this.rb = a || null;
            this.qa = !!c
        }
        M = Jr[E];
        M.Tb = function() {
            if (!this.I && (this.I = new ur, this.P = 0, this.rb))
                for (var a = this.rb[Yb](se), b = 0; b < a[B]; b++) {
                    var c = a[b][x](Wf), d = null, f = null;
                    0 <= c ? (d = a[b][Rd](0, c), f = a[b][Rd](c + 1)) : d = a[b];
                    d = oa(d[q](/\+/g, de));
                    d = this.Ub(d);
                    this.add(d, f ? oa(f[q](/\+/g, de)) : I)
                }
        };
        M.I = null;
        M.P = null;
        M.add = function(a, b) {
            this.Tb();
            this.sc();
            a = this.Ub(a);
            var c = this.I.get(a);
            c || this.I.set(a, c = []);
            c[v](b);
            this.P++;
            return this
        };
        M.remove = function(a) {
            this.Tb();
            a = this.Ub(a);
            return this.I.bd(a) ? (this.sc(), this.P -= this.I.get(a)[B], this.I[tb](a)) : !1
        };
        M.clear = function() {
            this.sc();
            this.I = null;
            this.P = 0
        };
        M.bd = function(a) {
            this.Tb();
            a = this.Ub(a);
            return this.I.bd(a)
        };
        M.kb = function() {
            this.Tb();
            for (var a = this.I.$a(), b = this.I.kb(), c = [], d = 0; d < b[B]; d++)
                for (var f = a[d], h = 0; h < f[B]; h++)
                    c[v](b[d]);
            return c
        };
        M.$a = function(a) {
            this.Tb();
            var b = [];
            if (P(a))
                this.bd(a) && (b = Jo(b, this.I.get(this.Ub(a))));
            else {
                a = this.I.$a();
                for (var c = 0; c < a[B]; c++)
                    b = Jo(b, a[c])
            }
            return b
        };
        M.set = function(a, b) {
            this.Tb();
            this.sc();
            a = this.Ub(a);
            this.bd(a) && (this.P -= this.I.get(a)[B]);
            this.I.set(a, [b]);
            this.P++;
            return this
        };
        M.get = function(a, b) {
            var c = a ? this.$a(a) : [];
            return 0 < c[B] ? ma(c[0]) : b
        };
        M.Ak = function(a, b) {
            this[tb](a);
            0 < b[B] && (this.sc(), this.I.set(this.Ub(a), Ko(b)), this.P += b[B])
        };
        M.toString = function() {
            if (this.rb)
                return this.rb;
            if (!this.I)
                return I;
            for (var a = [], b = this.I.kb(), c = 0; c < b[B]; c++)
                for (var d = b[c], f = aa(ma(d)), d = this.$a(d), h = 0; h < d[B]; h++) {
                    var k = f;
                    d[h] !== I && (k += Wf + aa(ma(d[h])));
                    a[v](k)
                }
            return this.rb = a[Zd](se)
        };
        M.ql = function() {
            return this[Pb]() ? oa(this[Pb]()) : I
        };
        M.sc = function() {
            this.rb = null
        };
        ya(M, function() {
            var a = new Jr;
            a.rb = this.rb;
            this.I && (a.I = this.I[kc](), a.P = this.P);
            return a
        });
        M.Ub = function(a) {
            a = ma(a);
            this.qa && (a = a[$d]());
            return a
        };
        M.If = function(a) {
            a && !this.qa && (this.Tb(), this.sc(), xr(this.I, function(a, c) {
                var d = c[$d]();
                c != d && (this[tb](c), this.Ak(d, a))
            }, this));
            this.qa = a
        };
        M.extend = function(a) {
            for (var b = 0; b < arguments[B]; b++)
                xr(arguments[b], function(a, b) {
                    this.add(b, a)
                }, this)
        };
        function Rr(a) {
            var b = {};
            if (Mn(a) != yl || Pn(a))
                b.v = null != a ? a : null, b.f = null;
            else {
                b.v = "undefined" == typeof a.v ? null : a.v;
                var c = typeof a.f;
                if ("undefined" == c || c == wl)
                    b.f = null;
                else if (c == L)
                    b.f = a.f;
                else
                    throw m("Formatted value ('f'), if specified, must be a string.");
                c = typeof a.p;
                if (c == yl)
                    b.p = a.p;
                else if (c != wl && "undefined" != c)
                    throw m("Properties ('p'), if specified, must be an Object.");
            }
            return{v: b.v, f: b.f, p: b.p}
        }
        function Sr(a, b, c) {
            if (typeof b == yl && zi in b) {
                if (Pi in b && typeof b.desc != ci)
                    throw m('Property "desc" in ' + c + " must be boolean.");
                if (Bi in b && !R(b.compare))
                    throw m('Property "compare" in ' + c + " must be a function.");
            } else
                throw m(c + ' must be an object with a "column" property.');
            Tr(a, b.column)
        }
        function Ur(a, b, c) {
            function d(d, f) {
                for (var h = 0; h < c[B]; h++) {
                    var k = c[h], n = k.column, u = b(d, n), ka = b(f, n), n = k.compare ? null === u ? null === ka ? 0 : -1 : null === ka ? 1 : k.compare(u, ka) : Vr(a[yb](n), u, ka);
                    if (0 != n)
                        return n * (k.desc ? -1 : 1)
                }
                return 0
            }
            if (R(c))
                d = c;
            else if (typeof c == J)
                Tr(a, c), c = [{column: c}];
            else if (typeof c == yl)
                if (On(c)) {
                    if (1 > c[B])
                        throw m("sortColumns is an empty array. Must have at least one element.");
                    for (var f = {}, h = [], k = 0; k < c[B]; k++) {
                        var n, u = c[k];
                        if (typeof c[k] == J)
                            n = c[k], Tr(a, n), u = {column: c[k]};
                        else if (typeof c[k] ==
                                yl)
                            n = c[k].column, Sr(a, c[k], Cm + k + Dh);
                        else
                            throw m("sortColumns is an array, but not composed of only objects or numbers.");
                        if (n in f)
                            throw m("Column index " + n + " is duplicated in sortColumns.");
                        f[n] = !0;
                        h[v](u)
                    }
                    c = h
                } else
                    Sr(a, c, Bm), c = [c];
            return d
        }
        function Wr(a, b) {
            var c = a[td]();
            if (0 < c) {
                if (l[cb](b) !== b || 0 > b || b >= c)
                    throw m("Invalid row index " + b + ". Should be in the range [0-" + (c - 1) + "].");
            } else
                throw m("Table has no rows.");
        }
        function Tr(a, b) {
            var c = a[w]();
            if (0 < c) {
                if (l[cb](b) !== b || 0 > b || b >= c)
                    throw m("Invalid column index " + b + ". Should be an integer in the range [0-" + (c - 1) + "].");
            } else
                throw m("Table has no columns.");
        }
        function Xr(a, b, c) {
            a = a[yb](b);
            if (!Yr(c, a))
                throw m(qh + c + fe + a + " in column index " + b);
        }
        function Yr(a, b) {
            if (null == a)
                return!0;
            var c = typeof a;
            switch (b) {
                case J:
                    if (c == J)
                        return!0;
                    break;
                case L:
                    if (c == L)
                        return!0;
                    break;
                case ci:
                    if (c == ci)
                        return!0;
                    break;
                case Li:
                case Mi:
                    if (Pn(a))
                        return!0;
                    break;
                case Xm:
                    if (On(a) && 2 < a[B] && 5 > a[B]) {
                        for (var c = !0, d = 0; d < a[B]; d++) {
                            var f = a[d];
                            if (typeof f != J || f != l[cb](f)) {
                                c = !1;
                                break
                            }
                        }
                        if (0 > a[0] || 0 > a[1] || 59 < a[1] || 0 > a[2] || 59 < a[2])
                            c = !1;
                        4 == a[B] && (0 > a[3] || 999 < a[3]) && (c = !1);
                        if (c)
                            return!0
                    }
            }
            return!1
        }
        function Vr(a, b, c) {
            if (null == b)
                return null == c ? 0 : -1;
            if (null == c)
                return 1;
            switch (a) {
                case ci:
                case J:
                case L:
                case Li:
                case Mi:
                    return b < c ? -1 : c < b ? 1 : 0;
                case Xm:
                    for (a = 0; 3 > a; a++) {
                        if (b[a] < c[a])
                            return-1;
                        if (c[a] < b[a])
                            return 1
                    }
                    b = 4 > b[B] ? 0 : b[3];
                    c = 4 > c[B] ? 0 : c[3];
                    return b < c ? -1 : c < b ? 1 : 0
                }
        }
        function Zr(a, b) {
            Tr(a, b);
            var c = a[yb](b), d = null, f = null, h, k, n = a[td]();
            for (h = 0; h < n; h++)
                if (k = a[A](h, b), null != k) {
                    f = d = k;
                    break
                }
            if (null == d)
                return{min: null, max: null};
            for (h++; h < n; h++)
                k = a[A](h, b), null != k && (0 > Vr(c, k, d) ? d = k : 0 > Vr(c, f, k) && (f = k));
            return{min: d, max: f}
        }
        function $r(a, b) {
            for (var c = Ur(a, function(b, c) {
                return a[A](b, c)
            }, b), d = [], f = a[td](), h = 0; h < f; h++)
                d[v](h);
            Ro(d, c);
            return d
        }
        function as(a, b) {
            Tr(a, b);
            var c = a[td]();
            if (0 == c)
                return[];
            for (var d = [], f = 0; f < c; ++f)
                d[v](a[A](f, b));
            var h = a[yb](b);
            Ro(d, function(a, b) {
                return Vr(h, a, b)
            });
            var c = d[0], k = [];
            k[v](c);
            for (f = 1; f < d[B]; f++) {
                var n = d[f];
                0 != Vr(h, n, c) && k[v](n);
                c = n
            }
            return k
        }
        function bs(a, b, c) {
            if (R(b))
                return b(a, c);
            for (var d = 0; d < b[B]; d++) {
                var f = b[d], h = f.column, k = a[A](c, h), n = a[yb](h);
                if (qn in f) {
                    if (0 !== Vr(n, k, f[Sc]))
                        return!1
                } else if (null != f.minValue || null != f.maxValue)
                    if (null == k || null != f.minValue && 0 > Vr(n, k, f.minValue) || null != f.maxValue && 0 < Vr(n, k, f.maxValue))
                        return!1;
                if (R(f[Kc]) && !f[Kc](k, c, h, a))
                    return!1
            }
            return!0
        }
        function cs(a, b) {
            if (!R(b)) {
                if (!On(b) || 0 == b[B])
                    throw m("columnFilters must be a non-empty array");
                for (var c = {}, d = 0; d < b[B]; d++) {
                    if (typeof b[d] != yl || !(zi in b[d])) {
                        if (!(qn in b[d] || hl in b[d] || cl in b[d]))
                            throw m(Ai + d + '] must have properties "column" and "value", "minValue"or "maxValue"');
                        if (qn in b[d] && (hl in b[d] || cl in b[d]))
                            throw m(Ai + d + '] must specify either "value" or range properties ("minValue" and/or "maxValue"');
                    }
                    var f = b[d].column;
                    if (f in c)
                        throw m("Column index " + f + " is duplicate in columnFilters.");
                    Tr(a, f);
                    Xr(a, f, b[d][Sc]);
                    c[f] = !0
                }
            }
            c = [];
            d = a[td]();
            for (f = 0; f < d; f++)
                bs(a, b, f) && c[v](f);
            return c
        }
        function ds(a, b) {
            var c;
            b == Xm ? (c = [], c[v](a[0]), c[v]((10 > a[1] ? Af : I) + a[1]), c[v]((10 > a[2] ? Af : I) + a[2]), c = c[Zd](Of), 3 < a[B] && 0 < a[3] && (c += mf + (10 > a[3] ? Df : 100 > a[3] ? Af : I) + a[3])) : b == Li ? (c = new google[F].DateFormat({formatType: dl, valueType: Li}), c = c.formatValue(a)) : b == Mi ? (c = new google[F].DateFormat({formatType: dl, valueType: Mi}), c = c.formatValue(a)) : c = null != a ? ma(a) : I;
            return c
        }
        function es(a, b, c, d) {
            for (var f = null, h = a[td](); (d?0 <= b:b < h) && null === f; )
                f = a[A](b, c), b += d ? -1 : 1;
            return f
        }
        ;
        var fs = {Hm: Bf, Im: Cf};
        function V(a, b) {
            this.Mb = b === Bf ? Bf : Cf;
            if (a) {
                if (P(a))
                    a = mo(a);
                else
                    t:for (var c = a.cols || [], d = a[xc] || [], f = c[B], h = 0; h < f; h++) {
                        var k = c[h][z];
                        if (k == Li || k == Mi)
                            for (var k = d[B], n = 0; n < k; n++) {
                                var u = d[n].c[h];
                                if (u) {
                                    var C = u.v;
                                    if (Pn(C))
                                        break t;
                                    P(C) && (u = jo(u), u = mo(u), d[n].c[h] = u)
                                }
                            }
                    }
                this.H = a.cols || [];
                this.J = a[xc] || [];
                this.ab = a.p || null
            } else
                this.H = [], this.J = [], this.ab = null;
            this.Ma = []
        }
        var gs = {hm: ci, wm: J, Dm: L, mm: Li, Fm: Xm, nm: Mi};
        M = V[E];
        M.H = null;
        M.Mb = null;
        M.J = null;
        M.ab = null;
        M.Ma = null;
        M.getNumberOfRows = function() {
            return this.J[B]
        };
        M.getNumberOfColumns = function() {
            return this.H[B]
        };
        M.getColumnId = function(a) {
            Tr(this, a);
            return this.H[a].id || I
        };
        M.getColumnIndex = function(a) {
            for (var b = this.H, c = 0; c < b[B]; c++)
                if (b[c].id == a)
                    return c;
            return-1
        };
        M.getColumnLabel = function(a) {
            Tr(this, a);
            return this.H[a][Dc] || I
        };
        M.getColumnPattern = function(a) {
            Tr(this, a);
            return this.H[a].pattern
        };
        M.getColumnRole = function(a) {
            a = this[Zb](a, hm);
            return a = P(a) ? a : I
        };
        M.getColumnType = function(a) {
            Tr(this, a);
            return this.H[a][z]
        };
        Na(M, function(a, b) {
            Wr(this, a);
            Tr(this, b);
            var c = this.Xa(a, b), d = null;
            c && (d = c.v, d = Nn(d) ? d : null);
            return d
        });
        M.Xa = function(a, b) {
            return this.J[a].c[b]
        };
        M.ll = function(a, b) {
            this.Ma[a] = this.Ma[a] || [];
            var c = this.Ma[a], d = c[b] || {};
            return c[b] = d
        };
        M.Nk = function(a, b) {
            var c = this.Ma[a];
            c && c[b] && (c[b] = {})
        };
        M.getFormattedValue = function(a, b) {
            Wr(this, a);
            Tr(this, b);
            var c = this.Xa(a, b), d = I;
            if (c)
                if ("undefined" != typeof c.f && null != c.f)
                    d = c.f;
                else if (c = this.ll(a, b), Nn(c.Xh))
                    d = c.Xh;
                else {
                    var f = this[A](a, b);
                    null === f || (d = ds(f, this[yb](b)));
                    c.Xh = d
                }
            return d
        };
        M.getProperty = function(a, b, c) {
            Wr(this, a);
            Tr(this, b);
            return(a = (a = this.Xa(a, b)) && a.p) && c in a ? a[c] : null
        };
        M.getProperties = function(a, b) {
            Wr(this, a);
            Tr(this, b);
            var c = this.Xa(a, b);
            c || (c = {v: null, f: null}, this.J[a].c[b] = c);
            c.p || (c.p = {});
            return c.p
        };
        M.getTableProperties = function() {
            return this.ab
        };
        M.getTableProperty = function(a) {
            var b = this.ab;
            return b && a in b ? b[a] : null
        };
        M.setTableProperties = function(a) {
            this.ab = a
        };
        M.setTableProperty = function(a, b) {
            this.ab || (this.ab = {});
            this.ab[a] = b
        };
        Ta(M, function(a, b, c) {
            this[Jb](a, b, c, void 0, void 0)
        });
        M.setFormattedValue = function(a, b, c) {
            this[Jb](a, b, void 0, c, void 0)
        };
        M.setProperties = function(a, b, c) {
            this[Jb](a, b, void 0, void 0, c)
        };
        M.setProperty = function(a, b, c, d) {
            this[ud](a, b)[c] = d
        };
        M.setCell = function(a, b, c, d, f) {
            Wr(this, a);
            Tr(this, b);
            this.Nk(a, b);
            var h = this.Xa(a, b);
            h || (h = {}, this.J[a].c[b] = h);
            "undefined" != typeof c && (Xr(this, b, c), h.v = c);
            "undefined" != typeof d && (h.f = d);
            Nn(f) && (h.p = Qn(f) ? f : {})
        };
        M.setRowProperties = function(a, b) {
            Wr(this, a);
            this.J[a].p = b
        };
        M.setRowProperty = function(a, b, c) {
            this[fd](a)[b] = c
        };
        M.getRowProperty = function(a, b) {
            Wr(this, a);
            var c = this.J[a];
            return(c = c && c.p) && b in c ? c[b] : null
        };
        M.getRowProperties = function(a) {
            Wr(this, a);
            a = this.J[a];
            a.p || (a.p = {});
            return a.p
        };
        M.setColumnLabel = function(a, b) {
            Tr(this, a);
            this.H[a].label = b
        };
        M.setColumnProperties = function(a, b) {
            Tr(this, a);
            this.H[a].p = b
        };
        M.setColumnProperty = function(a, b, c) {
            this[Wc](a)[b] = c
        };
        M.getColumnProperty = function(a, b) {
            Tr(this, a);
            var c = this.H[a];
            return(c = c && c.p) && b in c ? c[b] : null
        };
        M.getColumnProperties = function(a) {
            Tr(this, a);
            a = this.H[a];
            a.p || (a.p = {});
            return a.p
        };
        M.insertColumn = function(a, b, c, d) {
            a !== this.H[B] && (this.Ma = [], Tr(this, a));
            Qn(b) || (b = {id: d || I, label: c || I, pattern: I, type: b});
            c = b[z];
            if (!Vp(gs, c))
                throw m("Invalid type: " + c + mf);
            if (c = b.role)
                d = b.p || {}, d.role = c, b.p = d;
            this.H[Yd](a, 0, b);
            for (b = 0; b < this.J[B]; b++)
                this.J[b].c[Yd](a, 0, {v: null, f: null})
        };
        M.addColumn = function(a, b, c) {
            this.insertColumn(this.H[B], a, b, c);
            return this.H[B] - 1
        };
        M.vk = function(a, b) {
            var c = Rr(b);
            Xr(this, a, c.v);
            return c
        };
        M.insertRows = function(a, b) {
            a !== this.J[B] && (this.Ma = [], Wr(this, a));
            var c;
            if (O(b))
                c = b;
            else if (typeof b == J) {
                if (b != l[cb](b) || 0 > b)
                    throw m("Invalid value for numOrArray: " + b + ". If numOrArray is a number it should be a nonnegative integer.");
                var d = [];
                for (c = 0; c < b; c++)
                    d[c] = null;
                c = d
            } else
                throw m("Invalid value for numOrArray. Should be a number or an array of arrays of cells.");
            for (var d = [], f = 0; f < c[B]; f++) {
                var h = c[f], k = [];
                if (null === h)
                    for (h = 0; h < this.H[B]; h++)
                        k[v]({v: null, f: null});
                else if (O(h)) {
                    if (h[B] != this.H[B])
                        throw m("Row given with size different than " +
                                this.H[B] + " (the number of columns in the table).");
                    for (var n = 0; n < h[B]; n++)
                        k[v](this.vk(n, h[n]))
                } else
                    throw m("Every row given must be either null or an array.");
                h = {};
                h.c = k;
                d[v](h);
                1E4 == d[B] && (k = d, Zn(Mo, this.J, a, 0)[yc](null, k), a += d[B], d = [])
            }
            c = d;
            Zn(Mo, this.J, a, 0)[yc](null, c);
            return a + d[B] - 1
        };
        M.addRows = function(a) {
            if (typeof a == J || O(a))
                return this.insertRows(this.J[B], a);
            throw m("Argument given to addRows must be either a number or an array");
        };
        M.addRow = function(a) {
            if (O(a))
                return this[kd]([a]);
            if (null != a)
                throw m("If argument is given to addRow, it must be an array, or null");
            return this[kd](1)
        };
        M.getColumnRange = function(a) {
            return Zr(this, a)
        };
        M.getSortedRows = function(a) {
            return $r(this, a)
        };
        M.sort = function(a) {
            this.Ma = [];
            a = Ur(this, function(a, c) {
                var d = a.c[c];
                return d ? d.v : null
            }, a);
            Ro(this.J, a)
        };
        ya(M, function() {
            return new V(this[Zc]())
        });
        M.toPOJO = function() {
            return ko({cols: this.H, rows: this.J, p: this.ab}, lo)
        };
        M.toJSON = function() {
            var a = this[Zc]();
            return(new go(void 0)).ti(a)
        };
        M.getDistinctValues = function(a) {
            return as(this, a)
        };
        M.getFilteredRows = function(a) {
            return cs(this, a)
        };
        M.removeRows = function(a, b) {
            0 >= b || (this.Ma = [], Wr(this, a), a + b > this.J[B] && (b = this.J[B] - a), this.J[Yd](a, b))
        };
        M.removeRow = function(a) {
            this.removeRows(a, 1)
        };
        M.removeColumns = function(a, b) {
            if (!(0 >= b)) {
                this.Ma = [];
                Tr(this, a);
                a + b > this.H[B] && (b = this.H[B] - a);
                this.H[Yd](a, b);
                for (var c = 0; c < this.J[B]; c++)
                    this.J[c].c[Yd](a, b)
            }
        };
        M.removeColumn = function(a) {
            this.removeColumns(a, 1)
        };
        function hs(a) {
            var b = a.version || Cf;
            this.lk = Vp(fs, b) ? b : Cf;
            this.wf = a.status;
            this.tb = [];
            this.vb = [];
            this.vb = a.warnings || [];
            this.tb = a[Bc] || [];
            is(this.vb);
            is(this.tb);
            this.wf != gj && (this.qh = a.sig, this.g = new V(a.table, this.lk))
        }
        function is(a) {
            for (var b = 0; b < a[B]; b++) {
                var c = a[b].detailed_message;
                c && (a[b].detailed_message = c ? c[nb](js) && !c[nb](ks) ? c : c[q](/&/g, te)[q](/</g, ve)[q](/>/g, ue)[q](/\"/g, we) : I)
            }
        }
        var js = /^[^<]*(<a(( )+target=('_blank')?("_blank")?)?( )+(href=('[^']*')?("[^"]*")?)>[^<]*<\/a>[^<]*)*$/, ks = /javascript((s)?( )?)*:/;
        M = hs[E];
        M.qh = null;
        M.g = null;
        M.isError = function() {
            return this.wf == gj
        };
        M.hasWarning = function() {
            return this.wf == wn
        };
        M.containsReason = function(a) {
            for (var b = 0; b < this.tb[B]; b++)
                if (this.tb[b].reason == a)
                    return!0;
            for (b = 0; b < this.vb[B]; b++)
                if (this.vb[b].reason == a)
                    return!0;
            return!1
        };
        M.getDataSignature = function() {
            return this.qh
        };
        M.getDataTable = function() {
            return this.g
        };
        M.Yf = function(a) {
            return this[$c]() && this.tb && this.tb[0] && this.tb[0][a] ? this.tb[0][a] : this.hasWarning() && this.vb && this.vb[0] && this.vb[0][a] ? this.vb[0][a] : null
        };
        M.getReasons = function() {
            var a = this.Yf(am);
            return null != a && a != I ? [a] : []
        };
        M.getMessage = function() {
            return this.Yf(gl) || I
        };
        M.getDetailedMessage = function() {
            return this.Yf(Qi) || I
        };
        function ls(a, b) {
            var c = b || {};
            this.jf = c.sendMethod || Wh;
            this.tj = !!c.xhrWithCredentials;
            if (!Vp(ms, this.jf))
                throw m("Send method not supported: " + this.jf);
            this.Mg = c.makeRequestParams_ || {};
            Rp(a) ? a = this.Zk(a) : Qp(a) && (a = this.$k(a));
            var d = a, c = Qp(d), d = Bp(d), d = Op[Kc](d);
            (c = c && d) || (d = a, c = Rp(d), d = Bp(d), d = Op[Kc](d), c = c && d);
            this.sj = c;
            this.rj = a;
            this.Eg = ns++;
            os[v](this)
        }
        var ms = {Km: An, Lm: Bn, Am: "scriptInjection", tm: al, fm: Wh}, ps = new ur({"X-DataSource-Auth": "a"}), ns = 0, qs = {};
        ls[E].Yh = 30;
        var os = [], rs = N.gadgets;
        function ss() {
            for (var a = 0; a < os[B]; a++) {
                var b = os[a];
                b.Jf && b.xc()
            }
        }
        M = ls[E];
        M.$k = function(a) {
            var b = new Ir(a);
            433 == b.lb && b.Uc(null);
            var c = b.Ta, c = c[q](/\/ccc$/, yf);
            /\/pub$/[Kc](c) && (c = c[q](/\/pub$/, yf), b.Id(Wl, Ff));
            b.Tc(c);
            c = Ap(a);
            a = null != (ia(yp(a)[4] || null) || null);
            var d = Hp[Kc](c), c = Ip[Kc](c) && !d && a;
            b.Vc(c ? Ak : Ek);
            return b[Pb]()
        };
        M.Zk = function(a) {
            var b = new Ir(a);
            433 == b.lb && b.Uc(null);
            var c = b.Ta, c = c[q](/\/edit$/, wf);
            b.Tc(c);
            c = Ap(a);
            a = null !== (ia(yp(a)[4] || null) || null);
            a = Np[Kc](c) && a;
            b.Vc(a ? Ak : Ek);
            return b[Pb]()
        };
        function ts(a, b) {
            var c = a[x](ne);
            -1 != c && (a = a[Rd](0, c));
            var d = a[x](Yf), f = c = I, h = [];
            -1 == d ? c = a : (c = a[Rd](0, d), f = a[Rd](d + 1), h = f[Yb](se));
            d = [];
            for (f = 0; f < h[B]; f++) {
                var k = {};
                k.name = h[f][Yb](Wf)[0];
                k.ag = h[f];
                d[v](k)
            }
            for (var n in b) {
                h = b[n];
                k = !1;
                for (f = 0; f < d[B]; f++)
                    if (d[f][jd] == n) {
                        d[f].ag = n + Wf + aa(h);
                        k = !0;
                        break
                    }
                k || (f = {}, f.name = n, f.ag = n + Wf + aa(h), d[v](f))
            }
            n = c;
            if (0 < d[B]) {
                n += Yf;
                c = [];
                for (f = 0; f < d[B]; f++)
                    c[v](d[f].ag);
                n += c[Zd](se)
            }
            return n
        }
        M.Ej = function(a) {
            if (a[Hd].nh())
                a = ro(a[Hd].cl()), a[nb](/^({.*})$/) ? (a = no(a), us(a)) : ao(oo(a));
            else if (this.uc)
                this.Qf(ok, a[Hd].Uh());
            else
                throw m("google.visualization.Query: " + a[Hd].Uh());
        };
        function us(a) {
            var b = a.reqId, c = qs[b];
            if (c)
                qs[b] = null, c.zc(a);
            else
                throw m("Missing query for request id: " + b);
        }
        M.uc = null;
        M.ge = null;
        M.pe = null;
        M.Ra = null;
        M.Df = null;
        M.yc = null;
        M.Jf = !0;
        M.Kb = 0;
        M.Nb = null;
        M.Ia = !1;
        M.setRefreshInterval = function(a) {
            if (typeof a != J || 0 > a)
                throw m("Refresh interval must be a non-negative number");
            this.Kb = a;
            this.$h()
        };
        M.Ef = function() {
            this.pe && (ca[ab](this.pe), this.pe = null)
        };
        M.ml = function() {
            this.Qf(Ym, ah)
        };
        M.Qf = function(a, b, c) {
            this.zc({version: Cf, status: gj, errors: [{reason: a, message: b, detailed_message: c}]})
        };
        M.xj = function(a) {
            var b = {};
            this.Ra && (b.tq = ma(this.Ra));
            var c = dm + ma(this.Eg), d = this.Nb;
            d && (c += Qf + d);
            this.Df && (c += Rf + this.Df);
            b.tqx = c;
            if (this.yc) {
                var c = [], f;
                for (f in this.yc)
                    c[v](f + Of + this.yc[f]);
                b.tqh = c[Zd](Pf)
            }
            a = ts(a, b);
            this.Kb && (a = new Ir(a), gp && a.Hk(), a = a[Pb]());
            return a
        };
        M.xc = function() {
            var a = this.xj(this.rj), b = {};
            qs[ma(this.Eg)] = this;
            var c = this.jf, d = yg;
            c == Bn && (c = An, d = Yg);
            if (c == Wh) {
                b = {};
                if (/[?&]alt=gviz(&[^&]*)*$/[Kc](a))
                    c = al;
                else {
                    var c = a.search(Cp), f;
                    i:{
                        for (f = 0; 0 <= (f = a[x](dn, f)) && f < c; ) {
                            var h = a[Od](f - 1);
                            if (38 == h || 63 == h)
                                if (h = a[Od](f + 4), !h || 61 == h || 38 == h || 35 == h)
                                    break i;
                            f += 5
                        }
                        f = -1
                    }
                    if (0 > f)
                        c = null;
                    else {
                        h = a[x](se, f);
                        if (0 > h || h > c)
                            h = c;
                        f += 5;
                        c = oa(a.substr(f, h - f)[q](/\+/g, de))
                    }
                    f = (c || Wh)[Yb](Of);
                    c = f[0];
                    c !== An && c !== Bn || !Ho(f, zn) || (b.xhrWithCredentials = !0);
                    Vp(ms, c) || (c = Wh)
                }
                b = {sendMethod: c,
                    options: b};
                c = b.sendMethod;
                b = b.options
            }
            if (c == al)
                if (Jn(sj))
                    this.Cj(a, this.Mg);
                else
                    throw m("gadgets.io.makeRequest is not defined.");
            else {
                if (!(f = c == An)) {
                    if (c = c == Wh)
                        f = (new Ir(N[ec][wc])).Bj(new Ir(a))[Pb](), c = yp(N[ec][wc]), f = yp(f), c = c[3] == f[3] && c[1] == f[1] && c[4] == f[4];
                    f = c
                }
                f ? (c = void 0, f = a, d == Yg && (a = a[Yb](Yf), 1 <= a[B] && (f = a[0]), 2 <= a[B] && (c = a[1])), a = f, f = Yn(this.Ej, this), b = this.tj || !!b.xhrWithCredentials, h = new Dr, Gr[v](h), f && h.i(Ci, f), h.Rd(Zl, h.yj), b && h.Dj(b), h[qb](a, d, c, ps)) : (d = fa[Nb](bi)[0], b = null === this.Nb,
                        this.sj && b ? (b = fa[vb](Jk), this.Aj(b, a), d[Xa](b)) : this.pf(a))
            }
        };
        M.Aj = function(a, b) {
            var c = this;
            a.onerror = function() {
                c.pf(b)
            };
            a.onload = function() {
                c.pf(b)
            };
            Ca(a[s], ul);
            a.src = b + xe + (new Date).getTime()
        };
        M.Cj = function(a, b) {
            null == b[rs.io[Rc].CONTENT_TYPE] && (b[rs.io[Rc].CONTENT_TYPE] = rs.io.ContentType.TEXT);
            null == b[rs.io[Rc].AUTHORIZATION] && (b[rs.io[Rc].AUTHORIZATION] = rs.io.AuthorizationType.SIGNED);
            null == b.OAUTH_ENABLE_PRIVATE_NETWORK && (b.OAUTH_ENABLE_PRIVATE_NETWORK = !0);
            null == b.OAUTH_ADD_EMAIL && (b.OAUTH_ADD_EMAIL = !0);
            rs.io.makeRequest(a, Yn(this.Hl, this), b);
            this.fi()
        };
        M.Hl = function(a) {
            if (null != a && a.data)
                ao(oo(a.data));
            else {
                var b = I;
                a && a[Bc] && (b = a[Bc][Zd](de));
                this.Qf(bl, tj, b)
            }
        };
        M.pf = function(a) {
            this.fi();
            co(a);
            this.$h()
        };
        M.fi = function() {
            var a = this;
            this.Ef();
            this.pe = ca[Wb](function() {
                a.ml()
            }, 1E3 * this.Yh)
        };
        M.Hh = function() {
            this.ge && (ca[ab](this.ge), this.ge = null)
        };
        M.$h = function() {
            this.Hh();
            if (0 != this.Kb && this.Jf && this.Ia) {
                var a = this;
                this.ge = ca[Wb](function() {
                    a.xc()
                }, 1E3 * this.Kb)
            }
        };
        M.send = function(a) {
            this.Ia = !0;
            this.uc = a;
            this.xc()
        };
        M.makeRequest = function(a, b) {
            this.Ia = !0;
            this.uc = a;
            this.cm = al;
            this.Mg = b || {};
            this.xc()
        };
        M.abort = function() {
            this.Ia = !1;
            this.Ef();
            this.Hh()
        };
        M.zc = function(a) {
            this.Ef();
            a = new hs(a);
            if (!a.containsReason(vl)) {
                a[$c]() ? this.Nb = null : this.Nb = a.getDataSignature();
                var b = this.uc;
                b[G](b, a)
            }
        };
        M.setTimeout = function(a) {
            if (typeof a != J || ga(a) || 0 >= a)
                throw m("Timeout must be a positive number");
            this.Yh = a
        };
        M.setRefreshable = function(a) {
            if (typeof a != ci)
                throw m("Refreshable must be a boolean");
            return this.Jf = a
        };
        M.setQuery = function(a) {
            if (typeof a != L)
                throw m("queryString must be a string");
            this.Ra = a
        };
        M.Yl = function(a) {
            this.Df = a;
            null != a && this.ki(jn, a)
        };
        M.ki = function(a, b) {
            a = a[q](/\\/g, zh);
            b = b[q](/\\/g, zh);
            a = a[q](/:/g, Ah);
            b = b[q](/:/g, Ah);
            a = a[q](/;/g, Bh);
            b = b[q](/;/g, Bh);
            this.yc || (this.yc = {});
            this.yc[a] = b
        };
        function vs() {
            var a;
            ws || (ws = !0, N.IDIModule && N.IDIModule.registerListener(ss, {pollingInterval: 100}), N.gadgets && (xs(nf), this.ei()));
            a = fa;
            a = a.querySelectorAll && a.querySelector ? a.querySelectorAll(eg) : a[Nb](eg);
            this.Jl = eo(a[0])
        }
        var ws = !1;
        vs[E].ni = 200;
        function ys() {
            return!!N.gadgets && !!N.gadgets.rpc
        }
        vs[E].ei = function() {
            if (ys()) {
                var a = N.gadgets;
                R(a.rpc.register) && a.rpc.register(bm, ss)
            } else
                0 < this.ni && (this.ni--, ca[Wb](Yn(this.ei, this), 100))
        };
        vs[E].createQueryFromPrefs = function(a) {
            var b = a.getString(Gh), c = b[$d]();
            if (0 == c[x](Bk) || 0 == c[x](Fk))
                b = oa(b);
            b = new ls(b);
            a = a.getInt(Fh);
            b[gd](a);
            return b
        };
        vs[E].validateResponse = function(a) {
            return this.Jl(a)
        };
        function xs(a) {
            if (ys()) {
                var b = N.gadgets;
                try {
                    b.rpc.getRelayUrl(a) || b.rpc.setRelayUrl(a, Ck)
                } catch (c) {
                    R(b.rpc.setRelayUrl) && b.rpc.setRelayUrl(a, Ck)
                }
            }
        }
        N.gadgets && !ys() && co("http://www.gmodules.com/gadgets/rpc/rpc.v.js");
        xs(nf);
        function zs(a) {
            var b = a.__eventTarget;
            null == b && (b = new rr, a.__eventTarget = b);
            return a = b
        }
        function As(a) {
            return function(b) {
                a(b.Wl)
            }
        }
        function Bs(a) {
            this.Ul = a
        }
        Bs[E].getKey = function() {
            return this.Ul
        };
        function Cs(a, b) {
            Oq[G](this, a);
            this.Wl = b
        }
        S(Cs, Oq);
        function Ds(a, b, c, d) {
            this.Ra = a;
            this.lh = b;
            this.ob = c || {};
            this.Nc = d;
            this.$c = null;
            d && (this.$c = this.Gf = eo(d));
            if (!(b && aj in b && typeof b[Kd] == qj))
                throw m("Visualization must have a draw method.");
        }
        M = Ds[E];
        M.Gf = null;
        M.Oh = null;
        M.Nh = null;
        M.g = null;
        M.setOptions = function(a) {
            this.ob = a || {}
        };
        M.draw = function() {
            this.g && this.lh[Kd](this.g, this.ob)
        };
        M.Xl = function(a) {
            var b = this.Nc;
            this.$c = a ? a : b ? this.$c = this.Gf : null
        };
        M.sendAndDraw = function() {
            if (!this.$c)
                throw m("If no container was supplied, a custom error handler must be supplied instead.");
            var a = this;
            this.Ra[qb](function(b) {
                var c = a.Oh;
                c && c(b);
                a.zc(b);
                (c = a.Nh) && c(b)
            })
        };
        M.zc = function(a) {
            var b = this.$c;
            b(a) && (this.g = a[hb](), this.lh[Kd](this.g, this.ob))
        };
        M.setCustomResponseHandler = function(a) {
            if (null != a) {
                if (typeof a != qj)
                    throw m("Custom response handler must be a function.");
                this.Oh = a
            }
        };
        M.setCustomPostResponseHandler = function(a) {
            if (null != a) {
                if (typeof a != qj)
                    throw m("Custom post response handler must be a function.");
                this.Nh = a
            }
        };
        M.abort = function() {
            this.Ra[xd]()
        };
        function W(a) {
            this.g = a;
            var b = [];
            a = a[w]();
            for (var c = 0; c < a; c++)
                b[v](c);
            this.B = b;
            this.Wa = !0;
            this.Va = null;
            this.hf = [];
            this.gf = !0
        }
        M = W[E];
        M.Vj = function() {
            for (var a = 0; a < this.B[B]; a++)
                Qn(this.B[a]) && (this.hf[a] = []);
            this.gf = !1
        };
        M.Zc = function() {
            this.gf = !0
        };
        M.Rk = function() {
            for (var a = [], b = this.g[td](), c = 0; c < b; c++)
                a[v](c);
            this.Va = a;
            this.Zc()
        };
        M.setColumns = function(a) {
            for (var b = this.g, c = Up(Es), d = 0; d < a[B]; d++) {
                var f = a[d];
                if (Sn(f))
                    Tr(b, f);
                else if (Qn(f)) {
                    var h = f.sourceColumn, f = f.calc;
                    if (P(f)) {
                        if (!c || c && !Ho(c, f))
                            throw m('Unknown function "' + f + ie);
                        null != h && Tr(b, h)
                    }
                } else
                    throw m("Invalid column input, expected either a number or an object.");
            }
            this.B = Yp(a);
            a = this.g;
            b = this.B;
            for (c = 0; c < b[B]; c++)
                if (d = b[c], Qn(d)) {
                    if (h = d.role)
                        f = d.properties || {}, f.role = h, d.properties = f;
                    h = d.sourceColumn;
                    Sn(h) && (Tr(a, h), d.calc = d.calc || Gk, La(d, d[z] || a[yb](h)))
                }
            this.Zc()
        };
        M.Lh = function(a, b) {
            if (O(a)) {
                if (Nn(b))
                    throw m("If the first parameter is an array, no second parameter is expected");
                for (var c = 0; c < a[B]; c++)
                    Wr(this.g, a[c]);
                return Ko(a)
            }
            if (Mn(a) == J) {
                if (!Mn(b) == J)
                    throw m("If first parameter is a number, second parameter must be specified and be a number.");
                if (a > b)
                    throw m("The first parameter (min) must be smaller than or equal to the second parameter (max).");
                Wr(this.g, a);
                Wr(this.g, b);
                for (var d = [], c = a; c <= b; c++)
                    d[v](c);
                return d
            }
            throw m("First parameter must be a number or an array.");
        };
        M.setRows = function(a, b) {
            this.Va = this.Lh(a, b);
            this.Wa = !1;
            this.Zc()
        };
        M.getViewColumns = function() {
            return Yp(this.B)
        };
        M.getViewRows = function() {
            if (this.Wa) {
                for (var a = [], b = this.g[td](), c = 0; c < b; c++)
                    a[v](c);
                return a
            }
            return Ko(this.Va)
        };
        M.hideColumns = function(a) {
            this[Fc](Co(this.B, function(b) {
                return!Ho(a, b)
            }));
            this.Zc()
        };
        M.hideRows = function(a, b) {
            var c = this.Lh(a, b);
            this.Wa && (this.Rk(), this.Wa = !1);
            this.setRows(Co(this.Va, function(a) {
                return!Ho(c, a)
            }));
            this.Zc()
        };
        M.getViewColumnIndex = function(a) {
            for (var b = 0; b < this.B[B]; b++) {
                var c = this.B[b];
                if (c == a || Qn(c) && c.sourceColumn == a)
                    return b
            }
            return-1
        };
        M.getViewRowIndex = function(a) {
            return this.Wa ? 0 > a || a >= this.g[td]() ? -1 : a : Ao(this.Va, a)
        };
        M.getTableColumnIndex = function(a) {
            Tr(this, a);
            a = this.B[a];
            return Sn(a) ? a : Qn(a) && Sn(a.sourceColumn) ? a.sourceColumn : -1
        };
        M.getUnderlyingTableColumnIndex = function(a) {
            a = this.getTableColumnIndex(a);
            if (-1 == a)
                return a;
            R(this.g.getUnderlyingTableColumnIndex) && (a = this.g.getUnderlyingTableColumnIndex(a));
            return a
        };
        M.getTableRowIndex = function(a) {
            Wr(this, a);
            return this.Wa ? a : this.Va[a]
        };
        M.getUnderlyingTableRowIndex = function(a) {
            a = this[dd](a);
            R(this.g.getUnderlyingTableRowIndex) && (a = this.g.getUnderlyingTableRowIndex(a));
            return a
        };
        M.getNumberOfRows = function() {
            return this.Wa ? this.g[td]() : this.Va[B]
        };
        M.getNumberOfColumns = function() {
            return this.B[B]
        };
        M.getColumnId = function(a) {
            Tr(this, a);
            a = this.B[a];
            return Sn(a) ? this.g[jc](a) : a.id || I
        };
        M.getColumnIndex = function(a) {
            for (var b = 0; b < this.B[B]; b++) {
                var c = this.B[b];
                if (Qn(c) && c.id == a)
                    return b
            }
            a = this.g.getColumnIndex(a);
            return this.getViewColumnIndex(a)
        };
        M.getColumnLabel = function(a) {
            Tr(this, a);
            a = this.B[a];
            return Sn(a) ? this.g[ad](a) : a[Dc] || I
        };
        M.getColumnPattern = function(a) {
            Tr(this, a);
            a = this.B[a];
            return Sn(a) ? this.g[dc](a) : null
        };
        M.getColumnRole = function(a) {
            a = this[Zb](a, hm);
            return a = P(a) ? a : I
        };
        M.getColumnType = function(a) {
            Tr(this, a);
            a = this.B[a];
            return Sn(a) ? this.g[yb](a) : a[z]
        };
        M.mk = function(a, b) {
            this.gf && this.Vj();
            var c = this.hf[b][a];
            if (Nn(c))
                return c;
            var c = null, d = this.B[b], f = d.calc;
            P(f) ? (f = Es[f], c = f(this.g, a, d)) : R(f) && (c = f[G](null, this.g, a));
            c = Rr(c);
            this.Xj(c, d[z]);
            return this.hf[b][a] = c
        };
        M.Xj = function(a, b) {
            var c = a.v;
            if (po(yo(b)))
                throw m('"type" must be specified');
            if (!Yr(c, b))
                throw m(qh + c + fe + b);
        };
        M.Xa = function(a, b) {
            Tr(this, b);
            var c = this.B[b], d = null, f = this[dd](a);
            if (Qn(c))
                d = this.mk(f, b), d.p = Qn(d.p) ? d.p : {};
            else if (Sn(c))
                d = {v: this.g[A](f, c), f: null, p: null};
            else
                throw m("Invalid column definition: " + d);
            return d
        };
        Na(M, function(a, b) {
            return this.Xa(a, b).v
        });
        M.getFormattedValue = function(a, b) {
            var c = this.Xa(a, b);
            if (null == c.f) {
                var d = this.B[b];
                if (Qn(d))
                    d = this[yb](b), c.f = null != c.v ? ds(c.v, d) : I;
                else if (Sn(d)) {
                    var f = this[dd](a);
                    c.f = this.g[Xd](f, d)
                }
            }
            return c.f
        };
        M.getProperty = function(a, b, c) {
            a = this[ud](a, b)[c];
            return Nn(a) ? a : null
        };
        M.getProperties = function(a, b) {
            var c = this.Xa(a, b);
            if (!c.p) {
                var c = this[dd](a), d = this.getTableColumnIndex(b);
                return this.g[ud](c, d)
            }
            return c.p
        };
        M.getColumnProperty = function(a, b) {
            Tr(this, a);
            var c = this.B[a];
            return Sn(c) ? this.g[Zb](c, b) : this[Wc](a)[b] || null
        };
        M.getColumnProperties = function(a) {
            Tr(this, a);
            a = this.B[a];
            return Sn(a) ? this.g[Wc](a) : a.properties || {}
        };
        M.getTableProperty = function(a) {
            return this.g.getTableProperty(a)
        };
        M.getTableProperties = function() {
            return this.g[Fb]()
        };
        M.getRowProperty = function(a, b) {
            var c = this[dd](a);
            return this.g.getRowProperty(c, b)
        };
        M.getRowProperties = function(a) {
            Wr(this, a);
            a = this[dd](a);
            return this.g[fd](a)
        };
        M.getColumnRange = function(a) {
            return Zr(this, a)
        };
        M.getDistinctValues = function(a) {
            return as(this, a)
        };
        M.getSortedRows = function(a) {
            return $r(this, a)
        };
        M.getFilteredRows = function(a) {
            return cs(this, a)
        };
        M.toDataTable = function() {
            var a = this.g;
            R(a[bd]) && (a = a[bd]());
            var a = a[Zc](), b = this[w](), c = this[td](), d, f, h, k = [], n = [];
            for (d = 0; d < b; d++) {
                h = this.B[d];
                if (Qn(h))
                    f = Xp(h), delete f.calc, delete f.sourceColumn;
                else if (Sn(h))
                    f = a.cols[h];
                else
                    throw m(Hg);
                k[v](f)
            }
            for (f = 0; f < c; f++) {
                var u = a[xc][this.Wa ? f : this.Va[f]], C = [];
                for (d = 0; d < b; d++) {
                    h = this.B[d];
                    if (Qn(h))
                        h = {v: this[A](f, d)};
                    else if (Sn(h))
                        h = u.c[this.B[d]];
                    else
                        throw m(Hg);
                    C[v](h)
                }
                u.c = C;
                n[v](u)
            }
            a.cols = k;
            a.rows = n;
            return a = new V(a)
        };
        M.toPOJO = function() {
            for (var a = {}, b = [], c = 0; c < this.B[B]; c++) {
                var d = this.B[c];
                Qn(d) && !P(d.calc) || b[v](d)
            }
            0 == b[B] || (a.columns = b);
            this.Wa || (a.rows = Ko(this.Va));
            return a
        };
        M.toJSON = function() {
            return jo(this[Zc]())
        };
        var Es = {emptyString: function() {
                return I
            }, error: function(a, b, c) {
                var d = c.sourceColumn, f = c.magnitude;
                if (!Sn(d) || !Sn(f))
                    return null;
                a = a[A](b, d);
                return Sn(a) ? c.errorType == Ql ? a + a * (f / 100) : a + f : null
            }, stringify: function(a, b, c) {
                c = c.sourceColumn;
                return Sn(c) ? a[Xd](b, c) : I
            }, fillFromTop: function(a, b, c) {
                c = c.sourceColumn;
                return Sn(c) ? es(a, b, c, !0) : null
            }, fillFromBottom: function(a, b, c) {
                c = c.sourceColumn;
                return Sn(c) ? es(a, b, c, !1) : null
            }, identity: function(a, b, c) {
                c = c.sourceColumn;
                return Sn(c) ? a[A](b, c) : null
            }};
        function Fs(a, b) {
            this.Jd = b;
            this.hl = a
        }
        Fs[E].send = function(a) {
            this.uc = a;
            this.xc()
        };
        Fs[E].kl = function(a) {
            var b = {}, c, d = this.Nb;
            d && (c = zm + d);
            c && (b.tqx = c, a = ts(a, b));
            return a
        };
        Fs[E].xc = function() {
            var a = this.kl(this.Jd);
            this.hl[G](this, Yn(this.zc, this), a)
        };
        Fs[E].zc = function(a) {
            a = new hs(a);
            if (!a.containsReason(vl)) {
                a[$c]() ? this.Nb = null : this.Nb = a.getDataSignature();
                var b = this.uc;
                b[G](b, a)
            }
        };
        var X = {Wf: "google-visualization-errors"};
        X.ah = X.Wf + "-";
        X.bi = X.Wf + Of;
        X.Sf = X.Wf + "-all-";
        X.kf = X.bi + " container is null";
        X.Gj = "background-color: #c00000; color: white; padding: 2px;";
        X.Ij = "background-color: #fff4c2; color: black; white-space: nowrap; padding: 2px; border: 1px solid black;";
        X.Jj = "font: normal 0.8em arial,sans-serif; margin-bottom: 5px;";
        X.Hj = "font-size: 1.1em; color: #0000cc; font-weight: bold; cursor: pointer; padding-left: 10px; color: black;text-align: right; vertical-align: top;";
        X.$g = 0;
        X.addError = function(a, b, c, d) {
            if (!X.lf(a))
                throw m(X.kf + ". message: " + b);
            c = X.Lj(b, c, d);
            var f = c.errorMessage;
            b = c.detailedMessage;
            c = c.options;
            var h = null != c.showInTooltip ? !!c.showInTooltip : !0, k = (c[z] == wn ? wn : gj) == gj ? X.Gj : X.Ij, k = k + (c[s] ? c[s] : I), n = !!c.removable;
            d = hq();
            var f = d.d(Em, {style: k}, d[gb](f)), k = X.ah + X.$g++, u = d.d(Xi, {id: k, style: X.Jj}, f);
            b && (h ? f.title = b : (h = fa[vb](Em), Ia(h, b), d[Xa](u, d.d(Xi, {style: Ll}, h))));
            n && (b = d.d(Em, {style: X.Hj}, d[gb](Gn)), b.onclick = Zn(X.of, u), d[Xa](f, b));
            X.Kj(a, u);
            c.removeDuplicates && X.Mj(a,
                    u);
            return k
        };
        X.removeAll = function(a) {
            if (!X.lf(a))
                throw m(X.kf);
            if (a = X.Rf(a, !1))
                Ca(a[s], ul), wq(a)
        };
        X.addErrorFromQueryResponse = function(a, b) {
            if (!X.lf(a))
                throw m(X.kf);
            if (!b)
                throw m(X.bi + " response is null");
            if (!b[$c]() && !b.hasWarning())
                return null;
            var c = b.getReasons(), d = !0;
            b[$c]() && (d = !(Ho(c, on) || Ho(c, Nk)));
            var c = b.getMessage(), f = b.getDetailedMessage(), d = {showInTooltip: d};
            La(d, b[$c]() ? gj : wn);
            d.removeDuplicates = !0;
            return X[Tb](a, c, f, d)
        };
        X.removeError = function(a) {
            a = fa[Pc](a);
            return X.Uf(a) ? (X.of(a), !0) : !1
        };
        Ba(X, function(a) {
            a = fa[Pc](a);
            return X.Uf(a) ? a[H][H] : null
        });
        X.createProtectedCallback = function(a, b) {
            return function() {
                try {
                    a[yc](null, arguments)
                } catch (c) {
                    R(b) ? b(c) : google[F][Bc][Tb](b, c[hc])
                }
            }
        };
        X.of = function(a) {
            var b = a[H];
            yq(a);
            0 == b[Hb][B] && Ca(b[s], ul)
        };
        X.Uf = function(a) {
            return sq(a) && a.id && 0 == a.id[Jd](X.ah, 0) && (a = a[H]) && a.id && 0 == a.id[Jd](X.Sf, 0) && a[H] ? !0 : !1
        };
        X.Lj = function(a, b, c) {
            var d = null != a && a ? a : gj, f = I, h = {}, k = arguments[B];
            2 == k ? b && Mn(b) == yl ? h = b : f = null != b ? b : f : 3 == k && (f = null != b ? b : f, h = c || {});
            d = ro(d);
            f = ro(f);
            return{errorMessage: d, detailedMessage: f, options: h}
        };
        X.lf = function(a) {
            return null != a && sq(a)
        };
        X.Rf = function(a, b) {
            for (var c = a[Hb], d = null, f = hq(), h = 0; h < c[B]; h++)
                if (c[h].id && 0 == c[h].id[Jd](X.Sf, 0)) {
                    d = c[h];
                    f.removeNode(d);
                    break
                }
            !d && b && (d = X.Sf + X.$g++, d = pq(Xi, {id: d, style: Wi}, null));
            d && ((c = a[zb]) ? f.Pe(d, c) : f[Xa](a, d));
            return d
        };
        X.Kj = function(a, b) {
            var c = X.Rf(a, !0);
            Ca(c[s], $h);
            c[Xa](b)
        };
        X.Bl = function(a, b) {
            var c = X.Rf(a, !0);
            Bo(c && c[Hb], function(a) {
                X.Uf(a) && b(a)
            })
        };
        X.Mj = function(a, b) {
            var c = /id="?google-visualization-errors-[0-9]*"?/, d = Eq(b), d = d[q](c, I), f = [];
            X.Bl(a, function(a) {
                if (a != b) {
                    var k = Eq(a), k = k[q](c, I);
                    k == d && f[v](a)
                }
            });
            Bo(f, X.of);
            return f[B]
        };
        var Gs = {aliceblue: "#f0f8ff", antiquewhite: "#faebd7", aqua: "#00ffff", aquamarine: "#7fffd4", azure: "#f0ffff", beige: "#f5f5dc", bisque: "#ffe4c4", black: "#000000", blanchedalmond: "#ffebcd", blue: "#0000ff", blueviolet: "#8a2be2", brown: "#a52a2a", burlywood: "#deb887", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkgray: "#a9a9a9", darkgreen: "#006400",
            darkgrey: "#a9a9a9", darkkhaki: "#bdb76b", darkmagenta: "#8b008b", darkolivegreen: "#556b2f", darkorange: "#ff8c00", darkorchid: "#9932cc", darkred: "#8b0000", darksalmon: "#e9967a", darkseagreen: "#8fbc8f", darkslateblue: "#483d8b", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", darkturquoise: "#00ced1", darkviolet: "#9400d3", deeppink: "#ff1493", deepskyblue: "#00bfff", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1e90ff", firebrick: "#b22222", floralwhite: "#fffaf0", forestgreen: "#228b22", fuchsia: "#ff00ff", gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff", gold: "#ffd700", goldenrod: "#daa520", gray: "#808080", green: "#008000", greenyellow: "#adff2f", grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", indianred: "#cd5c5c", indigo: "#4b0082", ivory: "#fffff0", khaki: "#f0e68c", lavender: "#e6e6fa", lavenderblush: "#fff0f5", lawngreen: "#7cfc00", lemonchiffon: "#fffacd", lightblue: "#add8e6", lightcoral: "#f08080", lightcyan: "#e0ffff", lightgoldenrodyellow: "#fafad2", lightgray: "#d3d3d3", lightgreen: "#90ee90", lightgrey: "#d3d3d3", lightpink: "#ffb6c1", lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa", lightskyblue: "#87cefa", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#b0c4de", lightyellow: "#ffffe0", lime: "#00ff00", limegreen: "#32cd32", linen: "#faf0e6", magenta: "#ff00ff", maroon: "#800000", mediumaquamarine: "#66cdaa", mediumblue: "#0000cd", mediumorchid: "#ba55d3", mediumpurple: "#9370db", mediumseagreen: "#3cb371", mediumslateblue: "#7b68ee", mediumspringgreen: "#00fa9a", mediumturquoise: "#48d1cc", mediumvioletred: "#c71585", midnightblue: "#191970", mintcream: "#f5fffa", mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5", navajowhite: "#ffdead", navy: "#000080", oldlace: "#fdf5e6", olive: "#808000", olivedrab: "#6b8e23", orange: "#ffa500", orangered: "#ff4500", orchid: "#da70d6", palegoldenrod: "#eee8aa", palegreen: "#98fb98", paleturquoise: "#afeeee", palevioletred: "#db7093", papayawhip: "#ffefd5", peachpuff: "#ffdab9", peru: "#cd853f", pink: "#ffc0cb", plum: "#dda0dd", powderblue: "#b0e0e6", purple: "#800080", red: "#ff0000", rosybrown: "#bc8f8f", royalblue: "#4169e1", saddlebrown: "#8b4513", salmon: "#fa8072", sandybrown: "#f4a460", seagreen: "#2e8b57",
            seashell: "#fff5ee", sienna: "#a0522d", silver: "#c0c0c0", skyblue: "#87ceeb", slateblue: "#6a5acd", slategray: "#708090", slategrey: "#708090", snow: "#fffafa", springgreen: "#00ff7f", steelblue: "#4682b4", tan: "#d2b48c", teal: "#008080", thistle: "#d8bfd8", tomato: "#ff6347", turquoise: "#40e0d0", violet: "#ee82ee", wheat: "#f5deb3", white: "#ffffff", whitesmoke: "#f5f5f5", yellow: "#ffff00", yellowgreen: "#9acd32"};
        function Hs(a) {
            var b = {};
            a = ma(a);
            var c = a[fb](0) == ne ? a : ne + a;
            if (Is[Kc](c)) {
                a = c;
                if (!Is[Kc](a))
                    throw m("'" + a + "' is not a valid hex color");
                4 == a[B] && (a = a[q](Js, oe));
                b.$f = a[$d]();
                La(b, tk);
                return b
            }
            t:{
                var d = a[nb](Ks);
                if (d) {
                    var c = ia(d[1]), f = ia(d[2]), d = ia(d[3]);
                    if (0 <= c && 255 >= c && 0 <= f && 255 >= f && 0 <= d && 255 >= d) {
                        c = [c, f, d];
                        break t
                    }
                }
                c = []
            }
            if (c[B]) {
                f = c[0];
                a = c[1];
                c = c[2];
                f = ia(f);
                a = ia(a);
                c = ia(c);
                if (ga(f) || 0 > f || 255 < f || ga(a) || 0 > a || 255 < a || ga(c) || 0 > c || 255 < c)
                    throw m('"(' + f + He + a + He + c + '") is not a valid RGB color');
                f = Ls(f[Pb](16));
                a = Ls(a[Pb](16));
                c = Ls(c[Pb](16));
                b.$f = ne + f + a + c;
                La(b, fm);
                return b
            }
            if (Gs && (c = Gs[a[$d]()]))
                return b.$f = c, La(b, ql), b;
            throw m(a + " is not a valid color string");
        }
        var Js = /#(.)(.)(.)/, Is = /^#(?:[0-9a-f]{3}){1,2}$/i, Ks = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
        function Ls(a) {
            return 1 == a[B] ? Af + a : a
        }
        ;
        function Ms(a) {
            return a == ul || a == I || a == gn ? ul : Hs(a).$f
        }
        ;
        function Ns(a, b, c, d) {
            this.top = a;
            Fa(this, b);
            Aa(this, c);
            Ka(this, d)
        }
        ya(Ns[E], function() {
            return new Ns(this.top, this[Hc], this[vc], this[y])
        });
        Ns[E].contains = function(a) {
            return this && a ? a instanceof Ns ? a[y] >= this[y] && a[Hc] <= this[Hc] && a.top >= this.top && a[vc] <= this[vc] : a.x >= this[y] && a.x <= this[Hc] && a.y >= this.top && a.y <= this[vc] : !1
        };
        ra(Ns[E], function() {
            this.top = l[cb](this.top);
            Fa(this, l[cb](this[Hc]));
            Aa(this, l[cb](this[vc]));
            Ka(this, l[cb](this[y]));
            return this
        });
        Ga(Ns[E], function() {
            this.top = l[Lc](this.top);
            Fa(this, l[Lc](this[Hc]));
            Aa(this, l[Lc](this[vc]));
            Ka(this, l[Lc](this[y]));
            return this
        });
        function Os(a, b) {
            this.start = a < b ? a : b;
            this.end = a < b ? b : a
        }
        ya(Os[E], function() {
            return new Os(this.start, this.end)
        });
        function Ps(a, b) {
            return a.start <= b && a.end >= b
        }
        ;
        function Qs(a) {
            a = a || {};
            this.eh = ul;
            null != a.fill && this.$j(a.fill);
            this.dh = 1;
            null != a.sf && this.ak(a.sf);
            this.bh = ul;
            null != a.stroke && this.ck(a.stroke);
            this.kh = 1;
            null != a.jh && this.oh(a.jh);
            this.ih = 1;
            null != a.tf && this.ek(a.tf);
            this.hh = Am;
            null != a.gh && this.dk(a.gh);
            this.La = null;
            a.La && (this.La = Xp(a.La), this.La.Yj = Ms(this.La.Yj), this.La.Zj = Ms(this.La.Zj));
            this.fh = null;
            a.pattern && this.bk(a.pattern)
        }
        M = Qs[E];
        M.getProperties = function() {
            return{fill: this.eh, sf: this.dh, stroke: this.bh, jh: this.kh, tf: this.ih, gh: this.hh, La: this.La ? Xp(this.La) : null, pattern: this.fh}
        };
        ya(M, function() {
            return new Qs(this[ud]())
        });
        M.$j = function(a) {
            this.eh = Ms(a)
        };
        M.ak = function(a) {
            this.dh = l.min(l.max(a, 0), 1)
        };
        M.ck = function(a, b) {
            this.bh = Ms(a);
            null != b && this.oh(b)
        };
        M.oh = function(a) {
            this.kh = a
        };
        M.ek = function(a) {
            this.ih = l.min(l.max(a, 0), 1)
        };
        M.dk = function(a) {
            this.hh = a
        };
        M.bk = function(a) {
            this.fh = a
        };
        new Qs({sf: 0, fill: "white", tf: 0, stroke: "white"});
        function Rs(a) {
            if (Pn(a)) {
                var b = new Date;
                b.setTime(a.valueOf());
                return b
            }
            var c = Mn(a);
            if (c == yl || c == Vh) {
                if (a[kc])
                    return a[kc]();
                c = c == Vh ? [] : {};
                for (b in a)
                    c[b] = Rs(a[b]);
                return c
            }
            return a
        }
        ;
        function Ss(a, b, c, d) {
            Ka(this, a);
            this.top = b;
            qa(this, c);
            Da(this, d)
        }
        M = Ss[E];
        ya(M, function() {
            return new Ss(this[y], this.top, this[p], this[t])
        });
        M.Ik = function(a) {
            var b = l.max(this[y], a[y]), c = l.min(this[y] + this[p], a[y] + a[p]);
            if (b <= c) {
                var d = l.max(this.top, a.top);
                a = l.min(this.top + this[t], a.top + a[t]);
                if (d <= a)
                    return Ka(this, b), this.top = d, qa(this, c - b), Da(this, a - d), !0
            }
            return!1
        };
        M.contains = function(a) {
            return a instanceof Ss ? this[y] <= a[y] && this[y] + this[p] >= a[y] + a[p] && this.top <= a.top && this.top + this[t] >= a.top + a[t] : a.x >= this[y] && a.x <= this[y] + this[p] && a.y >= this.top && a.y <= this.top + this[t]
        };
        ra(M, function() {
            Ka(this, l[cb](this[y]));
            this.top = l[cb](this.top);
            qa(this, l[cb](this[p]));
            Da(this, l[cb](this[t]));
            return this
        });
        Ga(M, function() {
            Ka(this, l[Lc](this[y]));
            this.top = l[Lc](this.top);
            qa(this, l[Lc](this[p]));
            Da(this, l[Lc](this[t]));
            return this
        });
        function Ts(a, b) {
            var c = jq(a);
            return c[hd] && c[hd].getComputedStyle && (c = c[hd].getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || I : I
        }
        function Us(a, b) {
            return Ts(a, b) || (a[Qd] ? a[Qd][b] : null) || a[s] && a[s][b]
        }
        function Vs(a) {
            return Us(a, Sl)
        }
        function Ws(a, b, c) {
            var d, f = fp && (Zo || $o) && tp(Hf);
            b instanceof So ? (d = b.x, b = b.y) : (d = b, b = c);
            Ka(a[s], Xs(d, f));
            a[s].top = Xs(b, f)
        }
        function Ys(a) {
            var b;
            try {
                b = a[Ya]()
            } catch (c) {
                return{left: 0, top: 0, right: 0, bottom: 0}
            }
            T && a.ownerDocument[Ed] && (a = a.ownerDocument, Ka(b, b[y] - (a[Ob][Bb] + a[Ed][Bb])), b.top -= a[Ob][Db] + a[Ed][Db]);
            return b
        }
        function Zs(a) {
            if (T && !up(8))
                return a[ac];
            var b = jq(a), c = Us(a, Sl), d = c == kj || c == Ih;
            for (a = a[H]; a && a != b; a = a[H])
                if (c = Us(a, Sl), d = d && c == Im && a != b[Ob] && a != b[Ed], !d && (a[pc] > a[wd] || a[wb] > a[Nd] || c == kj || c == Ih || c == cm))
                    return a;
            return null
        }
        function $s(a) {
            for (var b = new Ns(0, ea, ea, 0), c = hq(a), d = c.L()[Ed], f = c.L()[Ob], h = c.Xk(); a = Zs(a); )
                if (!(T && 0 == a[wd] || gp && 0 == a[Nd] && a == d || a == d || a == f || Us(a, Il) == un)) {
                    var k = at(a), n;
                    n = a;
                    if (fp && !tp(Hf)) {
                        var u = la(Ts(n, ii));
                        if (bt(n))
                            var C = n[db] - n[wd] - u - la(Ts(n, ki)), u = u + C;
                        n = new So(u, la(Ts(n, mi)))
                    } else
                        n = new So(n[Bb], n[Db]);
                    k.x += n.x;
                    k.y += n.y;
                    b.top = l.max(b.top, k.y);
                    Fa(b, l.min(b[Hc], k.x + a[wd]));
                    Aa(b, l.min(b[vc], k.y + a[Nd]));
                    Ka(b, l.max(b[y], k.x))
                }
            d = h[tc];
            h = h[pd];
            Ka(b, l.max(b[y], d));
            b.top = l.max(b.top, h);
            c = c.Yk();
            Fa(b,
                    l.min(b[Hc], d + c[p]));
            Aa(b, l.min(b[vc], h + c[t]));
            return 0 <= b.top && 0 <= b[y] && b[vc] > b.top && b[Hc] > b[y] ? b : null
        }
        function at(a) {
            var b, c = jq(a), d = Us(a, Sl), f = fp && c[pb] && !a[Ya] && d == Ih && (b = c[pb](a)) && (0 > b[lb] || 0 > b[mb]), h = new So(0, 0), k;
            b = c ? jq(c) : fa;
            k = !T || up(9) || hq(b).Hf() ? b[Ob] : b[Ed];
            if (a == k)
                return h;
            if (a[Ya])
                b = Ys(a), a = hq(c).gc(), h.x = b[y] + a.x, h.y = b.top + a.y;
            else if (c[pb] && !f)
                b = c[pb](a), a = c[pb](k), h.x = b[lb] - a[lb], h.y = b[mb] - a[mb];
            else {
                b = a;
                do {
                    h.x += b[Bd];
                    h.y += b[Ec];
                    b != a && (h.x += b[Bb] || 0, h.y += b[Db] || 0);
                    if (gp && Vs(b) == kj) {
                        h.x += c[Ed][tc];
                        h.y += c[Ed][pd];
                        break
                    }
                    b = b[ac]
                } while (b && b != a);
                if (ep || gp && d == Ih)
                    h.y -= c[Ed][Ec];
                for (b = a; (b =
                        Zs(b)) && b != c[Ed] && b != k; )
                    h.x -= b[tc], ep && b[zc] == lh || (h.y -= b[pd])
            }
            return h
        }
        function ct(a, b, c) {
            if (b instanceof Uo)
                c = b[t], b = b[p];
            else if (void 0 == c)
                throw m("missing height argument");
            qa(a[s], Xs(b, !0));
            Da(a[s], Xs(c, !0))
        }
        function Xs(a, b) {
            typeof a == J && (a = (b ? l[Lc](a) : a) + Xl);
            return a
        }
        function dt(a, b) {
            if (Us(b, Vi) != ul)
                return a(b);
            var c = b[s], d = c.display, f = c.visibility, h = c.position;
            Qa(c, uk);
            c.position = Ih;
            Ca(c, Kk);
            var k = a(b);
            Ca(c, d);
            c.position = h;
            Qa(c, f);
            return k
        }
        function et(a) {
            var b = a[db], c = a.offsetHeight, d = gp && !b && !c;
            return Nn(b) && !d || !a[Ya] ? new Uo(b, c) : (a = Ys(a), new Uo(a[Hc] - a[y], a[vc] - a.top))
        }
        function ft(a) {
            var b = at(a);
            a = dt(et, a);
            return new Ss(b.x, b.y, a[p], a[t])
        }
        function gt(a, b) {
            var c = a[s];
            Bl in c ? c.opacity = b : Rg in c ? c.MozOpacity = b : jj in c && (c.filter = b === I ? I : Qh + 100 * b + Fe)
        }
        function ht(a, b) {
            Ca(a[s], b ? I : ul)
        }
        function bt(a) {
            return im == Us(a, Si)
        }
        var it = fp ? "MozUserSelect" : gp ? "WebkitUserSelect" : null;
        function jt(a, b, c) {
            c = c ? null : a[Nb](Ge);
            if (it) {
                if (b = b ? ul : I, a[s][it] = b, c) {
                    a = 0;
                    for (var d; d = c[a]; a++)
                        d[s][it] = b
                }
            } else if (T || ep)
                if (b = b ? Al : I, a[Cb](nn, b), c)
                    for (a = 0; d = c[a]; a++)
                        d[Cb](nn, b)
        }
        function kt(a, b, c, d) {
            if (/^\d+px?$/[Kc](b))
                return ja(b, 10);
            var f = a[s][c], h = a.runtimeStyle[c];
            a.runtimeStyle[c] = a[Qd][c];
            a[s][c] = b;
            b = a[s][d];
            a[s][c] = f;
            a.runtimeStyle[c] = h;
            return b
        }
        function lt(a, b) {
            var c = a[Qd] ? a[Qd][b] : null;
            return c ? kt(a, c, Yk, Rl) : 0
        }
        var mt = {thin: 2, medium: 4, thick: 6};
        function nt(a, b) {
            if ((a[Qd] ? a[Qd][b + jh] : null) == ul)
                return 0;
            var c = a[Qd] ? a[Qd][b + uh] : null;
            return c in mt ? mt[c] : kt(a, c, Yk, Rl)
        }
        function ot(a) {
            if (T) {
                var b = nt(a, hi), c = nt(a, ji), d = nt(a, li);
                a = nt(a, fi);
                return new Ns(d, c, a, b)
            }
            b = Ts(a, ii);
            c = Ts(a, ki);
            d = Ts(a, mi);
            a = Ts(a, gi);
            return new Ns(la(d), la(c), la(a), la(b))
        }
        var pt = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
        function qt() {
            var a = Jn(mk);
            null != a || (a = tf);
            var b = Jn(pk);
            null != b || (b = Gf);
            return a + xf + b
        }
        function rt(a) {
            var b = Jn(nk + a);
            R(b) || (b = Jn(a), R(b) || (b = null));
            return b
        }
        ;
        function st() {
        }
        M = st[E];
        M.aa = function(a) {
            if (!(Qn(a) && R(a[w]) && R(a[td])))
                throw m("Invalid data table.");
        };
        M.ea = function(a) {
            return this.A(a) ? 2 : 0
        };
        M.jk = function(a, b) {
            if (!this.e(a, b, L))
                return!1;
            for (var c = {}, d = 0, f = l.min(a[td](), 20), h = 0; h < f; h++) {
                var k = a[A](h, b);
                c[k] || d++;
                c[k] = !0
            }
            return 10 > d
        };
        M.e = function(a, b, c) {
            return a[w]() > b && c == a[yb](b)
        };
        M.indexOf = function(a, b) {
            for (var c = 0; c < a[w](); c++)
                if (a[yb](c) == b)
                    return c;
            return-1
        };
        M.Oc = function(a, b) {
            return this.e(a, b, J) ? this.Vb(a, b, function(a) {
                return 0 <= a
            }) : !1
        };
        M.Vb = function(a, b, c) {
            for (var d = l.min(a[td](), 20), f = 0; f < d; f++) {
                var h = a[A](f, b);
                if (null != h && !c(h))
                    return!1
            }
            return!0
        };
        M.qk = function(a, b, c) {
            if (!this.e(a, b, J) || !this.e(a, c, J))
                return!1;
            var d = Yn(this.wk, this), f = Yn(this.xk, this);
            return this.Vb(a, b, d) && this.Vb(a, c, f)
        };
        M.wk = function(a) {
            return Ps(new Os(-90, 90), a) && !(na(a) && 0 == a % 1)
        };
        M.xk = function(a) {
            return Ps(new Os(-180, 180), a) && !(na(a) && 0 == a % 1)
        };
        M.rh = function(a) {
            for (var b = a.getDistinctValues(0), c = l.min(a[td](), 20), d = 0, f = 0; f < c; f++) {
                var h = a[A](f, 1);
                h && !Ho(b, h) || d++
            }
            return 0.6 < d / c
        };
        function tt() {
        }
        S(tt, st);
        tt[E].A = function(a) {
            this.aa(a);
            var b = a[w]();
            if (2 > b)
                return!1;
            var c = a[yb](0);
            if (c != Li && c != Mi || a[yb](1) != J)
                return!1;
            for (var c = 0, d = 1; d < b; d++) {
                var f = a[yb](d);
                if (f == J)
                    c = 0;
                else if (f == L) {
                    if (c++, 2 < c)
                        return!1
                } else
                    return!1
            }
            return!0
        };
        tt[E].ea = function(a) {
            if (!this.A(a))
                return 0;
            var b = !1, c = 0 < this[x](a, L), b = a[td](), d = a[cd](0);
            if (50 < b)
                b = !0;
            else {
                for (var f = ia.MAX_VALUE, h = ia.MIN_VALUE, k = 1; k < b; k++)
                    var n = l.abs(a[A](d[k - 1], 0) - a[A](d[k], 0)), f = 0 < n && n < f ? n : f, h = n > h ? n : h;
                b = 0 != f && 50 < h / f ? !0 : !1
            }
            return c && b ? 3 : c || b ? 2 : 1
        };
        function ut(a) {
            this.uh = !!(a || {}).li
        }
        S(ut, st);
        ut[E].A = function(a) {
            this.aa(a);
            var b = 0, c = a[w]();
            if (1 > c)
                return!1;
            if (!this.e(a, 0, J) && (b++, this.uh))
                for (; b < c && this.e(a, b, L); )
                    b++;
            for (var d = null; b < c; ) {
                var f = a[yb](b);
                if (f == J)
                    d = {};
                else if (this.uh && f == L) {
                    if (!d)
                        return!1
                } else if (f == ci) {
                    if (!d || d.ok)
                        return!1;
                    d.ok = b
                } else
                    return!1;
                b++
            }
            return null !== d
        };
        function vt(a) {
            this.Oe = a && a.El || !1;
            ut[G](this, a)
        }
        S(vt, ut);
        vt[E].A = function(a) {
            this.aa(a);
            if (!vt.b.A[G](this, a))
                return!1;
            var b = a[w]();
            if (this.Oe)
                for (var c = 1; c < b; c++)
                    if (this.e(a, c, J) && !this.Oc(a, c))
                        return!1;
            return!0
        };
        vt[E].ea = function(a) {
            for (var b = a[w](), c = a[td](), d = 0, f = !1, h = 0; h < b; h++)
                this.e(a, h, J) && (d++, this.Oc(a, h) || (f = !0));
            return this.A(a) ? 1 == c || f || this.e(a, 0, L) ? 1 : 2 < d && this.Oe ? 3 : 1 != d || this.Oe ? 1 : 2 : 0
        };
        function wt() {
        }
        S(wt, st);
        wt[E].A = function(a) {
            this.aa(a);
            var b = a[w]();
            return 3 > b || 5 < b || !this.e(a, 0, L) || !this.e(a, 1, J) || !this.e(a, 2, J) || 3 < b && !this.e(a, 3, L) || 4 < b && !this.e(a, 4, J) ? !1 : !0
        };
        wt[E].ea = function(a) {
            return this.A(a) ? this.jk(a, 3) ? 3 : this.e(a, 3, L) ? 1 : 2 : 0
        };
        function xt() {
        }
        S(xt, st);
        xt[E].A = function(a) {
            this.aa(a);
            var b = a[w]();
            if (5 > b || 6 < b || !(this.e(a, 0, L) && this.e(a, 1, J) && this.e(a, 2, J) && this.e(a, 3, J) && this.e(a, 4, J)) || 6 == b && !this.e(a, 5, L))
                return!1;
            for (var b = l.min(a[td](), 20), c = 0; c < b; c++) {
                var d = a[A](c, 1), f = a[A](c, 2), h = a[A](c, 3), k = a[A](c, 4);
                if (d != l.min(d, f, h, k) || k != l.max(d, f, h, k))
                    return!1
            }
            return!0
        };
        xt[E].ea = function(a) {
            return this.A(a) ? 3 : 0
        };
        function yt() {
            ut[G](this)
        }
        S(yt, ut);
        yt[E].ea = function(a) {
            var b = this.e(a, 0, J), c = a[w]();
            b || c--;
            return this.A(a) ? 2 > c ? 1 : 2 : 0
        };
        function zt() {
        }
        S(zt, st);
        zt[E].A = function(a) {
            this.aa(a);
            return this.dl(a) || this.el(a)
        };
        zt[E].ea = function(a) {
            return this.A(a) ? 1 < a[td]() ? 2 : 3 : 0
        };
        zt[E].dl = function(a) {
            var b = a[w]();
            if (1 > b || 2 < b)
                return!1;
            var c = !0;
            2 == b && (c = c && this.e(a, 0, L));
            return c = c && this.Oc(a, b - 1)
        };
        zt[E].el = function(a) {
            var b = a[w](), c = a[td]();
            if (0 == b || 1 != c)
                return!1;
            for (var c = !0, d = 0; d < b; d++)
                if (!this.e(a, d, J)) {
                    c = !1;
                    break
                }
            return c
        };
        function At() {
        }
        S(At, st);
        At[E].A = function(a) {
            var b = a[w]();
            if (1 > b || 2 < b)
                return!1;
            var c = this.e(a, 0, L);
            2 == b && (c = c && this.e(a, 1, J));
            return c
        };
        At[E].ea = function(a) {
            return this.A(a) ? 1 : 0
        };
        function Bt() {
        }
        S(Bt, st);
        Bt[E].A = function(a) {
            return this.ii(a) || this.hi(a)
        };
        Bt[E].ea = function(a) {
            var b = this.ii(a);
            a = this.hi(a);
            return b || a ? a ? 1 : 3 : 0
        };
        Bt[E].ii = function(a) {
            this.aa(a);
            var b = a[w]();
            if (2 > b || 3 < b)
                return!1;
            var c = this.e(a, 0, J), c = c && this.e(a, 1, J);
            3 == b && (c = c && this.e(a, 2, L));
            return c && this.qk(a, 0, 1)
        };
        Bt[E].hi = function(a) {
            this.aa(a);
            var b = a[w]();
            return 1 > b || 2 < b || !this.e(a, 0, L) || 2 == b && !this.e(a, 1, L) ? !1 : !0
        };
        function Ct() {
        }
        S(Ct, st);
        M = Ct[E];
        M.A = function(a) {
            this.aa(a);
            var b = a[w]();
            if (3 > b || a[yb](0) != L)
                return!1;
            var c = a[yb](1);
            if (c != J && c != Li && c != L || c == L && !this.Wk(a, 1) && !this.Vk(a, 1) || c == J && !this.Vb(a, 1, function(a) {
                return na(a) && 0 == a % 1
            }))
                return!1;
            for (c = 2; c < b; c++) {
                var d = a[yb](c);
                if (d != J && d != L)
                    return!1
            }
            return!0
        };
        M.ea = function(a) {
            return this.A(a) ? this.e(a, 1, J) && !this.ik(a, 1) ? 1 : 3 : 0
        };
        M.ik = function(a, b) {
            return this.Vb(a, b, function(a) {
                return 1900 < a && 2100 > a
            })
        };
        M.Wk = function(a, b) {
            return this.Vb(a, b, function(a) {
                return 7 != a[B] || ga(a[Rd](0, 3)) || a[fb](4) != sh || ga(a[Rd](6, 7)) ? !1 : !0
            })
        };
        M.Vk = function(a, b) {
            return this.Vb(a, b, function(a) {
                return 6 != a[B] || ga(a[Rd](0, 3)) || a[fb](4) != $g || ga(a[fb](5)) ? !1 : !0
            })
        };
        function Dt() {
        }
        S(Dt, st);
        Dt[E].A = function(a) {
            this.aa(a);
            var b = a[w]();
            if (2 > b || 3 < b)
                return!1;
            var c = this.e(a, 0, L) && this.e(a, 1, L);
            3 == b && (c = c && this.e(a, 2, L));
            return c && this.rh(a)
        };
        Dt[E].ea = function(a) {
            return this.A(a) ? 3 : 0
        };
        function Et() {
        }
        S(Et, st);
        Et[E].A = function(a) {
            this.aa(a);
            var b = a[w]();
            if (1 > b || 2 < b)
                return!1;
            var c = this.e(a, b - 1, J);
            return c = c && this.Oc(a, b - 1)
        };
        Et[E].hk = function(a) {
            for (var b = 0, c = 0; c < a[td](); c++)
                b += a[A](c, 1);
            return 97 < b && 103 > b || 0.97 < b && 1.03 > b ? !0 : !1
        };
        Et[E].ea = function(a) {
            return this.A(a) ? 1 == a[td]() ? 1 : !this.e(a, 0, L) || 25 < a[td]() || !this.hk(a) ? 2 : 3 : 0
        };
        function Ft() {
        }
        S(Ft, st);
        Ft[E].A = function(a) {
            this.aa(a);
            var b = a[w]();
            if (0 == b)
                return!1;
            for (var c = this.e(a, 0, L) ? 1 : 0, d = b > c; c < b; c++)
                if (!this.e(a, c, J)) {
                    d = !1;
                    break
                }
            return d
        };
        function Gt() {
        }
        S(Gt, st);
        Gt[E].A = function(a) {
            this.aa(a);
            var b = a[w]();
            if (2 > b || this.e(a, 0, ci) || this.e(a, 0, L))
                return!1;
            for (var c = 1, d = 0, f = 0; c < b; ) {
                var h = a[yb](c);
                if (h == J)
                    d++, f = 0;
                else if (h == ci) {
                    if (f++, 0 == d || 1 < f)
                        return!1
                } else
                    return!1;
                c++
            }
            return 0 < d
        };
        function Ht() {
        }
        S(Ht, st);
        Ht[E].A = function(a) {
            this.aa(a);
            for (var b = !0, c = a[w](), d = 0; d < c; d++)
                if (!this.e(a, d, J)) {
                    b = !1;
                    break
                }
            return b
        };
        Ht[E].ea = function(a) {
            return this.A(a) ? 2 > a[w]() ? 1 : 2 : 0
        };
        function It() {
        }
        S(It, st);
        It[E].A = function() {
            return!0
        };
        function Jt() {
        }
        S(Jt, st);
        Jt[E].A = function(a) {
            this.aa(a);
            var b = a[w]();
            if (2 > b || 4 < b)
                return!1;
            var c = this.e(a, 0, L) && this.e(a, 1, L);
            2 < b && (c = c && this.Oc(a, 2)) && 3 < b && (c = c && this.e(a, 3, J));
            return c && this.rh(a)
        };
        Jt[E].ea = function(a) {
            return this.A(a) ? 3 : 0
        };
        function Kt(a) {
            this.Gk = O(a) ? a : Tp(Lt)
        }
        Kt[E].calculateChartTypes = function(a) {
            var b = [];
            Sp(this.Gk, function(c) {
                var d = Mt[c], f = d && d.format;
                f && (f = f.ea(a), 0 != f && b[v]({type: c, Fh: f, D: d.D}))
            });
            Nt(b);
            return Do(b, function(a) {
                return a[z]
            })
        };
        function Nt(a) {
            Ro(a, function(a, c) {
                var d = a.Fh - c.Fh;
                0 == d && (d = a.D - c.D);
                return-d
            })
        }
        var Lt = {dm: "AnnotatedTimeLine", em: "AreaChart", gm: hg, im: ig, jm: "CandlestickChart", km: "ColumnChart", lm: "ComboChart", om: "Gauge", pm: "GeoChart", qm: "ImageRadarChart", rm: "ImageSparkLine", vm: "MotionChart", sm: "LineChart", ym: "PieChart", um: "Map", xm: "OrgChart", zm: fh, Bm: "AreaChart-stacked", Cm: "SteppedAreaChart", Em: "Table", Gm: "TreeMap", Jm: "WordTree"}, Mt = {AnnotatedTimeLine: {format: new tt, D: 3}, AreaChart: {format: new vt({li: !0}), D: 2}, BarChart: {format: new ut, D: 2}, BubbleChart: {format: new wt, D: 2}, CandlestickChart: {format: new xt,
                D: 2}, ColumnChart: {format: new ut, D: 2}, ComboChart: {format: new yt, D: 2}, Gauge: {format: new zt, D: 1}, GeoChart: {format: new At, D: 3}, LineChart: {format: new ut({li: !0}), D: 2}, ImageRadarChart: {format: new Ft, D: 1}, ImageSparkLine: {format: new Ht, D: 1}, Map: {format: new Bt, D: 2}, MotionChart: {format: new Ct, D: 3}, OrgChart: {format: new Dt, D: 2}, PieChart: {format: new Et, D: 2}, ScatterChart: {format: new Gt, D: 2}, "AreaChart-stacked": {format: new vt({El: !0}), D: 2}, SteppedAreaChart: {format: new vt, D: 2}, Table: {format: new It, D: 0}, TreeMap: {format: new Jt,
                D: 2}, WordTree: {format: new At, D: 2}};
        e("google.visualization.ChartSelection", Kt);
        g(Kt[E], "calculateChartTypes", Kt[E].calculateChartTypes);
        var Ot = {AnnotatedTimeLine: "annotatedtimeline", AreaChart: Hi, BarChart: Hi, BubbleChart: Hi, CandlestickChart: Hi, ColumnChart: Hi, ComboChart: Hi, Gauge: "gauge", GeoChart: "geochart", GeoMap: "geomap", ImageAreaChart: "imageareachart", ImageBarChart: "imagebarchart", ImageCandlestickChart: "imagechart", ImageChart: "imagechart", ImageLineChart: "imagelinechart", ImagePieChart: "imagepiechart", ImageSparkLine: "imagesparkline", IntensityMap: "intensitymap", LineChart: Hi, Map: "map", MotionChart: "motionchart", OrgChart: "orgchart", PieChart: Hi,
            RangeSelector: Hi, ScatterChart: Hi, SparklineChart: Hi, SteppedAreaChart: Hi, Table: "table", Timeline: "timeline", TreeMap: "treemap", StringFilter: Gi, NumberRangeFilter: Gi, CategoryFilter: Gi, ChartRangeFilter: Gi, Dashboard: Gi};
        function Pt(a, b) {
            var c = a.useFormatFromData;
            Rn(c) && !c || !po(yo(a.format)) || (b = Co(b, function(a) {
                return!po(yo(a))
            }), Oo(b), 1 == b[B] && (c = Qt(b[0]), a.format = c))
        }
        function Qt(a) {
            po(yo(a)) || (a = a[q](/\d/g, Af), a = a[q](/#{10,}/, ha(11)[Zd](ne)));
            return a
        }
        ;
        function Rt(a) {
            var b = St(a), c = new google[F][Ld](a);
            c[Fc]([0, 1, {type: J, calc: function(c, f) {
                        var h = Tt(a, f);
                        return null != h ? b.oi * h.x + b.Cl : null
                    }}]);
            return c
        }
        function St(a) {
            var b;
            b = a[td]();
            for (var c = new So, d = 0; d < b; d++) {
                var f = Tt(a, d);
                null != f && (c.x += f.x, c.y += f.y)
            }
            b = new So(c.x / b, c.y / b);
            for (f = d = c = 0; f < a[td](); f++) {
                var h = Tt(a, f);
                null != h && (h = new So(h.x - b.x, h.y - b.y), c += h.x * h.y, d += h.x * h.x)
            }
            a = {};
            a.oi = c / d || 1;
            a.Cl = b.y - a.oi * b.x;
            return a
        }
        function Tt(a, b) {
            var c = a[A](b, 0), d = a[A](b, 1);
            return null == c || null == d ? null : new So(c, d)
        }
        ;
        function Ut(a) {
            var b = a.da(), c = a[hb]();
            a = a[Qc]();
            var d;
            t:if (d = a.useFormatFromData, Rn(d) && !d)
                d = !1;
            else {
                d = [pn, Rm, Pm, Qm, Yi];
                for (var f = 0; f < d[B]; f++)
                    if (Jn(d[f] + pf, a)) {
                        d = !1;
                        break t
                    }
                d = !0
            }
            if (d)
                if (b == ig)
                    3 > c[w]() || (b = c[dc](1), d = a.hAxis || {}, Pt(d, [b]), a.hAxis = d, c = c[dc](2), b = a.vAxes || {}, d = b[0] || {}, Pt(d, [c]), b[0] = d, a.vAxes = b);
                else {
                    d = a.vAxes || [{}, {}];
                    for (var f = a.hAxis || {}, h = d[0] || {}, k = d[1] || {}, n = [], u = [], C = c && c[w]() || 0, D = 0; D < C; D++)
                        if (c[yb](D) == J) {
                            var Q = c[dc](D), Ea;
                            Ea = D;
                            0 == Ea ? Ea = null : (Ea--, Ea = ((a.series || {})[Ea] ||
                                    {}).targetAxisIndex || 0);
                            switch (Ea) {
                                case 0:
                                    n[v](Q);
                                    break;
                                case 1:
                                    u[v](Q)
                                }
                        }
                    b == hg ? Pt(f, n) : (Pt(h, n), Pt(k, u));
                    0 < C && c[yb](0) != L && (b = b == hg ? h : f, Q = c[dc](0), Pt(b, [Q]));
                    d[0] = h;
                    d[1] = k;
                    a.vAxes = d;
                    a.hAxis = f
                }
        }
        function Vt(a) {
            if (a[mc](Mh)) {
                var b = a[hb]();
                a.da() == fh && 2 == b[w]() && (b = Rt(b), a[oc](b), a[ae](om, 2), a[ae](pm, 0), a[ae](qm, !1));
                a[ae](Mh, null)
            }
        }
        function Wt(a) {
            var b = a[hb](), c = a[Rb]();
            if (O(c))
                for (var d = 0; d < c[B]; d++)
                    b = google[F][Ld].fromJSON(b, c[d]);
            else
                null != c && (b = google[F][Ld].fromJSON(b, c));
            a[Cd](null);
            a[oc](b)
        }
        function Xt(a) {
            var b = a.da();
            if ((Ot[b] || null) == Hi && b != fh) {
                var b = a[hb](), c = a[mc](qk);
                if (null != c) {
                    for (var d = [{calc: c ? Jm : cj, sourceColumn: 0, type: L}], f = c ? 1 : 0, c = b[w](); f < c; f++)
                        d[v](f);
                    b = new google[F][Ld](b);
                    b[Fc](d);
                    a[ae](qk, null);
                    a[oc](b)
                }
            }
        }
        ;
        function Yt(a, b) {
            var c = b || {};
            P(c) && (c = mo(c));
            this.Fg = c.containerId || null;
            this.Cd = a;
            this.Lg = c[a + ph] || null;
            this.Ig = c[a + Ug] || null;
            this.ic = null;
            Va(this, null);
            this.Fd = null;
            this.Jd = c.dataSourceUrl || null;
            this.g = null;
            this[oc](c.dataTable);
            this.ob = c.options || {};
            this.Sa = c.state || {};
            var d = c.packages;
            this.Jg = Nn(d) ? d : null;
            this.Ra = c.query || null;
            this.Kb = c.refreshInterval || null;
            this.Ob = c.view || null;
            this.Pd = null;
            this.ug = [Wt, Xt, Ut, Vt];
            this.Gg = c[Td] || !Nn(c[Td])
        }
        M = Yt[E];
        M.Bh = null;
        M.qe = null;
        M.Nc = null;
        ya(M, function() {
            var a = new this[bc](this[Vb]());
            a.Pd = this.Pd;
            return a
        });
        M.draw = function(a) {
            a = P(a || I) ? fa[Pc](a || I) : a || I;
            if (!sq(a) && (a = this[uc](), a = P(a) ? fa[Pc](a) : a, !sq(a)))
                throw m("The container is null or not defined.");
            this.Nc = a;
            try {
                if (null == this.da())
                    throw m("The " + this.Cd + " type is not defined.");
                if (rt(this.da()))
                    this.Kh(a);
                else {
                    var b = Yn(this.Kh, this, a), b = google[F][Bc].createProtectedCallback(b, Yn(this.Cf, this, a));
                    this.Lk(b)
                }
            } catch (c) {
                this.Cf(a, c)
            }
        };
        M.toJSON = function() {
            return jo(this.mi(this[hb]()))
        };
        M.toPOJO = function() {
            return this.mi(this.Bh || this[hb]())
        };
        M.mi = function(a) {
            var b = this[Pd](), c = void 0;
            null === a || (c = R(a[bd]) ? a[bd]()[Zc]() : a[Zc]());
            a = {containerId: this[uc]() || void 0, dataSourceUrl: this[Gd]() || void 0, dataTable: c, options: this[Qc]() || void 0, state: this[sc]() || void 0, packages: null === b ? void 0 : b, refreshInterval: this[Md]() || void 0, query: this[Sd]() || void 0, view: this[Rb]() || void 0, isDefaultVisualization: this[Td]()};
            a[this.Cd + ph] = this.da() || void 0;
            a[this.Cd + Ug] = this[rb]() || void 0;
            this.Sh(a);
            return a
        };
        M.Sh = function() {
        };
        M.getDataSourceUrl = function() {
            return this.Jd
        };
        M.getDataTable = function() {
            return this.g
        };
        M.da = function() {
            return this.Lg
        };
        M.getName = function() {
            return this.Ig
        };
        M.Zf = function() {
            return this[F]
        };
        M.getContainerId = function() {
            return this.Fg
        };
        M.getQuery = function() {
            return this.Ra
        };
        M.getRefreshInterval = function() {
            return this.Kb
        };
        M.getOption = function(a, b) {
            return Zt(this.ob, a, b)
        };
        function Zt(a, b, c) {
            a = -1 == b[x](mf) ? a[b] : Jn(b, a);
            c = Nn(c) ? c : null;
            return null != a ? a : c
        }
        M.getOptions = function() {
            return this.ob
        };
        M.getState = function() {
            return this.Sa
        };
        M.isDefaultVisualization = function() {
            return this.Gg
        };
        M.setDataSourceUrl = function(a) {
            this.Jd = a
        };
        M.setCustomRequestHandler = function(a) {
            this.Pd = a
        };
        M.getCustomRequestHandler = function() {
            return this.Pd
        };
        M.setDataTable = function(a) {
            null == a ? this.g = null : R(a[Fb]) ? this.g = a : O(a) ? this.g = google[F].arrayToDataTable(a) : this.g = new google[F].DataTable(a)
        };
        M.Nf = function(a) {
            this.Lg = a
        };
        M.he = function(a) {
            this.Ig = a
        };
        M.setContainerId = function(a) {
            this.Fg = a
        };
        M.setQuery = function(a) {
            this.Ra = a
        };
        M.setRefreshInterval = function(a) {
            this.Kb = a
        };
        M.setOption = function(a, b) {
            var c = this.ob, d = a;
            if (null == b) {
                if (null !== Zt(c, d)) {
                    var f = d[Yb](mf);
                    1 < f[B] && (d = f.pop(), c = Zt(c, f[Zd](mf)));
                    delete c[d]
                }
            } else
                for (d = d[Yb](mf), c = c || N, (d[0]in c) || !c[Gc] || c[Gc](rn + d[0]); d[B] && (f = d.shift()); )
                    d[B] || void 0 === b ? c = c[f] ? c[f] : c[f] = {} : c[f] = b
        };
        M.setOptions = function(a) {
            this.ob = a || {}
        };
        Ra(M, function(a) {
            this.Sa = a || {}
        });
        M.setPackages = function(a) {
            this.Jg = a
        };
        M.setView = function(a) {
            this.Ob = a
        };
        M.am = function(a) {
            a != this[F] && (this.Fd = a)
        };
        M.setIsDefaultVisualization = function(a) {
            this.Gg = a
        };
        M.getSnapshot = function() {
            return new this[bc](this[Zc]())
        };
        M.getView = function() {
            return this.Ob
        };
        M.getPackages = function() {
            return this.Jg
        };
        M.Cf = function(a, b) {
            var c = b && b[hc] || gj, d = google[F][Bc][Tb](a, c);
            google[F][Oc].trigger(this, gj, {id: d, message: c})
        };
        M.Al = function(a, b) {
            var c = b.getMessage(), d = b.getDetailedMessage(), f = google[F][Bc].addErrorFromQueryResponse(a, b);
            google[F][Oc].trigger(this, gj, {id: f, message: c, detailedMessage: d})
        };
        M.Pl = function() {
            var a = this[Pd]();
            if (null == a) {
                var b = this.da(), b = b[q](nk, I), a = Ot[b] || null;
                if (null == a)
                    throw m("Invalid visualization type: " + b);
            }
            P(a) && (a = [a]);
            return a
        };
        M.Sd = function(a, b) {
            var c = rt(this.da());
            if (!c)
                throw m("Invalid " + this.Cd + " type: " + this.da());
            this.Fd && (this.Dh(), Va(this, this.Fd), this.Fd = null);
            this[F] && this[F][bc] == c && this.Ek(a, this[F]) ? c = this[F] : (this.Dh(), c = new c(a));
            this.ic && this.ic != c && R(this.ic[fc]) && this.ic[fc]();
            this.ic = c;
            this.Dk(c);
            this.Bh = b;
            for (var d = Rs(this[Qc]()), d = new Y({chartType: this.da(), dataTable: b, options: d, view: this[Rb]()}), f = 0; f < this.ug[B]; f++)
                this.ug[f](d);
            c[Kd](d[hb](), d[Qc](), this[sc]())
        };
        M.pushView = function(a) {
            O(this.Ob) ? this.Ob[v](a) : this.Ob = null === this.Ob ? [a] : [this.Ob, a]
        };
        M.ol = function(a, b) {
            if (b[$c]())
                this.Al(a, b);
            else {
                var c = b[hb]();
                this.Sd(a, c)
            }
        };
        M.Dk = function(a) {
            var b = this;
            this.nl();
            var c = [];
            Bo([Zl, lm, gj, Hm], function(d) {
                var f = google[F][Oc].addListener(a, d, function(c) {
                    d == Zl && (b.ic = null, Va(b, a));
                    d != Zl && d != Hm || !R(a[sc]) || b[od](a[sc][G](a));
                    google[F][Oc].trigger(b, d, c)
                });
                c[v](f)
            });
            this.qe = c
        };
        M.Lk = function(a) {
            a = {packages: this.Pl(), callback: a};
            var b = Jn(pk);
            null === b && (b = Gf);
            google.load(vn, b, a)
        };
        M.Kh = function(a) {
            var b = this[hb]();
            if (b)
                this.Sd(a, b);
            else if (this.pl())
                b = Yn(this.ol, this, a), b = google[F][Bc].createProtectedCallback(b, Yn(this.Cf, this, a)), this.sendQuery(b, !0);
            else
                throw m("Cannot draw chart: no data specified.");
        };
        M.pl = function() {
            return null != this[Gd]()
        };
        M.sendQuery = function(a, b) {
            var c = Rn(b) ? b : !1, d = this[Gd]() || I, d = new google[F].Query(d), f = this[Md]();
            f && c && d[gd](f);
            (c = this[Sd]()) && d[Dd](c);
            d[qb](a)
        };
        M.Dh = function() {
            this[F] && R(this[F][fc]) && this[F][fc]();
            Va(this, null)
        };
        M.nl = function() {
            O(this.qe) && (Bo(this.qe, function(a) {
                google[F][Oc].removeListener(a)
            }), this.qe = null)
        };
        M.Ek = function(a, b) {
            return b && R(b[Ac]) ? b[Ac]() == a : !1
        };
        function Y(a) {
            Yt[G](this, ti, a)
        }
        S(Y, Yt);
        M = Y[E];
        M.getChart = Yt[E].Zf;
        M.setChart = Yt[E].am;
        M.setChartType = Yt[E].Nf;
        M.getChartType = Yt[E].da;
        M.setChartName = Yt[E].he;
        M.getChartName = Yt[E][rb];
        function Z(a) {
            Yt[G](this, Fi, a)
        }
        S(Z, Yt);
        M = Z[E];
        M.getControl = Yt[E].Zf;
        M.setControlType = Yt[E].Nf;
        M.getControlType = Yt[E].da;
        M.setControlName = Yt[E].he;
        M.getControlName = Yt[E][rb];
        function $(a) {
            Yt[G](this, Ji, a);
            a = a || {};
            P(a) && (a = mo(a));
            this.Ka = a.wrappers || null;
            this.oc = a.bindings || null;
            this.Nf(a.dashboardType || qg);
            this.Mf()
        }
        S($, Yt);
        M = $[E];
        M.Sd = function(a, b) {
            function c(a) {
                return h[a]
            }
            Nq(this[F]);
            for (var d = new google[F].Dashboard(a), f = this.oc || [], h = this.Ka, k = f[B], n = 0; n < k; n++) {
                var u = Do(f[n].controls, c), C = Do(f[n].participants, c);
                d[Kb](u, C)
            }
            Va(this, d);
            $.b.Sd[G](this, a, b)
        };
        M.Sh = function(a) {
            a.wrappers = this.Ka ? Do(this.Ka, function(a) {
                return a[Vb]()
            }) : void 0;
            a.bindings = this.oc || void 0
        };
        M.setWrappers = function(a) {
            this.Ka = a || null;
            this.Mf()
        };
        M.getWrappers = function() {
            return this.Ka
        };
        M.setBindings = function(a) {
            this.oc = a || null;
            this.Mf()
        };
        M.getBindings = function() {
            return this.oc
        };
        M.getDashboard = Yt[E].Zf;
        M.setDashboardName = Yt[E].he;
        M.getDashboardName = Yt[E][rb];
        M.Mf = function() {
            var a = this.Ka;
            if (null !== a && !O(a)) {
                var b = [];
                Sp(a, function(a, c) {
                    this.Kf(a) || (a = google[F].createWrapper(a));
                    a.he(c);
                    b[v](a)
                }, this);
                a = b
            }
            var c = this.oc;
            if (O(a) && 0 != a[B] || O(c) && 0 != c[B])
                this.Ka = Do(a, this.Pk, this), this.oc = Do(c, this.Ok, this)
        };
        M.Pk = function(a) {
            this.Kf(a) || (a = google[F].createWrapper(a));
            a[oc](null);
            a[Xb](null);
            return a
        };
        M.Ok = function(a) {
            var b = a.controls, c = a.participants;
            if ((O(b) ? 0 == b[B] : 1) || (O(c) ? 0 == c[B] : 1))
                throw m("invalid binding: " + a);
            b = Do(b, this.qi, this);
            c = Do(c, this.qi, this);
            return{controls: b, participants: c}
        };
        M.qi = function(a) {
            var b = a;
            if (this.gl(a))
                return this.Kf(b) || (b = google[F].createWrapper(b)), this.Ka[v](b), this.Ka[B] - 1;
            a = this.fl();
            a = po(yo(b)) ? -1 : Ao(a, b);
            if (-1 == a)
                throw m("Invalid wrapper name: " + b);
            return a
        };
        M.Kf = function(a) {
            return R(a[Vb])
        };
        M.gl = function(a) {
            var b = /${.*}^/;
            return Qn(a) || P(a) && b[Kc](a)
        };
        M.fl = function() {
            return Do(this.Ka, function(a) {
                return a[rb]()
            })
        };
        function $t(a, b) {
            au(a)[Kd](b)
        }
        function au(a) {
            a = a || {};
            P(a) && (a = mo(a));
            return a.controlType ? new google[F].ControlWrapper(a) : a.dashboardType ? new google[F].DashboardWrapper(a) : new google[F].ChartWrapper(a)
        }
        ;
        function bu(a, b, c) {
            var d = b[yb](c), f = b[jc](c), h = b[ad](c), d = a[Vd](d, h, f);
            a.setColumnProperties(d, b[Wc](c));
            return d
        }
        function cu(a) {
            for (var b = 0, c = 0; c < a[B]; c++)
                b += a[c];
            return b
        }
        ;
        function du(a, b, c, d, f) {
            this.ba = !!b;
            a && this.wc(a, d);
            va(this, void 0 != f ? f : this.Ca || 0);
            this.ba && va(this, -1 * this[Gb]);
            this.be = !c
        }
        S(du, tr);
        M = du[E];
        M.Aa = null;
        M.Ca = 0;
        M.ff = !1;
        M.wc = function(a, b, c) {
            if (this.Aa = a)
                this.Ca = Sn(b) ? b : 1 != this.Aa[Nc] ? 0 : this.ba ? -1 : 1;
            Sn(c) && va(this, c)
        };
        M.Ie = function(a) {
            this.Aa = a.Aa;
            this.Ca = a.Ca;
            va(this, a[Gb]);
            this.ba = a.ba;
            this.be = a.be
        };
        ya(M, function() {
            return new du(this.Aa, this.ba, !this.be, this.Ca, this[Gb])
        });
        M.Uk = function() {
            var a = this.ba ? 1 : -1;
            this.Ca == a && (this.Ca = -1 * a, va(this, this[Gb] + this.Ca * (this.ba ? -1 : 1)))
        };
        xa(M, function() {
            var a;
            if (this.ff) {
                if (!this.Aa || this.be && 0 == this[Gb])
                    throw sr;
                a = this.Aa;
                var b = this.ba ? -1 : 1;
                if (this.Ca == b) {
                    var c = this.ba ? a[lc] : a[zb];
                    c ? this.wc(c) : this.wc(a, -1 * b)
                } else
                    (c = this.ba ? a.previousSibling : a[Mb]) ? this.wc(c) : this.wc(a[H], -1 * b);
                va(this, this[Gb] + this.Ca * (this.ba ? -1 : 1))
            } else
                this.ff = !0;
            a = this.Aa;
            if (!this.Aa)
                throw sr;
            return a
        });
        M.gk = function() {
            return 1 == this.Ca
        };
        M.splice = function(a) {
            var b = this.Aa;
            this.Uk();
            this.ba = !this.ba;
            du[E].next[G](this);
            this.ba = !this.ba;
            for (var c = On(arguments[0]) ? arguments[0] : arguments, d = c[B] - 1; 0 <= d; d--)
                b[H] && b[H][jb](c[d], b[Mb]);
            yq(b)
        };
        function eu() {
        }
        eu[E].Hg = function() {
            return!1
        };
        eu[E].L = function() {
            return jq(T ? this[Ac]() : this.Y())
        };
        eu[E].Hc = function() {
            return oq(this.L())
        };
        eu[E].containsNode = function(a, b) {
            return this.mc(fu(gu(a), void 0), b)
        };
        function hu(a, b) {
            du[G](this, a, b, !0)
        }
        S(hu, du);
        function iu(a, b, c, d, f) {
            var h;
            a && (this.w = a, this.u = b, this.q = c, this.t = d, 1 == a[Nc] && a[zc] != fg && (a = a[Hb], (b = a[b]) ? (this.w = b, this.u = 0) : (a[B] && (this.w = a[a[B] - 1]), h = !0)), 1 == c[Nc] && ((this.q = c[Hb][d]) ? this.t = 0 : this.q = c));
            du[G](this, f ? this.q : this.w, f, !0);
            if (h)
                try {
                    this.next()
                } catch (k) {
                    if (k != sr)
                        throw k;
                }
        }
        S(iu, hu);
        M = iu[E];
        M.w = null;
        M.q = null;
        M.u = 0;
        M.t = 0;
        M.Y = function() {
            return this.w
        };
        M.ha = function() {
            return this.q
        };
        M.fk = function() {
            return this.ff && this.Aa == this.q && (!this.t || !this.gk())
        };
        xa(M, function() {
            if (this.fk())
                throw sr;
            return iu.b.next[G](this)
        });
        M.Ie = function(a) {
            this.w = a.w;
            this.q = a.q;
            this.u = a.u;
            this.t = a.t;
            this.ua = a.ua;
            iu.b.Ie[G](this, a)
        };
        ya(M, function() {
            var a = new iu(this.w, this.u, this.q, this.t, this.ua);
            a.Ie(this);
            return a
        });
        function ju() {
        }
        ju[E].mc = function(a, b) {
            var c = b && !a[Ic](), d = a.s;
            try {
                return c ? 0 <= this.pa(d, 0, 1) && 0 >= this.pa(d, 1, 0) : 0 <= this.pa(d, 0, 0) && 0 >= this.pa(d, 1, 1)
            } catch (f) {
                if (!T)
                    throw f;
                return!1
            }
        };
        ju[E].containsNode = function(a, b) {
            return this.mc(gu(a), b)
        };
        ju[E].Xf = function() {
            return new iu(this.Y(), this.na(), this.ha(), this.va())
        };
        function ku(a) {
            this.s = a
        }
        S(ku, ju);
        function lu(a) {
            var b = jq(a)[Yc]();
            if (3 == a[Nc])
                b[sd](a, 0), b[kb](a, a[B]);
            else if (mu(a)) {
                for (var c, d = a; (c = d[zb]) && mu(c); )
                    d = c;
                b[sd](d, 0);
                for (d = a; (c = d[lc]) && mu(c); )
                    d = c;
                b[kb](d, 1 == d[Nc] ? d[Hb][B] : d[B])
            } else
                c = a[H], a = Ao(c[Hb], a), b[sd](c, a), b[kb](c, a + 1);
            return b
        }
        function nu(a, b, c, d) {
            var f = jq(a)[Yc]();
            f[sd](a, b);
            f[kb](c, d);
            return f
        }
        M = ku[E];
        ya(M, function() {
            return new this[bc](this.s.cloneRange())
        });
        Ba(M, function() {
            return this.s.commonAncestorContainer
        });
        M.Y = function() {
            return this.s.startContainer
        };
        M.na = function() {
            return this.s.startOffset
        };
        M.ha = function() {
            return this.s.endContainer
        };
        M.va = function() {
            return this.s.endOffset
        };
        M.pa = function(a, b, c) {
            return this.s.compareBoundaryPoints(1 == c ? 1 == b ? N.Range.START_TO_START : N.Range.START_TO_END : 1 == b ? N.Range.END_TO_START : N.Range.END_TO_END, a)
        };
        M.isCollapsed = function() {
            return this.s.collapsed
        };
        M.select = function(a) {
            var b = oq(jq(this.Y()));
            this.Wc(b.getSelection(), a)
        };
        M.Wc = function(a) {
            a.removeAllRanges();
            a.addRange(this.s)
        };
        M.collapse = function(a) {
            this.s[bb](a)
        };
        function ou(a) {
            this.s = a
        }
        S(ou, ku);
        ou[E].Wc = function(a, b) {
            if (!b || this[Ic]())
                ou.b.Wc[G](this, a, b);
            else
                a[bb](this.ha(), this.va()), a.extend(this.Y(), this.na())
        };
        function pu(a, b) {
            this.s = a;
            this.vj = b
        }
        S(pu, ju);
        function qu(a) {
            var b = jq(a)[Ed].createTextRange();
            if (1 == a[Nc])
                b.moveToElementText(a), mu(a) && !a[Hb][B] && b[bb](!1);
            else {
                for (var c = 0, d = a; d = d.previousSibling; ) {
                    var f = d[Nc];
                    if (3 == f)
                        c += d[B];
                    else if (1 == f) {
                        b.moveToElementText(d);
                        break
                    }
                }
                d || b.moveToElementText(a[H]);
                b[bb](!d);
                c && b.move(si, c);
                b.moveEnd(si, a[B])
            }
            return b
        }
        M = pu[E];
        M.Ua = null;
        M.w = null;
        M.q = null;
        M.u = -1;
        M.t = -1;
        ya(M, function() {
            var a = new pu(this.s.duplicate(), this.vj);
            a.Ua = this.Ua;
            a.w = this.w;
            a.q = this.q;
            return a
        });
        Ba(M, function() {
            if (!this.Ua) {
                var a = this.s.text, b = this.s.duplicate(), c = a[q](/ +$/, I);
                (c = a[B] - c[B]) && b.moveEnd(si, -c);
                c = b.parentElement();
                b = b.htmlText[q](/(\r\n|\r|\n)+/g, de)[B];
                if (this[Ic]() && 0 < b)
                    return this.Ua = c;
                for (; b > c.outerHTML[q](/(\r\n|\r|\n)+/g, de)[B]; )
                    c = c[H];
                for (; 1 == c[Hb][B] && c.innerText == (3 == c[zb][Nc]?c[zb].nodeValue:c[zb].innerText) && mu(c[zb]); )
                    c = c[zb];
                0 == a[B] && (c = this.zh(c));
                this.Ua = c
            }
            return this.Ua
        });
        M.zh = function(a) {
            for (var b = a[Hb], c = 0, d = b[B]; c < d; c++) {
                var f = b[c];
                if (mu(f)) {
                    var h = qu(f), k = h.htmlText != f.outerHTML;
                    if (this[Ic]() && k ? 0 <= this.pa(h, 1, 1) && 0 >= this.pa(h, 1, 0) : this.s.inRange(h))
                        return this.zh(f)
                }
            }
            return a
        };
        M.Y = function() {
            this.w || (this.w = this.Lc(1), this[Ic]() && (this.q = this.w));
            return this.w
        };
        M.na = function() {
            0 > this.u && (this.u = this.ph(1), this[Ic]() && (this.t = this.u));
            return this.u
        };
        M.ha = function() {
            if (this[Ic]())
                return this.Y();
            this.q || (this.q = this.Lc(0));
            return this.q
        };
        M.va = function() {
            if (this[Ic]())
                return this.na();
            0 > this.t && (this.t = this.ph(0), this[Ic]() && (this.u = this.t));
            return this.t
        };
        M.pa = function(a, b, c) {
            return this.s.compareEndPoints((1 == b ? gh : tg) + oh + (1 == c ? gh : tg), a)
        };
        M.Lc = function(a, b) {
            var c = b || this[Ac]();
            if (!c || !c[zb])
                return c;
            for (var d = 1 == a, f = 0, h = c[Hb][B]; f < h; f++) {
                var k = d ? f : h - f - 1, n = c[Hb][k], u;
                try {
                    u = gu(n)
                } catch (C) {
                    continue
                }
                var D = u.s;
                if (this[Ic]())
                    if (!mu(n)) {
                        if (0 == this.pa(D, 1, 1)) {
                            this.u = this.t = k;
                            break
                        }
                    } else {
                        if (u.mc(this))
                            return this.Lc(a, n)
                    }
                else {
                    if (this.mc(u)) {
                        if (!mu(n)) {
                            d ? this.u = k : this.t = k + 1;
                            break
                        }
                        return this.Lc(a, n)
                    }
                    if (0 > this.pa(D, 1, 0) && 0 < this.pa(D, 0, 1))
                        return this.Lc(a, n)
                }
            }
            return c
        };
        M.pk = function(a, b, c) {
            return this.s.compareEndPoints((1 == b ? gh : tg) + oh + (1 == c ? gh : tg), gu(a).s)
        };
        M.ph = function(a, b) {
            var c = 1 == a, d = b || (c ? this.Y() : this.ha());
            if (1 == d[Nc]) {
                for (var d = d[Hb], f = d[B], h = c ? 1 : -1, k = c ? 0 : f - 1; 0 <= k && k < f; k += h) {
                    var n = d[k];
                    if (!mu(n) && 0 == this.pk(n, a, a))
                        return c ? k : k + 1
                }
                return-1 == k ? 0 : k
            }
            f = this.s.duplicate();
            h = qu(d);
            f.setEndPoint(c ? ug : ih, h);
            f = f.text[B];
            return c ? d[B] - f : f
        };
        M.isCollapsed = function() {
            return 0 == this.s.compareEndPoints(hh, this.s)
        };
        M.select = function() {
            this.s.select()
        };
        M.collapse = function(a) {
            this.s[bb](a);
            a ? (this.q = this.w, this.t = this.u) : (this.w = this.q, this.u = this.t)
        };
        function ru(a) {
            this.s = a
        }
        S(ru, ku);
        ru[E].Wc = function(a) {
            a[bb](this.Y(), this.na());
            this.ha() == this.Y() && this.va() == this.na() || a.extend(this.ha(), this.va());
            0 == a.rangeCount && a.addRange(this.s)
        };
        function su(a) {
            this.s = a
        }
        S(su, ku);
        su[E].pa = function(a, b, c) {
            return tp(Kf) ? su.b.pa[G](this, a, b, c) : this.s.compareBoundaryPoints(1 == c ? 1 == b ? N.Range.START_TO_START : N.Range.END_TO_START : 1 == b ? N.Range.START_TO_END : N.Range.END_TO_END, a)
        };
        su[E].Wc = function(a, b) {
            a.removeAllRanges();
            b ? a.setBaseAndExtent(this.ha(), this.va(), this.Y(), this.na()) : a.setBaseAndExtent(this.Y(), this.na(), this.ha(), this.va())
        };
        function gu(a) {
            if (T && !up(9)) {
                var b = new pu(qu(a), jq(a));
                if (mu(a)) {
                    for (var c, d = a; (c = d[zb]) && mu(c); )
                        d = c;
                    b.w = d;
                    b.u = 0;
                    for (d = a; (c = d[lc]) && mu(c); )
                        d = c;
                    b.q = d;
                    b.t = 1 == d[Nc] ? d[Hb][B] : d[B];
                    b.Ua = a
                } else
                    b.w = b.q = b.Ua = a[H], b.u = Ao(b.Ua[Hb], a), b.t = b.u + 1;
                a = b
            } else
                a = gp ? new su(lu(a)) : fp ? new ou(lu(a)) : ep ? new ru(lu(a)) : new ku(lu(a));
            return a
        }
        function mu(a) {
            return uq(a) || 3 == a[Nc]
        }
        ;
        function tu() {
        }
        S(tu, eu);
        function fu(a, b) {
            var c = new tu;
            c.Jb = a;
            c.ua = !!b;
            return c
        }
        M = tu[E];
        M.Jb = null;
        M.w = null;
        M.u = null;
        M.q = null;
        M.t = null;
        M.ua = !1;
        ya(M, function() {
            var a = new tu;
            a.Jb = this.Jb;
            a.w = this.w;
            a.u = this.u;
            a.q = this.q;
            a.t = this.t;
            a.ua = this.ua;
            return a
        });
        M.da = function() {
            return Sm
        };
        M.Qa = function() {
            var a;
            if (!(a = this.Jb)) {
                a = this.Y();
                var b = this.na(), c = this.ha(), d = this.va();
                if (T && !up(9)) {
                    var f = a, h = b, k = c, n = d, u = !1;
                    1 == f[Nc] && (h = f[Hb][h], u = !h, f = h || f[lc] || f, h = 0);
                    var C = qu(f);
                    h && C.move(si, h);
                    if (f == k && h == n)
                        C[bb](!0);
                    else
                        u && C[bb](!1), u = !1, 1 == k[Nc] && (k = (h = k[Hb][n]) || k[lc] || k, n = 0, u = !h), f = qu(k), f[bb](!u), n && f.moveEnd(si, n), C.setEndPoint(ug, f);
                    n = new pu(C, jq(a));
                    n.w = a;
                    n.u = b;
                    n.q = c;
                    n.t = d;
                    a = n
                } else
                    a = gp ? new su(nu(a, b, c, d)) : fp ? new ou(nu(a, b, c, d)) : ep ? new ru(nu(a, b, c, d)) : new ku(nu(a, b, c, d));
                a = this.Jb =
                a
            }
            return a
        };
        Ba(M, function() {
            return this.Qa()[Ac]()
        });
        M.Y = function() {
            return this.w || (this.w = this.Qa().Y())
        };
        M.na = function() {
            return null != this.u ? this.u : this.u = this.Qa().na()
        };
        M.ha = function() {
            return this.q || (this.q = this.Qa().ha())
        };
        M.va = function() {
            return null != this.t ? this.t : this.t = this.Qa().va()
        };
        M.Hg = function() {
            return this.ua
        };
        M.mc = function(a, b) {
            var c = a.da();
            return c == Sm ? this.Qa().mc(a.Qa(), b) : c == Fi ? (c = a.bm(), (b ? Eo : Fo)(c, function(a) {
                return this.containsNode(a, b)
            }, this)) : !1
        };
        M.isCollapsed = function() {
            return this.Qa()[Ic]()
        };
        M.Xf = function() {
            return new iu(this.Y(), this.na(), this.ha(), this.va())
        };
        M.select = function() {
            this.Qa().select(this.ua)
        };
        M.collapse = function(a) {
            a = this.Hg() ? !a : a;
            this.Jb && this.Jb[bb](a);
            a ? (this.q = this.w, this.t = this.u) : (this.w = this.q, this.u = this.t);
            this.ua = !1
        };
        function uu(a, b, c, d) {
            if (a == c)
                return d < b;
            var f;
            if (1 == a[Nc] && b)
                if (f = a[Hb][b])
                    a = f, b = 0;
                else if (zq(a, c))
                    return!0;
            if (1 == c[Nc] && d)
                if (f = c[Hb][d])
                    c = f, d = 0;
                else if (zq(c, a))
                    return!1;
            return 0 < (Aq(a, c) || b - d)
        }
        ;
        function vu(a) {
            this.zf = a;
            this.G = {}
        }
        S(vu, Mq);
        var wu = [];
        M = vu[E];
        M.i = function(a, b, c, d, f) {
            O(b) || (wu[0] = b, b = wu);
            for (var h = 0; h < b[B]; h++) {
                var k = er(a, b[h], c || this, d || !1, f || this.zf || this);
                if (!k)
                    break;
                this.G[k.key] = k
            }
            return this
        };
        M.Rd = function(a, b, c, d, f) {
            if (O(b))
                for (var h = 0; h < b[B]; h++)
                    this.Rd(a, b[h], c, d, f);
            else {
                a = jr(a, b, c || this, d, f || this.zf || this);
                if (!a)
                    return this;
                this.G[a.key] = a
            }
            return this
        };
        M.Z = function(a, b, c, d, f) {
            if (O(b))
                for (var h = 0; h < b[B]; h++)
                    this.Z(a, b[h], c, d, f);
            else
                f = f || this.zf || this, c = fr(c || this), d = !!d, b = Xq(a) ? a.dd(b, c, d, f) : a ? (a = lr(a)) ? a.dd(b, c, d, f) : null : null, b && (mr(b), delete this.G[b.key]);
            return this
        };
        M.removeAll = function() {
            Sp(this.G, mr);
            this.G = {}
        };
        M.k = function() {
            vu.b.k[G](this);
            this[Id]()
        };
        M.handleEvent = function() {
            throw m("EventHandler.handleEvent not implemented");
        };
        function xu() {
        }
        Ln(xu);
        xu[E].Vl = 0;
        xu[E].wl = function() {
            return Of + (this.Vl++)[Pb](36)
        };
        xu.ya();
        function yu(a) {
            rr[G](this);
            this.jb = a || hq();
            this.pb = zu
        }
        S(yu, rr);
        yu[E].xl = xu.ya();
        var zu = null;
        function Au(a, b) {
            switch (a) {
                case 1:
                    return b ? Ti : dj;
                case 2:
                    return b ? wk : ln;
                case 4:
                    return b ? Kh : Oi;
                case 8:
                    return b ? lm : mn;
                case 16:
                    return b ? ui : kn;
                case 32:
                    return b ? lj : ai;
                case 64:
                    return b ? Cl : yi
            }
            throw m("Invalid component state");
        }
        M = yu[E];
        M.Vd = null;
        M.r = !1;
        M.j = null;
        M.pb = null;
        M.Ce = null;
        M.Ga = null;
        M.W = null;
        M.Oa = null;
        M.Li = !1;
        M.Xb = function() {
            return this.Vd || (this.Vd = this.xl.wl())
        };
        M.a = function() {
            return this.j
        };
        M.xg = function(a) {
            this.j = a
        };
        M.U = function() {
            return this.fc || (this.fc = new vu(this))
        };
        M.ve = function(a) {
            if (this == a)
                throw m(rh);
            if (a && this.Ga && this.Vd && this.Ga.ye(this.Vd) && this.Ga != a)
                throw m(rh);
            this.Ga = a;
            yu.b.nf[G](this, a)
        };
        M.getParent = function() {
            return this.Ga
        };
        M.nf = function(a) {
            if (this.Ga && this.Ga != a)
                throw m("Method not supported");
            yu.b.nf[G](this, a)
        };
        M.n = function() {
            return this.jb
        };
        M.d = function() {
            this.j = this.jb[vb](Xi)
        };
        M.zb = function(a) {
            this.kg(a)
        };
        M.kg = function(a, b) {
            if (this.r)
                throw m(ng);
            this.j || this.d();
            a ? a[jb](this.j, b || null) : this.jb.L()[Ed][Xa](this.j);
            this.Ga && !this.Ga.r || this.N()
        };
        M.N = function() {
            this.r = !0;
            this.xb(function(a) {
                !a.r && a.a() && a.N()
            })
        };
        M.ca = function() {
            this.xb(function(a) {
                a.r && a.ca()
            });
            this.fc && this.fc[Id]();
            this.r = !1
        };
        M.k = function() {
            this.r && this.ca();
            this.fc && (this.fc.fa(), delete this.fc);
            this.xb(function(a) {
                a.fa()
            });
            !this.Li && this.j && yq(this.j);
            this.Ga = this.Ce = this.j = this.Oa = this.W = null;
            yu.b.k[G](this)
        };
        M.$l = function(a) {
            this.Ce = a
        };
        M.Wd = function(a, b) {
            this.Pc(a, this.eb(), b)
        };
        M.Pc = function(a, b, c) {
            if (a.r && (c || !this.r))
                throw m(ng);
            if (0 > b || b > this.eb())
                throw m("Child component index out of bounds");
            this.Oa && this.W || (this.Oa = {}, this.W = []);
            if (a[Za]() == this) {
                var d = a.Xb();
                this.Oa[d] = a;
                Io(this.W, a)
            } else {
                var d = this.Oa, f = a.Xb();
                if (f in d)
                    throw m('The object already contains the key "' + f + ie);
                d[f] = a
            }
            a.ve(this);
            Mo(this.W, b, 0, a);
            a.r && this.r && a[Za]() == this ? (c = this.R(), c[jb](a.a(), c[Hb][b] || null)) : c ? (this.j || this.d(), b = this.Na(b + 1), a.kg(this.R(), b ? b.j : null)) : this.r && !a.r && a.j && a.j[H] &&
                    1 == a.j[H][Nc] && a.N()
        };
        M.R = function() {
            return this.j
        };
        M.He = function() {
            null == this.pb && (this.pb = bt(this.r ? this.j : this.jb.L()[Ed]));
            return this.pb
        };
        M.hc = function(a) {
            if (this.r)
                throw m(ng);
            this.pb = a
        };
        M.Ll = function() {
            return!!this.W && 0 != this.W[B]
        };
        M.eb = function() {
            return this.W ? this.W[B] : 0
        };
        M.ye = function(a) {
            return this.Oa && a ? (a in this.Oa ? this.Oa[a] : void 0) || null : null
        };
        M.Na = function(a) {
            return this.W ? this.W[a] || null : null
        };
        M.xb = function(a, b) {
            this.W && Bo(this.W, a, b)
        };
        M.od = function(a) {
            return this.W && a ? Ao(this.W, a) : -1
        };
        M.removeChild = function(a, b) {
            if (a) {
                var c = P(a) ? a : a.Xb();
                a = this.ye(c);
                c && a && (Wp(this.Oa, c), Io(this.W, a), b && (a.ca(), a.j && yq(a.j)), a.ve(null))
            }
            if (!a)
                throw m("Child is not in parent component");
            return a
        };
        M.Ml = function(a, b) {
            return this[Fd](this.Na(a), b)
        };
        M.Wg = function(a) {
            for (var b = []; this.Ll(); )
                b[v](this.Ml(0, a));
            return b
        };
        var Bu;
        function Cu(a, b) {
            b ? a[Cb](hm, b) : a[Cc](hm)
        }
        function Du(a, b, c) {
            On(c) && (c = c[Zd](de));
            var d = Sh + b;
            if (c === I || void 0 == c)
                Bu || (Bu = {atomic: !1, autocomplete: ul, dropeffect: ul, haspopup: !1, live: zl, multiline: !1, multiselectable: !1, orientation: tn, readonly: !1, relevant: Nh, required: !1, sort: ul, busy: !1, disabled: !1, hidden: !1, invalid: ij}), c = Bu, b in c ? a[Cb](d, c[b]) : a[Cc](d);
            else
                a[Cb](d, c)
        }
        function Eu(a, b) {
            var c = a.getAttribute(Sh + b);
            return null == c || void 0 == c ? I : ma(c)
        }
        ;
        function Fu(a, b, c, d, f) {
            if (!(T || gp && tp(Jf)))
                return!0;
            if (Zo && f)
                return Gu(a);
            if (f && !d || !c && (17 == b || 18 == b || Zo && 91 == b))
                return!1;
            if (gp && d && c)
                switch (a) {
                    case 220:
                    case 219:
                    case 221:
                    case 192:
                    case 186:
                    case 189:
                    case 187:
                    case 188:
                    case 190:
                    case 191:
                    case 192:
                    case 222:
                        return!1
                }
            if (T && d && b == a)
                return!1;
            switch (a) {
                case 13:
                    return!(T && up(9));
                case 27:
                    return!gp
            }
            return Gu(a)
        }
        function Gu(a) {
            if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || gp && 0 == a)
                return!0;
            switch (a) {
                case 32:
                case 63:
                case 107:
                case 109:
                case 110:
                case 111:
                case 186:
                case 59:
                case 189:
                case 187:
                case 61:
                case 188:
                case 190:
                case 191:
                case 192:
                case 222:
                case 219:
                case 220:
                case 221:
                    return!0;
                default:
                    return!1
                }
        }
        function Hu(a) {
            switch (a) {
                case 61:
                    return 187;
                case 59:
                    return 186;
                case 173:
                    return 189;
                case 224:
                    return 91;
                case 0:
                    return 224;
                default:
                    return a
                }
        }
        ;
        function Iu(a, b, c) {
            rr[G](this);
            Wa(this, a);
            this.handle = b || a;
            this.Lf = c || new Ss(NaN, NaN, NaN, NaN);
            this.S = jq(a);
            this.Ya = new vu(this);
            this.Kk(this.Ya);
            er(this.handle, [cn, kl], this.Ag, !1, this)
        }
        S(Iu, rr);
        var Ju = T || fp && tp("1.9.3");
        M = Iu[E];
        Oa(M, 0);
        Pa(M, 0);
        sa(M, 0);
        ta(M, 0);
        M.Ug = 0;
        M.Vg = 0;
        M.qc = 0;
        M.rc = 0;
        M.Cb = !0;
        M.Pb = !1;
        M.Tg = 0;
        M.Tj = !1;
        M.df = !1;
        M.U = function() {
            return this.Ya
        };
        M.Kg = function(a) {
            this.Lf = a || new Ss(NaN, NaN, NaN, NaN)
        };
        M.k = function() {
            Iu.b.k[G](this);
            kr(this.handle, [cn, kl], this.Ag, !1, this);
            this.zg();
            Wa(this, null);
            this.handle = null
        };
        M.xh = function() {
            Nn(this.pb) || (this.pb = bt(this[Hd]));
            return this.pb
        };
        M.Ag = function(a) {
            var b = a[z] == kl;
            if (!this.Cb || this.Pb || b && !a.Ne())
                this[r](bj);
            else {
                this.af(a);
                if (0 == this.Tg)
                    if (this.Sg(a))
                        this.Pb = !0, a[ib]();
                    else
                        return;
                else
                    a[ib]();
                this.Pj();
                Oa(this, this.Ug = a[md]);
                Pa(this, this.Vg = a[nd]);
                sa(this, a[lb]);
                ta(this, a[mb]);
                if (this.df) {
                    a = this[Hd];
                    var b = a[Bd], c = a[ac];
                    c || Vs(a) != kj || (c = jq(a)[Ob]);
                    if (c) {
                        if (fp)
                            var d = ot(c), b = b + d[y];
                        else
                            up(8) && (d = ot(c), b -= d[y]);
                        a = bt(c) ? c[wd] - (b + a[db]) : b
                    } else
                        a = b
                } else
                    a = this[Hd][Bd];
                this.qc = a;
                this.rc = this[Hd][Ec];
                this.mf = hq(this.S).gc();
                $n()
            }
        };
        M.Pj = function() {
            var a = this.S, b = a[Ob], c = !Ju;
            this.Ya.i(a, [bn, ll], this.Rj, c);
            this.Ya.i(a, [an, ol], this.Od, c);
            Ju ? (b.setCapture(!1), this.Ya.i(b, $k, this.Od)) : this.Ya.i(oq(a), ai, this.Od);
            T && this.Tj && this.Ya.i(a, $i, Pq);
            this.Wj && this.Ya.i(this.Wj, km, this.Uj, c)
        };
        M.Sg = function(a) {
            return this[r](new Ku(Gm, this, a[md], a[nd], a))
        };
        M.zg = function() {
            this.Ya[Id]();
            Ju && this.S.releaseCapture()
        };
        M.Od = function(a, b) {
            this.zg();
            if (this.Pb) {
                this.af(a);
                this.Pb = !1;
                var c = this.sh(this.qc), d = this.th(this.rc);
                this[r](new Ku(ej, this, a[md], a[nd], a, c, d, b || a[z] == $m))
            } else
                this[r](bj)
        };
        M.af = function(a) {
            var b = a[z];
            b == cn || b == bn ? a.oe(a.za.targetTouches[0], a.currentTarget) : b != an && b != $m || a.oe(a.za.changedTouches[0], a.currentTarget)
        };
        M.Rj = function(a) {
            if (this.Cb) {
                this.af(a);
                var b = (this.df && this.xh() ? -1 : 1) * (a[md] - this[md]), c = a[nd] - this[nd];
                Oa(this, a[md]);
                Pa(this, a[nd]);
                sa(this, a[lb]);
                ta(this, a[mb]);
                if (!this.Pb) {
                    var d = this.Ug - this[md], f = this.Vg - this[nd];
                    if (d * d + f * f > this.Tg)
                        if (this.Sg(a))
                            this.Pb = !0;
                        else {
                            this.$b || this.Od(a);
                            return
                        }
                }
                c = this.vh(b, c);
                b = c.x;
                c = c.y;
                this.Pb && this[r](new Ku(Xh, this, a[md], a[nd], a, b, c)) && (this.wh(a, b, c, !1), a[ib]())
            }
        };
        M.vh = function(a, b) {
            var c = hq(this.S).gc();
            a += c.x - this.mf.x;
            b += c.y - this.mf.y;
            this.mf = c;
            this.qc += a;
            this.rc += b;
            var c = this.sh(this.qc), d = this.th(this.rc);
            return new So(c, d)
        };
        M.Uj = function(a) {
            var b = this.vh(0, 0);
            Oa(a, this[md]);
            Pa(a, this[nd]);
            this.wh(a, b.x, b.y, !0)
        };
        M.wh = function(a, b, c) {
            this.Ql(b, c);
            this[r](new Ku(Zi, this, a[md], a[nd], a, b, c))
        };
        M.sh = function(a) {
            var b = this.Lf, c = ga(b[y]) ? null : b[y], b = ga(b[p]) ? 0 : b[p];
            return l.min(null != c ? c + b : ea, l.max(null != c ? c : -ea, a))
        };
        M.th = function(a) {
            var b = this.Lf, c = ga(b.top) ? null : b.top, b = ga(b[t]) ? 0 : b[t];
            return l.min(null != c ? c + b : ea, l.max(null != c ? c : -ea, a))
        };
        M.Ql = function(a, b) {
            this.df && this.xh() ? Fa(this[Hd][s], a + Xl) : Ka(this[Hd][s], a + Xl);
            this[Hd][s].top = b + Xl
        };
        function Ku(a, b, c, d, f, h, k) {
            Oq[G](this, a);
            Oa(this, c);
            Pa(this, d);
            Ka(this, Nn(h) ? h : b.qc);
            this.top = Nn(k) ? k : b.rc
        }
        S(Ku, Oq);
        function Lu(a) {
            rr[G](this);
            this.j = a;
            a = T ? nj : ai;
            this.Zi = er(this.j, T ? mj : lj, this, !T);
            this.$i = er(this.j, a, this, !T)
        }
        S(Lu, rr);
        Lu[E].handleEvent = function(a) {
            var b = new Uq(a.za);
            La(b, a[z] == mj || a[z] == lj ? mj : nj);
            this[r](b)
        };
        Lu[E].k = function() {
            Lu.b.k[G](this);
            mr(this.Zi);
            mr(this.$i);
            delete this.j
        };
        function Mu(a, b) {
            yu[G](this, b);
            this.aj = !!a;
            this.Ic = null
        }
        S(Mu, yu);
        M = Mu[E];
        M.we = null;
        M.m = !1;
        M.ga = null;
        M.X = null;
        M.sa = null;
        M.Of = !1;
        M.F = function() {
            return ck
        };
        M.ud = function() {
            return this.ga
        };
        M.d = function() {
            Mu.b.d[G](this);
            var a = this.a();
            eq(a, this.F());
            Hq(a, !0);
            ht(a, !1);
            this.Oi();
            this.Ni()
        };
        M.Oi = function() {
            this.aj && !this.X && (this.X = this.n().d(Hk, {frameborder: 0, style: ei, src: Ok}), Ua(this.X, this.F() + Ke), ht(this.X, !1), gt(this.X, 0));
            this.ga || (this.ga = this.n().d(Xi, this.F() + Ke), ht(this.ga, !1))
        };
        M.Ni = function() {
            this.sa || (this.sa = this.n()[vb](Em), ht(this.sa, !1), Hq(this.sa, !0), this.sa[s].position = Ih)
        };
        M.gj = function() {
            this.Of = !0;
            try {
                this.sa[ub]()
            } catch (a) {
            }
            zr(this.Rh, 0, this)
        };
        M.Rh = function() {
            this.Of = !1
        };
        M.Gi = function() {
            this.X && xq(this.X, this.a());
            xq(this.ga, this.a())
        };
        M.N = function() {
            this.Gi();
            Mu.b.N[G](this);
            var a = this.a();
            a[H] && a[H][jb](this.sa, a[Mb]);
            this.we = new Lu(this.n().L());
            this.U().i(this.we, mj, this.Fi);
            this.dg(!1)
        };
        M.ca = function() {
            this.m && this.K(!1);
            Nq(this.we);
            Mu.b.ca[G](this);
            yq(this.X);
            yq(this.ga);
            yq(this.sa)
        };
        M.K = function(a) {
            a != this.m && (this.cc && this.cc[qd](), this.Cc && this.Cc[qd](), this.dc && this.dc[qd](), this.Ec && this.Ec[qd](), this.r && this.dg(a), a ? this.Fj() : this.zj())
        };
        M.dg = function(a) {
            for (var b = this.n().L()[Ed][zb]; b; b = b[Mb])
                if (1 == b[Nc]) {
                    var c = b;
                    a ? Du(c, uk, a) : c[Cc](Uh)
                }
            b = this.j;
            (a = !a) ? Du(b, uk, a) : b[Cc](Uh)
        };
        M.Fj = function() {
            if (this[r](Zh)) {
                try {
                    this.Ic = this.n().L().activeElement
                } catch (a) {
                }
                this.Ge();
                this.Bc();
                this.U().i(this.n().Hc(), em, this.Ge);
                this.sg(!0);
                this[ub]();
                this.m = !0;
                this.cc && this.Cc ? (jr(this.cc, ej, this.sd, !1, this), this.Cc[ed](), this.cc[ed]()) : this.sd()
            }
        };
        M.zj = function() {
            if (this[r](Yh)) {
                this.U().Z(this.n().Hc(), em, this.Ge);
                this.m = !1;
                this.dc && this.Ec ? (jr(this.dc, ej, this.wd, !1, this), this.Ec[ed](), this.dc[ed]()) : this.wd();
                try {
                    var a = this.n().L()[Ed], b = this.n().L().activeElement || a;
                    this.Ic && b == a && this.Ic != a && this.Ic[ub]()
                } catch (c) {
                }
                this.Ic = null
            }
        };
        M.sg = function(a) {
            this.X && ht(this.X, a);
            this.ga && ht(this.ga, a);
            ht(this.a(), a);
            ht(this.sa, a)
        };
        M.sd = function() {
            this[r](ym)
        };
        M.wd = function() {
            this.sg(!1);
            this[r](vk)
        };
        M.focus = function() {
            this.Th()
        };
        M.Ge = function() {
            this.X && ht(this.X, !1);
            this.ga && ht(this.ga, !1);
            var a = this.n().L(), b = mq(oq(a) || ca || ca), c = l.max(b[p], l.max(a[Ed][pc], a[Ob][pc])), a = l.max(b[t], l.max(a[Ed][wb], a[Ob][wb]));
            this.X && (ht(this.X, !0), ct(this.X, c, a));
            this.ga && (ht(this.ga, !0), ct(this.ga, c, a))
        };
        M.Bc = function() {
            var a = this.n().L(), b = oq(a) || ca;
            if (Vs(this.a()) == kj)
                var c = a = 0;
            else
                c = this.n().gc(), a = c.x, c = c.y;
            var d = dt(et, this.a()), b = mq(b || ca), a = l.max(a + b[p] / 2 - d[p] / 2, 0), c = l.max(c + b[t] / 2 - d[t] / 2, 0);
            Ws(this.a(), a, c);
            Ws(this.sa, a, c)
        };
        M.Fi = function(a) {
            this.Of ? this.Rh() : a[Hd] == this.sa && zr(this.Th, 0, this)
        };
        M.Th = function() {
            try {
                T && this.n().L()[Ed][ub](), this.a()[ub]()
            } catch (a) {
            }
        };
        M.k = function() {
            Nq(this.cc);
            this.cc = null;
            Nq(this.dc);
            this.dc = null;
            Nq(this.Cc);
            this.Cc = null;
            Nq(this.Ec);
            this.Ec = null;
            Mu.b.k[G](this)
        };
        function Nu(a, b, c) {
            Mu[G](this, b, c);
            this.Fa = a || il;
            this.fb = (new Ou).ka(Pu, !0).ka(Qu, !1, !0)
        }
        S(Nu, Mu);
        M = Nu[E];
        M.ej = !0;
        M.eg = !0;
        M.fg = !0;
        M.Hi = !0;
        M.xe = 0.5;
        M.Ei = I;
        M.la = I;
        M.mb = null;
        M.wj = !1;
        M.bc = null;
        M.hd = null;
        M.ig = null;
        M.gd = null;
        M.Dc = null;
        M.cb = null;
        M.Yb = "dialog";
        M.F = function() {
            return this.Fa
        };
        Ma(M, function(a) {
            this.la = a;
            this.Dc && Ia(this.Dc, a)
        });
        M.ui = function(a) {
            this.Yb = a
        };
        M.Td = function() {
            this.a() || this.zb()
        };
        M.R = function() {
            this.Td();
            return this.Dc
        };
        M.Qi = function() {
            this.Td();
            return this.hd
        };
        M.Pi = function() {
            this.Td();
            return this.cb
        };
        M.ud = function() {
            this.Td();
            return Nu.b.ud[G](this)
        };
        M.Di = function(a) {
            this.xe = a;
            this.a() && (a = this.ud()) && gt(a, this.xe)
        };
        M.Ki = function(a) {
            this.fg = a;
            if (this.r) {
                var b = this.n(), c = this.ud(), d = this.X;
                a ? (d && b.Pe(d, this.a()), b.Pe(c, this.a())) : (b.removeNode(d), b.removeNode(c))
            }
        };
        M.hj = function() {
            return new Iu(this.a(), this.bc)
        };
        M.gg = function(a) {
            if (this.a()) {
                var b = this.bc, c = this.Fa + gf;
                a ? eq(b, c) : fq(b, c)
            }
            a && !this.mb ? (this.mb = this.hj(), eq(this.bc, this.Fa + gf), er(this.mb, Gm, this.jj, !1, this)) : !a && this.mb && (this.mb.fa(), this.mb = null)
        };
        M.d = function() {
            Nu.b.d[G](this);
            var a = this.a(), b = this.n();
            this.bc = b.d(Xi, {className: this.Fa + ef, id: this.Xb()}, this.hd = b.d(Em, this.Fa + hf, this.Ei), this.gd = b.d(Em, this.Fa + ff));
            vq(a, this.bc, this.Dc = b.d(Xi, this.Fa + Pe), this.cb = b.d(Xi, this.Fa + Le));
            this.ig = this.bc.id;
            Cu(a, this.Yb);
            Du(a, Vk, this.ig || I);
            this.la && Ia(this.Dc, this.la);
            ht(this.gd, this.eg);
            this.fb && this.fb.Ci(this.cb);
            ht(this.cb, !!this.fb);
            this.Di(this.xe)
        };
        M.N = function() {
            Nu.b.N[G](this);
            this.U().i(this.a(), Sk, this.lg).i(this.a(), Tk, this.lg);
            this.U().i(this.cb, xi, this.Ii);
            this.gg(this.Hi);
            this.U().i(this.gd, xi, this.Ji);
            var a = this.a();
            Cu(a, this.Yb);
            this.hd.id !== I && Du(a, Vk, this.hd.id);
            this.fg || this.Ki(!1)
        };
        M.ca = function() {
            this.m && this.K(!1);
            this.gg(!1);
            Nu.b.ca[G](this)
        };
        M.K = function(a) {
            a != this.m && (this.r || this.zb(), Nu.b.K[G](this, a))
        };
        M.sd = function() {
            Nu.b.sd[G](this);
            this[r](Ph)
        };
        M.wd = function() {
            Nu.b.wd[G](this);
            this[r](Oh);
            this.wj && this.fa()
        };
        M.focus = function() {
            Nu.b[ub][G](this);
            if (this.fb) {
                var a = this.fb.ld;
                if (a)
                    for (var b = this.n().L(), c = this.cb[Nb](oi), d = 0, f; f = c[d]; d++)
                        if (f[jd] == a && !f[Ad]) {
                            try {
                                if (gp || ep) {
                                    var h = b[vb](Mk);
                                    h[s].cssText = Tl;
                                    this.a()[Xa](h);
                                    h[ub]();
                                    this.a()[Fd](h)
                                }
                                f[ub]()
                            } catch (k) {
                            }
                            break
                        }
            }
        };
        M.jj = function() {
            var a = this.n().L(), b = mq(oq(a) || ca || ca), c = l.max(a[Ed][pc], b[p]), a = l.max(a[Ed][wb], b[t]), d = dt(et, this.a());
            Vs(this.a()) == kj ? this.mb.Kg(new Ss(0, 0, l.max(0, b[p] - d[p]), l.max(0, b[t] - d[t]))) : this.mb.Kg(new Ss(0, 0, c - d[p], a - d[t]))
        };
        M.Ji = function() {
            if (this.eg) {
                var a = this.fb, b = a && a.bf;
                b ? (a = a.get(b), this[r](new Ru(b, a)) && this.K(!1)) : this.K(!1)
            }
        };
        M.k = function() {
            this.cb = this.gd = null;
            Nu.b.k[G](this)
        };
        M.Ii = function(a) {
            if ((a = this.Qk(a[Hd])) && !a[Ad]) {
                a = a[jd];
                var b = this.fb.get(a);
                this[r](new Ru(a, b)) && this.K(!1)
            }
        };
        M.Qk = function(a) {
            for (; null != a && a != this.cb; ) {
                if (a[zc] == gg)
                    return a;
                a = a[H]
            }
            return null
        };
        M.lg = function(a) {
            var b = !1, c = !1, d = this.fb, f = a[Hd];
            if (a[z] == Sk)
                if (this.ej && 27 == a[xb]) {
                    var h = d && d.bf, f = f[zc] == ch && !f[Ad];
                    h && !f ? (c = !0, b = d.get(h), b = this[r](new Ru(h, b))) : f || (b = !0)
                } else
                    9 == a[xb] && a[Ud] && f == this.a() && this.gj();
            else if (13 == a[xb]) {
                if (f[zc] == gg && !f[Ad])
                    h = f[jd];
                else if (d) {
                    var k = d.ld, n = k && d.fj(k), f = (f[zc] == kh || f[zc] == ch || f[zc] == $f) && !f[Ad];
                    !n || n[Ad] || f || (h = k)
                }
                h && d && (c = !0, b = this[r](new Ru(h, ma(d.get(h)))))
            }
            if (b || c)
                a[cc](), a[ib]();
            b && this.K(!1)
        };
        function Ru(a, b) {
            La(this, Ri);
            this.key = a;
            this.caption = b
        }
        S(Ru, Oq);
        function Ou(a) {
            this.jb = a || hq();
            ur[G](this)
        }
        S(Ou, ur);
        M = Ou[E];
        M.Fa = "goog-buttonset";
        M.ld = null;
        M.j = null;
        M.bf = null;
        M.set = function(a, b, c, d) {
            ur[E].set[G](this, a, b);
            c && (this.ld = a);
            d && (this.bf = a);
            return this
        };
        M.ka = function(a, b, c) {
            return this.set(a.key, a.caption, b, c)
        };
        M.Ci = function(a) {
            this.j = a;
            this.zb()
        };
        M.zb = function() {
            if (this.j) {
                Ia(this.j, I);
                var a = hq(this.j);
                xr(this, function(b, c) {
                    var d = a.d(oi, {name: c}, b);
                    c == this.ld && Ua(d, this.Fa + Qe);
                    this.j[Xa](d)
                }, this)
            }
        };
        M.a = function() {
            return this.j
        };
        M.n = function() {
            return this.jb
        };
        M.fj = function(a) {
            for (var b = this.Rl(), c = 0, d; d = b[c]; c++)
                if (d[jd] == a || d.id == a)
                    return d;
            return null
        };
        M.Rl = function() {
            return this.j[Nb](gg)
        };
        var Pu = {key: "ok", caption: "OK"}, Qu = {key: "cancel", caption: "Cancel"}, Su = {key: "yes", caption: "Yes"}, Tu = {key: "no", caption: "No"}, Uu = {key: "save", caption: "Save"}, Vu = {key: "continue", caption: "Continue"};
        "undefined" != typeof fa && ((new Ou).ka(Pu, !0, !0), (new Ou).ka(Pu, !0).ka(Qu, !1, !0), (new Ou).ka(Su, !0).ka(Tu, !1, !0), (new Ou).ka(Su).ka(Tu, !0).ka(Qu, !1, !0), (new Ou).ka(Vu).ka(Uu).ka(Qu, !0, !0));
        function Wu(a, b) {
            rr[G](this);
            a && this.mg(a, b)
        }
        S(Wu, rr);
        M = Wu[E];
        M.j = null;
        M.Xd = null;
        M.uf = null;
        M.Yd = null;
        M.ja = -1;
        M.qb = -1;
        M.Ff = !1;
        var Xu = {3: 13, 12: 144, 63232: 38, 63233: 40, 63234: 37, 63235: 39, 63236: 112, 63237: 113, 63238: 114, 63239: 115, 63240: 116, 63241: 117, 63242: 118, 63243: 119, 63244: 120, 63245: 121, 63246: 122, 63247: 123, 63248: 44, 63272: 46, 63273: 36, 63275: 35, 63276: 33, 63277: 34, 63289: 144, 63302: 45}, Yu = {Up: 38, Down: 40, Left: 37, Right: 39, Enter: 13, F1: 112, F2: 113, F3: 114, F4: 115, F5: 116, F6: 117, F7: 118, F8: 119, F9: 120, F10: 121, F11: 122, F12: 123, "U+007F": 46, Home: 36, End: 35, PageUp: 33, PageDown: 34, Insert: 45}, Zu = T || gp && tp(Jf), $u = Zo && fp;
        M = Wu[E];
        M.tk = function(a) {
            gp && (17 == this.ja && !a[zd] || 18 == this.ja && !a[Qb] || Zo && 91 == this.ja && !a[Tc]) && (this.qb = this.ja = -1);
            -1 == this.ja && (a[zd] && 17 != a[xb] ? this.ja = 17 : a[Qb] && 18 != a[xb] ? this.ja = 18 : a[Tc] && 91 != a[xb] && (this.ja = 91));
            if (Zu && !Fu(a[xb], this.ja, a[Ud], a[zd], a[Qb]))
                this[Eb](a);
            else
                this.qb = fp ? Hu(a[xb]) : a[xb], $u && (this.Ff = a[Qb])
        };
        M.Fl = function() {
            this.qb = this.ja = -1
        };
        M.uk = function(a) {
            this.Fl();
            this.Ff = a[Qb]
        };
        M.handleEvent = function(a) {
            var b = a.za, c, d, f = b[Qb];
            T && a[z] == Tk ? (c = this.qb, d = 13 != c && 27 != c ? b[xb] : 0) : gp && a[z] == Tk ? (c = this.qb, d = 0 <= b[sb] && 63232 > b[sb] && Gu(c) ? b[sb] : 0) : ep ? (c = this.qb, d = Gu(c) ? b[xb] : 0) : (c = b[xb] || this.qb, d = b[sb] || 0, $u && (f = this.Ff), Zo && 63 == d && 224 == c && (c = 191));
            var h = c, k = b.keyIdentifier;
            c ? 63232 <= c && c in Xu ? h = Xu[c] : 25 == c && a[Ud] && (h = 9) : k && k in Yu && (h = Yu[k]);
            a = h == this.ja;
            this.ja = h;
            b = new av(h, d, a, b);
            wa(b, f);
            this[r](b)
        };
        M.a = function() {
            return this.j
        };
        M.mg = function(a, b) {
            this.Yd && this.detach();
            this.j = a;
            this.Xd = er(this.j, Tk, this, b);
            this.uf = er(this.j, Sk, this.tk, b, this);
            this.Yd = er(this.j, Uk, this.uk, b, this)
        };
        M.detach = function() {
            this.Xd && (mr(this.Xd), mr(this.uf), mr(this.Yd), this.Yd = this.uf = this.Xd = null);
            this.j = null;
            this.qb = this.ja = -1
        };
        M.k = function() {
            Wu.b.k[G](this);
            this.detach()
        };
        function av(a, b, c, d) {
            d && this.oe(d, void 0);
            La(this, Rk);
            ua(this, a);
            this.charCode = b;
            this.repeat = c
        }
        S(av, Uq);
        function bv() {
        }
        var cv;
        Ln(bv);
        M = bv[E];
        M.sb = function() {
        };
        M.d = function(a) {
            var b = a.n().d(Xi, this.jc(a)[Zd](de), a.la);
            this.Ue(a, b);
            return b
        };
        M.R = function(a) {
            return a
        };
        M.Ud = function(a, b, c) {
            if (a = a.a ? a.a() : a)
                if (T && !tp(Mf)) {
                    var d = this.Rg(dq(a), b);
                    d[v](b);
                    Zn(c ? eq : fq, a)[yc](null, d)
                } else
                    c ? eq(a, b) : fq(a, b)
        };
        M.Eh = function(a, b, c) {
            this.Ud(a, b, c)
        };
        M.Zb = function(a) {
            a.He() && this.hc(a.a(), !0);
            a[nc]() && this.Fb(a, a.m)
        };
        M.Yi = function(a, b) {
            var c = b || this.sb();
            c && Cu(a, c)
        };
        M.Ue = function(a, b) {
            a.m || Du(b, uk, !a.m);
            a[nc]() || this.wa(b, 1, !a[nc]());
            a.V(8) && this.wa(b, 8, a.kk());
            a.V(16) && this.wa(b, 16, a.Fe());
            a.V(64) && this.wa(b, 64, a.Gc())
        };
        M.xd = function(a, b) {
            jt(a, !b, !T && !ep)
        };
        M.hc = function(a, b) {
            this.Ud(a, this.vc() + cf, b)
        };
        M.bb = function(a) {
            var b;
            return a.V(32) && (b = a.Q()) ? Iq(b) && Jq(b) : !1
        };
        M.Fb = function(a, b) {
            var c;
            if (a.V(32) && (c = a.Q())) {
                if (!b && a.Gh()) {
                    try {
                        c.blur()
                    } catch (d) {
                    }
                    a.Gh() && a.Eb(null)
                }
                (Iq(c) && Jq(c)) != b && Hq(c, b)
            }
        };
        M.K = function(a, b) {
            ht(a, b);
            a && Du(a, uk, !b)
        };
        Ra(M, function(a, b, c) {
            var d = a.a();
            if (d) {
                var f = this.Ed(b);
                f && this.Ud(a, f, c);
                this.wa(d, b, c)
            }
        });
        M.wa = function(a, b, c) {
            cv || (cv = {1: Ui, 8: mm, 16: vi, 64: hj});
            (b = cv[b]) && Du(a, b, c)
        };
        Ma(M, function(a, b) {
            var c = this.R(a);
            if (c && (wq(c), b))
                if (P(b))
                    Dq(c, b);
                else {
                    var d = function(a) {
                        if (a) {
                            var b = jq(c);
                            c[Xa](P(a) ? b[gb](a) : a)
                        }
                    };
                    O(b) ? Bo(b, d) : !On(b) || tl in b ? d(b) : Bo(Ko(b), d)
                }
        });
        M.Q = function(a) {
            return a.a()
        };
        M.F = function() {
            return Sj
        };
        M.vc = function() {
            return this.F()
        };
        M.jc = function(a) {
            var b = this.F(), c = [b], d = this.vc();
            d != b && c[v](d);
            b = this.Fk(a[sc]());
            c[v][yc](c, b);
            (a = a.Ja) && c[v][yc](c, a);
            T && !tp(Mf) && c[v][yc](c, this.Rg(c));
            return c
        };
        M.Rg = function(a, b) {
            var c = [];
            b && (a = a[eb]([b]));
            Bo([], function(d) {
                !Fo(d, Zn(Ho, a)) || b && !Ho(d, b) || c[v](d[Zd](Eh))
            });
            return c
        };
        M.Fk = function(a) {
            for (var b = []; a; ) {
                var c = a & -a;
                b[v](this.Ed(c));
                a &= ~c
            }
            return b
        };
        M.Ed = function(a) {
            this.ai || this.Gl();
            return this.ai[a]
        };
        M.Gl = function() {
            var a = this.vc();
            this.ai = {1: a + Re, 2: a + We, 4: a + Je, 8: a + df, 16: a + Oe, 32: a + Te, 64: a + af}
        };
        function dv(a, b) {
            if (!a)
                throw m("Invalid class name " + a);
            if (!R(b))
                throw m("Invalid decorator function " + b);
        }
        var ev = {};
        function fv(a, b, c) {
            yu[G](this, c);
            if (!b) {
                b = this[bc];
                for (var d; b; ) {
                    d = Tn(b);
                    if (d = ev[d])
                        break;
                    b = b.b ? b.b[bc] : null
                }
                b = d ? R(d.ya) ? d.ya() : new d : null
            }
            this.o = b;
            this.qg(Nn(a) ? a : null)
        }
        S(fv, yu);
        M = fv[E];
        M.la = null;
        M.Sa = 0;
        M.Fc = 39;
        M.me = 255;
        M.fe = 0;
        M.m = !0;
        M.Ja = null;
        M.ze = !0;
        M.Ae = !1;
        M.Yb = null;
        M.De = function(a) {
            this.r && a != this.ze && this.jg(a);
            this.ze = a
        };
        M.Q = function() {
            return this.o.Q(this)
        };
        M.pd = function() {
            return this.oa || (this.oa = new Wu)
        };
        M.Kl = function(a) {
            a && (this.Ja ? Ho(this.Ja, a) || this.Ja[v](a) : this.Ja = [a], this.o.Eh(this, a, !0))
        };
        M.Nl = function(a) {
            a && this.Ja && Io(this.Ja, a) && (0 == this.Ja[B] && (this.Ja = null), this.o.Eh(this, a, !1))
        };
        M.Ud = function(a, b) {
            b ? this.Kl(a) : this.Nl(a)
        };
        M.d = function() {
            var a = this.o.d(this);
            this.xg(a);
            this.o.Yi(a, this.Yb);
            this.Ae || this.o.xd(a, !1);
            this.m || this.o.K(a, !1)
        };
        M.ui = function(a) {
            this.Yb = a
        };
        M.R = function() {
            return this.o.R(this.a())
        };
        M.N = function() {
            fv.b.N[G](this);
            this.o.Zb(this);
            if (this.Fc & -2 && (this.ze && this.jg(!0), this.V(32))) {
                var a = this.Q();
                if (a) {
                    var b = this.pd();
                    b.mg(a);
                    this.U().i(b, Rk, this.Da).i(a, lj, this.qd).i(a, ai, this.Eb)
                }
            }
        };
        M.jg = function(a) {
            var b = this.U(), c = this.a();
            a ? (b.i(c, nl, this.Le).i(c, kl, this.yb).i(c, ol, this.Db).i(c, ml, this.Ke), this.Mc != Kn && b.i(c, Ei, this.Mc), T && b.i(c, Ni, this.rg)) : (b.Z(c, nl, this.Le).Z(c, kl, this.yb).Z(c, ol, this.Db).Z(c, ml, this.Ke), this.Mc != Kn && b.Z(c, Ei, this.Mc), T && b.Z(c, Ni, this.rg))
        };
        M.ca = function() {
            fv.b.ca[G](this);
            this.oa && this.oa.detach();
            this.m && this[nc]() && this.o.Fb(this, !1)
        };
        M.k = function() {
            fv.b.k[G](this);
            this.oa && (this.oa.fa(), delete this.oa);
            delete this.o;
            this.Ja = this.la = null
        };
        Ma(M, function(a) {
            this.o[id](this.a(), a);
            this.qg(a)
        });
        M.qg = function(a) {
            this.la = a
        };
        M.Jc = function() {
            var a = this.la;
            if (!a)
                return I;
            if (!P(a))
                if (O(a))
                    a = Do(a, Kq)[Zd](I);
                else {
                    if (cq && Lk in a)
                        a = a.innerText[q](/(\r\n|\r|\n)/g, be);
                    else {
                        var b = [];
                        Lq(a, b, !0);
                        a = b[Zd](I)
                    }
                    a = a[q](/ \xAD /g, de)[q](/\xAD/g, I);
                    a = a[q](/\u200B/g, I);
                    cq || (a = a[q](/ +/g, de));
                    a != de && (a = a[q](/^\s*/, I))
                }
            return qo(a)
        };
        M.hc = function(a) {
            fv.b.hc[G](this, a);
            var b = this.a();
            b && this.o.hc(b, a)
        };
        M.xd = function(a) {
            this.Ae = a;
            var b = this.a();
            b && this.o.xd(b, a)
        };
        M.K = function(a, b) {
            if (b || this.m != a && this[r](a ? ym : vk)) {
                var c = this.a();
                c && this.o.K(c, a);
                this[nc]() && this.o.Fb(this, a);
                this.m = a;
                return!0
            }
            return!1
        };
        M.isEnabled = function() {
            return!this.ta(1)
        };
        M.Ea = function(a) {
            this.Ac(2, a) && this[od](2, a)
        };
        M.Ia = function() {
            return this.ta(4)
        };
        M.setActive = function(a) {
            this.Ac(4, a) && this[od](4, a)
        };
        M.kk = function() {
            return this.ta(8)
        };
        M.yf = function(a) {
            this.Ac(8, a) && this[od](8, a)
        };
        M.Fe = function() {
            return this.ta(16)
        };
        M.yk = function(a) {
            this.Ac(16, a) && this[od](16, a)
        };
        M.Gh = function() {
            return this.ta(32)
        };
        M.Wh = function(a) {
            this.Ac(32, a) && this[od](32, a)
        };
        M.Gc = function() {
            return this.ta(64)
        };
        M.M = function(a) {
            this.Ac(64, a) && this[od](64, a)
        };
        M.getState = function() {
            return this.Sa
        };
        M.ta = function(a) {
            return!!(this.Sa & a)
        };
        Ra(M, function(a, b) {
            this.V(a) && b != this.ta(a) && (this.o[od](this, a, b), this.Sa = b ? this.Sa | a : this.Sa & ~a)
        });
        M.Ph = function(a) {
            this.Sa = a
        };
        M.V = function(a) {
            return!!(this.Fc & a)
        };
        M.xa = function(a, b) {
            if (this.r && this.ta(a) && !b)
                throw m(ng);
            !b && this.ta(a) && this[od](a, !1);
            this.Fc = b ? this.Fc | a : this.Fc & ~a
        };
        M.ia = function(a) {
            return!!(this.me & a) && this.V(a)
        };
        M.il = function(a, b) {
            this.me = b ? this.me | a : this.me & ~a
        };
        M.yg = function(a, b) {
            this.fe = b ? this.fe | a : this.fe & ~a
        };
        M.Ac = function(a, b) {
            return this.V(a) && this.ta(a) != b && (!(this.fe & a) || this[r](Au(a, b))) && !this.$b
        };
        M.Le = function(a) {
            (!a[$a] || !zq(this.a(), a[$a])) && this[r](fj) && this[nc]() && this.ia(2) && this.Ea(!0)
        };
        M.Ke = function(a) {
            a[$a] && zq(this.a(), a[$a]) || !this[r](Wk) || (this.ia(4) && this[ld](!1), this.ia(2) && this.Ea(!1))
        };
        M.Mc = Kn;
        M.yb = function(a) {
            this[nc]() && (this.ia(2) && this.Ea(!0), a.Ne() && (this.ia(4) && this[ld](!0), this.o.bb(this) && this.Q()[ub]()));
            !this.Ae && a.Ne() && a[ib]()
        };
        M.Db = function(a) {
            this[nc]() && (this.ia(2) && this.Ea(!0), this.Ia() && this.Gb(a) && this.ia(4) && this[ld](!1))
        };
        M.rg = function(a) {
            this[nc]() && this.Gb(a)
        };
        M.Gb = function(a) {
            this.ia(16) && this.yk(!this.Fe());
            this.ia(8) && this.yf(!0);
            this.ia(64) && this.M(!this.Gc());
            var b = new Oq(Jh, this);
            a && (wa(b, a[Qb]), b.ctrlKey = a[zd], b.metaKey = a[Tc], b.shiftKey = a[Ud], b.vf = a.vf);
            return this[r](b)
        };
        M.qd = function() {
            this.ia(32) && this.Wh(!0)
        };
        M.Eb = function() {
            this.ia(4) && this[ld](!1);
            this.ia(32) && this.Wh(!1)
        };
        M.Da = function(a) {
            return this.m && this[nc]() && this.Ha(a) ? (a[ib](), a[cc](), !0) : !1
        };
        M.Ha = function(a) {
            return 13 == a[xb] && this.Gb(a)
        };
        if (!R(fv))
            throw m("Invalid component class " + fv);
        if (!R(bv))
            throw m("Invalid renderer class " + bv);
        var gv = Tn(fv);
        ev[gv] = bv;
        dv(Sj, function() {
            return new fv(null)
        });
        function hv() {
            this.ci = []
        }
        S(hv, bv);
        Ln(hv);
        M = hv[E];
        M.Bd = function(a) {
            var b = this.ci[a];
            if (!b) {
                switch (a) {
                    case 0:
                        b = this.vc() + Ue;
                        break;
                    case 1:
                        b = this.vc() + Ne;
                        break;
                    case 2:
                        b = this.vc() + Pe
                }
                this.ci[a] = b
            }
            return b
        };
        M.sb = function() {
            return fl
        };
        M.d = function(a) {
            var b = a.n().d(Xi, this.jc(a)[Zd](de), this.bj(a.la, a.n()));
            this.cj(a, b, a.V(8) || a.V(16));
            this.Ue(a, b);
            return b
        };
        M.R = function(a) {
            return a && a[zb]
        };
        Ma(M, function(a, b) {
            var c = this.R(a), d = this.Me(a) ? c[zb] : null;
            hv.b[id][G](this, a, b);
            d && !this.Me(a) && c[jb](d, c[zb] || null)
        });
        M.bj = function(a, b) {
            var c = this.Bd(2);
            return b.d(Xi, c, a)
        };
        M.Me = function(a) {
            if (a = this.R(a)) {
                a = a[zb];
                var b = this.Bd(1);
                return!!a && Ho(dq(a), b)
            }
            return!1
        };
        M.cj = function(a, b, c) {
            if (c != this.Me(b))
                if (c ? eq(b, dk) : fq(b, dk), b = this.R(b), c)
                    c = this.Bd(1), b[jb](a.n().d(Xi, c), b[zb] || null);
                else
                    b[Fd](b[zb])
        };
        M.Ed = function(a) {
            switch (a) {
                case 2:
                    return this.Bd(0);
                case 16:
                case 8:
                    return ek;
                default:
                    return hv.b.Ed[G](this, a)
                }
        };
        M.F = function() {
            return Yj
        };
        function iv(a, b, c, d) {
            fv[G](this, a, d || hv.ya(), c);
            this[vd](b)
        }
        S(iv, fv);
        M = iv[E];
        Na(M, function() {
            var a = this.Ce;
            return null != a ? a : this.Jc()
        });
        Ta(M, function(a) {
            this.$l(a)
        });
        M.Jc = function() {
            var a = this.la;
            return O(a) ? (a = Do(a, function(a) {
                var c = dq(a);
                return Ho(c, Zj) || Ho(c, ak) ? I : Kq(a)
            })[Zd](I), qo(a)) : iv.b.Jc[G](this)
        };
        M.Db = function(a) {
            var b = this[Za]();
            if (b) {
                var c = b.wg;
                b.wg = null;
                if (b = c && Sn(a[md]))
                    b = new So(a[md], a[nd]), b = c == b ? !0 : c && b ? c.x == b.x && c.y == b.y : !1;
                if (b)
                    return
            }
            iv.b.Db[G](this, a)
        };
        M.Ha = function(a) {
            return a[xb] == this.Ng && this.Gb(a) ? !0 : iv.b.Ha[G](this, a)
        };
        M.ij = function() {
            return this.Ng
        };
        dv(Yj, function() {
            return new iv(null)
        });
        function jv(a, b, c, d, f, h, k, n, u) {
            var C, D;
            if (C = c[ac]) {
                var Q = C[zc] == Cg || C[zc] == eg;
                Q && Vs(C) == Im || (D = at(C), Q || (Q = (Q = bt(C)) && fp ? -C[tc] : !Q || T && tp(Nf) || Us(C, Jl) == un ? C[tc] : C[pc] - C[wd] - C[tc], D = To(D, new So(Q, C[pd]))))
            }
            C = D || new So;
            D = ft(a);
            (Q = $s(a)) && D.Ik(new Ss(Q[y], Q.top, Q[Hc] - Q[y], Q[vc] - Q.top));
            var Q = hq(a), Ea = hq(c);
            if (Q.L() != Ea.L()) {
                var Ha = Q.L()[Ed], Ea = Ea.Hc(), ob = new So(0, 0), ka = oq(jq(Ha)), Ib = Ha;
                do {
                    var za;
                    if (ka == Ea)
                        za = at(Ib);
                    else {
                        za = Ib;
                        var ba = void 0;
                        if (za[Ya])
                            ba = Ys(za), ba = new So(ba[y], ba.top);
                        else
                            var ba = hq(za).gc(),
                                U = at(za), ba = new So(U.x - ba.x, U.y - ba.y);
                        U = void 0;
                        if (fp && !tp(12)) {
                            U = void 0;
                            U = void 0;
                            T ? U = Ze : gp ? U = kf : ep ? U = $e : fp && (U = Ye);
                            var $b = void 0;
                            U && ($b = Us(za, U));
                            $b || ($b = Us(za, fn));
                            U = $b ? (za = $b[nb](pt)) ? new So(la(za[1]), la(za[2])) : new So(0, 0) : new So(0, 0);
                            U = new So(ba.x + U.x, ba.y + U.y)
                        } else
                            U = ba;
                        za = U
                    }
                    ob.x += za.x;
                    ob.y += za.y
                } while (ka && ka != Ea && (Ib = ka.frameElement) && (ka = ka.parent));
                Ha = To(ob, at(Ha));
                T && !Q.Hf() && (Ha = To(Ha, Q.gc()));
                Ka(D, D[y] + Ha.x);
                D.top += Ha.y
            }
            a = (b & 4 && bt(a) ? b ^ 2 : b) & -5;
            b = new So(a & 2 ? D[y] + D[p] : D[y], a & 1 ? D.top + D[t] :
                    D.top);
            b = To(b, C);
            f && (b.x += (a & 2 ? -1 : 1) * f.x, b.y += (a & 1 ? -1 : 1) * f.y);
            var K;
            if (k)
                if (u)
                    K = u;
                else if (K = $s(c))
                    K.top -= C.y, Fa(K, K[Hc] - C.x), Aa(K, K[vc] - C.y), Ka(K, K[y] - C.x);
            t:{
                u = b[kc]();
                f = 0;
                a = (d & 4 && bt(c) ? d ^ 2 : d) & -5;
                d = dt(et, c);
                n = n ? n[kc]() : d[kc]();
                if (h || 0 != a)
                    a & 2 ? u.x -= n[p] + (h ? h[Hc] : 0) : h && (u.x += h[y]), a & 1 ? u.y -= n[t] + (h ? h[vc] : 0) : h && (u.y += h.top);
                if (k && (K ? (h = u, f = 0, 65 == (k & 65) && (h.x < K[y] || h.x >= K[Hc]) && (k &= -2), 132 == (k & 132) && (h.y < K.top || h.y >= K[vc]) && (k &= -5), h.x < K[y] && k & 1 && (h.x = K[y], f |= 1), h.x < K[y] && h.x + n[p] > K[Hc] && k & 16 && (qa(n, l.max(n[p] -
                        (h.x + n[p] - K[Hc]), 0)), f |= 4), h.x + n[p] > K[Hc] && k & 1 && (h.x = l.max(K[Hc] - n[p], K[y]), f |= 1), k & 2 && (f = f | (h.x < K[y] ? 16 : 0) | (h.x + n[p] > K[Hc] ? 32 : 0)), h.y < K.top && k & 4 && (h.y = K.top, f |= 2), h.y <= K.top && h.y + n[t] < K[vc] && k & 32 && (Da(n, l.max(n[t] - (K.top - h.y), 0)), h.y = K.top, f |= 8), h.y >= K.top && h.y + n[t] > K[vc] && k & 32 && (Da(n, l.max(n[t] - (h.y + n[t] - K[vc]), 0)), f |= 8), h.y + n[t] > K[vc] && k & 4 && (h.y = l.max(K[vc] - n[t], K.top), f |= 2), k & 8 && (f = f | (h.y < K.top ? 64 : 0) | (h.y + n[t] > K[vc] ? 128 : 0)), k = f) : k = 256, f = k, f & 496)) {
                    c = f;
                    break t
                }
                Ws(c, u);
                d == n || d && n && d[p] == n[p] && d[t] ==
                        n[t] || (h = hq(jq(c)).Hf(), !T || h && tp(Nf) ? (c = c[s], fp ? c.MozBoxSizing = di : gp ? c.WebkitBoxSizing = di : c.boxSizing = di, qa(c, l.max(n[p], 0) + Xl), Da(c, l.max(n[t], 0) + Xl)) : (k = c[s], h ? (T ? (h = lt(c, Nl), d = lt(c, Ol), u = lt(c, Pl), K = lt(c, Ml), h = new Ns(u, d, K, h)) : (h = Ts(c, Nl), d = Ts(c, Ol), u = Ts(c, Pl), K = Ts(c, Ml), h = new Ns(la(u), la(d), la(K), la(h))), c = ot(c), k.pixelWidth = n[p] - c[y] - h[y] - h[Hc] - c[Hc], k.pixelHeight = n[t] - c.top - h.top - h[vc] - c[vc]) : (k.pixelWidth = n[p], k.pixelHeight = n[t])));
                c = f
            }
            return c
        }
        ;
        function kv() {
        }
        kv[E].Bc = function() {
        };
        function lv(a, b, c) {
            this.element = a;
            this.yd = b;
            this.zl = c
        }
        S(lv, kv);
        lv[E].Bc = function(a, b, c) {
            jv(this[Wd], this.yd, a, b, void 0, c, this.zl)
        };
        function mv(a, b, c, d) {
            lv[G](this, a, b);
            this.ie = c ? 5 : 0;
            this.Pf = d || void 0
        }
        S(mv, lv);
        mv[E].rl = function() {
            return this.ie
        };
        mv[E].Zl = function(a) {
            this.ie = a
        };
        mv[E].Bc = function(a, b, c, d) {
            var f = jv(this[Wd], this.yd, a, b, null, c, 10, d, this.Pf);
            if (f & 496) {
                var h = this.ne(f, this.yd);
                b = this.ne(f, b);
                f = jv(this[Wd], h, a, b, null, c, 10, d, this.Pf);
                f & 496 && (h = this.ne(f, h), b = this.ne(f, b), jv(this[Wd], h, a, b, null, c, this.ie, d, this.Pf))
            }
        };
        mv[E].ne = function(a, b) {
            a & 48 && (b ^= 2);
            a & 192 && (b ^= 1);
            return b
        };
        function nv(a, b, c, d) {
            mv[G](this, a, b, c || d);
            (c || d) && this.Zl(65 | (d ? 32 : 132))
        }
        S(nv, mv);
        var ov, pv;
        pv = ov = !1;
        var qv = ap();
        qv && (-1 != qv[x]("Firefox") || -1 != qv[x]("Camino") || (-1 != qv[x]("iPhone") || -1 != qv[x]("iPod") ? ov = !0 : -1 != qv[x]("iPad") ? pv = !0 : -1 != qv[x]("Chrome") || -1 != qv[x]("Android") || qv[x]("Safari")));
        var rv = ov, sv = pv;
        function tv() {
        }
        S(tv, bv);
        Ln(tv);
        M = tv[E];
        M.sb = function() {
            return oi
        };
        M.wa = function(a, b, c) {
            switch (b) {
                case 8:
                case 16:
                    Du(a, Vl, c);
                    break;
                default:
                case 64:
                case 1:
                    tv.b.wa[G](this, a, b, c)
                }
        };
        M.d = function(a) {
            var b = tv.b.d[G](this, a);
            this.nd(b, a.vd());
            var c = a[A]();
            c && this[vd](b, c);
            a.V(16) && this.wa(b, 16, a.Fe());
            return b
        };
        Na(M, Kn);
        Ta(M, Kn);
        M.vd = function(a) {
            return a.title
        };
        M.nd = function(a, b) {
            a && b && (a.title = b)
        };
        M.F = function() {
            return Qj
        };
        function uv() {
        }
        S(uv, tv);
        Ln(uv);
        M = uv[E];
        M.sb = function() {
        };
        M.d = function(a) {
            this.uj(a);
            return a.n().d(oi, {"class": this.jc(a)[Zd](de), disabled: !a[nc](), title: a.vd() || I, value: a[A]() || I}, a.Jc() || I)
        };
        M.Zb = function(a) {
            a.U().i(a.a(), xi, a.Gb)
        };
        M.xd = Kn;
        M.hc = Kn;
        M.bb = function(a) {
            return a[nc]()
        };
        M.Fb = Kn;
        Ra(M, function(a, b, c) {
            uv.b[od][G](this, a, b, c);
            (a = a.a()) && 1 == b && (a.disabled = c)
        });
        Na(M, function(a) {
            return a[Sc]
        });
        Ta(M, function(a, b) {
            a && (a.value = b)
        });
        M.wa = Kn;
        M.uj = function(a) {
            a.De(!1);
            a.il(255, !1);
            a.xa(32, !1)
        };
        function vv(a, b, c) {
            fv[G](this, a, b || uv.ya(), c)
        }
        S(vv, fv);
        M = vv[E];
        Na(M, function() {
            return this.og
        });
        Ta(M, function(a) {
            this.og = a;
            this.o[vd](this.a(), a)
        });
        M.vd = function() {
            return this.ng
        };
        M.nd = function(a) {
            this.ng = a;
            this.o.nd(this.a(), a)
        };
        M.k = function() {
            vv.b.k[G](this);
            delete this.og;
            delete this.ng
        };
        M.N = function() {
            vv.b.N[G](this);
            if (this.V(32)) {
                var a = this.Q();
                a && this.U().i(a, Uk, this.Ha)
            }
        };
        M.Ha = function(a) {
            return 13 == a[xb] && a[z] == Rk || 32 == a[xb] && a[z] == Uk ? this.Gb(a) : 32 == a[xb]
        };
        dv(Qj, function() {
            return new vv(null)
        });
        function wv() {
        }
        Ln(wv);
        M = wv[E];
        M.sb = function() {
        };
        M.pg = function(a, b) {
            a && (a.tabIndex = b ? 0 : -1)
        };
        M.d = function(a) {
            return a.n().d(Xi, this.jc(a)[Zd](de))
        };
        M.R = function(a) {
            return a
        };
        M.Zb = function(a) {
            a = a.a();
            jt(a, !0, fp);
            T && (a.hideFocus = !0);
            var b = this.sb();
            b && Cu(a, b)
        };
        M.Q = function(a) {
            return a.a()
        };
        M.F = function() {
            return Rj
        };
        M.jc = function(a) {
            var b = this.F(), c = [b, a.lc == xk ? b + Ve : b + jf];
            a[nc]() || c[v](b + Re);
            return c
        };
        function xv(a, b, c) {
            yu[G](this, c);
            this.o = b || wv.ya();
            this.lc = a || tn
        }
        S(xv, yu);
        M = xv[E];
        M.Ee = null;
        M.oa = null;
        M.o = null;
        M.lc = null;
        M.m = !0;
        M.Cb = !0;
        M.cf = !0;
        M.ma = -1;
        M.O = null;
        M.Be = !1;
        M.Xi = !1;
        M.Vi = !0;
        M.Pa = null;
        M.Q = function() {
            return this.Ee || this.o.Q(this)
        };
        M.pd = function() {
            return this.oa || (this.oa = new Wu(this.Q()))
        };
        M.d = function() {
            this.xg(this.o.d(this))
        };
        M.R = function() {
            return this.o.R(this.a())
        };
        M.N = function() {
            xv.b.N[G](this);
            this.xb(function(a) {
                a.r && this.bg(a)
            }, this);
            var a = this.a();
            this.o.Zb(this);
            this.K(this.m, !0);
            this.U().i(this, fj, this.se).i(this, wk, this.te).i(this, ln, this.ue).i(this, Cl, this.yi).i(this, yi, this.wi).i(a, kl, this.yb).i(jq(a), ol, this.xi).i(a, [kl, ol, nl, ml, Ei], this.vi);
            this.bb() && this.cg(!0)
        };
        M.cg = function(a) {
            var b = this.U(), c = this.Q();
            a ? b.i(c, lj, this.qd).i(c, ai, this.Eb).i(this.pd(), Rk, this.Da) : b.Z(c, lj, this.qd).Z(c, ai, this.Eb).Z(this.pd(), Rk, this.Da)
        };
        M.ca = function() {
            this.gb(-1);
            this.O && this.O.M(!1);
            this.Be = !1;
            xv.b.ca[G](this)
        };
        M.k = function() {
            xv.b.k[G](this);
            this.oa && (this.oa.fa(), this.oa = null);
            this.o = this.O = this.Pa = this.Ee = null
        };
        M.se = function() {
            return!0
        };
        M.te = function(a) {
            var b = this.od(a[Hd]);
            if (-1 < b && b != this.ma) {
                var c = this.ec();
                c && c.Ea(!1);
                this.ma = b;
                c = this.ec();
                this.Be && c[ld](!0);
                this.Vi && this.O && c != this.O && (c.V(64) ? c.M(!0) : this.O.M(!1))
            }
            b = this.a();
            null != a[Hd].a() && Du(b, Lh, a[Hd].a().id)
        };
        M.ue = function(a) {
            a[Hd] == this.ec() && (this.ma = -1);
            this.a()[Cc](Th)
        };
        M.yi = function(a) {
            (a = a[Hd]) && a != this.O && a[Za]() == this && (this.O && this.O.M(!1), this.O = a)
        };
        M.wi = function(a) {
            a[Hd] == this.O && (this.O = null)
        };
        M.yb = function(a) {
            this.Cb && this.ac(!0);
            var b = this.Q();
            b && Iq(b) && Jq(b) ? b[ub]() : a[ib]()
        };
        M.xi = function() {
            this.ac(!1)
        };
        M.vi = function(a) {
            var b = this.Mk(a[Hd]);
            if (b)
                switch (a[z]) {
                    case kl:
                        b.yb(a);
                        break;
                    case ol:
                        b.Db(a);
                        break;
                    case nl:
                        b.Le(a);
                        break;
                    case ml:
                        b.Ke(a);
                        break;
                    case Ei:
                        b.Mc(a)
                    }
        };
        M.Mk = function(a) {
            if (this.Pa)
                for (var b = this.a(); a && a !== b; ) {
                    var c = a.id;
                    if (c in this.Pa)
                        return this.Pa[c];
                    a = a[H]
                }
            return null
        };
        M.qd = function() {
        };
        M.Eb = function() {
            this.gb(-1);
            this.ac(!1);
            this.O && this.O.M(!1)
        };
        M.Da = function(a) {
            return this[nc]() && this.m && (0 != this.eb() || this.Ee) && this.Ha(a) ? (a[ib](), a[cc](), !0) : !1
        };
        M.Ha = function(a) {
            var b = this.ec();
            if (b && typeof b.Da == qj && b.Da(a) || this.O && this.O != b && typeof this.O.Da == qj && this.O.Da(a))
                return!0;
            if (a[Ud] || a[zd] || a[Tc] || a[Qb])
                return!1;
            switch (a[xb]) {
                case 27:
                    if (this.bb())
                        this.Q().blur();
                    else
                        return!1;
                    break;
                case 36:
                    this.Nj();
                    break;
                case 35:
                    this.Oj();
                    break;
                case 38:
                    if (this.lc == tn)
                        this.rf();
                    else
                        return!1;
                    break;
                case 37:
                    if (this.lc == xk)
                        this.He() ? this.qf() : this.rf();
                    else
                        return!1;
                    break;
                case 40:
                    if (this.lc == tn)
                        this.qf();
                    else
                        return!1;
                    break;
                case 39:
                    if (this.lc == xk)
                        this.He() ? this.rf() :
                                this.qf();
                    else
                        return!1;
                    break;
                default:
                    return!1
            }
            return!0
        };
        M.bg = function(a) {
            var b = a.a(), b = b.id || (b.id = a.Xb());
            this.Pa || (this.Pa = {});
            this.Pa[b] = a
        };
        M.Wd = function(a, b) {
            xv.b.Wd[G](this, a, b)
        };
        M.Pc = function(a, b, c) {
            a.yg(2, !0);
            a.yg(64, !0);
            !this.bb() && this.Xi || a.xa(32, !1);
            a.De(!1);
            xv.b.Pc[G](this, a, b, c);
            a.r && this.r && this.bg(a);
            b <= this.ma && this.ma++
        };
        M.removeChild = function(a, b) {
            if (a = P(a) ? this.ye(a) : a) {
                var c = this.od(a);
                -1 != c && (c == this.ma ? a.Ea(!1) : c < this.ma && this.ma--);
                (c = a.a()) && c.id && this.Pa && Wp(this.Pa, c.id)
            }
            a = xv.b[Fd][G](this, a, b);
            a.De(!0);
            return a
        };
        M.K = function(a, b) {
            if (b || this.m != a && this[r](a ? ym : vk)) {
                this.m = a;
                var c = this.a();
                c && (ht(c, a), this.bb() && this.o.pg(this.Q(), this.Cb && this.m), b || this[r](this.m ? Ph : Oh));
                return!0
            }
            return!1
        };
        M.isEnabled = function() {
            return this.Cb
        };
        M.bb = function() {
            return this.cf
        };
        M.Fb = function(a) {
            a != this.cf && this.r && this.cg(a);
            this.cf = a;
            this.Cb && this.m && this.o.pg(this.Q(), a)
        };
        M.gb = function(a) {
            (a = this.Na(a)) ? a.Ea(!0) : -1 < this.ma && this.ec().Ea(!1)
        };
        M.Ea = function(a) {
            this.gb(this.od(a))
        };
        M.ec = function() {
            return this.Na(this.ma)
        };
        M.Nj = function() {
            this.je(function(a, b) {
                return(a + 1) % b
            }, this.eb() - 1)
        };
        M.Oj = function() {
            this.je(function(a, b) {
                a--;
                return 0 > a ? b - 1 : a
            }, 0)
        };
        M.qf = function() {
            this.je(function(a, b) {
                return(a + 1) % b
            }, this.ma)
        };
        M.rf = function() {
            this.je(function(a, b) {
                a--;
                return 0 > a ? b - 1 : a
            }, this.ma)
        };
        M.je = function(a, b) {
            for (var c = 0 > b ? this.od(this.O) : b, d = this.eb(), c = a[G](this, c, d), f = 0; f <= d; ) {
                var h = this.Na(c);
                if (h && this.Ch(h))
                    return this.Bk(c), !0;
                f++;
                c = a[G](this, c, d)
            }
            return!1
        };
        M.Ch = function(a) {
            return a.m && a[nc]() && a.V(2)
        };
        M.Bk = function(a) {
            this.gb(a)
        };
        M.ac = function(a) {
            this.Be = a
        };
        function yv() {
        }
        S(yv, bv);
        Ln(yv);
        yv[E].F = function() {
            return Xj
        };
        function zv(a, b, c) {
            fv[G](this, a, c || yv.ya(), b);
            this.xa(1, !1);
            this.xa(2, !1);
            this.xa(4, !1);
            this.xa(32, !1);
            this.Ph(1)
        }
        S(zv, fv);
        dv(Xj, function() {
            return new zv(null)
        });
        function Av() {
        }
        S(Av, bv);
        Ln(Av);
        Av[E].d = function(a) {
            return a.n().d(Xi, this.F())
        };
        Ma(Av[E], function() {
        });
        Av[E].F = function() {
            return bk
        };
        function Bv(a, b) {
            fv[G](this, null, a || Av.ya(), b);
            this.xa(1, !1);
            this.xa(2, !1);
            this.xa(4, !1);
            this.xa(32, !1);
            this.Ph(1)
        }
        S(Bv, fv);
        Bv[E].N = function() {
            Bv.b.N[G](this);
            Cu(this.a(), nm)
        };
        dv(bk, function() {
            return new Bv
        });
        function Cv() {
        }
        S(Cv, wv);
        Ln(Cv);
        Cv[E].sb = function() {
            return el
        };
        Cv[E].Ib = function(a, b) {
            return zq(a.a(), b)
        };
        Cv[E].F = function() {
            return Vj
        };
        Cv[E].Zb = function(a) {
            Cv.b.Zb[G](this, a);
            Du(a.a(), rk, hn)
        };
        dv(bk, function() {
            return new Bv
        });
        function Dv(a, b) {
            xv[G](this, tn, b || Cv.ya(), a);
            this.Fb(!1)
        }
        S(Dv, xv);
        M = Dv[E];
        M.Re = !0;
        M.Ck = !1;
        M.F = function() {
            return this.o.F()
        };
        M.Ib = function(a) {
            if (this.o.Ib(this, a))
                return!0;
            for (var b = 0, c = this.eb(); b < c; b++) {
                var d = this.Na(b);
                if (typeof d.Ib == qj && d.Ib(a))
                    return!0
            }
            return!1
        };
        M.ib = function(a) {
            this.Wd(a, !0)
        };
        M.nc = function(a, b) {
            this.Pc(a, b, !0)
        };
        M.ed = function(a) {
            return this.Na(a)
        };
        M.Vf = function() {
            return this.eb()
        };
        M.wc = function(a, b) {
            var c = this.m;
            c || ht(this.a(), !0);
            var d = this.a(), f = a, h = b, k = at(d);
            f instanceof So && (h = f.y, f = f.x);
            Ws(d, d[Bd] + (f - k.x), d[Ec] + (h - k.y));
            c || ht(this.a(), !1)
        };
        M.Wi = function(a) {
            (this.Re = a) && this.Fb(!0)
        };
        M.K = function(a, b, c) {
            (b = Dv.b.K[G](this, a, b)) && a && this.r && this.Re && this.Q()[ub]();
            this.wg = a && c && Sn(c[md]) ? new So(c[md], c[nd]) : null;
            return b
        };
        M.se = function(a) {
            this.Re && this.Q()[ub]();
            return Dv.b.se[G](this, a)
        };
        M.Ch = function(a) {
            return(this.Ck || a[nc]()) && a.m && a.V(2)
        };
        M.Ha = function(a) {
            var b = Dv.b.Ha[G](this, a);
            b || this.xb(function(c) {
                !b && c.ij && c.Ng == a[xb] && (this[nc]() && this.Ea(c), b = c.Da(a))
            }, this);
            return b
        };
        M.gb = function(a) {
            Dv.b.gb[G](this, a);
            var b = this.Na(a);
            if (b) {
                a = this.a();
                var b = b.a(), c = at(b), d = at(a), f = ot(a), h = c.x - d.x - f[y], c = c.y - d.y - f.top, d = a[Nd] - b.offsetHeight, f = a[tc], k = a[pd], f = f + l.min(h, l.max(h - (a[wd] - b[db]), 0)), k = k + l.min(c, l.max(c - d, 0)), b = new So(f, k);
                a.scrollLeft = b.x;
                a.scrollTop = b.y
            }
        };
        function Ev() {
        }
        S(Ev, tv);
        Ln(Ev);
        M = Ev[E];
        M.d = function(a) {
            var b = {"class": Uj + this.jc(a)[Zd](de)}, b = a.n().d(Xi, b, this.Je(a.la, a.n()));
            this.nd(b, a.vd());
            this.Ue(a, b);
            return b
        };
        M.sb = function() {
            return oi
        };
        M.R = function(a) {
            return a && a[zb][zb]
        };
        M.Je = function(a, b) {
            return b.d(Xi, Uj + (this.F() + bf), b.d(Xi, Uj + (this.F() + Xe), a))
        };
        M.F = function() {
            return Tj
        };
        function Fv() {
        }
        S(Fv, Ev);
        Ln(Fv);
        fp && Ma(Fv[E], function(a, b) {
            var c = Fv.b.R[G](this, a && a[zb]);
            if (c) {
                var d = this.createCaption(b, hq(a)), f = c[H];
                f && f.replaceChild(d, c)
            }
        });
        M = Fv[E];
        M.R = function(a) {
            a = Fv.b.R[G](this, a && a[zb]);
            fp && a && a.__goog_wrapper_div && (a = a[zb]);
            return a
        };
        M.wa = function(a, b, c) {
            Eu(a, hj);
            Eu(a, hj);
            64 != b && Fv.b.wa[G](this, a, b, c)
        };
        M.Je = function(a, b) {
            return Fv.b.Je[G](this, [this.createCaption(a, b), this.Qj(b)], b)
        };
        M.createCaption = function(a, b) {
            return b.d(Xi, Uj + (this.F() + Me), a)
        };
        M.Qj = function(a) {
            return a.d(Xi, Uj + (this.F() + Se), Fn)
        };
        M.F = function() {
            return Wj
        };
        function Gv(a, b, c, d) {
            vv[G](this, a, c || Fv.ya(), d);
            this.xa(64, !0);
            this.rd = new nv(null, 5);
            b && this.td(b);
            this.Mi = null;
            this.$ = new yr(500);
            !rv && !sv || tp(Lf) || this.zk(!0)
        }
        S(Gv, vv);
        M = Gv[E];
        M.jd = !1;
        M.Bi = !1;
        M.N = function() {
            Gv.b.N[G](this);
            this.h && this.md(this.h, !0);
            Du(this.j, rk, !!this.h)
        };
        M.ca = function() {
            Gv.b.ca[G](this);
            if (this.h) {
                this.M(!1);
                this.h.ca();
                this.md(this.h, !1);
                var a = this.h.a();
                a && yq(a)
            }
        };
        M.k = function() {
            Gv.b.k[G](this);
            this.h && (this.h.fa(), delete this.h);
            delete this.zi;
            this.$.fa()
        };
        M.yb = function(a) {
            Gv.b.yb[G](this, a);
            this.Ia() && (this.M(!this.Gc(), a), this.h && this.h.ac(this.Gc()))
        };
        M.Db = function(a) {
            Gv.b.Db[G](this, a);
            this.h && !this.Ia() && this.h.ac(!1)
        };
        M.Gb = function() {
            this[ld](!1);
            return!0
        };
        M.Si = function(a) {
            this.h && this.h.m && !this.Ib(a[Hd]) && this.M(!1)
        };
        M.Ib = function(a) {
            return a && zq(this.a(), a) || this.h && this.h.Ib(a) || !1
        };
        M.Ha = function(a) {
            if (32 == a[xb]) {
                if (a[ib](), a[z] != Uk)
                    return!0
            } else if (a[z] != Rk)
                return!1;
            if (this.h && this.h.m) {
                var b = this.h.Da(a);
                return 27 == a[xb] ? (this.M(!1), !0) : b
            }
            return 40 == a[xb] || 38 == a[xb] || 32 == a[xb] || 13 == a[xb] ? (this.M(!0), !0) : !1
        };
        M.Qe = function() {
            this.M(!1)
        };
        M.Ti = function() {
            this.Ia() || this.M(!1)
        };
        M.Eb = function(a) {
            this.jd || this.M(!1);
            Gv.b.Eb[G](this, a)
        };
        M.Kc = function() {
            this.h || this.td(new Dv(this.n()));
            return this.h || null
        };
        M.td = function(a) {
            var b = this.h;
            a != b && (b && (this.M(!1), this.r && this.md(b, !1), delete this.h), this.r && Du(this.j, rk, !!a), a && (this.h = a, a.ve(this), a.K(!1), a.Wi(this.jd), this.r && this.md(a, !0)));
            return b
        };
        M.ib = function(a) {
            this.Kc().Wd(a, !0)
        };
        M.nc = function(a, b) {
            this.Kc().Pc(a, b, !0)
        };
        M.ed = function(a) {
            return this.h ? this.h.Na(a) : null
        };
        M.Vf = function() {
            return this.h ? this.h.eb() : 0
        };
        M.K = function(a, b) {
            var c = Gv.b.K[G](this, a, b);
            c && !this.m && this.M(!1);
            return c
        };
        M.Ri = function() {
            return this.rd.rl && !!(this.rd.ie & 32)
        };
        M.zk = function(a) {
            this.jd = a
        };
        M.M = function(a, b) {
            Gv.b.M[G](this, a);
            if (this.h && this.ta(64) == a) {
                if (a)
                    this.h.r || (this.Bi ? this.h.zb(this.a()[H]) : this.h.zb()), this.Bb = $s(this.a()), this.Ab = ft(this.a()), this.hg(), this.h.gb(-1);
                else {
                    this[ld](!1);
                    this.h.ac(!1);
                    var c = this.a();
                    c && Du(c, Lh, I);
                    null != this.kd && (this.kd = void 0, (c = this.h.a()) && ct(c, I, I))
                }
                this.h.K(a, !1, b);
                this.$b || this.Ai(a)
            }
        };
        M.hg = function() {
            if (this.h.r) {
                var a = this.rd;
                this.rd.element = this.zi || this.a();
                var b = this.h.a();
                this.h.m || (Qa(b[s], uk), ht(b, !0));
                !this.kd && this.Ri() && (this.kd = dt(et, b));
                a.Bc(b, a.yd ^ 1, this.Mi, this.kd);
                this.h.m || (ht(b, !1), Qa(b[s], un))
            }
        };
        M.Ui = function() {
            var a = ft(this.a()), b = $s(this.a());
            (this.Ab == a || this.Ab && a && this.Ab[y] == a[y] && this.Ab[p] == a[p] && this.Ab.top == a.top && this.Ab[t] == a[t]) && (this.Bb == b || this.Bb && b && this.Bb.top == b.top && this.Bb[Hc] == b[Hc] && this.Bb[vc] == b[vc] && this.Bb[y] == b[y]) || (this.Ab = a, this.Bb = b, this.hg())
        };
        M.md = function(a, b) {
            var c = this.U(), d = b ? c.i : c.Z;
            d[G](c, a, Jh, this.Qe);
            d[G](c, a, wk, this.te);
            d[G](c, a, ln, this.ue)
        };
        M.te = function(a) {
            var b = this.a();
            null != a[Hd].a() && Du(b, Lh, a[Hd].a().id)
        };
        M.ue = function() {
            this.h.ec() || Du(this.a(), Lh, I)
        };
        M.Ai = function(a) {
            var b = this.U(), c = a ? b.i : b.Z;
            c[G](b, this.n().L(), kl, this.Si, !0);
            this.jd && c[G](b, this.h, ai, this.Ti);
            c[G](b, this.$, Wm, this.Ui);
            a ? this.$.start() : this.$[qd]()
        };
        dv(Wj, function() {
            return new Gv(null)
        });
        function Hv(a) {
            rr[G](this);
            this.Qb = [];
            this.vl(a)
        }
        S(Hv, rr);
        M = Hv[E];
        M.Rb = null;
        M.ji = null;
        M.Vf = function() {
            return this.Qb[B]
        };
        M.yl = function(a) {
            return a ? Ao(this.Qb, a) : -1
        };
        M.ed = function(a) {
            return this.Qb[a] || null
        };
        M.vl = function(a) {
            a && (Bo(a, function(a) {
                this.le(a, !1)
            }, this), Lo(this.Qb, a))
        };
        M.ib = function(a) {
            this.nc(a, this.Vf())
        };
        M.nc = function(a, b) {
            a && (this.le(a, !1), Mo(this.Qb, b, 0, a))
        };
        M.Xc = function() {
            return this.Rb
        };
        M.Sb = function(a) {
            a != this.Rb && (this.le(this.Rb, !1), this.Rb = a, this.le(a, !0));
            this[r](lm)
        };
        M.Gd = function() {
            return this.yl(this.Rb)
        };
        M.di = function(a) {
            this.Sb(this.ed(a))
        };
        M.clear = function() {
            var a = this.Qb;
            if (!O(a))
                for (var b = a[B] - 1; 0 <= b; b--)
                    delete a[b];
            Sa(a, 0);
            this.Rb = null
        };
        M.k = function() {
            Hv.b.k[G](this);
            delete this.Qb;
            this.Rb = null
        };
        M.le = function(a, b) {
            a && (typeof this.ji == qj ? this.ji(a, b) : typeof a.yf == qj && a.yf(b))
        };
        function Iv(a, b, c, d) {
            Gv[G](this, a, b, c, d);
            this.tg = this.la
        }
        S(Iv, Gv);
        M = Iv[E];
        M.C = null;
        M.N = function() {
            Iv.b.N[G](this);
            this.Yg();
            this.Bg()
        };
        M.k = function() {
            Iv.b.k[G](this);
            this.C && (this.C.fa(), this.C = null);
            this.tg = null
        };
        M.Qe = function(a) {
            this.Sb(a[Hd]);
            Iv.b.Qe[G](this, a);
            a[cc]();
            this[r](Jh)
        };
        M.Sj = function() {
            var a = this.Xc();
            Iv.b[vd][G](this, a && a[A]());
            this.Yg()
        };
        M.td = function(a) {
            var b = Iv.b.td[G](this, a);
            a != b && (this.C && this.C.clear(), a && (this.C ? a.xb(function(a) {
                this.Hd(a);
                this.C.ib(a)
            }, this) : this.Te(a)));
            return b
        };
        M.ib = function(a) {
            this.Hd(a);
            Iv.b.ib[G](this, a);
            this.C ? this.C.ib(a) : this.Te(this.Kc())
        };
        M.nc = function(a, b) {
            this.Hd(a);
            Iv.b.nc[G](this, a, b);
            this.C ? this.C.nc(a, b) : this.Te(this.Kc())
        };
        M.Sb = function(a) {
            if (this.C) {
                var b = this.Xc();
                this.C.Sb(a);
                a != b && this[r](ri)
            }
        };
        M.di = function(a) {
            this.C && this.Sb(this.C.ed(a))
        };
        Ta(M, function(a) {
            if (null != a && this.C)
                for (var b = 0, c; c = this.C.ed(b); b++)
                    if (c && typeof c[A] == qj && c[A]() == a) {
                        this.Sb(c);
                        return
                    }
            this.Sb(null)
        });
        M.Xc = function() {
            return this.C ? this.C.Xc() : null
        };
        M.Gd = function() {
            return this.C ? this.C.Gd() : -1
        };
        M.Te = function(a) {
            this.C = new Hv;
            a && a.xb(function(a) {
                this.Hd(a);
                this.C.ib(a)
            }, this);
            this.Bg()
        };
        M.Bg = function() {
            this.C && this.U().i(this.C, lm, this.Sj)
        };
        M.Yg = function() {
            var a = this.Xc();
            this[id](a ? a.Jc() : this.tg)
        };
        M.Hd = function(a) {
            a.ui(a instanceof iv ? Dl : nm)
        };
        M.M = function(a, b) {
            Iv.b.M[G](this, a, b);
            this.Gc() && this.Kc().gb(this.Gd())
        };
        dv("goog-select", function() {
            return new Iv(null)
        });
        function Jv(a, b) {
            this.jb = hq();
            this.Nc = a;
            this.Jh = [];
            t:{
                for (var c = qt() + zf, d = fa[Nb](Lg), f = 0; f < d[B]; f++)
                    if (d[f] && d[f][wc] && d[f][wc] == c)
                        break t;
                d = fa[vb](Zk);
                d.href = c;
                d.rel = Lm;
                La(d, Tm);
                if (0 == fa[Nb](sk)[B]) {
                    var c = fa[Nb](yk)[0], f = fa[Nb](bi)[0], h = fa[vb](sk);
                    c[jb](h, f)
                }
                fa[Nb](sk)[0][Xa](d)
            }
            this.bl(b)
        }
        M = Jv[E];
        M.pc = null;
        function Kv(a, b) {
            var c = hq(), d, f, h = null;
            switch (a) {
                case 2:
                    d = new Nu(kk);
                    h = Yl + d.Xb();
                    f = c.d(Xi, null, c.d(Xi, {"class": jk}, pg), c.d(ni, null), c.d(Ul, null, c.d(Xi, {id: h}, b[hc])));
                    break;
                case 3:
                    d = new Nu(fk);
                    f = c.d(Xi, null, c.d(Xi, {"class": jk}, pg), c.d(ni, null));
                    var k = c.d(Xi, null, c.d(Ul, null, b[hc]));
                    c[Xa](f, k)
            }
            d[id](f.innerHTML);
            Ia(d.Qi(), zg);
            Ia(d.Pi(), I);
            d.K(!0);
            if (h) {
                c = f = P(h) ? fa[Pc](h) : h;
                d = 0;
                h = 1;
                k = new tu;
                k.ua = uu(c, d, f, h);
                if (Qn(c) && 1 == c[Nc] && !uq(c)) {
                    var n = c[H];
                    d = Ao(n[Hb], c);
                    c = n
                }
                Qn(f) && 1 == f[Nc] && !uq(f) && (n = f[H], h =
                        Ao(n[Hb], f), f = n);
                k.ua ? (k.w = f, k.u = h, k.q = c, k.t = d) : (k.w = c, k.u = d, k.q = f, k.t = h);
                k.select()
            }
        }
        M.bl = function(a) {
            a = a || [];
            var b = this.Nc, c = this.jb;
            c.Wg(b);
            if (!b)
                throw m("Container is not defined");
            var d = c.d(Em, null), f = [c.d(Em, null, mg), c.d(Xi, {"class": lk}, Hn)];
            this.pc = new Iv(f);
            if (a)
                for (f = 0; f < a[B]; f++) {
                    var h = null, h = a[f], k = h.datasource, n = h.gadget, u = h.userprefs, C = h[F], D = h[Kl], Q = h[s] || xn;
                    switch (h[z]) {
                        case Ii:
                            h = this.Yc(f, Zn(function(a) {
                                ca[Jc]((new Ir(a)).Id(en, Fl), Ag)
                            }, k), vg, gk);
                            break;
                        case zk:
                            h = this.Yc(f, Zn(function(a, b) {
                                Kv(2, {message: Uf + Q + ke + aa(a) + ze + aa(b) + Lv(u) + je})
                            }, n, k), Zg, ik);
                            break;
                        case Pk:
                            h =
                                    this.Yc(f, Zn(function(a, b, c) {
                                Kv(3, {message: Tf + aa(b) + Be + a + Ae + aa(c) + De})
                            }, k, D, C), Jg, ik);
                            break;
                        case yk:
                            h = this.Yc(f, Zn(function(a) {
                                ca[Jc]((new Ir(a)).Id(en, Gl), Ag)
                            }, k), wg, gk);
                            break;
                        case Ik:
                            h = this.Yc(f, Zn(function(a, b, c) {
                                ca[Jc](Dk + aa(a) + ze + aa(b) + Lv(c))
                            }, n, k, u), cg, hk);
                            break;
                        default:
                            throw m("No such toolbar component as: " + h.toSource());
                    }
                    h && this.pc.ib(h)
                }
            er(this.pc, Jh, Yn(this.kj, this));
            this.pc.zb(d);
            c[Xa](b, d)
        };
        M.jl = function() {
            this.pc.di(-1)
        };
        M.kj = function() {
            var a = this.pc.Gd();
            this.Jh[a]();
            this.jl()
        };
        M.Yc = function(a, b, c) {
            c = new iv(c);
            this.Jh[a] = b;
            return c
        };
        function Lv(a) {
            if (!a)
                return I;
            var b = I, c;
            for (c in a)
                b += ye + c + Wf + aa(a[c]);
            return b
        }
        ;
        e("google.visualization.drawChart", $t);
        e("google.visualization.drawFromUrl", function(a, b) {
            var c = new Ir(b || fa[ec][wc]), d = c.Qh(Qk), f;
            null != d ? f = d : (f = {}, Bo(c.ra.kb(), function(a) {
                var b = c.Qh(a);
                try {
                    null != b && (b = mo(b))
                } catch (d) {
                }
                f[a] = b
            }), f.options = Yp(f));
            $t(f, a)
        });
        e("google.visualization.createUrl", function(a, b) {
            P(a) && (a = mo(a));
            var c = [], d, f;
            for (f in a)
                if (f == El) {
                    var h = a[f], k;
                    for (k in h)
                        d = h[k], P(d) || (d = jo(d)), c[v](k + Wf + aa(ma(d)))
                } else
                    d = a[f], P(d) || (d = R(d[Vb]) ? d[Vb]() : jo(d)), c[v](f + Wf + aa(ma(d)));
            d = qt() + uf;
            d = d[q](/^https?:/, I);
            c = (b || d) + Yf + c[Zd](se);
            c = c[q](/'/g, re);
            return c = c[q](/"/g, qe)
        });
        e("google.visualization.createSnippet", function(a) {
            var b = qt() + vf, b = b[q](/^https?:/, I), b = Vf + b + me;
            a = au(a)[Vb]();
            a = a[q](/</g, ve);
            a = a[q](/>/g, ue);
            return b = b + a + ce
        });
        e("google.visualization.createWrapper", au);
        e("google.visualization.ChartWrapper", Y);
        g(Y[E], aj, Y[E][Kd]);
        g(Y[E], Zm, Y[E][Vb]);
        g(Y[E], Nj, Y[E].getSnapshot);
        g(Y[E], Bj, Y[E][Gd]);
        g(Y[E], Cj, Y[E][hb]);
        g(Y[E], "getChartName", Y[E].getChartName);
        g(Y[E], "getChartType", Y[E].getChartType);
        g(Y[E], "getChart", Y[E].getChart);
        g(Y[E], Aj, Y[E][uc]);
        g(Y[E], Ij, Y[E][Pd]);
        g(Y[E], Jj, Y[E][Sd]);
        g(Y[E], Kj, Y[E][Md]);
        g(Y[E], "getView", Y[E][Rb]);
        g(Y[E], "getOption", Y[E][mc]);
        g(Y[E], "getOptions", Y[E][Qc]);
        g(Y[E], "getState", Y[E][sc]);
        g(Y[E], "getCustomRequestHandler", Y[E].getCustomRequestHandler);
        g(Y[E], "isDefaultVisualization", Y[E][Td]);
        g(Y[E], "pushView", Y[E].pushView);
        g(Y[E], "sendQuery", Y[E].sendQuery);
        g(Y[E], sm, Y[E][Xb]);
        g(Y[E], tm, Y[E][oc]);
        g(Y[E], "setChart", Y[E].setChart);
        g(Y[E], "setChartName", Y[E].setChartName);
        g(Y[E], "setChartType", Y[E].setChartType);
        g(Y[E], rm, Y[E].setContainerId);
        g(Y[E], "setIsDefaultVisualization", Y[E].setIsDefaultVisualization);
        g(Y[E], vm, Y[E].setPackages);
        g(Y[E], wm, Y[E][Dd]);
        g(Y[E], xm, Y[E][gd]);
        g(Y[E], "setView", Y[E][Cd]);
        g(Y[E], "setOption", Y[E][ae]);
        g(Y[E], um, Y[E].setOptions);
        g(Y[E], "setState", Y[E][od]);
        g(Y[E], "setCustomRequestHandler", Y[E].setCustomRequestHandler);
        e("google.visualization.ControlWrapper", Z);
        g(Z[E], aj, Z[E][Kd]);
        g(Z[E], Zm, Z[E][Vb]);
        g(Z[E], Nj, Z[E].getSnapshot);
        g(Z[E], Bj, Z[E][Gd]);
        g(Z[E], Cj, Z[E][hb]);
        g(Z[E], "getControlName", Z[E].getControlName);
        g(Z[E], "getControlType", Z[E].getControlType);
        g(Z[E], "getControl", Z[E].getControl);
        g(Z[E], Aj, Z[E][uc]);
        g(Z[E], Ij, Z[E][Pd]);
        g(Z[E], Jj, Z[E][Sd]);
        g(Z[E], Kj, Z[E][Md]);
        g(Z[E], "getView", Z[E][Rb]);
        g(Z[E], "getOption", Z[E][mc]);
        g(Z[E], "getOptions", Z[E][Qc]);
        g(Z[E], "getState", Z[E][sc]);
        g(Z[E], "sendQuery", Z[E].sendQuery);
        g(Z[E], sm, Z[E][Xb]);
        g(Z[E], tm, Z[E][oc]);
        g(Z[E], "setControlName", Z[E].setControlName);
        g(Z[E], "setControlType", Z[E].setControlType);
        g(Z[E], rm, Z[E].setContainerId);
        g(Z[E], vm, Z[E].setPackages);
        g(Z[E], wm, Z[E][Dd]);
        g(Z[E], xm, Z[E][gd]);
        g(Z[E], "setView", Z[E][Cd]);
        g(Z[E], "setOption", Z[E][ae]);
        g(Z[E], um, Z[E].setOptions);
        g(Z[E], "setState", Z[E][od]);
        e("google.visualization.DashboardWrapper", $);
        g($[E], aj, $[E][Kd]);
        g($[E], Zm, $[E][Vb]);
        g($[E], "getBindings", $[E].getBindings);
        g($[E], Bj, $[E][Gd]);
        g($[E], Cj, $[E][hb]);
        g($[E], "getDashboard", $[E].getDashboard);
        g($[E], "getDashboardName", $[E].getDashboardName);
        g($[E], Aj, $[E][uc]);
        g($[E], Ij, $[E][Pd]);
        g($[E], Jj, $[E][Sd]);
        g($[E], Kj, $[E][Md]);
        g($[E], "getView", $[E][Rb]);
        g($[E], "getWrappers", $[E].getWrappers);
        g($[E], "setBindings", $[E].setBindings);
        g($[E], sm, $[E][Xb]);
        g($[E], tm, $[E][oc]);
        g($[E], "setDashboardName", $[E].setDashboardName);
        g($[E], rm, $[E].setContainerId);
        g($[E], vm, $[E].setPackages);
        g($[E], wm, $[E][Dd]);
        g($[E], xm, $[E][gd]);
        g($[E], "setView", $[E][Cd]);
        g($[E], Nj, $[E].getSnapshot);
        g($[E], "setWrappers", $[E].setWrappers);
        e("google.visualization.drawToolbar", function(a, b) {
            new Jv(a, b)
        });
        e("google.visualization.data.avg", function(a) {
            return cu(a) / a[B]
        });
        e("google.visualization.data.count", function(a) {
            return a[B]
        });
        e("google.visualization.data.group", function(a, b, c) {
            function d(a, b, c, d) {
                return b[G](null, c[A](d, a))
            }
            var f = [], h = [];
            Bo(b, function(a) {
                if (Sn(a))
                    f[v](a);
                else if (Mn(a) == yl) {
                    var b = a.column;
                    jl in a && h[v]([b, {calc: Zn(d, b, a.modifier), type: a[z], label: a[Dc], id: a.id}]);
                    f[v](b)
                }
            });
            if (0 != h[B]) {
                for (var k = new google[F][Ld](a), n = k.getViewColumns(), u = a[td](), C = 0; C < u; C++)
                    Bo(h, function(a) {
                        n[a[0]] = a[1]
                    });
                k[Fc](n);
                a = k
            }
            var D = new google[F].DataTable, Q = [];
            Bo(f, function(c, d) {
                var f = a[yb](c), h = b[d][Dc] || a[ad](c);
                D[Vd](f, h, b[d].id);
                Q[v](f)
            });
            c = c || [];
            Bo(c, function(b) {
                var c = b.column, c = b[Dc] || a[ad](c);
                D[Vd](b[z], c, b.id)
            });
            var Ea = [];
            Bo(f, function(a) {
                Ea[v]({column: a})
            });
            for (var Ha = a[cd](Ea), ob = [], ka = 0; ka < c[B]; ka++)
                ob[v]([]);
            for (ka = 0; ka < Ha[B]; ka++) {
                Bo(c, function(b, c) {
                    ob[c][v](a[A](Ha[ka], b.column))
                });
                k = !1;
                if (ka < Ha[B] - 1)
                    for (k = !0, u = 0; u < f[B]; u++) {
                        var C = a[A](Ha[ka], f[u]), Ib = a[A](Ha[ka + 1], f[u]);
                        if (0 != google[F].datautils.compareValues(Q[u], C, Ib)) {
                            k = !1;
                            break
                        }
                    }
                if (!k) {
                    var za = D.addRow();
                    Bo(f, function(b, c) {
                        D[vd](za, c, a[A](Ha[ka], b))
                    });
                    var ba =
                            b[B];
                    Bo(c, function(a, b) {
                        var c = a.aggregation[G](null, ob[b]);
                        D[vd](za, ba + b, c)
                    });
                    for (k = 0; k < c[B]; k++)
                        ob[k] = []
                }
            }
            return D
        });
        e("google.visualization.data.join", function(a, b, c, d, f, h) {
            var k = c == Yk || c == pj, n = c == gm || c == pj, u = new google[F].DataTable, C = [];
            Bo(d, function(c) {
                var d = a[yb](c[0]), f = b[yb](c[1]);
                if (d != f)
                    throw m("Key types do not match:" + d + Ie + f);
                bu(u, a, c[0]);
                C[v](d)
            });
            var D = [], Q = [];
            Bo(d, function(a) {
                D[v]({column: a[0]});
                Q[v]({column: a[1]})
            });
            var Ea = a[cd](D), Ha = b[cd](Q);
            Bo(f, function(b) {
                bu(u, a, b)
            });
            Bo(h, function(a) {
                bu(u, b, a)
            });
            for (var ob = !1, ka = 0, Ib = 0, za = 0; ka < Ea[B] || Ib < Ha[B]; ) {
                var ba = 0, U = [];
                if (Ib >= Ha[B])
                    if (k)
                        U[0] = Ea[ka], ba = -1;
                    else
                        break;
                else if (ka >= Ea[B])
                    if (n)
                        U[1] = Ha[Ib], ba = 1;
                    else
                        break;
                else {
                    U[0] = Ea[ka];
                    U[1] = Ha[Ib];
                    for (var $b = 0; $b < d[B]; $b++) {
                        var ba = a[A](U[0], d[$b][0]), K = b[A](U[1], d[$b][1]), ba = google[F].datautils.compareValues(C[$b], ba, K);
                        if (0 != ba)
                            break
                    }
                }
                if (ob && 0 != ba)
                    ob = !1, Ib++;
                else {
                    if (-1 == ba && k || 1 == ba && n || 0 == ba) {
                        u.addRow();
                        var lf, gc;
                        -1 == ba && k || 0 == ba && c != gm ? (lf = a, gc = 0) : (lf = b, gc = 1);
                        Bo(d, function(a, b) {
                            c == pj ? u[vd](za, b, lf[A](U[gc], a[gc])) : u[Jb](za, b, lf[A](U[gc], a[gc]), lf[Xd](U[gc], a[gc]), lf[ud](U[gc], a[gc]))
                        });
                        if (-1 == ba &&
                                k || 0 == ba) {
                            var Xk = d[B];
                            Bo(f, function(b, c) {
                                u[Jb](za, c + Xk, a[A](U[0], b), a[Xd](U[0], b), a[ud](U[0], b))
                            })
                        }
                        if (1 == ba && n || 0 == ba)
                            Xk = f[B] + d[B], Bo(h, function(a, c) {
                                u[Jb](za, c + Xk, b[A](U[1], a), b[Xd](U[1], a), b[ud](U[1], a))
                            });
                        za++
                    }
                    1 == ba ? Ib++ : ka++;
                    0 == ba && (ob = !0)
                }
            }
            return u
        });
        e("google.visualization.data.max", function(a) {
            if (0 == a[B])
                return null;
            for (var b = a[0], c = 1; c < a[B]; c++) {
                var d = a[c];
                null != d && d > b && (b = d)
            }
            return b
        });
        e("google.visualization.data.min", function(a) {
            if (0 == a[B])
                return null;
            for (var b = a[0], c = 1; c < a[B]; c++) {
                var d = a[c];
                null != d && d < b && (b = d)
            }
            return b
        });
        e("google.visualization.data.month", function(a) {
            return a[rd]() + 1
        });
        e("google.visualization.data.sum", cu);
        e("__gvizguard__", !0);
        e(ok, ls);
        g(ls[E], al, ls[E].makeRequest);
        g(ls[E], xm, ls[E][gd]);
        g(ls[E], wm, ls[E][Dd]);
        g(ls[E], "send", ls[E][qb]);
        g(ls[E], "setRefreshable", ls[E].setRefreshable);
        g(ls[E], "setTimeout", ls[E][Wb]);
        g(ls[E], "setHandlerType", ls[E].Yl);
        g(ls[E], "setHandlerParameter", ls[E].ki);
        g(ls, "setResponse", us);
        g(ls[E], Hh, ls[E][xd]);
        e("google.visualization.CustomQuery", Fs);
        g(Fs[E], "send", Fs[E][qb]);
        e("google.visualization.QueryResponse", hs);
        g(hs[E], Cj, hs[E][hb]);
        g(hs[E], "isError", hs[E][$c]);
        g(hs[E], "hasWarning", hs[E].hasWarning);
        g(hs[E], "getReasons", hs[E].getReasons);
        g(hs[E], "getMessage", hs[E].getMessage);
        g(hs[E], "getDetailedMessage", hs[E].getDetailedMessage);
        e("google.visualization.DataTable", V);
        g(V[E], "addColumn", V[E][Vd]);
        g(V[E], "addRow", V[E].addRow);
        g(V[E], "addRows", V[E][kd]);
        g(V[E], "clone", V[E][kc]);
        g(V[E], "getColumnId", V[E][jc]);
        g(V[E], uj, V[E].getColumnIndex);
        g(V[E], vj, V[E][ad]);
        g(V[E], wj, V[E][dc]);
        g(V[E], yj, V[E][Zb]);
        g(V[E], xj, V[E][Wc]);
        g(V[E], zj, V[E].getColumnRange);
        g(V[E], "getColumnRole", V[E].getColumnRole);
        g(V[E], "getColumnType", V[E][yb]);
        g(V[E], Dj, V[E].getDistinctValues);
        g(V[E], Ej, V[E].getFilteredRows);
        g(V[E], Fj, V[E][Xd]);
        g(V[E], Gj, V[E][w]);
        g(V[E], Hj, V[E][td]);
        g(V[E], "getProperties", V[E][ud]);
        g(V[E], "getProperty", V[E].getProperty);
        g(V[E], Mj, V[E].getRowProperty);
        g(V[E], Lj, V[E][fd]);
        g(V[E], "getSortedRows", V[E][cd]);
        g(V[E], Pj, V[E].getTableProperty);
        g(V[E], Oj, V[E][Fb]);
        g(V[E], "getValue", V[E][A]);
        g(V[E], "insertColumn", V[E].insertColumn);
        g(V[E], "insertRows", V[E].insertRows);
        g(V[E], "removeColumn", V[E].removeColumn);
        g(V[E], "removeColumns", V[E].removeColumns);
        g(V[E], "removeRow", V[E].removeRow);
        g(V[E], "removeRows", V[E].removeRows);
        g(V[E], "setCell", V[E][Jb]);
        g(V[E], "setColumnLabel", V[E].setColumnLabel);
        g(V[E], "setColumnProperties", V[E].setColumnProperties);
        g(V[E], "setColumnProperty", V[E].setColumnProperty);
        g(V[E], "setFormattedValue", V[E].setFormattedValue);
        g(V[E], "setProperties", V[E].setProperties);
        g(V[E], "setProperty", V[E].setProperty);
        g(V[E], "setRowProperties", V[E].setRowProperties);
        g(V[E], "setRowProperty", V[E].setRowProperty);
        g(V[E], "setTableProperties", V[E].setTableProperties);
        g(V[E], "setTableProperty", V[E].setTableProperty);
        g(V[E], "setValue", V[E][vd]);
        g(V[E], "sort", V[E].sort);
        g(V[E], Zm, V[E][Vb]);
        e("google.visualization.DataView", W);
        g(W, "fromJSON", function(a, b) {
            P(b) && (b = mo(b));
            var c = new W(a), d = b.columns, f = b[xc];
            null != d && c[Fc](d);
            null != f && c.setRows(f);
            return c
        });
        g(W[E], "getColumnId", W[E][jc]);
        g(W[E], uj, W[E].getColumnIndex);
        g(W[E], vj, W[E][ad]);
        g(W[E], wj, W[E][dc]);
        g(W[E], yj, W[E][Zb]);
        g(W[E], yj, W[E][Zb]);
        g(W[E], xj, W[E][Wc]);
        g(W[E], zj, W[E].getColumnRange);
        g(W[E], "getColumnRole", W[E].getColumnRole);
        g(W[E], "getColumnType", W[E][yb]);
        g(W[E], Dj, W[E].getDistinctValues);
        g(W[E], Ej, W[E].getFilteredRows);
        g(W[E], Fj, W[E][Xd]);
        g(W[E], Gj, W[E][w]);
        g(W[E], Hj, W[E][td]);
        g(W[E], "getProperties", W[E][ud]);
        g(W[E], "getProperty", W[E].getProperty);
        g(W[E], Mj, W[E].getRowProperty);
        g(W[E], Lj, W[E][fd]);
        g(W[E], "getSortedRows", W[E][cd]);
        g(W[E], "getTableColumnIndex", W[E].getTableColumnIndex);
        g(W[E], "getUnderlyingTableColumnIndex", W[E].getUnderlyingTableColumnIndex);
        g(W[E], "getTableRowIndex", W[E][dd]);
        g(W[E], "getUnderlyingTableRowIndex", W[E].getUnderlyingTableRowIndex);
        g(W[E], Pj, W[E].getTableProperty);
        g(W[E], Oj, W[E][Fb]);
        g(W[E], "getValue", W[E][A]);
        g(W[E], "getViewColumnIndex", W[E].getViewColumnIndex);
        g(W[E], "getViewColumns", W[E].getViewColumns);
        g(W[E], "getViewRowIndex", W[E].getViewRowIndex);
        g(W[E], "getViewRows", W[E].getViewRows);
        g(W[E], "hideColumns", W[E].hideColumns);
        g(W[E], "hideRows", W[E].hideRows);
        g(W[E], "setColumns", W[E][Fc]);
        g(W[E], "setRows", W[E].setRows);
        g(W[E], "toDataTable", W[E][bd]);
        g(W[E], Zm, W[E][Vb]);
        e("google.visualization.errors", X);
        g(X, "addError", X[Tb]);
        g(X, "removeAll", X[Id]);
        g(X, "removeError", X.removeError);
        g(X, "addErrorFromQueryResponse", X.addErrorFromQueryResponse);
        g(X, "getContainer", X[Ac]);
        g(X, "createProtectedCallback", X.createProtectedCallback);
        e("google.visualization.events.addListener", function(a, b, c) {
            a = zs(a);
            b = er(a, b, As(c));
            return new Bs(b)
        });
        e("google.visualization.events.trigger", function(a, b, c) {
            zs(a)[r](new Cs(b, c))
        });
        e("google.visualization.events.removeListener", function(a) {
            return(a = a && R(a.getKey) && a.getKey()) ? mr(a) : !1
        });
        e("google.visualization.events.removeAllListeners", function(a) {
            var b = zs(a), c;
            if (b)
                c = Xq(b) ? b.removeAllListeners(void 0) : nr(Tn(b), void 0);
            else {
                b = 0;
                for (c in cr)
                    b += nr(c);
                c = b
            }
            Nq(a.__eventTarget);
            a.__eventTarget = void 0;
            return c
        });
        e("google.visualization.QueryWrapper", Ds);
        g(Ds[E], um, Ds[E].setOptions);
        g(Ds[E], aj, Ds[E][Kd]);
        g(Ds[E], "setCustomErrorHandler", Ds[E].Xl);
        g(Ds[E], "sendAndDraw", Ds[E].sendAndDraw);
        g(Ds[E], "setCustomPostResponseHandler", Ds[E].setCustomPostResponseHandler);
        g(Ds[E], "setCustomResponseHandler", Ds[E].setCustomResponseHandler);
        g(Ds[E], Hh, Ds[E][xd]);
        e("google.visualization.arrayToDataTable", function(a, b) {
            var c = new V, d, f, h;
            if (!O(a))
                throw m("Not an array");
            if (0 == a[B])
                return c;
            if (!O(a[0]))
                throw m(Vg);
            var k = a[0][B];
            for (d = 1; d < a[B]; d++)
                if (!O(a[d]) || a[d][B] != k)
                    throw m(Vg);
            var n = (d = !b) ? a[0] : [], u = d ? a[Mc](1, a[B]) : a, C = [];
            for (f = 0; f < k; f++) {
                var D = L;
                for (d = 0; d < u[B]; d++)
                    if (h = u[d][f], null != h) {
                        if (P(h))
                            D = L;
                        else if (Sn(h))
                            D = J;
                        else if (O(h))
                            D = Xm;
                        else if (Rn(h))
                            D = ci;
                        else {
                            if (Pn(h))
                                throw m("Date and datetime column types are not supported");
                            throw m("Invalid value in " +
                                    d + He + f);
                        }
                        break
                    }
                C[f] = D
            }
            for (f = 0; f < k; f++)
                c[Vd](C[f], n[f]);
            c[kd](u);
            return c
        });
        e("google.visualization.datautils.compareValues", Vr);
        e("google.visualization.dataTableToCsv", function(a) {
            for (var b = I, c = 0; c < a[td](); c++) {
                for (var d = 0; d < a[w](); d++) {
                    0 < d && (b += He);
                    var f = a[Xd](c, d), f = f[q](pa(ie, rj), le), h = -1 != f[x](He), k = -1 != f[x](be), n = -1 != f[x](ie);
                    if (h || k || n)
                        f = ie + f + ie;
                    b += f
                }
                b += be
            }
            return b
        });
        e("google.visualization.GadgetHelper", vs);
        g(vs[E], "createQueryFromPrefs", vs[E].createQueryFromPrefs);
        g(vs[E], "validateResponse", vs[E].validateResponse);
    })();

    (function() {
        var g = Object, h = document, aa = google_exportProperty, l = Math, p = Array, ba = Number, t = Error, u = parseInt, v = String;
        function ca(a, b) {
            return a.keyCode = b
        }
        function da(a, b) {
            return a.clone = b
        }
        function ea(a, b) {
            return a.currentTarget = b
        }
        function w(a, b) {
            return a.type = b
        }
        function fa(a, b) {
            return a.className = b
        }
        var x = "appendChild", ga = "trigger", y = "getParent", A = "replace", ha = "collapsed", ia = "preventDefault", ja = "getName", ka = "createElement", la = "keyCode", na = "getElementsByTagName", oa = "toString", pa = "propertyIsEnumerable", B = "split", D = "hasOwnProperty", E = "style", qa = "contains", F = "apply", G = "push", ra = "round", sa = "slice", ta = "events", H = "indexOf", ua = "color", J = "type", K = "length", L = "prototype", va = "visualization", M = "call", N = "", wa = " ", xa = " google-visualization-orgchart-linebottom", ya = " google-visualization-orgchart-lineleft", za =
                " google-visualization-orgchart-lineright", Aa = " google-visualization-orgchart-node-", Ba = ' name="', Ca = ' type="', Da = '"', Ea = "#", Fa = "#$1$1$2$2$3$3", Ga = "&", Ha = "&amp;", Ia = "&gt;", Ja = "&lt;", Ka = "&quot;", La = "(\\d*)(\\D*)", Ma = ",", Na = ".", Oa = "0", Pa = "<", Qa = ">", Ra = "[object Array]", Sa = "[object Function]", Ta = "[object Window]", Ua = "aria-", O = "array", Va = "call", Wa = "callee", Xa = "center", Ya = "class", Za = "collapse", $a = "column", ab = "data-", bb = "dblclick", cb = "for", P = "function", db = "g", eb = "google-visualization-orgchart-connrow-",
                fb = "google-visualization-orgchart-linenode", hb = "google-visualization-orgchart-node", ib = "google-visualization-orgchart-noderow-", jb = "google-visualization-orgchart-nodesel", kb = "google-visualization-orgchart-space-", lb = "google-visualization-orgchart-table", mb = "hex", nb = "keypress", ob = "large", pb = "ltr", qb = "medium", rb = "mousedown", sb = "mouseout", tb = "mouseover", ub = "named", vb = "native code", wb = "none", xb = "null", yb = "number", zb = "o", Q = "object", Ab = "on", Bb = "onmouseout", Cb = "onmouseover", Db = "ready", Eb = "rgb", Fb = "row",
                Gb = "select", Hb = "selectedStyle", Ib = "small", Jb = "solid", Kb = "splice", Lb = "string", Mb = "style", Nb = "table", Ob = "tbody", Pb = "td", Qb = "tr", Rb = "transparent", Sb = "window.event", Tb = "\u00a0", R, S = this;
        function Ub(a, b) {
            for (var c = a[B](Na), d = b || S, e; e = c.shift(); )
                if (null != d[e])
                    d = d[e];
                else
                    return null;
            return d
        }
        function T(a) {
            var b = typeof a;
            if (b == Q)
                if (a) {
                    if (a instanceof p)
                        return O;
                    if (a instanceof g)
                        return b;
                    var c = g[L][oa][M](a);
                    if (c == Ta)
                        return Q;
                    if (c == Ra || typeof a[K] == yb && "undefined" != typeof a.splice && "undefined" != typeof a[pa] && !a[pa](Kb))
                        return O;
                    if (c == Sa || "undefined" != typeof a[M] && "undefined" != typeof a[pa] && !a[pa](Va))
                        return P
                } else
                    return xb;
            else if (b == P && "undefined" == typeof a[M])
                return Q;
            return b
        }
        function Vb(a) {
            var b = T(a);
            return b == O || b == Q && typeof a[K] == yb
        }
        function U(a) {
            return typeof a == Lb
        }
        function Wb(a) {
            var b = typeof a;
            return b == Q && null != a || b == P
        }
        function Xb(a) {
            return a[Yb] || (a[Yb] = ++Zb)
        }
        var Yb = "closure_uid_" + (1E9 * l.random() >>> 0), Zb = 0;
        function $b(a, b, c) {
            return a[M][F](a.bind, arguments)
        }
        function ac(a, b, c) {
            if (!a)
                throw t();
            if (2 < arguments[K]) {
                var d = p[L][sa][M](arguments, 2);
                return function() {
                    var c = p[L][sa][M](arguments);
                    p[L].unshift[F](c, d);
                    return a[F](b, c)
                }
            }
            return function() {
                return a[F](b, arguments)
            }
        }
        function V(a, b, c) {
            V = Function[L].bind && -1 != Function[L].bind[oa]()[H](vb) ? $b : ac;
            return V[F](null, arguments)
        }
        function bc(a, b) {
            var c = p[L][sa][M](arguments, 1);
            return function() {
                var b = c[sa]();
                b[G][F](b, arguments);
                return a[F](this, b)
            }
        }
        function cc(a, b) {
            function c() {
            }
            c.prototype = b[L];
            a.kb = b[L];
            a.prototype = new c
        }
        ;
        function dc(a, b) {
            if (b)
                return a[A](ec, Ha)[A](fc, Ja)[A](gc, Ia)[A](hc, Ka);
            if (!ic.test(a))
                return a;
            -1 != a[H](Ga) && (a = a[A](ec, Ha));
            -1 != a[H](Pa) && (a = a[A](fc, Ja));
            -1 != a[H](Qa) && (a = a[A](gc, Ia));
            -1 != a[H](Da) && (a = a[A](hc, Ka));
            return a
        }
        var ec = /&/g, fc = /</g, gc = />/g, hc = /\"/g, ic = /[&<>\"]/;
        var W = p[L], jc = W[H] ? function(a, b, c) {
            return W[H][M](a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? l.max(0, a[K] + c) : c;
            if (U(a))
                return U(b) && 1 == b[K] ? a[H](b, c) : -1;
            for (; c < a[K]; c++)
                if (c in a && a[c] === b)
                    return c;
            return-1
        }, kc = W.forEach ? function(a, b, c) {
            W.forEach[M](a, b, c)
        } : function(a, b, c) {
            for (var d = a[K], e = U(a) ? a[B](N) : a, f = 0; f < d; f++)
                f in e && b[M](c, e[f], f, a)
        }, lc = W.filter ? function(a, b, c) {
            return W.filter[M](a, b, c)
        } : function(a, b, c) {
            for (var d = a[K], e = [], f = 0, k = U(a) ? a[B](N) : a, m = 0; m < d; m++)
                if (m in k) {
                    var q = k[m];
                    b[M](c, q, m, a) &&
                            (e[f++] = q)
                }
            return e
        }, mc = W.map ? function(a, b, c) {
            return W.map[M](a, b, c)
        } : function(a, b, c) {
            for (var d = a[K], e = p(d), f = U(a) ? a[B](N) : a, k = 0; k < d; k++)
                k in f && (e[k] = b[M](c, f[k], k, a));
            return e
        }, nc = W.reduce ? function(a, b, c, d) {
            d && (b = V(b, d));
            return W.reduce[M](a, b, c)
        } : function(a, b, c, d) {
            var e = c;
            kc(a, function(c, k) {
                e = b[M](d, e, c, k, a)
            });
            return e
        };
        function oc(a) {
            return W.concat[F](W, arguments)
        }
        function pc(a) {
            var b = a[K];
            if (0 < b) {
                for (var c = p(b), d = 0; d < b; d++)
                    c[d] = a[d];
                return c
            }
            return[]
        }
        function qc(a, b) {
            for (var c = 1; c < arguments[K]; c++) {
                var d = arguments[c], e;
                if (T(d) == O || (e = Vb(d)) && g[L][D][M](d, Wa))
                    a[G][F](a, d);
                else if (e)
                    for (var f = a[K], k = d[K], m = 0; m < k; m++)
                        a[f + m] = d[m];
                else
                    a[G](d)
            }
        }
        function rc(a, b, c) {
            return 2 >= arguments[K] ? W[sa][M](a, b) : W[sa][M](a, b, c)
        }
        function sc(a, b) {
            W.sort[M](a, b || tc)
        }
        function tc(a, b) {
            return a > b ? 1 : a < b ? -1 : 0
        }
        function uc(a, b) {
            for (var c = [], d = 0; d < b; d++)
                c[d] = a;
            return c
        }
        ;
        function vc(a, b, c) {
            for (var d in a)
                b[M](c, a[d], d, a)
        }
        function wc(a) {
            var b = [], c = 0, d;
            for (d in a)
                b[c++] = a[d];
            return b
        }
        function xc(a) {
            var b = {}, c;
            for (c in a)
                b[c] = a[c];
            return b
        }
        var yc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
        function zc(a, b) {
            for (var c, d, e = 1; e < arguments[K]; e++) {
                d = arguments[e];
                for (c in d)
                    a[c] = d[c];
                for (var f = 0; f < yc[K]; f++)
                    c = yc[f], g[L][D][M](d, c) && (a[c] = d[c])
            }
        }
        ;
        function Ac(a) {
            this.Z = uc({}, a);
            this.K = uc({}, a)
        }
        Ac[L].Ba = function(a, b) {
            var c = this.Z[K];
            this.Z[a] = b;
            for (var d = a; d < c; ++d)
                this.K[d] = this.Y(0 == d ? {} : this.K[d - 1], this.Z[d])
        };
        Ac[L].Ea = function(a) {
            var b = T(a);
            return b != Q && b != O || b == Q && T(a.clone) == P || Wb(a) && typeof a.getFullYear == P
        };
        Ac[L].Y = function(a, b) {
            if (this.Ea(b) || this.Ea(a) || T(b) == O)
                return b;
            if (T(a) == Q) {
                var c = xc(a);
                vc(b, function(b, e) {
                    c[e] = e in a && null != a[e] ? this.Y(a[e], b) : b
                }, this)
            } else
                c = pc(a), vc(b, function(b, e) {
                    c[e] = this.Y(a[e], b)
                }, this);
            return c
        };
        Ac[L].compact = function() {
            return this.K[this.K[K] - 1]
        };
        function Bc() {
        }
        R = Bc[L];
        R.Da = !1;
        R.ca = function() {
            this.Da || (this.Da = !0, this.ba())
        };
        R.za = function(a) {
            this.lb(bc(Cc, a))
        };
        R.lb = function(a, b) {
            this.A || (this.A = []);
            this.A[G](V(a, b))
        };
        R.ba = function() {
            if (this.A)
                for (; this.A[K]; )
                    this.A.shift()()
        };
        function Cc(a) {
            a && typeof a.ca == P && a.ca()
        }
        ;
        function Dc(a, b) {
            this.m = a;
            this.hb = b
        }
        cc(Dc, Bc);
        var Ec = [];
        R = Dc[L];
        R.Ga = null;
        R.L = null;
        R.qb = function(a) {
            this.m = a
        };
        R.getName = function() {
            return this.hb
        };
        R.getParent = function() {
            return this.Ga
        };
        R.g = function() {
            return this.L || Ec
        };
        R.D = function() {
            var a = this.g();
            return nc(a, function(a, c) {
                return l.max(a, c.D())
            }, -1) + 1
        };
        R.Ya = function() {
            for (var a = [], b = this[y](); b; )
                a[G](b), b = b[y]();
            return a
        };
        R.contains = function(a) {
            do
                a = a[y]();
            while (a && a != this);
            return Boolean(a)
        };
        R.J = function(a, b) {
            function c(d, e) {
                !1 !== a[M](b, d, e) && kc(d.g(), function(a) {
                    c(a, e + 1)
                })
            }
            c(this, 0)
        };
        R.find = function(a, b) {
            var c = [];
            this.J(function(d) {
                a[M](b, d) && c[G](d)
            });
            return c
        };
        R.gb = function(a) {
            this.Ga = a
        };
        R.wa = function(a) {
            a[y]();
            a.gb(this);
            this.L = this.L || [];
            this.L[G](a);
            this.za(a)
        };
        function Fc(a, b, c) {
            Dc[M](this, c, a);
            this.l = b
        }
        cc(Fc, Dc);
        R = Fc[L];
        R.ab = function(a) {
            this.qb(a)
        };
        R.getDataTable = function() {
            return this.l
        };
        R.bb = function() {
            return this.getFormattedValue(0) || this[ja]()
        };
        R.getRowProperty = function(a) {
            return this.$(this.l.getRowProperty, a)
        };
        R.getValue = function(a) {
            return this.$(this.l.getValue, a)
        };
        R.getFormattedValue = function(a) {
            return this.$(this.l.getFormattedValue, a)
        };
        R.$ = function(a, b) {
            var c = this.m;
            return null != c ? (c = [c], qc(c, rc(arguments, 1)), a[F](this.l, c)) : null
        };
        function Gc() {
            this.v = [];
            this.Aa = {}
        }
        cc(Gc, Bc);
        R = Gc[L];
        R.xa = function(a) {
            this.v[G](a);
            this.za(a);
            this.S(a)
        };
        R.S = function(a) {
            var b = a.m;
            null != b && (this.Aa[b] = a)
        };
        R.r = function(a) {
            return this.Aa[a] || null
        };
        R.D = function() {
            return nc(this.v, function(a, b) {
                return l.max(a, b.D())
            }, -1)
        };
        R.J = function(a, b) {
            for (var c = this.v, d = 0; d < c[K]; d++)
                c[d].J(a, b)
        };
        R.find = function(a, b) {
            for (var c = [], d = this.v, e = 0; e < d[K]; e++)
                qc(c, d[e].find(a, b));
            return c
        };
        function Hc(a, b) {
            Gc[M](this);
            if (2 > a.getNumberOfColumns())
                throw t("Data table should have at least 2 columns");
            if (a.getColumnType(0) != Lb)
                throw t("Column 0 must be of type string");
            if (a.getColumnType(1) != Lb)
                throw t("Column 1 must be of type string");
            for (var c = this.$a(b), d = c.pa, e = c.qa, c = c.ra, f = {}, k = [], m = 0; m < a.getNumberOfRows(); m++) {
                var q = a.getValue(m, 0);
                if (q) {
                    var r = f[q];
                    r ? null != r.m || r.ab(m) : (f[q] = r = new Fc(q, a, m), k[G](r));
                    if (q = r.getValue(1)) {
                        var n = f[q];
                        n || (f[q] = n = new Fc(q, a, null), k[G](n));
                        if (r[y]()) {
                            if (e)
                                throw t("More than one row with the same id (" +
                                        r[ja]() + ").");
                        } else if (r != n && !r[qa](n))
                            n.wa(r);
                        else if (d)
                            throw t("Data contains a cycle: " + this.Za(oc(n, n.Ya())) + Na);
                    }
                }
            }
            for (d = 0; d < k[K]; d++) {
                r = k[d];
                if (c && null === r.m)
                    throw t('Failed to find row with id "' + r[ja]() + '".');
                r[y]() ? this.S(r) : this.xa(r)
            }
        }
        cc(Hc, Gc);
        Hc[L].Za = function(a) {
            return mc(a, function(a) {
                return a[ja]()
            })[oa]()
        };
        Hc[L].$a = function(a) {
            var b = new Ac(2);
            b.Ba(0, {pa: !0, qa: !0, ra: !0});
            null != a && b.Ba(1, a);
            return b.compact()
        };
        function Ic(a, b, c) {
            Gc[M](this);
            a = a.v;
            for (var d = 0; d < a[K]; d++) {
                var e = this.ya(a[d], b, c);
                this.xa(e)
            }
        }
        cc(Ic, Gc);
        Ic[L].ya = function(a, b, c) {
            var d = b[M](c, a);
            a = a.g();
            for (var e = 0; e < a[K]; e++) {
                var f = this.ya(a[e], b, c);
                this.S(f);
                d.wa(f)
            }
            return d
        };
        var Jc = "StopIteration"in S ? S.StopIteration : t("StopIteration");
        function Kc() {
        }
        Kc[L].next = function() {
            throw Jc;
        };
        Kc[L].w = function() {
            return this
        };
        function Lc(a) {
            if (a instanceof Kc)
                return a;
            if (typeof a.w == P)
                return a.w(!1);
            if (Vb(a)) {
                var b = 0, c = new Kc;
                c.next = function() {
                    for (; ; ) {
                        if (b >= a[K])
                            throw Jc;
                        if (b in a)
                            return a[b++];
                        b++
                    }
                };
                return c
            }
            throw t("Not implemented");
        }
        function Mc(a, b, c) {
            if (Vb(a))
                try {
                    kc(a, b, c)
                } catch (d) {
                    if (d !== Jc)
                        throw d;
                }
            else {
                a = Lc(a);
                try {
                    for (; ; )
                        b[M](c, a.next(), void 0, a)
                } catch (e) {
                    if (e !== Jc)
                        throw e;
                }
            }
        }
        ;
        function Nc(a, b) {
            this.b = {};
            this.a = [];
            this.G = this.u = 0;
            var c = arguments[K];
            if (1 < c) {
                if (c % 2)
                    throw t("Uneven number of arguments");
                for (var d = 0; d < c; d += 2)
                    this.set(arguments[d], arguments[d + 1])
            } else
                a && this.X(a)
        }
        R = Nc[L];
        R.i = function() {
            this.H();
            for (var a = [], b = 0; b < this.a[K]; b++)
                a[G](this.b[this.a[b]]);
            return a
        };
        R.fb = function() {
            this.H();
            return this.a.concat()
        };
        R.cb = function(a) {
            return g[L][D][M](this.b, a)
        };
        R.remove = function(a) {
            return g[L][D][M](this.b, a) ? (delete this.b[a], this.u--, this.G++, this.a[K] > 2 * this.u && this.H(), !0) : !1
        };
        R.H = function() {
            if (this.u != this.a[K]) {
                for (var a = 0, b = 0; a < this.a[K]; ) {
                    var c = this.a[a];
                    g[L][D][M](this.b, c) && (this.a[b++] = c);
                    a++
                }
                this.a.length = b
            }
            if (this.u != this.a[K]) {
                for (var d = {}, b = a = 0; a < this.a[K]; )
                    c = this.a[a], g[L][D][M](d, c) || (this.a[b++] = c, d[c] = 1), a++;
                this.a.length = b
            }
        };
        R.set = function(a, b) {
            g[L][D][M](this.b, a) || (this.u++, this.a[G](a), this.G++);
            this.b[a] = b
        };
        R.X = function(a) {
            var b;
            if (a instanceof Nc)
                b = a.fb(), a = a.i();
            else {
                b = [];
                var c = 0, d;
                for (d in a)
                    b[c++] = d;
                a = wc(a)
            }
            for (c = 0; c < b[K]; c++)
                this.set(b[c], a[c])
        };
        da(R, function() {
            return new Nc(this)
        });
        R.w = function(a) {
            this.H();
            var b = 0, c = this.a, d = this.b, e = this.G, f = this, k = new Kc;
            k.next = function() {
                for (; ; ) {
                    if (e != f.G)
                        throw t("The map has changed since the iterator was created");
                    if (b >= c[K])
                        throw Jc;
                    var k = c[b++];
                    return a ? k : d[k]
                }
            };
            return k
        };
        function Oc(a) {
            if (typeof a.i == P)
                return a.i();
            if (U(a))
                return a[B](N);
            if (Vb(a)) {
                for (var b = [], c = a[K], d = 0; d < c; d++)
                    b[G](a[d]);
                return b
            }
            return wc(a)
        }
        ;
        function X(a) {
            this.b = new Nc;
            a && this.X(a)
        }
        function Pc(a) {
            var b = typeof a;
            return b == Q && a || b == P ? zb + Xb(a) : b.substr(0, 1) + a
        }
        R = X[L];
        R.add = function(a) {
            this.b.set(Pc(a), a)
        };
        R.X = function(a) {
            a = Oc(a);
            for (var b = a[K], c = 0; c < b; c++)
                this.add(a[c])
        };
        R.removeAll = function(a) {
            a = Oc(a);
            for (var b = a[K], c = 0; c < b; c++)
                this.remove(a[c])
        };
        R.remove = function(a) {
            return this.b.remove(Pc(a))
        };
        R.contains = function(a) {
            return this.b.cb(Pc(a))
        };
        R.mb = function(a) {
            var b = this.clone();
            b.removeAll(a);
            return b
        };
        R.i = function() {
            return this.b.i()
        };
        da(R, function() {
            return new X(this)
        });
        R.w = function() {
            return this.b.w(!1)
        };
        function Qc() {
            this.c = new X;
            this.j = new X;
            this.k = new X
        }
        R = Qc[L];
        da(R, function() {
            var a = new Qc;
            a.c = new X(this.c.i());
            a.j = new X(this.j.i());
            a.k = new X(this.k.i());
            return a
        });
        R.Fa = function(a) {
            var b = [];
            Mc(a == Fb ? this.c : this.j, function(a) {
                b[G](u(a, 10))
            });
            return b
        };
        R.R = function() {
            return this.Fa(Fb)
        };
        R.jb = function() {
            return this.Fa($a)
        };
        R.ib = function() {
            var a = [];
            Mc(this.k, function(b) {
                b = b[B](Ma);
                a[G]({row: u(b[0], 10), column: u(b[1], 10)})
            });
            return a
        };
        R.getSelection = function() {
            for (var a = [], b = this.R(), c = this.jb(), d = this.ib(), e = 0; e < b[K]; e++) {
                var f = {};
                f.row = b[e];
                a[G](f)
            }
            for (e = 0; e < c[K]; e++)
                f = {}, f.column = c[e], a[G](f);
            for (e = 0; e < d[K]; e++)
                f = {}, f.row = d[e].row, f.column = d[e].column, a[G](f);
            return a
        };
        R.eb = function(a) {
            return this.c[qa](v(a))
        };
        R.setSelection = function(a) {
            var b = new X, c = new X, d = new X;
            a || (a = []);
            for (var e = 0; e < a[K]; e++) {
                var f = a[e];
                null != f.row && null != f.column ? d.add(v(f.row + Ma + f.column)) : null != f.row ? b.add(v(f.row)) : null != f.column && c.add(v(f.column))
            }
            var k = this.q(b, this.c), m = this.q(c, this.j), q = this.q(d, this.k);
            a = this.q(this.c, b);
            e = this.q(this.j, c);
            f = this.q(this.k, d);
            this.c = b;
            this.j = c;
            this.k = d;
            b = new Qc;
            b.c = k;
            b.j = m;
            b.k = q;
            c = new Qc;
            c.c = a;
            c.j = e;
            c.k = f;
            return new Rc(b, c)
        };
        R.q = function(a, b) {
            return a.mb(b)
        };
        function Rc(a, b) {
            this.Ra = a;
            this.Sa = b
        }
        ;
        var Sc = {aliceblue: "#f0f8ff", antiquewhite: "#faebd7", aqua: "#00ffff", aquamarine: "#7fffd4", azure: "#f0ffff", beige: "#f5f5dc", bisque: "#ffe4c4", black: "#000000", blanchedalmond: "#ffebcd", blue: "#0000ff", blueviolet: "#8a2be2", brown: "#a52a2a", burlywood: "#deb887", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkgray: "#a9a9a9", darkgreen: "#006400",
            darkgrey: "#a9a9a9", darkkhaki: "#bdb76b", darkmagenta: "#8b008b", darkolivegreen: "#556b2f", darkorange: "#ff8c00", darkorchid: "#9932cc", darkred: "#8b0000", darksalmon: "#e9967a", darkseagreen: "#8fbc8f", darkslateblue: "#483d8b", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", darkturquoise: "#00ced1", darkviolet: "#9400d3", deeppink: "#ff1493", deepskyblue: "#00bfff", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1e90ff", firebrick: "#b22222", floralwhite: "#fffaf0", forestgreen: "#228b22", fuchsia: "#ff00ff", gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff", gold: "#ffd700", goldenrod: "#daa520", gray: "#808080", green: "#008000", greenyellow: "#adff2f", grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", indianred: "#cd5c5c", indigo: "#4b0082", ivory: "#fffff0", khaki: "#f0e68c", lavender: "#e6e6fa", lavenderblush: "#fff0f5", lawngreen: "#7cfc00", lemonchiffon: "#fffacd", lightblue: "#add8e6", lightcoral: "#f08080", lightcyan: "#e0ffff", lightgoldenrodyellow: "#fafad2", lightgray: "#d3d3d3", lightgreen: "#90ee90", lightgrey: "#d3d3d3", lightpink: "#ffb6c1", lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa", lightskyblue: "#87cefa", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#b0c4de", lightyellow: "#ffffe0", lime: "#00ff00", limegreen: "#32cd32", linen: "#faf0e6", magenta: "#ff00ff", maroon: "#800000", mediumaquamarine: "#66cdaa", mediumblue: "#0000cd", mediumorchid: "#ba55d3", mediumpurple: "#9370db", mediumseagreen: "#3cb371", mediumslateblue: "#7b68ee", mediumspringgreen: "#00fa9a", mediumturquoise: "#48d1cc", mediumvioletred: "#c71585", midnightblue: "#191970", mintcream: "#f5fffa", mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5", navajowhite: "#ffdead", navy: "#000080", oldlace: "#fdf5e6", olive: "#808000", olivedrab: "#6b8e23", orange: "#ffa500", orangered: "#ff4500", orchid: "#da70d6", palegoldenrod: "#eee8aa", palegreen: "#98fb98", paleturquoise: "#afeeee", palevioletred: "#db7093", papayawhip: "#ffefd5", peachpuff: "#ffdab9", peru: "#cd853f", pink: "#ffc0cb", plum: "#dda0dd", powderblue: "#b0e0e6", purple: "#800080", red: "#ff0000", rosybrown: "#bc8f8f", royalblue: "#4169e1", saddlebrown: "#8b4513", salmon: "#fa8072", sandybrown: "#f4a460", seagreen: "#2e8b57",
            seashell: "#fff5ee", sienna: "#a0522d", silver: "#c0c0c0", skyblue: "#87ceeb", slateblue: "#6a5acd", slategray: "#708090", slategrey: "#708090", snow: "#fffafa", springgreen: "#00ff7f", steelblue: "#4682b4", tan: "#d2b48c", teal: "#008080", thistle: "#d8bfd8", tomato: "#ff6347", turquoise: "#40e0d0", violet: "#ee82ee", wheat: "#f5deb3", white: "#ffffff", whitesmoke: "#f5f5f5", yellow: "#ffff00", yellowgreen: "#9acd32"};
        function Tc(a) {
            var b = {};
            a = v(a);
            var c = a.charAt(0) == Ea ? a : Ea + a;
            if (Uc.test(c)) {
                a = c;
                if (!Uc.test(a))
                    throw t("'" + a + "' is not a valid hex color");
                4 == a[K] && (a = a[A](Vc, Fa));
                b.ea = a.toLowerCase();
                w(b, mb);
                return b
            }
            t:{
                var d = a.match(Wc);
                if (d) {
                    var c = ba(d[1]), e = ba(d[2]), d = ba(d[3]);
                    if (0 <= c && 255 >= c && 0 <= e && 255 >= e && 0 <= d && 255 >= d) {
                        c = [c, e, d];
                        break t
                    }
                }
                c = []
            }
            if (c[K]) {
                e = c[0];
                a = c[1];
                c = c[2];
                e = ba(e);
                a = ba(a);
                c = ba(c);
                if (isNaN(e) || 0 > e || 255 < e || isNaN(a) || 0 > a || 255 < a || isNaN(c) || 0 > c || 255 < c)
                    throw t('"(' + e + Ma + a + Ma + c + '") is not a valid RGB color');
                e = Xc(e[oa](16));
                a = Xc(a[oa](16));
                c = Xc(c[oa](16));
                b.ea = Ea + e + a + c;
                w(b, Eb);
                return b
            }
            if (Sc && (c = Sc[a.toLowerCase()]))
                return b.ea = c, w(b, ub), b;
            throw t(a + " is not a valid color string");
        }
        var Vc = /#(.)(.)(.)/, Uc = /^#(?:[0-9a-f]{3}){1,2}$/i, Wc = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
        function Xc(a) {
            return 1 == a[K] ? Oa + a : a
        }
        ;
        var Yc, Zc, $c, ad;
        function bd() {
            return S.navigator ? S.navigator.userAgent : null
        }
        ad = $c = Zc = Yc = !1;
        var cd;
        if (cd = bd()) {
            var dd = S.navigator;
            Yc = 0 == cd.lastIndexOf("Opera", 0);
            Zc = !Yc && (-1 != cd[H]("MSIE") || -1 != cd[H]("Trident"));
            $c = !Yc && -1 != cd[H]("WebKit");
            ad = !Yc && !$c && !Zc && "Gecko" == dd.product
        }
        var ed = Yc, Y = Zc, fd = ad, gd = $c;
        function hd() {
            var a = S.document;
            return a ? a.documentMode : void 0
        }
        var id;
        t:{
            var jd = N, kd;
            if (ed && S.opera)
                var ld = S.opera.version, jd = typeof ld == P ? ld() : ld;
            else if (fd ? kd = /rv\:([^\);]+)(\)|;)/ : Y ? kd = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : gd && (kd = /WebKit\/(\S+)/), kd)
                var md = kd.exec(bd()), jd = md ? md[1] : N;
            if (Y) {
                var nd = hd();
                if (nd > parseFloat(jd)) {
                    id = v(nd);
                    break t
                }
            }
            id = jd
        }
        var od = id, pd = {};
        function Z(a) {
            var b;
            if (!(b = pd[a])) {
                b = 0;
                for (var c = v(od)[A](/^[\s\xa0]+|[\s\xa0]+$/g, N)[B](Na), d = v(a)[A](/^[\s\xa0]+|[\s\xa0]+$/g, N)[B](Na), e = l.max(c[K], d[K]), f = 0; 0 == b && f < e; f++) {
                    var k = c[f] || N, m = d[f] || N, q = RegExp(La, db), r = RegExp(La, db);
                    do {
                        var n = q.exec(k) || [N, N, N], s = r.exec(m) || [N, N, N];
                        if (0 == n[0][K] && 0 == s[0][K])
                            break;
                        b = ((0 == n[1][K] ? 0 : u(n[1], 10)) < (0 == s[1][K] ? 0 : u(s[1], 10)) ? -1 : (0 == n[1][K] ? 0 : u(n[1], 10)) > (0 == s[1][K] ? 0 : u(s[1], 10)) ? 1 : 0) || ((0 == n[2][K]) < (0 == s[2][K]) ? -1 : (0 == n[2][K]) > (0 == s[2][K]) ? 1 : 0) || (n[2] < s[2] ?
                                -1 : n[2] > s[2] ? 1 : 0)
                    } while (0 == b)
                }
                b = pd[a] = 0 <= b
            }
            return b
        }
        var qd = S.document, rd = qd && Y ? hd() || ("CSS1Compat" == qd.compatMode ? u(od, 10) : 5) : void 0;
        var sd, td = !Y || Y && 9 <= rd, ud = !fd && !Y || Y && Y && 9 <= rd || fd && Z("1.9.1");
        Y && Z("9");
        function vd(a) {
            a = a.className;
            return U(a) && a.match(/\S+/g) || []
        }
        function wd(a, b) {
            for (var c = vd(a), d = rc(arguments, 1), e = c[K] + d[K], f = c, k = 0; k < d[K]; k++)
                0 <= jc(f, d[k]) || f[G](d[k]);
            f = c.join(wa);
            fa(a, f);
            return c[K] == e
        }
        function xd(a, b) {
            var c = vd(a), d = rc(arguments, 1), e = yd(c, d), f = e.join(wa);
            fa(a, f);
            return e[K] == c[K] - d[K]
        }
        function yd(a, b) {
            return lc(a, function(a) {
                return!(0 <= jc(b, a))
            })
        }
        ;
        function zd(a, b) {
            vc(b, function(b, d) {
                d == Mb ? a[E].cssText = b : d == Ya ? fa(a, b) : d == cb ? a.htmlFor = b : d in Ad ? a.setAttribute(Ad[d], b) : 0 == d.lastIndexOf(Ua, 0) || 0 == d.lastIndexOf(ab, 0) ? a.setAttribute(d, b) : a[d] = b
            })
        }
        var Ad = {cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width"};
        function Bd(a, b, c, d) {
            function e(c) {
                c && b[x](U(c) ? a.createTextNode(c) : c)
            }
            for (; d < c[K]; d++) {
                var f = c[d];
                !Vb(f) || Wb(f) && 0 < f.nodeType ? e(f) : kc(Cd(f) ? pc(f) : f, e)
            }
        }
        function Cd(a) {
            if (a && typeof a[K] == yb) {
                if (Wb(a))
                    return typeof a.item == P || typeof a.item == Lb;
                if (T(a) == P)
                    return typeof a.item == P
            }
            return!1
        }
        function Dd(a) {
            this.da = a || S.document || h
        }
        R = Dd[L];
        R.o = function(a, b, c) {
            var d = this.da, e = arguments, f = e[0], k = e[1];
            if (!td && k && (k.name || k[J])) {
                f = [Pa, f];
                k.name && f[G](Ba, dc(k.name), Da);
                if (k[J]) {
                    f[G](Ca, dc(k[J]), Da);
                    var m = {};
                    zc(m, k);
                    delete m[J];
                    k = m
                }
                f[G](Qa);
                f = f.join(N)
            }
            f = d[ka](f);
            k && (U(k) ? fa(f, k) : T(k) == O ? wd[F](null, [f].concat(k)) : zd(f, k));
            2 < e[K] && Bd(d, f, e, 2);
            return f
        };
        R.createElement = function(a) {
            return this.da[ka](a)
        };
        R.createTextNode = function(a) {
            return this.da.createTextNode(v(a))
        };
        R.appendChild = function(a, b) {
            a[x](b)
        };
        R.fa = function(a) {
            for (var b; b = a.firstChild; )
                a.removeChild(b)
        };
        R.g = function(a) {
            return ud && void 0 != a.children ? a.children : lc(a.childNodes, function(a) {
                return 1 == a.nodeType
            })
        };
        R.contains = function(a, b) {
            if (a[qa] && 1 == b.nodeType)
                return a == b || a[qa](b);
            if ("undefined" != typeof a.compareDocumentPosition)
                return a == b || Boolean(a.compareDocumentPosition(b) & 16);
            for (; b && a != b; )
                b = b.parentNode;
            return b == a
        };
        function Ed(a) {
            return a == wb || a == N || a == Rb ? wb : Tc(a).ea
        }
        ;
        function Fd(a) {
            a = a || {};
            this.ia = wb;
            null != a.fill && this.Ka(a.fill);
            this.ha = 1;
            null != a.P && this.La(a.P);
            this.ga = wb;
            null != a.stroke && this.Na(a.stroke);
            this.oa = 1;
            null != a.na && this.ta(a.na);
            this.ma = 1;
            null != a.Q && this.Pa(a.Q);
            this.la = Jb;
            null != a.ka && this.Oa(a.ka);
            this.f = null;
            a.f && (this.f = xc(a.f), this.f.Ia = Ed(this.f.Ia), this.f.Ja = Ed(this.f.Ja));
            this.ja = null;
            a.pattern && this.Ma(a.pattern)
        }
        R = Fd[L];
        R.getProperties = function() {
            return{fill: this.ia, P: this.ha, stroke: this.ga, na: this.oa, Q: this.ma, ka: this.la, f: this.f ? xc(this.f) : null, pattern: this.ja}
        };
        da(R, function() {
            return new Fd(this.getProperties())
        });
        R.Ka = function(a) {
            this.ia = Ed(a)
        };
        R.La = function(a) {
            this.ha = l.min(l.max(a, 0), 1)
        };
        R.Na = function(a, b) {
            this.ga = Ed(a);
            null != b && this.ta(b)
        };
        R.ta = function(a) {
            this.oa = a
        };
        R.Pa = function(a) {
            this.ma = l.min(l.max(a, 0), 1)
        };
        R.Oa = function(a) {
            this.la = a
        };
        R.Ma = function(a) {
            this.ja = a
        };
        new Fd({P: 0, fill: "white", Q: 0, stroke: "white"});
        function Gd(a) {
            Gd[wa](a);
            return a
        }
        Gd[wa] = function() {
        };
        var Hd = !Y || Y && 9 <= rd, Id = Y && !Z("9");
        !gd || Z("528");
        fd && Z("1.9b") || Y && Z("8") || ed && Z("9.5") || gd && Z("528");
        fd && !Z("8") || Y && Z("9");
        function Jd(a, b) {
            w(this, a);
            this.target = b;
            ea(this, this.target)
        }
        R = Jd[L];
        R.ba = function() {
        };
        R.ca = function() {
        };
        R.aa = !1;
        R.defaultPrevented = !1;
        R.preventDefault = function() {
            this.defaultPrevented = !0
        };
        function Kd(a, b) {
            a && this.nb(a, b)
        }
        cc(Kd, Jd);
        R = Kd[L];
        R.target = null;
        R.relatedTarget = null;
        R.offsetX = 0;
        R.offsetY = 0;
        R.clientX = 0;
        R.clientY = 0;
        R.screenX = 0;
        R.screenY = 0;
        R.button = 0;
        ca(R, 0);
        R.charCode = 0;
        R.ctrlKey = !1;
        R.altKey = !1;
        R.shiftKey = !1;
        R.metaKey = !1;
        R.Ca = null;
        R.nb = function(a, b) {
            var c = w(this, a[J]);
            Jd[M](this, c);
            this.target = a.target || a.srcElement;
            ea(this, b);
            var d = a.relatedTarget;
            if (d) {
                if (fd) {
                    var e;
                    t:{
                        try {
                            Gd(d.nodeName);
                            e = !0;
                            break t
                        } catch (f) {
                        }
                        e = !1
                    }
                    e || (d = null)
                }
            } else
                c == tb ? d = a.fromElement : c == sb && (d = a.toElement);
            this.relatedTarget = d;
            this.offsetX = gd || void 0 !== a.offsetX ? a.offsetX : a.layerX;
            this.offsetY = gd || void 0 !== a.offsetY ? a.offsetY : a.layerY;
            this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
            this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
            this.screenX = a.screenX ||
                    0;
            this.screenY = a.screenY || 0;
            this.button = a.button;
            ca(this, a[la] || 0);
            this.charCode = a.charCode || (c == nb ? a[la] : 0);
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.state = a.state;
            this.Ca = a;
            a.defaultPrevented && this[ia]();
            delete this.aa
        };
        R.preventDefault = function() {
            Kd.kb[ia][M](this);
            var a = this.Ca;
            if (a[ia])
                a[ia]();
            else if (a.returnValue = !1, Id)
                try {
                    (a.ctrlKey || 112 <= a[la] && 123 >= a[la]) && ca(a, -1)
                } catch (b) {
                }
        };
        R.ba = function() {
        };
        var Ld = "closure_listenable_" + (1E6 * l.random() | 0);
        function Md(a) {
            try {
                return!(!a || !a[Ld])
            } catch (b) {
                return!1
            }
        }
        var Nd = 0;
        function Od(a, b, c, d, e, f) {
            this.p = a;
            this.I = b;
            this.src = c;
            w(this, d);
            this.capture = !!e;
            this.W = f;
            this.key = ++Nd;
            this.s = this.U = !1
        }
        Od[L].F = function() {
            this.s = !0;
            this.W = this.src = this.I = this.p = null
        };
        function Pd(a) {
            this.src = a;
            this.d = {};
            this.t = 0
        }
        Pd[L].add = function(a, b, c, d, e) {
            var f = this.d[a];
            f || (f = this.d[a] = [], this.t++);
            var k = Qd(f, b, d, e);
            -1 < k ? (a = f[k], c || (a.U = !1)) : (a = new Od(b, null, this.src, a, !!d, e), a.U = c, f[G](a));
            return a
        };
        Pd[L].remove = function(a, b, c, d) {
            if (!(a in this.d))
                return!1;
            var e = this.d[a];
            b = Qd(e, b, c, d);
            return-1 < b ? (e[b].F(), W.splice[M](e, b, 1), 0 == e[K] && (delete this.d[a], this.t--), !0) : !1
        };
        Pd[L].Xa = function(a) {
            var b = a[J];
            if (!(b in this.d))
                return!1;
            var c = this.d[b], d = jc(c, a), e;
            (e = 0 <= d) && W.splice[M](c, d, 1);
            e && (a.F(), 0 == this.d[b][K] && (delete this.d[b], this.t--));
            return e
        };
        Pd[L].removeAll = function(a) {
            var b = 0, c;
            for (c in this.d)
                if (!a || c == a) {
                    for (var d = this.d[c], e = 0; e < d[K]; e++)
                        ++b, d[e].F();
                    delete this.d[c];
                    this.t--
                }
            return b
        };
        function Qd(a, b, c, d) {
            for (var e = 0; e < a[K]; ++e) {
                var f = a[e];
                if (!f.s && f.p == b && f.capture == !!c && f.W == d)
                    return e
            }
            return-1
        }
        ;
        var Rd = {}, Sd = {}, Td = {};
        function Ud(a, b, c, d, e) {
            if (T(b) == O) {
                for (var f = 0; f < b[K]; f++)
                    Ud(a, b[f], c, d, e);
                return null
            }
            c = Vd(c);
            if (Md(a))
                a = a.sb(b, c, d, e);
            else {
                f = c;
                if (!b)
                    throw t("Invalid event type");
                c = !!d;
                var k = Xb(a), m = Sd[k];
                m || (Sd[k] = m = new Pd(a));
                d = m.add(b, f, !1, d, e);
                d.I || (e = Wd(), d.I = e, e.src = a, e.p = d, a.addEventListener ? a.addEventListener(b, e, c) : a.attachEvent(b in Td ? Td[b] : Td[b] = Ab + b, e), Rd[d.key] = d);
                a = d
            }
            return a
        }
        function Wd() {
            var a = Xd, b = Hd ? function(c) {
                return a[M](b.src, b.p, c)
            } : function(c) {
                c = a[M](b.src, b.p, c);
                if (!c)
                    return c
            };
            return b
        }
        function Yd(a, b, c, d) {
            var e = 1;
            if (a = a[Yb] ? Sd[Xb(a)] || null : null)
                if (b = a.d[b])
                    for (b = pc(b), a = 0; a < b[K]; a++) {
                        var f = b[a];
                        f && f.capture == c && !f.s && (e &= !1 !== Zd(f, d))
                    }
            return Boolean(e)
        }
        function Zd(a, b) {
            var c = a.p, d = a.W || a.src;
            if (a.U && typeof a != yb && a && !a.s) {
                var e = a.src;
                if (Md(e))
                    e.rb(a);
                else {
                    var f = a[J], k = a.I;
                    e.removeEventListener ? e.removeEventListener(f, k, a.capture) : e.detachEvent && e.detachEvent(f in Td ? Td[f] : Td[f] = Ab + f, k);
                    (f = e[Yb] ? Sd[Xb(e)] || null : null) ? (f.Xa(a), 0 == f.t && (f.src = null, delete Sd[Xb(e)])) : a.F();
                    delete Rd[a.key]
                }
            }
            return c[M](d, b)
        }
        function Xd(a, b) {
            if (a.s)
                return!0;
            if (!Hd) {
                var c = b || Ub(Sb), d = new Kd(c, this), e = !0;
                if (!(0 > c[la] || void 0 != c.returnValue)) {
                    t:{
                        var f = !1;
                        if (0 == c[la])
                            try {
                                ca(c, -1);
                                break t
                            } catch (k) {
                                f = !0
                            }
                        if (f || void 0 == c.returnValue)
                            c.returnValue = !0
                    }
                    c = [];
                    for (f = d.currentTarget; f; f = f.parentNode)
                        c[G](f);
                    for (var f = a[J], m = c[K] - 1; !d.aa && 0 <= m; m--)
                        ea(d, c[m]), e &= Yd(c[m], f, !0, d);
                    for (m = 0; !d.aa && m < c[K]; m++)
                        ea(d, c[m]), e &= Yd(c[m], f, !1, d)
                }
                return e
            }
            return Zd(a, new Kd(b, this))
        }
        var $d = "__closure_events_fn_" + (1E9 * l.random() >>> 0);
        function Vd(a) {
            return T(a) == P ? a : a[$d] || (a[$d] = function(b) {
                return a.handleEvent(b)
            })
        }
        ;
        function $(a) {
            this.B = a;
            this.C = {};
            this.l = null;
            this.M = sd || (sd = new Dd);
            this.c = new Qc;
            this.e = null
        }
        t:{
            var ae = Ub("google.loader.GoogleApisBase");
            null != ae || (ae = "//ajax.googleapis.com/ajax");
            var be = Ub("google.visualization.Version");
            null != be || (be = "1.0");
            for (var ce = ae + "/static/modules/gviz/" + be + "/orgchart/orgchart.css", de = h[na]("LINK"), ee = 0; ee < de[K]; ee++)
//                if (de[ee] && de[ee].href && de[ee].href == ce)
                    break t;
            var fe = h[ka]("link");
            fe.href = ce;
            fe.rel = "stylesheet";
            w(fe, "text/css");
            if (0 == h[na]("head")[K]) {
                var ge = h[na]("html")[0], he = h[na]("body")[0], ie = h[ka]("head");
                ge.insertBefore(ie, he)
            }
            h[na]("head")[0][x](fe)
        }
        $[L].T = 0;
        $[L].draw = function(a, b) {
            this.C = b = b || {};
            this.l = a;
            if (!this.B)
                throw t("Container is not defined");
            if (!a)
                throw t("Data table is not defined");
            var c = new Hc(a, {pa: !1, qa: !1, ra: !1});
            this.e = new Ic(c, function(a) {
                return new je(a)
            });
            this.sa(this.e, b)
        };
        function je(a) {
            Dc[M](this, a.m, a[ja]());
            this.n = a.m;
            this.Qa = a.bb();
            this.style = a.getRowProperty(Mb);
            this.Ha = a.getRowProperty(Hb);
            this.label = 3 == a.getDataTable().getNumberOfColumns() ? a.getFormattedValue(2) : null;
            this.N = this.x = null;
            this.collapsed = !1
        }
        cc(je, Dc);
        R = $[L];
        R.sa = function(a, b) {
            this.pb(a, b);
            google[va][ta][ga](this, Db, {})
        };
        R.va = function(a) {
            var b = [];
            this.e.J(function(c, d) {
                d == a && b[G](c);
                return!c[ha] && d < a
            }, this);
            sc(b, function(a, b) {
                return a.n - b.n
            });
            return b
        };
        R.ua = function(a) {
            var b = a.g(), c = b[K];
            if (0 == c)
                a.x = this.T++;
            else {
                for (var d = 0; d < c; d++)
                    this.ua(b[d]);
                a.x = (b[0].x + b[c - 1].x) / 2
            }
        };
        R.pb = function(a, b) {
            var c = this.B;
            this.T = 0;
            for (var d = this.va(0), e = 0; e < d[K]; e++)
                this.ua(d[e]);
            d = b.size;
            d != ob && d != Ib && (d = qb);
            var f = this.M, k = f.o(Nb, {"class": lb, dir: pb, cellpadding: Oa, cellspacing: Oa, align: Xa}), m = f.o(Ob);
            f[x](k, m);
            var q = 8 * this.T - 2, r = f.o(Qb, null);
            f[x](m, r);
            for (var n = 0; n < q; n++) {
                var s = f.o(Pb, {"class": kb + d});
                f[x](r, s)
            }
            r = a.D() + 1;
            for (n = 0; n < r; n++) {
                var ma = this.va(n), z, C;
                if (0 < n) {
                    z = [];
                    for (var I = 0; I < ma[K]; I++)
                        C = ma[I], s = C[y](), e = l[ra](8 * C.x + 3), s.x >= C.x ? ((s = z[e]) || (s = z[e] = {}), s.borderLeft = !0) : ((s = z[--e]) ||
                                (s = z[e] = {}), s.borderRight = !0);
                    this.V(z, q, m, eb + d, d, b)
                }
                z = [];
                for (I = 0; I < ma[K]; I++)
                    C = ma[I], e = l[ra](8 * C.x), (s = z[e]) || (s = z[e] = {}), s.h = C, s.span = 6;
                this.V(z, q, m, ib + d, d, b);
                if (n != r) {
                    z = [];
                    for (I = 0; I < ma[K]; I++) {
                        C = ma[I];
                        var gb = C.g();
                        if (0 < gb[K] && (e = l[ra](8 * C.x + 3), (s = z[e]) || (s = z[e] = {}), s.borderLeft = !0, !C[ha]))
                            for (s = l[ra](8 * gb[0].x + 3), C = l[ra](8 * gb[gb[K] - 1].x + 3), e = s; e < C; e++)
                                (s = z[e]) || (s = z[e] = {}), s.borderBottom = !0
                    }
                    this.V(z, q, m, eb + d, d, b)
                }
            }
            f.fa(c);
            f[x](c, k)
        };
        R.V = function(a, b, c, d, e, f) {
            var k = f.nodeClass || hb, m = this.M;
            d = m.o(Qb, {"class": d});
            m[x](c, d);
            for (c = 0; c < b; c++) {
                var q = a[c], r = m.o(Pb, null);
                if (!q) {
                    for (var q = {empty: !0}, n = c + 1; n < b && !a[n]; )
                        n++;
                    q.span = n - c
                }
                (n = q.span) && 1 < n && (r.colSpan = n, c += n - 1);
                n = N;
                if (q.h) {
                    q.h.N = r;
                    var n = k + Aa + e, s = q.h.n;
                    null != s && (Ud(r, rb, V(this.Ua, this, s)), Ud(r, tb, V(this.Wa, this, s)), Ud(r, sb, V(this.Va, this, s)), this.C.allowCollapse && Ud(r, bb, V(this.Ta, this, s)))
                } else
                    n = fb, q.borderLeft && (n += ya), q.borderRight && (n += za), q.borderBottom && (n += xa);
                n && (fa(r,
                        n), -1 < n[H](k) && (f[ua] && (r[E].background = f[ua]), this.O(r, q.h && q.h[E])));
                n = q.h ? q.h.Qa : Tb;
                q = q.h ? q.h.label : null;
                null != q && (r.title = q);
                f.allowHtml ? r.innerHTML = n : m[x](r, m.createTextNode(n));
                m[x](d, r)
            }
        };
        R.getSelection = function() {
            return this.c.getSelection()
        };
        R.setSelection = function(a) {
            var b = this.C, c = this.c.setSelection(a);
            if (this.B) {
                a = b.selectedNodeClass || jb;
                for (var d = c.Sa.R(), e = 0; e < d[K]; e++) {
                    var f = d[e];
                    if (f = 0 <= f ? this.e.r(f) : null) {
                        var k = f.N;
                        k && (xd(k, a), b[ua] && (k[E].background = b[ua]), this.O(k, f[E]))
                    }
                }
                c = c.Ra.R();
                for (e = 0; e < c[K]; e++)
                    if (f = c[e], f = 0 <= f ? this.e.r(f) : null)
                        if (k = f.N)
                            wd(k, a), b.selectionColor && (k[E].background = b.selectionColor), this.O(k, f.Ha)
            }
        };
        R.Ua = function(a) {
            a = this.c.eb(a) ? null : [{row: a}];
            this.setSelection(a);
            google[va][ta][ga](this, Gb, {})
        };
        R.Wa = function(a) {
            google[va][ta][ga](this, Cb, {row: a})
        };
        R.Va = function(a) {
            google[va][ta][ga](this, Bb, {row: a})
        };
        R.Ta = function(a) {
            this.collapse(a, !this.ob(a))
        };
        R.O = function(a, b) {
            b && (a[E].cssText = b)
        };
        R.ob = function(a) {
            return(a = this.e.r(a)) && a[ha]
        };
        R.getCollapsedNodes = function() {
            var a = this.e.find(function(a) {
                return a[ha]
            });
            return mc(a, function(a) {
                return a.n
            })
        };
        R.getChildrenIndexes = function(a) {
            a = this.e.r(a);
            if (!a)
                return[];
            a = a.g();
            for (var b = [], c = 0; c < a[K]; c++)
                b[G](a[c].n);
            return b
        };
        R.collapse = function(a, b) {
            var c = this.e.r(a);
            c && c.g() && 0 != c.g()[K] && (b && !c[ha] || !b && c[ha]) && (c.collapsed = b, this.M.fa(this.B), this.sa(this.e, this.C), google[va][ta][ga](this, Za, {collapsed: b, n: a}))
        };
        google_exportSymbol("google.visualization.OrgChart", $);
        aa($[L], "draw", $[L].draw);
        aa($[L], "getSelection", $[L].getSelection);
        aa($[L], "setSelection", $[L].setSelection);
        aa($[L], "getChildrenIndexes", $[L].getChildrenIndexes);
        aa($[L], "getCollapsedNodes", $[L].getCollapsedNodes);
        aa($[L], Za, $[L].collapse);
    })();
//    google.loader.loaded({"module": "visualization", "version": "1.0", "components": ["default", "format", "orgchart"]});
//    google.loader.eval.visualization = function() {
//        eval(arguments[0]);
//    };
//    if (google.loader.eval.scripts && google.loader.eval.scripts['visualization']) {
//        (function() {
//            var scripts = google.loader.eval.scripts['visualization'];
//            for (var i = 0; i < scripts.length; i++) {
//                google.loader.eval.visualization(scripts[i]);
//            }
//        })();
//        google.loader.eval.scripts['visualization'] = null;
//    }
})();