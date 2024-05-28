import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    author: {
        type: String,
        required: true,
    },

    publishYear: {
        type: Number,
        required: true,
    },

    image: {
        type: String,
        required: false,
    },
});
export const Book = mongoose.model("Book", { name: String });
export default Book;
