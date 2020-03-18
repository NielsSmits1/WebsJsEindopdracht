export function loadImage(imgpath){
    let image = new Image();
    try {
        image.src = imgpath;
    } catch (e) {
        image.src = null;
    }

    if (image.width == 0) {
        return 'none';
    } else {
        return "url('" + imgpath + "')";
    }
}