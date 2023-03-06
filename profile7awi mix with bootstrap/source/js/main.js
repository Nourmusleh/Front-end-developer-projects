console.log('loading');
function theFunction() {
    console.log('hi');

    const Number = [0, 1, 2];

    // first loop of Number array: item point 0, item value 0
    for (let item = 0; item <= Number.length; item++) {
        var pee = document.getElementsByClassName("paragraphin-jobapply")[item];
        console.log(pee); // return first loop aseel

        if (pee.style.display === "none") {
            pee.style.display = "block";
        }
        else {
            pee.style.display = "none";
        }
    }


    // var pee02 = document.getElementsByClassName("paragraphin-jobapply")[1];
    // console.log(pee02);

    // if (pee02.style.display === "none") {
    //     pee02.style.display = "block";
    // } else {
    //     pee02.style.display = "none";
    // }

    // var pee03 = document.getElementsByClassName("paragraphin-jobapply")[2];
    // console.log(pee03);

    // if (pee03.style.display === "none") {
    //     pee03.style.display = "block";
    // } else {
    //     pee03.style.display = "none";
    // }
    // for (let i of Number) {
    //     var pee = document.getElementsByClassName("paragraphin-jobapply")[i];
    //     console.log(pee);

    //     if (pee.style.display === "none") {
    //         pee.style.display = "block";
    //     } else {
    //         pee.style.display = "none";
    //     }
    // }
}
