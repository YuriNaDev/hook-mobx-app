import React from 'react'
import { observer, useLocalStore } from 'mobx-react'

function Counter() {
	const store = useLocalStore(() => ({
		count: 0,
		increase() {
			store.count += 1
		},
		decrease() {
			store.count -= 1
		},
	}))

	return (
		<div>
			<h1>{store.count}</h1>
			<button onClick={store.increase}>+증가</button>
			<button onClick={store.decrease}>-감소</button>
		</div>
	)
}

export default observer(Counter)
