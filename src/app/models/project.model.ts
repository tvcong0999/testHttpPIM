export class Project{
    id: number
    groupId: number
    projectNumber: number
    name: string
    customer: string
    status: Status
    startDate: Date
    finishDate: Date
    employeeIds: Array<number>
}

export enum Status{
    NEW, PLA, INP, FIN
}