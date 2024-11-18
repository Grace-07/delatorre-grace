class Book {
  title = "";
  author = "";
  genre = "";
  availability = false;

  borrowBook() {
    if (!availability) throw new Error("Can't borrow it. It's not available.");

    availability = false;

    console.log("The book was borrowed successfully.");
  }

  returnBook() {
    availability = true;
    console.log("The book was returned successfully.");
  }

  displayInfo() {
    console.log("Title: ", this.title);
    console.log("Author: ", this.author);
    console.log("Genre: ", this.genre);
    console.log("Availability: ", this.availability);
  }
}

class Library {
  books = [];

  addBook(title, author, genre) {
    let book = new Book();
    book.title = title;
    book.author = author;
    book.genre = genre;
    book.availability = true;

    this.books.push(book);
    console.log("The book was successfully added to the library.");
  }

  searchBook(title) {
    console.log(`Search for: "${title}"`);
    const results = this.books.filter((book) => book.title.includes(title));
    console.log(results);
  }

  displayBooks() {
    console.log("*** Book List ***");
    console.log(this.books);
  }
}

const myLibrary = new Library();
myLibrary.addBook("Book 1", "Author 1", "Genre 1");
myLibrary.addBook("Book 2", "Author 2", "Genre 2");
myLibrary.addBook("Book 3", "Author 3", "Genre 3");

myLibrary.searchBook("Book 1");
myLibrary.displayBooks();
