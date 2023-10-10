import { useParams } from "react-router-dom";
import Markdown from "react-markdown";

const BlogContent = ({ blogs }) => {
  const { id } = useParams();

  const { attributes } = blogs.data.find((blog) => blog.id === Number(id));

  return (
    <div className="w-full pb-10 bg-[#f9f9f9]">
      <div className="max-w-[1240px] mx-auto">
        <div
          className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1
            md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black"
        >
          <div className="col-span-2 gap-8">
            <img
              className="h-80 w-full object-cover"
              src={`http://localhost:1338${attributes.previewImg.data.attributes.url}`}
              alt={attributes.title}
            />
            <h1 className="font-bold text-2xl my-1 pt-5">{attributes.title}</h1>
            <div className="pt-5">
              <Markdown className="line-break">{attributes.content}</Markdown>
            </div>
          </div>

          <div className="w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px]">
            <div>
              <img
                className="p-2 w-32 h-32 rounded-full mx-auto object-cover"
                src={`http://localhost:1338${attributes.authorImg.data.attributes.url}`}
                alt="author image"
              />
              <h1 className="font-bold text-2xl text-center text-gray-900 pt-3">
                {attributes.authorName}
              </h1>
              <Markdown className="text-center text-gray-900 font-medium">
                {attributes.authorDesc}
              </Markdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
