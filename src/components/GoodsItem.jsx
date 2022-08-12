function GoodsItem(props) {
  const { mainId, displayName, displayDescription, price, image } = props;

  return (
    <div className="card" id={mainId}>
      <div className="card-image">
        <img src={image} alt={displayName} />
        <span className="card-title">{displayName}</span>
      </div>
      <div className="card-content">
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button className="btn">Buy</button>
        <span className="right">{price}</span>
      </div>
    </div>
  );
}
export { GoodsItem };

// {
//   "mainId": "CID_A_379_Athena_Commando_F_VampireHunter",
//   "displayName": "Sorina",
//   "displayDescription": "The darkest shadows fall from moonlight.",
//   "displayType": "Outfit",
//   "mainType": "outfit",
//   "offerId": "v2:/fcb7c66f67c0150a74016257897f6c37c51771e038277efe85d84b75990f6656",
//   "firstReleaseDate": "2022-04-16",
//   "previousReleaseDate": "2022-06-22",
//   "giftAllowed": true,
//   "buyAllowed": true,
//   "price": {
//       "regularPrice": 1400,
//       "finalPrice": 1400
//   },
//   "rarity": {
//       "id": "Rare",
//       "name": "RARE"
//   },
//   "series": null,
//   "banner": {
//       "id": "PickaxeIncluded",
//       "name": "Pickaxe Included!",
//       "intensity": "High"
//   },
//   "offerTag": {
//       "id": "vampirehunter",
//       "text": "Unsheathe the <text color=\"FFFFFFFF\">NIGHTFORGED BLADES</> Pickaxe from its Back Bling when both are equipped!"
//   },
//   "granted": [
//       {
//           "id": "CID_A_379_Athena_Commando_F_VampireHunter",
//           "type": {
//               "id": "outfit",
//               "name": "Outfit"
//           },
//           "name": "Sorina",
//           "description": "The darkest shadows fall from moonlight.",
//           "rarity": {
//               "id": "Rare",
//               "name": "RARE"
//           },
//           "series": null,
//           "images": {
//               "icon": "https://media.fortniteapi.io/images/44c7dda6e225f823975f2511e603fa66/transparent.png",
//               "featured": "https://media.fortniteapi.io/images/44c7dda6e225f823975f2511e603fa66/full_featured.png",
//               "background": "https://media.fortniteapi.io/images/cosmetics/44c7dda6e225f823975f2511e603fa66/v2/background.png",
//               "icon_background": "https://media.fortniteapi.io/images/cosmetics/44c7dda6e225f823975f2511e603fa66/v2/icon_background.png",
//               "full_background": "https://media.fortniteapi.io/images/cosmetics/44c7dda6e225f823975f2511e603fa66/v2/info.en.png"
//           },
//           "video": null,
//           "audio": null,
//           "gameplayTags": [
//               "SoundLibrary.ID.StepType.BootsHeeled",
//               "SoundLibrary.ID.ClothingType.GearTactical",
//               "SoundLibrary.ID.HandType.Glove",
//               "Cosmetics.Filter.Season.20",
//               "Cosmetics.Source.ItemShop",
//               "Cosmetics.Set.RedNight"
//           ],
//           "set": {
//               "id": "RedNight",
//               "name": "Dark Serenity",
//               "partOf": "Part of the Dark Serenity set."
//           }
//       },
//       {
//           "id": "BID_981_VampireHunterFemale",
//           "type": {
//               "id": "backpack",
//               "name": "BackBling"
//           },
//           "name": "Nightforged Blades",
//           "description": "Watch them shimmer in the moonlight... if you dare.",
//           "rarity": {
//               "id": "Rare",
//               "name": "RARE"
//           },
//           "series": null,
//           "images": {
//               "icon": "https://media.fortniteapi.io/images/bee740ae54fe75096627b78ee1673efd/transparent.png",
//               "featured": null,
//               "background": "https://media.fortniteapi.io/images/cosmetics/bee740ae54fe75096627b78ee1673efd/v2/background.png",
//               "icon_background": "https://media.fortniteapi.io/images/cosmetics/bee740ae54fe75096627b78ee1673efd/v2/icon_background.png",
//               "full_background": "https://media.fortniteapi.io/images/cosmetics/bee740ae54fe75096627b78ee1673efd/v2/info.en.png"
//           },
//           "video": null,
//           "audio": null,
//           "gameplayTags": [
//               "Cosmetics.Filter.Season.20",
//               "Cosmetics.Source.ItemShop",
//               "Cosmetics.Set.RedNight"
//           ],
//           "set": {
//               "id": "RedNight",
//               "name": "Dark Serenity",
//               "partOf": "Part of the Dark Serenity set."
//           }
//       },
//       {
//           "id": "Pickaxe_ID_779_VampireHunterFemale1H",
//           "type": {
//               "id": "pickaxe",
//               "name": "Harvesting Tool"
//           },
//           "name": "Nightforged Blades",
//           "description": "Watch them shimmer in the moonlight... if you dare.",
//           "rarity": {
//               "id": "Rare",
//               "name": "RARE"
//           },
//           "series": null,
//           "images": {
//               "icon": "https://media.fortniteapi.io/images/392e1e9e14d613cef135931a046a9417/transparent.png",
//               "featured": null,
//               "background": "https://media.fortniteapi.io/images/cosmetics/392e1e9e14d613cef135931a046a9417/v2/background.png",
//               "icon_background": "https://media.fortniteapi.io/images/cosmetics/392e1e9e14d613cef135931a046a9417/v2/icon_background.png",
//               "full_background": "https://media.fortniteapi.io/images/cosmetics/392e1e9e14d613cef135931a046a9417/v2/info.en.png"
//           },
//           "video": null,
//           "audio": null,
//           "gameplayTags": [
//               "Cosmetics.Pickaxe.DualWield",
//               "Cosmetics.Filter.Season.20",
//               "Cosmetics.Source.ItemShop",
//               "Cosmetics.Set.RedNight"
//           ],
//           "set": {
//               "id": "RedNight",
//               "name": "Dark Serenity",
//               "partOf": "Part of the Dark Serenity set."
//           }
//       }
//   ],
//   "priority": -1,
//   "section": {
//       "id": "Featured",
//       "name": "Featured",
//       "landingPriority": 70
//   },
//   "groupIndex": 0,
//   "storeName": "BRWeeklyStorefront",
//   "tileSize": "Normal",
//   "categories": [
//       "Panel 01"
//   ]
// },
