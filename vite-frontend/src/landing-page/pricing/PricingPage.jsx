
import Hero from './Hero';
import AccountOpeningCharges from './AccountOpeningCharges'
import OptionalServiceCharges from './OptionalServiceCharges'
import Brokerage from './Brokerage';
function PricingPage() {
    return ( <>
    <Hero/>
    <Brokerage/>
    <AccountOpeningCharges/>
    <OptionalServiceCharges/>
    </> );
}

export default PricingPage;