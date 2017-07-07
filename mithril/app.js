m.route(document.body, "/home", {
  "/home": {view: _ => m('','Hello World') },
  '/other': {view: _=> m('', 'Another page') }
});