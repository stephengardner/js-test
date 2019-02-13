/*!
 * Bazaarvoice bv-loader v12.0.0
 * Thu Jan 31 2019 00:12:29 GMT+0000 (UTC)
 * 
 * Capabilities:
 * 
 *   inline_ratings@2.1.2
 *   questions@0.2.2
 *   rating_summary@2.17.0
 *   ratings@0.1.23
 *   reviews@0.2.2
 *   seller_ratings@1.0.4
 *   swat-submission@2.2.1
 * 
 * http://bazaarvoice.com
 * 
 * Copyright 2019 Bazaarvoice. All rights reserved.
 * 
 */
!function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 38)
}([function(e, t, n) {
    "use strict";
    e.exports = new Function("return this;")()
}
, function(e, t, n) {
    "use strict";
    t.a = {
        deployment: {
            client: "elfcosmetics-au",
            site: "main_site",
            environment: "production",
            locale: "en_AU"
        },
        dataEnvironment: "prod",
        serverEnvironment: "prod",
        vpc: "prod",
        piiDataRegion: "unitedStates",
        displayCode: "17418",
        domains: [{
            firstPartyCookieEnabled: !0,
            thirdPartyCookieEnabled: !0,
            domain: ".elfcosmetics.com.au"
        }, {
            firstPartyCookieEnabled: !0,
            thirdPartyCookieEnabled: !0,
            domain: ".bazaarvoice.com"
        }, {
            firstPartyCookieEnabled: !0,
            thirdPartyCookieEnabled: !0,
            domain: ".interaage.com.au"
        }, {
            firstPartyCookieEnabled: !0,
            thirdPartyCookieEnabled: !0,
            domain: ".cdn.shopify.com"
        }, {
            firstPartyCookieEnabled: !0,
            thirdPartyCookieEnabled: !0,
            domain: ".shopify.com"
        }, {
            firstPartyCookieEnabled: !0,
            thirdPartyCookieEnabled: !0,
            domain: ".elfcosmetics-stg.myshopify.com"
        }, {
            firstPartyCookieEnabled: !0,
            thirdPartyCookieEnabled: !0,
            domain: ".myshopify.com"
        }, {
            firstPartyCookieEnabled: !0,
            thirdPartyCookieEnabled: !0,
            domain: "checkout.shopify.com"
        }, {
            firstPartyCookieEnabled: !0,
            thirdPartyCookieEnabled: !0,
            domain: "api.shopsheriff.com"
        }, {
            firstPartyCookieEnabled: !0,
            thirdPartyCookieEnabled: !0,
            domain: "integrations.shopsheriff.com"
        }, {
            firstPartyCookieEnabled: !0,
            thirdPartyCookieEnabled: !0,
            domain: ".127.0.0.1"
        }, {
            firstPartyCookieEnabled: !0,
            thirdPartyCookieEnabled: !0,
            domain: "translate.googleusercontent.com"
        }, {
            firstPartyCookieEnabled: !0,
            thirdPartyCookieEnabled: !0,
            domain: "webcache.googleusercontent.com"
        }, {
            firstPartyCookieEnabled: !0,
            thirdPartyCookieEnabled: !0,
            domain: "translate.baiducontent.com"
        }, {
            firstPartyCookieEnabled: !0,
            thirdPartyCookieEnabled: !0,
            domain: ".bazaarvoice.com"
        }, {
            firstPartyCookieEnabled: !0,
            thirdPartyCookieEnabled: !0,
            domain: "localhost"
        }, {
            firstPartyCookieEnabled: !0,
            thirdPartyCookieEnabled: !0,
            domain: "localhost:4040"
        }, {
            firstPartyCookieEnabled: !0,
            thirdPartyCookieEnabled: !0,
            domain: ".localhost:4040"
        }],
        scoutVersion: "12.0.0",
        splitTestingEnabled: !1,
        isConversations: !0,
        isPreview: !1,
        legacyScoutUrl: "https://display.ugc.bazaarvoice.com/static/elfcosmetics-au/main_site/en_AU/bvapi.js",
        paths: {
            root: "https://apps.bazaarvoice.com",
            splitTests: "https://apps.bazaarvoice.com/splitTests.json",
            componentTemplate: "https://apps.bazaarvoice.com/components/components-<%= version %>.js",
            renderTemplate: "https://apps.bazaarvoice.com/render/render-<%= version %>.min.js",
            layoutRoot: "https://apps.bazaarvoice.com/deployments/elfcosmetics-au/main_site/production/en_AU/layouts"
        },
        render: {
            dependencyMap: {
                react: "https://apps.bazaarvoice.com/vendor/react@16.3.2/react.production.min.js",
                "react-dom": "https://apps.bazaarvoice.com/vendor/react-dom@16.3.2/react-dom.production.min.js"
            },
            version: "4.1.0",
            componentsVersions: ["4.2.0", "4.1.1", "4.1.0", "4.0.1", "4.0.0"]
        },
        webAnalyticsIntegrationConfigs: [],
        apps: [{
            name: "inline_ratings",
            version: "2.1.2",
            defer: !0,
            hasConfig: !0,
            sourcePath: "https://apps.bazaarvoice.com/apps/inline_ratings/inline_ratings-2.1.2.js",
            legacyPath: null,
            publicName: "inline_rating",
            configUrl: "https://apps.bazaarvoice.com/deployments/elfcosmetics-au/main_site/production/en_AU/inline_ratings-config.js"
        }, {
            name: "questions",
            version: "0.2.2",
            defer: !0,
            hasConfig: !0,
            sourcePath: "https://apps.bazaarvoice.com/apps/questions/questions-0.2.2.js",
            legacyPath: null,
            publicName: "questions",
            configUrl: "https://apps.bazaarvoice.com/deployments/elfcosmetics-au/main_site/production/en_AU/questions-config.js"
        }, {
            name: "rating_summary",
            version: "2.17.0",
            defer: !0,
            hasConfig: !0,
            sourcePath: "https://apps.bazaarvoice.com/apps/rating_summary/rating_summary-2.17.0.js",
            legacyPath: null,
            publicName: "rating_summary",
            configUrl: "https://apps.bazaarvoice.com/deployments/elfcosmetics-au/main_site/production/en_AU/rating_summary-config.js"
        }, {
            name: "ratings",
            version: "0.1.23",
            defer: !0,
            hasConfig: !0,
            sourcePath: "https://apps.bazaarvoice.com/apps/ratings/ratings-0.1.23.js",
            legacyPath: null,
            publicName: "ratings",
            configUrl: "https://apps.bazaarvoice.com/deployments/elfcosmetics-au/main_site/production/en_AU/ratings-config.js"
        }, {
            name: "reviews",
            version: "0.2.2",
            defer: !0,
            hasConfig: !0,
            sourcePath: "https://apps.bazaarvoice.com/apps/reviews/reviews-0.2.2.js",
            legacyPath: null,
            publicName: "reviews",
            configUrl: "https://apps.bazaarvoice.com/deployments/elfcosmetics-au/main_site/production/en_AU/reviews-config.js"
        }, {
            name: "seller_ratings",
            version: "1.0.4",
            defer: !0,
            hasConfig: !0,
            sourcePath: "https://apps.bazaarvoice.com/apps/seller_ratings/seller_ratings-1.0.4.js",
            legacyPath: null,
            publicName: "seller_ratings",
            configUrl: "https://apps.bazaarvoice.com/deployments/elfcosmetics-au/main_site/production/en_AU/seller_ratings-config.js"
        }, {
            name: "swat-submission",
            version: "2.2.1",
            defer: !0,
            hasConfig: !0,
            sourcePath: "https://apps.bazaarvoice.com/apps/swat-submission/swat-submission-2.2.1.js",
            legacyPath: null,
            publicName: "multi_submission",
            configUrl: "https://apps.bazaarvoice.com/deployments/elfcosmetics-au/main_site/production/en_AU/swat-submission-config.js"
        }]
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(19)
      , o = n.n(r)
      , a = n(0)
      , i = n.n(a)
      , s = n(1)
      , c = console.warn.bind(console)
      , u = ["API_BASE_URL", "Date", "_bvapijs", "_internal", "_options", "_staticAssetRegistry", "configure", "define", "easyXDM", "extensions", "global", "initialData", "name", "options", "performance", "pixel", "registerProperty", "_render", "requestAnimationFrame", "require", "requirejs", "serverRender", "staticAssetLoader", "ud", "ui"].concat(s.a.apps.map(function(e) {
        return e.name
    }));
    if ("Proxy"in i.a) {
        var f = i.a.Proxy;
        i.a.BV = new f(i.a.BV || {},{
            set: function(e, t, n) {
                return ~u.indexOf(t) || c("Unexpected property '" + t + "' assigned to window.BV. Valid assignment to the BV variable requires approval from the BV Loader Team."),
                e[t] = n,
                !0
            }
        })
    }
    t.a = o.a.namespace("BV")
}
, function(e, t, n) {
    "use strict";
    e.exports.getEntries = n(18).getEntries,
    e.exports.getEntriesByName = n(37).getEntriesByName,
    e.exports.getEntriesByType = n(27).getEntriesByType,
    e.exports.now = n(16).now,
    e.exports.mark = n(35).mark,
    e.exports.measure = n(34).measure
}
, function(e, t, n) {
    "use strict";
    n.d(t, "d", function() {
        return i
    }),
    n.d(t, "a", function() {
        return s
    }),
    n.d(t, "b", function() {
        return c
    }),
    n.d(t, "c", function() {
        return u
    });
    var r = n(5)
      , o = n.n(r)
      , a = /[,\s]\s*/
      , i = function() {
        if (!o.a)
            return [];
        var e = o.a.getAttribute("data-bv-preload");
        return e ? e.split(a) : []
    }()
      , s = o.a && o.a.getAttribute("data-bv-callback") || "bvCallback"
      , c = o.a && o.a.getAttribute("data-bv-display-code")
      , u = o.a && o.a.getAttribute("data-bv-hostname")
}
, function(e, t, n) {
    var r = n(0)
      , o = r.document && (r.document.currentScript || r.document.querySelector('script[src*="bv.js"]'));
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , o = n(0);
    if (void 0 !== o.Promise && o.Promise.toString().match(/\[native code]/))
        e.exports = o.Promise;
    else {
        var a = function() {}
          , i = function(e) {
            if ("object" !== r(this))
                throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e)
                throw new TypeError("not a function");
            this._state = 0,
            this._handled = !1,
            this._value = void 0,
            this._deferreds = [],
            l(e, this)
        }
          , s = function(e, t) {
            for (; 3 === e._state; )
                e = e._value;
            0 !== e._state ? (e._handled = !0,
            i._immediateFn(function() {
                var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                if (null !== n) {
                    var r;
                    try {
                        r = n(e._value)
                    } catch (e) {
                        return void u(t.promise, e)
                    }
                    c(t.promise, r)
                } else
                    (1 === e._state ? c : u)(t.promise, e._value)
            })) : e._deferreds.push(t)
        }
          , c = function(e, t) {
            try {
                if (t === e)
                    throw new TypeError("A promise cannot be resolved with itself.");
                if (t && ("object" === (void 0 === t ? "undefined" : r(t)) || "function" == typeof t)) {
                    var n = t.then;
                    if (t instanceof i)
                        return e._state = 3,
                        e._value = t,
                        void f(e);
                    if ("function" == typeof n)
                        return void l((o = n,
                        a = t,
                        function() {
                            o.apply(a, arguments)
                        }
                        ), e)
                }
                e._state = 1,
                e._value = t,
                f(e)
            } catch (t) {
                u(e, t)
            }
            var o, a
        }
          , u = function(e, t) {
            e._state = 2,
            e._value = t,
            f(e)
        }
          , f = function(e) {
            2 === e._state && 0 === e._deferreds.length && i._immediateFn(function() {
                e._handled || i._unhandledRejectionFn(e._value)
            });
            for (var t = 0, n = e._deferreds.length; t < n; t++)
                s(e, e._deferreds[t]);
            e._deferreds = null
        }
          , l = function(e, t) {
            var n = !1;
            try {
                e(function(e) {
                    n || (n = !0,
                    c(t, e))
                }, function(e) {
                    n || (n = !0,
                    u(t, e))
                })
            } catch (e) {
                if (n)
                    return;
                n = !0,
                u(t, e)
            }
        }
          , d = setTimeout;
        i.prototype.catch = function(e) {
            return this.then(null, e)
        }
        ,
        i.prototype.then = function(e, t) {
            var n = new this.constructor(a);
            return s(this, new function(e, t, n) {
                this.onFulfilled = "function" == typeof e ? e : null,
                this.onRejected = "function" == typeof t ? t : null,
                this.promise = n
            }
            (e,t,n)),
            n
        }
        ,
        i.all = function(e) {
            var t = Array.prototype.slice.call(e);
            return new i(function(e, n) {
                if (0 === t.length)
                    return e([]);
                var o = t.length;
                function a(i, s) {
                    try {
                        if (s && ("object" === (void 0 === s ? "undefined" : r(s)) || "function" == typeof s)) {
                            var c = s.then;
                            if ("function" == typeof c)
                                return void c.call(s, function(e) {
                                    a(i, e)
                                }, n)
                        }
                        t[i] = s,
                        0 == --o && e(t)
                    } catch (e) {
                        n(e)
                    }
                }
                for (var i = 0; i < t.length; i++)
                    a(i, t[i])
            }
            )
        }
        ,
        i.resolve = function(e) {
            return e && "object" === (void 0 === e ? "undefined" : r(e)) && e.constructor === i ? e : new i(function(t) {
                t(e)
            }
            )
        }
        ,
        i.reject = function(e) {
            return new i(function(t, n) {
                n(e)
            }
            )
        }
        ,
        i.race = function(e) {
            return new i(function(t, n) {
                for (var r = 0, o = e.length; r < o; r++)
                    e[r].then(t, n)
            }
            )
        }
        ,
        i._immediateFn = "function" == typeof setImmediate && function(e) {
            setImmediate(e)
        }
        || function(e) {
            d(e, 0)
        }
        ,
        i._unhandledRejectionFn = function(e) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
        }
        ,
        e.exports = i
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return c
    }),
    n.d(t, "b", function() {
        return f
    }),
    n.d(t, "c", function() {
        return v
    }),
    n.d(t, "d", function() {
        return h
    }),
    n.d(t, "e", function() {
        return p
    });
    var r = n(28)
      , o = n.n(r)
      , a = n(20)
      , i = {}
      , s = {}
      , c = "bvShow"
      , u = o()(Array)
      , f = function(e) {
        return u.then(function(t) {
            var n = [];
            return t.prototype.filter.call(e, function(e) {
                if (1 === e.nodeType) {
                    e.dataset && e.dataset[c] && n.push(e);
                    var r = e.querySelectorAll("[data-bv-show]");
                    n = n.concat(t.prototype.slice.call(r))
                }
            }),
            n
        })
    }
      , l = function(e) {
        e.filter(function(e) {
            return !e.dataset.bvReady
        }).forEach(function(e) {
            var t = e.dataset[c];
            i[t] && i[t].forEach(function(t) {
                t(e),
                e.dataset.bvReady = !0
            })
        })
    }
      , d = function(e) {
        e.filter(function(e) {
            return e.dataset.bvReady
        }).forEach(function(e) {
            var t = e.dataset[c];
            s[t] && s[t].forEach(function(t) {
                t(e),
                delete e.dataset.bvReady
            })
        })
    }
      , m = new MutationObserver(function(e) {
        e.forEach(function(e) {
            var t = e.addedNodes
              , n = e.removedNodes;
            t && f(t).then(l),
            n && f(n).then(d)
        })
    }
    );
    Object(a.a)(function() {
        m.observe(document.body, {
            childList: !0,
            subtree: !0
        })
    });
    var p = function(e) {
        return u.then(function(t) {
            var n = document.querySelectorAll("[data-bv-show]");
            return t.prototype.filter.call(n, function(t) {
                return !e || t.dataset[c] === e
            })
        })
    }
      , h = function(e, t) {
        i[e] || (i[e] = []),
        i[e].push(t),
        p(e).then(l)
    }
      , v = function(e, t) {
        s[e] || (s[e] = []),
        s[e].push(t)
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(19)
      , a = r.document
      , i = {};
    function s() {
        return a.getElementsByTagName("script")[0]
    }
    function c(e) {
        return !e || "loaded" === e || "complete" === e || "uninitialized" === e
    }
    function u(e, t, n) {
        if (!e || "string" != typeof e)
            throw new Error("`url` must be a string");
        if (t.namespaceName && "string" != typeof t.namespaceName)
            throw new Error("`options.namespaceName` must be a string");
        if (t.forceLoad && "boolean" != typeof t.forceLoad)
            throw new Error("`options.forceLoad` must be a boolean");
        if ("number" != typeof t.timeout)
            throw new Error("`options.timeout` must be a number");
        if (n && "function" != typeof n)
            throw new Error("`callback` must be a function")
    }
    e.exports = {
        _clearLoadedUrls: function(e) {
            e ? o.namespace(e).loadedUrls = {} : i = {}
        },
        loadScript: function(e, t, n) {
            var r, f = i;
            if ("function" == typeof t && (n = t,
            t = null),
            (t = t || {}).timeout = t.timeout || 1e4,
            u(e, t, n),
            t.namespaceName && (r = o.namespace(t.namespaceName),
            f = r.loadedUrls || {}),
            t.forceLoad || !f[e]) {
                var l, d = a.createElement("script"), m = !1;
                if (t.attributes)
                    for (l in t.attributes)
                        d.setAttribute(l, t.attributes[l]);
                d.onreadystatechange = d.onload = function() {
                    !m && c(d.readyState) && h()
                }
                ,
                d.onerror = function() {
                    m || h(new Error("Error: could not load " + e))
                }
                ;
                var p = setTimeout(function() {
                    m || h(new Error("Error: script timeout " + e))
                }, t.timeout);
                setTimeout(function() {
                    d.src = e;
                    var t = s();
                    t.parentNode.insertBefore(d, t)
                }, 0)
            } else
                "function" == typeof n && n();
            function h(o) {
                m = !0,
                clearTimeout(p),
                d.onload = d.onreadystatechange = d.onerror = null,
                d.parentNode.removeChild(d),
                o || (f[e] = !0,
                t.namespaceName ? r.loadedUrls = f : i = f),
                "function" == typeof n && n(o)
            }
        },
        loadStyleSheet: function(e, t, n) {
            var f, l = i;
            if ("function" == typeof t && (n = t,
            t = null),
            (t = t || {}).timeout = t.timeout || 1e4,
            u(e, t, n),
            "injectionNode"in t && !(t.injectionNode instanceof r.Element))
                throw new Error("`options.injectionNode` must be a DOM node");
            if (t.namespaceName && (f = o.namespace(t.namespaceName),
            l = f.loadedUrls || {}),
            t.forceLoad || !l[e]) {
                var d, m = a.createElement("link"), p = !1;
                if (t.attributes)
                    for (d in t.attributes)
                        m.setAttribute(d, t.attributes[d]);
                m.onreadystatechange = m.onload = function() {
                    !p && c(m.readyState) && v()
                }
                ,
                m.onerror = function() {
                    p || v(new Error("Error: could not load " + e))
                }
                ;
                var h = setTimeout(m.onerror, t.timeout);
                setTimeout(function() {
                    m.media = "only x",
                    m.rel = "stylesheet",
                    m.type = "text/css",
                    m.href = e,
                    setTimeout(function() {
                        m.media = "all"
                    }, 0);
                    var n = t.injectionNode || s().parentNode;
                    try {
                        n.appendChild(m)
                    } catch (e) {
                        v(new Error("Error: could not append LINK element"))
                    }
                }, 0)
            } else
                "function" == typeof n && n();
            function v(r) {
                p = !0,
                clearTimeout(h),
                m.onload = m.onreadystatechange = m.onerror = null,
                r || (l[e] = !0,
                t.namespaceName ? f.loadedUrls = l : i = l),
                "function" == typeof n && n(r)
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = {
        create: function(e, t, n, o, a) {
            var i = new Date;
            i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
            var s = n ? ";expires=" + i.toGMTString() : ""
              , c = encodeURIComponent(e) + "=" + encodeURIComponent(t) + s + ";path=/" + (o ? ";domain=" + o : "") + (a ? ";secure" : "");
            r.document.cookie = c
        },
        read: function(e) {
            var t, n = encodeURIComponent(e) + "=", o = r.document.cookie.split(";");
            for (t = 0; t < o.length; t++) {
                for (var a = o[t]; " " === a.charAt(0); )
                    a = a.substring(1, a.length);
                if (0 === a.indexOf(n))
                    return decodeURIComponent(a.substring(n.length, a.length))
            }
            return null
        },
        remove: function(e) {
            this.create(e, "", -1)
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(33);
    function o(e, t) {
        if ("." === e.charAt(0) && t) {
            var n = ("." + t).lastIndexOf(e);
            return n >= 0 && n === 1 + t.length - e.length
        }
        return t === e || t === "www." + e
    }
    e.exports = function(e, t) {
        var n = {}
          , a = {
            isValid: !1,
            get: function(e) {
                return n[e]
            }
        }
          , i = function(e, t) {
            for (var n = r(e).host, a = 0; a < t.length; a++)
                if (o(t[a].domain, n))
                    return t[a]
        }(e, t);
        if (i) {
            for (var s in a.isValid = !0,
            i)
                i.hasOwnProperty(s) && (n[s] = i[s]);
            n.domain.match(/^(\.\d+){4}$/) && (n.domain = n.domain.substr(1))
        }
        return a
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "e", function() {
        return p
    }),
    n.d(t, "d", function() {
        return h
    }),
    n.d(t, "b", function() {
        return y
    }),
    n.d(t, "c", function() {
        return b
    }),
    n.d(t, "a", function() {
        return g
    });
    var r = n(0)
      , o = n.n(r)
      , a = n(1)
      , i = n(2)
      , s = n(14)
      , c = n(3)
      , u = n.n(c)
      , f = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
      , l = function(e) {
        return e.map(function(e) {
            return f({}, e, {
                value: String(e.value)
            })
        })
    }
      , d = function(e) {
        return Object.keys(e).map(function(t) {
            return {
                name: t,
                value: e[t]
            }
        }).filter(function(e) {
            return void 0 !== e.value
        })
    }
      , m = function(e) {
        return e && e !== Math.floor(e) ? Number(e.toFixed(2)) : e
    }
      , p = function() {
        var e = o.a.devicePixelRatio
          , t = o.a.innerHeight
          , n = o.a.innerWidth
          , r = o.a.navigator
          , a = {
            devicePixelRatio: e,
            screenHeight: t,
            screenWidth: n
        };
        r.connection && (a.effectiveType = r.connection.effectiveType,
        a.downlink = r.connection.downlink);
        var i = u.a.getEntriesByType("navigation").shift();
        return i && ["connectEnd", "connectStart", "domainLookupStart", "domainLookupEnd", "domComplete", "domInteractive", "domContentLoadedEventStart", "fetchStart", "loadEventEnd", "requestStart", "responseStart", "responseEnd", "secureConnectionStart"].forEach(function(e) {
            a[e] = m(i[e])
        }),
        l(d(a))
    }
      , h = function() {
        var e = {}
          , t = u.a.getEntriesByType("resource").filter(function(e) {
            return !!e.name.match(s.a.bvLoaderRegex)
        }).shift();
        t && ["connectEnd", "connectStart", "domainLookupStart", "domainLookupEnd", "domComplete", "domInteractive", "domContentLoadedEventStart", "fetchStart", "loadEventEnd", "requestStart", "responseStart", "responseEnd", "secureConnectionStart"].forEach(function(n) {
            e[n] = m(t[n])
        });
        var n, r, o = (n = "requestedApp",
        r = a.a.apps.map(function(e) {
            return e.name
        }),
        r.map(function(e) {
            return {
                name: n,
                value: e
            }
        })).concat(d(e));
        return l(o)
    }
      , v = function(e, t) {
        var n = {}
          , r = t ? i.a._render.layouts[e].perfMark : i.a[e].perfMark
          , o = u.a.getEntriesByType("resource").filter(function(t) {
            return !!t.name.match(s.a.appNameRegex(e)) || !!t.name.match(s.a.layoutNameRegex(e))
        }).shift();
        if (r.bvShow.marks.length && (n.bvShowProcessed = m(r.bvShow.marks[0].startTime)),
        r.load.measures.length && (n.loadTime = m(r.load.measures[0].duration),
        n.loadStart = m(r.load.measures[0].startTime)),
        !t && r.configure.measures.length && (n.configurationTime = m(r.configuration.measures[0].duration)),
        r.render.measures.length && (n.avgRender = m(r.render.measures.reduce(function(e, t) {
            return e + t.duration
        }, 0) / r.render.measures.length),
        n.render = r.render.measures.map(function(e) {
            return m(e.duration)
        }),
        n.renderStart = r.render.measures.map(function(e) {
            return m(e.startTime)
        })),
        o) {
            var a = o.fetchStart
              , c = o.transferSize
              , f = o.responseEnd
              , p = o.requestStart;
            n.fetchStart = m(a),
            n.responseEnd = m(f),
            p && (n.transferSize = c,
            n.ttfb = m(a - p))
        }
        return l(d(n))
    }
      , y = function(e) {
        return v(e, !1)
    }
      , b = function(e) {
        return v(e, !0)
    }
      , g = function() {
        var e = {}
          , t = u.a.getEntriesByType("resource")
          , n = u.a.getEntriesByType("paint")
          , r = {
            totalPageRequests: 0,
            totalBVRequests: 0,
            totalCachedBVResources: 0,
            totalCachedOtherResources: 0,
            totalCumulativeLoadTime: 0,
            totalCumulativeBVLoadTime: 0,
            totalActualOtherLoadTime: 0,
            totalActualBVLoadTime: 0,
            totalNumOfBVScripts: 0,
            totalNumOfBVAPIRequests: 0,
            totalNumOfBVStylesheets: 0,
            totalNumOfBVImages: 0,
            totalNumOfOtherBVHTTPRequests: 0,
            totalNumOfOtherScripts: 0,
            totalNumOfOtherStylesheets: 0,
            totalNumOfOtherImages: 0,
            totalNumOfOtherHTTPRequests: 0,
            totalNumOfHTTP2Resources: 0,
            totalNumOfHTTP2BVResources: 0,
            pageStatus: document.readyState
        }
          , o = function(t, n) {
            var r = n.fetchStart
              , o = n.responseEnd
              , a = n.requestStart
              , i = n.responseStart;
            e[t + "-fetchStart"] && (t += "(2)"),
            e[t + "-fetchStart"] = m(r),
            e[t + "-responseEnd"] = m(o),
            a && (e[t + "-ttfb"] = m(i - a))
        };
        if (t.length) {
            var a = 0
              , c = 0
              , p = 0;
            t.forEach(function(t) {
                var n = t.name
                  , u = t.fetchStart
                  , f = t.duration
                  , l = t.responseEnd
                  , d = t.transferSize
                  , h = t.initiatorType
                  , v = t.nextHopProtocol
                  , y = n.toLowerCase().includes("bv") || n.toLowerCase().includes("bazaarvoice");
                n.toLowerCase().includes("sid.gif") || n.toLowerCase().includes("st.gif") || n.toLowerCase().includes("a.gif") || (r.totalPageRequests++,
                d && (e[n + "-transferSize"] = d),
                l && p++,
                n.toLowerCase().includes("components.js") ? o("components.js", t) : n.toLowerCase().includes("bv.js") ? o("bv.js", t) : n.match(s.a.renderRegex) && (o("render.js", t),
                e.renderParseComplete = m(i.a._render.perfMark.parseComplete.marks[0].startTime)),
                r.totalCumulativeLoadTime += m(f),
                v.includes("2") && (r.totalNumOfHTTP2Resources++,
                (n.includes("bv") || n.includes("bazaarvoice")) && r.totalNumOfHTTP2BVResources++),
                y ? (r.totalBVRequests++,
                "css" === h ? r.totalNumOfBVStylesheets++ : "script" === h ? r.totalNumOfBVScripts++ : "img" === h ? r.totalNumOfBVImages++ : "xmlhttprequest" === h || "" === h ? r.totalNumOfBVAPIRequests++ : r.totalNumOfOtherBVHTTPRequests++) : "css" === h ? r.totalNumOfOtherStylesheets++ : "script" === h ? r.totalNumOfOtherScripts++ : "img" === h ? r.totalNumOfOtherImages++ : r.totalNumOfOtherHTTPRequests++,
                y ? (r.totalCumulativeBVLoadTime += f,
                f <= 10 && r.totalCachedBVResources++,
                u > c ? (r.totalActualBVLoadTime += f,
                c = l) : l > c && u < c && (r.totalActualBVLoadTime += l - c,
                c = l)) : (f <= 10 && r.totalCachedOtherResources++,
                u > a ? (r.totalActualOtherLoadTime += f,
                a = l) : l > a && u < a && (r.totalActualOtherLoadTime += l - a,
                a = l)))
            }),
            f(e, r, {
                totalCumulativeLoadTime: m(r.totalCumulativeLoadTime),
                totalCumulativeBVLoadTime: m(r.totalCumulativeBVLoadTime),
                totalCumulativeOtherLoadTime: m(r.totalCumulativeLoadTime - r.totalCumulativeBVLoadTime),
                totalActualBVLoadTime: m(r.totalActualBVLoadTime),
                totalActualOtherLoadTime: m(r.totalActualOtherLoadTime),
                totalNumOfHTTP1Resources: t.length - r.totalNumOfHTTP2Resources,
                totalNumOfHTTP1BVResources: r.totalBVRequests - r.totalNumOfHTTP2BVResources,
                percentResourcesLoaded: m(p / r.totalPageRequests * 100)
            })
        }
        return n.length && n.forEach(function(t) {
            e[t.name] = m(t.fetchStart)
        }),
        l(d(e))
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(24)
      , o = n(23);
    t.a = function(e, t, n, a) {
        if (r.a && t.length) {
            Object(r.b)();
            var i = {
                type: "performance",
                name: "Display",
                scope: e,
                metrics: t
            };
            n && (i.bvProduct = n),
            a && (i.bvProductVersion = a),
            o.a.trackEvent("Diagnostic", i)
        }
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    }),
    n.d(t, "b", function() {
        return o
    }),
    n.d(t, "c", function() {
        return a
    });
    var r = "color:black; font-size:1.1em; font-weight:bold;"
      , o = "color: #0b6392; font-size:1.1em; text-decoration:none; font-weight:normal;"
      , a = "font-size:1.0em; font-weight:lighter;"
}
, function(e, t, n) {
    "use strict";
    var r = n(1)
      , o = new RegExp("/deployments/([^/]+)/(?:[^/]+/){3}bv\\.js")
      , a = {
        appNameRegex: function(e) {
            return new RegExp(r.a.paths.root + "/apps/" + e + "/" + e + "-[^/]+.js")
        },
        layoutNameRegex: function(e) {
            return new RegExp(r.a.paths.layoutRoot + "/" + e + ".json")
        },
        renderRegex: r.a.deployment.local ? new RegExp("render.js") : new RegExp(r.a.paths.root + "/render/render-[^/]+.js"),
        bvLoaderRegex: o,
        parseClient: function(e) {
            var t = o.exec(e);
            if (t)
                return t[1]
        }
    };
    t.a = a
}
, function(e, t, n) {
    "use strict";
    var r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    ;
    r = function() {
        return this
    }();
    try {
        r = r || Function("return this")() || (0,
        eval)("this")
    } catch (e) {
        "object" === ("undefined" == typeof window ? "undefined" : o(window)) && (r = window)
    }
    e.exports = r
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(36)
      , a = r.performance
      , i = a && a.now
      , s = "function" == typeof i
      , c = o.now();
    function u() {
        return i.call(a)
    }
    function f() {
        return o.now() - c
    }
    a && a.timing && "number" == typeof a.timing.navigationStart && (c = a.timing.navigationStart),
    e.exports = {
        now: function() {
            return (s ? u : f)()
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = {
        timeline: []
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(17).timeline
      , a = r.performance
      , i = a && a.getEntries
      , s = "function" == typeof i;
    function c() {
        return i.call(a)
    }
    function u() {
        return o
    }
    e.exports = {
        getEntries: function() {
            return (s ? c : u)()
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , o = n(0);
    function a(e) {
        this.name = e
    }
    a.prototype.registerProperty = function(e, t) {
        if (this.hasOwnProperty(e))
            throw new Error("Cannot register " + e + " because a property with that name already exists on window." + this.name);
        return this[e] = t,
        this
    }
    ,
    e.exports = {
        namespace: function(e) {
            if (void 0 === o[e])
                Object.defineProperty(o, e, {
                    value: new a(e)
                });
            else {
                if ("object" !== r(o[e]))
                    throw new Error("Namespace " + e + " cannot be created. A non-object variable is already assigned to window." + e);
                if (!(o[e]instanceof a))
                    for (var t in a.call(o[e], e),
                    a.prototype)
                        o[e][t] = a.prototype[t]
            }
            return o[e]
        }
    }
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        document.body && (t.disconnect(),
        e())
    }
    function o(e) {
        var t = new MutationObserver(function() {
            r(e, t)
        }
        );
        t.observe(document.documentElement, {
            childList: !0,
            subtree: !0
        }),
        r(e, t)
    }
    n.d(t, "a", function() {
        return o
    })
}
, function(e, t, n) {
    "use strict";
    (function(t) {
        function n(e, t, n) {
            if ("function" != typeof t)
                throw new Error("A function must be provided to process the queue");
            var r = e.length;
            function o() {
                var r = e.shift();
                n ? t(r) : setTimeout(function() {
                    t(r)
                }, 0)
            }
            for (; e.length > 0; )
                o();
            return r
        }
        function r(e) {
            return this.config = e,
            this._readyQueue = [],
            this._renderQueue = [],
            this._configQueue = [],
            this._promise = new t(function(e, t) {
                this._resolve = e,
                this._reject = t
            }
            .bind(this)),
            this
        }
        r.prototype.ready = function(e) {
            return "function" == typeof e && this._readyQueue.push(e),
            this._promise
        }
        ,
        r.prototype.render = function(e) {
            return this._renderQueue.push(e)
        }
        ,
        r.prototype.configure = function(e) {
            return this._configQueue.push(e)
        }
        ;
        r.prototype.processReady = function(e) {
            var t = function(e, t) {
                "function" == typeof t && t(e, this)
            }
            .bind(this, e);
            n.call(this, this._readyQueue, t, !0),
            this._readyQueue.push = t,
            this.ready = function(e) {
                return t(e),
                this._promise
            }
            ,
            e ? this._reject(e) : this._resolve(this)
        }
        ,
        r.prototype.processQueue = function(e) {
            n.call(this, this._renderQueue, e),
            this.render = this._renderQueue.push = e
        }
        ,
        r.prototype.processConfig = function(e) {
            n.call(this, this._configQueue, e, !0),
            this.configure = this._configQueue.push = e
        }
        ,
        e.exports = r
    }
    ).call(this, n(6))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "a", function() {
            return s
        }),
        n.d(t, "b", function() {
            return f
        }),
        n.d(t, "c", function() {
            return l
        });
        var r = n(7)
          , o = n(20)
          , a = n(1).a.apps.reduce(function(e, t) {
            var n = t.publicName;
            return e[t.name] = n,
            e
        }, {})
          , i = Object.keys(a).reduce(function(e, t) {
            return e[a[t]] = function() {}
            ,
            e
        }, {})
          , s = function(e, t, n) {
            var o = e.config.name
              , s = a[o]
              , c = n.bvShow = n.createMark("bvShow");
            s && (i[s] = function() {
                t()(),
                e.ready(function() {
                    c.start(),
                    r.d(s, function(t) {
                        e.trigger("container_added", t)
                    }),
                    r.c(s, function(t) {
                        e.trigger("container_removed", t)
                    })
                }),
                i[s] = function() {}
            }
            )
        }
          , c = function(e) {
            e.forEach(function(e) {
                var t = e.dataset[r.a];
                i[t] && i[t]()
            })
        }
          , u = new MutationObserver(function(e) {
            e.forEach(function(e) {
                e.addedNodes && r.b(e.addedNodes).then(c)
            })
        }
        )
          , f = function() {
            Object(o.a)(function() {
                u.observe(document.body, {
                    childList: !0,
                    subtree: !0
                }),
                r.e().then(c),
                f = function() {}
            })
        }
          , l = function() {
            !function e(t) {
                return setTimeout(function() {
                    document.body ? t() : e(t)
                }, 200)
            }(function() {
                return setInterval(function() {
                    return r.e().then(c)
                }, 100)
            })
        }
    }
    ).call(this, n(15))
}
, function(e, t, n) {
    "use strict";
    var r = n(26)
      , o = n(1)
      , a = r.a.createTracker({
        commonData: {
            bvProduct: "bv-loader",
            bvProductVersion: o.a.scoutVersion
        },
        name: "bv-loader",
        source: "bv-loader"
    });
    t.a = a
}
, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return o
    }),
    n.d(t, "a", function() {
        return a
    });
    var r = n(9)
      , o = function() {
        return r.create("bv_metrics", !0, 72e5 / 864e5),
        !0
    }
      , a = !!r.read("bv_metrics") || !Math.floor(1e3 * Math.random()) && o()
}
, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return i
    }),
    n.d(t, "c", function() {
        return s
    }),
    n.d(t, "a", function() {
        return c
    });
    var r = n(0)
      , o = n.n(r)
      , a = function(e) {
        var t = o.a.document.querySelector('meta[name="bv:' + e + '"]');
        return t && t.getAttribute("content") || void 0
    }
      , i = function() {
        return a("pageType")
    }
      , s = function() {
        return a("userToken")
    }
      , c = function() {
        return (e = a("disabled")) && e.split(",").map(function(e) {
            return e.trim()
        }) || [];
        var e
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(45)
      , o = n(30)
      , a = n.n(o)
      , i = n(0)
      , s = n.n(i)
      , c = n(1)
      , u = n(10)
      , f = n.n(u)
      , l = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
      , d = f()(s.a.location.host, c.a.domains);
    t.a = {
        createTracker: function(e) {
            var t = e.commonData
              , n = e.name
              , o = e.source
              , i = l({}, t);
            i.locale = c.a.deployment.locale;
            var s = {
                name: n,
                client: c.a.deployment.client,
                display: c.a.displayCode,
                environment: c.a.vpc,
                source: o,
                staging: "stg" === c.a.dataEnvironment || "qa" === c.a.vpc,
                anonymous: r.a.anonymous,
                brandDomain: d.get("firstPartyCookieEnabled") ? d.get("domain") : "",
                commonData: i
            }
              , u = new a.a(s);
            return "europe" === c.a.piiDataRegion && u.setEU(!0),
            c.a.webAnalyticsIntegrationConfigs && c.a.webAnalyticsIntegrationConfigs.length && c.a.webAnalyticsIntegrationConfigs.forEach(function(e) {
                u.configureSCIProvider(e.name, e)
            }),
            u
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(18).getEntries
      , a = r.performance
      , i = a && a.getEntriesByType
      , s = "function" == typeof i;
    function c(e) {
        return i.call(a, e)
    }
    function u(e) {
        if (0 === arguments.length)
            throw new TypeError("Failed to execute 'getEntriesByType' on 'Performance': 1 argument required, but only 0 present.");
        return o().filter(function(t) {
            return t.entryType === e
        })
    }
    e.exports = {
        getEntriesByType: function(e) {
            var t = arguments.length > 0
              , n = s ? c : u;
            return t ? n(e) : n()
        }
    }
}
, function(e, t, n) {
    "use strict";
    (function(t) {
        var r, o = n(32), a = {}, i = /function\s+([^\(\s]+)/;
        e.exports = function(e) {
            return new t(function(t) {
                o(function() {
                    var n = e.name;
                    n || (n = i.exec(e.toString())[1]),
                    r || ((r = document.createElement("iframe")).src = "about:blank",
                    r.style.display = "none",
                    document.body.appendChild(r)),
                    a[n] || (a[n] = r.contentWindow[n]),
                    t(a[n])
                })
            }
            )
        }
    }
    ).call(this, n(6))
}
, function(e, t, n) {
    "use strict";
    var r = Array.prototype
      , o = r.indexOf
      , a = r.slice;
    function i(e, t) {
        var n, r, o = this.events = this.events || {}, a = e.split(/\s+/), i = a.length;
        for (n = 0; n < i; n++)
            o[r = a[n]] = o[r] || [],
            o[r].push(t);
        return this
    }
    function s(e, t) {
        return this.on(e, function n() {
            this.off(e, n),
            t.apply(this, a.call(arguments))
        }),
        this
    }
    function c(e, t) {
        var n, r, o, a, i, s = this.events;
        if (s) {
            for (r = 0,
            a = (i = e.split(/\s+/)).length; r < a; r++)
                (n = i[r])in s != !1 && -1 !== (o = t ? f(s[n], t) : 0) && s[n].splice(o, 1);
            return this
        }
    }
    function u(e) {
        var t, n, r = this.events;
        if (r && e in r != !1) {
            for (t = a.call(arguments, 1),
            n = r[e].length - 1; n >= 0; n--)
                try {
                    r[e][n].apply(this, t)
                } catch (e) {}
            return this
        }
    }
    function f(e, t) {
        var n, r;
        if (o && e.indexOf === o)
            return e.indexOf(t);
        for (n = 0,
        r = e.length; n < r; n++)
            if (e[n] === t)
                return n;
        return -1
    }
    e.exports = function() {
        return this.on = i,
        this.off = c,
        this.trigger = this.emit = u,
        this.one = this.once = s,
        this
    }
}
, function(e, t, n) {
    "use strict";
    var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    ;
    o = [],
    void 0 === (a = "function" == typeof (r = function() {
        function e(e) {
            if (!(e = e || {}).name || "string" != typeof e.name)
                throw new TypeError("config.name is required and must be string");
            this.name = e.name,
            this.commonData = e.commonData || {},
            this._verify(),
            this.q.push(["create", e]);
            for (var t, n, r = ["Staging", "Audience", "Anonymous"], o = 0; o < r.length; o++)
                ((n = e[(t = r[o]).toLowerCase()]) || e.hasOwnProperty(t.toLowerCase())) && this["set" + t](n);
            e.validationCallback && this.enableValidation(e.validationCallback),
            !1 === e.timing && this.disableTiming(),
            e.brandDomain && this.setBrandDomain(e.brandDomain),
            e.eventClassFilter && this.setEventClassFilter(e.eventClassFilter)
        }
        return function() {
            function t() {
                for (var e = n(arguments), t = 1; t < e.length; t++)
                    if (null !== e[t] && "object" === i(e[t]))
                        for (var r in e[t])
                            e[t].hasOwnProperty(r) && (e[0][r] = e[t][r]);
                return e[0]
            }
            function n(e) {
                return Array.prototype.slice.call(e)
            }
            var r, o, a, s, c, u, f = ["setClient", "setDisplay", "setAnonymous", "setBrandDomain", "setSource", "setEnvironment", "setAudience", "setStaging", "setEventClassFilter", "setEU"], l = {};
            function d(e) {
                return function() {
                    this._verify();
                    var t = n(arguments);
                    t.unshift(e),
                    t.push(this.name),
                    this.q.push(t)
                }
            }
            for (var m, p = 0; p < f.length; p++)
                l[m = f[p]] = d(m);
            t(l, {
                _verify: function() {
                    window._bvaq = window._bvaq || [],
                    this.q = window._bvaq
                },
                _flushBatch: (r = function() {
                    this._verify(),
                    this.q.push(["flushBatch", this.name])
                }
                ,
                u = o || 250,
                function() {
                    var e = a || this
                      , t = +new Date
                      , n = arguments;
                    s && t < s + u ? (clearTimeout(c),
                    c = setTimeout(function() {
                        s = t,
                        r.apply(e, n)
                    }, u)) : (s = t,
                    r.apply(e, n))
                }
                ),
                loadScript: function(e) {
                    var t = e || "latest"
                      , n = document.createElement("script");
                    n.type = "text/javascript",
                    n.async = !0;
                    var r = "http:";
                    "https:" === window.location.protocol && (r = "https:"),
                    n.src = r + "//analytics-static.ugc.bazaarvoice.com/prod/static/" + t + "/bv-analytics.js";
                    var o = document.getElementsByTagName("script")[0];
                    o.parentNode.insertBefore(n, o)
                },
                setCommonData: function(e) {
                    t(this.commonData, e)
                },
                configureSCIProvider: function(e, t) {
                    this._verify(),
                    this.q.push(["configureSCIProvider", e, t, this.name])
                },
                enableValidation: function(e) {
                    this._verify(),
                    this.q.push(["enableValidation", e, this.name])
                },
                disableValidation: function() {
                    this._verify(),
                    this.q.push(["disableValidation", this.name])
                },
                enableTiming: function() {
                    this._verify(),
                    this.q.push(["enableTiming", this.name])
                },
                disableTiming: function() {
                    this._verify(),
                    this.q.push(["disableTiming", this.name])
                },
                addMeta: function(e, t) {
                    this._verify(),
                    this.q.push(["addMeta", e, t, this.name])
                },
                removeMeta: function(e) {
                    this._verify(),
                    this.q.push(["removeMeta", e, this.name])
                },
                trackEvent: function(e, n) {
                    this._verify(),
                    this.q.push(["addBatchItem", e, t({}, this.commonData, n), this.name]),
                    this._flushBatch()
                },
                trackPageView: function(e) {
                    this._verify(),
                    this.q.push(["trackPageView", t({}, this.commonData, e), this.name])
                },
                trackError: function(e) {
                    this._verify(),
                    this.q.push(["trackEvent", "Error", t({}, this.commonData, e), this.name])
                },
                trackConversion: function(e) {
                    this._verify(),
                    this.q.push(["trackConversion", t({}, this.commonData, e), this.name])
                },
                trackTransaction: function(e) {
                    this._verify(),
                    this.q.push(["trackTransaction", t({}, this.commonData, e), this.name])
                },
                trackImpression: function(e) {
                    this._verify(),
                    this.trackEvent("Impression", t({}, this.commonData, e), this.name)
                },
                doNotTrack: function(e) {
                    this._verify(),
                    this.q.push(["doNotTrack", e, this.name])
                }
            }),
            t(e.prototype, l),
            function() {
                var n, r = [], o = 0, a = 250;
                function i(e, n) {
                    if (!(e = t({
                        minPixels: 100,
                        minTime: 5e3
                    }, e)).containerId)
                        throw new Error("No containerId specified.");
                    return e.observerId = o++,
                    e.callback = function(t) {
                        c(e.observerId),
                        n(t)
                    }
                    ,
                    r.push(e),
                    s(),
                    e.observerId
                }
                function s() {
                    var e = "number" == typeof n;
                    r.length >= 1 && !e ? n = setInterval(l, a) : 0 === r.length && e && (clearInterval(n),
                    n = null)
                }
                function c(e) {
                    for (var t = 0; t < r.length; t++)
                        r[t].observerId === e && (r.splice(t, 1),
                        s())
                }
                function u() {
                    var e = window.document && window.document.documentElement;
                    return {
                        height: window.innerHeight || e.clientHeight,
                        width: window.innerWidth || e.clientWidth
                    }
                }
                function f(e) {
                    var t, n = e.getBoundingClientRect(), r = u().height;
                    return n.top <= 0 ? (t = Math.max(n.top + n.height, 0),
                    t = Math.min(t, r)) : n.top >= r ? 0 : Math.min(r - n.top, n.height)
                }
                function l() {
                    for (var e, t, n, o, a, i, s = 0; s < r.length; s++)
                        n = r[s],
                        e = document.getElementById(n.containerId),
                        t = +new Date,
                        e ? (o = void 0,
                        a = e.getBoundingClientRect(),
                        i = u().width,
                        (a.left <= 0 ? (o = Math.max(a.left + a.width, 0),
                        o = Math.min(o, i)) : a.left >= i ? 0 : Math.min(i - a.left, a.width)) <= 0 ? delete n.inViewAt : f(e) < n.minPixels ? delete n.inViewAt : n.inViewAt ? t - n.inViewAt > n.minTime && n.callback() : (n.inViewAt = t,
                        0 === n.minTime && n.callback())) : delete n.inViewAt
                }
                function d(e) {
                    this.id = e
                }
                d.prototype.remove = function() {
                    c(this.id)
                }
                ,
                e.prototype.trackEventWhenVisible = function(e, n) {
                    var r = this;
                    if (!e || "string" != typeof e.cl)
                        throw new TypeError("data.cl must exist and be a string");
                    return new d(i(n, function() {
                        var n = t({}, r.commonData, e);
                        r.trackEvent(n.cl, n)
                    }))
                }
                ,
                e.prototype.trackInView = function(e, n) {
                    var r = this;
                    return new d(i(n = t({}, n, {
                        minTime: 0
                    }), function() {
                        var n = t({}, r.commonData, e, {
                            name: "InView",
                            type: "Used",
                            interaction: "0"
                        });
                        r.trackEvent("Feature", n)
                    }))
                }
                ,
                e.prototype.trackViewedCGC = function(e, n) {
                    var r = this;
                    return new d(i(n, function() {
                        var n = t({}, r.commonData, e, {
                            name: "ViewedUGC",
                            type: "Used",
                            interaction: "1"
                        });
                        r.trackEvent("Feature", n)
                    }))
                }
            }()
        }(),
        e
    }
    ) ? r.apply(t, o) : r) || (e.exports = a)
}
, function(e, t, n) {
    "use strict";
    t.a = function(e, t) {
        Object.keys(t).forEach(function(n) {
            void 0 !== t[n] && Object.defineProperty(e, n, {
                value: t[n]
            })
        })
    }
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        document.body && (t.disconnect(),
        e())
    }
    e.exports = function(e) {
        if (document.body)
            e();
        else {
            var t = new MutationObserver(function() {
                r(e, t)
            }
            );
            t.observe(document.documentElement, {
                childList: !0,
                subtree: !0
            }),
            r(e, t)
        }
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        for (var t = r.options, n = t.parser[t.strictMode ? "strict" : "loose"].exec(e), o = {}, a = 14; a--; )
            o[t.key[a]] = n[a] || "";
        return o[t.q.name] = {},
        o[t.key[12]].replace(t.q.parser, function(e, n, r) {
            n && (o[t.q.name][n] = r)
        }),
        o
    }
    r.options = {
        strictMode: !1,
        key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
        q: {
            name: "queryKey",
            parser: /(?:^|&)([^&=]*)=?([^&]*)/g
        },
        parser: {
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:\/@]*)(?::([^\/:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
            loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^\/:@]*)(?::([^:\/@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
        }
    },
    e.exports = r
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(16).now
      , a = n(27).getEntriesByType
      , i = n(17).timeline
      , s = r.performance
      , c = s && s.measure
      , u = "function" == typeof c;
    function f(e, t, n) {
        return void 0 === t ? c.call(s, e) : void 0 === n ? c.call(s, e, t) : c.call(s, e, t, n)
    }
    function l(e, t, n) {
        if (arguments.length < 1)
            throw new TypeError("Failed to execute 'measure' on 'Performance': 1 argument required, but only 0 present.");
        var r, s = a("mark"), c = 0, u = o();
        if (void 0 !== t) {
            if (!(r = s.filter(function(e) {
                return e.entryName === t
            })).length)
                throw new Error("Failed to execute 'measure' on 'Performance': The mark '" + t + "' does not exist.");
            c = r[r.length - 1].startTime
        }
        if (void 0 !== n) {
            if (!(r = s.filter(function(e) {
                return e.entryName === n
            })).length)
                throw new Error("Failed to execute 'measure' on 'Performance': The mark '" + n + "' does not exist.");
            u = r[r.length - 1].startTime
        }
        var f = {
            entryType: "measure",
            name: e,
            startTime: c,
            duration: u - c
        };
        i.push(f)
    }
    e.exports = {
        measure: function(e, t, n) {
            var r = arguments.length > 0
              , o = u ? f : l;
            return r ? o(e, t, n) : o()
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(16)
      , a = n(17).timeline
      , i = r.performance
      , s = i && i.mark
      , c = "function" == typeof s
      , u = {
        navigationStart: 1,
        unloadEventStart: 1,
        unloadEventEnd: 1,
        redirectStart: 1,
        redirectEnd: 1,
        fetchStart: 1,
        domainLookupStart: 1,
        domainLookupEnd: 1,
        connectStart: 1,
        connectEnd: 1,
        secureConnectionStart: 1,
        requestStart: 1,
        responseStart: 1,
        responseEnd: 1,
        domLoading: 1,
        domInteractive: 1,
        domContentLoadedEventStart: 1,
        domContentLoadedEventEnd: 1,
        domComplete: 1,
        loadEventStart: 1,
        loadEventEnd: 1
    };
    function f(e) {
        return s.call(i, e)
    }
    function l(e) {
        if (arguments.length < 1)
            throw new SyntaxError("Cannot set mark without a name");
        if (e in u)
            throw new SyntaxError('Cannot set mark with reserved name "' + e + '"');
        var t = {
            entryType: "mark",
            name: e,
            startTime: o.now(),
            duration: 0
        };
        a.push(t)
    }
    e.exports = {
        mark: function(e) {
            var t = arguments.length > 0
              , n = c ? f : l;
            return t ? n(e) : n()
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(0).Date
      , o = r && r.now
      , a = "function" == typeof o;
    function i() {
        return o.call(r)
    }
    function s() {
        return (new r).getTime()
    }
    e.exports = {
        now: function() {
            return (a ? i : s)()
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(18).getEntries
      , a = r.performance
      , i = a && a.getEntriesByName
      , s = "function" == typeof i;
    function c(e, t) {
        return i.call(a, e, t)
    }
    function u(e, t) {
        if (0 === arguments.length)
            throw new TypeError("Failed to execute 'getEntriesByName' on 'Performance': 1 argument required, but only 0 present.");
        return o().filter(function(n) {
            if (n.name === e && (void 0 === t || n.entryType === t))
                return n
        })
    }
    e.exports = {
        getEntriesByName: function(e, t) {
            var n = arguments.length > 0
              , r = s ? c : u;
            return n ? r(e, t) : r()
        }
    }
}
, function(e, t, n) {
    "use strict";
    n.r(t),
    function(e) {
        var t = n(47)
          , r = n(11)
          , o = n(12)
          , a = n(24)
          , i = n(1)
          , s = n(2)
          , c = n(8)
          , u = n.n(c)
          , f = n(0)
          , l = n.n(f)
          , d = n(26)
          , m = n(4)
          , p = n(22)
          , h = n(40)
          , v = n(23)
          , y = n(25)
          , b = n(46)
          , g = n(42)
          , w = function() {
            return function(e, t) {
                if (Array.isArray(e))
                    return e;
                if (Symbol.iterator in Object(e))
                    return function(e, t) {
                        var n = []
                          , r = !0
                          , o = !1
                          , a = void 0;
                        try {
                            for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value),
                            !t || n.length !== t); r = !0)
                                ;
                        } catch (e) {
                            o = !0,
                            a = e
                        } finally {
                            try {
                                !r && s.return && s.return()
                            } finally {
                                if (o)
                                    throw a
                            }
                        }
                        return n
                    }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
          , E = (Object.assign,
        l.a.document)
          , T = t.a.createMark("bv_loader");
        Object(b.a)(),
        T.end = T.start();
        var S = l.a.navigator.userAgent.indexOf("MSIE") > -1 || l.a.navigator.userAgent.indexOf("Trident/") > -1;
        if (s.a.pixel = d.a.createTracker({
            commonData: {
                bvProduct: "pixel"
            },
            name: "pixel",
            source: "bv-loader"
        }),
        i.a.apps.forEach(function(e) {
            return Object(g.a)(e, T)
        }),
        S ? Object(p.c)() : Object(p.b)(),
        l.a.$BV && "ui"in l.a.$BV || i.a.isPreview || (l.a.$BV = Object(h.a)()),
        "container" === y.b() && (i.a.isConversations ? l.a.$BV.container("global", {}) : l.a.$BV.ui("submission_container", {})),
        u.a.loadScript("https://analytics-static.ugc.bazaarvoice.com/prod/static/3/bv-analytics.js"),
        m.a)
            if (l.a[m.a])
                x(l.a[m.a]);
            else {
                var _ = void 0;
                Object.defineProperty(l.a, m.a, {
                    get: function() {
                        return _
                    },
                    set: function(e) {
                        _ = e,
                        x(e)
                    }
                })
            }
        T.end();
        var P = w(T.measures, 1)[0]
          , k = P.duration
          , C = P.startTime
          , O = C + k;
        try {
            v.a.trackEvent("Diagnostic", {
                name: "timeToRunScout",
                type: "Performance",
                startTime: C.toFixed(4),
                endTime: O.toFixed(4),
                elapsedMs: k.toFixed(4)
            })
        } catch (e) {}
        function x(e) {
            if ("function" != typeof e)
                throw Error("The BV Callback must be a function.");
            setTimeout(function() {
                e.call(null, s.a)
            })
        }
        a.a && (new e(function(e) {
            E.addEventListener("DOMContentLoaded", function() {
                e()
            }),
            setTimeout(function() {
                e()
            }, 3e3)
        }
        ).then(function() {
            Object(o.a)("page", Object(r.e)())
        }),
        setTimeout(function() {
            Object(o.a)("bv-loader", Object(r.d)())
        }, 0),
        window.addEventListener("unload", function() {
            for (var e in Object(o.a)("resources", Object(r.a)()),
            l.a.BV._render.layouts)
                Object(o.a)("render", Object(r.c)(e), e)
        }))
    }
    .call(this, n(6))
}
, function(e, t, n) {
    "use strict";
    var r = n(8)
      , o = n.n(r)
      , a = n(41)
      , i = function() {
        return function(e, t) {
            if (Array.isArray(e))
                return e;
            if (Symbol.iterator in Object(e))
                return function(e, t) {
                    var n = []
                      , r = !0
                      , o = !1
                      , a = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value),
                        !t || n.length !== t); r = !0)
                            ;
                    } catch (e) {
                        o = !0,
                        a = e
                    } finally {
                        try {
                            !r && s.return && s.return()
                        } finally {
                            if (o)
                                throw a
                        }
                    }
                    return n
                }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
      , s = document.createElement("script")
      , c = window.navigator.userAgent.toLowerCase()
      , u = {
        noModule: "noModule"in s,
        isFirefox: !!~c.indexOf("firefox"),
        isChrome: !!~c.indexOf("chrome")
    };
    u.isSafari = !u.isChrome && !!~c.indexOf("safari"),
    u.doModernLoad = u.isSafari && u.noModule ? function() {
        var e = c.match(/macintosh.+mac os x (\d+)_(\d+)_\d+\)/)
          , t = c.match(/version\/(\d+)\.\d+\.\d+ safari\/\d+\.\d+\.\d/);
        if (e) {
            var n = i(e, 3)
              , r = n[1]
              , o = n[2];
            if (Number(r) >= 10 && Number(o) >= 13 && t) {
                var a = i(t, 2)[1];
                return Number(a) >= 11
            }
            return !1
        }
        return !0
    }() : !u.noModule && u.isFirefox ? function() {
        var e = c.match(/(?:firefox\/)([\d.]+)/);
        if (e && e.length) {
            var t = i(e, 2)[1];
            return Number(t) > 54
        }
        return !1
    }() : u.noModule;
    var f = u;
    function l(e, t, n) {
        n.load.end = n.load.start();
        var r = e.sourcePath;
        if (e.legacyPath && !f.doModernLoad && (r = e.legacyPath),
        o.a.loadScript(r, function(r) {
            Object(a.a)(r, e, t, n)
        }),
        e.configUrl) {
            var i = n.createMark("load", "config");
            i.end = i.start(),
            o.a.loadScript(e.configUrl, function() {
                i.end()
            })
        }
    }
    n.d(t, "a", function() {
        return l
    })
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(0)
          , o = n.n(r)
          , a = n(8)
          , i = n.n(a)
          , s = n(1)
          , c = n(4)
          , u = n(25)
          , f = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
          , l = o.a.console
          , d = !1;
        function m() {
            var t = this;
            this.promiseRef = new e(function(e, n) {
                f(t, {
                    resolve: e,
                    reject: n
                })
            }
            )
        }
        t.a = function() {
            return function() {
                var e = o.a.$BV || []
                  , t = {
                    _apiQueue: [],
                    log: function() {
                        l && l.log && l.log(arguments)
                    },
                    push: function(e) {
                        d || function() {
                            if (!s.a.isConversations && (c.c && (s.a.legacyScoutUrl = s.a.legacyScoutUrl.replace(/^(https?:\/\/)([^/]+)/, "$1" + c.c)),
                            c.b && (s.a.legacyScoutUrl = s.a.legacyScoutUrl.replace(/\/+([^/]+)\/bvapi.js/, "/" + c.b + "/bvapi.js")),
                            /\[HOSTNAME\]/.test(s.a.legacyScoutUrl) || /\[DISPLAYCODE\]/.test(s.a.legacyScoutUrl)))
                                throw Error('Could not determine display code and hostname. Contact Bazaarvoice Support to configure your implementation, or provide explicit "data-bv-display-code" and "data-bv-hostname" attributes.');
                            d = !0,
                            i.a.loadScript(s.a.legacyScoutUrl)
                        }(),
                        t._apiQueue.push(e)
                    }
                }
                  , n = u.c();
                n && t._apiQueue.push(["configure", "global", {
                    userToken: n
                }]),
                e.forEach(function(e) {
                    t.push(e)
                });
                return ["ui", "configure", "container", "ready", "SI.trackProductPageView", "SI.trackGenericPageView", "SI.trackTransactionPageView", "SI.disable", "SI.enable", "SI.setDebugEnabled", "SI.trackConversion", "DSI.trackBVPageView", "DSI.trackProduct", "DSI.trackTransaction"].forEach(function(e) {
                    !function(e, n) {
                        for (var r, o = n.split("."), a = o.pop(), i = o.shift(); i; )
                            e = e[i] = e[i] || {},
                            i = o.shift();
                        e[a] = (r = n.replace(/\./g, "_"),
                        function() {
                            for (var e = void 0, n = [r], o = 0, a = arguments.length; o < a; o++)
                                n.push(arguments[o]);
                            return "ui" !== r ? t.push(n) : ((e = n[3] = n[3] || {}).loadedDeferred = e.loadedDeferred || new m,
                            t.push(n),
                            e.loadedDeferred.promise())
                        }
                        )
                    }(t, e)
                }),
                t
            }()
        }
        ,
        m.prototype.promise = function() {
            return this.promiseRef
        }
    }
    ).call(this, n(6))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "a", function() {
            return a
        });
        var r = n(11)
          , o = n(12);
        function a(t, n, a, i) {
            return i.load.end(),
            t && a.processReady(t),
            new e(function(e) {
                a.ready(function() {
                    setTimeout(function() {
                        e()
                    }, 0)
                }),
                setTimeout(function() {
                    e()
                }, 3e3)
            }
            ).then(function() {
                Object(o.a)(n.name, Object(r.b)(n.name), n.name, n.version)
            })
        }
    }
    ).call(this, n(6))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "a", function() {
            return v
        });
        var r = n(21)
          , o = n.n(r)
          , a = n(29)
          , i = n.n(a)
          , s = n(2)
          , c = n(26)
          , u = n(25)
          , f = n(4)
          , l = n(22)
          , d = n(39)
          , m = n(23)
          , p = e.BV
          , h = u.a();
        function v(e, t) {
            var n = t.createMark("register", e.name);
            n.end = n.start();
            var r = new o.a({
                name: e.name
            });
            s.a.registerProperty(e.name, r);
            var a = t.createMark("app", e.name)
              , i = a.createMark("configure")
              , u = a.createMark("load")
              , v = a.createMark("render");
            a.configure = i,
            a.load = u,
            a.render = v,
            s.a[e.name].perfMark = a,
            s.a[e.name]._analytics = c.a.createTracker({
                name: e.name,
                source: "bv-loader"
            }),
            p.global.loadUserSegment.then(function(t) {
                s.a[e.name]._analytics.setCommonData({
                    displaySegment: t
                })
            }),
            "api" === e.name && (s.a[e.name].analytics = s.a[e.name]._analytics);
            var y = function() {
                h.some(function(t) {
                    return ~[e.name, e.publicName].indexOf(t)
                }) ? m.a.trackEvent("Feature", {
                    type: "Used",
                    name: "AppDisabled",
                    detail1: e.name
                }) : Object(d.a)(e, r, a),
                y = function() {}
            };
            if (f.d.some(function(t) {
                return t === e.name
            }) || !e.defer)
                y();
            else {
                var b = r.configure
                  , g = r.ready
                  , w = r.render;
                ["configure", "ready", "render"].forEach(function(e) {
                    r[e] = function() {
                        return function(e, t) {
                            return y(),
                            r.configure = b,
                            r.ready = g,
                            r.render = w,
                            r[e].apply(this, t)
                        }
                        .call(this, e, arguments)
                    }
                })
            }
            Object(l.a)(r, function() {
                return y
            }, a),
            n.end()
        }
        i.a.call(o.a.prototype)
    }
    ).call(this, n(15))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "a", function() {
            return a
        });
        var r = 1e4
          , o = new Map;
        function a(t) {
            var n = o.get(t);
            if (n)
                return n;
            var a = new XMLHttpRequest;
            return n = new e(function(e, n) {
                a.onreadystatechange = function() {
                    if (a.readyState === XMLHttpRequest.DONE)
                        if (200 === a.status) {
                            var t = void 0;
                            try {
                                t = JSON.parse(a.responseText)
                            } catch (e) {
                                n("Unable to JSON.parse server response: " + a.responseText + ".")
                            }
                            e(t)
                        } else
                            n("The call to the server was not successful.")
                }
                ,
                a.open("GET", t),
                a.timeout = r,
                a.ontimeout = function() {
                    a.abort()
                }
                ,
                a.send()
            }
            ),
            o.set(t, n),
            n
        }
    }
    ).call(this, n(6))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "a", function() {
            return w
        });
        var r = n(9)
          , o = n.n(r)
          , a = n(0)
          , i = n.n(a)
          , s = n(2)
          , c = n(1)
          , u = n(43)
          , f = function() {
            return function(e, t) {
                if (Array.isArray(e))
                    return e;
                if (Symbol.iterator in Object(e))
                    return function(e, t) {
                        var n = []
                          , r = !0
                          , o = !1
                          , a = void 0;
                        try {
                            for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value),
                            !t || n.length !== t); r = !0)
                                ;
                        } catch (e) {
                            o = !0,
                            a = e
                        } finally {
                            try {
                                !r && s.return && s.return()
                            } finally {
                                if (o)
                                    throw a
                            }
                        }
                        return n
                    }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
          , l = 14
          , d = "baseline"
          , m = 864e5
          , p = 60 * m
          , h = "bv_segment"
          , v = "bv_segment"
          , y = Math.random();
        function b() {
            return Object(u.a)(c.a.paths.splitTests).then(function(e) {
                return e.tests
            }, function() {
                return []
            })
        }
        function g(e) {
            var t = void 0;
            try {
                var n = e.filter(function(e) {
                    return t = e,
                    !(new Date(t.start).getTime() + (t.duration || p) < Date.now() || t.forceExpire);
                    var t
                })
                  , r = n.filter(function(e) {
                    var t = e.clients;
                    if (!t)
                        return !1;
                    return -1 !== t.indexOf(s.a.global.client)
                })
                  , o = n.filter(function(e) {
                    return !e.clients
                })
                  , a = r.length > 0 ? r : o;
                a.sort(function(e, t) {
                    return new Date(e.startDate) - new Date(t.startDate)
                }),
                t = a.shift()
            } catch (e) {
                throw new Error("Something went wrong when choosing a split test.\n      Please ensure that all defined tests are valid. " + e)
            }
            return t
        }
        function w() {
            if (!c.a.splitTestingEnabled)
                return e.resolve(d);
            var t, n = (t = v,
            i.a.location.search.substr(1).split("&").filter(function(e) {
                return e.split("=")[0] === t
            }).map(function(e) {
                return e.split("=")[1]
            })[0]);
            if (n)
                return e.resolve(n);
            var r = o.a.read(h);
            if (r) {
                var a = void 0;
                try {
                    a = JSON.parse(r)
                } catch (e) {}
                if (a) {
                    var s = a.segment;
                    if (s) {
                        var u = e.resolve(s);
                        return u.then(function() {
                            return e = a.testId,
                            void b().then(function(t) {
                                var n = t.filter(function(t) {
                                    return t.id === e
                                })
                                  , r = f(n, 1)[0];
                                r && r.forceExpire && o.a.remove(h)
                            });
                            var e
                        }),
                        u
                    }
                }
            }
            return b().then(g).then(function(e) {
                if (!e)
                    return d;
                var t = new Date(e.start).getTime();
                if (t <= Date.now()) {
                    var n = function(e) {
                        return ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l * m) - (Date.now() - e)) / m
                    }(t, e.duration);
                    if (n > 0) {
                        var r = e.id
                          , a = function() {
                            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = 0, n = Object.keys(e).sort(); n.length; ) {
                                var r = n.pop()
                                  , o = e[r];
                                if (y <= t + o)
                                    return r;
                                t += o
                            }
                            return d
                        }(e.splits)
                          , i = JSON.stringify({
                            testId: r,
                            segment: a
                        });
                        return o.a.create(h, i, n),
                        a || d
                    }
                }
            })
        }
    }
    ).call(this, n(6))
}
, function(e, t, n) {
    "use strict";
    (function(e, r) {
        var o = n(44)
          , a = n(10)
          , i = n.n(a)
          , s = n(1)
          , c = n(2)
          , u = n(31);
        Object.assign;
        c.a.global = {},
        Object(u.a)(c.a.global, {
            client: s.a.deployment.client,
            dataEnvironment: s.a.dataEnvironment,
            serverEnvironment: s.a.serverEnvironment,
            locale: s.a.deployment.locale,
            anonymous: !i()(e.location.host, s.a.domains).get("thirdPartyCookieEnabled"),
            siteId: s.a.deployment.site,
            virtualEnvironment: s.a.deployment.virtualEnvironment,
            ponyfills: {
                Promise: r
            },
            SystemJS: {}
        }),
        Object(u.a)(c.a.global, {
            loadUserSegment: Object(o.a)()
        }),
        Object.freeze(c.a.global),
        t.a = c.a.global
    }
    ).call(this, n(15), n(6))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "a", function() {
            return d
        });
        var r = n(10)
          , o = n.n(r)
          , a = n(1)
          , i = n(5)
          , s = n.n(i)
          , c = n(14)
          , u = n(13)
          , f = e.location.host
          , l = o()(f, a.a.domains);
        function d() {
            !function(e) {
                if (!e.isValid) {
                    console.log('e is:', e);
                    throw "Bazaarvoice is not configured for the domain " + f + "."
                }
            }(l),
            function(e) {
                if (e && e.src) {
                    var t = c.a.parseClient(e.src)
                      , n = t && t.toLowerCase();
                    if (t && t !== n) {
                        var r = e.src.replace("/deployments/" + t, "/deployments/" + n);
                        console.warn("%cYou are using a cased client name (%c" + t + "%c) in the bv.js URL.\n        Please use this URL instead: %c" + r + "%c.\n        For details, see the Conversations Implementation section of https://knowledge.bazaarvoice.com.", u.b, u.a, u.b, u.c, u.b)
                    }
                }
            }(s.a)
        }
    }
    ).call(this, n(15))
}
, function(e, t, n) {
    "use strict";
    var r = n(3)
      , o = n.n(r)
      , a = void 0
      , i = 0
      , s = function(e) {
        o.a.mark(e)
    }
      , c = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return t.join("_")
    }
      , u = c("BV", "PERF", "MARK")
      , f = function e(t) {
        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
            r[i - 1] = arguments[i];
        if (r.length) {
            var u = c(t, r.shift());
            return e.call.apply(e, [a, u].concat(r))
        }
        var f = []
          , l = []
          , d = function(e) {
            s(e ? c(t, e) : t);
            var n = o.a.getEntriesByType("mark")
              , r = n[n.length - 1];
            return f.push(r),
            r
        }
          , m = {
            createMark: {
                configurable: !0,
                enumerable: !0,
                value: e.bind(a, t)
            },
            marks: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return f
                }
            },
            measures: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return l
                }
            },
            start: {
                configurable: !0,
                enumerable: !0,
                value: function() {
                    return e = d("start"),
                    function() {
                        var n = d("end");
                        o.a.measure(t);
                        var r = o.a.getEntriesByType("measure")
                          , a = r[r.length - 1];
                        return Object.defineProperties(a, {
                            startTime: {
                                configurable: !0,
                                enumerable: !0,
                                value: e.startTime,
                                writable: !1
                            },
                            duration: {
                                configurable: !0,
                                enumerable: !0,
                                value: n.startTime - e.startTime,
                                writable: !1
                            }
                        }),
                        f.push(n),
                        l.push(a),
                        n
                    }
                    ;
                    var e
                }
            }
        };
        return Object.defineProperties(d, m),
        d
    };
    t.a = {
        createMark: function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r];
            return f.call.apply(f, [a, c(u, e || ++i)].concat(n))
        }
    }
}
]);
