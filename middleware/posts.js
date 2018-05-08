import axios from 'axios';

export default function ( {params, store} ) {

  return axios.get('http://13.209.39.212:8080/api/category/'+params.id)
  .then ((res) => {
    store.commit('add', res.data)
  });

}
