export default {
    view: (vnode) => m('', [
        m('','This will be a header'),
        vnode.children
    ])
};