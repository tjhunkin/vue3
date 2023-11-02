export default {
    template: `
      <div class="flex gap-2">
        <!--user clicks on a tag, we then emit a change with that tag that was clicked-->
        <button
            @click="$emit('change', tag)"
            v-for="tag in tags"
            class="border rounded px-1 py-px text-xs"
            :class="{
                'border-blue-500 text-blue-500': tag === currentTag 
              }"
        >{{ tag }}
        </button>
      </div>`,
    props: {
        dataTags: Array,
        currentTag: String
    },
    computed: {
        tags() {
            // Set returns a unique list
            return ['all', ...new Set(this.dataTags)];
        }
    }
}