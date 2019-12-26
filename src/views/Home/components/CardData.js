import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { getStyle } from "@coreui/coreui/dist/js/coreui-utilities";

const brandInfo = getStyle("--info");

// Dictionary Chart
export const dictCardChartData = {
  labels: [1, 2, 3, 4],
  datasets: [
    {
      label: "Dictionary",
      backgroundColor: brandInfo,
      borderColor: "transparent",
      data: [0, 1, 1, 2]
    }
  ]
};

export const onlineResourceCardChartData = {
  labels: [1, 2, 3, 4],
  datasets: [
    {
      label: "Online Resource",
      backgroundColor: "rgba(255,255,255,.2)",
      borderColor: "transparent",
      data: [0, 1, 0, 3]
    }
  ]
};

export const downloadResourceCardChartData = {
  labels: [1, 2, 3, 4],
  datasets: [
    {
      label: "Online Resource",
      backgroundColor: "rgba(255,255,255,.3)",
      borderColor: "transparent",
      data: [3, 5, 10, 3]
    }
  ]
};

export const cardChartDataOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        display: false
      }
    ],
    yAxes: [
      {
        display: false
      }
    ]
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4
    }
  }
};
