import React, { useEffect } from 'react'
import { observable } from 'mobx'
import { Observer, useObserver, observer } from 'mobx-react-lite'

const DisplayNumber = ({ number }) => (
	<h2 style={{ marginRight: 10, display: 'inline-block' }}>{number}</h2>
)

// observable 선언
const counter = observable({
	count: 100,
})

// observer HOC
const C1 = observer(({ counter }) => <DisplayNumber number={counter.count} />)

// Observer 컴포넌트
const C2 = ({ counter }) => <Observer>{() => <DisplayNumber number={counter.count} />}</Observer>

// useObserver
const C3 = ({ counter }) => {
	return useObserver(() => <DisplayNumber number={counter.count} />)
}

function ThreeCounter() {
	useEffect(() => {
		setTimeout(() => {
			counter.count = 0
		}, 1000)
	}, [])

	return (
		<div>
			<C1 counter={counter} />
			<C2 counter={counter} />
			<C3 counter={counter} />
		</div>
	)
}

export default ThreeCounter
