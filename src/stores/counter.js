import React from 'react'
import { useLocalStore } from 'mobx-react-lite'

function createStore() {
	return {
		count: 0,
		increase() {
			this.count += 1
		},
		decrease() {
			this.count -= 1
		},
	}
}

const StoreContext = React.createContext(null)

export function StoreProvider({ children }) {
	const store = useLocalStore(createStore)
	return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export function useStore() {
	const store = React.useContext(StoreContext)
	if (!store) {
		throw new Error('에바')
	}
	return store
}
