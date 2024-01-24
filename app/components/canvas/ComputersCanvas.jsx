
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from '../CanvasLoader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./cyberpunk_desk/scene.gltf");

  return (

    <mesh>
      <hemisphereLight intensity={20} groundColor='white' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={100}
        castShadow
        shadow-mapSize={3000}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={5} // Scale the model to make it bigger, adjust this value as needed
        position={[36.2, -13, 35]} // Center the model, adjust if necessary
      />
      </mesh>

  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 3000px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas camera={{ position: [-14, 20, 90], fov: 18 }} // Adjust camera position and fov as needed
    gl={{preserveDrawingBuffer:true}}>
      <Suspense fallback={<CanvasLoader />}>

        <Computers isMobile={isMobile} />
        <ambientLight intensity={-5} /> 
        <spotLight position={[0, 0, 0]} intensity={10} /> 
        <OrbitControls 
       />
       
      </Suspense>

      <Preload all />

    </Canvas>
  );
};

export default ComputersCanvas;