import React, { Suspense, useRef, useState } from "react";
import { Camera, Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Screen } from "../Screen";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

function WolfMesh(props: JSX.IntrinsicElements["mesh"]) {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const gltf = useLoader(GLTFLoader, "/model/lowPolyWolf/scene.gltf");

  useFrame((state, delta, frame) => {
    const mesh = gltf.scene.children[0];
    mesh.rotation.y = mesh.rotation.z += 0.01;
    mesh.rotation.x = state.clock.getElapsedTime();
  });

  console.log(gltf);
  return (
    <>
      <primitive
        object={gltf.scene}
        scale={0.1}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
        onClick={(e) =>
          window.open("https://sketchfab.com/anthonyjamesgirdler")
        }
      />
    </>
  );
}

function CustomCanvas() {
  const cameraRef = useRef<Camera>(null);

  return (
    <Canvas>
      <ambientLight />
      <directionalLight />
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault={true}
        position={[0, 0, 50]}
      />
      <OrbitControls
        camera={cameraRef.current}
        makeDefault={true}
        enableZoom={false}
      />
      <Suspense fallback={null}>
        <WolfMesh position={[0, 0, -50]} />
      </Suspense>
    </Canvas>
  );
}

export default function Scene() {
  return (
    <Screen className={"bg-red-100 flex flex-col"}>
      <span className={"bg-amber-100 text-right"}>
        {"배너로 돌아가고 싶다면 부드럽게 스크롤해주세요."}
      </span>
      <CustomCanvas />
    </Screen>
  );
}
