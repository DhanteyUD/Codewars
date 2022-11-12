/*
What is NFA
NFA (Nondeterministic Finite State Machine) is a mathematical model that contains:

Set of states Q
Set of transitions transitions
Set of start states startStates, a subset of Q
Set of accepted states acceptStates, a subset of Q
Each transition consists of two states (s1, s2) and a symbol (a): s1 -a-> s2

In NFA some transitions may be empty: s1 --> s2

There can be multiple transitions for each s1 and a.

NFA can accept some character sequences or not.

NFA accept sequence if exist one or more path from any start state to any accept state

Task
Write a function that takes:

startStates (array of number)
transitions (array of [number, symbol, number])
acceptStates (array of numbers)
input (string)
Return true if this input is accepted, and false if not.

Example


Number all states:

 0 for q0
 1 for q1
 2 for q2
startStates = [0]
transitions = [  
    [0, '', 1], // q0 --> q1
    [0, '1', 2], // q0 -1-> q2
    [0, '0', 0], // q0 -0-> q0
    [2, '1', 2], // q2 -1-> q2
    [2, '1', 1], // q2 -1-> q1
]
acceptStates = [1] 
This NFA accepts 0111 and does not accept 001.

States for 0111:
q0 -> q0 -> q2 -> q2 -> q1 (from acceptStates -> accepted)
(Note there is path q0 -> q0 -> q2 -> q2 -> q2 that ended in not accepted state, 
  but we need least one path that endind in accept state)

States for 001:
q0 -> q0 -> q0 -> q2 (not from acceptStates -> not accepted)

Also this NFA accept "" because exist empty transition q0 --> q1
*/ 

function runNFA(startStates, transitions, acceptStates, input) {
  return false
}