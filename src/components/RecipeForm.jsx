import React, { useState } from 'react';

function RecipeForm({ addRecipe }) {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ title, ingredients: ingredients.split('\n'), instructions });
    setTitle('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Yeni Tarif Ekle</h2>
      <div className="mb-4">
        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-700">Başlık:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="ingredients" className="block mb-2 text-sm font-medium text-gray-700">Malzemeler (her satıra bir tane):</label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="input"
          rows="4"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="instructions" className="block mb-2 text-sm font-medium text-gray-700">Hazırlanışı:</label>
        <textarea
          id="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="input"
          rows="4"
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Tarif Ekle
      </button>
    </form>
  );
}

export default RecipeForm;
