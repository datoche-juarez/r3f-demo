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

export default function ProductModel() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 3, 5], fov: 35 }}>
        <Environment preset="warehouse" />
        <OrbitControls
          rotateSpeed={0.4}
          zoomSpeed={0.4}
          panSpeed={0.2}
          autoRotate
          autoRotateSpeed={1.5}
          enablePan={false}
          maxDistance={10}
          minDistance={2}
        />
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
