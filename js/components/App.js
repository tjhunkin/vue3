import Assignments from "./Assignments.js";

// root component of the application
export default {
    components: {Assignments},

    template: `
      <assignments></assignments>
    `,
    mounted() {
        setTimeout(() => {
            document.title = 'Episode 10: It\'s All So Easy';
        }, 1000)
    },
}