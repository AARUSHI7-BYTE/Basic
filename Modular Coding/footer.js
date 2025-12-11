export function footer(){
    const year = new Date().getFullYear();
    return `
    <footer style="color:black; font-size: larger;
    font-style: italic; " >
    <p>@ ${year} MyWebsite — All Rights Reserved.</p>
    </footer> `
}