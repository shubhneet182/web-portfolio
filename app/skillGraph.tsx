'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { ReactFlow, useNodesState, useEdgesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import SkillsNode from './customNode';
import SkillsEdge from './customEdge';

const nodeTypes = { 
    circleNode: SkillsNode 
}

const edgeTypes = {
    skillEdge: SkillsEdge
}
 
const initialNodes = [
    { id: '1', position: { x: 750, y: 304 }, data: { label: 'Skills' }, type: 'circleNode' },
    { id: '2', position: { x: 450, y: 204 }, data: { label: 'Programming Languages' }, type: 'circleNode' },
    { id: '3', position: { x: 952, y: 144 }, data: { label: 'Software Development' }, type: 'circleNode' },
    { id: '4', position: { x: 852, y: 280 }, data: { label: 'AI & Machine Learning' }, type: 'circleNode' },
    { id: '5', position: { x: 452, y: 280 }, data: { label: 'Web & App Development' }, type: 'circleNode' },
    { id: '6', position: { x: 640, y: 410 }, data: { label: 'Databases & Cloud' }, type: 'circleNode' },
    { id: '7', position: { x: 450, y: 360 }, data: { label: 'Data Visualization & Analytics' }, type: 'circleNode' },
    { id: '8', position: { x: 810, y: 368 }, data: { label: 'Project Management' }, type: 'circleNode' },

    { id: '2.1', position: { x: 0, y: 50 }, data: { label: 'Python' }, type: 'circleNode' },
    { id: '2.2', position: { x: 200, y: 0 }, data: { label: 'Java' }, type: 'circleNode' },
    { id: '2.3', position: { x: 150, y: 250 }, data: { label: 'C/C++' }, type: 'circleNode' },
    { id: '2.4', position: { x: 400, y: 0 }, data: { label: 'JavaScript' }, type: 'circleNode' },
    { id: '2.5', position: { x: 580, y: 44 }, data: { label: 'TypeScript' }, type: 'circleNode' },

    { id: '3.1', position: { x: 720, y: 0 }, data: { label: 'Data Structures & Algorithms' }, type: 'circleNode' },
    { id: '3.2', position: { x: 880, y: 0 }, data: { label: 'Object-Oriented Programming (OOP)' }, type: 'circleNode' },
    { id: '3.3', position: { x: 1060, y: 0 }, data: { label: 'Software Development Life Cycle (SDLC)' }, type: 'circleNode' },
    { id: '3.4', position: { x: 1020, y: 0 }, data: { label: 'Version Control (Git, GitHub/ GitLab)' }, type: 'circleNode' },
    
    { id: '4.1', position: { x: 1040, y: 210 }, data: { label: 'Supervised ML' }, type: 'circleNode' },
    { id: '4.2', position: { x: 1190, y: 140 }, data: { label: 'Unsupervised ML' }, type: 'circleNode' },
    { id: '4.3', position: { x: 1250, y: 80 }, data: { label: 'Computer Vision' }, type: 'circleNode' },
    { id: '4.4', position: { x: 1250, y: 250 }, data: { label: 'LSTMs' }, type: 'circleNode' },
    { id: '4.5', position: { x: 1380, y: 180 }, data: { label: 'Transformers' }, type: 'circleNode' },
    { id: '4.6', position: { x: 1480, y: 300 }, data: { label: 'Natural Language Processing (NLP)' }, type: 'circleNode' },
    { id: '4.7', position: { x: 1250, y: 350 }, data: { label: 'Sentiment Analysis' }, type: 'circleNode' },
    { id: '4.8', position: { x: 1250, y: 430 }, data: { label: 'Recommendation Systems' }, type: 'circleNode' },
    { id: '4.9', position: { x: 1430, y: 380 }, data: { label: 'Reinforcement Learning' }, type: 'circleNode' },
    { id: '4.10', position: { x: 1450, y: 480 }, data: { label: 'Neural Networks' }, type: 'circleNode' },
    { id: '4.11', position: { x: 1290, y: 580 }, data: { label: 'Tensorflow' }, type: 'circleNode' },
    { id: '4.12', position: { x: 1100, y: 520 }, data: { label: 'Keras' }, type: 'circleNode' },

    { id: '5.1', position: { x: 280, y: 230 }, data: { label: 'React JS' }, type: 'circleNode' },
    { id: '5.2', position: { x: 60, y: 210 }, data: { label: 'HTML5' }, type: 'circleNode' },
    { id: '5.3', position: { x: 40, y: 300 }, data: { label: 'Node JS' }, type: 'circleNode' },
    { id: '5.4', position: { x: 245, y: 450 }, data: { label: 'Django' }, type: 'circleNode' },
    { id: '5.5', position: { x: 240, y: 290 }, data: { label: 'CSS3' }, type: 'circleNode' },
    { id: '5.6', position: { x: 42, y: 500 }, data: { label: 'Tailwind CSS' }, type: 'circleNode'},
    { id: '5.7', position: { x: 240, y: 380 }, data: { label: 'FastAPI' }, type: 'circleNode' },
    { id: '5.8', position: { x: 60, y: 410 }, data: { label: 'REST API' }, type: 'circleNode' },
    { id: '5.9', position: { x: 110, y: 580 }, data: { label: 'Flutter' }, type: 'circleNode' },

    { id: '6.1', position: { x: 850, y: 570 }, data: { label: 'MySQL' }, type: 'circleNode' },
    { id: '6.2', position: { x: 870, y: 620 }, data: { label: 'Oracle' }, type: 'circleNode' },
    { id: '6.3', position: { x: 560, y: 460 }, data: { label: 'NoSQL' }, type: 'circleNode' },
    { id: '6.4', position: { x: 640, y: 650 }, data: { label: 'PostgresSQL' }, type: 'circleNode' },
    { id: '6.5', position: { x: 780, y: 520 }, data: { label: 'MongoDB' }, type: 'circleNode' },
    { id: '6.6', position: { x: 640, y: 500 }, data: { label: 'AWS' }, type: 'circleNode' },
    { id: '6.7', position: { x: 800, y: 460 }, data: { label: 'Azure' }, type: 'circleNode' },

    { id: '7.1', position: { x: 450, y: 620 }, data: { label: 'Power BI' }, type: 'circleNode' },
    { id: '7.2', position: { x: 290, y: 570 }, data: { label: 'Pandas' }, type: 'circleNode' },
    { id: '7.3', position: { x: 350, y: 500 }, data: { label: 'NumPy' }, type: 'circleNode' },
    { id: '7.4', position: { x: 520, y: 560 }, data: { label: 'Matplotlib' }, type: 'circleNode' },
    { id: '7.5', position: { x: 550, y: 510 }, data: { label: 'Seaborn' }, type: 'circleNode' },

    { id: '8.1', position: { x: 1120, y: 600 }, data: { label: 'Agile & Scrum Methodology' }, type: 'circleNode' },
    { id: '8.2', position: { x: 940, y: 568 }, data: { label: 'MS Project' }, type: 'circleNode' },
    { id: '8.3', position: { x: 990, y: 460 }, data: { label: 'Monday.com' }, type: 'circleNode' }
  ];

  const initialEdges = [{ id: 'e1-2', source: '1', target: '2', type: 'skillEdge' },
                        { id: 'e1-3', source: '1', target: '3', type: 'skillEdge' },
                        { id: 'e1-4', source: '1', target: '4', type: 'skillEdge' },
                        { id: 'e1-5', source: '1', target: '5', type: 'skillEdge' },
                        { id: 'e1-6', source: '1', target: '6', type: 'skillEdge' },
                        { id: 'e1-7', source: '1', target: '7', type: 'skillEdge' },
                        { id: 'e1-8', source: '1', target: '8', type: 'skillEdge' },

                        { id: 'e2-2.1', source: '2', target: '2.1', type: 'skillEdge' },
                        { id: 'e2-2.2', source: '2', target: '2.2', type: 'skillEdge' },
                        { id: 'e2-2.3', source: '2', target: '2.3', type: 'skillEdge' },
                        { id: 'e2-2.4', source: '2', target: '2.4', type: 'skillEdge' },
                        { id: 'e2-2.5', source: '2', target: '2.5', type: 'skillEdge' },

                        { id: 'e3-3.1', source: '3', target: '3.1', type: 'skillEdge' },
                        { id: 'e3-3.2', source: '3', target: '3.2', type: 'skillEdge' },
                        { id: 'e3-3.3', source: '3', target: '3.3', type: 'skillEdge' },
                        { id: 'e3-3.4', source: '3', target: '3.4', type: 'skillEdge' },

                        { id: 'e4-4.1', source: '4', target: '4.1', type: 'skillEdge' },
                        { id: 'e4-4.2', source: '4', target: '4.2', type: 'skillEdge' },
                        { id: 'e4-4.3', source: '4', target: '4.3', type: 'skillEdge' },
                        { id: 'e4-4.4', source: '4', target: '4.4', type: 'skillEdge' },
                        { id: 'e4-4.5', source: '4', target: '4.5', type: 'skillEdge' },
                        { id: 'e4-4.6', source: '4', target: '4.6', type: 'skillEdge' },
                        { id: 'e4-4.7', source: '4', target: '4.7', type: 'skillEdge' },
                        { id: 'e4-4.8', source: '4', target: '4.8', type: 'skillEdge' },
                        { id: 'e4-4.9', source: '4', target: '4.9', type: 'skillEdge' },
                        { id: 'e4-4.10', source: '4', target: '4.10', type: 'skillEdge' },
                        { id: 'e4-4.11', source: '4', target: '4.11', type: 'skillEdge' },
                        { id: 'e4-4.12', source: '4', target: '4.12', type: 'skillEdge' },

                        { id: 'e5-5.1', source: '5', target: '5.1', type: 'skillEdge' },
                        { id: 'e5-5.2', source: '5', target: '5.2', type: 'skillEdge' },
                        { id: 'e5-5.3', source: '5', target: '5.3', type: 'skillEdge' },
                        { id: 'e5-5.4', source: '5', target: '5.4', type: 'skillEdge' },
                        { id: 'e5-5.5', source: '5', target: '5.5', type: 'skillEdge' },
                        { id: 'e5-5.6', source: '5', target: '5.6', type: 'skillEdge' },
                        { id: 'e5-5.7', source: '5', target: '5.7', type: 'skillEdge' },
                        { id: 'e5-5.8', source: '5', target: '5.8', type: 'skillEdge' },
                        { id: 'e5-5.9', source: '5', target: '5.9', type: 'skillEdge' },

                        { id: 'e6-6.1', source: '6', target: '6.1', type: 'skillEdge' },
                        { id: 'e6-6.2', source: '6', target: '6.2', type: 'skillEdge' },
                        { id: 'e6-6.3', source: '6', target: '6.3', type: 'skillEdge' },
                        { id: 'e6-6.4', source: '6', target: '6.4', type: 'skillEdge' },
                        { id: 'e6-6.5', source: '6', target: '6.5', type: 'skillEdge' },
                        { id: 'e6-6.6', source: '6', target: '6.6', type: 'skillEdge' },
                        { id: 'e6-6.7', source: '6', target: '6.7', type: 'skillEdge' },

                        { id: 'e7-7.1', source: '7', target: '7.1', type: 'skillEdge' },
                        { id: 'e7-7.2', source: '7', target: '7.2', type: 'skillEdge' },
                        { id: 'e7-7.3', source: '7', target: '7.3', type: 'skillEdge' },
                        { id: 'e7-7.4', source: '7', target: '7.4', type: 'skillEdge' },
                        { id: 'e7-7.5', source: '7', target: '7.5', type: 'skillEdge' },

                        { id: 'e8-8.1', source: '8', target: '8.1', type: 'skillEdge' },
                        { id: 'e8-8.2', source: '8', target: '8.2', type: 'skillEdge' },
                        { id: 'e8-8.3', source: '8', target: '8.3', type: 'skillEdge' },
                        ];
 
export default function SkillGraph() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [positionsFinalized, setPositionsFinalized] = useState(false);

    // const onConnect = useCallback(
    //     (params:any) => setEdges((eds) => addEdge(params, eds)),
    //     [setEdges],
    //     );

    // Load saved positions on mount
    useEffect(() => {
        const savedNodes = localStorage.getItem('nodes');
        const savedFinalized = localStorage.getItem('positionsFinalized');

        if (savedNodes) {
            setNodes(JSON.parse(savedNodes));
        }

        if (savedFinalized) {
            setPositionsFinalized(JSON.parse(savedFinalized));
        }
    }, [setNodes]);

    // Save node positions when dragging stops (ONLY if not finalized)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const onNodeDragStop = useCallback((event:any, node:any) => {
        if (positionsFinalized) return; // Ignore future changes

        setNodes((nds) => {
            const updatedNodes = nds.map((n) =>
                n.id === node.id ? { ...n, position: node.position } : n
            );
            localStorage.setItem('nodes', JSON.stringify(updatedNodes)); // Save once
            return updatedNodes;
        });
    }, [positionsFinalized, setNodes]);

    // Finalize positions (prevent further saving)
    // const finalizePositions = () => {
    //     setPositionsFinalized(true);
    //     localStorage.setItem('positionsFinalized', JSON.stringify(true));
    // };

  return (
    <div>
      {/* {!positionsFinalized && (
        <button onClick={finalizePositions} className="p-2 m-2 bg-green-500 text-white rounded">
            Save & Finalize Positions
        </button>
    )} */}
    <div style={{ width: 'w-screen', height: '150vh' }}>
      <ReactFlow 
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeDragStop={onNodeDragStop} 
        // onConnect={onConnect}
        zoomOnScroll={false}
        preventScrolling={false}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView />
    </div>
    </div>
  );
}