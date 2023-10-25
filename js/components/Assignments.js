import AssignmentList from "./AssignmentList.js";

export default {
    components: {AssignmentList},

    template: `
      <section class="space-y-6">
        <!--title and assignments are props (properties) on the AssignmentList component-->
        <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
        <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

        <!--prevent the submission of the form to avoid a page reload-->
        <form @submit.prevent="add">
          <div class="border border-gray-600 text-black">
            <input v-model="newAssignment" placeholder="New Assignment..." class="p-2" required>
            <button type="submit" class="bg-white p-2 border-l">Add</button>
          </div>
        </form>
      </section>
    `,

    // the data section seems to be the only section that is a function with a return statement
    // computed, methods etc. seem to be key/value pairs
    data() {
        return {
            assignments: [
                {name: 'Finish project', complete: false, id: 1},
                {name: 'Read Chapter 4', complete: false, id: 2},
                {name: 'Turn in Homework', complete: false, id: 3},
            ],
            newAssignment: ''
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            };
        }
    },

    methods: {
        add(e) {
            // e.preventDefault(); should rather be done with modifiers as above

            const addAssignment = { name: this.newAssignment };

            // some: performs the specified action for each element in an array
            const assignmentExists = this.assignments.some(obj => obj.name === addAssignment.name);

            if (assignmentExists) {
                alert('Assignment ' + this.newAssignment + ' already exists');
            }

            if (! assignmentExists) {
                this.assignments.push({
                    name: this.newAssignment,
                    complete: false,
                    id: this.assignments.length + 1
                });
            }

            // clear the input afterward
            this.newAssignment = '';

            // alert(this.newAssignment);
        }
    }
}