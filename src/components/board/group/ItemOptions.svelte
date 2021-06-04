<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { generateId } from "../../../utils/groupsData"
    import { fade } from "svelte/transition" 

    export let groups: any[]
    export let iGroup: number
    export let id: number
    export let iItem: number
    
    let showMenu = false

    const dispatch = createEventDispatcher()

    const clickMenu = () => showMenu = !showMenu

    const renameItem = () => {
        dispatch("renameItem", { id: id })
        clickMenu()
    }

    const copyItem = () => {
        let gItems = groups[iGroup].items
        gItems.splice(iItem + 1, 0, { id: generateId(groups), title: gItems[iItem].title, text: gItems[iItem].text })
        groups = groups
        clickMenu()
    }

    const deleteItem = () => {
        groups[iGroup].items = groups[iGroup].items.filter(item => item.id !== id)
        clickMenu()
    }
</script>

<svelte:window on:mouseleave={clickMenu}></svelte:window>

<i class="material-icons more-icon" on:click={clickMenu}>
    more_horiz
</i>

{#if showMenu}
    <div class="more-menu-wrapper">
        <div class="invisible" on:click={clickMenu}/>

        <div class="more-menu" transition:fade={{ duration: 50 }}>
            <p on:click={renameItem}><i class="material-icons">drive_file_rename_outline</i>Rename</p>
            <p on:click={copyItem}><i class="material-icons">content_copy</i>Duplicate</p>
            <p on:click={deleteItem}><i class="material-icons">delete_outline</i>Delete</p>
        </div>
    </div>
{/if}

<style lang="scss">
    .more-icon {
        background: white;
        border-radius: 3px;
        box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;
        padding: 2px 3px;
        cursor: pointer;
        font-size: 20px;
        color: rgba(55, 53, 47, 0.6);

        &:hover {
            background: rgb(239, 239, 238);
        }
    }

    .more-menu-wrapper {
        position: relative;
        width: 1px;
        height: 1px;
        margin: 0 auto;

        .invisible {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100;
            width: 100vw;
            height: 100vw;
            background: transparent;
            z-index: 100;
            cursor: initial;
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
            z-index: 600;

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
                margin: 0 8px 0 14px;
            }
        }

    }
</style>