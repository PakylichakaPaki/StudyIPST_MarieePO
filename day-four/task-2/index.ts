type UserWithGadget = {
  id: string;
  name: string;
  gadget: {
      id: string;
      name: string;
      price: string | undefined;
  };
};

type UserWithGadgets = {
  id: string;
  name: string;
  gadgets: {
      id: string;
      name: string;
      price: string | undefined;
  }[];
};

function groupGadgetsByUser(users: UserWithGadget[]): UserWithGadgets[] {
  const groupedUsers: Record<string, UserWithGadgets> = {};

  // Цикл для прохода по всем пользователям
  for (const user of users) {
      // Если пользователь уже есть в группе
      if (groupedUsers[user.id]) {
          groupedUsers[user.id].gadgets.push(user.gadget);
      } else {
          // Если нет пользователя, то создаем нового
          groupedUsers[user.id] = {
              id: user.id,
              name: user.name,
              gadgets: [user.gadget],
          };
      }
  }

  return Object.values(groupedUsers);
}

const input: UserWithGadget[] = [
  {
      id: "1",
      name: "Khalid Kashmiri",
      gadget: { id: "101", name: "Phone", price: "1000" },
  },
  {
      id: "2",
      name: "Khidir Karawita",
      gadget: { id: "102", name: "Tablet", price: undefined },
  },
  {
      id: "1",
      name: "Khalid Kashmiri",
      gadget: { id: "103", name: "Laptop", price: "1500" },
  },
];

const output = groupGadgetsByUser(input);
console.log("Группированные данные:", output);