

new Chart(document.getElementById("myChart"), {
  type: 'bar',
  data: {
    labels: ["Cool Tooth Fairy Attack", "Flight of the Grey Cockroaches", "Cool Kid Bob", "Saving Bob", "Working Oslo"],
    datasets: [
      {
        label: "Concerts played with Bobatron:",
        backgroundColor: ["#3e95cd", "#8E5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [19,18,24,19,20],
        
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      },
    },
    legend: { display: false },
    title: {
      display: true,
      text: 'Support bands occurrence'
    }
  }
});
