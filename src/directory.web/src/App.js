import React, { Component, Fragment } from 'react';

import Content from 'components/home/'

import $ from 'jquery';
import 'assets/styles/App.css';
import 'semantic-ui-css/semantic.min.css';

window.jQuery = $;

require('semantic-ui-css');


class App extends Component {
    componentDidMount() {
        $("#mainnav").sidebar({
            context: $("#main")
        });

        $(".openbtn").on("click", function() {
            $("#mainnav").sidebar("toggle");
            $(".quicknav").toggleClass("visible");
            //$(".ui.sidebar").toggleClass("very thin icon");
            //$(".asd").toggleClass("marginlefting");
            //$(".sidebar z").toggleClass("displaynone");
            //$(".ui.accordion").toggleClass("displaynone");
            //$(".ui.dropdown.item").toggleClass("displayblock");
            //$(".logo").find('img').toggle();
        });
        
        $(".ui.dropdown").dropdown({
            allowCategorySelection: true,
            transition: "fade up",
            context: '.sidebar',
            on: "hover"
        });
         
         $('.ui.accordion').accordion({
           selector: {}
         });
    }

    render() {
        return (
            <Fragment>
                <div id="header">
                    <div className="ui menu asd borderless fixed top" style={{ "borderRadius": "0 !important", "border": "0" }}>
                        <a className="item openbtn">
                            <i className="icon content"></i>
                        </a>
                        <a className="item">Messages</a>
                        <div className="right menu">
                            <div className="ui dropdown item">
                                Language <i className="dropdown icon"></i>
                                <div className="menu">
                                    <a className="item">English</a>
                                    <a className="item">Russian</a>
                                    <a className="item">Spanish</a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="ui primary button">Sign Up</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="main">
                    <div id="mainnav" className="ui sidebar vertical left menu">
                        <div className="ui accordion">
                            <div className="title item">
                                <i className="dropdown icon"></i>  Dashboard
                            </div>
                            <div className="content">
                                <a className="item" href="dashboard.html">Dashboard</a>
                            </div>

                            <div className="title item">
                                <i className="dropdown icon"></i> Apps
                            </div>
                            <div className="content">
                                <a className="item" href="inbox.html">Inbox</a>
                                <a className="item" href="mail.html">Mailbox</a>
                                <a className="item" href="chat.html">Chat</a>
                                <a className="item" href="contacts.html">Contacts</a>
                                <a className="item" href="photoeditor.html">Photo Editor</a>
                                <a className="item" href="calendar.html">Calendar</a>
                                <a className="item" href="filter.html">Filter</a>
                                <a className="item" href="todo.html">Todo</a>
                            </div>

                            <div className="title item">
                                <i className="dropdown icon"></i> Layouts
                            </div>
                            <div className="content">
                                <a className="item" href="sidebar.html">Sidebar</a>
                                <a className="item" href="menu.html">Nav</a>
                                <a className="item" href="animatedicon.html">Animated Icon</a>
                                <a className="item" href="box.html">Box</a>
                                <a className="item" href="cards.html">Cards</a>
                                <a className="item" href="color.html">Colors</a>
                                <a className="item" href="comment.html">Comment</a>
                                <a className="item" href="embed.html">Embed</a>
                                <a className="item" href="faq.html">Faq</a>
                                <a className="item" href="feed.html">Feed</a>
                                <a className="item" href="gallery.html">Gallery</a>
                                <a className="item" href="grid.html">Grid</a>
                                <a className="item" href="header.html">Header</a>
                                <a className="item" href="timeline.html">Timeline</a>
                                <a className="item" href="message.html">Message</a>
                                <a className="item" href="price.html">Price</a>
                            </div>
            
                            <a className="item"><b>Components</b></a>
            
                            <div className="title item">
                                <i className="dropdown icon"></i> UI-Kit
                            </div>
                            <div className="content">
                                <a className="item" href="accordion.html">Accordion</a>
                                <a className="item" href="breadcrumb.html">Breadcrumb</a>
                                <a className="item" href="button.html">Button</a>
                                <a className="item" href="divider.html">Divider</a>
                                <a className="item" href="dropdown.html">Dropdown</a>
                                <a className="item" href="flag.html">Flag</a>
                                <a className="item" href="icon.html">Icon</a>
                                <a className="item" href="image.html">Image</a>
                                <a className="item" href="label.html">Label</a>
                                <a className="item" href="list.html">List</a>
                                <a className="item" href="modal.html">Modal</a>
                                <a className="item" href="notification.html">Notification</a>
                                <a className="item" href="alert.html">Alert</a>
                                <a className="item" href="progress.html">Progress</a>
                                <a className="item" href="range-v1.html">Range Semantic</a>
                                <a className="item" href="range-v2.html">Range Material</a>
                                <a className="item" href="rating.html">Rating</a>
                                <a className="item" href="tab.html">Tab</a>
                                <a className="item" href="tooltip.html">Tooltip</a>
                                <a className="item" href="transition.html">Transition</a>
                            </div>
            
                            <div className="title item">
                                <i className="dropdown icon"></i> Pages
                            </div>
                            <div className="content">
                                <a className="item" href="profile.html">Profile</a>
                                <a className="item" href="settings.html">Settings</a>
                                <a className="item" href="blank.html">Blank</a>
                                <a className="item" href="signin.html">Sign In</a>
                                <a className="item" href="signup.html">Sign Up</a>
                                <a className="item" href="forgotpassword.html">Forgot Password</a>
                                <a className="item" href="lockme.html">Lock Me Screen</a>
                                <a className="item" href="404.html">Error 404</a>
                                <a className="item" href="comingsoon.html">Coming Soon</a>
                            </div>

                            <div className="title item">
                                <i className="dropdown icon"></i> Form
                            </div>
                            <div className="content">
                                <a className="item" href="formelements.html">Form Element</a>
                                <a className="item" href="input.html">Input</a>
                                <a className="item" href="formvalidation.html">Form Validation</a>
                                <a className="item" href="editor.html">Html Editor</a>
                            </div>
            
                            <div className="title item">
                                <i className="dropdown icon"></i> Tables
                            </div>
                            <div className="content">
                                <a className="item" href="table.html">Static Table</a>
                                <a className="item" href="datatable.html">Datatable</a>
                                <a className="item" href="editable.html">Editable</a>
                            </div>

                            <div className="title item">
                                <i className="dropdown icon"></i> Chart
                            </div>
                            <div className="content">
                                <a className="item" href="chart.html">Charts 1</a>
                                <a className="item" href="chart-2.html">Charts 2</a>
                                <a className="item" href="chart-3.html">Charts 3</a>
                            </div>
                        </div>
                    </div>
                    <div className="pusher">
                        <div id="body">
                            <div id="quicknav">
                                <div className="ui vertical menu left visible">
                                    <div className="item logo">
                                        <img src="img/logo.png" alt="" /><img src="img/thumblogo.png" alt="" style={{ "display": "none" }} />
                                    </div>
                                    <div className="ui dropdown item displaynone">
                                        <z>Dashboard</z>
                                        <i className="icon demo-icon heart icon-heart"></i>

                                        <div className="menu">
                                            <div className="header">Dashboard</div>
                                            <div className="ui divider"></div>
                                            <a className="item" href="dashboard.html">Dashboard</a>
                                        </div>
                                    </div>

                                    <div className="ui dropdown item displaynone">
                                        <z>Layout</z>
                                        <i className="icon demo-icon world icon-globe"></i>
                        
                                        <div className="menu">
                                            <div className="header">Layout</div>
                                            <div className="ui divider"></div>
                                            <a className="item" href="inbox.html">Inbox</a>
                                            <a className="item" href="mail.html">Mailbox</a>
                                            <a className="item" href="chat.html">Chat</a>
                                            <a className="item" href="contacts.html">Contacts</a>
                                            <a className="item" href="photoeditor.html">Photo Editor</a>
                                            <a className="item" href="calendar.html">Calendar</a>
                                            <a className="item" href="filter.html">Filter</a>
                                            <a className="item" href="todo.html">Todo</a>
                                        </div>
                                    </div>

                                    <div className="ui dropdown item displaynone">
                                        <z>Pages</z>
                                        <i className="icon demo-icon icon-params alarm"></i>
                                    
                                        <div className="menu">
                                            <div className="header">Layouts</div>
                                            <div className="ui divider"></div>
                                            <a className="item" href="sidebar.html">Sidebar</a>
                                            <a className="item" href="menu.html">Nav</a>
                                            <a className="item" href="animatedicon.html">Animated Icon</a>
                                            <a className="item" href="box.html">Box</a>
                                            <a className="item" href="cards.html">Cards</a>
                                            <a className="item" href="color.html">Colors</a>
                                            <a className="item" href="comment.html">Comment</a>
                                            <a className="item" href="embed.html">Embed</a>
                                            <a className="item" href="faq.html">Faq</a>
                                            <a className="item" href="feed.html">Feed</a>
                                            <a className="item" href="gallery.html">Gallery</a>
                                            <a className="item" href="grid.html">Grid</a>
                                            <a className="item" href="header.html">Header</a>
                                            <a className="item" href="timeline.html">Timeline</a>
                                            <a className="item" href="message.html">Message</a>
                                            <a className="item" href="price.html">Price</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="content">
                                <Content />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default App;