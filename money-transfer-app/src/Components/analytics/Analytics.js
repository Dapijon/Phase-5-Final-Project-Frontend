
import React, {useState, useEffect} from 'react'
import './analytics.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserSummary from './UserSummary'
import UserAnalyticsDetails from './UserAnalyticsDetails';

const Analytics = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
  // const transactions = 
  // [{
  //   "id": 1,
  //   "first_name": "Alexis",
  //   "last_name": "Clyde",
  //   "sent": null,
  //   "received": "(688) 2710356",
  //   "amount": "$661.07",
  //   "date": "11/29/2023"
  // }, {
  //   "id": 2,
  //   "first_name": "Augustine",
  //   "last_name": "Abarough",
  //   "sent": "(967) 3258759",
  //   "received": "(786) 2522290",
  //   "amount": "$338.02",
  //   "date": "7/22/2023"
  // }, {
  //   "id": 3,
  //   "first_name": "Caressa",
  //   "last_name": "Zohrer",
  //   "sent": null,
  //   "received": "(942) 1201321",
  //   "amount": "$272.82",
  //   "date": "4/16/2023"
  // }, {
  //   "id": 4,
  //   "first_name": "Carol",
  //   "last_name": "Nuscha",
  //   "sent": "(623) 5349245",
  //   "received": "(847) 6222549",
  //   "amount": "$513.75",
  //   "date": "6/3/2023"
  // }, {
  //   "id": 5,
  //   "first_name": "Ives",
  //   "last_name": "Bleything",
  //   "sent": null,
  //   "received": "(716) 4835678",
  //   "amount": "$354.84",
  //   "date": "9/15/2023"
  // }, {
  //   "id": 6,
  //   "first_name": "Lazaro",
  //   "last_name": "Comiskey",
  //   "sent": null,
  //   "received": null,
  //   "amount": "$379.90",
  //   "date": "6/9/2023"
  // }, {
  //   "id": 7,
  //   "first_name": "Florette",
  //   "last_name": "Scipsey",
  //   "sent": null,
  //   "received": "(479) 9132656",
  //   "amount": "$885.25",
  //   "date": "10/17/2023"
  // }, {
  //   "id": 8,
  //   "first_name": "Willy",
  //   "last_name": "Walthall",
  //   "sent": "(746) 2871610",
  //   "received": "(712) 2778393",
  //   "amount": "$845.65",
  //   "date": "12/1/2023"
  // }, {
  //   "id": 9,
  //   "first_name": "Beltran",
  //   "last_name": "Dugald",
  //   "sent": null,
  //   "received": "(405) 6921108",
  //   "amount": "$404.67",
  //   "date": "4/1/2023"
  // }, {
  //   "id": 10,
  //   "first_name": "Cati",
  //   "last_name": "Kenrick",
  //   "sent": null,
  //   "received": "(506) 9313810",
  //   "amount": "$134.15",
  //   "date": "10/17/2023"
  // }, {
  //   "id": 11,
  //   "first_name": "Judd",
  //   "last_name": "Jansa",
  //   "sent": null,
  //   "received": "(356) 3162175",
  //   "amount": "$320.45",
  //   "date": "11/2/2023"
  // }, {
  //   "id": 12,
  //   "first_name": "Nicolea",
  //   "last_name": "Spofforth",
  //   "sent": null,
  //   "received": "(273) 2367199",
  //   "amount": "$266.58",
  //   "date": "3/19/2023"
  // }, {
  //   "id": 13,
  //   "first_name": "Estella",
  //   "last_name": "Abazi",
  //   "sent": "(396) 3646554",
  //   "received": "(526) 4245419",
  //   "amount": "$240.39",
  //   "date": "6/1/2023"
  // }, {
  //   "id": 14,
  //   "first_name": "Kimberlyn",
  //   "last_name": "Schade",
  //   "sent": "(268) 5112465",
  //   "received": "(401) 1853498",
  //   "amount": "$294.27",
  //   "date": "1/24/2024"
  // }, {
  //   "id": 15,
  //   "first_name": "Janela",
  //   "last_name": "Ailmer",
  //   "sent": "(716) 7359088",
  //   "received": "(604) 6133727",
  //   "amount": "$440.39",
  //   "date": "10/14/2023"
  // }, {
  //   "id": 16,
  //   "first_name": "Ansel",
  //   "last_name": "Walsh",
  //   "sent": "(440) 3496812",
  //   "received": "(826) 1543618",
  //   "amount": "$865.56",
  //   "date": "3/20/2023"
  // }, {
  //   "id": 17,
  //   "first_name": "Cathie",
  //   "last_name": "Dunlop",
  //   "sent": null,
  //   "received": "(257) 2226021",
  //   "amount": "$523.72",
  //   "date": "12/8/2023"
  // }, {
  //   "id": 18,
  //   "first_name": "Minna",
  //   "last_name": "Davydychev",
  //   "sent": null,
  //   "received": "(115) 6460396",
  //   "amount": "$101.48",
  //   "date": "11/25/2023"
  // }, {
  //   "id": 19,
  //   "first_name": "Hillary",
  //   "last_name": "Gladbach",
  //   "sent": "(978) 3602348",
  //   "received": "(372) 2672549",
  //   "amount": "$863.27",
  //   "date": "2/25/2023"
  // }, {
  //   "id": 20,
  //   "first_name": "Vail",
  //   "last_name": "Hovey",
  //   "sent": "(339) 6358116",
  //   "received": "(684) 1734988",
  //   "amount": "$405.26",
  //   "date": "9/1/2023"
  // }, {
  //   "id": 21,
  //   "first_name": "Ardeen",
  //   "last_name": "Taberner",
  //   "sent": null,
  //   "received": "(616) 9615389",
  //   "amount": "$360.79",
  //   "date": "1/12/2024"
  // }, {
  //   "id": 22,
  //   "first_name": "Graham",
  //   "last_name": "Longbottom",
  //   "sent": "(923) 7453664",
  //   "received": "(649) 7273680",
  //   "amount": "$711.12",
  //   "date": "8/18/2023"
  // }, {
  //   "id": 23,
  //   "first_name": "Alexandra",
  //   "last_name": "Raysdale",
  //   "sent": null,
  //   "received": "(637) 1336822",
  //   "amount": "$256.44",
  //   "date": "6/2/2023"
  // }, {
  //   "id": 24,
  //   "first_name": "Agata",
  //   "last_name": "Piken",
  //   "sent": null,
  //   "received": "(503) 9012436",
  //   "amount": "$765.36",
  //   "date": "8/29/2023"
  // }, {
  //   "id": 25,
  //   "first_name": "Quinn",
  //   "last_name": "Pepall",
  //   "sent": "(393) 6656339",
  //   "received": "(428) 4177875",
  //   "amount": "$775.17",
  //   "date": "12/28/2023"
  // }, {
  //   "id": 26,
  //   "first_name": "Che",
  //   "last_name": "Blissitt",
  //   "sent": "(557) 1164143",
  //   "received": "(218) 1304227",
  //   "amount": "$408.28",
  //   "date": "2/25/2023"
  // }, {
  //   "id": 27,
  //   "first_name": "Paten",
  //   "last_name": "Spadollini",
  //   "sent": null,
  //   "received": "(961) 1233212",
  //   "amount": "$530.71",
  //   "date": "12/12/2023"
  // }, {
  //   "id": 28,
  //   "first_name": "Clarabelle",
  //   "last_name": "Affleck",
  //   "sent": "(562) 6532926",
  //   "received": "(335) 2176916",
  //   "amount": "$451.21",
  //   "date": "2/22/2023"
  // }, {
  //   "id": 29,
  //   "first_name": "Arley",
  //   "last_name": "Stanistreet",
  //   "sent": "(675) 5992026",
  //   "received": "(200) 2772101",
  //   "amount": "$289.85",
  //   "date": "4/28/2023"
  // }, {
  //   "id": 30,
  //   "first_name": "Clive",
  //   "last_name": "Padula",
  //   "sent": null,
  //   "received": null,
  //   "amount": "$131.46",
  //   "date": "4/8/2023"
  // }, {
  //   "id": 31,
  //   "first_name": "Ogdan",
  //   "last_name": "Killelay",
  //   "sent": null,
  //   "received": "(120) 6264701",
  //   "amount": "$846.08",
  //   "date": "5/23/2023"
  // }, {
  //   "id": 32,
  //   "first_name": "Jeanne",
  //   "last_name": "Filippi",
  //   "sent": "(105) 2023414",
  //   "received": "(773) 9121988",
  //   "amount": "$525.64",
  //   "date": "7/13/2023"
  // }, {
  //   "id": 33,
  //   "first_name": "Kriste",
  //   "last_name": "De Paepe",
  //   "sent": null,
  //   "received": "(326) 5912733",
  //   "amount": "$929.75",
  //   "date": "3/17/2023"
  // }, {
  //   "id": 34,
  //   "first_name": "Peadar",
  //   "last_name": "Kuna",
  //   "sent": "(681) 8696359",
  //   "received": "(184) 7872941",
  //   "amount": "$675.07",
  //   "date": "5/1/2023"
  // }, {
  //   "id": 35,
  //   "first_name": "Lenard",
  //   "last_name": "Lathom",
  //   "sent": null,
  //   "received": "(663) 3625497",
  //   "amount": "$686.97",
  //   "date": "5/28/2023"
  // }, {
  //   "id": 36,
  //   "first_name": "Janella",
  //   "last_name": "Nance",
  //   "sent": null,
  //   "received": "(411) 1787239",
  //   "amount": "$787.31",
  //   "date": "3/24/2023"
  // }, {
  //   "id": 37,
  //   "first_name": "Carolina",
  //   "last_name": "Fladgate",
  //   "sent": null,
  //   "received": "(864) 1420035",
  //   "amount": "$117.85",
  //   "date": "8/16/2023"
  // }, {
  //   "id": 38,
  //   "first_name": "Kerwinn",
  //   "last_name": "Parrott",
  //   "sent": null,
  //   "received": "(962) 9603006",
  //   "amount": "$149.09",
  //   "date": "12/23/2023"
  // }, {
  //   "id": 39,
  //   "first_name": "Kimberly",
  //   "last_name": "Bottinelli",
  //   "sent": "(838) 2472005",
  //   "received": "(215) 6717369",
  //   "amount": "$818.06",
  //   "date": "11/15/2023"
  // }, {
  //   "id": 40,
  //   "first_name": "Mort",
  //   "last_name": "Keller",
  //   "sent": "(236) 5349260",
  //   "received": "(829) 9524809",
  //   "amount": "$998.46",
  //   "date": "1/31/2024"
  // }, {
  //   "id": 41,
  //   "first_name": "Martelle",
  //   "last_name": "Puckinghorne",
  //   "sent": null,
  //   "received": "(266) 4301182",
  //   "amount": "$947.33",
  //   "date": "11/26/2023"
  // }, {
  //   "id": 42,
  //   "first_name": "Yurik",
  //   "last_name": "Byrde",
  //   "sent": null,
  //   "received": "(496) 1866580",
  //   "amount": "$953.35",
  //   "date": "11/4/2023"
  // }, {
  //   "id": 43,
  //   "first_name": "Cicely",
  //   "last_name": "Cobby",
  //   "sent": "(975) 7279567",
  //   "received": "(314) 2043365",
  //   "amount": "$905.31",
  //   "date": "5/14/2023"
  // }, {
  //   "id": 44,
  //   "first_name": "Simonette",
  //   "last_name": "Gealle",
  //   "sent": null,
  //   "received": "(916) 4843858",
  //   "amount": "$810.60",
  //   "date": "2/18/2024"
  // }, {
  //   "id": 45,
  //   "first_name": "Matthaeus",
  //   "last_name": "Thiolier",
  //   "sent": null,
  //   "received": "(196) 3290977",
  //   "amount": "$484.86",
  //   "date": "10/22/2023"
  // }, {
  //   "id": 46,
  //   "first_name": "Shoshana",
  //   "last_name": "Matzke",
  //   "sent": null,
  //   "received": "(732) 5434677",
  //   "amount": "$551.14",
  //   "date": "10/3/2023"
  // }, {
  //   "id": 47,
  //   "first_name": "Marilyn",
  //   "last_name": "Goane",
  //   "sent": null,
  //   "received": "(320) 3859779",
  //   "amount": "$911.13",
  //   "date": "12/19/2023"
  // }, {
  //   "id": 48,
  //   "first_name": "Letisha",
  //   "last_name": "Ebbett",
  //   "sent": "(904) 9987510",
  //   "received": "(403) 6940203",
  //   "amount": "$124.06",
  //   "date": "3/12/2023"
  // }, {
  //   "id": 49,
  //   "first_name": "Adora",
  //   "last_name": "Brunnstein",
  //   "sent": null,
  //   "received": "(657) 1962590",
  //   "amount": "$574.77",
  //   "date": "4/10/2023"
  // }, {
  //   "id": 50,
  //   "first_name": "Spense",
  //   "last_name": "Sherred",
  //   "sent": "(971) 7326543",
  //   "received": "(463) 9218191",
  //   "amount": "$449.87",
  //   "date": "3/18/2023"
  // }]


  useEffect(() => {
    const fetchTransactions = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:5000/user/${userId}/transactions`);
            setTransactions(response.data);
            setLoading(false);
        } catch (error) {
            setError(error.response.data.error);
            setLoading(false);
        }
    };

    fetchTransactions();
}, [userId]);

  

  return (
    <>

      <Container fluid className='analytics'>
        <Row>
          <Col xs={12} md={4} className="mb-3">
            <div style={{ background: 'none' }}>
            <UserSummary />
            </div>  
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
          <h4>Details</h4>
            <UserAnalyticsDetails trans={transactions} />
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default Analytics;
