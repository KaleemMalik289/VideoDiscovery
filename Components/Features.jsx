export function Features () {
  const features = [
    { color: 'blue', label: 'Object Detection' },
    { color: 'green', label: 'Speech Recognition' },
    { color: 'red', label: 'Semantic Analysis' }
  ];

  return (
    <div className="flex items-center justify-center gap-4 mb-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-sm">
          <div className={`w-2 h-2 rounded-full bg-${feature.color}-500`}></div>
          <span className="text-gray-700">{feature.label}</span>
        </div>
      ))}
    </div>
  );
};