import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

export interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
}

const treeNodeContainerVariants = cva('ml-4');

const treeNodeItemVariants = cva('flex items-center hover:bg-backgroundPrimary rounded p-1');

const treeNodeButtonVariants = cva('mr-1');

const treeNodeLabelVariants = cva('text-textPrimary');

const treeViewContainerVariants = cva('border border-borderHeavy p-4 rounded-md');

interface TreeNodeProps {
  node: TreeNode;
  level: number;
}

const TreeNodeComponent: React.FC<TreeNodeProps> = ({ node, level }) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className={treeNodeContainerVariants()}>
      <div className={treeNodeItemVariants()}>
        {hasChildren && (
          <button onClick={() => setIsOpen(!isOpen)} className={treeNodeButtonVariants()}>
            {isOpen ? (
              <ChevronDown size={16} className="text-backgroundTertiary" />
            ) : (
              <ChevronRight size={16} className="text-backgroundTertiary" />
            )}
          </button>
        )}
        <span className={treeNodeLabelVariants()}>{node.label}</span>
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

export interface TreeViewProps extends VariantProps<typeof treeViewContainerVariants> {
  data: TreeNode[];
}

export const TreeView: React.FC<TreeViewProps> = ({ data }) => {
  return (
    <div className={treeViewContainerVariants()}>
      {data.map((node) => (
        <TreeNodeComponent key={node.id} node={node} level={0} />
      ))}
    </div>
  );
};

TreeView.displayName = 'TreeView';

export default TreeView;