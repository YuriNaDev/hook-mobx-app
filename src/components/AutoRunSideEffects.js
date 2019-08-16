import React from 'react'
import { autorun } from 'mobx'
import { useObserver } from 'mobx-react-lite'
import { useStore } from 'stores/counter'

function AutoRunSideEffects() {
	const store = useStore()

	React.useEffect(
		() =>
			autorun(() => {
				document.title = `${store.count}번 카운트`
			}),
		[] // side effects가 관찰가능객체에 의존한다면? 의존성 없음
	)

	return useObserver(() => (
		<div style={{ display: 'inline-block', marginRight: 10 }}>
			<h2>{store.count}</h2>
			<button onClick={store.increase}>+증가</button>
			<button onClick={store.decrease}>-감소</button>
		</div>
	))
}

export default AutoRunSideEffects
