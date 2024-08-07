import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';

export interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
}

interface TreeNodeProps {
  node: TreeNode;
  level: number;
}

const TreeNodeComponent: React.FC<TreeNodeProps> = ({ node, level }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const customStyles = {
    '--tree-text-color': theme.colors.gray['700'],
    '--tree-icon-color': theme.colors.gray['500'],
    '--tree-hover-bg-color': theme.colors.gray['100'],
  } as React.CSSProperties;

  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="ml-4" style={customStyles}>
      <div className="flex items-center hover:bg-gray-100 rounded p-1" style={{ backgroundColor: 'var(--tree-hover-bg-color)' }}>
        {hasChildren && (
          <button onClick={() => setIsOpen(!isOpen)} className="mr-1">
            {isOpen ? (
              <ChevronDown size={16} style={{ color: 'var(--tree-icon-color)' }} />
            ) : (
              <ChevronRight size={16} style={{ color: 'var(--tree-icon-color)' }} />
            )}
          </button>
        )}
        <span style={{ color: 'var(--tree-text-color)' }}>{node.label}</span>
      </div>
      {isOpen && hasChildren && (
        <div className="ml-4">
          {node.children!.map((child) => (
            <TreeNodeComponent key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export interface TreeViewProps {
  data: TreeNode[];
}

export const TreeView: React.FC<TreeViewProps> = ({ data }) => {
  const { theme } = useTheme();

  const customStyles = {
    '--tree-border-color': theme.colors.gray['200'],
  } as React.CSSProperties;

  return (
    <div className="border p-4 rounded-md" style={{ ...customStyles, borderColor: 'var(--tree-border-color)' }}>
      {data.map((node) => (
        <TreeNodeComponent key={node.id} node={node} level={0} />
      ))}
    </div>
  );
};

TreeView.displayName = 'TreeView';