export default {
    view: _ => m('.columns', [
        m('.column', [
            
            // m('.columns', [
            //     m('.column.is-full', [
            //         m('a.subtitle-link[href="https://jojorgensenvictimlesscrimechallenge.com/"][target="_blank"][rel="noopener"]','#JoJorgensenVictimlessCrimeChallenge'),
            //         m('p',"I made a challenge to get Jo's name out there."),
            //     ]),
            // ]),
            m('h1.title', 'Spotlight'),
            m('.columns', [
                m('.column', [
                    m('a.subtitle-link[href="https://godoc.org/github.com/mvndaai/ctxerr"][target="_blank"][rel="noopener"]','ctxerr'),
                    m('p','Go package to help with HTTP errors.'),
                ]),
                m('.column', [
                    m('a.subtitle-link[href="https://mvndaai.com/go_wasm_tools/"][target="_blank"][rel="noopener"]','Go WASM Tools'),
                    m('p','Tools that I use occassionally made using Go and WASM.'),
                ]),
                
            ]),
            m('h1.title', 'Fun Projects'),
            m('.columns', [
                
                m('.column', [
                    m('a.subtitle-link[href="https://mvndaai.com/kaprekar_wasm/"][target="_blank"][rel="noopener"]',"Kaprekar's Constant"),
                    m('p','Find the steps to the constant.'),
                ]),
                m('.column', [
                    m('a.subtitle-link[href="https://mvndaai.com/css_variables/"][target="_blank"][rel="noopener"]', 'CSS Variables'),
                    m('p','Dynamic theming built into all browsers.'),
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
