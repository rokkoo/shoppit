export type ListItem = { title: string; id: string; checked: boolean };

export type List = {
  id: string;
  title: string;
  description?: string;
  elements: ListItem[];
};
