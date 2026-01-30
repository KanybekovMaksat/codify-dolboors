import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FileNode } from './file-tree-item';
import { ScratchBlocksViewer } from './scratch-blocks-viewer';
import { Info } from 'lucide-react';

interface CodeViewerProps {
  file: FileNode;
}

export function CodeViewer({ file }: CodeViewerProps) {
  const getLanguageForHighlighting = (lang?: string) => {
    switch (lang) {
      case 'python':
        return 'python';
      case 'javascript':
        return 'javascript';
      case 'html':
        return 'markup';
      case 'css':
        return 'css';
      case 'lua':
        return 'lua';
      default:
        return 'text';
    }
  };

  const renderContent = () => {
    if (file.language === 'scratch') {
      try {
        const blocks = JSON.parse(file.content || '[]');
        return <ScratchBlocksViewer blocks={blocks} />;
      } catch {
        return <div className="text-red-500">Ошибка загрузки блоков Scratch</div>;
      }
    }

    return (
      <div className="rounded-lg overflow-auto h-[400px] border border-gray-200">
        <SyntaxHighlighter
          language={getLanguageForHighlighting(file.language)}
          style={vscDarkPlus}
          showLineNumbers
          customStyle={{
            margin: 0,
            borderRadius: '0.5rem',
            fontSize: '14px',
          }}
        >
          {file.content || '// Файл пуст'}
        </SyntaxHighlighter>
      </div>
    );
  };

  const getLanguageLabel = () => {
    switch (file.language) {
      case 'python':
        return { name: 'Python', color: 'bg-yellow-100 text-yellow-800' };
      case 'javascript':
        return { name: 'JavaScript', color: 'bg-yellow-100 text-yellow-800' };
      case 'html':
        return { name: 'HTML', color: 'bg-orange-100 text-orange-800' };
      case 'css':
        return { name: 'CSS', color: 'bg-blue-100 text-blue-800' };
      case 'scratch':
        return { name: 'Scratch', color: 'bg-purple-100 text-purple-800' };
      case 'lua':
        return { name: 'Roblox Lua', color: 'bg-blue-100 text-blue-800' };
      default:
        return { name: 'Текст', color: 'bg-gray-100 text-gray-800' };
    }
  };

  const lang = getLanguageLabel();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold text-gray-800">{file.name}</h2>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${lang.color}`}>{lang.name}</span>
        </div>
      </div>

      {file.explanation && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">Что делает этот код?</h3>
              <p className="text-blue-800 text-sm leading-relaxed">{file.explanation}</p>
            </div>
          </div>
        </div>
      )}

      {renderContent()}
    </div>
  );
}
