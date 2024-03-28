/*-----Document Name: MAGLEV .js
       Author Name  : Piyali Chattopadhyay
	                  RE VLABS, IIT KGP--------------*/
					  
		 		window.onload= function(){
					
					alert('Desktop mode in chrome is preferable or rotate the screen for better view ');
					
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
		document.getElementById('changeplot').value = 1;
	}
	function show_sqrbox(){
		document.getElementById('simu1').src = "images/dbox3_square_input.png";
		document.getElementById('changeplot').value = 2;
	}	
	function show_stepbox(){
		document.getElementById('simu1').src = "images/dbox3_step_input.png";
		document.getElementById('changeplot').value = 0;
	}	
	function show_PID_block(){
		document.getElementById('PID_block').style.display  = "block";		
	}
	
    function hide_PID(){
	document.getElementById('PID_block').style.display  = "none";			
	}	
	
	function show_step(){
		document.getElementById('step_block').style.display  = "block";
		document.getElementById('sin_block').style.display  = "none";
		document.getElementById('sqr_block').style.display  = "none";
		
	}
	
	function hide_step(){
	document.getElementById('step_block').style.display  = "none";			
	}
	
	function show_sin(){
		document.getElementById('sin_block').style.display  = "block";
		document.getElementById('step_block').style.display  = "none";
		document.getElementById('sqr_block').style.display  = "none";
	}
	
	function hide_sin(){
	document.getElementById('sin_block').style.display  = "none";			
	}	
	
	function show_sqr(){
		document.getElementById('sqr_block').style.display  = "block";
		document.getElementById('sin_block').style.display  = "none";
		document.getElementById('step_block').style.display  = "none";
	}
	
	function hide_sqr(){
	document.getElementById('sqr_block').style.display  = "none";			
	}	
	
	
	function IR_ON(){
	document.getElementById('run_btn').src = "images/pause.png";		
		
	}
	
	/*function back_img(){
		
	
    document.getElementById('simu1').src= "images/dbox3_sin_input.png";	
    //document.getElementById('btn1').style.display = "block";
    //document.getElementById('btn2').style.display = "none";
		//document.getElementById('sin_btn').style.display  = "none";
		//document.getElementById('sqr_btn').style.display  = "none";
		//document.getElementById('step_btn').style.display  = "none";
		//document.getElementById('PID_btn').style.display  = "none";
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
	}*/
	
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
    if(document.getElementById('changeplot').value == 0){	
	 PID_STEP();
	 
	}	
	else if(document.getElementById('changeplot').value == 1){
     PID_SINE();
	 
	}
	else if(document.getElementById('changeplot').value == 2){
     PID_SQR();
	}	
	}
	
	function v_scope(){
	
    var a = document.getElementById('changeplot').value;
    if(document.getElementById('changeplot').value == 0){	
	 PID_STEP_VOLT();
	 
	}	
	else if(document.getElementById('changeplot').value == 1){
     PID_SINE_VOLT();
	 
	}
	else if(document.getElementById('changeplot').value == 2){
     PID_SQR_VOLT();
	 
	}		
	}
	
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

setTimeout (function(){
document.getElementById('run_btn').src = "images/run.png";
},10010);	
}

function ballfall2(){
setTimeout(function() {
	document.getElementById('ball_container').classList.remove("ballfall");
    document.getElementById('red_div').classList.remove("divup");
	

  document.getElementById('red_div').classList.add("ballfall");
  document.getElementById('ball_container').classList.add("divup");
    
}, 8000);

setTimeout (function(){
document.getElementById('run_btn').src = "images/run.png";
},10010);	
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
  
  
  if(data == "Redball" && ev.target.id == "ball_container" && document.getElementById('run_btn').src.match('images/pause.png')){
	  
	ev.target.appendChild(document.getElementById(data));
	ball_Anim();
	ballfall();	
  }
  else if(data == "Redball" && ev.target.id == "red_div" && document.getElementById('run_btn').src.match('images/pause.png')){
	ev.target.appendChild(document.getElementById(data));
	ball_Anim();
	ballfall2();	
  }
  else{
	  
	  alert("Click on the 'Run' button first to activate IR sensor");
	
  }
  
}


	
	function PID_STEP(){///////////for amplitude in meter//////////////
		
	var i = math.sqrt(-1);
	var y = new Array();
    var yop = new Array();	
	var dataPoints=[];
	var dataOPPoints=[];
	
	var totalT = document.getElementById('totaltime').value;
	var stepT  = document.getElementById('steptime').value;
	var vp = document.getElementById('stepsize').value;
	
	
	
	for( var t=0; t<=totalT; t+=0.1){
	
	for( var t=0; t<=stepT;t+=0.1 ){////20 sec is sample time
	
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
	
	var exp3_pid = math.pow(math.e,math.multiply(-1.31345 , t));
	var totalscndprt_pid = math.multiply(0.443072,exp3_pid);	
	
	
	y[t]= vp;//assuming step size 1v.Input plot
	yop[t]= math.multiply(vp,math.add(totalfrstprt_pid,totalscndprt_pid,1));//assuming step size 1v.Output plot
	
	dataPoints.push({x:(t), y:(y[t]/143.14)});///y[t] was in v, in m the gain is 143.14v/m,now in m
	dataOPPoints.push({x:(t), y:(yop[t]/143.14)});///yop[t] was in v, in m the gain is 143.14v/m,now in m	 
	 
	 //document.write (totalscndprt);
	 }
	 for( var t= stepT; t<= totalT;t++){////20 sec is sample time
	
	y[t]= 0;//assuming final value of 0v.Input plot
	yop[t]=0;//assuming final value of 0v.Output plot
	dataPoints.push({x:(t), y:(y[t]/143.14)});///y[t] was in v, in m the gain is 143.14v/m,now in m
	dataOPPoints.push({x:(t), y:(yop[t]/143.14)});///yop[t] was in v, in m the gain is 143.14v/m,now in m	 
	 
	 //document.write (totalscndprt);
	 }
	}
	document.getElementById('plotbucket').style.display  = "block"; 
    document.getElementById('chartContainer').style.display  = "block"; 	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Step Response of MAGLEV Plant with PID Controller "
	  
      },
	  
	  axisX:{
        interlacedColor: "#DFDEDE",
        title: "Time(Sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude(m)",
			
			//maximum:0.03,
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
		color:"black",
        dataPoints:dataOPPoints
	
       },
       {        
        type: "spline",
		color:"red",
        dataPoints:dataPoints
	
       },
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
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
	
	var totalT = document.getElementById('totaltime').value;
	var stepT  = document.getElementById('steptime').value;
	var vp = document.getElementById('stepsize').value;
	
	
	
	for( var t=0; t<=totalT;t+=0.1){
	
	for( var t=0; t<=stepT;t+=0.1){////20 sec is sample time
	
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
	
	var exp3_pid = math.pow(math.e,math.multiply(-1.31345 , t));
	var totalscndprt_pid = math.multiply(0.443072,exp3_pid);	
	
	
	y[t]= vp;//assuming step size 1v.Input plot
	yop[t]= math.multiply(vp,math.add(totalfrstprt_pid,totalscndprt_pid,1));//assuming step size 1v.Output plot
	
	dataPoints.push({x:(t), y:(y[t]*1000)});///y[t] is in v
	dataOPPoints.push({x:(t), y:(yop[t]*1000)});///yop[t] is in v	 
	 
	 //document.write (totalscndprt);
	 }
	 for( var t=stepT; t<=totalT;t++){////20 sec is sample time
	
	y[t]= 0;//assuming final value of 0v.Input plot
	yop[t]=0;//assuming final value of 0v.Output plot
	dataPoints.push({x:(t), y:(y[t])});///y[t] is in v
	dataOPPoints.push({x:(t), y:(yop[t])});///yop[t] is in v	 
	 
	 //document.write (totalscndprt);
	 }
	}
document.getElementById('plotbucket').style.display  = "block"; 	
document.getElementById('chartContainer').style.display  = "block"; 	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Step Response of MAGLEV Plant with PID Controller "
	  
      },
	  
	  axisX:{
        interlacedColor: "#DFDEDE",
        title: "Time(Sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude(mv)",
			
			//maximum:6,
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
		color:"black",
        dataPoints:dataOPPoints
	
       },
       {        
        type: "spline",
		color:"red",
        dataPoints:dataPoints
	
       },
      ]	
	});

	chart.render();
document.getElementById("result").style.display = "block";	
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
	
	var totalT = document.getElementById('totaltime').value;
	var sinv  = document.getElementById('sinamp').value;
	var sinf = document.getElementById('sinfreq').value;
	
	
	
	for( var t=0; t<=totalT;t+=0.1){	
	
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
	var gain = math.divide(sinv,2);
	
	y[t]= math.multiply(gain , math.sin(math.multiply(2,math.pi, sinf ,t)));//assuming sine amp of 0.5v .Input plot
	var op = math.multiply(math.multiply(2,math.pi,sinf,gain),(math.add(totalfrstprt_pid,totalscndprt_pid,totalthrdprt_pid)));//output sine
	yop[t] = op.re;
	
	
	//document.write("<br/>"+yop[t]);
	dataPoints.push({x:(t), y:(y[t]/143.14)});///y[t] was in v, in m the gain is 143.14v/m,now in m
	dataOPPoints.push({x:(t), y:(yop[t]/143.14)});///yop[t] was in v, in m the gain is 143.14v/m,now in m	 
	 
	 
	}
	document.getElementById('plotbucket').style.display  = "block"; 
 	document.getElementById('chartContainer').style.display  = "block"; 
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Sinusoidal Response of MAGLEV Plant with PID Controller "
	  
      },
	  
	  axisX:{
        interlacedColor: "#DFDEDE",
        title: "Time(Sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude(m)",
			
			//maximum:0.03,
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
		color:"black",
        dataPoints:dataOPPoints
	
       },
       {        
        type: "spline",
		color:"red",
        dataPoints:dataPoints
	
       },
      ]	
	});

	chart.render();
	document.getElementById("result").style.display = "block";
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
	
	
	var totalT = document.getElementById('totaltime').value;
	var sinv  = document.getElementById('sinamp').value;
	var sinf = document.getElementById('sinfreq').value;
	
	
	for( var t=0; t<=totalT;t+=0.1){	
	
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
	var gain = math.divide(sinv,2);
	
	y[t]= math.multiply(gain , math.sin(math.multiply(2,math.pi, sinf ,t)));//assuming sine amp of 1v p-p.Input plot
	var op = math.multiply(math.multiply(2,math.pi,sinf,gain),(math.add(totalfrstprt_pid,totalscndprt_pid,totalthrdprt_pid)));//output sine
	yop[t] = op.re;
	
	
	//document.write("<br/>"+yop[t]);
	dataPoints.push({x:(t), y:(y[t])});///y[t] is in v
	dataOPPoints.push({x:(t), y:(yop[t])});///yop[t] is in v	 
	 
	 
	}
	document.getElementById('plotbucket').style.display  = "block"; 
 	document.getElementById('chartContainer').style.display  = "block"; 
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Sinusoidal Response of MAGLEV Plant with PID Controller "
	  
      },
	  
	  axisX:{
        interlacedColor: "#DFDEDE",
        title: "Time(Sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude(v)",
			
			//maximum:6,
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
		color:"black",
        dataPoints:dataOPPoints
	
       },
       {        
        type: "spline",
		color:"red",
        dataPoints:dataPoints
	
       },
      ]	
	});

	chart.render();
	document.getElementById("result").style.display = "block";
document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
	}
	
	///testing square wave in volt
	
	
	function PID_SQR_VOLT(){///////////for amplitude in VOLT//////////////
		
	var i = math.sqrt(-1);
	var y = new Array();
    var yop = new Array();	
	var dataPoints=[];
	var dataOPPoints=[];
	
	var totalT = document.getElementById('totaltime').value;
	var sqrv  = document.getElementById('sqramp').value;
	var sqrf  = document.getElementById('sqrfreq').value;///new addition
	
	var tperiod = math.divide(1,sqrf);
	var cycles = math.divide(totalT,tperiod);
	var cyclehlfs = math.multiply(cycles,2);
	
	//for( var t=0; t<=totalT;t+=0.1){
	
	//for( var t=0; t<= math.divide(totalT,4) ; t+=0.1){////20 sec is sample time
	
	for (var nc = 0; nc < math.divide(cyclehlfs,2); nc+=1) {
    for (var t = math.multiply(nc,tperiod); t <= math.multiply(math.add(math.multiply(nc,2),1),math.divide(totalT,cyclehlfs)); t++) {
	
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
	
	var exp3_pid = math.pow(math.e,math.multiply(-1.31345 , t));
	var totalscndprt_pid = math.multiply(0.443072,exp3_pid);	
	
	
	y[t]= sqrv;//assuming step size 1v.Input plot
	yop[t]= math.multiply(sqrv,math.add(totalfrstprt_pid,totalscndprt_pid,1));//assuming step size 1v.Output plot
	
	dataPoints.push({x:(t), y:(y[t]*1000)});///y[t] is in v
	dataOPPoints.push({x:(t), y:(yop[t]*1000)});///yop[t] is in v	 
	 
	 //document.write (totalscndprt);
	 }
	 //for( var t= math.divide(totalT,4); t<= math.divide(totalT,2); t++){////20 sec is sample time
	 for (var t = math.multiply(math.add(math.multiply(nc,2),1),math.divide(totalT,cyclehlfs)); t<= math.multiply(2,math.divide(totalT,cyclehlfs),math.add(((2*nc)/2),1)); t++) {
	
	y[t]= 0;//assuming final value of 0v.Input plot
	yop[t]=0;//assuming final value of 0v.Output plot
	dataPoints.push({x:(t), y:(y[t])});///y[t] is in v
	dataOPPoints.push({x:(t), y:(yop[t])});///yop[t] is in v	 
	 
	 //document.write (totalscndprt);
	 }
	 }
	 
	/* for( var t= math.divide(totalT,2); t<= math.divide(math.multiply(3,totalT),4) ; t+=0.1){////20 sec is sample time
	
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
	
	var exp3_pid = math.pow(math.e,math.multiply(-1.31345 , t));
	var totalscndprt_pid = math.multiply(0.443072,exp3_pid);	
	
	
	y[t]= sqrv;//assuming step size 1v.Input plot
	yop[t]= math.multiply(sqrv,math.add(totalfrstprt_pid,totalscndprt_pid,1));//assuming step size 1v.Output plot
	
	dataPoints.push({x:(t), y:(y[t]*1000)});///y[t] is in v
	dataOPPoints.push({x:(t), y:(yop[t]*1000)});///yop[t] is in v	 
	 
	 //document.write (totalscndprt);
	 } 
	 
	for( var t= math.divide(math.multiply(3,totalT),4); t<= totalT; t++){////20 sec is sample time
	
	y[t]= 0;//assuming final value of 0v.Input plot
	yop[t]=0;//assuming final value of 0v.Output plot
	dataPoints.push({x:(t), y:(y[t])});///y[t] is in v
	dataOPPoints.push({x:(t), y:(yop[t])});///yop[t] is in v	 
	 
	 //document.write (totalscndprt);
	 } 
	 */
	 
	//}
document.getElementById('plotbucket').style.display  = "block"; 	
document.getElementById('chartContainer').style.display  = "block"; 	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Square wave Response of MAGLEV Plant with PID Controller "
	  
      },
	  
	  axisX:{
        interlacedColor: "#DFDEDE",
        title: "Time(Sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude(mv)",
			
			//maximum:6,
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
		color:"black",
        dataPoints:dataOPPoints
	
       },
       {        
        type: "spline",
		color:"red",
        dataPoints:dataPoints
	
       },
      ]	
	});

	chart.render();
document.getElementById("result").style.display = "block";	
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
		
	}	
	
	///PID square wave in meter
	
	function PID_SQR(){///////////for amplitude in meter//////////////
		
	var i = math.sqrt(-1);
	var y = new Array();
    var yop = new Array();	
	var dataPoints=[];
	var dataOPPoints=[];
	
	var totalT = document.getElementById('totaltime').value;
	var sqrv  = document.getElementById('sqramp').value;
	
	
	
	for( var t=0; t<=totalT; t+=0.1){
	
	for( var t=0; t<= math.divide(totalT,4);t+=0.1 ){////20 sec is sample time
	
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
	
	var exp3_pid = math.pow(math.e,math.multiply(-1.31345 , t));
	var totalscndprt_pid = math.multiply(0.443072,exp3_pid);	
	
	
	y[t]= sqrv;//assuming step size 1v.Input plot
	yop[t]= math.multiply(sqrv,math.add(totalfrstprt_pid,totalscndprt_pid,1));//assuming step size 1v.Output plot
	
	dataPoints.push({x:(t), y:(y[t]/143.14)});///y[t] was in v, in m the gain is 143.14v/m,now in m
	dataOPPoints.push({x:(t), y:(yop[t]/143.14)});///yop[t] was in v, in m the gain is 143.14v/m,now in m	 
	 
	 //document.write (totalscndprt);
	 }
	 for( var t= math.divide(totalT,4); t<= math.divide(totalT,2);t++){////20 sec is sample time
	
	y[t]= 0;//assuming final value of 0v.Input plot
	yop[t]=0;//assuming final value of 0v.Output plot
	dataPoints.push({x:(t), y:(y[t]/143.14)});///y[t] was in v, in m the gain is 143.14v/m,now in m
	dataOPPoints.push({x:(t), y:(yop[t]/143.14)});///yop[t] was in v, in m the gain is 143.14v/m,now in m	 
	 
	 //document.write (totalscndprt);
	 }
	for( var t= math.divide(totalT,2); t<= math.divide(math.multiply(3,totalT),4);t+=0.1 ){////25 sec is sample time
	
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
	
	var exp3_pid = math.pow(math.e,math.multiply(-1.31345 , t));
	var totalscndprt_pid = math.multiply(0.443072,exp3_pid);	
	
	
	y[t]= sqrv;//assuming step size 1v.Input plot
	yop[t]= math.multiply(sqrv,math.add(totalfrstprt_pid,totalscndprt_pid,1));//assuming step size 1v.Output plot
	
	dataPoints.push({x:(t), y:(y[t]/143.14)});///y[t] was in v, in m the gain is 143.14v/m,now in m
	dataOPPoints.push({x:(t), y:(yop[t]/143.14)});///yop[t] was in v, in m the gain is 143.14v/m,now in m	 
	 
	 //document.write (totalscndprt);
	 } 
	for( var t= math.divide(math.multiply(3,totalT),4); t<= totalT;t++){////25 sec is sample time
	
	y[t]= 0;//assuming final value of 0v.Input plot
	yop[t]=0;//assuming final value of 0v.Output plot
	dataPoints.push({x:(t), y:(y[t]/143.14)});///y[t] was in v, in m the gain is 143.14v/m,now in m
	dataOPPoints.push({x:(t), y:(yop[t]/143.14)});///yop[t] was in v, in m the gain is 143.14v/m,now in m	 
	 
	 //document.write (totalscndprt);
	 } 
	
	}
	document.getElementById('plotbucket').style.display  = "block"; 
    document.getElementById('chartContainer').style.display  = "block"; 	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Square wave Response of MAGLEV Plant with PID Controller "
	  
      },
	  
	  axisX:{
        interlacedColor: "#DFDEDE",
        title: "Time(Sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude(m)",
			
			//maximum:0.03,
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
		color:"black",
        dataPoints:dataOPPoints
	
       },
       {        
        type: "spline",
		color:"red",
        dataPoints:dataPoints
	
       },
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
		
	}
	
	
	function csqrf(){

if ( document.getElementById('changeplot').value == 2){

var Ttime = document.getElementById('totaltime').value;
document.getElementById('sqrfreq').value = math.divide(1,math.divide(Ttime,2));

}

}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	///Refresh
	function Refresh(){
		
	document.getElementById('plotbucket').style.display = "none";
	document.getElementById('run_btn').style.display = "none";
	document.getElementById('m_scope').style.display = "none";
	document.getElementById('v_scope').style.display = "none";
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	







	 
	 
  
    

	 
	  
























					  
					  