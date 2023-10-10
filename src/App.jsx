import { Homepage, BlogContentPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";

export default function App() {
  const { loading, data, error } = useFetch(
    "http://localhost:1338/api/blogs?populate=*"
  );

  if (loading) return <h1 className="text-blue-400">Loading...</h1>;

  if (error) return <h1 className="text-red-600 text-2xl">Error!</h1>;

  return (
    <Routes>
      <Route path="/" element={<Homepage blogs={data ? data : ""} />}></Route>
      <Route
        path="/blog/:id"
        element={<BlogContentPage blogs={data ? data : ""} />}
      ></Route>
    </Routes>
  );
}
