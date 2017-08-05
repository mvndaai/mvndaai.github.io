export default {
    view: _ => m('#bio.content.columns', [
        m('img.column [src="/images/professional.jpg"][aria-hidden="true"]'),
        m('.column ', m('p', [
            'My name is Jason Mavandi. My name on the Internet is ',
            m('strong', 'mvndaai '),
            'which is just my last name with the consonants before the vowels. ',
            'I am from southern California, but moved to Utah for school and never left. ',
            'I eventually graduated Cum Laude from Utah Valley University. ',
            'I am happily married. ',
            'I work as a Software Engineer and, in general, love developing. '
        ]))
    ])
};
