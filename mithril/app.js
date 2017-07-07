import frame from '/mithril/components/frame.js';

m.route(document.body, "/home", {
  "/home": m(frame,{view: _ => m('','Hello World') }),
  '/other': {view: _=> m('', 'Another page') }
});