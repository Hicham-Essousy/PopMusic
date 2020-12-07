import React, { Component } from 'react'
import Header from './wigths/Header'
import * as actions from './wigths/fetchTrack'
import Tracks from './wigths/tracks'
import './wigths/hed.css'
class Deatels extends Component {
   state = {
       albums : [],
       traks : []
   }
    componentDidMount(){
        actions.getTrak(this.props.match.params.id).then(
          album => this.setState({
            albums : album,
            traks : album.tracks.data
          })
        ); 
      }
     
      miniCarde = () =>{
       return  (<div className="col-md-4 mb-2 ">
                  <div className="card border-dark" >
                     <img src={this.state.albums.cover_big} alt="" className="card-img-top"/>
                     <div className="card-body">
                     
                     <span className="text-primary">{this.state.albums.release_date}</span>
                     <div className="card-title">
                         <strong>{this.state.albums.title}</strong>
                     </div>
                
                  </div>
                  <div className="card-footer">
                               <div className="link">
                               <a class="btn btn-outline-primary" href="#" role="button"><i className="fas fa-star text-dark"></i>&nbsp;Add</a>
                               </div>
                           </div>
           
        </div>
        </div>
        
        )
      }
    render() {
        
        return (
            <div className="container">
                <div className="row mt-2">
                  <div className="col-md-10 mx-auto">
                        
                        <Header />
                        <div className="row mt-2">
                           {this.miniCarde()}
                           <div className="col-md-8" id="track">
                          
                             <Tracks item={this.state.traks} />
           
                            
                            </div>

                        </div>
            </div>
            
            </div>
            </div>
        )
    }
}
export default Deatels;