import AppButton from "./AppButton.js";

export default {
    mounted() {
        setTimeout(() => {
            document.title = 'Episode 7: Bring it All Together';
        }, 1000)
    },
    components: {
        'app-button': AppButton,
    }
}