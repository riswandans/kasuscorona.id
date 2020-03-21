window.onload = function() {
    var kasusharian = new CanvasJS.Chart("kasus_harian", {
        title: {
            text: "",
        },
        axisX: {
            valueFormatString: "DD MMM"
        },
        axisY2: {
            gridThickness: 1,
            includeZero: false,
            title: "",
            prefix: "",
            suffix: "",
            crosshair: {
                enabled: true,
                snapToDataPoint: true,
                labelFormatter: function(e) {
                    return "" + CanvasJS.formatNumber(e.value, "##0");
                }
            }
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            verticalAlign: "top",
            horizontalAlign: "center",
            dockInsidePlotArea: true,
            itemclick: toogleDataSeries
        },
        data: [{
                type: "line",
                axisYType: "secondary",
                name: "Kasus (kumulatif)",
                showInLegend: true,
                markerSize: 8,
                yValueFormatString: "#,### orang",
                dataPoints: [{
                        x: new Date(2020, 02, 2),
                        y: 2
                    },
                    {
                        x: new Date(2020, 02, 6),
                        y: 4
                    },
                    {
                        x: new Date(2020, 02, 8),
                        y: 6
                    },
                    {
                        x: new Date(2020, 02, 9),
                        y: 19
                    },
                    {
                        x: new Date(2020, 02, 10),
                        y: 27
                    },
                    {
                        x: new Date(2020, 02, 11),
                        y: 34
                    },
                    {
                        x: new Date(2020, 02, 13),
                        y: 69
                    },
                    {
                        x: new Date(2020, 02, 14),
                        y: 96
                    },
                    {
                        x: new Date(2020, 02, 15),
                        y: 117
                    },
                    {
                        x: new Date(2020, 02, 16),
                        y: 134
                    },
                    {
                        x: new Date(2020, 02, 17),
                        y: 172
                    },
                    {
                        x: new Date(2020, 02, 18),
                        y: 227
                    },
                    {
                        x: new Date(2020, 02, 19),
                        y: 309
                    },
                    {
                        x: new Date(2020, 02, 20),
                        y: 369
                    },
                    {
                        x: new Date(2020, 02, 21),
                        y: 450
                    }
                ]
            },
            {
                type: "column",
                axisYType: "secondary",
                name: "Kasus (baru)",
                showInLegend: true,
                color: "orange",
                markerSize: 8,
                yValueFormatString: "#,### orang",
                dataPoints: [{
                        x: new Date(2020, 02, 2),
                        y: 2
                    },
                    {
                        x: new Date(2020, 02, 6),
                        y: 2
                    },
                    {
                        x: new Date(2020, 02, 8),
                        y: 2
                    },
                    {
                        x: new Date(2020, 02, 9),
                        y: 13
                    },
                    {
                        x: new Date(2020, 02, 10),
                        y: 8
                    },
                    {
                        x: new Date(2020, 02, 11),
                        y: 7
                    },
                    {
                        x: new Date(2020, 02, 13),
                        y: 35
                    },
                    {
                        x: new Date(2020, 02, 14),
                        y: 27
                    },
                    {
                        x: new Date(2020, 02, 15),
                        y: 21
                    },
                    {
                        x: new Date(2020, 02, 16),
                        y: 17
                    },
                    {
                        x: new Date(2020, 02, 17),
                        y: 38
                    },
                    {
                        x: new Date(2020, 02, 18),
                        y: 55
                    },
                    {
                        x: new Date(2020, 02, 19),
                        y: 82
                    },
                    {
                        x: new Date(2020, 02, 20),
                        y: 60
                    },
                    {
                        x: new Date(2020, 02, 21),
                        y: 81
                    }
                ]
            },
            {
                type: "column",
                axisYType: "secondary",
                name: "Meninggal",
                showInLegend: true,
                markerSize: 10,
                color: "#E33C07",
                yValueFormatString: "#,### orang",
                dataPoints: [{
                        x: new Date(2020, 02, 2),
                        y: 0
                    },
                    {
                        x: new Date(2020, 02, 11),
                        y: 1
                    },
                    {
                        x: new Date(2020, 02, 13),
                        y: 3
                    },
                    {
                        x: new Date(2020, 02, 14),
                        y: 1
                    },
                    {
                        x: new Date(2020, 02, 18),
                        y: 14
                    },
                    {
                        x: new Date(2020, 02, 19),
                        y: 6
                    },
                    {
                        x: new Date(2020, 02, 20),
                        y: 6
                    },
                    {
                        x: new Date(2020, 02, 21),
                        y: 6
                    }
                ]
            },
            {
                type: "column",
                axisYType: "secondary",
                name: "Sembuh",
                showInLegend: true,
                markerSize: 10,
                color: "green",
                yValueFormatString: "#,### orang",
                dataPoints: [{
                        x: new Date(2020, 02, 2),
                        y: 0
                    },
                    {
                        x: new Date(2020, 02, 11),
                        y: 2
                    },
                    {
                        x: new Date(2020, 02, 12),
                        y: 1
                    },
                    {
                        x: new Date(2020, 02, 12),
                        y: 2
                    },
                    {
                        x: new Date(2020, 02, 14),
                        y: 3
                    },
                    {
                        x: new Date(2020, 02, 17),
                        y: 1
                    },
                    {
                        x: new Date(2020, 02, 18),
                        y: 2
                    },
                    {
                        x: new Date(2020, 02, 19),
                        y: 6
                    },
                    {
                        x: new Date(2020, 02, 20),
                        y: 6
                    },
                    {
                        x: new Date(2020, 02, 21),
                        y: 3
                    }
                ]
            },
        ]
    });
    var wilayah = [];
    var sembuh = [];
    var meninggal = [];
    var kasusperwilayah = new CanvasJS.Chart("rata_kasus", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: ""
        },
        axisX: {
            interval: 1
        },

        data: [{
                type: "bar",
                showInLegend: true,
                name: "Kasus",
                color: "orange",
                dataPoints: wilayah
            },
            {
                type: "bar",
                showInLegend: true,
                name: "Meninggal",
                color: "#E33C07",
                dataPoints: meninggal
            },
            {
                type: "bar",
                showInLegend: true,
                name: "Sembuh",
                color: "green",
                dataPoints: sembuh
            }
        ]
    });
    kasusharian.render();

    function addData(data) {
        data.reverse();
        for (var i = 0; i < data.length; i++) {
            wilayah.push({
                label: data[i].Wilayah,
                y: data[i].Jumlah
            });
        }
        for (var i = 0; i < data.length; i++) {
            sembuh.push({
                label: data[i].Wilayah,
                y: data[i].Sembuh
            });
        }
        for (var i = 0; i < data.length; i++) {
            meninggal.push({
                label: data[i].Wilayah,
                y: data[i].Meninggal
            });
        }
        kasusperwilayah.render();
    }

    function toogleDataSeries(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        kasusharian.render();
    }
    $.getJSON("wilayah.json", addData);
}
