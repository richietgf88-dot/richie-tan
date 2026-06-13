/* ============================================================
   RICHIE TAN — real content data (richietan.com)
   Edit these arrays to update the galleries.
   ============================================================ */

var CDN = "https://images.squarespace-cdn.com/content/v1/6597ba35b9332420ffaee1b7/";

/* Squarespace CDN sizing helper */
function img(url, w) {
  if (url && url.indexOf("data:") === 0) return url;            // uploaded image
  if (url && !/squarespace-cdn\.com/.test(url)) return url;      // arbitrary external url
  var sep = url.indexOf("?") === -1 ? "?" : "&";
  return url + sep + "format=" + (w || 750) + "w";
}

/* Slot-aware <img>: returns the user's uploaded/replaced image if set,
   else the default CDN image. `slot` is a stable id like "art:3". */
/* elegant fallback for works/exhibitions still awaiting an uploaded image */
function RT_ph() {
  var s = "<svg xmlns='http://www.w3.org/2000/svg' width='800' height='1000'>" +
    "<rect width='800' height='1000' fill='#0f0f0f'/>" +
    "<rect x='26' y='26' width='748' height='948' fill='none' stroke='#c9a84c' stroke-opacity='0.30'/>" +
    "<text x='400' y='474' font-family='Georgia,serif' font-size='128' fill='#8a6f33' text-anchor='middle'>RT</text>" +
    "<text x='400' y='560' font-family='Arial,sans-serif' font-size='20' letter-spacing='6' fill='#6f6f6f' text-anchor='middle'>IMAGE COMING SOON</text>" +
    "</svg>";
  return "data:image/svg+xml;utf8," + encodeURIComponent(s);
}
function _slotDef(url, w) { return url ? img(url, w) : RT_ph(); }
function slotImg(slot, url, w, alt, extra) {
  var src = (window.RTImages ? RTImages.src(slot, _slotDef(url, w)) : _slotDef(url, w));
  return '<img loading="lazy" data-slot="' + slot + '" src="' + src + '" alt="' + (alt || "") + '"' + (extra ? " " + extra : "") + ' />';
}
function slotSrc(slot, url, w) {
  return (window.RTImages ? RTImages.src(slot, _slotDef(url, w)) : _slotDef(url, w));
}

/* ---- ABSTRACT ART ---- */
var ABSTRACT = [
  { t:"I heard them, I kept going", y:"2025", badge:"New", status:"Available", price:"RM 7,XXX", note:"Currently exhibited · HatYai, Thailand", size:"3ft x 2 ft", desc:"“If I stopped and listened to them, would I even be here?”\nThey talked. I heard them all.\nTheir doubts, their warnings, their logic.\nBut I chose the noise inside me — louder than their words.\nThis piece is about that choice. About walking through the shadow,\nnot to prove them wrong, but to prove myself right.", u:CDN+"376a4cc1-34c1-495b-a4ae-e167aa7565fa/IMG_2665.JPG" },
  { t:"The Whispers Of Unity", y:"2025", badge:"New", status:"Unavailable", price:"RM 8,XXX", u:CDN+"4fa5b078-8b3c-4417-9aa9-f19765483e71/IMG_2657.JPG" },
  { t:"Where Peace Awaits", y:"2025", status:"Available Now", price:"RM 11,888", u:CDN+"54c72d67-fb3b-4840-b533-c6676574698a/IMG_2664.JPG" },
  { t:"There's Beauty In Changes", y:"2025", badge:"New", status:"Unavailable", price:"RM 6,XXX", u:CDN+"9710a959-6f74-40b7-8857-7f6c949276a4/IMG_2659.JPG" },
  { t:"Breakthrough", y:"2024", status:"Sold in 2024", price:"RM 4,377", u:CDN+"de11052c-93c2-4c81-afda-10f530d81e46/IMG_1894.jpeg" },
  { t:"Harmony In Haven", y:"2024", status:"Donated to Charity", price:"RM 5,000", u:CDN+"1753250077939-BY2JBESQK294JFCR2LZ3/IMG_3120.jpg" },
  { t:"Reinvention", y:"2024", status:"Available", price:"RM 8,XXX", u:CDN+"6d4e1645-d0c5-44df-9cd1-02bf577623b0/IMG_2661.JPG" },
  { t:"Women's Success — Int'l Women's Day", y:"2024", status:"Sold in 2024", price:"RM 6,XXX", u:CDN+"5a950919-ae80-4d4a-9c75-47aee7e86326/IMG_1892.jpeg" },
  { t:"A New Chapter", y:"2023", status:"Sold in 2024", price:"RM 3,166", u:CDN+"0e5256ac-62c6-400b-9d97-708b79b09823/IMG_1330.JPG" },
  { t:"Dancing Dragonfly", y:"2024", status:"Available", price:"RM 6,888", u:CDN+"d56ed64a-d6ec-49eb-ae1f-bb7c1e285654/IMG_2053.JPG" },
  { t:"For whatever it's worth", y:"2024", status:"Unavailable", price:"RM 8,888", u:CDN+"358a06d3-c54e-4ba4-9b89-8b61a24bf14c/IMG_1847.JPG" },
  { t:"Wine Dances With Colors", y:"2024", status:"Available", u:CDN+"f1c54fe5-9335-4caf-95f6-8a8c5c0094f2/IMG_2052.jpg" },
  { t:"Shine In Rain", y:"2024", status:"Available", u:CDN+"5e24a78b-d9ab-4c6e-b6c0-5d949bfd4ccd/IMG_2055.JPG" },
  { t:"Virtual Glory @ JW Marriott", y:"2024", status:"Available", price:"RM 2,288", note:"with Fire Painting", u:CDN+"1716960337686-1PN66957CZ8M5YBNNWBD/IMG_9207.jpg" },
  { t:"Life Goes On", y:"2023", status:"Available", price:"RM 6,XXX", note:"ft. Tay Cheah & 3 others", u:CDN+"ba7f1500-046a-4996-89e5-3bb3aa081383/IMG_6821.jpg" },
  { t:"Nature's Touch @ Golden Hour", y:"2024", status:"Available", u:CDN+"bb9a5018-b7a0-41ad-b27c-cae52e84955f/IMG_0955.jpeg" },
  { t:"Eccentric Pleasures", y:"2024", status:"Available", u:CDN+"7bbc24f3-17fc-4f87-a319-a08b33dee96a/IMG_2140.jpeg" },
  { t:"Stark Inspiration", y:"2022", status:"Available", u:CDN+"1709024932713-JJQDBA5B697USXRVS5PV/IMG_0985.jpg" },
  { t:"Tune In Elements", y:"2023", status:"Available", u:CDN+"e287dd02-594d-4f3a-a8ee-e2a57ab0fa1b/IMG_1750.JPG" },
  { t:"Emerging from Darkness", y:"2022", status:"Available", u:CDN+"96337797-75fe-4d3d-8e42-50cd037db15d/IMG_0723.JPG" },
  { t:"Guardian Angels", y:"2023", status:"Available", u:CDN+"33d50a61-8d02-4543-a3eb-4a38d5525ed7/IMG_1746.JPG" },
  { t:"Unyielding", y:"2022", status:"", u:CDN+"305ef75e-244b-43c0-b43b-9b8ad6f2ad32/IMG_1753+2.JPG" },
  { t:"Opportunities", y:"2023", status:"Available", u:CDN+"144f469f-4f5c-4220-aa66-9683fbb4466a/IMG_1743.JPG" },
  { t:"10 Years Ago", y:"2023", status:"Sold in 2024", u:CDN+"07070d0b-7b7d-4548-a252-524a2880c6f3/IMG_1737.JPG" },
  { t:"10 Years Later", y:"2023", status:"Sold in 2024", u:CDN+"1d90dbf6-c6be-4174-b563-47bcdcb9cc5b/IMG_1741.JPG" },
  { t:"Majestic 2.0", y:"2023", status:"Sold in 2024", price:"RM 2,688", u:CDN+"455ba6d6-d639-41e8-9187-0db79427f348/IMG_0945.JPG" },
  { t:"Thank You Past, Welcome Future", y:"2023", status:"Sold in 2024", u:CDN+"e20ecc14-d506-4a24-865c-fb689da64938/IMG_1752.JPG" },
  { t:"Harsh Reality", y:"2022", status:"Sold in 2024", u:CDN+"c2dc5a56-fcbc-4be9-9a84-04349c634b57/IMG_0953.JPG" },
  { t:"Relieved", y:"2023", status:"Sold in 2023", u:CDN+"43a9a679-1824-41f5-944b-6deea0c16299/IMG_1206.jpg" },
  { t:"Beauty", y:"2023", status:"Sold in 2023", u:CDN+"1709027080624-L9E7STF1MI01O39P4S9R/IMG_1844.jpg" },
  { t:"Latex", y:"2022", status:"Sold in 2023", u:CDN+"7e66c0f2-43ec-4fe5-acd5-36ac713e36c0/IMG_0944.JPG" },
  { t:"Untitled", y:"2022", status:"Sold in 2023", u:CDN+"ce9518ae-ace8-408a-9c38-be5eb47b011e/IMG_1079.JPG" },
  { t:"Majestic", y:"2022", status:"Sold in 2023", u:CDN+"684981ca-5bd9-4821-954a-6166f55fd41b/IMG_0951.JPG" },

  /* ---- 2026 COLLECTION — appended to keep existing indices stable; shown first via render order.
     Edit titles / prices / status and upload each image in the Content Studio. ---- */
  { t:"The Origin", y:"2026", badge:"2026", status:"Available", price:"Price on enquiry", note:"2026 Collection", new2026:true, u:"",
    desc:"They counted me out. I came back louder.\nThe first work of the 2026 collection — proof that a pause is not an ending." },
  { t:"The Quiet Fire", y:"2026", badge:"2026", status:"Available", price:"Price on enquiry", note:"2026 Collection", new2026:true, u:"",
    desc:"On finding the breath to begin again — momentum rebuilt from stillness." },
  { t:"Numb", y:"2026", badge:"2026", status:"Available", price:"Price on enquiry", note:"2026 Collection", new2026:true, u:"", medium:"Crystal Black Quartz &amp; Acrylic &amp; Mixed Media on Canvas",
    desc:"What cracked was never the foundation. A study in repair as its own kind of strength." },
  { t:"Still Here", y:"2026", badge:"2026", status:"Available", price:"Price on enquiry", note:"2026 Collection", new2026:true, u:"",
    desc:"The noise inside, answered. Built to drown out every voice that said stop." },
  { t:"We Are Living In The Prison Of Our Own Creations", y:"2026", badge:"2026", status:"Available", price:"Price on enquiry", note:"2026 Collection", new2026:true, u:"",
    desc:"Survival, rendered. The quiet defiance of simply remaining." },
  { t:"", y:"2026", badge:"2026", status:"Available", price:"Price on enquiry", note:"2026 Collection", new2026:true, u:"",
    desc:"The closing statement of the comeback collection — rising, deliberately, from the ash." }
];

/* ---- CRYSTAL ABSTRACT ART ---- */
var CRYSTAL_CROSSOVER = [
  { t:"Ocean Embrace", y:"2024", size:"101.2 × 76.2 cm", artist:"Richie Tan × Leina Lei",
    desc:"A celebration of the creative synergy between artist and jeweller, marking the launch of an exclusive new collection — the magical interplay of artistic vision and exquisite craftsmanship.",
    u:CDN+"895808b1-b343-4c27-9323-7c357b3c834b/RICHIE+X+LEINA.+JPEG.jpg" },
  { t:"A Silient Horizon", y:"2024", size:"3 ft × 4 ft", artist:"Richie Tan × Leina Lei", status:"Donated to Charity",
    desc:"Evokes the soothing, enveloping nature of the sea — a serene, flowing composition of deep blue, sea-foam green and soft white. Shown at STEG Hotel, KL.",
    u:CDN+"bc5d0d9d-2d69-4919-b68c-7ea2e18afeb0/DSC_1894.jpg" }
];
var CRYSTAL_RICHIE = [
  { t:"The Whispers of Crystals", y:"2024", size:"3 ft × 2 ft", artist:"Richie Tan", status:"Available",
    desc:"In this mesmerising artwork, the owl emerges as a symbol of ancient wisdom and silent insight, guiding us through the mysteries of the night. Crafted with acrylics, resin, and white quartz crystal chips, the piece blends the realms of the physical and the spiritual, inviting viewers to explore the deeper meaning behind the strokes and materials. The cool blue and pristine white hues evoke the serenity of a starry night sky, while the metallic lines anchor the ethereal energy, representing the delicate balance between the earthly and the divine.",
    u:CDN+"e0027a5c-ff2a-4e38-b6d6-6b866414c290/DSC_1905.jpg" },
  { t:"The One", y:"2024", size:"3 ft × 2 ft", artist:"Richie Tan", status:"Available",
    u:CDN+"a2ded997-2193-448b-825c-e170cb45383c/DSC_1915.jpg" }
];
var CRYSTAL_LEINA = [
  { t:"Aurora of Happiness", y:"2024", size:"122 × 91 cm", artist:"Leina Lei",
    desc:"Fluid brushstrokes and luminous highlights convey movement and peacefulness — a sense of wonder and calm celebrating the harmony and joy found in nature's most enchanting light displays.",
    u:CDN+"8664d2ec-338e-43ae-97dc-d03ee627b028/DSC_1879.jpg" }
];

/* ---- EXHIBITIONS (shown as "Exhibitions"; key stays "projects") ----
   Each may carry: desc (story), video (YouTube/Vimeo/Instagram URL). */
var PROJECTS = [
  { t:"Mid-Autumn Charity Night", sub:"by Miss Cosmo World · 2025", yr:"2025",
    desc:"“A charity art auction showcasing works valued up to RM20,200.”\n\nA truly remarkable night celebrating the union of art, culture and philanthropy at the Mid-Autumn Charity Night — an honour to connect with creative minds, entrepreneurs and industry leaders who share the same vision: using art as a force for good. A sincere thank you to the Miss Cosmo World organisers and partners who made this night of elegance, compassion and creativity possible.",
    works:[
      { t:"Moonlight", cn:"月光", img:CDN+"f2c4f94e-355a-4280-9e67-5caf2cf77475/IMG_6433.jpeg",
        story:"Moonlight is about the calm glow of the Mid-Autumn Festival — the full moon as a symbol of reunion and harmony. It's not literal, but more about the feeling of light in darkness, reminding us that no matter the distance, we're still connected under the same sky." },
      { t:"Eternal Tides", cn:"永恒之潮", img:CDN+"b7f93a8a-c2da-4aab-b5a6-7ea395a81f6b/IMG_6373.jpeg",
        story:"Eternal Tides speaks about the rhythm of existence — the ebb and flow of life, like unseen currents that connect us all. It's a reminder of how light and depth always move together, and how silence can carry infinite motion. It's less about what you see literally, and more about feeling that greater rhythm we are all a part of." }
    ],
    video:"", imgs:[ CDN+"d3d3dade-3bb9-4eac-8d33-dbe518ae83d4/IMG_6374.jpeg", CDN+"8574f52a-8ab8-4642-b118-1a0c9bd11aa5/IMG_6372.jpeg", CDN+"f7420b35-1714-4610-8749-3e1ba122bc93/IMG_6386.jpeg" ], u:CDN+"55eea198-bd06-4461-b45b-8d1fb48587ea/WhatsApp+Image+2025-09-28+at+03.09.50.jpeg" },
  { t:"Shan Night Charity", sub:"Charity Gala · 2024", yr:"2024",
    desc:"SHAN NIGHT 慈善晚宴 2024 — an evening of philanthropy shared with Hong Kong TVB star Raymond Wong (黃浩然). Together they auctioned two of Richie's paintings, raising RM 15,000 in aid of charity — a night where art and celebrity met in support of a common cause.",
    video:"",
    imgs:[ CDN+"837a0323-ece6-4bac-b7e0-e4363bf94b19/IMG_3177.jpg", CDN+"71673028-b505-4aed-a6df-aafeec37d6b0/IMG_3072.jpeg", CDN+"91894f71-d114-48be-8f2f-2bb054769158/IMG_3331.jpeg", CDN+"f3ae5bf0-e49d-43e4-9712-e5a9f2509b9c/IMG_3328.jpeg", CDN+"ef2dbd38-8418-4f88-8f42-8aea4bfc3bb7/IMG_3330.jpeg", CDN+"e0352f6a-89ac-4fcc-8af8-f826fc28f9a5/b92b2689-64d4-4304-aa36-152a3a2637ab.jpeg", CDN+"5b2543a6-1b9f-4907-b482-aaedfe88a85c/IMG_3185.jpeg", CDN+"8893bf48-1178-4381-bafd-6cf9d06419f3/IMG_2995.jpeg", CDN+"a4d46384-71dc-4427-a4e4-323b1e38717d/IMG_2984.jpeg", CDN+"d49e9ff2-a345-4684-8760-983e7286615d/IMG_2994.jpeg", CDN+"a194216a-b14d-48a0-ad72-fcca9673ebdb/IMG_2987.jpeg", CDN+"a01f8857-dead-4fc4-8b71-0215dc3f9ae6/c876502c-1b0f-4c55-89e0-53121d13c00c.jpeg", CDN+"5e399810-1967-4965-8b0d-8f8bc06676b9/IMG_2948.jpeg", CDN+"2491cc3a-c909-4d6b-89c8-68c114ba5f2e/IMG_2946.jpeg", CDN+"6bf0aff4-2930-4600-a1f1-5967cd95a823/IMG_2945.jpeg", CDN+"019c4acf-a746-4331-8f6d-87ae97965d6b/IMG_3158.jpeg", CDN+"fed7cfae-acbd-4c99-9f66-716f42d3f6fe/IMG_3152.jpeg", CDN+"a786fec3-7578-4651-88cd-388bda2a8427/IMG_3133.jpeg", CDN+"4a32925e-315a-4ecb-abe6-7a88f0210dd2/IMG_3114.jpeg", CDN+"28341a10-b557-4e15-a8df-bc053d9d6ffb/IMG_3116.jpeg", CDN+"c3146f2f-2ab4-4a31-9804-b703580e5b65/IMG_3097.jpeg", CDN+"c50e301e-5cac-40b5-8ea8-eafd56d82698/IMG_3108.jpeg", CDN+"377c003c-3dbf-4240-86c2-1c44b5efeb18/IMG_3086.jpeg", CDN+"e1b1c207-4853-4c29-8c42-66fd8dcf6029/IMG_3064.jpeg", CDN+"488164c4-8d7c-442e-84be-d6f7525f9ee8/IMG_3060.jpeg", CDN+"ae9a5a3f-a87f-4a0e-9b86-84de1f3bf194/IMG_3050.jpeg", CDN+"dde71152-6132-4038-9ae7-e9f08fc7d12d/214c8b8c-0573-4df9-9dc7-d0978867fad6.jpeg", CDN+"0db5a3dc-d463-4a82-b758-7f233c79eb2a/IMG_2817.jpeg" ],
    u:CDN+"0e36957f-2fb5-4469-9fa0-f14a5b77a4bc/IMG_3181.jpeg" },
  { t:"17th Asia Art Alliance", sub:"Hatyai, Thailand · 2025", yr:"2025",
    desc:"Selected for the 17th edition of the Asia Art Alliance group exhibition in Hatyai, Thailand — a confident regional debut placing Richie's work among artists across Asia. “I couldn't make it to Hatyai personally, but proudly received a certificate.”",
    video:"",
    imgs:[ CDN+"fc74faee-1d85-4e4a-9adb-b3c79864ae33/WhatsApp+Image+2025-08-18+at+12.15.10.jpg", CDN+"37e1fb71-8809-42f8-b223-25e492704f25/IMG_2665.png" ],
    u:CDN+"a20d73a5-f3b5-4565-8daa-666de63898c4/WhatsApp+Image+2025-05-25+at+21.47.15.jpeg" },
  { t:"Art of Smoke", sub:"Cigar Secret · Bukit Damansara · 2025", yr:"2025",
    desc:"“Art Of Smoke by Richie Tan.” In a world where art speaks in silence and cigars whisper through smoke, this night stood at the intersection of two sophisticated realms. Art Of Smoke is more than a theme — it is a philosophy, a sensory journey where each brushstroke dances with the curl of smoke, and every inhale invites a deeper appreciation of life's finer details. A VIP solo exhibition and live performance at the Cigar Secret lounge, where Richie painted with cigars — ash, tobacco and a hairdryer his only tools — building an abstract canvas before a full house.",
    video:"videos/art-of-smoke.mp4",
    imgs:[ CDN+"7dbdf938-22c0-4433-a223-3cb8280faac6/IMG_4577.jpeg", CDN+"ec808225-b14e-4013-b946-fc68ac5869e1/be1a36dd-3610-4665-a100-f0e82c52294e.jpeg", CDN+"6215358c-0971-4499-867f-36a0c61fb063/IMG_6169.jpeg", CDN+"1903a9b0-e3f7-415a-a906-3a6766498101/PHOTO-2025-04-04-13-58-39+2.jpeg", CDN+"2541e8c8-a196-4583-af9f-25904dbeb401/PHOTO-2025-04-04-15-13-51.jpeg", CDN+"a581f4a8-08a7-43fc-9b36-861c91a01c57/PHOTO-2025-04-04-13-58-37+2.jpeg", CDN+"bb48afce-c0a9-4a13-aa6b-777e92d26073/PHOTO-2025-04-04-15-13-50.jpeg", CDN+"45311b0d-22bf-4c89-9574-e40186129500/PHOTO-2025-04-04-15-13-53+2.jpeg", CDN+"353ea3ba-84b8-48d5-bf4d-e76385bada78/PHOTO-2025-04-04-15-13-54.jpeg", CDN+"2b9f35c2-e3ce-4944-98b8-9cb8ca30caf2/PHOTO-2025-04-04-15-08-51.jpeg", CDN+"3df84121-dbba-43f6-8ba1-2fa72997fa4a/PHOTO-2025-04-04-14-01-41+2.jpeg", CDN+"6ecf7bed-756c-4377-a4e9-4d043c781512/PHOTO-2025-04-04-13-58-39.jpeg", CDN+"3acf8bcb-85ad-4df2-8c66-425ac63a94b6/PHOTO-2025-04-04-13-58-38.jpeg", CDN+"1801d478-be51-4f03-a4de-431c100dbd37/PHOTO-2025-04-04-13-22-08.jpeg", CDN+"d175f971-0135-46ca-acc2-b62b18f63cb4/PHOTO-2025-04-04-13-58-36+2.jpeg", CDN+"f08a2b72-e578-49af-af02-a325e492c1c1/PHOTO-2025-04-04-15-13-52+2.jpeg", CDN+"40a51ece-0c61-4b75-9494-cfcd34ad5aee/PHOTO-2025-04-04-15-14-07.jpeg", CDN+"ee7af409-57ef-404a-8bab-cd33fa9d0dac/IMG_6040.jpeg", CDN+"828a6d7b-b67f-42e2-b342-7fd4c0e303b5/IMG_6103.jpeg", CDN+"af8b059e-f7ef-430b-b90f-6091c2f14986/IMG_6140.jpeg", CDN+"eddb075a-c683-4949-838f-85426cb3c512/IMG_6153.jpeg", CDN+"1b274daf-c76e-4c6c-a1f7-44ba79f0f889/IMG_6179.jpeg" ],
    u:CDN+"31cc42a3-03c3-4ff0-b166-f052c441db5b/Screenshot+2025-04-07+at+4.38.09+PM.png",
    partners:[
      { tier:"Main Partners", logos:[ CDN+"864fad29-f346-4810-aab8-5c449f41bb08/TG+Ent+White.png", CDN+"157710c8-0933-45ac-9dc3-1c9419f00e34/FA+DeKairos+Logo+02-2.png", CDN+"1fcf387d-d1de-4e16-968c-bba5925df25f/buotique+fine+wine+.jpg" ] },
      { tier:"Supporting Partners", logos:[ CDN+"8342453d-5cb3-4194-8144-f11bcad311f5/avancee.jpg", CDN+"e29ddc18-222a-4343-b82b-ca66b5b1f6c3/Screenshot+2024-09-18+at+1.37.55+PM.png", CDN+"e61ca0f4-4cc9-43bd-9d5e-deea5a24a365/IMG_0948.jpg", CDN+"48fb825a-38c3-4d5b-9dc6-4a4286295c25/theonlygift.jpg" ] },
      { tier:"Media Partners", logos:[ CDN+"fa4c60f9-6939-49b7-ac92-692a8093b091/IMG_4284.png", CDN+"9ebe7d8a-ba30-4d2a-8e19-920d0552aa99/WhatsApp+Image+2025-02-28+at+14.43.48.jpeg", CDN+"057c6423-bb1c-4ea2-9efb-8b803805b60d/like+media.png" ] }
    ] },
  { t:"STEG Hotel", sub:"Kuala Lumpur · 2024", yr:"2024",
    desc:"“Crystalline Moonlight by Richie Tan” — a theme that embodies the mystical power of moonlight, channeling its radiant energy through the brilliance of crystals. It captures the balance between darkness and light, nature and art, creating an atmosphere of pure elegance and captivating intensity. A private exhibition and live performance, presented with Vana Fine Jewellery.",
    video:"videos/steg-hotel.mp4",
    imgs:[ CDN+"65b8eb76-74f3-4bae-9f79-8341a308dfbc/DSC_1949.jpg", CDN+"f7b7c3e9-5145-482c-8148-49f35503cd2e/DSC_2173.jpg", CDN+"b3e731d4-faf5-44e9-b539-f7bcdedb6816/EDITED+1.jpeg", CDN+"31a9dd6b-0fd2-4104-b322-2fc3c12890a4/DSC_1953.jpg", CDN+"f75cc90c-f822-4d5e-b3cf-d35d9d50c8f8/DSC_1959.jpg", CDN+"cd0cb627-3278-4d43-82ce-ad683d478d9b/DSC_1967.jpg", CDN+"7d320abf-68d9-4b20-9888-2b9f370c17e3/DSC_1930.jpg", CDN+"d6d848b7-bc65-4094-ba22-1b0dd0e3757e/DSC_1986.jpg", CDN+"8c490b41-4442-4f30-a6a8-d300e47d03f2/DSC_1994.jpg", CDN+"99e91bd6-2c54-4496-ba08-2a635bc6f1da/DSC_1995.jpg", CDN+"2c074ef1-9d40-4f40-a58f-6aaa2e4a0955/DSC_1996.jpg", CDN+"0e174eb2-a1a0-46f6-a6b7-7fb4cbd64007/DSC_2000.jpg", CDN+"185a4159-b7cc-470c-98c3-9b5d17386773/DSC_2003.jpg", CDN+"61634cf6-e3d1-4aaa-b71b-575ec41198cb/DSC_2061.jpg", CDN+"c8dbf49e-222d-4c8a-a3a6-8394fa96673d/DSC_2066.jpg", CDN+"57dd8ba9-5b7d-4546-bf38-5b6e5cfc6a4e/DSC_2073.jpg", CDN+"97ea1a9d-3841-4b9c-9637-789628623763/DSC_2131.jpg", CDN+"202d5c45-c354-41a9-b724-97fe3ec887fe/DSC_2133.jpg", CDN+"a2e938e9-f018-4b79-b7c5-992d3e54d146/DSC_2135.jpg", CDN+"9c062167-736a-44a2-bd04-b010c7e6986f/DSC_2137.jpg", CDN+"c3a174ad-42eb-45eb-8af1-a8b55cff79b6/DSC_2121.jpg", CDN+"a7752871-6475-4b23-9566-e60a981d376d/DSC_2096.jpg", CDN+"0fe72886-d383-4ff2-9374-8f2ace7f47d0/DSC_2173.jpg", CDN+"3cbcb2fe-95a7-4048-afd3-7056a483b420/EDITED+2.jpeg", CDN+"bd731919-6564-4fc1-9dbd-b00e9a8e1cb5/EDITED+3.jpeg", CDN+"3bd146c3-a6de-4fef-87ff-6c0479c8ce44/DSC_2160.jpg", CDN+"525389b9-4794-4bcb-b8dc-7ba9b5e7a107/DSC_2170.jpg", CDN+"836cf700-6908-4b05-b065-8827f4e3d1b4/DSC_2251.jpg", CDN+"689db923-f08f-43a6-aa37-b04d2b54d3b9/EDITED.jpeg" ],
    u:CDN+"1726608733015-I952IONUT8HKB09GCDPG/Screenshot+2024-09-18+at+5.30.50+AM.jpg",
    partners:[
      { tier:"Main Organiser · Vana Fine Jewellery", logos:[ CDN+"020544e6-3a1f-453e-bc84-75c49c836eed/Vana+Fine+Jewellery+-+Logo+GOLD+mark.png" ] },
      { tier:"Food Partners", logos:[ CDN+"3a111051-a6b4-483c-9db9-ea990c1d7b4d/Screenshot+2024-09-18+at+1.38.03+PM.png", CDN+"e29ddc18-222a-4343-b82b-ca66b5b1f6c3/Screenshot+2024-09-18+at+1.37.55+PM.png", CDN+"094a0b35-ed73-40bf-9145-30d64ff15c77/WhatsApp+Image+2024-09-18+at+08.40.28.jpeg", CDN+"0cea65e5-58a3-496e-a9f1-ed4ab34524ac/TG+Ent+White.png" ] }
    ] },
  { t:"JW Marriott Hotel", sub:"Kuala Lumpur · 2024", yr:"2024",
    desc:"“Virtual Glory by Richie Tan” — a celebration of Richie Tan's incredible journey from scratch, showcasing the power of perseverance and innovation in an art career. It inspires others to embrace the limitless possibilities of the digital age and pursue their own paths to success. A private solo exhibition with live performance in the JW Marriott ballroom.",
    video:"videos/jw-marriott.mp4",
    imgs:[ CDN+"431b34b6-f43c-4c1e-9a09-34f26bf24ee6/IMG_1897.jpeg", CDN+"bb19cd6b-6848-41c6-8765-83f0e55843cb/FCD5EB7C-791A-4000-AEF7-1D20FC9435FC.jpeg", CDN+"df6155bd-75c6-4b9c-a8f9-c206ebcc2bbb/IMG_9157.jpeg", CDN+"584b6f41-c49b-4799-8866-fc1b1c75a5ca/IMG_9206.jpeg", CDN+"c833ab78-010a-4f02-b891-22b8e9395e8c/IMG_9189.jpeg", CDN+"e1b78c9c-741d-4f5b-ab4e-eb5bcc8d2e17/A3ED4553-5FFB-456F-925A-3C876CA221A8.jpeg", CDN+"a54a9302-57b3-4732-bb0e-79f9a91ef0e5/64B3A1E0-AF9D-4D00-A7A7-A1BE9D3634DE.jpeg", CDN+"0a3526e3-10e3-423e-89b4-16fa23a0c9c5/935E1A36-89C4-4ACE-96D4-7E9B504721F1.jpeg", CDN+"c245be48-928c-42b2-b793-24b60bcc3d91/IMG_9181.jpeg", CDN+"179b8a01-439b-4e0e-af61-65bd2edb592e/DD3EC00D-7D40-4876-A3F0-3CB62E13504C.jpeg", CDN+"99f02c44-5896-4c27-8322-16e648eb4f22/2FFF143E-7113-4F8E-BD39-CD845D6FB905.jpeg", CDN+"bb009a4d-0429-4f9d-aebc-a8f9d4adae59/IMG_9185.jpeg", CDN+"ead389e1-32d5-4048-9381-8bf2d4b80c76/IMG_9182.jpeg", CDN+"f8118630-9b32-4972-9877-9ad8afb513e7/BEE4FD01-4B3F-47D9-B0E4-FD3C58A3DDAC.jpeg", CDN+"efdc57a5-5790-488e-b3c1-6921229efd85/7C9BD350-BAA5-4C38-9B2A-1DBBC7C410B2.jpeg", CDN+"82912de2-c123-4ead-b4ef-5bbd00516074/D35A3B13-20DD-496B-A61D-1835B146448A.jpeg", CDN+"21cb8561-8f4f-4e2f-ae09-adf4a334fa20/IMG_9224.jpeg", CDN+"e3b13f4d-18e8-4164-9498-c4431a3f5ea2/IMG_9213.jpeg", CDN+"36ec59f7-eb52-444e-8a8e-c409d138627c/IMG_9212.jpeg", CDN+"c1ed64a9-e882-4cf6-a74d-1e9da191c707/IMG_9211.jpeg", CDN+"ba5af4c5-7dc9-40ad-bea6-258f7c70c78f/IMG_9201.jpeg", CDN+"5ff61f80-d3d7-41a3-8221-6feaac8bdbc8/IMG_9255.png", CDN+"eecef0d1-612a-4d67-b725-60ede2cbc903/IMG_9173.jpeg", CDN+"71ce795b-86e9-4b17-9d14-6a075d04ec74/IMG_9175.jpeg", CDN+"3428ee30-3cf4-4af5-b9fa-54c719699458/IMG_9194.jpeg", CDN+"7434a10a-92ca-4e4a-8e8f-300730685be0/IMG_9119.jpeg", CDN+"3b8c78c9-3a3b-4ee1-b0fc-a5263150fc11/IMG_9183.jpeg", CDN+"e2b8102c-75d0-4366-a78e-470d5820b29b/IMG_9178.jpeg" ],
    u:CDN+"1711071299051-0KS97BFOV5CWTZLI62S6/IMG_1897.jpeg" },
  { t:"GeoWine Nation", sub:"Pavilion Elite, KL · 2024", yr:"2024",
    desc:"“Golden Hour by Richie Tan” — the Golden Hour exhibition marks the fulfilment of a lifelong dream. It honours not just the high points of a career, but the personal milestones, the resilience through tough times, and every small victory along the way. Each golden hour signifies a moment of victory and achievement in life's journey. A private solo exhibition and live performance at GeoWine Nation, Pavilion Elite — abstraction paired with fine wine for an intimate audience of collectors.",
    video:"",
    imgs:[ CDN+"4c2dc207-bdba-4179-9be8-b063ffd3e803/IMG_0948.jpeg", CDN+"e3f1fc60-88ea-4a22-acb5-0f48e96189fa/IMG_1260.jpeg", CDN+"584b9ba3-e6f5-4523-b748-43016b05a302/e7b399ca-e57d-4887-932e-750a497d3de9.jpeg", CDN+"206c6a77-b10c-4fcb-902a-4849f81847b9/4450c2fc-864c-4fb7-ba84-c36563062ae1.jpeg", CDN+"2a84864d-7c73-4889-93c9-37bc98922026/EBA0CA29-5B6D-474F-BCB1-143887C3A6AC.jpeg", CDN+"586dfba3-ab50-442b-85bd-a80fb1355221/380c1e9b-7670-474f-b7da-a57fdb93911a.jpeg", CDN+"5dbc17d4-ab38-4a2c-8991-0af56b7f4ec7/dc245411-a4aa-4561-9483-3731397c333e.jpeg", CDN+"441f0712-f8cf-4a47-8c3a-266a366682ed/fe17195c-53dd-4d97-b5da-d8ef15888f60.jpeg", CDN+"bd25a716-1f69-42e2-b04d-687dae69ced5/27025dde-7b99-40ce-afe8-9092780624ae.jpeg", CDN+"36b2d09c-cb2a-4751-aa2e-745543705985/206eb28f-4b26-44f7-9857-2233ea75d351.jpeg", CDN+"6f29be04-d933-4cda-8684-2cc48b922eb2/7c9f59bf-7960-4779-821e-66c2d30b2db2.jpeg", CDN+"031e06ea-65a1-47ee-b045-4d0c13180f01/IMG_0953.jpeg", CDN+"bcc8d82e-79be-4f63-b5cd-cf3e88773fa8/c2e2650e-49a0-4621-bf7b-9045eec1dbe2.jpeg", CDN+"6374722b-f9ce-44b3-8cec-23367fedac7d/DSC09629.jpeg", CDN+"a9e05917-c97d-4924-97bb-522d12508214/DSC09647.jpeg", CDN+"36a7fd97-405e-40ba-88f8-5ef6aadfbacc/DSC09630.jpeg", CDN+"d106884c-7a80-4d24-938d-f9ddf1dfe276/DSC09652.jpeg", CDN+"7125d40c-3ffa-4f50-9dab-ac571f06a8ca/IMG_1572.jpeg", CDN+"50ef5527-7a1c-42bd-9324-c4979d65bedf/IMG_1567.jpeg", CDN+"d469a1ab-1e69-4e32-9b25-c5cbb28832bb/IMG_1570.jpeg", CDN+"ac1b8b1a-4ff0-49f0-b736-291a4ff2fbf2/IMG_1566.jpeg", CDN+"55a621d3-bdf9-4fd4-81a7-72aa63575b15/IMG_1559.jpeg", CDN+"7a4ae455-82fc-43a4-9770-da2bbd23b4ce/C193EE1C-5C22-4555-9835-1040D38C2547.jpeg", CDN+"e1979b68-aa1d-4262-9b9f-ee80c449fb99/IMG_1247.jpeg", CDN+"0b01e6d1-5f93-4c3d-9121-d03776de1412/IMG_1240.jpeg", CDN+"508528d2-7357-4600-a032-5e53910fda38/IMG_0818.jpeg", CDN+"37d1b2a4-b352-421a-bbb8-e2199cf12ac2/88bd5edb-493c-4173-b053-ca7eb9e9a435.jpeg" ],
    u:CDN+"1719998678298-ABJYTKGCPUONNNYDZGJ8/IMG_0948.jpg" },
  { t:"Vineyard", sub:"TTDI, Kuala Lumpur · 2024", yr:"2024",
    desc:"“Art & Wine by Richie Tan” — an emerging artist making waves in the art world, his unique style and creative vision captivating audiences. With his passion for art and wine, an unforgettable experience: a whole new sensation that opens up your appreciation for art & wine. A private solo exhibition with wine tasting at Vineyard TTDI, the work unveiled across an evening of tasting, conversation and live creation.",
    video:"",
    imgs:[ CDN+"912af76d-efde-467c-9368-790f61afcc28/IMG_4693.JPG", CDN+"9652a881-25c3-42a5-be36-4b34f342057c/IMG_4696.JPG", CDN+"85b85d90-3953-4594-861a-9ef3e9085e91/IMG_4701.JPG", CDN+"e2f4498a-177f-4ae2-b04b-a38f6c3f89ee/IMG_4703.JPG", CDN+"5fc28269-8989-460f-9ce3-7e67a6c4430b/IMG_4709.JPG", CDN+"8531e16b-a2e7-4671-a941-a53e379aa58e/IMG_4721.JPG", CDN+"ed2c2c76-db24-4a84-b312-d578f861a493/IMG_4724.JPG", CDN+"e9d06b9d-d279-4707-aaf8-d0453c73a22f/IMG_4731.JPG", CDN+"4372ef76-503a-45b8-8188-3d3356346694/IMG_4726.JPG", CDN+"bac1f9e6-a87d-4261-ae19-446006f95e1b/IMG_4750.JPG", CDN+"5b1c5392-c38b-43bd-bc3c-eed4d9fc99fc/IMG_4746.JPG", CDN+"6cb85932-020e-411e-9ebc-342945ceb295/IMG_4752.JPG", CDN+"afa119e9-55ad-4b9e-a53d-e05286665976/IMG_4753.JPG", CDN+"d0ee5850-ee31-411a-a053-a2ac163fd0c5/IMG_4757.JPG", CDN+"2a7a0da2-815e-42c7-8e86-92452fed59d9/IMG_4758.JPG", CDN+"4d2c5d69-933b-4a57-b532-b48f54a308bc/IMG_4764.JPG", CDN+"0348ee42-1069-4dd2-861f-405fb1e28e8a/IMG_4766.JPG", CDN+"4fa03660-d8a2-4650-a3d2-f4502a92e62d/IMG_4770.JPG", CDN+"9c4e3065-02ae-4333-8a3e-d1be0f9cbb51/IMG_4771.JPG", CDN+"e6fc15d3-9bc0-4fa6-b798-c1ae57feee07/IMG_4773.JPG", CDN+"d69cd7e2-da12-4d3b-82e2-c743448646fc/IMG_4774.JPG", CDN+"bd5531bd-e376-4dd7-8e09-70d7238c7738/IMG_4783.JPG", CDN+"2af2de9d-0930-439e-8d00-d221fea24e8f/IMG_4779.JPG", CDN+"13290fc5-bdae-4da4-8a23-bf40130d04d1/IMG_4786.JPG", CDN+"ec2727f5-d1da-4146-8cf2-189f7c32b48f/IMG_4790.JPG", CDN+"07c36860-1e0c-485d-b1f3-b0a3d99612bc/IMG_4806.JPG", CDN+"798108a0-e1f5-47d7-b3c6-d8edb4882456/IMG_4811.JPG", CDN+"7aad616b-062f-4570-8cd7-2530c65a928a/IMG_4814.JPG", CDN+"4e8dce95-7500-4b33-bd96-b0b98ebdfc5b/IMG_4820.JPG", CDN+"25910d44-d21f-4985-b5e2-a2eb0c9a1c94/IMG_4822.JPG", CDN+"1e07ac07-d507-41ff-8020-83ca70087c8d/IMG_4827.JPG", CDN+"ffd55f3a-05df-4f15-9f2d-e3629a0dc9bb/IMG_4832.JPG", CDN+"6984a1b2-c614-4dda-a91f-3894e106e736/IMG_4841.JPG", CDN+"2b2b116b-ac28-4d18-9a97-1d9360b6c8ae/IMG_4846.JPG", CDN+"6ceb2c17-0fad-4bfd-8691-e207084bd06c/IMG_4856.JPG", CDN+"3b4dc599-cb5c-4020-804a-9703ac5124c4/IMG_4857.JPG", CDN+"fe3ade58-c8f2-48e0-8d83-5ee55a78253a/IMG_4878.JPG", CDN+"13b3f60f-d56d-4d99-ab51-1c5bd3a39721/IMG_4879.JPG", CDN+"63f13def-6efd-43e7-a463-ddd2dac80a9c/IMG_4880.JPG", CDN+"8a8e0b82-2403-4643-b875-d867f40144c4/IMG_4881.JPG", CDN+"38bea331-c7cf-47da-a1a6-4c4453cf85af/IMG_4883.JPG", CDN+"48a2b8a0-617a-4b6d-a3ed-611852826563/IMG_4884.JPG", CDN+"5d2634ea-ff10-48de-bf68-2bdb8bd7f1c0/IMG_4891.JPG", CDN+"a8114972-83de-4fcb-9456-517c197e4530/IMG_4893.JPG", CDN+"73ab0b99-6b10-430d-90ad-f0bcf23a4498/IMG_4894.JPG", CDN+"5ae707c4-68b5-4e5a-b87e-e56ea749c9bb/IMG_4896.JPG", CDN+"89d1dfba-5479-4c92-94ad-03780dba9a36/IMG_4899.JPG", CDN+"31dfab7b-a66a-4b9a-8fcc-174b2e31e964/IMG_4900.JPG" ],
    u:CDN+"1714556796860-3FS5DZX4GWRT9ZWFYHVQ/IMG_4697.JPG" },
  { t:"Your Rich Friend's Apartment Bar", sub:"Petaling Jaya · 2023", yr:"2023",
    desc:"“For What It's Worth by Richie Tan” — introducing the 1st multi-sensory art concept in Malaysia. Richie's first private solo exhibition, staged in a Petaling Jaya apartment bar where the paintings were experienced alongside sound, scent and atmosphere.",
    video:"",
    imgs:[ CDN+"50733a3d-a9ee-400c-b277-a896a550bc05/PHOTO-2023-11-12-17-27-32+3.jpg", CDN+"a25c967b-ed7c-4360-bd71-533f5ad4d938/PHOTO-2023-11-12-17-28-00+2.JPG", CDN+"50bde1e2-bc72-4da7-959c-7a51e042fe5b/PHOTO-2023-11-12-17-28-20.jpg", CDN+"11c5339e-9a84-4e17-a54d-3b9209fa8217/PHOTO-2023-11-12-17-28-51.jpg", CDN+"f1c8de6d-1694-4a03-ae23-12494b9ef36d/PHOTO-2023-11-12-17-28-52+2+2.JPG", CDN+"ec16bce5-af59-4afe-99ba-4308337e384f/PHOTO-2023-11-12-17-32-32+2.JPG", CDN+"10900d8f-16f7-4e22-9371-dbfacf77d8ec/PHOTO-2023-11-14-00-34-52.jpg", CDN+"443e5e8e-e4a8-42a3-a3e3-170a94034f2e/Screenshot+2023-12-07+at+7.18.19+PM.png", CDN+"070b2ff2-6db2-421a-b7c6-c9813e34cb9d/PHOTO-2023-11-12-17-32-33+7.JPG", CDN+"9b525ad8-d060-4019-9fd6-7fb03c88c949/PHOTO-2023-11-12-01-06-59+2.jpg", CDN+"433ed89d-bf88-4d44-ab54-81ee4eddf6e9/PHOTO-2023-11-12-17-32-33+10.JPG", CDN+"5d9b496b-6766-4444-ad0d-d6568a172532/PHOTO-2023-11-12-17-33-58+3.JPG", CDN+"857a05df-5b82-4da3-b850-9ddc64822eae/PHOTO-2023-11-12-17-33-58.JPG", CDN+"3d3370c0-b4ca-41ed-bc81-e5545ec7f4e9/PHOTO-2023-11-14-00-34-34.jpg", CDN+"c55d602e-f8c1-4a3e-bd60-de3e18fa6563/PHOTO-2023-11-14-00-34-37.jpg", CDN+"60611837-c718-4e7f-a473-dc11eabe7ec9/PHOTO-2023-11-12-01-07-02+2.jpg", CDN+"3731c66f-cc53-4f58-bb17-091b0c9da4c3/Screenshot+2023-12-07+at+7.18.30+PM.png", CDN+"c631488c-9a79-4aa1-84d9-0a30107417e4/Screenshot+2023-12-08+at+4.53.55+PM.png", CDN+"ef923eb6-b7f7-42b3-804c-2c7e77c0e5e3/Screenshot+2023-12-08+at+4.54.11+PM.png", CDN+"9a49b77d-82e1-4595-b22e-2de36552f65e/IMG_6909.PNG", CDN+"ef0d2cbc-6be6-421a-93d0-c844a7fa5f83/IMG_1486.jpeg", CDN+"59c90c0e-d831-4e4b-bdcc-6b4a76853458/402EDA2A-51E8-44F7-A8C1-12DF92552B29.jpg", CDN+"9f4b9b2b-fba1-4145-9c6f-e024e53d712a/819052b1-b457-4a94-b39b-073b259ad1f3.jpg", CDN+"1b9ec35f-64ee-4ced-b7c4-af225e7af66d/cc42ca0c-c39c-4b41-a349-a60d26599186.jpg" ],
    u:CDN+"1711071422169-N4A4IF7BJ5F4S3AF88QE/PHOTO-2023-11-12-17-32-32+2.JPG" },

  /* ---- 2026 COMEBACK SOLO EXHIBITION — appended to keep ids stable; shown first via render order.
     Edit the title / venue / story and upload the hero image + gallery in the Content Studio. ---- */
  { t:"A New Vintage - The Comeback", sub:"Chateau Dionne · 2026", yr:"2026", new2026:true, video:"videos/a-new-vintage.mp4",
    u:"assets/anewvintage/h1.jpg",
    imgs:[
      "assets/anewvintage/h2.jpg","assets/anewvintage/h3.jpg","assets/anewvintage/n4.jpg","assets/anewvintage/09.jpg","assets/anewvintage/10.jpg",
      "assets/anewvintage/02.jpg","assets/anewvintage/01.jpg","assets/anewvintage/n5.jpg","assets/anewvintage/h4.jpg","assets/anewvintage/08.jpg",
      "assets/anewvintage/n3.jpg","assets/anewvintage/04.jpg","assets/anewvintage/06.jpg","assets/anewvintage/n2.jpg","assets/anewvintage/05.jpg","assets/anewvintage/07.jpg",
      "assets/anewvintage/11.jpg","assets/anewvintage/03.jpg","assets/anewvintage/n1.jpg","assets/anewvintage/12.jpg","assets/anewvintage/13.jpg"
    ],
    desc:"For almost a year, Richie disappeared. After the relentless pace of exhibition after exhibition, he stepped back from the noise entirely — no shows, no audiences, no performances. A long, deliberate silence spent alone with the work, questioning whether he still wanted any of it.\n\nThis is the night he answered. A New Vintage marks Richie's return — an intimate evening of wine and live art at Chateau Dionne, and proof that the time away was never an ending but a deepening. Painting in real time, he poured wine across raw canvas and worked it with breath, brush and bare hands, conjuring abstract works as the room watched in silence. The colours are richer now, the gestures more certain — a year of stillness, rendered in paint.\n\nBetween the performances came a paired fine-dining menu — caviar tartlets, prawn capellini, pan-seared salmon and rosemary chicken — closing on a Chateau Dionne soufflé. Not a relaunch, but a homecoming: the comeback rendered in person, in full, and entirely on his own terms.",
    partners:[
      { tier:"Presented at · Venue", logos:[ "assets/anewvintage/chateau-dionne-logo.jpg" ] }
    ] }
];

/* ---- PRESS ---- */
var PRESS = [
  { outlet:"In Real Life", quote:"From State Basketball Player to Artist: How M'sian Richie Tan Defied a Conventional Career.", tag:"Feature", yr:"2025", link:"https://inreallife.my/from-state-basketball-player-to-farmer-to-artist-how-msian-richie-tan-defied-a-conventional-career/", u:CDN+"55172154-699c-4c9d-94ad-ad597456a0da/Screenshot+2025-05-01+at+8.17.31+AM.png" },
  { outlet:"Free Malaysia Today", quote:"Smoke and strokes — Richie Tan uses cigars to create striking artwork.", tag:"Feature · Age 24", yr:"2025", link:"https://www.freemalaysiatoday.com/category/leisure/2025/04/17/smoke-and-strokes-richie-tan-uses-cigars-to-create-striking-artwork", u:CDN+"ba82a04d-3286-4cee-9cfc-d907b5680958/IMG_2500.jpeg" },
  { outlet:"China Press 中国报", quote:"风尚 · 抽象艺术领我走出心囹圄 — featured at age 23.", tag:"Feature · Age 23", yr:"2024", link:"https://www.chinapress.com.my/20241129/%E9%A3%8E%E5%B0%9A-%E6%8A%BD%E8%B1%A1%E8%89%BA%E6%9C%AF-%E9%A2%86%E6%88%91%E8%B5%B0%E5%87%BA%E5%BF%83%E5%9B%B9%E5%9C%84/", u:CDN+"6f33ccd9-8646-4e45-8223-72986fd20ebf/Screenshot+2024-12-02+at+5.43.43+PM.jpg" },
  { outlet:"Shan Night Charity", quote:"A charity evening shared with Hong Kong TVB star Raymond Wong 黄浩然.", tag:"Event", yr:"2024", link:"https://www.facebook.com/share/p/14TtByyp8k/", u:CDN+"c6c35c40-b4fc-4864-b9c4-4c638bc6530e/WhatsApp+Image+2024-11-24+at+23.16.25+%281%29.jpg" },
  { outlet:"Free Malaysia Today", quote:"Fiery Richie aspires to be Malaysia's Jackson Pollock.", tag:"Feature · Age 22", yr:"2023", link:"https://www.freemalaysiatoday.com/category/leisure/2023/11/26/fiery-richie-aspires-to-be-malaysias-jackson-pollock/", u:CDN+"dce96373-fcf6-4087-89ad-f75560678876/Screenshot+2024-12-02+at+5.57.21+PM.png" },
  { outlet:"KL Happenings", quote:"Featured among Kuala Lumpur's emerging cultural voices at age 23.", tag:"Feature · Age 23", yr:"2024", link:"https://klhappenings.com/?p=4922", u:CDN+"9311b4e7-932f-468e-8e90-ddab66b85b81/Screenshot+2024-07-21+at+1.40.31+AM.png" }
];

/* ---- PORTFOLIO (foundational figurative + transitional works).
   Each entry has an editable image slot (pfig:/pabs:) — upload in the
   Content Studio or via live edit. Captions mirror the originals. ---- */
var PORTFOLIO_FIGURATIVE = [
  { t:"Profile", m:"Charcoal", p:"Study", u:"assets/portfolio/p05.jpg" },
  { t:"Rose", m:"Charcoal", p:"Study", u:"assets/portfolio/p06.jpg" },
  { t:"Reaching Hands", m:"Charcoal", p:"Study", u:"assets/portfolio/p02.jpg" },
  { t:"Hands & Heart", m:"Mixed Media", p:"Study", u:"assets/portfolio/p03.jpg" },
  { t:"Heart & Arrow", m:"Graphite", p:"Study", u:"assets/portfolio/p13.jpg" },
  { t:"Clockwork Heart", m:"Watercolour & Colour Pencil", p:"Study", u:"assets/portfolio/p04.jpg" },
  { t:"Geometric Rose", m:"Gouache", p:"Still Life", u:"assets/portfolio/p14.jpg" },
  { t:"Rose in Hands", m:"Colour Pencil", p:"Study", u:"assets/portfolio/p11.jpg" },
  { t:"Hooded Portrait", m:"Graphite", p:"Portrait", u:"assets/portfolio/p08.jpg" },
  { t:"Tears", m:"Ink & Charcoal", p:"Study", u:"assets/portfolio/p09.jpg" },
  { t:"Portrait in Blue", m:"Watercolour", p:"Portrait", u:"assets/portfolio/p26.jpg" },
  { t:"Hooded Figure", m:"Pencil", p:"Sketch", u:"assets/portfolio/p30.jpg" },
  { t:"Still Life Collage", m:"Mixed Media", p:"Collage", u:"assets/portfolio/p07.jpg" },
  { t:"Rose & Glass", m:"Mixed Media", p:"Collage", u:"assets/portfolio/p22.jpg" },
  { t:"Rose, Many Media", m:"Mixed Media", p:"Coursework", u:"assets/portfolio/p21.jpg" },
  { t:"Vase & Blooms", m:"Mixed Media", p:"Collage", u:"assets/portfolio/p17.jpg" },
  { t:"Vase Studies", m:"Pastel & Graphite", p:"Studies", u:"assets/portfolio/p20.jpg" },
  { t:"Flower Studies", m:"Oil Pastel & Charcoal", p:"Studies", u:"assets/portfolio/p19.jpg" },
  { t:"Flowers & Form", m:"Mixed Media", p:"Studies", u:"assets/portfolio/p18.jpg" },
  { t:"Portrait Collage", m:"Charcoal & Colour Pencil", p:"Collage", u:"assets/portfolio/p23.jpg" },
  { t:"Expressions", m:"Mixed Media", p:"Portrait", u:"assets/portfolio/p24.jpg" },
  { t:"In Frustration", m:"Painting & Collage", p:"Portrait", u:"assets/portfolio/p25.jpg" },
  { t:"In Disguise", m:"Graphite", p:"Series", u:"assets/portfolio/p27.jpg" }
];
var PORTFOLIO_ABSTRACT = [
  { t:"Crimson Burst", m:"Acrylic on Canvas", p:"Abstract", u:"assets/portfolio/p12.jpg" },
  { t:"Scarlet", m:"Acrylic on Canvas", p:"Abstract", u:"assets/portfolio/p34.jpg" },
  { t:"Red Bloom", m:"Acrylic on Canvas", p:"Abstract", u:"assets/portfolio/p31.jpg" },
  { t:"Red Drift", m:"Acrylic on Canvas", p:"Abstract", u:"assets/portfolio/p33.jpg" },
  { t:"Red Seal", m:"Acrylic on Canvas", p:"Abstract", u:"assets/portfolio/p10.jpg" },
  { t:"Black & Red", m:"Acrylic on Canvas", p:"Abstract", u:"assets/portfolio/p15.jpg" },
  { t:"Grey Static", m:"Acrylic on Canvas", p:"Abstract", u:"assets/portfolio/p32.jpg" },
  { t:"Eighty-Eight", m:"Acrylic on Canvas", p:"Abstract", u:"assets/portfolio/p16.jpg" },
  { t:"Blue Field", m:"Acrylic on Canvas", p:"Abstract", u:"assets/portfolio/p28.jpg" },
  { t:"Red & Blue", m:"Acrylic on Canvas", p:"Abstract", u:"assets/portfolio/p29.jpg" },
  { t:"In the Studio", m:"Action Painting", p:"Process", u:"assets/portfolio/p01.jpg" }
];

/* ---- PARTNERS & SPONSORS (editable; upload each logo in the Content Studio) ---- */
var PARTNERS_COLLAB = [
  { name:"Leina Lei", kind:"Collaborating Artist", note:"Crystal Abstract crossover collection" },
  { name:"Vana Fine Jewellery", kind:"Crystal Atelier", note:"Natural crystals set into the works" }
];
var PARTNERS_VENUES = [
  { name:"JW Marriott Hotel", kind:"Host Venue", note:"Kuala Lumpur" },
  { name:"STEG Hotel", kind:"Host Venue", note:"Kuala Lumpur" },
  { name:"Pavilion Elite", kind:"Host Venue", note:"GeoWine Nation · KL" },
  { name:"Vineyard TTDI", kind:"Host Venue", note:"Kuala Lumpur" },
  { name:"Cigar Secret", kind:"Host Venue", note:"Bukit Damansara" },
  { name:"Confetti KL", kind:"Event Partner", note:"Mid-Autumn Charity Gala" },
  { name:"Asia Art Alliance", kind:"Exhibition Alliance", note:"17th Edition · Hatyai" },
  { name:"Miss Cosmo World", kind:"Charity Partner", note:"2025 Charity Night" },
  { name:"GeoWine Nation", kind:"Event Partner", note:"Pavilion Elite" },
  { name:"Your Rich Friend's", kind:"Host Venue", note:"Petaling Jaya" }
];

/* ---- SPONSORS (2026 comeback; upload each sponsor logo in the Content Studio) ---- */
var PARTNERS_SPONSORS = [
  { name:"Presenting Sponsor", kind:"Presenting Sponsor", note:"2026 Comeback" },
  { name:"Beverage Partner", kind:"Beverage Partner", note:"Live Performance" },
  { name:"Hospitality Partner", kind:"Hospitality Partner" },
  { name:"Media Partner", kind:"Media Partner" }
];

/* ---- PARTNERS & SPONSORS — single mixed logo wall (imported from richietan.com).
   Each has a default `logo` URL; upload/replace or add/remove any in edit mode. ---- */
var PARTNERS_ALL = [
  { name:"GeoWine Nation", logo:CDN+"eba29b6a-db2e-4965-8018-e66c62cf85a0/IMG_0948.jpg" },
  { name:"Asia Art Alliance", logo:CDN+"1a6cceb3-8d64-4c34-983c-296dff861a32/Logo.png" },
  { name:"Like Media", logo:CDN+"8845a2d2-2e43-49ae-997a-d5a66e14b1da/like+media.png" },
  { name:"TG Entertainment", logo:CDN+"c6e1ff5f-e385-4b56-93f4-9e0f9a614b10/TG+Ent+White.png" },
  { name:"DeKairos", logo:CDN+"b6575cb7-b895-43e0-b671-1fe30c701430/FA+DeKairos+Logo+02-2.png" },
  { name:"Boutique Fine Wine", logo:CDN+"025c6742-a822-4570-a837-7136c6bdf111/buotique+fine+wine+.jpg" },
  { name:"World of Buzz", logo:CDN+"5507df26-3783-4d42-8cde-f0c954c25a28/WhatsApp+Image+2025-02-28+at+14.43.48.jpeg" },
  { name:"Vana Fine Jewellery", logo:CDN+"5d85b51d-21af-4f86-9de7-263aec4589e9/Vana+Fine+Jewellery+-+Logo+GOLD+mark.png" },
  { name:"Wine Plug", logo:CDN+"758bd854-bcac-4159-a921-0582a76cdcbf/IMG_1899.jpg" },
  { name:"OnlyDental", logo:CDN+"a3a9fdae-cc84-4857-8558-af6f7e2ee195/WhatsApp+Image+2024-06-12+at+21.05.37.jpeg" },
  { name:"White on White", logo:CDN+"790f4333-8608-4369-b6cc-fd14d0c58fbc/WhatsApp+Image+2024-06-14+at+15.59.42+%281%29.jpeg" },
  { name:"Zenzox", logo:CDN+"54a6e6af-a1c2-46ae-8a86-63a4e0b92da7/zenxoz.jpg" },
  { name:"AfterOne", logo:CDN+"b83f937a-6619-4613-979b-0f5bbb42f320/WhatsApp+Image+2023-12-09+at+5.29.57+PM.jpeg" },
  { name:"Taiki AutoSpa", logo:CDN+"2f02be34-499e-4d69-88dd-6071a8338a19/WhatsApp+Image+2024-06-12+at+20.35.32.jpeg" },
  { name:"LumiSkin", logo:CDN+"ba7e6ff4-37d0-4fdb-a73c-471aa58d4967/IMG_3503+2.PNG" },
  { name:"13th Avenue Beauty", logo:CDN+"1461a1c2-fc08-4a97-bc9e-d538a035d4a7/avancee.jpg" }
];

/* ---- status -> class ---- */
function statusClass(s) {
  if (!s) return "";
  s = s.toLowerCase();
  if (s.indexOf("sold") > -1) return "sold";
  if (s.indexOf("charity") > -1 || s.indexOf("donated") > -1) return "charity";
  if (s.indexOf("unavailable") > -1) return "unavailable";
  if (s.indexOf("available") > -1) return "available";
  return "";
}

/* ---- collection registry (for the detail lightbox) ---- */
var COLLECTIONS = {
  abstract: ABSTRACT,
  projects: PROJECTS,
  crystal: [].concat(CRYSTAL_CROSSOVER, CRYSTAL_RICHIE, CRYSTAL_LEINA)
};

/* ============================================================
   CONTENT OVERRIDES (edited via editor.html, stored per-browser)
   Keyed by "collection:index" → { size, desc, price, status }
   ============================================================ */
var RT_OV_KEY = "rt_overrides_v1";
function RT_baked(kind) {
  return (window.__SITE_CONTENT && window.__SITE_CONTENT[kind]) || {};
}
function RT_mergeBaked(kind, ls) {
  // baked baseline + per-browser localStorage on top (localStorage wins per key)
  var baked = RT_baked(kind), out = {};
  for (var b in baked) if (baked.hasOwnProperty(b)) out[b] = baked[b];
  for (var k in ls) if (ls.hasOwnProperty(k)) out[k] = ls[k];
  return out;
}
function RT_loadOverrides() {
  var ls = {};
  try { ls = JSON.parse(localStorage.getItem(RT_OV_KEY) || "{}"); } catch (e) { ls = {}; }
  return RT_mergeBaked("text", ls);
}
function RT_applyOverrides() {
  var ov = RT_loadOverrides();
  function apply(arr, coll) {
    for (var i = 0; i < arr.length; i++) {
      var o = ov[coll + ":" + i];
      if (!o) continue;
      for (var k in o) {
        if (o.hasOwnProperty(k) && o[k] != null && o[k] !== "") arr[i][k] = o[k];
      }
    }
  }
  apply(ABSTRACT, "abstract");
  apply(COLLECTIONS.crystal, "crystal");
  apply(PROJECTS, "projects");
}

/* ============================================================
   DISPLAY ORDER (drag-to-reorder, saved per browser via arrange.js)
   Keyed by render-name -> [originalIndex, originalIndex, ...].
   Slots/overrides stay keyed by ORIGINAL index, so reordering
   never disturbs uploaded images or text edits.
   ============================================================ */
var RT_ORDER_KEY = "rt_order_v1";
function RT_loadOrder() {
  var ls = {};
  try { ls = JSON.parse(localStorage.getItem(RT_ORDER_KEY) || "{}"); } catch (e) { ls = {}; }
  return RT_mergeBaked("order", ls);
}
/* default = newest (2026) first, otherwise natural order */
function RT_defaultOrder(arr) {
  var nw = [], rest = [];
  for (var i = 0; i < arr.length; i++) { (arr[i] && arr[i].new2026 ? nw : rest).push(i); }
  return nw.concat(rest);
}
function RT_applyOrder(name, arr) {
  var def = RT_defaultOrder(arr);
  var saved = RT_loadOrder()[name];
  if (!saved || !saved.length) return def;
  var seen = {}, out = [];
  for (var i = 0; i < saved.length; i++) {
    var k = saved[i];
    if (typeof k === "number" && k >= 0 && k < arr.length && !seen[k]) { seen[k] = 1; out.push(k); }
  }
  for (var j = 0; j < def.length; j++) { if (!seen[def[j]]) { seen[def[j]] = 1; out.push(def[j]); } }
  return out;
}

/* ---- render an artwork card ---- */
function artCard(a, i, coll, realIdx) {
  coll = coll || "abstract";
  var cls = statusClass(a.status);
  var grp = cls === "available" ? "available" : (cls === "sold" || cls === "charity") ? "archive" : "other";
  var badge = a.badge ? '<span class="badge new">' + a.badge + '</span>' : '';
  var price = a.price
    ? '<div class="price ' + (cls === "sold" ? "sold" : "") + '">' + a.price + '</div>'
    : '<div class="price">Enquire</div>';
  var statusLine = a.status ? '<div class="status ' + cls + '">' + a.status + '</div>' : '';
  var note = a.note ? ' · ' + a.note : '';
  var delay = ["", "d1", "d2"][i % 3];
  var idx = (realIdx == null) ? i : realIdx;
  return (
    '<a class="art-card reveal ' + delay + '" data-coll="' + coll + '" data-idx="' + idx + '" data-ord="' + idx + '" data-statusgroup="' + grp + '" data-enquire="' + a.t + (a.y ? ', ' + a.y : '') + '">' +
      '<div class="frame ratio-45">' +
        badge +
        slotImg("art:" + idx, a.u, 750, a.t) +
        '<div class="veil"><span class="enquire">View Details →</span></div>' +
      '</div>' +
      '<div class="art-meta">' +
        '<div><div class="t">' + a.t + '</div>' +
        '<div class="sub">' + (a.y || "") + note + '</div>' + statusLine + '</div>' +
        price +
      '</div>' +
    '</a>'
  );
}

/* ---- render a crystal feature row (alternating) ---- */
function crystalRow(a, i, realIdx) {
  var side = i % 2 === 1;
  var idx = (realIdx == null) ? i : realIdx;
  var meta =
    '<div class="reveal ' + (side ? 'order-img2' : 'd1') + '" style="display:flex;flex-direction:column;justify-content:center;">' +
      '<span class="kicker-num">' + a.artist + '</span>' +
      '<h3 class="h-md" style="margin-top:16px;color:var(--cream);">' + a.t + '</h3>' +
      (a.size || a.y ? '<div class="sub" style="font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--txt-faint);margin-top:14px;">' + [a.size, a.y].filter(Boolean).join(" · ") + '</div>' : '') +
      (a.desc ? '<p class="lead" style="margin-top:22px;">' + a.desc + '</p>' : '') +
      (a.status ? '<div class="status available" style="margin-top:18px;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);">' + a.status + '</div>' : '') +
      ( /sold|donat/i.test(a.status || "")
        ? ''
        : '<a href="contact.html?artwork=' + encodeURIComponent(a.t) + '" class="text-link" style="margin-top:30px;">Enquire on this Work <span class="line"></span></a>') +
    '</div>';
  var fig =
    '<div class="reveal-img figure ' + (side ? 'order-img' : '') + '" data-coll="crystal" data-idx="' + idx + '" style="aspect-ratio:4/5;cursor:zoom-in;">' +
      slotImg("crystal:" + idx, a.u, 1000, a.t) +
      '<span class="cap">View Details</span>' +
    '</div>';
  return '<div class="split" style="align-items:stretch;margin-bottom:clamp(50px,8vw,120px);">' + (side ? meta + fig : fig + meta) + '</div>';
}

/* ---- render exhibition card (links to its own detail page) ---- */
function projectCard(p, i, realIdx) {
  var idx = (realIdx == null) ? i : realIdx;
  var delay = ["", "d1", "d2"][i % 3];
  return (
    '<a class="art-card reveal ' + delay + '" data-ord="' + idx + '" href="exhibition.html?id=' + idx + '">' +
      '<div class="frame ratio-32">' +
        '<span class="badge">' + p.yr + '</span>' +
        slotImg("proj:" + idx, p.u, 1000, p.t) +
        '<div class="veil"><span class="enquire">View Exhibition →</span></div>' +
      '</div>' +
      '<div class="art-meta">' +
        '<div><div class="t">' + p.t + '</div><div class="sub">' + p.sub + '</div>' +
        (p.desc ? '<p class="muted" style="margin-top:12px;font-size:14px;line-height:1.6;">' + (p.desc.length>120?p.desc.slice(0,118)+'…':p.desc) + '</p>' : '') +
        '</div>' +
      '</div>' +
    '</a>'
  );
}

/* ---- render a foundational (text catalogue) card ---- */
function portfolioCard(a, i, realIdx, prefix) {
  var idx = (realIdx == null) ? i : realIdx;
  var pre = prefix || "pfig";
  var delay = ["", "d1", "d2"][i % 3];
  return (
    '<figure class="pf-card reveal ' + delay + '" data-ord="' + idx + '" title="' + a.t + '">' +
      '<div class="pf-frame">' + slotImg(pre + ":" + idx, a.u || "", 1000, a.t) + '</div>' +
      '<figcaption class="pf-cap">' +
        '<span class="pf-t">' + a.t + '</span>' +
        '<span class="pf-meta">' + a.m + (a.p ? ' · ' + a.p : '') + '</span>' +
      '</figcaption>' +
    '</figure>'
  );
}

/* ---- render partner / sponsor logo card. slotPrefix "pall" = mixed logo wall (logo only) ---- */
function partnerCard(p, i, slotPrefix, realIdx) {
  var idx = (realIdx == null) ? i : realIdx;
  var slot = slotPrefix + ":" + idx;
  var up = window.RTImages && RTImages.get(slot);
  var src = up ? up : (p.logo ? img(p.logo, 600) : null);
  var initials = (p.name || "").replace(/[^A-Za-z0-9 ].*$/, "").split(/\s+/).slice(0,2).map(function(w){return w.charAt(0);}).join("");
  var logo = src
    ? '<img class="pl-logo" data-slot="' + slot + '" src="' + src + '" alt="' + (p.name || "") + '" />'
    : '<div class="pl-mono" data-slot="' + slot + '">' + (initials || "—") + '</div>';
  var delay = ["", "d1", "d2"][i % 3];
  var logoOnly = (slotPrefix === "pall");
  return (
    '<div class="partner-card' + (logoOnly ? ' logo-only' : '') + ' reveal ' + delay + '" data-ord="' + idx + '" title="' + (p.name || "") + '">' +
      '<div class="pl-frame">' + logo + '</div>' +
      (logoOnly ? '' :
        ('<div class="pl-name">' + (p.name || "") + '</div>' +
         '<div class="pl-kind">' + (p.kind || "") + (p.note ? ' · ' + p.note : '') + '</div>')) +
    '</div>'
  );
}

/* ---- render press card ---- */
function pressCard(p, i, realIdx) {
  var idx = (realIdx == null) ? i : realIdx;
  var delay = ["", "d1", "d2"][i % 3];
  return (
    '<a class="press-card reveal ' + delay + '" data-ord="' + idx + '" href="' + p.link + '" target="_blank" rel="noopener" style="text-decoration:none;">' +
      '<div class="press-thumb figure" style="aspect-ratio:16/10;margin:-38px -32px 4px;border-bottom:1px solid var(--line-soft);">' +
        slotImg("press:" + idx, p.u, 750, p.outlet) +
      '</div>' +
      '<div class="outlet">' + p.outlet + '</div>' +
      '<p class="quote">' + p.quote + '</p>' +
      '<div class="foot"><span>' + p.tag + '</span><span>' + p.yr + ' ↗</span></div>' +
    '</a>'
  );
}

/* ============================================================
   DETAIL LIGHTBOX ENGINE
   ============================================================ */
var __lb = { coll: null, idx: 0, list: [] };

function __lbSpec(k, v, cls) {
  if (!v) return "";
  return '<div class="lb-spec"><span class="k">' + k + '</span><span class="v ' + (cls || "") + '">' + v + '</span></div>';
}

/* Detect video type and build markup: YouTube/Vimeo embed, native <video>
   file (incl. uploaded data: or local videos/ path), or external link. */
function videoMarkup(url) {
  if (!url) return null;
  var yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{6,})/);
  if (yt) return { type:"embed", html:'<iframe src="https://www.youtube.com/embed/' + yt[1] + '" title="Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:100%;height:100%;border:0;"></iframe>' };
  var vm = url.match(/vimeo\.com\/(\d+)/);
  if (vm) return { type:"embed", html:'<iframe src="https://player.vimeo.com/video/' + vm[1] + '" title="Video" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;border:0;"></iframe>' };
  if (/\.(mp4|webm|ogg|ogv|mov|m4v)(\?|#|$)/i.test(url) || url.indexOf("data:video") === 0) {
    return { type:"file", html:'<video controls preload="metadata" playsinline style="width:100%;height:100%;object-fit:contain;background:#000;"><source src="' + url + '">Your browser does not support the video tag.</video>' };
  }
  return { type:"link", url:url };
}

/* Returns {embed:html} for inline players, or {link:url} for external video pages */
function __lbVideo(url) {
  if (!url) return null;
  var yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{6,})/);
  if (yt) return { embed: '<iframe src="https://www.youtube.com/embed/' + yt[1] + '" title="Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:100%;height:100%;border:0;"></iframe>' };
  var vm = url.match(/vimeo\.com\/(\d+)/);
  if (vm) return { embed: '<iframe src="https://player.vimeo.com/video/' + vm[1] + '" title="Video" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;border:0;"></iframe>' };
  return { link: url };
}

/* Build a gallery (stage + thumb strip) for exhibition slides */
function __lbGallery(slides, active) {
  active = active || 0;
  var s = slides[active];
  var stage = s.video ? '<div class="lb-video">' + s.video + '</div>' : '<img src="' + s.img + '" alt="" />';
  var thumbs = "";
  if (slides.length > 1) {
    thumbs = '<div class="lb-thumbs">' + slides.map(function (sl, i) {
      var inner = sl.video ? '<span class="play">▶</span>' : '<img src="' + sl.img + '" alt="" />';
      return '<button class="lb-thumb' + (i === active ? ' active' : '') + '" data-gi="' + i + '">' + inner + '</button>';
    }).join("") + '</div>';
  }
  return '<div class="lb-gallery"><div class="lb-stage">' + stage + '</div>' + thumbs + '</div>';
}

function __lbRender(item, collName) {
  var slotMap = { abstract: "art", crystal: "crystal", projects: "proj" };
  var mainSlot = (slotMap[collName] || "art") + ":" + __lb.idx;
  __lb.slides = null;
  var fig = '<img loading="lazy" src="' + slotSrc(mainSlot, item.u, 1600) + '" alt="' + item.t + '" />';
  var eyebrow, specs = "", desc = item.desc || "", actions, title = item.t;

  if (collName === "projects") {
    eyebrow = "Exhibition &amp; Live Performance";
    specs = __lbSpec("Year", item.yr) + __lbSpec("Venue", item.sub);
    if (!desc) desc = "A private exhibition and live performance — part of Richie Tan's 2023–2025 showing season. Full details available on enquiry.";
    var slides = [];
    var vid = __lbVideo(item.video);
    if (vid && vid.embed) slides.push({ video: vid.embed });
    slides.push({ img: slotSrc(mainSlot, item.u, 1600) });
    var extra = item.gallery || item.imgs || [];
    extra.forEach(function (u) { slides.push({ img: img(u, 1600) }); });
    __lb.slides = slides;
    fig = __lbGallery(slides);
    actions =
      (vid && vid.link ? '<a href="' + vid.link + '" target="_blank" rel="noopener" class="btn ghost">Watch the Performance ↗</a>' : "") +
      '<a href="contact.html?artwork=' + encodeURIComponent("Exhibition — " + item.t) + '" class="btn solid">Enquire About This Exhibition <span class="arrow">→</span></a>';
  } else if (collName === "crystal") {
    eyebrow = item.artist || "Crystal Abstract";
    var cls = statusClass(item.status);
    specs =
      __lbSpec("Medium", "Crystal &amp; Mixed Media") +
      __lbSpec("Dimensions", item.size) +
      __lbSpec("Year", item.y) +
      __lbSpec("Status", item.status, cls === "sold" ? "sold" : "avail");
    actions =
      '<a href="contact.html?artwork=' + encodeURIComponent(item.t) + '" class="btn solid">Enquire on This Work <span class="arrow">→</span></a>';
  } else {
    /* abstract */
    eyebrow = "Original Artwork" + (item.badge ? " · " + item.badge : "");
    var c2 = statusClass(item.status);
    specs =
      __lbSpec("Year", item.y) +
      __lbSpec("Medium", item.medium || "Acrylic &amp; Mixed Media on Canvas") +
      __lbSpec("Dimensions", item.size) +
      __lbSpec("Status", item.status, c2 === "sold" ? "sold" : "avail") +
      __lbSpec("Price", item.price, c2 === "sold" ? "sold" : "") +
      __lbSpec("Provenance", item.note);
    actions =
      (c2 === "sold"
        ? '<span class="lb-count">This work has been sold — enquire about similar pieces.</span>'
        : "") +
      '<a href="contact.html?artwork=' + encodeURIComponent(item.t + (item.y ? ", " + item.y : "")) + '" class="btn solid">Enquire on This Work <span class="arrow">→</span></a>';
  }

  return (
    '<button class="lb-close" aria-label="Close">×</button>' +
    '<button class="lb-nav prev" aria-label="Previous">‹</button>' +
    '<button class="lb-nav next" aria-label="Next">›</button>' +
    '<div class="lb-shell">' +
      '<div class="lb-figure">' + fig + '</div>' +
      '<div class="lb-body">' +
        '<div class="lb-eyebrow">' + eyebrow + '</div>' +
        '<h2 class="lb-title">' + title + '</h2>' +
        (specs ? '<div class="lb-specs">' + specs + '</div>' : "") +
        (desc ? '<p class="lb-desc">' + desc + '</p>' : "") +
        '<div class="lb-actions">' + actions +
          '<span class="lb-count">' + (__lb.idx + 1) + " / " + __lb.list.length + '</span>' +
        '</div>' +
      '</div>' +
    '</div>'
  );
}

function __lbShow() {
  var el = document.getElementById("lightbox");
  var item = __lb.list[__lb.idx];
  if (!item) return;
  el.innerHTML = __lbRender(item, __lb.coll);
  el.querySelector(".lb-close").addEventListener("click", __lbClose);
  el.querySelector(".lb-nav.prev").addEventListener("click", function (e) { e.stopPropagation(); __lbGo(-1); });
  el.querySelector(".lb-nav.next").addEventListener("click", function (e) { e.stopPropagation(); __lbGo(1); });
  // exhibition gallery thumbnails
  if (__lb.slides) {
    el.querySelectorAll(".lb-thumb").forEach(function (t) {
      t.addEventListener("click", function (e) {
        e.stopPropagation();
        var gi = parseInt(t.getAttribute("data-gi"), 10);
        var sl = __lb.slides[gi];
        var stage = el.querySelector(".lb-stage");
        stage.innerHTML = sl.video ? '<div class="lb-video">' + sl.video + '</div>' : '<img src="' + sl.img + '" alt="" />';
        el.querySelectorAll(".lb-thumb").forEach(function (x) { x.classList.remove("active"); });
        t.classList.add("active");
      });
    });
  }
}

function __lbOpen(collName, idx) {
  __lb.coll = collName;
  __lb.list = COLLECTIONS[collName] || [];
  __lb.idx = Math.max(0, Math.min(idx, __lb.list.length - 1));
  __lbShow();
  var el = document.getElementById("lightbox");
  el.classList.add("open");
  document.body.classList.add("lb-lock");
}

function __lbClose() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.classList.remove("lb-lock");
}

function __lbGo(d) {
  if (!__lb.list.length) return;
  __lb.idx = (__lb.idx + d + __lb.list.length) % __lb.list.length;
  __lbShow();
}

function __initLightbox() {
  if (!document.getElementById("lightbox")) {
    var el = document.createElement("div");
    el.className = "lb";
    el.id = "lightbox";
    el.innerHTML = '<div class="lb-scrim"></div>';
    document.body.appendChild(el);
    el.addEventListener("click", function (e) {
      if (e.target.classList.contains("lb-scrim")) __lbClose();
    });
    document.addEventListener("keydown", function (e) {
      if (!el.classList.contains("open")) return;
      if (e.key === "Escape") __lbClose();
      else if (e.key === "ArrowLeft") __lbGo(-1);
      else if (e.key === "ArrowRight") __lbGo(1);
    });
  }
  // delegate clicks from any card/figure carrying data-coll + data-idx
  document.querySelectorAll("[data-coll][data-idx]").forEach(function (node) {
    if (node.__lbBound) return;
    node.__lbBound = true;
    node.addEventListener("click", function (e) {
      if (e.target.closest("a[href]")) return; // let real links work
      e.preventDefault();
      __lbOpen(node.getAttribute("data-coll"), parseInt(node.getAttribute("data-idx"), 10));
    });
  });
}

/* ============================================================
   ADD / REMOVE LAYER (edit mode; saved per browser)
   rt_added_v1[name]   = [ itemObject, ... ]  (appended after base array)
   rt_removed_v1[name] = [ originalIndex, ... ] (hidden from display)
   Combined with order + overrides at render time; base data untouched.
   ============================================================ */
var RT_BASE = {
  "abstract": ABSTRACT, "projects": PROJECTS, "press": PRESS,
  "partners-all": PARTNERS_ALL,
  "portfolio-figurative": PORTFOLIO_FIGURATIVE, "portfolio-abstract": PORTFOLIO_ABSTRACT
};
function RT_added()   { var ls={}; try { ls = JSON.parse(localStorage.getItem("rt_added_v1")   || "{}"); } catch (e) { ls={}; } return RT_mergeBaked("added", ls); }
function RT_removed()  { var ls={}; try { ls = JSON.parse(localStorage.getItem("rt_removed_v1") || "{}"); } catch (e) { ls={}; } return RT_mergeBaked("removed", ls); }
function RT_removedSet(name) { var s = {}; (RT_removed()[name] || []).forEach(function (i) { s[i] = 1; }); return s; }
/* full indexed item list: base + added, with text overrides applied to added too */
function RT_mergedItems(name) {
  var base = RT_BASE[name];
  if (!base) return [];
  var items = base.slice();
  var added = RT_added()[name] || [];
  for (var j = 0; j < added.length; j++) { if (added[j]) items[base.length + j] = added[j]; }
  var ov = RT_loadOverrides();
  for (var i = base.length; i < items.length; i++) {
    if (!items[i]) continue;
    var o = ov[name + ":" + i];
    if (o) { items[i] = Object.assign({}, items[i]); for (var k in o) { if (o.hasOwnProperty(k) && o[k] != null && o[k] !== "") items[i][k] = o[k]; } }
  }
  return items;
}
/* display order = saved order (newest-first default), minus removed, minus holes */
function RT_displayOrder(name, items) {
  var rem = RT_removedSet(name);
  return RT_applyOrder(name, items).filter(function (i) { return items[i] && !rem[i]; });
}

/* ---- mount galleries on whatever containers exist ---- */
function __mountGalleries() {
  RT_applyOverrides();
  var g;
  /* merged abstract drives both the grid AND the lightbox (so added works open) */
  var mAbstract = RT_mergedItems("abstract");
  COLLECTIONS.abstract = mAbstract;

  function render(sel, name, cardFn) {
    var el = document.querySelector(sel);
    if (!el) return;
    var items = RT_mergedItems(name);
    el.setAttribute("data-collname", name);
    el.innerHTML = RT_displayOrder(name, items).map(function (ri, n) { return cardFn(items[ri], n, ri); }).join("");
  }

  render("[data-render=abstract]", "abstract", function (a, n, ri) { return artCard(a, n, "abstract", ri); });
  if ((g = document.querySelector("[data-render=abstract-featured]"))) {
    var feat = [33, 34, 2];
    g.innerHTML = feat.map(function (ri, i) { return artCard(mAbstract[ri], i, "abstract", ri); }).join("");
  }
  if ((g = document.querySelector("[data-render=crystal-crossover]")))
    g.innerHTML = CRYSTAL_CROSSOVER.map(function (a, i) { return crystalRow(a, i, i); }).join("");
  if ((g = document.querySelector("[data-render=crystal-richie]")))
    g.innerHTML = CRYSTAL_RICHIE.map(function (a, i) { return crystalRow(a, i + 1, CRYSTAL_CROSSOVER.length + i); }).join("");
  if ((g = document.querySelector("[data-render=crystal-leina]")))
    g.innerHTML = CRYSTAL_LEINA.map(function (a, i) { return crystalRow(a, i, CRYSTAL_CROSSOVER.length + CRYSTAL_RICHIE.length + i); }).join("");

  render("[data-render=projects]", "projects", function (p, n, ri) { return projectCard(p, n, ri); });
  render("[data-render=press]", "press", function (p, n, ri) { return pressCard(p, n, ri); });
  render("[data-render=portfolio-figurative]", "portfolio-figurative", function (a, n, ri) { return portfolioCard(a, n, ri, "pfig"); });
  render("[data-render=portfolio-abstract]", "portfolio-abstract", function (a, n, ri) { return portfolioCard(a, n, ri, "pabs"); });
  render("[data-render=partners-all]", "partners-all", function (p, n, ri) { return partnerCard(p, n, "pall", ri); });

  __initLightbox();
  if (window.RTArrange) window.RTArrange.scan();

  // re-bind reveals + enquire deep-links created dynamically
  if (window.__bindDynamic) window.__bindDynamic();
}
window.__mountGalleries = __mountGalleries;
function __safeMount() {
  try { __mountGalleries(); }
  catch (e) { setTimeout(function () { try { __mountGalleries(); } catch (_) {} }, 350); }
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", __safeMount);
} else {
  __safeMount();
}
/* BULLETPROOF FALLBACK: if any gallery container is still empty after the page
   has fully loaded (slow network, Netlify timing, etc.), mount again. */
function __remountIfEmpty() {
  var empty = false;
  document.querySelectorAll("[data-render]").forEach(function (el) {
    if (!el.children.length) empty = true;
  });
  if (empty) __safeMount();
}
window.addEventListener("load", function () {
  __remountIfEmpty();
  setTimeout(__remountIfEmpty, 600);
  setTimeout(__remountIfEmpty, 1800);
});
