import { h } from 'hyperapp'

export default (state, actions) => 
    h('main', null, [
        h('p', null, [() => { 
            let str = '><';
            for (let i = 0; i < state.fishSize; i++) {
                str += '='
            }
            return str + '°>';
        }]),
        h('button', { onclick: actions.decreaseFishSize, disabled: state.fishSize < 2 }, ['-']),
        h('button', { onclick: actions.increaseFishSize }, ['+'])
    ])
