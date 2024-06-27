import { Scroll, ScrollControls } from "@react-three/drei";
import ScrollManager from "./components/ScrollManager";
import Scene from "./components/Scene";
import Over from "./components/Over";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import styled from "styled-components";

export default function App() {
  const [sceneAn, setSceneAn] = useState(1);

  return (
    <Layout>
      <Canvas shadows style={{ position: "absolute" }}>
        <color attach={'background'} args={['#dfdfdf']}/>
        <ScrollControls pages={5} damping={0.2}>
          <ScrollManager />
          <Scene sceneAn={sceneAn} />
          <Scroll html style={{ width: "100%", position: "relative" }}>
            <Over setSceneAn={setSceneAn} />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </Layout>
  );
}

function FixPage() {
  return (
    <>
      <div style={{ height: "100vh", width: "100%", position: "absolute" }}>
        werwerwarwa
      </div>
    </>
  );
}

const Layout = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
`;
