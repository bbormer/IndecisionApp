'use strict';

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer, what could go wrong?',
    options: []
};

var addOption = function addOption(e) {
    e.preventDefault(); // stop full page refresh

    var option = e.target.elements.optionText.value;

    if (option) {
        app.options.push(option);
        e.target.elements.optionText.value = '';
    }

    render();
};

var clearOptions = function clearOptions() {
    app.options = [];
    render();
};

var makeDecision = function makeDecision() {
    var randomNumber = Math.floor(Math.random() * app.options.length);

    var selectedValue = app.options[randomNumber];
    alert(selectedValue);
};

var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'button',
            { disabled: app.options.length <= 0, onClick: makeDecision },
            'What should I do?'
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options:' : 'No options'
        ),
        React.createElement(
            'button',
            { onClick: clearOptions },
            'Remove all'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: addOption },
            React.createElement('input', { type: 'text', name: 'optionText' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
