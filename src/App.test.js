import { render, screen } from "@testing-library/react";
import App from "./App";

// Set up the root div that React will render into
beforeEach(() => {
  // Enable fake timers
  jest.useFakeTimers();
});

afterEach(() => {
  // Clear mocked timers and system time after each test
  jest.useRealTimers();
});

test('displays "Visit Library" button when library is open', () => {
  // Set system time to SGT 9:00 AM (Singapore Time)
  jest.setSystemTime(new Date("2024-10-22T01:00:00Z")); // 9 AM SGT is 1 AM UTC
  render(<App />);
  // Check that the "Visit Library" button is present
  const visitLibraryButton = screen.getByRole("button", {
    name: /visit library/i,
  });
  expect(visitLibraryButton).toBeInTheDocument();
});

test('displays "The library is open" message when open', () => {
  // Set system time to SGT 9:00 AM (Singapore Time)
  jest.setSystemTime(new Date("2024-10-22T01:00:00Z")); // 9 AM SGT is 1 AM UTC
  render(<App />);
  expect(screen.getByText(/The library is open/i)).toBeInTheDocument();
});

test('displays "The library is closed" message when closed', () => {
  // Set system time to SGT 8:00 PM (Singapore Time)
  jest.setSystemTime(new Date("2024-10-22T12:00:00Z")); // 8 PM SGT is 12 PM UTC
  render(<App />);
  expect(screen.getByText(/The library is closed/i)).toBeInTheDocument();
});

test("renders each book in the list with title, author, and summary", () => {
  render(<App />);
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

  books.forEach((book) => {
    expect(screen.getByText(new RegExp(book.title, "i"))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(book.author, "i"))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(book.summary, "i"))).toBeInTheDocument();
  });
});
