//harmonic oscillator
//author: froginafog (Liang D.S.)
const h_bar = 1.05457 * Math.pow(10, -34); //J s
const m_e = 9.10938 * Math.pow(10, -31);   //kg
const m_p = 1.67262 * Math.pow(10, -27);   //kg
//const q_e = -1.60218 * Math.pow(10, -19);  //C
//const q_p = 1.60218 * Math.pow(10, -19);   //C
const pi = Math.PI;

function factorial(n)
{
	if(n === 0 || n === 1)
	{
		return 1;
	}
	else
	{
		return n * factorial(n-1);
	}
}

//n = nth order
//H = nth order Hermite polynomials
function H(n, y)
{
	if(n === 0)
	{
		return 1;
	}
	else if(n === 1)
	{
		return 2*y;
	}
	else if(n === 2)
	{
		return 4*Math.pow(y,2) - 2;
	}
	else if(n === 3)
	{
		return 8*Math.pow(y,3) - 12*y;
	}
	else if(n === 4)
	{
		return 16*Math.pow(y,4) - 48*Math.pow(y,2) + 12;
	}
	else if(n === 5)
	{
		return 32*Math.pow(y,5) - 160*Math.pow(y,3) + 120*y;
	}
	else
	{
		return 0;
	}
}

/*
//energy of harmonic oscillator
function E(n,w) 
{
	return (n + 1.0/2.0)*h_bar*w;  //n = quantum number, w = angular velocity
}
*/

//wavefunction
function psi(x, n, m, w)   //n = quantum number, w = angular velocity
{
	var k = Math.pow((m * w)/(pi * h_bar), 1.0/4.0);
	var A = 1.0/Math.sqrt(Math.pow(2, n) * factorial(n)); 
	var s = Math.sqrt((m * w)/h_bar) * x;
	var result = k * A *  H(n, s) * Math.exp(-Math.pow(s, 2)/2);
	
	console.log(result);
	return result;
}

function main()
{
    var x_data_1 = [];
    var y_data_1 = [];
    var x_data_2 = [];
    var y_data_2 = [];
    var x_data_3 = [];
    var y_data_3 = [];
    var x_data_4 = [];
    var y_data_4 = [];
    var x_data_5 = [];
    var y_data_5 = [];
	var x_min = -2.0;
	var x_max = 2.0;
	var dx = 0.01;
    var num_points = Math.floor((x_max - x_min)/dx);
    num_points++;
    var x;
    var w_e = Math.pow(10, -3);  //angular velocity of electron
    var w_p = Math.pow(10, -10);  //angular velocity of proton

    for(x = x_min; x < x_max; x = x + dx)
    {
        x_data_1.push(x);  
        y_data_1.push(psi(x, 1, m_e, w_e)); 
        
        x_data_2.push(x);  
        y_data_2.push(psi(x, 2, m_e, w_e)); 
        
        x_data_3.push(x);  
        y_data_3.push(psi(x, 3, m_e, w_e)); 
        
        x_data_4.push(x);  
        y_data_4.push(psi(x, 4, m_e, w_e)); 
        
        x_data_5.push(x);  
        y_data_5.push(psi(x, 5, m_e, w_e)); 
    }
    
    var layout = {
    				title: {
    							text: "Harmonic Oscillators With Quantum Numbers n = 1, 2, 3, 4, 5",
    							front: {
    										family: 'Courier, monospace',
    										size: 20,
    										color: "green"
    							       }
    					   },
    				xaxis: {
    						    title: {
    						    			 text: 'x-axis',
									    	 front: {
														family: 'Courier, monospace',
														size: 10,
														color: "green"
													}
								       }
    					   },
    				yaxis: {
    						    title: {
    						    			 text: 'y-axis',
									    	 front: {
														family: 'Courier, monospace',
														size: 10,
														color: "green"
													}
								       }
    					   }
    			 };
    
    var point = 0;
    
    Plotly.plot("plotly1", [{
                                x: [x_data_1[point]],
                                y: [y_data_1[point]],
                                type: "line",
                               // mode: "markers"
                                name: "n = 1"
                            },
                            {
                                x: [x_data_2[point]],
                                y: [y_data_2[point]],
                                type: "line",
                                //mode: "markers"
                                name: "n = 2"
                            },
                            {
		                        x: [x_data_3[point]],
		                        y: [y_data_3[point]],
		                        type: "line",
                                //mode: "markers"
                                name: "n = 3"
                            },
                            {
		                        x: [x_data_4[point]],
		                        y: [y_data_4[point]],
		                        type: "line",
                                //mode: "markers"
                                name: "n = 4"
                            },
                            {
		                        x: [x_data_5[point]],
		                        y: [y_data_5[point]],
		                        type: "line",
                                //mode: "markers"
                                name: "n = 5"
                            }
                           ], 
                           layout
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
                                    Plotly.extendTraces("plotly1", 
                                                        {
                                                            x: [[x_data_3[point]]],
                                                            y: [[y_data_3[point]]]
                                                        }, 
                                                        [2]
                                                        );
                                    Plotly.extendTraces("plotly1", 
                                                        {
                                                            x: [[x_data_4[point]]],
                                                            y: [[y_data_4[point]]]
                                                        }, 
                                                        [3]
                                                        );
                                    Plotly.extendTraces("plotly1",                     
                                                        {
                                                            x: [[x_data_5[point]]],
                                                            y: [[y_data_5[point]]]
                                                        }, 
                                                        [4]
                                                        );
                                    point++;
                                    if(point == num_points) 
                                    {   
                                        clearInterval(interval);
                                    }
                                }, 
                                0.01  //0.01 millisocond pause time
                              );
}

main();
