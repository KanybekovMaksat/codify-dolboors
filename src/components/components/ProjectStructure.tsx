import { useState } from 'react';
import { FolderOpen, File, Code2, Layout, Zap } from 'lucide-react';
import { Project } from '../data/mockProject';
import { CodebaseExplorer } from '../code/codebase-explorer';

interface ProjectStructureProps {
  project: Project;
}

type TabType = 'structure' | 'technologies' | 'approach';

export default function ProjectStructure({ project }: ProjectStructureProps) {
  const [activeTab, setActiveTab] = useState<TabType>('structure');

  const tabs = [
    { id: 'structure' as TabType, label: 'Структура проекта', icon: Layout },
    { id: 'technologies' as TabType, label: 'Технологии', icon: Code2 },
    { id: 'approach' as TabType, label: 'Подход к разработке', icon: Zap }
  ];

  const renderFileTree = (items: typeof project.structure.folders) => {
    return (
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              {item.type === 'folder' ? (
                <FolderOpen className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              ) : (
                <File className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
              )}
              <div className="flex-1">
                <span className="font-mono text-gray-900 font-medium">{item.name}</span>
                {item.children && item.children.length > 0 && (
                  <ul className="mt-3 ml-6 space-y-2 border-l-2 border-gray-200 pl-4">
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex} className="flex items-center gap-3 py-1">
                        {child.type === 'folder' ? (
                          <FolderOpen className="w-4 h-4 text-blue-500" />
                        ) : (
                          <File className="w-4 h-4 text-gray-400" />
                        )}
                        <span className="font-mono text-sm text-gray-700">
                          {child.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Под капотом
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Архитектура и технический стек проекта
          </p>
        </div>
        <CodebaseExplorer/>

        {/* <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-8 bg-gray-100 p-2 rounded-xl">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 min-w-[200px] flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-200 min-h-[400px]">
            {activeTab === 'structure' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Layout className="w-7 h-7 text-blue-600" />
                  Структура файлов
                </h3>
                {renderFileTree(project.structure.folders)}
              </div>
            )}

            {activeTab === 'technologies' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Code2 className="w-7 h-7 text-blue-600" />
                  Используемые технологии
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-shadow"
                    >
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Code2 className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-gray-800 leading-relaxed">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'approach' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Zap className="w-7 h-7 text-blue-600" />
                  Подход к разработке
                </h3>
                <div className="space-y-4">
                  {project.approach.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-5 bg-white rounded-xl hover:shadow-md transition-shadow"
                    >
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-700 font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-800 leading-relaxed flex-1">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div> */}
      </div>
    </section>
  );
}
