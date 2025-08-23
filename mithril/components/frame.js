import theme_changer from '/theme_changer/theme_changer.js';
theme_changer.start({
    ignoreKeys: [
        '--navbar-height',
        '--fa-size',
        '--footer-padding-size',
        '--content-padding',
        '--content-height'
    ],
});

export default {
    view: (vnode) => [
        m(header),
        m('#content', vnode.children),
        m(footer)
    ]
};

var active = 'is-active';
var menuOpen = false;
var closeMenu = _ => { if(menuOpen) {menuOpen = false; m.redraw();} };
window.addEventListener("keydown", e => { if(menuOpen && e.code === 'Escape') closeMenu(); });

let header = {
    oninit: (vnode) => vnode.state.path = m.route.get(),
    menuOpen: false,
    view: (vnode) => m('nav.navbar', [
        m('.navbar-brand', [
            m("a.navbar-item[href=/]", {oncreate: m.route.link, onclick: _ => closeMenu()}, 'mvndaai'),
            m('.navbar-burger.burger[data-target="navMenuExample"]', {
                onclick: _ => menuOpen = !menuOpen,
                class: menuOpen ? active : ''
            }, [m('span'), m('span'), m('span')])
        ]),
        m('#navMenuExample.navbar-menu', {class: menuOpen ? active : ''}, [
            m('.navbar-start', [
                m('a.navbar-item[href=/resume]', {class: vnode.state.path === '/resume' ? active : '', oncreate: m.route.link, onclick: _ => closeMenu()}, 'Resume'),
                m('a.navbar-item[href=/bio]', {class: vnode.state.path === '/bio' ? active : '', oncreate: m.route.link, onclick: _ => closeMenu()}, 'Bio'),
                m('a.navbar-item[href=/history]', {class: vnode.state.path === '/history' ? active : '', oncreate: m.route.link, onclick: _ => closeMenu()}, 'History'),
            ]),
        ]),
    ])
};

// Sticky Footer Help
// https://css-tricks.com/couple-takes-sticky-footer/
let footer = {
    view: _ => m('footer.footer', m('.container', m('.content.has-text-centered', [
        m('.social',[
            m('a[href="https://www.linkedin.com/in/mvndaai/"][aria-label="linkedin"][target="_blank"][rel="noopener"]', m('i.fab.fa-linkedin[aria-hidden="true"]')),
            m('a[href="https://github.com/mvndaai"][aria-label="github"][target="_blank"][rel="noopener"]', m('i.fab.fa-github[aria-hidden="true"]')),
            //m('a[href="https://keybase.io/mvndaai"][aria-label="keybase"][target="_blank"][rel="noopener"]', m('i.fab.fa-keybase[aria-hidden="true"]')),
            //m('a[href="http://www.facebook.com/mvndaai"][aria-label="facebook"][target="_blank"][rel="noopener"]', m('i.fab.fa-facebook[aria-hidden="true"]')),
            //m('a[href="https://twitter.com/mvndaai"][aria-label="twitter"][target="_blank"][rel="noopener"]', m('i.fab.fa-twitter[aria-hidden="true"]')),
            //m('a[href="https://www.instagram.com/mvndaai/"][aria-label="instagram"][target="_blank"][rel="noopener"]', m('i.fab.fa-instagram[aria-hidden="true"]')),
        ])
    ])))
};
