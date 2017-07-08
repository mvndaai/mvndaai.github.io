import frame from '/mithril/components/frame.js';

import home from '/mithril/routes/home.js';
import resume from '/mithril/routes/resume.js';
import bio from '/mithril/routes/bio.js';

m.route(document.body, "/", {
  '/': {view: _ => m(frame, m(home))},
  '/resume': {view: _ => m(frame, m(resume))},
  '/bio': {view: _ => m(frame, m(bio))},
});