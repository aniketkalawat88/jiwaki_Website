import React from 'react'

function BlogNext() {
  return (
    <div>
    <div className="flex float-right mx-20 space-x-5">
      <ul className="flex shadow-2xl p-2  align-middle shadow-black border rounded-lg">
        <li>Show 10</li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.59 8.29504L12 12.875L7.41 8.29504L6 9.70504L12 15.705L18 9.70504L16.59 8.29504Z"
              fill="#187618"
            />
          </svg>
        </li>
      </ul>
      <ul className="flex shadow-2xl shadow-black rounded-lg border">
        <li className=" p-2"><i class="fa-solid fa-angle-left"></i></li>
        <li className="border p-2">1</li>
        <li className="border p-2">2</li>
        <li className="border p-2">3</li>
        <li className=" p-2"><i className="fa-solid fa-angle-right"></i></li>
      </ul>
    </div>
      
    </div>
  )
}

export default BlogNext
