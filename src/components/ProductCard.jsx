import React, { useState } from 'react'


export default function ProductCard(props) {
  const [count, setCount] = useState(0)
  const increaseval = () => setCount(count + 1)
  const decreaseval = () => setCount(count - 1)


  return (

    <div className='col-md-3'>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.brandName}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{props.collectionName}</h6>
          <p className="card-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum repellat quia laboriosam esse iusto error, necessitatibus laudantium quibusdam veritatis, perspiciatis quae expedita asperiores rem quis. Autem sapiente nulla excepturi eligendi.
          </p>
          <a href="#" className="card-link">
            {props.catogeryName}
          </a>
        </div>

        <div className="container text-center">
          {
            count > 0 ? (
            <>
              <button className="btn btn-dark mx-2" onClick={increaseval}>+</button>
              {count}
              <button className="btn btn-dark mx-2" onClick={decreaseval}>-</button>


            </>) : (<button className="btn btn-dark mx-2" onClick={increaseval}>Add to Cart</button>)
          }


        </div>
      </div>

    </div>
  )
}
