import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Job } from '../model/job.vm';
import { StateType } from '../model/state.type';
import { Task } from '../model/task.vm';
import { Activity } from '../model/activity.vm';

Injectable()
export class JobService {
    
    private jobs: Job[];

    constructor() {
       this.jobs = this.buildJobs();        
    }

    getJobs(): Observable<Job[]> {
        return of(this.jobs);
    }

    private buildJobs(): Job[] {
        this.buildTasks();
        return [new Job("1234567", "NBPP", this.buildTasks(), "12121221", StateType.Complete),
        new Job("1234567", "NBPP", this.buildTasks(), "12121221", StateType.Complete)];
    }
    
    private buildTasks(): Task[] {
        const task1 = new Task("12345671", "CreateUser", this.buildUserActivities(), "CU123456", "12341234567567", StateType.Complete);
        const task2 = new Task("43215671", "CreateUserLogin", this.buildUserLoginActivities(), "CUL123456", "12345671234567", StateType.Error);
        const task3 = new Task("87345671", "UpdateUserContact", this.buildUpdateUserContactActivities(), "CUC123456", "1234567", StateType.Ready);
        return [task1, task2, task3];
    }

    private buildUserActivities(): Activity[] {
        const activities: Activity[] = [];
        activities.push(new Activity("1122345", "Create User First Name", "CUFN11235123", "12341234567567", StateType.Complete));
        activities.push(new Activity("7676799", "Create User Last Name", "CULN11235123", "12345671234567", StateType.Complete));
        activities.push(new Activity("11245645", "Create User Id", "CUId11235123", "1234121237567", StateType.Complete));
        return activities;
    }

    private buildUserLoginActivities(): Activity[] {
        const activities: Activity[] = [];
        activities.push(new Activity("1121234415", "Create User Login User Name", "CULUN11235123", "12341234567567", StateType.Complete));
        activities.push(new Activity("7676123799", "Create User Login Password", "CULP11235123", "12345671234567", StateType.Error));
        activities.push(new Activity("1113245645", "Trigger Email", "TE311235123", "1234121237567", StateType.Active));
        return activities;
    }

    private buildUpdateUserContactActivities(): Activity[] {
        const activities: Activity[] = [];
        activities.push(new Activity("1122343235", "Update User Contact Address", "UUCA11235123", "12341234567567", StateType.Ready));
        activities.push(new Activity("7674536799", "Create User Contact Mobile", "CUCM11235123", "12345671234567", StateType.Ready));
        return activities;
    }
}