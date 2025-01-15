async function fetchDataWithFetch(url: string): Promise<any> {
  const response = await fetch(url);

  if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
  }

  return response.json();
}

// Пример использования
(async () => {
  const url = "https://jsonplaceholder.typicode.com/posts/1";

  try {
      const data = await fetchDataWithFetch(url);
      console.log("Данные успешно загружены:", data);
  } catch (error) {
      console.error("Произошла ошибка:", error);
  }
})();