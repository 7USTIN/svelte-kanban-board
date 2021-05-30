const colors = [
        "CBE4F9",
        "F9D8D6",
    ]

export const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
}