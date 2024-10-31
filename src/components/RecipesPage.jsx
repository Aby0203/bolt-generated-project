import React from 'react';

function RecipesPage({ recipes }) {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Tüm Tarifler</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {recipes.map((recipe, index) => (
          <div key={index} className="card p-6">
            <h2 className="text-2xl font-semibold mb-3 text-indigo-600">{recipe.title}</h2>
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-700 mb-2">Malzemeler:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {recipe.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Hazırlanışı:</h3>
              <p className="text-gray-600">{recipe.instructions}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipesPage;
