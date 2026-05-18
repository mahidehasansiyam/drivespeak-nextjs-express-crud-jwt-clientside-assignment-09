export const getfewcardata = async () => {
  const res = await fetch(`${process.env.HOST_URL}/fewdata`);
  const data = await res.json();
  return data;
}
export const getallcardata = async () => {
  const res = await fetch(`${process.env.HOST_URL}/alldata`);
  const data = await res.json();
  return data;
}   
