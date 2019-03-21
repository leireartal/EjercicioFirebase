import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';
import './bootstrap.min.css';
import './FullPost.css';


class FullPost extends Component {
    constructor(props){
        super(props);
    }
    state = {
        
        loadedPost: null
    }

    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.loadedPost || this.state.loadedPost.idb !== this.props.id) {
                console.log("En fullPost: "+this.props.id);
                axios.get('/Productos.json?orderBy="$key"&equalTo="' + this.props.id + '"')
              // axios.get('/Productos.json?' + this.props.id + '"')
                    .then(response => {
                        console.log(response);
                        const posts = [];
                        for (let key in response.data) {
                            posts.push({
                                ...response.data[key],
                                idb: key,
                                
                            });
                        }
                       
                        this.setState({ loadedPost: posts[0] });
                        
                        // console.log("Voy a poner en loaded post: "+posts[this.props.id].Nombre);
                        // console.log("El id es:  "+this.props.id);
                    });
            }
        }
    }

    deleteUpdatePostHandler = () => {
        axios.delete('/entradas/' + this.props.id + '.json')
            .then(response => {
                console.log(response);
            });
        // axios.put('/posts/' + this.props.id + '.json', {
        //     ...this.state.loadedPost,
        //     author: "new author added " + new Date()
        // })
        //     .then(response => {
        //         console.log(response);
        //     });
    }

    render() {
        const style = {
            width: '90%',
            border: '1px solid #eee',
            margin: '30px',
            cursor: 'pointer', 
          };
          const styleI = {
            width: '380px',
            
          };
        
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.Nombre}</h1>
                    <div style={style}>
                         <p>{this.state.loadedPost.Descripcion}</p>
                         <img src={this.state.loadedPost.Imagen} style={styleI}></img>
                    </div>

                    <div className="input-group input-group-sm mb-3">
						<div className="input-group-prepend" >
						<span className="btn btn-success" className="input-group-text"  id="inputGroup-sizing-sm">PRECIO:</span>
					    </div>
					    <input id="total"  type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={this.state.loadedPost.Precio}>
					</input></div>
                    {/* <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deleteUpdatePostHandler} className="Delete">Delete or Update</button>
                    </div> */}
                </div>

            );
        }
        return post;
    }
}

export default FullPost;