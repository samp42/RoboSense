<template>
  <div id="container">
    <div>
      <v-stage ref="stage" :config="stageSize">
        <v-layer ref="layer">
          <v-image :config="{
            image: image
          }" />
          <v-circle v-for="corner in corners" :config="{
            x: corner.x, y: corner.y, radius: 5, fill: 'black', stroke: 'white', strokeWidth: 2
          }"></v-circle>
        </v-layer>
      </v-stage>
    </div>
    <div id="control-div">
      <h1>Hello</h1>
    </div>
  </div>
</template>

<style>
#container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
}

#control-div {
  width: 100vw;
  flex: 1;
  background-color: aqua;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script lang="ts">
const width = window.innerWidth;

const img = new window.Image();
img.src = "src/assets/field.jpeg";
const scaleFactor = width / img.width;
img.width = img.width * scaleFactor;
img.height = img.height * scaleFactor;

const height = img.height;


export default {
  data() {
    return {
      stageSize: {
        width: width,
        height: height
      },
      image: null,
      corners: [
        { x: 100, y: 100 },
        { x: 100, y: height - 100 },
        { x: width - 100, y: height - 100 },
        { x: width - 100, y: 100 }
      ]
    };
  },
  created() {
    img.onload = () => {
      // set image only when it is loaded
      this.image = img;
    };
  }
};
</script>
