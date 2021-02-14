import { primitives } from './primitives.js';
import v from 'vue';

/**
 * She ain't animated yet but we got a little ol Vue component spitter outer
 * @param {Object} Vue get that Vue instance on the goddamn horn
 */
const ComponentsGlossary = (Vue) =>
  primitives.map((tag) => {
    return Vue.component(`animated.${tag}`, {
      render() {
        const Component = `${tag}`;
        return <Component>{this.$slots.default}</Component>;
      },
    });
  });

export function animated() {
  let animated = {};
  for (const component in ComponentsGlossary(v)) {
    const name = component.options.name;
    animated = { [name]: component };
  }
  console.log(animated);
  // return animated;
}

export default {
  install(Vue) {
    ComponentsGlossary(Vue);
  },
};
