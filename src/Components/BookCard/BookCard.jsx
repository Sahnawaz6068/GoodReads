import { useNavigate } from "react-router-dom";

const BookCard = ({data}) => {
  const navigate = useNavigate();
  return (
    <div className="flex bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">
      
      <div className="w-1/3 bg-gray-100">
        <img
          src={data.imageUrl || "/book-placeholder.png"}
          alt={data.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="w-2/3 p-5 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 line-clamp-2">
            {data.title}
          </h2>

          <p className="mt-1 text-sm text-gray-600 line-clamp-3">
            {data.description}
          </p>

          <p className="mt-2 text-xs text-gray-500">
            {data.author?.name || "Unknown Author"} • {data.pages} pages
          </p>
        </div>

        <div className="flex justify-end mt-4">
          <button
           onClick={()=>{
            navigate('/book/description', {state: {data}})
           }}
           className="text-sm text-blue-600 font-medium">
            View →
          </button>
        </div>
      </div>
    </div>
  );
};


export default BookCard;
