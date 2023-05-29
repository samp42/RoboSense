import { Canvas } from "../components/Canvas";
import { FrameList } from "../components/FrameList";
import { LabellingMenu } from "../components/LabellingPanel";

export default function Home() {
    return (
        <div class="container">
            <h1>Home</h1>
            <div class="home-layout">
                <FrameList />
                <Canvas />
                <LabellingMenu />
            </div>
        </div>
    );
}
