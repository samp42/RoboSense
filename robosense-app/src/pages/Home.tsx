import { Canvas } from "../components/Canvas";
import { FrameList } from "../components/FrameList";
import { LabellingMenu } from "../components/LabellingPanel";

import "./Home.css";

export default function Home() {
    return (
        <div class="container">
            <h1>Home</h1>
            <div class="home-layout">
                <FrameList/>
                <div class="middle">
                    <Canvas />
                </div>
                <LabellingMenu />
            </div>
        </div>
    );
}
