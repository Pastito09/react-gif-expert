import { useState } from 'react'


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
    // onInputChange = ({ target }) => setInputValue(target.value); desestructura el target del event
        //console.log( event.target.value );
        setInputValue( event.target.value );

    };
    const onSubmit = (event) => {
        event.preventDefault();
        if ( inputValue.trim().length <= 1 ) return; //se hace para que cuando se cumple que hay menos de un caracter o uno solo, salga de funcion y no ejecute el setCategories

        //setCategories( categories => [inputValue, ...categories ] );
        onNewCategory( inputValue.trim() );
        setInputValue("");
           
    
    }

  return (
    <form onSubmit={( event ) => onSubmit(event) } >
    <input 
        type="text"
        placeholder="Buscar GIF"
        value={ inputValue }
        onChange= { onInputChange }
        //onChange={ (event)=> onInputChange(event) } es lo mismo que arriba por que event en un argumento de funcion pasada a la funcion onInputChange 
    />
    </form>
  )
}
