import Assignments from "./Assignments.js";

// root component of the application
export default {
    components: {Assignments},

    template: `
      <assignments></assignments>
    `,
    mounted() {
        setTimeout(() => {
            document.title = 'Episode 8: Handle a Form Submission';
        }, 1000)
    },
}