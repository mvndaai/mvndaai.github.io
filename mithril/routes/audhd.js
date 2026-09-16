const questions = {
    ADHD: [
        {q: 'Do you prefer to eat one food for months and then one day it is disgusting?', name: 'Hyper Focus food'},
        'Do you drag your fingers on the wall?',
        'Do you prefer to not sit on a chair? Like a counter, the floor, or in a chair without legs on the groud.',
        {q: 'Do you overreact when you feel rejected?', name: 'RSD (Rejection Sensitivity Disphoria)'},
        {q: 'Do you buy everything for something you are excited about, then never want to touch it again after a few months?', name: 'Hyper Focus Hobby'},
        {q: 'Do things left in the same place for more than a few days disapper until something points it out?', name: "Object Permanence"},
        'Do you forget that friends exist?',
        'When you are at work does your relationship stay the same or decrease over time?',
        'Do you listen to audio faster than 1.0x?',
        'Do you need to know the answer to questions or is it okay to just move on?',
        {q: 'Do you use captions when watching TV?' }, //TODO remember name
        {q: 'Do you say "What?" but then answer before the person has responded?', name: 'Delayed Audio Processing'},
        'Is there a song always playing in the back of your head?',
        'Do you share similar stories when someone is telling you something in order to emphasize? Some people might ask why you try "one up" their story.',
    ],
    Autism: [
        'Can you hear electricity?',
        'How many steps is laundry? Is loading the washer 1 or more? Folding?',
        'Do shirt tags or seams bother you?',
        'Do you treat everyone the same even if they are in an authority position, like your boss?',
        'Are you precise with your words and need people to understand your intent?',
        'Do you wear noise cancelling in loud situations?',
        'Do you need to check what you can order at a restaurant you go?',
        'Do you have something that you love so much some people think it is your personality? Trains? Bugs?',
        'Do you think "small talk" is unncessary?',
        'Do you want things changed not just for you but to make the world better for the next person?',
        {q: 'Is it hard to know what your feeling are?', name: 'Alexithymia'},
        'Do you have watch people and try to figure out the rules before jumping in?',
        'Do you practice conversations in andvance?',
        'Is it easier to quote something to express your feelings than to use your own words?',

    ],
    'AudHD (Either)': [
        'Do you have light sensitivity?'
    ]
};

export default {
    view: (vnode) => m('.columns', [
        m('.column', [
            m('h1.title', 'AuDHD Questions'),
            m('h2.subtitle', "These are the questions I ask about ADHD or Autism. Some you wouldn't expect."),
            Object.entries(questions).map(([k, vs]) => {
                return m('fieldset', {style:'margin: 10px 0; padding: 5px 10px;'}, [
                    m('legend', k),
                    vs.map((v, i) => {
                        if (typeof v === 'string') {
                            v = {q: v};
                        }
                        return m('', [
                            m('label', [
                                m('input', {type:'checkbox', style:"margin-right: 10px;"}, ),
                                v.q,
                                v.name && m('em', ' ' + v.name),
                            ]),
                        ]);
                    })
                ]);
            }),
            m('', [
                'For more information check out my ',
                m('a', {href: 'https://mvndaai.blogspot.com/2024/11/audhd.html'}, 'blog post'),
                '.',
            ])
        ]),

    ]),
};

