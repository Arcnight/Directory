import React, { Component } from 'react'
import { Container, Sidebar, Segment, Button, Menu, Icon, Header } from 'semantic-ui-react'

import Content from 'components/home/'

class App extends Component {
    state = { visible: false, dimmed: false }

    toggleVisibility = () => this.setState({ visible: !this.state.visible, dimmed: !this.state.dimmed })

    componentDidMount() {
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    render() {
        const { visible, dimmed } = this.state
        return (
            <div>
                <Header as='h3'>Application Content</Header>
                <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
                <Sidebar.Pushable>
                    <Sidebar as={Menu} animation='uncover' width='thin' visible={visible} icon='labeled' vertical inverted>
                        <Menu.Item name='home'>
                        <Icon name='home' />
                        Home
                        </Menu.Item>
                        <Menu.Item name='gamepad'>
                        <Icon name='gamepad' />
                        Games
                        </Menu.Item>
                        <Menu.Item name='camera'>
                        <Icon name='camera' />
                        Channels
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher dimmed={ dimmed }>
                        <Content />
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }  
}

export default App