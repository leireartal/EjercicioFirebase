import axios from 'axios';

const instance = axios.create({
    //baseURL: 'https://my-demoblog.firebaseio.com/'
    baseURL: 'https://firstproject-74399.firebaseio.com/'
});
 //instance.defaults.headers.common['Access-Control-Allow-Origin']= '*';
//axios.defaults.headers['Access-Control-Allow-Origin: ']='*';


export default instance;