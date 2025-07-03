import { useState } from "react";

const SVGPathTester = () => {
  const [viewBox, setViewBox] = useState("30 125 1000 1000");
  const [testPath, setTestPath] = useState("M 407.399 740.124 L 402.247 595.852 L 397.094 562.36 L 365.708 566.496 L 357.683 514.335 L 335.615 434.087 L 285.461 444.118 L 269.411 389.951 L 284.409 353.852 L 348.343 348.805 L 281.926 319.28 L 303.237 301.964 L 384.487 301.964 L 364.608 153.392 L 441.341 133.034 L 524.338 192.541 L 533.734 294.33 L 663.711 250.483 L 760.801 286.5 L 754.537 309.99 L 612.033 317.82 L 568.186 385.157 L 607.335 388.289 L 621.429 422.74 L 616.731 463.456 L 563.488 505.737 L 514.943 615.356 L 571.318 598.13 L 591.676 612.224 L 596.373 659.203 L 613.599 659.203 L 610.467 671.731 L 533.734 654.505 L 519.64 767.256 L 408.456 757.86 Z");
  const [showPath, setShowPath] = useState(true);
  const [pathColor, setPathColor] = useState("#ff0000");

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold">SVG Path Tester</h2>
      
      {/* Controls */}
      <div className="space-y-4 p-4 bg-gray-100 rounded-lg">
        <div>
          <label className="block text-sm font-medium mb-2">ViewBox:</label>
          <input
            type="text"
            value={viewBox}
            onChange={(e) => setViewBox(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="0 0 1000 1000"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">SVG Path:</label>
          <textarea
            value={testPath}
            onChange={(e) => setTestPath(e.target.value)}
            className="w-full h-32 p-2 border rounded font-mono text-sm"
            placeholder="M 380 220 L 420 180..."
          />
        </div>
        
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={showPath}
              onChange={(e) => setShowPath(e.target.checked)}
              className="mr-2"
            />
            Show Path
          </label>
          
          <div>
            <label className="block text-sm font-medium mb-1">Path Color:</label>
            <input
              type="color"
              value={pathColor}
              onChange={(e) => setPathColor(e.target.value)}
              className="w-16 h-8 border rounded"
            />
          </div>
        </div>
      </div>

      {/* Image with SVG Overlay */}
      <div className="relative w-full max-w-4xl mx-auto border rounded-lg overflow-hidden">
        {/* Background Image */}
        <img 
          src="/lovable-uploads/b58fa7ba-714d-4ee7-ad9b-59f80d42244c.png" 
          alt="Living Room Plant Collection"
          className="w-full h-auto object-contain"
        />
        
        {/* SVG Overlay */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox={viewBox}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Grid for reference */}
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,0,0,0.2)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Test Path */}
          {showPath && (
            <path
              d={testPath}
              fill="transparent"
              stroke={pathColor}
              strokeWidth="3"
              className="pointer-events-auto cursor-pointer"
            />
          )}
        </svg>
      </div>

      {/* Path Info */}
      <div className="p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold mb-2">Path Information:</h3>
        <p><strong>ViewBox:</strong> {viewBox}</p>
        <p><strong>Path Length:</strong> {testPath.length} characters</p>
        <p><strong>Commands:</strong> {testPath.split(/[MLHVCSQTAZ]/).length - 1}</p>
      </div>

      {/* Copy to Component */}
      <div className="p-4 bg-green-50 rounded-lg">
        <h3 className="font-semibold mb-2">Ready to Copy:</h3>
        <pre className="bg-white p-3 rounded border text-sm overflow-x-auto">
{`{
  id: "center-monstera",
  name: "Monstera Deliciosa", 
  path: "${testPath}",
  viewBox: "${viewBox}",
  // ... other properties
}`}
        </pre>
      </div>
    </div>
  );
};

export default SVGPathTester; 