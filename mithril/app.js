import frame from '/mithril/components/frame.js';
import home from '/mithril/routes/home.js';

m.route(document.body, "/home", {
  '/home': {view: _ => m(frame, m(home))},
});