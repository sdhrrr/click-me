index = 0

function clicked() {
    colors = ["royalblue", "crimson", "silver", "lavender", "coral", "lime", "purple"]
    
    document.getElementsByTagName("body")[0].style.backgroundColor=colors[index++];

    if (index > colors.length - 1) {
        index = 0;
    }

}