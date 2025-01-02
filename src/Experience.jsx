import {ContactShadows, Environment, Float, Html, PresentationControls, useGLTF} from '@react-three/drei';

export default function Experience() {
    const computer = useGLTF('./macbook_model.gltf');

    return <>
        <Environment preset={'city'}/>
        <color args={['#241a1a']} attach="background"/>
        <PresentationControls
            global
            rotation={[0.13, 0.1, 0]}
            polar={[-0.4, 0.2]}
            azimuth={[-1, 0.75]}
            config={{mass: 2, tension: 400}}
            snap={{mass: 4, tension: 400}}
        >
            <Float rotationIntensity={0.4}>
                <rectAreaLight
                    width={2.5}
                    height={1.65}
                    intensity={65}
                    color={'#edf2f8'}
                    rotation={[-0.1, Math.PI, 0]}
                    position={[0, 0.55, -1.15]}
                />
                <primitive object={computer.scene} position-y={-1.2}>
                    <Html
                        transform
                        wrapperClass="htmlScreen"
                        distanceFactor={1.17}
                        position={[0, 1.56, -1.4]}
                        rotation-x={-0.256}
                    >
                        <iframe src="https://piotr.rzadkowolski.dev/"/>
                    </Html>
                </primitive>
            </Float>
        </PresentationControls>
        <ContactShadows
            position-y={-1.4}
            opacity={0.4}
            scale={5}
            blur={2.4}
        />
    </>
}