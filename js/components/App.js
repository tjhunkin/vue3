import AppButton from "./AppButton.js";

export default {
    mounted() {
        setTimeout(() => {
            document.title = 'Episode 6: Component Props';
        }, 1000)
    },
    components: {
        'app-button': AppButton,
    }
}