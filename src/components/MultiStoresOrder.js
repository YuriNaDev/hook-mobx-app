import React from 'react'
import { useObserver } from 'mobx-react-lite'
import { useStores } from 'stores/order'

function useUserData() {
	const { user, order } = useStores()
	return useObserver(() => ({
		username: user.name,
		orderId: order.id,
	}))
}

function MultiStoresOrder() {
	const { username, orderId } = useUserData()
	return (
		<div>
			{username} has order {orderId}
		</div>
	)
}

export default MultiStoresOrder
