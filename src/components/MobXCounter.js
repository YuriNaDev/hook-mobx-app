import React from 'react'
import { useObserver } from 'mobx-react-lite'
import { useStores } from 'stores/counter'

function MobXCounter() {
	const store = useStores()
	return useObserver(() => (
		<div>
			<h1>{store.count}</h1>
			<button onClick={store.increase}>+증가</button>
			<button onClick={store.decrease}>-감소</button>
		</div>
	))
}

export default MobXCounter
