import { defaultData } from "../constants/BeanConstants";

async function getBeanInfo(
  category: string,
  pageIndex: number,
  pageSize: number
) {
  try {
    const response = await fetch(
      `/api/${category}?pageIndex=${pageIndex}&pageSize=${pageSize}`
    );
    // prevents try catch block running on default data
    if (category !== "") {
      // Check if the response status is OK
      if (!response.ok) {
        console.error("Server returned an error:", response.statusText);
        throw new Error(
          `Server error: ${response.status} ${response.statusText}`
        );
      }

      // If no content is returned, handle accordingly
      if (response.status === 204) {
        console.warn("No content returned from server.");
        return defaultData;
      }

      // Check if the content-type is JSON
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        return data;
      } else {
        const text = await response.text();
        console.error("Unexpected content-type or non-JSON response:", text);
        throw new Error("Expected JSON, but got something else");
      }
    } else return;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
}

export { getBeanInfo };
