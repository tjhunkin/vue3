import Assignments from "./Assignments.js";

export default {
    components: {Assignments},

    template: `
      <assignments></assignments>
    `,
    mounted() {
        setTimeout(() => {
            document.title = 'Episode 7: Bring it All Together';
        }, 1000)
    },
}