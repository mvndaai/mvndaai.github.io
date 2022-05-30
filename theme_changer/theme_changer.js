
let defaultConfig = {
	title: 'Theme Changer',
	cssUrl: '/theme_changer/theme_changer.css',
	listenerKeyCode: 'Slash',
	ignoreKeys: [],
}

let dialog = null;
let listener = null;


function getCSSVariables() {
	return [].slice.call(document.styleSheets)
		.map(styleSheet => [].slice.call(styleSheet.cssRules)).flat()
		.filter(cssRule => cssRule.selectorText === ':root')
		.map(cssRule => cssRule.cssText.split('{')[1].split('}')[0].trim().split(';'))
		.flat().filter(text => text !== "")
		.map(text => text.split(':'))
		.map(parts => ({ key: parts[0].trim(), value: parts[1].trim() }) );
	;
}

const hypertextTagRegex = /(.*?(?=[#.]|$))([#.].*?(?=[#.]|$))?/gm; // https://regex101.com/r/P4dnRC/2
function createHypertext(tagPlus, attrs, children) {
	let tag = 'div';
	let id = null;
	let classes = [];


	while ((m = hypertextTagRegex.exec(tagPlus)) !== null) {
		if (m.index === hypertextTagRegex.lastIndex) { hypertextTagRegex.lastIndex++; }

		m.forEach((match, groupIndex) => {
			if (!match || match === '') return;

			if (groupIndex === 1) {
				tag = match;
			} else if (groupIndex === 2) {
				if (match.charAt(0)  === '#') {
					id = match.substring(1);
					return;
				}
				classes.push(match.substring(1))
			}
		});
	}

	let el = document.createElement(tag);
	if (id) el.id = id;
	classes.forEach(c => el.classList.add(c))

	if (attrs) {
		for (const [key, value] of Object.entries(attrs)) {
			switch(key) {
				case 'style':
					// TODO fix this
					for (const [k, v] of Object.entries(value)) {
						console.log('tag style', tag, k, v, el)
						el.style[k] = v;
					}
				default:
					el[key] = value;
			}

		}
	}

	if (children) {
		switch (typeof children) {
			case 'string':
				el.innerText = children;
				break;
			case 'object':
				if (Array.isArray(children)) {
					for (const child of children) { el.appendChild(child); }
					break;
				}
				console.warn('Unknown children object', children)
				break;
			default:
				console.warn('Unknown children type', typeof children, children);
		}
	}

	return el;
}

function createDialog(config) {
	const h = createHypertext;
	const vars = getCSSVariables().filter(o => !config.ignoreKeys.includes(o.key));

	dialog = h('dialog#theme_changer.cat.dog', null, [
		h('.split', null, [
			h('h1', null, config.title),
			h('span', {onclick: toggleDialog, style: {cursor: 'pointer', color:'yellow'}}, '╳'),
		]),
		h('fieldset', null,
			vars.map(o => h('.split', null, [
				h('label', null, o.key),
				h('input', {
					value: o.value,
					oninput: (e) => {
						document.documentElement.style.setProperty(o.key, e.target.value);
					}
				}),
			])
		)),
	]);

	document.querySelector('body').appendChild(dialog);
}

function toggleDialog(config) {
	if (!dialog) createDialog(config);
	!dialog.open ? dialog.showModal() : dialog.close();
}

function addKeyListeniner(config) {
	if (listener) return;

	document.addEventListener("keyup", e => {
		if (e.code !== config.listenerKeyCode) return;
		if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
		if (/^(?:input|textarea|select|button)$/i.test(e.target.tagName)) return;
		toggleDialog(config);
	});
}

function addCSS(config) {
	let link  = document.createElement('link');
	link.rel  = 'stylesheet';
	link.type = 'text/css';
	link.href = config.cssUrl;
	link.media = 'all';
	document.getElementsByTagName('head')[0].appendChild(link);
}

export default {
	start: (config) => {
		if (!config) { config = {}; }
		config = {...defaultConfig, ...config};

		addKeyListeniner(config);
		addCSS(config);
	},
	toggle: () => toggleDialog(config),
};

// https://justincypret.com/blog/adding-a-keyboard-shortcut-for-global-search
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showDialog