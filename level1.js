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
var first_point = 0;
function addDataPointsAndRender() {
    var xValue = Number(document.getElementById("xValue").value);
    var yValue = Number(document.getElementById("yValue").value);
    if( first_point == 0)
        {
            Swal.fire({
                text: "Nice, you have just plotted your first point. Plot more points and use Ohms law, to find out the resistance",
                
            });
            first_point ++;
        }
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
    title: "Hello Traveler!",
    text: "Welcome to our interactive Ohm's Law experiment! Dive in to explore the fundamental relationship between voltage, current, and resistance with hands-on simulations and detailed explanations.",
    
});
var hint_no = 1;
document.getElementById('hint').addEventListener('click', hint);
function hint() {
    
    if(level == 1 || first_point == 0)
        {
            Swal.fire({
                text: "explore the website",
                
            }); 
        }
    else if(level == 1)
        {
            Swal.fire({
                text: "explore the website",
                
            }); 
        }
    else if(hint_no == 1)
        {
            Swal.fire({
                text: "Using the equation given above, we can say that Resistance = Voltage/Current.",
                
            });
            document.getElementById('hint').innerHTML ="Hint 2";
            hint_no++;
        }
        else if(hint_no ==2){
            Swal.fire({
                text: "The slope of the above line you plotted is Voltage/Current which can be calculated by taking any two points on the line and using (y2 - y1)/(x2 - x1)",
                
            });

        }
    
  }
     

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
var level = 1;
rangeInput.addEventListener("input",function(){
  let top = parseFloat(rangeInput.value)/step * -40;
  rangeValue.style.marginTop = top+"px";
  if(level == 1)
    {
      Swal.fire({
        
        text: "Changing the battery voltage changes the value in the ammeter and voltmeter. Read the values of voltage and current and plot them in the Voltage Vs Current graph.",
        
    });
        level++;
    }
  var i = rangeInput.value;
  if(i == 0){
    current.style = " transform: rotate(32deg) ;";
    voltage.style = " transform: rotate(32deg) ;";
  }
  if(i == 10){
    current.style = " transform: rotate(68deg) ;";
    voltage.style = " transform: rotate(70.5deg) ;";
  }
  if(i == 20){
    current.style = " transform: rotate(106deg) ;";
    voltage.style = " transform: rotate(110deg) ;"; 
  }
  if(i == 30){
    current.style = " transform: rotate(144deg) ;";
    voltage.style = " transform: rotate(147deg) ;";
  }

});



