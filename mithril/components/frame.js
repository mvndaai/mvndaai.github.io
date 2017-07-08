export default {
    view: (vnode) => [
        m(header),
        m('#content', vnode.children),
        // m(footer)
    ]
};

let githubURL = 'https://github.com/mvndaai';

let header = {
    view: () => m('nav.navbar', [
        m('.navbar-brand', [
            m("a.navbar-item[href=/]", {oncreate: m.route.link}, 'mvndaai'),
            m("a.navbar-item", {href: githubURL, target:"_blank"},
                m('span.icon', m('i.fa.fa-github'))),
        ]),
        // m('navbar-menu',[
        //     m('a.navbar-item[href=/bio]', {oncreate: m.route.link}, 'Bio'),
        // ]),
    ])
};

// TODO make a sticky footer
// https://css-tricks.com/couple-takes-sticky-footer/
let footer = {
    view: _ => m('footer.footer', m('.container', m('.content.has-text-centered', [
        m('p','This is a footer')
    ])))
};