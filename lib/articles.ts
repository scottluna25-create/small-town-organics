export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "why-organic-for-everyday-wellness",
    title: "Why organic still matters for everyday wellness",
    description:
      "Organic is not a trend label. It is a quieter way to eat, clean, and care for your body without a cabinet of unpronounceable extras.",
    date: "2026-08-28",
    readingTime: "6 min",
    content: [
      "Wellness marketing has a volume problem. Every aisle promises a reset, a cleanse, a new protocol. Organic is older and plainer than that. It is a way of growing and making things so the ingredient list stays short and the soil stays alive.",
      "At Small Town Organics we start from a simple bet: most people do not need more products. They need better ones. That usually means food, body care, and daily rituals that skip the synthetic shortcuts when a plant, a fat, or a mineral will do.",
      "Organic certification is a farming standard, not a personality. It limits synthetic pesticides and fertilizers, bans certain additives, and asks growers to treat soil as a living system. You do not have to memorize the rulebook. You only have to notice how different a short ingredient list feels in your kitchen and your bathroom.",
      "Everyday wellness is built in repeats. Breakfast. A bar of soap. The lotion you reach for without thinking. If those repeats are loaded with fragrance blends and preservatives you cannot name, your body keeps a tally even when you do not. Switching the daily stuff to organic is less dramatic than a two-week challenge and more likely to stick.",
      "There is also the place those ingredients come from. Organic farms are asked to rotate crops, feed the soil, and leave room for the insects and birds that industrial rows tend to erase. Buying organic is not a complete answer to climate or labor, but it is a vote for a landscape that still looks like a landscape.",
      "Skeptics are right about one thing: the word gets slapped on junk. An organic cookie is still a cookie. We are not here to sell halo snacks. We are here to make the ordinary things, the ones you actually use, cleaner and more honest.",
      "Start small. Swap one daily item. Read the back of the bottle. If the list is short and you recognize the words, you are already closer to the kind of wellness that does not need a manifesto.",
      "That is the work Small Town Organics is taking on: health, body, and soul, without the noise. Join the list and we will tell you when the first goods are ready.",
    ],
  },
  {
    slug: "body-care-without-the-junk",
    title: "Body care without the junk",
    description:
      "Skin is not a marketing channel. Here is how we think about lotions, soaps, and the long list of extras most bathrooms do not need.",
    date: "2026-08-28",
    readingTime: "6 min",
    content: [
      "Walk the body care aisle and you can feel the copy trying to outrun the formula. Detox. Clinical. 12-step. Most of it is fragrance, foam, and a story. Your skin barrier does not care about the story.",
      "Good body care is boring in the best way. Cleanse without stripping. Moisturize with oils and butters the skin already understands. Skip the glitter, the cloud of synthetic scent, and the preservative cocktail that exists so a bottle can sit in a hot warehouse for two years.",
      "We look for short lists: plant oils, true essential oils used with a light hand, clays, salts, unsweetened hydrosols. Organic matters here because what you put on your skin is not a costume. Some of it absorbs. A lot of it washes into water. Both are reasons to keep the formula quiet.",
      "Fragrance is the usual hiding place. \"Fragrance\" or \"parfum\" on a label can stand in for dozens of compounds a brand never has to name. If you get headaches, itchy patches, or that fake-flower hangover, the bottle is often the culprit. Unscented or botanically scented is not a luxury preference. It is a clearer contract.",
      "You also do not need a different product for every square inch of yourself. A honest soap, a oil or lotion, a balm for dry spots. That is a shelf, not a shrine. We would rather make a few things well than invent a ritual you have to buy into.",
      "When Small Town Organics puts body care on the table, it will follow that rule. Organic where it counts. No junk for shelf life theater. No ingredient you would not want going down the drain in a small town.",
      "Until then, a useful test at home: turn the bottle around. If you cannot picture the ingredients as plants, fats, or minerals, leave it. Your skin has been working longer than the brand has.",
    ],
  },
  {
    slug: "building-a-small-town-organic-brand",
    title: "Building a small-town organic brand",
    description:
      "Why Small Town Organics is starting slow, staying local in spirit, and refusing to fake a catalog before the goods are real.",
    date: "2026-08-28",
    readingTime: "7 min",
    content: [
      "Most new brands launch with a full store, stock photos, and a founding myth written in a rush. We are not doing that. Small Town Organics is a real company with an LLC and a clear lane: organic goods for health, body, and soul. The catalog will show up when the products are honest enough to put our name on.",
      "Small town is not a demographic trick. It is a pace. You know who grew it. You can pronounce what is in it. You do not need a warehouse of SKUs to look legitimate. The badge on this site, a barn and a tree, is the whole argument: rooted, useful, a little quiet.",
      "Starting without a shop is a choice. Empty carts and fake five-star quotes train people to distrust you. We would rather collect a list of people who actually want this, then make the first things for them. If you are on that list, you are not a lead. You are the reason we are doing the slow part right.",
      "Organic supply chains are slower on purpose. Farms do not turn on a dime. Labels have to mean something. We would rather miss a launch date than ship a bottle that only looks the part. That is the small-town version of quality control: you might run into the person who made it.",
      "Health, body, and soul is the map, not a slogan we tested. Health is what you take in. Body is what you put on. Soul is the slower stuff, the rituals and rooms that make a house feel like it belongs to living people. The first products will sit in those three rooms. They will not try to be everything.",
      "Scott Luna founded the company because that map felt missing from a lot of \"wellness\" that had gotten loud and expensive. We are still early. That is the truth. Early is a good time to write things down, to pick a badge, to ask people to wait with us instead of buying a placeholder.",
      "If you grew up around farms, church basements, or a Main Street that still had a hardware store, you already know the standard. Do not overpromise. Do not coat it in gold. Make it well and show up again next week.",
      "That is the brand. When the first goods are ready, this site will sell them. Until then, it will tell the truth, rank for the right searches, and keep a place for you on the list.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
