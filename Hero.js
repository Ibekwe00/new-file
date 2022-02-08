import React from 'react';


const style = {
    wrapper: `relative`,
    container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s250')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
    copyContainer: `w-1/2` ,
    title: `relative text-white text-[38px] font-semibold`,
    description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
    ctaContainer: `flex`,
    accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
    button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
    cardContainer: `rounded-[2rem], `,
    infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
    author: `flex flex-col justify-center ml-4`,
    name: ``,
    infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
  }

const Hero = () => {
    return (
    <div className={style.wrapper}>
        <div className={style.container}>
            <div className={style.contentWrapper}>
                <div className={style.copyContainer}>
                    <div className={style.title}>
                        Discover, collect, and sell amazing NFTS      
                    </div>
                    <div className={style.description}>
                        0pensea is the world known and Largest NFTS marketplace
                    </div>
                    <div className={style.ctaContainer}>
                        <button className={style.accentedButton}>Explore</button>
                        <button className={style.button}>Create</button>
                    </div>
                    <div className={style.cardContainer}>
                        <img 
                        className='rounded-t-lg' 
                        src='https://www.google.com/search?q=nft+images&sxsrf=APq-WBvURGdSyI7zP0rwWzJUdHF71ssH5Q:1644279814594&tbm=isch&source=iu&ictx=1&vet=1&fir=UpKlVJDaeJIejM%252CZ0Rw68FxKXv-pM%252C_%253BUT2w0jjsBT_dPM%252CqkVTPeDsx-_feM%252C_%253B-6L402kjfq0V_M%252CGDf_rUq5uYoVqM%252C_%253BcYuqwDAS8GYaPM%252CvbG_1Ub_XiQbvM%252C_%253BEhR9FftWfG_pOM%252CE-EQAAZH-qf-AM%252C_%253BYbMkvVbvaNd6NM%252CauFHxP1GiVNYMM%252C_%253BDgZniemR3g1fEM%252C8bEeP3TfskcoFM%252C_%253BW4Jw3d17KezeyM%252C3fO64HlMqTq2ZM%252C_%253BnOvC9PPEtzcb7M%252CiRw5xSc1_kNorM%252C_%253BThFT_8x7ZYi1HM%252CUGWhzve2fRp6BM%252C_%253BLAJgtw9jSiwI-M%252CxXXktO98rshhdM%252C_%253Bg_bW6qxxOZ_B8M%252C72nNn4YQsDQV0M%252C_%253B8TPKLoszIEaRaM%252CxIu_N9_fNueThM%252C_%253B1J7qNAXgHogkwM%252C0MWRKH_23YjikM%252C_&usg=AI4_-kSXrHpqzg3dxzmKbROpadLwSLZkOg&sa=X&ved=2ahUKEwi294nS6-71AhUi_rsIHQRQAtUQ9QF6BAgNEAE#imgrc=YbMkvVbvaNd6NM'
                        />
                        <div className={style.infoContainer}>
                            <img className='h-[2.25rem] rounded-full'
                            src='https://storage.googleapis.com/opensea-static/opensea-profile/23.png'
                            />
                            <div className={style.author}>
                                <div className={style.name}>Johnkerry</div>
                                <a className='text-[#1868b7]' href='https://opensea.io/assets/0xb9330de75f36f2e4ac379484bc00208fd530cdc7/42'> 
                                    
                                
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )

}

export default Hero;