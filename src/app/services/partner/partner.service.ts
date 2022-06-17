import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as businesses from './businesses.json';
import * as partner from './partner.json';
import * as businessGroups from './groups.json';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {
  public partnersId = '';
  //public businesses: any;  // all businesses
  //public partner: any;
  //public partnerTeam: any;
  //public businessDetails: any;
  //public businessGroups: any;
  public isAuthenticated = true;

  constructor(private http: HttpClient) {
    
   }

  errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      //console.error('An error occurred:', error.error.message);
    } else {
      //console.error(`Returned code ${error.status},`+ `Body: ${error.error}`);
    }
    return throwError('Something went wrong. Please try again later.');
  }

  async initUserProfile(pid?: string): Promise<void> {
    try {

      // const data = await capture.json();
      // return this.partner = data;
      } catch (e) {
        console.error(e);
      }
  }

  async getPartnerDetail(): Promise<any> {
    try {
      const data = partner;
      return data.partner;
      } catch (e) {
        console.error(e);
      }
  }


  async getBusinesses(): Promise<any> {
    try {
      const businessList = businesses;
      return businessList.businesses;
    } catch (e) {
      console.error(e);
    }
  }

 
  async getBusinessDetails(id: string, oToken: string, name?: boolean): Promise<any> {
    let getName: string;
    if(name) {
      getName = 'name=true';
    } else {
      getName = '';
    }
    try {
    } catch (e) {
      console.error(e);
    }
  }

  async getBusinessActivity(id: string, oToken: string): Promise<any> {
    try {
    } catch (e) {
      console.error(e);
    }
  }

  async getBusinessStatuses(id: string, oToken: string): Promise<any> {
    try {
    } catch (e) {
      console.error(e);
    }
  }

  async getBusinessReports(id: string, oToken: string): Promise<any> {
    try {
    } catch (e) {
      console.error(e);
    }
  }

  async getBusinessReportStatuses(businessId: string, reportId: string, oToken: string): Promise<any> {
    try {
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  addNewBusiness(businessData: any, oToken: string) {

  }

  async getGroupsCollection(): Promise<any> {
    try {
      const groups = businessGroups;
      return groups.businessGroups;
    } catch (e) {
      console.error(e);
    }
  }

  async getGroupSummary(groupId: string, oToken: string): Promise<any> {
    try {
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  async getGroupDetails(id: string, oToken: string, name?: boolean): Promise<any> {
    let getName: string;
    if(name) {
      getName = 'name=true';
    } else {
      getName = '';
    }
    try {
    } catch (e) {
      console.error(e);
    }
  }

  async getGroupsStatuses(groupId: string, oToken: string): Promise<any> {
    try {
    } catch (e) {
      console.error(e);
      return false;
    }
  }

}
