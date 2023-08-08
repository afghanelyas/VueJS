export default {
    template: `
        <div :class="{
            'p-4 border rounded-lg': true,
            'bg-gray-800 text-white': theme === 'dark',
            'bg-white text-gray-800': theme === 'light'
        }">
            <h2 v-if="$slots.heading" class="font-bold">
                <slot name="heading" />
            </h2>
                <slot />

                <footer v-if="$slots.footer" class="mt-4 border-gray-600 border-t pt-4 text-sm">
                    <slot name="footer" />
                </footer>
        </div>
       `,
    props: {
       theme: { type: String, default: "dark" }
    }
}
