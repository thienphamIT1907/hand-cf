export interface AuthContextType {
  isAuthenticated: boolean;
  login?: () => void;
  logout?: () => void;
}

export type MonthsInYear =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';
