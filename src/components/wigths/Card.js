
import React, { Component } from 'react'
import './hed.css';
import {Link} from 'react-router-dom'
import swal from 'sweetalert'
export default class Card extends Component {
    
    addFavorite = (album) =>{
        let oldFavorite = JSON.parse(localStorage.getItem('favorites')) || [];
        if(this.checkAlbums(oldFavorite,album)){
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this imaginary file!",
                icon: "warning",
                
              });
            return false;
        }
        oldFavorite.push(album);
        let favorites = oldFavorite;
        localStorage.setItem('favorites', JSON.stringify(favorites));
     }
    
    checkAlbums = (albums,album) => {
        let found = albums.some((item)=>{
            return item.album.id === album.album.id;
        });
        return found;
    }

    render() {
        return (
            <div className="col-md-3 mb-2">
            <div className="card border-dark" id="carda">
                <img src={this.props.items.album.cover_big} alt="" className="card-img-top"/>
                <div className="card-body">
                    <span className="text-primary"><strong>{this.props.items.artist.name}</strong></span>
                    <div className="card-title">
                        <strong>{this.props.items.title}</strong>
                    </div>
                    
                </div>
                <div className="card-footer">
                    <div className="links">
                    <Link to={`/details/${this.props.items.album.id}`} class="btn btn-outline-primary" href="#" role="button"><i className="fas fa-info text-dark" id="link"></i>&nbsp; info</Link>
                    <a className="btn btn-outline-primary" onClick={() => this.addFavorite(this.props.items)} href="#" role="button"><i className="fas fa-star text-dark"></i>&nbsp;Add</a>
                    </div>
                </div>
            </div>
       </div>
        )
    }
}
