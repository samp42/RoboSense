import { For } from "solid-js";

import "./FrameList.css";
import '../styles.css';

export function FrameList() {
    return (
        <div class="container frame-list">
            <div class="side-menu-inner">
                <h1>Frames</h1>
                <For each={[...Array(20).keys()]}>{
                        (i) => <img class="frame-list-image" src="src/assets/stream.png" />
                    }
                </For>
            </div>
        </div>
    );
}