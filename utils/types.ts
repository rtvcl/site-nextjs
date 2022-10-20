export interface NotionPageType {
  role: string;
  value: Value;
}

export interface Value {
  id: string;
  version: number;
  type: string;
  properties?: Properties;
  created_time: number;
  last_edited_time: number;
  parent_id: string;
  parent_table: string;
  alive: boolean;
  created_by_table: string;
  created_by_id: string;
  last_edited_by_table: string;
  last_edited_by_id: string;
  space_id: string;
  content?: string[];
  permissions?: Permission[];
}

export interface Permission {
  role: string;
  type: string;
  added_timestamp: number;
}

export interface Properties {
  title: Array<string[]>;
  language?: Array<string[]>;
}
