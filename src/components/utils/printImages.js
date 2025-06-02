import Card from "../Card/card";
import fetchApi from "./fetchApi";

const printImages = async (query) => {

   const imagesContainer = document.querySelector('.images-container');
   let messageContainer = document.querySelector('.message-container');

   if (!messageContainer) {
      messageContainer = document.createElement('div');
      messageContainer.className = 'message-container';
      imagesContainer.before(messageContainer);
   }

   messageContainer.textContent = ''; 
   imagesContainer.innerHTML = ''; 

  try {
   
      if (!query) {
         imagesContainer.innerHTML = '';
         messageContainer.textContent = '';
         query = 'personas';
      }

      let result = await fetchApi(query);

      if (!result || result.length === 0) {
         messageContainer.textContent = `   No se encontraron resultados sobre "${query}", prueba con otra búsqueda :)`
         result = await fetchApi("gatos");
      }
      
         result.forEach(image => {
            const newCard = Card(image);
            imagesContainer.appendChild(newCard);
         });

   } catch (error) {
      console.log(error);
      messageContainer.textContent = 'Error al obtener imágenes'
   }
}

export default printImages;

