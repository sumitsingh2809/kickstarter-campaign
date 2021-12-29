import React, { Component } from 'react';
import factory from '../ethereum/factory';

class CampaignIndex extends Component {
    // Rendered on server side.
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns };
    }

    render() {
        return <div>{this.props.campaigns}</div>;
    }
}

export default CampaignIndex;
