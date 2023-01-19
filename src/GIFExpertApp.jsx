import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GIFExpertApp = () => {
  
  const [ categories, setCategories ] = useState( ['One Punch'] ); // un arreglo para inicializar el estado
  
  const onAddCategory = ( newCategory ) => {
        //console.log( newCategory );
        if (categories.includes(newCategory)) return;
        setCategories ([newCategory, ...categories ]);     
        
        //setCategories ([...categories, 'Valorant' ]); //el spread operator es para mantener el arreglo original de "categories"
        // setCategories( cat => [ ...cat, 'Valorant' ]); 
    } ; 

    return (
   <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory  
          //setCategories={ setCategories } 
          onNewCategory={ (value) => onAddCategory(value) }
        
        />

        {/* Listado de Gif */}
       
{
  categories.map( (category) => (
    <GifGrid
      key={ category }
      category={ category } />
  )
  )
}

        {/*<ol> esto es sustituido por <GifGrid />
         { 
         categories.map( (category) => 
                (
                <div key={ category }>/*tiene que tener el key el elemento que se esta iterando/
                  <h3>{ category }</h3>
                  <li>{ category }</li>
                </div>
                   )
                ) 
         }
      </ol>  */}
    </>
  )
}
