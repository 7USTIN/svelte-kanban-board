<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { colors } from "../../../utils/colors"
    import { fade } from "svelte/transition" 
    import { addItem } from "../../../utils/groupsData" 

    export let groups: any[]
    export let iGroup: number
    export let groupColor: string

    const dispatch = createEventDispatcher()

    let showMenu = false

    const deleteGroup = () => {
        groups.splice(iGroup, 1)
        groups = groups
        showMenu = false
    }

    const addGroupItem = () => {
        groups[iGroup].items = addItem(groups, iGroup)
        dispatch("renameItem", {id: groups[iGroup].items[groups[iGroup].items.length - 1].id})
    }
</script>

<div class="more-wrapper">
    <i on:click={() => showMenu = !showMenu} class="options material-icons">more_horiz</i>

    <div class="more-menu-wrapper">
        {#if showMenu}
            <div class="invisible" on:click={() => showMenu = false}/>

            <div class="more-menu" transition:fade={{ duration: 50 }}>
                <p on:click={deleteGroup}><i class="material-icons">delete_outline</i>Delete</p>

                <div class="hr" />
                
                <div class="sub-header">Colors</div>
                {#each colors as {name, hex}}
                    <p on:click={() => { groupColor = hex; showMenu = false }}>
                        <span class="color" style={`background: #${hex};`}>
                            <span class="border" style={`border: 1px solid #${hex};`}/> 
                        </span> 
                        {name}
                    </p>
                {/each}
            </div>
        {/if}
    </div>
    
</div>

<div on:click={addGroupItem}>
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
                padding: 6px 0;
                z-index: 500;

                .hr {
                    width: 100%;
                    height: 1px;
                    background: rgba(55, 53, 47, 0.2);
                    margin: 9px 0;
                }

                .sub-header {
                    color: rgba(55, 53, 47, 0.6);
                    font-size: 13px;
                    font-weight: 600;
                    line-height: 120%;
                    user-select: none;
                    padding: 0 0 8px 14px;
                }

                p {
                    display: flex;
                    align-items: center;
                    user-select: none;
                    min-height: 28px;
                    font-size: 15px;
                    width: 100%;
                    line-height: 120%;
                    cursor: pointer;
                    text-transform: capitalize;

                    &:hover {
                        background: rgba(55, 53, 47, 0.1)
                    }
                }

                i {
                    font-size: 19px;
                    margin: 0 3px 0 14px;
                }

                .color {
                    width: 18px;
                    height: 18px;
                    margin: 0 8px 0 14px;
                    border-radius: 3px;
                    position: relative;

                .border {
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    right: 0;
                    bottom: 0;
                    border-radius: 3px;
                    width: 18px;
                    height: 18px;
                    background: transparent;
                    filter: brightness(80%);
                    z-index: 600;
                }
                }
            }
        }
    }
</style>