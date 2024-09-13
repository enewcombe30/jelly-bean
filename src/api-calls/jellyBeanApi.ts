async function getBeanInfo(
  category: string,
  pageIndex: number,
  pageSize: number
) {
  const response = await fetch(
    `https://jellybellywikiapi.onrender.com/api/${category}?pageIndex=${pageIndex}&pageSize=${pageSize}`
  );
  const data = await response.json();
  return data;
}

async function getBeanFacts() {
  const response = await fetch(
    `https://jellybellywikiapi.onrender.com/api/facts`
  );
  const data = await response.json();
  return data;
}

async function getBeanMiles() {
  const response = await fetch(
    `https://jellybellywikiapi.onrender.com/api/mileStones`
  );
  const data = await response.json();
  return data;
}

async function getBeanPages(pageIndex: number, pageSize: number) {
  const response = await fetch(
    `https://jellybellywikiapi.onrender.com/api/mileStones?pageIndex=${pageIndex}&pageSize=${pageSize}`
  );
  const data = await response.json();
  return data;
}

export { getBeanInfo, getBeanFacts, getBeanMiles, getBeanPages };
