import { ChevronRight, ChevronDown, FileCode, Folder, FolderOpen } from 'lucide-react';
import { useState } from 'react';

export interface FileNode {
  id: string;
  name: string;
  type: 'file' | 'folder';
  language?: 'python' | 'javascript' | 'html' | 'css' | 'scratch' | 'lua';
  children?: FileNode[];
  content?: string;
  explanation?: string;
}

interface FileTreeItemProps {
  node: FileNode;
  level: number;
  onFileSelect: (node: FileNode) => void;
  selectedId: string | null;
}

export function FileTreeItem({ node, level, onFileSelect, selectedId }: FileTreeItemProps) {
  const [isOpen, setIsOpen] = useState(level === 0);

  const handleToggle = () => {
    if (node.type === 'folder') {
      setIsOpen(!isOpen);
    } else {
      onFileSelect(node);
    }
  };

  const isSelected = selectedId === node.id;
  const hasChildren = node.children && node.children.length > 0;

  const getFileIcon = () => {
    if (node.type === 'folder') {
      return isOpen ? <FolderOpen className="w-4 h-4 text-blue-500" /> : <Folder className="w-4 h-4 text-blue-500" />;
    }
    return <FileCode className="w-4 h-4 text-gray-600" />;
  };

  const getFileColor = () => {
    switch (node.language) {
      case 'python':
        return 'text-yellow-600';
      case 'javascript':
        return 'text-yellow-500';
      case 'html':
        return 'text-orange-600';
      case 'css':
        return 'text-blue-600';
      case 'scratch':
        return 'text-purple-600';
      case 'lua':
        return 'text-blue-500';
      default:
        return 'text-gray-700';
    }
  };

  return (
    <div>
      <div
        className={`flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100 rounded transition-colors ${
          isSelected ? 'bg-blue-50 border-l-4 border-blue-500' : ''
        }`}
        style={{ paddingLeft: `${level * 20 + 12}px` }}
        onClick={handleToggle}
      >
        {node.type === 'folder' && (
          <span className="flex-shrink-0">
            {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </span>
        )}
        {node.type === 'file' && <span className="w-4" />}
        <span className="flex-shrink-0">{getFileIcon()}</span>
        <span className={`text-sm font-medium truncate ${getFileColor()}`}>{node.name}</span>
      </div>

      {node.type === 'folder' && isOpen && hasChildren && (
        <div>
          {node.children!.map((child) => (
            <FileTreeItem
              key={child.id}
              node={child}
              level={level + 1}
              onFileSelect={onFileSelect}
              selectedId={selectedId}
            />
          ))}
        </div>
      )}
    </div>
  );
}
