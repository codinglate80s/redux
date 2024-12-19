import axios from 'axios';

const FIRE_BASE_API = import.meta.env.VITE_REACT_APP_FIRE_BASE_API;

console.log(FIRE_BASE_API);


export const addRecipeToApi = async (recipe) => {
    const response = await axios.post(FIRE_BASE_API + '/recipes.json', recipe);

    console.log('response', response.data);
};