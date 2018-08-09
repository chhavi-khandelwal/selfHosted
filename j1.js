_vwo_code.sT = _vwo_code.finished();
(function (c, a, e, d, b, z) {
    function f(a, b, d) {
        e.cookie = a + "=" + b + "; expires=" + new Date(864e5 * d + +new Date).toGMTString() + "; domain=" + c + "; path=/"
    }

    -1 == e.cookie.indexOf("_vis_opt_out") && -1 == d.location.href.indexOf("vwo_opt_out=1") && (a = e.cookie.replace(/(?:(?:^|.*;\s*)_vwo_uuid_v2\s*=\s*([^;]*).*$)|^.*$/, "$1") || a, a = a.split("|"), b = new Image, b.src = "//dev.visualwebsiteoptimizer.com/v.gif?a=230507&d=" + encodeURIComponent(c) + "&u=" + a[0] + "&h=" + a[1] + "&t=" + z + "&r=" + Math.random(), d.vwo_iehack_queue = [b], c = d._vis_opt_domain || c, f("_vwo_uuid_v2", a.join("|"), 366))
})("wingify.com", "DF118F580B74EA2C92226FD813BC57654|d184a5b64f5d74eafb36e2e9fbe3ac43", document, window, 0, _vwo_code.sT);
var _vwo_acc_id = 230507;
clearTimeout(_vwo_settings_timer);
_vwo_exp_ids = [], _vwo_exp = {};
window.VWO = window.VWO || [];
window.VWO.data = {"url": {}, "rp": 30, "ts": 1526971133, "pc": {"t": 0, "a": 20}};


//donot use it
// _vwo_exp_ids.push('49');
// _vwo_exp['49'] = {
//     "version": 2,
//     "clickmap": 1,
//     "globalCode": {},
//     "type": "VISUAL_AB",
//     "status": "RUNNING",
//     "pc_traffic": 100,
//     "name": "Campaign 49-spa",
//     "manual": false,
//     "urlRegex": "^http\\:\\\/\\\/local\\.wingify\\.com\\\/selfHosted(?:\\\/?\\?[^#]*)?\\\/?#\\\/c$|^http\\:\\\/\\\/local\\.wingify\\.com\\\/selfHosted\\\/checkout\\.html\\\/?(?:[\\?#].*)?$",
//     "exclude_url": "",
//     "multiple_domains": 0,
//     "segment_code": "_vwo_s().f_e(_vwo_s().dt(), 'desktop') && _vwo_t.cm('eO', 'poll', '_vwo_s().f_in(_vwo_s().jv(\\'foo\\'), 1)')",
//     "sections": {
//         "1": {
//             "path": "",
//             "variations": {
//                 "1": "[]",
//                 "2": "[{\"js\":\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"changeCSS\\\",\\\"body > form:nth-of-type(1) > input:nth-of-type(3)\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"body > form:nth-of-type(1) > input:nth-of-type(3)\\\");\\nel.css({\\\"color\\\":\\\"#ffffff\\\",\\\"font-style\\\":\\\"normal\\\",\\\"background-color\\\":\\\"#ff5656\\\"});\",\"xpath\":\"body > form:nth-of-type(1) > input:nth-of-type(3)\"}]"
//             },
//             "segment": {
//                 "1": 1,
//                 "2": 1
//             }
//         }
//     },
//     "combs": {
//         "1": 0,
//         "2": 1
//     },
//     "comb_n": {
//         "1": "Control",
//         "2": "Variation-1"
//     },
//     "goals": {
//         "1": {
//             "url": ".div",
//             "type": "CLICK_ELEMENT"
//         },
//         "200": {
//             "urlRegex": "^http\\:\\\/\\\/local\\.wingify\\.com\\\/selfHosted\\\/?(?:[\\?#].*)?$",
//             "excludeUrl": "",
//             "type": "CUSTOM_GOAL"
//         }
//     },
//     "ss": {
//         "pu": "_vwo_t.cm('eO','dom.mousedown','#submit-text')",
//         "csa": 0,
//     }
// };

// _vwo_exp_ids.push('49');
// _vwo_exp['49'] = {
//     "version": 2,
//     "clickmap": 1,
//     "globalCode": {},
//     "type": "VISUAL_AB",
//     "status": "RUNNING",
//     "pc_traffic": 100,
//     "name": "Campaign 49-spa",
//     "manual": false,
//     "urlRegex": "^http\\:\\\/\\\/local\\.wingify\\.com\\\/selfHosted\\\/?(?:[\\?#].*)?$|^http\\:\\\/\\\/local\\.wingify\\.com\\\/selfHosted\\\/checkout\\.html\\\/?(?:[\\?#].*)?$",
//     "exclude_url": "",
//     "multiple_domains": 0,
//     "segment_code": "_vwo_s().f_e(_vwo_s().dt(), 'desktop') && _vwo_t.cm('eO', 'poll', '_vwo_s().f_in(_vwo_s().jv(\\'foo\\'), 1)')",
//     "sections": {
//         "1": {
//             "path": "",
//             "variations": {
//                 "1": "[]",
//                 "2": "[{\"js\":\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"changeCSS\\\",\\\"body > form:nth-of-type(1) > input:nth-of-type(3)\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"body > form:nth-of-type(1) > input:nth-of-type(3)\\\");\\nel.css({\\\"color\\\":\\\"#ffffff\\\",\\\"font-style\\\":\\\"normal\\\",\\\"background-color\\\":\\\"#ff5656\\\"});\",\"xpath\":\"body > form:nth-of-type(1) > input:nth-of-type(3)\"}]"
//             },
//             "segment": {"1": 1, "2": 1}
//         }
//     },
//     "combs": {"1": 0, "2": 1},
//     "comb_n": {"1": "Control", "2": "Variation-1"},
//     "goals": {
//         "1": {"url": ".div", "type": "CLICK_ELEMENT"},
//         "200": {
//             "urlRegex": "^http\\:\\\/\\\/local\\.wingify\\.com\\\/selfHosted\\\/?(?:[\\?#].*)?$",
//             "excludeUrl": "",
//             "type": "CUSTOM_GOAL"
//         }
//     },
//     "ss": {
//         "pu": "_vwo_t.cm('eO','dom.mousedown','#submit-text')",
//         "csa": 0,
//         "js": {
//             "1": "function() {\n   \/\/Example Code: This code will show elements if order value is greater than 100\n  $(document).ready(function(){\n\tsetTimeout(function() {console.log('12345');\n\t\tif($(\"#test\").text() === 'ABC') {\n\t\t\tconsole.log('1234');\n\t  \/\/Call this method to show the elements\n\t  executeTrigger();\n\t}\n\t},2000);\n  });\n}"
//         }
//     },
// };

// _vwo_exp_ids.push('9');
// _vwo_exp['9'] = {
//     "version": 2,
//     "clickmap": 1,
//     "globalCode": {},
//     "type": "VISUAL_AB",
//     "status": "RUNNING",
//     "pc_traffic": 100,
//     "name": "Campaign 9",
//     "manual": false,
//     "urlRegex": "^.*.*.*$",
//     "exclude_url": "",
//     "multiple_domains": 0,
//     "segment_code": "_vwo_t.cm('eO','dom.mousedown','#submit-text') && _vwo_t.cm('eO', 'poll', '_vwo_s().f_in(_vwo_s().jv(\\'foo\\'), 1)') && _vwo_t.cm('eO','js', 1)",
//     "ss": {
//         "se": "_vwo_t.cm('eO','js', 1)",
//         "js": {
//             "1": "null",
//             "2": "function() {\n  \/\/Example Code: This code will show the trigger if order value is greater than $100\n  $(document).ready(function(){\n    $(\"button#test2\").click(function(){\n      executeTrigger();\n    });\n  });\n}"
//         },
//         "csa": 0
//     },
//     "UA": {"s": 4},
//     "sections": {
//         "1": {
//             "path": "",
//             "variations": {
//                 "1": "[]",
//                 "2": "[{\"js\":\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"html\\\",\\\"body > button:nth-of-type(4)\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"body > button:nth-of-type(4)\\\");\\nel.html(\\\"Change Text\\\");\",\"xpath\":\"body > button:nth-of-type(4)\"},{\"js\":\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"html\\\",\\\"body > p:nth-of-type(1)\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"body > p:nth-of-type(1)\\\");\\nel.html(\\\"Hello Variation\\\");\",\"xpath\":\"body > p:nth-of-type(1)\"}]"
//             },
//             "segment": {"1": 1, "2": 1}
//         }
//     },
//     "combs": {"1": 0, "2": 1},
//     "comb_n": {"1": "Control", "2": "Variation-1"},
//     "goals": {"1": {"urlRegex": "^.*$", "excludeUrl": "", "type": "ENGAGEMENT"}}
// };

_vwo_exp_ids.push('16');
_vwo_exp['16'] = {
    "version": 2,
    "clickmap": 1,
    "globalCode": {},
    "type": "VISUAL_AB",
    "status": "RUNNING",
    "pc_traffic": 100,
    "name": "Campaign 9 (Cloned)",
    "manual": false,
    "urlRegex": "^.*.*.*$",
    "exclude_url": "",
    "multiple_domains": 0,
    "segment_code": "_vwo_t.cm('eO','dom.mousedown','#firstname') && _vwo_t.cm('tS', 'dom.load', ['>=', 5])",
    "ss": {
        // "se": "_vwo_t.cm('eO','dom.load')",
        "js": {
            "1": "function() {\n  \/\/Example Code: This code will show the trigger if order value is greater than $100\n  $(document).ready(function(){\n    $(\"button#test\").click(function(){\n      executeTrigger();\n    });\n  });\n}",
            "2": "function() {\n  \/\/Example Code: This code will show the trigger if order value is greater than $100\n  $(document).ready(function(){\n    $(\"button#test2\").click(function(){\n      executeTrigger();\n    });\n  });\n}"
        },
        "csa": 1
    },
    "UA": {"s": 4},
    "sections": {
        "1": {
            "path": "",
            "variations": {
                "1": "[]",
                "2": "[{\"js\":\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"html\\\",\\\"body > button:nth-of-type(4)\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"body > button:nth-of-type(4)\\\");\\nel.html(\\\"Change Text\\\");\",\"xpath\":\"body > button:nth-of-type(4)\"},{\"js\":\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"html\\\",\\\"body > p:nth-of-type(1)\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"body > p:nth-of-type(1)\\\");\\nel.html(\\\"Hello Variation\\\");\",\"xpath\":\"body > p:nth-of-type(1)\"}]"
            },
            "segment": {"1": 1, "2": 1}
        }
    },
    "combs": {"1": 0, "2": 1},
    "comb_n": {"1": "Control", "2": "Variation-1"},
    "goals": {"1": {"urlRegex": "^.*$", "excludeUrl": "", "type": "ENGAGEMENT"}}
};


// _vwo_exp_ids.push('47');
// _vwo_exp['47'] = {
//     "version": 2,
//     "clickmap": 1,
//     "globalCode": {},
//     "type": "VISUAL_AB",
//     "status": "RUNNING",
//     "pc_traffic": 100,
//     "name": "Campaign 47 - test for polling",
//     "manual": false,
//     "urlRegex": "^http\\:\\\/\\\/local\\.wingify\\.com\\\/selfHosted\\\/?(?:[\\?#].*)?$",
//     "exclude_url": "",
//     "multiple_domains": 0,
//     "segment_code": "_vwo_s().f_e(_vwo_s().dt(), 'desktop') && _vwo_t.cm('eO', 'poll', '_vwo_s().f_in(_vwo_s().jv(\\'foo\\'), 1)')",
//      // "segment_code": "(_vwo_s().f_in(_vwo_s().gC('_vis_opt_test_cookie'),'2'))",
//     // "segment_code": "_vwo_s().f_e(_vwo_s().dt(), 'desktop') && _vwo_t.cm('eO','dom.mousedown','#div') && _vwo_t.cm('eO','dom.mousedown','#lorem') && _vwo_s().f_in(_vwo_s().jv('foo'), 1) && _vwo_t.cm('eO', 'poll', '_vwo_s().f_in(_vwo_s().jv(\\'foo\\'), 1)') && _vwo_t.cm('eO','leaveIntent') && _vwo_t.cm('tS', 'dom.load', ['>=', 5])",
//     "sections": {
//         "1": {
//             "path": "",
//             "variations": {
//                 "1": "[]",
//                 "2": "[{\"js\":\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"moveResize\\\",\\\"body > form:nth-of-type(1) > input:nth-of-type(1)\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"body > form:nth-of-type(1) > input:nth-of-type(1)\\\");\\nel.css({\\\"left\\\":\\\"30px\\\",\\\"top\\\":\\\"0px\\\",\\\"height\\\":\\\"26px\\\",\\\"width\\\":\\\"125px\\\",\\\"zIndex\\\":\\\"auto\\\",\\\"position\\\":\\\"relative\\\",\\\"display\\\":\\\"inline-block\\\"});\",\"xpath\":\"body > form:nth-of-type(1) > input:nth-of-type(1)\"},{\"js\":\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"changeCSS\\\",\\\"body > form:nth-of-type(1) > input:nth-of-type(3)\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"body > form:nth-of-type(1) > input:nth-of-type(3)\\\");\\nel.css({\\\"color\\\":\\\"#ffffff\\\",\\\"background-color\\\":\\\"#ff5656\\\"});\",\"xpath\":\"body > form:nth-of-type(1) > input:nth-of-type(3)\"}]"
//             },
//             "segment": {"1": 1, "2": 1}
//         }
//     },
//     "combs": {"1": 0, "2": 1},
//     "comb_n": {"1": "Control", "2": "Variation-1"},
//     "goals": {"1": {"url": "body > form > input[type=\"text\"]:nth-child(2)", "type": "CLICK_ELEMENT"}},
//     "ss": { "pu": "_vwo_t.cm('eO','dom.click','#lorem')", "pf":50, "se":"undefined",
//             "js": {1 : "function(){console.log('chal gaya');console.log($('#submit-text'));executeTrigger();}"},
//             "csa": true
//             }
// };
/*_vwo_exp_ids.push('26');
_vwo_exp['26'] = {
    "version": 2,
    "clickmap": 0,
    "globalCode": {},
    "type": "ANALYZE_RECORDING",
    "status": "RUNNING",
    "pc_traffic": 100,
    "name": "Recording",
    "manual": false,
    "main": true,
    "aK": 1,
    "bl": "",
    "wl": "",
    "urlRegex": "^.*$",
    "exclude_url": "",
    "multiple_domains": 0,
    "segment_code": "_vwo_s().f_e(_vwo_s().dt(), 'desktop')",
    "sections": {"1": {"path": "", "variations": {"1": ""}}},
    "combs": {"1": 1},
    "comb_n": {"1": "website"},
    "goals": {"1": {"urlRegex": "^.*$", "excludeUrl": "", "type": "ENGAGEMENT"}},
    "ss": { "pu": "_vwo_t.cm('eO','dom.mousedown','#submit-text')", "pf":1000, "se":"_vwo_t.cm('eO','dom.mousedown','#div')"
            }
};*/

// _vwo_exp_ids.push('49');
// _vwo_exp['49'] = {
//     "version": 2,
//     "clickmap": 1,
//     "globalCode": {},
//     "type": "VISUAL_AB",
//     "status": "RUNNING",
//     "pc_traffic": 100,
//     "name": "Campaign 49-spa",
//     "manual": false,
//     "urlRegex": "^http\\:\\\/\\\/local\\.wingify\\.com\\\/selfHosted\\\/?(?:[\\?#].*)?$|^http\\:\\\/\\\/local\\.wingify\\.com\\\/selfHosted(?:\\\/?\\?[^#]*)?\\\/?#\\\/b$",
//     "exclude_url": "",
//     "multiple_domains": 0,
//     //"segment_code": "_vwo_s().f_e(_vwo_s().dt(), 'desktop')  && _vwo_t.cm('eO','dom.mousedown','#submit-text')",
//     "segment_code": "_vwo_t.cm('eO', 'poll', '_vwo_s().f_in(_vwo_s().jv(\\'foo\\'), 1)')",
//     "sections": {
//         "1": {
//             "path": "",
//             "variations": {
//                 "1": "[]",
//                 "2": "[{\"js\":\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"changeCSS moveResize\\\",\\\"body > button:nth-of-type(1)\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"body > button:nth-of-type(1)\\\");\\nel.css({\\\"left\\\":\\\"0px\\\",\\\"top\\\":\\\"0px\\\",\\\"height\\\":\\\"28px\\\",\\\"width\\\":\\\"224px\\\",\\\"zIndex\\\":\\\"auto\\\",\\\"position\\\":\\\"relative\\\",\\\"display\\\":\\\"inline-block\\\",\\\"color\\\":\\\"#7fff00\\\",\\\"background-color\\\":\\\"#ff5656\\\"});\",\"xpath\":\"body > button:nth-of-type(1)\"}]"
//             },
//             "segment": {"1": 1, "2": 1}
//         }
//     },
//     "combs": {"1": 0, "2": 1},
//     "comb_n": {"1": "Control", "2": "Variation-1"},
//     "goals": {"1": {"url": ".spa-btn", "type": "CLICK_ELEMENT"}},
//      "ss": { "pu": "_vwo_t.cm('eO','dom.mousedown','#submit-text')", "pf":50, "se":"undefined"}
// };


var _vwo_style = document.getElementById('_vis_opt_path_hides'),
    _vwo_css = '{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}';
var _vwo_text = "body > form:nth-of-type(1) > input:nth-of-type(1),body > form:nth-of-type(1) > input:nth-of-type(3)" + _vwo_css;
if (_vwo_style) {
    if (_vwo_style.styleSheet) {
        _vwo_style.styleSheet.cssText = _vwo_text;
    } else {
        var _vwo_textnode = document.createTextNode(_vwo_text);
        _vwo_style.appendChild(_vwo_textnode);
        _vwo_style.removeChild(_vwo_style.childNodes[0]);
    }
}
var _vwo_cookieDomain = 'wingify.com', _vwo_uuid = 'DF118F580B74EA2C92226FD813BC57654',
    _vis_opt_file = _vwo_code.use_existing_jquery() ? 'track/vanj-b7ca9e110ab414dc649410d9bb5940da.js' : 'track/va-b7ca9e110ab414dc649410d9bb5940da.js',
    _vwo_library_timer = setTimeout('_vwo_code.finish()', _vwo_code.library_tolerance()),
    _vis_opt_lib = (typeof _vis_opt_lib == 'undefined') ? '//dev.visualwebsiteoptimizer.com/' + _vis_opt_file : _vis_opt_lib;
_vwo_code.load(_vis_opt_lib);
_vwo_code.load(window.VWO.trackLibPath || '//dev.visualwebsiteoptimizer.com/track/track-b7ca9e110ab414dc649410d9bb5940da.js');
_vwo_opa_cb = '1b829bce79fbb94ca7fcfd0fbed69853';
_vwo_worker_cb = '68f4c079a93008e8e04f81f6476e5cc4';
window._vwo_pa = window._vwo_pa || {};
window._vwo_pa.sId = '8A073C51D3E462E4';
_vwo_code.load(window.VWO.opaLibPath || '//dev.visualwebsiteoptimizer.com/analysis/opa-1b829bce79fbb94ca7fcfd0fbed69853.js');
window.VWO.data.as = "rec1.visualwebsiteoptimizer.com";
window.VWO.data.vi = {
    "os": "MacOS",
    "dt": "desktop",
    "br": "Chrome",
    "de": "Other"
};
