!(function (t, e, i, n) {
  'use strict';
  function r(t, e, i) {
    return setTimeout(u(t, i), e);
  }
  function s(t, e, i) {
    return !!Array.isArray(t) && (o(t, i[e], i), !0);
  }
  function o(t, e, i) {
    var r;
    if (t)
      if (t.forEach) t.forEach(e, i);
      else if (t.length !== n)
        for (r = 0; r < t.length; ) e.call(i, t[r], r, t), r++;
      else for (r in t) t.hasOwnProperty(r) && e.call(i, t[r], r, t);
  }
  function a(e, i, n) {
    var r = 'DEPRECATED METHOD: ' + i + '\n' + n + ' AT \n';
    return function () {
      var i = new Error('get-stack-trace'),
        n =
          i && i.stack
            ? i.stack
                .replace(/^[^\(]+?[\n$]/gm, '')
                .replace(/^\s+at\s+/gm, '')
                .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@')
            : 'Unknown Stack Trace',
        s = t.console && (t.console.warn || t.console.log);
      return s && s.call(t.console, r, n), e.apply(this, arguments);
    };
  }
  function h(t, e, i) {
    var n,
      r = e.prototype;
    ((n = t.prototype = Object.create(r)).constructor = t),
      (n._super = r),
      i && Q(n, i);
  }
  function u(t, e) {
    return function () {
      return t.apply(e, arguments);
    };
  }
  function c(t, e) {
    return typeof t == it ? t.apply((e && e[0]) || n, e) : t;
  }
  function l(t, e) {
    return t === n ? e : t;
  }
  function p(t, e, i) {
    o(m(e), function (e) {
      t.addEventListener(e, i, !1);
    });
  }
  function f(t, e, i) {
    o(m(e), function (e) {
      t.removeEventListener(e, i, !1);
    });
  }
  function d(t, e) {
    for (; t; ) {
      if (t == e) return !0;
      t = t.parentNode;
    }
    return !1;
  }
  function v(t, e) {
    return t.indexOf(e) > -1;
  }
  function m(t) {
    return t.trim().split(/\s+/g);
  }
  function g(t, e, i) {
    if (t.indexOf && !i) return t.indexOf(e);
    for (var n = 0; n < t.length; ) {
      if ((i && t[n][i] == e) || (!i && t[n] === e)) return n;
      n++;
    }
    return -1;
  }
  function T(t) {
    return Array.prototype.slice.call(t, 0);
  }
  function y(t, e, i) {
    for (var n = [], r = [], s = 0; s < t.length; ) {
      var o = e ? t[s][e] : t[s];
      g(r, o) < 0 && n.push(t[s]), (r[s] = o), s++;
    }
    return (
      i &&
        (n = e
          ? n.sort(function (t, i) {
              return t[e] > i[e];
            })
          : n.sort()),
      n
    );
  }
  function E(t, e) {
    for (
      var i, r, s = e[0].toUpperCase() + e.slice(1), o = 0;
      o < tt.length;

    ) {
      if ((r = (i = tt[o]) ? i + s : e) in t) return r;
      o++;
    }
    return n;
  }
  function I(e) {
    var i = e.ownerDocument || e;
    return i.defaultView || i.parentWindow || t;
  }
  function A(t, e) {
    var i = this;
    (this.manager = t),
      (this.callback = e),
      (this.element = t.element),
      (this.target = t.options.inputTarget),
      (this.domHandler = function (e) {
        c(t.options.enable, [t]) && i.handler(e);
      }),
      this.init();
  }
  function _(t, e, i) {
    var n = i.pointers.length,
      r = i.changedPointers.length,
      s = e & vt && n - r == 0,
      o = e & (mt | gt) && n - r == 0;
    (i.isFirst = !!s),
      (i.isFinal = !!o),
      s && (t.session = {}),
      (i.eventType = e),
      (function (t, e) {
        var i = t.session,
          n = e.pointers,
          r = n.length;
        i.firstInput || (i.firstInput = S(e)),
          r > 1 && !i.firstMultiple
            ? (i.firstMultiple = S(e))
            : 1 === r && (i.firstMultiple = !1);
        var s = i.firstInput,
          o = i.firstMultiple,
          a = o ? o.center : s.center,
          h = (e.center = b(n));
        (e.timeStamp = st()),
          (e.deltaTime = e.timeStamp - s.timeStamp),
          (e.angle = w(a, h)),
          (e.distance = x(a, h)),
          (function (t, e) {
            var i = e.center,
              n = t.offsetDelta || {},
              r = t.prevDelta || {},
              s = t.prevInput || {};
            (e.eventType !== vt && s.eventType !== mt) ||
              ((r = t.prevDelta = { x: s.deltaX || 0, y: s.deltaY || 0 }),
              (n = t.offsetDelta = { x: i.x, y: i.y })),
              (e.deltaX = r.x + (i.x - n.x)),
              (e.deltaY = r.y + (i.y - n.y));
          })(i, e),
          (e.offsetDirection = D(e.deltaX, e.deltaY));
        var u = P(e.deltaTime, e.deltaX, e.deltaY);
        (e.overallVelocityX = u.x),
          (e.overallVelocityY = u.y),
          (e.overallVelocity = rt(u.x) > rt(u.y) ? u.x : u.y),
          (e.scale = o
            ? (function (t, e) {
                return x(n[0], n[1], Pt) / x(t[0], t[1], Pt);
              })(o.pointers)
            : 1),
          (e.rotation = o
            ? (function (t, e) {
                return w(n[1], n[0], Pt) + w(t[1], t[0], Pt);
              })(o.pointers)
            : 0),
          (e.maxPointers = i.prevInput
            ? e.pointers.length > i.prevInput.maxPointers
              ? e.pointers.length
              : i.prevInput.maxPointers
            : e.pointers.length),
          C(i, e);
        var c = t.element;
        d(e.srcEvent.target, c) && (c = e.srcEvent.target), (e.target = c);
      })(t, i),
      t.emit('hammer.input', i),
      t.recognize(i),
      (t.session.prevInput = i);
  }
  function C(t, e) {
    var i,
      r,
      s,
      o,
      a = t.lastInterval || e,
      h = e.timeStamp - a.timeStamp;
    if (e.eventType != gt && (h > dt || a.velocity === n)) {
      var u = e.deltaX - a.deltaX,
        c = e.deltaY - a.deltaY,
        l = P(h, u, c);
      (r = l.x),
        (s = l.y),
        (i = rt(l.x) > rt(l.y) ? l.x : l.y),
        (o = D(u, c)),
        (t.lastInterval = e);
    } else
      (i = a.velocity), (r = a.velocityX), (s = a.velocityY), (o = a.direction);
    (e.velocity = i), (e.velocityX = r), (e.velocityY = s), (e.direction = o);
  }
  function S(t) {
    for (var e = [], i = 0; i < t.pointers.length; )
      (e[i] = {
        clientX: nt(t.pointers[i].clientX),
        clientY: nt(t.pointers[i].clientY),
      }),
        i++;
    return {
      timeStamp: st(),
      pointers: e,
      center: b(e),
      deltaX: t.deltaX,
      deltaY: t.deltaY,
    };
  }
  function b(t) {
    var e = t.length;
    if (1 === e) return { x: nt(t[0].clientX), y: nt(t[0].clientY) };
    for (var i = 0, n = 0, r = 0; e > r; )
      (i += t[r].clientX), (n += t[r].clientY), r++;
    return { x: nt(i / e), y: nt(n / e) };
  }
  function P(t, e, i) {
    return { x: e / t || 0, y: i / t || 0 };
  }
  function D(t, e) {
    return t === e ? Tt : rt(t) >= rt(e) ? (0 > t ? yt : Et) : 0 > e ? It : At;
  }
  function x(t, e, i) {
    i || (i = bt);
    var n = e[i[0]] - t[i[0]],
      r = e[i[1]] - t[i[1]];
    return Math.sqrt(n * n + r * r);
  }
  function w(t, e, i) {
    return (
      i || (i = bt),
      (180 * Math.atan2(e[i[1]] - t[i[1]], e[i[0]] - t[i[0]])) / Math.PI
    );
  }
  function O() {
    (this.evEl = xt),
      (this.evWin = wt),
      (this.pressed = !1),
      A.apply(this, arguments);
  }
  function R() {
    (this.evEl = Mt),
      (this.evWin = zt),
      A.apply(this, arguments),
      (this.store = this.manager.session.pointerEvents = []);
  }
  function M() {
    (this.evTarget = Xt),
      (this.evWin = Yt),
      (this.started = !1),
      A.apply(this, arguments);
  }
  function z() {
    (this.evTarget = Wt), (this.targetIds = {}), A.apply(this, arguments);
  }
  function N() {
    A.apply(this, arguments);
    var t = u(this.handler, this);
    (this.touch = new z(this.manager, t)),
      (this.mouse = new O(this.manager, t)),
      (this.primaryTouch = null),
      (this.lastTouches = []);
  }
  function X(t) {
    var e = t.changedPointers[0];
    if (e.identifier === this.primaryTouch) {
      var i = { x: e.clientX, y: e.clientY };
      this.lastTouches.push(i);
      var n = this.lastTouches;
      setTimeout(function () {
        var t = n.indexOf(i);
        t > -1 && n.splice(t, 1);
      }, qt);
    }
  }
  function Y(t, e) {
    (this.manager = t), this.set(e);
  }
  function F(t) {
    (this.options = Q({}, this.defaults, t || {})),
      (this.id = ht++),
      (this.manager = null),
      (this.options.enable = l(this.options.enable, !0)),
      (this.state = Bt),
      (this.simultaneous = {}),
      (this.requireFail = []);
  }
  function W(t) {
    return t & te
      ? 'cancel'
      : t & Kt
      ? 'end'
      : t & Jt
      ? 'move'
      : t & $t
      ? 'start'
      : '';
  }
  function q(t) {
    return t == At
      ? 'down'
      : t == It
      ? 'up'
      : t == yt
      ? 'left'
      : t == Et
      ? 'right'
      : '';
  }
  function k(t, e) {
    var i = e.manager;
    return i ? i.get(t) : t;
  }
  function H() {
    F.apply(this, arguments);
  }
  function L() {
    H.apply(this, arguments), (this.pX = null), (this.pY = null);
  }
  function U() {
    H.apply(this, arguments);
  }
  function V() {
    F.apply(this, arguments), (this._timer = null), (this._input = null);
  }
  function j() {
    H.apply(this, arguments);
  }
  function G() {
    H.apply(this, arguments);
  }
  function Z() {
    F.apply(this, arguments),
      (this.pTime = !1),
      (this.pCenter = !1),
      (this._timer = null),
      (this._input = null),
      (this.count = 0);
  }
  function B(t, e) {
    return (
      ((e = e || {}).recognizers = l(e.recognizers, B.defaults.preset)),
      new $(t, e)
    );
  }
  function $(t, e) {
    (this.options = Q({}, B.defaults, e || {})),
      (this.options.inputTarget = this.options.inputTarget || t),
      (this.handlers = {}),
      (this.session = {}),
      (this.recognizers = []),
      (this.oldCssProps = {}),
      (this.element = t),
      (this.input = (function (t) {
        return new (t.options.inputClass || (ct ? R : lt ? z : ut ? N : O))(
          t,
          _
        );
      })(this)),
      (this.touchAction = new Y(this, this.options.touchAction)),
      J(this, !0),
      o(
        this.options.recognizers,
        function (t) {
          var e = this.add(new t[0](t[1]));
          t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]);
        },
        this
      );
  }
  function J(t, e) {
    var i,
      n = t.element;
    n.style &&
      (o(t.options.cssProps, function (r, s) {
        (i = E(n.style, s)),
          e
            ? ((t.oldCssProps[i] = n.style[i]), (n.style[i] = r))
            : (n.style[i] = t.oldCssProps[i] || '');
      }),
      e || (t.oldCssProps = {}));
  }
  function K(t, i) {
    var n = e.createEvent('Event');
    n.initEvent(t, !0, !0), (n.gesture = i), i.target.dispatchEvent(n);
  }
  var Q,
    tt = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'],
    et = e.createElement('div'),
    it = 'function',
    nt = Math.round,
    rt = Math.abs,
    st = Date.now;
  Q =
    'function' != typeof Object.assign
      ? function (t) {
          if (t === n || null === t)
            throw new TypeError('Cannot convert undefined or null to object');
          for (var e = Object(t), i = 1; i < arguments.length; i++) {
            var r = arguments[i];
            if (r !== n && null !== r)
              for (var s in r) r.hasOwnProperty(s) && (e[s] = r[s]);
          }
          return e;
        }
      : Object.assign;
  var ot = a(
      function (t, e, i) {
        for (var r = Object.keys(e), s = 0; s < r.length; )
          (!i || (i && t[r[s]] === n)) && (t[r[s]] = e[r[s]]), s++;
        return t;
      },
      'extend',
      'Use `assign`.'
    ),
    at = a(
      function (t, e) {
        return ot(t, e, !0);
      },
      'merge',
      'Use `assign`.'
    ),
    ht = 1,
    ut = 'ontouchstart' in t,
    ct = E(t, 'PointerEvent') !== n,
    lt =
      ut && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
    pt = 'touch',
    ft = 'mouse',
    dt = 25,
    vt = 1,
    mt = 4,
    gt = 8,
    Tt = 1,
    yt = 2,
    Et = 4,
    It = 8,
    At = 16,
    _t = yt | Et,
    Ct = It | At,
    St = _t | Ct,
    bt = ['x', 'y'],
    Pt = ['clientX', 'clientY'];
  A.prototype = {
    handler: function () {},
    init: function () {
      this.evEl && p(this.element, this.evEl, this.domHandler),
        this.evTarget && p(this.target, this.evTarget, this.domHandler),
        this.evWin && p(I(this.element), this.evWin, this.domHandler);
    },
    destroy: function () {
      this.evEl && f(this.element, this.evEl, this.domHandler),
        this.evTarget && f(this.target, this.evTarget, this.domHandler),
        this.evWin && f(I(this.element), this.evWin, this.domHandler);
    },
  };
  var Dt = { mousedown: vt, mousemove: 2, mouseup: mt },
    xt = 'mousedown',
    wt = 'mousemove mouseup';
  h(O, A, {
    handler: function (t) {
      var e = Dt[t.type];
      e & vt && 0 === t.button && (this.pressed = !0),
        2 & e && 1 !== t.which && (e = mt),
        this.pressed &&
          (e & mt && (this.pressed = !1),
          this.callback(this.manager, e, {
            pointers: [t],
            changedPointers: [t],
            pointerType: ft,
            srcEvent: t,
          }));
    },
  });
  var Ot = {
      pointerdown: vt,
      pointermove: 2,
      pointerup: mt,
      pointercancel: gt,
      pointerout: gt,
    },
    Rt = { 2: pt, 3: 'pen', 4: ft, 5: 'kinect' },
    Mt = 'pointerdown',
    zt = 'pointermove pointerup pointercancel';
  t.MSPointerEvent &&
    !t.PointerEvent &&
    ((Mt = 'MSPointerDown'),
    (zt = 'MSPointerMove MSPointerUp MSPointerCancel')),
    h(R, A, {
      handler: function (t) {
        var e = this.store,
          i = !1,
          n = t.type.toLowerCase().replace('ms', ''),
          r = Ot[n],
          s = Rt[t.pointerType] || t.pointerType,
          o = s == pt,
          a = g(e, t.pointerId, 'pointerId');
        r & vt && (0 === t.button || o)
          ? 0 > a && (e.push(t), (a = e.length - 1))
          : r & (mt | gt) && (i = !0),
          0 > a ||
            ((e[a] = t),
            this.callback(this.manager, r, {
              pointers: e,
              changedPointers: [t],
              pointerType: s,
              srcEvent: t,
            }),
            i && e.splice(a, 1));
      },
    });
  var Nt = { touchstart: vt, touchmove: 2, touchend: mt, touchcancel: gt },
    Xt = 'touchstart',
    Yt = 'touchstart touchmove touchend touchcancel';
  h(M, A, {
    handler: function (t) {
      var e = Nt[t.type];
      if ((e === vt && (this.started = !0), this.started)) {
        var i = function (t, e) {
          var i = T(t.touches),
            n = T(t.changedTouches);
          return (
            e & (mt | gt) && (i = y(i.concat(n), 'identifier', !0)), [i, n]
          );
        }.call(this, t, e);
        e & (mt | gt) && i[0].length - i[1].length == 0 && (this.started = !1),
          this.callback(this.manager, e, {
            pointers: i[0],
            changedPointers: i[1],
            pointerType: pt,
            srcEvent: t,
          });
      }
    },
  });
  var Ft = { touchstart: vt, touchmove: 2, touchend: mt, touchcancel: gt },
    Wt = 'touchstart touchmove touchend touchcancel';
  h(z, A, {
    handler: function (t) {
      var e = Ft[t.type],
        i = function (t, e) {
          var i = T(t.touches),
            n = this.targetIds;
          if (e & (2 | vt) && 1 === i.length)
            return (n[i[0].identifier] = !0), [i, i];
          var r,
            s,
            o = T(t.changedTouches),
            a = [],
            h = this.target;
          if (
            ((s = i.filter(function (t) {
              return d(t.target, h);
            })),
            e === vt)
          )
            for (r = 0; r < s.length; ) (n[s[r].identifier] = !0), r++;
          for (r = 0; r < o.length; )
            n[o[r].identifier] && a.push(o[r]),
              e & (mt | gt) && delete n[o[r].identifier],
              r++;
          return a.length ? [y(s.concat(a), 'identifier', !0), a] : void 0;
        }.call(this, t, e);
      i &&
        this.callback(this.manager, e, {
          pointers: i[0],
          changedPointers: i[1],
          pointerType: pt,
          srcEvent: t,
        });
    },
  });
  var qt = 2500;
  h(N, A, {
    handler: function (t, e, i) {
      var n = i.pointerType == ft;
      if (
        !(n && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)
      ) {
        if (i.pointerType == pt)
          (function (t, e) {
            t & vt
              ? ((this.primaryTouch = e.changedPointers[0].identifier),
                X.call(this, e))
              : t & (mt | gt) && X.call(this, e);
          }).call(this, e, i);
        else if (
          n &&
          function (t) {
            for (
              var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0;
              n < this.lastTouches.length;
              n++
            ) {
              var r = this.lastTouches[n],
                s = Math.abs(e - r.x),
                o = Math.abs(i - r.y);
              if (25 >= s && 25 >= o) return !0;
            }
            return !1;
          }.call(this, i)
        )
          return;
        this.callback(t, e, i);
      }
    },
    destroy: function () {
      this.touch.destroy(), this.mouse.destroy();
    },
  });
  var kt = E(et.style, 'touchAction'),
    Ht = kt !== n,
    Lt = 'compute',
    Ut = 'manipulation',
    Vt = 'none',
    jt = 'pan-x',
    Gt = 'pan-y',
    Zt = (function () {
      if (!Ht) return !1;
      var e = {},
        i = t.CSS && t.CSS.supports;
      return (
        [
          'auto',
          'manipulation',
          'pan-y',
          'pan-x',
          'pan-x pan-y',
          'none',
        ].forEach(function (n) {
          e[n] = !i || t.CSS.supports('touch-action', n);
        }),
        e
      );
    })();
  Y.prototype = {
    set: function (t) {
      t == Lt && (t = this.compute()),
        Ht &&
          this.manager.element.style &&
          Zt[t] &&
          (this.manager.element.style[kt] = t),
        (this.actions = t.toLowerCase().trim());
    },
    update: function () {
      this.set(this.manager.options.touchAction);
    },
    compute: function () {
      var t = [];
      return (
        o(this.manager.recognizers, function (e) {
          c(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()));
        }),
        (function (t) {
          if (v(t, Vt)) return Vt;
          var e = v(t, jt),
            i = v(t, Gt);
          return e && i ? Vt : e || i ? (e ? jt : Gt) : v(t, Ut) ? Ut : 'auto';
        })(t.join(' '))
      );
    },
    preventDefaults: function (t) {
      var e = t.srcEvent,
        i = t.offsetDirection;
      if (!this.manager.session.prevented) {
        var n = this.actions,
          r = v(n, Vt) && !Zt[Vt],
          s = v(n, Gt) && !Zt[Gt],
          o = v(n, jt) && !Zt[jt];
        if (r && 1 === t.pointers.length && t.distance < 2 && t.deltaTime < 250)
          return;
        return o && s
          ? void 0
          : r || (s && i & _t) || (o && i & Ct)
          ? this.preventSrc(e)
          : void 0;
      }
      e.preventDefault();
    },
    preventSrc: function (t) {
      (this.manager.session.prevented = !0), t.preventDefault();
    },
  };
  var Bt = 1,
    $t = 2,
    Jt = 4,
    Kt = 8,
    Qt = Kt,
    te = 16;
  (F.prototype = {
    defaults: {},
    set: function (t) {
      return (
        Q(this.options, t),
        this.manager && this.manager.touchAction.update(),
        this
      );
    },
    recognizeWith: function (t) {
      if (s(t, 'recognizeWith', this)) return this;
      var e = this.simultaneous;
      return (
        e[(t = k(t, this)).id] || ((e[t.id] = t), t.recognizeWith(this)), this
      );
    },
    dropRecognizeWith: function (t) {
      return s(t, 'dropRecognizeWith', this)
        ? this
        : ((t = k(t, this)), delete this.simultaneous[t.id], this);
    },
    requireFailure: function (t) {
      if (s(t, 'requireFailure', this)) return this;
      var e = this.requireFail;
      return (
        -1 === g(e, (t = k(t, this))) && (e.push(t), t.requireFailure(this)),
        this
      );
    },
    dropRequireFailure: function (t) {
      if (s(t, 'dropRequireFailure', this)) return this;
      t = k(t, this);
      var e = g(this.requireFail, t);
      return e > -1 && this.requireFail.splice(e, 1), this;
    },
    hasRequireFailures: function () {
      return this.requireFail.length > 0;
    },
    canRecognizeWith: function (t) {
      return !!this.simultaneous[t.id];
    },
    emit: function (t) {
      function e(e) {
        i.manager.emit(e, t);
      }
      var i = this,
        n = this.state;
      Kt > n && e(i.options.event + W(n)),
        e(i.options.event),
        t.additionalEvent && e(t.additionalEvent),
        n >= Kt && e(i.options.event + W(n));
    },
    tryEmit: function (t) {
      return this.canEmit() ? this.emit(t) : void (this.state = 32);
    },
    canEmit: function () {
      for (var t = 0; t < this.requireFail.length; ) {
        if (!(this.requireFail[t].state & (32 | Bt))) return !1;
        t++;
      }
      return !0;
    },
    recognize: function (t) {
      var e = Q({}, t);
      return c(this.options.enable, [this, e])
        ? (this.state & (Qt | te | 32) && (this.state = Bt),
          (this.state = this.process(e)),
          void (this.state & ($t | Jt | Kt | te) && this.tryEmit(e)))
        : (this.reset(), void (this.state = 32));
    },
    process: function (t) {},
    getTouchAction: function () {},
    reset: function () {},
  }),
    h(H, F, {
      defaults: { pointers: 1 },
      attrTest: function (t) {
        var e = this.options.pointers;
        return 0 === e || t.pointers.length === e;
      },
      process: function (t) {
        var e = this.state,
          i = t.eventType,
          n = e & ($t | Jt),
          r = this.attrTest(t);
        return n && (i & gt || !r)
          ? e | te
          : n || r
          ? i & mt
            ? e | Kt
            : e & $t
            ? e | Jt
            : $t
          : 32;
      },
    }),
    h(L, H, {
      defaults: { event: 'pan', threshold: 10, pointers: 1, direction: St },
      getTouchAction: function () {
        var t = this.options.direction,
          e = [];
        return t & _t && e.push(Gt), t & Ct && e.push(jt), e;
      },
      directionTest: function (t) {
        var e = this.options,
          i = !0,
          n = t.distance,
          r = t.direction,
          s = t.deltaX,
          o = t.deltaY;
        return (
          r & e.direction ||
            (e.direction & _t
              ? ((r = 0 === s ? Tt : 0 > s ? yt : Et),
                (i = s != this.pX),
                (n = Math.abs(t.deltaX)))
              : ((r = 0 === o ? Tt : 0 > o ? It : At),
                (i = o != this.pY),
                (n = Math.abs(t.deltaY)))),
          (t.direction = r),
          i && n > e.threshold && r & e.direction
        );
      },
      attrTest: function (t) {
        return (
          H.prototype.attrTest.call(this, t) &&
          (this.state & $t || (!(this.state & $t) && this.directionTest(t)))
        );
      },
      emit: function (t) {
        (this.pX = t.deltaX), (this.pY = t.deltaY);
        var e = q(t.direction);
        e && (t.additionalEvent = this.options.event + e),
          this._super.emit.call(this, t);
      },
    }),
    h(U, H, {
      defaults: { event: 'pinch', threshold: 0, pointers: 2 },
      getTouchAction: function () {
        return [Vt];
      },
      attrTest: function (t) {
        return (
          this._super.attrTest.call(this, t) &&
          (Math.abs(t.scale - 1) > this.options.threshold || this.state & $t)
        );
      },
      emit: function (t) {
        1 !== t.scale &&
          (t.additionalEvent =
            this.options.event + (t.scale < 1 ? 'in' : 'out')),
          this._super.emit.call(this, t);
      },
    }),
    h(V, F, {
      defaults: { event: 'press', pointers: 1, time: 251, threshold: 9 },
      getTouchAction: function () {
        return ['auto'];
      },
      process: function (t) {
        var e = this.options,
          i = t.pointers.length === e.pointers,
          n = t.distance < e.threshold,
          s = t.deltaTime > e.time;
        if (((this._input = t), !n || !i || (t.eventType & (mt | gt) && !s)))
          this.reset();
        else if (t.eventType & vt)
          this.reset(),
            (this._timer = r(
              function () {
                (this.state = Qt), this.tryEmit();
              },
              e.time,
              this
            ));
        else if (t.eventType & mt) return Qt;
        return 32;
      },
      reset: function () {
        clearTimeout(this._timer);
      },
      emit: function (t) {
        this.state === Qt &&
          (t && t.eventType & mt
            ? this.manager.emit(this.options.event + 'up', t)
            : ((this._input.timeStamp = st()),
              this.manager.emit(this.options.event, this._input)));
      },
    }),
    h(j, H, {
      defaults: { event: 'rotate', threshold: 0, pointers: 2 },
      getTouchAction: function () {
        return [Vt];
      },
      attrTest: function (t) {
        return (
          this._super.attrTest.call(this, t) &&
          (Math.abs(t.rotation) > this.options.threshold || this.state & $t)
        );
      },
    }),
    h(G, H, {
      defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: _t | Ct,
        pointers: 1,
      },
      getTouchAction: function () {
        return L.prototype.getTouchAction.call(this);
      },
      attrTest: function (t) {
        var e,
          i = this.options.direction;
        return (
          i & (_t | Ct)
            ? (e = t.overallVelocity)
            : i & _t
            ? (e = t.overallVelocityX)
            : i & Ct && (e = t.overallVelocityY),
          this._super.attrTest.call(this, t) &&
            i & t.offsetDirection &&
            t.distance > this.options.threshold &&
            t.maxPointers == this.options.pointers &&
            rt(e) > this.options.velocity &&
            t.eventType & mt
        );
      },
      emit: function (t) {
        var e = q(t.offsetDirection);
        e && this.manager.emit(this.options.event + e, t),
          this.manager.emit(this.options.event, t);
      },
    }),
    h(Z, F, {
      defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300,
        time: 250,
        threshold: 9,
        posThreshold: 10,
      },
      getTouchAction: function () {
        return [Ut];
      },
      process: function (t) {
        var e = this.options,
          i = t.pointers.length === e.pointers,
          n = t.distance < e.threshold,
          s = t.deltaTime < e.time;
        if ((this.reset(), t.eventType & vt && 0 === this.count))
          return this.failTimeout();
        if (n && s && i) {
          if (t.eventType != mt) return this.failTimeout();
          var o = !this.pTime || t.timeStamp - this.pTime < e.interval,
            a = !this.pCenter || x(this.pCenter, t.center) < e.posThreshold;
          if (
            ((this.pTime = t.timeStamp),
            (this.pCenter = t.center),
            a && o ? (this.count += 1) : (this.count = 1),
            (this._input = t),
            0 == this.count % e.taps)
          )
            return this.hasRequireFailures()
              ? ((this._timer = r(
                  function () {
                    (this.state = Qt), this.tryEmit();
                  },
                  e.interval,
                  this
                )),
                $t)
              : Qt;
        }
        return 32;
      },
      failTimeout: function () {
        return (
          (this._timer = r(
            function () {
              this.state = 32;
            },
            this.options.interval,
            this
          )),
          32
        );
      },
      reset: function () {
        clearTimeout(this._timer);
      },
      emit: function () {
        this.state == Qt &&
          ((this._input.tapCount = this.count),
          this.manager.emit(this.options.event, this._input));
      },
    }),
    (B.VERSION = '2.0.7'),
    (B.defaults = {
      domEvents: !1,
      touchAction: Lt,
      enable: !0,
      inputTarget: null,
      inputClass: null,
      preset: [
        [j, { enable: !1 }],
        [U, { enable: !1 }, ['rotate']],
        [G, { direction: _t }],
        [L, { direction: _t }, ['swipe']],
        [Z],
        [Z, { event: 'doubletap', taps: 2 }, ['tap']],
        [V],
      ],
      cssProps: {
        userSelect: 'none',
        touchSelect: 'none',
        touchCallout: 'none',
        contentZooming: 'none',
        userDrag: 'none',
        tapHighlightColor: 'rgba(0,0,0,0)',
      },
    }),
    ($.prototype = {
      set: function (t) {
        return (
          Q(this.options, t),
          t.touchAction && this.touchAction.update(),
          t.inputTarget &&
            (this.input.destroy(),
            (this.input.target = t.inputTarget),
            this.input.init()),
          this
        );
      },
      stop: function (t) {
        this.session.stopped = t ? 2 : 1;
      },
      recognize: function (t) {
        var e = this.session;
        if (!e.stopped) {
          this.touchAction.preventDefaults(t);
          var i,
            n = this.recognizers,
            r = e.curRecognizer;
          (!r || (r && r.state & Qt)) && (r = e.curRecognizer = null);
          for (var s = 0; s < n.length; )
            (i = n[s]),
              2 === e.stopped || (r && i != r && !i.canRecognizeWith(r))
                ? i.reset()
                : i.recognize(t),
              !r && i.state & ($t | Jt | Kt) && (r = e.curRecognizer = i),
              s++;
        }
      },
      get: function (t) {
        if (t instanceof F) return t;
        for (var e = this.recognizers, i = 0; i < e.length; i++)
          if (e[i].options.event == t) return e[i];
        return null;
      },
      add: function (t) {
        if (s(t, 'add', this)) return this;
        var e = this.get(t.options.event);
        return (
          e && this.remove(e),
          this.recognizers.push(t),
          (t.manager = this),
          this.touchAction.update(),
          t
        );
      },
      remove: function (t) {
        if (s(t, 'remove', this)) return this;
        if ((t = this.get(t))) {
          var e = this.recognizers,
            i = g(e, t);
          -1 !== i && (e.splice(i, 1), this.touchAction.update());
        }
        return this;
      },
      on: function (t, e) {
        if (t !== n && e !== n) {
          var i = this.handlers;
          return (
            o(m(t), function (t) {
              (i[t] = i[t] || []), i[t].push(e);
            }),
            this
          );
        }
      },
      off: function (t, e) {
        if (t !== n) {
          var i = this.handlers;
          return (
            o(m(t), function (t) {
              e ? i[t] && i[t].splice(g(i[t], e), 1) : delete i[t];
            }),
            this
          );
        }
      },
      emit: function (t, e) {
        this.options.domEvents && K(t, e);
        var i = this.handlers[t] && this.handlers[t].slice();
        if (i && i.length) {
          (e.type = t),
            (e.preventDefault = function () {
              e.srcEvent.preventDefault();
            });
          for (var n = 0; n < i.length; ) i[n](e), n++;
        }
      },
      destroy: function () {
        this.element && J(this, !1),
          (this.handlers = {}),
          (this.session = {}),
          this.input.destroy(),
          (this.element = null);
      },
    }),
    Q(B, {
      INPUT_START: vt,
      INPUT_MOVE: 2,
      INPUT_END: mt,
      INPUT_CANCEL: gt,
      STATE_POSSIBLE: Bt,
      STATE_BEGAN: $t,
      STATE_CHANGED: Jt,
      STATE_ENDED: Kt,
      STATE_RECOGNIZED: Qt,
      STATE_CANCELLED: te,
      STATE_FAILED: 32,
      DIRECTION_NONE: Tt,
      DIRECTION_LEFT: yt,
      DIRECTION_RIGHT: Et,
      DIRECTION_UP: It,
      DIRECTION_DOWN: At,
      DIRECTION_HORIZONTAL: _t,
      DIRECTION_VERTICAL: Ct,
      DIRECTION_ALL: St,
      Manager: $,
      Input: A,
      TouchAction: Y,
      TouchInput: z,
      MouseInput: O,
      PointerEventInput: R,
      TouchMouseInput: N,
      SingleTouchInput: M,
      Recognizer: F,
      AttrRecognizer: H,
      Tap: Z,
      Pan: L,
      Swipe: G,
      Pinch: U,
      Rotate: j,
      Press: V,
      on: p,
      off: f,
      each: o,
      merge: at,
      extend: ot,
      assign: Q,
      inherit: h,
      bindFn: u,
      prefixed: E,
    }),
    ((void 0 !== t ? t : 'undefined' != typeof self ? self : {}).Hammer = B),
    'function' == typeof define && define.amd
      ? define(function () {
          return B;
        })
      : 'undefined' != typeof module && module.exports
      ? (module.exports = B)
      : (t.Hammer = B);
})(window, document);
