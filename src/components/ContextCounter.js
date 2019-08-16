import React from 'react'
import { useObserver } from 'mobx-react-lite'
import { useStore } from 'stores/counter'

function ContextCounter() {
	const store = useStore()
	return useObserver(() => (
		<div style={{ display: 'inline-block', marginRight: 10 }}>
			<h2>{store.count}</h2>
			<button onClick={store.increase}>+증가</button>
			<button onClick={store.decrease}>-감소</button>
		</div>
	))
}

export default ContextCounter
