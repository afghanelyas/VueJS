import Assignment from "./Assignment.js"
export default {
    components: {Assignment},
    template: `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">
            {{ title }} 
            <span class="text-xs text-white-500 font-normal">
                ({{ assignments.length }})
            </span>
            </h2>

            <div class="flex items-center space-x-2">
                <button 
                    @click="currentTag = tag"
                    v-for="tag in tags"
                    class="border rounded px-1 py-1 text-xs"
                    :class="{
                        'border-blue-500 text-blue-500': currentTag === tag,
                    }"
                >{{ tag }} </button>
            </div>

            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
               <assignment
                    v-for="assignment in filteredAssignments"
                    :key="assignment.id"
                    :assignment="assignment"
               ></assignment>
            </ul>
        </section>
        
    `,
    data(){
        return{
            currentTag: "all"
        }
    },
    
    props: {
        assignments: Array,
        title: String
    },

    computed:{
        filteredAssignments(){
            if(this.currentTag === 'all'){
                return this.assignments;
            };
            return this.assignments.filter(a => a.tag === this.currentTag)
        },
        tags(){
            return ['all' , ...new Set(this.assignments.map(a => a.tag))];
        }
    }
}