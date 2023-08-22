import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TripCreateNestedManyWithoutListingsInput } from "./TripCreateNestedManyWithoutListingsInput";
import { WishlistCreateNestedManyWithoutListingsInput } from "./WishlistCreateNestedManyWithoutListingsInput";

export type ListingCreateInput = {
  listingCreatedby?: UserWhereUniqueInput | null;
  location: string;
  locationData: InputJsonValue;
  mapData: InputJsonValue;
  photos: InputJsonValue;
  placeAmenties?: InputJsonValue;
  placeSpace: InputJsonValue;
  placeType: string;
  trips?: TripCreateNestedManyWithoutListingsInput;
  wishlists?: WishlistCreateNestedManyWithoutListingsInput;
};
