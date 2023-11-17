import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
import Panel from "./Panel.js";

export default {
    components: {Assignment, AssignmentTags, Panel},

    template: `
      <Panel v-show="assignments.length" class="w-70" theme="light">
      
        <template #heading>panel heading</template>
      
        <div class="flex justify-between items-start">
            <h2 class="font-bold mb-2">
            {{ title }}
            <span>({{ assignments.length }})</span>
            </h2>   
            
            <button v-show="canToggle" @click="$emit('toggle')">&times;</button>   
        </div>

        <!--magic $event variable, contains second argument (tag) from $emit-->
        <!--after user clicks on the tag, it emits a change with the tag selected, in turn, this component waits for that change-->
        <!--we will the store that tag selected as the current tag-->
        <assignment-tags
            v-model:currentTag="currentTag"
            :data-tags="assignments.map(a => a.tag)"
            :current-tag="currentTag"
        >
        </assignment-tags>

        <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
          <assignment
              v-for="assignment in filteredAssignments"
              :key="assignment.id"
              :assignment="assignment"
          ></assignment>
        </ul>
        
        <slot></slot>
        
        <template #footer>panel footer</template>
      </Panel>
    `,

    // passed from the parent component
    props: {
        assignments: Array,
        title: String,
        canToggle: { type: Boolean, default: false }
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