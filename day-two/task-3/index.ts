type Book = {
    title: string;
    year: number;
    author: string;
    preview: string;
    url: string;
  };
  
  const createBook = (title: string, year: number, author: string): Book => ({
    title,
    year,
    author,
    preview: `Название: ${title}, Автор: ${author}, Год: ${year}`,
    url: `www.someurl.com/preview?title=${encodeURIComponent(title)}&year=${year}&author=${encodeURIComponent(author)}`,
  });
  
  const source = {
    title: "Harry Potter",
    year: 1997,
    author: "J.K. Rowling",
  };
  
  const target = createBook(source.title, source.year, source.author);
  
  console.log(target);