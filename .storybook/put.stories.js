import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');

const renderer = create({
    verbose: true
});
const {put} = renderer;

put('.red-border', {
    border: '1px solid red',
    ':hover': {
        fontWeight: 'bold'
    },
    '::trololo': {
        color: 'blue',
    },
    span: {
        color: 'red'
    }
});

put('.check-same-name-warning', {color: 'red'});
put('.check-same-name-warning', {color: 'red'});

storiesOf('Addons/put()', module)
    .add('Default', () =>
        h('div', {className: 'red-border'}, 'Hello world')
    )
    .add('Nesting', () =>
        h('div', {className: 'red-border'}, 'Hello ', h('span', null, 'world'))
    )
