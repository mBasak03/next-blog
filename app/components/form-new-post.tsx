"use client"
import { ChangeEvent, FormEvent, useState } from "react"
import ReactTextareaAutosize from "react-textarea-autosize"

const inputClass= "w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 "

interface FormData{
    title: string,
    content: string
}

const FormNewPost= () => {
    const [formData, setFormData]= useState<FormData>({
        title: '',
        content: ''
    })
const handleChange= (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    e.preventDefault();
    const {name, value}= e.target;
    setFormData({
        ...formData,
        [name]: value
    })
}
const handleSubmit= (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log("Form Data", formData)
}
  return (
    <form className=" max-w-md mx-auto p-4" onSubmit={handleSubmit}>
        <div className=" mb-4">
            <input type="text" className={inputClass} placeholder="Enter the Title" name="title" value={formData.title} 
            onChange={handleChange}
            />
        </div>
        <div className=" mb-4">
            <ReactTextareaAutosize minRows={5} name="content" className={inputClass} placeholder="Enter the Content" value={formData.content}  onChange={handleChange}/>
        </div>
        <button 
            type="submit"
            className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
        >Submit</button>
    </form>
  )
}

export default FormNewPost
