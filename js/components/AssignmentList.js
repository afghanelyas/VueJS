import Assignment from "./Assignment.js"
import AssignmentTags from "./AssignmentTags.js"
import Panel from "./Panel.js"
export default {
    components: {Assignment, AssignmentTags, Panel},
    template: `
        <panel v-show="assignments.length" class="w-60">
        
            <div class="flex justify-between items-start ">
                <h2 class="font-bold mb-2">
                    {{ title }} 
                    <span class="text-xs text-white-500 font-normal">
                        ({{ assignments.length }})
                    </span>
                </h2>
                <button v-show="canToggle" @click="$emit('toggle')">&times;</button>
            </div>
            
        <assignment-tags 
                :initial-tags="assignments.map(a => a.tag)"
                :current-tag="currentTag"
                @change="currentTag = $event"
         />

            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
               <assignment
                    v-for="assignment in filteredAssignments"
                    :key="assignment.id"
                    :assignment="assignment"
               ></assignment>
            </ul>
            <slot></slot>
            <template v-slot:footer>
                my footer gose here
            </template>

            </panel>
        
    `,
    props: {
        assignments: Array,
        title: String,
        canToggle: { type: Boolean, default: false}
    },

    data(){
        return{
            currentTag: "all",
        }
    },

    computed:{
        filteredAssignments(){
            if(this.currentTag === 'all'){
                return this.assignments;
            };
            return this.assignments.filter(a => a.tag === this.currentTag)
        },
    }
}