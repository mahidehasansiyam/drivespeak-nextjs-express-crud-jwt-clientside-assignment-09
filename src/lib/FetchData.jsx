export const getfewcardata = async () => {
	const res = await fetch(`${process.env.SERVER_URL}/fewdata`, {
		cache: 'no-store',
	})
	const data = await res.json()
	return data
}

export const getallcardata = async () => {
	const res = await fetch(`${process.env.SERVER_URL}/alldata`, {
		cache: 'no-store',
	})
	const data = await res.json()
	return data
}
