declare global  {
  interface Technology {
    name: string;
    value: 1 | 2 | 3 | 4 | 5;
  }

  interface Developer {
    name: string;
    title: string;
    phone: string;
    email: string;
    technologies?: Technology[];
    education?: {
      title: string;
      year: number;
    };
    experience: {
      title: string;
      description: string;
      achievements: string[];
      technologies?: Technology[];
    }[];
    projects: {
      title: string;
      description: string;
      links?: string;
      achievements?: string[];
    }[];
  }
}

export {}