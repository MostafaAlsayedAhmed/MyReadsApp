import Book from "./Book";

const BookShelf = ({ BookShelf_Name, AllBooks, ShelfGroup, ChangeBookChelf }) => {

    const ShelfGroupBooks =
        ShelfGroup === "none" ?
            AllBooks.filter(bk => (bk.shelf != ShelfGroup)) :
            AllBooks.filter(bk => (bk.shelf === ShelfGroup))

    //The ShelfGroup that we passed it in <BookShelf/>

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{BookShelf_Name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {ShelfGroupBooks.map(book => {
                        return <Book BookDetails={book} key={book.id} ChangeBookChelf={ChangeBookChelf} />
                    })}

                </ol>
            </div>
        </div>
    )
}
export default BookShelf;