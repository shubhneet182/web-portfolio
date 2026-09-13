'use client';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, useGLTF} from '@react-three/drei';
import {Suspense} from 'react';


function HalfHumanAvatar() {
    const {scene} = useGLTF('/models/avatar.glb');
    return (
        <primitive 
            object={scene}  
            position={[-0.25, -0.30, -1]} 
            rotation={[0.08, Math.PI / -24, 0]}
            scale={2.0}
            />
    )

}

export default function HumanHeroSectionAvatar() {
    return (
        <div className="h-[480px] w-[450px] overflow-hidden">
            <Canvas camera={{position: [0, -0.30, 1.2], fov: 45}}>
                <ambientLight intensity={2.0} />
                <directionalLight position={[1, 1, 1]} intensity={1.0} />
                <Suspense fallback={null}>
                    <HalfHumanAvatar />
                </Suspense>
                <OrbitControls 
                    enableZoom={false} 
                    enablePan={false}
                    target={[-0.15, -0.10, -1]}
                    minPolarAngle={Math.PI / 2.5}
                    maxPolarAngle={Math.PI / 2}
                 />
            </Canvas>
        </div>
    )
}
