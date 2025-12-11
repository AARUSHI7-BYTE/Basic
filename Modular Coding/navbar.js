export function navbar() {
    return `
    <nav style = "
    background-color: palevioletred;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ">
    <ul style="display:flex; justify-content: space-between; gap:260px">
        <li><a href="/" style="text-decoration:none; color:black;">Home</a></li>
        <li><a href="/" style="text-decoration:none; color:black;">About Us</a></li>
        <li><a href="/" style="text-decoration:none; color:black;">Contact Us</a></li>
        <li><a href="/" style="text-decoration:none; color:black;">Services</a></li>
    </ul>
</nav>
    `
}