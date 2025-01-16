function delayPromiseFunction(delay: number, message: string): Promise<string> {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(message);
      }, delay);
  });
}

// Пример использования
async function runDelays() {
  try {
      const message = await delayPromiseFunction(2000, "2 секунды!");
      return message; // вместо console.log
  } catch (error) {
      throw new Error(`Произошла ошибка: ${error}`); // вместо console.error
  }
}

(async () => {
  try {
      const result = await runDelays();
      console.log(result); 
  } catch (error) {
      console.error(error.message);
  }
})();