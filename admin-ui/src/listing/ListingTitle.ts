import { Listing as TListing } from "../api/listing/Listing";

export const LISTING_TITLE_FIELD = "location";

export const ListingTitle = (record: TListing): string => {
  return record.location || String(record.id);
};
