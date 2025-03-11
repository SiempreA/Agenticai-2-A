export interface Customer {
  name: string;
  age: number;
  avatarImage: string;
  coverage: boolean;
  memberSince: string;
  customerId: string;
  policyNumber: string;
  currentPlan: string;
  paymentStatus: string;
  alertFlags: string;
  phoneNumber: string;
  email: string;
  lastContacted: string;
  policyExpiration: string;
  claimLimit: number;
}

export interface Assessment {
  label: string;
  state: boolean;
}

export interface Person {
  image: string;
}

export interface Card {
  person: Person;
  title: string;
  assessments: Assessment[];
}

export interface FraudAnalysisProps {
  card: Card;
}
