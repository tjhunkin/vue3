import Assignments from "./Assignments.js";

// root component of the application
export default {
    components: {Assignments},

    template: `
      <assignments></assignments>
    `,
    mounted() {
        setTimeout(() => {
            document.title = 'Episode 9: Parent-Child State Communication';
        }, 1000)
    },
}