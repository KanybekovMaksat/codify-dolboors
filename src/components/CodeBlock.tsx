import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { CodeFile } from '../types';

interface CodeBlockProps {
  file: CodeFile;
}

export function CodeBlock({ file }: CodeBlockProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const languageLabels: Record<string, string> = {
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    python: 'Python',
    lua: 'Lua',
    scratch: 'Scratch',
  };

  return (
    <div className="code-block">
      <button
        className="code-block-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="code-block-header-left">
          {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          <span className="code-filename">{file.filename}</span>
          <span className="code-language">{languageLabels[file.language]}</span>
        </div>
      </button>

      {isExpanded && (
        <div className="code-block-content">
          <div className="code-explanation">
            <h4>Объяснение:</h4>
            <p>{file.explanation}</p>
          </div>
          <div className="code-wrapper">
            <pre>
              <code className={`language-${file.language}`}>{file.content}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
