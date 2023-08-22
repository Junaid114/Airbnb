import { User } from "../user/User";
import { JsonValue } from "type-fest";
import { Trip } from "../trip/Trip";
import { Wishlist } from "../wishlist/Wishlist";

export type Listing = {
  createdAt: Date;
  id: string;
  listingCreatedby?: User | null;
  location: string;
  locationData: JsonValue;
  mapData: JsonValue;
  photos: JsonValue;
  placeAmenties: JsonValue;
  placeSpace: JsonValue;
  placeType: string;
  trips?: Array<Trip>;
  updatedAt: Date;
  wishlists?: Array<Wishlist>;
};
