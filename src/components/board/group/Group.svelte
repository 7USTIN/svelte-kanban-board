<script lang="ts">
    import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';
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
    
    const flipDurationMs = 200
    const dropTargetStyle = {outline: 'rgba(55, 53, 47, .08) solid 2px'}

    const handleDnd = e => items = e.detail.items
</script>

<div class="group-wrapper">
    <Header bind:groups bind:focusHeader {name} {iGroup} on:renameItem={handleRenameItem}/>

    <div use:dndzone={{items, flipDurationMs, dropTargetStyle}} on:consider={handleDnd} on:finalize={handleDnd}>
        {#each items as {id, title, text}, iItem (id)}
            <div animate:flip={{duration: flipDurationMs}}>
                <Item bind:title bind:text bind:groups bind:focusItem {iGroup} {id} {iItem} {handleRenameItem} />
            </div>
        {/each}
    </div>
    
    <AddItem bind:groups {iGroup} on:renameItem={handleRenameItem}/>
</div>

<style lang="scss">
    .group-wrapper {
        padding-right: 16px;
        width: 260px;
        box-sizing: content-box;
    }
</style>