// Auto-generated Supabase types
// Generated on: 2025-04-06T08:20:50.648Z

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      Customers: {
        Row: {
          avatar: string | null;
          createdAt: string;
          fullName: string | null;
          id: string;
          isActive: boolean | null;
          isDeleted: boolean | null;
          note: string | null;
          phoneNumber: string | null;
          updatedAt: string | null;
        };
        Insert: {
          avatar?: string | null;
          createdAt?: string;
          fullName?: string | null;
          id?: string;
          isActive?: boolean | null;
          isDeleted?: boolean | null;
          note?: string | null;
          phoneNumber?: string | null;
          updatedAt?: string | null;
        };
        Update: {
          avatar?: string | null;
          createdAt?: string;
          fullName?: string | null;
          id?: string;
          isActive?: boolean | null;
          isDeleted?: boolean | null;
          note?: string | null;
          phoneNumber?: string | null;
          updatedAt?: string | null;
        };
        Relationships: [];
      };
      MenuCategories: {
        Row: {
          createdAt: string;
          id: string;
          image: string | null;
          isActive: boolean | null;
          isDelete: boolean | null;
          title: string | null;
          updatedAt: string | null;
        };
        Insert: {
          createdAt: string;
          id?: string;
          image?: string | null;
          isActive?: boolean | null;
          isDelete?: boolean | null;
          title?: string | null;
          updatedAt?: string | null;
        };
        Update: {
          createdAt?: string;
          id?: string;
          image?: string | null;
          isActive?: boolean | null;
          isDelete?: boolean | null;
          title?: string | null;
          updatedAt?: string | null;
        };
        Relationships: [];
      };
      Menus: {
        Row: {
          createdAt: string;
          id: string;
          images: Json | null;
          isActive: boolean | null;
          isDeleted: boolean | null;
          menuCategoryId: string | null;
          note: string | null;
          price: number | null;
          updatedAt: string | null;
        };
        Insert: {
          createdAt?: string;
          id?: string;
          images?: Json | null;
          isActive?: boolean | null;
          isDeleted?: boolean | null;
          menuCategoryId?: string | null;
          note?: string | null;
          price?: number | null;
          updatedAt?: string | null;
        };
        Update: {
          createdAt?: string;
          id?: string;
          images?: Json | null;
          isActive?: boolean | null;
          isDeleted?: boolean | null;
          menuCategoryId?: string | null;
          note?: string | null;
          price?: number | null;
          updatedAt?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'Menus_menuCategoryId_fkey';
            columns: ['menuCategoryId'];
            isOneToOne: false;
            referencedRelation: 'MenuCategories';
            referencedColumns: ['id'];
          },
        ];
      };
      OrderMenu: {
        Row: {
          createdAt: string;
          id: string;
          menuId: string | null;
          orderId: string | null;
        };
        Insert: {
          createdAt?: string;
          id?: string;
          menuId?: string | null;
          orderId?: string | null;
        };
        Update: {
          createdAt?: string;
          id?: string;
          menuId?: string | null;
          orderId?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'OrderMenu_menuId_fkey';
            columns: ['menuId'];
            isOneToOne: false;
            referencedRelation: 'Menus';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'OrderMenu_orderId_fkey';
            columns: ['orderId'];
            isOneToOne: false;
            referencedRelation: 'Orders';
            referencedColumns: ['id'];
          },
        ];
      };
      Orders: {
        Row: {
          amount: number | null;
          code: string | null;
          createdAt: string;
          customerName: string | null;
          discount: number | null;
          id: string;
          note: string | null;
          orderMenuId: string | null;
          status: string | null;
          type: string | null;
          updatedAt: string | null;
        };
        Insert: {
          amount?: number | null;
          code?: string | null;
          createdAt?: string;
          customerName?: string | null;
          discount?: number | null;
          id?: string;
          note?: string | null;
          orderMenuId?: string | null;
          status?: string | null;
          type?: string | null;
          updatedAt?: string | null;
        };
        Update: {
          amount?: number | null;
          code?: string | null;
          createdAt?: string;
          customerName?: string | null;
          discount?: number | null;
          id?: string;
          note?: string | null;
          orderMenuId?: string | null;
          status?: string | null;
          type?: string | null;
          updatedAt?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
        PublicSchema['Views'])
    ? (PublicSchema['Tables'] &
        PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema['CompositeTypes']
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes']
    ? PublicSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never;
