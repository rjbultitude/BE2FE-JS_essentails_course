// offline-plugin
import './app/lib/offline-plugin';

// components js
import Tabs from './components/tabs/Tabs';

import domOps from './dom-ops';

domOps();

// remove .no-js from html tag
document.querySelector('html').classList.remove('no-js');

// fetch & promise polyfills
require('es6-promise').polyfill();
require('whatwg-fetch');

// baseline app styles
require('./app/fonts/fonts.css');
require('./app/app.css');

// components styles
require.context('./components/', true, /\.css$/);

// component js
const initializeTabs = () => {
  const tabs = document.getElementsByClassName('tabs');
  for (let i = 0; i < tabs.length; i++) {
    new Tabs({ el: tabs[i] });
  }
};

initializeTabs();
