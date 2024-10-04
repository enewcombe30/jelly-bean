async function getBeanInfo(
  category: string,
  pageIndex: number,
  pageSize: number
) {
  try {
    const response = await fetch(
      `/api/${category}?pageIndex=${pageIndex}&pageSize=${pageSize}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching beans data:", error);
    throw new Error("Failed to fetch beans data");
  }
}

async function getMilestones(pageIndex: number, pageSize: number) {
  try {
    const response = await fetch(
      `api/mileStones?pageIndex=${pageIndex}&pageSize=${pageSize}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching mile data:", error);
    throw new Error("Failed to fetch mile data");
  }
}

export { getBeanInfo, getMilestones };
