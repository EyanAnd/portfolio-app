import { Box  } from "@chakra-ui/react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";
import * as THREE from "three";

const color = "#F8EDEB";
const Planet = () => (
  <group>
    <mesh>
      <sphereGeometry args={[1, 24, 24]} />
      <meshBasicMaterial wireframe reflectivity={1} color="#fae5bf" />
    </mesh>
  </group>
);

const Star = ({ p }) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const distance = mix(2, 3.5, Math.random());
    const yAngle = mix(
      degreesToRadians(80),
      degreesToRadians(100),
      Math.random()
    );
    const xAngle = degreesToRadians(360) * p;
    const position = new THREE.Vector3();
    position.setFromSphericalCoords(distance, yAngle, xAngle);
    ref.current.position.copy(position);
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.05, 0.05, 0.05]} />
      <meshBasicMaterial wireframe='false' color={color} />
    </mesh>
  );
};

function Scene({ numStars = 100 }) {
  const gl = useThree((state) => state.gl);
  const { scrollYProgress } = useScroll();
  const yAngle = useTransform(
    scrollYProgress,
    [0, 1],
    [0.001, degreesToRadians(180)]
  );
  const distance = useTransform(scrollYProgress, [0, 1], [10, 3]);
  const time = useTime();

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(
      distance.get(),
      yAngle.get(),
      time.get() * 0.0005
    );
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);
  });

  useLayoutEffect(() => gl.setPixelRatio(window.devicePixelRatio));

  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<Star key={i} p={progress(0, numStars, i)} />);
  }

  return (
    <>
      <Planet />
      {stars}
    </>
  );
}



export default function App() {
  return (
    <Box bg={'#3898ec'} w="100%" h="100%" position="fixed" top={0} left={0} zIndex={-1}>
      <Canvas gl={{ antialias: false }}>
        <Scene />
      </Canvas>
    </Box>
  );
}

