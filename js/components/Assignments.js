import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: {AssignmentList, AssignmentCreate},

    template: `
      <section class="space-y-6">
        <!--title and assignments are props (properties) on the AssignmentList component-->
        <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
        <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

        <!--when the $emit function is fired on the child component, with the name of 'assignmentCreateAction',-->
        <!--fire the parent function called add-->
        <!--assignmentCreateAction is a custom event-->
        <assignment-create @assignmentCreateAction="add"></assignment-create>
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
        // assigmentName argument comes from the child component emit vue function from the second argument
        // seems that it can be called whatever you want it to be
        add(assigmentName) {

            const addAssignment = { name: assigmentName };

            // some: performs the specified action for each element in an array
            const assignmentExists = this.assignments.some(obj => obj.name === addAssignment.name);

            if (assignmentExists) {
                alert('Assignment ' + assigmentName + ' already exists');
            }

            if (! assignmentExists) {
                this.assignments.push({
                    name: assigmentName,
                    completed: false,
                    id: this.assignments.length + 1
                });
            }
        }
    }
}