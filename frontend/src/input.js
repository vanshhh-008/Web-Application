import React from 'react'

export default function Input(props) {
  return (
    <>
    <title>{props.title2}</title>
<div className="container">

<div className="row height d-flex justify-content-center align-items-center">

  <div className="col-md-8">

    <div className="search">
      <i className="fa fa-search"></i>
      <input type="text" className="form-control" placeholder="Search Here !!"/>
      <button className="btn btn-success">Search</button>
    </div>
    
  </div>
  </div>
  </div>
    </>
  )
}
