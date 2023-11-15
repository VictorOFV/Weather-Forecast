const section = document.getElementById("result");

export function createP(text, className = "default", id = "default") {
    const p = document.createElement("p");
    p.innerText = text;
    p.classList.add(className);
    p.id = id;
    section.append(p);
}

export function createH1(text, className = "default", id = "default") {
    const h1 = document.createElement("h1");
    h1.innerText = text;
    h1.classList.add(className);
    h1.id = id;
    section.append(h1);
}

export function createImg(src, id = "default") {
    const img = document.createElement("img")
    img.src = src
    img.id = id
    section.append(img)
}