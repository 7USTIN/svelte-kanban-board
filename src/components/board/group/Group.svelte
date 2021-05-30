<script lang="ts">
    import Header from "./Header.svelte"
    import AddItem from "./AddItem.svelte"
    import Item from "../Item.svelte"

    export let focusInput: boolean
    export let iGroups: number
    export let groups: any[]
    export let name: string
    export let items: any[]
</script>

<div class="group-wrapper">
    <Header bind:groups bind:focusInput {name} {iGroups} />

    {#each items as {id, title, text}, iItem (iItem)}
        <Item bind:title bind:text bind:groups {iGroups} {id} />
    {/each}
    
    <AddItem bind:groups {iGroups}/>
</div>

<style lang="scss">
    .group-wrapper {
        padding-right: 16px;
        width: 260px;
        box-sizing: content-box;
    }
</style>