import Assignments from "./Assignments.js";

// root component of the application
export default {
    // the root component seems to handle the data in terms of display and capturing
    // it in turn passes any data needed to the child components using props
    components: {Assignments},

    template: `
      <assignments></assignments>
    `,
    mounted() {
        setTimeout(() => {
            document.title = 'Episode 14: More Flexible Components With Slots and Flags';
        }, 1000);
    },
}