export default {
    template: `
        <button class="bg-blue-500 text-white px-4 py-2 rounded disabled:cursor-not-allowed" :disabled="proccessing">
            <slot />
        </button>
        `,
            data() {
                return {
                            proccessing: true
                        }
             },
}