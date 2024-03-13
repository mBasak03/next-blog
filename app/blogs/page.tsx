import Link from "next/link"

const posts= [
    {
        id:1,
        title: "Blog POST1",
        content: "Blog Content1",
        username: "user@1"
    },
    {
        id:2,
        title: "Blog POST2",
        content: "Blog Content2",
        username: "user@2"
    },
    {
        id:3,
        title: "Blog POST3",
        content: "Blog Content3",
        username: "user@3"
    },
    {
        id:4,
        title: "Blog POST4",
        content: "Blog Content4",
        username: "user@4"
    },
    {
        id:5,
        title: "Blog POST5",
        content: "Blog Content5",
        username: "user@5"
    }
]

const BlogsPage = () => {
  return (
    <div className=" max-w-4xl mx-auto py-8">
      <h1 className=" text-3xl font-bold mb-4">Blogs</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map(post=>(
            <Link key={post.id} href={`/blogs/${post.id}`}
                className=" bg-white p-4 rounded-md shadow">
                <h2 className="text-xl font-bold">{post.title}</h2>
                <p>Written by: {post.username}</p>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default BlogsPage
