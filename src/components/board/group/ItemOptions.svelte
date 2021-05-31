<script lang="ts">
    let showMenu = false
</script>

<i class="material-icons more-icon" on:click={() => showMenu = !showMenu}>
    more_horiz
</i>

{#if showMenu}
    <div class="more-menu-wrapper">
        <div class="invisible" on:click={() => showMenu = false}/>

        <div class="more-menu">
            Lorem Ipsum
            Lorem Ipsum
            Lorem Ipsum
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
            z-index: 999;
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
        }
    }
</style>