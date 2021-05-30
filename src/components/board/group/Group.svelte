<script lang="ts">
    import Header from "./Header.svelte"
    import AddItem from "./AddItem.svelte"
    import Item from "../Item.svelte"

    export let focusHeader: boolean
    export let iGroups: number
    export let groups: any[]
    export let name: string
    export let items: any[]

    let focusItem = false
</script>

<div class="group-wrapper">
    <Header bind:groups bind:focusHeader {name} {iGroups} />

    {#each items as {id, title, text}, iItem (iItem)}
        <Item bind:title bind:text bind:groups bind:focusItem {iGroups} {id} />
    {/each}
    
    <AddItem bind:groups {iGroups} on:addedItem={() => focusItem = true}/>
</div>

<style lang="scss">
    .group-wrapper {
        padding-right: 16px;
        width: 260px;
        box-sizing: content-box;
    }
</style>