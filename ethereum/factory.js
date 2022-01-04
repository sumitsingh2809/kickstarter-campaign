import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xC6a93cDD26DaB0b78E801cdC7b49679940608256'
    // process.env.DEPLOYED_CAMPAIGN_FACTORY_ADDRESS
);

export default instance;
