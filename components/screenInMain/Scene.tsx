import React, { Suspense, useRef, useState } from "react";
import { Camera, Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Screen } from "../Screen";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function WolfMesh(props: JSX.IntrinsicElements["mesh"]) {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const gltf = useLoader(
    GLTFLoader,
    "https://firebasestorage.googleapis.com/v0/b/homepage-229db.appspot.com/o/static%2FlowPolyWolf%2Fscene.gltf?alt=media&token=d55f9671-5a8f-41ef-a9c8-39908de7dec9"
  );

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
        scale={0.01}
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
      {/* 모바일 환경을 고려하여 조작 금지 */}
      {/* @ts-ignore */}
      {/*<PerspectiveCamera
        ref={cameraRef}
        makeDefault={true}
        position={[0, 0, 50]}
      />
      <OrbitControls
        camera={cameraRef.current}
        makeDefault={true}
        enableZoom={false}
      />*/}
      <Suspense fallback={null}>
        <WolfMesh position={[0, 0, -10]} />
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
