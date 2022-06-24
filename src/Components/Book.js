import OptionsDropdown from "./OptionsDropdown";

const Book = ({ BookDetails, ChangeBookChelf }) => {
    let customClass = BookDetails.hasOwnProperty('shelf') ? "my_book" : '';

    return (
        <li key={BookDetails.id} className={customClass}> 
            <div className={`book`}>
                <div className="book-top">
                    <img className="book-cover" src={BookDetails.imageLinks?.smallThumbnail} alt={BookDetails.title}/>
                    {/* "?.smallThumbnail" becasue Some books don't have an image */}
                </div>
                <div className="book-title">{BookDetails.title}</div>
                <div className="book-authors">{BookDetails?.authors}</div>

                <OptionsDropdown BookDetails={BookDetails} ChangeBookChelf={ChangeBookChelf} />
            </div>
        </li>
    )
}
export default Book;