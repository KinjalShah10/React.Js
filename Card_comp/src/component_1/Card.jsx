import React from 'react'

//username,btn Text are the props in react which give each card the differnt value.
//visit me is a default value given 
function Card({username, btnText="visit me"})
 {
    console.log(username);
  return (
    <div className="relative h-[400px] w-[300px] rounded-md ">
  <img
    src="../public/Feedback BG.jpg"
    alt="Users Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{username}</h1>
    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      {btnText } →  
      {/* What if we forget to pass btn text when working in a team we can pass some defaault value 
      {btnText || "visit me"} */}
    </button>
    
  </div>
</div>
  )
}

export default Card







