import { SortOrder } from "../../util/SortOrder";

export type ListingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  listingCreatedbyId?: SortOrder;
  location?: SortOrder;
  locationData?: SortOrder;
  mapData?: SortOrder;
  photos?: SortOrder;
  placeAmenties?: SortOrder;
  placeSpace?: SortOrder;
  placeType?: SortOrder;
  updatedAt?: SortOrder;
};
