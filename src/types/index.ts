// import { stringOrDate } from "react-big-calendar";

export type User = {
  uid: string;
};

export type PTEvent = {
  description: string;
  districtId: string;
  endDate: number;
  isVideoConference: boolean;
  name: string;
  schoolId: string;
  startDate: number;
  userId: string;
};

export type PTSchool = {
  address: string;
  districtId: string;
  isHigh: boolean;
  loginCode: string;
  name: string;
  schoolId: string;
  town: string;
};

export type PTNotification = {
  schoolId?: string;
  districId?: string;
  firstName: string;
  isSent: boolean;
  lastName: string;
  message: string;
  notificationType: string;
  pic: string;
  recipients: string[];
  pollKey: string;
  sendDate: number;
  title: string;
  userId: string;
};

export type PTPollQuestionAnswer = {
  count: number;
};

export type PTPollQuestion = {
  answers: PTPollQuestionAnswer[];
  question: string;
  questionOptions: string[];
  questionType: string;
};

export type PTPoll = {
  schoolId?: string;
  districId?: string;
  firstName: string;
  isSent: boolean;
  lastName: string;
  pic: string;
  questions: PTPollQuestion[];
  recipients: string[];
  sendDate: number;
  title: string;
  userId: string;
};

export type PTRosterTeacher = {
  schoolId: string;
  districId: string;
  district: string;
  email: string;
  firstName: string;
  lastName: string;
  grade: string;
  profilePhoto: string;
  school: string;
  subject: string;
};

export type PTRosterParent = {
  associations: string[];
  children: string; // should be a array of ids? But it's a single sting of names sep by commas
  commentsEnabled: boolean;
  districtId: string;
  email: string;
  firstName: string;
  grade: string;
  id: string;
  language: string;
  lastName: string;
  notificationsEnabled: boolean;
  profilePhoto: string;
  schoolId: string;
  videoConferenceEnabled: boolean;
};

export type PTSSL = {
  districtId: string;
  grade: string;
  month: string;
  schoolId: string;
  sender: string;
  subject: string;
  text: string;
  text2: string;
};

export type PTRosterItem = PTRosterParent | PTRosterTeacher;

export interface RegistrationData {
  cancelRegistration: any
}

export interface License {
  name: string;
  docId: string;
  type: string;
  email: string;
  license: string;
}

export interface articData {
  artist_display: string;
   image_id: string;
  title: string;
}
