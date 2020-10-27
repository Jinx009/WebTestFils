/*! chevrotain - v4.6.0 */
!function (t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("chevrotain", [], e) : "object" == typeof exports ? exports.chevrotain = e() : t.chevrotain = e();
}("undefined" != typeof self ? self : this, function () {
  return function (t) {
    var e = {};function n(r) {
      if (e[r]) return e[r].exports;var i = e[r] = { i: r, l: !1, exports: {} };return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }return n.m = t, n.c = e, n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }, n.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
    }, n.t = function (t, e) {
      if (1 & e && (t = n(t)), 8 & e) return t;if (4 & e && "object" == typeof t && t && t.__esModule) return t;var r = Object.create(null);if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var i in t) n.d(r, i, function (e) {
        return t[e];
      }.bind(null, i));return r;
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };return n.d(e, "a", e), e;
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "", n(n.s = 18);
  }([function (t, e, n) {
    "use strict";
    function r(t) {
      return t && 0 === t.length;
    }function i(t) {
      return null == t ? [] : Object.keys(t);
    }function o(t) {
      for (var e = [], n = Object.keys(t), r = 0; r < n.length; r++) e.push(t[n[r]]);return e;
    }function a(t, e) {
      for (var n = [], r = i(t), o = 0; o < r.length; o++) {
        var a = r[o];n.push(e.call(null, t[a], a));
      }return n;
    }function s(t, e) {
      for (var n = [], r = 0; r < t.length; r++) n.push(e.call(null, t[r], r));return n;
    }function u(t) {
      for (var e = [], n = 0; n < t.length; n++) {
        var r = t[n];Array.isArray(r) ? e = e.concat(u(r)) : e.push(r);
      }return e;
    }function c(t) {
      return r(t) ? void 0 : t[0];
    }function p(t) {
      var e = t && t.length;return e ? t[e - 1] : void 0;
    }function l(t, e) {
      if (Array.isArray(t)) for (var n = 0; n < t.length; n++) e.call(null, t[n], n);else {
        if (!C(t)) throw Error("non exhaustive match");var r = i(t);for (n = 0; n < r.length; n++) {
          var o = r[n],
              a = t[o];e.call(null, a, o);
        }
      }
    }function h(t) {
      return "string" == typeof t;
    }function f(t) {
      return void 0 === t;
    }function d(t) {
      return t instanceof Function;
    }function E(t, e) {
      return void 0 === e && (e = 1), t.slice(e, t.length);
    }function m(t, e) {
      return void 0 === e && (e = 1), t.slice(0, t.length - e);
    }function y(t, e) {
      var n = [];if (Array.isArray(t)) for (var r = 0; r < t.length; r++) {
        var i = t[r];e.call(null, i) && n.push(i);
      }return n;
    }function T(t, e) {
      return y(t, function (t) {
        return !e(t);
      });
    }function v(t, e) {
      for (var n = Object.keys(t), r = {}, i = 0; i < n.length; i++) {
        var o = n[i],
            a = t[o];e(a) && (r[o] = a);
      }return r;
    }function g(t, e) {
      return !!C(t) && t.hasOwnProperty(e);
    }function _(t, e) {
      return void 0 !== N(t, function (t) {
        return t === e;
      });
    }function R(t) {
      for (var e = [], n = 0; n < t.length; n++) e.push(t[n]);return e;
    }function A(t) {
      var e = {};for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);return e;
    }function N(t, e) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];if (e.call(null, r)) return r;
      }
    }function O(t, e) {
      for (var n = [], r = 0; r < t.length; r++) {
        var i = t[r];e.call(null, i) && n.push(i);
      }return n;
    }function S(t, e, n) {
      for (var r = Array.isArray(t), a = r ? t : o(t), s = r ? [] : i(t), u = n, c = 0; c < a.length; c++) u = e.call(null, u, a[c], r ? c : s[c]);return u;
    }function I(t) {
      return T(t, function (t) {
        return null == t;
      });
    }function L(t, e) {
      void 0 === e && (e = function (t) {
        return t;
      });var n = [];return S(t, function (t, r) {
        var i = e(r);return _(n, i) ? t : (n.push(i), t.concat(r));
      }, []);
    }function k(t) {
      for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];var r = [null].concat(e);return Function.bind.apply(t, r);
    }function P(t) {
      return Array.isArray(t);
    }function x(t) {
      return t instanceof RegExp;
    }function C(t) {
      return t instanceof Object;
    }function M(t, e) {
      for (var n = 0; n < t.length; n++) if (!e(t[n], n)) return !1;return !0;
    }function F(t, e) {
      return T(t, function (t) {
        return _(e, t);
      });
    }function b(t, e) {
      for (var n = 0; n < t.length; n++) if (e(t[n])) return !0;return !1;
    }function D(t, e) {
      for (var n = 0; n < t.length; n++) if (t[n] === e) return n;return -1;
    }function w(t, e) {
      var n = R(t);return n.sort(function (t, n) {
        return e(t) - e(n);
      }), n;
    }function U(t, e) {
      if (t.length !== e.length) throw Error("can't zipObject with different number of keys and values!");for (var n = {}, r = 0; r < t.length; r++) n[t[r]] = e[r];return n;
    }function G(t) {
      for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];for (var r = 0; r < e.length; r++) for (var o = e[r], a = i(o), s = 0; s < a.length; s++) {
        var u = a[s];t[u] = o[u];
      }return t;
    }function B(t) {
      for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];for (var r = 0; r < e.length; r++) {
        var o = e[r];if (!f(o)) for (var a = i(o), s = 0; s < a.length; s++) {
          var u = a[s];g(t, u) || (t[u] = o[u]);
        }
      }return t;
    }function K() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];return B.apply(null, [{}].concat(t));
    }function W(t, e) {
      var n = {};return l(t, function (t) {
        var r = e(t),
            i = n[r];i ? i.push(t) : n[r] = [t];
      }), n;
    }function j(t, e) {
      for (var n = A(t), r = i(e), o = 0; o < r.length; o++) {
        var a = r[o],
            s = e[a];n[a] = s;
      }return n;
    }function V() {}function Y(t) {
      return t;
    }function H(t) {
      for (var e = [], n = 0; n < t.length; n++) {
        var r = t[n];e.push(void 0 !== r ? r : void 0);
      }return e;
    }function X(t) {
      console && console.error && console.error("Error: " + t);
    }function z(t) {
      console && console.warn && console.warn("Warning: " + t);
    }function q() {
      return "function" == typeof Map;
    }function $(t, e) {
      e.forEach(function (e) {
        var n = e.prototype;Object.getOwnPropertyNames(n).forEach(function (r) {
          if ("constructor" !== r) {
            var i = Object.getOwnPropertyDescriptor(n, r);i && (i.get || i.set) ? Object.defineProperty(t.prototype, r, i) : t.prototype[r] = e.prototype[r];
          }
        });
      });
    }function Z(t) {
      function e() {}e.prototype = t;var n = new e();function r() {
        return typeof n.bar;
      }return r(), r(), t;
    }Object.defineProperty(e, "__esModule", { value: !0 }), e.isEmpty = r, e.keys = i, e.values = o, e.mapValues = a, e.map = s, e.flatten = u, e.first = c, e.last = p, e.forEach = l, e.isString = h, e.isUndefined = f, e.isFunction = d, e.drop = E, e.dropRight = m, e.filter = y, e.reject = T, e.pick = v, e.has = g, e.contains = _, e.cloneArr = R, e.cloneObj = A, e.find = N, e.findAll = O, e.reduce = S, e.compact = I, e.uniq = L, e.partial = k, e.isArray = P, e.isRegExp = x, e.isObject = C, e.every = M, e.difference = F, e.some = b, e.indexOf = D, e.sortBy = w, e.zipObject = U, e.assign = G, e.assignNoOverwrite = B, e.defaults = K, e.groupBy = W, e.merge = j, e.NOOP = V, e.IDENTITY = Y, e.packArray = H, e.PRINT_ERROR = X, e.PRINT_WARNING = z, e.isES2015MapSupported = q, e.applyMixins = $, e.toFastProperties = Z;
  }, function (t, e, n) {
    "use strict";
    var r,
        i = this && this.__extends || (r = function (t, e) {
      return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
      })(t, e);
    }, function (t, e) {
      function n() {
        this.constructor = t;
      }r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
    });Object.defineProperty(e, "__esModule", { value: !0 });var o = n(0),
        a = n(2),
        s = function () {
      function t(t) {
        this.definition = t;
      }return t.prototype.accept = function (t) {
        t.visit(this), o.forEach(this.definition, function (e) {
          e.accept(t);
        });
      }, t;
    }();e.AbstractProduction = s;var u = function (t) {
      function e(e) {
        var n = t.call(this, []) || this;return n.idx = 1, o.assign(n, o.pick(e, function (t) {
          return void 0 !== t;
        })), n;
      }return i(e, t), Object.defineProperty(e.prototype, "definition", { get: function () {
          return void 0 !== this.referencedRule ? this.referencedRule.definition : [];
        }, set: function (t) {}, enumerable: !0, configurable: !0 }), e.prototype.accept = function (t) {
        t.visit(this);
      }, e;
    }(s);e.NonTerminal = u;var c = function (t) {
      function e(e) {
        var n = t.call(this, e.definition) || this;return n.orgText = "", o.assign(n, o.pick(e, function (t) {
          return void 0 !== t;
        })), n;
      }return i(e, t), e;
    }(s);e.Rule = c;var p = function (t) {
      function e(e) {
        var n = t.call(this, e.definition) || this;return o.assign(n, o.pick(e, function (t) {
          return void 0 !== t;
        })), n;
      }return i(e, t), e;
    }(s);e.Flat = p;var l = function (t) {
      function e(e) {
        var n = t.call(this, e.definition) || this;return n.idx = 1, o.assign(n, o.pick(e, function (t) {
          return void 0 !== t;
        })), n;
      }return i(e, t), e;
    }(s);e.Option = l;var h = function (t) {
      function e(e) {
        var n = t.call(this, e.definition) || this;return n.idx = 1, o.assign(n, o.pick(e, function (t) {
          return void 0 !== t;
        })), n;
      }return i(e, t), e;
    }(s);e.RepetitionMandatory = h;var f = function (t) {
      function e(e) {
        var n = t.call(this, e.definition) || this;return n.idx = 1, o.assign(n, o.pick(e, function (t) {
          return void 0 !== t;
        })), n;
      }return i(e, t), e;
    }(s);e.RepetitionMandatoryWithSeparator = f;var d = function (t) {
      function e(e) {
        var n = t.call(this, e.definition) || this;return n.idx = 1, o.assign(n, o.pick(e, function (t) {
          return void 0 !== t;
        })), n;
      }return i(e, t), e;
    }(s);e.Repetition = d;var E = function (t) {
      function e(e) {
        var n = t.call(this, e.definition) || this;return n.idx = 1, o.assign(n, o.pick(e, function (t) {
          return void 0 !== t;
        })), n;
      }return i(e, t), e;
    }(s);e.RepetitionWithSeparator = E;var m = function (t) {
      function e(e) {
        var n = t.call(this, e.definition) || this;return n.idx = 1, o.assign(n, o.pick(e, function (t) {
          return void 0 !== t;
        })), n;
      }return i(e, t), e;
    }(s);e.Alternation = m;var y = function () {
      function t(t) {
        this.idx = 1, o.assign(this, o.pick(t, function (t) {
          return void 0 !== t;
        }));
      }return t.prototype.accept = function (t) {
        t.visit(this);
      }, t;
    }();function T(t) {
      function e(t) {
        return o.map(t, T);
      }if (t instanceof u) return { type: "NonTerminal", name: t.nonTerminalName, idx: t.idx };if (t instanceof p) return { type: "Flat", definition: e(t.definition) };if (t instanceof l) return { type: "Option", idx: t.idx, definition: e(t.definition) };if (t instanceof h) return { type: "RepetitionMandatory", name: t.name, idx: t.idx, definition: e(t.definition) };if (t instanceof f) return { type: "RepetitionMandatoryWithSeparator", name: t.name, idx: t.idx, separator: T(new y({ terminalType: t.separator })), definition: e(t.definition) };if (t instanceof E) return { type: "RepetitionWithSeparator", name: t.name, idx: t.idx, separator: T(new y({ terminalType: t.separator })), definition: e(t.definition) };if (t instanceof d) return { type: "Repetition", name: t.name, idx: t.idx, definition: e(t.definition) };if (t instanceof m) return { type: "Alternation", name: t.name, idx: t.idx, definition: e(t.definition) };if (t instanceof y) {
        var n = { type: "Terminal", name: a.tokenName(t.terminalType), label: a.tokenLabel(t.terminalType), idx: t.idx },
            r = t.terminalType.PATTERN;return t.terminalType.PATTERN && (n.pattern = o.isRegExp(r) ? r.source : r), n;
      }if (t instanceof c) return { type: "Rule", name: t.name, orgText: t.orgText, definition: e(t.definition) };throw Error("non exhaustive match");
    }e.Terminal = y, e.serializeGrammar = function (t) {
      return o.map(t, T);
    }, e.serializeProduction = T;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = n(0),
        i = n(4),
        o = n(15),
        a = n(7);function s(t) {
      return r.isString(t.LABEL) && "" !== t.LABEL;
    }function u(t) {
      return r.isObject(t) && t.hasOwnProperty("tokenName") && r.isString(t.tokenName) ? t.tokenName : i.functionName(t);
    }e.tokenLabel = function (t) {
      return s(t) ? t.LABEL : u(t);
    }, e.hasTokenLabel = s, e.tokenName = u;var c = "parent",
        p = "categories",
        l = "label",
        h = "group",
        f = "push_mode",
        d = "pop_mode",
        E = "longer_alt",
        m = "line_breaks",
        y = "start_chars_hint";function T(t) {
      return function (t) {
        var e = t.name,
            n = t.pattern,
            o = {};i.defineNameProp(o, e) || (o.tokenName = e);r.isUndefined(n) || (o.PATTERN = n);if (r.has(t, c)) throw "The parent property is no longer supported.\nSee: https://github.com/SAP/chevrotain/issues/564#issuecomment-349062346 for details.";r.has(t, p) && (o.CATEGORIES = t[p]);a.augmentTokenTypes([o]), r.has(t, l) && (o.LABEL = t[l]);r.has(t, h) && (o.GROUP = t[h]);r.has(t, d) && (o.POP_MODE = t[d]);r.has(t, f) && (o.PUSH_MODE = t[f]);r.has(t, E) && (o.LONGER_ALT = t[E]);r.has(t, m) && (o.LINE_BREAKS = t[m]);r.has(t, y) && (o.START_CHARS_HINT = t[y]);return o;
      }(t);
    }e.createToken = T, e.EOF = T({ name: "EOF", pattern: o.Lexer.NA }), a.augmentTokenTypes([e.EOF]), e.createTokenInstance = function (t, e, n, r, i, o, a, s) {
      return { image: e, startOffset: n, endOffset: r, startLine: i, endLine: o, startColumn: a, endColumn: s, tokenTypeIdx: t.tokenTypeIdx, tokenType: t };
    }, e.tokenMatcher = function (t, e) {
      return a.tokenStructuredMatcher(t, e);
    };
  }, function (t, e, n) {
    "use strict";
    var r,
        i = this && this.__extends || (r = function (t, e) {
      return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
      })(t, e);
    }, function (t, e) {
      function n() {
        this.constructor = t;
      }r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
    });Object.defineProperty(e, "__esModule", { value: !0 });var o = n(4),
        a = n(0),
        s = n(26),
        u = n(2),
        c = n(23),
        p = n(16),
        l = n(10),
        h = n(24),
        f = n(25),
        d = n(31),
        E = n(32),
        m = n(34),
        y = n(35),
        T = n(36),
        v = n(37),
        g = n(38);e.END_OF_FILE = u.createTokenInstance(u.EOF, "", NaN, NaN, NaN, NaN, NaN, NaN), Object.freeze(e.END_OF_FILE), e.DEFAULT_PARSER_CONFIG = Object.freeze({ recoveryEnabled: !1, maxLookahead: 4, ignoredIssues: {}, dynamicTokensEnabled: !1, outputCst: !0, errorMessageProvider: l.defaultParserErrorProvider, serializedGrammar: null }), e.DEFAULT_RULE_CONFIG = Object.freeze({ recoveryValueFunc: function () {}, resyncEnabled: !0 }), function (t) {
      t[t.INVALID_RULE_NAME = 0] = "INVALID_RULE_NAME", t[t.DUPLICATE_RULE_NAME = 1] = "DUPLICATE_RULE_NAME", t[t.INVALID_RULE_OVERRIDE = 2] = "INVALID_RULE_OVERRIDE", t[t.DUPLICATE_PRODUCTIONS = 3] = "DUPLICATE_PRODUCTIONS", t[t.UNRESOLVED_SUBRULE_REF = 4] = "UNRESOLVED_SUBRULE_REF", t[t.LEFT_RECURSION = 5] = "LEFT_RECURSION", t[t.NONE_LAST_EMPTY_ALT = 6] = "NONE_LAST_EMPTY_ALT", t[t.AMBIGUOUS_ALTS = 7] = "AMBIGUOUS_ALTS", t[t.CONFLICT_TOKENS_RULES_NAMESPACE = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE", t[t.INVALID_TOKEN_NAME = 9] = "INVALID_TOKEN_NAME", t[t.INVALID_NESTED_RULE_NAME = 10] = "INVALID_NESTED_RULE_NAME", t[t.DUPLICATE_NESTED_NAME = 11] = "DUPLICATE_NESTED_NAME", t[t.NO_NON_EMPTY_LOOKAHEAD = 12] = "NO_NON_EMPTY_LOOKAHEAD", t[t.AMBIGUOUS_PREFIX_ALTS = 13] = "AMBIGUOUS_PREFIX_ALTS", t[t.TOO_MANY_ALTS = 14] = "TOO_MANY_ALTS";
    }(e.ParserDefinitionErrorType || (e.ParserDefinitionErrorType = {})), e.EMPTY_ALT = function (t) {
      return void 0 === t && (t = void 0), function () {
        return t;
      };
    };var _ = function () {
      function t(t, n) {
        void 0 === n && (n = e.DEFAULT_PARSER_CONFIG), this.ignoredIssues = e.DEFAULT_PARSER_CONFIG.ignoredIssues, this.definitionErrors = [], this.selfAnalysisDone = !1;this.initErrorHandler(n), this.initLexerAdapter(), this.initLooksAhead(n), this.initRecognizerEngine(t, n), this.initRecoverable(n), this.initTreeBuilder(n), this.initContentAssist(), this.ignoredIssues = a.has(n, "ignoredIssues") ? n.ignoredIssues : e.DEFAULT_PARSER_CONFIG.ignoredIssues, a.toFastProperties(this);
      }return t.performSelfAnalysis = function (t) {
        t.performSelfAnalysis();
      }, t.prototype.performSelfAnalysis = function () {
        var e,
            n = this;this.selfAnalysisDone = !0;var r = o.classNameFromInstance(this),
            i = this.gastProductionsCache;if (this.serializedGrammar) {
          var u = c.deserializeGrammar(this.serializedGrammar, this.tokensMap);a.forEach(u, function (t) {
            n.gastProductionsCache.put(t.name, t);
          });
        }var f = h.resolveGrammar({ rules: i.values() });if (this.definitionErrors.push.apply(this.definitionErrors, f), a.isEmpty(f)) {
          var d = h.validateGrammar({ rules: i.values(), maxLookahead: this.maxLookahead, tokenTypes: a.values(this.tokensMap), ignoredIssues: this.ignoredIssues, errMsgProvider: l.defaultGrammarValidatorErrorProvider, grammarName: r });this.definitionErrors.push.apply(this.definitionErrors, d);
        }if (a.isEmpty(this.definitionErrors)) {
          var E = s.computeAllProdsFollows(i.values());this.resyncFollows = E;
        }var m = p.analyzeCst(i.values(), this.fullRuleNameToShort);if (this.allRuleNames = m.allRuleNames, !t.DEFER_DEFINITION_ERRORS_HANDLING && !a.isEmpty(this.definitionErrors)) throw e = a.map(this.definitionErrors, function (t) {
          return t.message;
        }), new Error("Parser Definition Errors detected:\n " + e.join("\n-------------------------------\n"));
      }, t.DEFER_DEFINITION_ERRORS_HANDLING = !1, t;
    }();e.Parser = _, a.applyMixins(_, [f.Recoverable, d.LooksAhead, E.TreeBuilder, m.LexerAdapter, T.RecognizerEngine, y.RecognizerApi, v.ErrorHandler, g.ContentAssist]);var R = function (t) {
      function n(n, r) {
        void 0 === r && (r = e.DEFAULT_PARSER_CONFIG);var i = a.cloneObj(r);return i.outputCst = !0, t.call(this, n, i) || this;
      }return i(n, t), n;
    }(_);e.CstParser = R;var A = function (t) {
      function n(n, r) {
        void 0 === r && (r = e.DEFAULT_PARSER_CONFIG);var i = a.cloneObj(r);return i.outputCst = !1, t.call(this, n, i) || this;
      }return i(n, t), n;
    }(_);e.EmbeddedActionsParser = A;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = n(0);e.classNameFromInstance = function (t) {
      return a(t.constructor);
    };var i = /^\s*function\s*(\S*)\s*\(/,
        o = "name";function a(t) {
      var e = t.name;return e || t.toString().match(i)[1];
    }e.functionName = a, e.defineNameProp = function (t, e) {
      var n = Object.getOwnPropertyDescriptor(t, o);return !(!r.isUndefined(n) && !n.configurable || (Object.defineProperty(t, o, { enumerable: !1, configurable: !0, writable: !1, value: e }), 0));
    };var s = function () {
      function t() {
        this._state = {};
      }return t.prototype.keys = function () {
        return r.keys(this._state);
      }, t.prototype.values = function () {
        return r.values(this._state);
      }, t.prototype.put = function (t, e) {
        this._state[t] = e;
      }, t.prototype.putAll = function (t) {
        this._state = r.assign(this._state, t._state);
      }, t.prototype.get = function (t) {
        return this._state[t];
      }, t.prototype.containsKey = function (t) {
        return r.has(this._state, t);
      }, t.prototype.clear = function () {
        this._state = {};
      }, t;
    }();e.HashTable = s;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = n(1),
        i = function () {
      function t() {}return t.prototype.visit = function (t) {
        if (t instanceof r.NonTerminal) return this.visitNonTerminal(t);if (t instanceof r.Flat) return this.visitFlat(t);if (t instanceof r.Option) return this.visitOption(t);if (t instanceof r.RepetitionMandatory) return this.visitRepetitionMandatory(t);if (t instanceof r.RepetitionMandatoryWithSeparator) return this.visitRepetitionMandatoryWithSeparator(t);if (t instanceof r.RepetitionWithSeparator) return this.visitRepetitionWithSeparator(t);if (t instanceof r.Repetition) return this.visitRepetition(t);if (t instanceof r.Alternation) return this.visitAlternation(t);if (t instanceof r.Terminal) return this.visitTerminal(t);if (t instanceof r.Rule) return this.visitRule(t);throw Error("non exhaustive match");
      }, t.prototype.visitNonTerminal = function (t) {}, t.prototype.visitFlat = function (t) {}, t.prototype.visitOption = function (t) {}, t.prototype.visitRepetition = function (t) {}, t.prototype.visitRepetitionMandatory = function (t) {}, t.prototype.visitRepetitionMandatoryWithSeparator = function (t) {}, t.prototype.visitRepetitionWithSeparator = function (t) {}, t.prototype.visitAlternation = function (t) {}, t.prototype.visitTerminal = function (t) {}, t.prototype.visitRule = function (t) {}, t;
    }();e.GAstVisitor = i;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = n(0),
        i = "MismatchedTokenException",
        o = "NoViableAltException",
        a = "EarlyExitException",
        s = "NotAllInputParsedException",
        u = [i, o, a, s];function c(t, e, n) {
      this.name = i, this.message = t, this.token = e, this.previousToken = n, this.resyncedTokens = [];
    }function p(t, e, n) {
      this.name = o, this.message = t, this.token = e, this.previousToken = n, this.resyncedTokens = [];
    }function l(t, e) {
      this.name = s, this.message = t, this.token = e, this.resyncedTokens = [];
    }function h(t, e, n) {
      this.name = a, this.message = t, this.token = e, this.previousToken = n, this.resyncedTokens = [];
    }Object.freeze(u), e.isRecognitionException = function (t) {
      return r.contains(u, t.name);
    }, e.MismatchedTokenException = c, c.prototype = Error.prototype, e.NoViableAltException = p, p.prototype = Error.prototype, e.NotAllInputParsedException = l, l.prototype = Error.prototype, e.EarlyExitException = h, h.prototype = Error.prototype;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = n(0),
        i = n(4),
        o = n(2);function a(t) {
      for (var e = r.cloneArr(t), n = t, i = !0; i;) {
        n = r.compact(r.flatten(r.map(n, function (t) {
          return t.CATEGORIES;
        })));var o = r.difference(n, e);e = e.concat(o), r.isEmpty(o) ? i = !1 : n = o;
      }return e;
    }function s(t) {
      r.forEach(t, function (t) {
        l(t) || (e.tokenIdxToClass.put(e.tokenShortNameIdx, t), t.tokenTypeIdx = e.tokenShortNameIdx++), h(t) && !r.isArray(t.CATEGORIES) && (t.CATEGORIES = [t.CATEGORIES]), h(t) || (t.CATEGORIES = []), f(t) || (t.categoryMatches = []), d(t) || (t.categoryMatchesMap = {}), E(t) || (t.tokenName = o.tokenName(t));
      });
    }function u(t) {
      r.forEach(t, function (t) {
        t.categoryMatches = [], r.forEach(t.categoryMatchesMap, function (n, r) {
          t.categoryMatches.push(e.tokenIdxToClass.get(r).tokenTypeIdx);
        });
      });
    }function c(t) {
      r.forEach(t, function (t) {
        p([], t);
      });
    }function p(t, e) {
      r.forEach(t, function (t) {
        e.categoryMatchesMap[t.tokenTypeIdx] = !0;
      }), r.forEach(e.CATEGORIES, function (n) {
        var i = t.concat(e);r.contains(i, n) || p(i, n);
      });
    }function l(t) {
      return r.has(t, "tokenTypeIdx");
    }function h(t) {
      return r.has(t, "CATEGORIES");
    }function f(t) {
      return r.has(t, "categoryMatches");
    }function d(t) {
      return r.has(t, "categoryMatchesMap");
    }function E(t) {
      return r.has(t, "tokenName");
    }e.tokenStructuredMatcher = function (t, e) {
      var n = t.tokenTypeIdx;return n === e.tokenTypeIdx || !0 === e.isParent && !0 === e.categoryMatchesMap[n];
    }, e.tokenStructuredMatcherNoCategories = function (t, e) {
      return t.tokenTypeIdx === e.tokenTypeIdx;
    }, e.tokenShortNameIdx = 1, e.tokenIdxToClass = new i.HashTable(), e.augmentTokenTypes = function (t) {
      var e = a(t);s(e), c(e), u(e), r.forEach(e, function (t) {
        t.isParent = t.categoryMatches.length > 0;
      });
    }, e.expandCategories = a, e.assignTokenDefaultProps = s, e.assignCategoriesTokensProp = u, e.assignCategoriesMapProp = c, e.singleAssignCategoriesToksMap = p, e.hasShortKeyProperty = l, e.hasCategoriesProperty = h, e.hasExtendingTokensTypesProperty = f, e.hasExtendingTokensTypesMapProperty = d, e.hasTokenNameProperty = E, e.isTokenType = function (t) {
      return r.has(t, "tokenTypeIdx");
    };
  }, function (t, e, n) {
    "use strict";
    var r,
        i = this && this.__extends || (r = function (t, e) {
      return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
      })(t, e);
    }, function (t, e) {
      function n() {
        this.constructor = t;
      }r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
    });Object.defineProperty(e, "__esModule", { value: !0 });var o = n(0),
        a = n(1),
        s = n(5),
        u = n(2);e.isSequenceProd = function (t) {
      return t instanceof a.Flat || t instanceof a.Option || t instanceof a.Repetition || t instanceof a.RepetitionMandatory || t instanceof a.RepetitionMandatoryWithSeparator || t instanceof a.RepetitionWithSeparator || t instanceof a.Terminal || t instanceof a.Rule;
    }, e.isOptionalProd = function t(e, n) {
      return void 0 === n && (n = []), !!(e instanceof a.Option || e instanceof a.Repetition || e instanceof a.RepetitionWithSeparator) || (e instanceof a.Alternation ? o.some(e.definition, function (e) {
        return t(e, n);
      }) : !(e instanceof a.NonTerminal && o.contains(n, e)) && e instanceof a.AbstractProduction && (e instanceof a.NonTerminal && n.push(e), o.every(e.definition, function (e) {
        return t(e, n);
      })));
    }, e.isBranchingProd = function (t) {
      return t instanceof a.Alternation;
    }, e.getProductionDslName = function (t) {
      if (t instanceof a.NonTerminal) return "SUBRULE";if (t instanceof a.Option) return "OPTION";if (t instanceof a.Alternation) return "OR";if (t instanceof a.RepetitionMandatory) return "AT_LEAST_ONE";if (t instanceof a.RepetitionMandatoryWithSeparator) return "AT_LEAST_ONE_SEP";if (t instanceof a.RepetitionWithSeparator) return "MANY_SEP";if (t instanceof a.Repetition) return "MANY";if (t instanceof a.Terminal) return "CONSUME";throw Error("non exhaustive match");
    };var c = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;return e.separator = "-", e.dslMethods = { option: [], alternation: [], repetition: [], repetitionWithSeparator: [], repetitionMandatory: [], repetitionMandatoryWithSeparator: [] }, e;
      }return i(e, t), e.prototype.visitTerminal = function (t) {
        var e = u.tokenName(t.terminalType) + this.separator + "Terminal";o.has(this.dslMethods, e) || (this.dslMethods[e] = []), this.dslMethods[e].push(t);
      }, e.prototype.visitNonTerminal = function (t) {
        var e = t.nonTerminalName + this.separator + "Terminal";o.has(this.dslMethods, e) || (this.dslMethods[e] = []), this.dslMethods[e].push(t);
      }, e.prototype.visitOption = function (t) {
        this.dslMethods.option.push(t);
      }, e.prototype.visitRepetitionWithSeparator = function (t) {
        this.dslMethods.repetitionWithSeparator.push(t);
      }, e.prototype.visitRepetitionMandatory = function (t) {
        this.dslMethods.repetitionMandatory.push(t);
      }, e.prototype.visitRepetitionMandatoryWithSeparator = function (t) {
        this.dslMethods.repetitionMandatoryWithSeparator.push(t);
      }, e.prototype.visitRepetition = function (t) {
        this.dslMethods.repetition.push(t);
      }, e.prototype.visitAlternation = function (t) {
        this.dslMethods.alternation.push(t);
      }, e;
    }(s.GAstVisitor);e.DslMethodsCollectorVisitor = c;
  }, function (t, e, n) {
    "use strict";
    function r(t, e, n) {
      return n | e | t;
    }Object.defineProperty(e, "__esModule", { value: !0 }), e.BITS_FOR_METHOD_IDX = 4, e.BITS_FOR_OCCURRENCE_IDX = 4, e.BITS_FOR_RULE_IDX = 24, e.BITS_FOR_ALT_IDX = 8, e.OR_IDX = 1 << e.BITS_FOR_METHOD_IDX, e.OPTION_IDX = 2 << e.BITS_FOR_METHOD_IDX, e.MANY_IDX = 3 << e.BITS_FOR_METHOD_IDX, e.AT_LEAST_ONE_IDX = 4 << e.BITS_FOR_METHOD_IDX, e.MANY_SEP_IDX = 5 << e.BITS_FOR_METHOD_IDX, e.AT_LEAST_ONE_SEP_IDX = 6 << e.BITS_FOR_METHOD_IDX, e.getKeyForAutomaticLookahead = r;var i = 32 - e.BITS_FOR_ALT_IDX;e.getKeyForAltIndex = function (t, e, n, o) {
      var a = o + 1 << i;return r(t, e, n) | a;
    };
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = n(2),
        i = n(0),
        o = n(0),
        a = n(1),
        s = n(8),
        u = n(11),
        c = n(17),
        p = n(3);e.defaultParserErrorProvider = { buildMismatchTokenMessage: function (t) {
        var e = t.expected,
            n = t.actual;t.previous, t.ruleName;return "Expecting " + (r.hasTokenLabel(e) ? "--\x3e " + r.tokenLabel(e) + " <--" : "token of type --\x3e " + r.tokenName(e) + " <--") + " but found --\x3e '" + n.image + "' <--";
      }, buildNotAllInputParsedMessage: function (t) {
        var e = t.firstRedundant;t.ruleName;return "Redundant input, expecting EOF but found: " + e.image;
      }, buildNoViableAltMessage: function (t) {
        var e = t.expectedPathsPerAlt,
            n = t.actual,
            i = (t.previous, t.customUserDescription),
            a = (t.ruleName, "\nbut found: '" + o.first(n).image + "'");if (i) return "Expecting: " + i + a;var s = o.reduce(e, function (t, e) {
          return t.concat(e);
        }, []),
            u = o.map(s, function (t) {
          return "[" + o.map(t, function (t) {
            return r.tokenLabel(t);
          }).join(", ") + "]";
        });return "Expecting: " + ("one of these possible Token sequences:\n" + o.map(u, function (t, e) {
          return "  " + (e + 1) + ". " + t;
        }).join("\n")) + a;
      }, buildEarlyExitMessage: function (t) {
        var e = t.expectedIterationPaths,
            n = t.actual,
            i = t.customUserDescription,
            a = (t.ruleName, "\nbut found: '" + o.first(n).image + "'");return i ? "Expecting: " + i + a : "Expecting: " + ("expecting at least one iteration which starts with one of these possible Token sequences::\n  <" + o.map(e, function (t) {
          return "[" + o.map(t, function (t) {
            return r.tokenLabel(t);
          }).join(",") + "]";
        }).join(" ,") + ">") + a;
      } }, Object.freeze(e.defaultParserErrorProvider), e.defaultGrammarResolverErrorProvider = { buildRuleNotFoundError: function (t, e) {
        return "Invalid grammar, reference to a rule which is not defined: ->" + e.nonTerminalName + "<-\ninside top level rule: ->" + t.name + "<-";
      } }, e.defaultGrammarValidatorErrorProvider = { buildDuplicateFoundError: function (t, e) {
        var n,
            i = t.name,
            u = o.first(e),
            c = u.idx,
            p = s.getProductionDslName(u),
            l = (n = u) instanceof a.Terminal ? r.tokenName(n.terminalType) : n instanceof a.NonTerminal ? n.nonTerminalName : "",
            h = "->" + p + "<- with numerical suffix: ->" + c + "<-\n                  " + (l ? "and argument: ->" + l + "<-" : "") + "\n                  appears more than once (" + e.length + " times) in the top level rule: ->" + i + "<-.\n                  " + (0 === c ? "Also note that numerical suffix 0 means " + p + " without any suffix." : "") + "\n                  To fix this make sure each usage of " + p + " " + (l ? "with the argument: ->" + l + "<-" : "") + "\n                  in the rule ->" + i + "<- has a different occurrence index (0-5), as that combination acts as a unique\n                  position key in the grammar, which is needed by the parsing engine.\n                  \n                  For further details see: https://sap.github.io/chevrotain/docs/FAQ.html#NUMERICAL_SUFFIXES \n                  ";return h = (h = h.replace(/[ \t]+/g, " ")).replace(/\s\s+/g, "\n");
      }, buildInvalidNestedRuleNameError: function (t, e) {
        return "Invalid nested rule name: ->" + e.name + "<- inside rule: ->" + t.name + "<-\nit must match the pattern: ->" + u.validNestedRuleName.toString() + "<-.\nNote that this means a nested rule name must start with the '$'(dollar) sign.";
      }, buildDuplicateNestedRuleNameError: function (t, e) {
        return "Duplicate nested rule name: ->" + o.first(e).name + "<- inside rule: ->" + t.name + "<-\nA nested name must be unique in the scope of a top level grammar rule.";
      }, buildNamespaceConflictError: function (t) {
        return "Namespace conflict found in grammar.\nThe grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <" + t.name + ">.\nTo resolve this make sure each Terminal and Non-Terminal names are unique\nThis is easy to accomplish by using the convention that Terminal names start with an uppercase letter\nand Non-Terminal names start with a lower case letter.";
      }, buildAlternationPrefixAmbiguityError: function (t) {
        var e = o.map(t.prefixPath, function (t) {
          return r.tokenLabel(t);
        }).join(", "),
            n = 0 === t.alternation.idx ? "" : t.alternation.idx;return "Ambiguous alternatives: <" + t.ambiguityIndices.join(" ,") + "> due to common lookahead prefix\nin <OR" + n + "> inside <" + t.topLevelRule.name + "> Rule,\n<" + e + "> may appears as a prefix path in all these alternatives.\nhttps://sap.github.io/chevrotain/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX\nFor Further details.";
      }, buildAlternationAmbiguityError: function (t) {
        var e = o.map(t.prefixPath, function (t) {
          return r.tokenLabel(t);
        }).join(", "),
            n = 0 === t.alternation.idx ? "" : t.alternation.idx,
            i = "Ambiguous alternatives: <" + t.ambiguityIndices.join(" ,") + "> in <OR" + n + "> inside <" + t.topLevelRule.name + "> Rule,\n<" + e + "> may appears as a prefix path in all these alternatives.\n",
            a = c.VERSION.replace(/\./g, "_");return i = i + "To Resolve this, try one of of the following: \n1. Refactor your grammar to be LL(K) for the current value of k (by default k=" + p.DEFAULT_PARSER_CONFIG.maxLookahead + "})\n2. Increase the value of K for your grammar by providing a larger 'maxLookahead' value in the parser's config\n3. This issue can be ignored (if you know what you are doing...), see https://sap.github.io/chevrotain/documentation/" + a + "/interfaces/iparserconfig.html#ignoredissues for more details\n";
      }, buildEmptyRepetitionError: function (t) {
        var e = s.getProductionDslName(t.repetition);return 0 !== t.repetition.idx && (e += t.repetition.idx), "The repetition <" + e + "> within Rule <" + t.topLevelRule.name + "> can never consume any tokens.\nThis could lead to an infinite loop.";
      }, buildTokenNameError: function (t) {
        return "Invalid Grammar Token name: ->" + r.tokenName(t.tokenType) + "<- it must match the pattern: ->" + t.expectedPattern.toString() + "<-";
      }, buildEmptyAlternationError: function (t) {
        return "Ambiguous empty alternative: <" + (t.emptyChoiceIdx + 1) + "> in <OR" + t.alternation.idx + "> inside <" + t.topLevelRule.name + "> Rule.\nOnly the last alternative may be an empty alternative.";
      }, buildTooManyAlternativesError: function (t) {
        return "An Alternation cannot have more than 256 alternatives:\n<OR" + t.alternation.idx + "> inside <" + t.topLevelRule.name + "> Rule.\n has " + (t.alternation.definition.length + 1) + " alternatives.";
      }, buildLeftRecursionError: function (t) {
        var e = t.topLevelRule.name;return "Left Recursion found in grammar.\nrule: <" + e + "> can be invoked from itself (directly or indirectly)\nwithout consuming any Tokens. The grammar path that causes this is: \n " + (e + " --\x3e " + i.map(t.leftRecursionPath, function (t) {
          return t.name;
        }).concat([e]).join(" --\x3e ")) + "\n To fix this refactor your grammar to remove the left recursion.\nsee: https://en.wikipedia.org/wiki/LL_parser#Left_Factoring.";
      }, buildInvalidRuleNameError: function (t) {
        return "Invalid grammar rule name: ->" + t.topLevelRule.name + "<- it must match the pattern: ->" + t.expectedPattern.toString() + "<-";
      }, buildDuplicateRuleNameError: function (t) {
        return "Duplicate definition, rule: ->" + (t.topLevelRule instanceof a.Rule ? t.topLevelRule.name : t.topLevelRule) + "<- is already defined in the grammar: ->" + t.grammarName + "<-";
      } };
  }, function (t, e, n) {
    "use strict";
    var r,
        i = this && this.__extends || (r = function (t, e) {
      return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
      })(t, e);
    }, function (t, e) {
      function n() {
        this.constructor = t;
      }r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
    });Object.defineProperty(e, "__esModule", { value: !0 });var o = n(0),
        a = n(0),
        s = n(3),
        u = n(8),
        c = n(2),
        p = n(12),
        l = n(16),
        h = n(13),
        f = n(1),
        d = n(5);function E(t) {
      return u.getProductionDslName(t) + "_#_" + t.idx + "_#_" + m(t);
    }function m(t) {
      return t instanceof f.Terminal ? c.tokenName(t.terminalType) : t instanceof f.NonTerminal ? t.nonTerminalName : "";
    }e.validateGrammar = function (t, e, n, r, i, p) {
      var h = o.map(t, function (t) {
        return function (t, e) {
          var n = new y();t.accept(n);var r = n.allProductions,
              i = o.groupBy(r, E),
              a = o.pick(i, function (t) {
            return t.length > 1;
          });return o.map(o.values(a), function (n) {
            var r = o.first(n),
                i = e.buildDuplicateFoundError(t, n),
                a = u.getProductionDslName(r),
                c = { message: i, type: s.ParserDefinitionErrorType.DUPLICATE_PRODUCTIONS, ruleName: t.name, dslName: a, occurrence: r.idx },
                p = m(r);return p && (c.parameter = p), c;
          });
        }(t, i);
      }),
          f = o.map(t, function (t) {
        return R(t, t, i);
      }),
          d = [],
          A = [],
          N = [];a.every(f, a.isEmpty) && (d = a.map(t, function (t) {
        return O(t, i);
      }), A = a.map(t, function (t) {
        return S(t, e, r, i);
      }), N = k(t, e, i));var I = function (t, e, n) {
        var r = [],
            i = a.map(e, function (t) {
          return c.tokenName(t);
        });return a.forEach(t, function (t) {
          var e = t.name;if (a.contains(i, e)) {
            var o = n.buildNamespaceConflictError(t);r.push({ message: o, type: s.ParserDefinitionErrorType.CONFLICT_TOKENS_RULES_NAMESPACE, ruleName: e });
          }
        }), r;
      }(t, n, i),
          P = o.map(n, function (t) {
        return g(t, i);
      }),
          x = function (t, e) {
        var n = [];return a.forEach(t, function (t) {
          var r = new l.NamedDSLMethodsCollectorVisitor("");t.accept(r);var i = a.map(r.result, function (t) {
            return t.orgProd;
          });n.push(a.map(i, function (n) {
            return v(t, n, e);
          }));
        }), a.flatten(n);
      }(t, i),
          C = function (t, e) {
        var n = [];return a.forEach(t, function (t) {
          var r = new l.NamedDSLMethodsCollectorVisitor("");t.accept(r);var i = a.groupBy(r.result, function (t) {
            return t.name;
          }),
              o = a.pick(i, function (t) {
            return t.length > 1;
          });a.forEach(a.values(o), function (r) {
            var i = a.map(r, function (t) {
              return t.orgProd;
            }),
                o = e.buildDuplicateNestedRuleNameError(t, i);n.push({ message: o, type: s.ParserDefinitionErrorType.DUPLICATE_NESTED_NAME, ruleName: t.name });
          });
        }), n;
      }(t, i),
          M = a.map(t, function (t) {
        return L(t, i);
      }),
          F = a.map(t, function (t) {
        return T(t, i);
      }),
          b = a.map(t, function (e) {
        return _(e, t, p, i);
      });return o.flatten(h.concat(P, x, C, N, f, d, A, I, M, F, b));
    }, e.identifyProductionForDuplicates = E;var y = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;return e.allProductions = [], e;
      }return i(e, t), e.prototype.visitNonTerminal = function (t) {
        this.allProductions.push(t);
      }, e.prototype.visitOption = function (t) {
        this.allProductions.push(t);
      }, e.prototype.visitRepetitionWithSeparator = function (t) {
        this.allProductions.push(t);
      }, e.prototype.visitRepetitionMandatory = function (t) {
        this.allProductions.push(t);
      }, e.prototype.visitRepetitionMandatoryWithSeparator = function (t) {
        this.allProductions.push(t);
      }, e.prototype.visitRepetition = function (t) {
        this.allProductions.push(t);
      }, e.prototype.visitAlternation = function (t) {
        this.allProductions.push(t);
      }, e.prototype.visitTerminal = function (t) {
        this.allProductions.push(t);
      }, e;
    }(d.GAstVisitor);function T(t, n) {
      var r = [],
          i = t.name;return i.match(e.validTermsPattern) || r.push({ message: n.buildInvalidRuleNameError({ topLevelRule: t, expectedPattern: e.validTermsPattern }), type: s.ParserDefinitionErrorType.INVALID_RULE_NAME, ruleName: i }), r;
    }function v(t, n, r) {
      var i,
          o = [];return n.name.match(e.validNestedRuleName) || (i = r.buildInvalidNestedRuleNameError(t, n), o.push({ message: i, type: s.ParserDefinitionErrorType.INVALID_NESTED_RULE_NAME, ruleName: t.name })), o;
    }function g(t, n) {
      var r = [];return c.tokenName(t).match(e.validTermsPattern) || r.push({ message: n.buildTokenNameError({ tokenType: t, expectedPattern: e.validTermsPattern }), type: s.ParserDefinitionErrorType.INVALID_TOKEN_NAME }), r;
    }function _(t, e, n, r) {
      var i = [];if (a.reduce(e, function (e, n) {
        return n.name === t.name ? e + 1 : e;
      }, 0) > 1) {
        var o = r.buildDuplicateRuleNameError({ topLevelRule: t, grammarName: n });i.push({ message: o, type: s.ParserDefinitionErrorType.DUPLICATE_RULE_NAME, ruleName: t.name });
      }return i;
    }function R(t, e, n, r) {
      void 0 === r && (r = []);var i = [],
          a = A(e.definition);if (o.isEmpty(a)) return [];var u = t.name;o.contains(a, t) && i.push({ message: n.buildLeftRecursionError({ topLevelRule: t, leftRecursionPath: r }), type: s.ParserDefinitionErrorType.LEFT_RECURSION, ruleName: u });var c = o.difference(a, r.concat([t])),
          p = o.map(c, function (e) {
        var i = o.cloneArr(r);return i.push(e), R(t, e, n, i);
      });return i.concat(o.flatten(p));
    }function A(t) {
      var e = [];if (o.isEmpty(t)) return e;var n = o.first(t);if (n instanceof f.NonTerminal) e.push(n.referencedRule);else if (n instanceof f.Flat || n instanceof f.Option || n instanceof f.RepetitionMandatory || n instanceof f.RepetitionMandatoryWithSeparator || n instanceof f.RepetitionWithSeparator || n instanceof f.Repetition) e = e.concat(A(n.definition));else if (n instanceof f.Alternation) e = o.flatten(o.map(n.definition, function (t) {
        return A(t.definition);
      }));else if (!(n instanceof f.Terminal)) throw Error("non exhaustive match");var r = u.isOptionalProd(n),
          i = t.length > 1;if (r && i) {
        var a = o.drop(t);return e.concat(A(a));
      }return e;
    }e.OccurrenceValidationCollector = y, e.validTermsPattern = /^[a-zA-Z_]\w*$/, e.validNestedRuleName = new RegExp(e.validTermsPattern.source.replace("^", "^\\$")), e.validateRuleName = T, e.validateNestedRuleName = v, e.validateTokenName = g, e.validateRuleDoesNotAlreadyExist = _, e.validateRuleIsOverridden = function (t, e, n) {
      var r,
          i = [];return o.contains(e, t) || (r = "Invalid rule override, rule: ->" + t + "<- cannot be overridden in the grammar: ->" + n + "<-as it is not defined in any of the super grammars ", i.push({ message: r, type: s.ParserDefinitionErrorType.INVALID_RULE_OVERRIDE, ruleName: t })), i;
    }, e.validateNoLeftRecursion = R, e.getFirstNoneTerminal = A;var N = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;return e.alternations = [], e;
      }return i(e, t), e.prototype.visitAlternation = function (t) {
        this.alternations.push(t);
      }, e;
    }(d.GAstVisitor);function O(t, e) {
      var n = new N();t.accept(n);var r = n.alternations;return o.reduce(r, function (n, r) {
        var i = o.dropRight(r.definition),
            a = o.map(i, function (n, i) {
          var a = h.nextPossibleTokensAfter([n], [], null, 1);return o.isEmpty(a) ? { message: e.buildEmptyAlternationError({ topLevelRule: t, alternation: r, emptyChoiceIdx: i }), type: s.ParserDefinitionErrorType.NONE_LAST_EMPTY_ALT, ruleName: t.name, occurrence: r.idx, alternative: i + 1 } : null;
        });return n.concat(o.compact(a));
      }, []);
    }function S(t, e, n, r) {
      var i = new N();t.accept(i);var c = i.alternations,
          l = n[t.name];return l && (c = a.reject(c, function (t) {
        return l[u.getProductionDslName(t) + (0 === t.idx ? "" : t.idx)];
      })), o.reduce(c, function (n, i) {
        var u = i.idx,
            c = p.getLookaheadPathsForOr(u, t, e),
            l = function (t, e, n, r) {
          var i = [],
              u = a.reduce(t, function (e, n, r) {
            return a.forEach(n, function (n) {
              var o = [r];a.forEach(t, function (t, e) {
                r !== e && p.containsPath(t, n) && o.push(e);
              }), o.length > 1 && !p.containsPath(i, n) && (i.push(n), e.push({ alts: o, path: n }));
            }), e;
          }, []);return o.map(u, function (t) {
            var i = a.map(t.alts, function (t) {
              return t + 1;
            }),
                o = r.buildAlternationAmbiguityError({ topLevelRule: n, alternation: e, ambiguityIndices: i, prefixPath: t.path });return { message: o, type: s.ParserDefinitionErrorType.AMBIGUOUS_ALTS, ruleName: n.name, occurrence: e.idx, alternatives: [t.alts] };
          });
        }(c, i, t, r),
            h = P(c, i, t, r);return n.concat(l, h);
      }, []);
    }e.validateEmptyOrAlternative = O, e.validateAmbiguousAlternationAlternatives = S;var I = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;return e.allProductions = [], e;
      }return i(e, t), e.prototype.visitRepetitionWithSeparator = function (t) {
        this.allProductions.push(t);
      }, e.prototype.visitRepetitionMandatory = function (t) {
        this.allProductions.push(t);
      }, e.prototype.visitRepetitionMandatoryWithSeparator = function (t) {
        this.allProductions.push(t);
      }, e.prototype.visitRepetition = function (t) {
        this.allProductions.push(t);
      }, e;
    }(d.GAstVisitor);function L(t, e) {
      var n = new N();t.accept(n);var r = n.alternations;return o.reduce(r, function (n, r) {
        return r.definition.length > 255 && n.push({ message: e.buildTooManyAlternativesError({ topLevelRule: t, alternation: r }), type: s.ParserDefinitionErrorType.TOO_MANY_ALTS, ruleName: t.name, occurrence: r.idx }), n;
      }, []);
    }function k(t, e, n) {
      var r = [];return a.forEach(t, function (t) {
        var i = new I();t.accept(i);var o = i.allProductions;a.forEach(o, function (i) {
          var o = p.getProdType(i),
              u = i.idx,
              c = p.getLookaheadPathsForOptionalProd(u, t, o, e)[0];if (a.isEmpty(a.flatten(c))) {
            var l = n.buildEmptyRepetitionError({ topLevelRule: t, repetition: i });r.push({ message: l, type: s.ParserDefinitionErrorType.NO_NON_EMPTY_LOOKAHEAD, ruleName: t.name });
          }
        });
      }), r;
    }function P(t, e, n, r) {
      var i = [],
          o = a.reduce(t, function (t, e, n) {
        var r = a.map(e, function (t) {
          return { idx: n, path: t };
        });return t.concat(r);
      }, []);return a.forEach(o, function (t) {
        var u = t.idx,
            c = t.path,
            l = a.findAll(o, function (t) {
          return t.idx < u && p.isStrictPrefixOfPath(t.path, c);
        }),
            h = a.map(l, function (t) {
          var i = [t.idx + 1, u + 1],
              o = 0 === e.idx ? "" : e.idx;return { message: r.buildAlternationPrefixAmbiguityError({ topLevelRule: n, alternation: e, ambiguityIndices: i, prefixPath: t.path }), type: s.ParserDefinitionErrorType.AMBIGUOUS_PREFIX_ALTS, ruleName: n.name, occurrence: o, alternatives: i };
        });i = i.concat(h);
      }), i;
    }e.RepetionCollector = I, e.validateTooManyAlts = L, e.validateSomeNonEmptyLookaheadPath = k, e.checkPrefixAlternativesAmbiguities = P;
  }, function (t, e, n) {
    "use strict";
    var r,
        i = this && this.__extends || (r = function (t, e) {
      return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
      })(t, e);
    }, function (t, e) {
      function n() {
        this.constructor = t;
      }r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
    });Object.defineProperty(e, "__esModule", { value: !0 });var o,
        a = n(0),
        s = n(13),
        u = n(14),
        c = n(7),
        p = n(1),
        l = n(5);!function (t) {
      t[t.OPTION = 0] = "OPTION", t[t.REPETITION = 1] = "REPETITION", t[t.REPETITION_MANDATORY = 2] = "REPETITION_MANDATORY", t[t.REPETITION_MANDATORY_WITH_SEPARATOR = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR", t[t.REPETITION_WITH_SEPARATOR = 4] = "REPETITION_WITH_SEPARATOR", t[t.ALTERNATION = 5] = "ALTERNATION";
    }(o = e.PROD_TYPE || (e.PROD_TYPE = {})), e.getProdType = function (t) {
      if (t instanceof p.Option) return o.OPTION;if (t instanceof p.Repetition) return o.REPETITION;if (t instanceof p.RepetitionMandatory) return o.REPETITION_MANDATORY;if (t instanceof p.RepetitionMandatoryWithSeparator) return o.REPETITION_MANDATORY_WITH_SEPARATOR;if (t instanceof p.RepetitionWithSeparator) return o.REPETITION_WITH_SEPARATOR;if (t instanceof p.Alternation) return o.ALTERNATION;throw Error("non exhaustive match");
    }, e.buildLookaheadFuncForOr = function (t, e, n, r, i, o) {
      var a = E(t, e, n);return o(a, r, T(a) ? c.tokenStructuredMatcherNoCategories : c.tokenStructuredMatcher, i);
    }, e.buildLookaheadFuncForOptionalProd = function (t, e, n, r, i, o) {
      var a = m(t, e, i, n),
          s = T(a) ? c.tokenStructuredMatcherNoCategories : c.tokenStructuredMatcher;return o(a[0], s, r);
    }, e.buildAlternativesLookAheadFunc = function (t, e, n, r) {
      var i = t.length,
          o = a.every(t, function (t) {
        return a.every(t, function (t) {
          return 1 === t.length;
        });
      });if (e) return function (e) {
        for (var r = a.map(e, function (t) {
          return t.GATE;
        }), o = 0; o < i; o++) {
          var s = t[o],
              u = s.length,
              c = r[o];if (void 0 === c || !1 !== c.call(this)) t: for (var p = 0; p < u; p++) {
            for (var l = s[p], h = l.length, f = 0; f < h; f++) {
              var d = this.LA(f + 1);if (!1 === n(d, l[f])) continue t;
            }return o;
          }
        }
      };if (o && !r) {
        var s = a.map(t, function (t) {
          return a.flatten(t);
        }),
            u = a.reduce(s, function (t, e, n) {
          return a.forEach(e, function (e) {
            a.has(t, e.tokenTypeIdx) || (t[e.tokenTypeIdx] = n), a.forEach(e.categoryMatches, function (e) {
              a.has(t, e) || (t[e] = n);
            });
          }), t;
        }, []);return function () {
          var t = this.LA(1);return u[t.tokenTypeIdx];
        };
      }return function () {
        for (var e = 0; e < i; e++) {
          var r = t[e],
              o = r.length;t: for (var a = 0; a < o; a++) {
            for (var s = r[a], u = s.length, c = 0; c < u; c++) {
              var p = this.LA(c + 1);if (!1 === n(p, s[c])) continue t;
            }return e;
          }
        }
      };
    }, e.buildSingleAlternativeLookaheadFunction = function (t, e, n) {
      var r = a.every(t, function (t) {
        return 1 === t.length;
      }),
          i = t.length;if (r && !n) {
        var o = a.flatten(t);if (1 === o.length && a.isEmpty(o[0].categoryMatches)) {
          var s = o[0].tokenTypeIdx;return function () {
            return this.LA(1).tokenTypeIdx === s;
          };
        }var u = a.reduce(o, function (t, e, n) {
          return t[e.tokenTypeIdx] = !0, a.forEach(e.categoryMatches, function (e) {
            t[e] = !0;
          }), t;
        }, []);return function () {
          var t = this.LA(1);return !0 === u[t.tokenTypeIdx];
        };
      }return function () {
        t: for (var n = 0; n < i; n++) {
          for (var r = t[n], o = r.length, a = 0; a < o; a++) {
            var s = this.LA(a + 1);if (!1 === e(s, r[a])) continue t;
          }return !0;
        }return !1;
      };
    };var h = function (t) {
      function e(e, n, r) {
        var i = t.call(this) || this;return i.topProd = e, i.targetOccurrence = n, i.targetProdType = r, i;
      }return i(e, t), e.prototype.startWalking = function () {
        return this.walk(this.topProd), this.restDef;
      }, e.prototype.checkIsTarget = function (t, e, n, r) {
        return t.idx === this.targetOccurrence && this.targetProdType === e && (this.restDef = n.concat(r), !0);
      }, e.prototype.walkOption = function (e, n, r) {
        this.checkIsTarget(e, o.OPTION, n, r) || t.prototype.walkOption.call(this, e, n, r);
      }, e.prototype.walkAtLeastOne = function (e, n, r) {
        this.checkIsTarget(e, o.REPETITION_MANDATORY, n, r) || t.prototype.walkOption.call(this, e, n, r);
      }, e.prototype.walkAtLeastOneSep = function (e, n, r) {
        this.checkIsTarget(e, o.REPETITION_MANDATORY_WITH_SEPARATOR, n, r) || t.prototype.walkOption.call(this, e, n, r);
      }, e.prototype.walkMany = function (e, n, r) {
        this.checkIsTarget(e, o.REPETITION, n, r) || t.prototype.walkOption.call(this, e, n, r);
      }, e.prototype.walkManySep = function (e, n, r) {
        this.checkIsTarget(e, o.REPETITION_WITH_SEPARATOR, n, r) || t.prototype.walkOption.call(this, e, n, r);
      }, e;
    }(u.RestWalker),
        f = function (t) {
      function e(e, n) {
        var r = t.call(this) || this;return r.targetOccurrence = e, r.targetProdType = n, r.result = [], r;
      }return i(e, t), e.prototype.checkIsTarget = function (t, e) {
        t.idx === this.targetOccurrence && this.targetProdType === e && (this.result = t.definition);
      }, e.prototype.visitOption = function (t) {
        this.checkIsTarget(t, o.OPTION);
      }, e.prototype.visitRepetition = function (t) {
        this.checkIsTarget(t, o.REPETITION);
      }, e.prototype.visitRepetitionMandatory = function (t) {
        this.checkIsTarget(t, o.REPETITION_MANDATORY);
      }, e.prototype.visitRepetitionMandatoryWithSeparator = function (t) {
        this.checkIsTarget(t, o.REPETITION_MANDATORY_WITH_SEPARATOR);
      }, e.prototype.visitRepetitionWithSeparator = function (t) {
        this.checkIsTarget(t, o.REPETITION_WITH_SEPARATOR);
      }, e.prototype.visitAlternation = function (t) {
        this.checkIsTarget(t, o.ALTERNATION);
      }, e;
    }(l.GAstVisitor);function d(t, e) {
      function n(t, e) {
        return a.reduce(t, function (t, n, r) {
          if (r !== e) {
            var i = a.map(n, function (t) {
              return t.partialPath;
            });return t.concat(i);
          }return t;
        }, []);
      }function r(t, e) {
        return void 0 === a.find(t, function (t) {
          return a.every(e, function (e, n) {
            return r = e, i = t[n], r === i || r && i && (r.categoryMatchesMap[i.tokenTypeIdx] || i.categoryMatchesMap[r.tokenTypeIdx]);var r, i;
          });
        });
      }function i(t) {
        for (var e = [], n = 0; n < t; n++) e.push([]);return e;
      }for (var o = a.map(t, function (t) {
        return s.possiblePathsFrom([t], 1);
      }), u = i(o.length), c = o, p = 1; p <= e; p++) {
        var l = c;c = i(l.length);for (var h = 0; h < l.length; h++) for (var f = l[h], d = n(l, h), E = 0; E < f.length; E++) {
          var m = f[E].partialPath,
              T = f[E].suffixDef;if (r(d, m) || a.isEmpty(T) || m.length === e) {
            var v = u[h];y(v, m) || v.push(m);
          } else {
            var g = s.possiblePathsFrom(T, p + 1, m);c[h] = c[h].concat(g);
          }
        }
      }return u;
    }function E(t, e, n) {
      var r = new f(t, o.ALTERNATION);return e.accept(r), d(r.result, n);
    }function m(t, e, n, r) {
      var i = new f(t, n);e.accept(i);var o = i.result,
          a = new h(e, t, n).startWalking();return d([new p.Flat({ definition: o }), new p.Flat({ definition: a })], r);
    }function y(t, e) {
      return void 0 !== a.find(t, function (t) {
        return e.length === t.length && a.every(e, function (e, n) {
          return e === t[n] || t[n].categoryMatchesMap[e.tokenTypeIdx];
        });
      });
    }function T(t) {
      return a.every(t, function (t) {
        return a.every(t, function (t) {
          return a.every(t, function (t) {
            return a.isEmpty(t.categoryMatches);
          });
        });
      });
    }e.lookAheadSequenceFromAlternatives = d, e.getLookaheadPathsForOr = E, e.getLookaheadPathsForOptionalProd = m, e.containsPath = y, e.isStrictPrefixOfPath = function (t, e) {
      return t.length < e.length && a.every(t, function (t, n) {
        var r = e[n];return t === r || r.categoryMatchesMap[t.tokenTypeIdx];
      });
    }, e.areTokenCategoriesNotUsed = T;
  }, function (t, e, n) {
    "use strict";
    var r,
        i = this && this.__extends || (r = function (t, e) {
      return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
      })(t, e);
    }, function (t, e) {
      function n() {
        this.constructor = t;
      }r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
    });Object.defineProperty(e, "__esModule", { value: !0 });var o = n(14),
        a = n(0),
        s = n(2),
        u = n(21),
        c = n(1),
        p = function (t) {
      function e(e, n) {
        var r = t.call(this) || this;return r.topProd = e, r.path = n, r.possibleTokTypes = [], r.nextProductionName = "", r.nextProductionOccurrence = 0, r.found = !1, r.isAtEndOfPath = !1, r;
      }return i(e, t), e.prototype.startWalking = function () {
        if (this.found = !1, this.path.ruleStack[0] !== this.topProd.name) throw Error("The path does not start with the walker's top Rule!");return this.ruleStack = a.cloneArr(this.path.ruleStack).reverse(), this.occurrenceStack = a.cloneArr(this.path.occurrenceStack).reverse(), this.ruleStack.pop(), this.occurrenceStack.pop(), this.updateExpectedNext(), this.walk(this.topProd), this.possibleTokTypes;
      }, e.prototype.walk = function (e, n) {
        void 0 === n && (n = []), this.found || t.prototype.walk.call(this, e, n);
      }, e.prototype.walkProdRef = function (t, e, n) {
        if (t.referencedRule.name === this.nextProductionName && t.idx === this.nextProductionOccurrence) {
          var r = e.concat(n);this.updateExpectedNext(), this.walk(t.referencedRule, r);
        }
      }, e.prototype.updateExpectedNext = function () {
        a.isEmpty(this.ruleStack) ? (this.nextProductionName = "", this.nextProductionOccurrence = 0, this.isAtEndOfPath = !0) : (this.nextProductionName = this.ruleStack.pop(), this.nextProductionOccurrence = this.occurrenceStack.pop());
      }, e;
    }(o.RestWalker);e.AbstractNextPossibleTokensWalker = p;var l = function (t) {
      function e(e, n) {
        var r = t.call(this, e, n) || this;return r.path = n, r.nextTerminalName = "", r.nextTerminalOccurrence = 0, r.nextTerminalName = s.tokenName(r.path.lastTok), r.nextTerminalOccurrence = r.path.lastTokOccurrence, r;
      }return i(e, t), e.prototype.walkTerminal = function (t, e, n) {
        if (this.isAtEndOfPath && s.tokenName(t.terminalType) === this.nextTerminalName && t.idx === this.nextTerminalOccurrence && !this.found) {
          var r = e.concat(n),
              i = new c.Flat({ definition: r });this.possibleTokTypes = u.first(i), this.found = !0;
        }
      }, e;
    }(p);e.NextAfterTokenWalker = l;var h = function (t) {
      function e(e, n) {
        var r = t.call(this) || this;return r.topRule = e, r.occurrence = n, r.result = { token: void 0, occurrence: void 0, isEndOfRule: void 0 }, r;
      }return i(e, t), e.prototype.startWalking = function () {
        return this.walk(this.topRule), this.result;
      }, e;
    }(o.RestWalker);e.AbstractNextTerminalAfterProductionWalker = h;var f = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return i(e, t), e.prototype.walkMany = function (e, n, r) {
        if (e.idx === this.occurrence) {
          var i = a.first(n.concat(r));this.result.isEndOfRule = void 0 === i, i instanceof c.Terminal && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
        } else t.prototype.walkMany.call(this, e, n, r);
      }, e;
    }(h);e.NextTerminalAfterManyWalker = f;var d = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return i(e, t), e.prototype.walkManySep = function (e, n, r) {
        if (e.idx === this.occurrence) {
          var i = a.first(n.concat(r));this.result.isEndOfRule = void 0 === i, i instanceof c.Terminal && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
        } else t.prototype.walkManySep.call(this, e, n, r);
      }, e;
    }(h);e.NextTerminalAfterManySepWalker = d;var E = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return i(e, t), e.prototype.walkAtLeastOne = function (e, n, r) {
        if (e.idx === this.occurrence) {
          var i = a.first(n.concat(r));this.result.isEndOfRule = void 0 === i, i instanceof c.Terminal && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
        } else t.prototype.walkAtLeastOne.call(this, e, n, r);
      }, e;
    }(h);e.NextTerminalAfterAtLeastOneWalker = E;var m = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return i(e, t), e.prototype.walkAtLeastOneSep = function (e, n, r) {
        if (e.idx === this.occurrence) {
          var i = a.first(n.concat(r));this.result.isEndOfRule = void 0 === i, i instanceof c.Terminal && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
        } else t.prototype.walkAtLeastOneSep.call(this, e, n, r);
      }, e;
    }(h);function y(t, e, n, r) {
      var i = a.cloneArr(n);i.push(t.name);var o = a.cloneArr(r);return o.push(1), { idx: e, def: t.definition, ruleStack: i, occurrenceStack: o };
    }e.NextTerminalAfterAtLeastOneSepWalker = m, e.possiblePathsFrom = function t(e, n, r) {
      void 0 === r && (r = []), r = a.cloneArr(r);var i = [],
          o = 0;function s(s) {
        var u = t(s.concat(a.drop(e, o + 1)), n, r);return i.concat(u);
      }for (; r.length < n && o < e.length;) {
        var u = e[o];if (u instanceof c.Flat) return s(u.definition);if (u instanceof c.NonTerminal) return s(u.definition);if (u instanceof c.Option) i = s(u.definition);else {
          if (u instanceof c.RepetitionMandatory) return s(p = u.definition.concat([new c.Repetition({ definition: u.definition })]));if (u instanceof c.RepetitionMandatoryWithSeparator) return s(p = [new c.Flat({ definition: u.definition }), new c.Repetition({ definition: [new c.Terminal({ terminalType: u.separator })].concat(u.definition) })]);if (u instanceof c.RepetitionWithSeparator) {
            var p = u.definition.concat([new c.Repetition({ definition: [new c.Terminal({ terminalType: u.separator })].concat(u.definition) })]);i = s(p);
          } else if (u instanceof c.Repetition) p = u.definition.concat([new c.Repetition({ definition: u.definition })]), i = s(p);else {
            if (u instanceof c.Alternation) return a.forEach(u.definition, function (t) {
              i = s(t.definition);
            }), i;if (!(u instanceof c.Terminal)) throw Error("non exhaustive match");r.push(u.terminalType);
          }
        }o++;
      }return i.push({ partialPath: r, suffixDef: a.drop(e, o) }), i;
    }, e.nextPossibleTokensAfter = function (t, e, n, r) {
      var i = ["EXIT_NONE_TERMINAL"],
          o = !1,
          s = e.length,
          u = s - r - 1,
          p = [],
          l = [];for (l.push({ idx: -1, def: t, ruleStack: [], occurrenceStack: [] }); !a.isEmpty(l);) {
        var h = l.pop();if ("EXIT_ALTERNATIVE" !== h) {
          var f = h.def,
              d = h.idx,
              E = h.ruleStack,
              m = h.occurrenceStack;if (!a.isEmpty(f)) {
            var T = f[0];if ("EXIT_NONE_TERMINAL" === T) {
              var v = { idx: d, def: a.drop(f), ruleStack: a.dropRight(E), occurrenceStack: a.dropRight(m) };l.push(v);
            } else if (T instanceof c.Terminal) {
              if (d < s - 1) {
                var g = d + 1;n(e[g], T.terminalType) && (v = { idx: g, def: a.drop(f), ruleStack: E, occurrenceStack: m }, l.push(v));
              } else {
                if (d !== s - 1) throw Error("non exhaustive match");p.push({ nextTokenType: T.terminalType, nextTokenOccurrence: T.idx, ruleStack: E, occurrenceStack: m }), o = !0;
              }
            } else if (T instanceof c.NonTerminal) {
              var _ = a.cloneArr(E);_.push(T.nonTerminalName);var R = a.cloneArr(m);R.push(T.idx), v = { idx: d, def: T.definition.concat(i, a.drop(f)), ruleStack: _, occurrenceStack: R }, l.push(v);
            } else if (T instanceof c.Option) {
              var A = { idx: d, def: a.drop(f), ruleStack: E, occurrenceStack: m };l.push(A), l.push("EXIT_ALTERNATIVE");var N = { idx: d, def: T.definition.concat(a.drop(f)), ruleStack: E, occurrenceStack: m };l.push(N);
            } else if (T instanceof c.RepetitionMandatory) {
              var O = new c.Repetition({ definition: T.definition, idx: T.idx });v = { idx: d, def: T.definition.concat([O], a.drop(f)), ruleStack: E, occurrenceStack: m }, l.push(v);
            } else if (T instanceof c.RepetitionMandatoryWithSeparator) {
              var S = new c.Terminal({ terminalType: T.separator });O = new c.Repetition({ definition: [S].concat(T.definition), idx: T.idx }), v = { idx: d, def: T.definition.concat([O], a.drop(f)), ruleStack: E, occurrenceStack: m }, l.push(v);
            } else if (T instanceof c.RepetitionWithSeparator) {
              A = { idx: d, def: a.drop(f), ruleStack: E, occurrenceStack: m }, l.push(A), l.push("EXIT_ALTERNATIVE"), S = new c.Terminal({ terminalType: T.separator });var I = new c.Repetition({ definition: [S].concat(T.definition), idx: T.idx });N = { idx: d, def: T.definition.concat([I], a.drop(f)), ruleStack: E, occurrenceStack: m }, l.push(N);
            } else if (T instanceof c.Repetition) A = { idx: d, def: a.drop(f), ruleStack: E, occurrenceStack: m }, l.push(A), l.push("EXIT_ALTERNATIVE"), I = new c.Repetition({ definition: T.definition, idx: T.idx }), N = { idx: d, def: T.definition.concat([I], a.drop(f)), ruleStack: E, occurrenceStack: m }, l.push(N);else if (T instanceof c.Alternation) for (var L = T.definition.length - 1; L >= 0; L--) {
              var k = { idx: d, def: T.definition[L].definition.concat(a.drop(f)), ruleStack: E, occurrenceStack: m };l.push(k), l.push("EXIT_ALTERNATIVE");
            } else if (T instanceof c.Flat) l.push({ idx: d, def: T.definition.concat(a.drop(f)), ruleStack: E, occurrenceStack: m });else {
              if (!(T instanceof c.Rule)) throw Error("non exhaustive match");l.push(y(T, d, E, m));
            }
          }
        } else o && a.last(l).idx <= u && l.pop();
      }return p;
    };
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = n(0),
        i = n(1),
        o = function () {
      function t() {}return t.prototype.walk = function (t, e) {
        var n = this;void 0 === e && (e = []), r.forEach(t.definition, function (o, a) {
          var s = r.drop(t.definition, a + 1);if (o instanceof i.NonTerminal) n.walkProdRef(o, s, e);else if (o instanceof i.Terminal) n.walkTerminal(o, s, e);else if (o instanceof i.Flat) n.walkFlat(o, s, e);else if (o instanceof i.Option) n.walkOption(o, s, e);else if (o instanceof i.RepetitionMandatory) n.walkAtLeastOne(o, s, e);else if (o instanceof i.RepetitionMandatoryWithSeparator) n.walkAtLeastOneSep(o, s, e);else if (o instanceof i.RepetitionWithSeparator) n.walkManySep(o, s, e);else if (o instanceof i.Repetition) n.walkMany(o, s, e);else {
            if (!(o instanceof i.Alternation)) throw Error("non exhaustive match");n.walkOr(o, s, e);
          }
        });
      }, t.prototype.walkTerminal = function (t, e, n) {}, t.prototype.walkProdRef = function (t, e, n) {}, t.prototype.walkFlat = function (t, e, n) {
        var r = e.concat(n);this.walk(t, r);
      }, t.prototype.walkOption = function (t, e, n) {
        var r = e.concat(n);this.walk(t, r);
      }, t.prototype.walkAtLeastOne = function (t, e, n) {
        var r = [new i.Option({ definition: t.definition })].concat(e, n);this.walk(t, r);
      }, t.prototype.walkAtLeastOneSep = function (t, e, n) {
        var r = a(t, e, n);this.walk(t, r);
      }, t.prototype.walkMany = function (t, e, n) {
        var r = [new i.Option({ definition: t.definition })].concat(e, n);this.walk(t, r);
      }, t.prototype.walkManySep = function (t, e, n) {
        var r = a(t, e, n);this.walk(t, r);
      }, t.prototype.walkOr = function (t, e, n) {
        var o = this,
            a = e.concat(n);r.forEach(t.definition, function (t) {
          var e = new i.Flat({ definition: [t] });o.walk(e, a);
        });
      }, t;
    }();function a(t, e, n) {
      return [new i.Option({ definition: [new i.Terminal({ terminalType: t.separator })].concat(t.definition) })].concat(e, n);
    }e.RestWalker = o;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = n(27),
        i = n(0),
        o = n(7),
        a = n(20);!function (t) {
      t[t.MISSING_PATTERN = 0] = "MISSING_PATTERN", t[t.INVALID_PATTERN = 1] = "INVALID_PATTERN", t[t.EOI_ANCHOR_FOUND = 2] = "EOI_ANCHOR_FOUND", t[t.UNSUPPORTED_FLAGS_FOUND = 3] = "UNSUPPORTED_FLAGS_FOUND", t[t.DUPLICATE_PATTERNS_FOUND = 4] = "DUPLICATE_PATTERNS_FOUND", t[t.INVALID_GROUP_TYPE_FOUND = 5] = "INVALID_GROUP_TYPE_FOUND", t[t.PUSH_MODE_DOES_NOT_EXIST = 6] = "PUSH_MODE_DOES_NOT_EXIST", t[t.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE", t[t.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY", t[t.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST", t[t.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED", t[t.SOI_ANCHOR_FOUND = 11] = "SOI_ANCHOR_FOUND", t[t.EMPTY_MATCH_PATTERN = 12] = "EMPTY_MATCH_PATTERN", t[t.NO_LINE_BREAKS_FLAGS = 13] = "NO_LINE_BREAKS_FLAGS", t[t.UNREACHABLE_PATTERN = 14] = "UNREACHABLE_PATTERN", t[t.IDENTIFY_TERMINATOR = 15] = "IDENTIFY_TERMINATOR", t[t.CUSTOM_LINE_BREAK = 16] = "CUSTOM_LINE_BREAK";
    }(e.LexerDefinitionErrorType || (e.LexerDefinitionErrorType = {}));var s = { deferDefinitionErrorsHandling: !1, positionTracking: "full", lineTerminatorsPattern: /\n|\r\n?/g, lineTerminatorCharacters: ["\n", "\r"], ensureOptimizations: !1, safeMode: !1, errorMessageProvider: a.defaultLexerErrorProvider };Object.freeze(s);var u = function () {
      function t(t, e) {
        var n = this;if (void 0 === e && (e = s), this.lexerDefinition = t, this.lexerDefinitionErrors = [], this.lexerDefinitionWarning = [], this.patternIdxToConfig = {}, this.charCodeToPatternIdxToConfig = {}, this.modes = [], this.emptyGroups = {}, this.config = void 0, this.trackStartLines = !0, this.trackEndLines = !0, this.hasCustom = !1, this.canModeBeOptimized = {}, "boolean" == typeof e) throw Error("The second argument to the Lexer constructor is now an ILexerConfig Object.\na boolean 2nd argument is no longer supported");if (this.config = i.merge(s, e), this.config.lineTerminatorsPattern === s.lineTerminatorsPattern) this.config.lineTerminatorsPattern = r.LineTerminatorOptimizedTester;else if (this.config.lineTerminatorCharacters === s.lineTerminatorCharacters) throw Error("Error: Missing <lineTerminatorCharacters> property on the Lexer config.\n\tFor details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS");if (e.safeMode && e.ensureOptimizations) throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');this.trackStartLines = /full|onlyStart/i.test(this.config.positionTracking), this.trackEndLines = /full/i.test(this.config.positionTracking);var a,
            u = !0;i.isArray(t) ? ((a = { modes: {} }).modes[r.DEFAULT_MODE] = i.cloneArr(t), a[r.DEFAULT_MODE] = r.DEFAULT_MODE) : (u = !1, a = i.cloneObj(t)), this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(r.performRuntimeChecks(a, this.trackStartLines, this.config.lineTerminatorCharacters)), this.lexerDefinitionWarning = this.lexerDefinitionWarning.concat(r.performWarningRuntimeChecks(a, this.trackStartLines, this.config.lineTerminatorCharacters)), a.modes = a.modes ? a.modes : {}, i.forEach(a.modes, function (t, e) {
          a.modes[e] = i.reject(t, function (t) {
            return i.isUndefined(t);
          });
        });var c = i.keys(a.modes);if (i.forEach(a.modes, function (t, a) {
          if (n.modes.push(a), n.lexerDefinitionErrors = n.lexerDefinitionErrors.concat(r.validatePatterns(t, c)), i.isEmpty(n.lexerDefinitionErrors)) {
            o.augmentTokenTypes(t);var s = r.analyzeTokenTypes(t, { lineTerminatorCharacters: n.config.lineTerminatorCharacters, positionTracking: e.positionTracking, ensureOptimizations: e.ensureOptimizations, safeMode: e.safeMode });n.patternIdxToConfig[a] = s.patternIdxToConfig, n.charCodeToPatternIdxToConfig[a] = s.charCodeToPatternIdxToConfig, n.emptyGroups = i.merge(n.emptyGroups, s.emptyGroups), n.hasCustom = s.hasCustom || n.hasCustom, n.canModeBeOptimized[a] = s.canBeOptimized;
          }
        }), this.defaultMode = a.defaultMode, !i.isEmpty(this.lexerDefinitionErrors) && !this.config.deferDefinitionErrorsHandling) {
          var p = i.map(this.lexerDefinitionErrors, function (t) {
            return t.message;
          }).join("-----------------------\n");throw new Error("Errors detected in definition of Lexer:\n" + p);
        }if (i.forEach(this.lexerDefinitionWarning, function (t) {
          i.PRINT_WARNING(t.message);
        }), r.SUPPORT_STICKY ? (this.chopInput = i.IDENTITY, this.match = this.matchWithTest) : (this.updateLastIndex = i.NOOP, this.match = this.matchWithExec), u && (this.handleModes = i.NOOP), !1 === this.trackStartLines && (this.computeNewColumn = i.IDENTITY), !1 === this.trackEndLines && (this.updateTokenEndLineColumnLocation = i.NOOP), /full/i.test(this.config.positionTracking)) this.createTokenInstance = this.createFullToken;else if (/onlyStart/i.test(this.config.positionTracking)) this.createTokenInstance = this.createStartOnlyToken;else {
          if (!/onlyOffset/i.test(this.config.positionTracking)) throw Error('Invalid <positionTracking> config option: "' + this.config.positionTracking + '"');this.createTokenInstance = this.createOffsetOnlyToken;
        }this.hasCustom ? this.addToken = this.addTokenUsingPush : this.addToken = this.addTokenUsingMemberAccess;var l = i.reduce(this.canModeBeOptimized, function (t, e, n) {
          return !1 === e && t.push(n), t;
        }, []);if (e.ensureOptimizations && !i.isEmpty(l)) throw Error("Lexer Modes: < " + l.join(", ") + ' > cannot be optimized.\n\t Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.\n\t Or inspect the console log for details on how to resolve these issues.');
      }return t.prototype.tokenize = function (t, e) {
        if (void 0 === e && (e = this.defaultMode), !i.isEmpty(this.lexerDefinitionErrors)) {
          var n = i.map(this.lexerDefinitionErrors, function (t) {
            return t.message;
          }).join("-----------------------\n");throw new Error("Unable to Tokenize because Errors detected in definition of Lexer:\n" + n);
        }return this.tokenizeInternal(t, e);
      }, t.prototype.tokenizeInternal = function (t, e) {
        var n,
            o,
            a,
            s,
            u,
            c,
            p,
            l,
            h,
            f,
            d,
            E,
            m = this,
            y = t,
            T = y.length,
            v = 0,
            g = 0,
            _ = this.hasCustom ? 0 : Math.floor(t.length / 10),
            R = new Array(_),
            A = [],
            N = this.trackStartLines ? 1 : void 0,
            O = this.trackStartLines ? 1 : void 0,
            S = r.cloneEmptyGroups(this.emptyGroups),
            I = this.trackStartLines,
            L = this.config.lineTerminatorsPattern,
            k = 0,
            P = [],
            x = [],
            C = [],
            M = [];Object.freeze(M);var F,
            b = void 0,
            D = function (t) {
          if (1 === C.length && void 0 === t.tokenType.PUSH_MODE) {
            var e = m.config.errorMessageProvider.buildUnableToPopLexerModeMessage(t);A.push({ offset: t.startOffset, line: void 0 !== t.startLine ? t.startLine : void 0, column: void 0 !== t.startColumn ? t.startColumn : void 0, length: t.image.length, message: e });
          } else {
            C.pop();var n = i.last(C);P = m.patternIdxToConfig[n], x = m.charCodeToPatternIdxToConfig[n], k = P.length;var r = m.canModeBeOptimized[n] && !1 === m.config.safeMode;b = x && r ? function (t) {
              var e = x[t];return void 0 === e ? M : e;
            } : function () {
              return P;
            };
          }
        };function w(t) {
          C.push(t), x = this.charCodeToPatternIdxToConfig[t], P = this.patternIdxToConfig[t], k = P.length, k = P.length;var e = this.canModeBeOptimized[t] && !1 === this.config.safeMode;b = x && e ? function (t) {
            var e = x[t];return void 0 === e ? M : e;
          } : function () {
            return P;
          };
        }for (w.call(this, e); v < T;) {
          u = null;var U = y.charCodeAt(v),
              G = b(U),
              B = G.length;for (n = 0; n < B; n++) {
            var K = (F = G[n]).pattern;if (!1 !== (Z = F.short) ? U === Z && (u = K) : !0 === F.isCustom ? u = null !== (E = K.exec(y, v, R, S)) ? E[0] : E : (this.updateLastIndex(K, v), u = this.match(K, t, v)), null !== u) {
              if (void 0 !== (s = F.longerAlt)) {
                var W = P[s],
                    j = W.pattern;!0 === W.isCustom ? a = null !== (E = j.exec(y, v, R, S)) ? E[0] : E : (this.updateLastIndex(j, v), a = this.match(j, t, v)), a && a.length > u.length && (u = a, F = W);
              }break;
            }
          }if (null !== u) {
            if (c = u.length, void 0 !== (p = F.group) && (l = F.tokenTypeIdx, h = this.createTokenInstance(u, v, l, F.tokenType, N, O, c), !1 === p ? g = this.addToken(R, g, h) : S[p].push(h)), t = this.chopInput(t, c), v += c, O = this.computeNewColumn(O, c), !0 === I && !0 === F.canLineTerminator) {
              var V = 0,
                  Y = void 0,
                  H = void 0;L.lastIndex = 0;do {
                !0 === (Y = L.test(u)) && (H = L.lastIndex - 1, V++);
              } while (Y);0 !== V && (N += V, O = c - H, this.updateTokenEndLineColumnLocation(h, p, H, V, N, O, c));
            }this.handleModes(F, D, w, h);
          } else {
            for (var X = v, z = N, q = O, $ = !1; !$ && v < T;) for (y.charCodeAt(v), t = this.chopInput(t, 1), v++, o = 0; o < k; o++) {
              var Z,
                  Q = P[o];K = Q.pattern;if (!1 !== (Z = Q.short) ? y.charCodeAt(v) === Z && ($ = !0) : !0 === Q.isCustom ? $ = null !== K.exec(y, v, R, S) : (this.updateLastIndex(K, v), $ = null !== K.exec(t)), !0 === $) break;
            }f = v - X, d = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(y, X, f, z, q), A.push({ offset: X, line: z, column: q, length: f, message: d });
          }
        }return this.hasCustom || (R.length = g), { tokens: R, groups: S, errors: A };
      }, t.prototype.handleModes = function (t, e, n, r) {
        if (!0 === t.pop) {
          var i = t.push;e(r), void 0 !== i && n.call(this, i);
        } else void 0 !== t.push && n.call(this, t.push);
      }, t.prototype.chopInput = function (t, e) {
        return t.substring(e);
      }, t.prototype.updateLastIndex = function (t, e) {
        t.lastIndex = e;
      }, t.prototype.updateTokenEndLineColumnLocation = function (t, e, n, r, i, o, a) {
        var s, u;void 0 !== e && (u = (s = n === a - 1) ? -1 : 0, 1 === r && !0 === s || (t.endLine = i + u, t.endColumn = o - 1 - u));
      }, t.prototype.computeNewColumn = function (t, e) {
        return t + e;
      }, t.prototype.createTokenInstance = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];return null;
      }, t.prototype.createOffsetOnlyToken = function (t, e, n, r) {
        return { image: t, startOffset: e, tokenTypeIdx: n, tokenType: r };
      }, t.prototype.createStartOnlyToken = function (t, e, n, r, i, o) {
        return { image: t, startOffset: e, startLine: i, startColumn: o, tokenTypeIdx: n, tokenType: r };
      }, t.prototype.createFullToken = function (t, e, n, r, i, o, a) {
        return { image: t, startOffset: e, endOffset: e + a - 1, startLine: i, endLine: i, startColumn: o, endColumn: o + a - 1, tokenTypeIdx: n, tokenType: r };
      }, t.prototype.addToken = function (t, e, n) {
        return 666;
      }, t.prototype.addTokenUsingPush = function (t, e, n) {
        return t.push(n), e;
      }, t.prototype.addTokenUsingMemberAccess = function (t, e, n) {
        return t[e] = n, ++e;
      }, t.prototype.match = function (t, e, n) {
        return null;
      }, t.prototype.matchWithTest = function (t, e, n) {
        return !0 === t.test(e) ? e.substring(n, t.lastIndex) : null;
      }, t.prototype.matchWithExec = function (t, e) {
        var n = t.exec(e);return null !== n ? n[0] : n;
      }, t.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.", t.NA = /NOT_APPLICABLE/, t;
    }();e.Lexer = u;
  }, function (t, e, n) {
    "use strict";
    var r,
        i = this && this.__extends || (r = function (t, e) {
      return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
      })(t, e);
    }, function (t, e) {
      function n() {
        this.constructor = t;
      }r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
    });Object.defineProperty(e, "__esModule", { value: !0 });var o = n(0),
        a = n(4),
        s = n(9),
        u = n(1),
        c = n(5);e.addTerminalToCst = function (t, e, n) {
      void 0 === t.children[n] ? t.children[n] = [e] : t.children[n].push(e);
    }, e.addNoneTerminalToCst = function (t, e, n) {
      void 0 === t.children[e] ? t.children[e] = [n] : t.children[e].push(n);
    };var p = function (t) {
      function e(e) {
        var n = t.call(this) || this;return n.result = [], n.ruleIdx = e, n;
      }return i(e, t), e.prototype.collectNamedDSLMethod = function (t, e, n) {
        if (!o.isUndefined(t.name)) {
          var r = void 0;if (t instanceof u.Option || t instanceof u.Repetition || t instanceof u.RepetitionMandatory || t instanceof u.Alternation) r = new e({ definition: t.definition, idx: t.idx });else {
            if (!(t instanceof u.RepetitionMandatoryWithSeparator || t instanceof u.RepetitionWithSeparator)) throw Error("non exhaustive match");r = new e({ definition: t.definition, idx: t.idx, separator: t.separator });
          }var i = [r],
              a = s.getKeyForAutomaticLookahead(this.ruleIdx, n, t.idx);this.result.push({ def: i, key: a, name: t.name, orgProd: t });
        }
      }, e.prototype.visitOption = function (t) {
        this.collectNamedDSLMethod(t, u.Option, s.OPTION_IDX);
      }, e.prototype.visitRepetition = function (t) {
        this.collectNamedDSLMethod(t, u.Repetition, s.MANY_IDX);
      }, e.prototype.visitRepetitionMandatory = function (t) {
        this.collectNamedDSLMethod(t, u.RepetitionMandatory, s.AT_LEAST_ONE_IDX);
      }, e.prototype.visitRepetitionMandatoryWithSeparator = function (t) {
        this.collectNamedDSLMethod(t, u.RepetitionMandatoryWithSeparator, s.AT_LEAST_ONE_SEP_IDX);
      }, e.prototype.visitRepetitionWithSeparator = function (t) {
        this.collectNamedDSLMethod(t, u.RepetitionWithSeparator, s.MANY_SEP_IDX);
      }, e.prototype.visitAlternation = function (t) {
        var e = this;this.collectNamedDSLMethod(t, u.Alternation, s.OR_IDX);var n = t.definition.length > 1;o.forEach(t.definition, function (r, i) {
          if (!o.isUndefined(r.name)) {
            var a = r.definition;a = n ? [new u.Option({ definition: r.definition })] : r.definition;var c = s.getKeyForAltIndex(e.ruleIdx, s.OR_IDX, t.idx, i);e.result.push({ def: a, key: c, name: r.name, orgProd: r });
          }
        });
      }, e;
    }(c.GAstVisitor);e.NamedDSLMethodsCollectorVisitor = p, e.analyzeCst = function (t, e) {
      var n = { dictDef: new a.HashTable(), allRuleNames: [] };return o.forEach(t, function (t) {
        var r = e.get(t.name);n.allRuleNames.push(t.name);var i = new p(r);t.accept(i), o.forEach(i.result, function (e) {
          e.def, e.key;var r = e.name;n.allRuleNames.push(t.name + r);
        });
      }), n;
    };
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.VERSION = "4.6.0";
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = n(3),
        i = n(15),
        o = n(2),
        a = n(6),
        s = n(17),
        u = n(10),
        c = n(39),
        p = n(5),
        l = n(1),
        h = n(24),
        f = n(40),
        d = n(20),
        E = {};E.VERSION = s.VERSION, E.Parser = r.Parser, E.CstParser = r.CstParser, E.EmbeddedActionsParser = r.EmbeddedActionsParser;E.ParserDefinitionErrorType = r.ParserDefinitionErrorType, E.Lexer = i.Lexer, E.LexerDefinitionErrorType = i.LexerDefinitionErrorType, E.EOF = o.EOF, E.tokenName = o.tokenName, E.tokenLabel = o.tokenLabel, E.tokenMatcher = o.tokenMatcher, E.createToken = o.createToken, E.createTokenInstance = o.createTokenInstance, E.EMPTY_ALT = r.EMPTY_ALT, E.defaultParserErrorProvider = u.defaultParserErrorProvider, E.isRecognitionException = a.isRecognitionException, E.EarlyExitException = a.EarlyExitException, E.MismatchedTokenException = a.MismatchedTokenException, E.NotAllInputParsedException = a.NotAllInputParsedException, E.NoViableAltException = a.NoViableAltException, E.defaultLexerErrorProvider = d.defaultLexerErrorProvider, E.Flat = l.Flat, E.Repetition = l.Repetition, E.RepetitionWithSeparator = l.RepetitionWithSeparator, E.RepetitionMandatory = l.RepetitionMandatory, E.RepetitionMandatoryWithSeparator = l.RepetitionMandatoryWithSeparator, E.Option = l.Option, E.Alternation = l.Alternation, E.NonTerminal = l.NonTerminal, E.Terminal = l.Terminal, E.Rule = l.Rule, E.GAstVisitor = p.GAstVisitor, E.serializeGrammar = l.serializeGrammar, E.serializeProduction = l.serializeProduction, E.resolveGrammar = h.resolveGrammar, E.defaultGrammarResolverErrorProvider = u.defaultGrammarResolverErrorProvider, E.validateGrammar = h.validateGrammar, E.defaultGrammarValidatorErrorProvider = u.defaultGrammarValidatorErrorProvider, E.assignOccurrenceIndices = h.assignOccurrenceIndices, E.clearCache = function () {
      console.warn("The clearCache function was 'soft' removed from the Chevrotain API.\n\t It performs no action other than printing this message.\n\t Please avoid using it as it will be completely removed in the future");
    }, E.createSyntaxDiagramsCode = c.createSyntaxDiagramsCode, E.generateParserFactory = f.generateParserFactory, E.generateParserModule = f.generateParserModule, t.exports = E;
  }, function (t, e, n) {
    var r, i, o;"undefined" != typeof self && self, i = [], void 0 === (o = "function" == typeof (r = function () {
      function t() {}t.prototype.saveState = function () {
        return { idx: this.idx, input: this.input, groupIdx: this.groupIdx };
      }, t.prototype.restoreState = function (t) {
        this.idx = t.idx, this.input = t.input, this.groupIdx = t.groupIdx;
      }, t.prototype.pattern = function (t) {
        this.idx = 0, this.input = t, this.groupIdx = 0, this.consumeChar("/");var e = this.disjunction();this.consumeChar("/");for (var n = { type: "Flags", global: !1, ignoreCase: !1, multiLine: !1, unicode: !1, sticky: !1 }; this.isRegExpFlag();) switch (this.popChar()) {case "g":
            s(n, "global");break;case "i":
            s(n, "ignoreCase");break;case "m":
            s(n, "multiLine");break;case "u":
            s(n, "unicode");break;case "y":
            s(n, "sticky");}if (this.idx !== this.input.length) throw Error("Redundant input: " + this.input.substring(this.idx));return { type: "Pattern", flags: n, value: e };
      }, t.prototype.disjunction = function () {
        var t = [];for (t.push(this.alternative()); "|" === this.peekChar();) this.consumeChar("|"), t.push(this.alternative());return { type: "Disjunction", value: t };
      }, t.prototype.alternative = function () {
        for (var t = []; this.isTerm();) t.push(this.term());return { type: "Alternative", value: t };
      }, t.prototype.term = function () {
        return this.isAssertion() ? this.assertion() : this.atom();
      }, t.prototype.assertion = function () {
        switch (this.popChar()) {case "^":
            return { type: "StartAnchor" };case "$":
            return { type: "EndAnchor" };case "\\":
            switch (this.popChar()) {case "b":
                return { type: "WordBoundary" };case "B":
                return { type: "NonWordBoundary" };}throw Error("Invalid Assertion Escape");case "(":
            var t;switch (this.consumeChar("?"), this.popChar()) {case "=":
                t = "Lookahead";break;case "!":
                t = "NegativeLookahead";}u(t);var e = this.disjunction();return this.consumeChar(")"), { type: t, value: e };}!function () {
          throw Error("Internal Error - Should never get here!");
        }();
      }, t.prototype.quantifier = function (t) {
        var e;switch (this.popChar()) {case "*":
            e = { atLeast: 0, atMost: 1 / 0 };break;case "+":
            e = { atLeast: 1, atMost: 1 / 0 };break;case "?":
            e = { atLeast: 0, atMost: 1 };break;case "{":
            var n = this.integerIncludingZero();switch (this.popChar()) {case "}":
                e = { atLeast: n, atMost: n };break;case ",":
                var r;this.isDigit() ? (r = this.integerIncludingZero(), e = { atLeast: n, atMost: r }) : e = { atLeast: n, atMost: 1 / 0 }, this.consumeChar("}");}if (!0 === t && void 0 === e) return;u(e);}if (!0 !== t || void 0 !== e) return u(e), "?" === this.peekChar(0) ? (this.consumeChar("?"), e.greedy = !1) : e.greedy = !0, e.type = "Quantifier", e;
      }, t.prototype.atom = function () {
        var t;switch (this.peekChar()) {case ".":
            t = this.dotAll();break;case "\\":
            t = this.atomEscape();break;case "[":
            t = this.characterClass();break;case "(":
            t = this.group();}return void 0 === t && this.isPatternCharacter() && (t = this.patternCharacter()), u(t), this.isQuantifier() && (t.quantifier = this.quantifier()), t;
      }, t.prototype.dotAll = function () {
        return this.consumeChar("."), { type: "Set", complement: !0, value: [o("\n"), o("\r"), o("\u2028"), o("\u2029")] };
      }, t.prototype.atomEscape = function () {
        switch (this.consumeChar("\\"), this.peekChar()) {case "1":case "2":case "3":case "4":case "5":case "6":case "7":case "8":case "9":
            return this.decimalEscapeAtom();case "d":case "D":case "s":case "S":case "w":case "W":
            return this.characterClassEscape();case "f":case "n":case "r":case "t":case "v":
            return this.controlEscapeAtom();case "c":
            return this.controlLetterEscapeAtom();case "0":
            return this.nulCharacterAtom();case "x":
            return this.hexEscapeSequenceAtom();case "u":
            return this.regExpUnicodeEscapeSequenceAtom();default:
            return this.identityEscapeAtom();}
      }, t.prototype.decimalEscapeAtom = function () {
        var t = this.positiveInteger();return { type: "GroupBackReference", value: t };
      }, t.prototype.characterClassEscape = function () {
        var t,
            e = !1;switch (this.popChar()) {case "d":
            t = c;break;case "D":
            t = c, e = !0;break;case "s":
            t = l;break;case "S":
            t = l, e = !0;break;case "w":
            t = p;break;case "W":
            t = p, e = !0;}return u(t), { type: "Set", value: t, complement: e };
      }, t.prototype.controlEscapeAtom = function () {
        var t;switch (this.popChar()) {case "f":
            t = o("\f");break;case "n":
            t = o("\n");break;case "r":
            t = o("\r");break;case "t":
            t = o("\t");break;case "v":
            t = o("\v");}return u(t), { type: "Character", value: t };
      }, t.prototype.controlLetterEscapeAtom = function () {
        this.consumeChar("c");var t = this.popChar();if (!1 === /[a-zA-Z]/.test(t)) throw Error("Invalid ");var e = t.toUpperCase().charCodeAt(0) - 64;return { type: "Character", value: e };
      }, t.prototype.nulCharacterAtom = function () {
        return this.consumeChar("0"), { type: "Character", value: o("\0") };
      }, t.prototype.hexEscapeSequenceAtom = function () {
        return this.consumeChar("x"), this.parseHexDigits(2);
      }, t.prototype.regExpUnicodeEscapeSequenceAtom = function () {
        return this.consumeChar("u"), this.parseHexDigits(4);
      }, t.prototype.identityEscapeAtom = function () {
        var t = this.popChar();return { type: "Character", value: o(t) };
      }, t.prototype.classPatternCharacterAtom = function () {
        switch (this.peekChar()) {case "\n":case "\r":case "\u2028":case "\u2029":case "\\":case "]":
            throw Error("TBD");default:
            var t = this.popChar();return { type: "Character", value: o(t) };}
      }, t.prototype.characterClass = function () {
        var t = [],
            e = !1;for (this.consumeChar("["), "^" === this.peekChar(0) && (this.consumeChar("^"), e = !0); this.isClassAtom();) {
          var n = this.classAtom(),
              r = "Character" === n.type;if (r && this.isRangeDash()) {
            this.consumeChar("-");var i = this.classAtom(),
                s = "Character" === i.type;if (s) {
              if (i.value < n.value) throw Error("Range out of order in character class");t.push({ from: n.value, to: i.value });
            } else a(n.value, t), t.push(o("-")), a(i.value, t);
          } else a(n.value, t);
        }return this.consumeChar("]"), { type: "Set", complement: e, value: t };
      }, t.prototype.classAtom = function () {
        switch (this.peekChar()) {case "]":case "\n":case "\r":case "\u2028":case "\u2029":
            throw Error("TBD");case "\\":
            return this.classEscape();default:
            return this.classPatternCharacterAtom();}
      }, t.prototype.classEscape = function () {
        switch (this.consumeChar("\\"), this.peekChar()) {case "b":
            return this.consumeChar("b"), { type: "Character", value: o("\b") };case "d":case "D":case "s":case "S":case "w":case "W":
            return this.characterClassEscape();case "f":case "n":case "r":case "t":case "v":
            return this.controlEscapeAtom();case "c":
            return this.controlLetterEscapeAtom();case "0":
            return this.nulCharacterAtom();case "x":
            return this.hexEscapeSequenceAtom();case "u":
            return this.regExpUnicodeEscapeSequenceAtom();default:
            return this.identityEscapeAtom();}
      }, t.prototype.group = function () {
        var t = !0;switch (this.consumeChar("("), this.peekChar(0)) {case "?":
            this.consumeChar("?"), this.consumeChar(":"), t = !1;break;default:
            this.groupIdx++;}var e = this.disjunction();this.consumeChar(")");var n = { type: "Group", capturing: t, value: e };return t && (n.idx = this.groupIdx), n;
      }, t.prototype.positiveInteger = function () {
        var t = this.popChar();if (!1 === i.test(t)) throw Error("Expecting a positive integer");for (; r.test(this.peekChar(0));) t += this.popChar();return parseInt(t, 10);
      }, t.prototype.integerIncludingZero = function () {
        var t = this.popChar();if (!1 === r.test(t)) throw Error("Expecting an integer");for (; r.test(this.peekChar(0));) t += this.popChar();return parseInt(t, 10);
      }, t.prototype.patternCharacter = function () {
        var t = this.popChar();switch (t) {case "\n":case "\r":case "\u2028":case "\u2029":case "^":case "$":case "\\":case ".":case "*":case "+":case "?":case "(":case ")":case "[":case "|":
            throw Error("TBD");default:
            return { type: "Character", value: o(t) };}
      }, t.prototype.isRegExpFlag = function () {
        switch (this.peekChar(0)) {case "g":case "i":case "m":case "u":case "y":
            return !0;default:
            return !1;}
      }, t.prototype.isRangeDash = function () {
        return "-" === this.peekChar() && this.isClassAtom(1);
      }, t.prototype.isDigit = function () {
        return r.test(this.peekChar(0));
      }, t.prototype.isClassAtom = function (t) {
        switch (void 0 === t && (t = 0), this.peekChar(t)) {case "]":case "\n":case "\r":case "\u2028":case "\u2029":
            return !1;default:
            return !0;}
      }, t.prototype.isTerm = function () {
        return this.isAtom() || this.isAssertion();
      }, t.prototype.isAtom = function () {
        if (this.isPatternCharacter()) return !0;switch (this.peekChar(0)) {case ".":case "\\":case "[":case "(":
            return !0;default:
            return !1;}
      }, t.prototype.isAssertion = function () {
        switch (this.peekChar(0)) {case "^":case "$":
            return !0;case "\\":
            switch (this.peekChar(1)) {case "b":case "B":
                return !0;default:
                return !1;}case "(":
            return "?" === this.peekChar(1) && ("=" === this.peekChar(2) || "!" === this.peekChar(2));default:
            return !1;}
      }, t.prototype.isQuantifier = function () {
        var t = this.saveState();try {
          return void 0 !== this.quantifier(!0);
        } catch (t) {
          return !1;
        } finally {
          this.restoreState(t);
        }
      }, t.prototype.isPatternCharacter = function () {
        switch (this.peekChar()) {case "^":case "$":case "\\":case ".":case "*":case "+":case "?":case "(":case ")":case "[":case "|":case "/":case "\n":case "\r":case "\u2028":case "\u2029":
            return !1;default:
            return !0;}
      }, t.prototype.parseHexDigits = function (t) {
        for (var e = "", r = 0; r < t; r++) {
          var i = this.popChar();if (!1 === n.test(i)) throw Error("Expecting a HexDecimal digits");e += i;
        }var o = parseInt(e, 16);return { type: "Character", value: o };
      }, t.prototype.peekChar = function (t) {
        return void 0 === t && (t = 0), this.input[this.idx + t];
      }, t.prototype.popChar = function () {
        var t = this.peekChar(0);return this.consumeChar(), t;
      }, t.prototype.consumeChar = function (t) {
        if (void 0 !== t && this.input[this.idx] !== t) throw Error("Expected: '" + t + "' but found: '" + this.input[this.idx] + "' at offset: " + this.idx);if (this.idx >= this.input.length) throw Error("Unexpected end of input");this.idx++;
      };var e,
          n = /[0-9a-fA-F]/,
          r = /[0-9]/,
          i = /[1-9]/;function o(t) {
        return t.charCodeAt(0);
      }function a(t, e) {
        void 0 !== t.length ? t.forEach(function (t) {
          e.push(t);
        }) : e.push(t);
      }function s(t, e) {
        if (!0 === t[e]) throw "duplicate flag " + e;t[e] = !0;
      }function u(t) {
        if (void 0 === t) throw Error("Internal Error - Should never get here!");
      }var c = [];for (e = o("0"); e <= o("9"); e++) c.push(e);var p = [o("_")].concat(c);for (e = o("a"); e <= o("z"); e++) p.push(e);for (e = o("A"); e <= o("Z"); e++) p.push(e);var l = [o(" "), o("\f"), o("\n"), o("\r"), o("\t"), o("\v"), o("\t"), o(" "), o(" "), o(" "), o(" "), o(" "), o(" "), o(" "), o(" "), o(" "), o(" "), o(" "), o(" "), o(" "), o("\u2028"), o("\u2029"), o(" "), o(" "), o("　"), o("\ufeff")];function h() {}return h.prototype.visitChildren = function (t) {
        for (var e in t) {
          var n = t[e];t.hasOwnProperty(e) && (void 0 !== n.type ? this.visit(n) : Array.isArray(n) && n.forEach(function (t) {
            this.visit(t);
          }, this));
        }
      }, h.prototype.visit = function (t) {
        switch (t.type) {case "Pattern":
            this.visitPattern(t);break;case "Flags":
            this.visitFlags(t);break;case "Disjunction":
            this.visitDisjunction(t);break;case "Alternative":
            this.visitAlternative(t);break;case "StartAnchor":
            this.visitStartAnchor(t);break;case "EndAnchor":
            this.visitEndAnchor(t);break;case "WordBoundary":
            this.visitWordBoundary(t);break;case "NonWordBoundary":
            this.visitNonWordBoundary(t);break;case "Lookahead":
            this.visitLookahead(t);break;case "NegativeLookahead":
            this.visitNegativeLookahead(t);break;case "Character":
            this.visitCharacter(t);break;case "Set":
            this.visitSet(t);break;case "Group":
            this.visitGroup(t);break;case "GroupBackReference":
            this.visitGroupBackReference(t);break;case "Quantifier":
            this.visitQuantifier(t);}this.visitChildren(t);
      }, h.prototype.visitPattern = function (t) {}, h.prototype.visitFlags = function (t) {}, h.prototype.visitDisjunction = function (t) {}, h.prototype.visitAlternative = function (t) {}, h.prototype.visitStartAnchor = function (t) {}, h.prototype.visitEndAnchor = function (t) {}, h.prototype.visitWordBoundary = function (t) {}, h.prototype.visitNonWordBoundary = function (t) {}, h.prototype.visitLookahead = function (t) {}, h.prototype.visitNegativeLookahead = function (t) {}, h.prototype.visitCharacter = function (t) {}, h.prototype.visitSet = function (t) {}, h.prototype.visitGroup = function (t) {}, h.prototype.visitGroupBackReference = function (t) {}, h.prototype.visitQuantifier = function (t) {}, { RegExpParser: t, BaseRegExpVisitor: h, VERSION: "0.4.0" };
    }) ? r.apply(e, i) : r) || (t.exports = o);
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.defaultLexerErrorProvider = { buildUnableToPopLexerModeMessage: function (t) {
        return "Unable to pop Lexer Mode after encountering Token ->" + t.image + "<- The Mode Stack is empty";
      }, buildUnexpectedCharactersMessage: function (t, e, n, r, i) {
        return "unexpected character: ->" + t.charAt(e) + "<- at offset: " + e + ", skipped " + n + " characters.";
      } };
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = n(0),
        i = n(1),
        o = n(8);function a(t) {
      if (t instanceof i.NonTerminal) return a(t.referencedRule);if (t instanceof i.Terminal) return c(t);if (o.isSequenceProd(t)) return s(t);if (o.isBranchingProd(t)) return u(t);throw Error("non exhaustive match");
    }function s(t) {
      for (var e, n = [], i = t.definition, s = 0, u = i.length > s, c = !0; u && c;) e = i[s], c = o.isOptionalProd(e), n = n.concat(a(e)), s += 1, u = i.length > s;return r.uniq(n);
    }function u(t) {
      var e = r.map(t.definition, function (t) {
        return a(t);
      });return r.uniq(r.flatten(e));
    }function c(t) {
      return [t.terminalType];
    }e.first = a, e.firstForSequence = s, e.firstForBranching = u, e.firstForTerminal = c;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.IN = "_~IN~_";
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r,
        i = n(29),
        o = n(0),
        a = n(1);!function (t) {
      t[t.OPTION = 0] = "OPTION", t[t.OR = 1] = "OR", t[t.MANY = 2] = "MANY", t[t.MANY_SEP = 3] = "MANY_SEP", t[t.AT_LEAST_ONE = 4] = "AT_LEAST_ONE", t[t.AT_LEAST_ONE_SEP = 5] = "AT_LEAST_ONE_SEP", t[t.REF = 6] = "REF", t[t.TERMINAL = 7] = "TERMINAL", t[t.FLAT = 8] = "FLAT";
    }(r = e.ProdType || (e.ProdType = {}));var s = /(?:\s*{\s*NAME\s*:\s*["'`]([\w$]*)["'`])?/,
        u = new RegExp(s.source.replace("{", "").replace(")?", "\\s*,)?")),
        c = /\.\s*CONSUME(\d+)?\s*\(\s*(?:[a-zA-Z_$]\w*\s*\.\s*)*([a-zA-Z_$]\w*)/,
        p = new RegExp(c.source, "g"),
        l = /\.\s*SUBRULE(\d+)?\s*\(\s*(?:[a-zA-Z_$]\w*\s*\.\s*)*([a-zA-Z_$]\w*)/,
        h = new RegExp(l.source, "g"),
        f = /\.\s*OPTION(\d+)?\s*\(/,
        d = new RegExp(f.source + s.source),
        E = new RegExp(f.source, "g"),
        m = /\.\s*MANY(\d+)?\s*\(/,
        y = new RegExp(m.source + s.source),
        T = new RegExp(m.source, "g"),
        v = /\s*SEP\s*:\s*(?:[a-zA-Z_$]\w*\s*\.\s*)*([a-zA-Z_$]\w*)/,
        g = new RegExp(/\.\s*MANY_SEP(\d+)?\s*\(\s*{/.source + u.source + v.source),
        _ = new RegExp(g.source, "g"),
        R = new RegExp(/\.\s*AT_LEAST_ONE_SEP(\d+)?\s*\(\s*{/.source + u.source + v.source),
        A = new RegExp(R.source, "g"),
        N = /\.\s*AT_LEAST_ONE(\d+)?\s*\(/,
        O = new RegExp(N.source + s.source),
        S = new RegExp(N.source, "g"),
        I = /\.\s*OR(\d+)?\s*\(/,
        L = new RegExp(I.source + s.source),
        k = new RegExp(I.source, "g"),
        P = new RegExp(u.source + /\s*(ALT)\s*:/.source),
        x = new RegExp(P.source, "g");function C(t, n, i) {
      switch (t.type) {case r.AT_LEAST_ONE:
          return function (t, e, n) {
            return M(O, new a.RepetitionMandatory({ definition: [] }), t, e, n);
          }(t, n, i);case r.AT_LEAST_ONE_SEP:
          return function (t, e, n) {
            return F(t, e, a.RepetitionMandatoryWithSeparator, R, n);
          }(t, n, i);case r.MANY_SEP:
          return function (t, e, n) {
            return F(t, e, a.RepetitionWithSeparator, g, n);
          }(t, n, i);case r.MANY:
          return function (t, e, n) {
            return M(y, new a.Repetition({ definition: [] }), t, e, n);
          }(t, n, i);case r.OPTION:
          return function (t, e, n) {
            return M(d, new a.Option({ definition: [] }), t, e, n);
          }(t, n, i);case r.OR:
          return function (t, e, n) {
            return M(L, new a.Alternation({ definition: [] }), t, e, n);
          }(t, n, i);case r.FLAT:
          return function (t, e, n) {
            var r = new a.Flat({ definition: [] }),
                i = P.exec(t.text)[1];o.isUndefined(i) || (r.name = i);return b(r, t.range, e, n);
          }(t, n, i);case r.REF:
          return function (t) {
            var e = l.exec(t.text),
                n = void 0 === e[1] ? 0 : parseInt(e[1], 10),
                r = e[2];return new a.NonTerminal({ nonTerminalName: r, idx: n });
          }(t);case r.TERMINAL:
          return function (t, n) {
            var r = c.exec(t.text),
                i = void 0 === r[1] ? 0 : parseInt(r[1], 10),
                o = r[2],
                s = e.terminalNameToConstructor[o];if (!s) throw Error("Terminal Token name: <" + o + "> not found in rule: <" + n + ">  \n\tSee: https://sap.github.io/chevrotain/docs/guide/resolving_grammar_errors.html#TERMINAL_NAME_NOT_FOUND\n\tFor Further details.");return new a.Terminal({ terminalType: s, idx: i });
          }(t, i);default:
          throw Error("non exhaustive match");}
    }function M(t, e, n, r, i) {
      var a = t.exec(n.text),
          s = void 0 === a[1];e.idx = s ? 0 : parseInt(a[1], 10);var u = a[2];return o.isUndefined(u) || (e.name = u), b(e, n.range, r, i);
    }function F(t, n, r, i, a) {
      var s = i.exec(t.text),
          u = void 0 === s[1] ? 0 : parseInt(s[1], 10),
          c = s[3],
          p = e.terminalNameToConstructor[c];if (!p) throw Error("Separator Terminal Token name: " + c + " not found");var l = new r({ definition: [], separator: p, idx: u }),
          h = s[2];return o.isUndefined(h) || (l.name = h), b(l, t.range, n, a);
    }function b(t, e, n, r) {
      var i = D(e, n),
          a = o.sortBy(i, function (t) {
        return t.range.start;
      }),
          s = [];return o.forEach(a, function (t) {
        s.push(C(t, n, r));
      }), t.definition = s, t;
    }function D(t, e) {
      return o.filter(e, function (n) {
        var r = t.strictlyContainsRange(n.range),
            i = o.every(e, function (e) {
          var r = e.range.strictlyContainsRange(n.range),
              i = e.range.isStrictlyContainedInRange(t);return !(r && i);
        });return r && i;
      });
    }e.terminalNameToConstructor = {}, e.buildTopProduction = function (t, n, r) {
      e.terminalNameToConstructor = r;var o = V(j(K("  " + t)));return function (t, e, n, r) {
        return b(new a.Rule({ name: t, definition: [], orgText: r }), e, n, t);
      }(n, new i.Range(0, t.length + 2), o, t);
    }, e.buildProdGast = C, e.getDirectlyContainedRanges = D;var w = /\/\/.*/g,
        U = /\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\//g,
        G = /(NAME\s*:\s*)?"([^\\"]|\\([bfnrtv"\\\/]|u[0-9a-fA-F]{4}))*"/g,
        B = /(NAME\s*:\s*)?'([^\\']|\\([bfnrtv'\\\/]|u[0-9a-fA-F]{4}))*'/g;function K(t) {
      return t.replace(w, "").replace(U, "");
    }function W(t, e) {
      return void 0 !== e ? t : "";
    }function j(t) {
      return t.replace(G, W).replace(B, W);
    }function V(t) {
      var e = Y(t),
          n = H(t),
          r = X(t),
          i = z(t),
          o = q(t),
          a = $(t),
          s = Z(t),
          u = Q(t);return [].concat(e, n, r, i, o, a, s, u);
    }function Y(t) {
      return nt(t, r.TERMINAL, p);
    }function H(t) {
      return nt(t, r.REF, h);
    }function X(t) {
      return rt(t, r.AT_LEAST_ONE, S);
    }function z(t) {
      return rt(t, r.AT_LEAST_ONE_SEP, A);
    }function q(t) {
      return rt(t, r.MANY, T);
    }function $(t) {
      return rt(t, r.MANY_SEP, _);
    }function Z(t) {
      return rt(t, r.OPTION, E);
    }function Q(t) {
      var e = rt(t, r.OR, k),
          n = et(e);return e.concat(n);
    }e.removeComments = K, e.removeStringLiterals = j, e.createRanges = V, e.createTerminalRanges = Y, e.createRefsRanges = H, e.createAtLeastOneRanges = X, e.createAtLeastOneSepRanges = z, e.createManyRanges = q, e.createManySepRanges = $, e.createOptionRanges = Z, e.createOrRanges = Q;var J = o.partial(ot, "{", "}"),
        tt = o.partial(ot, "(", ")");function et(t) {
      var e = [];return o.forEach(t, function (t) {
        var n = it(t.text, r.FLAT, x, J),
            i = t.range.start;o.forEach(n, function (t) {
          t.range.start += i, t.range.end += i;
        }), e = e.concat(n);
      }), o.uniq(e, function (t) {
        return t.type + "~" + t.range.start + "~" + t.range.end + "~" + t.text;
      });
    }function nt(t, e, n) {
      for (var r, o = []; r = n.exec(t);) {
        var a = r.index,
            s = n.lastIndex,
            u = new i.Range(a, s),
            c = r[0];o.push({ range: u, text: c, type: e });
      }return o;
    }function rt(t, e, n) {
      return it(t, e, n, tt);
    }function it(t, e, n, r) {
      for (var o, a = []; o = n.exec(t);) {
        var s = o.index,
            u = r(s + o[0].length, t),
            c = new i.Range(s, u),
            p = t.substr(s, u - s + 1);a.push({ range: c, text: p, type: e });
      }return a;
    }function ot(t, e, n, r) {
      for (var i = [1], a = -1; !o.isEmpty(i) && a + n < r.length;) {
        a++;var s = r.charAt(n + a);s === t ? i.push(1) : s === e && i.pop();
      }if (o.isEmpty(i)) return a + n;throw new Error("INVALID INPUT TEXT, UNTERMINATED PARENTHESIS");
    }function at(t, e) {
      return o.map(t, function (t) {
        return st(t, e);
      });
    }function st(t, e) {
      switch (t.type) {case "NonTerminal":
          return new a.NonTerminal({ nonTerminalName: t.name, idx: t.idx });case "Flat":
          return new a.Flat({ name: t.name, definition: at(t.definition, e) });case "Option":
          return new a.Option({ name: t.name, idx: t.idx, definition: at(t.definition, e) });case "RepetitionMandatory":
          return new a.RepetitionMandatory({ name: t.name, idx: t.idx, definition: at(t.definition, e) });case "RepetitionMandatoryWithSeparator":
          return new a.RepetitionMandatoryWithSeparator({ name: t.name, idx: t.idx, separator: e[t.separator.name], definition: at(t.definition, e) });case "RepetitionWithSeparator":
          return new a.RepetitionWithSeparator({ name: t.name, idx: t.idx, separator: e[t.separator.name], definition: at(t.definition, e) });case "Repetition":
          return new a.Repetition({ name: t.name, idx: t.idx, definition: at(t.definition, e) });case "Alternation":
          return new a.Alternation({ name: t.name, idx: t.idx, definition: at(t.definition, e) });case "Terminal":
          return new a.Terminal({ terminalType: e[t.name], idx: t.idx });case "Rule":
          return new a.Rule({ name: t.name, orgText: t.orgText, definition: at(t.definition, e) });default:}
    }e.createOrPartRanges = et, e.findClosingOffset = ot, e.deserializeGrammar = at, e.deserializeProduction = st;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = n(0),
        i = n(4),
        o = n(30),
        a = n(11),
        s = n(10),
        u = n(8);e.resolveGrammar = function (t) {
      t = r.defaults(t, { errMsgProvider: s.defaultGrammarResolverErrorProvider });var e = new i.HashTable();return r.forEach(t.rules, function (t) {
        e.put(t.name, t);
      }), o.resolveGrammar(e, t.errMsgProvider);
    }, e.validateGrammar = function (t) {
      return t = r.defaults(t, { errMsgProvider: s.defaultGrammarValidatorErrorProvider, ignoredIssues: {} }), a.validateGrammar(t.rules, t.maxLookahead, t.tokenTypes, t.ignoredIssues, t.errMsgProvider, t.grammarName);
    }, e.assignOccurrenceIndices = function (t) {
      r.forEach(t.rules, function (t) {
        var e = new u.DslMethodsCollectorVisitor();t.accept(e), r.forEach(e.dslMethods, function (t) {
          r.forEach(t, function (t, e) {
            t.idx = e + 1;
          });
        });
      });
    };
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = n(2),
        i = n(0),
        o = n(6),
        a = n(22),
        s = n(4),
        u = n(3);function c(t) {
      this.name = e.IN_RULE_RECOVERY_EXCEPTION, this.message = t;
    }e.EOF_FOLLOW_KEY = {}, e.IN_RULE_RECOVERY_EXCEPTION = "InRuleRecoveryException", e.InRuleRecoveryException = c, c.prototype = Error.prototype;var p = function () {
      function t() {}return t.prototype.initRecoverable = function (t) {
        this.firstAfterRepMap = new s.HashTable(), this.resyncFollows = new s.HashTable(), this.recoveryEnabled = i.has(t, "recoveryEnabled") ? t.recoveryEnabled : u.DEFAULT_PARSER_CONFIG.recoveryEnabled, this.recoveryEnabled && (this.attemptInRepetitionRecovery = l);
      }, t.prototype.getTokenToInsert = function (t) {
        var e = r.createTokenInstance(t, "", NaN, NaN, NaN, NaN, NaN, NaN);return e.isInsertedInRecovery = !0, e;
      }, t.prototype.canTokenTypeBeInsertedInRecovery = function (t) {
        return !0;
      }, t.prototype.tryInRepetitionRecovery = function (t, e, n, r) {
        for (var a = this, s = this.findReSyncTokenType(), u = this.exportLexerState(), c = [], p = !1, l = this.LA(1), h = this.LA(1), f = function () {
          var t = a.LA(0),
              e = a.errorMessageProvider.buildMismatchTokenMessage({ expected: r, actual: l, previous: t, ruleName: a.getCurrRuleFullName() }),
              n = new o.MismatchedTokenException(e, l, a.LA(0));n.resyncedTokens = i.dropRight(c), a.SAVE_ERROR(n);
        }; !p;) {
          if (this.tokenMatcher(h, r)) return void f();if (n.call(this)) return f(), void t.apply(this, e);this.tokenMatcher(h, s) ? p = !0 : (h = this.SKIP_TOKEN(), this.addToResyncTokens(h, c));
        }this.importLexerState(u);
      }, t.prototype.shouldInRepetitionRecoveryBeTried = function (t, e) {
        return void 0 !== t && void 0 !== e && !this.tokenMatcher(this.LA(1), t) && !this.isBackTracking() && !this.canPerformInRuleRecovery(t, this.getFollowsForInRuleRecovery(t, e));
      }, t.prototype.getFollowsForInRuleRecovery = function (t, e) {
        var n = this.getCurrentGrammarPath(t, e);return this.getNextPossibleTokenTypes(n);
      }, t.prototype.tryInRuleRecovery = function (t, e) {
        if (this.canRecoverWithSingleTokenInsertion(t, e)) return this.getTokenToInsert(t);if (this.canRecoverWithSingleTokenDeletion(t)) {
          var n = this.SKIP_TOKEN();return this.consumeToken(), n;
        }throw new c("sad sad panda");
      }, t.prototype.canPerformInRuleRecovery = function (t, e) {
        return this.canRecoverWithSingleTokenInsertion(t, e) || this.canRecoverWithSingleTokenDeletion(t);
      }, t.prototype.canRecoverWithSingleTokenInsertion = function (t, e) {
        var n = this;if (!this.canTokenTypeBeInsertedInRecovery(t)) return !1;if (i.isEmpty(e)) return !1;var r = this.LA(1);return void 0 !== i.find(e, function (t) {
          return n.tokenMatcher(r, t);
        });
      }, t.prototype.canRecoverWithSingleTokenDeletion = function (t) {
        return this.tokenMatcher(this.LA(2), t);
      }, t.prototype.isInCurrentRuleReSyncSet = function (t) {
        var e = this.getCurrFollowKey(),
            n = this.getFollowSetFromFollowKey(e);return i.contains(n, t);
      }, t.prototype.findReSyncTokenType = function () {
        for (var t = this.flattenFollowSet(), e = this.LA(1), n = 2;;) {
          var r = e.tokenType;if (i.contains(t, r)) return r;e = this.LA(n), n++;
        }
      }, t.prototype.getCurrFollowKey = function () {
        if (1 === this.RULE_STACK.length) return e.EOF_FOLLOW_KEY;var t = this.getLastExplicitRuleShortName(),
            n = this.getLastExplicitRuleOccurrenceIndex(),
            r = this.getPreviousExplicitRuleShortName();return { ruleName: this.shortRuleNameToFullName(t), idxInCallingRule: n, inRule: this.shortRuleNameToFullName(r) };
      }, t.prototype.buildFullFollowKeyStack = function () {
        var t = this,
            n = this.RULE_STACK,
            r = this.RULE_OCCURRENCE_STACK;return i.isEmpty(this.LAST_EXPLICIT_RULE_STACK) || (n = i.map(this.LAST_EXPLICIT_RULE_STACK, function (e) {
          return t.RULE_STACK[e];
        }), r = i.map(this.LAST_EXPLICIT_RULE_STACK, function (e) {
          return t.RULE_OCCURRENCE_STACK[e];
        })), i.map(n, function (i, o) {
          return 0 === o ? e.EOF_FOLLOW_KEY : { ruleName: t.shortRuleNameToFullName(i), idxInCallingRule: r[o], inRule: t.shortRuleNameToFullName(n[o - 1]) };
        });
      }, t.prototype.flattenFollowSet = function () {
        var t = this,
            e = i.map(this.buildFullFollowKeyStack(), function (e) {
          return t.getFollowSetFromFollowKey(e);
        });return i.flatten(e);
      }, t.prototype.getFollowSetFromFollowKey = function (t) {
        if (t === e.EOF_FOLLOW_KEY) return [r.EOF];var n = t.ruleName + t.idxInCallingRule + a.IN + t.inRule;return this.resyncFollows.get(n);
      }, t.prototype.addToResyncTokens = function (t, e) {
        return this.tokenMatcher(t, r.EOF) || e.push(t), e;
      }, t.prototype.reSyncTo = function (t) {
        for (var e = [], n = this.LA(1); !1 === this.tokenMatcher(n, t);) n = this.SKIP_TOKEN(), this.addToResyncTokens(n, e);return i.dropRight(e);
      }, t.prototype.attemptInRepetitionRecovery = function (t, e, n, r, i, o) {}, t.prototype.getCurrentGrammarPath = function (t, e) {
        return { ruleStack: this.getHumanReadableRuleStack(), occurrenceStack: i.cloneArr(this.RULE_OCCURRENCE_STACK), lastTok: t, lastTokOccurrence: e };
      }, t.prototype.getHumanReadableRuleStack = function () {
        var t = this;return i.isEmpty(this.LAST_EXPLICIT_RULE_STACK) ? i.map(this.RULE_STACK, function (e) {
          return t.shortRuleNameToFullName(e);
        }) : i.map(this.LAST_EXPLICIT_RULE_STACK, function (e) {
          return t.shortRuleNameToFullName(t.RULE_STACK[e]);
        });
      }, t;
    }();function l(t, e, n, i, o, a) {
      var s = this.getKeyForAutomaticLookahead(i, o),
          u = this.firstAfterRepMap.get(s);if (void 0 === u) {
        var c = this.getCurrRuleFullName();u = new a(this.getGAstProductions().get(c), o).startWalking(), this.firstAfterRepMap.put(s, u);
      }var p = u.token,
          l = u.occurrence,
          h = u.isEndOfRule;1 === this.RULE_STACK.length && h && void 0 === p && (p = r.EOF, l = 1), this.shouldInRepetitionRecoveryBeTried(p, l) && this.tryInRepetitionRecovery(t, e, n, p);
    }e.Recoverable = p, e.attemptInRepetitionRecovery = l;
  }, function (t, e, n) {
    "use strict";
    var r,
        i = this && this.__extends || (r = function (t, e) {
      return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
      })(t, e);
    }, function (t, e) {
      function n() {
        this.constructor = t;
      }r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
    });Object.defineProperty(e, "__esModule", { value: !0 });var o = n(14),
        a = n(4),
        s = n(21),
        u = n(0),
        c = n(22),
        p = n(2),
        l = n(1),
        h = function (t) {
      function e(e) {
        var n = t.call(this) || this;return n.topProd = e, n.follows = new a.HashTable(), n;
      }return i(e, t), e.prototype.startWalking = function () {
        return this.walk(this.topProd), this.follows;
      }, e.prototype.walkTerminal = function (t, e, n) {}, e.prototype.walkProdRef = function (t, e, n) {
        var r = f(t.referencedRule, t.idx) + this.topProd.name,
            i = e.concat(n),
            o = new l.Flat({ definition: i }),
            a = s.first(o);this.follows.put(r, a);
      }, e;
    }(o.RestWalker);function f(t, e) {
      return t.name + e + c.IN;
    }e.ResyncFollowsWalker = h, e.computeAllProdsFollows = function (t) {
      var e = new a.HashTable();return u.forEach(t, function (t) {
        var n = new h(t).startWalking();e.putAll(n);
      }), e;
    }, e.buildBetweenProdsFollowPrefix = f, e.buildInProdFollowPrefix = function (t) {
      return p.tokenName(t.terminalType) + t.idx + c.IN;
    };
  }, function (t, e, n) {
    "use strict";
    var r,
        i = this && this.__extends || (r = function (t, e) {
      return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
      })(t, e);
    }, function (t, e) {
      function n() {
        this.constructor = t;
      }r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
    });Object.defineProperty(e, "__esModule", { value: !0 });var o = n(19),
        a = n(2),
        s = n(15),
        u = n(0),
        c = n(28),
        p = new o.RegExpParser(),
        l = "PATTERN";function h(t) {
      var e = u.filter(t, function (t) {
        return !u.has(t, l);
      });return { errors: u.map(e, function (t) {
          return { message: "Token Type: ->" + a.tokenName(t) + "<- missing static 'PATTERN' property", type: s.LexerDefinitionErrorType.MISSING_PATTERN, tokenTypes: [t] };
        }), valid: u.difference(t, e) };
    }function f(t) {
      var e = u.filter(t, function (t) {
        var e = t[l];return !(u.isRegExp(e) || u.isFunction(e) || u.has(e, "exec") || u.isString(e));
      });return { errors: u.map(e, function (t) {
          return { message: "Token Type: ->" + a.tokenName(t) + "<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.", type: s.LexerDefinitionErrorType.INVALID_PATTERN, tokenTypes: [t] };
        }), valid: u.difference(t, e) };
    }e.DEFAULT_MODE = "defaultMode", e.MODES = "modes", e.SUPPORT_STICKY = "boolean" == typeof new RegExp("(?:)").sticky, e.disableSticky = function () {
      e.SUPPORT_STICKY = !1;
    }, e.enableSticky = function () {
      e.SUPPORT_STICKY = !0;
    }, e.analyzeTokenTypes = function (t, n) {
      n = u.defaults(n, { useSticky: e.SUPPORT_STICKY, debug: !1, safeMode: !1, positionTracking: "full", lineTerminatorCharacters: ["\r", "\n"] });var r = u.reject(t, function (t) {
        return t[l] === s.Lexer.NA;
      }),
          i = !1,
          o = u.map(r, function (t) {
        var e = t[l];if (u.isRegExp(e)) {
          var r = e.source;return 1 === r.length && "^" !== r && "$" !== r && "." !== r ? r : 2 !== r.length || "\\" !== r[0] || u.contains(["d", "D", "s", "S", "t", "r", "n", "t", "0", "c", "b", "B", "f", "v", "w", "W"], r[1]) ? n.useSticky ? O(e) : N(e) : r[1];
        }if (u.isFunction(e)) return i = !0, { exec: e };if (u.has(e, "exec")) return i = !0, e;if ("string" == typeof e) {
          if (1 === e.length) return e;var o = e.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&"),
              a = new RegExp(o);return n.useSticky ? O(a) : N(a);
        }throw Error("non exhaustive match");
      }),
          p = u.map(r, function (t) {
        return t.tokenTypeIdx;
      }),
          h = u.map(r, function (t) {
        var e = t.GROUP;if (e !== s.Lexer.SKIPPED) {
          if (u.isString(e)) return e;if (u.isUndefined(e)) return !1;throw Error("non exhaustive match");
        }
      }),
          f = u.map(r, function (t) {
        var e = t.LONGER_ALT;if (e) return u.indexOf(r, e);
      }),
          d = u.map(r, function (t) {
        return t.PUSH_MODE;
      }),
          E = u.map(r, function (t) {
        return u.has(t, "POP_MODE");
      }),
          m = P(n.lineTerminatorCharacters),
          y = u.map(r, function (t) {
        return !1;
      });"onlyOffset" !== n.positionTracking && (y = u.map(r, function (t) {
        return u.has(t, "LINE_BREAKS") ? t.LINE_BREAKS : !1 === L(t, m) ? c.canMatchCharCode(m, t.PATTERN) : void 0;
      }));var T = u.map(r, S),
          v = u.map(o, I),
          g = u.reduce(r, function (t, e) {
        var n = e.GROUP;return u.isString(n) && n !== s.Lexer.SKIPPED && (t[n] = []), t;
      }, {}),
          _ = u.map(o, function (t, e) {
        return { pattern: o[e], longerAlt: f[e], canLineTerminator: y[e], isCustom: T[e], short: v[e], group: h[e], push: d[e], pop: E[e], tokenTypeIdx: p[e], tokenType: r[e] };
      });function R(t, e, n) {
        void 0 === t[e] && (t[e] = []), t[e].push(n);
      }var A = !0,
          k = [];return n.safeMode || (k = u.reduce(r, function (t, e, r) {
        if ("string" == typeof e.PATTERN) {
          var i = e.PATTERN.charCodeAt(0);R(t, i, _[r]);
        } else if (u.isArray(e.START_CHARS_HINT)) u.forEach(e.START_CHARS_HINT, function (e) {
          var n = "string" == typeof e ? e.charCodeAt(0) : e;R(t, n, _[r]);
        });else if (u.isRegExp(e.PATTERN)) {
          if (e.PATTERN.unicode) A = !1, n.ensureOptimizations && u.PRINT_ERROR(c.failedOptimizationPrefixMsg + "\tUnable to analyze < " + e.PATTERN.toString() + " > pattern.\n\tThe regexp unicode flag is not currently supported by the regexp-to-ast library.\n\tThis will disable the lexer's first char optimizations.\n\tFor details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE");else {
            var o = c.getStartCodes(e.PATTERN, n.ensureOptimizations);u.isEmpty(o) && (A = !1), u.forEach(o, function (e) {
              R(t, e, _[r]);
            });
          }
        } else n.ensureOptimizations && u.PRINT_ERROR(c.failedOptimizationPrefixMsg + "\tTokenType: <" + a.tokenName(e) + "> is using a custom token pattern without providing <start_chars_hint> parameter.\n\tThis will disable the lexer's first char optimizations.\n\tFor details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE"), A = !1;return t;
      }, [])), A && k.length < 65536 && (k = u.packArray(k)), { emptyGroups: g, patternIdxToConfig: _, charCodeToPatternIdxToConfig: k, hasCustom: i, canBeOptimized: A };
    }, e.validatePatterns = function (t, e) {
      var n = [],
          r = h(t);n = n.concat(r.errors);var i = f(r.valid),
          o = i.valid;return n = (n = (n = (n = (n = n.concat(i.errors)).concat(function (t) {
        var e = [],
            n = u.filter(t, function (t) {
          return u.isRegExp(t[l]);
        });return e = (e = (e = (e = (e = e.concat(E(n))).concat(T(n))).concat(v(n))).concat(g(n))).concat(m(n));
      }(o))).concat(_(o))).concat(R(o, e))).concat(A(o));
    }, e.findMissingPatterns = h, e.findInvalidPatterns = f;var d = /[^\\][\$]/;function E(t) {
      var e = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;return e.found = !1, e;
        }return i(e, t), e.prototype.visitEndAnchor = function (t) {
          this.found = !0;
        }, e;
      }(o.BaseRegExpVisitor),
          n = u.filter(t, function (t) {
        var n = t[l];try {
          var r = p.pattern(n.toString()),
              i = new e();return i.visit(r), i.found;
        } catch (t) {
          return d.test(n.source);
        }
      });return u.map(n, function (t) {
        return { message: "Unexpected RegExp Anchor Error:\n\tToken Type: ->" + a.tokenName(t) + "<- static 'PATTERN' cannot contain end of input anchor '$'\n\tSee sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#ANCHORS\tfor details.", type: s.LexerDefinitionErrorType.EOI_ANCHOR_FOUND, tokenTypes: [t] };
      });
    }function m(t) {
      var e = u.filter(t, function (t) {
        return t[l].test("");
      });return u.map(e, function (t) {
        return { message: "Token Type: ->" + a.tokenName(t) + "<- static 'PATTERN' must not match an empty string", type: s.LexerDefinitionErrorType.EMPTY_MATCH_PATTERN, tokenTypes: [t] };
      });
    }e.findEndOfInputAnchor = E, e.findEmptyMatchRegExps = m;var y = /[^\\[][\^]|^\^/;function T(t) {
      var e = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;return e.found = !1, e;
        }return i(e, t), e.prototype.visitStartAnchor = function (t) {
          this.found = !0;
        }, e;
      }(o.BaseRegExpVisitor),
          n = u.filter(t, function (t) {
        var n = t[l];try {
          var r = p.pattern(n.toString()),
              i = new e();return i.visit(r), i.found;
        } catch (t) {
          return y.test(n.source);
        }
      });return u.map(n, function (t) {
        return { message: "Unexpected RegExp Anchor Error:\n\tToken Type: ->" + a.tokenName(t) + "<- static 'PATTERN' cannot contain start of input anchor '^'\n\tSee https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#ANCHORS\tfor details.", type: s.LexerDefinitionErrorType.SOI_ANCHOR_FOUND, tokenTypes: [t] };
      });
    }function v(t) {
      var e = u.filter(t, function (t) {
        var e = t[l];return e instanceof RegExp && (e.multiline || e.global);
      });return u.map(e, function (t) {
        return { message: "Token Type: ->" + a.tokenName(t) + "<- static 'PATTERN' may NOT contain global('g') or multiline('m')", type: s.LexerDefinitionErrorType.UNSUPPORTED_FLAGS_FOUND, tokenTypes: [t] };
      });
    }function g(t) {
      var e = [],
          n = u.map(t, function (n) {
        return u.reduce(t, function (t, r) {
          return n.PATTERN.source !== r.PATTERN.source || u.contains(e, r) || r.PATTERN === s.Lexer.NA ? t : (e.push(r), t.push(r), t);
        }, []);
      });n = u.compact(n);var r = u.filter(n, function (t) {
        return t.length > 1;
      });return u.map(r, function (t) {
        var e = u.map(t, function (t) {
          return a.tokenName(t);
        });return { message: "The same RegExp pattern ->" + u.first(t).PATTERN + "<-has been used in all of the following Token Types: " + e.join(", ") + " <-", type: s.LexerDefinitionErrorType.DUPLICATE_PATTERNS_FOUND, tokenTypes: t };
      });
    }function _(t) {
      var e = u.filter(t, function (t) {
        if (!u.has(t, "GROUP")) return !1;var e = t.GROUP;return e !== s.Lexer.SKIPPED && e !== s.Lexer.NA && !u.isString(e);
      });return u.map(e, function (t) {
        return { message: "Token Type: ->" + a.tokenName(t) + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String", type: s.LexerDefinitionErrorType.INVALID_GROUP_TYPE_FOUND, tokenTypes: [t] };
      });
    }function R(t, e) {
      var n = u.filter(t, function (t) {
        return void 0 !== t.PUSH_MODE && !u.contains(e, t.PUSH_MODE);
      });return u.map(n, function (t) {
        return { message: "Token Type: ->" + a.tokenName(t) + "<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->" + t.PUSH_MODE + "<-which does not exist", type: s.LexerDefinitionErrorType.PUSH_MODE_DOES_NOT_EXIST, tokenTypes: [t] };
      });
    }function A(t) {
      var e = [],
          n = u.reduce(t, function (t, e, n) {
        var r,
            i = e.PATTERN;return i === s.Lexer.NA ? t : (u.isString(i) ? t.push({ str: i, idx: n, tokenType: e }) : u.isRegExp(i) && (r = i, void 0 === u.find([".", "\\", "[", "]", "|", "^", "$", "(", ")", "?", "*", "+", "{"], function (t) {
          return -1 !== r.source.indexOf(t);
        })) && t.push({ str: i.source, idx: n, tokenType: e }), t);
      }, []);return u.forEach(t, function (t, r) {
        u.forEach(n, function (n) {
          var i = n.str,
              o = n.idx,
              c = n.tokenType;if (r < o && function (t, e) {
            if (u.isRegExp(e)) {
              var n = e.exec(t);return null !== n && 0 === n.index;
            }if (u.isFunction(e)) return e(t, 0, [], {});if (u.has(e, "exec")) return e.exec(t, 0, [], {});if ("string" == typeof e) return e === t;throw Error("non exhaustive match");
          }(i, t.PATTERN)) {
            var p = "Token: ->" + a.tokenName(c) + "<- can never be matched.\nBecause it appears AFTER the Token Type ->" + a.tokenName(t) + "<-in the lexer's definition.\nSee https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#UNREACHABLE";e.push({ message: p, type: s.LexerDefinitionErrorType.UNREACHABLE_PATTERN, tokenTypes: [t, c] });
          }
        });
      }), e;
    }function N(t) {
      var e = t.ignoreCase ? "i" : "";return new RegExp("^(?:" + t.source + ")", e);
    }function O(t) {
      var e = t.ignoreCase ? "iy" : "y";return new RegExp("" + t.source, e);
    }function S(t) {
      var e = t.PATTERN;if (u.isRegExp(e)) return !1;if (u.isFunction(e)) return !0;if (u.has(e, "exec")) return !0;if (u.isString(e)) return !1;throw Error("non exhaustive match");
    }function I(t) {
      return !(!u.isString(t) || 1 !== t.length) && t.charCodeAt(0);
    }function L(t, e) {
      if (u.has(t, "LINE_BREAKS")) return !1;if (u.isRegExp(t.PATTERN)) {
        try {
          c.canMatchCharCode(e, t.PATTERN);
        } catch (t) {
          return { issue: s.LexerDefinitionErrorType.IDENTIFY_TERMINATOR, errMsg: t.message };
        }return !1;
      }if (u.isString(t.PATTERN)) return !1;if (S(t)) return { issue: s.LexerDefinitionErrorType.CUSTOM_LINE_BREAK };throw Error("non exhaustive match");
    }function k(t, e) {
      if (e.issue === s.LexerDefinitionErrorType.IDENTIFY_TERMINATOR) return "Warning: unable to identify line terminator usage in pattern.\n\tThe problem is in the <" + t.name + "> Token Type\n\t Root cause: " + e.errMsg + ".\n\tFor details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR";if (e.issue === s.LexerDefinitionErrorType.CUSTOM_LINE_BREAK) return "Warning: A Custom Token Pattern should specify the <line_breaks> option.\n\tThe problem is in the <" + t.name + "> Token Type\n\tFor details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK";throw Error("non exhaustive match");
    }function P(t) {
      return u.map(t, function (t) {
        return u.isString(t) && t.length > 0 ? t.charCodeAt(0) : t;
      });
    }e.findStartOfInputAnchor = T, e.findUnsupportedFlags = v, e.findDuplicatePatterns = g, e.findInvalidGroupType = _, e.findModesThatDoNotExist = R, e.findUnreachablePatterns = A, e.addStartOfInput = N, e.addStickyFlag = O, e.performRuntimeChecks = function (t, n, r) {
      var i = [];return u.has(t, e.DEFAULT_MODE) || i.push({ message: "A MultiMode Lexer cannot be initialized without a <" + e.DEFAULT_MODE + "> property in its definition\n", type: s.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE }), u.has(t, e.MODES) || i.push({ message: "A MultiMode Lexer cannot be initialized without a <" + e.MODES + "> property in its definition\n", type: s.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY }), u.has(t, e.MODES) && u.has(t, e.DEFAULT_MODE) && !u.has(t.modes, t.defaultMode) && i.push({ message: "A MultiMode Lexer cannot be initialized with a " + e.DEFAULT_MODE + ": <" + t.defaultMode + ">which does not exist\n", type: s.LexerDefinitionErrorType.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST }), u.has(t, e.MODES) && u.forEach(t.modes, function (t, e) {
        u.forEach(t, function (t, n) {
          u.isUndefined(t) && i.push({ message: "A Lexer cannot be initialized using an undefined Token Type. Mode:<" + e + "> at index: <" + n + ">\n", type: s.LexerDefinitionErrorType.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED });
        });
      }), i;
    }, e.performWarningRuntimeChecks = function (t, e, n) {
      var r = [],
          i = !1,
          o = u.compact(u.flatten(u.mapValues(t.modes, function (t) {
        return t;
      }))),
          a = u.reject(o, function (t) {
        return t[l] === s.Lexer.NA;
      }),
          p = P(n);return e && u.forEach(a, function (t) {
        var e = L(t, p);if (!1 !== e) {
          var n = { message: k(t, e), type: e.issue, tokenType: t };r.push(n);
        } else u.has(t, "LINE_BREAKS") ? !0 === t.LINE_BREAKS && (i = !0) : c.canMatchCharCode(p, t.PATTERN) && (i = !0);
      }), e && !i && r.push({ message: "Warning: No LINE_BREAKS Found.\n\tThis Lexer has been defined to track line and column information,\n\tBut none of the Token Types can be identified as matching a line terminator.\n\tSee https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#LINE_BREAKS \n\tfor details.", type: s.LexerDefinitionErrorType.NO_LINE_BREAKS_FLAGS }), r;
    }, e.cloneEmptyGroups = function (t) {
      var e = {},
          n = u.keys(t);return u.forEach(n, function (n) {
        var r = t[n];if (!u.isArray(r)) throw Error("non exhaustive match");e[n] = [];
      }), e;
    }, e.isCustomPattern = S, e.isShortPattern = I, e.LineTerminatorOptimizedTester = { test: function (t) {
        for (var e = t.length, n = this.lastIndex; n < e; n++) {
          var r = t.charCodeAt(n);if (10 === r) return this.lastIndex = n + 1, !0;if (13 === r) return 10 === t.charCodeAt(n + 1) ? this.lastIndex = n + 2 : this.lastIndex = n + 1, !0;
        }return !1;
      }, lastIndex: 0 }, e.buildLineBreakIssueMessage = k;
  }, function (t, e, n) {
    "use strict";
    var r,
        i = this && this.__extends || (r = function (t, e) {
      return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
      })(t, e);
    }, function (t, e) {
      function n() {
        this.constructor = t;
      }r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
    });Object.defineProperty(e, "__esModule", { value: !0 });var o = n(19),
        a = n(0),
        s = new o.RegExpParser(),
        u = "Complement Sets are not supported for first char optimization";function c(t) {
      switch (t.type) {case "Disjunction":
          return a.flatten(a.map(t.value, c));case "Alternative":
          for (var e = [], n = t.value, r = 0; r < n.length; r++) {
            var i = n[r];if (!a.contains(["GroupBackReference", "Lookahead", "NegativeLookahead", "StartAnchor", "EndAnchor", "WordBoundary", "NonWordBoundary"], i.type)) {
              var o = i;switch (o.type) {case "Character":
                  e.push(o.value);break;case "Set":
                  if (!0 === o.complement) throw Error(u);a.forEach(o.value, function (t) {
                    if ("number" == typeof t) e.push(t);else for (var n = t, r = n.from; r <= n.to; r++) e.push(r);
                  });break;case "Group":
                  var s = c(o.value);a.forEach(s, function (t) {
                    return e.push(t);
                  });break;default:
                  throw Error("Non Exhaustive Match");}var p = void 0 !== o.quantifier && 0 === o.quantifier.atLeast;if ("Group" === o.type && !1 === h(o) || "Group" !== o.type && !1 === p) break;
            }
          }return e;default:
          throw Error("non exhaustive match!");}
    }function p(t) {
      var e = [];return a.forEach(t, function (t) {
        e.push(t);var n = String.fromCharCode(t);n.toUpperCase() !== n ? e.push(n.toUpperCase().charCodeAt(0)) : n.toLowerCase() !== n && e.push(n.toLowerCase().charCodeAt(0));
      }), e;
    }function l(t, e) {
      return a.find(t.value, function (t) {
        if ("number" == typeof t) return a.contains(e, t);var n = t;return void 0 !== a.find(e, function (t) {
          return n.from <= t && t <= n.to;
        });
      });
    }function h(t) {
      return !(!t.quantifier || 0 !== t.quantifier.atLeast) || !!t.value && (a.isArray(t.value) ? a.every(t.value, h) : h(t.value));
    }e.failedOptimizationPrefixMsg = 'Unable to use "first char" lexer optimizations:\n', e.getStartCodes = function (t, n) {
      void 0 === n && (n = !1);try {
        var r = s.pattern(t.toString()),
            i = c(r.value);return r.flags.ignoreCase && (i = p(i)), i;
      } catch (r) {
        if (r.message === u) n && a.PRINT_WARNING(e.failedOptimizationPrefixMsg + "\tUnable to optimize: < " + t.toString() + " >\n\tComplement Sets cannot be automatically optimized.\n\tThis will disable the lexer's first char optimizations.\n\tSee: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.");else {
          var l = "";n && (l = "\n\tThis will disable the lexer's first char optimizations.\n\tSee: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details."), a.PRINT_ERROR(e.failedOptimizationPrefixMsg + "\n\tFailed parsing: < " + t.toString() + " >\n\tUsing the regexp-to-ast library version: " + o.VERSION + "\n\tPlease open an issue at: https://github.com/bd82/regexp-to-ast/issues" + l);
        }
      }return [];
    }, e.firstChar = c, e.applyIgnoreCase = p;var f = function (t) {
      function e(e) {
        var n = t.call(this) || this;return n.targetCharCodes = e, n.found = !1, n;
      }return i(e, t), e.prototype.visitChildren = function (e) {
        switch (e.type) {case "Lookahead":
            return void this.visitLookahead(e);case "NegativeLookahead":
            return void this.visitNegativeLookahead(e);}t.prototype.visitChildren.call(this, e);
      }, e.prototype.visitCharacter = function (t) {
        a.contains(this.targetCharCodes, t.value) && (this.found = !0);
      }, e.prototype.visitSet = function (t) {
        t.complement ? void 0 === l(t, this.targetCharCodes) && (this.found = !0) : void 0 !== l(t, this.targetCharCodes) && (this.found = !0);
      }, e;
    }(o.BaseRegExpVisitor);e.canMatchCharCode = function (t, e) {
      if (e instanceof RegExp) {
        var n = s.pattern(e.toString()),
            r = new f(t);return r.visit(n), r.found;
      }return void 0 !== a.find(e, function (e) {
        return a.contains(t, e.charCodeAt(0));
      });
    };
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
      function t(t, e) {
        if (this.start = t, this.end = e, !i(t, e)) throw new Error("INVALID RANGE");
      }return t.prototype.contains = function (t) {
        return this.start <= t && this.end >= t;
      }, t.prototype.containsRange = function (t) {
        return this.start <= t.start && this.end >= t.end;
      }, t.prototype.isContainedInRange = function (t) {
        return t.containsRange(this);
      }, t.prototype.strictlyContainsRange = function (t) {
        return this.start < t.start && this.end > t.end;
      }, t.prototype.isStrictlyContainedInRange = function (t) {
        return t.strictlyContainsRange(this);
      }, t;
    }();function i(t, e) {
      return !(t < 0 || e < t);
    }e.Range = r, e.isValidRange = i;
  }, function (t, e, n) {
    "use strict";
    var r,
        i = this && this.__extends || (r = function (t, e) {
      return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
      })(t, e);
    }, function (t, e) {
      function n() {
        this.constructor = t;
      }r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
    });Object.defineProperty(e, "__esModule", { value: !0 });var o = n(3),
        a = n(0),
        s = n(5);e.resolveGrammar = function (t, e) {
      var n = new u(t, e);return n.resolveRefs(), n.errors;
    };var u = function (t) {
      function e(e, n) {
        var r = t.call(this) || this;return r.nameToTopRule = e, r.errMsgProvider = n, r.errors = [], r;
      }return i(e, t), e.prototype.resolveRefs = function () {
        var t = this;a.forEach(this.nameToTopRule.values(), function (e) {
          t.currTopLevel = e, e.accept(t);
        });
      }, e.prototype.visitNonTerminal = function (t) {
        var e = this.nameToTopRule.get(t.nonTerminalName);if (e) t.referencedRule = e;else {
          var n = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, t);this.errors.push({ message: n, type: o.ParserDefinitionErrorType.UNRESOLVED_SUBRULE_REF, ruleName: this.currTopLevel.name, unresolvedRefName: t.nonTerminalName });
        }
      }, e;
    }(s.GAstVisitor);e.GastRefResolverVisitor = u;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = n(12),
        i = n(0),
        o = n(3),
        a = n(9),
        s = function () {
      function t() {}return t.prototype.initLooksAhead = function (t) {
        this.dynamicTokensEnabled = i.has(t, "dynamicTokensEnabled") ? t.dynamicTokensEnabled : o.DEFAULT_PARSER_CONFIG.dynamicTokensEnabled, this.maxLookahead = i.has(t, "maxLookahead") ? t.maxLookahead : o.DEFAULT_PARSER_CONFIG.maxLookahead, this.lookAheadFuncsCache = i.isES2015MapSupported() ? new Map() : [], i.isES2015MapSupported() ? (this.getLaFuncFromCache = this.getLaFuncFromMap, this.setLaFuncCache = this.setLaFuncCacheUsingMap) : (this.getLaFuncFromCache = this.getLaFuncFromObj, this.setLaFuncCache = this.setLaFuncUsingObj);
      }, t.prototype.lookAheadBuilderForOptional = function (t, e, n) {
        return r.buildSingleAlternativeLookaheadFunction(t, e, n);
      }, t.prototype.lookAheadBuilderForAlternatives = function (t, e, n, i) {
        return r.buildAlternativesLookAheadFunc(t, e, n, i);
      }, t.prototype.getKeyForAutomaticLookahead = function (t, e) {
        var n = this.getLastExplicitRuleShortName();return a.getKeyForAutomaticLookahead(n, t, e);
      }, t.prototype.getLookaheadFuncForOr = function (t, e) {
        var n = this.getKeyForAutomaticLookahead(a.OR_IDX, t),
            o = this.getLaFuncFromCache(n);if (void 0 === o) {
          var s = this.getCurrRuleFullName(),
              u = this.getGAstProductions().get(s),
              c = i.some(e, function (t) {
            return i.isFunction(t.GATE);
          });return o = r.buildLookaheadFuncForOr(t, u, this.maxLookahead, c, this.dynamicTokensEnabled, this.lookAheadBuilderForAlternatives), this.setLaFuncCache(n, o), o;
        }return o;
      }, t.prototype.getLookaheadFuncForOption = function (t, e) {
        return this.getLookaheadFuncFor(t, e, this.maxLookahead, r.PROD_TYPE.OPTION);
      }, t.prototype.getLookaheadFuncForMany = function (t, e) {
        return this.getLookaheadFuncFor(t, e, this.maxLookahead, r.PROD_TYPE.REPETITION);
      }, t.prototype.getLookaheadFuncForManySep = function (t, e) {
        return this.getLookaheadFuncFor(t, e, this.maxLookahead, r.PROD_TYPE.REPETITION_WITH_SEPARATOR);
      }, t.prototype.getLookaheadFuncForAtLeastOne = function (t, e) {
        return this.getLookaheadFuncFor(t, e, this.maxLookahead, r.PROD_TYPE.REPETITION_MANDATORY);
      }, t.prototype.getLookaheadFuncForAtLeastOneSep = function (t, e) {
        return this.getLookaheadFuncFor(t, e, this.maxLookahead, r.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR);
      }, t.prototype.getLookaheadFuncFor = function (t, e, n, i) {
        var o = this.getLaFuncFromCache(t);if (void 0 === o) {
          var a = this.getCurrRuleFullName(),
              s = this.getGAstProductions().get(a);return o = r.buildLookaheadFuncForOptionalProd(e, s, n, this.dynamicTokensEnabled, i, this.lookAheadBuilderForOptional), this.setLaFuncCache(t, o), o;
        }return o;
      }, t.prototype.getLaFuncFromCache = function (t) {}, t.prototype.getLaFuncFromMap = function (t) {
        return this.lookAheadFuncsCache.get(t);
      }, t.prototype.getLaFuncFromObj = function (t) {
        return this.lookAheadFuncsCache[t];
      }, t.prototype.setLaFuncCache = function (t, e) {}, t.prototype.setLaFuncCacheUsingMap = function (t, e) {
        this.lookAheadFuncsCache.set(t, e);
      }, t.prototype.setLaFuncUsingObj = function (t, e) {
        this.lookAheadFuncsCache[t] = e;
      }, t;
    }();e.LooksAhead = s;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = n(16),
        i = n(0),
        o = n(33),
        a = n(9),
        s = n(3),
        u = function () {
      function t() {}return t.prototype.initTreeBuilder = function (t) {
        this.LAST_EXPLICIT_RULE_STACK = [], this.CST_STACK = [], this.outputCst = i.has(t, "outputCst") ? t.outputCst : s.DEFAULT_PARSER_CONFIG.outputCst, this.outputCst || (this.cstInvocationStateUpdate = i.NOOP, this.cstFinallyStateUpdate = i.NOOP, this.cstPostTerminal = i.NOOP, this.cstPostNonTerminal = i.NOOP, this.getLastExplicitRuleShortName = this.getLastExplicitRuleShortNameNoCst, this.getPreviousExplicitRuleShortName = this.getPreviousExplicitRuleShortNameNoCst, this.getLastExplicitRuleOccurrenceIndex = this.getLastExplicitRuleOccurrenceIndexNoCst, this.manyInternal = this.manyInternalNoCst, this.orInternal = this.orInternalNoCst, this.optionInternal = this.optionInternalNoCst, this.atLeastOneInternal = this.atLeastOneInternalNoCst, this.manySepFirstInternal = this.manySepFirstInternalNoCst, this.atLeastOneSepFirstInternal = this.atLeastOneSepFirstInternalNoCst);
      }, t.prototype.cstNestedInvocationStateUpdate = function (t, e) {
        this.CST_STACK.push({ name: t, fullName: this.shortRuleNameToFull.get(this.getLastExplicitRuleShortName()) + t, children: {} });
      }, t.prototype.cstInvocationStateUpdate = function (t, e) {
        this.LAST_EXPLICIT_RULE_STACK.push(this.RULE_STACK.length - 1), this.CST_STACK.push({ name: t, children: {} });
      }, t.prototype.cstFinallyStateUpdate = function () {
        this.LAST_EXPLICIT_RULE_STACK.pop(), this.CST_STACK.pop();
      }, t.prototype.cstNestedFinallyStateUpdate = function () {
        this.CST_STACK.pop();
      }, t.prototype.cstPostTerminal = function (t, e) {
        var n = this.CST_STACK[this.CST_STACK.length - 1];r.addTerminalToCst(n, e, t);
      }, t.prototype.cstPostNonTerminal = function (t, e) {
        r.addNoneTerminalToCst(this.CST_STACK[this.CST_STACK.length - 1], e, t);
      }, t.prototype.getBaseCstVisitorConstructor = function () {
        if (i.isUndefined(this.baseCstVisitorConstructor)) {
          var t = o.createBaseSemanticVisitorConstructor(this.className, this.allRuleNames);return this.baseCstVisitorConstructor = t, t;
        }return this.baseCstVisitorConstructor;
      }, t.prototype.getBaseCstVisitorConstructorWithDefaults = function () {
        if (i.isUndefined(this.baseCstVisitorWithDefaultsConstructor)) {
          var t = o.createBaseVisitorConstructorWithDefaults(this.className, this.allRuleNames, this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor = t, t;
        }return this.baseCstVisitorWithDefaultsConstructor;
      }, t.prototype.nestedRuleBeforeClause = function (t, e) {
        var n;return void 0 !== t.NAME ? (n = t.NAME, this.nestedRuleInvocationStateUpdate(n, e), n) : void 0;
      }, t.prototype.nestedAltBeforeClause = function (t, e, n, r) {
        var i,
            o = this.getLastExplicitRuleShortName(),
            s = a.getKeyForAltIndex(o, n, e, r);return void 0 !== t.NAME ? (i = t.NAME, this.nestedRuleInvocationStateUpdate(i, s), { shortName: s, nestedName: i }) : void 0;
      }, t.prototype.nestedRuleFinallyClause = function (t, e) {
        var n = this.CST_STACK,
            i = n[n.length - 1];this.nestedRuleFinallyStateUpdate();var o = n[n.length - 1];r.addNoneTerminalToCst(o, e, i);
      }, t.prototype.getLastExplicitRuleShortName = function () {
        var t = this.LAST_EXPLICIT_RULE_STACK[this.LAST_EXPLICIT_RULE_STACK.length - 1];return this.RULE_STACK[t];
      }, t.prototype.getLastExplicitRuleShortNameNoCst = function () {
        var t = this.RULE_STACK;return t[t.length - 1];
      }, t.prototype.getPreviousExplicitRuleShortName = function () {
        var t = this.LAST_EXPLICIT_RULE_STACK[this.LAST_EXPLICIT_RULE_STACK.length - 2];return this.RULE_STACK[t];
      }, t.prototype.getPreviousExplicitRuleShortNameNoCst = function () {
        var t = this.RULE_STACK;return t[t.length - 2];
      }, t.prototype.getLastExplicitRuleOccurrenceIndex = function () {
        var t = this.LAST_EXPLICIT_RULE_STACK[this.LAST_EXPLICIT_RULE_STACK.length - 1];return this.RULE_OCCURRENCE_STACK[t];
      }, t.prototype.getLastExplicitRuleOccurrenceIndexNoCst = function () {
        var t = this.RULE_OCCURRENCE_STACK;return t[t.length - 1];
      }, t.prototype.nestedRuleInvocationStateUpdate = function (t, e) {
        this.RULE_OCCURRENCE_STACK.push(1), this.RULE_STACK.push(e), this.cstNestedInvocationStateUpdate(t, e);
      }, t.prototype.nestedRuleFinallyStateUpdate = function () {
        this.RULE_STACK.pop(), this.RULE_OCCURRENCE_STACK.pop(), this.cstNestedFinallyStateUpdate();
      }, t;
    }();e.TreeBuilder = u;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r,
        i = n(0),
        o = n(4),
        a = n(11);function s(t, e) {
      for (var n = i.keys(t), r = n.length, o = 0; o < r; o++) for (var a = t[n[o]], s = a.length, u = 0; u < s; u++) {
        var c = a[u];void 0 === c.tokenTypeIdx && (void 0 !== c.fullName ? this[c.fullName](c.children, e) : this[c.name](c.children, e));
      }
    }function u(t, e) {
      var n = c(t, e),
          r = l(t, e);return n.concat(r);
    }function c(t, e) {
      var n = i.map(e, function (e) {
        if (!i.isFunction(t[e])) return { msg: "Missing visitor method: <" + e + "> on " + o.functionName(t.constructor) + " CST Visitor.", type: r.MISSING_METHOD, methodName: e };
      });return i.compact(n);
    }e.defaultVisit = s, e.createBaseSemanticVisitorConstructor = function (t, e) {
      var n = function () {};return o.defineNameProp(n, t + "BaseSemantics"), (n.prototype = { visit: function (t, e) {
          if (i.isArray(t) && (t = t[0]), !i.isUndefined(t)) return void 0 !== t.fullName ? this[t.fullName](t.children, e) : this[t.name](t.children, e);
        }, validateVisitor: function () {
          var t = u(this, e);if (!i.isEmpty(t)) {
            var n = i.map(t, function (t) {
              return t.msg;
            });throw Error("Errors Detected in CST Visitor <" + o.functionName(this.constructor) + ">:\n\t" + n.join("\n\n").replace(/\n/g, "\n\t"));
          }
        } }).constructor = n, n._RULE_NAMES = e, n;
    }, e.createBaseVisitorConstructorWithDefaults = function (t, e, n) {
      var r = function () {};o.defineNameProp(r, t + "BaseSemanticsWithDefaults");var a = Object.create(n.prototype);return i.forEach(e, function (t) {
        a[t] = s;
      }), (r.prototype = a).constructor = r, r;
    }, function (t) {
      t[t.REDUNDANT_METHOD = 0] = "REDUNDANT_METHOD", t[t.MISSING_METHOD = 1] = "MISSING_METHOD";
    }(r = e.CstVisitorDefinitionError || (e.CstVisitorDefinitionError = {})), e.validateVisitor = u, e.validateMissingCstMethods = c;var p = ["constructor", "visit", "validateVisitor"];function l(t, e) {
      var n = [];for (var s in t) a.validTermsPattern.test(s) && i.isFunction(t[s]) && !i.contains(p, s) && !i.contains(e, s) && n.push({ msg: "Redundant visitor method: <" + s + "> on " + o.functionName(t.constructor) + " CST Visitor\nThere is no Grammar Rule corresponding to this method's name.\nFor utility methods on visitor classes use methods names that do not match /" + a.validTermsPattern.source + "/.", type: r.REDUNDANT_METHOD, methodName: s });return n;
    }e.validateRedundantMethods = l;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = n(3),
        i = function () {
      function t() {}return t.prototype.initLexerAdapter = function () {
        this.tokVector = [], this.tokVectorLength = 0, this.currIdx = -1;
      }, Object.defineProperty(t.prototype, "input", { get: function () {
          return this.tokVector;
        }, set: function (t) {
          this.reset(), this.tokVector = t, this.tokVectorLength = t.length;
        }, enumerable: !0, configurable: !0 }), t.prototype.SKIP_TOKEN = function () {
        return this.currIdx <= this.tokVector.length - 2 ? (this.consumeToken(), this.LA(1)) : r.END_OF_FILE;
      }, t.prototype.LA = function (t) {
        return this.currIdx + t < 0 || this.tokVectorLength <= this.currIdx + t ? r.END_OF_FILE : this.tokVector[this.currIdx + t];
      }, t.prototype.consumeToken = function () {
        this.currIdx++;
      }, t.prototype.exportLexerState = function () {
        return this.currIdx;
      }, t.prototype.importLexerState = function (t) {
        this.currIdx = t;
      }, t.prototype.resetLexerState = function () {
        this.currIdx = -1;
      }, t.prototype.moveToTerminatedState = function () {
        this.currIdx = this.tokVector.length - 1;
      }, t.prototype.getLexerPosition = function () {
        return this.exportLexerState();
      }, t;
    }();e.LexerAdapter = i;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = n(0),
        i = n(6),
        o = n(3),
        a = n(10),
        s = n(23),
        u = n(11),
        c = n(1),
        p = function () {
      function t() {}return t.prototype.CONSUME = function (t, e) {
        return this.consumeInternal(t, 0, e);
      }, t.prototype.CONSUME1 = function (t, e) {
        return this.consumeInternal(t, 1, e);
      }, t.prototype.CONSUME2 = function (t, e) {
        return this.consumeInternal(t, 2, e);
      }, t.prototype.CONSUME3 = function (t, e) {
        return this.consumeInternal(t, 3, e);
      }, t.prototype.CONSUME4 = function (t, e) {
        return this.consumeInternal(t, 4, e);
      }, t.prototype.CONSUME5 = function (t, e) {
        return this.consumeInternal(t, 5, e);
      }, t.prototype.CONSUME6 = function (t, e) {
        return this.consumeInternal(t, 6, e);
      }, t.prototype.CONSUME7 = function (t, e) {
        return this.consumeInternal(t, 7, e);
      }, t.prototype.CONSUME8 = function (t, e) {
        return this.consumeInternal(t, 8, e);
      }, t.prototype.CONSUME9 = function (t, e) {
        return this.consumeInternal(t, 9, e);
      }, t.prototype.SUBRULE = function (t, e) {
        return this.subruleInternal(t, 0, e);
      }, t.prototype.SUBRULE1 = function (t, e) {
        return this.subruleInternal(t, 1, e);
      }, t.prototype.SUBRULE2 = function (t, e) {
        return this.subruleInternal(t, 2, e);
      }, t.prototype.SUBRULE3 = function (t, e) {
        return this.subruleInternal(t, 3, e);
      }, t.prototype.SUBRULE4 = function (t, e) {
        return this.subruleInternal(t, 4, e);
      }, t.prototype.SUBRULE5 = function (t, e) {
        return this.subruleInternal(t, 5, e);
      }, t.prototype.SUBRULE6 = function (t, e) {
        return this.subruleInternal(t, 6, e);
      }, t.prototype.SUBRULE7 = function (t, e) {
        return this.subruleInternal(t, 7, e);
      }, t.prototype.SUBRULE8 = function (t, e) {
        return this.subruleInternal(t, 8, e);
      }, t.prototype.SUBRULE9 = function (t, e) {
        return this.subruleInternal(t, 9, e);
      }, t.prototype.OPTION = function (t) {
        return this.optionInternal(t, 0);
      }, t.prototype.OPTION1 = function (t) {
        return this.optionInternal(t, 1);
      }, t.prototype.OPTION2 = function (t) {
        return this.optionInternal(t, 2);
      }, t.prototype.OPTION3 = function (t) {
        return this.optionInternal(t, 3);
      }, t.prototype.OPTION4 = function (t) {
        return this.optionInternal(t, 4);
      }, t.prototype.OPTION5 = function (t) {
        return this.optionInternal(t, 5);
      }, t.prototype.OPTION6 = function (t) {
        return this.optionInternal(t, 6);
      }, t.prototype.OPTION7 = function (t) {
        return this.optionInternal(t, 7);
      }, t.prototype.OPTION8 = function (t) {
        return this.optionInternal(t, 8);
      }, t.prototype.OPTION9 = function (t) {
        return this.optionInternal(t, 9);
      }, t.prototype.OR = function (t) {
        return this.orInternal(t, 0);
      }, t.prototype.OR1 = function (t) {
        return this.orInternal(t, 1);
      }, t.prototype.OR2 = function (t) {
        return this.orInternal(t, 2);
      }, t.prototype.OR3 = function (t) {
        return this.orInternal(t, 3);
      }, t.prototype.OR4 = function (t) {
        return this.orInternal(t, 4);
      }, t.prototype.OR5 = function (t) {
        return this.orInternal(t, 5);
      }, t.prototype.OR6 = function (t) {
        return this.orInternal(t, 6);
      }, t.prototype.OR7 = function (t) {
        return this.orInternal(t, 7);
      }, t.prototype.OR8 = function (t) {
        return this.orInternal(t, 8);
      }, t.prototype.OR9 = function (t) {
        return this.orInternal(t, 9);
      }, t.prototype.MANY = function (t) {
        this.manyInternal(0, t);
      }, t.prototype.MANY1 = function (t) {
        this.manyInternal(1, t);
      }, t.prototype.MANY2 = function (t) {
        this.manyInternal(2, t);
      }, t.prototype.MANY3 = function (t) {
        this.manyInternal(3, t);
      }, t.prototype.MANY4 = function (t) {
        this.manyInternal(4, t);
      }, t.prototype.MANY5 = function (t) {
        this.manyInternal(5, t);
      }, t.prototype.MANY6 = function (t) {
        this.manyInternal(6, t);
      }, t.prototype.MANY7 = function (t) {
        this.manyInternal(7, t);
      }, t.prototype.MANY8 = function (t) {
        this.manyInternal(8, t);
      }, t.prototype.MANY9 = function (t) {
        this.manyInternal(9, t);
      }, t.prototype.MANY_SEP = function (t) {
        this.manySepFirstInternal(0, t);
      }, t.prototype.MANY_SEP1 = function (t) {
        this.manySepFirstInternal(1, t);
      }, t.prototype.MANY_SEP2 = function (t) {
        this.manySepFirstInternal(2, t);
      }, t.prototype.MANY_SEP3 = function (t) {
        this.manySepFirstInternal(3, t);
      }, t.prototype.MANY_SEP4 = function (t) {
        this.manySepFirstInternal(4, t);
      }, t.prototype.MANY_SEP5 = function (t) {
        this.manySepFirstInternal(5, t);
      }, t.prototype.MANY_SEP6 = function (t) {
        this.manySepFirstInternal(6, t);
      }, t.prototype.MANY_SEP7 = function (t) {
        this.manySepFirstInternal(7, t);
      }, t.prototype.MANY_SEP8 = function (t) {
        this.manySepFirstInternal(8, t);
      }, t.prototype.MANY_SEP9 = function (t) {
        this.manySepFirstInternal(9, t);
      }, t.prototype.AT_LEAST_ONE = function (t) {
        this.atLeastOneInternal(0, t);
      }, t.prototype.AT_LEAST_ONE1 = function (t) {
        return this.atLeastOneInternal(1, t);
      }, t.prototype.AT_LEAST_ONE2 = function (t) {
        this.atLeastOneInternal(2, t);
      }, t.prototype.AT_LEAST_ONE3 = function (t) {
        this.atLeastOneInternal(3, t);
      }, t.prototype.AT_LEAST_ONE4 = function (t) {
        this.atLeastOneInternal(4, t);
      }, t.prototype.AT_LEAST_ONE5 = function (t) {
        this.atLeastOneInternal(5, t);
      }, t.prototype.AT_LEAST_ONE6 = function (t) {
        this.atLeastOneInternal(6, t);
      }, t.prototype.AT_LEAST_ONE7 = function (t) {
        this.atLeastOneInternal(7, t);
      }, t.prototype.AT_LEAST_ONE8 = function (t) {
        this.atLeastOneInternal(8, t);
      }, t.prototype.AT_LEAST_ONE9 = function (t) {
        this.atLeastOneInternal(9, t);
      }, t.prototype.AT_LEAST_ONE_SEP = function (t) {
        this.atLeastOneSepFirstInternal(0, t);
      }, t.prototype.AT_LEAST_ONE_SEP1 = function (t) {
        this.atLeastOneSepFirstInternal(1, t);
      }, t.prototype.AT_LEAST_ONE_SEP2 = function (t) {
        this.atLeastOneSepFirstInternal(2, t);
      }, t.prototype.AT_LEAST_ONE_SEP3 = function (t) {
        this.atLeastOneSepFirstInternal(3, t);
      }, t.prototype.AT_LEAST_ONE_SEP4 = function (t) {
        this.atLeastOneSepFirstInternal(4, t);
      }, t.prototype.AT_LEAST_ONE_SEP5 = function (t) {
        this.atLeastOneSepFirstInternal(5, t);
      }, t.prototype.AT_LEAST_ONE_SEP6 = function (t) {
        this.atLeastOneSepFirstInternal(6, t);
      }, t.prototype.AT_LEAST_ONE_SEP7 = function (t) {
        this.atLeastOneSepFirstInternal(7, t);
      }, t.prototype.AT_LEAST_ONE_SEP8 = function (t) {
        this.atLeastOneSepFirstInternal(8, t);
      }, t.prototype.AT_LEAST_ONE_SEP9 = function (t) {
        this.atLeastOneSepFirstInternal(9, t);
      }, t.prototype.RULE = function (t, e, n) {
        if (void 0 === n && (n = o.DEFAULT_RULE_CONFIG), r.contains(this.definedRulesNames, t)) {
          var i = { message: a.defaultGrammarValidatorErrorProvider.buildDuplicateRuleNameError({ topLevelRule: t, grammarName: this.className }), type: o.ParserDefinitionErrorType.DUPLICATE_RULE_NAME, ruleName: t };this.definitionErrors.push(i);
        }if (this.definedRulesNames.push(t), !this.gastProductionsCache.containsKey(t) && !this.serializedGrammar) {
          var u = s.buildTopProduction(e.toString(), t, this.tokensMap);this.gastProductionsCache.put(t, u);
        }var c = this.defineRule(t, e, n);return this[t] = c, c;
      }, t.prototype.OVERRIDE_RULE = function (t, e, n) {
        void 0 === n && (n = o.DEFAULT_RULE_CONFIG);var r = [];if (r = r.concat(u.validateRuleIsOverridden(t, this.definedRulesNames, this.className)), this.definitionErrors.push.apply(this.definitionErrors, r), !this.serializedGrammar) {
          var i = s.buildTopProduction(e.toString(), t, this.tokensMap);this.gastProductionsCache.put(t, i);
        }var a = this.defineRule(t, e, n);return this[t] = a, a;
      }, t.prototype.BACKTRACK = function (t, e) {
        return function () {
          this.isBackTrackingStack.push(1);var n = this.saveRecogState();try {
            return t.apply(this, e), !0;
          } catch (t) {
            if (i.isRecognitionException(t)) return !1;throw t;
          } finally {
            this.reloadRecogState(n), this.isBackTrackingStack.pop();
          }
        };
      }, t.prototype.getGAstProductions = function () {
        return this.gastProductionsCache;
      }, t.prototype.getSerializedGastProductions = function () {
        return c.serializeGrammar(this.gastProductionsCache.values());
      }, t;
    }();e.RecognizerApi = p;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = n(0),
        i = n(9),
        o = n(6),
        a = n(12),
        s = n(13),
        u = n(3),
        c = n(25),
        p = n(2),
        l = n(7),
        h = n(4),
        f = function () {
      function t() {}return t.prototype.initRecognizerEngine = function (t, e) {
        if (this.className = h.classNameFromInstance(this), this.shortRuleNameToFull = new h.HashTable(), this.fullRuleNameToShort = new h.HashTable(), this.ruleShortNameIdx = 256, this.tokenMatcher = l.tokenStructuredMatcherNoCategories, this.definedRulesNames = [], this.tokensMap = {}, this.allRuleNames = [], this.isBackTrackingStack = [], this.RULE_STACK = [], this.RULE_OCCURRENCE_STACK = [], this.gastProductionsCache = new h.HashTable(), this.serializedGrammar = r.has(e, "serializedGrammar") ? e.serializedGrammar : u.DEFAULT_PARSER_CONFIG.serializedGrammar, r.isArray(t)) {
          if (r.isEmpty(t)) throw Error("A Token Vocabulary cannot be empty.\n\tNote that the first argument for the parser constructor\n\tis no longer a Token vector (since v4.0).");if ("number" == typeof t[0].startOffset) throw Error("The Parser constructor no longer accepts a token vector as the first argument.\n\tSee: https://sap.github.io/chevrotain/docs/changes/BREAKING_CHANGES.html#_4-0-0\n\tFor Further details.");
        }if (r.isArray(t)) this.tokensMap = r.reduce(t, function (t, e) {
          return t[p.tokenName(e)] = e, t;
        }, {});else if (r.has(t, "modes") && r.every(r.flatten(r.values(t.modes)), l.isTokenType)) {
          var n = r.flatten(r.values(t.modes)),
              i = r.uniq(n);this.tokensMap = r.reduce(i, function (t, e) {
            return t[p.tokenName(e)] = e, t;
          }, {});
        } else {
          if (!r.isObject(t)) throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap = r.cloneObj(t);
        }this.tokensMap.EOF = p.EOF;var o = r.every(r.values(t), function (t) {
          return r.isEmpty(t.categoryMatches);
        });this.tokenMatcher = o ? l.tokenStructuredMatcherNoCategories : l.tokenStructuredMatcher, l.augmentTokenTypes(r.values(this.tokensMap));
      }, t.prototype.defineRule = function (t, e, n) {
        if (this.selfAnalysisDone) throw Error("Grammar rule <" + t + "> may not be defined after the 'performSelfAnalysis' method has been called'\nMake sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.");var a,
            s = r.has(n, "resyncEnabled") ? n.resyncEnabled : u.DEFAULT_RULE_CONFIG.resyncEnabled,
            c = r.has(n, "recoveryValueFunc") ? n.recoveryValueFunc : u.DEFAULT_RULE_CONFIG.recoveryValueFunc,
            p = this.ruleShortNameIdx << i.BITS_FOR_METHOD_IDX + i.BITS_FOR_OCCURRENCE_IDX;this.ruleShortNameIdx++, this.shortRuleNameToFull.put(p, t), this.fullRuleNameToShort.put(t, p);return (a = function (n, r) {
          return void 0 === n && (n = 0), this.ruleInvocationStateUpdate(p, t, n), function (t) {
            try {
              return !0 === this.outputCst ? (e.apply(this, t), this.CST_STACK[this.CST_STACK.length - 1]) : e.apply(this, t);
            } catch (t) {
              var n = 1 === this.RULE_STACK.length,
                  r = s && !this.isBackTracking() && this.recoveryEnabled;if (o.isRecognitionException(t)) {
                if (r) {
                  var i,
                      a = this.findReSyncTokenType();if (this.isInCurrentRuleReSyncSet(a)) return t.resyncedTokens = this.reSyncTo(a), this.outputCst ? ((i = this.CST_STACK[this.CST_STACK.length - 1]).recoveredNode = !0, i) : c();throw this.outputCst && ((i = this.CST_STACK[this.CST_STACK.length - 1]).recoveredNode = !0, t.partialCstResult = i), t;
                }if (n) return this.moveToTerminatedState(), c();throw t;
              }throw t;
            } finally {
              this.ruleFinallyStateUpdate();
            }
          }.call(this, r);
        }).ruleName = t, a;
      }, t.prototype.optionInternal = function (t, e) {
        var n = this.getKeyForAutomaticLookahead(i.OPTION_IDX, e),
            r = this.nestedRuleBeforeClause(t, n);try {
          return this.optionInternalLogic(t, e, n);
        } finally {
          void 0 !== r && this.nestedRuleFinallyClause(n, r);
        }
      }, t.prototype.optionInternalNoCst = function (t, e) {
        var n = this.getKeyForAutomaticLookahead(i.OPTION_IDX, e);return this.optionInternalLogic(t, e, n);
      }, t.prototype.optionInternalLogic = function (t, e, n) {
        var r,
            i,
            o = this,
            a = this.getLookaheadFuncForOption(n, e);if (void 0 !== t.DEF) {
          if (r = t.DEF, void 0 !== (i = t.GATE)) {
            var s = a;a = function () {
              return i.call(o) && s.call(o);
            };
          }
        } else r = t;if (!0 === a.call(this)) return r.call(this);
      }, t.prototype.atLeastOneInternal = function (t, e) {
        var n = this.getKeyForAutomaticLookahead(i.AT_LEAST_ONE_IDX, t),
            r = this.nestedRuleBeforeClause(e, n);try {
          return this.atLeastOneInternalLogic(t, e, n);
        } finally {
          void 0 !== r && this.nestedRuleFinallyClause(n, r);
        }
      }, t.prototype.atLeastOneInternalNoCst = function (t, e) {
        var n = this.getKeyForAutomaticLookahead(i.AT_LEAST_ONE_IDX, t);this.atLeastOneInternalLogic(t, e, n);
      }, t.prototype.atLeastOneInternalLogic = function (t, e, n) {
        var r,
            o,
            u = this,
            c = this.getLookaheadFuncForAtLeastOne(n, t);if (void 0 !== e.DEF) {
          if (r = e.DEF, void 0 !== (o = e.GATE)) {
            var p = c;c = function () {
              return o.call(u) && p.call(u);
            };
          }
        } else r = e;if (!0 !== c.call(this)) throw this.raiseEarlyExitException(t, a.PROD_TYPE.REPETITION_MANDATORY, e.ERR_MSG);for (var l = this.doSingleRepetition(r); !0 === c.call(this) && !0 === l;) l = this.doSingleRepetition(r);this.attemptInRepetitionRecovery(this.atLeastOneInternal, [t, e], c, i.AT_LEAST_ONE_IDX, t, s.NextTerminalAfterAtLeastOneWalker);
      }, t.prototype.atLeastOneSepFirstInternal = function (t, e) {
        var n = this.getKeyForAutomaticLookahead(i.AT_LEAST_ONE_SEP_IDX, t),
            r = this.nestedRuleBeforeClause(e, n);try {
          this.atLeastOneSepFirstInternalLogic(t, e, n);
        } finally {
          void 0 !== r && this.nestedRuleFinallyClause(n, r);
        }
      }, t.prototype.atLeastOneSepFirstInternalNoCst = function (t, e) {
        var n = this.getKeyForAutomaticLookahead(i.AT_LEAST_ONE_SEP_IDX, t);this.atLeastOneSepFirstInternalLogic(t, e, n);
      }, t.prototype.atLeastOneSepFirstInternalLogic = function (t, e, n) {
        var r = this,
            o = e.DEF,
            u = e.SEP;if (!0 !== this.getLookaheadFuncForAtLeastOneSep(n, t).call(this)) throw this.raiseEarlyExitException(t, a.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, e.ERR_MSG);o.call(this);for (var c = function () {
          return r.tokenMatcher(r.LA(1), u);
        }; !0 === this.tokenMatcher(this.LA(1), u);) this.CONSUME(u), o.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [t, u, c, o, s.NextTerminalAfterAtLeastOneSepWalker], c, i.AT_LEAST_ONE_SEP_IDX, t, s.NextTerminalAfterAtLeastOneSepWalker);
      }, t.prototype.manyInternal = function (t, e) {
        var n = this.getKeyForAutomaticLookahead(i.MANY_IDX, t),
            r = this.nestedRuleBeforeClause(e, n);try {
          return this.manyInternalLogic(t, e, n);
        } finally {
          void 0 !== r && this.nestedRuleFinallyClause(n, r);
        }
      }, t.prototype.manyInternalNoCst = function (t, e) {
        var n = this.getKeyForAutomaticLookahead(i.MANY_IDX, t);return this.manyInternalLogic(t, e, n);
      }, t.prototype.manyInternalLogic = function (t, e, n) {
        var r,
            o,
            a = this,
            u = this.getLookaheadFuncForMany(n, t);if (void 0 !== e.DEF) {
          if (r = e.DEF, void 0 !== (o = e.GATE)) {
            var c = u;u = function () {
              return o.call(a) && c.call(a);
            };
          }
        } else r = e;for (var p = !0; !0 === u.call(this) && !0 === p;) p = this.doSingleRepetition(r);this.attemptInRepetitionRecovery(this.manyInternal, [t, e], u, i.MANY_IDX, t, s.NextTerminalAfterManyWalker);
      }, t.prototype.manySepFirstInternal = function (t, e) {
        var n = this.getKeyForAutomaticLookahead(i.MANY_SEP_IDX, t),
            r = this.nestedRuleBeforeClause(e, n);try {
          this.manySepFirstInternalLogic(t, e, n);
        } finally {
          void 0 !== r && this.nestedRuleFinallyClause(n, r);
        }
      }, t.prototype.manySepFirstInternalNoCst = function (t, e) {
        var n = this.getKeyForAutomaticLookahead(i.MANY_SEP_IDX, t);this.manySepFirstInternalLogic(t, e, n);
      }, t.prototype.manySepFirstInternalLogic = function (t, e, n) {
        var r = this,
            o = e.DEF,
            a = e.SEP;if (!0 === this.getLookaheadFuncForManySep(n, t).call(this)) {
          o.call(this);for (var u = function () {
            return r.tokenMatcher(r.LA(1), a);
          }; !0 === this.tokenMatcher(this.LA(1), a);) this.CONSUME(a), o.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [t, a, u, o, s.NextTerminalAfterManySepWalker], u, i.MANY_SEP_IDX, t, s.NextTerminalAfterManySepWalker);
        }
      }, t.prototype.repetitionSepSecondInternal = function (t, e, n, r, o) {
        for (; n();) this.CONSUME(e), r.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [t, e, n, r, o], n, i.AT_LEAST_ONE_SEP_IDX, t, o);
      }, t.prototype.doSingleRepetition = function (t) {
        var e = this.getLexerPosition();return t.call(this), this.getLexerPosition() > e;
      }, t.prototype.orInternalNoCst = function (t, e) {
        var n = r.isArray(t) ? t : t.DEF,
            i = this.getLookaheadFuncForOr(e, n).call(this, n);if (void 0 !== i) return n[i].ALT.call(this);this.raiseNoAltException(e, t.ERR_MSG);
      }, t.prototype.orInternal = function (t, e) {
        var n = this.getKeyForAutomaticLookahead(i.OR_IDX, e),
            o = this.nestedRuleBeforeClause(t, n);try {
          var a = r.isArray(t) ? t : t.DEF,
              s = this.getLookaheadFuncForOr(e, a).call(this, a);if (void 0 !== s) {
            var u = a[s],
                c = this.nestedAltBeforeClause(u, e, i.OR_IDX, s);try {
              return u.ALT.call(this);
            } finally {
              void 0 !== c && this.nestedRuleFinallyClause(c.shortName, c.nestedName);
            }
          }this.raiseNoAltException(e, t.ERR_MSG);
        } finally {
          void 0 !== o && this.nestedRuleFinallyClause(n, o);
        }
      }, t.prototype.ruleFinallyStateUpdate = function () {
        if (this.RULE_STACK.pop(), this.RULE_OCCURRENCE_STACK.pop(), this.cstFinallyStateUpdate(), 0 === this.RULE_STACK.length && !this.isAtEndOfInput()) {
          var t = this.LA(1),
              e = this.errorMessageProvider.buildNotAllInputParsedMessage({ firstRedundant: t, ruleName: this.getCurrRuleFullName() });this.SAVE_ERROR(new o.NotAllInputParsedException(e, t));
        }
      }, t.prototype.subruleInternal = function (t, e, n) {
        var r;try {
          var i = void 0 !== n ? n.ARGS : void 0;return r = t.call(this, e, i), this.cstPostNonTerminal(r, void 0 !== n && void 0 !== n.LABEL ? n.LABEL : t.ruleName), r;
        } catch (e) {
          throw o.isRecognitionException(e) && void 0 !== e.partialCstResult && (this.cstPostNonTerminal(e.partialCstResult, void 0 !== n && void 0 !== n.LABEL ? n.LABEL : t.ruleName), delete e.partialCstResult), e;
        }
      }, t.prototype.consumeInternal = function (t, e, n) {
        var r;try {
          var i = this.LA(1);if (!0 !== this.tokenMatcher(i, t)) {
            var a = void 0,
                s = this.LA(0);throw a = void 0 !== n && n.ERR_MSG ? n.ERR_MSG : this.errorMessageProvider.buildMismatchTokenMessage({ expected: t, actual: i, previous: s, ruleName: this.getCurrRuleFullName() }), this.SAVE_ERROR(new o.MismatchedTokenException(a, i, s));
          }this.consumeToken(), r = i;
        } catch (n) {
          if (!this.recoveryEnabled || "MismatchedTokenException" !== n.name || this.isBackTracking()) throw n;var u = this.getFollowsForInRuleRecovery(t, e);try {
            r = this.tryInRuleRecovery(t, u);
          } catch (t) {
            throw t.name === c.IN_RULE_RECOVERY_EXCEPTION ? n : t;
          }
        }return this.cstPostTerminal(void 0 !== n && void 0 !== n.LABEL ? n.LABEL : t.tokenName, r), r;
      }, t.prototype.saveRecogState = function () {
        var t = this.errors,
            e = r.cloneArr(this.RULE_STACK);return { errors: t, lexerState: this.exportLexerState(), RULE_STACK: e, CST_STACK: this.CST_STACK, LAST_EXPLICIT_RULE_STACK: this.LAST_EXPLICIT_RULE_STACK };
      }, t.prototype.reloadRecogState = function (t) {
        this.errors = t.errors, this.importLexerState(t.lexerState), this.RULE_STACK = t.RULE_STACK;
      }, t.prototype.ruleInvocationStateUpdate = function (t, e, n) {
        this.RULE_OCCURRENCE_STACK.push(n), this.RULE_STACK.push(t), this.cstInvocationStateUpdate(e, t);
      }, t.prototype.isBackTracking = function () {
        return !r.isEmpty(this.isBackTrackingStack);
      }, t.prototype.getCurrRuleFullName = function () {
        var t = this.getLastExplicitRuleShortName();return this.shortRuleNameToFull.get(t);
      }, t.prototype.shortRuleNameToFullName = function (t) {
        return this.shortRuleNameToFull.get(t);
      }, t.prototype.isAtEndOfInput = function () {
        return this.tokenMatcher(this.LA(1), p.EOF);
      }, t.prototype.reset = function () {
        this.resetLexerState(), this.isBackTrackingStack = [], this.errors = [], this.RULE_STACK = [], this.LAST_EXPLICIT_RULE_STACK = [], this.CST_STACK = [], this.RULE_OCCURRENCE_STACK = [];
      }, t;
    }();e.RecognizerEngine = f;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = n(6),
        i = n(0),
        o = n(12),
        a = n(3),
        s = function () {
      function t() {}return t.prototype.initErrorHandler = function (t) {
        this._errors = [], this.errorMessageProvider = i.defaults(t.errorMessageProvider, a.DEFAULT_PARSER_CONFIG.errorMessageProvider);
      }, t.prototype.SAVE_ERROR = function (t) {
        if (r.isRecognitionException(t)) return t.context = { ruleStack: this.getHumanReadableRuleStack(), ruleOccurrenceStack: i.cloneArr(this.RULE_OCCURRENCE_STACK) }, this._errors.push(t), t;throw Error("Trying to save an Error which is not a RecognitionException");
      }, Object.defineProperty(t.prototype, "errors", { get: function () {
          return i.cloneArr(this._errors);
        }, set: function (t) {
          this._errors = t;
        }, enumerable: !0, configurable: !0 }), t.prototype.raiseEarlyExitException = function (t, e, n) {
        for (var i = this.getCurrRuleFullName(), a = this.getGAstProductions().get(i), s = o.getLookaheadPathsForOptionalProd(t, a, e, this.maxLookahead)[0], u = [], c = 1; c < this.maxLookahead; c++) u.push(this.LA(c));var p = this.errorMessageProvider.buildEarlyExitMessage({ expectedIterationPaths: s, actual: u, previous: this.LA(0), customUserDescription: n, ruleName: i });throw this.SAVE_ERROR(new r.EarlyExitException(p, this.LA(1), this.LA(0)));
      }, t.prototype.raiseNoAltException = function (t, e) {
        for (var n = this.getCurrRuleFullName(), i = this.getGAstProductions().get(n), a = o.getLookaheadPathsForOr(t, i, this.maxLookahead), s = [], u = 1; u <= this.maxLookahead; u++) s.push(this.LA(u));var c = this.LA(0),
            p = this.errorMessageProvider.buildNoViableAltMessage({ expectedPathsPerAlt: a, actual: s, previous: c, customUserDescription: e, ruleName: this.getCurrRuleFullName() });throw this.SAVE_ERROR(new r.NoViableAltException(p, this.LA(1), c));
      }, t;
    }();e.ErrorHandler = s;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = n(13),
        i = n(0),
        o = function () {
      function t() {}return t.prototype.initContentAssist = function () {}, t.prototype.computeContentAssist = function (t, e) {
        var n = this.gastProductionsCache.get(t);if (i.isUndefined(n)) throw Error("Rule ->" + t + "<- does not exist in this grammar.");return r.nextPossibleTokensAfter([n], e, this.tokenMatcher, this.maxLookahead);
      }, t.prototype.getNextPossibleTokenTypes = function (t) {
        var e = i.first(t.ruleStack),
            n = this.getGAstProductions().get(e);return new r.NextAfterTokenWalker(n, t).startWalking();
      }, t;
    }();e.ContentAssist = o;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = n(17);e.createSyntaxDiagramsCode = function (t, e) {
      var n = void 0 === e ? {} : e,
          i = n.resourceBase,
          o = void 0 === i ? "https://unpkg.com/chevrotain@" + r.VERSION + "/diagrams/" : i,
          a = n.css;return "\n\x3c!-- This is a generated file --\x3e\n<!DOCTYPE html>\n<meta charset=\"utf-8\">\n<style>\n  body {\n    background-color: hsl(30, 20%, 95%)\n  }\n</style>\n\n\n<link rel='stylesheet' href='" + (void 0 === a ? "https://unpkg.com/chevrotain@" + r.VERSION + "/diagrams/diagrams.css" : a) + "'>\n\n<script src='" + o + "vendor/railroad-diagrams.js'><\/script>\n<script src='" + o + "src/diagrams_builder.js'><\/script>\n<script src='" + o + "src/diagrams_behavior.js'><\/script>\n<script src='" + o + 'src/main.js\'><\/script>\n\n<div id="diagrams" align="center"></div>    \n\n<script>\n    window.serializedGrammar = ' + JSON.stringify(t, null, "  ") + ';\n<\/script>\n\n<script>\n    var diagramsDiv = document.getElementById("diagrams");\n    main.drawDiagramsFromSerializedGrammar(serializedGrammar, diagramsDiv);\n<\/script>\n';
    };
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = n(41);e.generateParserFactory = function (t) {
      var e = r.genWrapperFunction({ name: t.name, rules: t.rules }),
          i = new Function("tokenVocabulary", "config", "chevrotain", e);return function (e) {
        return i(t.tokenVocabulary, e, n(18));
      };
    }, e.generateParserModule = function (t) {
      return r.genUmdModule({ name: t.name, rules: t.rules });
    };
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = n(0),
        i = n(2),
        o = n(1),
        a = "\n";function s(t) {
      return "\nfunction " + t.name + "(tokenVocabulary, config) {\n    // invoke super constructor\n    // No support for embedded actions currently, so we can 'hardcode'\n    // The use of CstParser.\n    chevrotain.CstParser.call(this, tokenVocabulary, config)\n\n    const $ = this\n\n    " + u(t.rules) + "\n\n    // very important to call this after all the rules have been defined.\n    // otherwise the parser may not work correctly as it will lack information\n    // derived during the self analysis phase.\n    this.performSelfAnalysis(this)\n}\n\n// inheritance as implemented in javascript in the previous decade... :(\n" + t.name + ".prototype = Object.create(chevrotain.CstParser.prototype)\n" + t.name + ".prototype.constructor = " + t.name + "    \n    ";
    }function u(t) {
      return r.map(t, function (t) {
        return c(t, 1);
      }).join("\n");
    }function c(t, e) {
      var n = y(e, '$.RULE("' + t.name + '", function() {') + a;return n += m(t.definition, e + 1), n += y(e + 1, "})") + a;
    }function p(t, e) {
      var n = i.tokenName(t.terminalType);return y(e, "$.CONSUME" + t.idx + "(this.tokensMap." + n + ")" + a);
    }function l(t, e) {
      return y(e, "$.SUBRULE" + t.idx + "($." + t.nonTerminalName + ")" + a);
    }function h(t, e) {
      var n = y(e, "$.OR" + t.idx + "([") + a;return n += r.map(t.definition, function (t) {
        return f(t, e + 1);
      }).join("," + a), n += a + y(e, "])" + a);
    }function f(t, e) {
      var n = y(e, "{") + a;return t.name && (n += y(e + 1, 'NAME: "' + t.name + '",') + a), n += y(e + 1, "ALT: function() {") + a, n += m(t.definition, e + 1), n += y(e + 1, "}") + a, n += y(e, "}");
    }function d(t, e, n) {
      var r = y(n, "$." + (t + e.idx) + "(");return e.name || e.separator ? (r += "{" + a, e.name && (r += y(n + 1, 'NAME: "' + e.name + '"') + "," + a), e.separator && (r += y(n + 1, "SEP: this.tokensMap." + i.tokenName(e.separator)) + "," + a), r += "DEF: " + E(e.definition, n + 2) + a, r += y(n, "}") + a) : r += E(e.definition, n + 1), r += y(n, ")") + a;
    }function E(t, e) {
      var n = "function() {" + a;return n += m(t, e), n += y(e, "}") + a;
    }function m(t, e) {
      var n = "";return r.forEach(t, function (t) {
        n += function (t, e) {
          if (t instanceof o.NonTerminal) return l(t, e);if (t instanceof o.Option) return d("OPTION", t, e);if (t instanceof o.RepetitionMandatory) return d("AT_LEAST_ONE", t, e);if (t instanceof o.RepetitionMandatoryWithSeparator) return d("AT_LEAST_ONE_SEP", t, e);if (t instanceof o.RepetitionWithSeparator) return d("MANY_SEP", t, e);if (t instanceof o.Repetition) return d("MANY", t, e);if (t instanceof o.Alternation) return h(t, e);if (t instanceof o.Terminal) return p(t, e);if (t instanceof o.Flat) return m(t.definition, e);throw Error("non exhaustive match");
        }(t, e + 1);
      }), n;
    }function y(t, e) {
      return Array(4 * t + 1).join(" ") + e;
    }e.genUmdModule = function (t) {
      return "\n(function (root, factory) {\n    if (typeof define === 'function' && define.amd) {\n        // AMD. Register as an anonymous module.\n        define(['chevrotain'], factory);\n    } else if (typeof module === 'object' && module.exports) {\n        // Node. Does not work with strict CommonJS, but\n        // only CommonJS-like environments that support module.exports,\n        // like Node.\n        module.exports = factory(require('chevrotain'));\n    } else {\n        // Browser globals (root is window)\n        root.returnExports = factory(root.b);\n    }\n}(typeof self !== 'undefined' ? self : this, function (chevrotain) {\n\n" + s(t) + "\n    \nreturn {\n    " + t.name + ": " + t.name + " \n}\n}));\n";
    }, e.genWrapperFunction = function (t) {
      return "    \n" + s(t) + "\nreturn new " + t.name + "(tokenVocabulary, config)    \n";
    }, e.genClass = s, e.genAllRules = u, e.genRule = c, e.genTerminal = p, e.genNonTerminal = l, e.genAlternation = h, e.genSingleAlt = f;
  }]);
});
export var chevrotain = window.chevrotain;

//# sourceMappingURL=chevrotain.module.min-compiled.js.map