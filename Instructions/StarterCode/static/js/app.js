
d3.json("samples.json").then((bbdata) => {
    window.bbdata = bbdata;
    console.log(bbdata);
    var data = bbdata;

    var idDD = data.names;
    for (var x = 0; x < idDD.length; x++) {
        selectBox = d3.select("#selDataset");
        selectBox.append("option").text(idDD[x]);
    }