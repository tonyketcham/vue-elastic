<template>
  <main id="app">
    <animated.header>
      <animated.h1 style="color: red;">man oh</animated.h1>
      <animated.h2 style="color: orange;">man oh</animated.h2>
      <animated.h3 style="color: gold;">man oh</animated.h3>
      <animated.h4 style="color: lime;">man oh</animated.h4>
      <animated.h5 style="color: cyan;">man</animated.h5>
    </animated.header>

    <animated.div style="display: flex; padding: 2rem;">
      <animated.small>hey...</animated.small>
      <p>And hey wit regular DOM</p>
    </animated.div>
  </main>
</template>

<script>
  import { animated } from './animated';
  export default {
    components: {
      ...animated(),
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    vertical-align: middle;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    line-height: 0.8;
    place-items: flex-end;
    font-size: 72pt;
    height: 100%;
    width: 100%;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
  div {
    background-color: #2c3e50;
    color: #eeeeee;
  }
</style>
