import qa from '/mithril/routes/jokes/qa.js';
import kk from '/mithril/routes/jokes/knock-knock.js';

var alljokes = []
  .concat(qa.map(v => { v.type = 'qa'; return v; }))
  .concat(kk.map(v => { v.type = 'kk'; return v; }))
;

const questionAnswerFormat = j => [
  m('p',j.q), m('.spacer'),
  m('p',j.a)
];

const knockKnockFormat = j => [
  m('p','Knock knock'), m('.spacer'),
  m('p.is-pulled-right',"Who's there?"), m('.spacer'),
  m('p',j.a), m('.spacer'),
  m('p.is-pulled-right',`${j.a} who?`), m('.spacer'),
  m('p',j.b), m('br')
];

Object.defineProperty(Array.prototype, 'chunk_inefficient', {
    value: function(chunkSize) {
        var array=this;
        return [].concat.apply([],
            array.map(function(elem,i) {
                return i%chunkSize ? [] : [array.slice(i,i+chunkSize)];
            })
        );
    }
});

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function getLocalBool(key){
  return localStorage.getItem(key) === 'true';
}

const hideButton = {
  view: vnode => m('button.button.is-info', {
    class: getLocalBool(vnode.attrs.key) ? 'is-outlined' : '',
    onclick: _ => {
      localStorage.setItem(vnode.attrs.key, !getLocalBool(vnode.attrs.key));
    }
  }, vnode.attrs.text)
};

const numberClimber = {
  oninit: vnode => {
    vnode.state.value =
      localStorage.getItem(vnode.attrs.key) || vnode.attrs.initial;
  },
  view: vnode => m('span.climber', [
    m('i.fa.fa-arrow-left'),
    m('span', vnode.state.value),
    m('i.fa.fa-arrow-right')
  ])
};


export default {
  columns: localStorage.getItem("jokes:columns") || 2,
  view: vnode => m('#jokes', [
    m('h1.title', 'Jokes'),
    m('.box', [
      m(hideButton, {text: 'Knock Knock', key: 'jokes:hideKnockKnock'}),
      m(hideButton, {text: 'Question/Answer', key: 'jokes:hideQA'}),
      // m(numberClimber, {key: 'jokes:columns', initial: 2, min: 1, max: 5}),
      m('button.button.is-dark', {onclick: _ => shuffleArray(alljokes) }, 'Shuffle')
    ]),
    alljokes
    .filter(j => {
      switch (j.type){
        case 'qa': return !getLocalBool('jokes:hideQA');
        case 'kk': return !getLocalBool('jokes:hideKnockKnock');
        default: return true;
      }
    })
    .map(j => {
      switch (j.type){
        case 'qa': return questionAnswerFormat(j);
        case 'kk': return knockKnockFormat(j);
      }
    })
    .chunk_inefficient(vnode.state.columns)
    .map((chunk) => m('.columns', chunk.map(el => m('.box.column', el))) )
  ])
};
