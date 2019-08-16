import React from 'react'
import { useObserver } from 'mobx-react-lite'
import { useStore } from 'stores/user'

function FetchUser() {
	const store = useStore()

	return useObserver(() => {
		if (store.loading) return <div>로딩중</div>
		if (store.error) return <div>에러!</div>
		return (
			<>
				<h2>{store.users.length}</h2>
				<button onClick={store.fetch}>fetch</button>
			</>
		)
	})
}

export default FetchUser
