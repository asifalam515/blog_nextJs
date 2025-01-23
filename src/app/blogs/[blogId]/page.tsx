import BlogDetails from "@/components/ui/BlogDetails";

interface BlogId {
  params: {
    blogId: string;
  };
}
const BlogDetailPage = async ({ params }: BlogId) => {
  const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`);
  const blog = await res.json();

  return (
    <div className="my-10">
      <BlogDetails blog={blog}></BlogDetails>
    </div>
  );
};

export default BlogDetailPage;