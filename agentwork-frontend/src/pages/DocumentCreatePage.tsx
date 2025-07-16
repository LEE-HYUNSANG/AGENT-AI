import { useState } from 'react';

const DocumentCreatePage = () => {
  const [title, setTitle] = useState('');
  const [prompt, setPrompt] = useState('');
  const [useResearch, setUseResearch] = useState(false);

  const handleSubmit = () => {
    console.log({ title, prompt, useResearch });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
        className="w-full border p-2 rounded"
      />
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="prompt"
        rows={6}
        className="w-full border p-2 rounded"
      />
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={useResearch}
          onChange={(e) => setUseResearch(e.target.checked)}
        />
        <span>웹 리서치 포함</span>
      </label>
      <button onClick={handleSubmit} className="px-4 py-2 rounded bg-primary text-white">
        제출
      </button>
    </div>
  );
};

export default DocumentCreatePage;
