import React from 'react';
import SearchBar from './SearchBar';
import youtube from './Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import "../../Pages/lg.css"
import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardFooter,
    CardText,
    CardBody,
    CardTitle,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Label,
    FormGroup,
    Input,
    Table,
    Row,
    Col,
    UncontrolledTooltip
  } from "reactstrap";

class Video extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube(termFromSearchBar)
        this.setState({
            videos: response.data.items
        })
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className='ui container' style={{marginTop: '1em'}}>                
              <Card className="card-rachid">
                <CardBody>
                  <div className="chart-area">
                  <SearchBar handleFormSubmit={this.handleSubmit}/>
                <div className='ui grid'>
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>             
                  </div>
                </CardBody>
              </Card>
            </div>
        )
    }
}

export default Video;