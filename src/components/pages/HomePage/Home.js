import React, { Fragment } from 'react';
import HeroSection from '../../HeroSection';
import Pricing from '../Pricing/Pricing';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data';

function Home() {
    return (
        <Fragment>
          <HeroSection {...homeObjOne} />
          <HeroSection {...homeObjThree} />
          <HeroSection {...homeObjTwo} />
          <Pricing />
          <HeroSection {...homeObjFour} />
        </Fragment>
    )
}

export default Home;
