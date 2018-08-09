_vwo_code.sT = _vwo_code.finished();
(function(c, a, e, d, b, z) {
    function f(a, b, d) {
        e.cookie = a + "=" + b + "; expires=" + new Date(864e5 * d + +new Date).toGMTString() + "; domain=" + c + "; path=/"
    }
    -1 == e.cookie.indexOf("_vis_opt_out") && -1 == d.location.href.indexOf("vwo_opt_out=1") && (a = e.cookie.replace(/(?:(?:^|.*;\s*)_vwo_uuid_v2\s*=\s*([^;]*).*$)|^.*$/, "$1") || a,
    a = a.split("|"),
    b = new Image,
    b.src = "//dev.visualwebsiteoptimizer.com/v.gif?a=230507&d=" + encodeURIComponent(c) + "&u=" + a[0] + "&h=" + a[1] + "&t=" + z + "&r=" + Math.random(),
    d.vwo_iehack_queue = [b],
    c = d._vis_opt_domain || c,
    f("_vwo_uuid_v2", a.join("|"), 366))
}
)("wingify.com", "D3B9AFD06D8B16229983CED67C34AD803|dc14ffa4f18a5b58ad541698d30a84c2", document, window, 0, _vwo_code.sT);
var _vwo_acc_id = 230507;
clearTimeout(_vwo_settings_timer);
_vwo_exp_ids = [],
_vwo_exp = {};
window.VWO = window.VWO || [];
window.VWO.data = {
    "url": {},
    "rp": 30,
    "ts": 1530170650,
    "pc": {
        "t": 0,
        "a": 100
    }
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
    "segment_code": "_vwo_t.cm('eO','dom.click','#div')",
    "sections": {
        "1": {
            "path": "",
            "variations": {
                "1": "[]",
                "2": "[{\"js\":\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"changeCSS\\\",\\\"body > form:nth-of-type(1) > input:nth-of-type(3)\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"body > form:nth-of-type(1) > input:nth-of-type(3)\\\");\\nel.css({\\\"background-color\\\":\\\"rgba(206,66,66,1)\\\"});\",\"xpath\":\"BODY > H2:first-child + FORM > BR:first-child + INPUT + BR + BR + INPUT + BR + BR + INPUT\"},{\"js\":\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"changeCSS\\\",\\\"body > p:nth-of-type(1)\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"body > p:nth-of-type(1)\\\");\\nel.css({\\\"background-color\\\":\\\"#ff56ff\\\"});\",\"xpath\":\"BODY > H2:first-child + FORM + P\"},{\"js\":\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"content\\\",\\\"#submit-text\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"#submit-text\\\");\\nvwo_$(\\\"#submit-text\\\").each(function(){\\nvwo_$(this).append(\\\"SUBMIT-TEXT If you click the \\\\\\\"Submit\\\\\\\" button, the form-data will be sent to a page called \\\\\\\"\\\/action_page.php\\\\\\\".\\\");\\nvwo_$(this).nonEmptyContents().eq(0).replaceWith(\\\"<span style=\\\\\\\"font-size: 10px;\\\\\\\"><span style=\\\\\\\"font-size: 17px;\\\\\\\"><\\\/span><\\\/span>\\\")\\n});\\n\\\/*vwo_debug log(\\\"changeCSS\\\",\\\"#submit-text\\\"); vwo_debug*\\\/;\\nel.css({\\\"color\\\":\\\"rgba(219,46,46,1)\\\",\\\"border-top-color\\\":\\\"#56ffff\\\"});\",\"xpath\":\"#submit-text\"}]"
            },
            "segment": {
                "1": 1,
                "2": 1
            }
        }
    },
    "combs": {
        "1": 0.5,
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
        }
    }
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
    "segment_code": "((_vwo_s().f_in(_vwo_s().U(), 'http:\/\/local.wingify.com\/selfHosted\/')) && _vwo_s().f_in(_vwo_s().jv('isPollingEnabled'), 'true')) && _vwo_t.cm('eO','dom.click','#div')",
    "sections": {
        "1": {
            "path": "",
            "variations": {
                "1": "[]",
                "2": "[{\"js\":\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"changeCSS\\\",\\\"body > form:nth-of-type(1) > input:nth-of-type(3)\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"body > form:nth-of-type(1) > input:nth-of-type(3)\\\");\\nel.css({\\\"color\\\":\\\"#ffffff\\\",\\\"background-color\\\":\\\"#ff5656\\\"});\",\"xpath\":\"BODY > H2:first-child + FORM > BR:first-child + INPUT + BR + BR + INPUT + BR + BR + INPUT\"},{\"js\":\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"changeCSS moveResize\\\",\\\"#firstname\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"#firstname\\\");\\nel.css({\\\"left\\\":\\\"300px\\\",\\\"top\\\":\\\"0px\\\",\\\"height\\\":\\\"26px\\\",\\\"width\\\":\\\"125px\\\",\\\"zIndex\\\":\\\"auto\\\",\\\"position\\\":\\\"relative\\\",\\\"display\\\":\\\"inline-block\\\",\\\"font-size\\\":\\\"20px\\\",\\\"font-weight\\\":\\\"800\\\",\\\"color\\\":\\\"#007f7f\\\",\\\"word-spacing\\\":\\\"1px\\\",\\\"background-color\\\":\\\"#ffffaa\\\",\\\"border-top-width\\\":\\\"12px\\\",\\\"border-top-color\\\":\\\"#ff56ff\\\",\\\"border-right-color\\\":\\\"#000000\\\",\\\"border-bottom-color\\\":\\\"#000000\\\",\\\"border-left-color\\\":\\\"#000000\\\"});\",\"xpath\":\"#firstname\"},{\"js\":\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"content\\\",\\\"#lorem\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"#lorem\\\");\\nvwo_$(\\\"#lorem\\\").each(function(){\\nvwo_$(this).nonEmptyContents().eq(0).replaceWith(\\\"<em><span style=\\\\\\\"font-size: 30px;\\\\\\\">LOREM What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not\\\\n<\\\/span> only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \\\\\\\"de Finibus Bonorum et Malorum\\\\\\\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \\\\\\\"Lorem ipsum dolor sit amet..\\\\\\\", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \\\\\\\"de Finibus Bonorum et Malorum\\\\\\\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\\\\n<\\\/em>\\\")\\n});\",\"xpath\":\"#lorem\"}]"
            },
            "segment": {
                "1": 1,
                "2": 1
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
            "url": "body > form > input[type=\"text\"]:nth-child(2)",
            "type": "CLICK_ELEMENT"
        }
    }
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
    "segment_code": "(_vwo_s().f_e(_vwo_s().b(),'Chrome')) && _vwo_t.cm('tS','dom.load',['>',5])",
    "sections": {
        "1": {
            "path": "",
            "variations": {
                "1": "[]",
                "2": "[{\"js\":\"var ctx=vwo_$(x),el;\\n\\\/*vwo_debug log(\\\"changeCSS\\\",\\\"body > form:nth-of-type(1) > input:nth-of-type(3)\\\"); vwo_debug*\\\/;\\nel=vwo_$(\\\"body > form:nth-of-type(1) > input:nth-of-type(3)\\\");\\nel.css({\\\"color\\\":\\\"#ffffff\\\",\\\"font-style\\\":\\\"normal\\\",\\\"background-color\\\":\\\"#ff5656\\\"});\",\"xpath\":\"body > form:nth-of-type(1) > input:nth-of-type(3)\"}]"
            },
            "segment": {
                "1": 1,
                "2": 1
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
            "url": ".div",
            "type": "CLICK_ELEMENT"
        },
        "200": {
            "urlRegex": "^http\\:\\\/\\\/local\\.wingify\\.com\\\/selfHosted\\\/?(?:[\\?#].*)?$",
            "excludeUrl": "",
            "type": "CUSTOM_GOAL"
        }
    }
};
var _vwo_style = document.getElementById('_vis_opt_path_hides')
  , _vwo_css = '{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}';
var _vwo_text = "BODY > H2:first-child + FORM > BR:first-child + INPUT + BR + BR + INPUT + BR + BR + INPUT,BODY > H2:first-child + FORM + P,#submit-text,#firstname,#lorem,body > form:nth-of-type(1) > input:nth-of-type(3)" + _vwo_css;
if (_vwo_style) {
    if (_vwo_style.styleSheet) {
        _vwo_style.styleSheet.cssText = _vwo_text;
    } else {
        var _vwo_textnode = document.createTextNode(_vwo_text);
        _vwo_style.appendChild(_vwo_textnode);
        _vwo_style.removeChild(_vwo_style.childNodes[0]);
    }
}
window.VWO.data.vi = {
    "os": "MacOS",
    "dt": "desktop",
    "br": "Chrome",
    "de": "Other"
};

var _vwo_cookieDomain = 'wingify.com'
  , _vwo_uuid = 'D3B9AFD06D8B16229983CED67C34AD803'
  , _vis_opt_file = _vwo_code.use_existing_jquery() ? 'track/vanj-7e6086e7c2fc330b36c839b9b27be9bd.js' : 'track/va-7e6086e7c2fc330b36c839b9b27be9bd.js'
  , _vwo_library_timer = setTimeout('_vwo_code.finish()', _vwo_code.library_tolerance())
  , _vis_opt_lib = (typeof _vis_opt_lib == 'undefined') ? '//dev.visualwebsiteoptimizer.com/' + _vis_opt_file : _vis_opt_lib;
_vwo_code.load(_vis_opt_lib);
_vwo_code.load(window.VWO.trackLibPath || '//dev.visualwebsiteoptimizer.com/track/track-7e6086e7c2fc330b36c839b9b27be9bd.js');
_vwo_opa_cb = '247f1bea7904db62fac390e51c357ca6';
_vwo_worker_cb = '68f4c079a93008e8e04f81f6476e5cc4';
window._vwo_pa = window._vwo_pa || {};
window._vwo_pa.sId = 'FF82CC0D6FCCF28A';
_vwo_code.load(window.VWO.opaLibPath || '//dev.visualwebsiteoptimizer.com/analysis/opa-247f1bea7904db62fac390e51c357ca6.js');
window.VWO.data.as = "rec2.visualwebsiteoptimizer.com";
;var _vwo_survey_cb = '8b9e7e4680b03c34e83b9f98717137eb'
  , _vwo_surveySettings = {
    "97066": {
        "logo": null,
        "exps": [46],
        "id": 97066,
        "attrs": {
            "class": "bottom-right"
        },
        "trigger": {
            "g": "(_vwo_u.cm('eO','scroll',['t',200])&&_vwo_u.cm('tS','dom.load',['>',5]))||_vwo_u.cm('eO','dom.mousedown','lorem')",
            "46": "_vwo_u.cm('eO', 'campaign.rH', [46, [-1]])"
        },
        "version": 0.4,
        "cb": "c254de1a21ec0cdcea94b6615aa1e31b",
        "theme": "killbill",
        "hideLogo": 0
    }
};
_vwo_code.load(window.VWO.opsLibPath || '//dev.visualwebsiteoptimizer.com/va_survey-1b9dca9d5d0c5b6499f6b8b6cfea011b.js');
