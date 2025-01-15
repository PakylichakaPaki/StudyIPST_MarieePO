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
        console.log(message);
    } catch (error) {
        console.error("Произошла ошибка:", error);
    }
  }
  runDelays();