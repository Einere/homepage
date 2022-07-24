import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Screen } from "../Screen";
import * as THREE from "three";

function WolfMesh(props: JSX.IntrinsicElements["mesh"]) {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(
    (state, delta) =>
      (mesh.current.rotation.y = mesh.current.rotation.z += 0.01)
  );

  return (
    <mesh
      {...props}
      ref={mesh}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry />
      <meshStandardMaterial wireframe={hovered} />
    </mesh>
  );
}

function CustomCanvas() {
  return (
    <Canvas>
      <ambientLight />
      <directionalLight />
      <WolfMesh />
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
