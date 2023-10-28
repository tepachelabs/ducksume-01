import {createContext} from "react";

import { developer } from '@/developer';

export const DeveloperContext = createContext<Developer>(developer);