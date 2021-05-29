<script lang="ts">
    import GroupHeader from "./GroupHeader.svelte"
    import Item from "./Item.svelte"

    export let focusInput: boolean
    export let iGroups: number
    export let groups: any[]
    export let name: string
    export let items: any[]
</script>

<div class="group-wrapper">
    <GroupHeader bind:groups bind:focusInput {name} {iGroups} />
</div>

<style lang="scss">
    .group-wrapper {
        padding-right: 16px;
        width: 260px;
        box-sizing: content-box;
    }
</style>