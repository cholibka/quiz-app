export const enum Gradient {
    FirstButton,
    SecondButton,
    ThirdButton,
    FourthButton
}

export const gradientValues: { [key in Gradient]: string[] } = {
    [Gradient.FirstButton]: ["from-[#33a8c7]", "via-[#52e3e1]", "to-[#a0e426]"],
    [Gradient.SecondButton]: ["from-[#fdf148]", "via-[#ffab00]", "to-[#f77976]"],
    [Gradient.ThirdButton]: ["from-[#f050ae]", "via-[#d883ff]", "to-[#9336fd]"],
    [Gradient.FourthButton]: ["from-[#A084E8]", "via-[#8BE8E5]", "to-[#D5FFE4]"],
}
