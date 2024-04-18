import React, { useState } from 'react'

export default function App() {

    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        console.log('need to add a book with: '+title);
    };

    return (
        <div>App</div>
    );
}
