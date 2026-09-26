import { Certification } from '../types';

export const certificationsData: Certification[] = [
  {
    id: "cert-1",
    title: "Python Certification – Anudip Foundation",
    issuer: "Anudip Foundation",
    issueDate: "Verified",
    credentialId: "ANUDIP-PY-[YOUR-ID]",
    verificationUrl: "https://www.anudip.org/",
    skillsCovered: ["Python", "Data Analysis", "Automation", "Pandas", "Problem Solving", "Programming"],
    badgeColor: "blue",
  },
  {
    id: "cert-2",
    title: "Data Analytics Certification – Anudip Foundation",
    issuer: "Anudip Foundation",
    issueDate: "Verified",
    credentialId: "ANUDIP-DA-[YOUR-ID]",
    verificationUrl: "https://www.anudip.org/",
    skillsCovered: ["Data Analytics", "Excel", "Data Cleaning", "Business Problem Solving", "Reporting"],
    badgeColor: "emerald",
  },
  {
    id: "cert-3",
    title: "My SQL Certification – Anudip Foundation",
    issuer: "Anudip Foundation",
    issueDate: "Verified",
    credentialId: "ANUDIP-MYSQL-[YOUR-ID]",
    verificationUrl: "https://www.anudip.org/",
    skillsCovered: ["MySQL", "SQL Queries", "Database Design", "Joins", "Data Retrieval"],
    badgeColor: "emerald",
  },
];
