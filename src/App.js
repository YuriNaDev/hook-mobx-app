import React from 'react'
import Counter from 'components/Counter'
import CounterLite from 'components/CounterLite'
import CounterNop from 'components/CounterNop'
import MobXCounter from 'components/MobXCounter'
import CustomMobXCounter from 'components/CustomMobXCounter'
import { StoreProvider } from 'stores/counter'

function App() {
	return (
		<>
			<Counter />
			<hr />
			<CounterLite />
			<hr />
			<CounterNop initial={10} multiplier={10} />
			<hr />
			<StoreProvider>
				<MobXCounter />
				<MobXCounter />
				<CustomMobXCounter />
			</StoreProvider>
		</>
	)
}

export default App
