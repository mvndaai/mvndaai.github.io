export default {
    view: (vnode) => [
        m(header),
        m('#content', vnode.children),
        m(footer)
    ]
};

var menuOpen = false;
window.addEventListener("keydown", e => {
    if(menuOpen && e.code === 'Escape') {menuOpen = false; m.redraw();}
});

var active = 'is-active';
let header = {
    oninit: (vnode) => vnode.state.path = m.route.get(),
    menuOpen: false,
    view: (vnode) => m('nav.navbar', [
        m('.navbar-brand', [
            m("a.navbar-item[href=/]", {oncreate: m.route.link}, 'mvndaai'),
            m('.navbar-burger.burger[data-target="navMenuExample"]', {
                onclick: _ => menuOpen = !menuOpen,
                class: menuOpen ? active : ''
            }, [m('span'), m('span'), m('span')])
        ]),
        m('#navMenuExample.navbar-menu', {class: menuOpen ? active : ''}, [
            m('.navbar-start', [
                m('a.navbar-item[href=/resume]', {oncreate: m.route.link, class: vnode.state.path === '/resume' ? active : ''}, 'Resume'),
                m('a.navbar-item[href=/bio]', {oncreate: m.route.link, class: vnode.state.path === '/bio' ? active : ''}, 'Bio'),
            ]),
        ]),
    ])
};

// Sticky Footer Help
// https://css-tricks.com/couple-takes-sticky-footer/
let footer = {
    view: _ => m('footer.footer', m('.container', m('.content.has-text-centered', [
        m('.social',[
            m('a[href="https://github.com/mvndaai"][target="_blank"]', m('i.fa.fa-github.[aria-hidden="true"]')),
            m('a[href="http://www.linkedin.com/pub/jason-mavandi/22/655/b97"][target="_blank"]', m('i.fa.fa-linkedin[aria-hidden="true"]')),
            m('a[href="http://www.facebook.com/mvndaai"][target="_blank"]', m('i.fa.fa-facebook-official[aria-hidden="true"]')),
            m('a[href="https://twitter.com/mvndaai"][target="_blank"]', m('i.fa.fa-twitter[aria-hidden="true"]')),
            m('a[href="https://plus.google.com/u/0/+JasonMavandi"][target="_blank"]', m('i.fa.fa-google-plus[aria-hidden="true"]')),
            m('a[href="https://www.instagram.com/mvndaai/"][target="_blank"]', m('i.fa.fa-instagram[aria-hidden="true"]')),
        ])
    ])))
};