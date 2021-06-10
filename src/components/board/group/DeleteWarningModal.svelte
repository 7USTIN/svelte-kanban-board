<script lang="ts">
    import { scale, fade } from "svelte/transition"

    export let groups: any[]
    export let iGroup: number
    export let showDeleteWarning: boolean

    const deleteGroup = () => {
        groups.splice(iGroup, 1)
        groups = groups
        showDeleteWarning = false
    }

    const closeWarning = () => showDeleteWarning = false
</script>

<section on:click|self={closeWarning} transition:fade={{duration: 150}}>
    <div in:scale={{duration: 150}}>
        <p>Are you sure? All blocks inside this column will be deleted.</p>
        <button class="delete-btn" on:click={deleteGroup}>
            Delete
        </button>
        <button class="cancel-btn" on:click={closeWarning}>
            Cancel
        </button>
    </div>
</section>

<style lang="scss">
    section {
        position: fixed; 
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(15, 15, 15, 0.6);
        cursor: pointer !important;
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        div {
            box-shadow: rgba(15, 15, 15, .05) 0px 0px 0px 1px, rgba(15, 15, 15, .1) 0px 5px 10px, rgba(15, 15, 15, .2) 0px 15px 40px;
            border-radius: 3px;
            background: white;
            padding: 24px 32px;
            width: 336px;
            font-size: 16px;
            margin: 0 24px;
            cursor: initial;

            p {
                min-height: 64px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: text;
            }

            button {
                user-select: none;
                cursor: pointer;
                border-radius: 3px;
                height: 32px;
                padding: 0px 12px;
                font-size: 14px;
                line-height: 1.2;
                color: rgb(55, 53, 47);
                border: 1px solid rgba(55, 53, 47, 0.16);
                width: 100%;
                margin-top: 8px;
                background: transparent;

                &:hover {
                    background: rgba(55, 53, 47, 0.08);
                }
            }

            .delete-btn {
                color: rgb(235, 87, 87);
                border: 1px solid rgba(235, 87, 87, 0.5);

                &:hover {
                    background: rgba(235, 87, 87, 0.1);
                }
            }
        }
    }
</style>