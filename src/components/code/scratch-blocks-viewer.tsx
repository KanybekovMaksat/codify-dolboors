interface ScratchBlock {
  type: string;
  category: 'motion' | 'looks' | 'sound' | 'events' | 'control' | 'sensing' | 'operators' | 'variables';
  text: string;
  nested?: ScratchBlock[];
}

interface ScratchBlocksViewerProps {
  blocks: ScratchBlock[];
}

export function ScratchBlocksViewer({ blocks }: ScratchBlocksViewerProps) {
  const getCategoryColor = (category: ScratchBlock['category']) => {
    switch (category) {
      case 'motion':
        return 'bg-blue-500';
      case 'looks':
        return 'bg-purple-500';
      case 'sound':
        return 'bg-pink-500';
      case 'events':
        return 'bg-yellow-500';
      case 'control':
        return 'bg-orange-500';
      case 'sensing':
        return 'bg-cyan-500';
      case 'operators':
        return 'bg-green-500';
      case 'variables':
        return 'bg-red-500';
    }
  };

  const renderBlock = (block: ScratchBlock, index: number, depth: number = 0) => {
    return (
      <div key={index} className={`${depth > 0 ? 'ml-8 mt-2' : 'mb-2'}`}>
        <div
          className={`${getCategoryColor(block.category)} text-white px-4 py-2 rounded-lg shadow-md inline-block font-medium`}
        >
          {block.text}
        </div>
        {block.nested && block.nested.length > 0 && (
          <div className="border-l-4 border-gray-300 ml-4 pl-2 mt-2">
            {block.nested.map((nestedBlock, nestedIndex) => renderBlock(nestedBlock, nestedIndex, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-orange-50 to-purple-50 p-6 rounded-lg">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">S</span>
        </div>
        <h3 className="font-bold text-lg text-gray-800">Блоки Scratch</h3>
      </div>
      <div className="space-y-2">{blocks.map((block, index) => renderBlock(block, index))}</div>
    </div>
  );
}
