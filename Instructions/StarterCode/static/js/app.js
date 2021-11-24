
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

        var trace1 = {
            x: topfreq,
            y: revlabels,
            text: toptips,
            name: "",
            type: "bar",
            orientation: "h"
        };

        var barData = [trace1];


        var layout = {
            title: "Top 10 OTUs",
            margin: {
                l: 75,
                r: 75,
                t: 75,
                b: 50
            }
        };

        Plotly.newPlot("bar", barData, layout);


        trace2 = {
            x: OTUs,
            y: subfreq,
            text: otulabels,
            mode: 'markers',
            marker: {
                color: OTUs,
                opacity: [1, 0.8, 0.6, 0.4],
                size: subfreq
            }
        }


        var bubblechart = [trace2];


        var layout = {
            title: 'OTU Frequency',
            showlegend: false,
            height: 600,
            width: 930
        }


        Plotly.newPlot("bubble", bubblechart, layout)

    }

});

