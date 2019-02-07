import frame from '/mithril/components/frame.js';

import home from '/mithril/routes/home.js';
import resume from '/mithril/routes/resume.js';
import bio from '/mithril/routes/bio.js';
import jokes from '/mithril/routes/jokes.js';
import personal from '/mithril/routes/personal.js';

m.route(document.body, "/", {
  '/': {view: _ => m(frame, m(home))},
  '/resume': {view: _ => m(frame, m(resume))},
  '/bio': {view: _ => m(frame, m(bio))},
  '/jokes': {view: _ => m(frame, m(jokes))},
  '/personal': {view: _ => m(frame, m(personal))},
});
