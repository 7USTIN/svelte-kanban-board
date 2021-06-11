export const groupsData = [
    {
        name: "Not started",
        color: "f9d8d6",
        items: [
            { id: 1, title: "Item 1", text: "Text 1"},
            { id: 2, title: "Item 2", text: "Text 2"},
            { id: 3, title: "Item 3", text: "Text 3"},
            { id: 4, title: "Item 4", text: "Text 4"},
            { id: 5, title: "Item 5", text: "Text 5"},
        ]
    },
    {
        name: "In progress",
        color: "f9f2d6",
        items: [
            { id: 6, title: "Item 6", text: "Text 6"},
            { id: 7, title: "Item 7", text: "Text 7"},
            { id: 8, title: "Item 8", text: "Text 8"},
            { id: 9, title: "Item 9", text: "Text 9"},
            { id: 10, title: "Item 10", text: "Text 10"},
            { id: 11, title: "Item 11", text: "Text 11"},
            { id: 12, title: "Item 12", text: "Text 12"},
        ]
    },
    {
        name: "Completed",
        color: "daf9d6",
        items: [
            { id: 13, title: "Item 13", text: "Text 13"},
            { id: 14, title: "Item 14", text: "Text 14"},
        ]
    },
] 

export const generateId = (arr: any[]) => {
    let id = 1

    function checkId() {
        for(let i in arr) {
            for(let j in arr[i].items) {
                if(arr[i].items[j].id === id) {
                    id++
                    checkId()
                }
            }
        }
    }
    checkId()

    return id
}

export const addItem = (arr: any, index: number) => {
    window.getSelection().removeAllRanges()
    return arr[index].items = [
        ...arr[index].items, 
        {id: generateId(arr), title: "", text: ""}
    ]
}