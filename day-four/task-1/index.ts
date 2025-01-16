type Users = {
    name: string;
    email: string;
    isActive: boolean;
  };
  
  async function cleanUserData(users: Users[]): Promise<Users[]> {
    if (Math.random() < 0.1) {
        throw new Error("Упс! 10%. Произошла случайная ошибка.");
    }
  
    const cleanedUsers = users
        .filter(user => user.isActive)
        .map(user => ({
            ...user,
            name: user.name.trim().toLowerCase(),
            email: user.email.toLowerCase(),
        }));
  
    return cleanedUsers;
  }
  
  (async () => {
    const users: Users[] = [
        { name: "Anton   ", email: "ANTONIO@GMAIL.COM", isActive: true },
        { name: "   EGOR", email: "EgOr@example.com", isActive: false },
        { name: " ArTeM ", email: "ArTeM@EXAMPLE.COM", isActive: true },
    ];
  
    try {
        const result = await cleanUserData(users);
        console.log("Очищенные данные:", result);
    } 
    catch (error) {
        console.error("Ошибка:", error.message);
    }
  })();