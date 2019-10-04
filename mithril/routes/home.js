export default {
    view: _ => m('.columns', [
        m('.column', [
            m('h1.title', 'Spotlight'),
            m('.columns', [
                m('.column', [
                    m('a.subtitle-link[href="https://godoc.org/github.com/mvndaai/ctxerr"][target="_blank"][rel="noopener"]','ctxerr'),
                    m('p','Go package to help with HTTP errors.'),
                ]),
                m('.column', [
                    m('a.subtitle-link[href="https://github.com/mvndaai/testrail-promise"][target="_blank"][rel="noopener"]','Testrail Promise'),
                    m('p','Post test results to Testrail using NodeJS through promises.'),
                ]),
                m('.column', [
                    m('a..subtitle-link[href="/projects/unity/space-shooter/"][target="_blank"][rel="noopener"]', 'Space Shooter'),
                    m('p',[
                        'A game developed in Unity following their ',
                        m('a[href="https://unity3d.com/learn/tutorials/projects/space-shooter-tutorial"]','tutorial'),
                        '.'
                    ]),
                ]),
            ]),
        ]),
        m('.column', [
            m('h1.title', 'Presentations'),
            m('table', [
                m('tr', [
                    m('td', [
                        m('a[href=https://slides.com/mvndaai/go-errors][target=_blank][rel="noopener"]', 'Go Errors'),
                        m.trust('&nbsp;'),
                        m('a[href=https://www.youtube.com/watch?v=H1gwKI2V7YA][target=_blank][rel="noopener"][aria-label="go errors video"]', m('i.fab.fa-youtube[aria-hidden="true"]')),
                    ]),
                ]),
                m('tr', [
                    m('td', m('a[href=https://docs.google.com/presentation/d/1aRk_HT2aSaezLXaBHRjgheH02IacW94UBlejZCcnRWU/edit?usp=sharing][target=_blank][rel="noopener"]', 'WebAuthn'))
                ]),
                m('tr', [
                    m('td', m('a[href=http://slides.com/mvndaai/why-use-mithriljs/][target=_blank][rel="noopener"]', 'MithrilJS'))
                ])
            ])
        ]),
    ])
};
