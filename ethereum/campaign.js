import web3 from './web3';
import CampaignBuild from './build/Campaign.json';

const Campaign = (address) => {
    return new web3.eth.Contract(JSON.parse(CampaignBuild.interface), address);
};

export default Campaign;