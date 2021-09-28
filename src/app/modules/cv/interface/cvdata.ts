export interface CVData {
  full_name:  string;
  position: string;
  email: string;
  description: Description;
  experience: ExpEdu;
  education: ExpEdu;
  skills: Skills;
  languages: Languages;
  social: Profiles;
  icons: [];
}

export interface Description {
  hello: string;
  based: string;
  full: string;
}

export interface ExpEdu {
  title: string;
  items: ExpEduItems[];
}

export interface ExpEduItems {
  title: string;
  location: string;
  position: string;
  period: string;
  description: string[];
}

export interface Skills {
  title: string;
  items: SkillsItems[];
}

export interface SkillsItems {
  title: string;
  items: string[];
}

export interface Languages {
  title: string;
  items: string[];
}

export interface Profiles {
  title: string;
  items: ProfilesItem[];
}

export interface ProfilesItem {
  title: string;
  link: string;
}
