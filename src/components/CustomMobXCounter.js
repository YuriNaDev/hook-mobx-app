import React from 'react'
import { useObserver } from 'mobx-react-lite'
import { useStores } from 'stores/counter'

function useCounter() {
	const { count, increase, decrease } = useStores()
	console.log(count, increase, decrease)
	return useObserver(() => ({
		count,
		increase,
		decrease,
	}))
}

function CustomMobXCounter() {
	const { count, increase, decrease } = useCounter()
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={increase}>+증가</button>
			<button onClick={decrease}>-감소</button>
		</div>
	)
}

export default CustomMobXCounter
