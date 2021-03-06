const { db, Network, Show, Genre } = require("./db");

const connect = async () => {
  try {
    await db.sync({ force: true });

    const CartoonNetwork = await Network.create({
      name: "Cartoon Network",
      channel: 32,
    });

    const Nickelodeon = await Network.create({
      name: "Nickelodeon",
      channel: 33,
    });

    const Disney = await Network.create({
      name: "Disney",
      channel: 31,
    });

    const PepperAnn = await Show.create({
      name: "Pepper Ann",
      rating: "TV-Y7",
    });

    const CowAndChicken = await Show.create({
      name: "Cow and Chicken",
      rating: "TV-Y7",
    });

    const EdEddEddy = await Show.create({
      name: "Ed, Edd n Eddy",
      rating: "TV-Y7",
    });

    const JohnnyBravo = await Show.create({
      name: "Johnny Bravo",
      rating: "TV-Y7",
    });

    const AdventureTime = await Show.create({
      name: "Adventure Time",
      rating: "TV-PG",
    });

    const RegularShow = await Show.create({
      name: "Regular Show",
      rating: "TV-PG",
    });

    const InfinityTrain = await Show.create({
      name: "Infinity Train",
      rating: "TV-PG",
    });

    const AquaTeenHungerForce = await Show.create({
      name: "Aqua Teen Hunger Force",
      rating: "TV-MA",
    });

    const Squidbillies = await Show.create({
      name: "Squidbillies",
      rating: "TV-MA",
    });

    const BobsBurgers = await Show.create({
      name: "Bob's Burgers",
      rating: "TV-MA",
    });

    const Action = await Genre.create({
      name: "ACTION",
    });

    const Mystery = await Genre.create({
      name: "MYSTERY",
    });

    const Adventre = await Genre.create({
      name: "ADVENTURE",
    });

    const Comedy = await Genre.create({
      name: "COMEDY",
    });

    const ComedyGenre = await Genre.findOne({
      where: {
        name: "COMEDY",
      },
    });

    const AdventureTimeShow = await Show.findOne({
      where: {
        name: "Adventure Time",
      },
    });

    await BobsBurgers.addGenre(ComedyGenre); //We created a reference to a genre and added it to a Show
    await Action.addShow(AdventureTimeShow); //We created a reference to a show and added it to a genre

    // Assigns many to many relationships between Shows and Genres
    await CartoonNetwork.addShow(CowAndChicken);
    await CartoonNetwork.addShow(EdEddEddy);
    await CartoonNetwork.addShow(JohnnyBravo);
    await CartoonNetwork.addShow(AdventureTime);
    await CartoonNetwork.addShow(RegularShow);
    await CartoonNetwork.addShow(InfinityTrain);
    await CartoonNetwork.addShow(AquaTeenHungerForce);
    await CartoonNetwork.addShow(Squidbillies);
    await CartoonNetwork.addShow(BobsBurgers);

    await Disney.addShow(PepperAnn);

    await await db.close();
  } catch (error) {
    console.log(error);
  }
};

connect();
