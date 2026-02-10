import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooksShelves } from "../Redux/Slice/ShelfSlice";

const Shelf = () => {
  const dispatch = useDispatch();
  const shelfState = useSelector((state) => state.shelf);
  console.log(shelfState);
  async function loadShelf() {
    if (shelfState.shelfList.Length === 0) {
      const response = dispatch(getAllBooksShelves);
      console.log(response);
    }
  }

  useEffect(() => {
    loadShelf();
  }, []);

  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-8 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          <aside className="w-full md:w-48 space-y-3">
            <button className="w-full rounded-md bg-amber-100 px-4 py-2 text-left text-sm font-semibold text-amber-800 transition hover:bg-amber-200 capitalize">
              read
            </button>
            <button className="w-full rounded-md bg-amber-100 px-4 py-2 text-left text-sm font-semibold text-amber-800 transition hover:bg-amber-200 capitalize">
              want to read
            </button>
            <button className="w-full rounded-md bg-indigo-600 px-4 py-2 text-left text-sm font-semibold text-white shadow-md transition hover:bg-indigo-700 capitalize">
              currently reading
            </button>
          </aside>
          <main className="flex-1">
            <div className="overflow-hidden bg-white border border-gray-100 rounded-xl shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-50 bg-gray-50/50 text-xs uppercase tracking-wider text-gray-400">
                    <th className="px-6 py-4 font-semibold">Title</th>

                    <th className="px-6 py-4 font-semibold text-center">
                      Rating
                    </th>
                    <th className="px-6 py-4 font-semibold text-right">
                      Author
                    </th>
                    <th className="px-6 py-4 font-semibold text-right">
                      Genera
                    </th>
                  </tr>
                </thead>
                {shelfState.shelfList.length>0 && 
                shelfState.shelfList.map((shelf)=>(
                  <h1 key={shelf._id}>hello</h1>
                ))}
              </table>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default Shelf;
