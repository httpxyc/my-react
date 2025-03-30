import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import type {
	Type,
	Key,
	Ref,
	Props,
	ReactElement,
	ElementType
} from 'shared/ReactTypes';
const ReactElement = function (
	type: ElementType,
	key: Key,
	ref: Ref,
	props: Props
): ReactElement {
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

export const jsx = function (
	type: ElementType,
	config: any,
	...maybeChildren: any
) {
	let key: Key = null;
	const props: Props = {};
	let ref: Ref = null;
	for (const prop in config) {
		if (prop === 'key') {
			if (config[prop] !== undefined) {
				key = '' + config[prop];
			}
		} else if (prop === 'ref') {
			if (config[prop] !== undefined) {
				ref = config[prop];
			}
		} else if (Object.prototype.hasOwnProperty.call(config, prop)) {
			// for in循环，会遍历到原型上的属性，所以需要用hasOwnProperty，非继承的属性才会true
			props[prop] = config[prop];
		}
	}

	const maybeChildrenLength = maybeChildren.length;
	if (maybeChildrenLength === 1) {
		props.children = maybeChildren[0];
	} else if (maybeChildrenLength > 1) {
		props.children = maybeChildren;
	}
	return ReactElement(type, key, ref, props);
};

export const jsxDEV = jsx;
