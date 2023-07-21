# Theory

 **MAGLEV:**
								 
The magnetic levitation (MAGLEV) is a non-contact technology. it reduces the cost of maintenance as there is no friction, so the energy efficiency is high. This technology is the future in transportation, non-contact actuators, precision engineering, non-contact structures, satellite launching, etc.
							
<div align="center">
<img alt="" src="./images/img_content1.png" class="img-fluid">
</div>
							
Magnetic Levitation System (MLS) is an electromagnetic device which levitates ferromagnetic elements using principle of electromagnetism. MLS technology eliminates mechanical contacts between moving and stationary
parts thereby reducing the friction. Due to reduction in friction, MLS offers many advantages such as low noise, ability to do work in high vacuum environment, high precision positioning platforms. MLS generally works on three kinds of forces namely propulsion, levitation and guidance force. Propulsion force is to push moving part forward, levitation force is to lift up the moving part, and guidance force is to avoid derailing. If magnetic force is attractive then it is magnetic suspension while repulsive force is responsible for magnetic levitation. MLS has numerous applications like ability to do work in high vacuum environment but due to the constant need of levitation, MLS is subjected to continuously changing parameters and hence the mathematical model is highly nonlinear. There have been several attempts to model and control the MLS . Despite the fact that magnetic levitation is non linear behavior and it is described by non linear differential equation, mostly design approaches are based on linear model.
								
								
**DYNAMIC MODELLING OF A MLS**
								
MLS considered for modeling consists of a ferromagnetic ball , suspended in a voltage controlled magnetic field. Ferromagnetic core coil acts as actuator, sensor determining the position of ball with respect to core coil. Fig. 1 shows the schematic diagram of the studied MLS which consists of magnetic levitation mechanical unit (electromagnet, sensors, and ferromagnetic ball) with a computer interface card, a signal conditioning unit, connecting cables. There are two inputs to the system - Reference input signals u and coil current i.
Magnetic levitation system modeling is based on model linearization using Taylor’s series.
								
The simplest non linear model of MAGLEV relating the ball position x and coil current i is:
								
$$m . \ddot{x} = m . g - k \frac{i^2}{x^2} ...(1)$$
								
where k is a constant depending on the coil (electromagnet) parameters, g is the acceleration due to gravity. To present the full phenomenological model a relation between the control voltage u and the coil current i would have to be introduced analysing the whole MAGLEV circuitry. However MAGLEV is equipped with an inner control loop providing a current proportional to the control voltage that is generated for control purpose:
i = k<sub>1</sub> * u ...(2)

Equations (1) and (2) constitute a nonlinear model.
k<sub>1</sub> is control voltage to coil current gain.The bound for the control signal is set to [-5V .. +5V]. MAGLEV is a SISO plant – single input single output (Figure 2).Ball Position is the model output and voltage is the control signal.
								
As the system dynamics is nonlinear,for analysis and controller design purpose it is linearized around an equilibrium point x<sub>0</sub>, i<sub>0</sub>. At this point we consider

$$\ddot{x} = 0$$
								
Hence,
$$k = \frac{mgx_0^2}{i_0^2}$$
								
For linearization purpose let,
								
$$x = x_0 + \Delta x$$
$$i = i_0 + \Delta i$$
								
where &Delta; x is the small deviation from the equilibrium position x<sub>0</sub> and &Delta; i is the small deviation from the equilibrium coil current i<sub>0</sub>.
								
<div align="center">
<img alt="" src="./images/img_content2_2.png" class="img-fluid">
</div>
								
A linearization is done at the equilibrium point of x<sub>0</sub> = -1.5 v (the position is expressed in volts), i<sub>0</sub> = 0.8 A

The linearization steps are the following:
								
$$\ddot{x} = -( \frac{\delta f(i,x)}{\delta i} |_{i_0,x_0} \Delta i + \frac{\delta f(i,x)}{\delta x} |_{i_0,x_0} \Delta x ),$$
								
$$s^2\Delta x = -( k_i \Delta i -k_x \Delta x ),$$
								
$$s^2\Delta x - k_x \Delta x = - k_i \Delta i,$$
								
$$\Delta x( s^2 - k_x ) = - k_i \Delta i,$$
								
$$\frac{\Delta x}{\Delta i} = \frac{-k_i}{ s^2 - k_x }$$
								
where,
$$f(i,x) = k \frac{i^2}{x^2}$$
$$k_i = \frac{2g}{i_0}$$
$$k_x = \frac{2g}{x_0}$$
								
Coil current i proportional to the control voltage u, i.e. i = k<sub>1</sub> . u, 

k<sub>1</sub> being the proportionality constant.

The transfer function becomes,
								
$$\frac{\Delta x}{\Delta u} = \frac{-k_1 k_i}{ s^2 - k_x }$$
								
where &Delta;u is the incremental control voltage from its equilibrium value. Finally, considering the (IR) sensor is linear with gain k<sub>2</sub>, the overall plant transfer function can be written as,
								
$$P(s) = \frac{\Delta x_v}{\Delta u} = \frac{-k_1 k_2 k_i}{ s^2 - k_x }$$
								
where x<sub>v</sub> is the sensor output (in volt). Note from the expression of k<sub>i</sub> and k<sub>x</sub> that this linearized system is independent of levitation-ball mass.The parameters of the physical system considered are presented in list below. With these parameters, the plant transfer function becomes
								
$$P(s) = \frac{b}{s^2 - p^2} = \frac{-3815.85}{s^2 - 2180}$$
								
**The physical MAGLEV system parameters:**
								
m — Mass of the steel ball 0.02 kg

g — Acceleration due to gravity 9.81 m/s<sup>2</sup>

i<sub>0</sub> — Equilibrium value of current 0.8 A

x<sub>0</sub> — Equilibrium value of position 0.009 m

k<sub>1</sub> — Control voltage to coil current gain 1.05 A/V

k<sub>2</sub> — Sensor gain, offset (&eta;) 143.48 V/m, -2.8 V

Control input voltage level (u) +/- 5 V

Sensor output voltage level (x<sub>v</sub>) +1.25 V to -3.75 V


**Plant Control:**
								
A general schematic of a simple control closed loop system is presented below.

<div align ="center">
<img alt="" src="./images/img_content6.png" class="img-fluid">
</div>
								
Assuming that the plant is represented by its linear model its transfer function can be described as:
 
$$G(s) = \frac{B(s)}{A(s)}$$
								 
 where s is the Laplace operator. The idea of control algorithms is to find such a controller (transfer function, discrete transfer function, any nonlinear), which will fulfilL our requirements (certain dynamic response, certain frequency of damping, good response to the dynamic changes of the desired value etc.).
Every controller’s input is the e(t) error signal. Sometimes disturbance signals are also measured. Depending on the present and past values of the error signal, the controller performs such an action (changes the u(t) control signal) that the y(t) is as close to the y<sub>desired</sub>(t) value as possible at all times.
There are a lot of controller design and tuning methods. All of them consider the behavior of the ‘closed loop system’ and provide controller parameters according to the assumed system characteristics. With the known plant transfer function G(s) it is possible to find satisfactory parameters of the C(s) controller such that 
the closed loop system will have the desired characteristics described by the transfer function Tc(s):
								
$$T_c(s) = \frac{C(s). G(s)}{1 + C(s) . G(s)}$$
 
 
**PID Controller:**
								
A PID controller consists of 3 blocks: Proportional, Integral and Derivative. The equation governing the PID controller is as follows:
								
$$u(t) = P. e(t) + I.\int{e(t)}dt + D \frac{de(t)}{dt} ....(11)$$
								
$$e(t) = y_{desired}(t) - y(t) ....(12)$$
								
With the means of laplace transform such a structure can be represented as a transfer function:

$$U(s) = ( P + \frac{I}{s} + D.s ). E(s) ....(13)$$
								
$$C(s) = \frac{U(s)}{E(s)} = (P +\frac{I}{s} + D.s) = \frac{Ds^2 + Ps + I}{s} .......(14)$$	
								
<div align="center">
<img alt="" src="./images/PID.png" class="img-fluid">
</div>
								 
Each of the PID controller blocks (P, I and D) plays an important role. However for some applications, the Integral or Derivative part has to be excluded to give satisfactory results. The Proportional block is mostly responsible for the speed of the system reaction. However for oscillatory plants it might increase the oscillations if the value of P is set to be too large.The Integral part is very important and assures zero error value in the steady state, which means that the output will be exactly what we want it to be. Nevertheless the Integral action of the controller causes the system to respond slower to the desired value changes.

The Derivative part has been introduced to make the response faster. However it is very sensitive to noise and may cause the system to react very nervously.Thus very often it is omitted in the controller design. Derivative part output filtering may reduce the nervous reaction but also slows the response of the controller down . Proper filtering can help to reduce the high frequency noise without degrading the control system performance in the lower frequency band.


						
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>								