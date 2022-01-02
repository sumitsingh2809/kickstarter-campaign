import React, { Component } from 'react';
import { Button, Form, Input } from 'semantic-ui-react';
import Layout from '../../components/Layout';

class CampgaignNew extends Component {
    state = {
        minimumContribution: '',
    };

    render() {
        return (
            <Layout>
                <h1>Create a Campaign</h1>

                <Form>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input
                            label="wei"
                            labelPosition="right"
                            value={this.state.minimumContribution}
                            onChange={(event) =>
                                this.setState({
                                    minimumContribution: event.target.value,
                                })
                            }
                        />
                    </Form.Field>
                </Form>

                <Button primary>Create!</Button>
            </Layout>
        );
    }
}

export default CampgaignNew;
