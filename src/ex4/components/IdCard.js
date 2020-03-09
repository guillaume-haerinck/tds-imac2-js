import { h } from 'hyperapp'
import IdCardEntry from './IdCardEntry'

export default (props) => 
    h('div', null, [
        h('img', { src: 'url' }, []),
        Object.entries(props).map(el => IdCardEntry(el))
    ])
