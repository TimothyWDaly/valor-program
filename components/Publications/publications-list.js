const publicationsList = [
    {
        title: 'How good diet and exercise prevent injury and disease',
        author: '',
        date: 'Aug 30, 2021',
        description:
            'Diet and exercise are fundamental for overall physical and mental, health and can aid in warding off chronic disease.',
        link: 'https://www.health.mil/News/Articles/2021/08/30/How-Good-Diet-and-Exercise-Prevent-Injury-and-Disease',
    },
    {
        title: 'METC Partnership Provides Pathway for Active Duty, Veterans',
        author: '',
        date: 'Aug 11, 2021',
        description:
            'The Computer Assisted Rehabilitation Environment (CAREN) at the National Intrepid Center of Excellence (NICoE) offers clinicians a VR-based tool to assess and treat patients with TBI and PTSD.',
        link: 'https://www.health.mil/News/Articles/2021/08/11/METC-Partnership-Provides-Pathway-for-Active-Duty-Veterans',
    },
    {
        title: 'Mental and physical health, and long-term quality of life among service members injured on deployment',
        author: 'Cameron T. McCabe, Jessica R. Watrous, Susan L. Eskridge & Michael R. Galarneau',
        date: 'Sep 16, 2021',
        description:
            'More than 52,000 casualties have been documented in post-9/11 conflicts. Service members with extremity injuries (EIs) or traumatic brain injury (TBI) may be at particular risk for long-term deficits in mental and physical health functioning compared with service members with other injuries.',
        link: 'https://hqlo.biomedcentral.com/articles/10.1186/s12955-021-01852-3',
    },
    {
        title: 'Prospective Evaluation of Health Outcomes in a Nationwide Sample of Aeromedical Evacuation Casualties: Methods From a Pilot Study',
        author: 'Lauren E Walker, Cameron T McCabe, Jessica R Watrous, Eduard Poltavskiy, Jeffrey T Howard, Jud C Janak, Laurie Migliore, Ian J Stewart, Michael R Galarneau',
        date: 'Aug 4, 2021',
        description:
            'To better understand long-term health outcomes after combat injury, a large, prospective observational cohort collecting both subjective and objective health data is needed.',
        link: 'https://pubmed.ncbi.nlm.nih.gov/34345898/',
    },
    {
        title: 'Trajectory of self-rated health after combat-related injury',
        author: 'Andrew J MacGregor, Amber L Dougherty, Cameron T McCabe, Jessica R Watrous',
        date: 'July 5, 2021',
        description:
            'With more service members than ever surviving their wounds, prospective research on factors related to long-term, patient-reported outcomes, including self-rated health (SRH), has increased importance.',
        link: 'https://pubmed.ncbi.nlm.nih.gov/34024636/',
    },
    {
        title: 'Overcoming Adversity and Stress Injury Support (OASIS): Evaluation of Residential Treatment Outcomes for U.S. Service Members with Posttraumatic Stress Disorder',
        author: 'Kristen H Walter, Casey B Kohen, Cameron T McCabe, Jessica R Watrous, Justin S Campbell',
        date: 'June 3, 2021',
        description:
            'Research on residential posttraumatic stress disorder (PTSD) treatment has predominantly focused on the U.S. veteran population, whereas limited research exists regarding active duty service members.',
        link: 'https://pubmed.ncbi.nlm.nih.gov/33513298/',
    },
    {
        title: 'Long-Term Outcomes of Service Women Injured on Combat Deployment',
        author: 'Jessica R Watrous, Cameron T McCabe, Amber L Dougherty, Abigail M Yablonsky, Gretchen Jones, Judith Harbertson, Michael R Galarneau',
        date: 'Dec 23, 2020',
        description:
            'Sex- and gender-based health disparities are well established and may be of particular concern for service women. Given that injured service members are at high risk of adverse mental and behavioral health outcomes, it is important to address any such disparities in this group, especially in regard to patient-reported outcomes, as much of the existing research has focused on objective medical records.',
        link: 'https://pubmed.ncbi.nlm.nih.gov/33374741/',
    },
    {
        title: 'Health Behaviors Among Service Members Injured on Deployment: A Study From the Wounded Warrior Recovery Project',
        author: 'Cameron T McCabe, Jessica R Watrous, Michael R Galarneau',
        date: 'Oct 2, 2020',
        description:
            'Service members (SMs) who are injured on deployment are at risk for myriad long-term health problems that may be ancillary to their physical injury, including high rates of depression and posttraumatic stress disorder, and poor health behaviors (e.g., problem drinking, cigarette and tobacco use, poor sleep quality, and sedentary lifestyle).',
        link: 'https://pubmed.ncbi.nlm.nih.gov/33005930/',
    },
    {
        title: 'Low back pain, mental health symptoms, and quality of life among injured service members',
        author: 'Jessica R Watrous, Cameron T McCabe, Gretchen Jones, Shawn Farrokhi, Brittney Mazzone, Mary C Clouser, Michael R Galarneau',
        date: 'July 3, 2020',
        description:
            'Pain is a significant public health issue that may be particularly problematic among injured service members who are at high risk of chronic physical and mental health conditions. The goals of this study were to describe the prevalence and types of low back pain (acute vs. recurrent) among service members injured while on combat deployments, and to examine the differences in posttraumatic stress disorder (PTSD) and depression prevalence and severity, as well as quality of life, for individuals with low back pain compared with those without.',
        link: 'https://pubmed.ncbi.nlm.nih.gov/32406726/',
    },
    {
        title: 'Multimorbidity and quality of life after blast-related injury among US military personnel: a cluster analysis of retrospective data',
        author: 'Andrew J MacGregor, James M Zouris, Jessica R Watrous, Cameron T McCabe, Amber L Dougherty, Michael R Galarneau, John J Fraser',
        date: 'April 28, 2020',
        description:
            'Blast injury emerged as a primary source of morbidity among US military personnel during the recent conflicts in Iraq and Afghanistan, and led to an array of adverse health outcomes. Multimorbidity, or the presence of two or more medical conditions in an individual, can complicate treatment strategies. To date, there is minimal research on the impact of multimorbidity on long-term patient-reported outcomes. We aimed to define multimorbidity patterns in a population of blast-injured military personnel, and to examine these patterns in relation to long-term quality of life (QOL).',
        link: 'https://pubmed.ncbi.nlm.nih.gov/32345277/',
    },
    {
        title: 'Trauma exposure, mental health, and quality of life among injured service members: Moderating effects of perceived support from friends and family',
        author: 'McCabe CT, Watrous JR, Galarneau MR',
        date: 'Dec 3, 2019',
        description:
            'Poor mental health and quality of life (QOL) are common among service members exposed to trauma and may be more pronounced among those injured on combat deployment. It is vital to identify factors that attenuate these issues. This study examined whether perceived support from friends and family buffer associations between level of trauma exposure, mental health symptoms (i.e., posttraumatic stress disorder [PTSD], depression), and QOL.',
        link: 'https://www.researchgate.net/publication/337721968_Trauma_exposure_mental_health_and_quality_of_life_among_injured_service_members_Moderating_effects_of_perceived_support_from_friends_and_family',
    },
    {
        title: 'Prevalence of Low Back Pain and Relationship to Mental Health Symptoms and Quality of Life After a Deployment-related Lower Limb Amputation',
        author: 'Brittney Mazzone, Shawn Farrokhi, Brad D Hendershot, Cameron T McCabe, Jessica R Watrous',
        date: 'Oct 1, 2020',
        description:
            'LBP is a common secondary health condition after amputation with important implications related to function and quality of life. A growing body of evidence suggests that psychosocial factors influence LBP in patients without amputation. However, there is a dearth of information regarding the association of psychosocial factors and LBP after amputation.',
        link: 'https://pubmed.ncbi.nlm.nih.gov/32576777/',
    },
    {
        title: 'Self-reported Functional Status in US Service Members After Combat-Related Amputation',
        author: 'Susan L Eskridge, Mary C Clouser, Cameron T McCabe, Jessica R Watrous, Michael R Galarneau',
        date: 'July 9, 2019',
        description:
            'The objective of this study was to describe the functional status of US service members after combat-related amputation. This was a cross-sectional analysis of data from a subsample of the Wounded Warrior Recovery Project, an ongoing, web-based, longitudinal examination of patient-reported outcomes of injured service members.',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30664528/',
    },
    {
        title: 'The Wounded Warrior Recovery Project: A Longitudinal Examination of Patient-Reported Outcomes Among Deployment-Injured Military Personnel (Mil Med.)',
        author: 'Watrous JR, Dougherty AL, McCabe CT, Sack DI, Galarneau MR',
        date: 'Mar 1, 2019',
        description:
            'The survival rate of those injured in combat in overseas contingency operations is higher than in previous conflicts. There is a need to assess the long-term psychosocial and quality of life outcomes of those injured in combat.',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30252116/',
    },
    {
        title: 'Evaluation of Three Postal Invitational Strategies to Increase Survey Response Rates in a Combat-Injured U.S. Military Population: Findings From the Wounded Warrior Recovery Project (Mil Med.)',
        author: 'Sack DI, Woodruff SI, McCabe CT, Galarneau MR, Han PP',
        date: 'Mar 1, 2019',
        description:
            'As part of a large-scale, longitudinal examination of patient-reported outcomes of service members injured on deployment, the present manuscript evaluated the effectiveness of three postal strategies on response rates: (1) mailing a study prenotification postcard, (2) mailing the survey invitation in a larger envelope, and (3) including a small cash preincentive ($2).',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30901447/',
    },
    {
        title: 'Health-related quality of life among US military personnel injured in combat: findings from the Wounded Warrior Recovery Project. (Qual Life Res.)',
        author: 'Woodruff SI, Galarneau MR, McCabe CT, Sack DI, Clouser MC',
        date: 'May 27, 2018',
        description:
            'Little is known about the long-term, health-related quality of life (HRQOL) of those wounded in combat during Operations Enduring Freedom, Iraqi Freedom, and New Dawn. The present study described the overall HRQOL for a large group of US service members experiencing mild-to-severe combat-related injuries, and assessed the unique contribution of demographics, service- and injury-related characteristics, and mental health factors on long-term HRQOL.',
        link: 'https://pubmed.ncbi.nlm.nih.gov/29450855/',
    },
    {
        title: 'Body-region-specific injuries as predictors of psychosocial outcomes among those injured in combat: Results from the Wounded Warrior Recovery Project (Mil Psychol.)',
        author: 'Woodruff SI, Galarneau MR, McCabe CT, Luu BN, Sack DI, Han PP.',
        date: 'Aug 10, 2017',
        description:
            'Associations between body region injured and psychosocial outcomes may have implications for injury prevention and mitigation strategies. The present study investigated the association of body-region-specific injuries and their association with 3 psychosocial outcomes (i.e., quality of life, QOL; posttraumatic stress disorder, PTSD; and depression) among a large sample of U.S. military service members injured in combat.',
        link: 'https://www.researchgate.net/publication/319170404_Body-Region-Specific_Injuries_as_Predictors_of_Psychosocial_Outcomes_Among_Those_Injured_in_Combat_Results_From_the_Wounded_Warrior_Recovery_Project',
    },
    {
        title: "Combat amputees' health-related quality of life and psychological outcomes: A brief report from the wounded warrior recovery project",
        author: 'Woodruff SI, Galarneau MR, Sack DI, McCabe CT, Dye JL.',
        date: 'Mar 10, 2017',
        description:
            'This study extends what is known about long-term health-related quality of life (HrQoL) and other psychosocial outcomes (i.e., depression, posttraumatic stress disorder [PTSD]) among US military combat amputees serving in Operation Enduring Freedom, Operation Iraqi Freedom, and Operation New Dawn.',
        link: 'https://pubmed.ncbi.nlm.nih.gov/28030485/',
    },
    {
        title: 'A study protocol for tracking quality of life among U.S. service members wounded in Iraq and Afghanistan: the Wounded Warrior Recovery Project',
        author: 'Susan I Woodruff, Michael R Galarneau, Bethi N Luu, Daniel Sack, Peggy Han',
        date: 'Mar 17, 2014',
        description:
            'There is a need for more work to understand the quality of life (QOL) outcomes of survivors of Operations Enduring Freedom and Iraqi Freedom combat injury to improve care and treatment, and prevent poor physical, psychological, and social outcomes. We describe the study design and methods of the Wounded Warrior Recovery Project, a study supported by the Department of Defense that will track close to 10,000 military personnel wounded in Operations Enduring Freedom and Iraqi Freedom.',
        link: 'https://pubmed.ncbi.nlm.nih.gov/24594460/',
    },
];
export default publicationsList;
