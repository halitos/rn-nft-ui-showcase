import { Features, Download, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';
const App = () => {
  return (
    <>
      <SectionWrapper
        title='Your own store of NFTs.
        Start trading now.'
        description='NFTs are a new type of digital asset that can be used 
        to create a decentralized marketplace.'
        showBtn
        mockupImg={assets.homeHero}
        banner='banner'
      />
      <SectionWrapper
        title='Smart User Interface'
        description='Experience a new way to interact with your NFTs.'
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title='Deployment.'
        description='Deploy your NFTs to the blockchain. Pronefis built using Expo. Runs natively on iOS and Android.'
        showBtn
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title='Creative way to showcase the store.'
        description='The App is designed to be a simple and intuitive way to showcase your store.'
        mockupImg={assets.mockup}
        banner='banner02'
      />
      <Download />
      <div className='px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04'>
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with patience by <span className='italic'>Halit</span>{' '}
        </p>
      </div>
    </>
  );
};

export default App;
