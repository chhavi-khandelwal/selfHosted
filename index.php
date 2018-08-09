<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript">
      window.chhavi = 1;
      window.chhavi = window.chhavi + 7;

      // setTimeout(function () {console.log('trigger change')},10000);
      
    </script>
    <!-- createcookie fn
    till retention cookie should be deleted
    pc_custom = 0, not bucketed; refresh pc_custom = 100, still notbucketed till rp; after retention del cookie; bucketed and tracking starts
    -->
    <script type="text/javascript">
     window.VWO = window.VWO || [];
           window.VWO.data = window.VWO.data || {};
           window.VWO.data.name = 'Chhavi';
window._vwo_pc_custom = {t:100,a:100};
// window._vis_opt_cookieDays = 45;
        // window.VWO.FUNNEL_EXPIRY = 1/(24*30);
        window.VWO.TRACK_SESSION_COOKIE_EXPIRY_CUSTOM = 1*30/(24*60*3*20); //60sec
        VWO.TRACK_GLOBAL_COOKIE_EXPIRY_CUSTOM = 1*90/(24*60*3*20);
        // // VWO.wc = 1/(24*60*3);
        window.VWO.SESSION_TIMER_EXPIRE = 30000; //60sec

            // window._vwo_surveyQuestionsUrl = ‘//local.wingify.com/Surveys/lib/question.json’;
            //window._vis_opt_url = “http://local.wingify.com/meghaproject/“;
           window.VWO.opaLibPath = 'http://local.wingify.com/nls-jslib/dist/opa.js';
            // window.VWO.opsLibPath = 'http://local.wingify.com/on-page-surveys-jslib/dist/va_survey.unminified.js';
            window.VWO.trackLibPath = 'http://local.wingify.com/jslib2.0/dist/track.unminified.js';
            //console.log('123');
           window._vis_opt_lib = 'http://local.wingify.com/jslib2.0/dist/va.unminified.js';
    </script>
    <!-- Start Visual Website Optimizer Asynchronous Code -->
    <script type='text/javascript'>



            var account_id = 230507,
                settings_tolerance = 2000,
                library_tolerance = 2500,
                use_existing_jquery = false,
                /* DO NOT EDIT BELOW THIS LINE */
                f = false, d = document;
                /*if(location.search) {
                  library_tolerance = 2;
                  //settings_tolerance = 2;
                }*/
                var _vwo_code = (function () {
          
            return {
                use_existing_jquery: function () {
                    return use_existing_jquery;
                }, library_tolerance: function () {
                    return library_tolerance;
                }, finish: function () {
                    if (!f) {
                        f = true;
                        var a = d.getElementById('_vis_opt_path_hides');
                        if (a) a.parentNode.removeChild(a);
                    }
                }, finished: function () {
                    return f;
                }, load: function (a) {
                    var b = d.createElement('script');
                    b.src = a;
                    b.type = 'text/javascript';
                    b.innerText;
                    b.onerror = function () {
                        _vwo_code.finish();
                    };
                    d.getElementsByTagName('head')[0].appendChild(b);
                }, init: function () {
                    settings_timer = setTimeout('_vwo_code.finish()', settings_tolerance);
                    var a = d.createElement('style'),
                        b = 'body{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}',
                        h = d.getElementsByTagName('head')[0];
                    a.setAttribute('id', '_vis_opt_path_hides');
                    a.setAttribute('type', 'text/css');
                    if (a.styleSheet) a.styleSheet.cssText = b; else a.appendChild(d.createTextNode(b));
                    h.appendChild(a);
                    this.load('//dev.visualwebsiteoptimizer.com/j.php?a=' + account_id + '&u=' + encodeURIComponent(d.URL) + '&r=' + Math.random());
                    // this.load('preview_debugger.js');
                    // this.load('j3.js');
                    return settings_timer;
                }
            };
        }());
        _vwo_settings_timer = _vwo_code.init();
    </script>
<!-- End Visual Website Optimizer Asynchronous Code -->
    <script type="text/javascript">
      window._vis_opt_queue = window._vis_opt_queue || [];
      window._vis_opt_queue.push(function() {_vis_opt_goal_conversion(200);
        });
    </script>

<script type="text/javascript">
  var getCookie = function (name) {

            var match = document.cookie.match(new RegExp('(?:^|;)\\s?' +
                name.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1') + '=(.*?)(?:;|$)', 'i'));
            var retval = match && decodeURIComponent(match[1]);

            // Trigger Event , params: cookieName, cookieValue
            // triggerEvent(CookiesEventEnum.GET_COOKIE, name, retval);
            return retval;
  }
  var isPollingEnabled = true;
  var convertGoal = function () {
    if (typeof _vwo_exp !== 'undefined')
      var current_vwo_experiment = 36;

            var current_vwo_variation = _vwo_exp[current_vwo_experiment].combination_chosen; //else ?

        var current_vwo_offline_revenue_goal_id = 1;

        if(typeof getCookie('_vwo_uuid')!=='undefined') var current_vwo_uuid = window._vwo_uuid;

        //push data to API

        var b = b || [];

        var img = new Image();

        img.src = 'https://dev.visualwebsiteoptimizer.com/c.gif?experiment_id=' + current_vwo_experiment + '&ACCOUNT_ID=230507&GOAL_ID=' + current_vwo_offline_revenue_goal_id + '&COMBINATION=' + current_vwo_variation + '&r=' + 1234 + '&rn=' + Math.random();

        if(typeof current_vwo_uuid!=='undefined' && current_vwo_uuid!=null) img.src+='&u='+current_vwo_uuid;        b.push(img);
        xhttp.open("GET", img.src, true);
        xhttp.send();
  }
</script>
  

  <script type="text/javascript">
    (function () {
      window._vwo_evq = window._vwo_evq || [];
      var _vwoOldPush = window._vwo_evq.push;
      var processEvent = function() {
          var eventData = arguments[0];
          if ((eventData[0] === 'rH') || (eventData[0] === 'vS')) {
              //debugger;
              console.log(eventData[0] + ' : ' + eventData[1] + ' (' + _vwo_exp[eventData[1]].type + ') ' + ':' + eventData[1] + '-' + eventData[2]);
          } else if(eventData[0] === 'uC') {
              console.log('url changed');
          } else if(eventData[0] === 'submit') {
              console.log(eventData[0]);
          }
      };
      for(var i = 0; i < window._vwo_evq.length; i++) {
          processEvent(window._vwo_evq[i]);
      }
      window._vwo_evq.push = function () {
          processEvent.apply(this, [].slice.call(arguments));
          _vwoOldPush.apply(window._vwo_evq, [].slice.call(arguments));
      };
    })();
  </script>
  </head>
  <body data-g="1">
    <p style="color:blue;margin-left:30px;" id="ppp">Hello Variation</p>

    <h2>HTML Forms</h2>
    <button type="button" id="test">ABC</button>

    <form action="checkout.html" name="first-form">
      First name:<br>
      <input type="text" name="firstname" value="Mickey" id="firstname" data-ck="Infin">
      <br>
      Last name:<br>
      <input type="text" name="lastname" value="Mouse" id="div">
      <br><br>
      <input type="submit" value="Submit">
    </form> 

    <!-- <p id="submit-text">SUBMIT-TEXT If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php".</p> -->

    <p style="font-size:40px;" id="lorem">LOREM What is Lorem Ipsum?
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

      Why do we use it?
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


      Where does it come from?
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
      <script>
          window.foo=2;
          // window.setTimeout(function () {
          //     window.foo = 1;
          // }, 5000);

          window.onhashchange = function (e) {
            if(e.newURL === 'http://local.wingify.com/selfHosted/#/b') {
              vwo_$('body').append('<button class="spa-btn">Change applied here</button>')
            }
          };

          window.onload = function () {

            document.getElementById('lorem').addEventListener('mousedown', function() {
               window.foo = 2;
              console.log('inside lorem click', window.foo);
            });
          console.log('Countdown Started *****************************************************');


          };

            setTimeout(function() {
              console.log(40000, document.cookie)
            }, 40000);
            setTimeout(function() {
              console.log(20000, document.cookie)
            }, 20000)
            setTimeout(function() {
              console.log(30000, document.cookie)
            }, 30000)


          var cookieSet = document.__lookupSetter__('cookie');
          var cookieGet = document.__lookupGetter__('cookie');
          Object.defineProperty(document, 'cookie', {
              set: function (h) {
                  console.log(arguments);
                  if (VWO && VWO._ && VWO._.commonCookieHandler.getMetaInfoByIndex(3)) {
                    console.log('*********************************************');
                  }
                  cookieSet.apply(document, arguments);
              },
              get: function () {
                  return cookieGet.apply(document, arguments);
              }
          });

      </script>
    <!-- <script type="text/javascript" src="delay.php?delay=5000&type=js"></script> -->
      
  </body>
</html>
