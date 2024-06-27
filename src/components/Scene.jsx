import { Box, OrbitControls } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { BookModel } from "./Book";

export default function Scene({ sceneAn }) {
  const { rotation } = useSpring({
    rotation:
      sceneAn == 2
        ? [-1.5, 0, 3.2]
        : sceneAn == 3
        ? [-1.5, 0, 3.2]
        : sceneAn == 4
        ? [-1.5, 0, 3.2]
        : sceneAn == 5
        ? [-1.5, 0, 3.2]

        : [-1.5, 0, 3.2],
  });

  return (
    <>
      
      <directionalLight
        shadow-mapSize={4096}
        castShadow
        intensity={3}
        position={[1, 1, 1]}
      />
      <ambientLight intensity={0.8} />
      <animated.mesh rotation={rotation}>
        <BookModel sceneAn={sceneAn} />
      </animated.mesh>
    </>
  );
}
