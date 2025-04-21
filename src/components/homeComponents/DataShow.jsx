import React, { useEffect, useState } from "react";

function IrisClassifier() {
  const [pyodide, setPyodide] = useState(null);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);
  const [inputs, setInputs] = useState({
    sepalLength: "",
    sepalWidth: "",
    petalLength: "",
    petalWidth: "",
  });
  const [result, setResult] = useState(null);

  useEffect(() => {
    // Load Pyodide from CDN
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.js";
    script.async = true;

    script.onload = async () => {
      try {
        const pyodideInstance = await window.loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/",
        });

        // Load required packages
        await pyodideInstance.loadPackage(["scikit-learn", "numpy"]);
        setPyodide(pyodideInstance);
        setInitializing(false);

        // Pre-load and train models
        await pyodideInstance.runPythonAsync(`
          from sklearn.datasets import load_iris
          from sklearn.neighbors import KNeighborsClassifier
          from sklearn.linear_model import LogisticRegression
          
          iris = load_iris()
          knn_model = KNeighborsClassifier(n_neighbors=3).fit(iris.data, iris.target)
          log_model = LogisticRegression(max_iter=200).fit(iris.data, iris.target)
        `);

        setLoading(false);
      } catch (error) {
        console.error("Pyodide initialization failed:", error);
        setLoading(false);
      }
    };

    script.onerror = () => {
      console.error("Failed to load Pyodide");
      setLoading(false);
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!pyodide || loading) return;

    setLoading(true);
    setResult(null);

    try {
      const features = [
        parseFloat(inputs.sepalLength),
        parseFloat(inputs.sepalWidth),
        parseFloat(inputs.petalLength),
        parseFloat(inputs.petalWidth),
      ];

      const prediction = await pyodide.runPythonAsync(`
        features = [${features}]
        prediction = knn_model.predict([features])[0]
        iris.target_names[prediction]
      `);

      setResult(prediction);
    } catch (error) {
      console.error("Prediction error:", error);
      setResult("Error making prediction");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>Iris Flower Classifier (CDN Pyodide)</h1>

      {initializing ? (
        <p>Loading Pyodide runtime... (This may take a minute)</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
          <div style={{ marginBottom: "15px" }}>
            <label>Sepal Length (cm): </label>
            <input
              type="number"
              placeholder="Enter num"
              name="sepalLength"
              value={inputs.sepalLength}
              onChange={handleInputChange}
              step="0.1"
              required
              style={{ marginLeft: "10px" }}
            />
          </div>

          {/* Repeat for other inputs */}

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "8px 16px",
              backgroundColor: loading ? "#ccc" : "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {loading ? "Predicting..." : "Predict"}
          </button>
        </form>
      )}

      {result && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            backgroundColor: "#f8f9fa",
          }}
        >
          <h3>Prediction Result:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default IrisClassifier;
