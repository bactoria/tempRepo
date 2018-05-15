import axios from 'axios';

export default function ( {params, store} ) {

  return axios.get('http://127.0.0.1:8080/api/post/'+params.id)
    .then ((res) => {
      store.commit('addPost', res.data)
    });

}
