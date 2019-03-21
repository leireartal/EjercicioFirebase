import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../../axios';

import './NewPost.css';

class NewPost extends Component {
    state = {
        Nombre: '',
        Descripcion: '',
        Precio: '',
        Imagen:'',
        id:0,
    }

    postDataHandler = () => {
        const data = {
            Nombre: this.state.Nombre,
            Descripcion: this.state.Descripcion,
            Precio: this.state.Precio,
            Imagen: this.state.Imagen,
            id:this.props.id,
        };
        axios.post('/Productos.json', data)
            .then(response => {
                alert('Saved order');
                //console.log(response);
            }).catch(error => {
                 console.log(error);
                // this.setState({error: true});
                alert('Error order');
            });
    }

    render () {
        return (
            <div className="NewPost">
                <h3>Añada un PC a nuestra base de datos</h3>
                <label>Nombre</label>
                <input type="text" value={this.state.Nombre} onChange={(event) => this.setState({Nombre: event.target.value})} />
                <label>Descripcion</label>
                <textarea rows="4" value={this.state.Descripcion} onChange={(event) => this.setState({Descripcion: event.target.value})} />
                <label>Precio</label>
                <input type="text" value={this.state.Precio} onChange={(event) => this.setState({Precio: event.target.value})}>
                    {/* <option value="Max">Max</option>
                    <option value="Manu">Manu</option> */}
                {/* </select> */}
                </input>
                <label>Imagen</label>
                <input type="text" value={this.state.Imagen} onChange={(event) => this.setState({Imagen: event.target.value})}>
                </input>
                {/* <label>Imagen</label>
                <input type="text" value={this.state.id} onChange={(event) => this.setState({id: event.target.value})}></input> */}
                <button onClick={this.postDataHandler}>Add a PC</button>
            </div>
        );
    }
}

export default NewPost;