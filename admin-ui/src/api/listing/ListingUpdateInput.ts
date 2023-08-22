import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TripUpdateManyWithoutListingsInput } from "./TripUpdateManyWithoutListingsInput";
import { WishlistUpdateManyWithoutListingsInput } from "./WishlistUpdateManyWithoutListingsInput";

export type ListingUpdateInput = {
  listingCreatedby?: UserWhereUniqueInput | null;
  location?: string;
  locationData?: InputJsonValue;
  mapData?: InputJsonValue;
  photos?: InputJsonValue;
  placeAmenties?: InputJsonValue;
  placeSpace?: InputJsonValue;
  placeType?: string;
  trips?: TripUpdateManyWithoutListingsInput;
  wishlists?: WishlistUpdateManyWithoutListingsInput;
};
