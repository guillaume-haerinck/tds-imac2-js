import { h } from 'hyperapp'

import IdCard from '../IdCard'

export default (state) => 
    h('main', null, [
        IdCard(state.person)
    ])
