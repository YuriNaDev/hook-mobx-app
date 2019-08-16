import React from 'react'
import LocalCounter from 'components/LocalCounter'
import NonObservableCounter, { MultiplierInput } from 'components/NonObservableCounter'
import UAOSCounter from 'components/UAOSCounter'
import ThreeCounter from 'components/ThreeCounter'
import ContextCounter from 'components/ContextCounter'
import MultiStoresOrder from 'components/MultiStoresOrder'
import AutoRunSideEffects from 'components/AutoRunSideEffects'
import FetchUser from 'components/FetchUser'
import { StoreProvider as CounterProvider } from 'stores/counter'
import { StoreProvider as OrderProvider } from 'stores/order'
import { StoreProvider as UserProvider } from 'stores/user'

function App() {
	return (
		<>
			<LocalCounter />
			<LocalCounter />
			<hr />
			<MultiplierInput>
				{multiplier => <NonObservableCounter initialCount={10} multiplier={multiplier} />}
			</MultiplierInput>
			<hr />
			<MultiplierInput>
				{multiplier => <UAOSCounter multiplier={multiplier} />}
			</MultiplierInput>
			<hr />
			<ThreeCounter />
			<hr />
			<CounterProvider>
				<ContextCounter />
				<ContextCounter />
				<ContextCounter />
			</CounterProvider>
			<hr />
			<OrderProvider>
				<MultiStoresOrder />
			</OrderProvider>
			<hr />
			<CounterProvider>
				<AutoRunSideEffects />
			</CounterProvider>
			<hr />
			<UserProvider>
				<FetchUser />
			</UserProvider>
		</>
	)
}

export default App
