import React from 'react'

const Main = () => {
  return (
    <div>
       <main className='contain'>
      <hero className="left">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="buttons">
          <button className="btn1">Shop Now</button>
          <button className="btn2">Category</button>
        </div>
        <div className="shop">
          <span>Also Available On</span>
          <div className="images">
            <img src="/flipkart.png" alt="logo" />
            <img src="/amazon.png" alt="logo" />
          </div>
        </div>
      </hero>
      <hero className="right">
        <img src="/shoe_image.png" alt="show" />
      </hero>
     </main>

    </div>
  )
}

export default Main
