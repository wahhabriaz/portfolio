import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Bounds, Environment, useGLTF } from "@react-three/drei";

type RobotModelProps = {
  modelPath?: string;
};

function RobotModel({ modelPath = "/models/robot.glb" }: RobotModelProps) {
  const { scene } = useGLTF(modelPath);
  const { camera, mouse } = useThree();

  const root = useRef<THREE.Group>(null);

  // head bone finding stays same...
  const headBone = useMemo<THREE.Bone | null>(() => {
    let bone: THREE.Bone | null = null;
    scene.traverse((obj) => {
      if ((obj as THREE.Bone).isBone && obj.name === "Head_02") {
        bone = obj as THREE.Bone;
      }
    });
    return bone;
  }, [scene]);

  const tempObj = useMemo(() => new THREE.Object3D(), []);
  const targetWorld = useRef(new THREE.Vector3());

  useFrame(() => {
    if (!headBone || !headBone.parent) return;

    targetWorld.current.set(mouse.x, mouse.y, 0.5).unproject(camera);
    const targetLocal = headBone.parent.worldToLocal(targetWorld.current.clone());

    tempObj.position.copy(headBone.position);
    tempObj.lookAt(targetLocal);

    headBone.quaternion.slerp(tempObj.quaternion, 0.12);

    headBone.rotation.x = THREE.MathUtils.clamp(headBone.rotation.x, -0.35, 0.35);
    headBone.rotation.y = THREE.MathUtils.clamp(headBone.rotation.y, -0.55, 0.55);
  });

  return (
    <group ref={root} rotation={[-0.05, Math.PI, 0]}>
      {/* ✅ rotate 180 degrees so it faces camera */}
      <primitive object={scene} />
    </group>
  );
}

type FooterRobotProps = {
  height?: number | string;
  width?: number | string;
  modelPath?: string;
};

export default function FooterRobot({
  height = 280,
  width = "100%",
  modelPath = "/models/robot.glb",
}: FooterRobotProps) {
  return (
    <div
      style={{
        width,
        height,
        position: "relative",
        overflow: "hidden",
        borderRadius: 16,
        background: "#0f0f0f",
      }}
    >
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 1.2, 4], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        onCreated={({ gl }) => {
          // ✅ correct color output
          gl.outputColorSpace = THREE.SRGBColorSpace;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.0;
        }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[4, 5, 4]} intensity={1.6} />
        <directionalLight position={[-4, 2, 1]} intensity={0.7} />

        <Suspense fallback={null}>
          {/* ✅ lower environment so it doesn't turn into red-glass reflection */}
          <Environment preset="city" environmentIntensity={0.35} />

          {/* ✅ THIS IS THE IMPORTANT PART:
              Automatically fits the camera to the whole model */}
          <Bounds fit clip observe margin={1.1}>
            <RobotModel modelPath={modelPath} />
          </Bounds>
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/robot.glb");
