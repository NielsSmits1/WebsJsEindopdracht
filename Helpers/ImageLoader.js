export function loadImage(imgpath){
    let image = new Image();
    image.addEventListener('error', () =>{
        imgpath = "none";
    })
    image.src = imgpath;

    if (imgpath == "none") {
        return imgpath;
    } else {
        return "url('" + imgpath + "')";
    }
}