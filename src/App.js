import "./App.css";

function App() {
  // Sample data for books
  const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      summary: "A story of love, wealth, and tragedy in the 1920s.",
    },
    {
      title: "1984",
      author: "George Orwell",
      summary: "A dystopian novel exploring the dangers of totalitarianism.",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      summary: "A novel about racial injustice in the American South.",
    },
  ];

  return (
    <div className="app">
      <h1>Library Book Display</h1>
      <div className="book-list"></div>
    </div>
  );
}

export default App;
