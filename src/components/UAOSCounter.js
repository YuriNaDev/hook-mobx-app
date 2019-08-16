import React from 'react'
import { Observer, useLocalStore, useAsObservableSource } from 'mobx-react-lite'

const UAOSCounter = props => {
	const observableProps = useAsObservableSource(props)
	const store = useLocalStore(() => ({
		count: 10,
		get multiplied() {
			// 여기에는 props를 직접 사용하면 안됨
			return observableProps.multiplier * store.count
		},
		increase() {
			store.count += 1
		},
		decrease() {
			store.count -= 1
		},
	}))

	return (
		<div style={{ display: 'inline-block', marginRight: 10 }}>
			<Observer>
				{() => (
					<h2>
						{store.count} * {observableProps.multiplier} = {store.multiplied}
					</h2>
				)}
			</Observer>
			<button onClick={store.increase}>+증가</button>
			<button onClick={store.decrease}>-감소</button>
		</div>
	)
}

export default UAOSCounter
