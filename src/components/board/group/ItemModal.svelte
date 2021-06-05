<script lang="ts">
    export let showModal: boolean
    export let title: string

    let titleEl: HTMLElement

    const closeModal = () => showModal = false

    $: if(titleEl) {
        const range = document.createRange()
        const sel = window.getSelection()
        range.setStart(titleEl.childNodes[0], title.length)
        sel.removeAllRanges()
        sel.addRange(range)
        titleEl.focus()
    }
</script>

<section on:click|self={closeModal}>
    <div class="modal">
        <div class="close">
            <i class="material-icons" on:click={closeModal}>close</i>
        </div>
        <div class="title-wrapper">
            <div
                class="item-title"
                contenteditable="true"
                bind:this={titleEl}
                bind:innerHTML={title}
                placeholder="Untitled"
                spellcheck="false"
            />
        </div>
    </div>
</section>

<style lang="scss">
    section {
        position: fixed; 
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.4);
        cursor: default !important;
        z-index: 999;

        .modal {
            display: flex;
            flex-direction: column;
            position: absolute;
            margin: 0 auto;
            max-width: 977px;
            border-radius: 3px;
            background: white;
            box-shadow: rgba(15, 15, 15, .05) 0px 0px 0px 1px, rgba(15, 15, 15, .1) 0px 5px 10px, rgba(15, 15, 15, .2) 0px 15px 40px;
            top: 72px;
            left: 72px;
            right: 72px;
            height: calc(100% - 144px);
            overflow: auto;

            .close {
                position: absolute;
                width: 100%;
                top: 12px;
                right: 24px;
                height: 45px;
                display: flex;
                align-items: center;

                i { 
                    margin-left: auto;
                    user-select: none;
                    padding: 2px 2px;
                    border-radius: 3px;
                    cursor: pointer;

                    &:hover {
                        background: rgba(55, 53, 47, 0.08);
                    }
                }
            }

            .title-wrapper {
                padding: 60px 12.5% 0;
                width: 100%;

                .item-title {
                    white-space: pre-wrap;
                    word-break: break-word;
                    color: rgb(55, 53, 47);
                    caret-color: rgb(55, 53, 47);
                    font-size: 14px;
                    line-height: 1.2;
                    min-height: 1em;
                    padding: 3px 2px;
                    font-weight: 700;
                    font-size: 40px;
                    cursor: text;

                    &:empty::before {
                        content: attr(placeholder);
                        color: rgba(55, 53, 47, 0.45);
                    }
                }
            }
        }
    }

    ::-webkit-scrollbar {
        background: transparent;
    }

    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: #D3D1CB;
    }

    ::-webkit-scrollbar-track {
        background: #EDECE9;
    }
</style>