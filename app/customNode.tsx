'use client';
import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';
 
type SkillNode = Node<{ label: string }, 'skill'>;
 
export default function SkillsNode({ data }: NodeProps<SkillNode>) {
  return <div className="relative p-1 w-[10rem] h-[10rem] text-white font-bold flex items-center justify-center rounded-full overflow-hidden group">
            {/* Input Handle */}
            <Handle type='target' position={Position.Bottom} style={{
                background: 'white',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                }} />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 transition-all duration-500 ease-in-out group-hover:rotate-[360deg] group-hover:bg-[conic-gradient(from_60deg,_#e92a67,_#a853ba,_#2a8af6,_#000000)]"></div>
            <div className="bg-black flex items-center justify-center w-full h-full px-4 py-2 z-10 text-center break-words rounded-full">
                <span className="text-lg">{data.label}</span>
            </div>
            {/* Output Handle */}
            <Handle type="source" position={Position.Top} style={{
                background: 'white',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                }} />
        </div>
}