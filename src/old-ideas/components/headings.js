// import Vue from 'vue';
const priorities = [1, 2, 3, 4, 5, 6];

export default (Vue) =>
  priorities.map((priority) => {
    return Vue.component(`animated.h${priority}`, {
      render() {
        const CustomTag = `h${priority}`;
        return <CustomTag>{this.$slots.default}</CustomTag>;
      },
    });
  });
