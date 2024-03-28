/*-----Document Name: MAGLEV .js
       Author Name  : Piyali Chattopadhyay
	                  RE VLABS, IIT KGP--------------*/
					  
		 		window.onload= function(){
					
					alert('Rotate the screen if it is not visible properly');
					
				}	  

	function show_Dbox2(){
		document.getElementById('simu1').src = "./images/dbox2.png";
		document.getElementById('btn1').style.display = "none";
		document.getElementById('btn2').style.display  = "block";
	}
	function show_Dbox3(){
		document.getElementById('simu1').src = "./images/dbox3_sin_input.png";
		document.getElementById('btn2').style.display = "none";
		document.getElementById('sin_btn').style.display  = "block";
		document.getElementById('sqr_btn').style.display  = "block";
		document.getElementById('step_btn').style.display  = "block";
		document.getElementById('PID_btn').style.display  = "block";
		document.getElementById('IB').style.display  = "block";
		document.getElementById('CT').style.display  = "block";
		document.getElementById('run_btn').style.display  = "none";
		document.getElementById('m_scope').style.display  = "none";
		document.getElementById('v_scope').style.display  = "none";
	}
	function show_sinbox(){
		document.getElementById('simu1').src = "images/dbox3_sin_input.png";
		document.getElementById('changeplot').value = "1";
	}
	function show_sqrbox(){
		document.getElementById('simu1').src = "images/dbox3_square_input.png";
		document.getElementById('changeplot').value = "2";
	}	
	function show_stepbox(){
		document.getElementById('simu1').src = "images/dbox3_step_input.png";
		document.getElementById('changeplot').value = "0";
	}	
	function show_PID_block(){
		document.getElementById('PID_block').style.display  = "block";
		
	}
    function hide_PID(){
	document.getElementById('PID_block').style.display  = "none";			
	}	
	function IR_ON(){
	document.getElementById('run_btn').src = "images/pause.png";		
		
	}
	
	function back_img(){
		
	
    document.getElementById('simu1').src= "images/dbox3_sin_input.png";	
    //document.getElementById('btn1').style.display = "block";
    //document.getElementById('btn2').style.display = "none";
		//document.getElementById('sin_btn').style.display  = "none";
		//document.getElementById('sqr_btn').style.display  = "none";
		//document.getElementById('step_btn').style.display  = "none";
		document.getElementById('PID_btn').style.display  = "none";
        //document.getElementById('IB').style.display  = "none";
		//document.getElementById('CT').style.display  = "none";
		document.getElementById('run_btn').style.display  = "none";
	    document.getElementById('m_scope').style.display  = "none";
		document.getElementById('v_scope').style.display  = "none";
		document.getElementById('chartContainer').style.display  = "none";
		document.getElementById("exportChart").style.display = "none";
		
		document.getElementById('sin_btn').style.display  = "block";
		//document.getElementById('sqr_btn').style.display  = "block";
		document.getElementById('step_btn').style.display  = "block";
		document.getElementById('PID_btn').style.display  = "block";
		document.getElementById('IB').style.display  = "block";
		document.getElementById('CT').style.display  = "block";
		document.getElementById('changeplot').value = 1 ;
	}
	
	function IB(){
		setTimeout(function(){
		alert('Successfull completion of build procedure for the model:Maglev_PID');	
		},2000)
		
	}
	function CT(){		
		setTimeout(function() {
			alert('Model Maglev_PID loaded');
         document.getElementById('run_btn').style.display  = "block";
         document.getElementById('m_scope').style.display  = "block";
		 document.getElementById('v_scope').style.display  = "block";		 
           }, 2000);
	}
	
	function m_scope(){
	//if(document.getElementById('simu1').src == "images/dbox3_step_input.png"){
     //document.getElementById('chartContainer').style.display = "block";
    var a = document.getElementById('changeplot').value;
    if(a==0){	
	 PID_STEP();
	}	
	else if(a==1){
     PID_SINE();
	}			
	}
	
	function v_scope(){
	
    var a = document.getElementById('changeplot').value;
    if(a==0){	
	 PID_STEP_VOLT();
	}	
	else if(a==1){
     PID_SINE_VOLT();
	}			
	}
	
/////////////////All functions related to Ball///////////////////////////
	
/////////////////Function for bouncing the ball////////////////////
function ball_Anim(){
	
	document.getElementById('Redball').className="bounce";
	
}


/////////////////////////Ball will be moved in the total page////////////////////////////////
/*function ballfall(){
var ball = $('#Redball');
var fallTime = setTimeout(function() {
  var topc = parseFloat(ball.css("top"));
  ball.animate({
    top: topc + 70 + "%"
  },500);
}, 10000);
clearTimeout(100);

setTimeout (function(){
document.getElementById('run_btn').src = "images/run.png";
},10010);
}


function ballUp(){
	var ball = $('#Redball');
	var topc = parseInt(ball.css("top"));

  ball.animate({
    top: topc - 90 + "px"
  },500);
	
	
	
}*/
function ballfall(){
setTimeout(function() {
  document.getElementById('ball_container').classList.add("ballfall");
    document.getElementById('red_div').classList.add("divup");
	
	document.getElementById('red_div').classList.remove("ballfall");
  document.getElementById('ball_container').classList.remove("divup");
}, 8000);
clearTimeout(100);	
}

function ballfall2(){
setTimeout(function() {
	document.getElementById('ball_container').classList.remove("ballfall");
    document.getElementById('red_div').classList.remove("divup");
	

  document.getElementById('red_div').classList.add("ballfall");
  document.getElementById('ball_container').classList.add("divup");
    
}, 8000);
clearTimeout(100);	
}


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
   
}

function drop(ev) {
	
	
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");  
  ev.target.appendChild(document.getElementById(data));
  
  if(data == "Redball" && ev.target.id == "ball_container"){
	ball_Anim();
	ballfall();	
  }
  else if(data == "Redball" && ev.target.id == "red_div"){
	ball_Anim();
	ballfall2();	
  }
  
  
}
/*var obj, x, y, prev_x, prev_y;

function drag(e) {
  // Yep, use the object I just clicked on.
  obj = e.target;
  // Set current X coordinate minus distance left from offsetParent node.
  prev_x = x - obj.offsetLeft;
  // Set current Y coordinate minus distance top from offsetParent node.
  prev_y = y - obj.offsetTop;
  // Change the object's color so it looks like it's usable/moveable.
  obj.style.background = 'none';
  
}

function move(e) {
  // Always track and record the mouse's current position.
  if (e.pageX) {
    x = e.pageX; // X coordinate based on page, not viewport.
    y = e.pageY; // Y coordinate based on page, not viewport.
  }
//  else if (e.clientX) {
//    x=clientX; // X coordinate based on viewport.
//    y=clientY; // Y coordinate based on viewport.
//  }

  // If the object specifically is selected, then move it to the X/Y coordinates that are always being tracked.
  if(obj) {
    obj.style.left = (x - prev_x) + '%';
    obj.style.top = (y - prev_y) + '%';
  }
  
}

function drop() {
  // Revert to the default css style.
  //obj.style.background = '';
  // Remove the attached event from the element so it doesn't keep following your mouse. :)
  var ball_left= document.getElementById('Redball').offsetLeft;
  var ball_top=  document.getElementById('Redball').offsetTop;
  
  if((ball_left >= 500 && ball_left<=540) && (ball_top >= 162 && ball_top<=168)){
	  
  obj = false;
  alert('Proper Positioning ');//current ball position='+ball_left +'and balltop'+ball_top);
  ball_Anim();
   ballfall();
  
}
else{
	document.getElementById('Redball').style.left = "530px";
	document.getElementById('Redball').style.top = "250px";
	
}




}
// Make a specific element movable

document.getElementById('Redball').onmousedown = drag;
document.onmousemove = move;
document.getElementById('Redball').onmouseup = drop;
*/



///////////////////////////PD+PID////////////////////////////////////////////////////////////////////////////////////////////////



		  
/*function MAGLEV_STEP(){
	var i = math.sqrt(-1);
	document.getElementById('exportChart').style.display="block";
	var y = new Array();	
	var dataPoints=[];
	
	for (var t=0;t<=50;t+=0.1){
	/////////////////////////////////////PD STEP RESPONSE UPTO 15 SEC//////////////////////	
	for( var t=0; t<=15;t+=0.1){
     
	 var totalfrstprt_pd = 1.41907;
	var num2_pd = math.complex(0.709535,0.347901);
	var expcomp1_pd = math.complex(-55.365,-46.2246);
	var expcomp1t_pd = math.multiply(expcomp1_pd,t);
	var exp1_pd = math.pow(math.e,expcomp1t_pd);
	var num3_pd = math.complex(0.612361,-0.790578);
	var expcomp2_pd = math.complex(0,92.4493);
	var expcomp2t_pd = math.multiply(expcomp2_pd,t);
	var exp2_pd = math.pow(math.e,expcomp2t_pd);
	var scndprt3_pd = math.add(num3_pd,exp2_pd);
	var totalscndprt_pd = math.multiply(num2_pd,exp1_pd,scndprt3_pd);
	
	y[t] = math.subtract(totalfrstprt_pd,totalscndprt_pd);//assuming step size 1v i.e 0.006m or approximately 0.01m.
	dataPoints.push({x:(t), y:(y[t]/143.14)});///y[t] was in v, in paper the sensor gain or v-m relation is = 143.14v/m i.e 144.14v = 1m OR 1v = 1/144.14 m,now in m
	
    } 
	 /////////////////////////////////////PID STEP RESPONSE AFTER 15 SEC TO 50 SEC//////////////////////
	 for(  t=15; t<=50;t+=0.1){
		 
	 var num1_pid = math.complex(-0.721536 , -0.356075 );
	 var num2_pid = math.complex(-54.7083  , -45.4455  );
	 var num3_pid = math.complex(0.608315,-0.793696);
	 var num4_pid = math.complex(0,90.891);	 
	
	var epow1_pid = math.multiply(num2_pid,t);
	var exp1_pid  = math.pow(math.e,epow1_pid);
	var frstcomp_pid = math.multiply(num1_pid,exp1_pid);

    var epow2_pid = math.multiply(num4_pid,t);
    var exp2_pid  = math.pow(math.e,epow2_pid);
	var scndcomp_pid = math.add(num3_pid,exp2_pid);
	
	var totalfrstprt_pid = math.multiply(frstcomp_pid , scndcomp_pid);
	
	var exp3_pid = math.pow(math.e,(-1.31345 * t));
	var totalscndprt_pid = math.multiply(0.443072,exp3_pid);
	
	y[t]= (totalfrstprt_pid+totalscndprt_pid+1);//assuming step size 1v.
	dataPoints.push({x:(t), y:(y[t]/143.14)});///y[t] was in v, in m the gain is 143.14v/m,now in m
		 
	 
	 //document.write (totalscndprt);
	 }
	}
	 var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Step Response of MAGLEV Plant"
	  
      },
	  
	  axisX:{
        interlacedColor: "#E0FDE4",
        title: "Time(Sec)"
      },
	  axisY: {
            title: "Amplitude(m)",
			
			maximum:0.08,
        },
      data: [
      {        
        type: "spline",
		color:"#49C258",
        dataPoints:dataPoints
	
	//document.getElementById('chk_complex_numbers').value = c;
}
      ]
    });

    chart.render();
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});
  	
}
//////////////////////Maglev PD control for step input//////////

/*function PD_Step_Plot(){
	
	var i = math.sqrt(-1);
	var y = new Array();	
	var dataPoints=[];
	
	for( var t=0; t<=50;t+=0.1){
	var totalfrstprt = 1.41907;
	var num2 = math.complex(0.709535,0.347901);
	var expcomp1 = math.complex(-55.365,-46.2246);
	var expcomp1t = math.multiply(expcomp1,t);
	var exp1 = math.pow(math.e,expcomp1t);
	var num3 = math.complex(0.612361,-0.790578);
	var expcomp2 = math.complex(0,92.4493);
	var expcomp2t = math.multiply(expcomp2,t);
	var exp2 = math.pow(math.e,expcomp2t);
	var scndprt3 = math.add(num3,exp2);
	var totalscndprt = math.multiply(num2,exp1,scndprt3);
	y[t] = 1*(math.subtract(totalfrstprt,totalscndprt));//assuming step size 1v.
	dataPoints.push({x:(t), y:(y[t]/143.14)});///y[t] was in v, in m the gain is 143.14v/m
		 
	 
	 //document.write (totalscndprt);
	 }
	 var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Step Response of MAGLEV Plant with "
	  
      },
	  
	  axisX:{
        interlacedColor: "#E0FDE4",
        title: "Time(Sec)"
      },
	  axisY: {
            title: "Amplitude(m)",
			
			//maximum:0.0018,
        },
      data: [
      {        
        type: "spline",
		color:"#49C258",
        dataPoints:dataPoints
	
	//document.getElementById('chk_complex_numbers').value = c;
}
      ]
    });

    chart.render();
}
*/	
	

	
	function PID_STEP(){///////////for amplitude in meter//////////////
		
	var i = math.sqrt(-1);
	var y = new Array();
    var yop = new Array();	
	var dataPoints=[];
	var dataOPPoints=[];
	
	
	
	for( var t=0; t<=50;t+=0.1){
	
	for( var t=0; t<=20;t+=0.1){////20 sec is sample time
	
	var num1_pid = math.complex(-0.721536 , -0.356075 );
	 var num2_pid = math.complex(-54.7083  , -45.4455  );
	 var num3_pid = math.complex(0.608315,-0.793696);
	 var num4_pid = math.complex(0,90.891);	 
	
	var epow1_pid = math.multiply(num2_pid,t);
	var exp1_pid  = math.pow(math.e,epow1_pid);
	var frstcomp_pid = math.multiply(num1_pid,exp1_pid);

    var epow2_pid = math.multiply(num4_pid,t);
    var exp2_pid  = math.pow(math.e,epow2_pid);
	var scndcomp_pid = math.add(num3_pid,exp2_pid);
	
	var totalfrstprt_pid = math.multiply(frstcomp_pid , scndcomp_pid);
	
	var exp3_pid = math.pow(math.e,(-1.31345 * t));
	var totalscndprt_pid = math.multiply(0.443072,exp3_pid);	
	
	
	y[t]= 1;//assuming step size 1v.Input plot
	yop[t]=math.add(totalfrstprt_pid,totalscndprt_pid,1);//assuming step size 1v.Output plot
	
	dataPoints.push({x:(t), y:(y[t]/143.14)});///y[t] was in v, in m the gain is 143.14v/m,now in m
	dataOPPoints.push({x:(t), y:(yop[t]/143.14)});///yop[t] was in v, in m the gain is 143.14v/m,now in m	 
	 
	 //document.write (totalscndprt);
	 }
	 for( var t=20; t<=50;t+=0.1){////20 sec is sample time
	
	y[t]= 0;//assuming final value of 0v.Input plot
	yop[t]=0;//assuming final value of 0v.Output plot
	dataPoints.push({x:(t), y:(y[t]/143.14)});///y[t] was in v, in m the gain is 143.14v/m,now in m
	dataOPPoints.push({x:(t), y:(yop[t]/143.14)});///yop[t] was in v, in m the gain is 143.14v/m,now in m	 
	 
	 //document.write (totalscndprt);
	 }
	}
    document.getElementById('chartContainer').style.display  = "block"; 	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Step Response of MAGLEV Plant with PID Controller "
	  
      },
	  
	  axisX:{
        interlacedColor: "#B2F9FA",
        title: "Time(Sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude(m)",
			
			maximum:0.03,
        },
		{/////input y axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		}
		],
	data: [
      {        
        type: "spline",
		color:"109DB6",
        dataPoints:dataOPPoints
	
       },
       {        
        type: "spline",
		color:"#F9CC1D",
        dataPoints:dataPoints
	
       },
      ]	
	});

	chart.render();	
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
		
	}
	
	
	function PID_STEP_VOLT(){///////////for amplitude in VOLT//////////////
		
	var i = math.sqrt(-1);
	var y = new Array();
    var yop = new Array();	
	var dataPoints=[];
	var dataOPPoints=[];
	
	
	
	for( var t=0; t<=50;t+=0.1){
	
	for( var t=0; t<=20;t+=0.1){////20 sec is sample time
	
	var num1_pid = math.complex(-0.721536 , -0.356075 );
	 var num2_pid = math.complex(-54.7083  , -45.4455  );
	 var num3_pid = math.complex(0.608315,-0.793696);
	 var num4_pid = math.complex(0,90.891);	 
	
	var epow1_pid = math.multiply(num2_pid,t);
	var exp1_pid  = math.pow(math.e,epow1_pid);
	var frstcomp_pid = math.multiply(num1_pid,exp1_pid);

    var epow2_pid = math.multiply(num4_pid,t);
    var exp2_pid  = math.pow(math.e,epow2_pid);
	var scndcomp_pid = math.add(num3_pid,exp2_pid);
	
	var totalfrstprt_pid = math.multiply(frstcomp_pid , scndcomp_pid);
	
	var exp3_pid = math.pow(math.e,(-1.31345 * t));
	var totalscndprt_pid = math.multiply(0.443072,exp3_pid);	
	
	
	y[t]= 1;//assuming step size 1v.Input plot
	yop[t]=math.add(totalfrstprt_pid,totalscndprt_pid,1);//assuming step size 1v.Output plot
	
	dataPoints.push({x:(t), y:(y[t]*1000)});///y[t] is in v
	dataOPPoints.push({x:(t), y:(yop[t]*1000)});///yop[t] is in v	 
	 
	 //document.write (totalscndprt);
	 }
	 for( var t=20; t<=50;t+=0.1){////20 sec is sample time
	
	y[t]= 0;//assuming final value of 0v.Input plot
	yop[t]=0;//assuming final value of 0v.Output plot
	dataPoints.push({x:(t), y:(y[t])});///y[t] is in v
	dataOPPoints.push({x:(t), y:(yop[t])});///yop[t] is in v	 
	 
	 //document.write (totalscndprt);
	 }
	} 
document.getElementById('chartContainer').style.display  = "block"; 	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Step Response of MAGLEV Plant with PID Controller "
	  
      },
	  
	  axisX:{
        interlacedColor: "#B2F9FA",
        title: "Time(Sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude(mv)",
			
			//maximum:2,
        },
		{/////input y axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		}
		],
	data: [
      {        
        type: "spline",
		color:"109DB6",
        dataPoints:dataOPPoints
	
       },
       {        
        type: "spline",
		color:"#F9CC1D",
        dataPoints:dataPoints
	
       },
      ]	
	});

	chart.render();	
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
		
	}	
	
	
	
	
	///////////////////////////PID SINUSOIDAL////////////
	function PID_SINE(){
		
	var i = math.sqrt(-1);
	var y = new Array();
    var yop = new Array();	
	var dataPoints=[];
	var dataOPPoints=[];
	
	
	
	for( var t=0; t<=50;t+=0.1){	
	
	var num1_pid = math.complex(0.219288 ,0.0204671 );
	 var num2_pid = math.complex(0  , -3.142 );
	 
	 var num3_pid = math.complex(0.185056,0.982728);
	 var num4_pid = math.complex(0,6.284);	

    var num5_pid = math.complex(0.00462287,0.0103211);
    var num6_pid = math.complex(-54.7083,-45.4455);
    var num7_pid = math.complex(0,90.891);
    var num8_pid = math.complex(-0.665809,-0.746122);

	var mul_pid = math.complex(0,1.0);
    //var num10_pid = 0.0501799*(math.pow(math.e,(-1.31345*t)));
    	
	
	var epow1_pid = math.multiply(num2_pid,t);
	var exp1_pid  = math.pow(math.e,epow1_pid);
	var frstcomp_pid = math.multiply(num1_pid,exp1_pid);

    var epow2_pid = math.multiply(num4_pid,t);
    var exp2_pid  = math.pow(math.e,epow2_pid);
	var comp1 = math.multiply(mul_pid,exp2_pid);
	var scndcomp_pid = math.subtract(num3_pid,comp1);	
	var totalfrstprt_pid = math.multiply(frstcomp_pid , scndcomp_pid);
	
	var epow3_pid = math.multiply(num6_pid,t);
	var exp3_pid  = math.pow(math.e,epow3_pid);
	var thrdcomp_pid = math.multiply(num5_pid,exp3_pid);
	var epow4_pid = math.multiply(num7_pid,t);
	var exp4_pid  = math.pow(math.e,epow4_pid);
	var frthcomp_pid = math.add(exp4_pid,num8_pid);
	var totalscndprt_pid = math.multiply(thrdcomp_pid , frthcomp_pid);
	
	var epow5_pid = math.multiply(-1.31345,t);
	var exp5_pid = math.pow(math.e,epow5_pid);
	var totalthrdprt_pid = math.multiply(-0.0501799,exp5_pid);	
	
	
	y[t]= 0.5 * Math.sin(2*Math.PI*0.5*t);//assuming sine amp of 2v p-p.Input plot
	var op = math.multiply(1.571,(math.add(totalfrstprt_pid,totalscndprt_pid,totalthrdprt_pid)));//output sine
	yop[t] = op.re;
	
	
	//document.write("<br/>"+yop[t]);
	dataPoints.push({x:(t), y:(y[t]/143.14)});///y[t] was in v, in m the gain is 143.14v/m,now in m
	dataOPPoints.push({x:(t), y:(yop[t]/143.14)});///yop[t] was in v, in m the gain is 143.14v/m,now in m	 
	 
	 
	}
 	document.getElementById('chartContainer').style.display  = "block"; 
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Sinusoidal Response of MAGLEV Plant with PID Controller "
	  
      },
	  
	  axisX:{
        interlacedColor: "#B2F9FA",
        title: "Time(Sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude(m)",
			
			maximum:0.03,
        },
		{/////input y axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		}
		],
	data: [
      {        
        type: "spline",
		color:"109DB6",
        dataPoints:dataOPPoints
	
       },
       {        
        type: "spline",
		color:"#F9CC1D",
        dataPoints:dataPoints
	
       },
      ]	
	});

	chart.render();
document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
	}
	
	
	function PID_SINE_VOLT(){
		
	var i = math.sqrt(-1);
	var y = new Array();
    var yop = new Array();	
	var dataPoints=[];
	var dataOPPoints=[];
	
	
	
	for( var t=0; t<=50;t+=0.1){	
	
	var num1_pid = math.complex(0.219288 ,0.0204671 );
	 var num2_pid = math.complex(0  , -3.142 );
	 
	 var num3_pid = math.complex(0.185056,0.982728);
	 var num4_pid = math.complex(0,6.284);	

    var num5_pid = math.complex(0.00462287,0.0103211);
    var num6_pid = math.complex(-54.7083,-45.4455);
    var num7_pid = math.complex(0,90.891);
    var num8_pid = math.complex(-0.665809,-0.746122);

	var mul_pid = math.complex(0,1.0);
    //var num10_pid = 0.0501799*(math.pow(math.e,(-1.31345*t)));
    	
	
	var epow1_pid = math.multiply(num2_pid,t);
	var exp1_pid  = math.pow(math.e,epow1_pid);
	var frstcomp_pid = math.multiply(num1_pid,exp1_pid);

    var epow2_pid = math.multiply(num4_pid,t);
    var exp2_pid  = math.pow(math.e,epow2_pid);
	var comp1 = math.multiply(mul_pid,exp2_pid);
	var scndcomp_pid = math.subtract(num3_pid,comp1);	
	var totalfrstprt_pid = math.multiply(frstcomp_pid , scndcomp_pid);
	
	var epow3_pid = math.multiply(num6_pid,t);
	var exp3_pid  = math.pow(math.e,epow3_pid);
	var thrdcomp_pid = math.multiply(num5_pid,exp3_pid);
	var epow4_pid = math.multiply(num7_pid,t);
	var exp4_pid  = math.pow(math.e,epow4_pid);
	var frthcomp_pid = math.add(exp4_pid,num8_pid);
	var totalscndprt_pid = math.multiply(thrdcomp_pid , frthcomp_pid);
	
	var epow5_pid = math.multiply(-1.31345,t);
	var exp5_pid = math.pow(math.e,epow5_pid);
	var totalthrdprt_pid = math.multiply(-0.0501799,exp5_pid);	
	
	
	y[t]= 0.5 * Math.sin(2*Math.PI*0.5*t);//assuming sine amp of 1v p-p.Input plot
	var op = math.multiply(1.571,(math.add(totalfrstprt_pid,totalscndprt_pid,totalthrdprt_pid)));//output sine
	yop[t] = op.re;
	
	
	//document.write("<br/>"+yop[t]);
	dataPoints.push({x:(t), y:(y[t])});///y[t] is in v
	dataOPPoints.push({x:(t), y:(yop[t])});///yop[t] is in v	 
	 
	 
	}
 	document.getElementById('chartContainer').style.display  = "block"; 
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Sinusoidal Response of MAGLEV Plant with PID Controller "
	  
      },
	  
	  axisX:{
        interlacedColor: "#B2F9FA",
        title: "Time(Sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude(v)",
			
			maximum:2,
        },
		{/////input y axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		}
		],
	data: [
      {        
        type: "spline",
		color:"109DB6",
        dataPoints:dataOPPoints
	
       },
       {        
        type: "spline",
		color:"#F9CC1D",
        dataPoints:dataPoints
	
       },
      ]	
	});

	chart.render();
document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
	}
	
	//////testing square wave in volt//////////////////////
	function PID_SQR_VOLT(){
		
	var i = math.sqrt(-1);
	var y = new Array();
    var yop = new Array();	
	var dataPoints=[];
	var dataOPPoints=[];
	
	
	
	for( var t=0; t<=50;t+=0.1){	
	
	var num1_pid = math.complex(0.219288 ,0.0204671 );
	 var num2_pid = math.complex(0  , -3.142 );
	 
	 var num3_pid = math.complex(0.185056,0.982728);
	 var num4_pid = math.complex(0,6.284);	

    var num5_pid = math.complex(0.00462287,0.0103211);
    var num6_pid = math.complex(-54.7083,-45.4455);
    var num7_pid = math.complex(0,90.891);
    var num8_pid = math.complex(-0.665809,-0.746122);

	var mul_pid = math.complex(0,1.0);
    //var num10_pid = 0.0501799*(math.pow(math.e,(-1.31345*t)));
    	
	
	var epow1_pid = math.multiply(num2_pid,t);
	var exp1_pid  = math.pow(math.e,epow1_pid);
	var frstcomp_pid = math.multiply(num1_pid,exp1_pid);

    var epow2_pid = math.multiply(num4_pid,t);
    var exp2_pid  = math.pow(math.e,epow2_pid);
	var comp1 = math.multiply(mul_pid,exp2_pid);
	var scndcomp_pid = math.subtract(num3_pid,comp1);	
	var totalfrstprt_pid = math.multiply(frstcomp_pid , scndcomp_pid);
	
	var epow3_pid = math.multiply(num6_pid,t);
	var exp3_pid  = math.pow(math.e,epow3_pid);
	var thrdcomp_pid = math.multiply(num5_pid,exp3_pid);
	var epow4_pid = math.multiply(num7_pid,t);
	var exp4_pid  = math.pow(math.e,epow4_pid);
	var frthcomp_pid = math.add(exp4_pid,num8_pid);
	var totalscndprt_pid = math.multiply(thrdcomp_pid , frthcomp_pid);
	
	var epow5_pid = math.multiply(-1.31345,t);
	var exp5_pid = math.pow(math.e,epow5_pid);
	var totalthrdprt_pid = math.multiply(-0.0501799,exp5_pid);	
	
	
	y[t]= 0.5 * Math.sign(Math.sin(2*Math.PI*0.5*t));//assuming sine amp of 1v p-p.Input plot
	var op = math.multiply(1.571,(math.add(totalfrstprt_pid,totalscndprt_pid,totalthrdprt_pid)));//output sine
	yop[t] = op.re * Math.sign(2*Math.PI*0.5*t);
	
	
	//document.write("<br/>"+yop[t]);
	dataPoints.push({x:(t), y:(y[t])});///y[t] is in v
	dataOPPoints.push({x:(t), y:(yop[t])});///yop[t] is in v	 
	 
	 
	}
 	document.getElementById('chartContainer').style.display  = "block"; 
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Sinusoidal Response of MAGLEV Plant with PID Controller "
	  
      },
	  
	  axisX:{
        interlacedColor: "#E0FDE4",
        title: "Time(Sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude(v)",
			
			maximum:2,
        },
		{/////input y axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		}
		],
	data: [
      {        
        type: "spline",
		color:"red",
        dataPoints:dataOPPoints
	
       },
       {        
        type: "spline",
		color:"#F9CC1D",
        dataPoints:dataPoints
	
       },
      ]	
	});

	chart.render();
document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	







	 
	 
  
    

	 
	  
























					  
					  