import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Can3D from "./Can3D";
import { Stage, OrbitControls, Environment } from "@react-three/drei";

const Canvas3D = () => {
  return (
    <Suspense
      fallback={
        <img
          className="hero-image"
          src="/assets/products/SweetStrawberry_Hero.webp"
        />
      }
    >
      <Canvas camera={{ fov: 45 }}>
        <Stage
          castShadow={false}
          shadows={false}
          intensity={1}
          environment={null}
        >
          <OrbitControls enableZoom={false} enablePan={false} />
          <Environment  files={'assets/empty_warehouse_01_1k.hdr'} />
          <Suspense fallback={null}>
            <Can3D position={[0, -1.1, 0]} rotation={[-0.1, 0.0, 0.2]} />
          </Suspense>
        </Stage>
      </Canvas>
    </Suspense>
  );
};

export default Canvas3D;
