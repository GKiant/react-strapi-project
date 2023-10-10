import { Footer, Navbar, BlogContent } from "../components";

const BlogContentPage = ({ blogs }) => {
  return (
    <>
      <Navbar />
      <BlogContent blogs={blogs} />
      <Footer />
    </>
  );
};

export default BlogContentPage;
