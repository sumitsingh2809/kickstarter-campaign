import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xd2549e4632B631264561A629BC634a79481d6afb'
    // process.env.DEPLOYED_CAMPAIGN_FACTORY_ADDRESS
);

export default instance;
