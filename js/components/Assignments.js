import AssignmentList from "./AssignmentList.js"
export default {
    components: {AssignmentList},
    template: `
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="In prograss" ></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed" ></assignment-list>
        </section>
        <form class="mt-4" @submit.prevent="add" >
            <label class="flex flex-col">
                <span class="font-bold">Add Assignment</span>
                <input  v-model="newAssignment" type="text"  class="border border-gray-600 p-2 text-black">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Add</button>
            </label>
        </form>
    `,
    data(){
        return{
            assignments: [
                {name: "Finish project", complete: false, id: 1},
                {name: "Read Chapter", complete: false, id: 2},
                {name: "Turn in homework", complete: false, id: 3},
            ],
            newAssignment: ""
        }
    },
    computed: {
        filters(){
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            }
        }
    },
    methods: {
        add(){
            this.assignments.push({
                name: this.newAssignment,
                complete: false,
                id: this.assignments.length + 1
                })
            this.newAssignment = ""
        }
    }

}