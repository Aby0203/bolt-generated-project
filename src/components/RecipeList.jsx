import React from 'react';

function RecipeList({ recipes }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Son Eklenen Tarifler</h2>
      {recipes.slice(-3).map((recipe, index) => (
        <div key={index} className="card mb-6 p-6">
          <h3 className="text-xl font-semibold mb-3 text-indigo-600">{recipe.title}</h3>
          <div className="mb-4">
            <h4 className="font-medium text-gray-700 mb-2">Malzemeler:</h4>
            <ul className="list-disc list-inside text-gray-600">
              {recipe.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Hazırlanışı:</h4>
            <p className="text-gray-600">{recipe.instructions}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
