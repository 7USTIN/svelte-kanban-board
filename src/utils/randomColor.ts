const colors = [
        "255, 220, 220",
        "255, 240, 220",
        "255, 250, 220",
        "240, 255, 220",
        "220, 255, 225",
        "220, 252, 255",
        "220, 226, 255",
        "236, 220, 255",
        "254, 220, 255",
    ]

export const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
}