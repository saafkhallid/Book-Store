
import { Book } from "../models/bookModels.js";

// Create a new book
export const createBook = async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;

    if (!title || !author || !publishYear) {
      return res.status(400).json({
        message: "Send all required fields: title, author, publishYear",
      });
    }

    const newBook = await Book.create({ title, author, publishYear });

    res.status(201).json(newBook);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

// Get all books
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({ count: books.length, data: books });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

// Get a book by ID
export const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    res.status(200).json(book);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

// Update a book
export const updateBook = async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;

    if (!title || !author || !publishYear) {
      return res.status(400).json({
        message: "Send all required fields: title, author, publishYear",
      });
    }

    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book updated successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

// Delete a book
export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};
