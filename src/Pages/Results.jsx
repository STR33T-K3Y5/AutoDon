import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import partsData from '../components/partsData'; // Adjust path if needed
import '../App.css';

export default function Results() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('search')?.toLowerCase() || '';

  // Defensive filtering & show all if query is empty
  const filteredParts = query === ''
    ? partsData
    : partsData.filter((part) =>
        [part.vin, part.name, part.modelNumber, part.carModel]
          .filter(Boolean) // remove null/undefined
          .some(field => field.toLowerCase().includes(query))
      );

  console.log('Search query:', query);
  console.log('Filtered parts:', filteredParts);

  return (
    <>
      <Navbar />
      <div className="results-container">
        {filteredParts.length > 0 ? (
          filteredParts.map((part) => (
            <div key={part.id} className="part-card">
              <img src={part.image} alt={part.name} className="part-image" />
              <h3>{part.name}</h3>
              <p><strong>Model No.:</strong> {part.modelNumber}</p>
              <p><strong>Car Model:</strong> {part.carModel}</p>
              <p><strong>Supplier:</strong> {part.supplier}</p>
              <p><strong>Price:</strong> ${part.price.toFixed(2)}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No matching parts found.</p>
        )}
      </div>
    </>
  );
}
