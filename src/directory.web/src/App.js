import React, { Component, Fragment } from 'react'
import { Container, Sidebar, Segment, Button, Menu, Icon, Dropdown } from 'semantic-ui-react'

import Content from 'components/home/'

import 'assets/styles/App.css';

class App extends Component {
    state = { visible: false, dimmed: false }

    toggleVisibility = () => {
        this.setState({ visible: !this.state.visible, dimmed: !this.state.dimmed });
    }

    componentDidMount() {
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    render() {
        const { visible, dimmed } = this.state

        return (
            <Fragment>
                <Menu fixed='top' inverted>
                    <Menu.Item as='a' header onClick={this.toggleVisibility}>
                        <div id="nav-icon4" className={ visible ? "open" : "closed" }>
                            <span></span><span></span><span></span>
                        </div>
                    </Menu.Item>
                    <Container>
                        <Menu.Item as='a'>Home</Menu.Item>
                        <Dropdown item simple text='Dropdown'>
                            <Dropdown.Menu>
                                <Dropdown.Item>List Item</Dropdown.Item>
                                <Dropdown.Item>List Item</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Header>Header Item</Dropdown.Header>
                                <Dropdown.Item>
                                    <i className='dropdown icon' />
                                    <span className='text'>Submenu</span>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>List Item</Dropdown.Item>
                                        <Dropdown.Item>List Item</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Item>
                                <Dropdown.Item>List Item</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Container>
                </Menu>
                <Sidebar.Pushable id="LeftNav">
                    <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical>
                        <Menu.Item name='home'>
                            <Icon name='home' /> Home
                        </Menu.Item>
                        <Menu.Item name='gamepad'>
                            <Icon name='gamepad' /> Games
                        </Menu.Item>
                        <Menu.Item name='camera'>
                            <Icon name='camera' /> Channels
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher dimmed={ dimmed }>
                        <Content />
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Fragment>
        )
    }  
}

export default App