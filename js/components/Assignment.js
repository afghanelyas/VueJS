export default {
    template: `
        <li>
            <label class="p-2 justify-between flex items-center">
                {{assignment.name}}
                <input type="checkbox" v-model="assignment.complete" class="ml-4">
            </label>
        </li>
    `,
    props: {
        assignment: Object,

    }
}