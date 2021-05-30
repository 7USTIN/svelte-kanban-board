export const colors = [
        {name: "gray", hex:"e9e9e9"},
        {name: "yellow", hex:"f9f2d6"},
        {name: "green", hex:"daf9d6"},
        {name: "blue", hex:"cbe4f9"},
        {name: "purple", hex:"e0d6f9"},
        {name: "pink", hex:"f9d6ee"},
        {name: "red", hex:"f9d8d6"},
    ]

export const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)].hex
}