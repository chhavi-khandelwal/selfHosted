_vwo_code.sT = _vwo_code.finished();
(function (c, a, e, d, b, z) {
    function f(a, b, d) {
        e.cookie = a + "=" + b + "; expires=" + new Date(864e5 * d + +new Date).toGMTString() + "; domain=" + c + "; path=/"
    }

    -1 == e.cookie.indexOf("_vis_opt_out") && -1 == d.location.href.indexOf("vwo_opt_out=1") && (a = e.cookie.replace(/(?:(?:^|.*;\s*)_vwo_uuid_v2\s*=\s*([^;]*).*$)|^.*$/, "$1") || a, a = a.split("|"), b = new Image, b.src = "//dev.visualwebsiteoptimizer.com/v.gif?a=230507&d=" + encodeURIComponent(c) + "&u=" + a[0] + "&h=" + a[1] + "&t=" + z + "&r=" + Math.random(), d.vwo_iehack_queue = [b], c = d._vis_opt_domain || c, f("_vwo_uuid_v2", a.join("|"), 366))
})("wingify.com", "D7C4097E9C3BE401CF7AC7F6D5EA89B37|9731ffdce05e74254617ae00ce003bc0", document, window, 0, _vwo_code.sT);
var _vwo_acc_id = 230507;
clearTimeout(_vwo_settings_timer);
_vwo_exp_ids = [], _vwo_exp = {};
window.VWO = window.VWO || [];
window.VWO.data = {"url": {},"rp": 1*60/(24*60*3*20), "ts": parseInt((Date.now()/1000), 10), "pc": {"t": 42, "a": 42}};
// , "ts": parseInt((Date.now()/1000), 10)
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
    "segment_code": "true",
    "sections": {"1": {"path": "", "variations": {"1": ""}}},
    "combs": {"1": 1},
    "comb_n": {"1": "website"},
    "goals": {"1": {"urlRegex": "^.*$", "excludeUrl": "", "type": "ENGAGEMENT"}}
};*/
_vwo_exp_ids.push('34');
_vwo_exp['34'] = {
    "version": 2,
    "clickmap": 1,
    "globalCode": {},
    "type": "SPLIT_URL",
    "status": "RUNNING",
    "pc_traffic": 100,
    "name": "Campaign 34",
    "manual": false,
    "urlRegex": "^http\\:\\\/\\\/local\\.wingify\\.com\\\/selfHosted\\\/?(?:[\\?#].*)?$",
    "exclude_url": "",
    "multiple_domains": 0,
    "segment_code": "true",
    "ss": null,
    "ibe": 1,
    "sections": {
        "1": {
            "path": "",
            "variations": {
                "1": "http:\/\/local.wingify.com\/selfHosted\/",
                "2": "http:\/\/local.wingify.com\/selfHosted?a=1"
            },
            "segment": {
                "1": 1,
                "2": 1
            },
            "variationsRegex": {
                "1": "^http\\:\\\/\\\/local\\.wingify\\.com\\\/selfHosted\\\/?(?:[\\?#].*)?$",
                "2": "^http\\:\\\/\\\/local\\.wingify\\.com\\\/selfHosted\\?a\\=1(?:#.*)?.*$"
            }
        }
    },
    "combs": {
        "1": 0,
        "2": 1
    },
    "comb_n": {
        "1": "Control",
        "2": "Variation-1"
    },
    "goals": {
        "1": {
            "urlRegex": "^http\\:\\\/\\\/local\\.wingify\\.com\\\/selfHosted\\\/?(?:[\\?#].*)?$",
            "excludeUrl": "",
            "type": "SEPARATE_PAGE"
        },
        "2": {
            "url": "#div",
            "type": "CLICK_ELEMENT"
        }
    }
};
_vwo_exp_ids.push('43');
_vwo_exp['43'] = {
    "version": 1,
    "clickmap": 0,
    "globalCode": {},
    "type": "TRACK",
    "status": "RUNNING",
    "pc_traffic": 100,
    "name": "to check page visit",
    "manual": false,
    "urlRegex": "^http\\:\\\/\\\/local\\.wingify\\.com\\\/selfHosted\\\/?(?:[\\?#].*)?$",
    "exclude_url": "",
    "multiple_domains": 0,
    "segment_code": "true",
    "sections": {"1": {"path": "", "variations": []}},
    "combs": {"1": 1},
    "comb_n": {"1": "Website"},
    "goals": {
        "15": {
            "urlRegex": "^http\\:\\\/\\\/local\\.wingify\\.com\\\/selfHosted\\\/?(?:[\\?#].*)?$",
            "excludeUrl": "",
            "pExcludeUrl": "",
            "pUrl": "",
            "type": "SEPARATE_PAGE"
        }
    }
};
/*
_vwo_exp_ids.push('44');
_vwo_exp['44'] = {
    "version": 2,
    "clickmap": 0,
    "globalCode": {},
    "type": "ANALYZE_FORM",
    "status": "RUNNING",
    "pc_traffic": 100,
    "name": "Jai mata di",
    "manual": false,
    "forms": ["form[name='first-form']"],
    "urlRegex": "^http\\:\\\/\\\/local\\.wingify\\.com\\\/selfHosted\\\/?(?:[\\?#].*)?$",
    "exclude_url": "",
    "multiple_domains": 0,
    "segment_code": "true",
    "sections": {"1": {"path": "", "variations": {"1": ""}}},
    "combs": {"1": 1},
    "comb_n": {"1": "website"},
    "goals": {"1": {"urlRegex": "^.*$", "excludeUrl": "", "type": "ENGAGEMENT"}}
};
_vwo_exp_ids.push('45');
_vwo_exp['45'] = {
    "version": 2,
    "clickmap": 1,
    "globalCode": {},
    "type": "VISUAL_AB",
    "status": "RUNNING",
    "pc_traffic": 85,
    "name": "Campaign 45 - JSLIB-188",
    "manual": false,
    "urlRegex": "^http\\:\\\/\\\/local\\.wingify\\.com\\\/selfHosted\\\/?(?:[\\?#].*)?$",
    "exclude_url": "",
    "multiple_domains": 0,
    "segment_code": "true",
    "sections": {
        "1": {
            "path": "",
            "variations": {
                "1": "[]",
                "2": "[{\"js\":\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"changeCSS\\\",\\\"body > form:nth-of-type(1) > input:nth-of-type(3)\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"body > form:nth-of-type(1) > input:nth-of-type(3)\\\");\\nel.css({\\\"background-color\\\":\\\"rgba(206,66,66,1)\\\"});\",\"xpath\":\"BODY > H2:first-child + FORM > BR:first-child + INPUT + BR + BR + INPUT + BR + BR + INPUT\"},{\"js\":\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"changeCSS\\\",\\\"body > p:nth-of-type(1)\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"body > p:nth-of-type(1)\\\");\\nel.css({\\\"background-color\\\":\\\"#ff56ff\\\"});\",\"xpath\":\"BODY > H2:first-child + FORM + P\"},{\"js\":\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"content\\\",\\\"#submit-text\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"#submit-text\\\");\\nvwo_$(\\\"#submit-text\\\").each(function(){\\nvwo_$(this).append(\\\"SUBMIT-TEXT If you click the \\\\\\\"Submit\\\\\\\" button, the form-data will be sent to a page called \\\\\\\"\\\/action_page.php\\\\\\\".\\\");\\nvwo_$(this).nonEmptyContents().eq(0).replaceWith(\\\"<span style=\\\\\\\"font-size: 10px;\\\\\\\"><span style=\\\\\\\"font-size: 17px;\\\\\\\"><\\\/span><\\\/span>\\\")\\n});\\n\\\/*vwo_debug log(\\\"changeCSS\\\",\\\"#submit-text\\\"); vwo_debug*\\\/;\\nel.css({\\\"color\\\":\\\"rgba(219,46,46,1)\\\",\\\"border-top-color\\\":\\\"#56ffff\\\"});\",\"xpath\":\"#submit-text\"}]"
            },
            "segment": {"1": 1, "2": 1}
        }
    },
    "combs": {"1": 0.5, "2": 0.5},
    "comb_n": {"1": "Control", "2": "Variation-1"},
    "goals": {
        "1": {
            "urlRegex": "^http\\:\\\/\\\/local\\.wingify\\.com\\\/selfHosted\\\/?(?:[\\?#].*)?$",
            "excludeUrl": "",
            "type": "SEPARATE_PAGE"
        }
    }
};
_vwo_exp_ids.push('46');
_vwo_exp['46'] = {
    "version": 2,
    "clickmap": 1,
    "globalCode": {},
    "type": "SURVEY",
    "status": "RUNNING",
    "pc_traffic": 100,
    "name": "Campaign 46-JSLIB-244",
    "manual": false,
    "urlRegex": "^http\\:\\\/\\\/local\\.wingify\\.com\\\/selfHosted\\\/?(?:[\\?#].*)?$",
    "exclude_url": "",
    "multiple_domains": 0,
    "segment_code": "true",
    "sections": {"1": {"path": "", "variations": {"1": ""}}},
    "combs": {"1": 1},
    "comb_n": {"1": "website"},
    "goals": {}
};
_vwo_exp_ids.push('47');
_vwo_exp['47'] = {
    "version": 2,
    "clickmap": 1,
    "globalCode": {},
    "type": "VISUAL_AB",
    "status": "RUNNING",
    "pc_traffic": 100,
    "name": "Campaign 47 - test for polling",
    "manual": false,
    "urlRegex": "^http\\:\\\/\\\/local\\.wingify\\.com\\\/selfHosted\\\/?(?:[\\?#].*)?$",
    "exclude_url": "",
    "multiple_domains": 0,
    "segment_code": "((_vwo_s().f_in(_vwo_s().U(), 'http:\/\/local.wingify.com\/selfHosted\/')) && _vwo_s().f_in(_vwo_s().jv('isPollingEnabled'), 'true'))",
    "sections": {
        "1": {
            "path": "",
            "variations": {
                "1": "[]",
                "2": "[{\"js\":\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"changeCSS\\\",\\\"body > form:nth-of-type(1) > input:nth-of-type(3)\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"body > form:nth-of-type(1) > input:nth-of-type(3)\\\");\\nel.css({\\\"color\\\":\\\"#ffffff\\\",\\\"background-color\\\":\\\"#ff5656\\\"});\",\"xpath\":\"BODY > H2:first-child + FORM > BR:first-child + INPUT + BR + BR + INPUT + BR + BR + INPUT\"},{\"js\":\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"changeCSS moveResize\\\",\\\"#firstname\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"#firstname\\\");\\nel.css({\\\"left\\\":\\\"300px\\\",\\\"top\\\":\\\"0px\\\",\\\"height\\\":\\\"26px\\\",\\\"width\\\":\\\"125px\\\",\\\"zIndex\\\":\\\"auto\\\",\\\"position\\\":\\\"relative\\\",\\\"display\\\":\\\"inline-block\\\",\\\"font-size\\\":\\\"20px\\\",\\\"font-weight\\\":\\\"800\\\",\\\"color\\\":\\\"#007f7f\\\",\\\"word-spacing\\\":\\\"1px\\\",\\\"background-color\\\":\\\"#ffffaa\\\",\\\"border-top-width\\\":\\\"12px\\\",\\\"border-top-color\\\":\\\"#ff56ff\\\",\\\"border-right-color\\\":\\\"#000000\\\",\\\"border-bottom-color\\\":\\\"#000000\\\",\\\"border-left-color\\\":\\\"#000000\\\"});\",\"xpath\":\"#firstname\"},{\"js\":\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"content\\\",\\\"#lorem\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"#lorem\\\");\\nvwo_$(\\\"#lorem\\\").each(function(){\\nvwo_$(this).nonEmptyContents().eq(0).replaceWith(\\\"<em><span style=\\\\\\\"font-size: 30px;\\\\\\\">LOREM What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not\\\\n<\\\/span> only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \\\\\\\"de Finibus Bonorum et Malorum\\\\\\\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \\\\\\\"Lorem ipsum dolor sit amet..\\\\\\\", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \\\\\\\"de Finibus Bonorum et Malorum\\\\\\\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\\\\n<\\\/em>\\\")\\n});\",\"xpath\":\"#lorem\"}]"
            },
            "segment": {"1": 1, "2": 1}
        }
    },
    "combs": {"1": 0.5, "2": 0.5},
    "comb_n": {"1": "Control", "2": "Variation-1"},
    "goals": {"1": {"url": "body > form > input[type=\"text\"]:nth-child(2)", "type": "CLICK_ELEMENT"}}
};
_vwo_exp_ids.push('49');
_vwo_exp['49'] = {
    "version": 2,
    "clickmap": 1,
    "globalCode": {},
    "type": "VISUAL_AB",
    "status": "RUNNING",
    "pc_traffic": 100,
    "name": "Campaign 49-spa",
    "manual": false,
    "urlRegex": "^http\\:\\\/\\\/local\\.wingify\\.com\\\/selfHosted(?:\\\/?\\?[^#]*)?\\\/?#\\\/c$|^http\\:\\\/\\\/local\\.wingify\\.com\\\/selfHosted\\\/checkout\\.html\\\/?(?:[\\?#].*)?$",
    "exclude_url": "",
    "multiple_domains": 0,
    "segment_code": "(_vwo_s().f_e(_vwo_s().b(),'Chrome'))",
    "sections": {
        "1": {
            "path": "",
            "variations": {
                "1": "[]",
                "2": "[{\"js\":\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"changeCSS\\\",\\\"body > form:nth-of-type(1) > input:nth-of-type(3)\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"body > form:nth-of-type(1) > input:nth-of-type(3)\\\");\\nel.css({\\\"color\\\":\\\"#ffffff\\\",\\\"font-style\\\":\\\"normal\\\",\\\"background-color\\\":\\\"#ff5656\\\"});\",\"xpath\":\"body > form:nth-of-type(1) > input:nth-of-type(3)\"}]"
            },
            "segment": {"1": 1, "2": 1}
        }
    },
    "combs": {"1": 0.5, "2": 0.5},
    "comb_n": {"1": "Control", "2": "Variation-1"},
    "goals": {
        "1": {"url": ".div", "type": "CLICK_ELEMENT"},
        "200": {
            "urlRegex": "^http\\:\\\/\\\/local\\.wingify\\.com\\\/selfHosted\\\/?(?:[\\?#].*)?$",
            "excludeUrl": "",
            "type": "CUSTOM_GOAL"
        }
    }
};
_vwo_exp_ids.push('50');
_vwo_exp['50'] = {
    "version": 2,
    "clickmap": 1,
    "globalCode": {},
    "type": "VISUAL",
    "status": "RUNNING",
    "pc_traffic": 100,
    "name": "check with split and ab - delCSS",
    "manual": false,
    "urlRegex": "^http\\:\\\/\\\/local\\.wingify\\.com\\\/selfHosted\\\/?(?:[\\?#].*)?$",
    "exclude_url": "",
    "multiple_domains": 0,
    "segment_code": "true",
    "sections": {
        "1": {
            "path": "BODY > P:first-child + H2",
            "variations": {
                "1": "\"vwo_$(\\\"BODY\\\").addClass(\\\"_vwo_sec_0\\\");\"",
                "2": "\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"content\\\",\\\"body > h2:nth-of-type(1)\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"body > h2:nth-of-type(1)\\\");\\nvwo_$(\\\"body > h2:nth-of-type(1)\\\").each(function(){\\nvwo_$(this).append(\\\"HTML Forms\\\");\\nvwo_$(this).nonEmptyContents().eq(0).replaceWith(\\\"<span style=\\\\\\\"font-size: 30px;\\\\\\\"><\\\/span>\\\")\\n});vwo_$(\\\"BODY\\\").addClass(\\\"_vwo_sec_0\\\");\""
            }
        },
        "2": {
            "path": "BODY._vwo_sec_0 > P:first-child + H2 + BUTTON#test + FORM",
            "variations": {
                "1": "",
                "2": "\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"changeCSS\\\",\\\"body > form:nth-of-type(1)\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"body > form:nth-of-type(1)\\\");\\nel.css({\\\"opacity\\\":\\\"0.8\\\",\\\"cursor\\\":\\\"pointer\\\"});\""
            }
        }
    },
    "combs": {"1,1": 0.25, "1,2": 0.25, "2,1": 0.25, "2,2": 0.25},
    "comb_n": {"1,1": "Control", "1,2": "Combination-2", "2,1": "Combination-3", "2,2": "Combination-4"},
    "goals": {"1": {"url": "ppp", "type": "CLICK_ELEMENT"}}
};*/
_vwo_exp_ids.push('51');
_vwo_exp['51'] = {
    "version": 2,
    "clickmap": 1,
    "globalCode": {},
    "type": "VISUAL_AB",
    "status": "RUNNING",
    "pc_traffic": 100,
    "name": "Campaign 51-sajdgsakg",
    "manual": false,
    "urlRegex": "^http\\:\\\/\\\/local\\.wingify\\.com\\\/selfHosted\\\/?(?:[\\?#].*)?$",
    "exclude_url": "",
    "multiple_domains": 0,
    "segment_code": "(_vwo_s().f_e(_vwo_s().b(),'Chrome')) && (_vwo_u.cm('eO','dom.mousedown','#ppp'))",
    "ss": {"se": "true", "csa": 1},
    "sections": {"1": {"path": "",
    "variations": {"1": "[]", "2": "[{\"js\":\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"html\\\",\\\"#test\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"#test\\\");\\nel.html(\\\"this has been changed\\\");\\n\\\/*vwo_debug log(\\\"changeCSS moveResize\\\",\\\"#test\\\"); vwo_debug*\\\/;\\nel.css({\\\"left\\\":\\\"100px\\\",\\\"top\\\":\\\"0px\\\",\\\"zIndex\\\":\\\"auto\\\",\\\"position\\\":\\\"relative\\\",\\\"display\\\":\\\"inline-block\\\",\\\"color\\\":\\\"#ff0000\\\"});\",\"xpath\":\"#test\"},{\"js\":\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"changeCSS\\\",\\\"#lorem\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"#lorem\\\");\\nel.css({\\\"color\\\":\\\"#ffaa56\\\",\\\"background-color\\\":\\\"#d4ffaa\\\"});\",\"xpath\":\"#lorem\"}]"},
    "segment": {"1": 1, "2": 1}}},
    "combs": {"1": 0, "2": 1},
    "comb_n": {"1": "Control", "2": "Variation-1"},
    "goals": {"1": {"urlRegex": "^.*$", "excludeUrl": "", "type": "ENGAGEMENT"}}
};
/*_vwo_exp_ids.push('52');
_vwo_exp['52'] = {
    "version": 2,
    "clickmap": 1,
    "globalCode": {},
    "type": "VISUAL_AB",
    "status": "RUNNING",
    "pc_traffic": 100,
    "name": "Campaign 52-tested with temp combination-chosen",
    "manual": false,
    "urlRegex": "^http\\:\\\/\\\/local\\.wingify\\.com\\\/selfHosted\\\/?(?:[\\?#].*)?$",
    "exclude_url": "",
    "multiple_domains": 0,
    "segment_code": "(_vwo_u.cm('eO','dom.mousedown','#ppp'))",
    // "ss": {"se": "true", "csa": 1},
    "ibe": 1,
    "sections": {
        "1": {
            "path": "",
            "variations": {
                "1": "[]",
                "2": "[{\"js\":\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"html\\\",\\\"#test\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"#test\\\");\\nel.html(\\\"this has been changed\\\");\\n\\\/*vwo_debug log(\\\"changeCSS moveResize\\\",\\\"#test\\\"); vwo_debug*\\\/;\\nel.css({\\\"left\\\":\\\"100px\\\",\\\"top\\\":\\\"0px\\\",\\\"zIndex\\\":\\\"auto\\\",\\\"position\\\":\\\"relative\\\",\\\"display\\\":\\\"inline-block\\\",\\\"color\\\":\\\"#ff0000\\\"});\",\"xpath\":\"#test\"},{\"js\":\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"changeCSS\\\",\\\"#lorem\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"#lorem\\\");\\nel.css({\\\"color\\\":\\\"#ffaa56\\\",\\\"background-color\\\":\\\"#d4ffaa\\\"});\",\"xpath\":\"#lorem\"}]",
                "3": "[{\"js\":\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"changeCSS\\\",\\\"#submit-text\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"#submit-text\\\");\\nel.css({\\\"color\\\":\\\"#aaff56\\\",\\\"background-color\\\":\\\"#aaaaff\\\"});\",\"xpath\":\"#submit-text\"},{\"js\":\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"changeCSS\\\",\\\"#test\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"#test\\\");\\nel.css({\\\"color\\\":\\\"#0000ff\\\"});\",\"xpath\":\"#test\"}]",
                "4": "[{\"js\":\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"changeCSS\\\",\\\"#lorem\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"#lorem\\\");\\nel.css({\\\"color\\\":\\\"#ff00ff\\\",\\\"background-color\\\":\\\"#ffff56\\\"});\",\"xpath\":\"#lorem\"},{\"js\":\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"changeCSS\\\",\\\"#submit-text\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"#submit-text\\\");\\nel.css({\\\"font-size\\\":\\\"26px\\\",\\\"color\\\":\\\"#bf5f00\\\"});\",\"xpath\":\"#submit-text\"}]"
            },
            "segment": {"1": 1, "2": 1, "3": 1, "4": 1}
        }
    },
    "combs": {"1": 0, "2": 0.25, "3": 0.25, "4": 0.50},
    "comb_n": {"1": "Control", "2": "Variation-1", "3": "Variation-2", "4": "Variation-3"},
    "goals": {
        "1": {
            "urlRegex": "^http\\:\\\/\\\/local\\.wingify\\.com\\\/selfHosted\\\/?(?:[\\?#].*)?$",
            "excludeUrl": "",
            "type": "SEPARATE_PAGE"
        }, "2": {"url": ".div", "type": "CLICK_ELEMENT"}
    }
};*/
/*_vwo_exp_ids.push('53');
_vwo_exp['53'] = {
    "version": 2,
    "clickmap": 1,
    "globalCode": {},
    "type": "CONVERSION_TRACKING",
    "status": "RUNNING",
    "pc_traffic": 100,
    "name": "Campaign 53",
    "manual": false,
    "urlRegex": "^.*$",
    "exclude_url": "",
    "multiple_domains": 0,
    "segment_code": "true",
    "ss": null,
    "ibe": 1,
    "sections": {"1": {"path": "", "variations": {"1": ""}}},
    "combs": {"1": 1},
    "comb_n": {"1": "website"},
    "goals": {"1": {"urlRegex": "^.*$", "excludeUrl": "", "type": "ENGAGEMENT"}}
};*/
var _vwo_style = document.getElementById('_vis_opt_path_hides'),
    _vwo_css = '{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}';
var _vwo_text = "body,BODY > H2:first-child + FORM > BR:first-child + INPUT + BR + BR + INPUT + BR + BR + INPUT,BODY > H2:first-child + FORM + P,#submit-text,#firstname,#lorem,body > form:nth-of-type(1) > input:nth-of-type(3),BODY > P:first-child + H2,BODY._vwo_sec_0 > P:first-child + H2 + BUTTON#test + FORM,#test" + _vwo_css;
if (_vwo_style) {
    if (_vwo_style.styleSheet) {
        _vwo_style.styleSheet.cssText = _vwo_text;
    } else {
        var _vwo_textnode = document.createTextNode(_vwo_text);
        _vwo_style.appendChild(_vwo_textnode);
        _vwo_style.removeChild(_vwo_style.childNodes[0]);
    }
}
window.VWO.data.vi = {"os": "MacOS", "dt": "desktop", "br": "Chrome", "de": "Other"};

var _vwo_cookieDomain = 'wingify.com', _vwo_uuid = 'D7C4097E9C3BE401CF7AC7F6D5EA89B37',
    _vis_opt_file = _vwo_code.use_existing_jquery() ? 'track/vanj-2c81062ceefe9023b211f8fa7684702d.js' : '4.0/va-2c81062ceefe9023b211f8fa7684702d.js',
    _vwo_library_timer = setTimeout('_vwo_code.finish()', _vwo_code.library_tolerance()),
    _vis_opt_lib = (typeof _vis_opt_lib == 'undefined') ? '//dev.visualwebsiteoptimizer.com/' + _vis_opt_file : _vis_opt_lib;
_vwo_code.load(_vis_opt_lib);
_vwo_code.load(window.VWO.trackLibPath || '//dev.visualwebsiteoptimizer.com/4.0/track-2c81062ceefe9023b211f8fa7684702d.js');
_vwo_opa_cb = 'cb049aa1c6fac0244f929663dcca26e3';
_vwo_worker_cb = '68f4c079a93008e8e04f81f6476e5cc4';
window._vwo_pa = window._vwo_pa || {};
window._vwo_pa.sId = 'E0BA826427CB4988';
_vwo_code.load(window.VWO.opaLibPath || '//dev.visualwebsiteoptimizer.com/analysis/opa-cb049aa1c6fac0244f929663dcca26e3.js');
window.VWO.data.as = "rec1.visualwebsiteoptimizer.com";
;var _vwo_survey_cb = '8b9e7e4680b03c34e83b9f98717137eb', _vwo_surveySettings = {
    "97066": {
        "logo": null,
        "exps": [46],
        "id": 97066,
        "attrs": {"class": "bottom-right"},
        "trigger": {
            "g": "(_vwo_u.cm('eO','scroll',['t',200])&&_vwo_u.cm('tS','dom.load',['>',5]))||_vwo_u.cm('eO','dom.mousedown','lorem')",
            "46": "_vwo_u.cm('eO', 'campaign.rH', [46, [-1]])"
        },
        "version": 0.4,
        "cb": "40d7a40bce7a4229c7718142133688bf",
        "theme": "killbill",
        "hideLogo": 0
    }
};
_vwo_code.load(window.VWO.opsLibPath || '//dev.visualwebsiteoptimizer.com/va_survey-9623c005d227a12754cb9907c98c88be.js');