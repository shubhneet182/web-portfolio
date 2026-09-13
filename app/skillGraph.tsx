'use client';
import dynamic from 'next/dynamic';
const ReactFlow = dynamic(() => import('@xyflow/react').then(mod => mod.ReactFlow), { ssr: false });
import { useCallback } from 'react';
import { useNodesState, useEdgesState, type Node } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import SkillsNode from './customNode';
import SkillsEdge from './customEdge';

const nodeTypes = {
    circleNode: SkillsNode
};

const edgeTypes = {
    skillEdge: SkillsEdge
};

const initialNodes = [
    { id: '1', position: { x: 723.6242197009949, y: 507.248659951158 }, data: { label: 'Skills' }, type: 'circleNode' },
    { id: '2', position: { x: 158.31490022276574, y: 222.61819785812133 }, data: { label: 'Programming Languages' }, type: 'circleNode' },
    { id: '3', position: { x: 691.3452299863012, y: 240.1940222669603 }, data: { label: 'Software Development' }, type: 'circleNode' },
    { id: '4', position: { x: 1450.8853644362368, y: 292.4121319054143 }, data: { label: 'AI & Machine Learning' }, type: 'circleNode' },
    { id: '5', position: { x: 3.611734916911113, y: 728.388265083089 }, data: { label: 'Web & App Development' }, type: 'circleNode' },
    { id: '6', position: { x: 931.6850997772342, y: 1168.6915627184446 }, data: { label: 'Databases & Cloud' }, type: 'circleNode' },
    { id: '7', position: { x: 378.63024154386824, y: 1231.9522663553496 }, data: { label: 'Data Visualization & Analytics' }, type: 'circleNode' },
    { id: '8', position: { x: 1143.5760449580075, y: 727.9518252570123 }, data: { label: 'Project Management' }, type: 'circleNode' },

    { id: '2.1', position: { x: -266.86083596640583, y: 119.818241967955 }, data: { label: 'Python' }, type: 'circleNode' },
    { id: '2.2', position: { x: -96.33964924176465, y: 35.68487922806591 }, data: { label: 'Java' }, type: 'circleNode' },
    { id: '2.3', position: { x: -98.24263810828454, y: 273.27274732265164 }, data: { label: 'C/C++' }, type: 'circleNode' },
    { id: '2.4', position: { x: 86.5936693882908, y: 4.654549464530334 }, data: { label: 'JavaScript' }, type: 'circleNode' },
    { id: '2.5', position: { x: 268.1451858764675, y: 8.315120771934104 }, data: { label: 'TypeScript' }, type: 'circleNode' },

    { id: '3.1', position: { x: 459.3452299863012, y: 184.6304620930366 }, data: { label: 'Data Structures & Algorithms' }, type: 'circleNode' },
    { id: '3.2', position: { x: 544.8724385538159, y: 18.618197858121334 }, data: { label: 'Object-Oriented Programming (OOP)' }, type: 'circleNode' },
    { id: '3.3', position: { x: 907.9513841586759, y: 77.57582440883891 }, data: { label: 'Software Development Life Cycle (SDLC)' }, type: 'circleNode' },
    { id: '3.4', position: { x: 736.0724826636496, y: 6.206065952707121 }, data: { label: 'Version Control (Git, GitHub/ GitLab)' }, type: 'circleNode' },

    { id: '4.1', position: { x: 1140.8485717314907, y: 23.818021418786614 }, data: { label: 'Supervised ML' }, type: 'circleNode' },
    { id: '4.2', position: { x: 1326.5334509595566, y: -10.49709935314749 }, data: { label: 'Unsupervised ML' }, type: 'circleNode' },
    { id: '4.3', position: { x: 1506.0002205491685, y: -8.436439826076352 }, data: { label: 'Computer Vision' }, type: 'circleNode' },
    { id: '4.4', position: { x: 1824.7592845987112, y: 315.1636925034247 }, data: { label: 'LSTMs' }, type: 'circleNode' },
    { id: '4.5', position: { x: 1687.2002646590022, y: 20.193801717791857 }, data: { label: 'Transformers' }, type: 'circleNode' },
    { id: '4.6', position: { x: 1822.8851438870684, y: 133.98773576508472 }, data: { label: 'Natural Language Processing (NLP)' }, type: 'circleNode' },
    { id: '4.7', position: { x: 1060.714988442433, y: 190.1938017177918 }, data: { label: 'Sentiment Analysis' }, type: 'circleNode' },
    { id: '4.8', position: { x: 1187.9393404729287, y: 512.2303738733692 }, data: { label: 'Recommendation Systems' }, type: 'circleNode' },
    { id: '4.9', position: { x: 1696.8608359664056, y: 643.7578029900523 }, data: { label: 'Reinforcement Learning' }, type: 'circleNode' },
    { id: '4.10', position: { x: 1803.7457593043055, y: 493.96364839359114 }, data: { label: 'Neural Networks' }, type: 'circleNode' },
    { id: '4.11', position: { x: 1516.5214072738097, y: 652.9212749443086 }, data: { label: 'Tensorflow' }, type: 'circleNode' },
    { id: '4.12', position: { x: 1335.8305062028705, y: 614.6425057787836 }, data: { label: 'Keras' }, type: 'circleNode' },

    { id: '5.1', position: { x: -31.854814123532464, y: 1041.443123316455 }, data: { label: 'React JS' }, type: 'circleNode' },
    { id: '5.2', position: { x: 11.902988866519877, y: 464.44870406099176 }, data: { label: 'HTML5' }, type: 'circleNode' },
    { id: '5.3', position: { x: -269.5275393912673, y: 638.2305944225377 }, data: { label: 'Node JS' }, type: 'circleNode' },
    { id: '5.4', position: { x: 144.1514282685094, y: 971.3095400273974 }, data: { label: 'Django' }, type: 'circleNode' },
    { id: '5.5', position: { x: 224.48483511823224, y: 806.6549905628669 }, data: { label: 'CSS3' }, type: 'circleNode' },
    { id: '5.6', position: { x: -290.02452846983056, y: 822.7154295407698 }, data: { label: 'Tailwind CSS' }, type: 'circleNode' },
    { id: '5.7', position: { x: 181.04237344928237, y: 547.5637807230919 }, data: { label: 'FastAPI' }, type: 'circleNode' },
    { id: '5.8', position: { x: -174.27898971469352, y: 482.9212749443087 }, data: { label: 'REST API' }, type: 'circleNode' },
    { id: '5.9', position: { x: -201.85481412353244, y: 984.9458034141392 }, data: { label: 'Flutter' }, type: 'circleNode' },

    { id: '6.1', position: { x: 1090.4850556674005, y: 1395.4067717100459 }, data: { label: 'MySQL' }, type: 'circleNode' },
    { id: '6.2', position: { x: 1205.1275614461838, y: 1232.8490128298272 }, data: { label: 'Oracle' }, type: 'circleNode' },
    { id: '6.3', position: { x: 899.7821109107143, y: 1428.1462886223096 }, data: { label: 'NoSQL' }, type: 'circleNode' },
    { id: '6.4', position: { x: 688.0970111334802, y: 1123.2125288939171 }, data: { label: 'PostgresSQL' }, type: 'circleNode' },
    { id: '6.5', position: { x: 1153.9154736506032, y: 1048.4850196940615 }, data: { label: 'MongoDB' }, type: 'circleNode' },
    { id: '6.6', position: { x: 711.3697584561319, y: 1320.7522222455157 }, data: { label: 'AWS' }, type: 'circleNode' },
    { id: '6.7', position: { x: 984.6304620930366, y: 919.2488805003265 }, data: { label: 'Azure' }, type: 'circleNode' },

    { id: '7.1', position: { x: 189.34522998630115, y: 1164.5822873500492 }, data: { label: 'Power BI' }, type: 'circleNode' },
    { id: '7.2', position: { x: 521.1759567383401, y: 1417.554470714962 }, data: { label: 'Pandas' }, type: 'circleNode' },
    { id: '7.3', position: { x: 89.34522998630118, y: 1326.9582881982228 }, data: { label: 'NumPy' }, type: 'circleNode' },
    { id: '7.4', position: { x: 367.95138415867564, y: 1526.5947721341324 }, data: { label: 'Matplotlib' }, type: 'circleNode' },
    { id: '7.5', position: { x: 177.63604283757314, y: 1495.2129699922539 }, data: { label: 'Seaborn' }, type: 'circleNode' },

    { id: '8.1', position: { x: 1659.927737885519, y: 1082.521627822978 }, data: { label: 'Agile & Scrum Methodology' }, type: 'circleNode' },
    { id: '8.2', position: { x: 1448.8974081219835, y: 1061.3822432402153 }, data: { label: 'MS Project' }, type: 'circleNode' },
    { id: '8.3', position: { x: 1636.9823755697164, y: 889.7700672249678 }, data: { label: 'Monday.com' }, type: 'circleNode' },

    { id: '9', position: { x: 1700, y: 1380 }, data: { label: 'GenAI & LLMs' }, type: 'circleNode' },
    { id: '9.1', position: { x: 1450, y: 1200 }, data: { label: 'Prompt Engineering' }, type: 'circleNode' },
    { id: '9.2', position: { x: 1620, y: 1130 }, data: { label: 'Agentic Workflows' }, type: 'circleNode' },
    { id: '9.3', position: { x: 1830, y: 1170 }, data: { label: 'Claude API' }, type: 'circleNode' },
    { id: '9.4', position: { x: 1980, y: 1300 }, data: { label: 'LangGraph' }, type: 'circleNode' },
    { id: '9.5', position: { x: 2000, y: 1500 }, data: { label: 'LiteLLM' }, type: 'circleNode' },
    { id: '9.6', position: { x: 1870, y: 1630 }, data: { label: 'Copilot Studio' }, type: 'circleNode' },
    { id: '9.7', position: { x: 1640, y: 1670 }, data: { label: 'Hugging Face' }, type: 'circleNode' },
    { id: '9.8', position: { x: 1460, y: 1570 }, data: { label: 'MCP Servers' }, type: 'circleNode' },

    { id: '10', position: { x: 100, y: 1870 }, data: { label: 'Data Engineering' }, type: 'circleNode' },
    { id: '10.1', position: { x: -160, y: 1760 }, data: { label: 'PySpark' }, type: 'circleNode' },
    { id: '10.2', position: { x: -130, y: 1980 }, data: { label: 'MS Fabric' }, type: 'circleNode' },
    { id: '10.3', position: { x: 80, y: 2080 }, data: { label: 'Docker' }, type: 'circleNode' },
    { id: '10.4', position: { x: 340, y: 2020 }, data: { label: 'Streamlit' }, type: 'circleNode' },
    { id: '10.5', position: { x: 360, y: 1790 }, data: { label: 'ETL Pipelines' }, type: 'circleNode' }
];

const initialEdges = [
    { id: 'e1-2', source: '1', target: '2', type: 'skillEdge' },
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

    { id: 'e1-9', source: '1', target: '9', type: 'skillEdge' },
    { id: 'e9-9.1', source: '9', target: '9.1', type: 'skillEdge' },
    { id: 'e9-9.2', source: '9', target: '9.2', type: 'skillEdge' },
    { id: 'e9-9.3', source: '9', target: '9.3', type: 'skillEdge' },
    { id: 'e9-9.4', source: '9', target: '9.4', type: 'skillEdge' },
    { id: 'e9-9.5', source: '9', target: '9.5', type: 'skillEdge' },
    { id: 'e9-9.6', source: '9', target: '9.6', type: 'skillEdge' },
    { id: 'e9-9.7', source: '9', target: '9.7', type: 'skillEdge' },
    { id: 'e9-9.8', source: '9', target: '9.8', type: 'skillEdge' },

    { id: 'e1-10', source: '1', target: '10', type: 'skillEdge' },
    { id: 'e10-10.1', source: '10', target: '10.1', type: 'skillEdge' },
    { id: 'e10-10.2', source: '10', target: '10.2', type: 'skillEdge' },
    { id: 'e10-10.3', source: '10', target: '10.3', type: 'skillEdge' },
    { id: 'e10-10.4', source: '10', target: '10.4', type: 'skillEdge' },
    { id: 'e10-10.5', source: '10', target: '10.5', type: 'skillEdge' },
];

export default function SkillGraph() {
    const [nodes, setNodes] = useNodesState(initialNodes);
    const [edges] = useEdgesState(initialEdges);

    const onNodeDragStop = useCallback((_event: React.MouseEvent, node: Node) => {
        setNodes((nds) =>
            nds.map((n) => n.id === node.id ? { ...n, position: node.position } : n)
        );
    }, [setNodes]);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodeDragStop={onNodeDragStop}
                zoomOnScroll={false}
                preventScrolling={false}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                fitView
            />
        </div>
    );
}
