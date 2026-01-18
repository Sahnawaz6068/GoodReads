const BookCard = ({ title, description, imageUrl, author, pages }) => {
  return (
    <div className="flex bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">
      
      <div className="w-1/3 bg-gray-100">
        <img
          src={imageUrl || "/book-placeholder.png"}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="w-2/3 p-5 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 line-clamp-2">
            {title}
          </h2>

          <p className="mt-1 text-sm text-gray-600 line-clamp-3">
            {description}
          </p>

          <p className="mt-2 text-xs text-gray-500">
            {author?.name || "Unknown Author"} • {pages} pages
          </p>
        </div>

        <div className="flex justify-end mt-4">
          <span className="text-sm text-blue-600 font-medium">
            View →
          </span>
        </div>
      </div>
    </div>
  );
};


export default BookCard;
