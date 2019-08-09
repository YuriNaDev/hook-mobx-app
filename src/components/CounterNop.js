/**
 * Non observable dependencies
 */
import React from 'react'
import { observer, useLocalStore } from 'mobx-react'

const CounterNop = observer(props => {
	const store = useLocalStore(
		source => ({
			count: props.initial,
			get multiplied() {
				// 반드시 props 대신 source 사용
				return source.multiplier * store.count
			},
			increase() {
				store.count += 1
			},
			decrease() {
				store.count -= 1
			},
		}),
		props
	)

	return (
		<div>
			<h1>{store.count}</h1>
			<h2>{store.multiplied}</h2>
			<button onClick={store.increase}>+증가</button>
			<button onClick={store.decrease}>-감소</button>
		</div>
	)
})

export default CounterNop
