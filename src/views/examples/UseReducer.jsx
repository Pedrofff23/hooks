import React from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [{}],
    products: [{},{}],
    user: null,
    //focus...
    number:0
}

function reducer(state,action) {
    switch(action.type) {
        case 'add2':
            return {...state, number: state.number+2}
    }
}

const UseReducer = (props) => {
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
        </div>
    )
}

export default UseReducer
