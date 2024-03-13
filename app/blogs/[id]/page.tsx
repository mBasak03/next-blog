import FormComment from "@/app/components/form-comments"
import Comments from "../../components/comments"
import React from 'react'

const BlogDetailPage = () => {
  return (
    <div  className=' max-w-4xl mx-auto py-8'>
      <h1 className=' text-3xl font-bold'>Post One</h1>
      <p>Written by: john Doe</p>
      <div className=' mt-4'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor et error fugiat saepe ipsam dolorum cum porro nobis perferendis, neque at voluptatum expedita cumque libero voluptas amet mollitia reprehenderit laudantium.</div>
      <Comments/>
      <FormComment/>
    </div>
  )
}

export default BlogDetailPage
