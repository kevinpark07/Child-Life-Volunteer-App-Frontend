import React from 'react';
import {connect} from 'react-redux';
import MeetingCard from '../Components/MeetingCard';
import styled from 'styled-components';

const BACKGROUND = "https://images.unsplash.com/photo-1554188248-986adbb73be4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";

const VolMeetingContainer = (props) => {

    const renderMeetings = () => {
        let userMeetings = props.meetings.filter(meet => meet.volunteer_id === props.user.id)

        return userMeetings.map(meeting => <MeetingCard key={meeting.id} meeting={meeting} />)
     
    }

    return (
        <div>
            <Background alt="background" src={BACKGROUND} />
            <Container>
                <Header>Meet-Ups</Header>
                {renderMeetings()}
            </Container>
        </div>
    )

}

const msp = state => {
    return {
        user: state.user,
        meetings: state.meetings
    }
}

export default connect(msp)(VolMeetingContainer);

const Container = styled.div`
    position: absolute;
    top: 15%;
    left: 9%;
    overflow: auto;
    height: 100%;
    z-index: 1;
    width: 80%;
    border-style: solid;
    border-color: white;
    box-shadow: 5px 5px 5px 2px grey;
    margin-bottom: 5%;
`

const Background = styled.img`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
`

const Header = styled.h1`
    font-family: Marker Felt, fantasy;
    text-align: center;
    color: #EFEBE9;
    text-shadow: 2px 2px 4px #000000;
    font-size: 40pt;
    text-decoration: underline;
`