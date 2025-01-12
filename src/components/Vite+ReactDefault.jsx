import React, { Suspense, useState } from "react";
import './Vite+React.css';

// Custom LazyImage component that dynamically loads an image
function LazyImage({ importFunction }) {
  const [src, setSrc] = React.useState(null);

  React.useEffect(() => {
    if (importFunction) {
      importFunction()
        .then((module) => setSrc(module.default)) // Set image src to the imported image
        .catch((error) => console.error("Error loading image:", error)); // Error handling
    }
  }, [importFunction]);

  if (!src) return <div>Loading...</div>; // Placeholder when image is loading
  return <img src={src} alt="Logo" className="logo" />;
}

function Default() {
  const [count, setCount] = useState(0);

  // Dynamically import images using import()
  const reactLogo = () => import('../assets/react.svg');
  const viteLogo = () => import('/vite.svg');

  return (
    <div className="body">
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          {/* Lazy load the Vite logo */}
          <Suspense fallback={<div>Loading Vite logo...</div>}>
            <LazyImage importFunction={viteLogo} />
          </Suspense>
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          {/* Lazy load the React logo */}
          <Suspense fallback={<div>Loading React logo...</div>}>
            <LazyImage importFunction={reactLogo} />
          </Suspense>
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default Default;
