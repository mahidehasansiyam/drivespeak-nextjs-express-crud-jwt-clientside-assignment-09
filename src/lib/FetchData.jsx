import { headers } from "next/headers";
import { auth } from "./auth";



export const getfewcardata = async () => {
  
  // get token from better auth in server component *****************
  // const { token } = await auth.api.getToken({
  //   headers: await headers(),
	// });
	
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/fewcars`, {
    cache: 'no-store',
    // headers: {
    //   authorization: `Bearer ${token}`,
    // },
  });
  const data = await res.json();
  return data;
};

export const getallcardata = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // get token from better auth in server component *****************
  const { token } = await auth.api.getToken({
    headers: await headers(),
	});
	
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/allcars`, {
    cache: 'no-store',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};
