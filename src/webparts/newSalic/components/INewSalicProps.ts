import {WebPartContext} from '@microsoft/sp-webpart-base';  

export interface INewSalicProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;

  name: string;  
  serverRelativeURL: string;  
  context: WebPartContext; 
}

