(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.index = global.index || {}, global.index.js = factory()));
})(this, (function () { 'use strict';

	const supportSymbol = typeof Symbol === 'function' && Symbol.for;
	const REACT_ELEMENT_TYPE = supportSymbol
	    ? Symbol.for('react.element')
	    : 0xeac7;

	const ReactElement = function (type, key, ref, props) {
	    const element = {
	        $$typeof: REACT_ELEMENT_TYPE,
	        type,
	        key,
	        ref,
	        props,
	        __mark: 'xyc'
	    };
	    return element;
	};
	const jsx = function (type, config, ...maybeChildren) {
	    let key = null;
	    const props = {};
	    let ref = null;
	    for (const prop in config) {
	        if (prop === 'key') {
	            if (config[prop] !== undefined) {
	                key = '' + config[prop];
	            }
	        }
	        else if (prop === 'ref') {
	            if (config[prop] !== undefined) {
	                ref = config[prop];
	            }
	        }
	        else if (Object.prototype.hasOwnProperty.call(config, prop)) {
	            // for in循环，会遍历到原型上的属性，所以需要用hasOwnProperty，非继承的属性才会true
	            props[prop] = config[prop];
	        }
	    }
	    const maybeChildrenLength = maybeChildren.length;
	    if (maybeChildrenLength === 1) {
	        props.children = maybeChildren[0];
	    }
	    else if (maybeChildrenLength > 1) {
	        props.children = maybeChildren;
	    }
	    return ReactElement(type, key, ref, props);
	};

	var index = {
	    version: '0.0.0',
	    createElement: jsx
	};

	return index;

}));
