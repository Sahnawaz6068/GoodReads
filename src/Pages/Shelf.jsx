import React from "react";
import Layout from "../Layout/Layout";

const Shelf = () => {
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

                <tbody className="divide-y divide-gray-50">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="flex items-center space-x-4 px-6 py-4">
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
                        <img
                          src="https://via.placeholder.com/150"
                          alt="Cover"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <span className="font-medium text-gray-800">
                        Una pallottola Spuntata
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">5</td>
                    <td className="px-6 py-4 text-right">
                      <div className="text-xs font-bold uppercase tracking-widest">
                        Kabir
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      Story
                    </td>
                     <button className="text-xs font-bold uppercase text-blue-400 hover:text-blue-500 tracking-widest">
                        Detail
                      </button>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default Shelf;
