
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

        demoData.html("");

        for (var i = 0; i < demoKeys.length; i++) {

            demoData.append("p").text(`${demoKeys[i]}: ${demoValues[i]}`);
        };

        var topotu = OTUs.slice(0, 10).reverse();
        var topfreq = subfreq.slice(0, 10).reverse();
        var toptips = data.samples[0].otu_labels.slice(0, 10).reverse();
        var toplabels = topotu.map((otu => "OTU " + otu));
        var revlabels = toplabels.reverse();

        