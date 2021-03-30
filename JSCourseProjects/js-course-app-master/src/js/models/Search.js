// https library to better handle fetch
import axios from 'axios';
//import { key, proxy} from '../config';
import { key } from '../config';

export default class  Search {
  constructor(query) {
      this.query = query;
  }

  async getResults(query){
    try {
      //const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
      //const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);
      const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
      this.result = res.data.recipes;
      //console.log(this.result);
    } catch (error) {
        console.log(error);
    }
  }

}
