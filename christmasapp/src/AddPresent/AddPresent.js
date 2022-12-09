import React from 'react'
import { useForm } from "react-hook-form";

export function AddPresent({name, visibility, addPresent}) {

const {
  register,
  handleSubmit,
  reset, formState: {errors}
} = useForm();

const onSubmit = (data) => {
  visibility()
  addPresent(data)
  reset()
}


  return (
    <div>AddPresent
      <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
        <input type="text"
               name="name"
               {...register("name", {
                required: true              
               })}
               defaultValue="">              
        </input>
      {errors.name && errors.name.type === "required" && (
        <p>Name must not be left blank.</p>
      )}
      <label>Present</label>
        <input type="text"
               name="present"
               {...register("present", {
                required: true
               })}
               defaultValue="">
        </input>
      {errors.present && errors.present.type === "required" && (
        <p>Present must not be left blank.</p>
      )}
        <button type="submit">Add</button>
      </form>
    </div>
  )

}
