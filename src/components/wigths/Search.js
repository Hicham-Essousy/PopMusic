import React from 'react'

function Search(props) {
    
    return (
        <div className="searchbar mt-2">
            <form action="#" onSubmit = {props.submitSearch}>
              <div className="row">
                  <div className="col-md-10">
                      <div className="form-group">
                      <input className="form-control " type="text" placeholder="Search" onChange={props.reqSearch} />
                      </div>
                  </div>
                  <div className="col-md-2">
                      <div className="form-group">
                      <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fas fa-search"></i>&nbsp; Search</button>
                      </div>
                  </div>
              </div>

            </form>
            
        </div>
    )
}

export default Search;

