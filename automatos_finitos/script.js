const automaton = new Automaton();
let currentState = null;

function addState() {
    const stateName = document.getElementById('state').value;
    const state = new State(stateName);
    automaton.addState(state);
    currentState = state;
    document.getElementById('state').value = '';
    displayAutomaton();
}

function addTransition() {
    const fromStateName = document.getElementById('fromState').value;
    const toStateName = document.getElementById('toState').value;
    const symbol = document.getElementById('symbol').value;

    const fromState = automaton.getStateByName(fromStateName);
    const toState = automaton.getStateByName(toStateName);

    if (fromState && toState) {
        automaton.addTransition(new Transition(fromState, symbol, toState));
    }

    document.getElementById('fromState').value = '';
    document.getElementById('toState').value = '';
    document.getElementById('symbol').value = '';
    displayAutomaton();
}

function displayAutomaton() {
    const output = document.getElementById('output');
    output.textContent = JSON.stringify(automaton, null, 2);
}