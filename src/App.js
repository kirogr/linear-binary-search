import { useState } from "react";

function App() {
  const charArray = [
    { id: 1, value: "A" },
    { id: 2, value: "B" },
    { id: 3, value: "C" },
    { id: 4, value: "D" },
    { id: 5, value: "E" },
    { id: 6, value: "F" },
    { id: 7, value: "G" },
    { id: 8, value: "H" },
    { id: 9, value: "I" },
    { id: 10, value: "J" },
    { id: 11, value: "K" },
    { id: 12, value: "L" },
    { id: 13, value: "M" },
    { id: 14, value: "N" },
    { id: 15, value: "O" },
    { id: 16, value: "P" },
    { id: 17, value: "Q" },
    { id: 18, value: "R" },
    { id: 19, value: "S" },
    { id: 20, value: "T" },
    { id: 21, value: "U" },
    { id: 22, value: "V" },
    { id: 23, value: "W" },
    { id: 24, value: "X" },
    { id: 25, value: "Y" },
    { id: 26, value: "Z" },
  ];

  const [listSize, setListSize] = useState(charArray.length);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleLinearSearch = () => {
    let results = [];
  
    for (let i = 0; i < charArray.length; i++) {
      console.log(charArray[i].value === searchValue ? `Found! ${charArray[i].value}` : `Checking ${charArray[i].value}`);
      if (charArray[i].value === searchValue) {
        results.push(i);
        break
      }
    }
    
    setSearchResults(results);
  };

  const handleBinarySearch = () => {
    const list = charArray.map((char) => char.value);
    const searchValueIndex = list.indexOf(searchValue);
    console.log(`searchValueIndex: ${searchValueIndex}, searchValue: ${searchValue}`)
    const searchResults = [];
    if(searchValueIndex !== -1) {
      searchResults.push(searchValueIndex);
    }

    setSearchResults(searchResults);
  };  
  
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-2xl font-bold mb-6">Search</h1>
          <div className="mb-6">
            <label htmlFor="list-size" className="font-medium mb-1 block">List size</label>
            <input type="number" id="list-size" value={listSize} onChange={e => setListSize(parseInt(e.target.value))} className="w-full border-gray-300 rounded-md shadow-sm focus:border-teal-400 focus:ring focus:ring-teal-400 focus:ring-opacity-50" />
          </div>
          <div className="mb-6">
            <label htmlFor="search-value" className="font-medium mb-1 block">Search value</label>
            <input type="text" id="search-value" value={searchValue} onChange={e => setSearchValue(e.target.value)} className="w-full border-gray-300 rounded-md shadow-sm focus:border-teal-400 focus:ring focus:ring-teal-400 focus:ring-opacity-50" />
          </div>
          <div className="mb-6">
            <button onClick={handleLinearSearch} className="bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Linear search</button>
            <button onClick={handleBinarySearch} className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2">Binary search</button>
          </div>
          {searchResults.length > 0 && (
            <div className="mt-6">
              <p className="font-medium mb-1">Search Results:</p>
              <ul>
                {searchResults.map(result => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App;