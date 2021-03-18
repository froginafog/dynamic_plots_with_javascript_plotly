//plot data
//author: froginafog (Liang D.S.)
function get_input_x_data_1()
{
    var x_data_1 = document.getElementById("input_x_data_1").value;  //x_data_1 is a string here
    x_data_1 = x_data_1.split(",");   //x_data_1 becomes an object (array)
    var x_data_1_length = x_data_1.length;
    
    for(var i = 0; i < x_data_1_length; i++)
    {
        x_data_1[i] = Number(x_data_1[i])
    }

    return x_data_1;
}

function get_input_y_data_1()
{
    var y_data_1 = document.getElementById("input_y_data_1").value;  //y_data_1 is a string here
    y_data_1 = y_data_1.split(",");   //y_data_1 becomes an object (array)
    var y_data_1_length = y_data_1.length;
    
    for(var i = 0; i < y_data_1_length; i++)
    {
        y_data_1[i] = Number(y_data_1[i])
    }

    return y_data_1;
}

function get_input_x_data_2()
{
    var x_data_2 = document.getElementById("input_x_data_2").value;  //x_data_2 is a string here
    x_data_2 = x_data_2.split(",");   //x_data_2 becomes an object (array)
    var x_data_2_length = x_data_2.length;
    
    for(var i = 0; i < x_data_2_length; i++)
    {
        x_data_2[i] = Number(x_data_2[i])
    }

    return x_data_2;
}

function get_input_y_data_2()
{
    var y_data_2 = document.getElementById("input_y_data_2").value;  //y_data_2 is a string here
    y_data_2 = y_data_2.split(",");   //y_data_2 becomes an object (array)
    var y_data_2_length = y_data_2.length;
    
    for(var i = 0; i < y_data_2_length; i++)
    {
        y_data_2[i] = Number(y_data_2[i])
    }

    return y_data_2;
}

function get_plot_delay()
{
    var delay = document.getElementById("input_delay").value;
    return delay;
}

function plot_data_lines()
{
    var point = 0;
    var x_data_1 = get_input_x_data_1();
    var y_data_1 = get_input_y_data_1();
    var x_data_2 = get_input_x_data_2();
    var y_data_2 = get_input_y_data_2();
    var delay = get_plot_delay();  //delay time in milliseconds
    
    var layout = {
                    title: "Dynamic Plot",
                    xaxis: {
                               title: {
                                         text: "x axis"
                                      }
                           },
                    yaxis: {
                               title: {
                                         text: "y axis"
                                      }
                           }
                 };
    
    Plotly.plot("plotly1", 
                [{
                        x: [x_data_1[point]],
                        y: [y_data_1[point]],
                        type: "scatter",
                        mode: "lines",
                        name: "data_1"
                 }, 
                 {
                        x: [x_data_2[point]],
                        y: [y_data_2[point]],
                        type: "scatter",
                        mode: "lines",
                        name: "data_2"
                     
                 }],
                 layout
                );
    
    var num_points = x_data_1.length + 10; //horizontal extension count (when to stop extending)

    var interval = setInterval(function() 
                               {
                                    Plotly.extendTraces("plotly1", 
                                                        {
                                                            x: [[x_data_1[point]]],
                                                            y: [[y_data_1[point]]]
                                                        }, 
                                                        [0]
                                                        )
        
                                    Plotly.extendTraces("plotly1", 
                                                        {
                                                            x: [[x_data_2[point]]],
                                                            y: [[y_data_2[point]]]
                                                        }, 
                                                        [1]
                                                        )
                                    point++;
                                    if(point >= num_points) 
                                    {   
                                        clearInterval(interval);
                                    }
                                }, 
                                delay
                              );
}

function plot_data_markers()
{
    var point = 0;
    var x_data_1 = get_input_x_data_1();
    var y_data_1 = get_input_y_data_1();
    var x_data_2 = get_input_x_data_2();
    var y_data_2 = get_input_y_data_2();
    var delay = get_plot_delay();  //delay time in milliseconds
    
    var layout = {
                    title: "Dynamic Plot",
                    xaxis: {
                               title: {
                                         text: "x axis"
                                      }
                           },
                    yaxis: {
                               title: {
                                         text: "y axis"
                                      }
                           }
                 };
    
    Plotly.plot("plotly1", 
                [{
                        x: [x_data_1[point]],
                        y: [y_data_1[point]],
                        type: "scatter",
                        mode: "markers",
                        name: "data_1"
                 }, 
                 {
                        x: [x_data_2[point]],
                        y: [y_data_2[point]],
                        type: "scatter",
                        mode: "markers",
                        name: "data_2"
                     
                 }],
                 layout
                );
    
    var num_points = x_data_1.length + 10; //horizontal extension count (when to stop extending)

    var interval = setInterval(function() 
                               {
                                    Plotly.extendTraces("plotly1", 
                                                        {
                                                            x: [[x_data_1[point]]],
                                                            y: [[y_data_1[point]]]
                                                        }, 
                                                        [0]
                                                        )
        
                                    Plotly.extendTraces("plotly1", 
                                                        {
                                                            x: [[x_data_2[point]]],
                                                            y: [[y_data_2[point]]]
                                                        }, 
                                                        [1]
                                                        )
                                    point++;
                                    if(point >= num_points) 
                                    {   
                                        clearInterval(interval);
                                    }
                                }, 
                                delay
                              );
}

function plot_data_lines_and_markers()
{
    var point = 0;
    var x_data_1 = get_input_x_data_1();
    var y_data_1 = get_input_y_data_1();
    var x_data_2 = get_input_x_data_2();
    var y_data_2 = get_input_y_data_2();
    var delay = get_plot_delay();  //delay time in milliseconds
    
    var layout = {
                    title: "Dynamic Plot",
                    xaxis: {
                               title: {
                                         text: "x axis"
                                      }
                           },
                    yaxis: {
                               title: {
                                         text: "y axis"
                                      }
                           }
                 };
    
    Plotly.plot("plotly1", 
                [{
                        x: [x_data_1[point]],
                        y: [y_data_1[point]],
                        type: "scatter",
                        mode: "lines+markers",
                        name: "data_1"
                 }, 
                 {
                        x: [x_data_2[point]],
                        y: [y_data_2[point]],
                        type: "scatter",
                        mode: "lines+markers",
                        name: "data_2"
                     
                 }],
                 layout
                );
    
    var num_points = x_data_1.length + 10; //horizontal extension count (when to stop extending)

    var interval = setInterval(function() 
                               {
                                    Plotly.extendTraces("plotly1", 
                                                        {
                                                            x: [[x_data_1[point]]],
                                                            y: [[y_data_1[point]]]
                                                        }, 
                                                        [0]
                                                        )
        
                                    Plotly.extendTraces("plotly1", 
                                                        {
                                                            x: [[x_data_2[point]]],
                                                            y: [[y_data_2[point]]]
                                                        }, 
                                                        [1]
                                                        )
                                    point++;
                                    if(point >= num_points) 
                                    {   
                                        clearInterval(interval);
                                    }
                                }, 
                                delay
                              );
}

//get a random integer in the range min to max
//min is inclusive
//max in inclusive
function get_random_integer(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function change_body_background_color()
{	
	 var a = get_random_integer(0, 255);
	 var b = get_random_integer(0, 255);
	 var c = get_random_integer(0, 255);
 	 var color = "rgb(" + a + "," + b + "," + c + ")";  //"color" is now a string
	 document.body.style.backgroundColor = color;
 
  	 var function_name = document.getElementById("change_body_background_color_button").attributes.getNamedItem("onclick").value;
}

