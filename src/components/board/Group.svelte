<script lang="ts">
    import Item from "./Item.svelte"

    export let focusInput: boolean
    export let iGroups: number
    export let groups: any[]
    export let name: string
    export let items: any[]

    const focusEl = (node: HTMLInputElement) => {
        if(focusInput && iGroups + 1 === groups.length) {
            node.focus()
        }
    }
</script>

<div class="group-wrapper">
    <input
        type="text" 
        aria-label={name ? name : `Group ${iGroups + 1}`} 
        placeholder={`Group ${iGroups + 1}`}
        bind:value={name} 
        use:focusEl
        autocomplete="false"
        spellcheck="false"
    />
</div>

<style lang="scss">
    .group-wrapper {
        padding-right: 16px;
        width: 260px;
        box-sizing: content-box;

        input {
            user-select: none;
            border: none;
            background: none;
            cursor: pointer;
            padding: 3px;
            border-radius: 3px;
            height: 24px;
            font-size: 14px;
            padding-left: 8px;
            padding-right: 8px;
            font-weight: 500;
        }
    }
</style>