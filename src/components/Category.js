import React from 'react';
import {useParams} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

function Category(){

    let query = new URLSearchParams(useLocation().search );

    let tipo = query.get('tipo');
    let subtipo = query.get('subtipo');

    return (<>
                <h4>Exemplo Página de Categoria usando URLSearchParams(useLocation().search )</h4>

                <p>Tipo : {tipo}</p>
                <p>Subtipo : {subtipo} </p>
            </>
    );
}

/*
function Category(){

    let {cat} = useParams();

    return (
        <>
            <h4>Category page</h4>
            <p>Page for the product {cat}</p>
        </>
    );
}*/

export default Category;