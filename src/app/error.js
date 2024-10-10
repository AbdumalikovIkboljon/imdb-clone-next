'use client'

import { useEffect } from "react"

const error = ( { error, reset  }) => {

    useEffect(() => {
      console.error(error)
    }, [error])
  return (
    <div className="max-w-6xl mx-auto flex items-center justify-center mt-16">
      <h2 className='text-xl mr-3'>Something went wrong!</h2>
      <button
       className="text-white px-4 py-2 bg-amber-400 rounded-full hover:bg-amber-500 transition-colors duration-300"
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}

export default error