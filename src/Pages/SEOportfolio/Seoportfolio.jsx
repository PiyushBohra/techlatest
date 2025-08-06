import React from "react";
import "./Seoportfolio.css";
import InnerBanner from '../../components/InnerBanner/InnerBanner'
import usePageMeta from '../../hooks/usePageMeta';

const Seoportfolio = () => {
   usePageMeta({
      title: "Tech Zenon SEO Portfolio Elevating Online Presence",
      description: "Explore Tech Zenon's SEO portfolio showcasing stunning examples of our work, driving online growth, improved visibility, and impactful results."
    });
  const portfolios = [
    {
      id: 1,
      website: "www.shipoverseas.com",
      initialdate:"Jul-2025",
      currentdate:"Sep-2024",
      location: "( Google USA )",
      category: "Logistics",
      data: [
        { id: 1, keyword: "Ship My Car from Germany to Usa", currentRank: 1, initialRank: 0 },
        { id: 2, keyword: "Car Shipping from Germany to Usa", currentRank: 1, initialRank: 0 },
        { id: 3, keyword: "Auto Transport to Europe", currentRank: 1, initialRank: 0 },
        { id: 4, keyword: "Ship My Car from France to Usa", currentRank: 1, initialRank: 0 },
        { id: 5, keyword: "Ship My Car to Belgium", currentRank: 1, initialRank: 0 },
        { id: 6, keyword: "Shipping Cars Overseas", currentRank: 1, initialRank: 0 },
        { id: 7, keyword: "Shipping a Car to Europe", currentRank: 1, initialRank: 0 },
        { id: 8, keyword: "Car Shipping to Europe", currentRank: 1, initialRank: 0 },
        { id: 9, keyword: "Car Shipping to Germany", currentRank: 1, initialRank: 0 },
        { id: 10, keyword: "Ship Car to Europe", currentRank: 1, initialRank: 0 },
      ],
    },
    {
      id: 3,
  website: "www.addoony.com",
   initialdate:"Jul-2025",
      currentdate:"Sep-2024",
  location: "( Google Qatar )",
  category: "Beauty",
  data: [
    { id: 1, keyword: "BB Hydrating Veil", currentRank: 1, initialRank: 0 },
    { id: 2, keyword: "Addoony lipstick", currentRank: 1, initialRank: 0 },
    { id: 3, keyword: "Addoony brushes", currentRank: 1, initialRank: 0 },
    { id: 4, keyword: "Addoony blender", currentRank: 1, initialRank: 0 },
    { id: 5, keyword: "Blending Eye Brushes", currentRank: 1, initialRank: 0 },
    { id: 6, keyword: "Buy Matte Lipsticks Online", currentRank: 1, initialRank: 0 },
    { id: 7, keyword: "Youmi lenses qatar", currentRank: 1, initialRank: 0 },
    { id: 8, keyword: "color corrector makeup", currentRank: 2, initialRank: 0 },
    { id: 9, keyword: "buy Gloss Lipstick online", currentRank: 3, initialRank: 0 },
    { id: 10, keyword: "eyelash extensions near me", currentRank: 3, initialRank: 0 },
  ],
    },
    {
      id: 4,
  website: "www.superbcareinchcs.com",
   initialdate:"Jul-2025",
      currentdate:"Sep-2024",
  location: "( Google USA )",
  category: "Healthcare",
  data: [
    { id: 1, keyword: "top healthcare consulting firms in Duval County", currentRank: 1, initialRank: 0 },
    { id: 2, keyword: "home health care startup consulting in Pinellas County", currentRank: 1, initialRank: 0 },
    { id: 3, keyword: "non medical home health care license in Miami Dade County", currentRank: 1, initialRank: 0 },
    { id: 4, keyword: "home health agency license in Hillsborough County", currentRank: 1, initialRank: 0 },
    { id: 5, keyword: "home care agency license in Brevard County", currentRank: 1, initialRank: 0 },
    { id: 6, keyword: "home health care license in Broward County", currentRank: 1, initialRank: 0 },
    { id: 7, keyword: "home care services license in Palm Beach County", currentRank: 2, initialRank: 0 },
    { id: 8, keyword: "home health license in Orange County", currentRank: 3, initialRank: 0 },
    { id: 9, keyword: "requirements for Medicaid in Polk County", currentRank: 5, initialRank: 0 },
    { id: 10, keyword: "medicaid online application in Brevard County", currentRank: 8, initialRank: 0 },
  ],
    },
    {
       id: 3,
  website: "www.doortodoortransport.com",
   initialdate:"Jul-2025",
      currentdate:"Sep-2024",
  location: "( Google USA )",
  category: "Auto Transport",
  data: [
    { id: 1, keyword: "door to door transport", currentRank: 1, initialRank: 0 },
    { id: 2, keyword: "door to door auto transport", currentRank: 1, initialRank: 0 },
    { id: 3, keyword: "door to door transportation", currentRank: 1, initialRank: 0 },
    { id: 4, keyword: "door to door car shipping", currentRank: 1, initialRank: 0 },
    { id: 5, keyword: "door to door transportation services", currentRank: 1, initialRank: 0 },
    { id: 6, keyword: "door to door transport company", currentRank: 2, initialRank: 0 },
    { id: 7, keyword: "door to door transport", currentRank: 7, initialRank: 0 },
    { id: 8, keyword: "door to door motorcycle shipping", currentRank: 8, initialRank: 0 },
    { id: 9, keyword: "door to door car transport", currentRank: 9, initialRank: 0 },
    { id: 10, keyword: "military car transport", currentRank: 10, initialRank: 0 }
  ],
    },
    {
       id: 4,
  website: "www.harborwestlakeroofing.com",
   initialdate:"Jul-2025",
      currentdate:"Sep-2024",
  location: "( Google USA )",
  category: "Roofing service",
  data: [
    { id: 1, keyword: "Affordable roofing services North Sun Valley", currentRank: 1, initialRank: 0 },
    { id: 2, keyword: "Trusted roofers Elysian Heights", currentRank: 1, initialRank: 0 },
    { id: 3, keyword: "Trusted roofers for small repairs in Elysian Heights", currentRank: 1, initialRank: 0 },
    { id: 4, keyword: "Affordable roofing near me in Mount Washington", currentRank: 1, initialRank: 0 },
    { id: 5, keyword: "Affordable roof repair in Mount Washington", currentRank: 1, initialRank: 0 },
    { id: 6, keyword: "Roofing services near Elysian Heights", currentRank: 2, initialRank: 0 },
    { id: 7, keyword: "Roof repair and maintenance near Lincoln Heights", currentRank: 4, initialRank: 0 },
    { id: 8, keyword: "Cypress Park roof repair specialists", currentRank: 5, initialRank: 0 },
    { id: 9, keyword: "Glassell Park roofers for repairs", currentRank: 5, initialRank: 0 },
    { id: 10, keyword: "Roof replacement Elysian Heights", currentRank: 6, initialRank: 0 }
  ],
    },
    {
      id: 5,
  website: "www.suhongstoragerack.com",
   initialdate:"Jul-2025",
      currentdate:"Sep-2024",
  location: "( Google Saudi Arabia )",
  category: "Storage Rack",
  data: [
    { id: 1, keyword: "Pallet Storage Manufacturer in Riyadh", currentRank: 1, initialRank: 0 },
    { id: 2, keyword: "Mezzanine Racking System Tel Aviv", currentRank: 1, initialRank: 0 },
    { id: 3, keyword: "Pallet Racking System in Israel", currentRank: 1, initialRank: 0 },
    { id: 4, keyword: "Industrial Racks For Storage in Jerusalem", currentRank: 1, initialRank: 0 },
    { id: 5, keyword: "Racking Pallet System in Qatar", currentRank: 3, initialRank: 0 },
    { id: 6, keyword: "Steel Metal Warehouse Racks in Kuwait", currentRank: 3, initialRank: 0 },
    { id: 7, keyword: "Industrial Pallet Racks in Riyadh", currentRank: 4, initialRank: 0 },
    { id: 8, keyword: "Cantilever Racks For Sale in UAE", currentRank: 6, initialRank: 0 },
    { id: 9, keyword: "Warehouse Racking Suppliers in Saudi Arabia", currentRank: 10, initialRank: 0 },
    { id: 10, keyword: "Industrial Racking Systems in Qatar", currentRank: 11, initialRank: 0 }
  ],
    },
    {
        id: 6,
  website: "www.provape.co.nz",
   initialdate:"Jul-2025",
      currentdate:"Sep-2024",
  location: "( Google New zealand )",
  category: "Tobacco",
  data: [
    { id: 1, keyword: "Disposable Vape in Woolston AND RANGIORA", currentRank: 1, initialRank: 0 },
    { id: 2, keyword: "Best Nicotine Salt Vape in Woolston", currentRank: 1, initialRank: 0 },
    { id: 3, keyword: "Water Pipe For Vapes", currentRank: 1, initialRank: 0 },
    { id: 4, keyword: "FROSTYBOI Nic Salts 30ml", currentRank: 1, initialRank: 0 },
    { id: 5, keyword: "Lio Boom Pod Kit 10K Puff", currentRank: 1, initialRank: 0 },
    { id: 6, keyword: "Lio Boom Pod Upto 10k Puffs", currentRank: 4, initialRank: 0 },
    { id: 7, keyword: "VAPE SHOP RANGIORA", currentRank: 4, initialRank: 0 },
    { id: 8, keyword: "Vape Shops Near Me", currentRank: 4, initialRank: 0 },
    { id: 9, keyword: "CHEAP VAPES IN RANGIORA OR NEAR ME", currentRank: 5, initialRank: 0 },
    { id: 10, keyword: "Vape Store in Woolston", currentRank: 6, initialRank: 0 }
  ],
    },
    {
       id: 7,
  website: "www.hookah-filters.com",
   initialdate:"Jul-2025",
      currentdate:"Sep-2024",
  location: "( Google USA )",
  category: "Smoking Products",
  data: [
    { id: 1, keyword: "Hookah Filter", currentRank: 1, initialRank: 0 },
    { id: 2, keyword: "Filter For Hookah", currentRank: 1, initialRank: 0 },
    { id: 3, keyword: "Filter Hookah Price", currentRank: 3, initialRank: 0 },
    { id: 4, keyword: "Filter Pipes For Hookah", currentRank: 1, initialRank: 0 },
    { id: 5, keyword: "Hookah Air Intake Filter", currentRank: 5, initialRank: 0 },
    { id: 6, keyword: "Hookah Filter Online", currentRank: 1, initialRank: 0 },
    { id: 7, keyword: "Shisha Filter", currentRank: 2, initialRank: 0 },
    { id: 8, keyword: "Hookah Filter Tips", currentRank: 3, initialRank: 0 },
    { id: 9, keyword: "Shisha Filter Tips", currentRank: 3, initialRank: 0 },
    { id: 10, keyword: "Filter For Shisha", currentRank: 1, initialRank: 0 }
  ],
    },
    {
      id: 8,
  website: "www.toppriorityhealthcare.co.uk",
   initialdate:"Jul-2025",
      currentdate:"Sep-2024",
  location: "( google.co.uk )",
  category: "Healthcare",
  data: [
    { id: 1, keyword: "Temporary Staffing in Swansea in West Glamorgan", currentRank: 1, initialRank: 0 },
    { id: 2, keyword: "healthcare staffing solutions Swansea", currentRank: 1, initialRank: 0 },
    { id: 3, keyword: "Temporary Staffing in Swansea", currentRank: 1, initialRank: 0 },
    { id: 4, keyword: "professional domiciliary care services Swansea", currentRank: 5, initialRank: 0 },
    { id: 5, keyword: "Personal care service Swansea", currentRank: 6, initialRank: 0 },
    { id: 6, keyword: "personal home care in Swansea", currentRank: 11, initialRank: 0 },
    { id: 7, keyword: "in home care service Swansea", currentRank: 11, initialRank: 0 },
    { id: 8, keyword: "Domiciliary Care Services in Swansea", currentRank: 14, initialRank: 0 },
    { id: 9, keyword: "health care services in West Glamorgan", currentRank: 14, initialRank: 0 },
    { id: 10, keyword: "respite care services Swansea", currentRank: 15, initialRank: 0 }
  ],
    },
    {
       id: 9,
  website: "www.bjhlogistics.com",
   initialdate:"Jul-2025",
      currentdate:"Sep-2024",
  location: "( Google Ghana )",
  category: "Logistics",
  data: [
    { id: 1, keyword: "Air logistics shipping service", currentRank: 1, initialRank: 0 },
    { id: 2, keyword: "Sea freight services Ghana", currentRank: 2, initialRank: 0 },
    { id: 3, keyword: "Air freight shipping services", currentRank: 2, initialRank: 0 },
    { id: 4, keyword: "Sea freight from Ghana to south africa", currentRank: 2, initialRank: 0 },
    { id: 5, keyword: "Bonded Warehouse Service Ghana", currentRank: 2, initialRank: 0 },
    { id: 6, keyword: "Air and sea freight services", currentRank: 2, initialRank: 0 },
    { id: 7, keyword: "Customs Clearance Agent Ghana", currentRank: 2, initialRank: 0 },
    { id: 8, keyword: "Logistics company from Ghana to India", currentRank: 2, initialRank: 0 },
    { id: 9, keyword: "Import and Export Service Ghana", currentRank: 2, initialRank: 0 },
    { id: 10, keyword: "Air freight forwarder Ghana", currentRank: 2, initialRank: 0 }
  ],
    },
    {
      id: 10,
  website: "www.freightforwarderservice.com",
   initialdate:"Jul-2025",
      currentdate:"Sep-2024",
  location: "( Google Singapore)",
  category: "Logistic",
  data: [
    { id: 1, keyword: "Freight Forwarder Service", currentRank: 1, initialRank: 0 },
    { id: 2, keyword: "Freight Forwarder Services", currentRank: 2, initialRank: 0 },
    { id: 3, keyword: "freight forwarders near me", currentRank: 4, initialRank: 0 },
    { id: 4, keyword: "cargo forwarding services near me", currentRank: 10, initialRank: 0 },
    { id: 5, keyword: "Freight Forwarding Services In Singapore", currentRank: 12, initialRank: 0 },
    { id: 6, keyword: "Freight Forwarding Service In Singapore", currentRank: 14, initialRank: 0 },
    { id: 7, keyword: "International Freight Forwarder Singapore", currentRank: 16, initialRank: 0 }
  ],
    },
    {
       id: 11,
       website: "www.nicecom.be",
        initialdate:"Jul-2025",
      currentdate:"Sep-2024",
       location: "( Google Belgium )",
      category: "Popup store",
      data: [
    { id: 1, "keyword": "agence pop up Dubaï", currentRank: 1, initialRank: 0 },
    { id: 2, "keyword": "popup megève", currentRank: 1, initialRank: 0 },
    { id: 3, "keyword": "événements popup stores", currentRank: 9, initialRank: 0 },
    { id: 4, "keyword": "pop up agency Dubai", currentRank: 10, initialRank: 0 },
    { id: 5, "keyword": "popup stores events", currentRank: 12, initialRank: 0 },
    { id: 6, "keyword": "Popup store Belgium", currentRank: 15, initialRank: 0 },
    { id: 7, "keyword": "popup saint-tropez", currentRank: 17, initialRank: 0 },
    { id: 8, "keyword": "pop up store design agency", currentRank: 18, initialRank: 0 }
  ],
    },
    {
      id: 12,
  website: "www.shipjoy.com",
   initialdate:"Jul-2025",
      currentdate:"Sep-2024",
  location: "( Google USA )",
  category: "Logistics",
  data: [
    { id: 1, "keyword": "Buy drop shipping miami", currentRank: 2, initialRank: 0 },
    { id: 2, "keyword": "drop shipping miami", currentRank: 2, initialRank: 0 },
    { id: 3, "keyword": "shopify 3pl fulfillment los angeles", currentRank: 4, initialRank: 0 },
    { id: 4, "keyword": "shopify 3pl los angeles", currentRank: 4, initialRank: 0 },
    { id: 5, "keyword": "drop shipping los angeles ca", currentRank: 4, initialRank: 0 },
    { id: 6, "keyword": "E-Commerce Order Fulfillment Los Angeles ca", currentRank: 5, initialRank: 0 },
    { id: 7, "keyword": "buy shopify 3pl los angeles", currentRank: 5, initialRank: 0 },
    { id: 8, "keyword": "drop shipping los angeles", currentRank: 9, initialRank: 0 }
  ],
    },

     {
      id: 13,
  website: "www.locksmithsingaporeservices.com",
   initialdate:"Jan-25",
      currentdate:"Jun-24",
  location: "( Google Singapore )",
  category: "Locksmith Services",
  data: [
    { id: 1, "keyword": "locksmith services singapore", currentRank: 2, initialRank: 0 },
    { id: 2, "keyword": "door lock opening service", currentRank: 3, initialRank: 0 },
    { id: 3, "keyword": "locksmith singapore", currentRank: 4, initialRank: 0 },
    { id: 4, "keyword": "locksmith in singapore", currentRank: 5, initialRank: 0 },
    { id: 5, "keyword": "hdb wooden door lock", currentRank: 5, initialRank: 0 },
    { id: 6, "keyword": "cheap locksmith singapore", currentRank: 7, initialRank: 0 },
    { id: 7, "keyword": "24 hour locksmith Singapore", currentRank: 9, initialRank: 0 },
    { id: 8, "keyword": "Best locksmith Singapore", currentRank: 14, initialRank: 0 }
  ],
    },
    
  ];

  return (
    <>
   <InnerBanner/>
   

    <div className="seo-portfolio-wrapper">
    
      {portfolios.map((portfolio) => (
        <div className="table-wrapper" key={portfolio.id}>
          <div className="table-border">
          <h2>
            Website: {portfolio.website} <span>{portfolio.location}</span>
          </h2>
          <p>Category: {portfolio.category}</p>
          <table className="ranking-table" style={{textAlign:'center'}}>
            <thead>
              <tr style={{textAlign:'center'}}>
                <th style={{textAlign:'center'}}>S. No</th>
                <th style={{textAlign:'center'}}>Keyword</th>
                <th style={{textAlign:'center'}}>Current Ranking<br /><span className="sub">{portfolio.initialdate}</span></th>
                <th style={{textAlign:'center'}}>Initial Ranking<br /><span>{portfolio.currentdate}</span></th>
              </tr>
            </thead>
            <tbody style={{textAlign:'center'}}>
              {portfolio.data.map((row) => (
                <tr key={row.id} style={{textAlign:'center'}}>
                  <td style={{textAlign:'center'}}>{row.id}</td>
                  <td style={{textAlign:'center'}}>{row.keyword}</td>
                  <td style={{textAlign:'center'}}>{row.currentRank}</td>
                  <td style={{textAlign:'center'}}>{row.initialRank}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Seoportfolio;
