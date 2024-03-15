"use client";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import Image from "next/image";
import { useRef } from "react";
import { TextureLoader } from "three";
// import { MeshStandardMaterial } from "three";
// import { BoxGeometry } from "three";
import { OrbitControls, Stars } from "@react-three/drei";

export default function Home() {
  return (
    <>
      <div className=" "><br /><br /><br />
        <div className=" flex flex-col-reverse items-center">
          <div className=" w-screen h-screen relative -top-44">
            <Canvas>
              <ambientLight intensity={2.2} />
              <directionalLight position={[11.2, 11.3, 12.4]} />
              <OrbitControls />
              <Cube />
            </Canvas>
          </div>
          <div className=" relative container ">
            {" "}
            <h1 className=" font-sans font-extrabold head  text-pink-300  text-center text-2xl uppercase">
              <span>O</span>nline <span>G</span>rocery <span>S</span>ervices
            </h1><br />
            <p className=" text-center  px-20 font-light font-serif italic text-gray-400">
              Our advanced logistics ensure timely delivery of orders, with
              options for flexible scheduling to accommodate our customers' busy
              lifestyles.
              <br />
              <i className=" text-center  px-20 font-light font-serif">
                "Our online grocery system offers a wide selection of fresh
                produce, pantry staples, and household essentials for convenient
                home delivery."
                <br /> "With our intuitive online platform, customers can easily
                browse, select, and purchase groceries from the comfort of their
                own homes, saving time and hassle."
              </i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function Cube() {
  const mesh = useRef(null);
  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.1;
    mesh.current.rotation.y += delta * 0.1;
    mesh.current.rotation.z += delta * 0.1;
  });

  const t1 = useLoader(TextureLoader, "/Assets/Glasses.jpeg");
  const t2 = useLoader(TextureLoader, "/Assets/Trouser.jpeg");
  const t3 = useLoader(TextureLoader, "/Assets/Watch.jpeg");
  const t4 = useLoader(TextureLoader, "/Assets/Suit.jpeg");
  const t5 = useLoader(TextureLoader, "/Assets/T-shirt.avif");
  const t6 = useLoader(TextureLoader, "/Assets/Dress.jpeg");
  return (
    <>
      {/* <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      /> */}
      <mesh ref={mesh}>
        <boxGeometry args={[2, 2, 2]} />

        <meshStandardMaterial map={t1} attach="material-0" />
        <meshStandardMaterial map={t2} attach="material-1" />
        <meshStandardMaterial map={t3} attach="material-2" />
        <meshStandardMaterial map={t4} attach="material-3" />
        <meshStandardMaterial map={t5} attach="material-5" />
        <meshStandardMaterial map={t6} attach="material-4" />
      </mesh>
    </>
  );
}
