function prepareLinks(postids) {
    let linkarray = [];
    for(let i=0; i < postids.length; i++) {
        linkarray.push(
            "https://quickhq.tech/p/" + postids[i]
            )
    }
    return linkarray
}

console.log(prepareLinks(["1", "2", "3"]))

// module.exports = {
    
// }