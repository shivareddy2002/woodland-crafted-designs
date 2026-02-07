// Collection cover images
import collectionLivingSocial from "@/assets/collections/collection-living-social.jpg";
import collectionPrivateSleeping from "@/assets/collections/collection-private-sleeping.jpg";
import collectionKitchenDining from "@/assets/collections/collection-kitchen-dining.jpg";
import collectionWorkCreative from "@/assets/collections/collection-work-creative.jpg";
import collectionWellnessRelaxation from "@/assets/collections/collection-wellness-relaxation.jpg";
import collectionUtilitySpecial from "@/assets/collections/collection-utility-special.jpg";

// Living & Social items
import livingRoom from "@/assets/collections/living-room.jpg";
import familyLounge from "@/assets/collections/family-lounge.jpg";
import balconySitout from "@/assets/collections/balcony-sitout.jpg";
import homeTheater from "@/assets/collections/home-theater.jpg";
import barLounge from "@/assets/collections/bar-lounge.jpg";
import gameRoom from "@/assets/collections/game-room.jpg";

// Private & Sleeping items
import masterBedroom from "@/assets/collections/master-bedroom.jpg";
import guestBedroom from "@/assets/collections/guest-bedroom.jpg";
import kidsBedroom from "@/assets/collections/kids-bedroom.jpg";
import walkInCloset from "@/assets/collections/walk-in-closet.jpg";
import spaBathroom from "@/assets/collections/spa-bathroom.jpg";
import readingNook from "@/assets/collections/reading-nook.jpg";

// Kitchen & Dining items
import kitchen from "@/assets/collections/kitchen.jpg";
import diningArea from "@/assets/collections/dining-area.jpg";
import breakfastNook from "@/assets/collections/breakfast-nook.jpg";
import walkInPantry from "@/assets/collections/walk-in-pantry.jpg";
import wineCellar from "@/assets/collections/wine-cellar.jpg";
import outdoorKitchen from "@/assets/collections/outdoor-kitchen.jpg";

// Work & Creative items
import homeOffice from "@/assets/collections/home-office.jpg";
import studyRoom from "@/assets/collections/study-room.jpg";
import techRoom from "@/assets/collections/tech-room.jpg";
import artStudio from "@/assets/collections/art-studio.jpg";
import musicRoom from "@/assets/collections/music-room.jpg";
import workshop from "@/assets/collections/workshop.jpg";

// Wellness & Relaxation items
import bathroom from "@/assets/collections/bathroom.jpg";
import yogaMeditation from "@/assets/collections/yoga-meditation.jpg";
import sunroom from "@/assets/collections/sunroom.jpg";
import spaSauna from "@/assets/collections/spa-sauna.jpg";
import indoorPool from "@/assets/collections/indoor-pool.jpg";
import indoorGarden from "@/assets/collections/indoor-garden.jpg";

// Utility & Special items
import laundryRoom from "@/assets/collections/laundry-room.jpg";
import mudroom from "@/assets/collections/mudroom.jpg";
import storageRoom from "@/assets/collections/storage-room.jpg";
import kidsPlayroom from "@/assets/collections/kids-playroom.jpg";
import petRoom from "@/assets/collections/pet-room.jpg";
import secretRoom from "@/assets/collections/secret-room.jpg";

export interface SpaceItem {
  title: string;
  image: string;
  type: "Core" | "Enhanced";
}

export interface Collection {
  id: string;
  title: string;
  image: string;
  coreSpaces: SpaceItem[];
  enhancedSpaces: SpaceItem[];
}

export const collections: Collection[] = [
  {
    id: "living-social",
    title: "Living & Social Collection",
    image: collectionLivingSocial,
    coreSpaces: [
      { title: "Living Room / Hall", image: livingRoom, type: "Core" },
      { title: "Family Lounge", image: familyLounge, type: "Core" },
      { title: "Balcony / Sit-out", image: balconySitout, type: "Core" },
    ],
    enhancedSpaces: [
      { title: "Home Theater", image: homeTheater, type: "Enhanced" },
      { title: "Bar / Lounge Area", image: barLounge, type: "Enhanced" },
      { title: "Game Room", image: gameRoom, type: "Enhanced" },
    ],
  },
  {
    id: "private-sleeping",
    title: "Private & Sleeping Collection",
    image: collectionPrivateSleeping,
    coreSpaces: [
      { title: "Master Bedroom", image: masterBedroom, type: "Core" },
      { title: "Guest Bedroom", image: guestBedroom, type: "Core" },
      { title: "Kids Bedroom", image: kidsBedroom, type: "Core" },
    ],
    enhancedSpaces: [
      { title: "Walk-in Closet", image: walkInCloset, type: "Enhanced" },
      { title: "Spa Bathroom", image: spaBathroom, type: "Enhanced" },
      { title: "Reading Nook", image: readingNook, type: "Enhanced" },
    ],
  },
  {
    id: "kitchen-dining",
    title: "Kitchen & Dining Collection",
    image: collectionKitchenDining,
    coreSpaces: [
      { title: "Kitchen", image: kitchen, type: "Core" },
      { title: "Dining Area", image: diningArea, type: "Core" },
      { title: "Breakfast Nook", image: breakfastNook, type: "Core" },
    ],
    enhancedSpaces: [
      { title: "Walk-in Pantry", image: walkInPantry, type: "Enhanced" },
      { title: "Wine Cellar", image: wineCellar, type: "Enhanced" },
      { title: "Outdoor Kitchen", image: outdoorKitchen, type: "Enhanced" },
    ],
  },
  {
    id: "work-creative",
    title: "Work & Creative Collection",
    image: collectionWorkCreative,
    coreSpaces: [
      { title: "Home Office", image: homeOffice, type: "Core" },
      { title: "Study Room", image: studyRoom, type: "Core" },
      { title: "Tech Room", image: techRoom, type: "Core" },
    ],
    enhancedSpaces: [
      { title: "Art Studio", image: artStudio, type: "Enhanced" },
      { title: "Music Room", image: musicRoom, type: "Enhanced" },
      { title: "Workshop", image: workshop, type: "Enhanced" },
    ],
  },
  {
    id: "wellness-relaxation",
    title: "Wellness & Relaxation Collection",
    image: collectionWellnessRelaxation,
    coreSpaces: [
      { title: "Bathroom", image: bathroom, type: "Core" },
      { title: "Yoga / Meditation Room", image: yogaMeditation, type: "Core" },
      { title: "Sunroom", image: sunroom, type: "Core" },
    ],
    enhancedSpaces: [
      { title: "Spa / Sauna", image: spaSauna, type: "Enhanced" },
      { title: "Indoor Pool", image: indoorPool, type: "Enhanced" },
      { title: "Indoor Garden", image: indoorGarden, type: "Enhanced" },
    ],
  },
  {
    id: "utility-special",
    title: "Utility & Special Collection",
    image: collectionUtilitySpecial,
    coreSpaces: [
      { title: "Laundry Room", image: laundryRoom, type: "Core" },
      { title: "Mudroom", image: mudroom, type: "Core" },
      { title: "Storage Room", image: storageRoom, type: "Core" },
    ],
    enhancedSpaces: [
      { title: "Kids Playroom", image: kidsPlayroom, type: "Enhanced" },
      { title: "Pet Room", image: petRoom, type: "Enhanced" },
      { title: "Secret Room", image: secretRoom, type: "Enhanced" },
    ],
  },
];
