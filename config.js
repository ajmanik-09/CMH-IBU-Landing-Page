/*
╔════════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║   IBU MARKET RESEARCH DASHBOARDS - CONFIGURATION FILE                        ║
║                                                                              ║
║   This is the ONLY file you need to edit to update the dashboard.            ║
║   You do NOT need to touch index.html.                                       ║
║                                                                              ║
║   STRUCTURE:                                                                 ║
║   The config is organized by Business Unit (BU). Each BU has its own:        ║
║   • Therapy Areas       (the buttons in Step 1)                              ║
║   • Brands              (the buttons in Step 2, with logo images)            ║
║   • Insight Types       (the buttons in Step 3)                              ║
║   • Countries           (the master list of countries for that BU)           ║
║   • Dashboard Links     (Power BI URLs per therapy/brand/insight/country)    ║
║   • US Page Link        (the "Switch to US Page" URL)                        ║
║                                                                              ║
║   HOW TO ADD A NEW BRAND LOGO:                                               ║
║   1. Place the logo image (PNG) in the logos/ folder on GitHub               ║
║   2. Add the brand entry below with logo: 'filename.png'                     ║
║   3. Commit — Posit picks it up in ~15 minutes                               ║
║                                                                              ║
║   Search for "BU: CMH", "BU: OBU", "BU: ImBU", "BU: NBU" to jump to each. ║
║                                                                              ║
╚════════════════════════════════════════════════════════════════════════════════╝
*/

const BUSINESS_UNITS = [
    { id: 'cmh',  name: 'CMH',  fullName: 'Cardiometabolic Health' },
    { id: 'obu',  name: 'OBU',  fullName: 'Oncology' },
    { id: 'imbu', name: 'ImBU', fullName: 'Immunology' },
    { id: 'nbu',  name: 'NBU',  fullName: 'Neuroscience' }
];

/* ═══ BU: CMH (Cardiometabolic Health) ═══════════════════════════════════ */

const CMH_CONFIG = {
    therapyAreas: [
        { id: 'cwm', name: 'Chronic Weight Management' },
        { id: 't2d', name: 'Type 2 Diabetes' }
    ],
    brands: {
        'cwm': [
            { id: 'zepbound', name: 'Zepbound', logo: 'zepbound.png', note: 'Known as Mounjaro in some countries' }
        ],
        't2d': [
            { id: 'mounjaro', name: 'Mounjaro', logo: 'mounjaro.png', note: null }
        ]
    },
    insightTypes: [
        { id: 'hcp', name: 'HCP Insights', subtext: 'BHT (Brand Health Tracking)', isBHT: true, iconClass: 'icon-blue', icon: '<svg viewBox="0 0 24 24"><path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>', enabled: true, comingSoon: false },
        { id: 'consumer', name: 'Consumer Insights', subtext: null, isBHT: false, iconClass: 'icon-amber', icon: '<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75"/></svg>', enabled: false, comingSoon: true }
    ],
    countries: [
        { id: 'jp',  name: 'Japan',         flagCode: 'jp' },
        { id: 'ca',  name: 'Canada',        flagCode: 'ca' },
        { id: 'au',  name: 'Australia',     flagCode: 'au' },
        { id: 'it',  name: 'Italy',         flagCode: 'it' },
        { id: 'sp',  name: 'Spain',         flagCode: 'es' },
        { id: 'fr',  name: 'France',        flagCode: 'fr' },
        { id: 'de',  name: 'Germany',       flagCode: 'de' },
        { id: 'ksa', name: 'Saudi Arabia',  flagCode: 'sa' },
        { id: 'mx',  name: 'Mexico',        flagCode: 'mx' },
        { id: 'pl',  name: 'Poland',        flagCode: 'pl' },
        { id: 'br',  name: 'Brazil',        flagCode: 'br' },
        { id: 'uk',  name: 'UK',            flagCode: 'gb' },
        { id: 'in',  name: 'India',         flagCode: 'in' }
    ],
    dashboardLinks: {
        'cwm': { 'zepbound': { 'hcp': {
            'jp':  { url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/64f3a50d-338f-4d80-80e0-a1d9ef4e1246/f8cc4edea49686754007?experience=power-bi', status: 'present' },
            'ca':  { url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/e3ed644a-767b-42d3-bbc8-e41e4a09b49d/f8cc4edea49686754007?experience=power-bi', status: 'present' },
            'au':  { url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/90313a92-1b7f-406e-bf8a-1853ca1d4873/f8cc4edea49686754007?experience=power-bi', status: 'present' },
            'it':  { url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/9436f075-273c-4906-b9a9-ac34fbdb5c19/f8cc4edea49686754007?experience=power-bi', status: 'present' },
            'sp':  { url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/00ab767a-6891-4e38-a45e-708372714213/f8cc4edea49686754007?experience=power-bi', status: 'present' },
            'fr':  { url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/f02a8cde-6f31-44d3-94da-d0d4e15d7aae/f8cc4edea49686754007?experience=power-bi', status: 'present' },
            'de':  { url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/27400042-c2ac-4fc2-8378-e1c669ea2127/f8cc4edea49686754007?experience=power-bi', status: 'present' },
            'ksa': { url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/4145f1b7-8ded-4c82-905d-24ab96b68590/f8cc4edea49686754007?experience=power-bi', status: 'present' },
            'mx':  { url: '#', status: 'planned' },
            'pl':  { url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/214ce768-98b4-4d9a-b3a9-e19a3e76ef51/f8cc4edea49686754007?experience=power-bi', status: 'present' },
            'br':  { url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/a79dd520-a5a9-48c9-a203-b6cec86803a5/f8cc4edea49686754007?experience=power-bi', status: 'present' },
            'uk':  { url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/53fcdf20-e988-4ad9-ac55-d7e72092a689/f8cc4edea49686754007?experience=power-bi', status: 'present' },
            'in':  { url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/dab7a550-68e5-4455-a90a-c18f9bedd182/f8cc4edea49686754007?experience=power-bi', status: 'present' }
        }, 'consumer': {
            'jp': { url: '#', status: 'planned' }, 'ca': { url: '#', status: 'planned' }, 'au': { url: '#', status: 'planned' },
            'it': { url: '#', status: 'planned' }, 'sp': { url: '#', status: 'planned' }, 'fr': { url: '#', status: 'planned' },
            'de': { url: '#', status: 'planned' }, 'ksa':{ url: '#', status: 'planned' }, 'mx': { url: '#', status: 'planned' },
            'br': { url: '#', status: 'planned' }, 'uk': { url: '#', status: 'planned' }, 'in': { url: '#', status: 'planned' }
        }}},
        't2d': { 'mounjaro': { 'hcp': {
            'jp':  { url: 'https://app.powerbi.com/groups/me/reports/5cfc0291-f081-4b23-8572-284c6ae38a5c/f8cc4edea49686754007?ctid=18a59a81-eea8-4c30-948a-d8824cdc2580&experience=power-bi', status: 'present' },
            'ca':  { url: 'https://app.powerbi.com/groups/me/reports/116178e2-5642-4fc2-a13b-6f66b0b6d4cc/f8cc4edea49686754007?experience=power-bi', status: 'present' },
            'au':  { url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/9dd9caed-3e73-4d4f-a636-66f6966835bb/f8cc4edea49686754007?experience=power-bi', status: 'present' },
            'it':  { url: 'https://app.powerbi.com/groups/me/reports/3fb555ff-8766-4f6a-a4fc-5d1909a0d9c3/f8cc4edea49686754007?experience=power-bi', status: 'present' },
            'sp':  { url: 'https://app.powerbi.com/groups/me/reports/3bf36fb8-53c1-4001-bae5-aeb003c0cd7f/f8cc4edea49686754007?experience=power-bi', status: 'present' },
            'fr':  { url: 'https://app.powerbi.com/groups/me/reports/dac11b86-ae69-4337-8f3b-0acaa6fabe93/f8cc4edea49686754007?ctid=18a59a81-eea8-4c30-948a-d8824cdc2580&experience=power-bi', status: 'present' },
            'de':  { url: 'https://app.powerbi.com/groups/me/reports/9a9ea58b-568e-49b9-9d85-2556c7e68f73/f8cc4edea49686754007?experience=power-bi', status: 'present' },
            'ksa': { url: 'https://app.powerbi.com/groups/me/reports/6137c573-d15c-454b-9a87-1cd40c8ce871/f8cc4edea49686754007?ctid=18a59a81-eea8-4c30-948a-d8824cdc2580&experience=power-bi', status: 'present' },
            'mx':  { url: 'https://app.powerbi.com/groups/me/reports/834c4844-dbe0-49c0-b0b1-0ab6fd0a8b46/f8cc4edea49686754007?ctid=18a59a81-eea8-4c30-948a-d8824cdc2580&experience=power-bi', status: 'present' },
            'pl':  { url: '#', status: 'planned' },
            'br':  { url: 'https://app.powerbi.com/groups/me/reports/5a32f186-c1c4-4ee0-9623-91e571a3e78f/f8cc4edea49686754007?ctid=18a59a81-eea8-4c30-948a-d8824cdc2580&experience=power-bi', status: 'present' },
            'uk':  { url: 'https://app.powerbi.com/groups/me/reports/faddb2e5-f408-4224-b9de-5823ba389ab3/f8cc4edea49686754007?ctid=18a59a81-eea8-4c30-948a-d8824cdc2580&experience=power-bi', status: 'present' },
            'in':  { url: 'https://app.powerbi.com/groups/me/reports/ffbc8dd6-be5a-4288-9fa5-4ce35911a433/f8cc4edea49686754007?experience=power-bi', status: 'present' }
        }, 'consumer': {
            'uk': { url: '#', status: 'planned' }, 'de': { url: '#', status: 'planned' }, 'br': { url: '#', status: 'planned' },
            'fr': { url: '#', status: 'planned' }, 'sp': { url: '#', status: 'planned' }, 'ksa':{ url: '#', status: 'planned' },
            'it': { url: '#', status: 'planned' }, 'mx': { url: '#', status: 'planned' }
        }}}
    },
    usPageUrl: '#us-landing-page'
};

/* ═══ BU: OBU (Oncology) ════════════════════════════════════════════════ */

const OBU_CONFIG = {
    therapyAreas: [
        { id: 'mbc', name: 'mBC' }
    ],
    brands: {
        'mbc': [
            { id: 'inluriyo', name: 'Inluriyo', logo: 'inluriyo.png', note: null }
        ]
    },
    insightTypes: [
        { id: 'hcp', name: 'HCP Insights', subtext: 'BHT (Brand Health Tracking)', isBHT: true, iconClass: 'icon-blue', icon: '<svg viewBox="0 0 24 24"><path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>', enabled: true, comingSoon: false }
    ],
    countries: [
        { id: 'jp', name: 'Japan', flagCode: 'jp' }
    ],
    dashboardLinks: {
        'mbc': { 'inluriyo': { 'hcp': {
            'jp': { url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/12aa193b-4753-4425-bb53-b6b81890053c?ctid=18a59a81-eea8-4c30-948a-d8824cdc2580&pbi_source=linkShare&bookmarkGuid=3e0147b6-adcd-4219-bd05-62f8d4a7f309', status: 'present' }
        }}}
    },
    usPageUrl: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/0a64c07e-23e2-470d-9137-a79d9ccebc2d/b02661e46f062ea30e98?experience=power-bi'
};

/* ═══ BU: ImBU (Immunology) ═════════════════════════════════════════════ */

const IMBU_CONFIG = {
    therapyAreas: [
        { id: 'ibd', name: 'Inflammatory Bowel Disease (IBD)' },
        { id: 'ad',  name: 'Atopic Dermatitis' }
    ],
    brands: {
        'ibd': [ { id: 'omvoh', name: 'Omvoh', logo: 'omvoh.png', note: null } ],
        'ad':  [ { id: 'ebglyss', name: 'Ebglyss', logo: 'ebglyss.png', note: null } ]
    },
    insightTypes: [
        { id: 'hcp', name: 'HCP Insights', subtext: 'BHT (Brand Health Tracking)', isBHT: true, iconClass: 'icon-blue', icon: '<svg viewBox="0 0 24 24"><path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>', enabled: true, comingSoon: false }
    ],
    countries: [
        { id: 'de', name: 'Germany', flagCode: 'de' }, { id: 'ca', name: 'Canada', flagCode: 'ca' },
        { id: 'jp', name: 'Japan', flagCode: 'jp' },   { id: 'sp', name: 'Spain', flagCode: 'es' },
        { id: 'it', name: 'Italy', flagCode: 'it' },   { id: 'uk', name: 'UK', flagCode: 'gb' },
        { id: 'br', name: 'Brazil', flagCode: 'br' }
    ],
    dashboardLinks: {
        'ibd': { 'omvoh': { 'hcp': {
            'de': { url: 'https://app.powerbi.com/links/7IWnV8RgXo?ctid=18a59a81-eea8-4c30-948a-d8824cdc2580&pbi_source=linkShare&bookmarkGuid=f8fe6be4-07bd-4280-9ffe-5d8c6f352629', status: 'present' },
            'ca': { url: 'https://app.powerbi.com/links/8HLo6L9Tnp?ctid=18a59a81-eea8-4c30-948a-d8824cdc2580&pbi_source=linkShare', status: 'present' },
            'jp': { url: 'https://app.powerbi.com/links/Pi-_oabYCs?ctid=18a59a81-eea8-4c30-948a-d8824cdc2580&pbi_source=linkShare', status: 'present' },
            'sp': { url: 'https://app.powerbi.com/links/MddkSjrJ0x?ctid=18a59a81-eea8-4c30-948a-d8824cdc2580&pbi_source=linkShare', status: 'present' },
            'it': { url: 'https://app.powerbi.com/links/t263FMkg8S?ctid=18a59a81-eea8-4c30-948a-d8824cdc2580&pbi_source=linkShare', status: 'present' },
            'uk': { url: 'https://app.powerbi.com/links/004iyuETTm?ctid=18a59a81-eea8-4c30-948a-d8824cdc2580&pbi_source=linkShare&bookmarkGuid=84c54b7c-9690-4d74-8424-c61bc16c10db', status: 'present' }
        }}},
        'ad': { 'ebglyss': { 'hcp': {
            'jp': { url: 'https://app.powerbi.com/links/XZaYfyNief?ctid=18a59a81-eea8-4c30-948a-d8824cdc2580&pbi_source=linkShare', status: 'present' },
            'ca': { url: 'https://app.powerbi.com/links/FynrmVHSna?ctid=18a59a81-eea8-4c30-948a-d8824cdc2580&pbi_source=linkShare&bookmarkGuid=d84d7f35-4fa1-4848-8dc5-7e98cd1bb635', status: 'present' },
            'br': { url: 'https://app.powerbi.com/links/WVLtuFaJKF?ctid=18a59a81-eea8-4c30-948a-d8824cdc2580&pbi_source=linkShare', status: 'present' }
        }}}
    },
    usPageUrl: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/49eb3be7-14c1-4f19-9f0b-4ed6283f23d1/b02661e46f062ea30e98?experience=power-bi'
};

/* ═══ BU: NBU (Neuroscience) ════════════════════════════════════════════ */

const NBU_CONFIG = {
    therapyAreas: [
        { id: 'esad', name: "ESAD (Early Symptomatic Alzheimer's Disease)" }
    ],
    brands: {
        'esad': [ { id: 'kisunla', name: 'Kisunla', logo: 'kisunla.png', note: null } ]
    },
    insightTypes: [
        { id: 'hcp', name: 'HCP Insights', subtext: 'BHT (Brand Health Tracking)', isBHT: true, iconClass: 'icon-blue', icon: '<svg viewBox="0 0 24 24"><path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>', enabled: true, comingSoon: false }
    ],
    countries: [
        { id: 'de', name: 'Germany', flagCode: 'de' }, { id: 'uk', name: 'UK', flagCode: 'gb' },
        { id: 'au', name: 'Australia', flagCode: 'au' }, { id: 'cn', name: 'China', flagCode: 'cn' },
        { id: 'br', name: 'Brazil', flagCode: 'br' }, { id: 'ae', name: 'UAE', flagCode: 'ae' }
    ],
    dashboardLinks: {
        'esad': { 'kisunla': { 'hcp': {
            'de': { url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/92b2f830-7de6-4102-a92e-f18f8a042350/58e567d0b18c7bbd02ba?experience=power-bi', status: 'present' },
            'uk': { url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/92b2f830-7de6-4102-a92e-f18f8a042350/58e567d0b18c7bbd02ba?experience=power-bi', status: 'present' },
            'au': { url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/92b2f830-7de6-4102-a92e-f18f8a042350/58e567d0b18c7bbd02ba?experience=power-bi', status: 'present' },
            'cn': { url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/92b2f830-7de6-4102-a92e-f18f8a042350/58e567d0b18c7bbd02ba?experience=power-bi', status: 'present' },
            'br': { url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/92b2f830-7de6-4102-a92e-f18f8a042350/58e567d0b18c7bbd02ba?experience=power-bi', status: 'present' },
            'ae': { url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/92b2f830-7de6-4102-a92e-f18f8a042350/58e567d0b18c7bbd02ba?experience=power-bi', status: 'present' }
        }}}
    },
    usPageUrl: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/622e8df6-f5fb-478c-a94b-9a7624f26d05/b02661e46f062ea30e98?experience=power-bi'
};

/* ═══ Master lookup ═════════════════════════════════════════════════════ */
const BU_CONFIG = { 'cmh': CMH_CONFIG, 'obu': OBU_CONFIG, 'imbu': IMBU_CONFIG, 'nbu': NBU_CONFIG };

function getFlagUrl(flagCode) { return 'https://flagcdn.com/w80/' + flagCode + '.png'; }
