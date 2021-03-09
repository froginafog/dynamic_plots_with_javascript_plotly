//author: froginafog
function main()
{
    const pi = Math.PI;
    var x_data_1 = [];
    var y_data_1 = [];
    var x_data_2 = [];
    var y_data_2 = [];
    var theta;
    var dtheta = 0.11;
    var theta_min = 0;
    var theta_max = 36*pi; 
    var num_points = Math.floor((theta_max - theta_min)/dtheta);
    var r = 0;
    var dr = 0.11;
    var cycle = 1;
    var point;
    
    theta = theta_min;
    for(point = 0; point < num_points; point++)
    {   
        if(2 * cycle * pi - dtheta <= theta && theta <= 2 * cycle * pi)
        {
        	var r_limit = 2 * r;
        	while(r <= r_limit)
        	{
		    	x_data_1.push(r);
		    	y_data_1.push((3 + cycle * cycle) * Math.sin(r));
		    	x_data_2.push(-r);
		    	y_data_2.push(-(3 + cycle * cycle) * Math.sin(r));
		    	r = r + dr;
			}
			cycle++;
        }
        else
        {
		x_data_1.push(r * Math.cos(theta));  
        	y_data_1.push(r * Math.sin(theta));
        	x_data_2.push(-r * Math.cos(theta));  
        	y_data_2.push(-r * Math.sin(theta)); 
        	r = r + dr; 
		}
		theta = theta + dtheta;
    }
    
    point = 0;
    
    Plotly.plot("plotly1", [{
                                x: [x_data_1[point]],
                                y: [y_data_1[point]],
                                type: "line",
                                // mode: "markers"
                            },
                            {
                                x: [x_data_2[point]],
                                y: [y_data_2[point]],
                                type: "line",
                                //mode: "markers"
                            }
                           ]
               );


    var interval = setInterval(function() 
                               {
                                    Plotly.extendTraces("plotly1", 
                                                        {
                                                            x: [[x_data_1[point]]],
                                                            y: [[y_data_1[point]]]
                                                        }, 
                                                        [0]
                                                        );
        
                                    Plotly.extendTraces("plotly1", 
                                                        {
                                                            x: [[x_data_2[point]]],
                                                            y: [[y_data_2[point]]]
                                                        }, 
                                                        [1]
                                                        );
                                    
                                    point++;
                                    if(point == num_points) 
                                    {   
                                        clearInterval(interval);
                                    }
                                }, 
                                1  //1 millisocond pause time
                              );
}

main();
