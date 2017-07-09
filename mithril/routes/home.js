export default {
    view: _ => m('.columns', [
        m('.column', [
            m('h1.title', 'Spotlight'),
            m('p','These are things that I have recently which I think are notable:'),
            m('.columns.space', [
                m('.column', [
                    m('a.subtitle[href="https://github.com/mvndaai/testrail-promise"][target="_blank"]','Testrail Promise'),
                    m('p','Post test results to Testrail using NodeJS through promises.'),
                ]),
                m('.column', [
                    m('a.subtitle[href="/unity/space-shooter/"][target="_blank"]','Space Shooter'),
                    m('p','A game developed in Unity following their tutoria.'),
                ])
            ]),

        ]),
    ])
};