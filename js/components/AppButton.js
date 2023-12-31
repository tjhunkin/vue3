export default {
    // button class object is the class: rendering condition, which is boolean
    template: `
      <button
          :class="{
                'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
                'bg-blue-600 hover:bg-blue-700': type === 'primary',
                'bg-purple-200 hover:bg-purple-400': type === 'secondary',
                'bg-gray-200 hover:bg-gray-400': type === 'muted',
                'is-loading': processing
            }"
          :disabled="processing"
      >
        <slot/>
      </button>
    `,

    props: {
        type: { // name of property
            type: String, // type for property
            default: 'primary'
        },

        processing: {
            type: Boolean,
            default: false
        }
    }
}