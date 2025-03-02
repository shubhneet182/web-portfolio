'use client';
import { BaseEdge, Edge, EdgeProps, getBezierPath } from '@xyflow/react';

type SkillEdge = Edge<{ id:any, sourceX:any, sourceY:any, targetX:any, targetY:any}, 'skillEdge'>;
 
export default function SkillsEdge({ id, sourceX, sourceY, targetX, targetY }: EdgeProps<SkillEdge>) {
    const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });
  
  return (
    <>
      <BaseEdge 
            id={id} 
            path={edgePath}
            style={{stroke: '#bfd4db', strokeWidth: 3}} />
    </>
  );
}