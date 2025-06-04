
import SkipSelector from './components/SkipSelector';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        {/* Header Section */}
        <div className="bg-teal-700 text-white py-8 flex items-center justify-center">
          <div className="text-center max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Skip Hire Made Simple</h1>
            <p className="text-teal-100">Choose the right skip for your project in Lowestoft (NR32)</p>
          </div>
        </div>

        {/* Skip Selector */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <SkipSelector />
        </div>

        {/* FAQ */}
        <FAQ />
      </main>
    </div>
  );
}

export default App;
