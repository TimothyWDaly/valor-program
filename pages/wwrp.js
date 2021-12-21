import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ContentBlock from '../components/ContentBlock';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/Button';
import {BREAKPOINT} from '../lib/styles';
import Head from 'next/head';

const WwrpPage = (props) => {
    return (
        <Layout>
            <Head>
                <title>Wounded Warrior Recovery Project</title>
                <meta name="title" content="Wounded Warrior Recovery Project" />
                <meta name="description" content="" />
            </Head>
            <Hero src="/hero-wwrp.jpg" />
            <ContentBlock>
                <Image
                    src="/wwrp-logo.jpg"
                    alt="Wounded Warrior Recovery Program Logo"
                    width="162px"
                    height="186px"
                />
                <h1>
                    Wounded Warrior <br /> Recovery Project
                </h1>
                <p>
                    The Wounded Warrior Recovery Project (WWRP) is a long-term project
                    being conducted by the VALOR Program at the Naval Health Research
                    Center (NHRC). Funding support comes from the Navy Bureau of Medicine
                    and Surgery (BUMED) under the Wounded, Ill, and Injured (WII) program.
                    The goal of the project is to gather information about the long-term
                    outcomes of U.S. military personnel that were injured on deployment.
                </p>
                <p>
                    Participants in the WWRP are active duty or separated members of the
                    U.S. military who were injured during their service. They come from
                    all branches of the U.S. military: the U.S. Army, Marine Corps, Navy,
                    Air Force, Reserve, and National Guard. Participants are men and women
                    who are dispersed all over the country, and sometimes the world, who
                    support the WWRP’s mission of improving outcomes through research.
                </p>
                <p>
                    Participants are invited to participate based on their experience. The
                    information that participants share is being used to better understand
                    the impact of injury on service members long-term quality of life,
                    health, and readiness, and to minimize the impact that injury has on
                    the men and women of the U.S. armed forces.
                </p>
                <p>
                    Participants answer questions about their current status every 6
                    months. The assessments are usually completed online, but can be done
                    over the phone or through the mail. Each assessment takes only about
                    20-30 minutes to complete and participants received a gift card for
                    their time. The questions concern injury factors, physical and mental
                    health outcomes, quality of life, and health behaviors. The WWRP
                    seeks to fill knowledge gaps about patient outcomes, including
                    physical and mental health effects and quality of life, related to
                    injuries. The goal is to use these findings to inform improved
                    treatments and interventions. The VALOR Program team respects the
                    service and sacrifice of our participants and is grateful that their
                    participation may lead to better treatment for wounded service
                    members.
                </p>
              
                <p>
                    As of 30 September 2021, the WWRP has temporarily suspended data
                    collection while we transition to a new data collection platform.
                    The new platform is more user-friendly and incorporates the most
                    up-to-date security enhancements required by the DoD.
                </p>
                <p>
                    <u>If you are currently enrolled in the WWRP what does this mean for you?</u>
                </p>
                <p>
                    • Your status in the program has not changed. However, no new data will be
                    collected after 30 September while we await formal approvals. This will
                    ensure that our transition to the new data collection system is compliant
                    with the most up-to-date cyber security requirements.
                </p>
                <p>
                    • You will not be able to complete your rregularly scheduled assessment while
                    data collection is suspended. However, we will notify you when data collection
                    resumes and of any updates or changes to our assessment procedures. You will
                    still recieve a $20 gift card for each assessment that you complete when data
                    collection resumes.
                </p>
                <p>
                    • The continued protection and security of your data and information is our
                    highest priority. Your existing data remains secure on a firewall-protected,
                    HIPPAA-compiant database at NHRC.
                </p>
                <p>
                    We apologize for the inconvenience this may case. If you have any questions,
                    please do not hesitate to contact us at usn.valorprogram@mail.mil or
                    toll-free via telephone at +1-855-557-6480, and we will be happy to answer any
                    questions you have.
                </p>
                <div className="button__container">
                    <div>
                        <Link href="/contact-us">
                            <a title="Contact Us">
                                <Button>Contact Us</Button>
                            </a>
                        </Link>
                    </div>
                </div>
            </ContentBlock>
            <style jsx>
                {`
                    h1 {
                        margin-top: 60px;
                    }
                    .button__container {
                        display: block;
                    }
                    .button__container > div {
                        margin: 15px auto;
                        text-align: center;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .button__container {
                            display: grid;
                            grid-template-columns: auto auto;
                            justify-content: flex-start;
                            grid-gap: 36px;
                        }
                    }
                `}
            </style>
        </Layout>
    );
};
export default WwrpPage;
