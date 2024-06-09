var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: 'Voltage Vs Current',
            data: [],
            fill: false,
            tension: 0.1
        }]
    },
    options: {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        let label = "";
                        label += `(Current: ${tooltipItem.parsed.x}, Voltage: ${tooltipItem.parsed.y})`;
                        return label;
                    }
                }
            }
        },
        intersect: false,
        mode: 'index',
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Current'
                },
                type: 'linear',
                position: 'bottom',
                min: 0, // Ensure the x-axis starts at 0
                max: 6
            },
            y: {
                title: {
                    display: true,
                    text: 'Voltage'
                },
                beginAtZero: true, // Ensure the y-axis includes 0
                min: 0, // Optionally, explicitly set the y-axis to start at 0
                max: 51
            }
        }
    }
});

function addDataPointsAndRender() {
    var xValue = Number(document.getElementById("xValue").value);
    var yValue = Number(document.getElementById("yValue").value);
   
    chart.data.datasets[0].data.push({x: xValue, y: yValue});
    chart.update();
}

var renderButton = document.getElementById("renderButton");
renderButton.addEventListener("click", addDataPointsAndRender);
document.getElementById('removePointButton').addEventListener('click', () => {
    chart.data.labels.splice(-1, 1); // remove the label first

    chart.data.datasets.forEach(dataset => {
      dataset.data.pop();
    });

    chart.update();
});

Swal.fire({
    title: "This the next level",
    text: "Use the same method as the previous page to find the equvivalent resistance of the 2 resistors.",
    
});

     

  let rangeInput = document.querySelector(".range-input input");
let rangeValue = document.querySelector(".range-input .value div");
var current = document.getElementById("cur_value");
var voltage = document.getElementById("vol_value");


let start = parseFloat(rangeInput.min);
let end = parseFloat(rangeInput.max);
let step = parseFloat(rangeInput.step);

for(let i=start;i<=end;i+=step){
  rangeValue.innerHTML += '<div>'+i+' Volts'+'</div>';
}

rangeInput.addEventListener("input",function(){
  let top = parseFloat(rangeInput.value)/step * -40;
  rangeValue.style.marginTop = top+"px";
  
  var i = rangeInput.value;
  if(i == 0){
    current.style = " transform: rotate(32deg) ;";
    voltage.style = " transform: rotate(32deg) ;";
  }
  if(i == 10){
    current.style = " transform: rotate(49deg) ;";
    voltage.style = " transform: rotate(70.5deg) ;";
  }
  if(i == 20){
    current.style = " transform: rotate(68deg) ;";
    voltage.style = " transform: rotate(110deg) ;"; 
  }
  if(i == 30){
    current.style = " transform: rotate(87.5deg) ;";
    voltage.style = " transform: rotate(147deg) ;";
  }

});



