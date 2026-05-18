export const getfewcardata = async () => {
  const res = await fetch('http://localhost:7000/fewdata');
  const data = await res.json();
  return data;
}
export const getallcardata = async () => {
  const res = await fetch('http://localhost:7000/alldata');
  const data = await res.json();
  return data;
}
