import React from "react"
import { Link } from "react-router-dom"

const Breadcrumb = props => {
  return (
    <div className="bg-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-0">
            <Link to="/">Home</Link> <span className="mx-2 mb-0">/</span>{" "}
            <strong className="text-black">{props.pageName}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb
