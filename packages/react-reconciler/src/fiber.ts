import { Key, Props, Ref } from 'shared/ReactTypes';
import { WorkTag } from './workTags';
import { Flags, NoFlags } from './fiberFlags';

class FiberNode {
	type: any;
	tag: WorkTag;
	pendingProps: Props;
	key: Key;
	stateNode: any;
	ref: Ref;

	return: FiberNode | null;
	child: FiberNode | null;
	sibling: FiberNode | null;
	// 该节点是父节点的第几号子节点
	index: number;

	memorizedProps: Props | null;
	// 双缓冲树，翻转指向的另外一颗树
	alternate: FiberNode | null;
	// 操作flag
	flags: Flags;

	constructor(tag: WorkTag, pendingProps: Props, key: Key) {
		// 实例
		this.tag = tag;
		this.key = key;
		// 虚拟DOM
		this.type = null;
		this.stateNode = null;
		this.ref = null;

		// 构成树状结构
		this.return = null;
		this.child = null;
		this.sibling = null;
		this.index = 0;

		// 作为工作单元
		this.alternate = null;
		this.memorizedProps = null;
		this.pendingProps = pendingProps;

		// 副作用
		this.flags = NoFlags;
	}
}
