import axios from 'axios';

export default function ( {params, store} ) {

  return axios.get('http://13.209.39.212:8080/api/category')
    .then ((res) => {
      store.commit('addCategories', res.data)
    });

}
