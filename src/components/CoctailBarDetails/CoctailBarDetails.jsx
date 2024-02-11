import React from 'react';
import { useFetchCoctails } from '../../hooks/useFetchCoctails';
import { useParams, useNavigate } from 'react-router';

const GET_COCTAIL_DETAILS = "lookup";

const CoctailBarDetails = () => {
    const params = useParams();
    const navigate = useNavigate();
    const { data } = useFetchCoctails(GET_COCTAIL_DETAILS, `i=${params.id}`);

    return (
        <>
            <button onClick={() => navigate(-1)}>Go back</button>
            <div>
                {
                    data?.drinks.map((drink) => (
                        <div key={drink.idDrink}>
                            <h2>{drink.strDrink}</h2>

                            <p1>Glass type:</p1>
                            <ul>
                                <li1>{drink.strGlass}</li1>
                            </ul>
                            <p2>Instructions:</p2>
                            <ul>
                                <li2>{drink.strInstructions}</li2>
                            </ul>
                            <p3>Measure:</p3>
                            <ul>
                                <li3>{drink.strMeasure1} {drink.strMeasur2}</li3>
                            </ul>
                            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                           
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default CoctailBarDetails;
