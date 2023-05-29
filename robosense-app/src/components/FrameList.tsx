import { For } from "solid-js";

import "./FrameList.css";

export function FrameList() {
    return (
        <div class="container">
            <For each={[...Array(10).keys()]}>{
                (i) => <img class="frame-list-image" src="src/assets/stream.png" />
            }
            </For>
        </div>
    );
}