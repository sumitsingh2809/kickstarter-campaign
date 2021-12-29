import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Card } from 'semantic-ui-react';
import Layout from '../components/Layout';
import factory from '../ethereum/factory';

class CampaignIndex extends Component {
    // Rendered on server side.
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns };
    }

    renderCampaigns() {
        const items = this.props.campaigns.map((address) => {
            return {
                header: address,
                description: <a>View Campaign</a>,
                fluid: true,
            };
        });

        return <Card.Group items={items} />;
    }

    render() {
        return (
            <Layout>
                <div>
                    <h3>Open Campaigns</h3>
                    {this.renderCampaigns()}
                    <Button
                        content="Create Campaign"
                        icon="add circle"
                        primary
                    />
                </div>
            </Layout>
        );
    }
}

export default CampaignIndex;
