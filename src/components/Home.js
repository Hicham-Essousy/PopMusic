import React, { Component } from 'react'
import Header from './wigths/Header'
import * as actions from './Fetch'
import Card from './wigths/Card'
import Search from './wigths/Search'
import './home.css'
class Home extends Component {
    state ={
        term : '',
        albums : []
      }
    componentDidMount(){
      actions.getAlbum().then(
        items => this.setState({
          albums : items
        })
      ); 
    }
    reqSearch = (e) => {
      this.setState({
        term : e.target.value
      });
    }
    submitSearch = (e) =>{
      e.preventDefault();
      actions.getAlbum(this.state.term).then(
        items => this.setState({
          albums : items
        })
      ); 
  }
    render() {
        return (
            <div className="top">
                <div className="row mt-2">
                  <div className="col-md-10 mx-auto">
                        
                        <Header />
                        
                        <Search  reqSearch = {this.reqSearch}  submitSearch = {this.submitSearch}/>
                        
                        <div className="row mt-2">
                        {
                            this.state.albums.map((item) => (
                                  <Card items={item}/>
                            ))
                        }
                        </div>
                
            </div>
            </div>
                  </div>
        )
    }
}
export default Home;