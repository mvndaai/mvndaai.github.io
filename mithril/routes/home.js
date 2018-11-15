export default {
    view: _ => m('.columns', [
        m('.column', [
            m('h1.title', 'Spotlight'),
            m('.columns', [
                m('.column', [
                    m('a.subtitle-link[href="https://github.com/mvndaai/testrail-promise"][target="_blank"]','Testrail Promise'),
                    m('p','Post test results to Testrail using NodeJS through promises.'),
                ]),
                m('.column', [
                    m('a..subtitle-link[href="/unity/space-shooter/"][target="_blank"]', 'Space Shooter'),
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
                    m('td', m('a[href=https://docs.google.com/presentation/d/1aRk_HT2aSaezLXaBHRjgheH02IacW94UBlejZCcnRWU/edit?usp=sharing][target=_blank]', 'WebAuthn'))
                ]),
                m('tr', [
                    m('td', m('a[href=http://slides.com/mvndaai/why-use-mithriljs/live#/][target=_blank]', 'MithrilJS'))
                ])
            ])
        ]),
    ])
};
