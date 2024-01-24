
'use client';
import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#0F33FF'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-full z-[0]'>
      <style jsx>{`
        .stars-background::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: auto;
        }
      `}</style>

      <div className='stars-background' />
      <Canvas camera={{ position: [0, 0, 1] }} style={{ pointerEvents: 'auto' }}>
        <Suspense fallback={null}>
          <Stars size={0.1} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export { StarsCanvas };
