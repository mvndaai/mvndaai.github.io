export default {
    view: _ => m('.columns', [
        m('.column', [
            m('h1.title', 'Personal'),
            m('h2.subtitle', 'This is a list of things I want to keep just for me'),
            m('.columns', [
                m('.column', [
                    m('a.subtitle','School'),
                    m('p',[
                        'Vanilla Javascript version of ',
                        m('a[href="/projects/school/battleship"]', 'BattleShip'), '.'
                    ]),
                ]),
            ]),
        ]),
    ])
};
