export default {
    template: `
        <form class="mt-4" @submit.prevent="add" >
            <label class="flex flex-col">
                <span class="font-bold">Add Assignment</span>
                <input  v-model="newAssignment" type="text"  class="border border-gray-600 p-2 text-black">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Add</button>
            </label>
        </form>
    `,
  
    data(){
        return {
            newAssignment: ''
        }
    },
    methods: {
        add(){
            this.$emit('add', this.newAssignment);

            this.newAssignment = ''
        }
    }
}