import React from "react";
import Layout from "../Layout/Layout";
import BookCard from "../Components/BookCard/BookCard";

const Dashboard = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BookCard
          title="Clean Code"
          description="A handbook of agile software craftsmanship."
          imageUrl="https://covers.openlibrary.org/b/id/9641656-L.jpg"
          author="Robert C. Martin"
          pages={464}
        />
        <BookCard
          title="Clean Code"
          description="A handbook of agile software craftsmanship."
          imageUrl="https://covers.openlibrary.org/b/id/9641656-L.jpg"
          author="Robert C. Martin"
          pages={464}
        />
        <BookCard
          title="Clean Code"
          description="A handbook of agile software craftsmanship."
          imageUrl="https://covers.openlibrary.org/b/id/9641656-L.jpg"
          author="Robert C. Martin"
          pages={464}
        />
        <BookCard
          title="Clean Code"
          description="A handbook of agile software craftsmanship."
          imageUrl="https://covers.openlibrary.org/b/id/9641656-L.jpg"
          author="Robert C. Martin"
          pages={464}
        />
        <BookCard
          title="Clean Code"
          description="A handbook of agile software craftsmanship."
          imageUrl="https://covers.openlibrary.org/b/id/9641656-L.jpg"
          author="Robert C. Martin"
          pages={464}
        />
      </div>
    </Layout>
  );
};

export default Dashboard;
