export default {
    view: _ => m('#resume',[
        // https://stackoverflow.com/questions/17784037/how-to-display-pdf-file-in-html
        // m('embed[src="/jason_mavandi_resume.pdf"]'),
        m('iframe[src="http://docs.google.com/gview?url=http://mvndaai.github.io/jason_mavandi_resume.pdf&embedded=true"][frameborder="0"]')
    ])
};