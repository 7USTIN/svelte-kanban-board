<script lang="ts">
    import { fade } from "svelte/transition" 
    import { addItem } from "../../../utils/groupsData" 

    export let groups: any[]
    export let iGroups: number

    let showMenu = false
</script>

<div class="more-wrapper">
    <i on:click={e => showMenu = !showMenu} class="options material-icons">more_horiz</i>

    <div class="more-menu-wrapper">
        {#if showMenu}
            <div class="invisible" on:click={() => showMenu = false}/>
            <div class="more-menu" transition:fade={{ duration: 50 }}>
                <p>Lorem Impsum</p>
                <p>Lorem Impsum</p>
                <p>Lorem Impsum</p>
            </div>
        {/if}
    </div>
</div>

<div on:click={() => groups[iGroups].items = addItem(groups, iGroups)}>
    <i class="options material-icons">add</i>
</div>

<style lang="scss">
    .options {
        user-select: none;
        padding: 2px;
        border-radius: 3px;
        font-size: 20px;
        color: rgba(55, 53, 47, 0.75);
        background: none;
        cursor: pointer;

        &:hover {
            background: rgba(55, 53, 47, 0.08);
        }
    }

    .more-wrapper {
        position: relative;

        .more-menu-wrapper {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1%;

            .invisible {
                position: fixed;
                top: 0;
                left: 0;
                z-index: 100;
                width: 100vw;
                height: 100vw;
                background: transparent;
            }

            .more-menu {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                width: 180px;
                background: white;
                box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px;
                border-radius: 3px;
                display: flex;
                flex-direction: column;
                z-index: 500;
            }
        }
    }
</style>