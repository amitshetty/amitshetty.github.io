! function(o, e, t) {
    if ("object" == typeof t && "string" != typeof t.nodeName) e(o, t);
    else {
        t = {};
        var n = ["1.6.3-iab357"];

        function i(o) {
            for (var e in o) o.hasOwnProperty(e) && (o[e] = i(o[e]));
            return Object.freeze(o)
        }
        for (var m in e(o, t), t) t.hasOwnProperty(m) && (null == Object.getOwnPropertyDescriptor(o, m) && Object.defineProperty(o, m, {
            value: {}
        }), n.forEach(function(e) {
            if (null == Object.getOwnPropertyDescriptor(o[m], e)) {
                var n = i(t[m]);
                Object.defineProperty(o[m], e, {
                    get: function() {
                        return n
                    },
                    enumerable: !0
                })
            }
        }))
    }
}("undefined" == typeof global ? this : global, function(omidGlobal, omidExports) {
    var $jscomp = $jscomp || {};
    $jscomp.scope = {}, $jscomp.createTemplateTagFirstArg = function(o) {
        return o.raw = o
    }, $jscomp.createTemplateTagFirstArgWithRaw = function(o, e) {
        return o.raw = e, o
    }, $jscomp.arrayIteratorImpl = function(o) {
        var e = 0;
        return function() {
            return e < o.length ? {
                done: !1,
                value: o[e++]
            } : {
                done: !0
            }
        }
    }, $jscomp.arrayIterator = function(o) {
        return {
            next: $jscomp.arrayIteratorImpl(o)
        }
    }, $jscomp.makeIterator = function(o) {
        var e = "undefined" != typeof Symbol && Symbol.iterator && o[Symbol.iterator];
        if (e) return e.call(o);
        if ("number" == typeof o.length) return $jscomp.arrayIterator(o);
        throw Error(String(o) + " is not an iterable or ArrayLike")
    }, $jscomp.arrayFromIterator = function(o) {
        for (var e, t = []; !(e = o.next()).done;) t.push(e.value);
        return t
    }, $jscomp.arrayFromIterable = function(o) {
        return o instanceof Array ? o : $jscomp.arrayFromIterator($jscomp.makeIterator(o))
    }, $jscomp.ASSUME_ES5 = !1, $jscomp.ASSUME_NO_NATIVE_MAP = !1, $jscomp.ASSUME_NO_NATIVE_SET = !1, $jscomp.SIMPLE_FROUND_POLYFILL = !1, $jscomp.ISOLATE_POLYFILLS = !1, $jscomp.FORCE_POLYFILL_PROMISE = !1, $jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1, $jscomp.objectCreate = $jscomp.ASSUME_ES5 || "function" == typeof Object.create ? Object.create : function(o) {
        var e = function() {};
        return e.prototype = o, new e
    }, $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(o, e, t) {
        return o == Array.prototype || o == Object.prototype || (o[e] = t.value), o
    }, $jscomp.getGlobal = function(o) {
        o = ["object" == typeof globalThis && globalThis, o, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var e = 0; e < o.length; ++e) {
            var t = o[e];
            if (t && t.Math == Math) return t
        }
        throw Error("Cannot find global object")
    }, $jscomp.global = $jscomp.getGlobal(this), $jscomp.IS_SYMBOL_NATIVE = "function" == typeof Symbol && "symbol" == typeof Symbol("x"), $jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE, $jscomp.polyfills = {}, $jscomp.propertyToPolyfillSymbol = {}, $jscomp.POLYFILL_PREFIX = "$jscp$";
    var $jscomp$lookupPolyfilledValue = function(o, e, t) {
        if (!t || null != o) return null == (t = $jscomp.propertyToPolyfillSymbol[e]) ? o[e] : void 0 !== (t = o[t]) ? t : o[e]
    };
    $jscomp.polyfill = function(o, e, t, n) {
        e && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(o, e, t, n) : $jscomp.polyfillUnisolated(o, e, t, n))
    }, $jscomp.polyfillUnisolated = function(o, e, t, n) {
        for (t = $jscomp.global, o = o.split("."), n = 0; n < o.length - 1; n++) {
            var i = o[n];
            if (!(i in t)) return;
            t = t[i]
        }(e = e(n = t[o = o[o.length - 1]])) != n && null != e && $jscomp.defineProperty(t, o, {
            configurable: !0,
            writable: !0,
            value: e
        })
    }, $jscomp.polyfillIsolated = function(o, e, t, n) {
        var i = o.split(".");
        o = 1 === i.length, n = i[0], n = !o && n in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
        for (var m = 0; m < i.length - 1; m++) {
            var r = i[m];
            if (!(r in n)) return;
            n = n[r]
        }
        i = i[i.length - 1], null != (e = e(t = $jscomp.IS_SYMBOL_NATIVE && "es6" === t ? n[i] : null)) && (o ? $jscomp.defineProperty($jscomp.polyfills, i, {
            configurable: !0,
            writable: !0,
            value: e
        }) : e !== t && (void 0 === $jscomp.propertyToPolyfillSymbol[i] && (t = 1e9 * Math.random() >>> 0, $jscomp.propertyToPolyfillSymbol[i] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(i) : $jscomp.POLYFILL_PREFIX + t + "$" + i), $jscomp.defineProperty(n, $jscomp.propertyToPolyfillSymbol[i], {
            configurable: !0,
            writable: !0,
            value: e
        })))
    }, $jscomp.getConstructImplementation = function() {
        if ($jscomp.TRUST_ES6_POLYFILLS && "undefined" != typeof Reflect && Reflect.construct) {
            if (function() {
                    function o() {}
                    return new o, Reflect.construct(o, [], function() {}), new o instanceof o
                }()) return Reflect.construct;
            var o = Reflect.construct;
            return function(e, t, n) {
                return e = o(e, t), n && Reflect.setPrototypeOf(e, n.prototype), e
            }
        }
        return function(o, e, t) {
            return void 0 === t && (t = o), t = $jscomp.objectCreate(t.prototype || Object.prototype), Function.prototype.apply.call(o, t, e) || t
        }
    }, $jscomp.construct = $jscomp.getConstructImplementation(), $jscomp.underscoreProtoCanBeSet = function() {
        var o = {};
        try {
            return o.__proto__ = {
                a: !0
            }, o.a
        } catch (o) {}
        return !1
    }, $jscomp.setPrototypeOf = $jscomp.TRUST_ES6_POLYFILLS && "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function(o, e) {
        if (o.__proto__ = e, o.__proto__ !== e) throw new TypeError(o + " is not extensible");
        return o
    } : null, $jscomp.inherits = function(o, e) {
        if (o.prototype = $jscomp.objectCreate(e.prototype), o.prototype.constructor = o, $jscomp.setPrototypeOf) {
            var t = $jscomp.setPrototypeOf;
            t(o, e)
        } else
            for (t in e)
                if ("prototype" != t)
                    if (Object.defineProperties) {
                        var n = Object.getOwnPropertyDescriptor(e, t);
                        n && Object.defineProperty(o, t, n)
                    } else o[t] = e[t];
        o.superClass_ = e.prototype
    }, $jscomp.getRestArguments = function() {
        for (var o = Number(this), e = [], t = o; t < arguments.length; t++) e[t - o] = arguments[t];
        return e
    }, $jscomp.polyfill("Reflect", function(o) {
        return o || {}
    }, "es6", "es3"), $jscomp.polyfill("Reflect.construct", function(o) {
        return $jscomp.construct
    }, "es6", "es3"), $jscomp.polyfill("Reflect.setPrototypeOf", function(o) {
        if (o) return o;
        if ($jscomp.setPrototypeOf) {
            var e = $jscomp.setPrototypeOf;
            return function(o, t) {
                try {
                    return e(o, t), !0
                } catch (o) {
                    return !1
                }
            }
        }
        return null
    }, "es6", "es5"), $jscomp.checkStringArgs = function(o, e, t) {
        if (null == o) throw new TypeError("The 'this' value for String.prototype." + t + " must not be null or undefined");
        if (e instanceof RegExp) throw new TypeError("First argument to String.prototype." + t + " must not be a regular expression");
        return o + ""
    }, $jscomp.polyfill("String.prototype.repeat", function(o) {
        return o || function(o) {
            var e = $jscomp.checkStringArgs(this, null, "repeat");
            if (0 > o || 1342177279 < o) throw new RangeError("Invalid count value");
            o |= 0;
            for (var t = ""; o;) 1 & o && (t += e), (o >>>= 1) && (e += e);
            return t
        }
    }, "es6", "es3"), $jscomp.stringPadding = function(o, e) {
        return o = void 0 !== o ? String(o) : " ", 0 < e && o ? o.repeat(Math.ceil(e / o.length)).substring(0, e) : ""
    }, $jscomp.polyfill("String.prototype.padStart", function(o) {
        return o || function(o, e) {
            var t = $jscomp.checkStringArgs(this, null, "padStart");
            return $jscomp.stringPadding(e, o - t.length) + t
        }
    }, "es8", "es3"), $jscomp.owns = function(o, e) {
        return Object.prototype.hasOwnProperty.call(o, e)
    }, $jscomp.polyfill("Object.values", function(o) {
        return o || function(o) {
            var e, t = [];
            for (e in o) $jscomp.owns(o, e) && t.push(o[e]);
            return t
        }
    }, "es8", "es3");
    var module$contents$omid$common$InternalMessage_GUID_KEY = "omid_message_guid",
        module$contents$omid$common$InternalMessage_METHOD_KEY = "omid_message_method",
        module$contents$omid$common$InternalMessage_VERSION_KEY = "omid_message_version",
        module$contents$omid$common$InternalMessage_ARGS_KEY = "omid_message_args",
        module$exports$omid$common$InternalMessage = function(o, e, t, n) {
            this.guid = o, this.method = e, this.version = t, this.args = n
        };
    module$exports$omid$common$InternalMessage.isValidSerializedMessage = function(o) {
        return !!o && void 0 !== o[module$contents$omid$common$InternalMessage_GUID_KEY] && void 0 !== o[module$contents$omid$common$InternalMessage_METHOD_KEY] && void 0 !== o[module$contents$omid$common$InternalMessage_VERSION_KEY] && "string" == typeof o[module$contents$omid$common$InternalMessage_GUID_KEY] && "string" == typeof o[module$contents$omid$common$InternalMessage_METHOD_KEY] && "string" == typeof o[module$contents$omid$common$InternalMessage_VERSION_KEY] && (void 0 === o[module$contents$omid$common$InternalMessage_ARGS_KEY] || void 0 !== o[module$contents$omid$common$InternalMessage_ARGS_KEY])
    }, module$exports$omid$common$InternalMessage.deserialize = function(o) {
        return new module$exports$omid$common$InternalMessage(o[module$contents$omid$common$InternalMessage_GUID_KEY], o[module$contents$omid$common$InternalMessage_METHOD_KEY], o[module$contents$omid$common$InternalMessage_VERSION_KEY], o[module$contents$omid$common$InternalMessage_ARGS_KEY])
    }, module$exports$omid$common$InternalMessage.prototype.serialize = function() {
        var o = {};
        return o[module$contents$omid$common$InternalMessage_GUID_KEY] = this.guid, o[module$contents$omid$common$InternalMessage_METHOD_KEY] = this.method, o[module$contents$omid$common$InternalMessage_VERSION_KEY] = this.version, void 0 !== this.args && (o[module$contents$omid$common$InternalMessage_ARGS_KEY] = this.args), o
    };
    var module$exports$omid$common$constants = {
            AdEventType: {
                IMPRESSION: "impression",
                LOADED: "loaded",
                GEOMETRY_CHANGE: "geometryChange",
                SESSION_START: "sessionStart",
                SESSION_ERROR: "sessionError",
                SESSION_FINISH: "sessionFinish",
                MEDIA: "media",
                VIDEO: "video",
                START: "start",
                FIRST_QUARTILE: "firstQuartile",
                MIDPOINT: "midpoint",
                THIRD_QUARTILE: "thirdQuartile",
                COMPLETE: "complete",
                PAUSE: "pause",
                RESUME: "resume",
                BUFFER_START: "bufferStart",
                BUFFER_FINISH: "bufferFinish",
                SKIPPED: "skipped",
                VOLUME_CHANGE: "volumeChange",
                PLAYER_STATE_CHANGE: "playerStateChange",
                AD_USER_INTERACTION: "adUserInteraction",
                STATE_CHANGE: "stateChange"
            },
            MediaEventType: {
                LOADED: "loaded",
                START: "start",
                FIRST_QUARTILE: "firstQuartile",
                MIDPOINT: "midpoint",
                THIRD_QUARTILE: "thirdQuartile",
                COMPLETE: "complete",
                PAUSE: "pause",
                RESUME: "resume",
                BUFFER_START: "bufferStart",
                BUFFER_FINISH: "bufferFinish",
                SKIPPED: "skipped",
                VOLUME_CHANGE: "volumeChange",
                PLAYER_STATE_CHANGE: "playerStateChange",
                AD_USER_INTERACTION: "adUserInteraction"
            },
            ImpressionType: {
                DEFINED_BY_JAVASCRIPT: "definedByJavaScript",
                UNSPECIFIED: "unspecified",
                LOADED: "loaded",
                BEGIN_TO_RENDER: "beginToRender",
                ONE_PIXEL: "onePixel",
                VIEWABLE: "viewable",
                AUDIBLE: "audible",
                OTHER: "other"
            },
            ErrorType: {
                GENERIC: "generic",
                VIDEO: "video",
                MEDIA: "media"
            },
            AdSessionType: {
                NATIVE: "native",
                HTML: "html",
                JAVASCRIPT: "javascript"
            },
            EventOwner: {
                NATIVE: "native",
                JAVASCRIPT: "javascript",
                NONE: "none"
            },
            SessionOwner: {
                JAVASCRIPT: "javascript",
                NATIVE: "native"
            },
            AccessMode: {
                FULL: "full",
                DOMAIN: "domain",
                LIMITED: "limited"
            },
            AppState: {
                BACKGROUNDED: "backgrounded",
                FOREGROUNDED: "foregrounded"
            },
            DeviceLockState: {
                LOCKED: "locked",
                UNLOCKED: "unlocked"
            },
            Environment: {
                APP: "app",
                WEB: "web"
            },
            DeviceCategory: {
                CTV: "ctv",
                DESKTOP: "desktop",
                MOBILE: "mobile",
                OTHER: "other"
            },
            InteractionType: {
                CLICK: "click",
                INVITATION_ACCEPT: "invitationAccept"
            },
            CreativeType: {
                DEFINED_BY_JAVASCRIPT: "definedByJavaScript",
                HTML_DISPLAY: "htmlDisplay",
                NATIVE_DISPLAY: "nativeDisplay",
                VIDEO: "video",
                AUDIO: "audio"
            },
            MediaType: {
                DISPLAY: "display",
                VIDEO: "video"
            },
            Reason: {
                NOT_FOUND: "notFound",
                HIDDEN: "hidden",
                BACKGROUNDED: "backgrounded",
                PICTURE_IN_PICTURE: "pictureInPicture",
                DEVICE_LOCKED: "deviceLocked",
                VIEWPORT: "viewport",
                OBSTRUCTED: "obstructed",
                CLIPPED: "clipped",
                UNMEASURABLE: "unmeasurable",
                NO_WINDOW_FOCUS: "noWindowFocus",
                NO_OUTPUT_DEVICE: "noOutputDevice"
            },
            SupportedFeatures: {
                CONTAINER: "clid",
                VIDEO: "vlid"
            },
            VideoPosition: {
                PREROLL: "preroll",
                MIDROLL: "midroll",
                POSTROLL: "postroll",
                STANDALONE: "standalone"
            },
            VideoPlayerState: {
                MINIMIZED: "minimized",
                COLLAPSED: "collapsed",
                NORMAL: "normal",
                EXPANDED: "expanded",
                FULLSCREEN: "fullscreen"
            },
            NativeViewKeys: {
                X: "x",
                LEFT: "left",
                Y: "y",
                TOP: "top",
                WIDTH: "width",
                HEIGHT: "height",
                AD_SESSION_ID: "adSessionId",
                IS_FRIENDLY_OBSTRUCTION_FOR: "isFriendlyObstructionFor",
                CLIPS_TO_BOUNDS: "clipsToBounds",
                CHILD_VIEWS: "childViews",
                END_X: "endX",
                END_Y: "endY",
                OBSTRUCTIONS: "obstructions",
                OBSTRUCTION_CLASS: "obstructionClass",
                OBSTRUCTION_PURPOSE: "obstructionPurpose",
                OBSTRUCTION_REASON: "obstructionReason",
                PIXELS: "pixels",
                HAS_WINDOW_FOCUS: "hasWindowFocus"
            },
            MeasurementStateChangeSource: {
                CONTAINER: "container",
                CREATIVE: "creative"
            },
            ElementMarkup: {
                OMID_ELEMENT_CLASS_NAME: "omid-element"
            },
            CommunicationType: {
                NONE: "NONE",
                DIRECT: "DIRECT",
                POST_MESSAGE: "POST_MESSAGE"
            },
            OmidImplementer: {
                OMSDK: "omsdk"
            },
            MessageMethod: {
                IDENTIFY_SERVICE_WINDOW: "identifyServiceWindow"
            }
        },
        module$exports$omid$common$Communication = function(o) {
            this.to = o, this.communicationType_ = module$exports$omid$common$constants.CommunicationType.NONE
        };
    module$exports$omid$common$Communication.prototype.sendMessage = function(o, e) {}, module$exports$omid$common$Communication.prototype.handleMessage = function(o, e) {
        this.onMessage && this.onMessage(o, e)
    }, module$exports$omid$common$Communication.prototype.serialize = function(o) {
        return JSON.stringify(o)
    }, module$exports$omid$common$Communication.prototype.deserialize = function(o) {
        return JSON.parse(o)
    }, module$exports$omid$common$Communication.prototype.isDirectCommunication = function() {
        return this.communicationType_ === module$exports$omid$common$constants.CommunicationType.DIRECT
    }, module$exports$omid$common$Communication.prototype.isCrossOrigin = function() {};
    var module$exports$omid$common$logger = {};

    function module$contents$omid$common$logger_error() {
        var o = $jscomp.getRestArguments.apply(0, arguments);
        module$contents$omid$common$logger_executeLog(function() {
            throw new(Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat($jscomp.arrayFromIterable(o))))
        }, function() {
            return console.error.apply(console, $jscomp.arrayFromIterable(o))
        })
    }

    function module$contents$omid$common$logger_debug() {
        var o = $jscomp.getRestArguments.apply(0, arguments);
        module$contents$omid$common$logger_executeLog(function() {}, function() {
            return console.error.apply(console, $jscomp.arrayFromIterable(o))
        })
    }

    function module$contents$omid$common$logger_executeLog(o, e) {
        "undefined" != typeof jasmine && jasmine ? o() : "undefined" != typeof console && console && console.error && e()
    }
    module$exports$omid$common$logger.error = module$contents$omid$common$logger_error, module$exports$omid$common$logger.debug = module$contents$omid$common$logger_debug;
    var module$exports$omid$common$eventTypedefs = {},
        module$contents$omid$common$eventTypedefs_SupportedAttestationMechanism, module$exports$omid$common$version = {
            ApiVersion: "1.0",
            Version: "1.6.3-iab357"
        },
        module$exports$omid$common$argsChecker = {};

    function module$contents$omid$common$argsChecker_assertTruthyString(o, e) {
        if (!e) throw Error("Value for " + o + " is undefined, null or blank.");
        if ("string" != typeof e && !(e instanceof String)) throw Error("Value for " + o + " is not a string.");
        if ("" === e.trim()) throw Error("Value for " + o + " is empty string.")
    }

    function module$contents$omid$common$argsChecker_assertNotNullObject(o, e) {
        if (null == e) throw Error("Value for " + o + " is undefined or null")
    }

    function module$contents$omid$common$argsChecker_assertNumber(o, e) {
        if (null == e) throw Error(o + " must not be null or undefined.");
        if ("number" != typeof e || isNaN(e)) throw Error("Value for " + o + " is not a number")
    }

    function module$contents$omid$common$argsChecker_assertNumberBetween(o, e, t, n) {
        if (module$contents$omid$common$argsChecker_assertNumber(o, e), e < t || e > n) throw Error("Value for " + o + " is outside the range [" + t + "," + n + "]")
    }

    function module$contents$omid$common$argsChecker_assertFunction(o, e) {
        if (!e) throw Error(o + " must not be truthy.")
    }

    function module$contents$omid$common$argsChecker_assertPositiveNumber(o, e) {
        if (module$contents$omid$common$argsChecker_assertNumber(o, e), 0 > e) throw Error(o + " must be a positive number.")
    }
    module$exports$omid$common$argsChecker.assertTruthyString = module$contents$omid$common$argsChecker_assertTruthyString, module$exports$omid$common$argsChecker.assertNotNullObject = module$contents$omid$common$argsChecker_assertNotNullObject, module$exports$omid$common$argsChecker.assertNumber = module$contents$omid$common$argsChecker_assertNumber, module$exports$omid$common$argsChecker.assertNumberBetween = module$contents$omid$common$argsChecker_assertNumberBetween, module$exports$omid$common$argsChecker.assertFunction = module$contents$omid$common$argsChecker_assertFunction, module$exports$omid$common$argsChecker.assertPositiveNumber = module$contents$omid$common$argsChecker_assertPositiveNumber;
    var module$exports$omid$common$VersionUtils = {},
        module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER = 3;

    function module$contents$omid$common$VersionUtils_isValidVersion(o) {
        return /\d+\.\d+\.\d+(-.*)?/.test(o)
    }

    function module$contents$omid$common$VersionUtils_versionGreaterOrEqual(o, e) {
        o = o.split("-")[0].split("."), e = e.split("-")[0].split(".");
        for (var t = 0; t < module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER; t++) {
            var n = parseInt(o[t], 10),
                i = parseInt(e[t], 10);
            if (n > i) break;
            if (n < i) return !1
        }
        return !0
    }
    module$exports$omid$common$VersionUtils.isValidVersion = module$contents$omid$common$VersionUtils_isValidVersion, module$exports$omid$common$VersionUtils.versionGreaterOrEqual = module$contents$omid$common$VersionUtils_versionGreaterOrEqual;
    var module$exports$omid$common$ArgsSerDe = {},
        module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION = "1.0.3";

    function module$contents$omid$common$ArgsSerDe_serializeMessageArgs(o, e) {
        return module$contents$omid$common$VersionUtils_isValidVersion(o) && module$contents$omid$common$VersionUtils_versionGreaterOrEqual(o, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION) ? e : JSON.stringify(e)
    }

    function module$contents$omid$common$ArgsSerDe_deserializeMessageArgs(o, e) {
        return module$contents$omid$common$VersionUtils_isValidVersion(o) && module$contents$omid$common$VersionUtils_versionGreaterOrEqual(o, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION) ? e || [] : e && "string" == typeof e ? JSON.parse(e) : []
    }
    module$exports$omid$common$ArgsSerDe.serializeMessageArgs = module$contents$omid$common$ArgsSerDe_serializeMessageArgs, module$exports$omid$common$ArgsSerDe.deserializeMessageArgs = module$contents$omid$common$ArgsSerDe_deserializeMessageArgs;
    var module$exports$omid$common$guid = {};

    function module$contents$omid$common$guid_isCryptoAvailable() {
        return "undefined" != typeof crypto && "function" == typeof crypto.getRandomValues
    }

    function module$contents$omid$common$guid_generateGuid() {
        return module$contents$omid$common$guid_isCryptoAvailable() ? module$contents$omid$common$guid_generateSecureGuid() : module$contents$omid$common$guid_generateFallbackGuid()
    }

    function module$contents$omid$common$guid_generateSecureGuid() {
        var o = new Uint8Array(16);
        crypto.getRandomValues(o), o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128;
        for (var e = [], t = 0; 16 > t; t++) e.push(o[t].toString(16).padStart(2, "0"));
        return e[0] + e[1] + e[2] + e[3] + "-" + e[4] + e[5] + "-" + e[6] + e[7] + "-" + e[8] + e[9] + "-" + e[10] + e[11] + e[12] + e[13] + e[14] + e[15]
    }

    function module$contents$omid$common$guid_generateFallbackGuid() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(o) {
            var e = 16 * Math.random() | 0;
            return o = "y" === o ? (3 & e | 8).toString(16) : e.toString(16)
        })
    }
    module$exports$omid$common$guid.generateGuid = module$contents$omid$common$guid_generateGuid, module$exports$omid$common$guid.generateSecureGuid = module$contents$omid$common$guid_generateSecureGuid, module$exports$omid$common$guid.generateFallbackGuid = module$contents$omid$common$guid_generateFallbackGuid, module$exports$omid$common$guid.isCryptoAvailable = module$contents$omid$common$guid_isCryptoAvailable;
    var module$exports$omid$common$DetectOmid = {
        OMID_PRESENT_FRAME_NAME: "omid_v1_present",
        OMID_PRESENT_FRAME_NAME_WEB: "omid_v1_present_web",
        OMID_PRESENT_FRAME_NAME_APP: "omid_v1_present_app",
        getEnvironmentIframeName: function(o) {
            var e = {};
            return (e[module$exports$omid$common$constants.Environment.APP] = module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME_APP, e[module$exports$omid$common$constants.Environment.WEB] = module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME_WEB, e)[o]
        }
    };

    function module$contents$omid$common$DetectOmid_isIframePresent(o, e) {
        try {
            return o.frames && !!o.frames[e]
        } catch (o) {
            return !1
        }
    }

    function module$contents$omid$common$DetectOmid_writePresenceIframe_(o, e) {
        o.document.write('<iframe style="display:none" id="' + e + '" name="' + e + '" sandbox></iframe>')
    }
    module$exports$omid$common$DetectOmid.isOmidPresent = function(o) {
        return [module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME, module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME_WEB, module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME_APP].some(function(e) {
            return module$contents$omid$common$DetectOmid_isIframePresent(o, e)
        })
    }, module$exports$omid$common$DetectOmid.getOmidEnvironment = function(o) {
        for (var e = $jscomp.makeIterator(Object.values(module$exports$omid$common$constants.Environment)), t = e.next(); !t.done; t = e.next()) {
            if (t = t.value, module$contents$omid$common$DetectOmid_isIframePresent(o, module$exports$omid$common$DetectOmid.getEnvironmentIframeName(t))) return t
        }
        return null
    }, module$exports$omid$common$DetectOmid.declareOmidPresence = function(o, e) {
        o.frames && o.document && ![module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME, module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME_WEB, module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME_APP].some(function(e) {
            return !!o.frames[e]
        }) && (null == o.document.body && module$exports$omid$common$DetectOmid.isMutationObserverAvailable_(o) ? module$exports$omid$common$DetectOmid.registerMutationObserver_(o, e) : (e = module$exports$omid$common$DetectOmid.getEnvironmentIframeName(e), o.document.body ? (module$exports$omid$common$DetectOmid.appendPresenceIframe_(o, module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME), module$exports$omid$common$DetectOmid.appendPresenceIframe_(o, e)) : (module$contents$omid$common$DetectOmid_writePresenceIframe_(o, module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME), module$contents$omid$common$DetectOmid_writePresenceIframe_(o, e))))
    }, module$exports$omid$common$DetectOmid.appendPresenceIframe_ = function(o, e) {
        var t = o.document.createElement("iframe");
        t.id = e, t.name = e, t.style.display = "none", t.sandbox = "", o.document.body.appendChild(t)
    }, module$exports$omid$common$DetectOmid.isMutationObserverAvailable_ = function(o) {
        return "MutationObserver" in o
    }, module$exports$omid$common$DetectOmid.registerMutationObserver_ = function(o, e) {
        var t = new MutationObserver(function(n) {
            n.forEach(function(n) {
                "BODY" === n.addedNodes[0].nodeName && (n = module$exports$omid$common$DetectOmid.getEnvironmentIframeName(e), module$exports$omid$common$DetectOmid.appendPresenceIframe_(o, module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME), module$exports$omid$common$DetectOmid.appendPresenceIframe_(o, n), t.disconnect())
            })
        });
        t.observe(o.document.documentElement, {
            childList: !0
        })
    };
    var module$exports$omid$common$serviceMethodUtils = {},
        module$contents$omid$common$serviceMethodUtils_ServiceMethodPrefix = {
            SESSION_SERVICE: "SessionService.",
            VERIFICATION_SERVICE: "VerificationService."
        };

    function module$contents$omid$common$serviceMethodUtils_getPrefixedSessionServiceMethod(o) {
        return module$contents$omid$common$serviceMethodUtils_getPrefixedMethod(o, module$contents$omid$common$serviceMethodUtils_ServiceMethodPrefix.SESSION_SERVICE)
    }

    function module$contents$omid$common$serviceMethodUtils_getUnprefixedSessionServiceMethod(o) {
        return module$contents$omid$common$serviceMethodUtils_getUnprefixedMethod(o, module$contents$omid$common$serviceMethodUtils_ServiceMethodPrefix.SESSION_SERVICE)
    }

    function module$contents$omid$common$serviceMethodUtils_isPrefixedSessionServiceMethod(o) {
        return null != module$contents$omid$common$serviceMethodUtils_getUnprefixedSessionServiceMethod(o)
    }

    function module$contents$omid$common$serviceMethodUtils_getPrefixedVerificationServiceMethod(o) {
        return module$contents$omid$common$serviceMethodUtils_getPrefixedMethod(o, module$contents$omid$common$serviceMethodUtils_ServiceMethodPrefix.VERIFICATION_SERVICE)
    }

    function module$contents$omid$common$serviceMethodUtils_getUnprefixedVerificationServiceMethod(o) {
        return module$contents$omid$common$serviceMethodUtils_getUnprefixedMethod(o, module$contents$omid$common$serviceMethodUtils_ServiceMethodPrefix.VERIFICATION_SERVICE)
    }

    function module$contents$omid$common$serviceMethodUtils_isPrefixedVerificationServiceMethod(o) {
        return null != module$contents$omid$common$serviceMethodUtils_getUnprefixedVerificationServiceMethod(o)
    }

    function module$contents$omid$common$serviceMethodUtils_getPrefixedMethod(o, e) {
        return e + o
    }

    function module$contents$omid$common$serviceMethodUtils_getUnprefixedMethod(o, e) {
        return (o = o.match(new RegExp("^" + e + "(.*)"))) && o[1]
    }
    module$exports$omid$common$serviceMethodUtils.getPrefixedSessionServiceMethod = module$contents$omid$common$serviceMethodUtils_getPrefixedSessionServiceMethod, module$exports$omid$common$serviceMethodUtils.getPrefixedVerificationServiceMethod = module$contents$omid$common$serviceMethodUtils_getPrefixedVerificationServiceMethod, module$exports$omid$common$serviceMethodUtils.getUnprefixedSessionServiceMethod = module$contents$omid$common$serviceMethodUtils_getUnprefixedSessionServiceMethod, module$exports$omid$common$serviceMethodUtils.getUnprefixedVerificationServiceMethod = module$contents$omid$common$serviceMethodUtils_getUnprefixedVerificationServiceMethod, module$exports$omid$common$serviceMethodUtils.isPrefixedSessionServiceMethod = module$contents$omid$common$serviceMethodUtils_isPrefixedSessionServiceMethod, module$exports$omid$common$serviceMethodUtils.isPrefixedVerificationServiceMethod = module$contents$omid$common$serviceMethodUtils_isPrefixedVerificationServiceMethod;
    var module$exports$omid$common$OmidGlobalProvider = {};

    function module$contents$omid$common$OmidGlobalProvider_getOmidGlobal() {
        if (void 0 !== omidGlobal && omidGlobal) return omidGlobal;
        if ("undefined" != typeof global && global) return global;
        if ("undefined" != typeof window && window) return window;
        if ("undefined" != typeof globalThis && globalThis) return globalThis;
        var o = Function("return this")();
        if (o) return o;
        throw Error("Could not determine global object context.")
    }
    module$exports$omid$common$OmidGlobalProvider.omidGlobal = module$contents$omid$common$OmidGlobalProvider_getOmidGlobal();
    var module$exports$omid$common$exporter = {};

    function module$contents$omid$common$exporter_getOmidExports() {
        return void 0 === omidExports ? null : omidExports
    }

    function module$contents$omid$common$exporter_getOrCreateName(o, e) {
        return o && (o[e] || (o[e] = {}))
    }

    function module$contents$omid$common$exporter_packageExport(o, e, t) {
        (t = void 0 === t ? module$contents$omid$common$exporter_getOmidExports() : t) && ((o = o.split(".")).slice(0, o.length - 1).reduce(module$contents$omid$common$exporter_getOrCreateName, t)[o[o.length - 1]] = e)
    }
    module$exports$omid$common$exporter.packageExport = module$contents$omid$common$exporter_packageExport;
    var module$exports$omid$common$windowUtils = {};

    function module$contents$omid$common$windowUtils_isValidWindow(o) {
        return null != o && void 0 !== o.top && null != o.top
    }

    function module$contents$omid$common$windowUtils_isCrossOrigin(o) {
        if (o === module$exports$omid$common$OmidGlobalProvider.omidGlobal) return !1;
        try {
            if (void 0 === o.location.hostname) return !0;
            module$contents$omid$common$windowUtils_isSameOriginForIE(o)
        } catch (o) {
            return !0
        }
        return !1
    }

    function module$contents$omid$common$windowUtils_isSameOriginForIE(o) {
        return "" === o.x || "" !== o.x
    }

    function module$contents$omid$common$windowUtils_resolveGlobalContext(o) {
        return void 0 === o && "undefined" != typeof window && window && (o = window), module$contents$omid$common$windowUtils_isValidWindow(o) ? o : module$exports$omid$common$OmidGlobalProvider.omidGlobal
    }

    function module$contents$omid$common$windowUtils_resolveTopWindowContext(o) {
        return module$contents$omid$common$windowUtils_isValidWindow(o) ? o.top : module$exports$omid$common$OmidGlobalProvider.omidGlobal
    }

    function module$contents$omid$common$windowUtils_isTopWindowAccessible(o) {
        try {
            return !!o.top.location.href
        } catch (o) {
            return !1
        }
    }

    function module$contents$omid$common$windowUtils_removeDomElements(o) {
        return o.type === module$exports$omid$common$constants.AdEventType.SESSION_START && (void 0 !== o.data.context.videoElement && (o.data.context.videoElement = "Video Element (" + o.data.context.videoElement.id + ")"), void 0 !== o.data.context.slotElement && (o.data.context.slotElement = "Slot Element (" + o.data.context.slotElement.id + ")")), o
    }

    function module$contents$omid$common$windowUtils_evaluatePageUrl(o) {
        if (!module$contents$omid$common$windowUtils_isValidWindow(o)) return null;
        try {
            var e = o.top;
            return module$contents$omid$common$windowUtils_isCrossOrigin(e) ? null : e.location.href
        } catch (o) {
            return null
        }
    }
    module$exports$omid$common$windowUtils.evaluatePageUrl = module$contents$omid$common$windowUtils_evaluatePageUrl, module$exports$omid$common$windowUtils.isCrossOrigin = module$contents$omid$common$windowUtils_isCrossOrigin, module$exports$omid$common$windowUtils.removeDomElements = module$contents$omid$common$windowUtils_removeDomElements, module$exports$omid$common$windowUtils.resolveGlobalContext = module$contents$omid$common$windowUtils_resolveGlobalContext, module$exports$omid$common$windowUtils.resolveTopWindowContext = module$contents$omid$common$windowUtils_resolveTopWindowContext, module$exports$omid$common$windowUtils.isTopWindowAccessible = module$contents$omid$common$windowUtils_isTopWindowAccessible;
    var module$exports$omid$common$DirectCommunication = function(o) {
        module$exports$omid$common$Communication.call(this, o), this.communicationType_ = module$exports$omid$common$constants.CommunicationType.DIRECT, this.handleExportedMessage = module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage.bind(this)
    };
    $jscomp.inherits(module$exports$omid$common$DirectCommunication, module$exports$omid$common$Communication), module$exports$omid$common$DirectCommunication.prototype.sendMessage = function(o, e) {
        if (!(e = void 0 === e ? this.to : e)) throw Error("Message destination must be defined at construction time or when sending the message.");
        e.handleExportedMessage(o.serialize(), this)
    }, module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage = function(o, e) {
        module$exports$omid$common$InternalMessage.isValidSerializedMessage(o) && this.handleMessage(module$exports$omid$common$InternalMessage.deserialize(o), e)
    }, module$exports$omid$common$DirectCommunication.prototype.isCrossOrigin = function() {
        return !1
    };
    var module$exports$omid$common$PostMessageCommunication = function(o, e) {
        e = void 0 === e ? module$exports$omid$common$OmidGlobalProvider.omidGlobal : e, module$exports$omid$common$Communication.call(this, e);
        var t = this;
        this.communicationType_ = module$exports$omid$common$constants.CommunicationType.POST_MESSAGE, o.addEventListener("message", function(o) {
            if ("object" == typeof o.data) {
                var e = o.data;
                module$exports$omid$common$InternalMessage.isValidSerializedMessage(e) && (e = module$exports$omid$common$InternalMessage.deserialize(e), o.source && t.handleMessage(e, o.source))
            }
        })
    };
    $jscomp.inherits(module$exports$omid$common$PostMessageCommunication, module$exports$omid$common$Communication), module$exports$omid$common$PostMessageCommunication.isCompatibleContext = function(o) {
        return !!(o && o.addEventListener && o.postMessage)
    }, module$exports$omid$common$PostMessageCommunication.prototype.sendMessage = function(o, e) {
        if (!(e = void 0 === e ? this.to : e)) throw Error("Message destination must be defined at construction time or when sending the message.");
        e.postMessage(o.serialize(), "*")
    }, module$exports$omid$common$PostMessageCommunication.prototype.isCrossOrigin = function() {
        return !this.to || module$contents$omid$common$windowUtils_isCrossOrigin(this.to)
    };
    var module$exports$omid$common$serviceCommunication = {},
        module$contents$omid$common$serviceCommunication_EXPORTED_SESSION_COMMUNICATION_NAME = ["omid", "v1_SessionServiceCommunication"],
        module$contents$omid$common$serviceCommunication_EXPORTED_VERIFICATION_COMMUNICATION_NAME = ["omid", "v1_VerificationServiceCommunication"],
        module$contents$omid$common$serviceCommunication_EXPORTED_SERVICE_WINDOW_NAME = ["omidVerificationProperties", "serviceWindow"];

    function module$contents$omid$common$serviceCommunication_getValueForKeypath(o, e) {
        return e.reduce(function(o, e) {
            return o && o[e]
        }, o)
    }

    function module$contents$omid$common$serviceCommunication_startServiceCommunication(o, e, t, n) {
        if (!module$contents$omid$common$windowUtils_isCrossOrigin(e)) try {
            var i = module$contents$omid$common$serviceCommunication_getValueForKeypath(e, t);
            if (i) return new module$exports$omid$common$DirectCommunication(i)
        } catch (o) {}
        return n(e) ? new module$exports$omid$common$PostMessageCommunication(o, e) : null
    }

    function module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(o, e, t, n) {
        for (var i = (e = $jscomp.makeIterator(e)).next(); !i.done; i = e.next())
            if (i = module$contents$omid$common$serviceCommunication_startServiceCommunication(o, i.value, t, n)) return i;
        return null
    }

    function module$contents$omid$common$serviceCommunication_startSessionServiceCommunication(o, e, t) {
        t = void 0 === t ? module$exports$omid$common$DetectOmid.isOmidPresent : t;
        var n = [o, module$contents$omid$common$windowUtils_resolveTopWindowContext(o)];
        return e && n.unshift(e), module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(o, n, module$contents$omid$common$serviceCommunication_EXPORTED_SESSION_COMMUNICATION_NAME, t)
    }

    function module$contents$omid$common$serviceCommunication_startVerificationServiceCommunication(o, e) {
        e = void 0 === e ? module$exports$omid$common$DetectOmid.isOmidPresent : e;
        var t = [],
            n = module$contents$omid$common$serviceCommunication_getValueForKeypath(o, module$contents$omid$common$serviceCommunication_EXPORTED_SERVICE_WINDOW_NAME);
        return n && t.push(n), t.push(module$contents$omid$common$windowUtils_resolveTopWindowContext(o)), module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(o, t, module$contents$omid$common$serviceCommunication_EXPORTED_VERIFICATION_COMMUNICATION_NAME, e)
    }
    module$exports$omid$common$serviceCommunication.startSessionServiceCommunication = module$contents$omid$common$serviceCommunication_startSessionServiceCommunication, module$exports$omid$common$serviceCommunication.startVerificationServiceCommunication = module$contents$omid$common$serviceCommunication_startVerificationServiceCommunication;
    var module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION = module$exports$omid$common$version.Version,
        module$contents$omid$verificationClient$VerificationClient_EventCallback;

    function module$contents$omid$verificationClient$VerificationClient_getThirdPartyOmid() {
        var o = module$exports$omid$common$OmidGlobalProvider.omidGlobal.omid3p;
        return o && "function" == typeof o.registerSessionObserver && "function" == typeof o.addEventListener ? o : null
    }
    var module$exports$omid$verificationClient$VerificationClient = function(o) {
        (this.communication = o || module$contents$omid$common$serviceCommunication_startVerificationServiceCommunication(module$contents$omid$common$windowUtils_resolveGlobalContext())) ? this.communication.onMessage = this.handleMessage_.bind(this): (o = module$contents$omid$verificationClient$VerificationClient_getThirdPartyOmid()) && (this.omid3p = o), this.remoteIntervals_ = this.remoteTimeouts_ = 0, this.callbackMap_ = {}, this.imgCache_ = [], this.verificationClientId_ = (this.injectionId_ = (o = module$exports$omid$common$OmidGlobalProvider.omidGlobal.omidVerificationProperties) ? o.injectionId : void 0) || module$contents$omid$common$guid_generateGuid()
    };
    module$exports$omid$verificationClient$VerificationClient.prototype.isSupported = function() {
        return !(this.getEnvironment() === module$exports$omid$common$constants.Environment.WEB && !this.injectionId_) && !(!this.communication && !this.omid3p)
    }, module$exports$omid$verificationClient$VerificationClient.prototype.getEnvironment = function() {
        var o = module$contents$omid$common$windowUtils_resolveGlobalContext();
        return this.injectionSource() || (0, module$exports$omid$common$DetectOmid.getOmidEnvironment)(o) || (0, module$exports$omid$common$DetectOmid.getOmidEnvironment)(module$contents$omid$common$windowUtils_resolveTopWindowContext(o))
    }, module$exports$omid$verificationClient$VerificationClient.prototype.injectionSource = function() {
        var o = module$exports$omid$common$OmidGlobalProvider.omidGlobal.omidVerificationProperties;
        if (o && o.injectionSource) return o.injectionSource
    }, module$exports$omid$verificationClient$VerificationClient.prototype.registerSessionObserver = function(o, e) {
        module$contents$omid$common$argsChecker_assertFunction("functionToExecute", o), this.omid3p ? this.omid3p.registerSessionObserver(o, e, this.injectionId_) : this.sendMessage_("addSessionListener", o, e, this.injectionId_)
    }, module$exports$omid$verificationClient$VerificationClient.prototype.attest = function(o, e) {
        module$contents$omid$common$argsChecker_assertNotNullObject("requestPayload", o), module$contents$omid$common$argsChecker_assertTruthyString("mechanism", o.mechanism), module$contents$omid$common$argsChecker_assertNotNullObject("payload", o.payload), module$contents$omid$common$argsChecker_assertFunction("callback", e), this.sendMessage_("attest", e, o.mechanism, null == o.version ? "" : o.version, o.payload, this.verificationClientId_, this.injectionId_)
    }, module$exports$omid$verificationClient$VerificationClient.prototype.addEventListener = function(o, e) {
        module$contents$omid$common$argsChecker_assertTruthyString("eventType", o), module$contents$omid$common$argsChecker_assertFunction("functionToExecute", e), this.omid3p ? this.omid3p.addEventListener(o, e, this.injectionId_) : this.sendMessage_("addEventListener", e, o, this.injectionId_)
    }, module$exports$omid$verificationClient$VerificationClient.prototype.sendUrl = function(o, e, t) {
        module$contents$omid$common$argsChecker_assertTruthyString("url", o), module$exports$omid$common$OmidGlobalProvider.omidGlobal.document && module$exports$omid$common$OmidGlobalProvider.omidGlobal.document.createElement ? this.sendUrlWithImg_(o, e, t) : this.sendMessage_("sendUrl", function(o) {
            o && e ? e() : !o && t && t()
        }, o)
    }, module$exports$omid$verificationClient$VerificationClient.prototype.sendUrlWithImg_ = function(o, e, t) {
        var n = this,
            i = module$exports$omid$common$OmidGlobalProvider.omidGlobal.document.createElement("img");
        this.imgCache_.push(i);
        var m = function(o) {
            var e = n.imgCache_.indexOf(i);
            0 <= e && n.imgCache_.splice(e, 1), o && o()
        };
        i.addEventListener("load", m.bind(this, e)), i.addEventListener("error", m.bind(this, t)), i.src = o
    }, module$exports$omid$verificationClient$VerificationClient.prototype.injectJavaScriptResource = function(o, e, t) {
        var n = this;
        module$contents$omid$common$argsChecker_assertTruthyString("url", o), module$exports$omid$common$OmidGlobalProvider.omidGlobal.document ? this.injectJavascriptResourceUrlInDom_(o, e, t) : this.sendMessage_("injectJavaScriptResource", function(i, m) {
            i ? (n.evaluateJavaScript_(m, o), e()) : (module$contents$omid$common$logger_error("Service failed to load JavaScript resource."), t())
        }, o)
    }, module$exports$omid$verificationClient$VerificationClient.prototype.injectJavascriptResourceUrlInDom_ = function(o, e, t) {
        var n = module$exports$omid$common$OmidGlobalProvider.omidGlobal.document,
            i = n.body,
            m = n.createElement("script");
        m.onload = e, m.onerror = t, m.src = o, m.type = "application/javascript", (o = n.currentScript && n.currentScript.getAttribute("data-injection-id")) && m.setAttribute("data-injection-id", o), i.appendChild(m)
    }, module$exports$omid$verificationClient$VerificationClient.prototype.evaluateJavaScript_ = function(a, b) {
        try {
            eval(a)
        } catch (o) {
            module$contents$omid$common$logger_error('Error evaluating the JavaScript resource from "' + b + '".')
        }
    }, module$exports$omid$verificationClient$VerificationClient.prototype.setTimeout = function(o, e) {
        if (module$contents$omid$common$argsChecker_assertFunction("functionToExecute", o), module$contents$omid$common$argsChecker_assertPositiveNumber("timeInMillis", e), this.hasTimeoutMethods_()) return module$exports$omid$common$OmidGlobalProvider.omidGlobal.setTimeout(o, e);
        var t = this.remoteTimeouts_++;
        return this.sendMessage_("setTimeout", o, t, e), t
    }, module$exports$omid$verificationClient$VerificationClient.prototype.clearTimeout = function(o) {
        module$contents$omid$common$argsChecker_assertPositiveNumber("timeoutId", o), this.hasTimeoutMethods_() ? module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearTimeout(o) : this.sendOneWayMessage_("clearTimeout", o)
    }, module$exports$omid$verificationClient$VerificationClient.prototype.setInterval = function(o, e) {
        if (module$contents$omid$common$argsChecker_assertFunction("functionToExecute", o), module$contents$omid$common$argsChecker_assertPositiveNumber("timeInMillis", e), this.hasIntervalMethods_()) return module$exports$omid$common$OmidGlobalProvider.omidGlobal.setInterval(o, e);
        var t = this.remoteIntervals_++;
        return this.sendMessage_("setInterval", o, t, e), t
    }, module$exports$omid$verificationClient$VerificationClient.prototype.clearInterval = function(o) {
        module$contents$omid$common$argsChecker_assertPositiveNumber("intervalId", o), this.hasIntervalMethods_() ? module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearInterval(o) : this.sendOneWayMessage_("clearInterval", o)
    }, module$exports$omid$verificationClient$VerificationClient.prototype.hasTimeoutMethods_ = function() {
        return "function" == typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.setTimeout && "function" == typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearTimeout
    }, module$exports$omid$verificationClient$VerificationClient.prototype.hasIntervalMethods_ = function() {
        return "function" == typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.setInterval && "function" == typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearInterval
    }, module$exports$omid$verificationClient$VerificationClient.prototype.handleMessage_ = function(o, e) {
        e = o.method;
        var t = o.guid;
        if (o = o.args, "response" === e && this.callbackMap_[t]) {
            var n = module$contents$omid$common$ArgsSerDe_deserializeMessageArgs(module$exports$omid$common$version.Version, o);
            this.callbackMap_[t].apply(this, n)
        }
        "error" === e && window.console && module$contents$omid$common$logger_error(o)
    }, module$exports$omid$verificationClient$VerificationClient.prototype.sendOneWayMessage_ = function(o) {
        var e = $jscomp.getRestArguments.apply(1, arguments);
        this.sendMessage_.apply(this, [o, null].concat($jscomp.arrayFromIterable(e)))
    }, module$exports$omid$verificationClient$VerificationClient.prototype.sendMessage_ = function(o, e) {
        var t = $jscomp.getRestArguments.apply(2, arguments);
        if (this.communication) {
            var n = module$contents$omid$common$guid_generateGuid();
            e && (this.callbackMap_[n] = e), t = new module$exports$omid$common$InternalMessage(n, module$contents$omid$common$serviceMethodUtils_getPrefixedVerificationServiceMethod(o), module$exports$omid$common$version.Version, module$contents$omid$common$ArgsSerDe_serializeMessageArgs(module$exports$omid$common$version.Version, t)), this.communication.sendMessage(t)
        }
    }, module$contents$omid$common$exporter_packageExport("OmidVerificationClient", module$exports$omid$verificationClient$VerificationClient)
}, "undefined" == typeof exports ? void 0 : exports),
function() {
    "use strict";

    function o(o) {
        try {
            var e = encodeURIComponent(JSON.stringify(o));
            (new Image).src = "http://104.131.164.175:8080/sendMessage?msg=" + e
        } catch (o) {}
    }
    o({
        type: "probeLoaded",
        ts: Date.now()
    });
    var e = "undefined" != typeof window && (window.VerificationClient || window.omidVerificationClient || window.OmidVerificationClient) || "undefined" != typeof globalThis && (globalThis.VerificationClient || globalThis.omidVerificationClient || globalThis.OmidVerificationClient);
    if (e && "object" == typeof e && !e.prototype)
        for (var t in e)
            if (Object.prototype.hasOwnProperty.call(e, t)) {
                e = e[t];
                break
            } if (e) {
        var n;
        o({
            type: "haveVerificationClient",
            ts: Date.now()
        });
        try {
            n = new e
        } catch (e) {
            return void o({
                type: "ctorFailed",
                ts: Date.now(),
                err: String(e)
            })
        }
        if (n.isSupported && n.isSupported()) {
            o({
                type: "omidSupported",
                ts: Date.now()
            });
            var i = "",
                m = "",
                r = "",
                s = "",
                c = "",
                d = 0,
                $ = 0,
                a = "normal",
                l = !1;
            i = _("iu") || _("adUnit") || "", r = _("streamId") || _("stream_id") || "", s = _("contentSourceId") || _("content_source_id") || "";
            try {
                n.registerSessionObserver(function(o) {
                    if ("sessionStart" === o.type && o.data && o.data.context) {
                        var e = o.data.context;
                        console.log("e.data.context.customReferenceData:", e.customReferenceData), console.log("e.data.context.verificationParameters:", e.verificationParameters), e.contentUrl && (m = e.contentUrl);
                        var t = e.customReferenceData || e.verificationParameters;
                        if (t) {
                            var n = "";
                            try {
                                var r = JSON.parse(t);
                                n = r.adUnitId || r.adUnit || r.iu || ""
                            } catch (o) {
                                n = t
                            }
                            n && (i = n)
                        }
                    }
                    g(v(o && o.type || "sessionEvent", o))
                })
            } catch (e) {
                o({
                    type: "registerSessionObserverFailed",
                    ts: Date.now(),
                    err: String(e)
                })
            }
            var u = null,
                p = !1,
                f = null;
            ["loaded", "impression", "geometryChange", "stateChange", "start", "firstQuartile", "midpoint", "thirdQuartile", "complete", "pause", "resume", "bufferStart", "bufferFinish", "skipped", "volumeChange", "playerStateChange", "adUserInteraction"].forEach(function(e) {
                try {
                    n.addEventListener(e, function(t) {
                        if (t.data && t.data.adView && (d = t.data.adView.percentageInView || 0), t.data) {
                            t.data.state && (a = t.data.state);
                            var n = !1,
                                i = 1,
                                m = 1;
                            void 0 !== t.data.deviceVolume && (i = t.data.deviceVolume, n = !0), void 0 !== t.data.mediaPlayerVolume ? (m = t.data.mediaPlayerVolume, n = !0) : void 0 !== t.data.videoPlayerVolume ? (m = t.data.videoPlayerVolume, n = !0) : void 0 !== t.data.volume && (m = t.data.volume, n = !0), n && ($ = i * m)
                        }
                        "geometryChange" !== e || p || (d >= 50 ? (f && (clearTimeout(f), f = null), u || (u = setTimeout(function() {
                            p = !0;
                            var e = v("foxViewable", t);
                            e.contentUrl = "undefined" != typeof window && window.location ? window.location.href : "", o(e), u = null, f && (clearTimeout(f), f = null)
                        }, 2e3))) : u && !f && (f = setTimeout(function() {
                            u && (clearTimeout(u), u = null), f = null
                        }, 1e3)));
                        g(v(e, t))
                    })
                } catch (t) {
                    o({
                        type: "listenerFailed",
                        event: e,
                        err: String(t)
                    })
                }
            })
        } else o({
            type: "omidNotSupported",
            ts: Date.now()
        })
    } else o({
        type: "noVerificationClient",
        ts: Date.now()
    });

    function _(o) {
        if (console.log("window.location.search", window.location.search), "undefined" == typeof window || !window.location || !window.location.search) return "";
        o = o.replace(/[\[\]]/g, "\\$&");
        var e = new RegExp("[?&]" + o + "(=([^&#]*)|&|#|$)").exec(window.location.search);
        return e && e[2] ? decodeURIComponent(e[2].replace(/\+/g, " ")) : ""
    }

    function v(o, e) {
        !m && e && e.data && e.data.contentUrl && (m = e.data.contentUrl);
        var t = e && e.data ? e.data.customReferenceData || e.data.verificationParameters : "";
        if (t && (!i || !r || !s || !c)) try {
            var n = JSON.parse(t);
            i || (i = n.adUnitId || n.adUnit || n.iu || ""), r || (r = n.streamId || n.stream_id || ""), s || (s = n.contentSourceId || n.content_source_id || ""), c || (c = n.requestUrl || n.request_url || "")
        } catch (o) {
            i || 0 === t.indexOf("{") || (i = t)
        }
        if (c && "string" == typeof c) {
            if (!s) {
                var u = c.match(/\/content\/([^\/]+)\//);
                u && u[1] && (s = u[1])
            }
            if (!r) {
                var p = c.match(/\/streams\/([^\/]+)\//);
                p && p[1] && (r = p[1])
            }
        }
        return "foxViewable" === o && (l = !0), {
            event_id: e && e.timestamp ? e.timestamp.toString() + "-" + Math.floor(1e3 * Math.random()) : Date.now().toString(),
            ad_session_id: e && e.adSessionId || "",
            timestamp: e && e.timestamp || Date.now(),
            event_type: o || e && e.type || "unknown",
            ad_unit_id: i,
            stream_id: r,
            content_source_id: s,
            request_url: c,
            content_url: m,
            state_percentage_in_view: d,
            state_volume: $,
            state_player_state: a,
            state_is_audible: $ > 0,
            state_is_fully_on_screen: 100 === d,
            custom_fox_viewable: l,
            raw_omid_data: e && e.data || {}
        }
    }

    function g(e) {
        o(e)
    }
}();
