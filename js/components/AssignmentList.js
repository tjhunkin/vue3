import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: {Assignment, AssignmentTags},

    template: `
      <section v-show="assignments.length">
        <h2 class="font-bold mb-2">
          {{ title }}
          <span>({{ assignments.length }})</span>
        </h2>

        <!--magic $event variable, contains second argument (tag) from $emit-->
        <!--after user clicks on the tag, it emits a change with the tag selected, in turn, this component waits for that change-->
        <!--we will the store that tag selected as the current tag-->
        <assignment-tags 
            :data-tags="assignments.map(a => a.tag)"
            :current-tag="currentTag"
            @change="currentTag = $event">
        </assignment-tags>

        <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
          <assignment
              v-for="assignment in filteredAssignments"
              :key="assignment.id"
              :assignment="assignment"
          ></assignment>
        </ul>
      </section>
    `,

    props: {
        assignments: Array,
        title: String
    },

    data() {
        return {
            currentTag: 'all'
        };
    },

    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments;
            }

            return this.assignments.filter(a => a.tag === this.currentTag);
        }
    }
}