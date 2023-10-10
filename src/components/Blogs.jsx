const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "First Blog",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odit error voluptates perferendis dolorem quod enim est. Vel, placeat veniam.",
      cover:
        "https://cdn.dribbble.com/users/2167937/screenshots/15705208/media/46d4dd32bb10f226e66696c6f84a290c.png?resize=1600x1200&vertical=center",
    },
    {
      id: 2,
      title: "Second Blog",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odit error voluptates perferendis dolorem quod enim est. Vel, placeat veniam.",
      cover:
        "https://cdn.dribbble.com/users/2167937/screenshots/15705208/media/46d4dd32bb10f226e66696c6f84a290c.png?resize=1600x1200&vertical=center",
    },
    {
      id: 3,
      title: "Third Blog",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odit error voluptates perferendis dolorem quod enim est. Vel, placeat veniam.",
      cover:
        "https://cdn.dribbble.com/users/2167937/screenshots/15705208/media/46d4dd32bb10f226e66696c6f84a290c.png?resize=1600x1200&vertical=center",
    },
    {
      id: 4,
      title: "Fourth Blog",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odit error voluptates perferendis dolorem quod enim est. Vel, placeat veniam.",
      cover:
        "https://cdn.dribbble.com/users/2167937/screenshots/15705208/media/46d4dd32bb10f226e66696c6f84a290c.png?resize=1600x1200&vertical=center",
    },
  ];

  return (
    <div className="w-full bg-[#f9f9f9] py-[50px] ">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-8 px-4 text-black">
          {blogs.map(({ id, title, desc, cover }) => (
            <div
              key={id}
              className="bg-white rounded-xl overflow-hidden drop-shadow-md"
            >
              <img className="h-56 w-full object-cover" src={cover} alt="" />
              <div className="p-8">
                <h3 className="font-bold text-2xl my-1">{title}</h3>
                <p className="text-gray-600 text-xl">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
