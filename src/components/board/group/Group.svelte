<script lang="ts">
    import Header from "./Header.svelte"
    import AddItem from "./AddItem.svelte"
    import Item from "./Item.svelte"

    export let focusHeader: boolean
    export let iGroup: number
    export let groups: any[]
    export let name: string
    export let items: any[]

    let focusItem = {focus: false, id: undefined}

    const handleRenameItem = e => {
        focusItem.id = e.detail.id
        focusItem.focus = true
    }
</script>

<div class="group-wrapper">
    <Header bind:groups bind:focusHeader {name} {iGroup} on:renameItem={handleRenameItem}/>

    {#each items as {id, title, text}, iItem (iItem)}
        <Item bind:title bind:text bind:groups bind:focusItem {iGroup} {id} {iItem} {handleRenameItem} />
    {/each}
    
    <AddItem bind:groups {iGroup} on:renameItem={handleRenameItem}/>
</div>

<style lang="scss">
    .group-wrapper {
        padding-right: 16px;
        width: 260px;
        box-sizing: content-box;
    }
</style>