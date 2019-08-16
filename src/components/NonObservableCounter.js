import React, { useState } from 'react'
import { useObserver, useLocalStore } from 'mobx-react-lite'

export function MultiplierInput({ children }) {
	const [value, setValue] = useState(10)

	function increase() {
		setValue(value + 1)
	}

	function decrease() {
		setValue(value - 1)
	}

	return (
		<>
			<button onClick={increase}>곱하는 수 증가</button>
			<button onClick={decrease}>곱하는 수 감소</button>
			<hr style={{ visibility: 'hidden' }} />
			{children(value)}
		</>
	)
}

function NonObservableCounter(props) {
	const store = useLocalStore(
		source => ({
			count: props.initialCount, // 초기값에는 props로 지정 가능
			get multiplied() {
				// 여기에는 props를 직접 사용하면 안됨
				return source.multiplier * store.count
			},
			increase() {
				store.count += 1
			},
			decrease() {
				store.count -= 1
			},
		}),
		props // 이곳에서 props를 전달 ({ multiplier } 도 가능)
	)

	return useObserver(
		() => (
			<div style={{ display: 'inline-block', marginRight: 10 }}>
				<h2>
					{store.count} * {props.multiplier} = {store.multiplied}
				</h2>
				<button onClick={store.increase}>+증가</button>
				<button onClick={store.decrease}>-감소</button>
			</div>
		),
		'hello'
	)
}

export default NonObservableCounter
