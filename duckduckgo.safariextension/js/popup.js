/*
   Copyright (C) 2012, 2014 DuckDuckGo, Inc.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

*/

var ICON_MAXIMIZE = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIwIDIwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGcgaWQ9Im1heGltaXplIj48cGF0aCBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojQUFBQUFBOyIgZD0iTTEwLDBjNS41LDAsMTAsNC41LDEwLDEwYzAsNS41LTQuNSwxMC0xMCwxMFMwLDE1LjUsMCwxMEMwLDQuNSw0LjUsMCwxMCwweiIvPjxnPjxnPjxwb2x5Z29uIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNGRkZGRkY7IiBwb2ludHM9IjE0LDkgMTEsOSAxMSw2IDksNiA5LDkgNiw5IDYsMTEgOSwxMSA5LDE0IDExLDE0IDExLDExIDE0LDExICIvPjwvZz48L2c+PC9nPjwvc3ZnPg==";

var ICON_MINIMIZE = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIwIDIwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGcgaWQ9Im1pbmltaXplIj48cGF0aCBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojQUFBQUFBOyIgZD0iTTEwLDBjNS41LDAsMTAsNC41LDEwLDEwYzAsNS41LTQuNSwxMC0xMCwxMFMwLDE1LjUsMCwxMEMwLDQuNSw0LjUsMCwxMCwweiIvPjxwYXRoIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNGRkZGRkY7IiBkPSJNMTQsOXYySDZWOUgxNHoiLz48L2c+PC9zdmc+"

var BTN_NORMAL = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE2IDE2IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzYxQTVEQSIgZD0iTTE0LDE2SDJjLTEuMSwwLTItMC45LTItMlYyYzAtMS4xLDAuOS0yLDItMmgxMmMxLjEsMCwyLDAuOSwyLDJ2MTJDMTYsMTUuMSwxNS4xLDE2LDE0LDE2eiIvPjxwb2x5Z29uIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjEyLDcgOSw3IDksNCA3LDQgNyw3IDQsNyA0LDkgNyw5IDcsMTIgOSwxMiA5LDkgMTIsOSAiLz48L3N2Zz4=";

var BTN_HOVER = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE2IDE2IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzQ0OTVENCIgZD0iTTE0LDE2SDJjLTEuMSwwLTItMC45LTItMlYyYzAtMS4xLDAuOS0yLDItMmgxMmMxLjEsMCwyLDAuOSwyLDJ2MTJDMTYsMTUuMSwxNS4xLDE2LDE0LDE2eiIvPjxwb2x5Z29uIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjEyLDcgOSw3IDksNCA3LDQgNyw3IDQsNyA0LDkgNyw5IDcsMTIgOSwxMiA5LDkgMTIsOSAiLz48L3N2Zz4=";

if (localStorage['advanced_options'] == undefined){
  localStorage['advanced_options'] = 'true';
}

if (localStorage['zeroclickinfo'] == undefined){
  localStorage['zeroclickinfo'] = 'true';
}

if (localStorage['locationbar'] == undefined){
  localStorage['locationbar'] = 'true';
}



if (localStorage['advanced_options'] !== 'true') {
  document.getElementById('icon_advanced').src = ICON_MINIMIZE;
  document.getElementById('advanced').style.display = 'none';
  document.getElementById('icon_advanced').className = 'minimized';
  safari.extension.popovers[0].height = 60;
}


window.addEventListener("load", function() {
  settings_check();
  defaults_check();

  if (localStorage['last_search'] != '' && safari.extension.settings.remember_last_search) {
    document.getElementById('search_form_input_homepage').value = localStorage['last_search'];
    document.getElementById("search_form_input_clear").style.display = 'inline-block';
  } else {
   search_input_clear();
  }

  // handling hover behaviour of images
  var images = document.querySelectorAll('li img');
  for(var i = 0; i < images.length; i++) {
    images[i].onmouseover = function() {
        this.src = BTN_HOVER;
    }

    images[i].onmouseout = function() {
        this.src = BTN_NORMAL;
    }
  }

  document.getElementById("search_form_input_homepage").onkeydown = function(){
      document.getElementById("search_form_input_clear").style.display = 'inline-block';
      document.getElementById("search_button_homepage").className = 'selected';
      this.style.color = '#000000';
  };
  document.getElementById("search_form_input_homepage").onkeyup = function(){
    if (this.value == '') {
      this.style.color = '#999999';
      search_input_clear();
    }
  };

  document.getElementById('adv_ducky').onclick = ducky_check;
  document.getElementById('adv_locationbar').onclick = locationbar_check;
  document.getElementById('adv_remember_last_search').onclick = remember_last_search_check;
  document.getElementById('adv_zeroclick').onclick = zeroclickinfo_check;



  document.getElementById('bang_w').onclick = function(){
    add_bang('!w');
  }
  document.getElementById('bang_bi').onclick = function(){
    add_bang('!bi');
  }
  document.getElementById('bang_a').onclick = function(){
    add_bang('!a');
  }
  document.getElementById('bang_gi').onclick = function(){
    add_bang('!gi');
  }
  document.getElementById('bang_n').onclick = function(){
    add_bang('!n');
  }
  document.getElementById('bang_yt').onclick = function(){
    add_bang('!yt');
  }
  document.getElementById('bang_m').onclick = function(){
    add_bang('!m');
  }

  document.getElementById("search_form_input_clear").onclick = function(){
    search_input_clear();
  };

  document.getElementById('search_form_input_homepage').focus();
  // https://developer.mozilla.org/en-US/docs/Web/API/Input.select
  document.getElementById('search_form_input_homepage').setSelectionRange(0, 9999);
});


function search(){
  var input = document.getElementById("search_form_input_homepage").value;

  if (safari.extension.settings.remember_last_search) {
    localStorage['last_search'] = input;
  } else {
    search_input_clear();
  }

  if (safari.extension.settings.dev) console.log('remember_last_search:', safari.extension.settings.remember_last_search);

  if (document.getElementById('adv_ducky').checked === true) {
    input = "\\" + input;
  }

  var special = '';

  if (safari.application.activeBrowserWindow.activeTab.url === undefined ||
      safari.application.activeBrowserWindow.activeTab.url === '') {
    safari.application.activeBrowserWindow.activeTab.url = "https://duckduckgo.com/?q="+encodeURIComponent(input)+special;
  } else {
    openTab("https://duckduckgo.com/?q="+encodeURIComponent(input)+special);
 }

  var search = document.getElementById("search_form_input_homepage");

  safari.extension.popovers[0].hide();
  return false;
}

document.getElementById('icon_advanced').onclick = function(){
  if (this.className == 'minimized') {
    this.src = ICON_MINIMIZE;

    document.getElementById('advanced').style.display = 'block';
    this.className = 'maximized';
    safari.extension.popovers[0].height = 170;
  } else {
    this.src = ICON_MAXIMIZE;

    document.getElementById('advanced').style.display = 'none';
    this.className = 'minimized';
    safari.extension.popovers[0].height = 60;
  }
  localStorage['advanced_options'] = (document.getElementById('advanced').style.display === 'block');
  document.getElementById('search_form_input_homepage').focus();
}

function add_bang(bang) {
  var inp = document.getElementById('search_form_input_homepage');

  var bang_regex = /\!\w+/;

  document.getElementById("search_form_input_clear").style.display= 'inline-block';
  document.getElementById("search_button_homepage").className = 'selected';

  if (inp.value === '') {
    inp.style.color = '#000';
    inp.value = bang + ' ';
    inp.focus();
  } else {
    var found_bangs = bang_regex.exec(inp.value);
    if (found_bangs !== null) {
        inp.value = inp.value.replace(found_bangs[0], bang);
        inp.focus();
    } else {
        inp.value += bang;
        search();
    }
  }
}

function ducky_check(){
  localStorage['ducky'] = document.getElementById('adv_ducky').checked;
}


function zeroclickinfo_check(){
  localStorage['zeroclickinfo'] = document.getElementById('adv_zeroclick').checked;
  safari.extension.settings.zeroclickinfo =
    ( document.getElementById('adv_zeroclick').checked === true );
}

function remember_last_search_check(){
  localStorage['remember_last_search'] = document.getElementById('adv_remember_last_search').checked;
  safari.extension.settings.remember_last_search =
    ( document.getElementById('adv_remember_last_search').checked === true );
}

function locationbar_check(){
  localStorage['locationbar'] = document.getElementById('adv_locationbar').checked;
  safari.extension.settings.ddg_locationbar =
    ( document.getElementById('adv_locationbar').checked === true );

}

function settings_check() {

  document.getElementById('adv_zeroclick').checked = safari.extension.settings.zeroclickinfo;
  if (safari.extension.settings.zeroclickinfo)
    localStorage['zeroclickinfo'] = 'true';
  else
    localStorage['zeroclickinfo'] = 'false';

  document.getElementById('adv_locationbar').checked =
    safari.extension.settings.ddg_locationbar;
  if (safari.extension.settings.ddg_locationbar)
    localStorage['locationbar'] = 'true';
  else
    localStorage['locationbar'] = 'false';


  document.getElementById('adv_remember_last_search').checked = safari.extension.settings.remember_last_search;

  if (safari.extension.settings.remember_last_search)
    localStorage['remember_last_search'] = 'true';
  else
    localStorage['remember_last_search'] = 'false';

  if (!safari.extension.settings.remember_last_search)
      localStorage['last_search'] = '';

}

function defaults_check(){
  if (localStorage['ducky'] === 'true') {
    document.getElementById('adv_ducky').checked = true;
  }

  if (localStorage['zeroclickinfo'] === 'true') {
    document.getElementById('adv_zeroclick').checked = true;
  }

  if (localStorage['locationbar'] === 'true') {
    document.getElementById('adv_locationbar').checked = true;
  }


}

function openTab(url) {
  var tab = safari.application.activeBrowserWindow.openTab();
  tab.url = url;
  tab.activate();

}

function search_input_clear() {
    document.getElementById('search_form_input_homepage').value = '';
    document.getElementById("search_form_input_clear").style.display= 'none';
    document.getElementById('search_form_input_homepage').focus();
    document.getElementById("search_button_homepage").className = '';
}
