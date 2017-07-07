export default {
    view: (vnode) => [
        m('','This will be a header'),
        vnode.children,
        m('', 'This could be a footer'),
    ]
};