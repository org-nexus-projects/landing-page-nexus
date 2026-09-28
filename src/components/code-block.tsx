import { useEffect, useState } from 'react';
import { codeToHtml } from 'shiki';

interface CodeBlockProps {
  code: string;
  lang?: string;
}

export function CodeBlock({ code, lang = 'bash' }: CodeBlockProps) {
  const [html, setHtml] = useState('');
  
  useEffect(() => {
    codeToHtml(code.trim(), {
      lang,
      theme: 'github-dark',
    }).then(setHtml);
  }, [code, lang]);

  if (!html) {
    return (
      <pre className="my-6 rounded-lg overflow-hidden shadow-lg bg-gray-900 p-6">
        <code className="text-gray-300">{code}</code>
      </pre>
    );
  }

  return (
    <div 
      className="my-6 rounded-lg overflow-hidden shadow-lg [&_pre]:!m-0 [&_pre]:!p-6"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
