
const fakeData = [
  {
      id: "123",
      name: "John Doe",
      phone: "+1234567890",
      email: "john.doe@example.com",
      location: "New York, USA",
      status: "active",
  },
  {
      id: "456",
      name: "Jane Smith",
      phone: "+0987654321",
      email: "jane.smith@example.com",
      location: "London, UK",
      status: "active",
  },
  {
      id: "789",
      name: "Alice Johnson",
      phone: "+1122334455",
      email: "alice.johnson@example.com",
      location: "Berlin, Germany",
      status: "delete",
  },
];

function fetchFakeData(delay: number = 2000): Promise<typeof fakeData> {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(fakeData);
      }, delay);
  });
}

// Пример использования
(async () => {
  try {
      console.log("Загрузка данных...");
      const data = await fetchFakeData();
      console.log("Данные успешно загружены:", data);
  } catch (error) {
      console.error("Произошла ошибка:", error);
  }
})();