import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Can3D from "./Can3D";
import { Stage } from "@react-three/drei";

const Canvas3D = () => {
  return (
    <Suspense fallback={<img className="hero-image" src="/assets/products/SweetStrawberry_Hero.webp" />}>
      <Canvas camera={{ fov: 45 }}>
        <Stage
          castShadow={false}
          shadows={false}
          environment={"warehouse"}
          intensity={0.1}
        >
          <Suspense fallback={null}>
            <Can3D rotation={[-0.1, 0.0, 0.2]} />
          </Suspense>
        </Stage>
      </Canvas>
    </Suspense>
  );
};

export default Canvas3D;
