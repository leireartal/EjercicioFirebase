import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount () {
      
        axios.get( '/Productos.json' )
            .then( response => {
                console.log( response.error );
                let posts = [];
               
                for (let key in response.data) {
                  
                    posts.push({
                        ...response.data[key],
                        idb: key,
                        //id:posts.length-1,
                    });
                    // if(!posts[key].id){
                    //     posts.push({
                    //         ...posts[key],
                    //      id:posts.length-1,
                    //     }
                    // }
                }
               
               // posts = posts.slice(0, 4);
                
                // const updatedPosts = posts.map(post => {
                //     return {
                //         ...post,
                //         author: 'Max'
                //     }
                // });
                this.setState({posts: posts});
              // console.log("El id del primer post es: "+this.state.posts[1].id);
                console.log(response);
                
            } )
            .catch(error => {
                // console.log(error);
                this.setState({error: true});
               
            });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        //console.log("Estos son los posts: "+this.state.posts.length);
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post 
                    key={post.id} 
                    title={post.Descripcion} 
                    author={post.Nombre}
                    precio={post.Precio}
                    url={post.Imagen}
                    clicked={() => this.postSelectedHandler(post.idb)} />;
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost id={this.state.posts.length}/>
                </section>
            </div>
        );
    }
}

export default Blog;