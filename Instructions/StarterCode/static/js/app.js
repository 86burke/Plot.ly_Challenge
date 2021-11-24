
d3.json("samples.json").then((bbdata) => {
    window.bbdata = bbdata;
    console.log(bbdata);
    var data = bbdata;

    var idDD = data.names;
    for (var x = 0; x < idDD.length; x++) {
        selectBox = d3.select("#selDataset");
        selectBox.append("option").text(idDD[x]);
    }

    bbplot(0)

    function bbplot(index) {


        var OTUs = data.samples[index].otu_ids;
        console.log(OTUs);
        var subfreq = data.samples[index].sample_values;
        var otulabels = data.samples[index].otu_labels;

        var washfreq = data.metadata[+index].wfreq;
        console.log(washfreq);

        var demoKeys = Object.keys(data.metadata[index]);
        var demoValues = Object.values(data.metadata[index])
        var demoData = d3.select('#sample-metadata');