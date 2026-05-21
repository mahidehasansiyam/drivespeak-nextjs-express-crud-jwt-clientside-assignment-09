export const getfewcardata = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/fewcars`, {
    cache: 'no-store',
  });
	const data = await res.json()
	return data
}

export const getallcardata = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/allcars`, {
    cache: 'no-store',
  });
	const data = await res.json()
	return data
}
