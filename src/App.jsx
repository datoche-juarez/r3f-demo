import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  ContactShadows,
  Environment,
} from "@react-three/drei";
import { GridHelper } from "three";
import { useThree } from "@react-three/fiber";

useGLTF.preload("/models/product.glb");

function Model() {
  const gltf = useGLTF("/models/product.glb");
  return <primitive object={gltf.scene} scale={40} />;
}

function GroundGrid() {
  const { scene } = useThree();

  const grid = new GridHelper(20, 20);
  grid.material.depthWrite = false;
  scene.add(grid);

  return null;
}

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 3, 8], fov: 35 }}>
        <Environment preset="warehouse" />
        <OrbitControls />
        <GroundGrid />
        <ContactShadows
          position={[0, -1.2, 0]}
          opacity={0.4}
          scale={10}
          blur={2.5}
        />
        <Model />
      </Canvas>
    </div>
  );
}
