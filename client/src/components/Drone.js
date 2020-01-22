import React from 'react';

export const Drone = ({channelId, user}) => {
    // const scaleDrone = window.Scaledrone(channelId, {
    //     data: user
    //   });

    const drone = window.Scaledrone(channelId);

    // scaleDrone.on('open', error => {
    // if (error) {
    //     return console.error(error);
    // }
    // const member = {...this.state.member};
    // member.id = this.drone.clientId;
    // this.setState({member});
    // });

    return (<></>)
}