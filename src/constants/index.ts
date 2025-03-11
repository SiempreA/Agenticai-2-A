import { Customer } from "@/types";

export const mockAnalysisCard = [
  {
    person: {
      image: "../../assets/images/avatar-2.png",
    },
    title: "Fraud Agent",
    assessments: [
      {
        label: "Veracity of photos",
        state: true,
      },
      {
        label: "Matching photos with the description",
        state: true,
      },
      {
        label: "Veracity and status of the license",
        state: true,
      },
    ],
  },
  {
    person: {
      image: "../../assets/images/avatar-3.png",
    },
    title: "Policy Agent",
    assessments: [
      {
        label: "Policies related to the incident",
        state: true,
      },
      {
        label: "Coverage clauses",
        state: true,
      },
      {
        label: "Policy compliance review",
        state: true,
      },
    ],
  },
  {
    person: {
      image: "../../assets/images/avatar-4.png",
    },
    title: "Procedural Agent",
    assessments: [
      {
        label: "Process Optimization",
        state: true,
      },
      {
        label: "Standard Operating Procedures (SOP) Management",
        state: true,
      },
      {
        label: "Regulatory Compliance Enforcement",
        state: true,
      },
    ],
  },
];

export const mockedAnalysisStatus = [
  {
    label: "Fraud Analysis",
    state: true,
  },
  {
    label: "Policy Analysis",
    state: true,
  },
  {
    label: "Rules Analysis",
    state: true,
  },
];

export const claimSummaryList = [
  {
    title: "Vehicle",
    description: "Toyota Sedan (Blue) – License Plate: 987654321",
  },
  {
    title: "Incident",
    description: "Location: Avenue Providencia",
  },
  {
    title: "Applicable Coverages",
    description: "Liability, Collision, Comprehensive, and PIP",
  },
  {
    title: "Estimated Claim Cost",
    description: "$500 (after deductible and coverage adjustments)",
  },
];

export const claimDetails = [
  { label: "POLICYHOLDER", value: "Carlos Client" },
  { label: "SOCIAL NUMBER", value: "987654321" },
  { label: "Address", value: "La Cisterna, Santiago, Chile" },
  { label: "Phone", value: "+56 98876 34556" },
  { label: "INSURER", value: "Insurance Co" },
  { label: "Claim Number", value: "985774433/9883" },
  { label: "Date of Occurrence", value: "January 15 2025" },
  { label: "Claim Type", value: "Collision" },
  {
    label: "Insured Vehicle",
    value: "Toyota Sedan (Blue) – License Plate: 987654321",
  },
];

export const claimSections = [
  {
    title: "1. PURPOSE OF THE AGREEMENT",
    content:
      "This agreement formalizes the activation of the claim under policy 456654321, ensuring the policyholder's rights as established in the active policy, under the terms and conditions previously agreed upon.",
  },
  {
    title: "2. INSURER'S OBLIGATIONS",
    content:
      "The Insurer commits to: Process the indemnity payment or repair within the stipulated policy timeframe, fulfill all legal and contractual obligations, and provide all necessary updates on the claim process to the policyholder.",
  },
  {
    title: "3. POLICYHOLDER'S OBLIGATIONS",
    content:
      "The Policyholder commits to: Submit all required documentation for the claim process, provide truthful information about the incident, and follow the procedures and deadlines established by the Insurer.",
  },
  {
    title: "FORM OF INDEMNITY",
    content:
      "The Insurer will proceed with the claim indemnification according to one of the following options, as stated in the policy: Cash payment of Claim, Vehicle repair at an authorized service center, or Replacement of the insured item with an equivalent.",
  },
  {
    title: "5. GENERAL CONDITIONS",
    content:
      "This agreement becomes effective upon signing by both parties. Any disputes or pending issues shall be resolved as per the policy terms and applicable law. The Policyholder declares that all provided information is true, acknowledging that any fraud will result in the loss of indemnity rights.",
  },
];

export const customer: Customer = {
  name: "Carlos Customer",
  age: 36,
  avatarImage: "../../public/assets/images/avatar-1.png",
  coverage: true,
  memberSince: "December 2023",
  customerId: "9876543",
  policyNumber: "321",
  currentPlan: "Gold Plan | Comprehensive Coverage",
  paymentStatus: "Payments on time",
  alertFlags: "Green | Reliable",
  phoneNumber: "123 4567 987",
  email: "carloscustomer@email.com",
  lastContacted: "Oct 25 - 4PM",
  policyExpiration: "Expires February 2025",
  claimLimit: 65,
};

export const mockedFailAnalysisStatus = [
  {
    label: "Fraud Analysis",
    state: true,
  },
  {
    label: "Policy Analysis",
    state: true,
  },
  {
    label: "Rules Analysis",
    state: true,
  },
];

export const mockFailAnalysisCard = [
  {
    person: {
      image: "../../assets/images/avatar-2.png",
    },
    title: "Fraud Agent",
    assessments: [
      {
        label: "Veracity of photos",
        state: true,
      },
      {
        label: "Matching photos with the description",
        state: true,
      },
      {
        label: "Veracity and status of the license",
        state: false,
      },
    ],
  },
  {
    person: {
      image: "../../assets/images/avatar-3.png",
    },
    title: "Policy Agent",
    assessments: [
      {
        label: "Policies related to the incident",
        state: true,
      },
      {
        label: "Coverage clauses",
        state: true,
      },
      {
        label: "Policy compliance review",
        state: false,
      },
    ],
  },
  {
    person: {
      image: "../../assets/images/avatar-4.png",
    },
    title: "Procedural Agent",
    assessments: [
      {
        label: "Process Optimization",
        state: true,
      },
      {
        label: "Standard Operating Procedures (SOP) Management",
        state: true,
      },
      {
        label: "Regulatory Compliance Enforcement",
        state: true,
      },
    ],
  },
];

export const inconsistencyDetails = {
  description:
    "Customer reported a minor side collision. Submitted a detailed accident report, including damage photos and the claims form for review. Requested updates on claim processing and repair timeline.",
  photos: ["../../assets/images/accident-1.png"],
  actions: [
    "Request new photos that match the description",
    "Request a new claim opening with the correct description of the accident",
  ],
};
