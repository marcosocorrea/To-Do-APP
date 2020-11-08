import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, search } from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() { // essa função componentWillMount() só pode ser chamada quando quando o componente é tipo classe
        this.props.search()
    }

    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    render() {
        return (
            <div role='form' className='todoForm'>

                <Grid cols='12 9 10'>
                    <input id='description' className='form-control' placeholder='Adicione uma tarefa' value={this.props.description} onChange={this.props.changeDescription} onKeyUp={this.keyHandler} >
                    </input>
                </Grid>

                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus' onClick={this.props.handleAdd} />
                    <IconButton style='info' icon='search' onClick={this.props.handleSearch} />
                    <IconButton style='default' icon='close' onClick={this.props.handleClear} />
                </Grid>

            </div>
        )
    }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)