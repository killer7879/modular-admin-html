import theme from '_theme';

import 'morris.js';

// console.log(Morris);


// History component
const History = {};

History.init = () => {

  if (!$('#DashboardHistoryVisitsChart').length) {
    return false;
  }

  // drawing visits chart
  drawVisitsChart();

  // var el = null;
  // var item = 'visits';
  // $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  //   el = e.target;
  //   item = $(el).attr('href').replace('#', '');
  //   switchHistoryCharts(item);
  // });


  function drawVisitsChart(){

    // var ctx = document.getElementById("DashboardHistoryVisitsChart").getContext('2d');


    const dataVisits = [
      { x: '2015-09-01', y: 70},
      { x: '2015-09-02', y: 75 },
      { x: '2015-09-03', y: 50},
      { x: '2015-09-04', y: 75 },
      { x: '2015-09-05', y: 50 },
      { x: '2015-09-06', y: 75 },
      { x: '2015-09-07', y: 86 }
    ];


    Morris.Line({
      element: 'DashboardHistoryVisitsChart',
      data: dataVisits,
      xkey: 'x',
      ykeys: ['y'],
      ymin: 'auto 40',
      labels: ['Visits'],
      xLabels: "day",
      hideHover: 'auto',
      yLabelFormat: function (y) {
        // Only integers
        if (y === parseInt(y, 10)) {
            return y;
        }
        else {
          return '';
        }
      },
      resize: true,
      lineColors: [
        theme.get().colorPrimary.string(),
      ],
      pointFillColors: [
        theme.get().colorPrimary.string(),
      ]
    });
  }

  function drawDownloadsChart(){

      var dataDownloads = [
          {
              year: '2006',
              downloads: 1300
          },
          {
              year: '2007',
              downloads: 1526
          },
          {
              year: '2008',
              downloads: 2000
          },
          {
              year: '2009',
              downloads: 1800
          },
          {
              year: '2010',
              downloads: 1650
          },
          {
              year: '2011',
              downloads: 620
          },
          {
              year: '2012',
              downloads: 1000
          },
          {
              year: '2013',
              downloads: 1896
          },
          {
              year: '2014',
              downloads: 850
          },
          {
              year: '2015',
              downloads: 1500
          }
      ];


      Morris.Bar({
          element: 'dashboard-downloads-chart',
          data: dataDownloads,
          xkey: 'year',
          ykeys: ['downloads'],
          labels: ['Downloads'],
          hideHover: 'auto',
          resize: true,
          barColors: [
              config.chart.colorPrimary.toString(),
              tinycolor(config.chart.colorPrimary.toString()).darken(10).toString()
          ],
      });
  }

  function switchHistoryCharts(item){
    var chartSelector = "#dashboard-" + item + "-chart";

    if ($(chartSelector).has('svg').length) {
        $(chartSelector).empty();
    }

    switch(item){
      case 'visits':
        drawVisitsChart();
        break;
       case 'downloads':
        drawDownloadsChart();
        break;
    }
  }

};


export default History;
