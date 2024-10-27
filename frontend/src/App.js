import React, { useState } from 'react';
import { distributeCards } from './Api';

function App() {
  const [totalContestant, setTotalContestant] = useState('');
  const [error, setError] = useState(null);
  const [distribution, setDistribution] = useState(null);

  const handleInputChange = (e) => {
    setTotalContestant(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setDistribution(null);

    //get data from API / backend
    try {
      const result = await distributeCards(totalContestant);
      setDistribution(result);
    } catch (errMessage) {
      setError(errMessage);
    }
  };

  const handleReset = () => {
    setTotalContestant('');
    setError(null);
    setDistribution(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Card Deck</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="totalContestant" className="block text-sm font-medium text-gray-700">
              Please input number of contestant
            </label>
            <input
              type="number"
              id="totalContestant"
              value={totalContestant}
              onChange={handleInputChange}
              min="1"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter a number"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Distribute Cards
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="w-full bg-red-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Reset
          </button>
        </form>

        {error && (
          <p className="mt-4 text-sm text-red-600 text-center">{error}</p>
        )}

        {distribution && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">Card Distribution:</h2>
            <div className="mt-2 space-y-2">
              {distribution.map((personCards, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Contestant {index + 1}</h3>
                  <p className="text-sm text-gray-700">{personCards}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;