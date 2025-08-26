export default {
    view: (vnode) => m('.columns', [
        m('.column', [
            m('h1.title', 'History'),
            m('h2.subtitle', 'These are things I have made in my life with links to remember them'),
            m('ul', [
                m('li', m('a[href="/go_wasm_tools/"][target="_blank"]', 'Go WASM Tools')),
                m('li', m('a[href="/sudoku_hints"][target="_blank"]', 'Sudoku Solver')),
                m('li', m('a[href="/kaprekar_wasm/"][target="_blank"]', 'Kaprekar WASM')),
                m('li', m('a[href="/css_variables/"][target="_blank"]', 'CSS Variables')),
                m('li', m('a[href="/blog-title-generator"][target="_blank"]', 'Blog Title Generator')),
                m('li', m('a[href="/query-copier/?foo=bar&baz"][target="_blank"]', 'Query Copier')),
                m('li', m('a[href="https://knownanywhere.com"][target="_blank"]', 'Known Anywhere')),
                m('li', m('a[href="https://github.com/mvndaai/mvndaai.github.io"][target="_blank"]', 'Repo: mvndaai.com (this site)')),
                m('li', m('a[href=/jokes]', {oncreate: m.route.link}, 'Jokes'),),
                m('li', m('a[href="/projects/school/battleship"][target="_blank"]', 'Battle Ship')),
                m('li', m('a[href="https://github.com/mvndaai/testrail-promise"][target="_blank"]', 'Testrail Promise')),
                m('li', m('a[href="/projects/unity/space-shooter/"][target="_blank"]', 'Space Shooter')),
                m('li', m('a[href="https://github.com/mvndaai/bom_money"][target="_blank"]', 'BOM Money')),
                m('li', m('a[href="https://github.com/mvndaai/dev_lessons"][target="_blank"]', 'Dev Lessons')),
                m('li', m('a[href="https://github.com/mvndaai/qa_lessons"][target="_blank"]', 'QA Lessons')),
                //m('li', m('a[href="/jo-challenge"][target="_blank"]', 'Jo Challenge')),
            ]),
            m('ul', [
                m('h3', 'Go packages'),
                m('li', m('a[href="https://github.com/mvndaai/ctxerr"][target="_blank"]', 'ctxerr')),
                m('li', m('a[href="https://github.com/mvndaai/ctxerrhelper"][target="_blank"]', 'ctxerrhelper')),
                m('li', m('a[href="https://github.com/mvndaai/redact"][target="_blank"]', 'redact')),
                m('li', m('a[href="https://github.com/mvndaai/money"][target="_blank"]', 'money')),
            ]),
            m('ul', [
                m('h3', 'Presentations'),
                m('li', [
                        m('a[href=https://slides.com/mvndaai/go-errors][target=_blank][rel="noopener"]', 'Go Errors'),
                        m.trust('&nbsp;'),
                        m('a[href=https://www.youtube.com/watch?v=H1gwKI2V7YA][target=_blank][rel="noopener"][aria-label="go errors video"]', m('i.fab.fa-youtube[aria-hidden="true"]')),
                    ]),
                m('li', m('a[href=https://docs.google.com/presentation/d/1aRk_HT2aSaezLXaBHRjgheH02IacW94UBlejZCcnRWU/edit?usp=sharing][target=_blank][rel="noopener"]', 'WebAuthn')),
                m('li', m('a[href=http://slides.com/mvndaai/why-use-mithriljs/][target=_blank][rel="noopener"]', 'MithrilJS')),
            ]),
        ]),
    ])
};

