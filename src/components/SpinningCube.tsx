// import React, { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';

// function Cube() {
//   const meshRef = useRef<THREE.Mesh>(null);

//   useFrame(() => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x += 0.002;
//       meshRef.current.rotation.y += 0.002;
//     }
//   });

//   return (
//     <mesh ref={meshRef}>
//       <boxGeometry args={[3, 3, 3]} />
//       <meshStandardMaterial
//         color="#3b82f6"
//         wireframe
//         transparent
//         opacity={0.2}
//       />
//     </mesh>
//   );
// }

// export default function SpinningCube() {
//   return (
//     <Canvas
//       camera={{ position: [0, 0, 10] }}
//       className="!fixed inset-0 -z-10"
//     >
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} />
//       <Cube />
//       <OrbitControls enableZoom={false} enablePan={false} />
//     </Canvas>
//   );
// }