import React from 'react'
import type { Pastor } from '../../ui/PastorProfileCard'
import { pastor1, pastor2, ROAjayiImg, sermonPageMan } from '../../../assets'
import { PastorProfileCard } from '../../ui/PastorProfileCard'

export const pastors: Pastor[] = [
    {
        img: ROAjayiImg,
        name: "R.O.AJAYI ",
        title: "PROPHET/EVANGELIST ",
        church: "THE LATTER DAY CHURCH FOUNDER",
        socials: {
            facebook: "",
            twitter: "",
            linkedIn: ""
        },
        about: `Born to a Muslim family in Itabalogun Ikaram Mr. Laisi Ajayi Jegedei In June 1949. He attended Moslem Primary School Ikaram and L. A. Sec. Modern School Ikaram, 1956 — 1961 and 1961 — 1962 respectively. In his pursuit of a technical Education, he attended Baptist Technical College Urorni Edo State. He later proceeded to Italy for a course in Automobile Engineering in 1971, at the Italian Institute for Industrial Reconstruction.
He worked with the Pacemaneria di Milano as a technical worker in 1974 — 1976. He worked briefly with the City group motors Nigeria Ltd Lagos after his return to the country in 1976. He later joined Agbogbo Group of Companies as the Company's Manager in 1977 — 1982. He played active politics between 1978
1982 during the second republic.
He was miraculously saved during the political turbulence in Ondo State in 1983. During this critical period, he saw the appearance of God, who gave him a Divine call. He surrendered all in Obedience to his Divine call.
In 1985, he founded a prayer Ministry. The Gospel Trumpet of the Kingdom of Christ in Ikare — Akoko, and served as the Group leader.
In 1986, He was led by the Holy Spirit to Ikaram to found a Church. The Latter — Day Church of Jesus Christ and make Ikaram the Church Headquarters. Today the Church is spreading and has branches in undo State and Kogi. He is the Church
President.
He has by His grace, subdued powers of Principalities in this land and environs, to God be the glory.`
    },
    {
        img: sermonPageMan,
        name: "DR. KAYODE AJAYI ",
        title: "GENERAL OVERSEER ",
        church: "THE LATTER DAY CHURCH",
        socials: {
            facebook: "",
            twitter: "",
            linkedIn: ""
        },
        about: `Born to a Muslim family in Itabalogun Ikaram Mr. Laisi Ajayi Jegedei In June 1949. He attended Moslem Primary School Ikaram and L. A. Sec. Modern School Ikaram, 1956 — 1961 and 1961 — 1962 respectively. In his pursuit of a technical Education, he attended Baptist Technical College Urorni Edo State. He later proceeded to Italy for a course in Automobile Engineering in 1971, at the Italian Institute for Industrial Reconstruction.
He worked with the Pacemaneria di Milano as a technical worker in 1974 — 1976. He worked briefly with the City group motors Nigeria Ltd Lagos after his return to the country in 1976. He later joined Agbogbo Group of Companies as the Company's Manager in 1977 — 1982. He played active politics between 1978
1982 during the second republic.
He was miraculously saved during the political turbulence in Ondo State in 1983. During this critical period, he saw the appearance of God, who gave him a Divine call. He surrendered all in Obedience to his Divine call.
In 1985, he founded a prayer Ministry. `
    },
    {
        img: pastor1,
        name: "PST. K.S. ENNISON",
        title: "Headquarters",
        socials: {
            facebook: "",
            twitter: "",
            linkedIn: ""
        }
    },
    {
        img: pastor2,
        name: "Pst. R.O. Banfe",
        title: "Regional Overseer (Ile-Oluji)",
        socials: {
            facebook: "",
            twitter: "",
            linkedIn: ""
        }
    },
    {
        img: pastor1,
        name: "Danielle Watkins",
        title: "Regional Overseer (Kogi)",
        socials: {
            facebook: "",
            twitter: "",
            linkedIn: ""
        }
    },
    {
        img: pastor2,
        name: "Pst. S.P. Falekulo",
        title: "Ondo town",
        socials: {
            facebook: "",
            twitter: "",
            linkedIn: ""
        }
    },
    {
        img: pastor2,
        name: "Pst. R.O. Banfe",
        title: "Regional Overseer (Ile-Oluji)",
        socials: {
            facebook: "",
            twitter: "",
            linkedIn: ""
        }
    },
    {
        img: pastor1,
        name: "Pst. Marvelous Ibrahim",
        title: "ikengwe",
        socials: {
            facebook: "",
            twitter: "",
            linkedIn: ""
        }
    },
    {
        img: pastor2,
        name: "Pst. Gegede",
        title: "ogori",
        socials: {
            facebook: "",
            twitter: "",
            linkedIn: ""
        }
    },



]

const PastorsSection: React.FC = () => {
    return (
        <div className='w-full flex flex-col items-center p-20 gap-10'>
            <div className=' flex flex-col items-center gap-5'>
                <p className='text-[16px] font-[400] text-center uppercase'>Our church pastors</p>
                <h2 className='text-[48px] text-secondary text-center font-[700] uppercase'>meet our Inspirational PASTORS</h2>
            </div>
            <div className='w-full flex flex-col gap-5 md:px-20'>
                <div className='w-full flex flex-wrap justify-between gap-5'>
                    {
                        pastors.slice(0, 2).map((pastor) => (
                            <PastorProfileCard pastor={pastor} />
                        ))
                    }
                </div>
                <div className='w-full flex justify-between gap-5 flex-wrap'>
                    {
                        pastors.slice(3).map((pastor) => (
                            <PastorProfileCard pastor={pastor} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PastorsSection