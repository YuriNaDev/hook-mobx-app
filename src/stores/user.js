import React from 'react'
import axios from 'axios'
import { runInAction } from 'mobx'
import { useLocalStore } from 'mobx-react-lite'

const sleep = ms => {
	return new Promise(resolve => {
		setTimeout(resolve, ms)
	})
}

function createStore() {
	return {
		users: [],
		loading: false,
		error: null,
		async fetch() {
			this.loading = true
			try {
				await sleep(1000)
				let { data } = await axios.get('http://localhost:3001/users')
				runInAction(() => {
					this.users = data
					this.loading = false
				})
			} catch (e) {
				runInAction(() => {
					this.error = '오류입니당'
					this.loading = false
				})
			}
		},
	}
}

const StoreContext = React.createContext(null)

export function StoreProvider({ children }) {
	const store = useLocalStore(createStore)

	React.useEffect(() => {
		// initialize
		store.fetch()
	}, [])

	return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export function useStore() {
	const store = React.useContext(StoreContext)
	if (!store) {
		throw new Error('에바')
	}
	return store
}
