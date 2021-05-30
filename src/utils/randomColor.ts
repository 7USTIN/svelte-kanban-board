const colors = [
        "CBE4F9",
        "F9D8D6",
        "daf9d6",
        "f9f2d6",
        "e0d6f9",
        "f9d6ee",
        "e9e9e9"
    ]

export const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
}