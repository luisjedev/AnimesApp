export type Pagination = {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: Items;
};

type Items = {
  count: number;
  total: number;
  per_page: number;
};
