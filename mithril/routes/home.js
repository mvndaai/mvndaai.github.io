export default {
    view: _ => m('.columns', [
        m('.column', [
            m('h1.title', 'Spotlight'),
            m('.columns', [
                m('.column', [
                    m('a.subtitle-link[href="https://mvndaai.com/go_wasm_tools/"][target="_blank"][rel="noopener"]','Go WASM Tools'),
                    m('p','Tools that I use occassionally made using Go and WASM.'),
                ]),
                m('.column', [
                    m('a.subtitle-link[href="https://godoc.org/github.com/mvndaai/ctxerr"][target="_blank"][rel="noopener"]','ctxerr'),
                    m('p','Go package to help with HTTP errors.'),
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
        m('.column'),
    ])
};
