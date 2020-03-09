import { h } from 'hyperapp'

export default (props) => 
    h('p', null, [props[0], ' : ', props[1]])
