function main()
{
	const pi = Math.PI;
    var x_data_1 = [];
    var y_data_1 = [];
    var x_data_2 = [];
    var y_data_2 = [];
    var theta;
    var dtheta = 0.1;
    var theta_min = 0;
    var theta_max = 26*pi;
    var num_points = Math.floor((theta_max - theta_min)/dtheta);
    num_points++;
    var r = 0;
    var dr = 0.1;
    var cycle = 1;
    
    for(theta = theta_min; theta <= theta_max; theta = theta + dtheta)
    {   
        if(2 * cycle * pi - cycle * (0.85 * dtheta) <= theta && theta <= 2 * cycle * pi)
        {
        	var r_limit = 2 * r;
        	while(r <= r_limit)
        	{
		    	x_data_1.push(r);
		    	y_data_1.push(7 * Math.sin(r));
		    	r = r + dr;
			}
			cycle++;
        }
        else
        {
			x_data_1.push(r * Math.cos(theta));  
        	y_data_1.push(r * Math.sin(theta));
        	r = r + dr; 
		}
    }
    
    cycle = 1;
    r = 0;
    for(theta = theta_min; theta <= theta_max; theta = theta + dtheta)
    {
        if(2 * cycle * pi - cycle * (0.85 * dtheta) <= theta && theta <= 2 * cycle * pi)
        {
        	var r_limit = 2 * r;
        	while(r <= r_limit)
        	{
		    	x_data_2.push(-r);
		    	y_data_2.push(-7 * Math.sin(r));
		    	r = r + dr;
			}
			cycle++;
        }
        else
        {
            x_data_2.push(-r * Math.cos(theta));  
        	y_data_2.push(-r * Math.sin(theta)); 
        	r = r + dr;
       	}
    }
    
    var point = 0;
    
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
    
    var num_points; //horizontal extension count (when to stop extending)

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
                                    if(point == num_points) 
                                    {   
                                        clearInterval(interval);
                                    }
                                }, 
                                1  //1 millisoconds pause time
                              );
}

main();
