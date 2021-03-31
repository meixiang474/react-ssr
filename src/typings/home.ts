export interface News {
  id: number;
  title: string;
}

export interface GetHomeListAPI {
  data: News[];
  success: boolean;
}

export interface TranslateAPI {
  data: News[];
  success: boolean;
}
