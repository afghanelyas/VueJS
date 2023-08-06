import AssignmentList from "./AssignmentList.js"
export default {
    components: {AssignmentList},
    template: `
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="In prograss" ></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed" ></assignment-list>
        </section>
    `,
    data(){
        return{
            assignments: [
                {name: "Finish project", complete: false, id: 1},
                {name: "Read Chapter", complete: false, id: 2},
                {name: "Turn in homework", complete: false, id: 3},
            ]
        }
    },
    computed: {
        filters(){
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            }
        }
    }

}