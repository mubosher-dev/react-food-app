import React from 'react'

function Result({data}) {
 
  console.log(data);
  return (
    <div className='food__cardItem'>
        {data ? (
            data.map((data,index) => {
                return (
                    <div key={data.idMeal} className='food_card'>
                        <img
                        className='food_img' 
                        src={data.strMealThumb} alt={data.strCategory} />
                        <div className="food_description">
                            <h1 className='food__title'>{data.strMeal}</h1>
                            <p>{data.strInstructions.slice(0,300)}</p>
                            <ul className='food_list'>
                                <li>{data.strIngredient1}</li>
                                <li>{data.strIngredient2}</li>
                                <li>{data.strIngredient3}</li>
                                <li>{data.strIngredient4}</li>
                                <li>{data.strIngredient5}</li>
                            </ul>
                            <a className='food_learn-link' target={"_blank"} href={`${data.strYoutube}`}> Learn Cooke </a>
                        </div>
                    </div>
                )
            })
        ) : (
            ``
        ) }
    </div>
  )
}

export default Result