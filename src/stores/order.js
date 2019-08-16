import React from 'react'
import { useLocalStore } from 'mobx-react-lite'

function createUserStore() {
	return {
		id: 1,
		name: 'james',
	}
}

function createOrderStore() {
	return {
		id: 0,
		productId: 1,
	}
}

const StoreContext = React.createContext(null)

export function StoreProvider({ children }) {
	const user = useLocalStore(createUserStore)
	const order = useLocalStore(createOrderStore)
	return <StoreContext.Provider value={{ user, order }}>{children}</StoreContext.Provider>
}

export function useStores() {
	const stores = React.useContext(StoreContext)
	if (!stores) {
		throw new Error('에바')
	}
	return stores
}
