const config = {
  "property": {
    "streetAddress": "336 West Chestermere Drive",
    "city": "Chestermere",
    "cityStateZip": "Chestermere, AB T1X 1B2",
    "heroSubtitle": "Stunning waterfront home with 4-car garage, private dock, and boat lift on Chestermere Lake. Enjoy summer boating, amazing sunsets, and a resort lifestyle just minutes from Calgary. Register to receive the full Home & Neighbourhood Info Package, professional floor plan, virtual tour, and recent sales comparables.",
    "backgroundImageUrl": "https://api.typeform.com/responses/files/190bc3fe02446bc8dd3c8e77cb40279c1ee80075832428ad8cde869caf85d241/Chestermere.jfif"
  },
  "realtor": {
    "fullName": "Amy Caughlin",
    "title": "REALTOR®",
    "phone": "15874391618",
    "email": "amy@caughlinrealestate.ca",
    "bio": "A former risk manager turned Realtor, proptech co-founder, podcast host, and passionate community advocate. I help busy professionals and families find homes that truly fit their lives, while working behind the scenes to make real estate better for everyone involved. With a background in risk management, I bring a strategic lens to every transaction, ensuring my clients make informed, confident decisions. I’m also the co-founder of Jazzberry, a platform designed by realtors, for realtors, built to simplify the chaos behind the curtain so clients experience more clarity, transparency, and joy in their home journey. A proud Maritimer, I lead with authenticity, hospitality, and heart. Whether I’m running along the Bow River, adventuring in the mountains with my family, or hosting FutureRE — The Future of Real Estate, I’m always driven by curiosity, connection, and impact. My path hasn’t been linear — and I believe that’s where the magic lies. I’m here to challenge the status quo, build solutions that truly help people, and give back to the communities that raised me — especially organizations that uplift women, children, and families.",
    "photoUrl": "https://static.showit.co/800/TUEDlhwVYAO5v1iU87fE1w/264146/headshot.jpg",
    "social": {
      "facebook": "https://www.facebook.com/caughlinrealestate/",
      "instagram": "https://www.instagram.com/caughlin.realestate/",
      "website": "https://caughlinrealestate.ca/"
    }
  },
  "brokerage": {
    "name": "Greater Property Group",
    "logoUrl": "https://static.showit.co/400/I76PcfBRdfuEObejOPwzPQ/264146/gpg-no-tagline-logo-white.png",
    "address": "5940 Macleod Trl SW #500, Calgary, AB T2H 2G4"
  },
  "openHouse": {
    "eventDate": "2025-06-21",
    "bundleItems": [
      {
        "icon": "fas fa-ruler-combined",
        "text": "Professional Floor Plan"
      },
      {
        "icon": "fas fa-image",
        "text": "Listing Photos"
      },
      {
        "icon": "fas fa-people-group",
        "text": "On-Market Comparables & Recent Sales"
      }
    ]
  },
  "features": {
    "listingPrice": "$2,398,000",
    "bedrooms": 6,
    "bathrooms": 4.5,
    "homeType": "Detached home",
    "mainAttraction": "4-car garage on the lake",
    "benefits": [
      "4 car garage",
      "On the lake, great for summer boating",
      "Brand new dock and boat lift with a storage shed with electricity for summer toys."
    ],
    "keySellingFeature": "4 car garage on the lake"
  },
  "neighborhood": {
    "overview": "🌅 Living on the Lake in Chestermere\nLiving on the lake in Chestermere offers a unique blend of small-town charm and waterfront lifestyle—just 20 minutes from downtown Calgary. Here’s what makes it special:\n\n🚣 Lake Life, Every Day\nBoating, paddleboarding, kayaking, fishing—right from your backyard.\n\nChestermere Lake is a man-made lake, perfect for water sports in summer and skating or ice fishing in winter.\n\nMany lakefront homes have private docks and boat lifts.\n\n🏡 Tight-Knit Community Feel\nQuiet, safe neighbourhoods with active community events, like fireworks, boat parades, and farmers markets.\n\nGreat for families, with top-rated schools and parks nearby.\n\n🌳 Nature at Your Doorstep\nWalking and biking trails wrap around the lake.\n\nSunrises and sunsets over the water—gorgeous year-round views from your own backyard.\n\n🚗 Convenient Yet Peaceful\nEasy access to Calgary via 17th Ave SE or Stoney Trail.\n\nAll the essentials in town: groceries, cafes, schools, and health services—without the big-city rush."
  },
  "meta": {
    "pageTitlePrefix": "🏡 Amy Caughlin Open House",
    "navBrandLogoText": "OPEN HOUSE",
    "privacyPolicyLink": "https://www.welpneedthis.com"
  },
  "settings": {
    "adminWebhookUrl": "https://n8n.salesgenius.co/webhook/openhouseupdate",
    "visitorWebhookUrl": "https://n8n.salesgenius.co/webhook/openhouse",
    "confettiColors": [
      "#6187a7",
      "#f0e9d6",
      "#ffffff",
      "#83a363",
      "#d9ac68"
    ]
  },
  "modalQuestions": [
    {
      "id": "agent_status",
      "questionText": "Are you currently exploring homes with a real estate agent?",
      "options": [
        {
          "value": "committed",
          "text": "Yes, I'm committed to an agent."
        },
        {
          "value": "not_committed",
          "text": "No, I'm not committed to an agent."
        },
        {
          "value": "gathering_info",
          "text": "Just gathering information at this stage."
        }
      ]
    },
    {
      "id": "interest_level",
      "questionText": "How interested are you in properties like this?",
      "options": [
        {
          "value": "very_interested",
          "text": "Very interested, actively looking."
        },
        {
          "value": "somewhat_interested",
          "text": "Somewhat interested, keeping options open."
        },
        {
          "value": "just_browsing",
          "text": "Just browsing for now."
        }
      ]
    },
    {
      "id": "neighborhood_engagement",
      "questionText": "How do you usually enjoy the neighborhood?",
      "options": [
        {
          "value": "resident_explorer",
          "text": "I live here and love exploring locally."
        },
        {
          "value": "considering_move",
          "text": "I'm considering moving to this area."
        },
        {
          "value": "just_visiting",
          "text": "Just visiting for the open house."
        }
      ]
    },
    {
      "id": "feature_attraction",
      "questionText": "What feature attracted you to this home?",
      "options": [
        {
          "value": "design_layout",
          "text": "The design and layout."
        },
        {
          "value": "location_neighborhood",
          "text": "The location and neighborhood."
        },
        {
          "value": "home_price",
          "text": "The price of the home."
        }
      ]
    }
  ],
  "deploymentInfo": {
    "repoName": "Open-House-96",
    "repoUrl": "https://github.com/arslvn93/Open-House-96",
    "tag": "Open House 336 West Chestermere Drive",
    "siteId": "1005157497",
    "netlifySiteId": "6d943adb-055a-4e5a-830c-f597adc8d5f5",
    "netlifyUrl": "https://services.leadconnectorhq.com/hooks/KxSrsX5ZH2ZttFjyt9hW/webhook-trigger/EWFVczQeMtLq5D4IVClg"
  }
};