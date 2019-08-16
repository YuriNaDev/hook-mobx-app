import React from 'react'
import { useObserver, useLocalStore } from 'mobx-react-lite'

function LocalCounter() {
	const store = useLocalStore(() => ({
		count: 0,
		increase() {
			store.count += 1
		},
		decrease() {
			store.count -= 1
		},
	}))

	return useObserver(() => (
		<div style={{ display: 'inline-block', marginRight: 10 }}>
			<h2>{store.count}</h2>
			<button onClick={store.increase}>+증가</button>
			<button onClick={store.decrease}>-감소</button>
			<button onClick={() => (store.count = 10)}>숫자 10으로 변경</button>
		</div>
	))
}

export default LocalCounter
