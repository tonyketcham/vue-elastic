import { primitives } from './primitives.js';

/**
 * She ain't animated yet but we got a little ol Vue component spitter outer
 * @param {Object} Vue get that Vue instance on the goddamn horn
 */
const Animated = (Vue) =>
  primitives.map((tag) => {
    return Vue.component(`animated.${tag}`, {
      render() {
        const Component = `${tag}`;
        return <Component>{this.$slots.default}</Component>;
      },
    });
  });

export default {
  install(Vue) {
    Animated(Vue);
  },
};
