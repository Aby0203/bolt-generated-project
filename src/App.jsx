import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import RecipesPage from './components/RecipesPage';

function App() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-3">
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-indigo-600 hover:text-indigo-800 font-medium">Ana Sayfa</Link>
              </li>
              <li>
                <Link to="/recipes" className="text-indigo-600 hover:text-indigo-800 font-medium">Tarifler</Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={
              <>
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Tarif Yazıcı</h1>
                <div className="max-w-2xl mx-auto">
                  <RecipeForm addRecipe={addRecipe} />
                  <RecipeList recipes={recipes} />
                </div>
              </>
            } />
            <Route path="/recipes" element={<RecipesPage recipes={recipes} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
