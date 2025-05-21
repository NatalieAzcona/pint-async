import Card from "../Card/card";
import fetchApi from "./fetchApi";


const printImages = async (query) => {
   const homeContainer = document.querySelector('.images-container')
   if(homeContainer) homeContainer.innerHTML = '';

   try {
      const result = await fetchApi(query);
      result.forEach(image => {
         console.log('Imagen recibida:', image)
         const newCard = Card(image)
         homeContainer.appendChild(newCard);

      });
   } catch (error) {
      console.log(error);
   }
}

export default printImages;
