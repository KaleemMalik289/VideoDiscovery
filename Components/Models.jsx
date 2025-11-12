export function Models() {
  const models = [
    { name: 'YOLO', version: 'v8 AI Models' },
    { name: 'RAG Agent', version: 'v2 Architecture' },
    { name: 'GLM', version: 'Based on GPT-4 architecture' }
  ];

  return (
    <div className="text-center mb-8">
      <p className="text-sm text-gray-600 mb-4">Powered by OpenSource AI</p>
      <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
        {models.map((model, index) => (
          <div key={index}>
            <div className="font-semibold text-gray-700">{model.name}</div>
            <div className="text-xs">{model.version}</div>
          </div>
        ))}
      </div>
    </div>
  );
};