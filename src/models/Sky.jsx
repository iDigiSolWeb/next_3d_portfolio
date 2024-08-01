import { useGLTF } from '@react-three/drei'
import skyScene  from "../assets/3d/sky.glb"
import { useRef } from 'react';
import {useFrame} from '@react-three/fiber';


const Sky = ({isRotating}) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();

  
  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.15 * delta; // Adjust the rotation speed as needed
    }
  });

  return (
    <mesh ref={skyRef}>
      // use the primitive element when you want to directly embed a complex 3D
      model or scene
      <primitive object={sky.scene} />
    </mesh>
  );
}

export default Sky