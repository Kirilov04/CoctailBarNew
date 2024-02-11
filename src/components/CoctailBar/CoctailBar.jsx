import React, { useState, useEffect } from 'react';
import getCoctails, { useFetchCoctails } from '../../hooks/useFetchCoctails';
import { CoctailBarDetails } from '../CoctailBarDetails/CoctailBarDetails';
import { NavLink } from 'react-router-dom';
import './CoctailBar.css'; 

const GET_COCTAILS = "filter";
const COCTAILS_QUERY_DATA = "c=Ordinary_Drink";

const CoctailBar = () => {
    const { data } = useFetchCoctails(GET_COCTAILS, COCTAILS_QUERY_DATA);

    return (
        <div className="container">
            <h1>CoctailBar</h1>
            <div className="grid-container">
                {
                    data?.drinks.map((drink) => (
                        <div key={drink.idDrink}>
                            <NavLink to={drink.idDrink}>
                                <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                                <p>{drink.strDrink}</p>
                            </NavLink>
                            
                        </div>
                        
                    ))
                }
            </div>
        </div>
    );
}

export default CoctailBar;
