/**
 * WorkTag 是在 fiber.ts 文件中定义的一个枚举或常量集合，用于标识不同类型的 Fiber 节点。
 * React Reconciler 使用 WorkTag 来区分不同类型的 React 元素
 * （如函数组件、类组件、宿主节点等），以便在渲染和更新过程中进行不同的处理。
 *  */
export enum WorkTag {
	IndeterminateComponent = 0, // 尚未确定的组件类型
	FunctionalComponent = 1, // 函数组件
	ClassComponent = 2, // 类组件
	HostRoot = 3, // 根节点 (ReactDOM.render 的入口)
	HostPortal = 4, // Portal
	HostComponent = 5, // 原生 DOM 节点 (如 div, span 等)
	HostText = 6, // 文本节点
	Fragment = 7, // Fragment
	Mode = 8, // 模式标记
	ContextConsumer = 9, // Context.Consumer
	ContextProvider = 10, // Context.Provider
	ForwardRef = 11, // forwardRef 组件
	Profiler = 12, // Profiler 组件
	SuspenseComponent = 13, // Suspense 组件
	MemoComponent = 14, // React.memo 组件
	SimpleMemoComponent = 15, // 内部使用的简单 memo 组件
	IncompleteClassComponent = 16, // 尚未完成的类组件
	DehydratedFragment = 17, // 服务器端渲染的脱水片段
	ScopeComponent = 18, // 作用域组件（实验性）
	Block = 19, // 阻塞组件（实验性）
	LazyComponent = 20 // 懒加载组件
}
