import frame from '/mithril/components/frame.js';

import home from '/mithril/routes/home.js';
import bio from '/mithril/routes/bio.js';

m.route(document.body, "/", {
  '/': {view: _ => m(frame, m(home))},
  '/bio': {view: _ => m(frame, m(bio))},
});