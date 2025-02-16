export interface Row {
    doctor?: any;
    patient?: string;
    id?: string,
    name?: string,
    name2?: string,
    date?: string,
    payment?: string,
    fees?: string,
    status?: string,
    photo?: string,
    firstName?: string,
    lastName?: string,
    phone?:string
}




export enum TABLE {
    PROFILE_APPOINTMENT = 'PROFILE_APPOINTMENT',
    PROFILE_FINDINGS = 'PROFILE_FINDINGS',
    DASHBOARD_ADMIN = 'DASHBOARD_ADMIN',
    PATIENT_REQUEST = 'PATIENT_REQUEST',
    DASHBOARD_PATIENT = "DASHBOARD_PATIENT",
    PATIENT_NOTIFICATION = "PATIENT_NOTIFICATION"
};